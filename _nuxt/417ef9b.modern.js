(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{2252:function(t,e,n){"use strict";n.r(e);var c=n(18),o={setup:(t,e)=>({accentColors:c.a,active:Object(c.j)("THEME_COLOR"),setActiveColor:t=>{document.documentElement.setAttribute("data-accent",t),Object(c.d)("THEME_COLOR",t)}})},a=o,i=n(16),l=Object(i.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex"},t._l(t.accentColors,(function(e,c){return n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],key:"color-"+c,staticClass:"rounded",class:[{"bg-primaryLight":e===t.active}],attrs:{title:""+e.charAt(0).toUpperCase()+e.slice(1),icon:"lens",color:e},nativeOn:{click:function(n){return t.setActiveColor(e)}}})})),1)}),[],!1,null,null,null);e.default=l.exports;installComponents(l,{ButtonSecondary:n(88).default})}}]);