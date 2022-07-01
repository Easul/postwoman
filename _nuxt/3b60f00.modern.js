(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{1244:function(e,t,r){"use strict";r.d(t,"a",(function(){return y})),r.d(t,"b",(function(){return h}));var o=r(13),n=(r(35),r(41),r(107),r(827)),a=r(971),c=r(907),l=r(901),i=r(1077),s=r(198),d=r.n(s),u=r(61),p=r(247),v=r.n(p);function g(e,t){var r;return c.fromNullable(null!=(r=t.selected.find((t=>t.key===e)))?r:t.global.find((t=>t.key===e)))}function b(e,t,r){var o=r.selected.findIndex((t=>t.key===e));if(o>=0)return r.selected[o].value=t,{global:r.global,selected:r.selected};var n=r.global.findIndex((t=>t.key==e));return n>=0?(r.global[n].value=t,{global:r.global,selected:r.selected}):(r.selected.push({key:e,value:t}),{global:r.global,selected:r.selected})}function m(e,t,r,o){var n=e.newObject(),a=e.newFunction("toBe",(n=>{var a=e.dump(n),c=t===a;return r&&(c=!c),c?o[o.length-1].expectResults.push({status:"pass",message:"Expected '".concat(t,"' to").concat(r?" not":""," be '").concat(a,"'")}):o[o.length-1].expectResults.push({status:"fail",message:"Expected '".concat(t,"' to").concat(r?" not":""," be '").concat(a,"'")}),{value:e.undefined}})),c=e.newFunction("toBeLevel2xx",(()=>{if("number"!=typeof t||Number.isNaN(t))o[o.length-1].expectResults.push({status:"error",message:"Expected 200-level status but could not parse value '".concat(t,"'")});else{var n=t>=200&&t<=299;r&&(n=!n),n?o[o.length-1].expectResults.push({status:"pass",message:"Expected '".concat(t,"' to").concat(r?" not":""," be 200-level status")}):o[o.length-1].expectResults.push({status:"fail",message:"Expected '".concat(t,"' to").concat(r?" not":""," be 200-level status")})}return{value:e.undefined}})),l=e.newFunction("toBeLevel3xx",(()=>{if("number"!=typeof t||Number.isNaN(t))o[o.length-1].expectResults.push({status:"error",message:"Expected 300-level status but could not parse value '".concat(t,"'")});else{var n=t>=300&&t<=399;r&&(n=!n),n?o[o.length-1].expectResults.push({status:"pass",message:"Expected '".concat(t,"' to").concat(r?" not":""," be 300-level status")}):o[o.length-1].expectResults.push({status:"fail",message:"Expected '".concat(t,"' to").concat(r?" not":""," be 300-level status")})}return{value:e.undefined}})),i=e.newFunction("toBeLevel4xx",(()=>{if("number"!=typeof t||Number.isNaN(t))o[o.length-1].expectResults.push({status:"error",message:"Expected 400-level status but could not parse value '".concat(t,"'")});else{var n=t>=400&&t<=499;r&&(n=!n),n?o[o.length-1].expectResults.push({status:"pass",message:"Expected '".concat(t,"' to").concat(r?" not":""," be 400-level status")}):o[o.length-1].expectResults.push({status:"fail",message:"Expected '".concat(t,"' to").concat(r?" not":""," be 400-level status")})}return{value:e.undefined}})),s=e.newFunction("toBeLevel5xx",(()=>{if("number"!=typeof t||Number.isNaN(t))o[o.length-1].expectResults.push({status:"error",message:"Expected 500-level status but could not parse value '".concat(t,"'")});else{var n=t>=500&&t<=599;r&&(n=!n),n?o[o.length-1].expectResults.push({status:"pass",message:"Expected '".concat(t,"' to").concat(r?" not":""," be 500-level status")}):o[o.length-1].expectResults.push({status:"fail",message:"Expected '".concat(t,"' to").concat(r?" not":""," be 500-level status")})}return{value:e.undefined}})),d=e.newFunction("toBeType",(n=>{var a=e.dump(n);if(["string","boolean","number","object","undefined","bigint","symbol","function"].includes(a)){var c=typeof t===a;r&&(c=!c),c?o[o.length-1].expectResults.push({status:"pass",message:"Expected '".concat(t,"' to").concat(r?" not":""," be type '").concat(a,"'")}):o[o.length-1].expectResults.push({status:"fail",message:"Expected '".concat(t,"' to").concat(r?" not":""," be type '").concat(a,"'")})}else o[o.length-1].expectResults.push({status:"error",message:'Argument for toBeType should be "string", "boolean", "number", "object", "undefined", "bigint", "symbol" or "function"'});return{value:e.undefined}})),u=e.newFunction("toHaveLength",(n=>{var a=e.dump(n);if(!Array.isArray(t)&&"string"!=typeof t)return o[o.length-1].expectResults.push({status:"error",message:"Expected toHaveLength to be called for an array or string"}),{value:e.undefined};if("number"!=typeof a||Number.isNaN(a))o[o.length-1].expectResults.push({status:"error",message:"Argument for toHaveLength should be a number"});else{var c=t.length===a;r&&(c=!c),c?o[o.length-1].expectResults.push({status:"pass",message:"Expected the array to".concat(r?" not":""," be of length '").concat(a,"'")}):o[o.length-1].expectResults.push({status:"fail",message:"Expected the array to".concat(r?" not":""," be of length '").concat(a,"'")})}return{value:e.undefined}})),p=e.newFunction("toInclude",(n=>{var a=e.dump(n);if(!Array.isArray(t)&&"string"!=typeof t)return o[o.length-1].expectResults.push({status:"error",message:"Expected toInclude to be called for an array or string"}),{value:e.undefined};if(null===a)return o[o.length-1].expectResults.push({status:"error",message:"Argument for toInclude should not be null"}),{value:e.undefined};if(void 0===a)return o[o.length-1].expectResults.push({status:"error",message:"Argument for toInclude should not be undefined"}),{value:e.undefined};var c=t.includes(a);r&&(c=!c);var l=JSON.stringify(t),i=JSON.stringify(a);return c?o[o.length-1].expectResults.push({status:"pass",message:"Expected ".concat(l," to").concat(r?" not":""," include ").concat(i)}):o[o.length-1].expectResults.push({status:"fail",message:"Expected ".concat(l," to").concat(r?" not":""," include ").concat(i)}),{value:e.undefined}}));return e.setProp(n,"toBe",a),e.setProp(n,"toBeLevel2xx",c),e.setProp(n,"toBeLevel3xx",l),e.setProp(n,"toBeLevel4xx",i),e.setProp(n,"toBeLevel5xx",s),e.setProp(n,"toBeType",d),e.setProp(n,"toHaveLength",u),e.setProp(n,"toInclude",p),e.defineProp(n,"not",{get:()=>m(e,t,!r,o)}),a.dispose(),c.dispose(),l.dispose(),i.dispose(),s.dispose(),d.dispose(),u.dispose(),p.dispose(),n}var f=(e,t,r)=>Object(n.pipe)(a.tryCatch(Object(o.a)((function*(){return yield i.getQuickJS()})),(e=>"QuickJS initialization failed: ".concat(e))),a.chain((o=>{var i=v()(t),s=o.createVm(),d=s.newObject(),p=[{descriptor:"root",expectResults:[],children:[]}],f=s.newFunction("test",((e,t)=>{var r=s.getString(e);p.push({descriptor:r,expectResults:[],children:[]}),s.unwrapResult(s.callFunction(t,s.null)).dispose();var o=p.pop();p[p.length-1].children.push(o)})),h=s.newFunction("expect",(e=>{var t=s.dump(e);return{value:m(s,t,!1,p)}})),y=function(e,t){var r;try{r=JSON.stringify(t)}catch(e){return l.left("Marshaling stringification failed")}var o=e.newString(r),n=e.getProp(e.global,"JSON"),a=e.getProp(n,"parse"),c=e.callFunction(a,e.undefined,o);if(c.error)return c.error.dispose(),l.left("Marshaling failed");var i=e.unwrapResult(c);return o.dispose(),a.dispose(),n.dispose(),l.right(i)}(s,r);if(l.isLeft(y))return a.left("Response marshalling failed: ".concat(y.left));s.setProp(d,"response",y.right),y.right.dispose(),s.setProp(d,"expect",h),h.dispose(),s.setProp(d,"test",f),f.dispose();var x=s.newObject(),k=s.newFunction("get",(e=>{var t=s.dump(e);return"string"!=typeof t?{error:s.newString("Expected key to be a string")}:{value:Object(n.pipe)(g(t,i),c.match((()=>s.undefined),(e=>{var{value:t}=e;return s.newString(t)})))}})),O=s.newFunction("getResolve",(e=>{var r=s.dump(e);return"string"!=typeof r?{error:s.newString("Expected key to be a string")}:{value:Object(n.pipe)(g(r,i),l.fromOption((()=>"INVALID_KEY")),l.map((e=>{var{value:r}=e;return Object(n.pipe)(Object(u.parseTemplateStringE)(r,[...t.selected,...t.global]),l.getOrElse((()=>r)))})),l.map((e=>s.newString(e))),l.getOrElse((()=>s.undefined)))}})),j=s.newFunction("set",((e,t)=>{var r=s.dump(e),o=s.dump(t);return"string"!=typeof r?{error:s.newString("Expected key to be a string")}:"string"!=typeof o?{error:s.newString("Expected value to be a string")}:(i=b(r,o,i),{value:s.undefined})})),w=s.newFunction("resolve",(e=>{var t=s.dump(e);if("string"!=typeof t)return{error:s.newString("Expected value to be a string")};var r=Object(n.pipe)(Object(u.parseTemplateStringE)(t,[...i.selected,...i.global]),l.getOrElse((()=>t)));return{value:s.newString(r)}}));s.setProp(x,"resolve",w),w.dispose(),s.setProp(x,"set",j),j.dispose(),s.setProp(x,"getResolve",O),O.dispose(),s.setProp(x,"get",k),k.dispose(),s.setProp(d,"env",x),x.dispose(),s.setProp(s.global,"pw",d),d.dispose();var C=s.evalCode(e);if(C.error){var S=s.dump(C.error);return C.error.dispose(),a.left("Script evaluation failed: ".concat(S))}return s.dispose(),a.right({tests:p,envs:i})}))),h=(e,t,r)=>Object(n.pipe)(f(e,t,r),a.chain((e=>a.right({envs:e.envs,tests:e.tests[0]})))),y=(e,t)=>Object(n.pipe)(a.tryCatch(Object(o.a)((function*(){return yield i.getQuickJS()})),(e=>"QuickJS initialization failed: ".concat(e))),a.chain((r=>{var o=d()(t),i=r.createVm(),s=i.newObject(),p=i.newObject(),v=i.newFunction("get",(e=>{var t=i.dump(e);return"string"!=typeof t?{error:i.newString("Expected key to be a string")}:{value:Object(n.pipe)(g(t,o),c.match((()=>i.undefined),(e=>{var{value:t}=e;return i.newString(t)})))}})),m=i.newFunction("getResolve",(e=>{var r=i.dump(e);return"string"!=typeof r?{error:i.newString("Expected key to be a string")}:{value:Object(n.pipe)(g(r,o),l.fromOption((()=>"INVALID_KEY")),l.map((e=>{var{value:r}=e;return Object(n.pipe)(Object(u.parseTemplateStringE)(r,[...t.selected,...t.global]),l.getOrElse((()=>r)))})),l.map((e=>i.newString(e))),l.getOrElse((()=>i.undefined)))}})),f=i.newFunction("set",((e,t)=>{var r=i.dump(e),n=i.dump(t);return"string"!=typeof r?{error:i.newString("Expected key to be a string")}:"string"!=typeof n?{error:i.newString("Expected value to be a string")}:(o=b(r,n,o),{value:i.undefined})})),h=i.newFunction("resolve",(e=>{var t=i.dump(e);if("string"!=typeof t)return{error:i.newString("Expected value to be a string")};var r=Object(n.pipe)(Object(u.parseTemplateStringE)(t,[...o.selected,...o.global]),l.getOrElse((()=>t)));return{value:i.newString(r)}}));i.setProp(p,"resolve",h),h.dispose(),i.setProp(p,"set",f),f.dispose(),i.setProp(p,"getResolve",m),m.dispose(),i.setProp(p,"get",v),v.dispose(),i.setProp(s,"env",p),p.dispose(),i.setProp(i.global,"pw",s),s.dispose();var y=i.evalCode(e);if(y.error){var x=i.dump(y.error);return y.error.dispose(),a.left(x)}return i.dispose(),a.right(o)})))},1302:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return i}));var o=r(1244),n=r(247),a=r.n(n),c=r(85),l=()=>({global:a()(Object(c.l)()),selected:a()(Object(c.j)().variables)}),i=(e,t)=>Object(o.a)(e,t)},1310:function(e,t,r){"use strict";r.d(t,"b",(function(){return v})),r.d(t,"a",(function(){return g}));var o=r(34),n=r(13),a=(r(64),r(63),r(123),r(250),r(35),r(1303),r(1871),r(1320),r(1321),r(1322),r(106),r(132),r(1323),r(175),r(71));function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){Object(o.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var i="".concat(window.location.origin,"/"),s=function(){var e=Object(n.a)((function*(e,t){var r={method:"POST",headers:{"Content-type":"application/x-www-form-urlencoded; charset=UTF-8"},body:Object.keys(t).map((e=>"".concat(e,"=").concat(t[e]))).join("&")};try{var o=yield fetch(e,r);return yield o.json()}catch(e){console.error(e)}}));return function(t,r){return e.apply(this,arguments)}}(),d=function(){var e=Object(n.a)((function*(e){try{var t=yield fetch(e,{method:"GET",headers:{"Content-type":"application/json"}});return yield t.json()}catch(e){console.error(e)}}));return function(t){return e.apply(this,arguments)}}(),u=()=>{var e=new Uint32Array(28);return window.crypto.getRandomValues(e),Array.from(e,(e=>"0".concat(e.toString(16)).slice(-2))).join("")},p=function(){var e=Object(n.a)((function*(e){var t,r,o,n=yield(t=e,r=(new TextEncoder).encode(t),window.crypto.subtle.digest("SHA-256",r));return o=n,btoa(String.fromCharCode.apply(null,new Uint8Array(o))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(n.a)((function*(e){var{oidcDiscoveryUrl:t,grantType:r,authUrl:o,accessTokenUrl:n,clientId:c,clientSecret:l,scope:s}=e;if(""!==t){var{authorization_endpoint:v,token_endpoint:g}=yield d(t);o=v,n=g}Object(a.c)("tokenEndpoint",n),Object(a.c)("client_id",c),Object(a.c)("client_secret",l);var b=u();Object(a.c)("pkce_state",b);var m=u();Object(a.c)("pkce_codeVerifier",m);var f=yield p(m);window.location="".concat(o+"?response_type=".concat(r),"&client_id=").concat(encodeURIComponent(c),"&state=").concat(encodeURIComponent(b),"&scope=").concat(encodeURIComponent(s),"&redirect_uri=").concat(encodeURIComponent(i),"&code_challenge=").concat(encodeURIComponent(f),"&code_challenge_method=S256")}));return function(t){return e.apply(this,arguments)}}(),g=()=>{var e,t="",r=""===(e=window.location.search.substring(1))?{}:e.split("&").map((e=>e.split("="))).reduce(((e,t)=>l(l({},e),{},{[t[0]]:t[1]})),{});if(r.error&&alert("Error returned from authorization server: ".concat(r.error)),r.code){if(Object(a.a)("pkce_state")!==r.state)alert("Invalid state"),Promise.reject(t);else try{t=s(Object(a.a)("tokenEndpoint"),{grant_type:"authorization_code",code:r.code,client_id:Object(a.a)("client_id"),client_secret:Object(a.a)("client_secret"),redirect_uri:i,code_verifier:Object(a.a)("pkce_codeVerifier")})}catch(e){return console.error(e),Promise.reject(t)}return Object(a.b)("pkce_state"),Object(a.b)("pkce_codeVerifier"),Object(a.b)("tokenEndpoint"),Object(a.b)("client_id"),Object(a.b)("client_secret"),t}return Promise.reject(t)}},1869:function(e,t,r){"use strict";r.r(t);var o=r(13),n=(r(35),r(41),r(3)),a=r(61),c=r(17),l=r(95),i=r(1310),s=r(1302),d=Object(n.c)({setup(){var e=Object(c.d)(),t=Object(c.i)(),r=Object(c.g)(l.i,{authType:"none",authActive:!0},l.s),n=Object(c.a)(r,"oidcDiscoveryURL"),d=Object(c.a)(r,"authURL"),u=Object(c.a)(r,"accessTokenURL"),p=Object(c.a)(r,"clientID"),v=Object(c.a)(r,"clientSecret"),g=Object(c.a)(r,"scope"),b=function(){var r=Object(o.a)((function*(){if(""!==n.value||""!==d.value&&""!==u.value){var r=Object(s.a)(),o=[...r.selected,...r.global];try{var c={grantType:"code",oidcDiscoveryUrl:Object(a.parseTemplateString)(n.value,o),authUrl:Object(a.parseTemplateString)(d.value,o),accessTokenUrl:Object(a.parseTemplateString)(u.value,o),clientId:Object(a.parseTemplateString)(p.value,o),clientSecret:Object(a.parseTemplateString)(v.value,o),scope:Object(a.parseTemplateString)(g.value,o)};yield Object(i.b)(c)}catch(e){t.error("".concat(e))}}else t.error("".concat(e("error.incomplete_config_urls")))}));return function(){return r.apply(this,arguments)}}();return{oidcDiscoveryURL:n,authURL:d,accessTokenURL:u,clientID:p,clientSecret:v,scope:g,handleAccessTokenRequest:b,t:e}}}),u=d,p=r(16),v=Object(p.a)(u,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex flex-col"},[r("div",{staticClass:"flex flex-1 border-b border-dividerLight"},[r("SmartEnvInput",{attrs:{placeholder:"OpenID Connect Discovery URL"},model:{value:e.oidcDiscoveryURL,callback:function(t){e.oidcDiscoveryURL=t},expression:"oidcDiscoveryURL"}})],1),e._v(" "),r("div",{staticClass:"flex flex-1 border-b border-dividerLight"},[r("SmartEnvInput",{attrs:{placeholder:"Authorization URL"},model:{value:e.authURL,callback:function(t){e.authURL=t},expression:"authURL"}})],1),e._v(" "),r("div",{staticClass:"flex flex-1 border-b border-dividerLight"},[r("SmartEnvInput",{attrs:{placeholder:"Access Token URL"},model:{value:e.accessTokenURL,callback:function(t){e.accessTokenURL=t},expression:"accessTokenURL"}})],1),e._v(" "),r("div",{staticClass:"flex flex-1 border-b border-dividerLight"},[r("SmartEnvInput",{attrs:{placeholder:"Client ID"},model:{value:e.clientID,callback:function(t){e.clientID=t},expression:"clientID"}})],1),e._v(" "),r("div",{staticClass:"flex flex-1 border-b border-dividerLight"},[r("SmartEnvInput",{attrs:{placeholder:"Client Secret"},model:{value:e.clientSecret,callback:function(t){e.clientSecret=t},expression:"clientSecret"}})],1),e._v(" "),r("div",{staticClass:"flex flex-1 border-b border-dividerLight"},[r("SmartEnvInput",{attrs:{placeholder:"Scope"},model:{value:e.scope,callback:function(t){e.scope=t},expression:"scope"}})],1),e._v(" "),r("div",{staticClass:"p-2"},[r("ButtonSecondary",{attrs:{filled:"",label:""+e.t("authorization.generate_token")},nativeOn:{click:function(t){return e.handleAccessTokenRequest()}}})],1)])}),[],!1,null,null,null);t.default=v.exports;installComponents(v,{SmartEnvInput:r(883).default,ButtonSecondary:r(88).default})},856:function(e,t,r){"use strict";r.d(t,"b",(function(){return h})),r.d(t,"d",(function(){return y})),r.d(t,"a",(function(){return O})),r.d(t,"c",(function(){return j}));r(35),r(41);var o=r(836),n=r(874),a=r(964),c=r(832),l=r(884),i=r(849),s=r(934),d=r(880),u=r(962),p=r(965),v=r(967),g=r(877),b=r(968),m=r(966),f=r(881),h=o.d.theme({"&":{fontSize:"var(--font-size-body)",height:"100%",width:"100%",flex:"1"},".cm-content":{caretColor:"var(--secondary-dark-color)",fontFamily:"var(--font-mono)",backgroundColor:"var(--primary-color)"},".cm-cursor":{borderColor:"var(--secondary-color)"},".cm-widgetBuffer":{position:"absolute"},".cm-selectionBackground":{backgroundColor:"var(--accent-dark-color)",color:"var(--accent-contrast-color)"},".cm-panels":{backgroundColor:"var(--primary-light-color)",color:"var(--secondary-light-color)"},".cm-panels.cm-panels-top":{borderBottom:"1px solid var(--divider-light-color)"},".cm-panels.cm-panels-bottom":{borderTop:"1px solid var(--divider-light-color)"},".cm-search":{display:"flex",alignItems:"center",flexWrap:"nowrap",flexShrink:0,overflow:"auto"},".cm-search label":{display:"inline-flex",alignItems:"center"},".cm-textfield":{backgroundColor:"var(--primary-dark-color)",color:"var(--secondary-dark-color)",borderColor:"var(--divider-light-color)",borderRadius:"3px"},".cm-button":{backgroundColor:"var(--primary-dark-color)",color:"var(--secondary-dark-color)",backgroundImage:"none",border:"none"},".cm-completionLabel":{color:"var(--secondary-color)"},".cm-tooltip":{backgroundColor:"var(--primary-dark-color)",color:"var(--secondary-light-color)",border:"none",borderRadius:"3px"},".cm-tooltip-arrow:after":{borderColor:"transparent !important"},".cm-tooltip-arrow:before":{borderColor:"transparent !important"},".cm-tooltip.cm-tooltip-autocomplete > ul":{fontFamily:"var(--font-mono)"},".cm-tooltip-autocomplete ul li[aria-selected]":{backgroundColor:"var(--accent-dark-color)",color:"var(--accent-contrast-color)"},".cm-tooltip-autocomplete ul li[aria-selected] .cm-completionLabel":{color:"var(--accent-contrast-color)"},".cm-activeLine":{backgroundColor:"transparent"},".cm-searchMatch":{outline:"1px solid var(--accent-dark-color)",backgroundColor:"var(--divider-dark-color)"},".cm-selectionMatch":{outline:"1px solid var(--accent-dark-color)",backgroundColor:"var(--divider-light-color)"},".cm-matchingBracket, .cm-nonmatchingBracket":{backgroundColor:"var(--divider-color)",outline:"1px solid var(--accent-dark-color)"},".cm-gutters":{fontFamily:"var(--font-mono)",backgroundColor:"var(--primary-color)",borderColor:"var(--divider-light-color)"},".cm-lineNumbers":{minWidth:"3em",color:"var(--secondary-light-color)"},".cm-foldGutter":{minWidth:"2em",color:"var(--secondary-light-color)"},".cm-foldGutter .cm-gutterElement":{textAlign:"center"},".cm-line":{paddingLeft:"0.5em",paddingRight:"0.5em"},".cm-activeLineGutter":{backgroundColor:"transparent"},".cm-scroller::-webkit-scrollbar":{display:"none"},".cm-foldPlaceholder":{backgroundColor:"var(--divider-light-color)",color:"var(--secondary-dark-color)",borderColor:"var(--divider-dark-color)"}}),y=o.d.theme({"&":{fontSize:"var(--font-size-body)",height:"100%",width:"100%",flex:"1"},".cm-content":{caretColor:"var(--secondary-dark-color)",fontFamily:"var(--font-sans)",color:"var(--secondary-dark-color)",backgroundColor:"transparent"},".cm-cursor":{borderColor:"var(--secondary-color)"},".cm-widgetBuffer":{position:"absolute"},".cm-selectionBackground":{backgroundColor:"var(--accent-dark-color)",color:"var(--accent-contrast-color)"},".cm-panels":{backgroundColor:"var(--primary-light-color)",color:"var(--secondary-light-color)"},".cm-panels.cm-panels-top":{borderBottom:"1px solid var(--divider-light-color)"},".cm-panels.cm-panels-bottom":{borderTop:"1px solid var(--divider-light-color)"},".cm-search":{display:"flex",alignItems:"center",flexWrap:"nowrap",flexShrink:0,overflow:"auto"},".cm-search label":{display:"inline-flex",alignItems:"center"},".cm-textfield":{backgroundColor:"var(--primary-dark-color)",color:"var(--secondary-dark-color)",borderColor:"var(--divider-light-color)",borderRadius:"3px"},".cm-button":{backgroundColor:"var(--primary-dark-color)",color:"var(--secondary-dark-color)",backgroundImage:"none",border:"none"},".cm-completionLabel":{color:"var(--secondary-color)"},".cm-tooltip":{backgroundColor:"var(--primary-dark-color)",color:"var(--secondary-light-color)",border:"none",borderRadius:"3px"},".cm-tooltip-arrow:after":{borderColor:"transparent !important"},".cm-tooltip-arrow:before":{borderColor:"transparent !important"},".cm-tooltip.cm-tooltip-autocomplete > ul":{fontFamily:"var(--font-mono)"},".cm-tooltip-autocomplete ul li[aria-selected]":{backgroundColor:"var(--accent-dark-color)",color:"var(--accent-contrast-color)"},".cm-tooltip-autocomplete ul li[aria-selected] .cm-completionLabel":{color:"var(--accent-contrast-color)"},".cm-activeLine":{backgroundColor:"transparent"},".cm-searchMatch":{outline:"1px solid var(--accent-dark-color)",backgroundColor:"var(--divider-dark-color)"},".cm-selectionMatch":{outline:"1px solid var(--accent-dark-color)",backgroundColor:"var(--divider-light-color)"},".cm-matchingBracket, .cm-nonmatchingBracket":{backgroundColor:"var(--divider-color)",outline:"1px solid var(--accent-dark-color)"},".cm-gutters":{fontFamily:"var(--font-mono)",backgroundColor:"var(--primary-color)",borderColor:"var(--divider-light-color)"},".cm-lineNumbers":{minWidth:"3em",color:"var(--secondary-light-color)"},".cm-foldGutter":{minWidth:"2em",color:"var(--secondary-light-color)"},".cm-foldGutter .cm-gutterElement":{textAlign:"center"},".cm-line":{paddingLeft:"1rem",paddingRight:"1rem",paddingTop:"0.2rem",paddingBottom:"0.2rem"},".cm-activeLineGutter":{backgroundColor:"transparent"},".cm-scroller::-webkit-scrollbar":{display:"none"},".cm-foldPlaceholder":{backgroundColor:"var(--divider-light-color)",color:"var(--secondary-dark-color)",borderColor:"var(--divider-dark-color)"}}),x="var(--editor-name-color)",k="var(--editor-constant-color)",O=n.a.define([{tag:n.d.keyword,color:"var(--editor-keyword-color)"},{tag:[n.d.name,n.d.deleted,n.d.character,n.d.propertyName,n.d.macroName],color:x},{tag:[n.d.function(n.d.variableName),n.d.labelName],color:"var(--editor-variable-color)"},{tag:[n.d.color,n.d.constant(n.d.name),n.d.standard(n.d.name)],color:k},{tag:[n.d.definition(n.d.name),n.d.separator],color:"var(--editor-separator-color)"},{tag:[n.d.typeName,n.d.className,n.d.number,n.d.changed,n.d.annotation,n.d.modifier,n.d.self,n.d.namespace],color:"var(--editor-type-color)"},{tag:[n.d.operator,n.d.operatorKeyword,n.d.url,n.d.escape,n.d.regexp,n.d.link,n.d.special(n.d.string)],color:"var(--editor-operator-color)"},{tag:[n.d.meta,n.d.comment],color:"var(--editor-meta-color)"},{tag:n.d.strong,fontWeight:"bold"},{tag:n.d.emphasis,fontStyle:"italic"},{tag:n.d.strikethrough,textDecoration:"line-through"},{tag:n.d.link,color:"var(--editor-link-color)",textDecoration:"underline"},{tag:n.d.heading,fontWeight:"bold",color:x},{tag:[n.d.atom,n.d.bool,n.d.special(n.d.variableName)],color:k},{tag:[n.d.processingInstruction,n.d.string,n.d.inserted],color:"var(--editor-process-color)"},{tag:n.d.invalid,color:"var(--editor-invalid-color)"}]),j=[Object(s.d)(),Object(s.c)(),Object(o.l)(),Object(l.a)(),Object(a.a)({openText:"▾",closedText:"▸"}),Object(o.i)(),Object(o.j)(),c.g.allowMultipleSelections.of(!0),Object(i.p)(),n.b.fallback,Object(u.a)(),Object(p.a)(),Object(g.a)(),Object(m.b)(),Object(m.a)(),Object(o.k)(),Object(v.a)(),o.m.of([...p.b,...d.a,...v.c,...l.b,...a.b,...b.a,...g.c,...f.a]),Object(v.b)()]},857:function(e,t,r){"use strict";r.d(t,"a",(function(){return g})),r.d(t,"b",(function(){return b}));r(63);var o=r(3),n=r(832),a=r(879),c=r(836),l=r(9),i=r(61),s=r(85),d=/(<<\w+>>)/g,u=e=>Object(a.b)(((t,r,o)=>{for(var n,a,c,s,{from:u,to:p,text:v}=t.state.doc.lineAt(r),g=r,b=r;g>u&&/\w/.test(v[g-u-1]);)g--;for(;b<p&&/\w/.test(v[b-u]);)b++;if(g===r&&o<0||b===r&&o>0||!d.test(v.slice(g-u-2,b-u+2)))return null;var m=null!==(a=null===(n=e.find((e=>e.key===v.slice(g-u,b-u))))||void 0===n?void 0:n.sourceEnv)&&void 0!==a?a:"choose an environment",f=null!==(s=null===(c=e.find((e=>e.key===v.slice(g-u,b-u))))||void 0===c?void 0:c.value)&&void 0!==s?s:"not found",h=Object(i.parseTemplateStringE)(f,e),y=l.isLeft(h)?"error":h.right;return{pos:g,end:p,above:!0,arrow:!0,create(){var e=document.createElement("span"),t=document.createElement("xmp");return t.textContent=y,e.appendChild(document.createTextNode("".concat(m," "))),e.appendChild(t),e.className="tooltip-theme",{dom:e}}}}),{hoverTime:1});var p=e=>new c.e({regexp:d,decoration:t=>function(e,t){var r=t.find((t=>t.key===e.slice(2,-2)))?"bg-accentDark text-accentContrast hover:bg-accent":"bg-red-500 text-accentContrast hover:bg-red-600";return c.b.mark({class:"".concat("cursor-help transition rounded px-1 focus:outline-none mx-0.5 env-highlight"," ").concat(r)})}(t[0],e)}),v=e=>{var t=p(e);return c.g.define((e=>({decorations:t.createDeco(e),update(e){this.decorations=t.updateDeco(e,this.decorations)}})),{decorations:e=>e.decorations})};class g{constructor(e,t){this.editorView=t,this.compartment=new n.e,this.envs=[],this.envs=Object(s.i)(),e(s.b,(e=>{var t;this.envs=e,null===(t=this.editorView.value)||void 0===t||t.dispatch({effects:this.compartment.reconfigure([u(this.envs),v(this.envs)])})}))}get extension(){return this.compartment.of([u(this.envs),v(this.envs)])}}class b{constructor(e,t){this.editorView=t,this.compartment=new n.e,this.envs=[],Object(o.z)(e,(e=>{var t;this.envs=e,null===(t=this.editorView.value)||void 0===t||t.dispatch({effects:this.compartment.reconfigure([u(this.envs),v(this.envs)])})}),{immediate:!0})}get extension(){return this.compartment.of([u(this.envs),v(this.envs)])}}},883:function(e,t,r){"use strict";r.r(t);r(63),r(132),r(904),r(926),r(35),r(41);var o=r(3),n=r(836),a=r(832),c=r(198),l=r.n(c),i=r(879),s=r(884),d=r(856),u=r(857),p=r(17),v=r(85),g={};g.props={value:{key:"value",required:!1,type:String,default:""},placeholder:{key:"placeholder",required:!1,type:String,default:""},styles:{key:"styles",required:!1,type:String,default:""},envs:{key:"envs",required:!1,type:[Array,null],default:null},focus:{key:"focus",required:!1,type:Boolean,default:!1},readonly:{key:"readonly",required:!1,type:Boolean,default:!1}},g.setup=(e,t)=>{var r=e,c=t.emit,g=Object(o.o)(r.value),b=Object(o.o)(),m=Object(o.o)(null);Object(o.z)((()=>r.value),(e=>{var t,r,o=e.replaceAll("\n",""),n=null===(t=b.value)||void 0===t?void 0:t.state.doc.toJSON().join(b.value.state.lineBreak);g.value===o&&e===n||(g.value=o,null===(r=b.value)||void 0===r||r.dispatch({filter:!1,changes:{from:0,to:b.value.state.doc.length,insert:o}}))}),{immediate:!0,flush:"sync"});var f=null,h=null,y=Object(p.f)(v.b,[]),x=Object(o.a)((()=>r.envs?r.envs.map((e=>({key:e.key,value:e.value,sourceEnv:e.source}))):y.value)),k=new u.b(x,b),O=e=>{var t=[n.d.contentAttributes.of({"aria-label":r.placeholder}),n.d.updateListener.of((e=>{r.readonly&&(e.view.contentDOM.inputMode="none")})),a.g.changeFilter.of((()=>!r.readonly)),d.d,r.readonly?n.d.theme({".cm-content":{caretColor:"var(--secondary-dark-color) !important",color:"var(--secondary-dark-color) !important",backgroundColor:"var(--divider-color) !important",opacity:.25}}):n.d.theme({}),Object(i.d)({position:"absolute"}),k,Object(n.o)(r.placeholder),n.d.domEventHandlers({paste(e){var t,r;f=e,h=null!==(r=null===(t=e.clipboardData)||void 0===t?void 0:t.getData("text"))&&void 0!==r?r:""},drop(e){e.preventDefault()}}),n.g.fromClass(class{update(e){if(!r.readonly&&e.docChanged){var t=l()(g.value);g.value=e.state.doc.toJSON().join(e.state.lineBreak);var n=l()(g.value).replaceAll("\n","");if(c("input",n),c("change",n),!!e.transactions.find((e=>e.isUserEvent("input.paste")))&&f){var a=h;Object(o.g)((()=>{c("paste",{pastedValue:a,prevValue:t})}))}else f=null,h=null}}}),Object(s.a)(),n.m.of([...s.b])];b.value=new n.d({parent:e,state:a.g.create({doc:r.value,extensions:t})})};return Object(o.j)((()=>{m.value&&(b.value||O(m.value))})),Object(o.z)(m,(()=>{var e;m.value?b.value||O(m.value):(null===(e=b.value)||void 0===e||e.destroy(),b.value=void 0)})),{emit:c,editor:m}};var b=g,m=r(16),f=Object(m.a)(b,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex items-center flex-1 flex-shrink-0 overflow-auto whitespace-nowrap hide-scrollbar"},[r("div",{ref:"editor",staticClass:"flex flex-1",class:e.styles,attrs:{placeholder:e.placeholder},on:{keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.preventDefault(),e.emit("enter",t))},function(t){return e.emit("keydown",t)}],keyup:function(t){return e.emit("keyup",t)},click:function(t){return e.emit("click",t)}}})])}),[],!1,null,null,null);t.default=f.exports}}]);