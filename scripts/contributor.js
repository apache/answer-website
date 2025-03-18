// Get contributor information of github repository

var fs = require('fs');
var path = require('path');
var TeamJson = require('../static/data/team.json');

var outputFile = path.resolve(__dirname, '../static/data/team.json');
var teamAvatarDir = path.resolve(__dirname, '../static/img/team');

// ignore PMC and committers members
var ignoreList = [];
TeamJson.forEach(function(u) {
  if (u.type === 'pmc' || u.type === 'committer') {
    u.users.forEach(function(user) {
      ignoreList.push(user.name);
    });
  }
});

console.log('ignoreList', ignoreList);

// all repo urls
var repositoryUrls = [
  'https://api.github.com/repos/apache/answer/contributors?page=%d&per_page=100',
  'https://api.github.com/repos/apache/answer-plugins/contributors?page=%d&per_page=100',
  'https://api.github.com/repos/apache/answer-website/contributors?page=%d&per_page=100',
];

var allContributors = [];

function fetchContributors() {
  var promises = repositoryUrls.map(function(url, index) {
    return fetchPagedContributors(url, index, 1, []);
  });

  return Promise.all(promises).then(function(results) {
    // filter duplicate contributors
    var uniqueContributors = [];
    allContributors.forEach(function(contributor) {
      var existingContributor = uniqueContributors.find(function(c) {
        return c.name === contributor.name;
      });
      if (!existingContributor) {
        uniqueContributors.push(contributor);
      }
    });

    // Sort by name field
    uniqueContributors.sort(function(a, b) {
      return a.name.localeCompare(b.name);
    });

    // read existing data from team.json
    var existingData = fs.readFileSync(outputFile, 'utf8');
    var jsonData = JSON.parse(existingData);
    jsonData[2].count = uniqueContributors.length;
    jsonData[2].users = uniqueContributors;

    // save data to team.json
    fs.writeFile(outputFile, JSON.stringify(jsonData, null, 2), function(err) {
      if (err) {
        console.error('write file err:', err);
      }
    });
  });
}

function fetchPagedContributors(url, index, page, currentResults) {
  return fetch(url.replace('%d', page))
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      // Add the newly fetched data to currentResults
      var newResults = currentResults.concat(
        data.map(function(contributor) {
          return {
            name: contributor.login,
            github: contributor.html_url,
            avatar: contributor.avatar_url,
          };
        }).filter(function(contributor) {
          return !ignoreList.includes(contributor.name);
        })
      );

      // If the returned data length is equal to 100, continue to request the next page
      if (data.length === 100) {
        return fetchPagedContributors(url, index, page + 1, newResults);
      } else {
        // Add the final newResults to the allContributors array.
        allContributors = allContributors.concat(newResults);
        return newResults;
      }
    });
}

saveAvatars('pmc');
saveAvatars('committer');

// 根据 MIME 类型获取文件扩展名
function getExtensionFromMimeType(mimeType) {
  var mimeToExtension = {
    'image/jpeg': 'jpg',
    'image/png': 'png',
    'image/gif': 'gif',
    'image/webp': 'webp',
    'image/svg+xml': 'svg',
  };

  return mimeToExtension[mimeType] || 'jpg';
}

// save avatars
async function saveAvatars(type) {
  const dataType = TeamJson.find((item) => item.type ===  type);
  const users = dataType.users;
  for (const user of users) {
    try {
      const avatarUrl = user.avatar;

      const response = await fetch(avatarUrl);
      if (!response.ok) {
        throw new Error(`Failed to fetch ${avatarUrl}: ${response.statusText}`);
      }
      const contentType = response.headers.get('content-type');
      // According to Content-Type to get extension
      const extension = getExtensionFromMimeType(contentType);

      const avatarName = `${user.name}.${extension}`;
      const savePath = path.join(teamAvatarDir, avatarName);
      const arrayBuffer = await response.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      fs.writeFileSync(savePath, buffer);
      // 更新 avatar2 字段为相对路径
      user.avatar_local = `/img/team/${avatarName}`;

      console.log(`Saved avatar for ${user.name} to ${savePath}`);
    } catch (error) {
      console.error(`Failed to save avatar for ${user.name}:`, error.message);
    }
  }
  TeamJson = TeamJson.map((item) => {
    if (item.type === type) {
      return {
        ...item,
        users,
      };
    }
    return item;
  });
  fs.writeFileSync(outputFile, JSON.stringify(TeamJson, null, 2));
}

saveAvatars('pmc');
saveAvatars('committer');

// fetchContributors();
