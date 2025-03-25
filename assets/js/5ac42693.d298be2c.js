"use strict";(self.webpackChunkanswer=self.webpackChunkanswer||[]).push([[5047],{59282:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>h});var t=a(43010),n=a(90887);const r={slug:"/how-to-release"},i="How to Release",o={id:"contributing/how-to-release",title:"How to Release",description:"All Apache projects are required to follow the Apache Release Policy. This guide is intended to help you understand the policy and how to release projects at Apache.",source:"@site/community/contributing/how-to-release.md",sourceDirName:"contributing",slug:"/how-to-release",permalink:"/community/how-to-release",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/answer-website/edit/main/community/contributing/how-to-release.md",tags:[],version:"current",lastUpdatedBy:"dashuai",lastUpdatedAt:1742894882,formattedLastUpdatedAt:"Mar 25, 2025",frontMatter:{slug:"/how-to-release"},sidebar:"community",previous:{title:"Blog Post",permalink:"/community/blog-post"}},l={},h=[{value:"Release Process",id:"release-process",level:2},{value:"Create a GPG key",id:"create-a-gpg-key",level:2},{value:"Upload the release artifacts to the dev Apache SVN",id:"upload-the-release-artifacts-to-the-dev-apache-svn",level:2},{value:"Create a RC tag",id:"create-a-rc-tag",level:3},{value:"Sign the release artifacts",id:"sign-the-release-artifacts",level:3},{value:"Create the checksums for the release artifacts",id:"create-the-checksums-for-the-release-artifacts",level:3},{value:"Upload to the svn repository",id:"upload-to-the-svn-repository",level:3},{value:"Verify the release artifacts",id:"verify-the-release-artifacts",level:2},{value:"How to verify the signatures",id:"how-to-verify-the-signatures",level:3},{value:"How to verify the checksums",id:"how-to-verify-the-checksums",level:3},{value:"Start a vote",id:"start-a-vote",level:2},{value:"Dev Mailing List Vote Template",id:"dev-mailing-list-vote-template",level:3},{value:"Voting Timeout Situation",id:"voting-timeout-situation",level:2},{value:"Migration candidate to the release Apache SVN",id:"migration-candidate-to-the-release-apache-svn",level:2},{value:"Create a release",id:"create-a-release",level:2},{value:"Update the Download page",id:"update-the-download-page",level:2},{value:"Announce the vote result and release.",id:"announce-the-vote-result-and-release",level:2},{value:"email template",id:"email-template",level:3}];function c(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",input:"input",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"how-to-release",children:"How to Release"}),"\n",(0,t.jsxs)(s.p,{children:["All Apache projects are required to follow the ",(0,t.jsx)(s.a,{href:"https://www.apache.org/legal/release-policy.html",children:"Apache Release Policy"}),". This guide is intended to help you understand the policy and how to release projects at Apache."]}),"\n",(0,t.jsx)(s.h2,{id:"release-process",children:"Release Process"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:"Create a GPG key if you don't have one."}),"\n",(0,t.jsx)(s.li,{children:"Create a RC tag in the git repository and write the release notes."}),"\n",(0,t.jsx)(s.li,{children:"Upload release artifacts to the dev Apache SVN."}),"\n",(0,t.jsx)(s.li,{children:"Verify the release artifacts."}),"\n",(0,t.jsx)(s.li,{children:"Start a vote."}),"\n",(0,t.jsx)(s.li,{children:"Migration candidate to the release Apache SVN."}),"\n",(0,t.jsx)(s.li,{children:"Create a release."}),"\n",(0,t.jsx)(s.li,{children:"Update the Download page."}),"\n",(0,t.jsx)(s.li,{children:"Announce the vote result and release."}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"create-a-gpg-key",children:"Create a GPG key"}),"\n",(0,t.jsxs)(s.p,{children:["Create a GPG key if you don't have one. You can follow the instructions ",(0,t.jsx)(s.a,{href:"https://www.apache.org/dev/openpgp.html",children:"here"}),"."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:'# create a GPG key\n$ gpg --full-generate-key\n\n# list the GPG keys\n$ gpg  --keyid-format SHORT --list-keys\n\n# upload the GPG key to the key server, xxx is the GPG key id\n$ gpg --keyserver keyserver.ubuntu.com --send-key xxx\n\n# append the GPG key to the KEYS file the svn repository\n$ svn co https://dist.apache.org/repos/dist/release/answer/\n$ (gpg --list-sigs xxx@apache.org && gpg --export --armor xxx@apache.org) >> KEYS\n$ svn ci -m "add gpg key" \n'})}),"\n",(0,t.jsx)(s.h2,{id:"upload-the-release-artifacts-to-the-dev-apache-svn",children:"Upload the release artifacts to the dev Apache SVN"}),"\n",(0,t.jsx)(s.h3,{id:"create-a-rc-tag",children:"Create a RC tag"}),"\n",(0,t.jsxs)(s.p,{children:["When you want to release a new version, you need to create a new RC tag in the git repository firstly. The tag name should be ",(0,t.jsx)(s.code,{children:"v{release-version}-RC{rc-version}"}),". This has the advantage of avoiding tag deletion."]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"release-version: The version you want to release, such as 1.2.0."}),"\n",(0,t.jsx)(s.li,{children:"rc-version: The release candidate version, such as RC1."}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:'$ git tag -a v{release-version}-RC{rc-version} -m "Release Apache Answer {release-version}"\n$ git push origin v{release-version}-RC{rc-version}\n'})}),"\n",(0,t.jsxs)(s.p,{children:["After pushing the RC tag, CI will automatically generate the release page based on the tag. write the release notes in the release page. remember to select ",(0,t.jsx)(s.code,{children:"Set as a pre-release"})," before clicking ",(0,t.jsx)(s.code,{children:"Publish release"}),"."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"release page",src:a(80173).Z+"",width:"586",height:"128"})}),"\n",(0,t.jsxs)(s.p,{children:["The release notes should choose a tag that is not the branch, such as ",(0,t.jsx)(s.code,{children:"v1.2.0-RC1"}),"."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"release notes",src:a(8597).Z+"",width:"938",height:"910"})}),"\n",(0,t.jsx)(s.h3,{id:"sign-the-release-artifacts",children:"Sign the release artifacts"}),"\n",(0,t.jsxs)(s.p,{children:["Sign the release artifacts with the GPG key. ",(0,t.jsx)(s.strong,{children:"Be careful to check that the binary file is complete to avoid a size of 0."})]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"# sign the release artifacts, xxxx is xxx@apache.org\n$ for i in *.tar.gz; do echo $i; gpg --local-user xxxx --armor --output $i.asc --detach-sig $i ; done\n"})}),"\n",(0,t.jsx)(s.h3,{id:"create-the-checksums-for-the-release-artifacts",children:"Create the checksums for the release artifacts"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"# create the checksums\n$ for i in *.tar.gz; do echo $i; sha512sum  $i > $i.sha512 ; done\n"})}),"\n",(0,t.jsx)(s.h3,{id:"upload-to-the-svn-repository",children:"Upload to the svn repository"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"NOTICE"})," The repository address where the GPG key is created and the prepository address where the release artifacts are uploaded are not the same. The GPG key is uploaded to the ",(0,t.jsx)(s.code,{children:"https://dist.apache.org/repos/dist/release/answer/"})," repository, and the release artifacts are uploaded to the ",(0,t.jsx)(s.code,{children:"https://dist.apache.org/repos/dist/dev/answer/"})," repository."]}),"\n"]}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["Create a directory for the release artifacts in the svn repository.","\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"$ svn co https://dist.apache.org/repos/dist/dev/answer/\n"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["Upload the release artifacts to the svn repository.","\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"$ cp /path/to/release/artifacts/* ./{release-version}/\n$ svn add ./{release-version}/*\n"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["release-version format: 1.2.0","\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:'$ svn commit -m "add Apache Answer release artifacts for {release-version}"\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["The release artifacts should be uploaded to the ",(0,t.jsx)(s.code,{children:"https://dist.apache.org/repos/dist/dev/answer/{release-version}"})," directory."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"IMPORTANT"})," After completion, visit the link ",(0,t.jsx)(s.code,{children:"https://dist.apache.org/repos/dist/dev/answer/{release-version}"})," to check whether the file upload is correct."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"correct result",src:a(8779).Z+"",width:"1192",height:"513"})}),"\n",(0,t.jsx)(s.h2,{id:"verify-the-release-artifacts",children:"Verify the release artifacts"}),"\n",(0,t.jsx)(s.p,{children:"Following is the basic check items for the release artifacts."}),"\n",(0,t.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Download links are valid."]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Checksums and PGP signatures are valid."]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Source code distributions have correct names matching the current release."]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","LICENSE and NOTICE files are correct for each Apache Answer repo."]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","All files have license headers if necessary."]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","No unlicensed compiled archives bundled in source archive."]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"how-to-verify-the-signatures",children:"How to verify the signatures"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"# download KEYS\n$ curl https://downloads.apache.org/answer/KEYS > KEYS\n\n# import KEYS and trust the key, please replace the email address with the one you want to trust.\n$ gpg --import KEYS\n$ gpg --edit-key linkinstar@apache.org\ngpg> trust\ngpg> 5\ngpg> y\ngpg> quit\n\n# enter the directory where the release artifacts are located\n$ cd /path/to/release/artifacts\n\n# verify the signature\n$ for i in *.tar.gz; do echo $i; gpg --verify $i.asc $i ; done\n\n# if you see 'Good signature' in the output, it means the signature is valid.\n"})}),"\n",(0,t.jsx)(s.h3,{id:"how-to-verify-the-checksums",children:"How to verify the checksums"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"# verify the checksums\n$ for i in *.tar.gz; do echo $i; sha512sum --check  $i.sha512; done\n"})}),"\n",(0,t.jsx)(s.h2,{id:"start-a-vote",children:"Start a vote"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"Apache Answer has graduated from incubation and only needs to be voted by the community"}),"\n"]}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["The Apache Answer community votes, send a voting email to ",(0,t.jsx)(s.code,{children:"dev@answer.apache.org"}),". PMC needs to check the correctness of the version according to the document before voting."]}),"\n",(0,t.jsx)(s.li,{children:"After at least 72 hours and counting 3 +1 PMC member votes, you can enter the next stage."}),"\n",(0,t.jsxs)(s.li,{children:["Announce the voting result, and send the voting result email to ",(0,t.jsx)(s.code,{children:"dev@answer.apache.org"}),"."]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"dev-mailing-list-vote-template",children:"Dev Mailing List Vote Template"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"[VOTE] Release Apache Answer {release-version}\n\nHello Apache Answer Community,\n\n    This is a call for vote to release Apache Answer version {release-version}.\n\n    The release candidates:\n    https://dist.apache.org/repos/dist/dev/answer/{release-version}\n\n    Release notes:\n    https://github.com/apache/answer/releases/tag/{release-version}\n\n    Git tag for the release:\n    https://github.com/apache/answer/releases/tag/{release-version}\n\n    Git commit id for the release:\n    https://github.com/apache/answer/commit/{commit-hash}\n\n    Keys to verify the Release Candidate:\n    https://downloads.apache.org/answer/KEYS\n\n    Keys to verify the Release Candidate:\n    The artifacts signed with PGP key [{key-id}], corresponding to [{email}], that can be found in keys file:\n    https://dist.apache.org/repos/dist/release/answer/KEYS\n\n    The vote will be open for at least 72 hours or until the necessary number of votes are reached.\n\n    Please vote accordingly:\n\n    [ ] +1 approve\n    [ ] +0 no opinion\n    [ ] -1 disapprove with the reason\n\n    Checklist for reference:\n\n    [ ] Download links are valid.\n    [ ] Checksums and PGP signatures are valid.\n    [ ] Source code distributions have correct names matching the current release.\n    [ ] LICENSE and NOTICE files are correct for each Answer repo.\n    [ ] All files have license headers if necessary.\n    [ ] No unlicensed compiled archives bundled in source archive.\n\n    To compile from the source, please refer to:\n\n    https://github.com/apache/answer#building-from-source\n\nThanks,\n<YOUR NAME>\n"})}),"\n",(0,t.jsx)(s.h2,{id:"voting-timeout-situation",children:"Voting Timeout Situation"}),"\n",(0,t.jsxs)(s.p,{children:["If the vote has been pending for more than 72 hours without reaching the required number of votes, you can send the following reminder email to ",(0,t.jsx)(s.a,{href:"mailto:dev@answer.apache.org",children:"dev@answer.apache.org"}),":"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"Dear PMC Members,\n\nApache Answer version {release-version} has been pending for voting for more\nthan 72 hours. If any PMC member is available, please help us get the\nballot completed. Currently, we are still missing +1 binding vote to\nfinalize the process.\n\nhttps://lists.apache.org/thread/{thread-id}\n\nBest regards,\n<YOUR NAME>\n"})}),"\n",(0,t.jsx)(s.p,{children:"If there is still no response after the reminder to the dev mailing list, you should send private emails to the project mentors requesting their vote. This helps ensure timely processing of the release vote."}),"\n",(0,t.jsx)(s.h2,{id:"migration-candidate-to-the-release-apache-svn",children:"Migration candidate to the release Apache SVN"}),"\n",(0,t.jsxs)(s.p,{children:["Before announcing the vote result, you need to migrate the release artifacts from the dev Apache SVN to the release Apache SVN. The release artifacts should be uploaded to the ",(0,t.jsx)(s.code,{children:"https://dist.apache.org/repos/dist/release/answer/{release-version}"})," directory."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:'$ svn mv https://dist.apache.org/repos/dist/dev/answer/{release-version} https://dist.apache.org/repos/dist/release/answer/{release-version} -m "transfer packages for answer {release-version}"\n'})}),"\n",(0,t.jsx)(s.h2,{id:"create-a-release",children:"Create a release"}),"\n",(0,t.jsx)(s.p,{children:"After the vote is passed, create a tag without RC, CI will automatically generate the release page based on the tag."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:'$ git tag -a v{release-version} -m "Release Apache Answer {release-version}"\n$ git push origin v{release-version}\n'})}),"\n",(0,t.jsx)(s.h2,{id:"update-the-download-page",children:"Update the Download page"}),"\n",(0,t.jsxs)(s.p,{children:["Update the download page with the new release version. The download page is located in the ",(0,t.jsx)(s.code,{children:"src/pages/download.tsx"})," file."]}),"\n",(0,t.jsx)(s.h2,{id:"announce-the-vote-result-and-release",children:"Announce the vote result and release."}),"\n",(0,t.jsxs)(s.p,{children:["After the vote is passed, send an email to the an ",(0,t.jsx)(s.a,{href:"mailto:announce@apache.org",children:"announce@apache.org"})," and cc ",(0,t.jsx)(s.a,{href:"mailto:dev@answer.apache.org",children:"dev@answer.apache.org"})," to announce the vote result and release."]}),"\n",(0,t.jsx)(s.h3,{id:"email-template",children:"email template"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-text",children:"Hello everyone,\n\nThe Apache Answer {release-version} has been released!\n\nApache Answer is a Q&A platform software for teams at any scale.\nWhether it's a community forum, help center, or knowledge management platform, you can always count on Apache Answer.\n\nDownload Links: https://downloads.apache.org/answer/\n\nRelease Notes: https://github.com/apache/answer/releases/tag/{release-version}\n\nWebsite: https://answer.apache.org/\n\nResources:\n- Issue: https://github.com/apache/answer/issues\n- Mailing list: dev@answer.apache.org\n\nThanks,\n<YOUR NAME>\n"})})]})}function d(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},80173:(e,s,a)=>{a.d(s,{Z:()=>t});const t=a.p+"assets/images/img-1-cfad18d2c31aee0878e6e74afef26048.jpg"},8597:(e,s,a)=>{a.d(s,{Z:()=>t});const t=a.p+"assets/images/img-2-abb9219a39788da417978f842fd19619.png"},8779:(e,s,a)=>{a.d(s,{Z:()=>t});const t=a.p+"assets/images/release-2e2cd12d84fafa5c709031f84a415d58.jpeg"},90887:(e,s,a)=>{a.d(s,{Z:()=>o,a:()=>i});var t=a(85170);const n={},r=t.createContext(n);function i(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);