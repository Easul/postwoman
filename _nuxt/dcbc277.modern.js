(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{1222:function(e,t,n){"use strict";n.r(t);var o=n(34),r=n(3),a=n(104);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var c=Object(r.c)({props:{show:Boolean,folder:{type:Object,default:()=>{}},folderPath:{type:String,default:null},editingFolderName:{type:String,default:null}},data:()=>({name:""}),watch:{editingFolderName(e){this.name=e}},methods:{editFolder(){this.name?(Object(a.h)(this.folderPath,i(i({},this.folder),{},{name:this.name})),this.hideModal()):this.$toast.error("".concat(this.$t("collection.invalid_name")))},hideModal(){this.name="",this.$emit("hide-modal")}}}),s=n(16),u=Object(s.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.show?n("SmartModal",{attrs:{dialog:"",title:""+e.$t("folder.edit")},on:{close:function(t){return e.$emit("hide-modal")}},scopedSlots:e._u([{key:"body",fn:function(){return[n("div",{staticClass:"flex flex-col px-2"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"},{name:"focus",rawName:"v-focus"}],staticClass:"input floating-input",attrs:{id:"selectLabelGqlEditFolder",placeholder:" ",type:"text",autocomplete:"off"},domProps:{value:e.name},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.editFolder.apply(null,arguments)},input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),n("label",{attrs:{for:"selectLabelGqlEditFolder"}},[e._v("\n        "+e._s(e.$t("action.label"))+"\n      ")])])]},proxy:!0},{key:"footer",fn:function(){return[n("span",[n("ButtonPrimary",{attrs:{label:""+e.$t("action.save")},nativeOn:{click:function(t){return e.editFolder.apply(null,arguments)}}}),e._v(" "),n("ButtonSecondary",{attrs:{label:""+e.$t("action.cancel")},nativeOn:{click:function(t){return e.hideModal.apply(null,arguments)}}})],1)]},proxy:!0}],null,!1,3376791847)}):e._e()}),[],!1,null,null,null);t.default=u.exports;installComponents(u,{ButtonPrimary:n(145).default,ButtonSecondary:n(88).default,SmartModal:n(93).default})}}]);