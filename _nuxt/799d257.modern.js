(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{1296:function(t,e,s){var n=s(1903);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,s(97).default)("33fd4022",n,!0,{sourceMap:!1})},1902:function(t,e,s){"use strict";s(1296)},1903:function(t,e,s){var n=s(96)(!1);n.push([t.i,".autocomplete-wrapper[data-v-3068c061] {\n  position: relative;\n  display: contents;\n}\n.autocomplete-wrapper input:focus+ul.suggestions[data-v-3068c061], .autocomplete-wrapper ul.suggestions[data-v-3068c061]:hover {\n  display: block;\n}\n.autocomplete-wrapper ul.suggestions[data-v-3068c061] {\n  display: none;\n  background-color: var(--popover-color);\n  position: absolute;\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n  left: 0px;\n  z-index: 50;\n  --tw-shadow: 0 10px 15px -3px rgb(0 0 0/0.1),0 4px 6px -4px rgb(0 0 0/0.1);\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color);\n  -webkit-box-shadow: var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);\n  box-shadow: var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);\n  max-height: 11.5rem;\n  overflow-y: auto;\n  top: calc(100% - 4px);\n  border-radius: 0 0 8px 8px;\n}\n.autocomplete-wrapper ul.suggestions li[data-v-3068c061] {\n  width: 100%;\n  display: block;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  color: var(--secondary-color);\n}\n.autocomplete-wrapper ul.suggestions li[data-v-3068c061]:last-child {\n  border-radius: 0 0 8px 8px;\n}\n.autocomplete-wrapper ul.suggestions li[data-v-3068c061]:hover, .autocomplete-wrapper ul.suggestions li.active[data-v-3068c061] {\n  background-color: var(--accent-dark-color);\n  color: var(--accent-contrast-color);\n  cursor: pointer;\n}",""]),t.exports=n},1917:function(t,e,s){"use strict";s.r(e);s(171);var n=s(3),r=Object(n.c)({props:{spellcheck:{type:Boolean,default:!0,required:!1},autocapitalize:{type:String,default:"off",required:!1},placeholder:{type:String,default:"",required:!1},source:{type:Array,required:!0},value:{type:String,default:"",required:!1},styles:{type:String,default:""}},data(){return{text:this.value,selectionStart:0,suggestionsOffsetLeft:0,currentSuggestionIndex:-1,suggestionsVisible:!1}},computed:{suggestions(){var t=this.text.substring(0,this.selectionStart);return this.source.filter((e=>e.toLowerCase().startsWith(t.toLowerCase())&&t.toLowerCase()!==e.toLowerCase())).map((t=>t.substring(this.selectionStart))).slice(0,10)}},watch:{text(){this.$emit("input",this.text)},value(t){this.text=t}},mounted(){this.updateSuggestions({target:this.$refs.acInput})},methods:{updateSuggestions(t){if(t.code&&"Escape"===t.code)return t.preventDefault(),this.suggestionsVisible=!1,void(this.currentSuggestionIndex=-1);this.selectionStart=this.$refs.acInput.selectionStart,this.suggestionsOffsetLeft=12*this.selectionStart,this.suggestionsVisible=!0},forceSuggestion(t){var e=this.text.substring(0,this.selectionStart);this.text=e+t,this.selectionStart=this.text.length,this.suggestionsVisible=!0,this.currentSuggestionIndex=-1},handleKeystroke(t){switch(t.code){case"Enter":t.preventDefault(),this.currentSuggestionIndex>-1&&this.forceSuggestion(this.suggestions.find(((t,e)=>e===this.currentSuggestionIndex)));break;case"ArrowUp":t.preventDefault(),this.currentSuggestionIndex=this.currentSuggestionIndex-1>=0?this.currentSuggestionIndex-1:0;break;case"ArrowDown":t.preventDefault(),this.currentSuggestionIndex=this.currentSuggestionIndex<this.suggestions.length-1?this.currentSuggestionIndex+1:this.suggestions.length-1;break;case"Tab":var e=this.suggestions[this.currentSuggestionIndex>=0?this.currentSuggestionIndex:0];if(!e)return;t.preventDefault();var s=this.text.substring(0,this.selectionStart);this.text=s+e}}}}),o=(s(1902),s(16)),i=Object(o.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"autocomplete-wrapper"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],ref:"acInput",class:t.styles,attrs:{type:"text",autocomplete:"off",placeholder:t.placeholder,spellcheck:t.spellcheck,autocapitalize:t.autocapitalize},domProps:{value:t.text},on:{input:[function(e){e.target.composing||(t.text=e.target.value)},t.updateSuggestions],keyup:t.updateSuggestions,click:t.updateSuggestions,keydown:t.handleKeystroke,change:function(e){return t.$emit("change",e)}}}),t._v(" "),t.suggestions.length>0&&t.suggestionsVisible?s("ul",{staticClass:"suggestions hide-scrollbar",style:{transform:"translate("+t.suggestionsOffsetLeft+"px, 0)"}},t._l(t.suggestions,(function(e,n){return s("li",{key:"suggestion-"+n,class:{active:t.currentSuggestionIndex===n},on:{click:function(s){return s.preventDefault(),t.forceSuggestion(e)}}},[t._v("\n      "+t._s(e)+"\n    ")])})),0):t._e()])}),[],!1,null,"3068c061",null);e.default=i.exports}}]);