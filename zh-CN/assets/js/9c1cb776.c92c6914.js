"use strict";(self.webpackChunkanswer=self.webpackChunkanswer||[]).push([[8051],{69907:(A,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>t,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>r});var s=n(43010),i=n(90887);const a={date:new Date("2024-08-20T00:00:00.000Z"),title:"Apache Answer \u540e\u7aef\u914d\u7f6e\u6307\u5357",authors:["ZhuXuanlyu","ChenJiaji","Anne"],category:"Tutorials",featured:!0,image:"2024-08-20-cover-zh@4x.png",description:"Answer\u540e\u7aef\u914d\u7f6e\u4fdd\u59c6\u7ea7\u6559\u5b66"},t=void 0,l={permalink:"/zh-CN/blog/apache-answer-backend-configuration-guide",editUrl:"https://crowdin.com/project/answer-website/zh-CN",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/apache-answer-backend-configuration-guide/index.md",title:"Apache Answer \u540e\u7aef\u914d\u7f6e\u6307\u5357",description:"Answer\u540e\u7aef\u914d\u7f6e\u4fdd\u59c6\u7ea7\u6559\u5b66",date:"2024-08-20T00:00:00.000Z",formattedDate:"2024\u5e748\u670820\u65e5",tags:[],readingTime:3.57,hasTruncateMarker:!1,authors:[{name:"Zhu Xuanlyu",title:"Developer",url:"https://github.com/IamMelody233",imageURL:"https://avatars.githubusercontent.com/u/103870995?v=4",key:"ZhuXuanlyu"},{name:"Chen Jiaji",title:"Developer",url:"https://github.com/CHENJUaaa",imageURL:"https://avatars.githubusercontent.com/u/137683102?v=4",key:"ChenJiaji"},{name:"Anne Zhu",title:"Product Marketing Manager",url:"https://github.com/PrimmaAnna",imageURL:"https://avatars.githubusercontent.com/u/131739771?v=4",key:"Anne"}],frontMatter:{date:"2024-08-20T00:00:00.000Z",title:"Apache Answer \u540e\u7aef\u914d\u7f6e\u6307\u5357",authors:["ZhuXuanlyu","ChenJiaji","Anne"],category:"Tutorials",featured:!0,image:"2024-08-20-cover-zh@4x.png",description:"Answer\u540e\u7aef\u914d\u7f6e\u4fdd\u59c6\u7ea7\u6559\u5b66"},unlisted:!1,prevItem:{title:"\u6dfb\u52a0 Apache Answer \u63d2\u4ef6\u6307\u5357",permalink:"/zh-CN/blog/guide-to-add-answer-plugins"},nextItem:{title:"Apache Answer \u524d\u7aef\u914d\u7f6e\u6307\u5357",permalink:"/zh-CN/blog/apache-answer-frontend-configuration-guide"}},c={authorsImageUrls:[void 0,void 0,void 0]},r=[{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:2},{value:"\u4e00\u3001\u521d\u59cb\u5316\u9879\u76ee",id:"\u4e00\u521d\u59cb\u5316\u9879\u76ee",level:2},{value:"\u4e8c\u3001\u5b89\u88c5\u754c\u9762",id:"\u4e8c\u5b89\u88c5\u754c\u9762",level:2},{value:"2.1 \u914d\u7f6e\u6570\u636e\u5e93",id:"21-\u914d\u7f6e\u6570\u636e\u5e93",level:3},{value:"\u521b\u5efa\u6570\u636e\u5e93",id:"\u521b\u5efa\u6570\u636e\u5e93",level:4},{value:"\u914d\u7f6e\u6570\u636e\u5e93\u8fde\u63a5",id:"\u914d\u7f6e\u6570\u636e\u5e93\u8fde\u63a5",level:4},{value:"2.2 \u521b\u5efa\u914d\u7f6e\u6587\u4ef6",id:"22-\u521b\u5efa\u914d\u7f6e\u6587\u4ef6",level:3},{value:"2.3 \u8bbe\u7f6e\u7f51\u9875\u4fe1\u606f\u548c\u7ba1\u7406\u5458\u8d26\u53f7",id:"23-\u8bbe\u7f6e\u7f51\u9875\u4fe1\u606f\u548c\u7ba1\u7406\u5458\u8d26\u53f7",level:3},{value:"2.4 \u5b8c\u6210\u5b89\u88c5",id:"24-\u5b8c\u6210\u5b89\u88c5",level:3},{value:"\u4e09\u3001\u8fd0\u884c\u540e\u7aef",id:"\u4e09\u8fd0\u884c\u540e\u7aef",level:2},{value:"\u56db\u3001\u9a8c\u8bc1\u5b89\u88c5",id:"\u56db\u9a8c\u8bc1\u5b89\u88c5",level:2}];function h(A){const e={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...A.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.p,{children:["\u5728 ",(0,s.jsx)(e.a,{href:"https://answer.apache.org/zh-CN/blog/apache-answer-frontend-configuration-guide",children:"Apache Answer \u524d\u7aef\u914d\u7f6e\u6307\u5357"}),"\u4e2d\uff0c\u76f8\u4fe1\u5927\u5bb6\u90fd\u80fd\u8ddf\u968f\u6bcf\u4e00\u6b65\u5b8c\u6210\u524d\u7aef\u914d\u7f6e\u3002\u672c\u6587\u5c06\u8be6\u7ec6\u6307\u5bfc\u4f60\u5982\u4f55\u914d\u7f6e Apache Answer \u7684\u540e\u7aef\uff0c\u6211\u4eec\u5c06\u4e00\u6b65\u4e00\u6b65\u5730\u8fdb\u884c\u8bb2\u89e3\uff0c\u786e\u4fdd\u6bcf\u4e2a\u4eba\u90fd\u80fd\u4e0a\u624b\u5e76\u6210\u529f\u8fd0\u884c\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"\u51c6\u5907\u5de5\u4f5c",children:"\u51c6\u5907\u5de5\u4f5c"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u4e0b\u8f7d Golang\n\u4ece",(0,s.jsx)(e.a,{href:"https://go.dev/doc/install",children:"\u5b98\u65b9\u7f51\u7ad9"}),"\u4e0b\u8f7d\u5e76\u5b89\u88c5 Go \u8bed\u8a00, \u6309\u9ed8\u8ba4\u8bbe\u7f6e\u5b89\u88c5\u5373\u53ef\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["Clone Answer \u9879\u76ee\n\u786e\u4fdd\u4f60\u5df2\u7ecf\u514b\u9686\u4e86 Apache Answer \u5230\u672c\u5730\uff0c\u5982\u8fd8\u672a\u514b\u9686\uff0c\u8bf7\u9605\u8bfb ",(0,s.jsx)(e.a,{href:"https://answer.apache.org/zh-CN/blog/apache-answer-frontend-configuration-guide",children:"Apache Answer \u524d\u7aef\u914d\u7f6e\u6307\u5357"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u4e00\u521d\u59cb\u5316\u9879\u76ee",children:"\u4e00\u3001\u521d\u59cb\u5316\u9879\u76ee"}),"\n",(0,s.jsxs)(e.p,{children:["\u5728 Answer \u9879\u76ee\u6839\u76ee\u5f55\u6253\u5f00",(0,s.jsx)(e.code,{children:"\u547d\u4ee4\u884c\u7ec8\u7aef"}),"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"go mod download\ngo run cmd/answer/main.go init -C ./answer-data\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.em,{children:"\u6ce8\uff1a\u5982\u679c\u7b2c\u4e00\u6761\u8dd1\u4e0d\u51fa\u6765\u53ef\u5148\u8dd1\u7b2c\u4e8c\u6761\uff0c\u8fd0\u884c\u65f6\u95f4\u53ef\u80fd\u8f83\u957f\uff0c\u8bf7\u8010\u5fc3\u7b49\u5f85\u3002"})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.img,{alt:"go success",src:n(75743).Z+"",width:"1162",height:"720"}),"\n\u770b\u5230 ",(0,s.jsx)(e.code,{children:"[SUCCESS]"})," \u5373\u8fd0\u884c\u6210\u529f\uff0c",(0,s.jsx)(e.strong,{children:"\u6ce8\u610f\u6b64\u65f6\u4e0d\u8981\u5173\u95ed\u8be5\u7a0b\u5e8f"}),"\u3002\u5728\u7f51\u9875\u8f93\u5165\u6240\u63d0\u793a\u7684\u7f51\u5740\uff1a",(0,s.jsx)(e.code,{children:"http://localhost:80/install/"}),"\uff0c\u6253\u5f00\u5e76\u8fdb\u884c\u4e0b\u4e00\u6b65\u5b89\u88c5\u3002"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.em,{children:"\u6ce8\uff1a\u5982\u679c\u6253\u5f00\u7f51\u5740\u627e\u4e0d\u5230\u6b64localhost\u9875\u9762\uff0c\u5c1d\u8bd5\u5148\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u518d\u91cd\u8bd5"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"cd ./ui\npnpm pre-install\npnpm install\npnpm build\ncd ..\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u4e8c\u5b89\u88c5\u754c\u9762",children:"\u4e8c\u3001\u5b89\u88c5\u754c\u9762"}),"\n",(0,s.jsxs)(e.p,{children:["\u6253\u5f00 ",(0,s.jsx)(e.code,{children:"http://localhost:80/install/"})," \u5c06\u770b\u5230\u4ee5\u4e0b\u754c\u9762\uff0c\u7b2c\u4e00\u6b65\u9009\u62e9\u8bed\u8a00\u3002\n",(0,s.jsx)(e.img,{alt:"install1",src:n(80205).Z+"",width:"1280",height:"490"})]}),"\n",(0,s.jsx)(e.h3,{id:"21-\u914d\u7f6e\u6570\u636e\u5e93",children:"2.1 \u914d\u7f6e\u6570\u636e\u5e93"}),"\n",(0,s.jsxs)(e.p,{children:["\u4f60\u53ef\u4ee5\u4f7f\u7528\u81ea\u5df1\u7684\u6570\u636e\u5e93\u8f6f\u4ef6\u521b\u5efa Answer \u6570\u636e\u5e93\nApache Answer \u652f\u6301 MySQL\u3001PostgreSQL \u548c SQLite \u4f5c\u4e3a\u6570\u636e\u5e93\u540e\u7aef\u3002\u73af\u5883\u6700\u5c0f\u7684\u662f SQLite\uff0c\u4e0d\u9700\u8981\u4efb\u4f55\u989d\u5916\u914d\u7f6e\u3002\n\u5982\u679c\u8981\u4f7f\u7528 MySQL \u6216 PostgreSQL\uff0c\u5219\u9700\u8981",(0,s.jsx)(e.strong,{children:"\u5148\u8bbe\u7f6e\u6570\u636e\u5e93"}),"\uff0c\u7136\u540e\u5728\u6b64\u6b65\u9aa4\u4e2d\u914d\u7f6e\u6570\u636e\u5e93\u8fde\u63a5\u3002\n",(0,s.jsx)(e.img,{alt:"install2",src:n(97522).Z+"",width:"869",height:"720"})]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u672c\u6587\u5c06\u4ee5 MySQL \u4e3a\u4f8b\u8fdb\u884c\u8bf4\u660e\u3002"})}),"\n",(0,s.jsx)(e.h4,{id:"\u521b\u5efa\u6570\u636e\u5e93",children:"\u521b\u5efa\u6570\u636e\u5e93"}),"\n",(0,s.jsxs)(e.p,{children:["\u5728",(0,s.jsx)(e.code,{children:"MySQL \u547d\u4ee4\u884c"}),"\u4e2d\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a answer \u7684\u6570\u636e\u5e93\uff1a\n",(0,s.jsx)(e.img,{alt:"create database",src:n(74767).Z+"",width:"1280",height:"599"})]}),"\n",(0,s.jsx)(e.h4,{id:"\u914d\u7f6e\u6570\u636e\u5e93\u8fde\u63a5",children:"\u914d\u7f6e\u6570\u636e\u5e93\u8fde\u63a5"}),"\n",(0,s.jsxs)(e.p,{children:["\u8bbf\u95ee ",(0,s.jsx)(e.code,{children:"http://localhost:80/install/"}),"\uff0c\u5728\u5b89\u88c5\u754c\u9762\u4e2d\u8f93\u5165\u4f60\u7684\u6570\u636e\u5e93\u8fde\u63a5\u4fe1\u606f\uff1a"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"User name: root"}),"\n",(0,s.jsx)(e.li,{children:"Database host: 127.0.0.1:3306"}),"\n",(0,s.jsxs)(e.li,{children:["Password: \u4f60\u7684\u6570\u636e\u5e93\u5bc6\u7801\n",(0,s.jsx)(e.img,{alt:"database settings",src:n(27906).Z+"",width:"853",height:"379"})]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"22-\u521b\u5efa\u914d\u7f6e\u6587\u4ef6",children:"2.2 \u521b\u5efa\u914d\u7f6e\u6587\u4ef6"}),"\n",(0,s.jsxs)(e.p,{children:["\u5728\u5b89\u88c5\u754c\u9762\u4e2d\uff0c\u6309\u7167\u63d0\u793a\u521b\u5efa ",(0,s.jsx)(e.code,{children:"config.yaml"})," \u6587\u4ef6\u3002\n",(0,s.jsx)(e.img,{alt:"install3",src:n(43737).Z+"",width:"1280",height:"373"})]}),"\n",(0,s.jsx)(e.h3,{id:"23-\u8bbe\u7f6e\u7f51\u9875\u4fe1\u606f\u548c\u7ba1\u7406\u5458\u8d26\u53f7",children:"2.3 \u8bbe\u7f6e\u7f51\u9875\u4fe1\u606f\u548c\u7ba1\u7406\u5458\u8d26\u53f7"}),"\n",(0,s.jsxs)(e.p,{children:["\u8bf7\u8bb0\u4f4f\u7f51\u7ad9URL\uff08\u5982",(0,s.jsx)(e.code,{children:"http://localhost"}),"\uff09\u4ee5\u53ca\u7ba1\u7406\u5458\u8d26\u53f7\u4fe1\u606f\u5bc6\u7801\uff0c\u65b9\u4fbf\u540e\u7eed\u767b\u9646\u3002\n",(0,s.jsx)(e.img,{alt:"install4",src:n(87322).Z+"",width:"950",height:"720"})]}),"\n",(0,s.jsx)(e.h3,{id:"24-\u5b8c\u6210\u5b89\u88c5",children:"2.4 \u5b8c\u6210\u5b89\u88c5"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"install5",src:n(62001).Z+"",width:"1280",height:"437"})}),"\n",(0,s.jsx)(e.h2,{id:"\u4e09\u8fd0\u884c\u540e\u7aef",children:"\u4e09\u3001\u8fd0\u884c\u540e\u7aef"}),"\n",(0,s.jsxs)(e.p,{children:["\u56de\u5230",(0,s.jsx)(e.code,{children:"\u547d\u4ee4\u884c\u7ec8\u7aef"}),"\uff0c\u5728answer\u9879\u76ee\u6839\u76ee\u5f55\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u542f\u52a8\u540e\u7aef\u670d\u52a1\u5668 \u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"go run cmd/answer/main.go run -C ./answer-data\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u56db\u9a8c\u8bc1\u5b89\u88c5",children:"\u56db\u3001\u9a8c\u8bc1\u5b89\u88c5"}),"\n",(0,s.jsxs)(e.p,{children:["\u5728\u6d4f\u89c8\u5668\u4e2d\u8bbf\u95ee\u4f60\u8bbe\u7f6e\u7684\u7f51\u7ad9 URL\uff08\u4f8b\u5982\uff1a",(0,s.jsx)(e.code,{children:"http://localhost"}),"\uff09\uff0c\u767b\u9646\u4f60\u7684\u7ba1\u7406\u5458\u8d26\u53f7\uff0c\u5982\u679c\u770b\u5230\u4e00\u4e0b\u9875\u9762\uff0c\u5373\u914d\u7f6e\u6210\u529f\u3002\n",(0,s.jsx)(e.img,{alt:"answer page",src:n(73642).Z+"",width:"1280",height:"472"})]}),"\n",(0,s.jsxs)(e.p,{children:["\u901a\u8fc7\u4ee5\u4e0a\u6b65\u9aa4\uff0c\u4f60\u5df2\u7ecf\u6210\u529f\u57f9\u690d\u4e86 Apache Answer \u540e\u7aef\u3002\u5982\u679c\u9047\u5230\u5176\u4ed6\u95ee\u9898\uff0c\u6b22\u8fce\u4f60\u5728",(0,s.jsx)(e.a,{href:"https://meta.answer.dev/",children:"\u793e\u533a"}),"\u4e2d\u548c\u6211\u4eec\u7684\u793e\u533a\u6210\u5458\u8fdb\u884c\u6c9f\u901a\u3002\u6211\u4eec\u4e5f\u975e\u5e38\u6b22\u8fce\u4f60\u53c2\u4e0e\u5230",(0,s.jsx)(e.a,{href:"https://answer.apache.org/zh-CN/community/contributing/",children:"\u793e\u533a\u8d21\u732e"}),"\u4e2d\u6765\uff0c\u4e3a\u6253\u9020\u66f4\u597d\u7684\u95ee\u7b54\u5e73\u53f0\uff0c\u4e00\u540c\u52aa\u529b\u3002"]})]})}function d(A={}){const{wrapper:e}={...(0,i.a)(),...A.components};return e?(0,s.jsx)(e,{...A,children:(0,s.jsx)(h,{...A})}):h(A)}},73642:(A,e,n)=>{n.d(e,{Z:()=>s});const s=n.p+"assets/images/answer-page-14efc41682d83bb582563c367d9fdf01.png"},74767:(A,e,n)=>{n.d(e,{Z:()=>s});const s=n.p+"assets/images/database-8979988596923ab508f701cbce094c57.png"},27906:(A,e,n)=>{n.d(e,{Z:()=>s});const s=n.p+"assets/images/database2-13f5053cdacb8c9aad3a134c41ce60aa.png"},75743:(A,e,n)=>{n.d(e,{Z:()=>s});const s=n.p+"assets/images/go-success-4707143fecfbe80aaa75501ea18562b4.png"},80205:(A,e,n)=>{n.d(e,{Z:()=>s});const s=n.p+"assets/images/install1-825e1330f2d9dbe2ee01de1b740de4ee.png"},97522:(A,e,n)=>{n.d(e,{Z:()=>s});const s=n.p+"assets/images/install2-0c440f58fa806f3de6fa0f4dbc3cb4d2.png"},43737:(A,e,n)=>{n.d(e,{Z:()=>s});const s="data:image/png;base64,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"},87322:(A,e,n)=>{n.d(e,{Z:()=>s});const s=n.p+"assets/images/install4-a4c7a6a0f5d8b2ac403b93ab8988b3bb.png"},62001:(A,e,n)=>{n.d(e,{Z:()=>s});const s=n.p+"assets/images/install5-e52083826e85640fc13738233a73c92c.png"},90887:(A,e,n)=>{n.d(e,{Z:()=>l,a:()=>t});var s=n(85170);const i={},a=s.createContext(i);function t(A){const e=s.useContext(a);return s.useMemo((function(){return"function"==typeof A?A(e):{...e,...A}}),[e,A])}function l(A){let e;return e=A.disableParentContext?"function"==typeof A.components?A.components(i):A.components||i:t(A.components),s.createElement(a.Provider,{value:e},A.children)}}}]);