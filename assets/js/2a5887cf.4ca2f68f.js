"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[8325],{55392:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={},o="Snowflake Migration Guide",s={unversionedId:"integrations/destinations/snowflake-migrations",id:"integrations/destinations/snowflake-migrations",title:"Snowflake Migration Guide",description:"Upgrading to 3.0.0",source:"@site/../docs/integrations/destinations/snowflake-migrations.md",sourceDirName:"integrations/destinations",slug:"/integrations/destinations/snowflake-migrations",permalink:"/integrations/destinations/snowflake-migrations",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/destinations/snowflake-migrations.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Snowflake",permalink:"/integrations/destinations/snowflake"},next:{title:"Sqlite",permalink:"/integrations/destinations/sqlite"}},l={},p=[{value:"Upgrading to 3.0.0",id:"upgrading-to-300",level:2},{value:"Upgrading to 2.0.0",id:"upgrading-to-200",level:2}],d={toc:p},u="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"snowflake-migration-guide"},"Snowflake Migration Guide"),(0,a.kt)("h2",{id:"upgrading-to-300"},"Upgrading to 3.0.0"),(0,a.kt)("p",null,"This version introduces ",(0,a.kt)("a",{parentName:"p",href:"/release_notes/upgrading_to_destinations_v2/#what-is-destinations-v2"},"Destinations V2"),", which provides better error handling, incremental delivery of data for large syncs, and improved final table structures. To review the breaking changes, and how to upgrade, see ",(0,a.kt)("a",{parentName:"p",href:"/release_notes/upgrading_to_destinations_v2/#quick-start-to-upgrading"},"here"),". These changes will likely require updates to downstream dbt / SQL models, which we walk through ",(0,a.kt)("a",{parentName:"p",href:"/release_notes/upgrading_to_destinations_v2/#updating-downstream-transformations"},"here"),".  Selecting ",(0,a.kt)("inlineCode",{parentName:"p"},"Upgrade")," will upgrade ",(0,a.kt)("strong",{parentName:"p"},"all")," connections using this destination at their next sync. You can manually sync existing connections prior to the next scheduled sync to start the upgrade early. "),(0,a.kt)("p",null,"Worthy of specific mention, this version includes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Per-record error handling"),(0,a.kt)("li",{parentName:"ul"},"Clearer table structure"),(0,a.kt)("li",{parentName:"ul"},"Removal of sub-tables for nested properties"),(0,a.kt)("li",{parentName:"ul"},"Removal of SCD tables")),(0,a.kt)("p",null,"Learn more about what's new in Destinations V2 ",(0,a.kt)("a",{parentName:"p",href:"/understanding-airbyte/typing-deduping"},"here"),"."),(0,a.kt)("h2",{id:"upgrading-to-200"},"Upgrading to 2.0.0"),(0,a.kt)("p",null,"Snowflake no longer supports GCS/S3. Please migrate to the Internal Staging option. This is recommended by Snowflake and is cheaper and faster."))}c.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),g=a,f=u["".concat(l,".").concat(g)]||u[g]||c[g]||i;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"}}]);