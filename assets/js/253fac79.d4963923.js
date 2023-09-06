"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[68192],{84764:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={},i="Sugar CRM",s={unversionedId:"integrations/sources/sugar-crm",id:"integrations/sources/sugar-crm",title:"Sugar CRM",description:"Sugar CRM is an open source eCommerce platform built on Wordpress.",source:"@site/../docs/integrations/sources/sugar-crm.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/sugar-crm",permalink:"/integrations/sources/sugar-crm",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/sugar-crm.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Stripe Migration Guide",permalink:"/integrations/sources/stripe-migrations"},next:{title:"SurveySparrow",permalink:"/integrations/sources/survey-sparrow"}},u={},c=[{value:"Sync overview",id:"sync-overview",level:2},{value:"Output schema",id:"output-schema",level:3}],l={toc:c},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sugar-crm"},"Sugar CRM"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.sugarcrm.com/"},"Sugar CRM")," is an open source eCommerce platform built on Wordpress."),(0,a.kt)("h2",{id:"sync-overview"},"Sync overview"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"You will only be able to connect to a self-hosted instance of Sugar CRM using these instructions.")),(0,a.kt)("p",null,"Sugar CRM can run on the MySQL, MSSQL, Oracle, or Db2 databases. You can use Airbyte to sync your Sugar CRM instance by connecting to the underlying database using the appropriate Airbyte connector:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/integrations/sources/db2"},"DB2")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/integrations/sources/mysql"},"MySQL")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/integrations/sources/mssql"},"MSSQL")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/integrations/sources/oracle"},"Oracle"))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"To use Oracle or DB2, you'll require an Enterprise or Ultimate Sugar subscription.")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Reach out to your service representative or system admin to find the parameters required to connect to the underlying database")),(0,a.kt)("h3",{id:"output-schema"},"Output schema"),(0,a.kt)("p",null,"To understand your Sugar CRM database schema, see the ",(0,a.kt)("a",{parentName:"p",href:"https://support.sugarcrm.com/Documentation/Sugar_Developer/Sugar_Developer_Guide_11.0/Data_Framework/Vardefs/"},"VarDefs")," documentation. Otherwise, the schema will be loaded according to the rules of the underlying database's connector."))}m.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(r),d=a,g=p["".concat(u,".").concat(d)]||p[d]||m[d]||o;return r?n.createElement(g,i(i({ref:t},l),{},{components:r})):n.createElement(g,i({ref:t},l))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);