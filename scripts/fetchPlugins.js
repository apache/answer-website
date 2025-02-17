var fs = require('fs');
var path = require('path');


var url = 'https://raw.githubusercontent.com/apache/answer-plugins/main/plugins_desc.json';
var outputPath = path.join(__dirname, '../static/data/plugin.json');

function fetchPlugins() {
  fetch(url)
    .then(function(response) {
      if (!response.ok) {
        throw new Error('HTTP error! status:', response.status);
      }
      return response.text();
    })
    .then(function(data) {
      fs.mkdirSync(path.dirname(outputPath), { recursive: true });
      fs.writeFileSync(outputPath, data, 'utf8');
      console.log('Data fetched and saved to', outputPath);
    })
    .catch(function (error) {
      console.error('Error fetching data:', error.message);
    });
}

fetchPlugins();
