(window.webpackJsonp=window.webpackJsonp||[]).push([[91,93,94],{940:function(o,r,e){"use strict";e.d(r,"b",(function(){return k})),e.d(r,"d",(function(){return y})),e.d(r,"a",(function(){return j})),e.d(r,"c",(function(){return w}));var t=e(40),a=(e(57),e(1046),e(11),e(915)),c=e(954),n=e(1047),l=e(914),i=e(965),d=e(928),s=e(1040),m=e(958),u=e(1042),p=e(1048),v=e(1050),b=e(957),g=e(1051),f=e(1049),h=e(959),k=a.d.theme({"&":{fontSize:"var(--font-size-body)",height:"100%",width:"100%",flex:"1"},".cm-content":{caretColor:"var(--secondary-dark-color)",fontFamily:"var(--font-mono)",backgroundColor:"var(--primary-color)"},".cm-cursor":{borderColor:"var(--secondary-color)"},".cm-widgetBuffer":{position:"absolute"},".cm-selectionBackground":{backgroundColor:"var(--accent-dark-color)",color:"var(--accent-contrast-color)"},".cm-panels":{backgroundColor:"var(--primary-light-color)",color:"var(--secondary-light-color)"},".cm-panels.cm-panels-top":{borderBottom:"1px solid var(--divider-light-color)"},".cm-panels.cm-panels-bottom":{borderTop:"1px solid var(--divider-light-color)"},".cm-search":{display:"flex",alignItems:"center",flexWrap:"nowrap",flexShrink:0,overflow:"auto"},".cm-search label":{display:"inline-flex",alignItems:"center"},".cm-textfield":{backgroundColor:"var(--primary-dark-color)",color:"var(--secondary-dark-color)",borderColor:"var(--divider-light-color)",borderRadius:"3px"},".cm-button":{backgroundColor:"var(--primary-dark-color)",color:"var(--secondary-dark-color)",backgroundImage:"none",border:"none"},".cm-completionLabel":{color:"var(--secondary-color)"},".cm-tooltip":{backgroundColor:"var(--primary-dark-color)",color:"var(--secondary-light-color)",border:"none",borderRadius:"3px"},".cm-tooltip-arrow:after":{borderColor:"transparent !important"},".cm-tooltip-arrow:before":{borderColor:"transparent !important"},".cm-tooltip.cm-tooltip-autocomplete > ul":{fontFamily:"var(--font-mono)"},".cm-tooltip-autocomplete ul li[aria-selected]":{backgroundColor:"var(--accent-dark-color)",color:"var(--accent-contrast-color)"},".cm-tooltip-autocomplete ul li[aria-selected] .cm-completionLabel":{color:"var(--accent-contrast-color)"},".cm-activeLine":{backgroundColor:"transparent"},".cm-searchMatch":{outline:"1px solid var(--accent-dark-color)",backgroundColor:"var(--divider-dark-color)"},".cm-selectionMatch":{outline:"1px solid var(--accent-dark-color)",backgroundColor:"var(--divider-light-color)"},".cm-matchingBracket, .cm-nonmatchingBracket":{backgroundColor:"var(--divider-color)",outline:"1px solid var(--accent-dark-color)"},".cm-gutters":{fontFamily:"var(--font-mono)",backgroundColor:"var(--primary-color)",borderColor:"var(--divider-light-color)"},".cm-lineNumbers":{minWidth:"3em",color:"var(--secondary-light-color)"},".cm-foldGutter":{minWidth:"2em",color:"var(--secondary-light-color)"},".cm-foldGutter .cm-gutterElement":{textAlign:"center"},".cm-line":{paddingLeft:"0.5em",paddingRight:"0.5em"},".cm-activeLineGutter":{backgroundColor:"transparent"},".cm-scroller::-webkit-scrollbar":{display:"none"},".cm-foldPlaceholder":{backgroundColor:"var(--divider-light-color)",color:"var(--secondary-dark-color)",borderColor:"var(--divider-dark-color)"}}),y=a.d.theme({"&":{fontSize:"var(--font-size-body)",height:"100%",width:"100%",flex:"1"},".cm-content":{caretColor:"var(--secondary-dark-color)",fontFamily:"var(--font-sans)",color:"var(--secondary-dark-color)",backgroundColor:"transparent"},".cm-cursor":{borderColor:"var(--secondary-color)"},".cm-widgetBuffer":{position:"absolute"},".cm-selectionBackground":{backgroundColor:"var(--accent-dark-color)",color:"var(--accent-contrast-color)"},".cm-panels":{backgroundColor:"var(--primary-light-color)",color:"var(--secondary-light-color)"},".cm-panels.cm-panels-top":{borderBottom:"1px solid var(--divider-light-color)"},".cm-panels.cm-panels-bottom":{borderTop:"1px solid var(--divider-light-color)"},".cm-search":{display:"flex",alignItems:"center",flexWrap:"nowrap",flexShrink:0,overflow:"auto"},".cm-search label":{display:"inline-flex",alignItems:"center"},".cm-textfield":{backgroundColor:"var(--primary-dark-color)",color:"var(--secondary-dark-color)",borderColor:"var(--divider-light-color)",borderRadius:"3px"},".cm-button":{backgroundColor:"var(--primary-dark-color)",color:"var(--secondary-dark-color)",backgroundImage:"none",border:"none"},".cm-completionLabel":{color:"var(--secondary-color)"},".cm-tooltip":{backgroundColor:"var(--primary-dark-color)",color:"var(--secondary-light-color)",border:"none",borderRadius:"3px"},".cm-tooltip-arrow:after":{borderColor:"transparent !important"},".cm-tooltip-arrow:before":{borderColor:"transparent !important"},".cm-tooltip.cm-tooltip-autocomplete > ul":{fontFamily:"var(--font-mono)"},".cm-tooltip-autocomplete ul li[aria-selected]":{backgroundColor:"var(--accent-dark-color)",color:"var(--accent-contrast-color)"},".cm-tooltip-autocomplete ul li[aria-selected] .cm-completionLabel":{color:"var(--accent-contrast-color)"},".cm-activeLine":{backgroundColor:"transparent"},".cm-searchMatch":{outline:"1px solid var(--accent-dark-color)",backgroundColor:"var(--divider-dark-color)"},".cm-selectionMatch":{outline:"1px solid var(--accent-dark-color)",backgroundColor:"var(--divider-light-color)"},".cm-matchingBracket, .cm-nonmatchingBracket":{backgroundColor:"var(--divider-color)",outline:"1px solid var(--accent-dark-color)"},".cm-gutters":{fontFamily:"var(--font-mono)",backgroundColor:"var(--primary-color)",borderColor:"var(--divider-light-color)"},".cm-lineNumbers":{minWidth:"3em",color:"var(--secondary-light-color)"},".cm-foldGutter":{minWidth:"2em",color:"var(--secondary-light-color)"},".cm-foldGutter .cm-gutterElement":{textAlign:"center"},".cm-line":{paddingLeft:"1rem",paddingRight:"1rem",paddingTop:"0.2rem",paddingBottom:"0.2rem"},".cm-activeLineGutter":{backgroundColor:"transparent"},".cm-scroller::-webkit-scrollbar":{display:"none"},".cm-foldPlaceholder":{backgroundColor:"var(--divider-light-color)",color:"var(--secondary-dark-color)",borderColor:"var(--divider-dark-color)"}}),x="var(--editor-name-color)",C="var(--editor-constant-color)",j=c.a.define([{tag:c.d.keyword,color:"var(--editor-keyword-color)"},{tag:[c.d.name,c.d.deleted,c.d.character,c.d.propertyName,c.d.macroName],color:x},{tag:[c.d.function(c.d.variableName),c.d.labelName],color:"var(--editor-variable-color)"},{tag:[c.d.color,c.d.constant(c.d.name),c.d.standard(c.d.name)],color:C},{tag:[c.d.definition(c.d.name),c.d.separator],color:"var(--editor-separator-color)"},{tag:[c.d.typeName,c.d.className,c.d.number,c.d.changed,c.d.annotation,c.d.modifier,c.d.self,c.d.namespace],color:"var(--editor-type-color)"},{tag:[c.d.operator,c.d.operatorKeyword,c.d.url,c.d.escape,c.d.regexp,c.d.link,c.d.special(c.d.string)],color:"var(--editor-operator-color)"},{tag:[c.d.meta,c.d.comment],color:"var(--editor-meta-color)"},{tag:c.d.strong,fontWeight:"bold"},{tag:c.d.emphasis,fontStyle:"italic"},{tag:c.d.strikethrough,textDecoration:"line-through"},{tag:c.d.link,color:"var(--editor-link-color)",textDecoration:"underline"},{tag:c.d.heading,fontWeight:"bold",color:x},{tag:[c.d.atom,c.d.bool,c.d.special(c.d.variableName)],color:C},{tag:[c.d.processingInstruction,c.d.string,c.d.inserted],color:"var(--editor-process-color)"},{tag:c.d.invalid,color:"var(--editor-invalid-color)"}]),w=[Object(s.d)(),Object(s.c)(),Object(a.l)(),Object(i.a)(),Object(n.a)({openText:"▾",closedText:"▸"}),Object(a.i)(),Object(a.j)(),l.g.allowMultipleSelections.of(!0),Object(d.p)(),c.b.fallback,Object(u.a)(),Object(p.a)(),Object(b.a)(),Object(f.b)(),Object(f.a)(),Object(a.k)(),Object(v.a)(),a.m.of([].concat(Object(t.a)(p.b),Object(t.a)(m.a),Object(t.a)(v.c),Object(t.a)(i.b),Object(t.a)(n.b),Object(t.a)(g.a),Object(t.a)(b.c),Object(t.a)(h.a))),Object(v.b)()]},941:function(o,r,e){"use strict";e.d(r,"a",(function(){return g})),e.d(r,"b",(function(){return f}));var t=e(109),a=e(110),c=(e(60),e(88),e(137),e(4),e(3)),n=e(914),l=e(960),i=e(915),d=e(16),s=e(74),m=e(105),u=/(<<\w+>>)/g,p=function(o){return Object(l.b)((function(r,e,t){for(var a,c,n,l,i=r.state.doc.lineAt(e),m=i.from,p=i.to,v=i.text,b=e,g=e;b>m&&/\w/.test(v[b-m-1]);)b--;for(;g<p&&/\w/.test(v[g-m]);)g++;if(b===e&&t<0||g===e&&t>0||!u.test(v.slice(b-m-2,g-m+2)))return null;var f=null!==(c=null===(a=o.find((function(o){return o.key===v.slice(b-m,g-m)})))||void 0===a?void 0:a.sourceEnv)&&void 0!==c?c:"choose an environment",h=null!==(l=null===(n=o.find((function(o){return o.key===v.slice(b-m,g-m)})))||void 0===n?void 0:n.value)&&void 0!==l?l:"not found",k=Object(s.parseTemplateStringE)(h,o),y=d.isLeft(k)?"error":k.right;return{pos:b,end:p,above:!0,arrow:!0,create:function(){var o=document.createElement("span"),r=document.createElement("xmp");return r.textContent=y,o.appendChild(document.createTextNode("".concat(f," "))),o.appendChild(r),o.className="tooltip-theme",{dom:o}}}}),{hoverTime:1})};var v=function(o){return new i.e({regexp:u,decoration:function(r){return function(o,r){var e=r.find((function(r){return r.key===o.slice(2,-2)}))?"bg-accentDark text-accentContrast hover:bg-accent":"bg-red-500 text-accentContrast hover:bg-red-600";return i.b.mark({class:"".concat("cursor-help transition rounded px-1 focus:outline-none mx-0.5 env-highlight"," ").concat(e)})}(r[0],o)}})},b=function(o){var r=v(o);return i.g.define((function(o){return{decorations:r.createDeco(o),update:function(o){this.decorations=r.updateDeco(o,this.decorations)}}}),{decorations:function(o){return o.decorations}})},g=function(){function o(r,e){var a=this;Object(t.a)(this,o),this.editorView=e,this.compartment=new n.e,this.envs=[],this.envs=Object(m.i)(),r(m.b,(function(o){var r;a.envs=o,null===(r=a.editorView.value)||void 0===r||r.dispatch({effects:a.compartment.reconfigure([p(a.envs),b(a.envs)])})}))}return Object(a.a)(o,[{key:"extension",get:function(){return this.compartment.of([p(this.envs),b(this.envs)])}}]),o}(),f=function(){function o(r,e){var a=this;Object(t.a)(this,o),this.editorView=e,this.compartment=new n.e,this.envs=[],Object(c.z)(r,(function(o){var r;a.envs=o,null===(r=a.editorView.value)||void 0===r||r.dispatch({effects:a.compartment.reconfigure([p(a.envs),b(a.envs)])})}),{immediate:!0})}return Object(a.a)(o,[{key:"extension",get:function(){return this.compartment.of([p(this.envs),b(this.envs)])}}]),o}()},950:function(o,r,e){"use strict";e.d(r,"b",(function(){return t})),e.d(r,"a",(function(){return a}));e(60);var t=[{title:"request.content_type_titles.text",contentTypes:["application/json","application/ld+json","application/hal+json","application/vnd.api+json","application/xml"]},{title:"request.content_type_titles.structured",contentTypes:["application/x-www-form-urlencoded","multipart/form-data"]},{title:"request.content_type_titles.others",contentTypes:["text/html","text/plain"]}];function a(o){return/\bjson\b/i.test(o)}}}]);