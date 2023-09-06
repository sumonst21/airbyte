"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[42544],{56718:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const i={},a="Stripe Migration Guide",s={unversionedId:"integrations/sources/stripe-migrations",id:"integrations/sources/stripe-migrations",title:"Stripe Migration Guide",description:"Upgrading to 4.0.0",source:"@site/../docs/integrations/sources/stripe-migrations.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/stripe-migrations",permalink:"/integrations/sources/stripe-migrations",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/stripe-migrations.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Stripe",permalink:"/integrations/sources/stripe"},next:{title:"Sugar CRM",permalink:"/integrations/sources/sugar-crm"}},c={},u=[{value:"Upgrading to 4.0.0",id:"upgrading-to-400",level:2}],p={toc:u},l="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(l,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"stripe-migration-guide"},"Stripe Migration Guide"),(0,o.kt)("h2",{id:"upgrading-to-400"},"Upgrading to 4.0.0"),(0,o.kt)("p",null,"A major update of most streams to support event-based incremental sync mode. This allows the connector to pull not only the newly created data since the last sync, but the modified data as well.\nA schema refresh is required for the connector to use the new cursor format."))}d.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(r),m=o,g=l["".concat(c,".").concat(m)]||l[m]||d[m]||i;return r?n.createElement(g,a(a({ref:t},p),{},{components:r})):n.createElement(g,a({ref:t},p))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);