"use strict";(self.webpackChunkanswer=self.webpackChunkanswer||[]).push([[4517],{84261:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var t=i(43010),s=i(90887);const r={slug:"/plugins"},a="Using Plugins",l={id:"guides/plugins",title:"Using Plugins",description:"When we need to do some extensions to Answer's functionality, for example, OAuth login, we design a way to use plugins to implement these functions.",source:"@site/docs/guides/plugins.md",sourceDirName:"guides",slug:"/plugins",permalink:"/zh-CN/docs/plugins",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/answer-website/zh-CN",tags:[],version:"current",lastUpdatedBy:"LinkinStars",lastUpdatedAt:1706252994,formattedLastUpdatedAt:"2024\u5e741\u670826\u65e5",frontMatter:{slug:"/plugins"},sidebar:"docs",previous:{title:"\u58f0\u671b",permalink:"/zh-CN/docs/reputation"},next:{title:"Database",permalink:"/zh-CN/docs/database"}},o={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Official plugins",id:"official-plugins",level:3},{value:"Plugin type",id:"plugin-type",level:3},{value:"Build",id:"build",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Command",id:"command",level:3},{value:"Build docker image with plugin from answer base image",id:"build-docker-image-with-plugin-from-answer-base-image",level:3},{value:"Third-party plugin",id:"third-party-plugin",level:2},{value:"Usage",id:"usage",level:2},{value:"Upgrade",id:"upgrade",level:2},{value:"Develop and contributing",id:"develop-and-contributing",level:2},{value:"Design &amp; principle",id:"design--principle",level:2}];function c(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"using-plugins",children:"Using Plugins"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"When we need to do some extensions to Answer's functionality, for example, OAuth login, we design a way to use plugins to implement these functions."})}),"\n",(0,t.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsx)(n.h3,{id:"official-plugins",children:"Official plugins"}),"\n",(0,t.jsxs)(n.p,{children:["You can find a list of officially supported plugins for Answer ",(0,t.jsx)(n.a,{href:"https://github.com/apache/incubator-answer-plugins",children:"here"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"plugin-type",children:"Plugin type"}),"\n",(0,t.jsx)(n.p,{children:"We classify plugins into different types. Different types of plugins have different functions. Plugins of the same type have the same effect, but are implemented differently."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Connector"}),": The Connector plugin helps us to implement third-party login functionality. e.g. ",(0,t.jsx)(n.code,{children:"GitHub OAuth Login"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Storage"}),": The Storage plugin helps us to upload files to third-party storage. (preview)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Cache"}),": Support for using different caching middleware. e.g. ",(0,t.jsx)(n.code,{children:"Redis"})," (preview)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Filter"}),": Filter out illegal questions or answers. (coming soon)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Render"}),": Parsers for different content formats. (coming soon)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Finder"}),": Support for using search engines to speed up the search for question answers. (coming soon)"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"build",children:"Build"}),"\n",(0,t.jsx)(n.p,{children:"Answer binary supports packaging different required plugins into the binary."}),"\n",(0,t.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Original Answer binary"}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://go.dev/",children:"Golang"})," ",(0,t.jsx)(n.code,{children:">=1.18"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://nodejs.org/",children:"Node.js"})," ",(0,t.jsx)(n.code,{children:">=16.17"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://pnpm.io/",children:"pnpm"})," ",(0,t.jsx)(n.code,{children:">=7"})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"command",children:"Command"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["We use the ",(0,t.jsx)(n.code,{children:"build"})," command provided with the Answer binary to rebuild a version of Answer with the plugin."]})}),"\n",(0,t.jsx)(n.p,{children:"For example, let's see how to build an Answer binary that includes the github third-party login plugin."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"# answer build --with [plugin@plugin_version=[replacement]] --output [file]\n$ ./answer build --with github.com/apache/incubator-answer-plugins/connector-github\n\n# build a new answer with github login plugin then output to ./new_answer.\n$ ./answer build --with github.com/apache/incubator-answer-plugins/connector-github@1.0.0 --output ./new_answer\n\n# with multiple plugins\n$ ./answer build \\\n--with github.com/apache/incubator-answer-plugins/connector-github \\\n--with github.com/apache/incubator-answer-plugins/connector-google\n\n# with local plugins\n$ ./answer build --with github.com/apache/incubator-answer-plugins/connector-github@1.0.0=/my-local-space\n\n# cross compilation. Build a linux-amd64 binary in macos\n$ CGO_ENABLED=0 GOOS=linux GOARCH=amd64 ./answer build --with github.com/apache/incubator-answer-plugins/connector-github\n\n# specify the answer version using ANSWER_MODULE environment variable\n$ ANSWER_MODULE=github.com/apache/incubator-answer@v1.2.0-RC1 ./answer build --with github.com/apache/incubator-answer-plugins/connector-github\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["You can use the ",(0,t.jsx)(n.code,{children:"plugin"})," command to list the current binary containing plugins."]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"$ ./new_answer plugin\n\n# output\n# github connector[0.0.1] made by answerdev\n# google connector[0.0.1] made by answerdev\n"})}),"\n",(0,t.jsx)(n.h3,{id:"build-docker-image-with-plugin-from-answer-base-image",children:"Build docker image with plugin from answer base image"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"You can follow the steps above to build the binary with the plugin first, and then build a docker image that contains the binary. Of course, you can also build directly on top of the original image."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-dockerfile",metastring:'title="Dockerfile"',children:'FROM apache/answer as answer-builder\n\nRUN apk --no-cache add \\\n    build-base git bash nodejs npm go && \\\n    npm install -g pnpm\n\nRUN answer build \\\n    --with github.com/apache/incubator-answer-plugins/connector-basic \\\n    --with github.com/apache/incubator-answer-plugins/storage-s3 \\\n    --with github.com/apache/incubator-answer-plugins/search-elasticsearch \\\n    --output /usr/bin/new_answer\n\nFROM alpine\nLABEL maintainer="linkinstar@apache.org"\n\nARG TIMEZONE\nENV TIMEZONE=${TIMEZONE:-"Asia/Shanghai"}\n\nRUN apk update \\\n    && apk --no-cache add \\\n        bash \\\n        ca-certificates \\\n        curl \\\n        dumb-init \\\n        gettext \\\n        openssh \\\n        sqlite \\\n        gnupg \\\n        tzdata \\\n    && ln -sf /usr/share/zoneinfo/${TIMEZONE} /etc/localtime \\\n    && echo "${TIMEZONE}" > /etc/timezone\n\nCOPY --from=answer-builder /usr/bin/new_answer /usr/bin/answer\nCOPY --from=answer-builder /data /data\nCOPY --from=answer-builder /entrypoint.sh /entrypoint.sh\nRUN chmod 755 /entrypoint.sh\n\nVOLUME /data\nEXPOSE 80\nENTRYPOINT ["/entrypoint.sh"]\n'})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"You can update the --with parameter to add more plugins that you need."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"# create a Dockerfile and copy the content above\n$ vim Dockerfile\n$ docker build -t answer-with-plugin .\n$ docker run -d -p 9080:80 -v answer-data:/data --name answer answer-with-plugin\n"})}),"\n",(0,t.jsx)(n.h2,{id:"third-party-plugin",children:"Third-party plugin"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["We recommend the use of ",(0,t.jsx)(n.a,{href:"https://github.com/apache/incubator-answer-plugins",children:"official plugins"}),", if you want to use third-party plugins, refer to the following."]})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"If the third-party plugin is publicly available, you can build with it like official plugins."}),"\n",(0,t.jsx)(n.li,{children:"If the third-party plugin is private, you need to download it then build with."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(n.p,{children:"The Answer with the plugin version is used in the same way as before. You can find the plugin's configuration in the admin page."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"plugin-config-admin-page",src:i(65832).Z+"",width:"2688",height:"980"})}),"\n",(0,t.jsx)(n.h2,{id:"upgrade",children:"Upgrade"}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsx)(n.p,{children:"Note that if you are upgrading from a non-plugin version to a plugin version, you also need to execute the upgrade command (also considered as an upgrade)."})}),"\n",(0,t.jsxs)(n.p,{children:["You need build a new Answer binary with the new plugin version, then replace the old Answer binary with the new one. As with normal upgrades, you need to execute different ",(0,t.jsx)(n.a,{href:"./upgrade",children:"upgrade steps"})," depending on the  deployment method. For example, if you are using binary deployment, you need to execute the ",(0,t.jsx)(n.code,{children:"upgrade"})," command."]}),"\n",(0,t.jsx)(n.h2,{id:"develop-and-contributing",children:"Develop and contributing"}),"\n",(0,t.jsxs)(n.p,{children:["Please refer to ",(0,t.jsx)(n.a,{href:"/community/plugins",children:"the documentation"})," for details."]}),"\n",(0,t.jsx)(n.h2,{id:"design--principle",children:"Design & principle"}),"\n",(0,t.jsxs)(n.p,{children:["Since Golang is a static language, there is no friendly plugin mechanism. So instead of a dynamic approach, we use recompilation for deployment. Please refer to ",(0,t.jsx)(n.a,{href:"/blog/2023/07/22/why-the-answer-plugin-system-was-designed-this-way",children:"the blog"})," for details."]})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},65832:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/plugin-config-admin-page-e343b33766f45a10093fc621e741c811.png"},90887:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>a});var t=i(85170);const s={},r=t.createContext(s);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);