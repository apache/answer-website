(self.webpackChunkanswer=self.webpackChunkanswer||[]).push([[9504],{34246:(e,s,t)=>{"use strict";t.d(s,{Z:()=>n});t(85170);var c=t(45924),a=t(43010);const n=e=>{let{type:s="br",name:t,className:n,size:o,onClick:r,title:i=""}=e;return(0,a.jsx)("i",{className:(0,c.Z)(s,`bi-${t}`,n),style:{...o&&{fontSize:o}},onClick:r,onKeyDown:r,title:i})}},12306:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>q});var c=t(85170),a=t(43810),n=t(96933),o=t(71712),r=t(45924),i=t(2049),d=t(71771),l=t(44129),m=t(31355),g=t(50479),p=t(43010);function u(){const{metadata:e}=(0,l.C)(),{title:s,description:c,date:a,tags:n,authors:o,frontMatter:r}=e,{keywords:i}=r;return(0,p.jsxs)(g.Z,{title:s,description:c,keywords:i,ogType:"article",image:t(55646)(`./${r.image}`).default,children:[(0,p.jsx)("meta",{property:"article:published_time",content:a}),o.some((e=>e.url))&&(0,p.jsx)("meta",{property:"article:author",content:o.map((e=>e.url)).filter(Boolean).join(",")}),n.length>0&&(0,p.jsx)("meta",{property:"article:tag",content:n.map((e=>e.label)).join(",")})]})}var x=t(64659),f=t(98571),b=t(90354);function h(e){let{toc:s,className:t,linkClassName:c,isChild:a}=e;return s.length?(0,p.jsx)("ul",{className:(0,r.Z)("border-0 p-0",a?"ps-3 mt-2":t),children:s.map((e=>(0,p.jsxs)("li",{className:"m-0 mb-2",children:[(0,p.jsx)("a",{href:`#${e.id}`,className:(0,r.Z)("fs-14 text-secondary",c??void 0),dangerouslySetInnerHTML:{__html:e.value}}),(0,p.jsx)(h,{isChild:!0,toc:e.children,className:t,linkClassName:c})]},e.id)))}):null}const v=c.memo(h);function j(e){let{toc:s,className:t="table-of-contents table-of-contents__left-border",linkClassName:a="table-of-contents__link",linkActiveClassName:n,minHeadingLevel:o,maxHeadingLevel:r,...i}=e;const d=(0,x.L)(),l=o??d.tableOfContents.minHeadingLevel,m=r??d.tableOfContents.maxHeadingLevel,g=(0,f.b)({toc:s,minHeadingLevel:l,maxHeadingLevel:m}),u=(0,c.useMemo)((()=>{if(a&&n)return{linkClassName:a,linkActiveClassName:n,minHeadingLevel:l,maxHeadingLevel:m}}),[a,n,l,m]);return(0,b.S)(u),(0,p.jsx)(v,{toc:g,className:t,linkClassName:a,...i})}const N={tableOfContents:"tableOfContents_PDf4",docItemContainer:"docItemContainer_xnvL"},k="table-of-contents__link toc-highlight",y="blog-toc-active";function C(e){let{className:s,...t}=e;return(0,p.jsx)("div",{className:(0,r.Z)(N.tableOfContents,"thin-scrollbar",s),children:(0,p.jsx)(j,{...t,linkClassName:k,linkActiveClassName:y})})}var Z=t(10205),B=t(36426),L=t(85855);const _=()=>{const{frontMatter:e,metadata:s}=(0,l.C)();return(0,p.jsxs)("header",{children:[(0,p.jsxs)("div",{className:"d-flex align-items-center mb-3",children:[(0,p.jsx)(Z.Z,{to:"/blog",className:"me-2",children:(0,p.jsx)(B.Z,{id:"blogHeader.title",children:"Blog"})}),(0,p.jsx)("span",{className:"me-2",children:"/"}),(0,p.jsx)(Z.Z,{to:(0,L.generateCategoryPath)(e.category),className:"me-2",children:(0,p.jsx)(B.Z,{id:e.category,children:e.category})})]}),(0,p.jsx)("h1",{className:"mb-3",children:(0,p.jsx)(Z.Z,{to:s.permalink,className:"text-body",children:s.title})}),(0,p.jsxs)("div",{className:"d-flex align-items-center text-secondary",children:[s.authors.map((e=>(0,p.jsx)("div",{className:"me-3",children:e.name},e.name))),(0,p.jsx)("time",{className:"me-3",dateTime:s.date,children:s.formattedDate}),(0,p.jsx)("div",{children:(0,p.jsx)(B.Z,{id:"blogPostItem.readingTime",values:{reading_time:Math.round(s.readingTime)},children:"{reading_time} min read"})})]})]})},w=(0,c.memo)(_);var P=t(31086);function I(e){let{children:s,className:t}=e;const{frontMatter:c,assets:a}=(0,l.C)(),{withBaseUrl:n}=(0,P.C)(),o=a.image??c.image;return(0,p.jsxs)("article",{className:(0,r.Z)("px-0 px-lg-5 pb-5 mb-5",t),itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting",children:[o&&(0,p.jsx)("meta",{itemProp:"image",content:n(o,{absolute:!0})}),s]})}var T=t(82424),H=t(10564);function A(e){let{children:s,className:c}=e;const{frontMatter:a}=(0,l.C)();return(0,p.jsxs)("div",{id:"__blog-post-container",className:(0,r.Z)("markdown",c),itemProp:"articleBody",children:[(0,p.jsx)("div",{className:"mb-4",children:(0,p.jsx)(H.Z,{src:t(55646)(`./${a.image}`).default,className:"rounded",width:"1280px",height:"720px"})}),(0,p.jsx)(T.Z,{children:s})]})}var M=t(30239),S=t(7573),E=t(16287),O=t(79550),z=t(22738),W=t(34246);const V="shareBtn_lEr0",$=()=>{const{metadata:e}=(0,l.C)(),{siteConfig:{url:s}}=(0,M.Z)();return(0,p.jsxs)("div",{className:"mt-3",children:[e.tags.length>0&&(0,p.jsxs)("div",{className:"mb-3",children:[(0,p.jsx)("span",{children:(0,p.jsx)(B.Z,{id:"blogPostItem.tags",children:"Tags:"})})," ",e.tags.map(((s,t)=>(0,p.jsxs)("span",{children:[(0,p.jsx)(Z.Z,{to:s.permalink,children:s.label}),t===e.tags.length-1?"":", "]},s.label)))]}),(0,p.jsxs)("div",{className:"d-flex align-items-center text-secondary",children:[(0,p.jsx)("span",{children:(0,p.jsx)(B.Z,{id:"blogPostItem.share",children:"Share to"})}),(0,p.jsx)(S.Z,{className:V,title:e.title,url:s+e.permalink,children:(0,p.jsx)(W.Z,{name:"twitter",size:"16px"})}),(0,p.jsx)(E.Z,{className:V,title:e.title,url:s+e.permalink,children:(0,p.jsx)(W.Z,{name:"facebook",size:"16px"})}),(0,p.jsx)(O.Z,{className:V,title:e.title,url:s+e.permalink,source:s,summary:e.description,children:(0,p.jsx)(W.Z,{name:"linkedin",size:"16px"})})]}),(0,p.jsx)("div",{className:"mt-4",children:(0,p.jsx)(z.Z,{editUrl:e.editUrl})})]})};var F=t(78002);const D=e=>{let{relatedList:s=[]}=e;return 0===s.length?null:(0,p.jsxs)("div",{className:"pt-5 mt-5",children:[(0,p.jsx)("h2",{className:"mb-4",children:(0,p.jsx)(B.Z,{id:"blogPostItem.relatedPosts",children:"Related Posts"})}),(0,p.jsx)(F.Z,{data:s})]})},U=(0,c.memo)(D);function G(e){let{relatedList:s=[],children:t,className:c}=e;return(0,p.jsxs)(I,{className:(0,r.Z)(c),children:[(0,p.jsx)(A,{children:t}),(0,p.jsx)($,{}),(0,p.jsx)(U,{relatedList:s})]})}function R(e){let{relatedList:s,sidebar:t,children:c}=e;const{metadata:r,toc:i}=(0,l.C)();console.log("BlogPostPageContent",i);const{frontMatter:d}=r,{hide_table_of_contents:g,toc_min_heading_level:u,toc_max_heading_level:x}=d;return(0,p.jsx)(m.Z,{sidebar:t,children:(0,p.jsxs)(a.Z,{children:[(0,p.jsxs)(n.Z,{className:"justify-content-end mb-4",children:[(0,p.jsx)(o.Z,{lg:8,md:12,children:(0,p.jsx)("div",{className:"px-0 px-lg-5 pt-5",children:(0,p.jsx)(w,{})})}),(0,p.jsx)(o.Z,{lg:2,md:12})]}),(0,p.jsxs)(n.Z,{className:"justify-content-end",children:[(0,p.jsx)(o.Z,{lg:8,md:12,children:(0,p.jsx)(G,{relatedList:s,children:c})}),(0,p.jsx)(o.Z,{lg:2,md:12,children:i&&(0,p.jsx)(C,{toc:i,minHeadingLevel:u,maxHeadingLevel:x})})]})]})})}const q=e=>{const s=e.content,{relatedList:t=[]}=e;return(0,p.jsx)(l.n,{content:e.content,isBlogPostPage:!0,children:(0,p.jsxs)(i.FG,{className:(0,r.Z)(d.k.wrapper.blogPages,d.k.page.blogPostPage),children:[(0,p.jsx)(u,{}),(0,p.jsx)(R,{relatedList:t,children:(0,p.jsx)(s,{})})]})})}},78002:(e,s,t)=>{"use strict";t.d(s,{Z:()=>p});var c=t(85170),a=t(96933),n=t(71712),o=t(45924),r=t(36426),i=t(10205),d=t(85855),l=t(43010);const m=e=>{let{data:s}=e;const{frontMatter:c,metadata:a}=s;return c?(0,l.jsxs)(n.Z,{sm:12,md:6,lg:3,className:"mb-4",children:[(0,l.jsx)(i.Z,{to:a.permalink,className:"mb-3 d-block",children:(0,l.jsx)("img",{className:"rounded",src:t(55646)(`./${c.image.replace("@4x","@2x")}`).default,alt:""})}),(0,l.jsx)(i.Z,{className:"mb-2 d-block",to:(0,d.generateCategoryPath)(c.category),children:(0,l.jsx)(r.Z,{id:c.category,children:c.category})}),(0,l.jsx)("h5",{className:"mb-2 text-truncate-2",children:(0,l.jsx)(i.Z,{to:a.permalink,className:"text-body",children:a.title})}),(0,l.jsx)("div",{className:"text-secondary text-truncate-3 mb-3",children:a.description}),(0,l.jsxs)("div",{className:"text-secondary fs-14 d-flex align-items-center",children:[a.authors.map(((e,s)=>(0,l.jsx)("div",{className:(0,o.Z)(s===a.authors.length-1?"me-3":"me-2"),children:e.name},e.name))),(0,l.jsx)("time",{dateTime:a.date,children:a.formattedDate})]})]}):null},g=e=>{let{data:s}=e;return(0,l.jsx)(a.Z,{children:s.map((e=>(0,l.jsx)(m,{data:e.content},e.content.metadata.permalink)))})},p=(0,c.memo)(g)},50479:(e,s,t)=>{"use strict";t.d(s,{Z:()=>o});t(85170);var c=t(79418),a=t(31086),n=t(43010);function o(e){let{title:s,ogType:t="website",description:o,keywords:r,image:i,children:d}=e;const{withBaseUrl:l}=(0,a.C)(),m=i?l(i,{absolute:!0}):void 0;return(0,n.jsxs)(c.Z,{children:[s&&(0,n.jsxs)("title",{children:[s," | Answer"]}),(0,n.jsx)("meta",{property:"og:site_name",content:"Answer"}),(0,n.jsx)("meta",{property:"og:type",content:t}),s&&(0,n.jsx)("meta",{property:"og:title",content:`${s} | Answer`}),o&&(0,n.jsx)("meta",{name:"description",content:o}),o&&(0,n.jsx)("meta",{property:"og:description",content:o}),r&&(0,n.jsx)("meta",{name:"keywords",content:Array.isArray(r)?r.join(","):r}),m&&(0,n.jsx)("meta",{property:"og:image",content:m}),m&&(0,n.jsx)("meta",{name:"twitter:image",content:m}),d]})}},79308:(e,s,t)=>{"use strict";t.d(s,{Z:()=>w});var c=t(85170),a=t(9772),n=t(45924),o=t(10227),r=t(71771),i=t(55335);const d={codeBlockContainer:"codeBlockContainer_APcc"};var l=t(43010);function m(e){let{as:s,...t}=e;const c=(0,o.p)(),a=(0,i.QC)(c);return(0,l.jsx)(s,{...t,style:a,className:(0,n.Z)(t.className,d.codeBlockContainer,r.k.common.codeBlock)})}const g={codeBlockContent:"codeBlockContent_m3Ux",codeBlockTitle:"codeBlockTitle_P25_",codeBlock:"codeBlock_qGQc",codeBlockStandalone:"codeBlockStandalone_zC50",codeBlockLines:"codeBlockLines_p187",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_OFgW",buttonGroup:"buttonGroup_6DOT"};function p(e){let{children:s,className:t}=e;return(0,l.jsx)(m,{as:"pre",tabIndex:0,className:(0,n.Z)(g.codeBlockStandalone,"thin-scrollbar",t),children:(0,l.jsx)("code",{className:g.codeBlockLines,children:s})})}var u=t(64659),x=t(7154),f=t(98743);const b={codeLine:"codeLine_iPqp",codeLineNumber:"codeLineNumber_F4P7",codeLineContent:"codeLineContent_pOih"};function h(e){let{line:s,classNames:t,showLineNumbers:c,getLineProps:a,getTokenProps:o}=e;1===s.length&&"\n"===s[0].content&&(s[0].content="");const r=a({line:s,className:(0,n.Z)(t,c&&b.codeLine)}),i=s.map(((e,s)=>(0,l.jsx)("span",{...o({token:e,key:s})},s)));return(0,l.jsxs)("span",{...r,children:[c?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("span",{className:b.codeLineNumber}),(0,l.jsx)("span",{className:b.codeLineContent,children:i})]}):i,(0,l.jsx)("br",{})]})}var v=t(27428),j=t(36426);function N(e){return(0,l.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,l.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}function k(e){return(0,l.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,l.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})}const y={copyButtonCopied:"copyButtonCopied__QnY",copyButtonIcons:"copyButtonIcons_FhaS",copyButtonIcon:"copyButtonIcon_phi_",copyButtonSuccessIcon:"copyButtonSuccessIcon_FfTR"};function C(e){let{code:s,className:t}=e;const[a,o]=(0,c.useState)(!1),r=(0,c.useRef)(void 0),i=(0,c.useCallback)((()=>{(0,v.Z)(s),o(!0),r.current=window.setTimeout((()=>{o(!1)}),1e3)}),[s]);return(0,c.useEffect)((()=>()=>window.clearTimeout(r.current)),[]),(0,l.jsx)("button",{type:"button","aria-label":a?(0,j.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,j.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,j.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,n.Z)("clean-btn",t,y.copyButton,a&&y.copyButtonCopied),onClick:i,children:(0,l.jsxs)("span",{className:y.copyButtonIcons,"aria-hidden":"true",children:[(0,l.jsx)(N,{className:y.copyButtonIcon}),(0,l.jsx)(k,{className:y.copyButtonSuccessIcon})]})})}function Z(e){return(0,l.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,l.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}const B={wordWrapButtonIcon:"wordWrapButtonIcon_iowe",wordWrapButtonEnabled:"wordWrapButtonEnabled_gY8A"};function L(e){let{className:s,onClick:t,isEnabled:c}=e;const a=(0,j.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,l.jsx)("button",{type:"button",onClick:t,className:(0,n.Z)("clean-btn",s,c&&B.wordWrapButtonEnabled),"aria-label":a,title:a,children:(0,l.jsx)(Z,{className:B.wordWrapButtonIcon,"aria-hidden":"true"})})}function _(e){let{children:s,className:t="",metastring:c,title:a,showLineNumbers:r,language:d}=e;const{prism:{defaultLanguage:p,magicComments:b}}=(0,u.L)(),v=d??(0,i.Vo)(t)??p,j=(0,o.p)(),N=(0,x.F)(),k=(0,i.bc)(c)||a,{lineClassNames:y,code:Z}=(0,i.nZ)(s,{metastring:c,language:v,magicComments:b}),B=r??(0,i.nt)(c);return(0,l.jsxs)(m,{as:"div",className:(0,n.Z)(t,v&&!t.includes(`language-${v}`)&&`language-${v}`),children:[k&&(0,l.jsx)("div",{className:g.codeBlockTitle,children:k}),(0,l.jsxs)("div",{className:g.codeBlockContent,children:[(0,l.jsx)(f.ZP,{...f.lG,theme:j,code:Z,language:v??"text",children:e=>{let{className:s,tokens:t,getLineProps:c,getTokenProps:a}=e;return(0,l.jsx)("pre",{tabIndex:0,ref:N.codeBlockRef,className:(0,n.Z)(s,g.codeBlock,"thin-scrollbar"),children:(0,l.jsx)("code",{className:(0,n.Z)(g.codeBlockLines,B&&g.codeBlockLinesWithNumbering),children:t.map(((e,s)=>(0,l.jsx)(h,{line:e,getLineProps:c,getTokenProps:a,classNames:y[s],showLineNumbers:B},s)))})})}}),(0,l.jsxs)("div",{className:g.buttonGroup,children:[(N.isEnabled||N.isCodeScrollable)&&(0,l.jsx)(L,{className:g.codeButton,onClick:()=>N.toggle(),isEnabled:N.isEnabled}),(0,l.jsx)(C,{className:g.codeButton,code:Z})]})]})]})}function w(e){let{children:s,...t}=e;const n=(0,a.Z)(),o=function(e){return c.Children.toArray(e).some((e=>(0,c.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(s),r="string"==typeof o?_:p;return(0,l.jsx)(r,{...t,children:o},String(n))}},730:(e,s,t)=>{"use strict";t.d(s,{Z:()=>o});t(85170);var c=t(45924);const a={iconEdit:"iconEdit_N_05"};var n=t(43010);function o(e){let{className:s,...t}=e;return(0,n.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,c.Z)(a.iconEdit,s),"aria-hidden":"true",...t,children:(0,n.jsx)("g",{children:(0,n.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}},85855:e=>{e.exports={generateCategoryPath:function(e){return`/blog/category/${String(e).trim().toLowerCase().replace(" ","-")}`}}},79805:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>c});const c=t.p+"assets/images/2023-05-11-cover@2x-10d07889a1694746bff69b98639e2860.png"},90189:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>c});const c=t.p+"assets/images/2023-05-11-cover@4x-5646d198e3cf5f4cfbf7400b3a697da5.png"},64897:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>c});const c=t.p+"assets/images/2023-05-12-cover@2x-c08a9381c9ff4a1e9a5d526155c1c613.png"},45870:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>c});const c=t.p+"assets/images/2023-05-12-cover@4x-2fdc6c379746eaa7f045582e04fc2801.png"},11302:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>c});const c=t.p+"assets/images/2023-05-16-cover@2x-b3159344d122d612acc22f5d8a1e71c4.png"},19933:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>c});const c=t.p+"assets/images/2023-05-16-cover@4x-1486644ec7a18623dd7a4cc457f563bc.png"},41127:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>c});const c=t.p+"assets/images/2023-05-23-cover@2x-2d2603c3031a4809169c086c9395508b.png"},62456:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>c});const c=t.p+"assets/images/2023-05-23-cover@4x-2b72f536d69e4880e094b6d668786926.png"},1084:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>c});const c=t.p+"assets/images/2023-05-30-cover@2x-9637f07bf1692aff5fed4812e1bc43bb.png"},52016:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>c});const c=t.p+"assets/images/2023-05-30-cover@4x-c3ddcda375a87cf9237d2704b5f80692.png"},7622:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>c});const c=t.p+"assets/images/2023-06-15-cover@2x-081921ef6f85b6d5a03eafc340654d0a.png"},31266:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>c});const c=t.p+"assets/images/2023-06-15-cover@4x-82b8513d4cd5e6fea19b64df868b5de5.png"},84926:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>c});const c=t.p+"assets/images/2023-06-20-cover@2x-76ddaa4928d114e6333c279821953184.png"},55360:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>c});const c=t.p+"assets/images/2023-06-20-cover@4x-977b7832993c334211866b595f1ccd98.png"},90530:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>c});const c=t.p+"assets/images/2023-06-29-cover@2x-7a02dfc6ae59867d0bb4dec6c3e743d6.png"},5067:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>c});const c=t.p+"assets/images/2023-06-29-cover@4x-fc60d3a6aa73a1100a46a688108d8b04.png"},24922:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>c});const c=t.p+"assets/images/2023-07-05-cover@2x-288a1426f5c2d6698f67c5ecf4782149.png"},57286:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>c});const c=t.p+"assets/images/2023-07-05-cover@4x-14e7206e69deb4a88610be0d5409ca21.png"},41779:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>c});const c=t.p+"assets/images/2023-07-11-cover@2x-e63c7827ebaa93ff5fdd49b2a7e3e6d2.png"},46751:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>c});const c=t.p+"assets/images/2023-07-11-cover@4x-2061572b4e39ad6594bcccdc1ebc06ad.png"},20307:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>c});const c=t.p+"assets/images/2023-07-19-cover@2x-1a7de890921be9e96facfe89dff0fd89.png"},3786:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>c});const c=t.p+"assets/images/2023-07-19-cover@4x-fb5729f0eb278096e3485b69538e36e0.png"},14149:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>c});const c=t.p+"assets/images/2023-07-22-cover@2x-d27bafdc8d18987a4a4a078feb37d6a6.png"},15389:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>c});const c=t.p+"assets/images/2023-07-22-cover@4x-adfc331ff0caa372bd48d7c798155678.png"},22056:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>c});const c=t.p+"assets/images/2023-08-09-cover@2x-1b92d449fe41610a95bd70d2c0ed9eb9.png"},20967:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>c});const c=t.p+"assets/images/2023-08-09-cover@4x-c0f067e27e97dde9487d939dad9ed318.png"},83345:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>c});const c=t.p+"assets/images/2023-09-14-cover@2x-0b99143005bfd9baec1a0cb034c05f6f.png"},87434:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>c});const c=t.p+"assets/images/2023-09-14-cover@4x-f7c816ae5a5675f3a6bc1ed5002b648d.png"},66616:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>c});const c=t.p+"assets/images/2023-09-27-cover@2x-5f0e96c24dcc72b9a58a8438f9257f9c.png"},29315:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>c});const c=t.p+"assets/images/2023-09-27-cover@4x-c3fac897bf9b1c64e9a85fc23d906911.png"},33579:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>c});const c=t.p+"assets/images/2023-10-24-cover@2x-52267782f64124859b3fb35c38d8a6fb.png"},97985:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>c});const c=t.p+"assets/images/2023-10-24-cover@4x-6fde32db13af2695601726092f1c2bc6.png"},89219:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>c});const c=t.p+"assets/images/2023-10-31-cover@2x-d00c3f16ce33f4dcc550b0e272f31cb9.png"},2422:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>c});const c=t.p+"assets/images/2023-10-31-cover@4x-cba9e39c36eae60543a75eb791a83422.png"},44015:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>c});const c=t.p+"assets/images/2023-12-07-cover@2x-c12f215a374dcbede01e46400f3ca3f1.png"},83409:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>c});const c=t.p+"assets/images/2023-12-07-cover@4x-45d142e640ddcb64dc7263ec4c704b27.png"},66945:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>c});const c=t.p+"assets/images/2023-12-13-cover@2x-3bed9eeefb7af665ec605ee006ee0239.png"},47976:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>c});const c=t.p+"assets/images/2023-12-13-cover@4x-79020c15405e776ea38ef9225fddd21c.png"},90698:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>c});const c=t.p+"assets/images/2024-01-08-cover@2x-b9cd0d59ae17043d4fcbe43af9261c05.png"},63102:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>c});const c=t.p+"assets/images/2024-01-08-cover@4x-27c26aaab79f4fb8d60958dd0168f01b.png"},37034:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>c});const c=t.p+"assets/images/2024-01-25-cover@2x-88c7d36a959e544e40d71aad7bdf425b.png"},70720:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>c});const c=t.p+"assets/images/2024-01-25-cover@4x-223166e677226a019c8a98180b990947.png"},59899:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>c});const c=t.p+"assets/images/2024-01-26-cover@2x-b293ad01983bae921e80d778c4d82c4a.png"},70137:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>c});const c=t.p+"assets/images/2024-01-26-cover@4x-98b5a0c4083d0b68c192f8fd06548e1a.png"},81949:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>c});const c=t.p+"assets/images/cover@2x-14003aa0aa31eb442b2a6170f9b5f493.png"},86475:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>c});const c=t.p+"assets/images/cover@4x-93ec81984bd86f018902297566a6d4b7.png"},87887:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>c});const c=t.p+"assets/images/head-bg-4647f705b2e7b0a8a44846c785c33661.png"},55646:(e,s,t)=>{var c={"./2023-05-11-cover@2x.png":79805,"./2023-05-11-cover@4x.png":90189,"./2023-05-12-cover@2x.png":64897,"./2023-05-12-cover@4x.png":45870,"./2023-05-16-cover@2x.png":11302,"./2023-05-16-cover@4x.png":19933,"./2023-05-23-cover@2x.png":41127,"./2023-05-23-cover@4x.png":62456,"./2023-05-30-cover@2x.png":1084,"./2023-05-30-cover@4x.png":52016,"./2023-06-15-cover@2x.png":7622,"./2023-06-15-cover@4x.png":31266,"./2023-06-20-cover@2x.png":84926,"./2023-06-20-cover@4x.png":55360,"./2023-06-29-cover@2x.png":90530,"./2023-06-29-cover@4x.png":5067,"./2023-07-05-cover@2x.png":24922,"./2023-07-05-cover@4x.png":57286,"./2023-07-11-cover@2x.png":41779,"./2023-07-11-cover@4x.png":46751,"./2023-07-19-cover@2x.png":20307,"./2023-07-19-cover@4x.png":3786,"./2023-07-22-cover@2x.png":14149,"./2023-07-22-cover@4x.png":15389,"./2023-08-09-cover@2x.png":22056,"./2023-08-09-cover@4x.png":20967,"./2023-09-14-cover@2x.png":83345,"./2023-09-14-cover@4x.png":87434,"./2023-09-27-cover@2x.png":66616,"./2023-09-27-cover@4x.png":29315,"./2023-10-24-cover@2x.png":33579,"./2023-10-24-cover@4x.png":97985,"./2023-10-31-cover@2x.png":89219,"./2023-10-31-cover@4x.png":2422,"./2023-12-07-cover@2x.png":44015,"./2023-12-07-cover@4x.png":83409,"./2023-12-13-cover@2x.png":66945,"./2023-12-13-cover@4x.png":47976,"./2024-01-08-cover@2x.png":90698,"./2024-01-08-cover@4x.png":63102,"./2024-01-25-cover@2x.png":37034,"./2024-01-25-cover@4x.png":70720,"./2024-01-26-cover@2x.png":59899,"./2024-01-26-cover@4x.png":70137,"./cover@2x.png":81949,"./cover@4x.png":86475,"./head-bg.png":87887};function a(e){var s=n(e);return t(s)}function n(e){if(!t.o(c,e)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return c[e]}a.keys=function(){return Object.keys(c)},a.resolve=n,e.exports=a,a.id=55646}}]);