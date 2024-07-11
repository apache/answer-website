"use strict";(self.webpackChunkanswer=self.webpackChunkanswer||[]).push([[6312],{10540:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var s=i(43010),a=i(90887);const l={slug:"/plugins"},t="Using Plugins",r={id:"getting-started/plugins",title:"Using Plugins",description:"When we need to extend Apache Answer's functionality, such as adding OAuth login, we can design plugins to implement these features.",source:"@site/docs/getting-started/plugins.md",sourceDirName:"getting-started",slug:"/plugins",permalink:"/docs/plugins",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-answer-website/edit/main/docs/getting-started/plugins.md",tags:[],version:"current",lastUpdatedBy:"Anne",lastUpdatedAt:1720687599,formattedLastUpdatedAt:"Jul 11, 2024",frontMatter:{slug:"/plugins"},sidebar:"docs",previous:{title:"Environment Variables",permalink:"/docs/env"},next:{title:"Questions",permalink:"/docs/questions"}},o={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Official Plugins",id:"official-plugins",level:3},{value:"Build",id:"build",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Binary Build",id:"binary-build",level:3},{value:"Using Official Plugins",id:"using-official-plugins",level:4},{value:"Using Local Plugins",id:"using-local-plugins",level:4},{value:"Cross Compilation",id:"cross-compilation",level:4},{value:"Specifying the Answer Version",id:"specifying-the-answer-version",level:4},{value:"Docker Build",id:"docker-build",level:3},{value:"build with plugin from answer base image",id:"build-with-plugin-from-answer-base-image",level:4},{value:"build with plugin from local code",id:"build-with-plugin-from-local-code",level:4},{value:"Usage",id:"usage",level:2},{value:"Upgrade",id:"upgrade",level:2},{value:"Third-party Plugin",id:"third-party-plugin",level:2},{value:"Develop and Contribute",id:"develop-and-contribute",level:2},{value:"Design &amp; Principle",id:"design--principle",level:2}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"using-plugins",children:"Using Plugins"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"When we need to extend Apache Answer's functionality, such as adding OAuth login, we can design plugins to implement these features."})}),"\n",(0,s.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(n.h3,{id:"official-plugins",children:"Official Plugins"}),"\n",(0,s.jsxs)(n.p,{children:["You can find a list of officially supported plugins for Apache Answer ",(0,s.jsx)(n.a,{href:"https://github.com/apache/incubator-answer-plugins",children:"here"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"build",children:"Build"}),"\n",(0,s.jsx)(n.p,{children:"The Apache Answer binary supports packaging different required plugins into the binary."}),"\n",(0,s.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Original Apache Answer binary"}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://go.dev/",children:"Go"})," ",(0,s.jsx)(n.code,{children:">=1.18"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://nodejs.org/",children:"Node.js"})," ",(0,s.jsx)(n.code,{children:">=16.17"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://pnpm.io/",children:"pnpm"})," ",(0,s.jsx)(n.code,{children:">=7"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"binary-build",children:"Binary Build"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["We use the ",(0,s.jsx)(n.code,{children:"build"})," command provided with the Apache Answer binary to rebuild a version of Apache Answer with the plugin."]})}),"\n",(0,s.jsx)(n.p,{children:"For example, let's see how to build an Apache Answer binary that includes the GitHub third-party login plugin."}),"\n",(0,s.jsx)(n.h4,{id:"using-official-plugins",children:"Using Official Plugins"}),"\n",(0,s.jsxs)(n.p,{children:["You can specify the plugins to use with the ",(0,s.jsx)(n.code,{children:"--with"})," parameter:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"# Build Answer with the GitHub connector plugin\n$ ./answer build --with github.com/apache/incubator-answer-plugins/connector-github\n"})}),"\n",(0,s.jsx)(n.p,{children:"You can also specify the plugin version:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"# Build Answer with the GitHub connector plugin version 1.0.0\n$ ./answer build --with github.com/apache/incubator-answer-plugins/connector-github@1.0.0 --output ./new_answer\n"})}),"\n",(0,s.jsx)(n.p,{children:"You can use multiple plugins at the same time:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ ./answer build \\\n--with github.com/apache/incubator-answer-plugins/connector-github \\\n--with github.com/apache/incubator-answer-plugins/connector-google\n"})}),"\n",(0,s.jsx)(n.h4,{id:"using-local-plugins",children:"Using Local Plugins"}),"\n",(0,s.jsx)(n.p,{children:"If you need to use a local plugin, you can use the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ ./answer build --with github.com/apache/incubator-answer-plugins/connector-github@1.0.0=/my-local-space\n"})}),"\n",(0,s.jsx)(n.h4,{id:"cross-compilation",children:"Cross Compilation"}),"\n",(0,s.jsx)(n.p,{children:"You can use the following command to build a Linux-amd64 binary on macOS:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ CGO_ENABLED=0 GOOS=linux GOARCH=amd64 ./answer build --with github.com/apache/incubator-answer-plugins/connector-github\n"})}),"\n",(0,s.jsx)(n.h4,{id:"specifying-the-answer-version",children:"Specifying the Answer Version"}),"\n",(0,s.jsxs)(n.p,{children:["You can use the ",(0,s.jsx)(n.code,{children:"ANSWER_MODULE"})," environment variable to specify the Answer version:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ ANSWER_MODULE=github.com/apache/incubator-answer@v1.2.0-RC1 ./answer build --with github.com/apache/incubator-answer-plugins/connector-github\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["You can use the ",(0,s.jsx)(n.code,{children:"plugin"})," command to list the current binary containing plugins."]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ ./new_answer plugin\n\n# Output:\n# github connector[0.0.1] made by answerdev\n# google connector[0.0.1] made by answerdev\n"})}),"\n",(0,s.jsx)(n.h3,{id:"docker-build",children:"Docker Build"}),"\n",(0,s.jsx)(n.h4,{id:"build-with-plugin-from-answer-base-image",children:"build with plugin from answer base image"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-dockerfile",metastring:'title="Dockerfile"',children:'FROM apache/answer as answer-builder\n\nFROM golang:1.19-alpine AS golang-builder\n\nCOPY --from=answer-builder /usr/bin/answer /usr/bin/answer\n\nRUN apk --no-cache add \\\n    build-base git bash nodejs npm go && \\\n    npm install -g pnpm@8.9.2\n\nRUN answer build \\\n    --with github.com/apache/incubator-answer-plugins/connector-basic \\\n    --with github.com/apache/incubator-answer-plugins/storage-s3 \\\n    --with github.com/apache/incubator-answer-plugins/search-elasticsearch \\\n    --output /usr/bin/new_answer\n\nFROM alpine\nLABEL maintainer="linkinstar@apache.org"\n\nARG TIMEZONE\nENV TIMEZONE=${TIMEZONE:-"Asia/Shanghai"}\n\nRUN apk update \\\n    && apk --no-cache add \\\n        bash \\\n        ca-certificates \\\n        curl \\\n        dumb-init \\\n        gettext \\\n        openssh \\\n        sqlite \\\n        gnupg \\\n        tzdata \\\n    && ln -sf /usr/share/zoneinfo/${TIMEZONE} /etc/localtime \\\n    && echo "${TIMEZONE}" > /etc/timezone\n\nCOPY --from=golang-builder /usr/bin/new_answer /usr/bin/answer\nCOPY --from=answer-builder /data /data\nCOPY --from=answer-builder /entrypoint.sh /entrypoint.sh\nRUN chmod 755 /entrypoint.sh\n\nVOLUME /data\nEXPOSE 80\nENTRYPOINT ["/entrypoint.sh"]\n'})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"You can update the --with parameter to add more plugins that you need."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"# Create a Dockerfile and copy the content above\n$ vim Dockerfile\n$ docker build -t answer-with-plugin .\n$ docker run -d -p 9080:80 -v answer-data:/data --name answer answer-with-plugin\n"})}),"\n",(0,s.jsx)(n.h4,{id:"build-with-plugin-from-local-code",children:"build with plugin from local code"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"keep your code up-to-date"}),": Make sure your local code is synchronized with the official repositories, or at least with the v1.3.5 version."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"add required plugins"}),": Add your required plugin repositories to the ",(0,s.jsx)(n.code,{children:"/script/plugin_list"})," file in the root directory, one per line."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"github.com/apache/incubator-answer-plugins/connector-basic@latest  \ngithub.com/apache/incubator-answer-plugins/reviewer-basic@latest  \ngithub.com/apache/incubator-answer-plugins/captcha-basic@latest  \ngithub.com/apache/incubator-answer-plugins/editor_formula@latest\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"build the Docker image"}),": Run the ",(0,s.jsx)(n.code,{children:"docker build -t <name[:tag]> . "})," command to start building the image."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"verify image construction"}),": Run the ",(0,s.jsx)(n.code,{children:"docker run -d -p 9080:80 -v answer-data:/data --name <container_name> <image_name>"})," command to start the container and locally verify whether the image is built successfully."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.p,{children:"The Apache Answer with the plugin version is used in the same way as before. You can find the plugin's configuration in the admin page."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"plugin-config-admin-page",src:i(65832).Z+"",width:"2688",height:"980"})}),"\n",(0,s.jsx)(n.h2,{id:"upgrade",children:"Upgrade"}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsx)(n.p,{children:"Note that if you are upgrading from a non-plugin version to a plugin version, you also need to execute the upgrade command (also considered as an upgrade)."})}),"\n",(0,s.jsxs)(n.p,{children:["You need to build a new Apache Answer binary with the new plugin version, then replace the old Apache Answer binary with the new one. As with normal upgrades, you need to execute different ",(0,s.jsx)(n.a,{href:"./upgrade",children:"upgrade steps"})," depending on the deployment method. For example, if you are using binary deployment, you need to execute the ",(0,s.jsx)(n.code,{children:"upgrade"})," command."]}),"\n",(0,s.jsx)(n.h2,{id:"third-party-plugin",children:"Third-party Plugin"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["We recommend the use of ",(0,s.jsx)(n.a,{href:"https://github.com/apache/incubator-answer-plugins",children:"official plugins"}),". If you want to use third-party plugins, refer to the following."]})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If the third-party plugin is publicly available, you can build with it like official plugins."}),"\n",(0,s.jsx)(n.li,{children:"If the third-party plugin is private, you need to download it and then build with it."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"develop-and-contribute",children:"Develop and Contribute"}),"\n",(0,s.jsxs)(n.p,{children:["Please refer to ",(0,s.jsx)(n.a,{href:"/docs/development",children:"the documentation"})," for details."]}),"\n",(0,s.jsx)(n.h2,{id:"design--principle",children:"Design & Principle"}),"\n",(0,s.jsxs)(n.p,{children:["Since Go is a static language, there is no friendly plugin mechanism. Instead of a dynamic approach, we use recompilation for deployment. Please refer to ",(0,s.jsx)(n.a,{href:"/blog/2023/07/22/why-the-answer-plugin-system-was-designed-this-way",children:"the blog"})," for details."]})]})}function u(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},65832:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/plugin-config-admin-page-e343b33766f45a10093fc621e741c811.png"},90887:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>t});var s=i(85170);const a={},l=s.createContext(a);function t(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);