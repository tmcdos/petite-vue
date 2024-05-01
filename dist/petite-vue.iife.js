var PetiteVue=function(k){"use strict";/**
* @vue/shared v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function pt(e,t){const n=new Set(e.split(","));return s=>n.has(s)}process.env.NODE_ENV!=="production"&&Object.freeze({}),process.env.NODE_ENV!=="production"&&Object.freeze([]);const Oe=()=>{},ee=Object.assign,dt=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},mt=Object.prototype.hasOwnProperty,W=(e,t)=>mt.call(e,t),m=Array.isArray,te=e=>ne(e)==="[object Map]",xe=e=>ne(e)==="[object Date]",I=e=>typeof e=="function",T=e=>typeof e=="string",A=e=>typeof e=="symbol",S=e=>e!==null&&typeof e=="object",gt=e=>(S(e)||I(e))&&I(e.then)&&I(e.catch),_t=Object.prototype.toString,ne=e=>_t.call(e),yt=e=>ne(e).slice(8,-1),se=e=>T(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Re=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Et=/-(\w)/g,bt=Re(e=>e.replace(Et,(t,n)=>n?n.toUpperCase():"")),vt=/\B([A-Z])/g,Ne=Re(e=>e.replace(vt,"-$1").toLowerCase()),ie=(e,t)=>!Object.is(e,t),$e=e=>{const t=T(e)?Number(e):NaN;return isNaN(t)?e:t};function ke(e){if(m(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],i=T(s)?xt(s):ke(s);if(i)for(const r in i)t[r]=i[r]}return t}else if(T(e)||S(e))return e}const wt=/;(?![^(]*\))/g,St=/:([^]+)/,Ot=/\/\*[^]*?\*\//g;function xt(e){const t={};return e.replace(Ot,"").split(wt).forEach(n=>{if(n){const s=n.split(St);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function Te(e){let t="";if(T(e))t=e;else if(m(e))for(let n=0;n<e.length;n++){const s=Te(e[n]);s&&(t+=s+" ")}else if(S(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function Rt(e,t){if(e.length!==t.length)return!1;let n=!0;for(let s=0;n&&s<e.length;s++)n=j(e[s],t[s]);return n}function j(e,t){if(e===t)return!0;let n=xe(e),s=xe(t);if(n||s)return n&&s?e.getTime()===t.getTime():!1;if(n=A(e),s=A(t),n||s)return e===t;if(n=m(e),s=m(t),n||s)return n&&s?Rt(e,t):!1;if(n=S(e),s=S(t),n||s){if(!n||!s)return!1;const i=Object.keys(e).length,r=Object.keys(t).length;if(i!==r)return!1;for(const o in e){const c=e.hasOwnProperty(o),l=t.hasOwnProperty(o);if(c&&!l||!c&&l||!j(e[o],t[o]))return!1}}return String(e)===String(t)}function re(e,t){return e.findIndex(n=>j(n,t))}/**
* @vue/reactivity v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function oe(e,...t){console.warn(`[Vue warn] ${e}`,...t)}let Nt;function Ae(e,t=Nt){t&&t.active&&t.effects.push(e)}let B;class ce{constructor(t,n,s,i){this.fn=t,this.trigger=n,this.scheduler=s,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Ae(this,i)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Le();for(let t=0;t<this._depsLength;t++){const n=this.deps[t];if(n.computed&&($t(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Pe()}return this._dirtyLevel>=4}set dirty(t){this._dirtyLevel=t?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=C,n=B;try{return C=!0,B=this,this._runnings++,Ce(this),this.fn()}finally{Me(this),this._runnings--,B=n,C=t}}stop(){this.active&&(Ce(this),Me(this),this.onStop&&this.onStop(),this.active=!1)}}function $t(e){return e.value}function Ce(e){e._trackId++,e._depsLength=0}function Me(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)Ve(e.deps[t],e);e.deps.length=e._depsLength}}function Ve(e,t){const n=e.get(t);n!==void 0&&t._trackId!==n&&(e.delete(t),e.size===0&&e.cleanup())}function Ie(e,t){e.effect instanceof ce&&(e=e.effect.fn);const n=new ce(e,Oe,()=>{n.dirty&&n.run()});t&&(ee(n,t),t.scope&&Ae(n,t.scope)),(!t||!t.lazy)&&n.run();const s=n.run.bind(n);return s.effect=n,s}function kt(e){e.effect.stop()}let C=!0,le=0;const je=[];function Le(){je.push(C),C=!1}function Pe(){const e=je.pop();C=e===void 0?!0:e}function fe(){le++}function ue(){for(le--;!le&&ae.length;)ae.shift()()}function Tt(e,t,n){var s;if(t.get(e)!==e._trackId){t.set(e,e._trackId);const i=e.deps[e._depsLength];i!==t?(i&&Ve(i,e),e.deps[e._depsLength++]=t):e._depsLength++,process.env.NODE_ENV!=="production"&&((s=e.onTrack)==null||s.call(e,ee({effect:e},n)))}}const ae=[];function At(e,t,n){var s;fe();for(const i of e.keys()){let r;i._dirtyLevel<t&&(r??(r=e.get(i)===i._trackId))&&(i._shouldSchedule||(i._shouldSchedule=i._dirtyLevel===0),i._dirtyLevel=t),i._shouldSchedule&&(r??(r=e.get(i)===i._trackId))&&(process.env.NODE_ENV!=="production"&&((s=i.onTrigger)==null||s.call(i,ee({effect:i},n))),i.trigger(),(!i._runnings||i.allowRecurse)&&i._dirtyLevel!==2&&(i._shouldSchedule=!1,i.scheduler&&ae.push(i.scheduler)))}ue()}const Ct=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},he=new WeakMap,q=Symbol(process.env.NODE_ENV!=="production"?"iterate":""),De=Symbol(process.env.NODE_ENV!=="production"?"Map key iterate":"");function K(e,t,n){if(C&&B){let s=he.get(e);s||he.set(e,s=new Map);let i=s.get(n);i||s.set(n,i=Ct(()=>s.delete(n))),Tt(B,i,process.env.NODE_ENV!=="production"?{target:e,type:t,key:n}:void 0)}}function pe(e,t,n,s,i,r){const o=he.get(e);if(!o)return;let c=[];if(t==="clear")c=[...o.values()];else if(n==="length"&&m(e)){const l=Number(s);o.forEach((f,u)=>{(u==="length"||!A(u)&&u>=l)&&c.push(f)})}else switch(n!==void 0&&c.push(o.get(n)),t){case"add":m(e)?se(n)&&c.push(o.get("length")):(c.push(o.get(q)),te(e)&&c.push(o.get(De)));break;case"delete":m(e)||(c.push(o.get(q)),te(e)&&c.push(o.get(De)));break;case"set":te(e)&&c.push(o.get(q));break}fe();for(const l of c)l&&At(l,4,process.env.NODE_ENV!=="production"?{target:e,type:t,key:n,newValue:s,oldValue:i,oldTarget:r}:void 0);ue()}const Mt=pt("__proto__,__v_isRef,__isVue"),Be=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(A)),Ke=Vt();function Vt(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const s=O(this);for(let r=0,o=this.length;r<o;r++)K(s,"get",r+"");const i=s[t](...n);return i===-1||i===!1?s[t](...n.map(O)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Le(),fe();const s=O(this)[t].apply(this,n);return ue(),Pe(),s}}),e}function It(e){A(e)||(e=String(e));const t=O(this);return K(t,"has",e),t.hasOwnProperty(e)}class ze{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?Kt:We:r?Bt:He).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const o=m(t);if(!i){if(o&&W(Ke,n))return Reflect.get(Ke,n,s);if(n==="hasOwnProperty")return It}const c=Reflect.get(t,n,s);return(A(n)?Be.has(n):Mt(n))||(i||K(t,"get",n),r)?c:Z(c)?o&&se(n)?c:c.value:S(c)?i?Wt(c):z(c):c}}class jt extends ze{constructor(t=!1){super(!1,t)}set(t,n,s,i){let r=t[n];if(!this._isShallow){const l=J(r);if(!qt(s)&&!J(s)&&(r=O(r),s=O(s)),!m(t)&&Z(r)&&!Z(s))return l?!1:(r.value=s,!0)}const o=m(t)&&se(n)?Number(n)<t.length:W(t,n),c=Reflect.set(t,n,s,i);return t===O(i)&&(o?ie(s,r)&&pe(t,"set",n,s,r):pe(t,"add",n,s)),c}deleteProperty(t,n){const s=W(t,n),i=t[n],r=Reflect.deleteProperty(t,n);return r&&s&&pe(t,"delete",n,void 0,i),r}has(t,n){const s=Reflect.has(t,n);return(!A(n)||!Be.has(n))&&K(t,"has",n),s}ownKeys(t){return K(t,"iterate",m(t)?"length":q),Reflect.ownKeys(t)}}class Lt extends ze{constructor(t=!1){super(!0,t)}set(t,n){return process.env.NODE_ENV!=="production"&&oe(`Set operation on key "${String(n)}" failed: target is readonly.`,t),!0}deleteProperty(t,n){return process.env.NODE_ENV!=="production"&&oe(`Delete operation on key "${String(n)}" failed: target is readonly.`,t),!0}}const Pt=new jt,Dt=new Lt,He=new WeakMap,Bt=new WeakMap,We=new WeakMap,Kt=new WeakMap;function zt(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ht(e){return e.__v_skip||!Object.isExtensible(e)?0:zt(yt(e))}function z(e){return J(e)?e:qe(e,!1,Pt,null,He)}function Wt(e){return qe(e,!0,Dt,null,We)}function qe(e,t,n,s,i){if(!S(e))return process.env.NODE_ENV!=="production"&&oe(`value cannot be made reactive: ${String(e)}`),e;if(e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=i.get(e);if(r)return r;const o=Ht(e);if(o===0)return e;const c=new Proxy(e,o===2?s:n);return i.set(e,c),c}function F(e){return J(e)?F(e.__v_raw):!!(e&&e.__v_isReactive)}function J(e){return!!(e&&e.__v_isReadonly)}function qt(e){return!!(e&&e.__v_isShallow)}function O(e){const t=e&&e.__v_raw;return t?O(t):e}function Z(e){return!!(e&&e.__v_isRef===!0)}let de=!1;const G=[],Ft=Promise.resolve(),L=e=>Ft.then(e),Fe=e=>{G.includes(e)||G.push(e),de||(de=!0,L(Jt))},Jt=()=>{for(const e of G)e();G.length=0,de=!1},Zt=/^(spellcheck|draggable|form|list|type|onclick)$/,me=({el:e,get:t,effect:n,arg:s,modifiers:i})=>{let r;e.className&&(e._class=e.className),n(()=>{let o=t();if(s)i?.camel&&(s=bt(s)),ge(e,s,o,r);else{for(const c in o)ge(e,c,o[c],r&&r[c]);for(const c in r)(!o||!(c in o))&&ge(e,c,null)}r=o})},ge=(e,t,n,s)=>{if(t==="class")e.setAttribute("class",Te(e._class?[e._class,n]:n)||"");else if(t==="style"){n=ke(n);const{style:i}=e;if(!n)e.removeAttribute("style");else if(T(n))n!==s&&(i.cssText=n);else{for(const r in n)_e(i,r,n[r]);if(s&&!T(s))for(const r in s)n[r]==null&&_e(i,r,"")}}else!(e instanceof SVGElement)&&t in e&&!Zt.test(t)?(e[t]=n,t==="value"&&(e._value=n)):t==="true-value"?e._trueValue=n:t==="false-value"?e._falseValue=n:n!=null?e.setAttribute(t,n):e.removeAttribute(t)},Je=/\s*!important$/,_e=(e,t,n)=>{m(n)?n.forEach(s=>_e(e,t,s)):t.startsWith("--")?e.setProperty(t,n):Je.test(n)?e.setProperty(Ne(t),n.replace(Je,""),"important"):e[t]=n},x=(e,t)=>{const n=e.getAttribute(t);return n!=null&&e.removeAttribute(t),n},R=(e,t,n,s)=>{e.addEventListener(t,n,s)},Gt=/^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/,Ut=["ctrl","shift","alt","meta"],Yt={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Ut.some(n=>e[`${n}Key`]&&!t[n])},Ze=({el:e,get:t,exp:n,arg:s,modifiers:i})=>{if(!s)return;let r=Gt.test(n)?t(`(e => ${n}(e))`):t(`($event => { ${n} })`);if(s==="vue:mounted"){L(r);return}else if(s==="vue:unmounted")return()=>r();if(i){s==="click"&&(i.right&&(s="contextmenu"),i.middle&&(s="mouseup"));const o=r;r=c=>{if(!("key"in c&&!(Ne(c.key)in i))){for(const l in i){const f=Yt[l];if(f&&f(c,i))return}return o(c)}}}R(e,s,r,i)},Qt=({el:e,get:t,effect:n})=>{const s=e.style.display;n(()=>{e.style.display=t()?s:"none"})},Ge=({el:e,get:t,effect:n})=>{n(()=>{e.textContent=Ue(t())})},Ue=e=>e==null?"":S(e)?JSON.stringify(e,null,2):String(e),Xt=({el:e,modifiers:t,get:n,effect:s})=>{s(()=>{e.innerHTML=n(),t?.script&&L(()=>{const i=e.querySelectorAll("script");for(const r of i){const o=document.createElement("script");r.type&&(o.type=r.type),r.src&&(o.src=r.src),r.text&&(o.text=r.text),r.parentElement?.insertBefore(o,r),r.remove()}})})},en=({el:e,exp:t,get:n,effect:s,modifiers:i})=>{const r=e.type,o=n(`(val) => { ${t} = val }`),{trim:c,number:l=r==="number"||r==="range"}=i||{};if(e.tagName==="SELECT"){const f=e;R(e,"change",()=>{const u=Array.prototype.filter.call(f.options,h=>h.selected).map(h=>l?$e(N(h)):N(h));o(f.multiple?u:u[0])}),s(()=>{const u=n(),h=f.multiple;for(let p=0,d=f.options.length;p<d;p++){const a=f.options[p],b=N(a);if(h)m(u)?a.selected=re(u,b)>-1:a.selected=u.has(b);else if(j(N(a),u)){f.selectedIndex!==p&&(f.selectedIndex=p);return}}!h&&f.selectedIndex!==-1&&(f.selectedIndex=-1)})}else if(r==="checkbox"){R(e,"change",()=>{const u=n(),h=e.checked;if(m(u)){const p=N(e),d=re(u,p),a=d!==-1;if(h&&!a)o(u.concat(p));else if(!h&&a){const b=[...u];b.splice(d,1),o(b)}}else o(Ye(e,h))});let f;s(()=>{const u=n();m(u)?e.checked=re(u,N(e))>-1:u!==f&&(e.checked=j(u,Ye(e,!0))),f=u})}else if(r==="radio"){R(e,"change",()=>{o(N(e))});let f;s(()=>{const u=n();u!==f&&(e.checked=j(u,N(e)))})}else{const f=u=>c?u.trim():l?$e(u):u;R(e,"compositionstart",tn),R(e,"compositionend",nn),R(e,i?.lazy?"change":"input",()=>{e.composing||o(f(e.value))}),c&&R(e,"change",()=>{e.value=e.value.trim()}),s(()=>{if(e.composing)return;const u=e.value,h=n();document.activeElement===e&&f(u)===h||u!==h&&(e.value=h)})}},N=e=>"_value"in e?e._value:e.value,Ye=(e,t)=>{const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t},tn=e=>{e.target.composing=!0},nn=e=>{const t=e.target;t.composing&&(t.composing=!1,sn(t,"input"))},sn=(e,t)=>{const n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)},Qe=Object.create(null),H=(e,t,n)=>Xe(e,`return(${t})`,n),Xe=(e,t,n)=>{const s=Qe[t]||(Qe[t]=rn(t));try{return s(e,n)}catch(i){console.error(i)}},rn=e=>{try{return new Function("$data","$el",`with($data){${e}}`)}catch(t){return console.error(`${t.message} in expression: ${e}`),()=>{}}},on={bind:me,on:Ze,show:Qt,text:Ge,html:Xt,model:en,effect:({el:e,ctx:t,exp:n,effect:s})=>{L(()=>s(()=>Xe(t.scope,n,e)))}},cn=(e,t,n)=>{const s=e.parentElement?e.parentElement:e.parentNode,i=new Comment("v-if");s&&s.insertBefore(i,e);const r=[{exp:t,el:e}];let o,c;for(;(o=e.nextElementSibling)&&(c=null,x(o,"v-else")===""||(c=x(o,"v-else-if")));)s&&s.removeChild(o),r.push({exp:c,el:o});const l=e.nextSibling;s&&s.removeChild(e);let f,u=-1;const h=()=>{f&&(s&&s.insertBefore(i,f.el),f.remove(),f=void 0)};return n.effect(()=>{for(let p=0;p<r.length;p++){const{exp:d,el:a}=r[p];if(!d||H(n.scope,d)){p!==u&&(h(),f=new be(a,n),f.insert(s,i),s&&s.removeChild(i),u=p);return}}u=-1,h()}),l},ln=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,et=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,fn=/^\(|\)$/g,un=/^[{[]\s*((?:[\w_$]+\s*,?\s*)+)[\]}]$/,an=(e,t,n)=>{const s=t.match(ln);if(!s)return;const i=e.nextSibling,r=e.parentElement,o=new Text("");r.insertBefore(o,e),r.removeChild(e);const c=s[2].trim();let l=s[1].trim().replace(fn,"").trim(),f,u=!1,h,p,d="key",a=e.getAttribute(d)||e.getAttribute(d=":key")||e.getAttribute(d="v-bind:key");a&&(e.removeAttribute(d),d==="key"&&(a=JSON.stringify(a)));let b;(b=l.match(et))&&(l=l.replace(et,"").trim(),h=b[1].trim(),b[2]&&(p=b[2].trim())),(b=l.match(un))&&(f=b[1].split(",").map(y=>y.trim()),u=l[0]==="[");let Q=!1,M,X,we;const bn=y=>{const v=new Map,g=[];if(m(y))for(let _=0;_<y.length;_++)g.push(Se(v,y[_],_));else if(typeof y=="number")for(let _=0;_<y;_++)g.push(Se(v,_+1,_));else if(S(y)){let _=0;for(const E in y)g.push(Se(v,y[E],_++,E))}return[g,v]},Se=(y,v,g,_)=>{const E={};f?f.forEach((V,$)=>E[V]=v[u?$:V]):E[l]=v,_?(h&&(E[h]=_),p&&(E[p]=g)):h&&(E[h]=g);const D=rt(n,E),w=a?H(D.scope,a):g;return y.set(w,g),D.key=w,D},ht=(y,v)=>{const g=new be(e,y);return g.key=y.key,g.insert(r,v),g};return n.effect(()=>{const y=H(n.scope,c),v=we;if([X,we]=bn(y),!Q)M=X.map(g=>ht(g,o)),Q=!0;else{for(let w=0;w<M.length;w++)we.has(M[w].key)||M[w].remove();const g=[];let _=X.length,E,D;for(;_--;){const w=X[_],V=v.get(w.key);let $;V==null?$=ht(w,E?E.el:o):($=M[V],Object.assign($.ctx.scope,w.scope),V!==_&&(M[V+1]!==E||D===E)&&(D=$,$.insert(r,E?E.el:o))),g.unshift(E=$)}M=g}}),i},ye=({el:e,ctx:{scope:{$refs:t}},get:n,effect:s})=>{let i;return s(()=>{const r=n();t[r]=e,i&&r!==i&&delete t[i],i=r}),()=>{i&&delete t[i]}},hn=/^(?:v-|:|@)/,pn=/\.([\w-]+)/g;let Ee=!1;const tt=(e,t)=>{const n=t,s=e.nodeType;if(s===1){const i=e;if(i.hasAttribute("v-pre"))return;x(i,"v-cloak");let r;if(r=x(i,"v-if"))return cn(i,r,t);if(r=x(i,"v-for"))return an(i,r,t);if((r=x(i,"v-scope"))||r===""){const l=r?H(t.scope,r,i):{};l.$root=i,t=rt(t,l),l.$template&&dn(i,l.$template)}const o=x(i,"v-once")!=null;o&&(Ee=!0),(r=x(i,"ref"))&&(t!==n&&U(i,ye,`"${r}"`,n),U(i,ye,`"${r}"`,t)),nt(i,t);const c=[];for(const{name:l,value:f}of[...i.attributes])hn.test(l)&&l!=="v-cloak"&&(l==="v-model"?c.unshift([l,f]):l[0]==="@"||/^v-on\b/.test(l)?c.push([l,f]):st(i,l,f,t));for(const[l,f]of c)st(i,l,f,t);o&&(Ee=!1)}else if(s===3){const i=e.data;if(i.includes(t.delimiters[0])){let r=[],o=0,c;for(;c=t.delimitersRE.exec(i);){const l=i.slice(o,c.index);l&&r.push(JSON.stringify(l)),r.push(`$s(${c[1]})`),o=c.index+c[0].length}o<i.length&&r.push(JSON.stringify(i.slice(o))),U(e,Ge,r.join("+"),t)}}else s===11&&nt(e,t)},nt=(e,t)=>{let n=e.firstChild;for(;n;)n=tt(n,t)||n.nextSibling},st=(e,t,n,s)=>{let i,r,o;const c=t;if(t=t.replace(pn,(l,f)=>((o||(o={}))[f]=!0,"")),t[0]===":")i=me,r=t.slice(1);else if(t[0]==="@")i=Ze,r=t.slice(1);else{const l=t.indexOf(":"),f=l>0?t.slice(2,l):t.slice(2);i=on[f]||s.dirs[f],r=l>0?t.slice(l+1):void 0}i&&(i===me&&r==="ref"&&(i=ye),U(e,i,n,s,r,o),e.removeAttribute(c))},U=(e,t,n,s,i,r)=>{const c=t({el:e,get:(l=n)=>H(s.scope,l,e),effect:s.effect,ctx:s,exp:n,arg:i,modifiers:r});c&&s.cleanups.push(c)},dn=(e,t)=>{if(t[0]==="#"){const n=document.querySelector(t);e.appendChild(n.content.cloneNode(!0));return}e.innerHTML=t.replace(/<[\/\s]*template\s*>/ig,"")},it=e=>{const t={delimiters:["{{","}}"],delimitersRE:/\{\{([^]+?)\}\}/g,...e,scope:e?e.scope:z({}),dirs:e?e.dirs:{},effects:[],blocks:[],cleanups:[],effect:n=>{if(Ee)return Fe(n),n;const s=Ie(n,{scheduler:()=>Fe(s)});return t.effects.push(s),s}};return t},rt=(e,t={})=>{const n=e.scope,s=Object.create(n);Object.defineProperties(s,Object.getOwnPropertyDescriptors(t)),s.$refs=Object.create(n.$refs);const i=z(new Proxy(s,{set(r,o,c,l){return l===i&&!W(r,o)?Reflect.set(n,o,c):Reflect.set(r,o,c,l)}}));return ot(i),{...e,scope:i}},ot=e=>{for(const t of Object.keys(e))typeof e[t]=="function"&&(e[t]=e[t].bind(e))};class be{template;ctx;key;parentCtx;isFragment;start;end;get el(){return this.start||this.template}constructor(t,n,s=!1){this.isFragment=t instanceof HTMLTemplateElement,s?this.template=t:this.isFragment?this.template=t.content.cloneNode(!0):this.template=t.cloneNode(!0),s?this.ctx=n:(this.parentCtx=n,n.blocks.push(this),this.ctx=it(n)),tt(this.template,this.ctx)}insert(t,n=null){if(this.isFragment)if(this.start){let s=this.start,i;for(;s&&(i=s.nextSibling,t.insertBefore(s,n),s!==this.end);)s=i}else this.start=new Text(""),this.end=new Text(""),t.insertBefore(this.end,n),t.insertBefore(this.start,this.end),t.insertBefore(this.template,this.end);else t.insertBefore(this.template,n)}remove(){if(this.parentCtx&&dt(this.parentCtx.blocks,this),this.start){const t=this.start.parentNode;let n=this.start,s;for(;n&&(s=n.nextSibling,t.removeChild(n),n!==this.end);)n=s}else try{this.template.isConnected&&this.template.parentNode.removeChild(this.template)}catch(t){console.log("petite-vue: Unable to remove template"),console.log(t),console.log(this.template)}this.teardown()}teardown(){this.ctx.blocks.forEach(t=>{t.teardown()}),this.ctx.effects.forEach(kt),this.ctx.cleanups.forEach(t=>t())}}function Y(e,t,n){let s;try{s=n?e(...n):e()}catch(i){ct(i,t)}return s}function ve(e,t,n){if(I(e)){const i=Y(e,t,n);return i&&gt(i)&&i.catch(r=>{ct(r,t)}),i}const s=[];for(let i=0;i<e.length;i++)s.push(ve(e[i],t,n));return s}function ct(e,t){console.error(new Error(`[@vue-reactivity/watch]: ${t}`)),console.error(e)}function mn(e){console.warn(gn(e))}function gn(e){return new Error(`[reactivue]: ${e}`)}const lt={};function _n(e,t,n){return yn(e,t,n)}function yn(e,t,{immediate:n,deep:s,flush:i}={}){let r,o=!1,c=!1;if(F(e)?(r=()=>e,s=!0):m(e)?(c=!0,o=e.some(F),r=()=>e.map(a=>Z(a)?a.value:F(a)?P(a):I(a)?Y(a,"watch getter"):mn("invalid source"))):I(e)?t?r=()=>Y(e,"watch getter"):r=()=>(l&&l(),ve(e,"watch callback",[f])):r=Oe,t&&s){const a=r;r=()=>P(a())}let l,f=a=>{l=d.onStop=()=>{Y(a,"watch cleanup")}},u=c?[]:lt;const h=()=>{if(d.active)if(t){const a=d.run();(s||o||(c?a.some((b,Q)=>ie(b,u[Q])):ie(a,u)))&&(l&&l(),ve(t,"watch value",[a,u===lt?void 0:u,f]),u=a)}else d.run()};h.allowRecurse=!!t;let p;i==="sync"?p=h:p=()=>{h()};const d=new ce(r,p);return t?n?h():u=d.run():d.run(),()=>d.stop()}function P(e,t=new Set){if(!S(e)||t.has(e))return e;if(t.add(e),m(e))for(let n=0;n<e.length;n++)P(e[n],t);else if(e instanceof Map)e.forEach((n,s)=>{P(e.get(s),t)});else if(e instanceof Set)e.forEach(n=>{P(n,t)});else for(const n of Object.keys(e))P(e[n],t);return e}const ft=e=>e.replace(/[-.*+?^${}()|[\]\/\\]/g,"\\$&"),ut=e=>{const t=it();if(e&&(t.scope=z(e),ot(t.scope),e.$delimiters)){const[s,i]=t.delimiters=e.$delimiters;t.delimitersRE=new RegExp(ft(s)+"([^]+?)"+ft(i),"g")}t.scope.$s=Ue,t.scope.$nextTick=L,t.scope.$refs=Object.create(null),t.scope.$watch=_n;let n;return{directive(s,i){return i?(t.dirs[s]=i,this):t.dirs[s]},use(s,i={}){return s.install(this,i),this},mount(s){if(typeof s=="string"&&(s=document.querySelector(s),!s))return;s=s||document.documentElement;let i;return s.hasAttribute("v-scope")?i=[s]:i=[...s.querySelectorAll("[v-scope]")].filter(r=>!r.matches("[v-scope] [v-scope]")),i.length||(i=[s]),n=i.map(r=>new be(r,t,!0)),this},unmount(){n.forEach(s=>s.teardown())}}},En="0.4.6",at=document.currentScript;return at&&at.hasAttribute("init")&&ut().mount(),k.createApp=ut,k.effect=Ie,k.nextTick=L,k.reactive=z,k.version=En,Object.defineProperty(k,Symbol.toStringTag,{value:"Module"}),k}({});
