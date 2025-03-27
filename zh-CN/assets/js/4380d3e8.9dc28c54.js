"use strict";(self.webpackChunkanswer=self.webpackChunkanswer||[]).push([[3451],{41821:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var o=t(43010),r=t(90887);const l={slug:"/development"},s="Development Guide",i={id:"development/guide",title:"Development Guide",description:"This guide will help you get started with the development of the project.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/guide.md",sourceDirName:"development",slug:"/development",permalink:"/zh-CN/docs/development",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/answer-website/zh-CN",tags:[],version:"current",lastUpdatedBy:"shockdm",lastUpdatedAt:1743059389,formattedLastUpdatedAt:"2025\u5e743\u670827\u65e5",frontMatter:{slug:"/development"},sidebar:"docs",previous:{title:"Deploy subdirectory",permalink:"/zh-CN/docs/deploy-subdirectory"},next:{title:"\u63d2\u4ef6\u5f00\u53d1\u6307\u5357",permalink:"/zh-CN/docs/development/plugins"}},a={},d=[{value:"Frontend",id:"frontend",level:2},{value:"Installation",id:"installation",level:3},{value:"Code conventions",id:"code-conventions",level:3},{value:"Backend",id:"backend",level:2},{value:"Installation",id:"installation-1",level:3},{value:"Code conventions",id:"code-conventions-1",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"development-guide",children:"Development Guide"}),"\n",(0,o.jsx)(n.p,{children:"This guide will help you get started with the development of the project."}),"\n",(0,o.jsx)(n.h2,{id:"frontend",children:"Frontend"}),"\n",(0,o.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Ensure you have ",(0,o.jsx)(n.a,{href:"https://nodejs.org/en",children:"node"})," and ",(0,o.jsx)(n.a,{href:"https://pnpm.io/installation",children:"pnpm"})," installed."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"After cloning the repository, run the following command. This will install all dependencies as well as build all local packages."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"cd ./ui\npnpm install\n// This command will help you create the tools you need for good front-end code validation to ensure that the code style\npnpm setup-lint\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["To start a development server, run ",(0,o.jsx)(n.code,{children:"pnpm start"}),". now, your browser should already open automatically, and autoload ",(0,o.jsx)(n.code,{children:"http://localhost:3000"}),". you can also manually visit it."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["To switch API, you can modify the ",(0,o.jsx)(n.code,{children:"ui/.env.development"})," file and then re-run pnpm start. If you're just using it yourself, we recommend creating a ",(0,o.jsx)(n.code,{children:".env.development.local"})," file that defines the address of the api you're going to use."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"code-conventions",children:"Code conventions"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Most important: Look around."})," Match the style you see used in the rest of the project. This includes formatting, naming files, naming things in code, naming things in documentation, etc."]}),"\n",(0,o.jsxs)(n.li,{children:["We do have Prettier (a formatter) and ESLint (a syntax linter) to catch most stylistic problems. If you are working locally, you can run ",(0,o.jsx)(n.code,{children:"pnpm setup-lint"}),", which will help you initialize your ",(0,o.jsx)(n.code,{children:"husky"})," and ",(0,o.jsx)(n.code,{children:"pre-commit"})," files, which will automatically help you check your commits during the commit phase. Or just run ",(0,o.jsx)(n.code,{children:"pnpm lint"})," and ",(0,o.jsx)(n.code,{children:"pnpm prettier"})," to fix most code formatting."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"No runtime errors"})," Before submitting the code, please ensure that there will be no errors when running locally. This will greatly reduce the workload of review."]}),"\n"]}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsx)("summary",{children:"frontend package structure"}),(0,o.jsx)("div",{children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:".\n\u251c\u2500\u2500 cmd\n\u251c\u2500\u2500 configs\n\u251c\u2500\u2500 ...\n\u2514\u2500\u2500 ui (front-end project starts here)\n  \u251c\u2500\u2500 build (built results directory, usually without concern)\n  \u251c\u2500\u2500 public (html template for public)\n  \u251c\u2500\u2500 scripts (some scripting tools on front-end project)\n  \u251c\u2500\u2500 src (almost all front-end resources are here)\n        \u251c\u2500\u2500 assets (static resources)\n        \u251c\u2500\u2500 common (project information/data defined here)\n        \u251c\u2500\u2500 components (all components of the project)\n        \u251c\u2500\u2500 hooks (all hooks of the project)\n        \u251c\u2500\u2500 i18n (Initialize the front-end i18n)\n        \u251c\u2500\u2500 pages (all pages of the project)\n        \u251c\u2500\u2500 router (Project routing definition)\n        \u251c\u2500\u2500 services (all data api of the project)\n        \u251c\u2500\u2500 stores (all data stores of the project)\n        \u251c\u2500\u2500 utils (all utils of the project)\n        \u251c\u2500\u2500 plugins (UI Plugin Development & Debugging Directory)\n"})})})]}),"\n",(0,o.jsx)(n.h2,{id:"backend",children:"Backend"}),"\n",(0,o.jsx)(n.h3,{id:"installation-1",children:"Installation"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Ensure you have ",(0,o.jsx)(n.a,{href:"https://go.dev/doc/install",children:"golang"})," installed."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"After cloning the repository, run the following command for build."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"go mod download\ngo run cmd/answer/main.go init -C ./answer-data\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Visit ",(0,o.jsx)(n.code,{children:"http://localhost"})," to see the installation page and complete the installation."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Run the following command to start the server."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"go run cmd/answer/main.go run -C ./answer-data\n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"code-conventions-1",children:"Code conventions"}),"\n",(0,o.jsxs)(n.p,{children:["We recommend that you follow ",(0,o.jsx)(n.a,{href:"https://github.com/uber-go/guide",children:"uber's Golang Guidelines"})," code style."]}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsx)("summary",{children:"backend package structure"}),(0,o.jsx)("div",{children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:".\n\u251c\u2500\u2500 cmd (main binary)\n\u251c\u2500\u2500 configs (default configuration)\n\u251c\u2500\u2500 docs (swagger documentation)\n\u251c\u2500\u2500 i18n (International translation)\n\u251c\u2500\u2500 internal\n  \u251c\u2500\u2500 base (Basic component without service attributes)\n        \u251c\u2500\u2500 conf (Configuration)\n        \u251c\u2500\u2500 constant (constant)\n        \u251c\u2500\u2500 data (database/cache)\n        \u251c\u2500\u2500 handler (request/response handler)\n        \u251c\u2500\u2500 middleware (http middleware)\n        \u251c\u2500\u2500 pager (Pagination)\n        \u251c\u2500\u2500 reason (error reason key use to translator)\n        \u251c\u2500\u2500 server (http server)\n        \u251c\u2500\u2500 translator (translator for translate international)\n        \u2514\u2500\u2500 validator (validator for validate request)\n  \u251c\u2500\u2500 cli (binary commands)\n  \u251c\u2500\u2500 controller (request handler controller for user)\n  \u251c\u2500\u2500 controller_backyard (request handler controller for admin)\n  \u251c\u2500\u2500 entity (all entity about database table)\n  \u251c\u2500\u2500 install (installation related)\n  \u251c\u2500\u2500 migrations (upgrade related)\n  \u251c\u2500\u2500 repo (database/cache operations)\n  \u251c\u2500\u2500 router (http router)\n  \u251c\u2500\u2500 schema (request/response schema)\n  \u2514\u2500\u2500 service (business logic)\n\u251c\u2500\u2500 pkg (tools or third party)\n\u2514\u2500\u2500 ui (frontend)\n"})})})]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},90887:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>s});var o=t(85170);const r={},l=o.createContext(r);function s(e){const n=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(l.Provider,{value:n},e.children)}}}]);