"use strict";(self.webpackChunkanswer=self.webpackChunkanswer||[]).push([[4234],{27739:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>u});var s=i(43010),n=i(90887);const r={slug:"/security-model"},o="Security Model",a={id:"security-model",title:"Security Model",description:"This document outlines the security model of Apache Answer. It aims to help users understand the security model and make informed decisions about deploying and managing Apache Answer securely.",source:"@site/community/security-model.md",sourceDirName:".",slug:"/security-model",permalink:"/community/security-model",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/answer-website/edit/main/community/security-model.md",tags:[],version:"current",lastUpdatedBy:"LinkinStars",lastUpdatedAt:1740135277,formattedLastUpdatedAt:"Feb 21, 2025",frontMatter:{slug:"/security-model"},sidebar:"community",previous:{title:"Security",permalink:"/community/security"},next:{title:"Contributing",permalink:"/community/contributing"}},c={},u=[{value:"Admin Permission Security",id:"admin-permission-security",level:2},{value:"Captcha Security",id:"captcha-security",level:2},{value:"Custom Plugin Security",id:"custom-plugin-security",level:2}];function l(e){const t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",img:"img",p:"p",strong:"strong",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"security-model",children:"Security Model"}),"\n",(0,s.jsx)(t.p,{children:"This document outlines the security model of Apache Answer. It aims to help users understand the security model and make informed decisions about deploying and managing Apache Answer securely."}),"\n",(0,s.jsx)(t.h2,{id:"admin-permission-security",children:"Admin Permission Security"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Admin users have full system permissions"}),", which includes access to potentially vulnerable operations. While we assume administrators won't attack their own websites, it's crucial to exercise caution when assigning admin privileges."]}),"\n",(0,s.jsx)(t.p,{children:"So, if a security issue comes up in the administrator page, this is usually not considered a problem. Because the administrator has the authority to do so. Unless a normal user can overstep his authority to operate outside of his capabilities."}),"\n",(0,s.jsx)(t.h2,{id:"captcha-security",children:"Captcha Security"}),"\n",(0,s.jsx)(t.p,{children:"CAPTCHA is an essential security measure to prevent automated attacks and abuse. Apache Answer will not be responsible for security issues arising from disabled CAPTCHA protection. For example, if the user disables the CAPTCHA, it may allow an attacker to crack the user's password by brute force."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"captcha",src:i(17787).Z+"",width:"2168",height:"202"})}),"\n",(0,s.jsx)(t.h2,{id:"custom-plugin-security",children:"Custom Plugin Security"}),"\n",(0,s.jsxs)(t.p,{children:["Apache Answer only guarantees the security of official plugins distributed through our ",(0,s.jsx)(t.a,{href:"https://github.com/apache/answer-plugins",children:"official repository"}),". We take no responsibility for security issues arising from third-party plugins."]}),"\n",(0,s.jsx)(t.admonition,{type:"caution",children:(0,s.jsxs)(t.p,{children:["If you find a security bug, with that in mind, please do not file public issues. You can follow the instructions in the ",(0,s.jsx)(t.a,{href:"https://github.com/apache/answer/security/policy",children:"security policy"})," to report it privately. We will fix it as soon as possible."]})})]})}function d(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},17787:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/captcha-04b01e4e1e95d76f2b41e14b529bbb04.png"},90887:(e,t,i)=>{i.d(t,{Z:()=>a,a:()=>o});var s=i(85170);const n={},r=s.createContext(n);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);