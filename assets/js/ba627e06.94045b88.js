"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[22634],{18498:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={},i="Profile Java Connector Memory Usage",l={unversionedId:"connector-development/tutorials/profile-java-connector-memory",id:"connector-development/tutorials/profile-java-connector-memory",title:"Profile Java Connector Memory Usage",description:"This tutorial demos how to profile the memory usage of a Java connector with Visual VM. Such profiling can be useful when we want to debug memory leaks, or optimize the connector's memory footprint.",source:"@site/../docs/connector-development/tutorials/profile-java-connector-memory.md",sourceDirName:"connector-development/tutorials",slug:"/connector-development/tutorials/profile-java-connector-memory",permalink:"/connector-development/tutorials/profile-java-connector-memory",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/connector-development/tutorials/profile-java-connector-memory.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Building a Java Destination",permalink:"/connector-development/tutorials/building-a-java-destination"},next:{title:"Connector Specification Reference",permalink:"/connector-development/connector-specification-reference"}},c={},p=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"Step-by-Step",id:"step-by-step",level:2}],m={toc:p},s="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"profile-java-connector-memory-usage"},"Profile Java Connector Memory Usage"),(0,r.kt)("p",null,"This tutorial demos how to profile the memory usage of a Java connector with Visual VM. Such profiling can be useful when we want to debug memory leaks, or optimize the connector's memory footprint."),(0,r.kt)("p",null,"The example focuses on docker deployment, because it is more straightforward. It is also possible to apply the same procedure to Kubernetes deployments."),(0,r.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.docker.com/products/personal"},"Docker")," running locally."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://visualvm.github.io/"},"VisualVM")," preinstalled.")),(0,r.kt)("h2",{id:"step-by-step"},"Step-by-Step"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enable JMX in ",(0,r.kt)("inlineCode",{parentName:"p"},"airbyte-integrations/connectors/<connector-name>/build.gradle"),", and expose it on port 6000. The port is chosen arbitrary, and can be port number that's available."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"<connector-name>")," examples: ",(0,r.kt)("inlineCode",{parentName:"p"},"source-mysql"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"source-github"),",  ",(0,r.kt)("inlineCode",{parentName:"p"},"destination-snowflake"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},"application {\n  mainClass = 'io.airbyte.integrations.<connector-main-class>'\n  applicationDefaultJvmArgs = [\n    '-XX:+ExitOnOutOfMemoryError',\n    '-XX:MaxRAMPercentage=75.0',\n\n    // add the following JVM arguments to enable JMX:\n    '-XX:NativeMemoryTracking=detail',\n    '-XX:+UsePerfData',\n    '-Djava.rmi.server.hostname=localhost',\n    '-Dcom.sun.management.jmxremote=true',\n    '-Dcom.sun.management.jmxremote.port=6000',\n    \"-Dcom.sun.management.jmxremote.rmi.port=6000\",\n    '-Dcom.sun.management.jmxremote.local.only=false',\n    '-Dcom.sun.management.jmxremote.authenticate=false',\n    '-Dcom.sun.management.jmxremote.ssl=false',\n\n    // optionally, add a max heap size to limit the memory usage\n    '-Xmx2000m',\n  ]\n}\n")))),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},""))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Modify ",(0,r.kt)("inlineCode",{parentName:"p"},"airbyte-integrations/connectors/<connector-name>/Dockerfile")," to expose the JMX port."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-dockerfile"},"// optionally install procps to enable the ps command in the connector container\nRUN apt-get update && apt-get install -y procps && rm -rf /var/lib/apt/lists/*\n\n// expose the same JMX port specified in the previous step\nEXPOSE 6000\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Expose the same port in ",(0,r.kt)("inlineCode",{parentName:"p"},"airbyte-workers/src/main/java/io/airbyte/workers/process/DockerProcessFactory.java"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// map local 6000 to the JMX port from the container\nif (imageName.startsWith("airbyte/<connector-name>")) {\n  LOGGER.info("Exposing image {} port 6000", imageName);\n  cmd.add("-p");\n  cmd.add("6000:6000");\n}\n')),(0,r.kt)("p",{parentName:"li"}," Disable the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/network/host/"},(0,r.kt)("inlineCode",{parentName:"a"},"host")," network mode")," by ",(0,r.kt)("em",{parentName:"p"},"removing")," the following code block in the same file. This is necessary because under the ",(0,r.kt)("inlineCode",{parentName:"p"},"host")," network mode, published ports are discarded."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'if (networkName != null) {\n  cmd.add("--network");\n  cmd.add(networkName);\n}\n')),(0,r.kt)("p",{parentName:"li"},"(This ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/pull/10394/commits/097ec57869a64027f5b7858aa8bb9575844e8b76"},"commit")," can be used as a reference. It reverts them. So just do the opposite.)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Build and launch Airbyte locally. It is necessary to build it because we have modified the ",(0,r.kt)("inlineCode",{parentName:"p"},"DockerProcessFactory.java"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"SUB_BUILD=PLATFORM ./gradlew build -x test\nVERSION=dev docker compose up\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Build the connector to be profiled locally. It will create a ",(0,r.kt)("inlineCode",{parentName:"p"},"dev")," version local image: ",(0,r.kt)("inlineCode",{parentName:"p"},"airbyte/<connector-name>:dev"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"./gradlew :airbyte-integrations:connectors:<connector-name>:airbyteDocker\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Connect to the launched local Airbyte server at ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost:8000"),", go to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Settings")," page, and change the version of the connector to be profiled to ",(0,r.kt)("inlineCode",{parentName:"p"},"dev")," which was just built in the previous step.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a connection using the connector to be profiled."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"Replication frequency")," of this connector should be ",(0,r.kt)("inlineCode",{parentName:"li"},"manual")," so that we can control when it starts."),(0,r.kt)("li",{parentName:"ul"},"We can use the e2e test connectors as either the source or destination for convenience."),(0,r.kt)("li",{parentName:"ul"},"The e2e test connectors are usually very reliable, and requires little configuration."),(0,r.kt)("li",{parentName:"ul"},"For example, if we are profiling a source connector, create an e2e test destination at the other end of the connection."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Profile the connector in question."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Launch a data sync run."),(0,r.kt)("li",{parentName:"ul"},"After the run starts, open Visual VM, and click ",(0,r.kt)("inlineCode",{parentName:"li"},"File")," / ",(0,r.kt)("inlineCode",{parentName:"li"},"Add JMX Connection..."),". A modal will show up. Type in ",(0,r.kt)("inlineCode",{parentName:"li"},"localhost:6000"),", and click ",(0,r.kt)("inlineCode",{parentName:"li"},"OK"),"."),(0,r.kt)("li",{parentName:"ul"},"Now we can see a new connection shows up under the ",(0,r.kt)("inlineCode",{parentName:"li"},"Local")," category on the left, and the information about the connector's JVM gets retrieved.")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://visualvm.github.io/images/visualvm_screenshot_20.png",alt:"visual vm screenshot"})))))}u.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,h=s["".concat(c,".").concat(d)]||s[d]||u[d]||o;return n?a.createElement(h,i(i({ref:t},m),{},{components:n})):a.createElement(h,i({ref:t},m))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);