(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{2162:function(e,t,o){var a=o(2203);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,o(97).default)("706dba07",a,!0,{sourceMap:!1})},2202:function(e,t,o){"use strict";o(2162)},2203:function(e,t,o){var a=o(96)(!1);a.push([e.i,".table-column {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-box-flex: 1;\n  -ms-flex: 1 1 0%;\n  -webkit-flex: 1 1 0%;\n  flex: 1 1 0%;\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  overflow: hidden;\n  -o-text-overflow: ellipsis;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.table-row-groups .table-column::before {\n  font-weight: 700;\n  color: var(--secondary-color);\n  content: attr(data-label);\n}\n@media (min-width: 1024px) {\n.table-row-groups .table-column::before {\n    display: none;\n}\n}",""]),e.exports=a},2250:function(e,t,o){"use strict";o.r(t);var a=o(3),s=o(1),n=o(2219),r=o(45),l=o(61),i=o(6),c=o(17),d=o(199),p={props:{shortcode:{key:"shortcode",required:!0,type:null}},setup:(e,t)=>{var o=Object(c.d)(),p=Object(c.i)(),u=e,m=t.emit,h={get:"text-green-500",post:"text-yellow-500",put:"text-blue-500",delete:"text-red-500",default:"text-gray-500"},b=Object(a.o)(),v=Object(i.refAutoReset)("copy",1e3),f=Object(a.a)((()=>Object(s.pipe)(u.shortcode.request,JSON.parse,l.translateToNewRequest))),x=Object(a.a)((()=>Object(s.pipe)(h,n.a(f.value.method.toLowerCase()),r.getOrElseW((()=>h.default))))),y=Object(a.a)((()=>new Date(u.shortcode.createdOn).toLocaleDateString())),w=Object(a.a)((()=>new Date(u.shortcode.createdOn).toLocaleTimeString()));return{t:o,deleteShortcode:e=>{m("delete-shortcode",e)},timeStampRef:b,copyIconRefs:v,parseShortcodeRequest:f,requestLabelColor:x,dateStamp:y,timeStamp:w,copyShortcode:e=>{Object(d.a)("https://hopp.sh/r/".concat(e)),p.success("".concat(o("state.copied_to_clipboard"))),v.value="check"}}}},u=p,m=(o(2202),o(16)),h=Object(m.a)(u,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"table-row-groups lg:flex block my-6 lg:my-0 w-full border lg:border-0 divide-y lg:divide-y-0 lg:divide-x divide-dividerLight border-dividerLight"},[o("div",{staticClass:"table-column font-mono text-tiny",attrs:{"data-label":e.t("shortcodes.short_code")}},[e._v("\n    "+e._s(e.shortcode.id)+"\n  ")]),e._v(" "),o("div",{staticClass:"table-column",class:e.requestLabelColor,attrs:{"data-label":e.t("shortcodes.method")}},[e._v("\n    "+e._s(e.parseShortcodeRequest.method)+"\n  ")]),e._v(" "),o("div",{staticClass:"table-column",attrs:{"data-label":e.t("shortcodes.url")}},[e._v("\n    "+e._s(e.parseShortcodeRequest.endpoint)+"\n  ")]),e._v(" "),o("div",{ref:"timeStampRef",staticClass:"table-column",attrs:{"data-label":e.t("shortcodes.created_on")}},[o("span",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.timeStamp}},[e._v("\n      "+e._s(e.dateStamp)+"\n    ")])]),e._v(" "),o("div",{staticClass:"flex flex-1 items-center justify-center px-3",attrs:{"data-label":e.t("shortcodes.actions")}},[o("SmartAnchor",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],staticClass:"px-3 text-accent hover:text-accent",attrs:{title:e.t("action.open_workspace"),to:"https://hopp.sh/r/"+e.shortcode.id,blank:"",svg:"external-link"}}),e._v(" "),o("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],staticClass:"px-3",attrs:{title:e.t("action.copy"),color:"green",svg:e.copyIconRefs},nativeOn:{click:function(t){return e.copyShortcode(e.shortcode.id)}}}),e._v(" "),o("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],staticClass:"px-3",attrs:{title:e.t("action.delete"),svg:"trash",color:"red"},nativeOn:{click:function(t){return e.deleteShortcode(e.shortcode.id)}}})],1)])}),[],!1,null,null,null);t.default=h.exports;installComponents(h,{SmartAnchor:o(320).default,ButtonSecondary:o(88).default})}}]);