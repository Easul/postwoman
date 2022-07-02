(window.webpackJsonp=window.webpackJsonp||[]).push([[158,99,101,103,107,113],{1968:function(t,e,n){var s=n(2161);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,n(97).default)("5cdb676d",s,!0,{sourceMap:!1})},2160:function(t,e,n){"use strict";n(1968)},2161:function(t,e,n){var s=n(96)(!1);s.push([t.i,".toggle[data-v-b7eb077c] {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n  border-radius: 9999px;\n  padding: 0px;\n  margin-right: 1rem;\n  cursor: pointer;\n  -ms-flex-negative: 0;\n  -webkit-flex-shrink: 0;\n  flex-shrink: 0;\n  -webkit-transition-property: background-color, border-color, color, fill, stroke, opacity, -webkit-box-shadow, -webkit-transform, filter, backdrop-filter;\n  -o-transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, -webkit-box-shadow, transform, -webkit-transform, filter, backdrop-filter;\n  -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  -o-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  -webkit-transition-duration: 150ms;\n  -o-transition-duration: 150ms;\n  transition-duration: 150ms;\n  width: 1.6rem;\n  height: .6rem;\n  border: 2px solid var(--divider-color);\n  background-color: rgba(0,0,0,0);\n  box-sizing: initial;\n}\n.group:hover .toggle[data-v-b7eb077c] {\n  border-color: var(--accent-dark-color);\n}\n.toggle .handle[data-v-b7eb077c] {\n  position: absolute;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -ms-flex-negative: 0;\n  -webkit-flex-shrink: 0;\n  flex-shrink: 0;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n  border-radius: 9999px;\n  pointer-events: none;\n  transition: all .2s ease-in-out;\n  margin: .1rem;\n  background-color: var(--secondary-light-color);\n  width: .4rem;\n  height: .4rem;\n}\n.toggle.on[data-v-b7eb077c] {\n  border-color: var(--divider-dark-color);\n}\n.toggle.on .handle[data-v-b7eb077c] {\n  background-color: var(--accent-color);\n  left: 1rem;\n}",""]),t.exports=s},2189:function(t,e,n){"use strict";n.r(e);var s=n(3),o=Object(s.c)({props:{on:{type:Boolean,default:!1}}}),a=(n(2160),n(16)),i=Object(a.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"inline-flex items-center justify-center cursor-pointer transition flex-nowrap group hover:text-secondaryDark",on:{click:function(e){return t.$emit("change")}}},[n("span",{ref:"toggle",staticClass:"toggle",class:{on:t.on}},[n("span",{staticClass:"handle"})]),t._v(" "),n("span",{staticClass:"pl-0 font-semibold align-middle cursor-pointer"},[t._t("default")],2)])}),[],!1,null,"b7eb077c",null);e.default=i.exports},2251:function(t,e,n){"use strict";n.r(e);var s=n(18),o=n(17),a={setup:(t,e)=>({t:Object(o.d)(),colors:s.b,active:Object(s.j)("BG_COLOR"),setBGMode:t=>{Object(s.d)("BG_COLOR",t)},getIcon:t=>{switch(t){default:return"monitor";case"light":return"sun";case"dark":return"cloud";case"black":return"moon"}},getColorModeName:t=>{switch(t){default:return"settings.system_mode";case"light":return"settings.light_mode";case"dark":return"settings.dark_mode";case"black":return"settings.black_mode"}}})},i=a,r=n(16),l=Object(r.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex"},t._l(t.colors,(function(e,s){return n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],key:"color-"+s,staticClass:"rounded",class:{"bg-primaryLight !text-accent hover:text-accent":e===t.active},attrs:{title:t.t(t.getColorModeName(e)),svg:t.getIcon(e)},nativeOn:{click:function(n){return t.setBGMode(e)}}})})),1)}),[],!1,null,null,null);e.default=l.exports;installComponents(l,{ButtonSecondary:n(88).default})},2252:function(t,e,n){"use strict";n.r(e);var s=n(18),o={setup:(t,e)=>({accentColors:s.a,active:Object(s.j)("THEME_COLOR"),setActiveColor:t=>{document.documentElement.setAttribute("data-accent",t),Object(s.d)("THEME_COLOR",t)}})},a=o,i=n(16),r=Object(i.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex"},t._l(t.accentColors,(function(e,s){return n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],key:"color-"+s,staticClass:"rounded",class:[{"bg-primaryLight":e===t.active}],attrs:{title:""+e.charAt(0).toUpperCase()+e.slice(1),icon:"lens",color:e},nativeOn:{click:function(n){return t.setActiveColor(e)}}})})),1)}),[],!1,null,null,null);e.default=r.exports;installComponents(r,{ButtonSecondary:n(88).default})},2253:function(t,e,n){"use strict";n.r(e);var s=n(3),o=n(18),a=n(17),i={setup:(t,e)=>{var n=Object(a.d)(),i=o.c,r=Object(o.j)("FONT_SIZE"),l=Object(s.o)(null);return{t:n,fontSizes:i,active:r,fontSize:l,getFontSizeName:t=>n("settings.font_size_".concat(t)),setActiveFont:t=>{document.documentElement.setAttribute("data-font-size",t),Object(o.d)("FONT_SIZE",t)}}}},r=i,l=n(16),c=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"inline-flex"},[n("tippy",{ref:"fontSize",attrs:{interactive:"",trigger:"click",theme:"popover",arrow:""},scopedSlots:t._u([{key:"trigger",fn:function(){return[n("span",{staticClass:"select-wrapper"},[n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],staticClass:"pr-8",attrs:{title:t.t("settings.change_font_size"),svg:"type",outline:"",label:""+t.getFontSizeName(t.fontSizes.find((function(e){return e===t.active})))}})],1)]},proxy:!0}])},[t._v(" "),n("div",{staticClass:"flex flex-col",attrs:{role:"menu"}},t._l(t.fontSizes,(function(e,s){return n("SmartItem",{key:"size-"+s,attrs:{label:""+t.getFontSizeName(e),icon:e===t.active?"radio_button_checked":"radio_button_unchecked",active:e===t.active},nativeOn:{click:function(n){return function(){t.setActiveFont(e),t.fontSize.tippy().hide()}.apply(null,arguments)}}})})),1)])],1)}),[],!1,null,null,null);e.default=c.exports;installComponents(c,{ButtonSecondary:n(88).default,SmartItem:n(105).default})},2254:function(t,e,n){"use strict";n.r(e);var s=n(3),o={setup:(t,e)=>({language:Object(s.o)(null)})},a=o,i=n(16),r=Object(i.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"inline-flex"},[n("tippy",{ref:"language",attrs:{interactive:"",trigger:"click",theme:"popover",arrow:""},scopedSlots:t._u([{key:"trigger",fn:function(){return[n("span",{staticClass:"select-wrapper"},[n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],staticClass:"pr-8",attrs:{title:t.$t("settings.choose_language"),outline:"",svg:"languages",label:""+t.$i18n.locales.find((function(e){return e.code==t.$i18n.locale})).name}})],1)]},proxy:!0}])},[t._v(" "),n("div",{staticClass:"flex flex-col",attrs:{role:"menu"}},t._l(t.$i18n.locales,(function(e,s){return n("NuxtLink",{key:"locale-"+s,attrs:{to:t.switchLocalePath(e.code)},on:{click:function(e){t.language.tippy().hide()}}},[n("SmartItem",{attrs:{label:e.name,"active-info-icon":t.$i18n.locale===e.code,"info-icon":t.$i18n.locale===e.code?"done":null}})],1)})),1)])],1)}),[],!1,null,null,null);e.default=r.exports;installComponents(r,{ButtonSecondary:n(88).default,SmartItem:n(105).default})},2343:function(t,e,n){"use strict";n.r(e);var s=n(3),o=n(6),a=n(18),i=n(17),r=n(300),l=n(161),c=Object(s.c)({head(){return{title:"".concat(this.$t("navigation.settings")," • Hoppscotch")}}});c.setup=(t,e)=>{var n=Object(i.d)(),c=Object(i.i)(),d=Object(i.c)(),u=Object(a.j)("THEME_COLOR"),p=Object(a.j)("PROXY_ENABLED"),v=Object(a.j)("PROXY_URL"),_=Object(a.j)("EXTENSIONS_ENABLED"),m=Object(a.j)("TELEMETRY_ENABLED"),g=Object(a.j)("EXPAND_NAVIGATION"),f=Object(a.j)("SIDEBAR_ON_LEFT"),b=Object(a.j)("ZEN_MODE"),h=Object(i.f)(l.b,null),x=Object(s.a)((()=>{var t,e;return"available"===h.value&&null!==(e=null===(t=window.__POSTWOMAN_EXTENSION_HOOK__)||void 0===t?void 0:t.getVersion())&&void 0!==e?e:null})),y=Object(s.a)((()=>Object(r.a)()&&"available"===h.value)),C=Object(s.a)((()=>Object(r.b)()&&"available"===h.value)),O=Object(o.refAutoReset)("rotate-ccw",1e3),k=Object(s.o)(!1),E=Object(s.a)((()=>({url:v.value})));Object(s.z)(b,(t=>{Object(a.d)("EXPAND_NAVIGATION",!t)})),Object(s.z)(E,(t=>{var{url:e}=t;Object(a.d)("PROXY_URL",e)}),{deep:!0});return{toggleSetting:a.i,t:n,colorMode:d,ACCENT_COLOR:u,PROXY_ENABLED:p,PROXY_URL:v,EXTENSIONS_ENABLED:_,TELEMETRY_ENABLED:m,EXPAND_NAVIGATION:g,SIDEBAR_ON_LEFT:f,ZEN_MODE:b,extensionVersion:x,hasChromeExtInstalled:y,hasFirefoxExtInstalled:C,clearIcon:O,confirmRemove:k,toggleInterceptor:t=>{"extension"===t?(_.value=!_.value,_.value&&(p.value=!1)):(p.value=!p.value,p.value&&(_.value=!1))},showConfirmModal:()=>{m.value?k.value=!0:Object(a.i)("TELEMETRY_ENABLED")},resetProxy:()=>{Object(a.d)("PROXY_URL","https://proxy.lightly.ml/"),O.value="check",c.success("".concat(n("state.cleared")))},getColorModeName:t=>{switch(t){default:return"settings.system_mode";case"light":return"settings.light_mode";case"dark":return"settings.dark_mode";case"black":return"settings.black_mode"}}}};var d=c,u=n(16),p=Object(u.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container space-y-8 divide-y divide-dividerLight"},[n("div",{staticClass:"md:grid md:gap-4 md:grid-cols-3"},[n("div",{staticClass:"p-8 md:col-span-1"},[n("h3",{staticClass:"heading"},[t._v("\n          "+t._s(t.t("settings.theme"))+"\n        ")]),t._v(" "),n("p",{staticClass:"my-1 text-secondaryLight"},[t._v("\n          "+t._s(t.t("settings.theme_description"))+"\n        ")])]),t._v(" "),n("div",{staticClass:"p-8 space-y-8 md:col-span-2"},[n("section",[n("h4",{staticClass:"font-semibold text-secondaryDark"},[t._v("\n            "+t._s(t.t("settings.background"))+"\n          ")]),t._v(" "),n("div",{staticClass:"my-1 text-secondaryLight"},[n("ColorScheme",{attrs:{placeholder:"...",tag:"span"}},[t._v("\n              "+t._s(t.t(t.getColorModeName(t.colorMode.preference)))+"\n              "),"system"===t.colorMode.preference?n("span",[t._v("\n                ("+t._s(t.t(t.getColorModeName(t.colorMode.value)))+")\n              ")]):t._e()])],1),t._v(" "),n("div",{staticClass:"mt-4"},[n("SmartColorModePicker")],1)]),t._v(" "),n("section",[n("h4",{staticClass:"font-semibold text-secondaryDark"},[t._v("\n            "+t._s(t.t("settings.accent_color"))+"\n          ")]),t._v(" "),n("div",{staticClass:"my-1 text-secondaryLight"},[t._v("\n            "+t._s(t.ACCENT_COLOR.charAt(0).toUpperCase()+t.ACCENT_COLOR.slice(1))+"\n          ")]),t._v(" "),n("div",{staticClass:"mt-4"},[n("SmartAccentModePicker")],1)]),t._v(" "),n("section",[n("h4",{staticClass:"font-semibold text-secondaryDark"},[t._v("\n            "+t._s(t.t("settings.font_size"))+"\n          ")]),t._v(" "),n("div",{staticClass:"mt-4"},[n("SmartFontSizePicker")],1)]),t._v(" "),n("section",[n("h4",{staticClass:"font-semibold text-secondaryDark"},[t._v("\n            "+t._s(t.t("settings.language"))+"\n          ")]),t._v(" "),n("div",{staticClass:"mt-4"},[n("SmartChangeLanguage")],1)]),t._v(" "),n("section",[n("h4",{staticClass:"font-semibold text-secondaryDark"},[t._v("\n            "+t._s(t.t("settings.experiments"))+"\n          ")]),t._v(" "),n("div",{staticClass:"my-1 text-secondaryLight"},[t._v("\n            "+t._s(t.t("settings.experiments_notice"))+"\n            "),n("SmartLink",{staticClass:"link",attrs:{to:"https://github.com/hoppscotch/hoppscotch/issues/new/choose",blank:""}},[t._v("\n              "+t._s(t.t("app.contact_us"))+" ")]),t._v(".\n          ")],1),t._v(" "),n("div",{staticClass:"py-4 space-y-4"},[n("div",{staticClass:"flex items-center"},[n("SmartToggle",{attrs:{on:t.TELEMETRY_ENABLED},on:{change:t.showConfirmModal}},[t._v("\n                "+t._s(t.t("settings.telemetry"))+"\n              ")])],1),t._v(" "),n("div",{staticClass:"flex items-center"},[n("SmartToggle",{attrs:{on:t.EXPAND_NAVIGATION},on:{change:function(e){return t.toggleSetting("EXPAND_NAVIGATION")}}},[t._v("\n                "+t._s(t.t("settings.expand_navigation"))+"\n              ")])],1),t._v(" "),n("div",{staticClass:"flex items-center"},[n("SmartToggle",{attrs:{on:t.SIDEBAR_ON_LEFT},on:{change:function(e){return t.toggleSetting("SIDEBAR_ON_LEFT")}}},[t._v("\n                "+t._s(t.t("settings.sidebar_on_left"))+"\n              ")])],1),t._v(" "),n("div",{staticClass:"flex items-center"},[n("SmartToggle",{attrs:{on:t.ZEN_MODE},on:{change:function(e){return t.toggleSetting("ZEN_MODE")}}},[t._v("\n                "+t._s(t.t("layout.zen_mode"))+"\n              ")])],1)])])])]),t._v(" "),n("div",{staticClass:"md:grid md:gap-4 md:grid-cols-3"},[n("div",{staticClass:"p-8 md:col-span-1"},[n("h3",{staticClass:"heading"},[t._v("\n          "+t._s(t.t("settings.interceptor"))+"\n        ")]),t._v(" "),n("p",{staticClass:"my-1 text-secondaryLight"},[t._v("\n          "+t._s(t.t("settings.interceptor_description"))+"\n        ")])]),t._v(" "),n("div",{staticClass:"p-8 space-y-8 md:col-span-2"},[n("section",[n("h4",{staticClass:"font-semibold text-secondaryDark"},[t._v("\n            "+t._s(t.t("settings.extensions"))+"\n          ")]),t._v(" "),n("div",{staticClass:"my-1 text-secondaryLight"},[null!=t.extensionVersion?n("span",[t._v("\n              "+t._s(t.t("settings.extension_version")+": v"+t.extensionVersion.major+"."+t.extensionVersion.minor)+"\n            ")]):n("span",[t._v("\n              "+t._s(t.t("settings.extension_version"))+":\n              "+t._s(t.t("settings.extension_ver_not_reported"))+"\n            ")])]),t._v(" "),n("div",{staticClass:"flex flex-col py-4 space-y-2"},[n("span",[n("SmartItem",{attrs:{to:"https://chrome.google.com/webstore/detail/hoppscotch-browser-extens/amknoiejhlmhancpahfcfcfhllgkpbld",blank:"",svg:"brands/chrome",label:"Chrome","info-icon":t.hasChromeExtInstalled?"check_circle":"","active-info-icon":t.hasChromeExtInstalled,outline:""}})],1),t._v(" "),n("span",[n("SmartItem",{attrs:{to:"https://addons.mozilla.org/en-US/firefox/addon/hoppscotch",blank:"",svg:"brands/firefox",label:"Firefox","info-icon":t.hasFirefoxExtInstalled?"check_circle":"","active-info-icon":t.hasFirefoxExtInstalled,outline:""}})],1)]),t._v(" "),n("div",{staticClass:"py-4 space-y-4"},[n("div",{staticClass:"flex items-center"},[n("SmartToggle",{attrs:{on:t.EXTENSIONS_ENABLED},on:{change:function(e){return t.toggleInterceptor("extension")}}},[t._v("\n                "+t._s(t.t("settings.extensions_use_toggle"))+"\n              ")])],1)])]),t._v(" "),n("section",[n("h4",{staticClass:"font-semibold text-secondaryDark"},[t._v("\n            "+t._s(t.t("settings.proxy"))+"\n          ")]),t._v(" "),n("div",{staticClass:"my-1 text-secondaryLight"},[t._v("\n            "+t._s(t.t("settings.official_proxy_hosting")+" "+t.t("settings.read_the"))+"\n            "),n("SmartLink",{staticClass:"link",attrs:{to:"https://docs.hoppscotch.io/privacy",blank:""}},[t._v("\n              "+t._s(t.t("app.proxy_privacy_policy"))+" ")]),t._v(".\n          ")],1),t._v(" "),n("div",{staticClass:"py-4 space-y-4"},[n("div",{staticClass:"flex items-center"},[n("SmartToggle",{attrs:{on:t.PROXY_ENABLED},on:{change:function(e){return t.toggleInterceptor("proxy")}}},[t._v("\n                "+t._s(t.t("settings.proxy_use_toggle"))+"\n              ")])],1)]),t._v(" "),n("div",{staticClass:"flex items-center py-4 space-x-2"},[n("div",{staticClass:"relative flex flex-col flex-1"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.PROXY_URL,expression:"PROXY_URL"}],staticClass:"input floating-input",attrs:{id:"url",placeholder:" ",type:"url",autocomplete:"off",disabled:!t.PROXY_ENABLED},domProps:{value:t.PROXY_URL},on:{input:function(e){e.target.composing||(t.PROXY_URL=e.target.value)}}}),t._v(" "),n("label",{attrs:{for:"url"}},[t._v("\n                "+t._s(t.t("settings.proxy_url"))+"\n              ")])]),t._v(" "),n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],staticClass:"rounded",attrs:{title:t.t("settings.reset_default"),svg:t.clearIcon,outline:""},nativeOn:{click:function(e){return t.resetProxy.apply(null,arguments)}}})],1)])])])]),t._v(" "),n("SmartConfirmModal",{attrs:{show:t.confirmRemove,title:t.t("confirm.remove_telemetry")+" "+t.t("settings.telemetry_helps_us")},on:{"hide-modal":function(e){t.confirmRemove=!1},resolve:function(){t.toggleSetting("TELEMETRY_ENABLED"),t.confirmRemove=!1}}})],1)}),[],!1,null,null,null);e.default=p.exports;installComponents(p,{SmartColorModePicker:n(2251).default,SmartAccentModePicker:n(2252).default,SmartFontSizePicker:n(2253).default,SmartChangeLanguage:n(2254).default,SmartLink:n(205).default,SmartToggle:n(2189).default,SmartItem:n(105).default,ButtonSecondary:n(88).default,SmartConfirmModal:n(317).default})}}]);