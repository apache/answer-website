"use strict";(self.webpackChunkanswer=self.webpackChunkanswer||[]).push([[5226],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var a=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(n),g=l,m=d["".concat(p,".").concat(g)]||d[g]||c[g]||r;return n?a.createElement(m,i(i({ref:t},s),{},{components:n})):a.createElement(m,i({ref:t},s))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3778:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var a=n(4250),l=(n(9496),n(9613));const r={},i="\u540e\u7aef\u5f00\u53d1\u6307\u5357",o={unversionedId:"development/contributing/backend",id:"development/contributing/backend",title:"\u540e\u7aef\u5f00\u53d1\u6307\u5357",description:"\u4e0b\u9762\u662f\u540e\u7aef\u5f00\u53d1\u7684\u6307\u5357\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/contributing/backend.md",sourceDirName:"development/contributing",slug:"/development/contributing/backend",permalink:"/zh-CN/docs/development/contributing/backend",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u8d21\u732e\u6307\u5357",permalink:"/zh-CN/docs/development/contributing/"},next:{title:"\u524d\u7aef",permalink:"/zh-CN/docs/development/contributing/frontend"}},p={},u=[{value:"\u5982\u4f55\u8bbe\u7f6e\u5f00\u53d1\u73af\u5883",id:"\u5982\u4f55\u8bbe\u7f6e\u5f00\u53d1\u73af\u5883",level:2},{value:"\u5148\u51b3\u6761\u4ef6",id:"\u5148\u51b3\u6761\u4ef6",level:3},{value:"\u5de5\u5177",id:"\u5de5\u5177",level:3},{value:"wire",id:"wire",level:4},{value:"swag",id:"swag",level:4},{value:"\u6784\u5efa",id:"\u6784\u5efa",level:3},{value:"\u8fd0\u884c",id:"\u8fd0\u884c",level:3},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:4},{value:"\u542f\u52a8",id:"\u542f\u52a8",level:4},{value:"Debug",id:"debug",level:3},{value:"\u9879\u76ee\u8bf4\u660e",id:"\u9879\u76ee\u8bf4\u660e",level:2},{value:"\u5305\u7ed3\u6784",id:"\u5305\u7ed3\u6784",level:3},{value:"\u5305\u4e4b\u95f4\u7684\u4f9d\u8d56\u5173\u7cfb",id:"\u5305\u4e4b\u95f4\u7684\u4f9d\u8d56\u5173\u7cfb",level:3},{value:"\u4ee3\u7801\u89c4\u8303",id:"\u4ee3\u7801\u89c4\u8303",level:2},{value:"\u57fa\u672c\u7684",id:"\u57fa\u672c\u7684",level:3},{value:"\u4ee3\u7801\u89c4\u8303\u68c0\u67e5",id:"\u4ee3\u7801\u89c4\u8303\u68c0\u67e5",level:3},{value:"\u6211\u4eec\u9700\u8981\u4f60\u7684\u8d21\u732e",id:"\u6211\u4eec\u9700\u8981\u4f60\u7684\u8d21\u732e",level:2},{value:"\u4fee\u590d Bug",id:"\u4fee\u590d-bug",level:3},{value:"\u4ee3\u7801\u5ba1\u67e5\u548c\u6ce8\u91ca",id:"\u4ee3\u7801\u5ba1\u67e5\u548c\u6ce8\u91ca",level:3},{value:"\u5355\u5143\u6d4b\u8bd5\uff08\u975e\u5e38\u9700\u8981\uff09",id:"\u5355\u5143\u6d4b\u8bd5\u975e\u5e38\u9700\u8981",level:3},{value:"\u7ffb\u8bd1",id:"\u7ffb\u8bd1",level:3},{value:"\u65b0\u529f\u80fd\u6216\u63d2\u4ef6",id:"\u65b0\u529f\u80fd\u6216\u63d2\u4ef6",level:3},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u4fee\u6539\u6570\u636e\u5e93\u8868\u7ed3\u6784\u975e\u5e38\u56f0\u96be",id:"\u4fee\u6539\u6570\u636e\u5e93\u8868\u7ed3\u6784\u975e\u5e38\u56f0\u96be",level:3},{value:"\u6784\u5efa\u5de5\u5177",id:"\u6784\u5efa\u5de5\u5177",level:2}],s={toc:u};function c(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u540e\u7aef\u5f00\u53d1\u6307\u5357"},"\u540e\u7aef\u5f00\u53d1\u6307\u5357"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u4e0b\u9762\u662f\u540e\u7aef\u5f00\u53d1\u7684\u6307\u5357\u3002")),(0,l.kt)("h2",{id:"\u5982\u4f55\u8bbe\u7f6e\u5f00\u53d1\u73af\u5883"},"\u5982\u4f55\u8bbe\u7f6e\u5f00\u53d1\u73af\u5883"),(0,l.kt)("h3",{id:"\u5148\u51b3\u6761\u4ef6"},"\u5148\u51b3\u6761\u4ef6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://go.dev/"},"Golang")," ",(0,l.kt)("inlineCode",{parentName:"li"},">=1.18")),(0,l.kt)("li",{parentName:"ul"},"\u6570\u636e\u5e93\u4f9d\u8d56",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"MySQL ",(0,l.kt)("inlineCode",{parentName:"li"},"(>=5.7)")),(0,l.kt)("li",{parentName:"ul"},"PostgreSQL ",(0,l.kt)("inlineCode",{parentName:"li"},"(>=10)")),(0,l.kt)("li",{parentName:"ul"},"SQLite3"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/google/wire"},"wire"))),(0,l.kt)("h3",{id:"\u5de5\u5177"},"\u5de5\u5177"),(0,l.kt)("h4",{id:"wire"},"wire"),(0,l.kt)("p",null,"\u6211\u4eec\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"wire")," \u6765\u751f\u6210\u4f9d\u8d56\u5173\u7cfb\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"go get github.com/google/wire/cmd/wire@latest\ngo generate ./...\ngo mod tidy\n")),(0,l.kt)("p",null,"\u6216\u8005\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"make generate"),"\u3002"),(0,l.kt)("h4",{id:"swag"},"swag"),(0,l.kt)("p",null,"\u6211\u4eec\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"swag")," \u6765\u751f\u6210 Swagger \u6587\u6863\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"swag init --generalInfo ./cmd/answer/main.go\n")),(0,l.kt)("p",null,"\u6216\u8005\u4f60\u53ef\u4ee5\u8fdb\u5165\u811a\u672c\u76ee\u5f55\u5e76\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"./gen-api.sh"),"\u3002"),(0,l.kt)("h3",{id:"\u6784\u5efa"},"\u6784\u5efa"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"\u5982\u679c\u8fd9\u662f\u4f60\u7b2c\u4e00\u6b21\u542f\u52a8 Answer\uff0c\u8bf7\u5148\u7f16\u8bd1\u524d\u7aef\u9879\u76ee\uff0c\u4ee5\u786e\u4fdd\u4f60\u53ef\u4ee5\u66f4\u8f7b\u677e\u5730\u6d4b\u8bd5\u5b83\u3002\n\u4e00\u65e6\u4f60\u719f\u6089\u4e86 Answer\uff0c\u4f60\u53ef\u4ee5\u76f4\u63a5\u5c06\u914d\u7f6e\u6587\u4ef6\u590d\u5236\u5230\u76f8\u5e94\u7684\u76ee\u5f55\u4e2d\uff0c\u800c\u65e0\u9700\u7f16\u8bd1\u524d\u7aef\uff0c\u5e76\u4f7f\u7528 Swagger \u8fdb\u884c\u6d4b\u8bd5\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# \u524d\u7aef\u7f16\u8bd1\uff08\u63a8\u8350\uff09\u3002\u5982\u679c\u9047\u5230\u95ee\u9898\uff0c\u8bf7\u53c2\u8003\u4e0e\u524d\u7aef\u76f8\u5173\u7684\u6587\u6863\n$ make ui\n# \u8fdb\u5165\u76ee\u5f55\n$ cd cmd/answer/\n# \u7f16\u8bd1\n$ go build .\n")),(0,l.kt)("h3",{id:"\u8fd0\u884c"},"\u8fd0\u884c"),(0,l.kt)("h4",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u8fd9\u662f\u4f60\u7b2c\u4e00\u6b21\u542f\u52a8 Answer\uff0c\u8bf7\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u8fdb\u884c\u5b89\u88c5\u3002\u5982\u679c\u4e0d\u662f\uff0c\u5219\u53ef\u4ee5\u8df3\u8fc7\u6b64\u6b65\u9aa4\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# \u521d\u59cb\u5316\u73af\u5883\n$ ./answer init -C ./answer-data/\n")),(0,l.kt)("p",null,"\u524d\u5f80 ",(0,l.kt)("a",{parentName:"p",href:"http://localhost:80/install"},"http://localhost:80/install")," \u8bbf\u95ee\u5b89\u88c5\u9875\u9762\u3002"),(0,l.kt)("p",null,"\u8bf7\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"../../installation"},"\u5b89\u88c5\u6587\u6863")," \u8fdb\u884c\u5b89\u88c5\u6b65\u9aa4\u3002"),(0,l.kt)("h4",{id:"\u542f\u52a8"},"\u542f\u52a8"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"./answer run -C ./answer-data/\n")),(0,l.kt)("p",null,"\u524d\u5f80 ",(0,l.kt)("a",{parentName:"p",href:"http://localhost:80/"},"http://localhost:80/")," \u4f7f\u7528 Answer\u3002"),(0,l.kt)("h3",{id:"debug"},"Debug"),(0,l.kt)("p",null,"\u6211\u4eec\u4f7f\u7528 Swagger \u6d4b\u8bd5 API \u63a5\u53e3\u3002Swagger \u6587\u6863\u9ed8\u8ba4\u53ef\u7528\u3002\u524d\u5f80 ",(0,l.kt)("a",{parentName:"p",href:"http://127.0.0.1:8080/swagger/index.html"},"http://localhost:80/swagger/index.html")," \u8bbf\u95ee Swagger \u9875\u9762\u3002"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528 Swagger \u8fdb\u884c\u66f4\u65b9\u4fbf\u7684\u8c03\u8bd5\u3002"),(0,l.kt)("h2",{id:"\u9879\u76ee\u8bf4\u660e"},"\u9879\u76ee\u8bf4\u660e"),(0,l.kt)("h3",{id:"\u5305\u7ed3\u6784"},"\u5305\u7ed3\u6784"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 cmd (main binary)\n\u251c\u2500\u2500 configs (default configuration)\n\u251c\u2500\u2500 docs (swagger documentation)\n\u251c\u2500\u2500 i18n (International translation)\n\u251c\u2500\u2500 internal\n      \u251c\u2500\u2500 base (Basic component without service attributes)\n            \u251c\u2500\u2500 conf (Configuration)\n            \u251c\u2500\u2500 constant (constant)\n            \u251c\u2500\u2500 data (database/cache)\n            \u251c\u2500\u2500 handler (request/response handler)\n            \u251c\u2500\u2500 middleware (http middleware)\n            \u251c\u2500\u2500 pager (Pagination)\n            \u251c\u2500\u2500 reason (error reason key use to translator)\n            \u251c\u2500\u2500 server (http server)\n            \u251c\u2500\u2500 translator (translator for translate international)\n            \u2514\u2500\u2500 validator (validator for validate request)\n      \u251c\u2500\u2500 cli (binary commands)\n      \u251c\u2500\u2500 controller (request handler controller for user)\n      \u251c\u2500\u2500 controller_backyard (request handler controller for admin)\n      \u251c\u2500\u2500 entity (all entity about database table)\n      \u251c\u2500\u2500 install (installation related)\n      \u251c\u2500\u2500 migrations (upgrade related)\n      \u251c\u2500\u2500 repo (database/cache operations)\n      \u251c\u2500\u2500 router (http router)\n      \u251c\u2500\u2500 schema (request/response schema)\n      \u2514\u2500\u2500 service (business logic)\n\u251c\u2500\u2500 pkg (tools or third party)\n\u2514\u2500\u2500 ui (frontend)\n")),(0,l.kt)("h3",{id:"\u5305\u4e4b\u95f4\u7684\u4f9d\u8d56\u5173\u7cfb"},"\u5305\u4e4b\u95f4\u7684\u4f9d\u8d56\u5173\u7cfb"),(0,l.kt)("p",null,"\u5bf9\u4e8e\u5927\u591a\u6570 API\uff0c\u6d41\u7a0b\u56fe\u975e\u5e38\u7b80\u5355\uff0c\u5982\u4e0b\u6240\u793a\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"router -> middleware -> controller(use schema) -> service -> repo(use entity)\n")),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u5f00\u53d1\u65b0\u7684 API\uff0c\u53ef\u4ee5\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u8fdb\u884c\u64cd\u4f5c\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5728 router \u4e2d\u6dfb\u52a0\u8def\u7531\u89c4\u5219 (GET/POST/PUT...)\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u6dfb\u52a0\u7528\u4e8e\u5904\u7406\u7a0b\u5e8f\u8bf7\u6c42\u7684\u63a7\u5236\u5668\u3002 \u8be5\u8bf7\u6c42\u5e94\u5728\u63a7\u5236\u5668\u4e2d\u8fdb\u884c\u9a8c\u8bc1\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u6dfb\u52a0\u4e00\u4e2a\u670d\u52a1\u6765\u5904\u7406\u4e1a\u52a1\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u6dfb\u52a0\u7528\u4e8e\u4fdd\u5b58\u6216\u67e5\u8be2\u6570\u636e\u5e93\u6216\u7f13\u5b58\u4e2d\u7684\u6570\u636e\u7684\u5b58\u50a8\u5e93\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u91cd\u65b0\u751f\u6210 swagger \u6587\u6863\u5e76\u6d4b\u8bd5 API\u3002")),(0,l.kt)("h2",{id:"\u4ee3\u7801\u89c4\u8303"},"\u4ee3\u7801\u89c4\u8303"),(0,l.kt)("h3",{id:"\u57fa\u672c\u7684"},"\u57fa\u672c\u7684"),(0,l.kt)("p",null,"\u6211\u4eec\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/uber-go/guide"},"uber \u7684 Golang")," \u6765\u68c0\u67e5\u4ee3\u7801\u89c4\u8303\u3002"),(0,l.kt)("h3",{id:"\u4ee3\u7801\u89c4\u8303\u68c0\u67e5"},"\u4ee3\u7801\u89c4\u8303\u68c0\u67e5"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"golangci-lint")," \u662f\u4e00\u4e2a\u5feb\u901f\u7684 Go \u4ee3\u7801\u89c4\u8303\u68c0\u67e5\u5de5\u5177\u3002\u6211\u4eec\u4f7f\u7528 golangci-lint](",(0,l.kt)("a",{parentName:"p",href:"https://github.com/golangci/golangci-lint"},"https://github.com/golangci/golangci-lint"),") \u6765\u68c0\u67e5\u4ee3\u7801\u89c4\u8303\u3002"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u68c0\u67e5\u4f60\u7684\u4ee3\u7801\u683c\u5f0f\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"go install github.com/golangci/golangci-lint/cmd/golangci-lint@v1.50.0\ngolangci-lint run\n")),(0,l.kt)("h2",{id:"\u6211\u4eec\u9700\u8981\u4f60\u7684\u8d21\u732e"},"\u6211\u4eec\u9700\u8981\u4f60\u7684\u8d21\u732e"),(0,l.kt)("h3",{id:"\u4fee\u590d-bug"},"\u4fee\u590d Bug"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u53d1\u73b0\u4e86 Bug\uff0c\u8bf7\u4e0d\u8981\u72b9\u8c6b ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/answerdev/answer/issues"},"\u63d0\u4ea4 issue"),"  \u7ed9\u6211\u4eec\u3002\u5982\u679c\u4f60\u53ef\u4ee5\u4fee\u590d\u5b83\uff0c\u8bf7\u5728\u63d0\u4ea4 issue \u65f6\u9644\u4e0a\u8bf4\u660e\u3002\u5982\u679c\u95ee\u9898\u5df2\u88ab\u786e\u8ba4\u662f Bug\uff0c\u4f60\u53ef\u4ee5\u63d0\u4ea4 PR\uff0c\u8fd9\u5c06\u786e\u4fdd\u4f60\u4e0d\u4f1a\u505a\u65e0\u7528\u7684\u5de5\u4f5c\u3002"),(0,l.kt)("h3",{id:"\u4ee3\u7801\u5ba1\u67e5\u548c\u6ce8\u91ca"},"\u4ee3\u7801\u5ba1\u67e5\u548c\u6ce8\u91ca"),(0,l.kt)("p",null,"\u5728\u6211\u4eec\u7684\u5f00\u53d1\u8fc7\u7a0b\u4e2d\uff0c\u6709\u4e9b\u4ee3\u7801\u53ef\u80fd\u4e0d\u662f\u5f88\u5408\u4e4e\u903b\u8f91\u3002\u5982\u679c\u4f60\u53d1\u73b0\u4e86\u8fd9\u4e9b\u95ee\u9898\uff0c\u8bf7\u4e0d\u8981\u72b9\u8c6b\uff0c\u5411\u6211\u4eec\u63d0\u4ea4 PR\u3002\u540c\u6837\uff0c\u6709\u4e9b\u51fd\u6570\u53ef\u80fd\u6ca1\u6709\u6ce8\u91ca\u3002\u5982\u679c\u4f60\u53ef\u4ee5\u5e2e\u52a9\u6211\u4eec\u8865\u5145\u6ce8\u91ca\uff0c\u6211\u4eec\u5c06\u4e0d\u80dc\u611f\u6fc0\u3002"),(0,l.kt)("h3",{id:"\u5355\u5143\u6d4b\u8bd5\u975e\u5e38\u9700\u8981"},"\u5355\u5143\u6d4b\u8bd5\uff08\u975e\u5e38\u9700\u8981\uff09"),(0,l.kt)("p",null,"\u6211\u4eec\u5f53\u524d\u7684\u5355\u5143\u6d4b\u8bd5\u8986\u76d6\u7387\u5982\u4e0b\u6240\u793a\u3002\u663e\u7136\uff0c\u6211\u4eec\u8fd8\u9700\u8981\u6dfb\u52a0\u66f4\u591a\u7684\u5355\u5143\u6d4b\u8bd5\uff0c\u56e0\u6b64\u6211\u4eec\u975e\u5e38\u6b22\u8fce\u4f60\u7684\u8d21\u732e\u3002"),(0,l.kt)("img",{src:n(6989).Z,alt:"repo-unit-test-coverage-rate",width:"300"}),(0,l.kt)("h3",{id:"\u7ffb\u8bd1"},"\u7ffb\u8bd1"),(0,l.kt)("p",null,"\u6211\u4eec\u6240\u6709\u7684\u7ffb\u8bd1\u90fd\u653e\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"i18n"),"\u76ee\u5f55\u4e2d\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5982\u679c\u4f60\u53d1\u73b0\u4f60\u6b63\u5728\u4f7f\u7528\u7684\u8bed\u8a00\u4e2d\u5bf9\u5e94\u7684\u952e\u6ca1\u6709\u7ffb\u8bd1\uff0c\u8bf7\u63d0\u4ea4\u4f60\u7684\u7ffb\u8bd1\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5982\u679c\u4f60\u60f3\u63d0\u4ea4\u65b0\u7684\u8bed\u8a00\u7ffb\u8bd1\uff0c\u8bf7\u5c06\u4f60\u7684\u8bed\u8a00\u6dfb\u52a0\u5230 ",(0,l.kt)("inlineCode",{parentName:"li"},"i18n.yaml")," \u6587\u4ef6\u4e2d\u3002")),(0,l.kt)("h3",{id:"\u65b0\u529f\u80fd\u6216\u63d2\u4ef6"},"\u65b0\u529f\u80fd\u6216\u63d2\u4ef6"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u6211\u4eec\u6839\u636e ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/orgs/answerdev/projects/1"},"\u8def\u7ebf\u56fe")," \u5f00\u53d1\u8ba1\u5212\u5f00\u53d1\u529f\u80fd\u3002\u5982\u679c\u4f60\u6709\u65b0\u529f\u80fd\u7684\u5efa\u8bae\uff0c\u8bf7\u786e\u8ba4\u5b83\u4eec\u662f\u5426\u5df2\u7ecf\u8ba1\u5212\u4e2d\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u63d2\u4ef6\u5c06\u5728\u672a\u6765\u53d1\u5e03\uff0c\u656c\u8bf7\u671f\u5f85\u3002")),(0,l.kt)("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,l.kt)("h3",{id:"\u4fee\u6539\u6570\u636e\u5e93\u8868\u7ed3\u6784\u975e\u5e38\u56f0\u96be"},"\u4fee\u6539\u6570\u636e\u5e93\u8868\u7ed3\u6784\u975e\u5e38\u56f0\u96be"),(0,l.kt)("p",null,"\u901a\u5e38\uff0c\u6211\u4eec\u4e0d\u5e0c\u671b\u4fee\u6539\u6570\u636e\u5e93\u8868\u4e2d\u5df2\u7ecf\u5b58\u5728\u7684\u5b57\u6bb5\u3002\u5982\u679c\u9700\u8981\u66f4\u6539\uff0c\u8bf7\u9075\u5faa\u4ee5\u4e0b\u89c4\u5219\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u6dfb\u52a0\u5b57\u6bb5\u6bd4\u4fee\u6539\u5b57\u6bb5\u66f4\u597d\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u4fee\u6539\u4efb\u4f55\u5b57\u6bb5\u90fd\u9700\u8981\u8003\u8651\u5bf9\u73b0\u6709\u6570\u636e\u7684\u5f71\u54cd\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u4fee\u6539\u6570\u636e\u5e93\u8868\u7ed3\u6784\u9700\u8981\u6d4b\u8bd5\u5bf9\u4e0d\u540c\u7c7b\u578b\u7684\u6570\u636e\u5e93\u7684\u5f71\u54cd\uff0c\u5e76\u4e3a\u4e0d\u540c\u7c7b\u578b\u7684\u6570\u636e\u5e93\u63d0\u4f9b\u4e0d\u540c\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"SQL")," \u8bed\u53e5\u3002\u5bf9\u4e8e ",(0,l.kt)("inlineCode",{parentName:"li"},"MySQL/PostgreSQL/sqlite3"),"\u3002")),(0,l.kt)("h2",{id:"\u6784\u5efa\u5de5\u5177"},"\u6784\u5efa\u5de5\u5177"),(0,l.kt)("p",null,"Answer \u5e94\u7528\u7684\u540e\u7aef\u4f7f\u7528\u4ee5\u4e0b\u7ec4\u4ef6/\u5e93\u6784\u5efa\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/segmentfault/pacman"},"pacman")," - \u5feb\u901f\u6784\u5efa Go \u5e94\u7528\u7a0b\u5e8f\u7684\u5de5\u5177\u5305\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/gin-gonic/gin/"},"gin")," - \u8def\u7531\u5668\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/go-playground/validator/"},"validator")," - \u9a8c\u8bc1\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://xorm.io/"},"xorm")," - ORM."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/spf13/cobra"},"cobra")," - CLI \u5e94\u7528\u7a0b\u5e8f\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/swaggo/swag"},"swag")," -  \u751f\u6210 Swagger \u6587\u6863\u3002")))}c.isMDXComponent=!0},6989:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/repo-unit-test-coverage-rate-380ed64eb67caf2d5132e22e435310db.png"}}]);