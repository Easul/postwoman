(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{2009:function(e,t,s){"use strict";s.r(t);var a=s(17),n={};n.props={env:{key:"env",required:!0,type:Object},status:{key:"status",required:!0,type:null},global:{key:"global",required:!1,type:Boolean,default:!1}},n.setup=(e,t)=>({t:Object(a.d)(),getIcon:e=>{switch(e){case"additions":return"add_circle";case"updations":return"check_circle";case"deletions":return"remove_circle"}},getStyle:e=>{switch(e){case"additions":return"text-green-500";case"updations":return"text-yellow-500";case"deletions":return"text-red-500"}},getTooltip:e=>{switch(e){case"additions":return"environment.added";case"updations":return"environment.updated";case"deletions":return"environment.deleted"}}});var r=n,i=s(16),l=Object(i.a)(r,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"flex items-center justify-between px-4 py-2"},[s("div",{staticClass:"flex items-center"},[s("i",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],staticClass:"mr-4 material-icons cursor-help",class:e.getStyle(e.status),attrs:{title:""+e.t(e.getTooltip(e.status))}},[e._v("\n      "+e._s(e.getIcon(e.status))+"\n    ")]),e._v(" "),s("span",{staticClass:"text-secondaryDark"},[e._v("\n      "+e._s(e.env.key)+"\n    ")]),e._v(" "),s("span",{staticClass:"text-secondaryDark pl-2 break-all"},[e._v("\n      "+e._s("   —   "+e.env.value)+"\n    ")]),e._v(" "),"updations"===e.status?s("span",{staticClass:"text-secondaryLight px-2 break-all"},[e._v("\n      "+e._s("   ←   "+e.env.previousValue)+"\n    ")]):e._e()]),e._v(" "),e.global?s("span",{staticClass:"px-1 rounded bg-accentLight text-accentContrast text-tiny"},[e._v("\n    Global\n  ")]):e._e()])}),[],!1,null,null,null);t.default=l.exports}}]);