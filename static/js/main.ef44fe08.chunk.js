(this["webpackJsonppdf-bullets-cra"]=this["webpackJsonppdf-bullets-cra"]||[]).push([[0],{285:function(e,t){},287:function(e,t){},446:function(e,t){},447:function(e,t){},448:function(e,t){},449:function(e,t){},450:function(e,t){},455:function(e,t){},456:function(e,t){},489:function(e,t,n){},490:function(e,t,n){"use strict";n.r(t);var a=n(12),r=n(21),s=n(130),i=n.n(s),o=n(63),c=n(155),l=n(66),u=(n(431),n(229)),d=0,h=1,b=-1,p=-4,f={all:{AF707:{fields:["S2DutyTitleDesc","S4Assessment","S5Assessment","S6Assessment"],likelyWidth:"201.041mm"},AF1206:{fields:["specificAccomplishments","p2SpecificAccomplishments"],likelyWidth:"202.321mm"},AF910:{fields:["KeyDuties","IIIComments","IVComments","VComments","VIIIComments","IXComments"],likelyWidth:"202.321mm"},AF911:{fields:["KeyDuties","IIIComments","IVComments","VIIComments","VIIIComments","IXComments"],likelyWidth:"202.321mm"}}},j=function(e){return e.split(/[\s]+/)},m=function e(t,n,a){t.match("\n")&&console.error("renderBulletText expects a single line of text");var r=n(t.trimEnd());if(""===t)return{textLines:[],fullWidth:0,lines:0,overflow:0-a};if(r<a)return{textLines:[t],fullWidth:r,lines:1,overflow:r-a};var s=t.split(/(?<=[\u2004\u2009\u2006\s?/|\-%!])(?=[a-zA-Z0-9+\\])/);if(n(s[0].trimEnd())<a){for(var i=0,o=1;o<=s.length;o++){if(n(s.slice(0,o).join("").trimEnd())>a){i=o-1;break}}var c=s.slice(i,s.length).join("");if(c===t)return console.warn("Can't fit \""+t+'" on a single line\n',{text:t,width:a,fullWidth:r}),{textLines:[t],fullWidth:r,lines:1,overflow:r-a};var l=e(c,n,a);return{textLines:[s.slice(0,i).join("")].concat(Object(u.a)(l.textLines)),fullWidth:r,lines:1+l.lines,overflow:r-a}}var d=r/t.length,h=parseInt(a/d),b=n(t.substring(0,h)),p=h;if(b>a)for(var f=h-1;f>0;f--){if(n(t.substring(0,f))<a){p=f;break}}else if(b<a)for(var j=h;j<=t.length;j++){if(n(t.substring(0,j))>a){p=j-1;break}}var m=t.substring(p,t.length);if(m===t)return console.warn("Can't fit \""+t+'" on a single line\n',{text:t,width:a,fullWidth:r}),{textLines:[t],fullWidth:r,lines:1,overflow:r-a};var v=e(m,n,a);return{textLines:[t.substring(0,p)].concat(Object(u.a)(v.textLines)),fullWidth:r,lines:1+v.lines,overflow:r-a}};var v=function(e){var t=e.text,n=void 0===t?"":t,s=e.widthPx,i=void 0===s?500:s,c=e.enableOptim,l=void 0!==c&&c,u=e.height,f=e.onHighlight,v=Object(r.useRef)(null),O=Object(r.useState)((function(){return[" "]})),g=Object(o.a)(O,2),x=g[0],w=g[1],y=Object(r.useState)("inherit"),S=Object(o.a)(y,2),N=S[0],C=S[1],k=Object(r.useState)(!1),R=Object(o.a)(k,2),D=R[0],A=R[1],E=Object(r.useState)(b),W=Object(o.a)(E,2),I=W[0],T=W[1],F=Object(r.useState)({textLines:[""]}),M=Object(o.a)(F,2),P=M[0],J=M[1],L=i+.55;function U(e,t){var n=t.getContext("2d");return n.font="12pt Times New Roman",n.textAlign="left",n.measureText(e).width}return Object(r.useEffect)((function(){J(m(n,(function(e){return U(e,v.current)}),L))}),[n,L,l]),Object(r.useEffect)((function(){if(A(!0),w(P.textLines),l){var e=function(e,t){var n=j(e.trimEnd()),a=t(e);if(0===a.overflow)return a;var r,s,i=a,o=a,c=a.overflow>=0?"\u2006":"\u2004",l=b,u=t(n[0]+" "+n.slice(1).join(c));if("\u2006"===c&&u.overflow>0||"\u2004"===c&&u.overflow<p)return{status:h,rendering:u};for(;a.overflow>0||a.overflow<p;){var f=(r=n.join(""),s=n.length-1-1,Math.floor(Math.abs(Math.floor(9*function(e){var t,n=0;if(0===e.length)return n;for(t=0;t<e.length;t++)n=(n<<5)-n+e.charCodeAt(t),n|=0;return n}(r)+5)%1e5/1e5)*Math.floor(s))+1);n.splice(f,2,n.slice(f,f+2).join(c));var m=t(n.join(" "));if(a.overflow<=0&&m.overflow>0){o=i,l=d;break}if(a.overflow>0&&m.overflow<0){o=m,l=d;break}i=m}return{status:l,rendering:o}}(n,(function(e){return m(e,(function(e){return U(e,v.current)}),L)}));A(!1),T(e.status),w(e.rendering.textLines)}else P.overflow<p||P.overflow>0?T(h):T(d),w(P.textLines),A(!1)}),[P,l,n,L]),Object(r.useEffect)((function(){C(D?"silver":I===h?"red":"black")}),[D,x,I]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("canvas",{ref:v,style:{visibility:"hidden",position:"absolute",top:"-1000px",left:"-1000px"}}),Object(a.jsx)("div",{style:{minHeight:u,color:N,display:"flex",flexDirection:"column"},onMouseUp:f,children:x.map((function(e){return Object(a.jsx)("span",{style:{whiteSpace:"pre"},children:e},e)}))})]})};function O(e){var t=e.editorState,n=e.setEditorState,s=e.width,i=e.onSelect,u=e.abbrReplacer,d=e.enableOptim,h="bulletOutput",b=Object(r.useState)(new Map),p=Object(o.a)(b,2),f=p[0],j=p[1];return Object(r.useEffect)((function(){var e,n=new Map,a=Object(c.a)(t.getCurrentContent().getBlockMap().keys());try{for(a.s();!(e=a.n()).done;){var r=e.value,s=document.querySelector('div[data-offset-key="'.concat(r,'-0-0"]'));s&&n.set(r,s.getBoundingClientRect().height)}}catch(i){a.e(i)}finally{a.f()}j(n)}),[t]),Object(a.jsxs)("div",{className:"bullets columns is-multiline",children:[Object(a.jsxs)("div",{className:"column",style:{},children:[Object(a.jsx)("h2",{className:"subtitle",children:"Input Bullets Here:"}),Object(a.jsx)("div",{className:"border",style:{width:s+1+"mm"},children:Object(a.jsx)(l.Editor,{editorState:t,onChange:function(e){var t=g(e).selectedText;i&&""!==t&&i(t),n(e)},handleKeyCommand:function(e,t){var a=l.RichUtils.handleKeyCommand(t,e);return a?(n(a),"handled"):"not-handled"},stripPastedStyles:!0})})]}),Object(a.jsxs)("div",{className:"column",children:[Object(a.jsx)("h2",{className:"subtitle",children:"View Output Here:"}),Object(a.jsx)("div",{className:"border",id:h,style:{width:s+1+"mm"},onMouseUp:function(e){var t=window.getSelection().toString();""!==t&&i(t)},onKeyDown:function(e){if(e.ctrlKey&&65===e.keyCode&&(e.preventDefault(),e.target.id.match(new RegExp(h)))){var t=document.createRange();t.selectNode(e.target),window.getSelection().removeAllRanges(),window.getSelection().addRange(t)}},tabIndex:"0",children:Array.from(t.getCurrentContent().getBlockMap(),(function(e){var t=Object(o.a)(e,2),n=t[0],r=t[1].getText();return u&&(r=u(r)),Object(a.jsx)(v,{text:r,widthPx:3.7795275590551185*s,height:f.get(n),enableOptim:d},n)}))})]})]})}var g=function(e){var t=e.getSelection(),n=t.getAnchorKey(),a=e.getCurrentContent().getBlockForKey(n),r=t.getStartOffset(),s=t.getEndOffset(),i=a.getText().slice(r,s);return{selectionState:t,anchorKey:n,contentBlock:a,start:r,end:s,selectedText:i}},x=n(91),w=n(92),y=n(94),S=n(93),N=n(122),C=n(123),k=n(434),R=n(451);k.GlobalWorkerOptions.workerSrc=R;var D=function(e){Object(y.a)(n,e);var t=Object(S.a)(n);function n(e){var a;return Object(x.a)(this,n),(a=t.call(this,e)).importFile=function(e){if(a.fileInputRef.current.value){var t=function(e){console.log(e)};"PDF"===a.state.type?t=a.getDataFromPDF:"JSON"===a.state.type&&(t=a.getDataFromJSON),t(a.fileInputRef.current.files[0]),a.fileInputRef.current.value=""}else console.log("no file picked")},a.inputClick=function(e){return function(){a.setState({type:e}),a.fileInputRef.current.click()}},a.getDataFromPDF=function(e){var t=function(e){var t=e.arrayBuffer().then((function(e){var t=new Uint8Array(e);return k.getDocument({data:t}).promise})),n=t.then((function(e){return e.getXFA()})),a=t.then((function(e){return e.getMetadata().then((function(e){return e.info.Custom["Short Title - Prefix"]+""+e.info.Custom["Short Title - Number"]}))})),r=Promise.all([a,n]),s=r.then((function(e){var t=e[0],n=e[1].datasets;n=n.replace(/&#xD;/g,"\n");var a,r=(new DOMParser).parseFromString(n,"text/xml"),s="",i=Object(c.a)(f.all[t].fields);try{for(i.s();!(a=i.n()).done;){var o=a.value;s+=r.querySelector(o).innerHTML+"\n"}}catch(l){i.e(l)}finally{i.f()}return s})),i=r.then((function(e){var t,n=e[0],a=e[1].template,r=(new DOMParser).parseFromString(a,"text/xml"),s=[],i=[],o=[],l=0,u=Object(c.a)(f.all[n].fields);try{for(u.s();!(t=u.n()).done;){var d=t.value,h=r.querySelector("field[name='"+d+"'");s[l]=h.querySelector("font").getAttribute("typeface"),i[l]=h.querySelector("font").getAttribute("size"),o[l]=h.getAttribute("w"),l+=1}}catch(g){u.e(g)}finally{u.f()}for(var b=0,p=s;b<p.length;b++){if(p[b]!==s[0]){console.log("warning: not all grabbed sections have the same font type");break}}for(var j=0,m=i;j<m.length;j++){if(m[j]!==i[0]){console.log("warning: not all grabbed sections have the same font size");break}}for(var v=0,O=o;v<O.length;v++){if(O[v]!==o[0]){console.log("warning: not all grabbed sections have the same width");break}}return{font:s[0],fontSize:i[0],width:o[0]}}));return{pullBullets:s,getPageInfo:i}}(e),n=t.pullBullets,r=t.getPageInfo,s=a.props.onTextUpdate,i=a.props.onWidthUpdate;Promise.all([n,r]).then((function(e){var t=Object(o.a)(e,2),n=t[0],a=t[1];i(parseFloat(a.width))();var r=(new DOMParser).parseFromString(n,"text/html").documentElement.textContent;s(r)()}))},a.getDataFromJSON=function(e){var t=new FileReader;t.onload=function(e){var t=JSON.parse(e.target.result);a.props.onJSONImport(t)},t.readAsText(e)},a.hoverOut=function(){a.setState({hovering:!1})},a.toggleMenu=function(){var e=a.state.hovering;a.setState({hovering:!e})},a.fileInputRef=Object(r.createRef)(),a.state={type:"none",hovering:!1},a}return Object(w.a)(n,[{key:"render",value:function(){var e=this.state.hovering?"is-active":"";return Object(a.jsxs)("div",{className:"dropdown "+e,children:[Object(a.jsx)("input",{type:"file",onChange:this.importFile,style:{display:"none"},ref:this.fileInputRef}),Object(a.jsx)("div",{className:"dropdown-trigger",children:Object(a.jsxs)("div",{className:"buttons has-addons",children:[Object(a.jsx)("button",{className:"button",onClick:this.inputClick("PDF"),children:"Import"}),Object(a.jsx)("button",{className:"button",onClick:this.toggleMenu,"aria-haspopup":"true","aria-controls":"import-menu",children:Object(a.jsx)("span",{className:"icon",children:Object(a.jsx)(N.a,{icon:C.a})})})]})}),Object(a.jsx)("div",{className:"dropdown-menu",id:"import-menu",role:"menu",onMouseLeave:this.hoverOut,children:Object(a.jsxs)("div",{className:"dropdown-content",children:[Object(a.jsx)("a",{href:"?#",className:"dropdown-item",onClick:this.inputClick("PDF"),children:"PDF"}),Object(a.jsx)("a",{href:"?#",className:"dropdown-item",onClick:this.inputClick("JSON"),children:"JSON"})]})})]})}}]),n}(r.PureComponent),A=function(e){Object(y.a)(n,e);var t=Object(S.a)(n);function n(e){var a;return Object(x.a)(this,n),(a=t.call(this,e)).state={},a}return Object(w.a)(n,[{key:"render",value:function(){var e=202.321,t=202.321,n=201.041;return Object(a.jsxs)("div",{className:"field is-grouped",children:[Object(a.jsxs)("div",{className:"control field has-addons",children:[Object(a.jsxs)("div",{className:"control has-icons-right",children:[Object(a.jsx)("input",{className:"input",id:"widthInput",type:"number",min:"100",max:"500",step:".001",value:this.props.width,onChange:this.props.onWidthChange}),Object(a.jsx)("span",{className:"icon is-right",children:"mm"})]}),Object(a.jsxs)("div",{className:"control buttons has-addons",children:[Object(a.jsx)("a",{className:"button is-primary "+(this.props.width===e?"":"is-outlined"),onClick:this.props.onWidthUpdate(e),children:"AWD"}),Object(a.jsx)("a",{className:"button is-success "+(this.props.width===t?"":"is-outlined"),onClick:this.props.onWidthUpdate(t),children:"EPR"}),Object(a.jsx)("a",{className:"button is-link "+(this.props.width===n?"":"is-outlined"),onClick:this.props.onWidthUpdate(n),children:"OPR"})]})]}),Object(a.jsx)("a",{className:"control button is-dark"+(this.props.enableOptim?"":"is-outlined"),onClick:this.props.onOptimChange,id:"enableOptim",children:"Auto-Space"})]})}}]),n}(r.PureComponent),E=function(e){Object(y.a)(n,e);var t=Object(S.a)(n);function n(){return Object(x.a)(this,n),t.apply(this,arguments)}return Object(w.a)(n,[{key:"render",value:function(){return Object(a.jsx)("button",{className:"button",onClick:this.props.onTextNorm,children:"Renormalize Input Spacing"})}}]),n}(r.PureComponent),W=function(e){Object(y.a)(n,e);var t=Object(S.a)(n);function n(e){var a;return Object(x.a)(this,n),(a=t.call(this,e)).onSave=function(){var e=a.props.onSave(),t=JSON.stringify([e]);try{localStorage.setItem("bullet-settings",t),console.log("saved settings/data to local storage with character length "+t.length)}catch(n){if("SecurityError"!==n.name)throw n;alert("Sorry, saving to cookies does not work using the file:// interface and/or your browser's privacy settings")}},a.onExport=function(){var e=a.props.onSave(),t=JSON.stringify([e]),n="data:application/JSON;charset=utf-8,"+encodeURIComponent(t);a.exportRef.current.href=n,a.exportRef.current.click(),console.log("exported settings/data to JSON file with character length "+t.length)},a.hoverOut=function(){a.setState({hovering:!1})},a.toggleMenu=function(){var e=a.state.hovering;a.setState({hovering:!e})},a.exportRef=Object(r.createRef)(),a.state={hovering:!1},a}return Object(w.a)(n,[{key:"render",value:function(){var e=this.state.hovering?"is-active":"";return Object(a.jsxs)("div",{className:"dropdown "+e,children:[Object(a.jsx)("div",{className:"dropdown-trigger",children:Object(a.jsxs)("div",{className:"buttons has-addons",children:[Object(a.jsxs)("button",{className:"button",onClick:this.onSave,children:["Save"," "]}),Object(a.jsx)("button",{className:"button","aria-haspopup":"true","aria-controls":"save-menu",children:Object(a.jsx)("span",{className:"icon",onClick:this.toggleMenu,children:Object(a.jsx)(N.a,{icon:C.a})})})]})}),Object(a.jsx)("div",{className:"dropdown-menu",id:"save-menu",role:"menu",onMouseLeave:this.hoverOut,children:Object(a.jsxs)("div",{className:"dropdown-content",children:[Object(a.jsx)("a",{href:"?#",className:"dropdown-item",onClick:this.onSave,children:"Cookie"}),Object(a.jsx)("a",{href:"?#",className:"dropdown-item",onClick:this.onExport,children:"JSON"})]})}),Object(a.jsx)("a",{href:"?#",style:{display:"none"},download:"settings.json",ref:this.exportRef})]})}}]),n}(r.PureComponent),I=function(e){Object(y.a)(n,e);var t=Object(S.a)(n);function n(){return Object(x.a)(this,n),t.apply(this,arguments)}return Object(w.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("h1",{className:"title",children:[Object(a.jsx)("span",{className:"logo",children:"AF "}),Object(a.jsx)("span",{className:"logo",children:"Bull"}),"et",Object(a.jsx)("span",{className:"logo",children:" Sh"}),"aping &",Object(a.jsx)("span",{className:"logo",children:" i"}),"teration",Object(a.jsx)("span",{className:"logo",children:" t"}),"ool"]})}}]),n}(r.PureComponent),T=function(e){Object(y.a)(n,e);var t=Object(S.a)(n);function n(){return Object(x.a)(this,n),t.apply(this,arguments)}return Object(w.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("a",{className:"button",onClick:this.props.onHide,"aria-haspopup":"true","aria-controls":"thesaurus-menu",children:[Object(a.jsx)("span",{children:"Thesaurus"}),Object(a.jsx)("span",{className:"icon",children:Object(a.jsx)(N.a,{icon:C.a})})]})}}]),n}(r.PureComponent),F=function(e){Object(y.a)(n,e);var t=Object(S.a)(n);function n(){return Object(x.a)(this,n),t.apply(this,arguments)}return Object(w.a)(n,[{key:"render",value:function(){return Object(a.jsx)("nav",{className:"navbar",role:"navigation","aria-label":"main navigation",children:Object(a.jsxs)("div",{className:"navbar-start",children:[Object(a.jsx)("div",{className:"navbar-item",children:Object(a.jsx)(W,{onSave:this.props.onSave})}),Object(a.jsx)("div",{className:"navbar-item",children:Object(a.jsx)(D,{onJSONImport:this.props.onJSONImport,onTextUpdate:this.props.onTextUpdate,onWidthUpdate:this.props.onWidthUpdate})}),Object(a.jsx)("div",{className:"navbar-item",children:Object(a.jsx)(A,{enableOptim:this.props.enableOptim,onOptimChange:this.props.onOptimChange,width:this.props.width,onWidthChange:this.props.onWidthChange,onWidthUpdate:this.props.onWidthUpdate})}),Object(a.jsx)("div",{className:"navbar-item",children:Object(a.jsx)(E,{onTextNorm:this.props.onTextNorm})}),Object(a.jsx)("div",{className:"navbar-item",children:Object(a.jsx)(T,{onHide:this.props.onThesaurusHide})})]})})}}]),n}(r.PureComponent);var M=n(332),P=n(125),J=n.n(P),L=n.p+"static/media/abbrs.ebd0e99b.xlsx",U=n(230),B=n(331),H=(n(324),{columns:[{data:"enabled",type:"checkbox",disableVisualSelection:!0,width:20},{data:"value",type:"text"},{data:"abbr",type:"text"}],stretchH:"all",width:500,autoWrapRow:!0,height:500,maxRows:1/0,manualRowResize:!0,manualColumnResize:!0,rowHeaders:!0,colHeaders:["Enabled","Word","Abbreviation"],trimWhitespace:!1,enterBeginsEditing:!1,manualRowMove:!0,manualColumnMove:!0,columnSorting:{indicator:!0},autoColumnSize:!1,minRows:15,contextMenu:!0,licenseKey:"non-commercial-and-evaluation"});var z=function(e){var t=e.data,n=e.setData,s=Object(r.useRef)(null);return Object(a.jsx)(B.a,Object(U.a)(Object(U.a)({},H),{},{data:t,ref:s,afterChange:function(e,t){if("loadData"!==t&&null!==s.current){var a=s.current.hotInstance.getData().map((function(e){return{enabled:e[0],value:e[1],abbr:e[2]}}));n(a)}}}))},K=function(e,t){var n=new FileReader;n.onload=function(e){var n=e.target.result,a=J.a.read(n,{type:"binary",raw:!0}),r=J.a.utils.sheet_to_json(a.Sheets[a.SheetNames[0]],{header:["enabled","value","abbr"]}).map((function(e){return{enabled:e.enabled,value:e.value,abbr:e.abbr}}));r[0].enabled.toString().match(/enabled/i)?t(r.slice(1)):t(r)},n.readAsBinaryString(e)};function V(e){var t=e.data,n=e.setData,s=(Object(M.a)(e,["data","setData"]),Object(r.createRef)());return Object(a.jsxs)("div",{className:"toolbox",children:[Object(a.jsx)("input",{type:"file",onChange:function(e){s.current.value?(K(s.current.files[0]),s.current.value=""):console.log("no file picked")},ref:s,style:{display:"none"}}),Object(a.jsx)("button",{className:"button",onClick:function(){return s.current.click()},children:"Import Abbrs"}),Object(a.jsx)("button",{className:"button",onClick:function(){return function(e){var t=J.a.utils.book_new(),n=J.a.utils.json_to_sheet(e);J.a.utils.book_append_sheet(t,n,"abbrs"),J.a.writeFile(t,"abbrs.xlsx")}(t)},children:"Export Abbrs"}),Object(a.jsx)("button",{className:"button",onClick:function(){var e;window.confirm("Are you sure you want to remove all existing acronyms and replace with a common list?")&&(e=function(e){return K(e,n)},new Promise((function(e){var t=new XMLHttpRequest;t.responseType="blob",t.onload=function(){e(t.response)},t.open("GET",L,!0),t.send()})).then(e))},children:"Load Common Abbrs"})]})}var q=function(e){var t=e.data,n=e.setData;return Object(a.jsxs)("div",{children:[Object(a.jsx)(V,{setData:n,data:t}),Object(a.jsx)(z,{data:t,setData:n})]})},X=function(e,t){return function(n){n.preventDefault(),t.props.onSelReplace(e)}},_=function(e){Object(y.a)(n,e);var t=Object(S.a)(n);function n(e){var a;return Object(x.a)(this,n),(a=t.call(this,e)).getSynonyms=function(e){var t=new XMLHttpRequest;t.onreadystatechange=function(){if(4===t.readyState&&200===t.status){var e=JSON.parse(t.responseText);0!==e.length?a.setState({synonyms:e.map((function(e){return e.word}))}):a.setState({synonyms:[]})}};t.open("GET","https://api.datamuse.com/words?max=75&ml="+e,!0),t.send()},a.state={synonyms:[],hidden:!0},a}return Object(w.a)(n,[{key:"componentDidMount",value:function(){this.getSynonyms(this.props.word)}},{key:"componentDidUpdate",value:function(e){e.word!==this.props.word&&this.getSynonyms(this.props.word)}},{key:"render",value:function(){var e,t=this.props.abbrReplacer(this.props.word),n=this.props.abbrDict[this.props.word],r=Object(a.jsxs)("span",{className:"tag is-medium",children:[Object(a.jsx)(G,{word:this.props.word,abbr:t===this.props.word?"":t,otherAbbrs:n},this.props.word),Object(a.jsx)("a",{className:"icon is-small",onMouseDown:X(this.props.word,this),children:Object(a.jsx)(N.a,{icon:C.b,size:"xs",color:"#51cf66"})})]}),s=Object(a.jsx)($,{onSelReplace:this.props.onSelReplace,synonyms:this.state.synonyms,abbrDict:this.props.abbrDict,abbrReplacer:this.props.abbrReplacer},this.state.synonyms.join("")),i=Object(a.jsx)("span",{className:"panel-block",children:"Auto-thesaurus box - highlight a word or phrase below to show synonyms in this box"},"init"),o=Object(a.jsx)("span",{className:"panel-block",children:"no results found"},"none");return e=""===this.props.word?i:0===this.state.synonyms.length?o:s,Object(a.jsxs)("div",{className:"card",children:[Object(a.jsxs)("header",{className:"card-header has-background-light\tis-shadowless",children:[Object(a.jsxs)("div",{className:"card-header-title",children:[Object(a.jsxs)("span",{children:["Thesaurus",this.props.word?":":""]}),this.props.word?r:""]}),Object(a.jsx)("a",{className:"card-header-icon",onClick:this.props.onHide,children:Object(a.jsx)("span",{className:"delete"})})]}),Object(a.jsx)("div",{className:"card-content",style:{height:"290px",overflow:"auto"},children:e})]})}}]),n}(r.PureComponent),$=function(e){Object(y.a)(n,e);var t=Object(S.a)(n);function n(){var e;Object(x.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).handleCardClick=function(t){return function(n){n.preventDefault(),e.props.onSelReplace(t)}},e}return Object(w.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsx)("div",{children:Object(a.jsx)("div",{className:"tags are-medium ",children:this.props.synonyms.map((function(t,n){var r=e.props.abbrReplacer(t),s=e.props.abbrDict[t];return Object(a.jsxs)("span",{className:"tag",children:[Object(a.jsx)(G,{word:t,abbr:r===t?"":r,otherAbbrs:s}),Object(a.jsx)("a",{className:"icon",onMouseDown:X(t,e),children:Object(a.jsx)(N.a,{icon:C.b,size:"xs",color:"#51cf66"})})]},n)}))})})}}]),n}(r.PureComponent),G=function(e){Object(y.a)(n,e);var t=Object(S.a)(n);function n(){return Object(x.a)(this,n),t.apply(this,arguments)}return Object(w.a)(n,[{key:"render",value:function(){var e=this,t="";this.props.abbr&&(t=Object(a.jsx)("span",{style:{fontWeight:"bold"},children:" ("+this.props.abbr+")"}));var n="",r="";if(this.props.otherAbbrs){if(this.props.otherAbbrs.enabled){var s=this.props.otherAbbrs.enabled.filter((function(t){return t!==e.props.abbr}));s.length>0&&(n=Object(a.jsx)("span",{style:{fontStyle:"italic"},children:" ("+s.join(",")+")"}))}if(this.props.otherAbbrs.disabled){var i=this.props.otherAbbrs.disabled;i.length>0&&(r=Object(a.jsx)("span",{style:{fontStyle:"italic"},children:" ("+i.join(",")+")"}))}}return Object(a.jsxs)("span",{children:[Object(a.jsx)("span",{children:this.props.word}),t,n,r]})}}]),n}(r.PureComponent),Z=_,Q=[{enabled:!0,value:"abbreviations",abbr:"abbrs"},{enabled:!0,value:"table",abbr:"tbl"},{enabled:!0,value:"optimize",abbr:"optim"},{enabled:!0,value:"with ",abbr:"w/"},{enabled:!0,value:"parentheses",abbr:"parens"}],Y=l.EditorState.createWithContent(l.ContentState.createFromText("- This is a custom built bullet writing tool; abbreviations will be replaced according to table in the abbreviations tab--you will see output on the right\n- This tool can optimize spacing; output will be red if the optimizer could not fix spacing with 2004 or 2006 Unicode spaces\n- Click the thesaurus button to show one; select a word in this or the output box to view synonyms--words in parentheses are abbreviations that are configured"));var ee=function(){var e=Object(r.useState)(!0),t=Object(o.a)(e,2),n=t[0],s=t[1],i=Object(r.useState)(202.321),c=Object(o.a)(i,2),u=c[0],d=c[1],h=Object(r.useState)(Q),b=Object(o.a)(h,2),p=b[0],f=b[1],m=Object(r.useState)({}),v=Object(o.a)(m,2),x=v[0],w=v[1],y=Object(r.useState)(""),S=Object(o.a)(y,2),N=S[0],C=S[1],k=Object(r.useState)(0),R=Object(o.a)(k,2),D=R[0],A=R[1],E=Object(r.useState)(!1),W=Object(o.a)(E,2),T=W[0],M=W[1],P=Object(r.useState)(Y),J=Object(o.a)(P,2),L=J[0],U=J[1];function B(e){var t,a,r,i=e[0];(s(null!==(t=i.enableOptim)&&void 0!==t?t:n),d(parseFloat(null!==(a=i.width)&&void 0!==a?a:u)),Array.isArray(i.abbrData[0]))?f(i.abbrData.map((function(e){return{enabled:e[0],value:e[1],abbr:e[2]}}))):f(null!==(r=i.abbrData)&&void 0!==r?r:p);U(i.editorState?l.EditorState.fromJS(i.editorState):l.EditorState.createWithContent(l.ContentState.createFromText(i.text)))}Object(r.useEffect)((function(){try{localStorage.getItem("bullet-settings")&&B(JSON.parse(localStorage.getItem("bullet-settings")))}catch(e){if("SecurityError"!==e.name)throw e;console.log("Was not able to get localstorage bullets due to use of file interface and browser privacy settings")}}),[]),Object(r.useEffect)((function(){var e={};p.filter((function(e){return null!==e.value&&null!==e.abbr})).forEach((function(t){var n=String(t.value).replace(/\s/g," "),a=t.abbr,r=t.enabled;e[n]=e[n]||[],r?(e[n].enabled=e[n].enabled||[],e[n].enabled.push(a)):(e[n].disabled=e[n].disabled||[],e[n].disabled.push(a))})),w(e)}),[p]);var H=Object(r.useCallback)((function(e){var t={};Object.keys(x).forEach((function(e){var n=x[e];n.enabled&&(t[e]=n.enabled[n.enabled.length-1])}));var n=Object.keys(t).map((function(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")})).join("|"),a=new RegExp("(^|\\W|\\b)("+n+")(\\W|\\b|$)","g");return e.replace(a,(function(e,n,a,r){var s=t[a];return s||(s=""),n+s+r}))}),[x]);function z(){M(!T)}var K=[Object(a.jsx)(O,{editorState:L,setEditorState:U,abbrReplacer:H,width:u,onSelect:function(e){""!==e.trim()&&C(j(e.trim()).slice(0,8).join(" "))},enableOptim:n}),Object(a.jsx)(q,{data:p,setData:f})];return Object(a.jsx)("div",{className:"container is-fluid",children:Object(a.jsxs)("div",{className:"columns is-multiline",children:[Object(a.jsxs)("div",{className:"column is-full",children:[Object(a.jsx)(I,{}),Object(a.jsx)(F,{enableOptim:n,onOptimChange:function(){s(!n)},width:u,onWidthChange:function(e){d(parseFloat(e.target.value))},onWidthUpdate:function(e){return function(){return d(e)}},onTextNorm:function(){var e=[],t=L.getCurrentContent();t.getBlockMap().forEach((function(t,n){!function(e,t,n){for(var a,r,s=t.getText();null!==(a=e.exec(s));)n(r=a.index,r+a[0].length)}(/\s+/g,t,(function(t,a){var r=l.SelectionState.createEmpty(n).merge({anchorOffset:t,focusOffset:a});e.push(r)}))}));var n=t;e.reverse().forEach((function(e){n=l.Modifier.replaceText(n,e," ")})),U(l.EditorState.createWithContent(n))},onTextUpdate:function(e){return function(){return U(l.EditorState.createWithContent(l.ContentState.createFromText(e)))}},onSave:function(){return{width:u,text:L.getCurrentContent().getPlainText("\n"),editorState:L.toJS(),abbrData:p,enableOptim:n}},onJSONImport:B,onThesaurusHide:z})]}),Object(a.jsx)("div",{className:"column is-full "+(T?"":"is-hidden"),children:Object(a.jsx)(Z,{word:N,onSelReplace:function(e){if(document.activeElement.className.match(/public-DraftEditor-content/)){var t=g(L),n=t.selectedText,a=t.start,r=t.anchorKey,s=t.selectionState,i=n.match(/\s*$/)[0],o=a+e.length+i.length,c=l.SelectionState.createEmpty(r).merge({anchorOffset:a,focusOffset:o}),u=l.Modifier.replaceText(L.getCurrentContent(),s,e+i),d=l.EditorState.push(L,u,"insert-characters"),h=l.EditorState.forceSelection(d,c);U(h)}},abbrDict:x,abbrReplacer:H,onHide:z})}),Object(a.jsx)("div",{className:"column is-full",children:Object(a.jsx)("div",{className:"tabs",children:Object(a.jsx)("ul",{children:["Bullets","Abbreviations"].map((function(e,t){return Object(a.jsx)("li",{className:D===t?"is-active":"",children:Object(a.jsx)("a",{onClick:(n=t,function(){return A(n)}),children:e})},t);var n}))})})}),Object(a.jsx)("div",{className:"column is-full",children:K[D]})]})})},te=(n(489),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function ne(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var ae=n(330);n.n(ae).a.load({custom:{families:["AdobeTimes"]}}),i.a.render(Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"section",id:"stuff",children:Object(a.jsx)(ee,{})}),Object(a.jsxs)("div",{className:"container",id:"footer",children:[Object(a.jsxs)("div",{children:["If you have feedback, submit an ",Object(a.jsx)("a",{href:"https://github.com/AF-VCD/pdf-bullets/issues",children:"issue"}),"or a ",Object(a.jsx)("a",{href:"https://github.com/AF-VCD/pdf-bullets/pulls",children:"pull request"})]}),Object(a.jsx)("div",{children:"This site utilizes PDF.JS (pdf import), react-table (spreadsheet), draft-js (editor), the DataMuse API (thesaurus), and Bulma (CSS)."}),Object(a.jsxs)("div",{children:["This site has basic analytics to track the total number of visits to the page. See ",Object(a.jsx)("a",{href:"https://github.com/ckhordiasma/log-bullet-visitors",children:"here"})," for details"]}),Object(a.jsx)("div",{children:"Maintained by Christopher Kodama "})]})]}),document.getElementById("root")),function(){var e=new XMLHttpRequest;e.onreadystatechange=function(){if(e.readyState===XMLHttpRequest.DONE){var t=e.status;if(t>=200&&t<400){var n=JSON.parse(e.response).Count;console.log("The bullets site(s) have been visited "+n+" times in the last 7 days.")}else console.log("Visitor count increment: task failed successfully")}},e.open("POST","https://g5z50elklh.execute-api.us-east-2.amazonaws.com/default/LogVisitors",!0),e.send()}(),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat(".","/service-worker.js");te?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ne(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ne(t,e)}))}}()}},[[490,1,2]]]);
//# sourceMappingURL=main.ef44fe08.chunk.js.map