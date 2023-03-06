!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.CKEditor5=t():(e.CKEditor5=e.CKEditor5||{},e.CKEditor5.ckeditor5_math=t())}(self,(()=>(()=>{var e={"ckeditor5/src/clipboard.js":(e,t,i)=>{e.exports=i("dll-reference CKEditor5.dll")("./src/clipboard.js")},"ckeditor5/src/core.js":(e,t,i)=>{e.exports=i("dll-reference CKEditor5.dll")("./src/core.js")},"ckeditor5/src/engine.js":(e,t,i)=>{e.exports=i("dll-reference CKEditor5.dll")("./src/engine.js")},"ckeditor5/src/ui.js":(e,t,i)=>{e.exports=i("dll-reference CKEditor5.dll")("./src/ui.js")},"ckeditor5/src/undo.js":(e,t,i)=>{e.exports=i("dll-reference CKEditor5.dll")("./src/undo.js")},"ckeditor5/src/utils.js":(e,t,i)=>{e.exports=i("dll-reference CKEditor5.dll")("./src/utils.js")},"ckeditor5/src/widget.js":(e,t,i)=>{e.exports=i("dll-reference CKEditor5.dll")("./src/widget.js")},"dll-reference CKEditor5.dll":e=>{"use strict";e.exports=CKEditor5.dll}},t={};function i(s){var n=t[s];if(void 0!==n)return n.exports;var o=t[s]={exports:{}};return e[s](o,o.exports,i),o.exports}i.d=(e,t)=>{for(var s in t)i.o(t,s)&&!i.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var s={};return(()=>{"use strict";i.d(s,{default:()=>C});var e=i("ckeditor5/src/core.js"),t=i("ckeditor5/src/widget.js"),n=i("ckeditor5/src/ui.js"),o=i("ckeditor5/src/utils.js");function a(e){return e.match(/^(\\\[.*?\\\]|\\\(.*?\\\))$/)}function r(e){const t=(e=e.trim()).includes("\\(")&&e.includes("\\)"),i=e.includes("\\[")&&e.includes("\\]");return(t||i)&&(e=e.substring(2,e.length-2).trim()),{equation:e,display:i}}async function l(e,t,i="katex",s,n=!1,a=!1,r,c=[],u={}){if("mathjax"===i&&"undefined"!=typeof MathJax)(m=MathJax.version)&&"string"==typeof m&&3===m.split(".").length&&"3"===m.split(".")[0]?d(t,a,r,c,(i=>{!function(e,t,i,s){let n;void 0!==MathJax.tex2chtmlPromise?n=MathJax.tex2chtmlPromise:void 0!==MathJax.tex2svgPromise&&(n=MathJax.tex2svgPromise);void 0!==n&&n(e,{display:i}).then((e=>{t.firstChild&&t.removeChild(t.firstChild),t.appendChild(e),s()}))}(e,i,n,(()=>{a&&(h(t,i),i.style.visibility="visible")}))})):d(t,a,r,c,(i=>{o.global.window.setTimeout((()=>{!function(e,t,i){t.innerHTML=i?"\\["+e+"\\]":"\\("+e+"\\)";MathJax.Hub.Queue(["Typeset",MathJax.Hub,t])}(e,i,n),a&&MathJax.Hub.Queue((()=>{h(t,i),i.style.visibility="visible"}))}))}));else if("katex"===i&&"undefined"!=typeof katex)d(t,a,r,c,(i=>{katex.render(e,i,{throwOnError:!1,displayMode:n,...u}),a&&(h(t,i),i.style.visibility="visible")}));else if("function"==typeof i)i(e,t,n);else if(void 0!==s)try{o.global.window.CKEDITOR_MATH_LAZY_LOAD||(o.global.window.CKEDITOR_MATH_LAZY_LOAD=s()),t.innerHTML=e,await o.global.window.CKEDITOR_MATH_LAZY_LOAD,l(e,t,i,void 0,n,a,r,c,u)}catch(i){t.innerHTML=e,console.error(`math-tex-typesetting-lazy-load-failed: Lazy load failed: ${i}`)}else t.innerHTML=e,console.warn(`math-tex-typesetting-missing: Missing the mathematical typesetting engine (${i}) for tex.`);var m}function c(e){const t=e.editing.view,i=n.BalloonPanelView.defaultPositions,s=t.document.selection.getSelectedElement();if(s)return{target:t.domConverter.viewToDom(s),positions:[i.southArrowNorth,i.southArrowNorthWest,i.southArrowNorthEast]};{const e=t.document;return{target:t.domConverter.viewRangeToDom(e.selection.getFirstRange()),positions:[i.southArrowNorth,i.southArrowNorthWest,i.southArrowNorthEast]}}}function d(e,t,i,s,n){t?function(e,t,i,s){const n=function(e,t,i){let s=o.global.document.getElementById(t);if(!s){s=o.global.document.createElement("div"),s.setAttribute("id",t),s.classList.add(...i),s.style.visibility="hidden",o.global.document.body.appendChild(s);let n=!1;const a=()=>{n||(o.global.window.requestAnimationFrame((()=>{u(e,s),n=!1})),n=!0)};o.global.window.addEventListener("resize",a),o.global.window.addEventListener("scroll",a)}return s}(e,t,i);s(n)}(e,i,s,(e=>{n(e)})):n(e)}function h(e,t){u(e,t);const i=t.getBoundingClientRect();e.style.width=i.width+"px",e.style.height=i.height+"px"}function u(e,t){const i=e.getBoundingClientRect(),s=o.global.window.scrollX+i.left,n=o.global.window.scrollY+i.top;t.style.position="absolute",t.style.left=s+"px",t.style.top=n+"px",t.style.zIndex="var(--ck-z-modal)",t.style.pointerEvents="none"}class m extends e.Command{execute(e,t,i,s){const n=this.editor.model,o=n.document.selection.getSelectedElement();n.change((a=>{let r;if(o&&(o.is("element","mathtex-inline")||o.is("element","mathtex-display"))){const n=o.getAttribute("type"),l=s?i:n||i;r=a.createElement(t?"mathtex-display":"mathtex-inline",{equation:e,type:l,display:t})}else r=a.createElement(t?"mathtex-display":"mathtex-inline",{equation:e,type:i,display:t});n.insertContent(r)}))}refresh(){const e=this.editor.model.document.selection,t=e.getSelectedElement();this.isEnabled=null===t||t.is("element","mathtex-inline")||t.is("element","mathtex-display");const i=function(e){const t=e.getSelectedElement();return t&&(t.is("element","mathtex-inline")||t.is("element","mathtex-display"))?t:null}(e);this.value=i?i.getAttribute("equation"):null,this.display=i?i.getAttribute("display"):null}}class p extends e.Plugin{static get requires(){return[t.Widget]}static get pluginName(){return"MathEditing"}init(){const e=this.editor;e.commands.add("math",new m(e)),this._defineSchema(),this._defineConverters(),e.editing.mapper.on("viewToModelPosition",(0,t.viewToModelPositionOutsideModelElement)(e.model,(e=>e.hasClass("math")))),e.config.define("math",{engine:"mathjax",outputType:"script",forceOutputType:!1,enablePreview:!0,previewClassName:[],popupClassName:[],katexRenderOptions:{}})}_defineSchema(){const e=this.editor.model.schema;e.register("mathtex-inline",{allowWhere:"$text",isInline:!0,isObject:!0,allowAttributes:["equation","type","display"]}),e.register("mathtex-display",{allowWhere:"$block",isInline:!1,isObject:!0,allowAttributes:["equation","type","display"]})}_defineConverters(){const e=this.editor.conversion,i=this.editor.config.get("math");function s(e,t){const s=e.getAttribute("equation"),n=e.getAttribute("display"),o="user-select: none; "+(n?"":"display: inline-block;"),a="ck-math-tex "+(n?"ck-math-tex-display":"ck-math-tex-inline"),r=t.createContainerElement(n?"div":"span",{style:o,class:a}),c=t.createUIElement("div",null,(function(e){const t=this.toDomElement(e);return l(s,t,i.engine,i.lazyLoad,n,!1,i.previewClassName,null,i.katexRenderOptions),t}));return t.insert(t.createPositionAt(r,0),c),r}function n(e,{writer:t}){const i=e.getAttribute("equation"),s=e.getAttribute("type"),n=e.getAttribute("display");if("span"===s){const e=t.createContainerElement("span",{class:"math-tex"});return n?t.insert(t.createPositionAt(e,0),t.createText("\\["+i+"\\]")):t.insert(t.createPositionAt(e,0),t.createText("\\("+i+"\\)")),e}{const e=t.createContainerElement("script",{type:n?"math/tex; mode=display":"math/tex"});return t.insert(t.createPositionAt(e,0),t.createText(i)),e}}e.for("upcast").elementToElement({view:{name:"script",attributes:{type:"math/tex"}},model:(e,{writer:t})=>{const s=e.getChild(0).data.trim();return t.createElement("mathtex-inline",{equation:s,type:i.forceOutputType?i.outputType:"script",display:!1})}}).elementToElement({view:{name:"script",attributes:{type:"math/tex; mode=display"}},model:(e,{writer:t})=>{const s=e.getChild(0).data.trim();return t.createElement("mathtex-display",{equation:s,type:i.forceOutputType?i.outputType:"script",display:!0})}}).elementToElement({view:{name:"span",classes:["math-tex"]},model:(e,{writer:t})=>{const s=e.getChild(0).data.trim(),n=Object.assign(r(s),{type:i.forceOutputType?i.outputType:"span"});return t.createElement(n.display?"mathtex-display":"mathtex-inline",n)}}).elementToElement({view:{name:"span",classes:["ql-formula"]},model:(e,{writer:t})=>{const s=e.getAttribute("data-value").trim();return t.createElement("mathtex-inline",{equation:s,type:i.forceOutputType?i.outputType:"script",display:!1})}}),e.for("editingDowncast").elementToElement({model:"mathtex-inline",view:(e,{writer:i})=>{const n=s(e,i);return(0,t.toWidget)(n,i,"span")}}).elementToElement({model:"mathtex-display",view:(e,{writer:i})=>{const n=s(e,i);return(0,t.toWidget)(n,i,"div")}}),e.for("dataDowncast").elementToElement({model:"mathtex-inline",view:n}).elementToElement({model:"mathtex-display",view:n})}}class w extends n.View{constructor(e,t,i,s,n,o){super(i),this.engine=e,this.lazyLoad=t,this.previewUid=s,this.katexRenderOptions=o,this.previewClassName=n,this.set("value",""),this.set("display",!1),this.on("change",(()=>{this.isRendered&&this.updateMath()})),this.setTemplate({tag:"div",attributes:{class:["ck","ck-math-preview"]}})}updateMath(){l(this.value,this.element,this.engine,this.lazyLoad,this.display,!0,this.previewUid,this.previewClassName,this.katexRenderOptions)}render(){super.render(),this.updateMath()}}const{check:g,cancel:f}=e.icons;class y extends n.View{constructor(e,t,i,s,o,a,r,l){super(e);const c=e.t;this._createKeyAndFocusTrackers(),this.saveButtonView=this._createButton(c("Save"),g,"ck-button-save",null),this.saveButtonView.type="submit",this.mathInputView=this._createMathInput(),this.displayButtonView=this._createDisplayButton(),this.cancelButtonView=this._createButton(c("Cancel"),f,"ck-button-cancel","cancel"),this.previewEnabled=s;let d=[];this.previewEnabled?(this.previewLabel=new n.LabelView(e),this.previewLabel.text=c("Equation preview"),this.mathView=new w(t,i,e,o,a,l),this.mathView.bind("display").to(this.displayButtonView,"isOn"),d=[this.mathInputView,this.displayButtonView,this.previewLabel,this.mathView]):d=[this.mathInputView,this.displayButtonView],this.setTemplate({tag:"form",attributes:{class:["ck","ck-math-form",...r],tabindex:"-1",spellcheck:"false"},children:[{tag:"div",attributes:{class:["ck-math-view"]},children:d},this.saveButtonView,this.cancelButtonView]})}render(){super.render(),(0,n.submitHandler)({view:this});[this.mathInputView,this.displayButtonView,this.saveButtonView,this.cancelButtonView].forEach((e=>{this._focusables.add(e),this.focusTracker.add(e.element)})),this.keystrokes.listenTo(this.element)}focus(){this._focusCycler.focusFirst()}get equation(){return this.mathInputView.fieldView.element.value}set equation(e){this.mathInputView.fieldView.element.value=e,this.previewEnabled&&(this.mathView.value=e)}_createKeyAndFocusTrackers(){this.focusTracker=new o.FocusTracker,this.keystrokes=new o.KeystrokeHandler,this._focusables=new n.ViewCollection,this._focusCycler=new n.FocusCycler({focusables:this._focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}})}_createMathInput(){const e=this.locale.t,t=new n.LabeledFieldView(this.locale,n.createLabeledInputText),i=t.fieldView;t.infoText=e("Insert equation in TeX format.");const s=()=>{if(null!=i.element){let e=i.element.value.trim();if(a(e)){const t=r(e);i.element.value=t.equation,e=t.equation,this.displayButtonView.isOn=t.display}this.previewEnabled&&(this.mathView.value=e),this.saveButtonView.isEnabled=!!e}};return i.on("render",s),i.on("input",s),t}_createButton(e,t,i,s){const o=new n.ButtonView(this.locale);return o.set({label:e,icon:t,tooltip:!0}),o.extendTemplate({attributes:{class:i}}),s&&o.delegate("execute").to(this,s),o}_createDisplayButton(){const e=this.locale.t,t=new n.SwitchButtonView(this.locale);return t.set({label:e("Display mode"),withText:!0}),t.extendTemplate({attributes:{class:"ck-button-display-toggle"}}),t.on("execute",(()=>{t.isOn=!t.isOn,this.previewEnabled&&(this.mathView.display=t.isOn)})),t}}var v=i("ckeditor5/src/engine.js");const b="Ctrl+M";class x extends e.Plugin{static get requires(){return[n.ContextualBalloon,p]}static get pluginName(){return"MathUI"}init(){const e=this.editor;e.editing.view.addObserver(v.ClickObserver),this._previewUid=`math-preview-${(0,o.uid)()}`,this.formView=this._createFormView(),this._balloon=e.plugins.get(n.ContextualBalloon),this._createToolbarMathButton(),this._enableUserBalloonInteractions()}destroy(){super.destroy(),this.formView.destroy();const e=o.global.document.getElementById(this._previewUid);e&&e.parentNode.removeChild(e)}_showUI(){this.editor.commands.get("math").isEnabled&&(this._addFormView(),this._balloon.showStack("main"))}_createFormView(){const e=this.editor,t=e.commands.get("math"),i=e.config.get("math"),s=new y(e.locale,i.engine,i.lazyLoad,i.enablePreview,this._previewUid,i.previewClassName,i.popupClassName,i.katexRenderOptions);return s.mathInputView.bind("value").to(t,"value"),s.displayButtonView.bind("isOn").to(t,"display"),s.mathInputView.bind("isReadOnly").to(t,"isEnabled",(e=>!e)),s.saveButtonView.bind("isEnabled").to(t),s.displayButtonView.bind("isEnabled").to(t),this.listenTo(s,"submit",(()=>{e.execute("math",s.equation,s.displayButtonView.isOn,i.outputType,i.forceOutputType),this._closeFormView()})),this.listenTo(s,"cancel",(()=>{this._closeFormView()})),s.keystrokes.set("esc",((e,t)=>{this._closeFormView(),t()})),s}_addFormView(){if(this._isFormInPanel)return;const e=this.editor,t=e.commands.get("math");this._balloon.add({view:this.formView,position:c(e)}),this._balloon.visibleView===this.formView&&this.formView.mathInputView.fieldView.element.select();o.global.document.getElementById(this._previewUid)&&this.formView.previewEnabled&&this.formView.mathView.updateMath(),this.formView.equation=t.value||"",this.formView.displayButtonView.isOn=t.display||!1}_hideUI(){if(!this._isFormInPanel)return;const e=this.editor;this.stopListening(e.ui,"update"),this.stopListening(this._balloon,"change:visibleView"),e.editing.view.focus(),this._removeFormView()}_closeFormView(){void 0!==this.editor.commands.get("math").value?this._removeFormView():this._hideUI()}_removeFormView(){if(this._isFormInPanel){this.formView.saveButtonView.focus(),this._balloon.remove(this.formView);const e=o.global.document.getElementById(this._previewUid);e&&(e.style.visibility="hidden"),this.editor.editing.view.focus()}}_createToolbarMathButton(){const e=this.editor,t=e.commands.get("math"),i=e.t;e.keystrokes.set(b,((e,i)=>{i(),t.isEnabled&&this._showUI()})),this.editor.ui.componentFactory.add("math",(e=>{const s=new n.ButtonView(e);return s.isEnabled=!0,s.label=i("Insert math"),s.icon='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.44 10.78" height="40.74" width="58.35"><path d="M8.15 0c-.06 0-.1.02-.11.03a.12.12 0 0 0-.02.01 6.81 6.81 0 0 0-2.32 4.9v.9a6.82 6.82 0 0 0 2.32 4.9.12.12 0 0 0 .02 0c.02.02.06.04.11.04.07 0 .12-.03.16-.07a.22.22 0 0 0 0-.32.12.12 0 0 0-.02-.02A4.4 4.4 0 0 1 7 8.44a7.62 7.62 0 0 1-.5-2.6v-.9c0-.82.19-1.76.5-2.6A4.4 4.4 0 0 1 8.3.42.12.12 0 0 0 8.3.39a.22.22 0 0 0 .08-.16.22.22 0 0 0-.07-.16.22.22 0 0 0-.16-.07zm4.83 0a.22.22 0 0 0-.16.07.22.22 0 0 0-.07.16c0 .08.05.13.08.16a.12.12 0 0 0 .01.02c.52.39.98 1.1 1.3 1.94.3.83.49 1.77.49 2.6v.88c0 .83-.18 1.78-.5 2.6a4.4 4.4 0 0 1-1.29 1.95.22.22 0 0 0-.01.33c.03.04.08.07.15.07.05 0 .09-.02.12-.03a.12.12 0 0 0 .02-.01 6.82 6.82 0 0 0 2.32-4.9v-.9a6.81 6.81 0 0 0-2.32-4.9.12.12 0 0 0-.02 0c-.03-.02-.06-.04-.12-.04zm-8.5.46c-.4 0-1.13.23-1.46 1.32-.06.2-.11.45-.33 1.58h-.64c-.1 0-.19-.01-.28.03a.25.25 0 0 0-.12.12.38.38 0 0 0-.03.17c0 .04 0 .1.04.14.03.04.07.07.11.08.09.03.16.02.26.02h.56l-.77 4.04c-.1.51-.19 1-.32 1.36-.06.18-.14.32-.22.4-.08.1-.16.13-.26.13-.03 0-.1 0-.2-.03.11-.05.2-.13.26-.2a.7.7 0 0 0 .13-.4.48.48 0 0 0-.16-.38.53.53 0 0 0-.35-.12c-.34 0-.7.3-.7.76 0 .27.14.5.34.64s.44.2.68.2c.33 0 .61-.17.83-.4.21-.21.37-.48.47-.69.18-.35.32-.84.43-1.25a14.17 14.17 0 0 0 .18-.8l.61-3.26h.81c.1 0 .2.01.3-.03.04-.03.09-.07.11-.13.02-.05.03-.1.03-.17 0-.05-.01-.1-.05-.14a.23.23 0 0 0-.11-.07c-.08-.03-.16-.02-.25-.02h-.73l.2-1.07a26.3 26.3 0 0 1 .24-1.07c.08-.17.22-.3.39-.3l.21.05a.7.7 0 0 0-.25.2.7.7 0 0 0-.13.4c0 .15.06.28.16.37.1.08.22.12.35.12.34 0 .7-.3.7-.76 0-.28-.15-.5-.35-.64-.2-.14-.45-.2-.7-.2zm5.4 2.78c-.6 0-1.06.37-1.36.76-.16.2-.27.4-.35.57-.07.18-.12.3-.12.42 0 .1.08.18.14.2.06.03.1.02.1.02.06 0 .12 0 .18-.04.05-.05.07-.1.08-.17v.02c.35-1.09 1-1.3 1.3-1.3.09 0 .2.01.29.09.09.07.17.2.17.5 0 .27-.18 1-.57 2.48a1.8 1.8 0 0 1-.37.75.7.7 0 0 1-.52.26c-.04 0-.13 0-.22-.03a.68.68 0 0 0 .3-.56.47.47 0 0 0-.18-.39.55.55 0 0 0-.32-.1c-.4 0-.7.33-.7.74 0 .28.16.5.38.63.21.13.48.18.73.18.39 0 .69-.2.89-.41.09-.1.15-.19.2-.27.2.36.59.68 1.16.68.6 0 1.05-.37 1.35-.76.15-.2.27-.4.34-.57.08-.18.12-.3.12-.42a.24.24 0 0 0-.11-.2c-.06-.03-.12-.02-.13-.02a.26.26 0 0 0-.18.06c-.05.05-.06.1-.07.14-.34 1.1-1.02 1.3-1.3 1.3-.17 0-.27-.06-.35-.17a.72.72 0 0 1-.11-.4c0-.22.06-.45.18-.91l.36-1.45c.03-.14.1-.44.25-.7.15-.25.36-.46.68-.46.03 0 .12 0 .22.03a.7.7 0 0 0-.32.56c0 .11.04.23.13.33.08.1.22.16.4.16.14 0 .3-.06.44-.18a.73.73 0 0 0 .24-.55c0-.32-.2-.54-.42-.66a1.52 1.52 0 0 0-.68-.16c-.34 0-.62.16-.82.34a1.8 1.8 0 0 0-.3.35 1.32 1.32 0 0 0-.5-.54 1.37 1.37 0 0 0-.63-.15z" style="line-height:1.25;-inkscape-font-specification:\'Latin Modern Math\'" font-weight="400" font-size="10.58" font-family="Latin Modern Math" letter-spacing="-1.06" word-spacing="0"/></svg>\n',s.keystroke=b,s.tooltip=!0,s.isToggleable=!0,s.bind("isEnabled").to(t,"isEnabled"),this.listenTo(s,"execute",(()=>this._showUI())),s}))}_enableUserBalloonInteractions(){const e=this.editor,t=this.editor.editing.view.document;this.listenTo(t,"click",(()=>{const t=e.commands.get("math");t.value&&t.isEnabled&&this._showUI()})),e.keystrokes.set("Esc",((e,t)=>{this._isUIVisible&&(this._hideUI(),t())})),(0,n.clickOutsideHandler)({emitter:this.formView,activator:()=>this._isFormInPanel,contextElements:[this._balloon.view.element],callback:()=>this._hideUI()})}get _isUIVisible(){return this._balloon.visibleView==this.formView}get _isFormInPanel(){return this._balloon.hasView(this.formView)}}var _=i("ckeditor5/src/clipboard.js"),E=i("ckeditor5/src/undo.js");class V extends e.Plugin{static get requires(){return[_.Clipboard,E.Undo]}static get pluginName(){return"AutoMath"}constructor(e){super(e),this._timeoutId=null,this._positionToInsert=null}init(){const e=this.editor,t=e.model.document;this.listenTo(e.plugins.get(_.Clipboard),"inputTransformation",(()=>{const e=t.selection.getFirstRange(),i=v.LivePosition.fromPosition(e.start);i.stickiness="toPrevious";const s=v.LivePosition.fromPosition(e.end);s.stickiness="toNext",t.once("change:data",(()=>{this._mathBetweenPositions(i,s),i.detach(),s.detach()}),{priority:"high"})})),e.commands.get("undo").on("execute",(()=>{this._timeoutId&&(o.global.window.clearTimeout(this._timeoutId),this._positionToInsert.detach(),this._timeoutId=null,this._positionToInsert=null)}),{priority:"high"})}_mathBetweenPositions(e,t){const i=this.editor,s=this.editor.config.get("math"),n=new v.LiveRange(e,t),l=n.getWalker({ignoreElementEnd:!0});let c="";for(const e of l)e.item.is("$textProxy")&&(c+=e.item.data);if(c=c.trim(),!a(c)||2!==function(e){return e.match(/(\\\[|\\\]|\\\(|\\\))/g).length}(c))return;i.commands.get("math").isEnabled&&(this._positionToInsert=v.LivePosition.fromPosition(e),this._timeoutId=o.global.window.setTimeout((()=>{i.model.change((e=>{let t;this._timeoutId=null,e.remove(n),"$graveyard"!==this._positionToInsert.root.rootName&&(t=this._positionToInsert),i.model.change((e=>{const n=Object.assign(r(c),{type:s.outputType}),o=e.createElement(n.display?"mathtex-display":"mathtex-inline",n);i.model.insertContent(o,t),e.setSelection(o,"on")})),this._positionToInsert.detach(),this._positionToInsert=null}))}),100))}}class T extends e.Plugin{static get requires(){return[p,x,V,t.Widget]}static get pluginName(){return"Math"}}function k(e,t,i,s){let n,a=null;"function"==typeof s?n=s:(a=e.commands.get(s),n=()=>{e.execute(s)}),e.model.document.on("change:data",((r,l)=>{if(a&&!a.isEnabled||!t.isEnabled)return;const c=(0,o.first)(e.model.document.selection.getRanges());if(!c.isCollapsed)return;if(l.isUndo||!l.isLocal)return;const d=Array.from(e.model.document.differ.getChanges()),h=d[0];if(1!=d.length||"insert"!==h.type||"$text"!=h.name||1!=h.length)return;const u=h.position.parent;if(u.is("element","codeBlock"))return;if(u.is("element","listItem")&&"function"!=typeof s&&!["numberedList","bulletedList","todoList"].includes(s))return;if(a&&!0===a.value)return;const m=u.getChild(0),p=e.model.createRangeOn(m);if(!p.containsRange(c)&&!c.end.isEqual(p.end))return;const w=i.exec(m.data.substr(0,c.end.offset));w&&e.model.enqueueChange((t=>{const i=t.createPositionAt(u,0),s=t.createPositionAt(u,w[0].length),o=new v.LiveRange(i,s);if(!1!==n({match:w})){t.remove(o);const i=e.model.document.selection.getFirstRange(),s=t.createRangeIn(u);!u.isEmpty||s.isEqual(i)||s.containsRange(i,!0)||t.remove(u)}o.detach(),e.model.enqueueChange((()=>{e.plugins.get("Delete").requestUndoOnBackspace()}))}))}))}class I extends e.Plugin{static get requires(){return[T,"Autoformat"]}init(){const e=this.editor;e.plugins.has("Math")||(0,o.logWarning)("autoformat-math-feature-missing",e)}afterInit(){const e=this.editor,t=e.commands.get("math");if(t){const i=()=>{if(!t.isEnabled)return!1;t.display=!0,o.global.window.setTimeout((()=>e.plugins.get("MathUI")._showUI()),50)};k(e,this,/^\$\$$/,i),k(e,this,/^\\\[$/,i)}}static get pluginName(){return"AutoformatMath"}}const C={Math:T,AutoformatMath:I}})(),s=s.default})()));