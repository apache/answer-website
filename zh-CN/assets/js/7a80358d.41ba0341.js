"use strict";(self.webpackChunkanswer=self.webpackChunkanswer||[]).push([[7665],{97150:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var t=i(43010),r=i(90887);const l={slug:"/development/plugins"},s="\u63d2\u4ef6\u5f00\u53d1\u6307\u5357",o={id:"development/plugins/plugin",title:"\u63d2\u4ef6\u5f00\u53d1\u6307\u5357",description:"Plugins are a way to extend the functionality of the Answer project. You can create your own plugins to meet your own needs.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/plugins/plugin.md",sourceDirName:"development/plugins",slug:"/development/plugins",permalink:"/zh-CN/docs/development/plugins",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/answer-website/zh-CN",tags:[],version:"current",lastUpdatedBy:"LinkinStars",lastUpdatedAt:1740580777,formattedLastUpdatedAt:"2025\u5e742\u670826\u65e5",frontMatter:{slug:"/development/plugins"},sidebar:"docs",previous:{title:"Development Guide",permalink:"/zh-CN/docs/development"},next:{title:"Plugin Configuration Schema",permalink:"/zh-CN/docs/development/plugins/plugin-config"}},d={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Plugin template types",id:"plugin-template-types",level:3},{value:"Plugin type",id:"plugin-type",level:3},{value:"Create a Plugin",id:"create-a-plugin",level:2},{value:"Run the Plugin",id:"run-the-plugin",level:2},{value:"Run the Backend Plugin",id:"run-the-backend-plugin",level:3},{value:"Run the Standard UI Plugin",id:"run-the-standard-ui-plugin",level:3},{value:"Backend Plugin Development",id:"backend-plugin-development",level:2},{value:"Implement the Base interface",id:"implement-the-base-interface",level:3},{value:"Implement the function interface",id:"implement-the-function-interface",level:3},{value:"Implement the configuration interface",id:"implement-the-configuration-interface",level:3},{value:"Register initialization function",id:"register-initialization-function",level:3},{value:"Standard UI plugin Development",id:"standard-ui-plugin-development",level:2},{value:"Editor plugin",id:"editor-plugin",level:3},{value:"Route plugin",id:"route-plugin",level:3},{value:"Captcha plugin",id:"captcha-plugin",level:3},{value:"Builtin plugin Development",id:"builtin-plugin-development",level:2},{value:"How to develop builtin plugin",id:"how-to-develop-builtin-plugin",level:3}];function a(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"\u63d2\u4ef6\u5f00\u53d1\u6307\u5357",children:"\u63d2\u4ef6\u5f00\u53d1\u6307\u5357"}),"\n",(0,t.jsx)(n.p,{children:"Plugins are a way to extend the functionality of the Answer project. You can create your own plugins to meet your own needs."}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["Viewing the ",(0,t.jsx)(n.a,{href:"https://github.com/apache/answer-plugins",children:(0,t.jsx)(n.strong,{children:"official plugin code"})})," will make you to quickly understand and learn plugin development."]})}),"\n",(0,t.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsx)(n.h3,{id:"plugin-template-types",children:"Plugin template types"}),"\n",(0,t.jsx)(n.p,{children:"Currently we have three types of plugins:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Backend plugin"}),"\n",(0,t.jsx)(n.li,{children:"Standard UI plugin"}),"\n",(0,t.jsx)(n.li,{children:"Builtin plugin"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"plugin-type",children:"Plugin type"}),"\n",(0,t.jsx)(n.p,{children:"We classify plugins into different types. Different types of plugins have different functions. Plugins of the same type have the same effect, but are implemented differently."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Plugin Name"}),(0,t.jsx)(n.th,{children:"Template Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Connector"}),(0,t.jsx)(n.td,{children:"Backend Plugin"}),(0,t.jsx)(n.td,{children:"The Connector plugin helps us to implement third-party login functionality"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Storage"}),(0,t.jsx)(n.td,{children:"Backend Plugin"}),(0,t.jsx)(n.td,{children:"The Storage plugin helps us to upload files to third-party storage."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Cache"}),(0,t.jsx)(n.td,{children:"Backend Plugin"}),(0,t.jsx)(n.td,{children:"Support for using different caching middleware."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Search"}),(0,t.jsx)(n.td,{children:"Backend Plugin"}),(0,t.jsx)(n.td,{children:"Support for using search engines to speed up the search for question answers."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"User Center"}),(0,t.jsx)(n.td,{children:"Backend Plugin"}),(0,t.jsx)(n.td,{children:"Using the third-party user system to manage users."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Notification"}),(0,t.jsx)(n.td,{children:"Backend Plugin"}),(0,t.jsx)(n.td,{children:"The Notification plugin helps us to send messages to third-party notification systems."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Route"}),(0,t.jsx)(n.td,{children:"Standard UI Plugin"}),(0,t.jsx)(n.td,{children:"Provides support for custom routing."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Editor"}),(0,t.jsx)(n.td,{children:"Standard UI Plugin"}),(0,t.jsx)(n.td,{children:"Supports extending the markdown editor's toolbar."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Captcha"}),(0,t.jsx)(n.td,{children:"Standard UI Plugin"}),(0,t.jsx)(n.td,{children:"Provides support for captcha."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Reviewer"}),(0,t.jsx)(n.td,{children:"Backend Plugin"}),(0,t.jsx)(n.td,{children:"Allows customizing the reviewer functionality."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Filter"}),(0,t.jsx)(n.td,{children:"Backend Plugin"}),(0,t.jsx)(n.td,{children:"Filter out illegal questions or answers. (coming soon)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Render"}),(0,t.jsx)(n.td,{children:"Standard UI Plugin"}),(0,t.jsx)(n.td,{children:"Parsers for different content formats. (coming soon)"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"create-a-plugin",children:"Create a Plugin"}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"name"})," field in package.json is the name of the package we add dependencies to; do not use ",(0,t.jsx)(n.code,{children:"_"})," to connect this field naming, please use ",(0,t.jsx)(n.code,{children:"-"}),"; for example:"]}),(0,t.jsxs)(n.p,{children:['"editor-chart" \u2705',(0,t.jsx)(n.br,{}),"\n",'"editor_chart" \u274c']})]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Go to the ",(0,t.jsx)(n.code,{children:"ui > src > plugin"})," directory of the project."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Execute the following commands in that directory:"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"npx create-answer-plugin <pluginName>\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"Select the type of plugin you want to create."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"run-the-plugin",children:"Run the Plugin"}),"\n",(0,t.jsx)(n.h3,{id:"run-the-backend-plugin",children:"Run the Backend Plugin"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["First, execute ",(0,t.jsx)(n.code,{children:"make ui"})," to compile the front-end code."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.code,{children:"cmd > answer > main.go"})," file, import your plugin."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'import (\n  answercmd "github.com/apache/answer/cmd"\n\n  // Import the plugins\n  _ "github.com/apache/answer/ui/src/plugins/my-plugin"\n)\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Use ",(0,t.jsx)(n.code,{children:"go mod edit"})," to add the plugin to the ",(0,t.jsx)(n.code,{children:"go.mod"})," file."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"go mod edit -replace=github.com/apache/answer/ui/src/plugins/my-plugin=../ui/src/plugins/my-plugin\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Update the dependencies."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"go mod tidy\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Start the project."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"go run cmd/answer/main.go run -C ./answer-data\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"run-the-standard-ui-plugin",children:"Run the Standard UI Plugin"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Go to the ",(0,t.jsx)(n.code,{children:"ui"})," directory."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Install the dependencies."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"pnpm pre-install\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Start the project."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"pnpm start\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Refer to the ",(0,t.jsx)(n.a,{href:"/docs/development/plugins#debugging-plugins",children:"Run the Backend Plugin"})," and add the plugin to the project."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"backend-plugin-development",children:"Backend Plugin Development"}),"\n",(0,t.jsx)(n.h3,{id:"implement-the-base-interface",children:"Implement the Base interface"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"Base"})," interface contains basic information about the plugin and is used to display."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"// Info presents the plugin information\ntype Info struct {\n    Name        Translator\n    SlugName    string\n    Description Translator\n    Author      string\n    Version     string\n    Link        string\n}\n\n// Base is the base plugin\ntype Base interface {\n    // Info returns the plugin information\n    Info() Info\n}\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"SlugName"})," of the plugin must be unique. Two plugins with the same ",(0,t.jsx)(n.code,{children:"SlugName"})," will panic when registering."]})}),"\n",(0,t.jsx)(n.h3,{id:"implement-the-function-interface",children:"Implement the function interface"}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsx)(n.p,{children:"Different plugin types require different interfaces of implementation."}),(0,t.jsxs)(n.p,{children:["For example, following is the ",(0,t.jsx)(n.code,{children:"Connector"})," plugin interface."]})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"type Connector interface {\n    Base\n    \n    // ConnectorLogoSVG presents the logo in svg format\n    ConnectorLogoSVG() string\n    \n    // ConnectorName presents the name of the connector\n    // e.g. Facebook, Twitter, Instagram\n    ConnectorName() Translator\n    \n    // ConnectorSlugName presents the slug name of the connector\n    // Please use lowercase and hyphen as the separator\n    // e.g. facebook, twitter, instagram\n    ConnectorSlugName() string\n    \n    // ConnectorSender presents the sender of the connector\n    // It handles the start endpoint of the connector\n    // receiverURL is the whole URL of the receiver\n    ConnectorSender(ctx *GinContext, receiverURL string) (redirectURL string)\n    \n    // ConnectorReceiver presents the receiver of the connector\n    // It handles the callback endpoint of the connector, and returns the\n    ConnectorReceiver(ctx *GinContext, receiverURL string) (userInfo ExternalLoginUserInfo, err error)\n}\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Translator"})," is a struct for translation. Please refer to ",(0,t.jsx)(n.a,{href:"/docs/development/plugins/plugin-translation",children:"the documentation"})," for details."]})}),"\n",(0,t.jsx)(n.h3,{id:"implement-the-configuration-interface",children:"Implement the configuration interface"}),"\n",(0,t.jsxs)(n.p,{children:["For details on the description of each configuration item, please refer to ",(0,t.jsx)(n.a,{href:"/docs/development/plugins/plugin-config",children:"the documentation"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"type Config interface {\n    Base\n\n    // ConfigFields returns the list of config fields\n    ConfigFields() []ConfigField\n\n    // ConfigReceiver receives the config data, it calls when the config is saved or initialized.\n    // We recommend to unmarshal the data to a struct, and then use the struct to do something.\n    // The config is encoded in JSON format.\n    // It depends on the definition of ConfigFields.\n    ConfigReceiver(config []byte) error\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"register-initialization-function",children:"Register initialization function"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'import "github.com/apache/answer/plugin"\n\nfunc init() {\n    plugin.Register(&GitHubConnector{\n        Config: &GitHubConnectorConfig{},\n    })\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"standard-ui-plugin-development",children:"Standard UI plugin Development"}),"\n",(0,t.jsx)(n.p,{children:"The default configuration is as follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"slug_name: <slug_name> \ntype: <type>\nversion: 0.0.1\nauthor: \n\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import i18nConfig from './i18n';\nimport Component from './Component';\nimport info from './info.yaml';\n\nexport default {\n  info: {\n    slug_name: info.slug_name,\n    type: info.type, \n  },\n  i18nConfig,\n  component: Component, \n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Among them, ",(0,t.jsx)(n.code,{children:"type"}),"\u3001",(0,t.jsx)(n.code,{children:"slug_name"})," and ",(0,t.jsx)(n.code,{children:"component"})," are required fields. ",(0,t.jsx)(n.code,{children:"i18nConfig"})," and ",(0,t.jsx)(n.code,{children:"hooks"})," are optional fields."]}),"\n",(0,t.jsx)(n.p,{children:"Currently the front end supports the following types of plugins:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"editor"}),"\n",(0,t.jsx)(n.li,{children:"route"}),"\n",(0,t.jsx)(n.li,{children:"captcha"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"editor-plugin",children:"Editor plugin"}),"\n",(0,t.jsxs)(n.p,{children:["Refer to ",(0,t.jsx)(n.a,{href:"https://github.com/apache/answer-plugins/tree/main/editor-chart",children:"editor-chart"})," for details."]}),"\n",(0,t.jsx)(n.h3,{id:"route-plugin",children:"Route plugin"}),"\n",(0,t.jsxs)(n.p,{children:["The plugin configuration of the routing type adds the ",(0,t.jsx)(n.code,{children:"route"})," field to the configuration file."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"slug_name: <slug_name>\nroute: /<route>\ntype: route\nversion: 0.0.1\nauthor: \n\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import i18nConfig from './i18n';\nimport Component from './Component';\nimport info from './info.yaml';\n\nexport default {\n  info: {\n    slug_name: info.slug_name,\n    type: info.type,\n    route: info.route,\n  },\n  i18nConfig,\n  component: Component,\n};\n"})}),"\n",(0,t.jsx)(n.h3,{id:"captcha-plugin",children:"Captcha plugin"}),"\n",(0,t.jsxs)(n.p,{children:["Refer to ",(0,t.jsx)(n.a,{href:"https://github.com/apache/answer-plugins/tree/main/captcha-basic",children:"captcha-basic"})," for details."]}),"\n",(0,t.jsx)(n.h2,{id:"builtin-plugin-development",children:"Builtin plugin Development"}),"\n",(0,t.jsx)(n.p,{children:"It is not so different from React component, this plugin is more suitable for the following scenarios:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"There are complex business logics that cannot be separated from the code (such as Oauth)."}),"\n",(0,t.jsx)(n.li,{children:"Some back-end plugins require UI support for business purposes (such as Search)."}),"\n",(0,t.jsx)(n.li,{children:"This plugin has extremely low requirements for developers and requires no additional configuration work."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"how-to-develop-builtin-plugin",children:"How to develop builtin plugin"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Get familiar with the directory structure"}),". Go to the ",(0,t.jsx)(n.code,{children:"ui/src/plugins/builtin"})," directory and create a directory, such as Demo. Then refer to the existing plugins to create the necessary files to start development."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-txt",children:"// ui/src/plugins/builtin\n.\n\u251c\u2500\u2500 ...\n\u251c\u2500\u2500 Demo\n      \u251c\u2500\u2500 i18n (language file)\n            \u251c\u2500\u2500 en_US.yaml (default language required)\n            \u251c\u2500\u2500 index.ts (required)\n            \u251c\u2500\u2500 zh_CN.ts (any language you want to provide)\n      \u251c\u2500\u2500 index.tsx (component required)\n      \u251c\u2500\u2500 info.yaml (plugin information required)\n      \u251c\u2500\u2500 services.ts (api)\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["Export the plugins you have just defined in the plugins list file ",(0,t.jsx)(n.code,{children:"plugins/builtin/index.ts"})]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import Demo from './Demo'\n\nexport default {\n  ...(exists plugins),\n  Demo,\n};\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"Now you can use the PluginRender component to render the just-defined plugin where you want it!"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'  <PluginRender\n    type="connector"\n    slug_name="third_party_connector"\n  />\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Publish plugin"}),": initiate the PR process normally and describe the plugin function and scope of influence in detail."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},90887:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>s});var t=i(85170);const r={},l=t.createContext(r);function s(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);