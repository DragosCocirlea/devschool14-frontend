/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";const e="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,t=(e,t,s=null)=>{for(;t!==s;){const s=t.nextSibling;e.removeChild(t),t=s}},s=`{{lit-${String(Math.random()).slice(2)}}}`,i=`\x3c!--${s}--\x3e`,n=new RegExp(`${s}|${i}`),r="$lit$";class o{constructor(e,t){this.parts=[],this.element=t;const i=[],o=[],l=document.createTreeWalker(t.content,133,null,!1);let p=0,u=-1,h=0;const{strings:m,values:{length:g}}=e;for(;h<g;){const e=l.nextNode();if(null!==e){if(u++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:s}=t;let i=0;for(let e=0;e<s;e++)a(t[e].name,r)&&i++;for(;i-- >0;){const t=m[h],s=d.exec(t)[2],i=s.toLowerCase()+r,o=e.getAttribute(i);e.removeAttribute(i);const a=o.split(n);this.parts.push({type:"attribute",index:u,name:s,strings:a}),h+=a.length-1}}"TEMPLATE"===e.tagName&&(o.push(e),l.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(s)>=0){const s=e.parentNode,o=t.split(n),l=o.length-1;for(let t=0;t<l;t++){let i,n=o[t];if(""===n)i=c();else{const e=d.exec(n);null!==e&&a(e[2],r)&&(n=n.slice(0,e.index)+e[1]+e[2].slice(0,-r.length)+e[3]),i=document.createTextNode(n)}s.insertBefore(i,e),this.parts.push({type:"node",index:++u})}""===o[l]?(s.insertBefore(c(),e),i.push(e)):e.data=o[l],h+=l}}else if(8===e.nodeType)if(e.data===s){const t=e.parentNode;null!==e.previousSibling&&u!==p||(u++,t.insertBefore(c(),e)),p=u,this.parts.push({type:"node",index:u}),null===e.nextSibling?e.data="":(i.push(e),u--),h++}else{let t=-1;for(;-1!==(t=e.data.indexOf(s,t+1));)this.parts.push({type:"node",index:-1}),h++}}else l.currentNode=o.pop()}for(const e of i)e.parentNode.removeChild(e)}}const a=(e,t)=>{const s=e.length-t.length;return s>=0&&e.slice(s)===t},l=e=>-1!==e.index,c=()=>document.createComment(""),d=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function p(e,t){const{element:{content:s},parts:i}=e,n=document.createTreeWalker(s,133,null,!1);let r=h(i),o=i[r],a=-1,l=0;const c=[];let d=null;for(;n.nextNode();){a++;const e=n.currentNode;for(e.previousSibling===d&&(d=null),t.has(e)&&(c.push(e),null===d&&(d=e)),null!==d&&l++;void 0!==o&&o.index===a;)o.index=null!==d?-1:o.index-l,r=h(i,r),o=i[r]}c.forEach((e=>e.parentNode.removeChild(e)))}const u=e=>{let t=11===e.nodeType?0:1;const s=document.createTreeWalker(e,133,null,!1);for(;s.nextNode();)t++;return t},h=(e,t=-1)=>{for(let s=t+1;s<e.length;s++){const t=e[s];if(l(t))return s}return-1},m=new WeakMap,g=e=>"function"==typeof e&&m.has(e),f={},y={};class _{constructor(e,t,s){this.__parts=[],this.template=e,this.processor=t,this.options=s}update(e){let t=0;for(const s of this.__parts)void 0!==s&&s.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const t=e?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),s=[],i=this.template.parts,n=document.createTreeWalker(t,133,null,!1);let r,o=0,a=0,c=n.nextNode();for(;o<i.length;)if(r=i[o],l(r)){for(;a<r.index;)a++,"TEMPLATE"===c.nodeName&&(s.push(c),n.currentNode=c.content),null===(c=n.nextNode())&&(n.currentNode=s.pop(),c=n.nextNode());if("node"===r.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(c.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,r.name,r.strings,this.options));o++}else this.__parts.push(void 0),o++;return e&&(document.adoptNode(t),customElements.upgrade(t)),t}}const v=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:e=>e}),S=` ${s} `;class w{constructor(e,t,s,i){this.strings=e,this.values=t,this.type=s,this.processor=i}getHTML(){const e=this.strings.length-1;let t="",n=!1;for(let o=0;o<e;o++){const e=this.strings[o],a=e.lastIndexOf("\x3c!--");n=(a>-1||n)&&-1===e.indexOf("--\x3e",a+1);const l=d.exec(e);t+=null===l?e+(n?S:i):e.substr(0,l.index)+l[1]+l[2]+r+l[3]+s}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return void 0!==v&&(t=v.createHTML(t)),e.innerHTML=t,e}}const b=e=>null===e||!("object"==typeof e||"function"==typeof e),x=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class P{constructor(e,t,s){this.dirty=!0,this.element=e,this.name=t,this.strings=s,this.parts=[];for(let e=0;e<s.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new N(this)}_getValue(){const e=this.strings,t=e.length-1,s=this.parts;if(1===t&&""===e[0]&&""===e[1]){const e=s[0].value;if("symbol"==typeof e)return String(e);if("string"==typeof e||!x(e))return e}let i="";for(let n=0;n<t;n++){i+=e[n];const t=s[n];if(void 0!==t){const e=t.value;if(b(e)||!x(e))i+="string"==typeof e?e:String(e);else for(const t of e)i+="string"==typeof t?t:String(t)}}return i+=e[t],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class N{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===f||b(e)&&e===this.value||(this.value=e,g(e)||(this.committer.dirty=!0))}commit(){for(;g(this.value);){const e=this.value;this.value=f,e(this)}this.value!==f&&this.committer.commit()}}class C{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(c()),this.endNode=e.appendChild(c())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=c()),e.__insert(this.endNode=c())}insertAfterPart(e){e.__insert(this.startNode=c()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;g(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=f,e(this)}const e=this.__pendingValue;e!==f&&(b(e)?e!==this.value&&this.__commitText(e):e instanceof w?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):x(e)?this.__commitIterable(e):e===y?(this.value=y,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,s="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=s:this.__commitNode(document.createTextNode(s)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof _&&this.value.template===t)this.value.update(e.values);else{const s=new _(t,e.processor,this.options),i=s._clone();s.update(e.values),this.__commitNode(i),this.value=s}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let s,i=0;for(const n of e)s=t[i],void 0===s&&(s=new C(this.options),t.push(s),0===i?s.appendIntoPart(this):s.insertAfterPart(t[i-1])),s.setValue(n),s.commit(),i++;i<t.length&&(t.length=i,this.clear(s&&s.endNode))}clear(e=this.startNode){t(this.startNode.parentNode,e.nextSibling,this.endNode)}}class T{constructor(e,t,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=s}setValue(e){this.__pendingValue=e}commit(){for(;g(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=f,e(this)}if(this.__pendingValue===f)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=f}}class A extends P{constructor(e,t,s){super(e,t,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new E(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class E extends N{}let V=!1;(()=>{try{const e={get capture(){return V=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class U{constructor(e,t,s){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=s,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;g(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=f,e(this)}if(this.__pendingValue===f)return;const e=this.__pendingValue,t=this.value,s=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),i=null!=e&&(null==t||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=k(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=f}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const k=e=>e&&(V?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);function O(e){let t=q.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},q.set(e.type,t));let i=t.stringsArray.get(e.strings);if(void 0!==i)return i;const n=e.strings.join(s);return i=t.keyString.get(n),void 0===i&&(i=new o(e,e.getTemplateElement()),t.keyString.set(n,i)),t.stringsArray.set(e.strings,i),i}const q=new Map,R=new WeakMap,j=new class{handleAttributeExpressions(e,t,s,i){const n=t[0];return"."===n?new A(e,t.slice(1),s).parts:"@"===n?[new U(e,t.slice(1),i.eventContext)]:"?"===n?[new T(e,t.slice(1),s)]:new P(e,t,s).parts}handleTextExpression(e){return new C(e)}};"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const M=(e,...t)=>new w(e,t,"html",j),$=(e,t)=>`${e}--${t}`;let L=!0;void 0===window.ShadyCSS?L=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),L=!1);const I=e=>t=>{const i=$(t.type,e);let n=q.get(i);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},q.set(i,n));let r=n.stringsArray.get(t.strings);if(void 0!==r)return r;const a=t.strings.join(s);if(r=n.keyString.get(a),void 0===r){const s=t.getTemplateElement();L&&window.ShadyCSS.prepareTemplateDom(s,e),r=new o(t,s),n.keyString.set(a,r)}return n.stringsArray.set(t.strings,r),r},H=["html","svg"],D=new Set;window.JSCompiler_renameProperty=(e,t)=>e;const F={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},z=(e,t)=>t!==e&&(t==t||e==e),B={attribute:!0,type:String,converter:F,reflect:!1,hasChanged:z};class W extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach(((t,s)=>{const i=this._attributeNameForProperty(s,t);void 0!==i&&(this._attributeToPropertyMap.set(i,s),e.push(i))})),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach(((e,t)=>this._classProperties.set(t,e)))}}static createProperty(e,t=B){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const s="symbol"==typeof e?Symbol():`__${e}`,i=this.getPropertyDescriptor(e,s,t);void 0!==i&&Object.defineProperty(this.prototype,e,i)}static getPropertyDescriptor(e,t,s){return{get(){return this[t]},set(i){const n=this[e];this[t]=i,this.requestUpdateInternal(e,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||B}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const s of t)this.createProperty(s,e[s])}}static _attributeNameForProperty(e,t){const s=t.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,s=z){return s(e,t)}static _propertyValueFromAttribute(e,t){const s=t.type,i=t.converter||F,n="function"==typeof i?i:i.fromAttribute;return n?n(e,s):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const s=t.type,i=t.converter;return(i&&i.toAttribute||F.toAttribute)(e,s)}initialize(){this._updateState=0,this._updatePromise=new Promise((e=>this._enableUpdatingResolver=e)),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach(((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}}))}_applyInstanceProperties(){this._instanceProperties.forEach(((e,t)=>this[t]=e)),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,s){t!==s&&this._attributeToProperty(e,s)}_propertyToAttribute(e,t,s=B){const i=this.constructor,n=i._attributeNameForProperty(e,s);if(void 0!==n){const e=i._propertyValueToAttribute(t,s);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(n):this.setAttribute(n,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const s=this.constructor,i=s._attributeToPropertyMap.get(e);if(void 0!==i){const e=s.getPropertyOptions(i);this._updateState=16|this._updateState,this[i]=s._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}requestUpdateInternal(e,t,s){let i=!0;if(void 0!==e){const n=this.constructor;s=s||n.getPropertyOptions(e),n._valueHasChanged(this[e],t,s.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==s.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,s))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((e,t)=>this._propertyToAttribute(t,this[t],e))),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}W.finalized=!0;const J=Element.prototype;J.msMatchesSelector||J.webkitMatchesSelector;const G=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,K=Symbol();class Q{constructor(e,t){if(t!==K)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(G?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const X=(e,...t)=>{const s=t.reduce(((t,s,i)=>t+(e=>{if(e instanceof Q)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(s)+e[i+1]),e[0]);return new Q(s,K)};(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const Y={};class Z extends W{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(e,s)=>e.reduceRight(((e,s)=>Array.isArray(s)?t(s,e):(e.add(s),e)),s),s=t(e,new Set),i=[];s.forEach((e=>i.unshift(e))),this._styles=i}else this._styles=void 0===e?[]:[e];this._styles=this._styles.map((e=>{if(e instanceof CSSStyleSheet&&!G){const t=Array.prototype.slice.call(e.cssRules).reduce(((e,t)=>e+t.cssText),"");return new Q(String(t),K)}return e}))}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?G?this.renderRoot.adoptedStyleSheets=e.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((e=>e.cssText)),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==Y&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)})))}render(){return Y}}Z.finalized=!0,Z.render=(e,s,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const n=i.scopeName,r=R.has(s),o=L&&11===s.nodeType&&!!s.host,a=o&&!D.has(n),l=a?document.createDocumentFragment():s;if(((e,s,i)=>{let n=R.get(s);void 0===n&&(t(s,s.firstChild),R.set(s,n=new C(Object.assign({templateFactory:O},i))),n.appendInto(s)),n.setValue(e),n.commit()})(e,l,Object.assign({templateFactory:I(n)},i)),a){const e=R.get(l);R.delete(l);((e,t,s)=>{D.add(e);const i=s?s.element:document.createElement("template"),n=t.querySelectorAll("style"),{length:r}=n;if(0===r)return void window.ShadyCSS.prepareTemplateStyles(i,e);const o=document.createElement("style");for(let e=0;e<r;e++){const t=n[e];t.parentNode.removeChild(t),o.textContent+=t.textContent}(e=>{H.forEach((t=>{const s=q.get($(t,e));void 0!==s&&s.keyString.forEach((e=>{const{element:{content:t}}=e,s=new Set;Array.from(t.querySelectorAll("style")).forEach((e=>{s.add(e)})),p(e,s)}))}))})(e);const a=i.content;s?function(e,t,s=null){const{element:{content:i},parts:n}=e;if(null==s)return void i.appendChild(t);const r=document.createTreeWalker(i,133,null,!1);let o=h(n),a=0,l=-1;for(;r.nextNode();)for(l++,r.currentNode===s&&(a=u(t),s.parentNode.insertBefore(t,s));-1!==o&&n[o].index===l;){if(a>0){for(;-1!==o;)n[o].index+=a,o=h(n,o);return}o=h(n,o)}}(s,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(i,e);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)t.insertBefore(l.cloneNode(!0),t.firstChild);else if(s){a.insertBefore(o,a.firstChild);const e=new Set;e.add(o),p(s,e)}})(n,l,e.value instanceof _?e.value.template:void 0),t(s,s.firstChild),s.appendChild(l),R.set(s,e)}!r&&o&&window.ShadyCSS.styleElement(s.host)},customElements.define("app-header",class extends Z{render(){return M`
            <header>
                <div class="top-bar">
                    <img class="logo" src="logo.png">
                    <nav class="nav-site">
                        <ul class="nav-list">
                            <li>
                                <a href="index.html">Home</a>
                            </li>
                            <li>
                                <a href="destinations.html">Destinations</a>
                            </li>
                            <li>
                                <a href="">Language</a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <slot name="title"></slot>
            <header>
        `}static get styles(){return X`
            * {
                font-family: sans-serif;
            }
            
            .top-bar {
                background-color: darkcyan;
                position: sticky;
                top: 0;
                display: flex;
                align-items: center;
            }
            
            .logo {
                width: 150px;
                height: 50px;
            }
            
            .nav-site {
                flex-grow: 1;
                display: flex;
                justify-content: center;
                text-align: center;
                font-weight: bold;
            }
            
            ::slotted(*) {
                margin: 30px 0px 0px 10px;
                padding: 0px 40px;
                text-align: center;
            }
            
            .nav-list {
                list-style: none;
                display: flex;
                margin: 0 0;
                }
            
            .nav-list li a {
                display: block;
                margin: 0px 20px;
                text-decoration: none;
                color: #0d2e42;
                }
            
            .nav-list li a:hover {
                color: lightcyan;
            }
        `}}),customElements.define("app-footer",class extends Z{render(){return M`
            <footer>
                <p>&copy; - Dragos C, DevSchool 2020</p>
            </footer>
        `}static get styles(){return X`
        footer {
            background-color: darkcyan;
            display: flex;
            justify-content: center;
        }
        `}}),customElements.define("app-about",class extends Z{render(){return M`
            <div class="about">
                <h2>About us</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus facilisis justo sed tellus ornare faucibus. Nam ullamcorper imperdiet est id malesuada. Donec convallis mi id libero hendrerit ornare. Donec viverra scelerisque nulla, sit amet venenatis tellus. Pellentesque mattis quam sit amet tortor tempus, eget laoreet ipsum accumsan. Aliquam pharetra, nunc non bibendum suscipit, nunc sem blandit eros, in mollis lorem dui eget lorem. Vestibulum consectetur ultrices scelerisque. Nulla consectetur elit non metus imperdiet, sed porttitor orci dignissim. Pellentesque accumsan augue vel lectus ultricies scelerisque. Donec justo nisi, hendrerit id bibendum a, dapibus at odio. Sed dictum dui in tellus mollis finibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus sapien elit, egestas eget suscipit ac, lobortis id justo. Etiam nunc nunc, ullamcorper sit amet tincidunt finibus, convallis volutpat nulla. Donec ut leo felis.
                
                In hac habitasse platea dictumst. Nunc euismod sapien et lorem tincidunt sagittis. Pellentesque in diam pretium sem vulputate consequat sed sed purus. In hac habitasse platea dictumst. Sed dignissim, ipsum vel vulputate vehicula, justo sapien hendrerit massa, vitae varius metus sapien eu lectus. Morbi vel justo at ex elementum vehicula eget quis ex. Nullam eros nulla, interdum non eleifend sed, ultrices. </p>
            </div>
        `}static get styles(){return X`
        .about {
            margin: 10px;
            padding: 10px 30px;
        }

        .about p {
            text-align: justify;
            text-justify: inter-word;
        }
        `}});const ee=customElements.define("app-article",class extends Z{render(){return M`
            <div class="${this.inverted?"article-normal":"article-reverse"}">
                <picture class="article-picture" alt="${this.title}">
                    <img src="https://picsum.photos/seed/${this.id}/1000/600">
                </picture>
                
                <div class="article-text">
                    <h2>${this.title}</h2>
                    <h4>${this.subtitle}</h4>
                    <p>${this.description}</p>
                </div>
            </div>
        `}static get properties(){return{inverted:{type:Boolean},id:{type:String},title:{type:String},subtitle:{type:String},description:{type:String},imageURL:{type:String}}}static get styles(){return X`
            .article-normal {
                background-color: antiquewhite;
                display: flex;
                flex-direction: row;
            }
            
            .article-reverse {
                background-color: antiquewhite;
                display: flex;
                flex-direction: row-reverse;
            }
            
            .article-picture {
                flex: 3;
            }
            
            .article-picture img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            
            .article-text {
                flex: 2;
                margin: 10px;
                padding: 10px 30px;
            }

            .article-text p {
                text-align: justify;
                text-justify: inter-word;
            }
        `}});customElements.define("app-articles",class extends Z{connectedCallback(){super.connectedCallback(),this.getArticles()}async getArticles(){fetch("https://devschool-2020.firebaseio.com/dragoscocirlea/articles.json").then((e=>e.json())).then((e=>{var t=[];for(var s in e){var i=JSON.stringify(e[s]),n=JSON.parse(i),r={id:s,title:n.title,subtitle:n.subtitle,description:n.description,imageURL:n.imageURL};t=[...t,r]}this.articles=t}))}render(){return M`
            <section>
            ${this.articles.map(((e,t)=>M`
                    <app-article
                        .inverted="${t%2==1}"
                        .id="${e.id}"
                        .title="${e.title}"
                        .subtitle="${e.subtitle}"
                        .description="${e.description}"
                        .imageURL="${e.imageURL}"
                    >
                    </app-article>
                `))}
            </section>
        `}static get properties(){return{articles:{type:ee}}}static get styles(){return X`
            section {
                display: block;
                margin: auto
            }
        `}}),customElements.define("app-main",class extends Z{render(){return M`
            <app-header>
                <h1 slot="title">Welcome to Cloud Travel!</h1>
            </app-header>

            <main>
                <app-about></app-about>
                <app-articles></app-articles>
            </main>

            <app-footer></app-footer>
        `}static get styles(){return X`
            main {
                margin: 30px 10px;
        }
        `}})})();