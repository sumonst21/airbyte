"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[7570],{44874:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(83117),a=(r(67294),r(3905));const o={},i="Deploy Airbyte",l={unversionedId:"quickstart/deploy-airbyte",id:"quickstart/deploy-airbyte",title:"Deploy Airbyte",description:"Deploying Airbyte Open-Source just takes two steps.",source:"@site/../docs/quickstart/deploy-airbyte.md",sourceDirName:"quickstart",slug:"/quickstart/deploy-airbyte",permalink:"/quickstart/deploy-airbyte",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/quickstart/deploy-airbyte.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Airbyte Open Source Quick Start",permalink:"/category/airbyte-open-source-quick-start"},next:{title:"Add a Source",permalink:"/quickstart/add-a-source"}},s={},p=[{value:"FAQ",id:"faq",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deploy-airbyte"},"Deploy Airbyte"),(0,a.kt)("p",null,"Deploying Airbyte Open-Source just takes two steps."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install Docker on your workstation ","(","see ",(0,a.kt)("a",{parentName:"li",href:"https://www.docker.com/products/docker-desktop"},"instructions"),")",". Make sure you're on the latest version of ",(0,a.kt)("inlineCode",{parentName:"li"},"docker-compose"),"."),(0,a.kt)("li",{parentName:"ol"},"Run the following commands in your terminal:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/airbytehq/airbyte.git\ncd airbyte\ndocker-compose up\n")),(0,a.kt)("p",null,"Once you see an Airbyte banner, the UI is ready to go at ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:8000"},"http://localhost:8000"),"! You will be asked for a username and password. By default, that's username ",(0,a.kt)("inlineCode",{parentName:"p"},"airbyte")," and password ",(0,a.kt)("inlineCode",{parentName:"p"},"password"),". Once you deploy airbyte to your servers, ",(0,a.kt)("strong",{parentName:"p"},"be sure to change these")," in your ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,a.kt)("p",null,"Alternatively, if you have an Airbyte Cloud invite, just follow ",(0,a.kt)("a",{parentName:"p",href:"/deploying-airbyte/on-cloud"},"these steps.")),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("p",null,"If you have any questions about the Airbyte Open-Source setup and deployment process, head over to our ",(0,a.kt)("a",{parentName:"p",href:"https://discuss.airbyte.io/c/faq/15"},"Getting Started FAQ")," on our Discourse that answers the following questions and more:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"How long does it take to set up Airbyte?"),(0,a.kt)("li",{parentName:"ul"},"Where can I see my data once I've run a sync?"),(0,a.kt)("li",{parentName:"ul"},"Can I set a start time for my sync?")),(0,a.kt)("p",null,"If there are any questions that we couldn't answer here, we'd love to help you get started. ",(0,a.kt)("a",{parentName:"p",href:"https://airbytehq.slack.com/ssb/redirect"},"Join our Slack")," and feel free to ask your questions in the ","#","getting-started channel."))}u.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),y=p(r),d=a,m=y["".concat(s,".").concat(d)]||y[d]||u[d]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"}}]);