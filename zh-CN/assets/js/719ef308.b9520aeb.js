"use strict";(self.webpackChunkanswer=self.webpackChunkanswer||[]).push([[6606],{57671:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>u,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=r(43010),a=r(90887),s=r(81290),l=r(71401);const o={slug:"/upgrade"},u="\u5347\u7ea7",c={id:"getting-started/upgrade",title:"\u5347\u7ea7",description:"\u6211\u4eec\u5efa\u8bae\u5728\u5347\u7ea7\u4e4b\u524d\u5907\u4efd\u6570\u636e\u5e93\u548c\u914d\u7f6e\u6587\u4ef6\u3002\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u4fdd\u8bc1\u5347\u7ea7\u4e0d\u4f1a\u5f71\u54cd\u73b0\u6709\u6570\u636e\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/getting-started/upgrade.md",sourceDirName:"getting-started",slug:"/upgrade",permalink:"/zh-CN/docs/upgrade",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/answer-website/zh-CN",tags:[],version:"current",lastUpdatedBy:"LinkinStars",lastUpdatedAt:1737612262,formattedLastUpdatedAt:"2025\u5e741\u670823\u65e5",frontMatter:{slug:"/upgrade"},sidebar:"docs",previous:{title:"\u5b89\u88c5",permalink:"/zh-CN/docs/installation"},next:{title:"\u547d\u4ee4\u884c\u6307\u5357",permalink:"/zh-CN/docs/command-line"}},i={},d=[];function p(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"\u5347\u7ea7",children:"\u5347\u7ea7"}),"\n","\n","\n",(0,n.jsxs)(t.admonition,{type:"caution",children:[(0,n.jsx)(t.p,{children:"\u6211\u4eec\u5efa\u8bae\u5728\u5347\u7ea7\u4e4b\u524d\u5907\u4efd\u6570\u636e\u5e93\u548c\u914d\u7f6e\u6587\u4ef6\u3002\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u4fdd\u8bc1\u5347\u7ea7\u4e0d\u4f1a\u5f71\u54cd\u73b0\u6709\u6570\u636e\u3002"}),(0,n.jsx)(t.p,{children:"\u5907\u4efd\u6570\u636e\u610f\u5473\u7740\u5373\u4f7f\u5347\u7ea7\u5931\u8d25\uff0c\u4f60\u4e5f\u53ef\u4ee5\u9009\u62e9\u56de\u6eda\uff0c\u6216\u8005\u5982\u679c\u4f60\u4e0d\u5e0c\u671b\u4f7f\u7528\u9ad8\u7ea7\u7248\u672c\uff0c\u53ef\u4ee5\u6062\u590d\u5230\u4e4b\u524d\u7684\u7248\u672c\u3002"})]}),"\n",(0,n.jsxs)(s.Z,{queryString:"method",children:[(0,n.jsxs)(l.Z,{value:"docker-compose",label:"Docker Compose",default:!0,children:[(0,n.jsx)(t.p,{children:"\u5982\u679c\u4f60\u662f\u4f7f\u7528docker-compose\u6765\u5b89\u88c5answer\uff0c\u5347\u7ea7\u8d77\u6765\u975e\u5e38\u7b80\u5355\u3002"}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"docker-compose pull\ndocker-compose down\ndocker-compose up -d\n"})})]}),(0,n.jsxs)(l.Z,{value:"docker",label:"Docker",children:[(0,n.jsx)(t.p,{children:"\u5982\u679c\u4f60\u4f7f\u7528docker\u6765\u5b89\u88c5answer\uff0c\u5347\u7ea7\u6b65\u9aa4\u5982\u4e0b\uff1a"}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"docker pull apache/answer:latest\ndocker stop answer\ndocker rm answer\ndocker run -d -p 9080:80 -v answer-data:/data --name answer apache/answer:latest\n"})})]}),(0,n.jsxs)(l.Z,{value:"binary",label:"Binary",children:[(0,n.jsx)(t.p,{children:"\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662f answer \u7684\u4e8c\u8fdb\u5236\u5b89\u88c5\u7248\u672c\uff0c\u5347\u7ea7\u6b65\u9aa4\u5982\u4e0b\uff1a"}),(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\u4e0b\u8f7d\u9002\u7528\u4e8e\u4f60\u7cfb\u7edf\u7684",(0,n.jsx)(t.a,{href:"https://github.com/apache/answer/releases",children:"\u6700\u65b0\u4e8c\u8fdb\u5236\u7248\u672c"}),"\u3002"]}),"\n",(0,n.jsx)(t.li,{children:"\u505c\u6b62\u65e7\u7248\u672c\u3002"}),"\n",(0,n.jsxs)(t.li,{children:["\u6267\u884c\u5347\u7ea7\u547d\u4ee4",(0,n.jsx)(t.code,{children:"./answer upgrade -C ./answer-data/"}),"\u3002"]}),"\n",(0,n.jsxs)(t.li,{children:["\u8fd0\u884c\u6700\u65b0\u7248\u672c",(0,n.jsx)(t.code,{children:"./answer run -C ./answer-data/"}),"\u3002"]}),"\n"]})]})]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["\u5f53\u51fa\u73b0\u5176\u4ed6\u610f\u5916\u60c5\u51b5\uff0c\u5982\u5347\u7ea7\u5f02\u5e38\u65f6\uff0c\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u4e2a\u547d\u4ee4\u6765\u624b\u52a8\u5f3a\u5236\u5347\u7ea7 Apache Answer\u3002\u4f7f\u7528 ",(0,n.jsx)(t.code,{children:"answer upgrade -f v1.1.0"})," \u547d\u4ee4\u53ef\u4ee5\u4ece\u6307\u5b9a\u7248\u672c\u5f3a\u5236\u5347\u7ea7\uff0c\u5373\u4f7f\u4f60\u7684 Apache Answer \u5df2\u7ecf\u662f\u6700\u65b0\u7248\u672c\u3002\u5982\u679c\u9047\u5230\u5347\u7ea7\u5f02\u5e38\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u6267\u884c\u8fd9\u4e2a\u547d\u4ee4\uff0c\u6216\u8005\u91cd\u65b0\u62c9\u53d6\u6700\u65b0\u7684 Docker \u955c\u50cf\uff0c\u5e76\u5728\u5bb9\u5668\u5185\u6267\u884c\u8be5\u547d\u4ee4\u3002"]})})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},71401:(e,t,r)=>{r.d(t,{Z:()=>l});r(85170);var n=r(45924);const a={tabItem:"tabItem_s4ch"};var s=r(43010);function l(e){let{children:t,hidden:r,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.Z)(a.tabItem,l),hidden:r,children:t})}},81290:(e,t,r)=>{r.d(t,{Z:()=>k});var n=r(85170),a=r(45924),s=r(24724),l=r(31148),o=r(48507),u=r(76695),c=r(40370),i=r(27939);function d(e){return function(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function p(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function h(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const a=(0,l.k6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u._X)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,s=p(e),[l,u]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[c,d]=m({queryString:r,groupId:a}),[f,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,i.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),g=(()=>{const e=c??f;return h({value:e,tabValues:s})?e:null})();(0,o.Z)((()=>{g&&u(g)}),[g]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=r(71293);const g={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var v=r(43010);function x(e){let{className:t,block:r,selectedValue:n,selectValue:l,tabValues:o}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),i=e=>{const t=e.currentTarget,r=u.indexOf(t),a=o[r].value;a!==n&&(c(t),l(a))},d=e=>{let t=null;switch(e.key){case"Enter":i(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},t),children:o.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>u.push(e),onKeyDown:d,onClick:i,...s,className:(0,a.Z)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function w(e){let{lazy:t,children:r,selectedValue:a}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function j(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,a.Z)("tabs-container",g.tabList),children:[(0,v.jsx)(x,{...e,...t}),(0,v.jsx)(w,{...e,...t})]})}function k(e){const t=(0,b.Z)();return(0,v.jsx)(j,{...e},String(t))}},90887:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>l});var n=r(85170);const a={},s=n.createContext(a);function l(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);