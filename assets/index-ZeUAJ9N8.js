(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const g of document.querySelectorAll('link[rel="modulepreload"]'))u(g);new MutationObserver(g=>{for(const j of g)if(j.type==="childList")for(const C of j.addedNodes)C.tagName==="LINK"&&C.rel==="modulepreload"&&u(C)}).observe(document,{childList:!0,subtree:!0});function i(g){const j={};return g.integrity&&(j.integrity=g.integrity),g.referrerPolicy&&(j.referrerPolicy=g.referrerPolicy),g.crossOrigin==="use-credentials"?j.credentials="include":g.crossOrigin==="anonymous"?j.credentials="omit":j.credentials="same-origin",j}function u(g){if(g.ep)return;g.ep=!0;const j=i(g);fetch(g.href,j)}})();function ef(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Sa={exports:{}},Kn={},Ca={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gd;function rf(){if(Gd)return te;Gd=1;var s=Symbol.for("react.element"),c=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),j=Symbol.for("react.provider"),C=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),E=Symbol.for("react.suspense"),Q=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),R=Symbol.iterator;function D(m){return m===null||typeof m!="object"?null:(m=R&&m[R]||m["@@iterator"],typeof m=="function"?m:null)}var G={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},oe=Object.assign,J={};function q(m,N,K){this.props=m,this.context=N,this.refs=J,this.updater=K||G}q.prototype.isReactComponent={},q.prototype.setState=function(m,N){if(typeof m!="object"&&typeof m!="function"&&m!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,m,N,"setState")},q.prototype.forceUpdate=function(m){this.updater.enqueueForceUpdate(this,m,"forceUpdate")};function me(){}me.prototype=q.prototype;function ce(m,N,K){this.props=m,this.context=N,this.refs=J,this.updater=K||G}var se=ce.prototype=new me;se.constructor=ce,oe(se,q.prototype),se.isPureReactComponent=!0;var ee=Array.isArray,he=Object.prototype.hasOwnProperty,Y={current:null},W={key:!0,ref:!0,__self:!0,__source:!0};function Be(m,N,K){var X,ne={},re=null,fe=null;if(N!=null)for(X in N.ref!==void 0&&(fe=N.ref),N.key!==void 0&&(re=""+N.key),N)he.call(N,X)&&!W.hasOwnProperty(X)&&(ne[X]=N[X]);var le=arguments.length-2;if(le===1)ne.children=K;else if(1<le){for(var ue=Array(le),Fe=0;Fe<le;Fe++)ue[Fe]=arguments[Fe+2];ne.children=ue}if(m&&m.defaultProps)for(X in le=m.defaultProps,le)ne[X]===void 0&&(ne[X]=le[X]);return{$$typeof:s,type:m,key:re,ref:fe,props:ne,_owner:Y.current}}function or(m,N){return{$$typeof:s,type:m.type,key:N,ref:m.ref,props:m.props,_owner:m._owner}}function Nr(m){return typeof m=="object"&&m!==null&&m.$$typeof===s}function Rr(m){var N={"=":"=0",":":"=2"};return"$"+m.replace(/[=:]/g,function(K){return N[K]})}var ur=/\/+/g;function Ge(m,N){return typeof m=="object"&&m!==null&&m.key!=null?Rr(""+m.key):N.toString(36)}function sr(m,N,K,X,ne){var re=typeof m;(re==="undefined"||re==="boolean")&&(m=null);var fe=!1;if(m===null)fe=!0;else switch(re){case"string":case"number":fe=!0;break;case"object":switch(m.$$typeof){case s:case c:fe=!0}}if(fe)return fe=m,ne=ne(fe),m=X===""?"."+Ge(fe,0):X,ee(ne)?(K="",m!=null&&(K=m.replace(ur,"$&/")+"/"),sr(ne,N,K,"",function(Fe){return Fe})):ne!=null&&(Nr(ne)&&(ne=or(ne,K+(!ne.key||fe&&fe.key===ne.key?"":(""+ne.key).replace(ur,"$&/")+"/")+m)),N.push(ne)),1;if(fe=0,X=X===""?".":X+":",ee(m))for(var le=0;le<m.length;le++){re=m[le];var ue=X+Ge(re,le);fe+=sr(re,N,K,ue,ne)}else if(ue=D(m),typeof ue=="function")for(m=ue.call(m),le=0;!(re=m.next()).done;)re=re.value,ue=X+Ge(re,le++),fe+=sr(re,N,K,ue,ne);else if(re==="object")throw N=String(m),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(m).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.");return fe}function pr(m,N,K){if(m==null)return m;var X=[],ne=0;return sr(m,X,"","",function(re){return N.call(K,re,ne++)}),X}function Ue(m){if(m._status===-1){var N=m._result;N=N(),N.then(function(K){(m._status===0||m._status===-1)&&(m._status=1,m._result=K)},function(K){(m._status===0||m._status===-1)&&(m._status=2,m._result=K)}),m._status===-1&&(m._status=0,m._result=N)}if(m._status===1)return m._result.default;throw m._result}var ve={current:null},T={transition:null},M={ReactCurrentDispatcher:ve,ReactCurrentBatchConfig:T,ReactCurrentOwner:Y};function I(){throw Error("act(...) is not supported in production builds of React.")}return te.Children={map:pr,forEach:function(m,N,K){pr(m,function(){N.apply(this,arguments)},K)},count:function(m){var N=0;return pr(m,function(){N++}),N},toArray:function(m){return pr(m,function(N){return N})||[]},only:function(m){if(!Nr(m))throw Error("React.Children.only expected to receive a single React element child.");return m}},te.Component=q,te.Fragment=i,te.Profiler=g,te.PureComponent=ce,te.StrictMode=u,te.Suspense=E,te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M,te.act=I,te.cloneElement=function(m,N,K){if(m==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+m+".");var X=oe({},m.props),ne=m.key,re=m.ref,fe=m._owner;if(N!=null){if(N.ref!==void 0&&(re=N.ref,fe=Y.current),N.key!==void 0&&(ne=""+N.key),m.type&&m.type.defaultProps)var le=m.type.defaultProps;for(ue in N)he.call(N,ue)&&!W.hasOwnProperty(ue)&&(X[ue]=N[ue]===void 0&&le!==void 0?le[ue]:N[ue])}var ue=arguments.length-2;if(ue===1)X.children=K;else if(1<ue){le=Array(ue);for(var Fe=0;Fe<ue;Fe++)le[Fe]=arguments[Fe+2];X.children=le}return{$$typeof:s,type:m.type,key:ne,ref:re,props:X,_owner:fe}},te.createContext=function(m){return m={$$typeof:C,_currentValue:m,_currentValue2:m,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},m.Provider={$$typeof:j,_context:m},m.Consumer=m},te.createElement=Be,te.createFactory=function(m){var N=Be.bind(null,m);return N.type=m,N},te.createRef=function(){return{current:null}},te.forwardRef=function(m){return{$$typeof:L,render:m}},te.isValidElement=Nr,te.lazy=function(m){return{$$typeof:V,_payload:{_status:-1,_result:m},_init:Ue}},te.memo=function(m,N){return{$$typeof:Q,type:m,compare:N===void 0?null:N}},te.startTransition=function(m){var N=T.transition;T.transition={};try{m()}finally{T.transition=N}},te.unstable_act=I,te.useCallback=function(m,N){return ve.current.useCallback(m,N)},te.useContext=function(m){return ve.current.useContext(m)},te.useDebugValue=function(){},te.useDeferredValue=function(m){return ve.current.useDeferredValue(m)},te.useEffect=function(m,N){return ve.current.useEffect(m,N)},te.useId=function(){return ve.current.useId()},te.useImperativeHandle=function(m,N,K){return ve.current.useImperativeHandle(m,N,K)},te.useInsertionEffect=function(m,N){return ve.current.useInsertionEffect(m,N)},te.useLayoutEffect=function(m,N){return ve.current.useLayoutEffect(m,N)},te.useMemo=function(m,N){return ve.current.useMemo(m,N)},te.useReducer=function(m,N,K){return ve.current.useReducer(m,N,K)},te.useRef=function(m){return ve.current.useRef(m)},te.useState=function(m){return ve.current.useState(m)},te.useSyncExternalStore=function(m,N,K){return ve.current.useSyncExternalStore(m,N,K)},te.useTransition=function(){return ve.current.useTransition()},te.version="18.3.1",te}var Yd;function Ga(){return Yd||(Yd=1,Ca.exports=rf()),Ca.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kd;function tf(){if(Kd)return Kn;Kd=1;var s=Ga(),c=Symbol.for("react.element"),i=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,g=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j={key:!0,ref:!0,__self:!0,__source:!0};function C(L,E,Q){var V,R={},D=null,G=null;Q!==void 0&&(D=""+Q),E.key!==void 0&&(D=""+E.key),E.ref!==void 0&&(G=E.ref);for(V in E)u.call(E,V)&&!j.hasOwnProperty(V)&&(R[V]=E[V]);if(L&&L.defaultProps)for(V in E=L.defaultProps,E)R[V]===void 0&&(R[V]=E[V]);return{$$typeof:c,type:L,key:D,ref:G,props:R,_owner:g.current}}return Kn.Fragment=i,Kn.jsx=C,Kn.jsxs=C,Kn}var qd;function nf(){return qd||(qd=1,Sa.exports=tf()),Sa.exports}var t=nf(),us={},Ea={exports:{}},tr={},Ta={exports:{}},za={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xd;function of(){return Xd||(Xd=1,(function(s){function c(T,M){var I=T.length;T.push(M);e:for(;0<I;){var m=I-1>>>1,N=T[m];if(0<g(N,M))T[m]=M,T[I]=N,I=m;else break e}}function i(T){return T.length===0?null:T[0]}function u(T){if(T.length===0)return null;var M=T[0],I=T.pop();if(I!==M){T[0]=I;e:for(var m=0,N=T.length,K=N>>>1;m<K;){var X=2*(m+1)-1,ne=T[X],re=X+1,fe=T[re];if(0>g(ne,I))re<N&&0>g(fe,ne)?(T[m]=fe,T[re]=I,m=re):(T[m]=ne,T[X]=I,m=X);else if(re<N&&0>g(fe,I))T[m]=fe,T[re]=I,m=re;else break e}}return M}function g(T,M){var I=T.sortIndex-M.sortIndex;return I!==0?I:T.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var j=performance;s.unstable_now=function(){return j.now()}}else{var C=Date,L=C.now();s.unstable_now=function(){return C.now()-L}}var E=[],Q=[],V=1,R=null,D=3,G=!1,oe=!1,J=!1,q=typeof setTimeout=="function"?setTimeout:null,me=typeof clearTimeout=="function"?clearTimeout:null,ce=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function se(T){for(var M=i(Q);M!==null;){if(M.callback===null)u(Q);else if(M.startTime<=T)u(Q),M.sortIndex=M.expirationTime,c(E,M);else break;M=i(Q)}}function ee(T){if(J=!1,se(T),!oe)if(i(E)!==null)oe=!0,Ue(he);else{var M=i(Q);M!==null&&ve(ee,M.startTime-T)}}function he(T,M){oe=!1,J&&(J=!1,me(Be),Be=-1),G=!0;var I=D;try{for(se(M),R=i(E);R!==null&&(!(R.expirationTime>M)||T&&!Rr());){var m=R.callback;if(typeof m=="function"){R.callback=null,D=R.priorityLevel;var N=m(R.expirationTime<=M);M=s.unstable_now(),typeof N=="function"?R.callback=N:R===i(E)&&u(E),se(M)}else u(E);R=i(E)}if(R!==null)var K=!0;else{var X=i(Q);X!==null&&ve(ee,X.startTime-M),K=!1}return K}finally{R=null,D=I,G=!1}}var Y=!1,W=null,Be=-1,or=5,Nr=-1;function Rr(){return!(s.unstable_now()-Nr<or)}function ur(){if(W!==null){var T=s.unstable_now();Nr=T;var M=!0;try{M=W(!0,T)}finally{M?Ge():(Y=!1,W=null)}}else Y=!1}var Ge;if(typeof ce=="function")Ge=function(){ce(ur)};else if(typeof MessageChannel!="undefined"){var sr=new MessageChannel,pr=sr.port2;sr.port1.onmessage=ur,Ge=function(){pr.postMessage(null)}}else Ge=function(){q(ur,0)};function Ue(T){W=T,Y||(Y=!0,Ge())}function ve(T,M){Be=q(function(){T(s.unstable_now())},M)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(T){T.callback=null},s.unstable_continueExecution=function(){oe||G||(oe=!0,Ue(he))},s.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):or=0<T?Math.floor(1e3/T):5},s.unstable_getCurrentPriorityLevel=function(){return D},s.unstable_getFirstCallbackNode=function(){return i(E)},s.unstable_next=function(T){switch(D){case 1:case 2:case 3:var M=3;break;default:M=D}var I=D;D=M;try{return T()}finally{D=I}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(T,M){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var I=D;D=T;try{return M()}finally{D=I}},s.unstable_scheduleCallback=function(T,M,I){var m=s.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?m+I:m):I=m,T){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=I+N,T={id:V++,callback:M,priorityLevel:T,startTime:I,expirationTime:N,sortIndex:-1},I>m?(T.sortIndex=I,c(Q,T),i(E)===null&&T===i(Q)&&(J?(me(Be),Be=-1):J=!0,ve(ee,I-m))):(T.sortIndex=N,c(E,T),oe||G||(oe=!0,Ue(he))),T},s.unstable_shouldYield=Rr,s.unstable_wrapCallback=function(T){var M=D;return function(){var I=D;D=M;try{return T.apply(this,arguments)}finally{D=I}}}})(za)),za}var Zd;function sf(){return Zd||(Zd=1,Ta.exports=of()),Ta.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eu;function lf(){if(eu)return tr;eu=1;var s=Ga(),c=sf();function i(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var u=new Set,g={};function j(e,r){C(e,r),C(e+"Capture",r)}function C(e,r){for(g[e]=r,e=0;e<r.length;e++)u.add(r[e])}var L=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),E=Object.prototype.hasOwnProperty,Q=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,V={},R={};function D(e){return E.call(R,e)?!0:E.call(V,e)?!1:Q.test(e)?R[e]=!0:(V[e]=!0,!1)}function G(e,r,n,o){if(n!==null&&n.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return o?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function oe(e,r,n,o){if(r===null||typeof r=="undefined"||G(e,r,n,o))return!0;if(o)return!1;if(n!==null)switch(n.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function J(e,r,n,o,l,a,d){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=o,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=r,this.sanitizeURL=a,this.removeEmptyString=d}var q={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){q[e]=new J(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var r=e[0];q[r]=new J(r,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){q[e]=new J(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){q[e]=new J(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){q[e]=new J(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){q[e]=new J(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){q[e]=new J(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){q[e]=new J(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){q[e]=new J(e,5,!1,e.toLowerCase(),null,!1,!1)});var me=/[\-:]([a-z])/g;function ce(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var r=e.replace(me,ce);q[r]=new J(r,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var r=e.replace(me,ce);q[r]=new J(r,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var r=e.replace(me,ce);q[r]=new J(r,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){q[e]=new J(e,1,!1,e.toLowerCase(),null,!1,!1)}),q.xlinkHref=new J("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){q[e]=new J(e,1,!1,e.toLowerCase(),null,!0,!0)});function se(e,r,n,o){var l=q.hasOwnProperty(r)?q[r]:null;(l!==null?l.type!==0:o||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(oe(r,n,l,o)&&(n=null),o||l===null?D(r)&&(n===null?e.removeAttribute(r):e.setAttribute(r,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(r=l.attributeName,o=l.attributeNamespace,n===null?e.removeAttribute(r):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,o?e.setAttributeNS(o,r,n):e.setAttribute(r,n))))}var ee=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,he=Symbol.for("react.element"),Y=Symbol.for("react.portal"),W=Symbol.for("react.fragment"),Be=Symbol.for("react.strict_mode"),or=Symbol.for("react.profiler"),Nr=Symbol.for("react.provider"),Rr=Symbol.for("react.context"),ur=Symbol.for("react.forward_ref"),Ge=Symbol.for("react.suspense"),sr=Symbol.for("react.suspense_list"),pr=Symbol.for("react.memo"),Ue=Symbol.for("react.lazy"),ve=Symbol.for("react.offscreen"),T=Symbol.iterator;function M(e){return e===null||typeof e!="object"?null:(e=T&&e[T]||e["@@iterator"],typeof e=="function"?e:null)}var I=Object.assign,m;function N(e){if(m===void 0)try{throw Error()}catch(n){var r=n.stack.trim().match(/\n( *(at )?)/);m=r&&r[1]||""}return`
`+m+e}var K=!1;function X(e,r){if(!e||K)return"";K=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(y){var o=y}Reflect.construct(e,[],r)}else{try{r.call()}catch(y){o=y}e.call(r.prototype)}else{try{throw Error()}catch(y){o=y}e()}}catch(y){if(y&&o&&typeof y.stack=="string"){for(var l=y.stack.split(`
`),a=o.stack.split(`
`),d=l.length-1,p=a.length-1;1<=d&&0<=p&&l[d]!==a[p];)p--;for(;1<=d&&0<=p;d--,p--)if(l[d]!==a[p]){if(d!==1||p!==1)do if(d--,p--,0>p||l[d]!==a[p]){var h=`
`+l[d].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=d&&0<=p);break}}}finally{K=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?N(e):""}function ne(e){switch(e.tag){case 5:return N(e.type);case 16:return N("Lazy");case 13:return N("Suspense");case 19:return N("SuspenseList");case 0:case 2:case 15:return e=X(e.type,!1),e;case 11:return e=X(e.type.render,!1),e;case 1:return e=X(e.type,!0),e;default:return""}}function re(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case W:return"Fragment";case Y:return"Portal";case or:return"Profiler";case Be:return"StrictMode";case Ge:return"Suspense";case sr:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Rr:return(e.displayName||"Context")+".Consumer";case Nr:return(e._context.displayName||"Context")+".Provider";case ur:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case pr:return r=e.displayName||null,r!==null?r:re(e.type)||"Memo";case Ue:r=e._payload,e=e._init;try{return re(e(r))}catch{}}return null}function fe(e){var r=e.type;switch(e.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=r.render,e=e.displayName||e.name||"",r.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return re(r);case 8:return r===Be?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function le(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ue(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Fe(e){var r=ue(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),o=""+e[r];if(!e.hasOwnProperty(r)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,a=n.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return l.call(this)},set:function(d){o=""+d,a.call(this,d)}}),Object.defineProperty(e,r,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(d){o=""+d},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function Dr(e){e._valueTracker||(e._valueTracker=Fe(e))}function wr(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var n=r.getValue(),o="";return e&&(o=ue(e)?e.checked?"true":"false":e.value),e=o,e!==n?(r.setValue(e),!0):!1}function ro(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ls(e,r){var n=r.checked;return I({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function ri(e,r){var n=r.defaultValue==null?"":r.defaultValue,o=r.checked!=null?r.checked:r.defaultChecked;n=le(r.value!=null?r.value:n),e._wrapperState={initialChecked:o,initialValue:n,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function ti(e,r){r=r.checked,r!=null&&se(e,"checked",r,!1)}function Bs(e,r){ti(e,r);var n=le(r.value),o=r.type;if(n!=null)o==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}r.hasOwnProperty("value")?_s(e,r.type,n):r.hasOwnProperty("defaultValue")&&_s(e,r.type,le(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(e.defaultChecked=!!r.defaultChecked)}function ni(e,r,n){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var o=r.type;if(!(o!=="submit"&&o!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+e._wrapperState.initialValue,n||r===e.value||(e.value=r),e.defaultValue=r}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function _s(e,r,n){(r!=="number"||ro(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var un=Array.isArray;function Pt(e,r,n,o){if(e=e.options,r){r={};for(var l=0;l<n.length;l++)r["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=r.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&o&&(e[n].defaultSelected=!0)}else{for(n=""+le(n),r=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,o&&(e[l].defaultSelected=!0);return}r!==null||e[l].disabled||(r=e[l])}r!==null&&(r.selected=!0)}}function Os(e,r){if(r.dangerouslySetInnerHTML!=null)throw Error(i(91));return I({},r,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function oi(e,r){var n=r.value;if(n==null){if(n=r.children,r=r.defaultValue,n!=null){if(r!=null)throw Error(i(92));if(un(n)){if(1<n.length)throw Error(i(93));n=n[0]}r=n}r==null&&(r=""),n=r}e._wrapperState={initialValue:le(n)}}function si(e,r){var n=le(r.value),o=le(r.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),r.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),o!=null&&(e.defaultValue=""+o)}function li(e){var r=e.textContent;r===e._wrapperState.initialValue&&r!==""&&r!==null&&(e.value=r)}function ai(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function As(e,r){return e==null||e==="http://www.w3.org/1999/xhtml"?ai(r):e==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var to,ii=(function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(r,n,o,l){MSApp.execUnsafeLocalFunction(function(){return e(r,n,o,l)})}:e})(function(e,r){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=r;else{for(to=to||document.createElement("div"),to.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=to.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;r.firstChild;)e.appendChild(r.firstChild)}});function pn(e,r){if(r){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=r;return}}e.textContent=r}var hn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},op=["Webkit","ms","Moz","O"];Object.keys(hn).forEach(function(e){op.forEach(function(r){r=r+e.charAt(0).toUpperCase()+e.substring(1),hn[r]=hn[e]})});function ci(e,r,n){return r==null||typeof r=="boolean"||r===""?"":n||typeof r!="number"||r===0||hn.hasOwnProperty(e)&&hn[e]?(""+r).trim():r+"px"}function di(e,r){e=e.style;for(var n in r)if(r.hasOwnProperty(n)){var o=n.indexOf("--")===0,l=ci(n,r[n],o);n==="float"&&(n="cssFloat"),o?e.setProperty(n,l):e[n]=l}}var sp=I({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ms(e,r){if(r){if(sp[e]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(i(137,e));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(i(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(i(61))}if(r.style!=null&&typeof r.style!="object")throw Error(i(62))}}function Rs(e,r){if(e.indexOf("-")===-1)return typeof r.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ds=null;function Fs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Hs=null,Lt=null,Bt=null;function ui(e){if(e=On(e)){if(typeof Hs!="function")throw Error(i(280));var r=e.stateNode;r&&(r=Co(r),Hs(e.stateNode,e.type,r))}}function pi(e){Lt?Bt?Bt.push(e):Bt=[e]:Lt=e}function hi(){if(Lt){var e=Lt,r=Bt;if(Bt=Lt=null,ui(e),r)for(e=0;e<r.length;e++)ui(r[e])}}function fi(e,r){return e(r)}function mi(){}var Ws=!1;function xi(e,r,n){if(Ws)return e(r,n);Ws=!0;try{return fi(e,r,n)}finally{Ws=!1,(Lt!==null||Bt!==null)&&(mi(),hi())}}function fn(e,r){var n=e.stateNode;if(n===null)return null;var o=Co(n);if(o===null)return null;n=o[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(i(231,r,typeof n));return n}var Us=!1;if(L)try{var mn={};Object.defineProperty(mn,"passive",{get:function(){Us=!0}}),window.addEventListener("test",mn,mn),window.removeEventListener("test",mn,mn)}catch{Us=!1}function lp(e,r,n,o,l,a,d,p,h){var y=Array.prototype.slice.call(arguments,3);try{r.apply(n,y)}catch(b){this.onError(b)}}var xn=!1,no=null,oo=!1,$s=null,ap={onError:function(e){xn=!0,no=e}};function ip(e,r,n,o,l,a,d,p,h){xn=!1,no=null,lp.apply(ap,arguments)}function cp(e,r,n,o,l,a,d,p,h){if(ip.apply(this,arguments),xn){if(xn){var y=no;xn=!1,no=null}else throw Error(i(198));oo||(oo=!0,$s=y)}}function mt(e){var r=e,n=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,(r.flags&4098)!==0&&(n=r.return),e=r.return;while(e)}return r.tag===3?n:null}function gi(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function vi(e){if(mt(e)!==e)throw Error(i(188))}function dp(e){var r=e.alternate;if(!r){if(r=mt(e),r===null)throw Error(i(188));return r!==e?null:e}for(var n=e,o=r;;){var l=n.return;if(l===null)break;var a=l.alternate;if(a===null){if(o=l.return,o!==null){n=o;continue}break}if(l.child===a.child){for(a=l.child;a;){if(a===n)return vi(l),e;if(a===o)return vi(l),r;a=a.sibling}throw Error(i(188))}if(n.return!==o.return)n=l,o=a;else{for(var d=!1,p=l.child;p;){if(p===n){d=!0,n=l,o=a;break}if(p===o){d=!0,o=l,n=a;break}p=p.sibling}if(!d){for(p=a.child;p;){if(p===n){d=!0,n=a,o=l;break}if(p===o){d=!0,o=a,n=l;break}p=p.sibling}if(!d)throw Error(i(189))}}if(n.alternate!==o)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:r}function yi(e){return e=dp(e),e!==null?ji(e):null}function ji(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var r=ji(e);if(r!==null)return r;e=e.sibling}return null}var Ni=c.unstable_scheduleCallback,wi=c.unstable_cancelCallback,up=c.unstable_shouldYield,pp=c.unstable_requestPaint,ze=c.unstable_now,hp=c.unstable_getCurrentPriorityLevel,Vs=c.unstable_ImmediatePriority,bi=c.unstable_UserBlockingPriority,so=c.unstable_NormalPriority,fp=c.unstable_LowPriority,ki=c.unstable_IdlePriority,lo=null,Lr=null;function mp(e){if(Lr&&typeof Lr.onCommitFiberRoot=="function")try{Lr.onCommitFiberRoot(lo,e,void 0,(e.current.flags&128)===128)}catch{}}var br=Math.clz32?Math.clz32:vp,xp=Math.log,gp=Math.LN2;function vp(e){return e>>>=0,e===0?32:31-(xp(e)/gp|0)|0}var ao=64,io=4194304;function gn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function co(e,r){var n=e.pendingLanes;if(n===0)return 0;var o=0,l=e.suspendedLanes,a=e.pingedLanes,d=n&268435455;if(d!==0){var p=d&~l;p!==0?o=gn(p):(a&=d,a!==0&&(o=gn(a)))}else d=n&~l,d!==0?o=gn(d):a!==0&&(o=gn(a));if(o===0)return 0;if(r!==0&&r!==o&&(r&l)===0&&(l=o&-o,a=r&-r,l>=a||l===16&&(a&4194240)!==0))return r;if((o&4)!==0&&(o|=n&16),r=e.entangledLanes,r!==0)for(e=e.entanglements,r&=o;0<r;)n=31-br(r),l=1<<n,o|=e[n],r&=~l;return o}function yp(e,r){switch(e){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jp(e,r){for(var n=e.suspendedLanes,o=e.pingedLanes,l=e.expirationTimes,a=e.pendingLanes;0<a;){var d=31-br(a),p=1<<d,h=l[d];h===-1?((p&n)===0||(p&o)!==0)&&(l[d]=yp(p,r)):h<=r&&(e.expiredLanes|=p),a&=~p}}function Js(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Si(){var e=ao;return ao<<=1,(ao&4194240)===0&&(ao=64),e}function Qs(e){for(var r=[],n=0;31>n;n++)r.push(e);return r}function vn(e,r,n){e.pendingLanes|=r,r!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,r=31-br(r),e[r]=n}function Np(e,r){var n=e.pendingLanes&~r;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=r,e.mutableReadLanes&=r,e.entangledLanes&=r,r=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-br(n),a=1<<l;r[l]=0,o[l]=-1,e[l]=-1,n&=~a}}function Gs(e,r){var n=e.entangledLanes|=r;for(e=e.entanglements;n;){var o=31-br(n),l=1<<o;l&r|e[o]&r&&(e[o]|=r),n&=~l}}var ge=0;function Ci(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Ei,Ys,Ti,zi,Ii,Ks=!1,uo=[],Yr=null,Kr=null,qr=null,yn=new Map,jn=new Map,Xr=[],wp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pi(e,r){switch(e){case"focusin":case"focusout":Yr=null;break;case"dragenter":case"dragleave":Kr=null;break;case"mouseover":case"mouseout":qr=null;break;case"pointerover":case"pointerout":yn.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":jn.delete(r.pointerId)}}function Nn(e,r,n,o,l,a){return e===null||e.nativeEvent!==a?(e={blockedOn:r,domEventName:n,eventSystemFlags:o,nativeEvent:a,targetContainers:[l]},r!==null&&(r=On(r),r!==null&&Ys(r)),e):(e.eventSystemFlags|=o,r=e.targetContainers,l!==null&&r.indexOf(l)===-1&&r.push(l),e)}function bp(e,r,n,o,l){switch(r){case"focusin":return Yr=Nn(Yr,e,r,n,o,l),!0;case"dragenter":return Kr=Nn(Kr,e,r,n,o,l),!0;case"mouseover":return qr=Nn(qr,e,r,n,o,l),!0;case"pointerover":var a=l.pointerId;return yn.set(a,Nn(yn.get(a)||null,e,r,n,o,l)),!0;case"gotpointercapture":return a=l.pointerId,jn.set(a,Nn(jn.get(a)||null,e,r,n,o,l)),!0}return!1}function Li(e){var r=xt(e.target);if(r!==null){var n=mt(r);if(n!==null){if(r=n.tag,r===13){if(r=gi(n),r!==null){e.blockedOn=r,Ii(e.priority,function(){Ti(n)});return}}else if(r===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function po(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var n=Xs(e.domEventName,e.eventSystemFlags,r[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var o=new n.constructor(n.type,n);Ds=o,n.target.dispatchEvent(o),Ds=null}else return r=On(n),r!==null&&Ys(r),e.blockedOn=n,!1;r.shift()}return!0}function Bi(e,r,n){po(e)&&n.delete(r)}function kp(){Ks=!1,Yr!==null&&po(Yr)&&(Yr=null),Kr!==null&&po(Kr)&&(Kr=null),qr!==null&&po(qr)&&(qr=null),yn.forEach(Bi),jn.forEach(Bi)}function wn(e,r){e.blockedOn===r&&(e.blockedOn=null,Ks||(Ks=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,kp)))}function bn(e){function r(l){return wn(l,e)}if(0<uo.length){wn(uo[0],e);for(var n=1;n<uo.length;n++){var o=uo[n];o.blockedOn===e&&(o.blockedOn=null)}}for(Yr!==null&&wn(Yr,e),Kr!==null&&wn(Kr,e),qr!==null&&wn(qr,e),yn.forEach(r),jn.forEach(r),n=0;n<Xr.length;n++)o=Xr[n],o.blockedOn===e&&(o.blockedOn=null);for(;0<Xr.length&&(n=Xr[0],n.blockedOn===null);)Li(n),n.blockedOn===null&&Xr.shift()}var _t=ee.ReactCurrentBatchConfig,ho=!0;function Sp(e,r,n,o){var l=ge,a=_t.transition;_t.transition=null;try{ge=1,qs(e,r,n,o)}finally{ge=l,_t.transition=a}}function Cp(e,r,n,o){var l=ge,a=_t.transition;_t.transition=null;try{ge=4,qs(e,r,n,o)}finally{ge=l,_t.transition=a}}function qs(e,r,n,o){if(ho){var l=Xs(e,r,n,o);if(l===null)ml(e,r,o,fo,n),Pi(e,o);else if(bp(l,e,r,n,o))o.stopPropagation();else if(Pi(e,o),r&4&&-1<wp.indexOf(e)){for(;l!==null;){var a=On(l);if(a!==null&&Ei(a),a=Xs(e,r,n,o),a===null&&ml(e,r,o,fo,n),a===l)break;l=a}l!==null&&o.stopPropagation()}else ml(e,r,o,null,n)}}var fo=null;function Xs(e,r,n,o){if(fo=null,e=Fs(o),e=xt(e),e!==null)if(r=mt(e),r===null)e=null;else if(n=r.tag,n===13){if(e=gi(r),e!==null)return e;e=null}else if(n===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null);return fo=e,null}function _i(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(hp()){case Vs:return 1;case bi:return 4;case so:case fp:return 16;case ki:return 536870912;default:return 16}default:return 16}}var Zr=null,Zs=null,mo=null;function Oi(){if(mo)return mo;var e,r=Zs,n=r.length,o,l="value"in Zr?Zr.value:Zr.textContent,a=l.length;for(e=0;e<n&&r[e]===l[e];e++);var d=n-e;for(o=1;o<=d&&r[n-o]===l[a-o];o++);return mo=l.slice(e,1<o?1-o:void 0)}function xo(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function go(){return!0}function Ai(){return!1}function lr(e){function r(n,o,l,a,d){this._reactName=n,this._targetInst=l,this.type=o,this.nativeEvent=a,this.target=d,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(n=e[p],this[p]=n?n(a):a[p]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?go:Ai,this.isPropagationStopped=Ai,this}return I(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=go)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=go)},persist:function(){},isPersistent:go}),r}var Ot={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},el=lr(Ot),kn=I({},Ot,{view:0,detail:0}),Ep=lr(kn),rl,tl,Sn,vo=I({},kn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ol,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Sn&&(Sn&&e.type==="mousemove"?(rl=e.screenX-Sn.screenX,tl=e.screenY-Sn.screenY):tl=rl=0,Sn=e),rl)},movementY:function(e){return"movementY"in e?e.movementY:tl}}),Mi=lr(vo),Tp=I({},vo,{dataTransfer:0}),zp=lr(Tp),Ip=I({},kn,{relatedTarget:0}),nl=lr(Ip),Pp=I({},Ot,{animationName:0,elapsedTime:0,pseudoElement:0}),Lp=lr(Pp),Bp=I({},Ot,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),_p=lr(Bp),Op=I({},Ot,{data:0}),Ri=lr(Op),Ap={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Rp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Dp(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=Rp[e])?!!r[e]:!1}function ol(){return Dp}var Fp=I({},kn,{key:function(e){if(e.key){var r=Ap[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=xo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Mp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ol,charCode:function(e){return e.type==="keypress"?xo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Hp=lr(Fp),Wp=I({},vo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Di=lr(Wp),Up=I({},kn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ol}),$p=lr(Up),Vp=I({},Ot,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jp=lr(Vp),Qp=I({},vo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Gp=lr(Qp),Yp=[9,13,27,32],sl=L&&"CompositionEvent"in window,Cn=null;L&&"documentMode"in document&&(Cn=document.documentMode);var Kp=L&&"TextEvent"in window&&!Cn,Fi=L&&(!sl||Cn&&8<Cn&&11>=Cn),Hi=" ",Wi=!1;function Ui(e,r){switch(e){case"keyup":return Yp.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $i(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var At=!1;function qp(e,r){switch(e){case"compositionend":return $i(r);case"keypress":return r.which!==32?null:(Wi=!0,Hi);case"textInput":return e=r.data,e===Hi&&Wi?null:e;default:return null}}function Xp(e,r){if(At)return e==="compositionend"||!sl&&Ui(e,r)?(e=Oi(),mo=Zs=Zr=null,At=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Fi&&r.locale!=="ko"?null:r.data;default:return null}}var Zp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vi(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!Zp[e.type]:r==="textarea"}function Ji(e,r,n,o){pi(o),r=bo(r,"onChange"),0<r.length&&(n=new el("onChange","change",null,n,o),e.push({event:n,listeners:r}))}var En=null,Tn=null;function eh(e){dc(e,0)}function yo(e){var r=Ht(e);if(wr(r))return e}function rh(e,r){if(e==="change")return r}var Qi=!1;if(L){var ll;if(L){var al="oninput"in document;if(!al){var Gi=document.createElement("div");Gi.setAttribute("oninput","return;"),al=typeof Gi.oninput=="function"}ll=al}else ll=!1;Qi=ll&&(!document.documentMode||9<document.documentMode)}function Yi(){En&&(En.detachEvent("onpropertychange",Ki),Tn=En=null)}function Ki(e){if(e.propertyName==="value"&&yo(Tn)){var r=[];Ji(r,Tn,e,Fs(e)),xi(eh,r)}}function th(e,r,n){e==="focusin"?(Yi(),En=r,Tn=n,En.attachEvent("onpropertychange",Ki)):e==="focusout"&&Yi()}function nh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return yo(Tn)}function oh(e,r){if(e==="click")return yo(r)}function sh(e,r){if(e==="input"||e==="change")return yo(r)}function lh(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var kr=typeof Object.is=="function"?Object.is:lh;function zn(e,r){if(kr(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var n=Object.keys(e),o=Object.keys(r);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var l=n[o];if(!E.call(r,l)||!kr(e[l],r[l]))return!1}return!0}function qi(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Xi(e,r){var n=qi(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=r&&o>=r)return{node:n,offset:r-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=qi(n)}}function Zi(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?Zi(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function ec(){for(var e=window,r=ro();r instanceof e.HTMLIFrameElement;){try{var n=typeof r.contentWindow.location.href=="string"}catch{n=!1}if(n)e=r.contentWindow;else break;r=ro(e.document)}return r}function il(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}function ah(e){var r=ec(),n=e.focusedElem,o=e.selectionRange;if(r!==n&&n&&n.ownerDocument&&Zi(n.ownerDocument.documentElement,n)){if(o!==null&&il(n)){if(r=o.start,e=o.end,e===void 0&&(e=r),"selectionStart"in n)n.selectionStart=r,n.selectionEnd=Math.min(e,n.value.length);else if(e=(r=n.ownerDocument||document)&&r.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,a=Math.min(o.start,l);o=o.end===void 0?a:Math.min(o.end,l),!e.extend&&a>o&&(l=o,o=a,a=l),l=Xi(n,a);var d=Xi(n,o);l&&d&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==d.node||e.focusOffset!==d.offset)&&(r=r.createRange(),r.setStart(l.node,l.offset),e.removeAllRanges(),a>o?(e.addRange(r),e.extend(d.node,d.offset)):(r.setEnd(d.node,d.offset),e.addRange(r)))}}for(r=[],e=n;e=e.parentNode;)e.nodeType===1&&r.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<r.length;n++)e=r[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ih=L&&"documentMode"in document&&11>=document.documentMode,Mt=null,cl=null,In=null,dl=!1;function rc(e,r,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;dl||Mt==null||Mt!==ro(o)||(o=Mt,"selectionStart"in o&&il(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),In&&zn(In,o)||(In=o,o=bo(cl,"onSelect"),0<o.length&&(r=new el("onSelect","select",null,r,n),e.push({event:r,listeners:o}),r.target=Mt)))}function jo(e,r){var n={};return n[e.toLowerCase()]=r.toLowerCase(),n["Webkit"+e]="webkit"+r,n["Moz"+e]="moz"+r,n}var Rt={animationend:jo("Animation","AnimationEnd"),animationiteration:jo("Animation","AnimationIteration"),animationstart:jo("Animation","AnimationStart"),transitionend:jo("Transition","TransitionEnd")},ul={},tc={};L&&(tc=document.createElement("div").style,"AnimationEvent"in window||(delete Rt.animationend.animation,delete Rt.animationiteration.animation,delete Rt.animationstart.animation),"TransitionEvent"in window||delete Rt.transitionend.transition);function No(e){if(ul[e])return ul[e];if(!Rt[e])return e;var r=Rt[e],n;for(n in r)if(r.hasOwnProperty(n)&&n in tc)return ul[e]=r[n];return e}var nc=No("animationend"),oc=No("animationiteration"),sc=No("animationstart"),lc=No("transitionend"),ac=new Map,ic="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function et(e,r){ac.set(e,r),j(r,[e])}for(var pl=0;pl<ic.length;pl++){var hl=ic[pl],ch=hl.toLowerCase(),dh=hl[0].toUpperCase()+hl.slice(1);et(ch,"on"+dh)}et(nc,"onAnimationEnd"),et(oc,"onAnimationIteration"),et(sc,"onAnimationStart"),et("dblclick","onDoubleClick"),et("focusin","onFocus"),et("focusout","onBlur"),et(lc,"onTransitionEnd"),C("onMouseEnter",["mouseout","mouseover"]),C("onMouseLeave",["mouseout","mouseover"]),C("onPointerEnter",["pointerout","pointerover"]),C("onPointerLeave",["pointerout","pointerover"]),j("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),j("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),j("onBeforeInput",["compositionend","keypress","textInput","paste"]),j("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uh=new Set("cancel close invalid load scroll toggle".split(" ").concat(Pn));function cc(e,r,n){var o=e.type||"unknown-event";e.currentTarget=n,cp(o,r,void 0,e),e.currentTarget=null}function dc(e,r){r=(r&4)!==0;for(var n=0;n<e.length;n++){var o=e[n],l=o.event;o=o.listeners;e:{var a=void 0;if(r)for(var d=o.length-1;0<=d;d--){var p=o[d],h=p.instance,y=p.currentTarget;if(p=p.listener,h!==a&&l.isPropagationStopped())break e;cc(l,p,y),a=h}else for(d=0;d<o.length;d++){if(p=o[d],h=p.instance,y=p.currentTarget,p=p.listener,h!==a&&l.isPropagationStopped())break e;cc(l,p,y),a=h}}}if(oo)throw e=$s,oo=!1,$s=null,e}function je(e,r){var n=r[Nl];n===void 0&&(n=r[Nl]=new Set);var o=e+"__bubble";n.has(o)||(uc(r,e,2,!1),n.add(o))}function fl(e,r,n){var o=0;r&&(o|=4),uc(n,e,o,r)}var wo="_reactListening"+Math.random().toString(36).slice(2);function Ln(e){if(!e[wo]){e[wo]=!0,u.forEach(function(n){n!=="selectionchange"&&(uh.has(n)||fl(n,!1,e),fl(n,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[wo]||(r[wo]=!0,fl("selectionchange",!1,r))}}function uc(e,r,n,o){switch(_i(r)){case 1:var l=Sp;break;case 4:l=Cp;break;default:l=qs}n=l.bind(null,r,n,e),l=void 0,!Us||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(l=!0),o?l!==void 0?e.addEventListener(r,n,{capture:!0,passive:l}):e.addEventListener(r,n,!0):l!==void 0?e.addEventListener(r,n,{passive:l}):e.addEventListener(r,n,!1)}function ml(e,r,n,o,l){var a=o;if((r&1)===0&&(r&2)===0&&o!==null)e:for(;;){if(o===null)return;var d=o.tag;if(d===3||d===4){var p=o.stateNode.containerInfo;if(p===l||p.nodeType===8&&p.parentNode===l)break;if(d===4)for(d=o.return;d!==null;){var h=d.tag;if((h===3||h===4)&&(h=d.stateNode.containerInfo,h===l||h.nodeType===8&&h.parentNode===l))return;d=d.return}for(;p!==null;){if(d=xt(p),d===null)return;if(h=d.tag,h===5||h===6){o=a=d;continue e}p=p.parentNode}}o=o.return}xi(function(){var y=a,b=Fs(n),k=[];e:{var w=ac.get(e);if(w!==void 0){var P=el,_=e;switch(e){case"keypress":if(xo(n)===0)break e;case"keydown":case"keyup":P=Hp;break;case"focusin":_="focus",P=nl;break;case"focusout":_="blur",P=nl;break;case"beforeblur":case"afterblur":P=nl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":P=Mi;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":P=zp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":P=$p;break;case nc:case oc:case sc:P=Lp;break;case lc:P=Jp;break;case"scroll":P=Ep;break;case"wheel":P=Gp;break;case"copy":case"cut":case"paste":P=_p;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":P=Di}var O=(r&4)!==0,Ie=!O&&e==="scroll",x=O?w!==null?w+"Capture":null:w;O=[];for(var f=y,v;f!==null;){v=f;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,x!==null&&(S=fn(f,x),S!=null&&O.push(Bn(f,S,v)))),Ie)break;f=f.return}0<O.length&&(w=new P(w,_,null,n,b),k.push({event:w,listeners:O}))}}if((r&7)===0){e:{if(w=e==="mouseover"||e==="pointerover",P=e==="mouseout"||e==="pointerout",w&&n!==Ds&&(_=n.relatedTarget||n.fromElement)&&(xt(_)||_[Fr]))break e;if((P||w)&&(w=b.window===b?b:(w=b.ownerDocument)?w.defaultView||w.parentWindow:window,P?(_=n.relatedTarget||n.toElement,P=y,_=_?xt(_):null,_!==null&&(Ie=mt(_),_!==Ie||_.tag!==5&&_.tag!==6)&&(_=null)):(P=null,_=y),P!==_)){if(O=Mi,S="onMouseLeave",x="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(O=Di,S="onPointerLeave",x="onPointerEnter",f="pointer"),Ie=P==null?w:Ht(P),v=_==null?w:Ht(_),w=new O(S,f+"leave",P,n,b),w.target=Ie,w.relatedTarget=v,S=null,xt(b)===y&&(O=new O(x,f+"enter",_,n,b),O.target=v,O.relatedTarget=Ie,S=O),Ie=S,P&&_)r:{for(O=P,x=_,f=0,v=O;v;v=Dt(v))f++;for(v=0,S=x;S;S=Dt(S))v++;for(;0<f-v;)O=Dt(O),f--;for(;0<v-f;)x=Dt(x),v--;for(;f--;){if(O===x||x!==null&&O===x.alternate)break r;O=Dt(O),x=Dt(x)}O=null}else O=null;P!==null&&pc(k,w,P,O,!1),_!==null&&Ie!==null&&pc(k,Ie,_,O,!0)}}e:{if(w=y?Ht(y):window,P=w.nodeName&&w.nodeName.toLowerCase(),P==="select"||P==="input"&&w.type==="file")var A=rh;else if(Vi(w))if(Qi)A=sh;else{A=nh;var F=th}else(P=w.nodeName)&&P.toLowerCase()==="input"&&(w.type==="checkbox"||w.type==="radio")&&(A=oh);if(A&&(A=A(e,y))){Ji(k,A,n,b);break e}F&&F(e,w,y),e==="focusout"&&(F=w._wrapperState)&&F.controlled&&w.type==="number"&&_s(w,"number",w.value)}switch(F=y?Ht(y):window,e){case"focusin":(Vi(F)||F.contentEditable==="true")&&(Mt=F,cl=y,In=null);break;case"focusout":In=cl=Mt=null;break;case"mousedown":dl=!0;break;case"contextmenu":case"mouseup":case"dragend":dl=!1,rc(k,n,b);break;case"selectionchange":if(ih)break;case"keydown":case"keyup":rc(k,n,b)}var H;if(sl)e:{switch(e){case"compositionstart":var $="onCompositionStart";break e;case"compositionend":$="onCompositionEnd";break e;case"compositionupdate":$="onCompositionUpdate";break e}$=void 0}else At?Ui(e,n)&&($="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&($="onCompositionStart");$&&(Fi&&n.locale!=="ko"&&(At||$!=="onCompositionStart"?$==="onCompositionEnd"&&At&&(H=Oi()):(Zr=b,Zs="value"in Zr?Zr.value:Zr.textContent,At=!0)),F=bo(y,$),0<F.length&&($=new Ri($,e,null,n,b),k.push({event:$,listeners:F}),H?$.data=H:(H=$i(n),H!==null&&($.data=H)))),(H=Kp?qp(e,n):Xp(e,n))&&(y=bo(y,"onBeforeInput"),0<y.length&&(b=new Ri("onBeforeInput","beforeinput",null,n,b),k.push({event:b,listeners:y}),b.data=H))}dc(k,r)})}function Bn(e,r,n){return{instance:e,listener:r,currentTarget:n}}function bo(e,r){for(var n=r+"Capture",o=[];e!==null;){var l=e,a=l.stateNode;l.tag===5&&a!==null&&(l=a,a=fn(e,n),a!=null&&o.unshift(Bn(e,a,l)),a=fn(e,r),a!=null&&o.push(Bn(e,a,l))),e=e.return}return o}function Dt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function pc(e,r,n,o,l){for(var a=r._reactName,d=[];n!==null&&n!==o;){var p=n,h=p.alternate,y=p.stateNode;if(h!==null&&h===o)break;p.tag===5&&y!==null&&(p=y,l?(h=fn(n,a),h!=null&&d.unshift(Bn(n,h,p))):l||(h=fn(n,a),h!=null&&d.push(Bn(n,h,p)))),n=n.return}d.length!==0&&e.push({event:r,listeners:d})}var ph=/\r\n?/g,hh=/\u0000|\uFFFD/g;function hc(e){return(typeof e=="string"?e:""+e).replace(ph,`
`).replace(hh,"")}function ko(e,r,n){if(r=hc(r),hc(e)!==r&&n)throw Error(i(425))}function So(){}var xl=null,gl=null;function vl(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var yl=typeof setTimeout=="function"?setTimeout:void 0,fh=typeof clearTimeout=="function"?clearTimeout:void 0,fc=typeof Promise=="function"?Promise:void 0,mh=typeof queueMicrotask=="function"?queueMicrotask:typeof fc!="undefined"?function(e){return fc.resolve(null).then(e).catch(xh)}:yl;function xh(e){setTimeout(function(){throw e})}function jl(e,r){var n=r,o=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(o===0){e.removeChild(l),bn(r);return}o--}else n!=="$"&&n!=="$?"&&n!=="$!"||o++;n=l}while(n);bn(r)}function rt(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return e}function mc(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(r===0)return e;r--}else n==="/$"&&r++}e=e.previousSibling}return null}var Ft=Math.random().toString(36).slice(2),Br="__reactFiber$"+Ft,_n="__reactProps$"+Ft,Fr="__reactContainer$"+Ft,Nl="__reactEvents$"+Ft,gh="__reactListeners$"+Ft,vh="__reactHandles$"+Ft;function xt(e){var r=e[Br];if(r)return r;for(var n=e.parentNode;n;){if(r=n[Fr]||n[Br]){if(n=r.alternate,r.child!==null||n!==null&&n.child!==null)for(e=mc(e);e!==null;){if(n=e[Br])return n;e=mc(e)}return r}e=n,n=e.parentNode}return null}function On(e){return e=e[Br]||e[Fr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ht(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(i(33))}function Co(e){return e[_n]||null}var wl=[],Wt=-1;function tt(e){return{current:e}}function Ne(e){0>Wt||(e.current=wl[Wt],wl[Wt]=null,Wt--)}function ye(e,r){Wt++,wl[Wt]=e.current,e.current=r}var nt={},$e=tt(nt),qe=tt(!1),gt=nt;function Ut(e,r){var n=e.type.contextTypes;if(!n)return nt;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===r)return o.__reactInternalMemoizedMaskedChildContext;var l={},a;for(a in n)l[a]=r[a];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=l),l}function Xe(e){return e=e.childContextTypes,e!=null}function Eo(){Ne(qe),Ne($e)}function xc(e,r,n){if($e.current!==nt)throw Error(i(168));ye($e,r),ye(qe,n)}function gc(e,r,n){var o=e.stateNode;if(r=r.childContextTypes,typeof o.getChildContext!="function")return n;o=o.getChildContext();for(var l in o)if(!(l in r))throw Error(i(108,fe(e)||"Unknown",l));return I({},n,o)}function To(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||nt,gt=$e.current,ye($e,e),ye(qe,qe.current),!0}function vc(e,r,n){var o=e.stateNode;if(!o)throw Error(i(169));n?(e=gc(e,r,gt),o.__reactInternalMemoizedMergedChildContext=e,Ne(qe),Ne($e),ye($e,e)):Ne(qe),ye(qe,n)}var Hr=null,zo=!1,bl=!1;function yc(e){Hr===null?Hr=[e]:Hr.push(e)}function yh(e){zo=!0,yc(e)}function ot(){if(!bl&&Hr!==null){bl=!0;var e=0,r=ge;try{var n=Hr;for(ge=1;e<n.length;e++){var o=n[e];do o=o(!0);while(o!==null)}Hr=null,zo=!1}catch(l){throw Hr!==null&&(Hr=Hr.slice(e+1)),Ni(Vs,ot),l}finally{ge=r,bl=!1}}return null}var $t=[],Vt=0,Io=null,Po=0,hr=[],fr=0,vt=null,Wr=1,Ur="";function yt(e,r){$t[Vt++]=Po,$t[Vt++]=Io,Io=e,Po=r}function jc(e,r,n){hr[fr++]=Wr,hr[fr++]=Ur,hr[fr++]=vt,vt=e;var o=Wr;e=Ur;var l=32-br(o)-1;o&=~(1<<l),n+=1;var a=32-br(r)+l;if(30<a){var d=l-l%5;a=(o&(1<<d)-1).toString(32),o>>=d,l-=d,Wr=1<<32-br(r)+l|n<<l|o,Ur=a+e}else Wr=1<<a|n<<l|o,Ur=e}function kl(e){e.return!==null&&(yt(e,1),jc(e,1,0))}function Sl(e){for(;e===Io;)Io=$t[--Vt],$t[Vt]=null,Po=$t[--Vt],$t[Vt]=null;for(;e===vt;)vt=hr[--fr],hr[fr]=null,Ur=hr[--fr],hr[fr]=null,Wr=hr[--fr],hr[fr]=null}var ar=null,ir=null,be=!1,Sr=null;function Nc(e,r){var n=vr(5,null,null,0);n.elementType="DELETED",n.stateNode=r,n.return=e,r=e.deletions,r===null?(e.deletions=[n],e.flags|=16):r.push(n)}function wc(e,r){switch(e.tag){case 5:var n=e.type;return r=r.nodeType!==1||n.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(e.stateNode=r,ar=e,ir=rt(r.firstChild),!0):!1;case 6:return r=e.pendingProps===""||r.nodeType!==3?null:r,r!==null?(e.stateNode=r,ar=e,ir=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(n=vt!==null?{id:Wr,overflow:Ur}:null,e.memoizedState={dehydrated:r,treeContext:n,retryLane:1073741824},n=vr(18,null,null,0),n.stateNode=r,n.return=e,e.child=n,ar=e,ir=null,!0):!1;default:return!1}}function Cl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function El(e){if(be){var r=ir;if(r){var n=r;if(!wc(e,r)){if(Cl(e))throw Error(i(418));r=rt(n.nextSibling);var o=ar;r&&wc(e,r)?Nc(o,n):(e.flags=e.flags&-4097|2,be=!1,ar=e)}}else{if(Cl(e))throw Error(i(418));e.flags=e.flags&-4097|2,be=!1,ar=e}}}function bc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ar=e}function Lo(e){if(e!==ar)return!1;if(!be)return bc(e),be=!0,!1;var r;if((r=e.tag!==3)&&!(r=e.tag!==5)&&(r=e.type,r=r!=="head"&&r!=="body"&&!vl(e.type,e.memoizedProps)),r&&(r=ir)){if(Cl(e))throw kc(),Error(i(418));for(;r;)Nc(e,r),r=rt(r.nextSibling)}if(bc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));e:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(r===0){ir=rt(e.nextSibling);break e}r--}else n!=="$"&&n!=="$!"&&n!=="$?"||r++}e=e.nextSibling}ir=null}}else ir=ar?rt(e.stateNode.nextSibling):null;return!0}function kc(){for(var e=ir;e;)e=rt(e.nextSibling)}function Jt(){ir=ar=null,be=!1}function Tl(e){Sr===null?Sr=[e]:Sr.push(e)}var jh=ee.ReactCurrentBatchConfig;function An(e,r,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(i(309));var o=n.stateNode}if(!o)throw Error(i(147,e));var l=o,a=""+e;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===a?r.ref:(r=function(d){var p=l.refs;d===null?delete p[a]:p[a]=d},r._stringRef=a,r)}if(typeof e!="string")throw Error(i(284));if(!n._owner)throw Error(i(290,e))}return e}function Bo(e,r){throw e=Object.prototype.toString.call(r),Error(i(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e))}function Sc(e){var r=e._init;return r(e._payload)}function Cc(e){function r(x,f){if(e){var v=x.deletions;v===null?(x.deletions=[f],x.flags|=16):v.push(f)}}function n(x,f){if(!e)return null;for(;f!==null;)r(x,f),f=f.sibling;return null}function o(x,f){for(x=new Map;f!==null;)f.key!==null?x.set(f.key,f):x.set(f.index,f),f=f.sibling;return x}function l(x,f){return x=pt(x,f),x.index=0,x.sibling=null,x}function a(x,f,v){return x.index=v,e?(v=x.alternate,v!==null?(v=v.index,v<f?(x.flags|=2,f):v):(x.flags|=2,f)):(x.flags|=1048576,f)}function d(x){return e&&x.alternate===null&&(x.flags|=2),x}function p(x,f,v,S){return f===null||f.tag!==6?(f=ya(v,x.mode,S),f.return=x,f):(f=l(f,v),f.return=x,f)}function h(x,f,v,S){var A=v.type;return A===W?b(x,f,v.props.children,S,v.key):f!==null&&(f.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Ue&&Sc(A)===f.type)?(S=l(f,v.props),S.ref=An(x,f,v),S.return=x,S):(S=ns(v.type,v.key,v.props,null,x.mode,S),S.ref=An(x,f,v),S.return=x,S)}function y(x,f,v,S){return f===null||f.tag!==4||f.stateNode.containerInfo!==v.containerInfo||f.stateNode.implementation!==v.implementation?(f=ja(v,x.mode,S),f.return=x,f):(f=l(f,v.children||[]),f.return=x,f)}function b(x,f,v,S,A){return f===null||f.tag!==7?(f=Et(v,x.mode,S,A),f.return=x,f):(f=l(f,v),f.return=x,f)}function k(x,f,v){if(typeof f=="string"&&f!==""||typeof f=="number")return f=ya(""+f,x.mode,v),f.return=x,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case he:return v=ns(f.type,f.key,f.props,null,x.mode,v),v.ref=An(x,null,f),v.return=x,v;case Y:return f=ja(f,x.mode,v),f.return=x,f;case Ue:var S=f._init;return k(x,S(f._payload),v)}if(un(f)||M(f))return f=Et(f,x.mode,v,null),f.return=x,f;Bo(x,f)}return null}function w(x,f,v,S){var A=f!==null?f.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return A!==null?null:p(x,f,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case he:return v.key===A?h(x,f,v,S):null;case Y:return v.key===A?y(x,f,v,S):null;case Ue:return A=v._init,w(x,f,A(v._payload),S)}if(un(v)||M(v))return A!==null?null:b(x,f,v,S,null);Bo(x,v)}return null}function P(x,f,v,S,A){if(typeof S=="string"&&S!==""||typeof S=="number")return x=x.get(v)||null,p(f,x,""+S,A);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case he:return x=x.get(S.key===null?v:S.key)||null,h(f,x,S,A);case Y:return x=x.get(S.key===null?v:S.key)||null,y(f,x,S,A);case Ue:var F=S._init;return P(x,f,v,F(S._payload),A)}if(un(S)||M(S))return x=x.get(v)||null,b(f,x,S,A,null);Bo(f,S)}return null}function _(x,f,v,S){for(var A=null,F=null,H=f,$=f=0,Re=null;H!==null&&$<v.length;$++){H.index>$?(Re=H,H=null):Re=H.sibling;var pe=w(x,H,v[$],S);if(pe===null){H===null&&(H=Re);break}e&&H&&pe.alternate===null&&r(x,H),f=a(pe,f,$),F===null?A=pe:F.sibling=pe,F=pe,H=Re}if($===v.length)return n(x,H),be&&yt(x,$),A;if(H===null){for(;$<v.length;$++)H=k(x,v[$],S),H!==null&&(f=a(H,f,$),F===null?A=H:F.sibling=H,F=H);return be&&yt(x,$),A}for(H=o(x,H);$<v.length;$++)Re=P(H,x,$,v[$],S),Re!==null&&(e&&Re.alternate!==null&&H.delete(Re.key===null?$:Re.key),f=a(Re,f,$),F===null?A=Re:F.sibling=Re,F=Re);return e&&H.forEach(function(ht){return r(x,ht)}),be&&yt(x,$),A}function O(x,f,v,S){var A=M(v);if(typeof A!="function")throw Error(i(150));if(v=A.call(v),v==null)throw Error(i(151));for(var F=A=null,H=f,$=f=0,Re=null,pe=v.next();H!==null&&!pe.done;$++,pe=v.next()){H.index>$?(Re=H,H=null):Re=H.sibling;var ht=w(x,H,pe.value,S);if(ht===null){H===null&&(H=Re);break}e&&H&&ht.alternate===null&&r(x,H),f=a(ht,f,$),F===null?A=ht:F.sibling=ht,F=ht,H=Re}if(pe.done)return n(x,H),be&&yt(x,$),A;if(H===null){for(;!pe.done;$++,pe=v.next())pe=k(x,pe.value,S),pe!==null&&(f=a(pe,f,$),F===null?A=pe:F.sibling=pe,F=pe);return be&&yt(x,$),A}for(H=o(x,H);!pe.done;$++,pe=v.next())pe=P(H,x,$,pe.value,S),pe!==null&&(e&&pe.alternate!==null&&H.delete(pe.key===null?$:pe.key),f=a(pe,f,$),F===null?A=pe:F.sibling=pe,F=pe);return e&&H.forEach(function(Zh){return r(x,Zh)}),be&&yt(x,$),A}function Ie(x,f,v,S){if(typeof v=="object"&&v!==null&&v.type===W&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case he:e:{for(var A=v.key,F=f;F!==null;){if(F.key===A){if(A=v.type,A===W){if(F.tag===7){n(x,F.sibling),f=l(F,v.props.children),f.return=x,x=f;break e}}else if(F.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Ue&&Sc(A)===F.type){n(x,F.sibling),f=l(F,v.props),f.ref=An(x,F,v),f.return=x,x=f;break e}n(x,F);break}else r(x,F);F=F.sibling}v.type===W?(f=Et(v.props.children,x.mode,S,v.key),f.return=x,x=f):(S=ns(v.type,v.key,v.props,null,x.mode,S),S.ref=An(x,f,v),S.return=x,x=S)}return d(x);case Y:e:{for(F=v.key;f!==null;){if(f.key===F)if(f.tag===4&&f.stateNode.containerInfo===v.containerInfo&&f.stateNode.implementation===v.implementation){n(x,f.sibling),f=l(f,v.children||[]),f.return=x,x=f;break e}else{n(x,f);break}else r(x,f);f=f.sibling}f=ja(v,x.mode,S),f.return=x,x=f}return d(x);case Ue:return F=v._init,Ie(x,f,F(v._payload),S)}if(un(v))return _(x,f,v,S);if(M(v))return O(x,f,v,S);Bo(x,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,f!==null&&f.tag===6?(n(x,f.sibling),f=l(f,v),f.return=x,x=f):(n(x,f),f=ya(v,x.mode,S),f.return=x,x=f),d(x)):n(x,f)}return Ie}var Qt=Cc(!0),Ec=Cc(!1),_o=tt(null),Oo=null,Gt=null,zl=null;function Il(){zl=Gt=Oo=null}function Pl(e){var r=_o.current;Ne(_o),e._currentValue=r}function Ll(e,r,n){for(;e!==null;){var o=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,o!==null&&(o.childLanes|=r)):o!==null&&(o.childLanes&r)!==r&&(o.childLanes|=r),e===n)break;e=e.return}}function Yt(e,r){Oo=e,zl=Gt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&r)!==0&&(Ze=!0),e.firstContext=null)}function mr(e){var r=e._currentValue;if(zl!==e)if(e={context:e,memoizedValue:r,next:null},Gt===null){if(Oo===null)throw Error(i(308));Gt=e,Oo.dependencies={lanes:0,firstContext:e}}else Gt=Gt.next=e;return r}var jt=null;function Bl(e){jt===null?jt=[e]:jt.push(e)}function Tc(e,r,n,o){var l=r.interleaved;return l===null?(n.next=n,Bl(r)):(n.next=l.next,l.next=n),r.interleaved=n,$r(e,o)}function $r(e,r){e.lanes|=r;var n=e.alternate;for(n!==null&&(n.lanes|=r),n=e,e=e.return;e!==null;)e.childLanes|=r,n=e.alternate,n!==null&&(n.childLanes|=r),n=e,e=e.return;return n.tag===3?n.stateNode:null}var st=!1;function _l(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zc(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Vr(e,r){return{eventTime:e,lane:r,tag:0,payload:null,callback:null,next:null}}function lt(e,r,n){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(de&2)!==0){var l=o.pending;return l===null?r.next=r:(r.next=l.next,l.next=r),o.pending=r,$r(e,n)}return l=o.interleaved,l===null?(r.next=r,Bl(o)):(r.next=l.next,l.next=r),o.interleaved=r,$r(e,n)}function Ao(e,r,n){if(r=r.updateQueue,r!==null&&(r=r.shared,(n&4194240)!==0)){var o=r.lanes;o&=e.pendingLanes,n|=o,r.lanes=n,Gs(e,n)}}function Ic(e,r){var n=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var l=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var d={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?l=a=d:a=a.next=d,n=n.next}while(n!==null);a===null?l=a=r:a=a.next=r}else l=a=r;n={baseState:o.baseState,firstBaseUpdate:l,lastBaseUpdate:a,shared:o.shared,effects:o.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=r:e.next=r,n.lastBaseUpdate=r}function Mo(e,r,n,o){var l=e.updateQueue;st=!1;var a=l.firstBaseUpdate,d=l.lastBaseUpdate,p=l.shared.pending;if(p!==null){l.shared.pending=null;var h=p,y=h.next;h.next=null,d===null?a=y:d.next=y,d=h;var b=e.alternate;b!==null&&(b=b.updateQueue,p=b.lastBaseUpdate,p!==d&&(p===null?b.firstBaseUpdate=y:p.next=y,b.lastBaseUpdate=h))}if(a!==null){var k=l.baseState;d=0,b=y=h=null,p=a;do{var w=p.lane,P=p.eventTime;if((o&w)===w){b!==null&&(b=b.next={eventTime:P,lane:0,tag:p.tag,payload:p.payload,callback:p.callback,next:null});e:{var _=e,O=p;switch(w=r,P=n,O.tag){case 1:if(_=O.payload,typeof _=="function"){k=_.call(P,k,w);break e}k=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=O.payload,w=typeof _=="function"?_.call(P,k,w):_,w==null)break e;k=I({},k,w);break e;case 2:st=!0}}p.callback!==null&&p.lane!==0&&(e.flags|=64,w=l.effects,w===null?l.effects=[p]:w.push(p))}else P={eventTime:P,lane:w,tag:p.tag,payload:p.payload,callback:p.callback,next:null},b===null?(y=b=P,h=k):b=b.next=P,d|=w;if(p=p.next,p===null){if(p=l.shared.pending,p===null)break;w=p,p=w.next,w.next=null,l.lastBaseUpdate=w,l.shared.pending=null}}while(!0);if(b===null&&(h=k),l.baseState=h,l.firstBaseUpdate=y,l.lastBaseUpdate=b,r=l.shared.interleaved,r!==null){l=r;do d|=l.lane,l=l.next;while(l!==r)}else a===null&&(l.shared.lanes=0);bt|=d,e.lanes=d,e.memoizedState=k}}function Pc(e,r,n){if(e=r.effects,r.effects=null,e!==null)for(r=0;r<e.length;r++){var o=e[r],l=o.callback;if(l!==null){if(o.callback=null,o=n,typeof l!="function")throw Error(i(191,l));l.call(o)}}}var Mn={},_r=tt(Mn),Rn=tt(Mn),Dn=tt(Mn);function Nt(e){if(e===Mn)throw Error(i(174));return e}function Ol(e,r){switch(ye(Dn,r),ye(Rn,e),ye(_r,Mn),e=r.nodeType,e){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:As(null,"");break;default:e=e===8?r.parentNode:r,r=e.namespaceURI||null,e=e.tagName,r=As(r,e)}Ne(_r),ye(_r,r)}function Kt(){Ne(_r),Ne(Rn),Ne(Dn)}function Lc(e){Nt(Dn.current);var r=Nt(_r.current),n=As(r,e.type);r!==n&&(ye(Rn,e),ye(_r,n))}function Al(e){Rn.current===e&&(Ne(_r),Ne(Rn))}var Ce=tt(0);function Ro(e){for(var r=e;r!==null;){if(r.tag===13){var n=r.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Ml=[];function Rl(){for(var e=0;e<Ml.length;e++)Ml[e]._workInProgressVersionPrimary=null;Ml.length=0}var Do=ee.ReactCurrentDispatcher,Dl=ee.ReactCurrentBatchConfig,wt=0,Ee=null,_e=null,Ae=null,Fo=!1,Fn=!1,Hn=0,Nh=0;function Ve(){throw Error(i(321))}function Fl(e,r){if(r===null)return!1;for(var n=0;n<r.length&&n<e.length;n++)if(!kr(e[n],r[n]))return!1;return!0}function Hl(e,r,n,o,l,a){if(wt=a,Ee=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Do.current=e===null||e.memoizedState===null?Sh:Ch,e=n(o,l),Fn){a=0;do{if(Fn=!1,Hn=0,25<=a)throw Error(i(301));a+=1,Ae=_e=null,r.updateQueue=null,Do.current=Eh,e=n(o,l)}while(Fn)}if(Do.current=Uo,r=_e!==null&&_e.next!==null,wt=0,Ae=_e=Ee=null,Fo=!1,r)throw Error(i(300));return e}function Wl(){var e=Hn!==0;return Hn=0,e}function Or(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ae===null?Ee.memoizedState=Ae=e:Ae=Ae.next=e,Ae}function xr(){if(_e===null){var e=Ee.alternate;e=e!==null?e.memoizedState:null}else e=_e.next;var r=Ae===null?Ee.memoizedState:Ae.next;if(r!==null)Ae=r,_e=e;else{if(e===null)throw Error(i(310));_e=e,e={memoizedState:_e.memoizedState,baseState:_e.baseState,baseQueue:_e.baseQueue,queue:_e.queue,next:null},Ae===null?Ee.memoizedState=Ae=e:Ae=Ae.next=e}return Ae}function Wn(e,r){return typeof r=="function"?r(e):r}function Ul(e){var r=xr(),n=r.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var o=_e,l=o.baseQueue,a=n.pending;if(a!==null){if(l!==null){var d=l.next;l.next=a.next,a.next=d}o.baseQueue=l=a,n.pending=null}if(l!==null){a=l.next,o=o.baseState;var p=d=null,h=null,y=a;do{var b=y.lane;if((wt&b)===b)h!==null&&(h=h.next={lane:0,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null}),o=y.hasEagerState?y.eagerState:e(o,y.action);else{var k={lane:b,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null};h===null?(p=h=k,d=o):h=h.next=k,Ee.lanes|=b,bt|=b}y=y.next}while(y!==null&&y!==a);h===null?d=o:h.next=p,kr(o,r.memoizedState)||(Ze=!0),r.memoizedState=o,r.baseState=d,r.baseQueue=h,n.lastRenderedState=o}if(e=n.interleaved,e!==null){l=e;do a=l.lane,Ee.lanes|=a,bt|=a,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[r.memoizedState,n.dispatch]}function $l(e){var r=xr(),n=r.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var o=n.dispatch,l=n.pending,a=r.memoizedState;if(l!==null){n.pending=null;var d=l=l.next;do a=e(a,d.action),d=d.next;while(d!==l);kr(a,r.memoizedState)||(Ze=!0),r.memoizedState=a,r.baseQueue===null&&(r.baseState=a),n.lastRenderedState=a}return[a,o]}function Bc(){}function _c(e,r){var n=Ee,o=xr(),l=r(),a=!kr(o.memoizedState,l);if(a&&(o.memoizedState=l,Ze=!0),o=o.queue,Vl(Mc.bind(null,n,o,e),[e]),o.getSnapshot!==r||a||Ae!==null&&Ae.memoizedState.tag&1){if(n.flags|=2048,Un(9,Ac.bind(null,n,o,l,r),void 0,null),Me===null)throw Error(i(349));(wt&30)!==0||Oc(n,r,l)}return l}function Oc(e,r,n){e.flags|=16384,e={getSnapshot:r,value:n},r=Ee.updateQueue,r===null?(r={lastEffect:null,stores:null},Ee.updateQueue=r,r.stores=[e]):(n=r.stores,n===null?r.stores=[e]:n.push(e))}function Ac(e,r,n,o){r.value=n,r.getSnapshot=o,Rc(r)&&Dc(e)}function Mc(e,r,n){return n(function(){Rc(r)&&Dc(e)})}function Rc(e){var r=e.getSnapshot;e=e.value;try{var n=r();return!kr(e,n)}catch{return!0}}function Dc(e){var r=$r(e,1);r!==null&&zr(r,e,1,-1)}function Fc(e){var r=Or();return typeof e=="function"&&(e=e()),r.memoizedState=r.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wn,lastRenderedState:e},r.queue=e,e=e.dispatch=kh.bind(null,Ee,e),[r.memoizedState,e]}function Un(e,r,n,o){return e={tag:e,create:r,destroy:n,deps:o,next:null},r=Ee.updateQueue,r===null?(r={lastEffect:null,stores:null},Ee.updateQueue=r,r.lastEffect=e.next=e):(n=r.lastEffect,n===null?r.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,r.lastEffect=e)),e}function Hc(){return xr().memoizedState}function Ho(e,r,n,o){var l=Or();Ee.flags|=e,l.memoizedState=Un(1|r,n,void 0,o===void 0?null:o)}function Wo(e,r,n,o){var l=xr();o=o===void 0?null:o;var a=void 0;if(_e!==null){var d=_e.memoizedState;if(a=d.destroy,o!==null&&Fl(o,d.deps)){l.memoizedState=Un(r,n,a,o);return}}Ee.flags|=e,l.memoizedState=Un(1|r,n,a,o)}function Wc(e,r){return Ho(8390656,8,e,r)}function Vl(e,r){return Wo(2048,8,e,r)}function Uc(e,r){return Wo(4,2,e,r)}function $c(e,r){return Wo(4,4,e,r)}function Vc(e,r){if(typeof r=="function")return e=e(),r(e),function(){r(null)};if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function Jc(e,r,n){return n=n!=null?n.concat([e]):null,Wo(4,4,Vc.bind(null,r,e),n)}function Jl(){}function Qc(e,r){var n=xr();r=r===void 0?null:r;var o=n.memoizedState;return o!==null&&r!==null&&Fl(r,o[1])?o[0]:(n.memoizedState=[e,r],e)}function Gc(e,r){var n=xr();r=r===void 0?null:r;var o=n.memoizedState;return o!==null&&r!==null&&Fl(r,o[1])?o[0]:(e=e(),n.memoizedState=[e,r],e)}function Yc(e,r,n){return(wt&21)===0?(e.baseState&&(e.baseState=!1,Ze=!0),e.memoizedState=n):(kr(n,r)||(n=Si(),Ee.lanes|=n,bt|=n,e.baseState=!0),r)}function wh(e,r){var n=ge;ge=n!==0&&4>n?n:4,e(!0);var o=Dl.transition;Dl.transition={};try{e(!1),r()}finally{ge=n,Dl.transition=o}}function Kc(){return xr().memoizedState}function bh(e,r,n){var o=dt(e);if(n={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null},qc(e))Xc(r,n);else if(n=Tc(e,r,n,o),n!==null){var l=Ke();zr(n,e,o,l),Zc(n,r,o)}}function kh(e,r,n){var o=dt(e),l={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null};if(qc(e))Xc(r,l);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=r.lastRenderedReducer,a!==null))try{var d=r.lastRenderedState,p=a(d,n);if(l.hasEagerState=!0,l.eagerState=p,kr(p,d)){var h=r.interleaved;h===null?(l.next=l,Bl(r)):(l.next=h.next,h.next=l),r.interleaved=l;return}}catch{}finally{}n=Tc(e,r,l,o),n!==null&&(l=Ke(),zr(n,e,o,l),Zc(n,r,o))}}function qc(e){var r=e.alternate;return e===Ee||r!==null&&r===Ee}function Xc(e,r){Fn=Fo=!0;var n=e.pending;n===null?r.next=r:(r.next=n.next,n.next=r),e.pending=r}function Zc(e,r,n){if((n&4194240)!==0){var o=r.lanes;o&=e.pendingLanes,n|=o,r.lanes=n,Gs(e,n)}}var Uo={readContext:mr,useCallback:Ve,useContext:Ve,useEffect:Ve,useImperativeHandle:Ve,useInsertionEffect:Ve,useLayoutEffect:Ve,useMemo:Ve,useReducer:Ve,useRef:Ve,useState:Ve,useDebugValue:Ve,useDeferredValue:Ve,useTransition:Ve,useMutableSource:Ve,useSyncExternalStore:Ve,useId:Ve,unstable_isNewReconciler:!1},Sh={readContext:mr,useCallback:function(e,r){return Or().memoizedState=[e,r===void 0?null:r],e},useContext:mr,useEffect:Wc,useImperativeHandle:function(e,r,n){return n=n!=null?n.concat([e]):null,Ho(4194308,4,Vc.bind(null,r,e),n)},useLayoutEffect:function(e,r){return Ho(4194308,4,e,r)},useInsertionEffect:function(e,r){return Ho(4,2,e,r)},useMemo:function(e,r){var n=Or();return r=r===void 0?null:r,e=e(),n.memoizedState=[e,r],e},useReducer:function(e,r,n){var o=Or();return r=n!==void 0?n(r):r,o.memoizedState=o.baseState=r,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},o.queue=e,e=e.dispatch=bh.bind(null,Ee,e),[o.memoizedState,e]},useRef:function(e){var r=Or();return e={current:e},r.memoizedState=e},useState:Fc,useDebugValue:Jl,useDeferredValue:function(e){return Or().memoizedState=e},useTransition:function(){var e=Fc(!1),r=e[0];return e=wh.bind(null,e[1]),Or().memoizedState=e,[r,e]},useMutableSource:function(){},useSyncExternalStore:function(e,r,n){var o=Ee,l=Or();if(be){if(n===void 0)throw Error(i(407));n=n()}else{if(n=r(),Me===null)throw Error(i(349));(wt&30)!==0||Oc(o,r,n)}l.memoizedState=n;var a={value:n,getSnapshot:r};return l.queue=a,Wc(Mc.bind(null,o,a,e),[e]),o.flags|=2048,Un(9,Ac.bind(null,o,a,n,r),void 0,null),n},useId:function(){var e=Or(),r=Me.identifierPrefix;if(be){var n=Ur,o=Wr;n=(o&~(1<<32-br(o)-1)).toString(32)+n,r=":"+r+"R"+n,n=Hn++,0<n&&(r+="H"+n.toString(32)),r+=":"}else n=Nh++,r=":"+r+"r"+n.toString(32)+":";return e.memoizedState=r},unstable_isNewReconciler:!1},Ch={readContext:mr,useCallback:Qc,useContext:mr,useEffect:Vl,useImperativeHandle:Jc,useInsertionEffect:Uc,useLayoutEffect:$c,useMemo:Gc,useReducer:Ul,useRef:Hc,useState:function(){return Ul(Wn)},useDebugValue:Jl,useDeferredValue:function(e){var r=xr();return Yc(r,_e.memoizedState,e)},useTransition:function(){var e=Ul(Wn)[0],r=xr().memoizedState;return[e,r]},useMutableSource:Bc,useSyncExternalStore:_c,useId:Kc,unstable_isNewReconciler:!1},Eh={readContext:mr,useCallback:Qc,useContext:mr,useEffect:Vl,useImperativeHandle:Jc,useInsertionEffect:Uc,useLayoutEffect:$c,useMemo:Gc,useReducer:$l,useRef:Hc,useState:function(){return $l(Wn)},useDebugValue:Jl,useDeferredValue:function(e){var r=xr();return _e===null?r.memoizedState=e:Yc(r,_e.memoizedState,e)},useTransition:function(){var e=$l(Wn)[0],r=xr().memoizedState;return[e,r]},useMutableSource:Bc,useSyncExternalStore:_c,useId:Kc,unstable_isNewReconciler:!1};function Cr(e,r){if(e&&e.defaultProps){r=I({},r),e=e.defaultProps;for(var n in e)r[n]===void 0&&(r[n]=e[n]);return r}return r}function Ql(e,r,n,o){r=e.memoizedState,n=n(o,r),n=n==null?r:I({},r,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var $o={isMounted:function(e){return(e=e._reactInternals)?mt(e)===e:!1},enqueueSetState:function(e,r,n){e=e._reactInternals;var o=Ke(),l=dt(e),a=Vr(o,l);a.payload=r,n!=null&&(a.callback=n),r=lt(e,a,l),r!==null&&(zr(r,e,l,o),Ao(r,e,l))},enqueueReplaceState:function(e,r,n){e=e._reactInternals;var o=Ke(),l=dt(e),a=Vr(o,l);a.tag=1,a.payload=r,n!=null&&(a.callback=n),r=lt(e,a,l),r!==null&&(zr(r,e,l,o),Ao(r,e,l))},enqueueForceUpdate:function(e,r){e=e._reactInternals;var n=Ke(),o=dt(e),l=Vr(n,o);l.tag=2,r!=null&&(l.callback=r),r=lt(e,l,o),r!==null&&(zr(r,e,o,n),Ao(r,e,o))}};function ed(e,r,n,o,l,a,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,a,d):r.prototype&&r.prototype.isPureReactComponent?!zn(n,o)||!zn(l,a):!0}function rd(e,r,n){var o=!1,l=nt,a=r.contextType;return typeof a=="object"&&a!==null?a=mr(a):(l=Xe(r)?gt:$e.current,o=r.contextTypes,a=(o=o!=null)?Ut(e,l):nt),r=new r(n,a),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=$o,e.stateNode=r,r._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=a),r}function td(e,r,n,o){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(n,o),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(n,o),r.state!==e&&$o.enqueueReplaceState(r,r.state,null)}function Gl(e,r,n,o){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},_l(e);var a=r.contextType;typeof a=="object"&&a!==null?l.context=mr(a):(a=Xe(r)?gt:$e.current,l.context=Ut(e,a)),l.state=e.memoizedState,a=r.getDerivedStateFromProps,typeof a=="function"&&(Ql(e,r,a,n),l.state=e.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(r=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),r!==l.state&&$o.enqueueReplaceState(l,l.state,null),Mo(e,n,l,o),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function qt(e,r){try{var n="",o=r;do n+=ne(o),o=o.return;while(o);var l=n}catch(a){l=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:r,stack:l,digest:null}}function Yl(e,r,n){return{value:e,source:null,stack:n!=null?n:null,digest:r!=null?r:null}}function Kl(e,r){try{console.error(r.value)}catch(n){setTimeout(function(){throw n})}}var Th=typeof WeakMap=="function"?WeakMap:Map;function nd(e,r,n){n=Vr(-1,n),n.tag=3,n.payload={element:null};var o=r.value;return n.callback=function(){qo||(qo=!0,ua=o),Kl(e,r)},n}function od(e,r,n){n=Vr(-1,n),n.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var l=r.value;n.payload=function(){return o(l)},n.callback=function(){Kl(e,r)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Kl(e,r),typeof o!="function"&&(it===null?it=new Set([this]):it.add(this));var d=r.stack;this.componentDidCatch(r.value,{componentStack:d!==null?d:""})}),n}function sd(e,r,n){var o=e.pingCache;if(o===null){o=e.pingCache=new Th;var l=new Set;o.set(r,l)}else l=o.get(r),l===void 0&&(l=new Set,o.set(r,l));l.has(n)||(l.add(n),e=Wh.bind(null,e,r,n),r.then(e,e))}function ld(e){do{var r;if((r=e.tag===13)&&(r=e.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return e;e=e.return}while(e!==null);return null}function ad(e,r,n,o,l){return(e.mode&1)===0?(e===r?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(r=Vr(-1,1),r.tag=2,lt(n,r,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var zh=ee.ReactCurrentOwner,Ze=!1;function Ye(e,r,n,o){r.child=e===null?Ec(r,null,n,o):Qt(r,e.child,n,o)}function id(e,r,n,o,l){n=n.render;var a=r.ref;return Yt(r,l),o=Hl(e,r,n,o,a,l),n=Wl(),e!==null&&!Ze?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~l,Jr(e,r,l)):(be&&n&&kl(r),r.flags|=1,Ye(e,r,o,l),r.child)}function cd(e,r,n,o,l){if(e===null){var a=n.type;return typeof a=="function"&&!va(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(r.tag=15,r.type=a,dd(e,r,a,o,l)):(e=ns(n.type,null,o,r,r.mode,l),e.ref=r.ref,e.return=r,r.child=e)}if(a=e.child,(e.lanes&l)===0){var d=a.memoizedProps;if(n=n.compare,n=n!==null?n:zn,n(d,o)&&e.ref===r.ref)return Jr(e,r,l)}return r.flags|=1,e=pt(a,o),e.ref=r.ref,e.return=r,r.child=e}function dd(e,r,n,o,l){if(e!==null){var a=e.memoizedProps;if(zn(a,o)&&e.ref===r.ref)if(Ze=!1,r.pendingProps=o=a,(e.lanes&l)!==0)(e.flags&131072)!==0&&(Ze=!0);else return r.lanes=e.lanes,Jr(e,r,l)}return ql(e,r,n,o,l)}function ud(e,r,n){var o=r.pendingProps,l=o.children,a=e!==null?e.memoizedState:null;if(o.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},ye(Zt,cr),cr|=n;else{if((n&1073741824)===0)return e=a!==null?a.baseLanes|n:n,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:e,cachePool:null,transitions:null},r.updateQueue=null,ye(Zt,cr),cr|=e,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=a!==null?a.baseLanes:n,ye(Zt,cr),cr|=o}else a!==null?(o=a.baseLanes|n,r.memoizedState=null):o=n,ye(Zt,cr),cr|=o;return Ye(e,r,l,n),r.child}function pd(e,r){var n=r.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(r.flags|=512,r.flags|=2097152)}function ql(e,r,n,o,l){var a=Xe(n)?gt:$e.current;return a=Ut(r,a),Yt(r,l),n=Hl(e,r,n,o,a,l),o=Wl(),e!==null&&!Ze?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~l,Jr(e,r,l)):(be&&o&&kl(r),r.flags|=1,Ye(e,r,n,l),r.child)}function hd(e,r,n,o,l){if(Xe(n)){var a=!0;To(r)}else a=!1;if(Yt(r,l),r.stateNode===null)Jo(e,r),rd(r,n,o),Gl(r,n,o,l),o=!0;else if(e===null){var d=r.stateNode,p=r.memoizedProps;d.props=p;var h=d.context,y=n.contextType;typeof y=="object"&&y!==null?y=mr(y):(y=Xe(n)?gt:$e.current,y=Ut(r,y));var b=n.getDerivedStateFromProps,k=typeof b=="function"||typeof d.getSnapshotBeforeUpdate=="function";k||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(p!==o||h!==y)&&td(r,d,o,y),st=!1;var w=r.memoizedState;d.state=w,Mo(r,o,d,l),h=r.memoizedState,p!==o||w!==h||qe.current||st?(typeof b=="function"&&(Ql(r,n,b,o),h=r.memoizedState),(p=st||ed(r,n,p,o,w,h,y))?(k||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(r.flags|=4194308)):(typeof d.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=o,r.memoizedState=h),d.props=o,d.state=h,d.context=y,o=p):(typeof d.componentDidMount=="function"&&(r.flags|=4194308),o=!1)}else{d=r.stateNode,zc(e,r),p=r.memoizedProps,y=r.type===r.elementType?p:Cr(r.type,p),d.props=y,k=r.pendingProps,w=d.context,h=n.contextType,typeof h=="object"&&h!==null?h=mr(h):(h=Xe(n)?gt:$e.current,h=Ut(r,h));var P=n.getDerivedStateFromProps;(b=typeof P=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(p!==k||w!==h)&&td(r,d,o,h),st=!1,w=r.memoizedState,d.state=w,Mo(r,o,d,l);var _=r.memoizedState;p!==k||w!==_||qe.current||st?(typeof P=="function"&&(Ql(r,n,P,o),_=r.memoizedState),(y=st||ed(r,n,y,o,w,_,h)||!1)?(b||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,_,h),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,_,h)),typeof d.componentDidUpdate=="function"&&(r.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof d.componentDidUpdate!="function"||p===e.memoizedProps&&w===e.memoizedState||(r.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&w===e.memoizedState||(r.flags|=1024),r.memoizedProps=o,r.memoizedState=_),d.props=o,d.state=_,d.context=h,o=y):(typeof d.componentDidUpdate!="function"||p===e.memoizedProps&&w===e.memoizedState||(r.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&w===e.memoizedState||(r.flags|=1024),o=!1)}return Xl(e,r,n,o,a,l)}function Xl(e,r,n,o,l,a){pd(e,r);var d=(r.flags&128)!==0;if(!o&&!d)return l&&vc(r,n,!1),Jr(e,r,a);o=r.stateNode,zh.current=r;var p=d&&typeof n.getDerivedStateFromError!="function"?null:o.render();return r.flags|=1,e!==null&&d?(r.child=Qt(r,e.child,null,a),r.child=Qt(r,null,p,a)):Ye(e,r,p,a),r.memoizedState=o.state,l&&vc(r,n,!0),r.child}function fd(e){var r=e.stateNode;r.pendingContext?xc(e,r.pendingContext,r.pendingContext!==r.context):r.context&&xc(e,r.context,!1),Ol(e,r.containerInfo)}function md(e,r,n,o,l){return Jt(),Tl(l),r.flags|=256,Ye(e,r,n,o),r.child}var Zl={dehydrated:null,treeContext:null,retryLane:0};function ea(e){return{baseLanes:e,cachePool:null,transitions:null}}function xd(e,r,n){var o=r.pendingProps,l=Ce.current,a=!1,d=(r.flags&128)!==0,p;if((p=d)||(p=e!==null&&e.memoizedState===null?!1:(l&2)!==0),p?(a=!0,r.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),ye(Ce,l&1),e===null)return El(r),e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((r.mode&1)===0?r.lanes=1:e.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(d=o.children,e=o.fallback,a?(o=r.mode,a=r.child,d={mode:"hidden",children:d},(o&1)===0&&a!==null?(a.childLanes=0,a.pendingProps=d):a=os(d,o,0,null),e=Et(e,o,n,null),a.return=r,e.return=r,a.sibling=e,r.child=a,r.child.memoizedState=ea(n),r.memoizedState=Zl,e):ra(r,d));if(l=e.memoizedState,l!==null&&(p=l.dehydrated,p!==null))return Ih(e,r,d,o,p,l,n);if(a){a=o.fallback,d=r.mode,l=e.child,p=l.sibling;var h={mode:"hidden",children:o.children};return(d&1)===0&&r.child!==l?(o=r.child,o.childLanes=0,o.pendingProps=h,r.deletions=null):(o=pt(l,h),o.subtreeFlags=l.subtreeFlags&14680064),p!==null?a=pt(p,a):(a=Et(a,d,n,null),a.flags|=2),a.return=r,o.return=r,o.sibling=a,r.child=o,o=a,a=r.child,d=e.child.memoizedState,d=d===null?ea(n):{baseLanes:d.baseLanes|n,cachePool:null,transitions:d.transitions},a.memoizedState=d,a.childLanes=e.childLanes&~n,r.memoizedState=Zl,o}return a=e.child,e=a.sibling,o=pt(a,{mode:"visible",children:o.children}),(r.mode&1)===0&&(o.lanes=n),o.return=r,o.sibling=null,e!==null&&(n=r.deletions,n===null?(r.deletions=[e],r.flags|=16):n.push(e)),r.child=o,r.memoizedState=null,o}function ra(e,r){return r=os({mode:"visible",children:r},e.mode,0,null),r.return=e,e.child=r}function Vo(e,r,n,o){return o!==null&&Tl(o),Qt(r,e.child,null,n),e=ra(r,r.pendingProps.children),e.flags|=2,r.memoizedState=null,e}function Ih(e,r,n,o,l,a,d){if(n)return r.flags&256?(r.flags&=-257,o=Yl(Error(i(422))),Vo(e,r,d,o)):r.memoizedState!==null?(r.child=e.child,r.flags|=128,null):(a=o.fallback,l=r.mode,o=os({mode:"visible",children:o.children},l,0,null),a=Et(a,l,d,null),a.flags|=2,o.return=r,a.return=r,o.sibling=a,r.child=o,(r.mode&1)!==0&&Qt(r,e.child,null,d),r.child.memoizedState=ea(d),r.memoizedState=Zl,a);if((r.mode&1)===0)return Vo(e,r,d,null);if(l.data==="$!"){if(o=l.nextSibling&&l.nextSibling.dataset,o)var p=o.dgst;return o=p,a=Error(i(419)),o=Yl(a,o,void 0),Vo(e,r,d,o)}if(p=(d&e.childLanes)!==0,Ze||p){if(o=Me,o!==null){switch(d&-d){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(o.suspendedLanes|d))!==0?0:l,l!==0&&l!==a.retryLane&&(a.retryLane=l,$r(e,l),zr(o,e,l,-1))}return ga(),o=Yl(Error(i(421))),Vo(e,r,d,o)}return l.data==="$?"?(r.flags|=128,r.child=e.child,r=Uh.bind(null,e),l._reactRetry=r,null):(e=a.treeContext,ir=rt(l.nextSibling),ar=r,be=!0,Sr=null,e!==null&&(hr[fr++]=Wr,hr[fr++]=Ur,hr[fr++]=vt,Wr=e.id,Ur=e.overflow,vt=r),r=ra(r,o.children),r.flags|=4096,r)}function gd(e,r,n){e.lanes|=r;var o=e.alternate;o!==null&&(o.lanes|=r),Ll(e.return,r,n)}function ta(e,r,n,o,l){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:l}:(a.isBackwards=r,a.rendering=null,a.renderingStartTime=0,a.last=o,a.tail=n,a.tailMode=l)}function vd(e,r,n){var o=r.pendingProps,l=o.revealOrder,a=o.tail;if(Ye(e,r,o.children,n),o=Ce.current,(o&2)!==0)o=o&1|2,r.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=r.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&gd(e,n,r);else if(e.tag===19)gd(e,n,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break e;for(;e.sibling===null;){if(e.return===null||e.return===r)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(ye(Ce,o),(r.mode&1)===0)r.memoizedState=null;else switch(l){case"forwards":for(n=r.child,l=null;n!==null;)e=n.alternate,e!==null&&Ro(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=r.child,r.child=null):(l=n.sibling,n.sibling=null),ta(r,!1,l,n,a);break;case"backwards":for(n=null,l=r.child,r.child=null;l!==null;){if(e=l.alternate,e!==null&&Ro(e)===null){r.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}ta(r,!0,n,null,a);break;case"together":ta(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Jo(e,r){(r.mode&1)===0&&e!==null&&(e.alternate=null,r.alternate=null,r.flags|=2)}function Jr(e,r,n){if(e!==null&&(r.dependencies=e.dependencies),bt|=r.lanes,(n&r.childLanes)===0)return null;if(e!==null&&r.child!==e.child)throw Error(i(153));if(r.child!==null){for(e=r.child,n=pt(e,e.pendingProps),r.child=n,n.return=r;e.sibling!==null;)e=e.sibling,n=n.sibling=pt(e,e.pendingProps),n.return=r;n.sibling=null}return r.child}function Ph(e,r,n){switch(r.tag){case 3:fd(r),Jt();break;case 5:Lc(r);break;case 1:Xe(r.type)&&To(r);break;case 4:Ol(r,r.stateNode.containerInfo);break;case 10:var o=r.type._context,l=r.memoizedProps.value;ye(_o,o._currentValue),o._currentValue=l;break;case 13:if(o=r.memoizedState,o!==null)return o.dehydrated!==null?(ye(Ce,Ce.current&1),r.flags|=128,null):(n&r.child.childLanes)!==0?xd(e,r,n):(ye(Ce,Ce.current&1),e=Jr(e,r,n),e!==null?e.sibling:null);ye(Ce,Ce.current&1);break;case 19:if(o=(n&r.childLanes)!==0,(e.flags&128)!==0){if(o)return vd(e,r,n);r.flags|=128}if(l=r.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),ye(Ce,Ce.current),o)break;return null;case 22:case 23:return r.lanes=0,ud(e,r,n)}return Jr(e,r,n)}var yd,na,jd,Nd;yd=function(e,r){for(var n=r.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break;for(;n.sibling===null;){if(n.return===null||n.return===r)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},na=function(){},jd=function(e,r,n,o){var l=e.memoizedProps;if(l!==o){e=r.stateNode,Nt(_r.current);var a=null;switch(n){case"input":l=Ls(e,l),o=Ls(e,o),a=[];break;case"select":l=I({},l,{value:void 0}),o=I({},o,{value:void 0}),a=[];break;case"textarea":l=Os(e,l),o=Os(e,o),a=[];break;default:typeof l.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=So)}Ms(n,o);var d;n=null;for(y in l)if(!o.hasOwnProperty(y)&&l.hasOwnProperty(y)&&l[y]!=null)if(y==="style"){var p=l[y];for(d in p)p.hasOwnProperty(d)&&(n||(n={}),n[d]="")}else y!=="dangerouslySetInnerHTML"&&y!=="children"&&y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(g.hasOwnProperty(y)?a||(a=[]):(a=a||[]).push(y,null));for(y in o){var h=o[y];if(p=l!=null?l[y]:void 0,o.hasOwnProperty(y)&&h!==p&&(h!=null||p!=null))if(y==="style")if(p){for(d in p)!p.hasOwnProperty(d)||h&&h.hasOwnProperty(d)||(n||(n={}),n[d]="");for(d in h)h.hasOwnProperty(d)&&p[d]!==h[d]&&(n||(n={}),n[d]=h[d])}else n||(a||(a=[]),a.push(y,n)),n=h;else y==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,p=p?p.__html:void 0,h!=null&&p!==h&&(a=a||[]).push(y,h)):y==="children"?typeof h!="string"&&typeof h!="number"||(a=a||[]).push(y,""+h):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&(g.hasOwnProperty(y)?(h!=null&&y==="onScroll"&&je("scroll",e),a||p===h||(a=[])):(a=a||[]).push(y,h))}n&&(a=a||[]).push("style",n);var y=a;(r.updateQueue=y)&&(r.flags|=4)}},Nd=function(e,r,n,o){n!==o&&(r.flags|=4)};function $n(e,r){if(!be)switch(e.tailMode){case"hidden":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?r||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Je(e){var r=e.alternate!==null&&e.alternate.child===e.child,n=0,o=0;if(r)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,o|=l.subtreeFlags&14680064,o|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,o|=l.subtreeFlags,o|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=o,e.childLanes=n,r}function Lh(e,r,n){var o=r.pendingProps;switch(Sl(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(r),null;case 1:return Xe(r.type)&&Eo(),Je(r),null;case 3:return o=r.stateNode,Kt(),Ne(qe),Ne($e),Rl(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(Lo(r)?r.flags|=4:e===null||e.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Sr!==null&&(fa(Sr),Sr=null))),na(e,r),Je(r),null;case 5:Al(r);var l=Nt(Dn.current);if(n=r.type,e!==null&&r.stateNode!=null)jd(e,r,n,o,l),e.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!o){if(r.stateNode===null)throw Error(i(166));return Je(r),null}if(e=Nt(_r.current),Lo(r)){o=r.stateNode,n=r.type;var a=r.memoizedProps;switch(o[Br]=r,o[_n]=a,e=(r.mode&1)!==0,n){case"dialog":je("cancel",o),je("close",o);break;case"iframe":case"object":case"embed":je("load",o);break;case"video":case"audio":for(l=0;l<Pn.length;l++)je(Pn[l],o);break;case"source":je("error",o);break;case"img":case"image":case"link":je("error",o),je("load",o);break;case"details":je("toggle",o);break;case"input":ri(o,a),je("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!a.multiple},je("invalid",o);break;case"textarea":oi(o,a),je("invalid",o)}Ms(n,a),l=null;for(var d in a)if(a.hasOwnProperty(d)){var p=a[d];d==="children"?typeof p=="string"?o.textContent!==p&&(a.suppressHydrationWarning!==!0&&ko(o.textContent,p,e),l=["children",p]):typeof p=="number"&&o.textContent!==""+p&&(a.suppressHydrationWarning!==!0&&ko(o.textContent,p,e),l=["children",""+p]):g.hasOwnProperty(d)&&p!=null&&d==="onScroll"&&je("scroll",o)}switch(n){case"input":Dr(o),ni(o,a,!0);break;case"textarea":Dr(o),li(o);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(o.onclick=So)}o=l,r.updateQueue=o,o!==null&&(r.flags|=4)}else{d=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ai(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=d.createElement(n,{is:o.is}):(e=d.createElement(n),n==="select"&&(d=e,o.multiple?d.multiple=!0:o.size&&(d.size=o.size))):e=d.createElementNS(e,n),e[Br]=r,e[_n]=o,yd(e,r,!1,!1),r.stateNode=e;e:{switch(d=Rs(n,o),n){case"dialog":je("cancel",e),je("close",e),l=o;break;case"iframe":case"object":case"embed":je("load",e),l=o;break;case"video":case"audio":for(l=0;l<Pn.length;l++)je(Pn[l],e);l=o;break;case"source":je("error",e),l=o;break;case"img":case"image":case"link":je("error",e),je("load",e),l=o;break;case"details":je("toggle",e),l=o;break;case"input":ri(e,o),l=Ls(e,o),je("invalid",e);break;case"option":l=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},l=I({},o,{value:void 0}),je("invalid",e);break;case"textarea":oi(e,o),l=Os(e,o),je("invalid",e);break;default:l=o}Ms(n,l),p=l;for(a in p)if(p.hasOwnProperty(a)){var h=p[a];a==="style"?di(e,h):a==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,h!=null&&ii(e,h)):a==="children"?typeof h=="string"?(n!=="textarea"||h!=="")&&pn(e,h):typeof h=="number"&&pn(e,""+h):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(g.hasOwnProperty(a)?h!=null&&a==="onScroll"&&je("scroll",e):h!=null&&se(e,a,h,d))}switch(n){case"input":Dr(e),ni(e,o,!1);break;case"textarea":Dr(e),li(e);break;case"option":o.value!=null&&e.setAttribute("value",""+le(o.value));break;case"select":e.multiple=!!o.multiple,a=o.value,a!=null?Pt(e,!!o.multiple,a,!1):o.defaultValue!=null&&Pt(e,!!o.multiple,o.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=So)}switch(n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Je(r),null;case 6:if(e&&r.stateNode!=null)Nd(e,r,e.memoizedProps,o);else{if(typeof o!="string"&&r.stateNode===null)throw Error(i(166));if(n=Nt(Dn.current),Nt(_r.current),Lo(r)){if(o=r.stateNode,n=r.memoizedProps,o[Br]=r,(a=o.nodeValue!==n)&&(e=ar,e!==null))switch(e.tag){case 3:ko(o.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ko(o.nodeValue,n,(e.mode&1)!==0)}a&&(r.flags|=4)}else o=(n.nodeType===9?n:n.ownerDocument).createTextNode(o),o[Br]=r,r.stateNode=o}return Je(r),null;case 13:if(Ne(Ce),o=r.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(be&&ir!==null&&(r.mode&1)!==0&&(r.flags&128)===0)kc(),Jt(),r.flags|=98560,a=!1;else if(a=Lo(r),o!==null&&o.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=r.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(i(317));a[Br]=r}else Jt(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Je(r),a=!1}else Sr!==null&&(fa(Sr),Sr=null),a=!0;if(!a)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=n,r):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(r.child.flags|=8192,(r.mode&1)!==0&&(e===null||(Ce.current&1)!==0?Oe===0&&(Oe=3):ga())),r.updateQueue!==null&&(r.flags|=4),Je(r),null);case 4:return Kt(),na(e,r),e===null&&Ln(r.stateNode.containerInfo),Je(r),null;case 10:return Pl(r.type._context),Je(r),null;case 17:return Xe(r.type)&&Eo(),Je(r),null;case 19:if(Ne(Ce),a=r.memoizedState,a===null)return Je(r),null;if(o=(r.flags&128)!==0,d=a.rendering,d===null)if(o)$n(a,!1);else{if(Oe!==0||e!==null&&(e.flags&128)!==0)for(e=r.child;e!==null;){if(d=Ro(e),d!==null){for(r.flags|=128,$n(a,!1),o=d.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),r.subtreeFlags=0,o=n,n=r.child;n!==null;)a=n,e=o,a.flags&=14680066,d=a.alternate,d===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=d.childLanes,a.lanes=d.lanes,a.child=d.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=d.memoizedProps,a.memoizedState=d.memoizedState,a.updateQueue=d.updateQueue,a.type=d.type,e=d.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ye(Ce,Ce.current&1|2),r.child}e=e.sibling}a.tail!==null&&ze()>en&&(r.flags|=128,o=!0,$n(a,!1),r.lanes=4194304)}else{if(!o)if(e=Ro(d),e!==null){if(r.flags|=128,o=!0,n=e.updateQueue,n!==null&&(r.updateQueue=n,r.flags|=4),$n(a,!0),a.tail===null&&a.tailMode==="hidden"&&!d.alternate&&!be)return Je(r),null}else 2*ze()-a.renderingStartTime>en&&n!==1073741824&&(r.flags|=128,o=!0,$n(a,!1),r.lanes=4194304);a.isBackwards?(d.sibling=r.child,r.child=d):(n=a.last,n!==null?n.sibling=d:r.child=d,a.last=d)}return a.tail!==null?(r=a.tail,a.rendering=r,a.tail=r.sibling,a.renderingStartTime=ze(),r.sibling=null,n=Ce.current,ye(Ce,o?n&1|2:n&1),r):(Je(r),null);case 22:case 23:return xa(),o=r.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(r.flags|=8192),o&&(r.mode&1)!==0?(cr&1073741824)!==0&&(Je(r),r.subtreeFlags&6&&(r.flags|=8192)):Je(r),null;case 24:return null;case 25:return null}throw Error(i(156,r.tag))}function Bh(e,r){switch(Sl(r),r.tag){case 1:return Xe(r.type)&&Eo(),e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 3:return Kt(),Ne(qe),Ne($e),Rl(),e=r.flags,(e&65536)!==0&&(e&128)===0?(r.flags=e&-65537|128,r):null;case 5:return Al(r),null;case 13:if(Ne(Ce),e=r.memoizedState,e!==null&&e.dehydrated!==null){if(r.alternate===null)throw Error(i(340));Jt()}return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 19:return Ne(Ce),null;case 4:return Kt(),null;case 10:return Pl(r.type._context),null;case 22:case 23:return xa(),null;case 24:return null;default:return null}}var Qo=!1,Qe=!1,_h=typeof WeakSet=="function"?WeakSet:Set,B=null;function Xt(e,r){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(o){Te(e,r,o)}else n.current=null}function oa(e,r,n){try{n()}catch(o){Te(e,r,o)}}var wd=!1;function Oh(e,r){if(xl=ho,e=ec(),il(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var l=o.anchorOffset,a=o.focusNode;o=o.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var d=0,p=-1,h=-1,y=0,b=0,k=e,w=null;r:for(;;){for(var P;k!==n||l!==0&&k.nodeType!==3||(p=d+l),k!==a||o!==0&&k.nodeType!==3||(h=d+o),k.nodeType===3&&(d+=k.nodeValue.length),(P=k.firstChild)!==null;)w=k,k=P;for(;;){if(k===e)break r;if(w===n&&++y===l&&(p=d),w===a&&++b===o&&(h=d),(P=k.nextSibling)!==null)break;k=w,w=k.parentNode}k=P}n=p===-1||h===-1?null:{start:p,end:h}}else n=null}n=n||{start:0,end:0}}else n=null;for(gl={focusedElem:e,selectionRange:n},ho=!1,B=r;B!==null;)if(r=B,e=r.child,(r.subtreeFlags&1028)!==0&&e!==null)e.return=r,B=e;else for(;B!==null;){r=B;try{var _=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var O=_.memoizedProps,Ie=_.memoizedState,x=r.stateNode,f=x.getSnapshotBeforeUpdate(r.elementType===r.type?O:Cr(r.type,O),Ie);x.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var v=r.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch(S){Te(r,r.return,S)}if(e=r.sibling,e!==null){e.return=r.return,B=e;break}B=r.return}return _=wd,wd=!1,_}function Vn(e,r,n){var o=r.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var l=o=o.next;do{if((l.tag&e)===e){var a=l.destroy;l.destroy=void 0,a!==void 0&&oa(r,n,a)}l=l.next}while(l!==o)}}function Go(e,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var n=r=r.next;do{if((n.tag&e)===e){var o=n.create;n.destroy=o()}n=n.next}while(n!==r)}}function sa(e){var r=e.ref;if(r!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof r=="function"?r(e):r.current=e}}function bd(e){var r=e.alternate;r!==null&&(e.alternate=null,bd(r)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(r=e.stateNode,r!==null&&(delete r[Br],delete r[_n],delete r[Nl],delete r[gh],delete r[vh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function kd(e){return e.tag===5||e.tag===3||e.tag===4}function Sd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||kd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function la(e,r,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,r?n.nodeType===8?n.parentNode.insertBefore(e,r):n.insertBefore(e,r):(n.nodeType===8?(r=n.parentNode,r.insertBefore(e,n)):(r=n,r.appendChild(e)),n=n._reactRootContainer,n!=null||r.onclick!==null||(r.onclick=So));else if(o!==4&&(e=e.child,e!==null))for(la(e,r,n),e=e.sibling;e!==null;)la(e,r,n),e=e.sibling}function aa(e,r,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,r?n.insertBefore(e,r):n.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(aa(e,r,n),e=e.sibling;e!==null;)aa(e,r,n),e=e.sibling}var He=null,Er=!1;function at(e,r,n){for(n=n.child;n!==null;)Cd(e,r,n),n=n.sibling}function Cd(e,r,n){if(Lr&&typeof Lr.onCommitFiberUnmount=="function")try{Lr.onCommitFiberUnmount(lo,n)}catch{}switch(n.tag){case 5:Qe||Xt(n,r);case 6:var o=He,l=Er;He=null,at(e,r,n),He=o,Er=l,He!==null&&(Er?(e=He,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):He.removeChild(n.stateNode));break;case 18:He!==null&&(Er?(e=He,n=n.stateNode,e.nodeType===8?jl(e.parentNode,n):e.nodeType===1&&jl(e,n),bn(e)):jl(He,n.stateNode));break;case 4:o=He,l=Er,He=n.stateNode.containerInfo,Er=!0,at(e,r,n),He=o,Er=l;break;case 0:case 11:case 14:case 15:if(!Qe&&(o=n.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){l=o=o.next;do{var a=l,d=a.destroy;a=a.tag,d!==void 0&&((a&2)!==0||(a&4)!==0)&&oa(n,r,d),l=l.next}while(l!==o)}at(e,r,n);break;case 1:if(!Qe&&(Xt(n,r),o=n.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=n.memoizedProps,o.state=n.memoizedState,o.componentWillUnmount()}catch(p){Te(n,r,p)}at(e,r,n);break;case 21:at(e,r,n);break;case 22:n.mode&1?(Qe=(o=Qe)||n.memoizedState!==null,at(e,r,n),Qe=o):at(e,r,n);break;default:at(e,r,n)}}function Ed(e){var r=e.updateQueue;if(r!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new _h),r.forEach(function(o){var l=$h.bind(null,e,o);n.has(o)||(n.add(o),o.then(l,l))})}}function Tr(e,r){var n=r.deletions;if(n!==null)for(var o=0;o<n.length;o++){var l=n[o];try{var a=e,d=r,p=d;e:for(;p!==null;){switch(p.tag){case 5:He=p.stateNode,Er=!1;break e;case 3:He=p.stateNode.containerInfo,Er=!0;break e;case 4:He=p.stateNode.containerInfo,Er=!0;break e}p=p.return}if(He===null)throw Error(i(160));Cd(a,d,l),He=null,Er=!1;var h=l.alternate;h!==null&&(h.return=null),l.return=null}catch(y){Te(l,r,y)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Td(r,e),r=r.sibling}function Td(e,r){var n=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Tr(r,e),Ar(e),o&4){try{Vn(3,e,e.return),Go(3,e)}catch(O){Te(e,e.return,O)}try{Vn(5,e,e.return)}catch(O){Te(e,e.return,O)}}break;case 1:Tr(r,e),Ar(e),o&512&&n!==null&&Xt(n,n.return);break;case 5:if(Tr(r,e),Ar(e),o&512&&n!==null&&Xt(n,n.return),e.flags&32){var l=e.stateNode;try{pn(l,"")}catch(O){Te(e,e.return,O)}}if(o&4&&(l=e.stateNode,l!=null)){var a=e.memoizedProps,d=n!==null?n.memoizedProps:a,p=e.type,h=e.updateQueue;if(e.updateQueue=null,h!==null)try{p==="input"&&a.type==="radio"&&a.name!=null&&ti(l,a),Rs(p,d);var y=Rs(p,a);for(d=0;d<h.length;d+=2){var b=h[d],k=h[d+1];b==="style"?di(l,k):b==="dangerouslySetInnerHTML"?ii(l,k):b==="children"?pn(l,k):se(l,b,k,y)}switch(p){case"input":Bs(l,a);break;case"textarea":si(l,a);break;case"select":var w=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!a.multiple;var P=a.value;P!=null?Pt(l,!!a.multiple,P,!1):w!==!!a.multiple&&(a.defaultValue!=null?Pt(l,!!a.multiple,a.defaultValue,!0):Pt(l,!!a.multiple,a.multiple?[]:"",!1))}l[_n]=a}catch(O){Te(e,e.return,O)}}break;case 6:if(Tr(r,e),Ar(e),o&4){if(e.stateNode===null)throw Error(i(162));l=e.stateNode,a=e.memoizedProps;try{l.nodeValue=a}catch(O){Te(e,e.return,O)}}break;case 3:if(Tr(r,e),Ar(e),o&4&&n!==null&&n.memoizedState.isDehydrated)try{bn(r.containerInfo)}catch(O){Te(e,e.return,O)}break;case 4:Tr(r,e),Ar(e);break;case 13:Tr(r,e),Ar(e),l=e.child,l.flags&8192&&(a=l.memoizedState!==null,l.stateNode.isHidden=a,!a||l.alternate!==null&&l.alternate.memoizedState!==null||(da=ze())),o&4&&Ed(e);break;case 22:if(b=n!==null&&n.memoizedState!==null,e.mode&1?(Qe=(y=Qe)||b,Tr(r,e),Qe=y):Tr(r,e),Ar(e),o&8192){if(y=e.memoizedState!==null,(e.stateNode.isHidden=y)&&!b&&(e.mode&1)!==0)for(B=e,b=e.child;b!==null;){for(k=B=b;B!==null;){switch(w=B,P=w.child,w.tag){case 0:case 11:case 14:case 15:Vn(4,w,w.return);break;case 1:Xt(w,w.return);var _=w.stateNode;if(typeof _.componentWillUnmount=="function"){o=w,n=w.return;try{r=o,_.props=r.memoizedProps,_.state=r.memoizedState,_.componentWillUnmount()}catch(O){Te(o,n,O)}}break;case 5:Xt(w,w.return);break;case 22:if(w.memoizedState!==null){Pd(k);continue}}P!==null?(P.return=w,B=P):Pd(k)}b=b.sibling}e:for(b=null,k=e;;){if(k.tag===5){if(b===null){b=k;try{l=k.stateNode,y?(a=l.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(p=k.stateNode,h=k.memoizedProps.style,d=h!=null&&h.hasOwnProperty("display")?h.display:null,p.style.display=ci("display",d))}catch(O){Te(e,e.return,O)}}}else if(k.tag===6){if(b===null)try{k.stateNode.nodeValue=y?"":k.memoizedProps}catch(O){Te(e,e.return,O)}}else if((k.tag!==22&&k.tag!==23||k.memoizedState===null||k===e)&&k.child!==null){k.child.return=k,k=k.child;continue}if(k===e)break e;for(;k.sibling===null;){if(k.return===null||k.return===e)break e;b===k&&(b=null),k=k.return}b===k&&(b=null),k.sibling.return=k.return,k=k.sibling}}break;case 19:Tr(r,e),Ar(e),o&4&&Ed(e);break;case 21:break;default:Tr(r,e),Ar(e)}}function Ar(e){var r=e.flags;if(r&2){try{e:{for(var n=e.return;n!==null;){if(kd(n)){var o=n;break e}n=n.return}throw Error(i(160))}switch(o.tag){case 5:var l=o.stateNode;o.flags&32&&(pn(l,""),o.flags&=-33);var a=Sd(e);aa(e,a,l);break;case 3:case 4:var d=o.stateNode.containerInfo,p=Sd(e);la(e,p,d);break;default:throw Error(i(161))}}catch(h){Te(e,e.return,h)}e.flags&=-3}r&4096&&(e.flags&=-4097)}function Ah(e,r,n){B=e,zd(e)}function zd(e,r,n){for(var o=(e.mode&1)!==0;B!==null;){var l=B,a=l.child;if(l.tag===22&&o){var d=l.memoizedState!==null||Qo;if(!d){var p=l.alternate,h=p!==null&&p.memoizedState!==null||Qe;p=Qo;var y=Qe;if(Qo=d,(Qe=h)&&!y)for(B=l;B!==null;)d=B,h=d.child,d.tag===22&&d.memoizedState!==null?Ld(l):h!==null?(h.return=d,B=h):Ld(l);for(;a!==null;)B=a,zd(a),a=a.sibling;B=l,Qo=p,Qe=y}Id(e)}else(l.subtreeFlags&8772)!==0&&a!==null?(a.return=l,B=a):Id(e)}}function Id(e){for(;B!==null;){var r=B;if((r.flags&8772)!==0){var n=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Qe||Go(5,r);break;case 1:var o=r.stateNode;if(r.flags&4&&!Qe)if(n===null)o.componentDidMount();else{var l=r.elementType===r.type?n.memoizedProps:Cr(r.type,n.memoizedProps);o.componentDidUpdate(l,n.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var a=r.updateQueue;a!==null&&Pc(r,a,o);break;case 3:var d=r.updateQueue;if(d!==null){if(n=null,r.child!==null)switch(r.child.tag){case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}Pc(r,d,n)}break;case 5:var p=r.stateNode;if(n===null&&r.flags&4){n=p;var h=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":h.autoFocus&&n.focus();break;case"img":h.src&&(n.src=h.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var y=r.alternate;if(y!==null){var b=y.memoizedState;if(b!==null){var k=b.dehydrated;k!==null&&bn(k)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}Qe||r.flags&512&&sa(r)}catch(w){Te(r,r.return,w)}}if(r===e){B=null;break}if(n=r.sibling,n!==null){n.return=r.return,B=n;break}B=r.return}}function Pd(e){for(;B!==null;){var r=B;if(r===e){B=null;break}var n=r.sibling;if(n!==null){n.return=r.return,B=n;break}B=r.return}}function Ld(e){for(;B!==null;){var r=B;try{switch(r.tag){case 0:case 11:case 15:var n=r.return;try{Go(4,r)}catch(h){Te(r,n,h)}break;case 1:var o=r.stateNode;if(typeof o.componentDidMount=="function"){var l=r.return;try{o.componentDidMount()}catch(h){Te(r,l,h)}}var a=r.return;try{sa(r)}catch(h){Te(r,a,h)}break;case 5:var d=r.return;try{sa(r)}catch(h){Te(r,d,h)}}}catch(h){Te(r,r.return,h)}if(r===e){B=null;break}var p=r.sibling;if(p!==null){p.return=r.return,B=p;break}B=r.return}}var Mh=Math.ceil,Yo=ee.ReactCurrentDispatcher,ia=ee.ReactCurrentOwner,gr=ee.ReactCurrentBatchConfig,de=0,Me=null,Pe=null,We=0,cr=0,Zt=tt(0),Oe=0,Jn=null,bt=0,Ko=0,ca=0,Qn=null,er=null,da=0,en=1/0,Qr=null,qo=!1,ua=null,it=null,Xo=!1,ct=null,Zo=0,Gn=0,pa=null,es=-1,rs=0;function Ke(){return(de&6)!==0?ze():es!==-1?es:es=ze()}function dt(e){return(e.mode&1)===0?1:(de&2)!==0&&We!==0?We&-We:jh.transition!==null?(rs===0&&(rs=Si()),rs):(e=ge,e!==0||(e=window.event,e=e===void 0?16:_i(e.type)),e)}function zr(e,r,n,o){if(50<Gn)throw Gn=0,pa=null,Error(i(185));vn(e,n,o),((de&2)===0||e!==Me)&&(e===Me&&((de&2)===0&&(Ko|=n),Oe===4&&ut(e,We)),rr(e,o),n===1&&de===0&&(r.mode&1)===0&&(en=ze()+500,zo&&ot()))}function rr(e,r){var n=e.callbackNode;jp(e,r);var o=co(e,e===Me?We:0);if(o===0)n!==null&&wi(n),e.callbackNode=null,e.callbackPriority=0;else if(r=o&-o,e.callbackPriority!==r){if(n!=null&&wi(n),r===1)e.tag===0?yh(_d.bind(null,e)):yc(_d.bind(null,e)),mh(function(){(de&6)===0&&ot()}),n=null;else{switch(Ci(o)){case 1:n=Vs;break;case 4:n=bi;break;case 16:n=so;break;case 536870912:n=ki;break;default:n=so}n=Wd(n,Bd.bind(null,e))}e.callbackPriority=r,e.callbackNode=n}}function Bd(e,r){if(es=-1,rs=0,(de&6)!==0)throw Error(i(327));var n=e.callbackNode;if(rn()&&e.callbackNode!==n)return null;var o=co(e,e===Me?We:0);if(o===0)return null;if((o&30)!==0||(o&e.expiredLanes)!==0||r)r=ts(e,o);else{r=o;var l=de;de|=2;var a=Ad();(Me!==e||We!==r)&&(Qr=null,en=ze()+500,St(e,r));do try{Fh();break}catch(p){Od(e,p)}while(!0);Il(),Yo.current=a,de=l,Pe!==null?r=0:(Me=null,We=0,r=Oe)}if(r!==0){if(r===2&&(l=Js(e),l!==0&&(o=l,r=ha(e,l))),r===1)throw n=Jn,St(e,0),ut(e,o),rr(e,ze()),n;if(r===6)ut(e,o);else{if(l=e.current.alternate,(o&30)===0&&!Rh(l)&&(r=ts(e,o),r===2&&(a=Js(e),a!==0&&(o=a,r=ha(e,a))),r===1))throw n=Jn,St(e,0),ut(e,o),rr(e,ze()),n;switch(e.finishedWork=l,e.finishedLanes=o,r){case 0:case 1:throw Error(i(345));case 2:Ct(e,er,Qr);break;case 3:if(ut(e,o),(o&130023424)===o&&(r=da+500-ze(),10<r)){if(co(e,0)!==0)break;if(l=e.suspendedLanes,(l&o)!==o){Ke(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=yl(Ct.bind(null,e,er,Qr),r);break}Ct(e,er,Qr);break;case 4:if(ut(e,o),(o&4194240)===o)break;for(r=e.eventTimes,l=-1;0<o;){var d=31-br(o);a=1<<d,d=r[d],d>l&&(l=d),o&=~a}if(o=l,o=ze()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*Mh(o/1960))-o,10<o){e.timeoutHandle=yl(Ct.bind(null,e,er,Qr),o);break}Ct(e,er,Qr);break;case 5:Ct(e,er,Qr);break;default:throw Error(i(329))}}}return rr(e,ze()),e.callbackNode===n?Bd.bind(null,e):null}function ha(e,r){var n=Qn;return e.current.memoizedState.isDehydrated&&(St(e,r).flags|=256),e=ts(e,r),e!==2&&(r=er,er=n,r!==null&&fa(r)),e}function fa(e){er===null?er=e:er.push.apply(er,e)}function Rh(e){for(var r=e;;){if(r.flags&16384){var n=r.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var o=0;o<n.length;o++){var l=n[o],a=l.getSnapshot;l=l.value;try{if(!kr(a(),l))return!1}catch{return!1}}}if(n=r.child,r.subtreeFlags&16384&&n!==null)n.return=r,r=n;else{if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function ut(e,r){for(r&=~ca,r&=~Ko,e.suspendedLanes|=r,e.pingedLanes&=~r,e=e.expirationTimes;0<r;){var n=31-br(r),o=1<<n;e[n]=-1,r&=~o}}function _d(e){if((de&6)!==0)throw Error(i(327));rn();var r=co(e,0);if((r&1)===0)return rr(e,ze()),null;var n=ts(e,r);if(e.tag!==0&&n===2){var o=Js(e);o!==0&&(r=o,n=ha(e,o))}if(n===1)throw n=Jn,St(e,0),ut(e,r),rr(e,ze()),n;if(n===6)throw Error(i(345));return e.finishedWork=e.current.alternate,e.finishedLanes=r,Ct(e,er,Qr),rr(e,ze()),null}function ma(e,r){var n=de;de|=1;try{return e(r)}finally{de=n,de===0&&(en=ze()+500,zo&&ot())}}function kt(e){ct!==null&&ct.tag===0&&(de&6)===0&&rn();var r=de;de|=1;var n=gr.transition,o=ge;try{if(gr.transition=null,ge=1,e)return e()}finally{ge=o,gr.transition=n,de=r,(de&6)===0&&ot()}}function xa(){cr=Zt.current,Ne(Zt)}function St(e,r){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,fh(n)),Pe!==null)for(n=Pe.return;n!==null;){var o=n;switch(Sl(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&Eo();break;case 3:Kt(),Ne(qe),Ne($e),Rl();break;case 5:Al(o);break;case 4:Kt();break;case 13:Ne(Ce);break;case 19:Ne(Ce);break;case 10:Pl(o.type._context);break;case 22:case 23:xa()}n=n.return}if(Me=e,Pe=e=pt(e.current,null),We=cr=r,Oe=0,Jn=null,ca=Ko=bt=0,er=Qn=null,jt!==null){for(r=0;r<jt.length;r++)if(n=jt[r],o=n.interleaved,o!==null){n.interleaved=null;var l=o.next,a=n.pending;if(a!==null){var d=a.next;a.next=l,o.next=d}n.pending=o}jt=null}return e}function Od(e,r){do{var n=Pe;try{if(Il(),Do.current=Uo,Fo){for(var o=Ee.memoizedState;o!==null;){var l=o.queue;l!==null&&(l.pending=null),o=o.next}Fo=!1}if(wt=0,Ae=_e=Ee=null,Fn=!1,Hn=0,ia.current=null,n===null||n.return===null){Oe=1,Jn=r,Pe=null;break}e:{var a=e,d=n.return,p=n,h=r;if(r=We,p.flags|=32768,h!==null&&typeof h=="object"&&typeof h.then=="function"){var y=h,b=p,k=b.tag;if((b.mode&1)===0&&(k===0||k===11||k===15)){var w=b.alternate;w?(b.updateQueue=w.updateQueue,b.memoizedState=w.memoizedState,b.lanes=w.lanes):(b.updateQueue=null,b.memoizedState=null)}var P=ld(d);if(P!==null){P.flags&=-257,ad(P,d,p,a,r),P.mode&1&&sd(a,y,r),r=P,h=y;var _=r.updateQueue;if(_===null){var O=new Set;O.add(h),r.updateQueue=O}else _.add(h);break e}else{if((r&1)===0){sd(a,y,r),ga();break e}h=Error(i(426))}}else if(be&&p.mode&1){var Ie=ld(d);if(Ie!==null){(Ie.flags&65536)===0&&(Ie.flags|=256),ad(Ie,d,p,a,r),Tl(qt(h,p));break e}}a=h=qt(h,p),Oe!==4&&(Oe=2),Qn===null?Qn=[a]:Qn.push(a),a=d;do{switch(a.tag){case 3:a.flags|=65536,r&=-r,a.lanes|=r;var x=nd(a,h,r);Ic(a,x);break e;case 1:p=h;var f=a.type,v=a.stateNode;if((a.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(it===null||!it.has(v)))){a.flags|=65536,r&=-r,a.lanes|=r;var S=od(a,p,r);Ic(a,S);break e}}a=a.return}while(a!==null)}Rd(n)}catch(A){r=A,Pe===n&&n!==null&&(Pe=n=n.return);continue}break}while(!0)}function Ad(){var e=Yo.current;return Yo.current=Uo,e===null?Uo:e}function ga(){(Oe===0||Oe===3||Oe===2)&&(Oe=4),Me===null||(bt&268435455)===0&&(Ko&268435455)===0||ut(Me,We)}function ts(e,r){var n=de;de|=2;var o=Ad();(Me!==e||We!==r)&&(Qr=null,St(e,r));do try{Dh();break}catch(l){Od(e,l)}while(!0);if(Il(),de=n,Yo.current=o,Pe!==null)throw Error(i(261));return Me=null,We=0,Oe}function Dh(){for(;Pe!==null;)Md(Pe)}function Fh(){for(;Pe!==null&&!up();)Md(Pe)}function Md(e){var r=Hd(e.alternate,e,cr);e.memoizedProps=e.pendingProps,r===null?Rd(e):Pe=r,ia.current=null}function Rd(e){var r=e;do{var n=r.alternate;if(e=r.return,(r.flags&32768)===0){if(n=Lh(n,r,cr),n!==null){Pe=n;return}}else{if(n=Bh(n,r),n!==null){n.flags&=32767,Pe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Oe=6,Pe=null;return}}if(r=r.sibling,r!==null){Pe=r;return}Pe=r=e}while(r!==null);Oe===0&&(Oe=5)}function Ct(e,r,n){var o=ge,l=gr.transition;try{gr.transition=null,ge=1,Hh(e,r,n,o)}finally{gr.transition=l,ge=o}return null}function Hh(e,r,n,o){do rn();while(ct!==null);if((de&6)!==0)throw Error(i(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(Np(e,a),e===Me&&(Pe=Me=null,We=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Xo||(Xo=!0,Wd(so,function(){return rn(),null})),a=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||a){a=gr.transition,gr.transition=null;var d=ge;ge=1;var p=de;de|=4,ia.current=null,Oh(e,n),Td(n,e),ah(gl),ho=!!xl,gl=xl=null,e.current=n,Ah(n),pp(),de=p,ge=d,gr.transition=a}else e.current=n;if(Xo&&(Xo=!1,ct=e,Zo=l),a=e.pendingLanes,a===0&&(it=null),mp(n.stateNode),rr(e,ze()),r!==null)for(o=e.onRecoverableError,n=0;n<r.length;n++)l=r[n],o(l.value,{componentStack:l.stack,digest:l.digest});if(qo)throw qo=!1,e=ua,ua=null,e;return(Zo&1)!==0&&e.tag!==0&&rn(),a=e.pendingLanes,(a&1)!==0?e===pa?Gn++:(Gn=0,pa=e):Gn=0,ot(),null}function rn(){if(ct!==null){var e=Ci(Zo),r=gr.transition,n=ge;try{if(gr.transition=null,ge=16>e?16:e,ct===null)var o=!1;else{if(e=ct,ct=null,Zo=0,(de&6)!==0)throw Error(i(331));var l=de;for(de|=4,B=e.current;B!==null;){var a=B,d=a.child;if((B.flags&16)!==0){var p=a.deletions;if(p!==null){for(var h=0;h<p.length;h++){var y=p[h];for(B=y;B!==null;){var b=B;switch(b.tag){case 0:case 11:case 15:Vn(8,b,a)}var k=b.child;if(k!==null)k.return=b,B=k;else for(;B!==null;){b=B;var w=b.sibling,P=b.return;if(bd(b),b===y){B=null;break}if(w!==null){w.return=P,B=w;break}B=P}}}var _=a.alternate;if(_!==null){var O=_.child;if(O!==null){_.child=null;do{var Ie=O.sibling;O.sibling=null,O=Ie}while(O!==null)}}B=a}}if((a.subtreeFlags&2064)!==0&&d!==null)d.return=a,B=d;else e:for(;B!==null;){if(a=B,(a.flags&2048)!==0)switch(a.tag){case 0:case 11:case 15:Vn(9,a,a.return)}var x=a.sibling;if(x!==null){x.return=a.return,B=x;break e}B=a.return}}var f=e.current;for(B=f;B!==null;){d=B;var v=d.child;if((d.subtreeFlags&2064)!==0&&v!==null)v.return=d,B=v;else e:for(d=f;B!==null;){if(p=B,(p.flags&2048)!==0)try{switch(p.tag){case 0:case 11:case 15:Go(9,p)}}catch(A){Te(p,p.return,A)}if(p===d){B=null;break e}var S=p.sibling;if(S!==null){S.return=p.return,B=S;break e}B=p.return}}if(de=l,ot(),Lr&&typeof Lr.onPostCommitFiberRoot=="function")try{Lr.onPostCommitFiberRoot(lo,e)}catch{}o=!0}return o}finally{ge=n,gr.transition=r}}return!1}function Dd(e,r,n){r=qt(n,r),r=nd(e,r,1),e=lt(e,r,1),r=Ke(),e!==null&&(vn(e,1,r),rr(e,r))}function Te(e,r,n){if(e.tag===3)Dd(e,e,n);else for(;r!==null;){if(r.tag===3){Dd(r,e,n);break}else if(r.tag===1){var o=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(it===null||!it.has(o))){e=qt(n,e),e=od(r,e,1),r=lt(r,e,1),e=Ke(),r!==null&&(vn(r,1,e),rr(r,e));break}}r=r.return}}function Wh(e,r,n){var o=e.pingCache;o!==null&&o.delete(r),r=Ke(),e.pingedLanes|=e.suspendedLanes&n,Me===e&&(We&n)===n&&(Oe===4||Oe===3&&(We&130023424)===We&&500>ze()-da?St(e,0):ca|=n),rr(e,r)}function Fd(e,r){r===0&&((e.mode&1)===0?r=1:(r=io,io<<=1,(io&130023424)===0&&(io=4194304)));var n=Ke();e=$r(e,r),e!==null&&(vn(e,r,n),rr(e,n))}function Uh(e){var r=e.memoizedState,n=0;r!==null&&(n=r.retryLane),Fd(e,n)}function $h(e,r){var n=0;switch(e.tag){case 13:var o=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(i(314))}o!==null&&o.delete(r),Fd(e,n)}var Hd;Hd=function(e,r,n){if(e!==null)if(e.memoizedProps!==r.pendingProps||qe.current)Ze=!0;else{if((e.lanes&n)===0&&(r.flags&128)===0)return Ze=!1,Ph(e,r,n);Ze=(e.flags&131072)!==0}else Ze=!1,be&&(r.flags&1048576)!==0&&jc(r,Po,r.index);switch(r.lanes=0,r.tag){case 2:var o=r.type;Jo(e,r),e=r.pendingProps;var l=Ut(r,$e.current);Yt(r,n),l=Hl(null,r,o,e,l,n);var a=Wl();return r.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Xe(o)?(a=!0,To(r)):a=!1,r.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,_l(r),l.updater=$o,r.stateNode=l,l._reactInternals=r,Gl(r,o,e,n),r=Xl(null,r,o,!0,a,n)):(r.tag=0,be&&a&&kl(r),Ye(null,r,l,n),r=r.child),r;case 16:o=r.elementType;e:{switch(Jo(e,r),e=r.pendingProps,l=o._init,o=l(o._payload),r.type=o,l=r.tag=Jh(o),e=Cr(o,e),l){case 0:r=ql(null,r,o,e,n);break e;case 1:r=hd(null,r,o,e,n);break e;case 11:r=id(null,r,o,e,n);break e;case 14:r=cd(null,r,o,Cr(o.type,e),n);break e}throw Error(i(306,o,""))}return r;case 0:return o=r.type,l=r.pendingProps,l=r.elementType===o?l:Cr(o,l),ql(e,r,o,l,n);case 1:return o=r.type,l=r.pendingProps,l=r.elementType===o?l:Cr(o,l),hd(e,r,o,l,n);case 3:e:{if(fd(r),e===null)throw Error(i(387));o=r.pendingProps,a=r.memoizedState,l=a.element,zc(e,r),Mo(r,o,null,n);var d=r.memoizedState;if(o=d.element,a.isDehydrated)if(a={element:o,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},r.updateQueue.baseState=a,r.memoizedState=a,r.flags&256){l=qt(Error(i(423)),r),r=md(e,r,o,n,l);break e}else if(o!==l){l=qt(Error(i(424)),r),r=md(e,r,o,n,l);break e}else for(ir=rt(r.stateNode.containerInfo.firstChild),ar=r,be=!0,Sr=null,n=Ec(r,null,o,n),r.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Jt(),o===l){r=Jr(e,r,n);break e}Ye(e,r,o,n)}r=r.child}return r;case 5:return Lc(r),e===null&&El(r),o=r.type,l=r.pendingProps,a=e!==null?e.memoizedProps:null,d=l.children,vl(o,l)?d=null:a!==null&&vl(o,a)&&(r.flags|=32),pd(e,r),Ye(e,r,d,n),r.child;case 6:return e===null&&El(r),null;case 13:return xd(e,r,n);case 4:return Ol(r,r.stateNode.containerInfo),o=r.pendingProps,e===null?r.child=Qt(r,null,o,n):Ye(e,r,o,n),r.child;case 11:return o=r.type,l=r.pendingProps,l=r.elementType===o?l:Cr(o,l),id(e,r,o,l,n);case 7:return Ye(e,r,r.pendingProps,n),r.child;case 8:return Ye(e,r,r.pendingProps.children,n),r.child;case 12:return Ye(e,r,r.pendingProps.children,n),r.child;case 10:e:{if(o=r.type._context,l=r.pendingProps,a=r.memoizedProps,d=l.value,ye(_o,o._currentValue),o._currentValue=d,a!==null)if(kr(a.value,d)){if(a.children===l.children&&!qe.current){r=Jr(e,r,n);break e}}else for(a=r.child,a!==null&&(a.return=r);a!==null;){var p=a.dependencies;if(p!==null){d=a.child;for(var h=p.firstContext;h!==null;){if(h.context===o){if(a.tag===1){h=Vr(-1,n&-n),h.tag=2;var y=a.updateQueue;if(y!==null){y=y.shared;var b=y.pending;b===null?h.next=h:(h.next=b.next,b.next=h),y.pending=h}}a.lanes|=n,h=a.alternate,h!==null&&(h.lanes|=n),Ll(a.return,n,r),p.lanes|=n;break}h=h.next}}else if(a.tag===10)d=a.type===r.type?null:a.child;else if(a.tag===18){if(d=a.return,d===null)throw Error(i(341));d.lanes|=n,p=d.alternate,p!==null&&(p.lanes|=n),Ll(d,n,r),d=a.sibling}else d=a.child;if(d!==null)d.return=a;else for(d=a;d!==null;){if(d===r){d=null;break}if(a=d.sibling,a!==null){a.return=d.return,d=a;break}d=d.return}a=d}Ye(e,r,l.children,n),r=r.child}return r;case 9:return l=r.type,o=r.pendingProps.children,Yt(r,n),l=mr(l),o=o(l),r.flags|=1,Ye(e,r,o,n),r.child;case 14:return o=r.type,l=Cr(o,r.pendingProps),l=Cr(o.type,l),cd(e,r,o,l,n);case 15:return dd(e,r,r.type,r.pendingProps,n);case 17:return o=r.type,l=r.pendingProps,l=r.elementType===o?l:Cr(o,l),Jo(e,r),r.tag=1,Xe(o)?(e=!0,To(r)):e=!1,Yt(r,n),rd(r,o,l),Gl(r,o,l,n),Xl(null,r,o,!0,e,n);case 19:return vd(e,r,n);case 22:return ud(e,r,n)}throw Error(i(156,r.tag))};function Wd(e,r){return Ni(e,r)}function Vh(e,r,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vr(e,r,n,o){return new Vh(e,r,n,o)}function va(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Jh(e){if(typeof e=="function")return va(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ur)return 11;if(e===pr)return 14}return 2}function pt(e,r){var n=e.alternate;return n===null?(n=vr(e.tag,r,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=r,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,r=e.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ns(e,r,n,o,l,a){var d=2;if(o=e,typeof e=="function")va(e)&&(d=1);else if(typeof e=="string")d=5;else e:switch(e){case W:return Et(n.children,l,a,r);case Be:d=8,l|=8;break;case or:return e=vr(12,n,r,l|2),e.elementType=or,e.lanes=a,e;case Ge:return e=vr(13,n,r,l),e.elementType=Ge,e.lanes=a,e;case sr:return e=vr(19,n,r,l),e.elementType=sr,e.lanes=a,e;case ve:return os(n,l,a,r);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Nr:d=10;break e;case Rr:d=9;break e;case ur:d=11;break e;case pr:d=14;break e;case Ue:d=16,o=null;break e}throw Error(i(130,e==null?e:typeof e,""))}return r=vr(d,n,r,l),r.elementType=e,r.type=o,r.lanes=a,r}function Et(e,r,n,o){return e=vr(7,e,o,r),e.lanes=n,e}function os(e,r,n,o){return e=vr(22,e,o,r),e.elementType=ve,e.lanes=n,e.stateNode={isHidden:!1},e}function ya(e,r,n){return e=vr(6,e,null,r),e.lanes=n,e}function ja(e,r,n){return r=vr(4,e.children!==null?e.children:[],e.key,r),r.lanes=n,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}function Qh(e,r,n,o,l){this.tag=r,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qs(0),this.expirationTimes=Qs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qs(0),this.identifierPrefix=o,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Na(e,r,n,o,l,a,d,p,h){return e=new Qh(e,r,n,p,h),r===1?(r=1,a===!0&&(r|=8)):r=0,a=vr(3,null,null,r),e.current=a,a.stateNode=e,a.memoizedState={element:o,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},_l(a),e}function Gh(e,r,n){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Y,key:o==null?null:""+o,children:e,containerInfo:r,implementation:n}}function Ud(e){if(!e)return nt;e=e._reactInternals;e:{if(mt(e)!==e||e.tag!==1)throw Error(i(170));var r=e;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Xe(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(i(171))}if(e.tag===1){var n=e.type;if(Xe(n))return gc(e,n,r)}return r}function $d(e,r,n,o,l,a,d,p,h){return e=Na(n,o,!0,e,l,a,d,p,h),e.context=Ud(null),n=e.current,o=Ke(),l=dt(n),a=Vr(o,l),a.callback=r!=null?r:null,lt(n,a,l),e.current.lanes=l,vn(e,l,o),rr(e,o),e}function ss(e,r,n,o){var l=r.current,a=Ke(),d=dt(l);return n=Ud(n),r.context===null?r.context=n:r.pendingContext=n,r=Vr(a,d),r.payload={element:e},o=o===void 0?null:o,o!==null&&(r.callback=o),e=lt(l,r,d),e!==null&&(zr(e,l,d,a),Ao(e,l,d)),d}function ls(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Vd(e,r){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<r?n:r}}function wa(e,r){Vd(e,r),(e=e.alternate)&&Vd(e,r)}function Yh(){return null}var Jd=typeof reportError=="function"?reportError:function(e){console.error(e)};function ba(e){this._internalRoot=e}as.prototype.render=ba.prototype.render=function(e){var r=this._internalRoot;if(r===null)throw Error(i(409));ss(e,r,null,null)},as.prototype.unmount=ba.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var r=e.containerInfo;kt(function(){ss(null,e,null,null)}),r[Fr]=null}};function as(e){this._internalRoot=e}as.prototype.unstable_scheduleHydration=function(e){if(e){var r=zi();e={blockedOn:null,target:e,priority:r};for(var n=0;n<Xr.length&&r!==0&&r<Xr[n].priority;n++);Xr.splice(n,0,e),n===0&&Li(e)}};function ka(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function is(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Qd(){}function Kh(e,r,n,o,l){if(l){if(typeof o=="function"){var a=o;o=function(){var y=ls(d);a.call(y)}}var d=$d(r,o,e,0,null,!1,!1,"",Qd);return e._reactRootContainer=d,e[Fr]=d.current,Ln(e.nodeType===8?e.parentNode:e),kt(),d}for(;l=e.lastChild;)e.removeChild(l);if(typeof o=="function"){var p=o;o=function(){var y=ls(h);p.call(y)}}var h=Na(e,0,!1,null,null,!1,!1,"",Qd);return e._reactRootContainer=h,e[Fr]=h.current,Ln(e.nodeType===8?e.parentNode:e),kt(function(){ss(r,h,n,o)}),h}function cs(e,r,n,o,l){var a=n._reactRootContainer;if(a){var d=a;if(typeof l=="function"){var p=l;l=function(){var h=ls(d);p.call(h)}}ss(r,d,e,l)}else d=Kh(n,r,e,l,o);return ls(d)}Ei=function(e){switch(e.tag){case 3:var r=e.stateNode;if(r.current.memoizedState.isDehydrated){var n=gn(r.pendingLanes);n!==0&&(Gs(r,n|1),rr(r,ze()),(de&6)===0&&(en=ze()+500,ot()))}break;case 13:kt(function(){var o=$r(e,1);if(o!==null){var l=Ke();zr(o,e,1,l)}}),wa(e,1)}},Ys=function(e){if(e.tag===13){var r=$r(e,134217728);if(r!==null){var n=Ke();zr(r,e,134217728,n)}wa(e,134217728)}},Ti=function(e){if(e.tag===13){var r=dt(e),n=$r(e,r);if(n!==null){var o=Ke();zr(n,e,r,o)}wa(e,r)}},zi=function(){return ge},Ii=function(e,r){var n=ge;try{return ge=e,r()}finally{ge=n}},Hs=function(e,r,n){switch(r){case"input":if(Bs(e,n),r=n.name,n.type==="radio"&&r!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<n.length;r++){var o=n[r];if(o!==e&&o.form===e.form){var l=Co(o);if(!l)throw Error(i(90));wr(o),Bs(o,l)}}}break;case"textarea":si(e,n);break;case"select":r=n.value,r!=null&&Pt(e,!!n.multiple,r,!1)}},fi=ma,mi=kt;var qh={usingClientEntryPoint:!1,Events:[On,Ht,Co,pi,hi,ma]},Yn={findFiberByHostInstance:xt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Xh={bundleType:Yn.bundleType,version:Yn.version,rendererPackageName:Yn.rendererPackageName,rendererConfig:Yn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ee.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=yi(e),e===null?null:e.stateNode},findFiberByHostInstance:Yn.findFiberByHostInstance||Yh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var ds=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ds.isDisabled&&ds.supportsFiber)try{lo=ds.inject(Xh),Lr=ds}catch{}}return tr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qh,tr.createPortal=function(e,r){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ka(r))throw Error(i(200));return Gh(e,r,null,n)},tr.createRoot=function(e,r){if(!ka(e))throw Error(i(299));var n=!1,o="",l=Jd;return r!=null&&(r.unstable_strictMode===!0&&(n=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(l=r.onRecoverableError)),r=Na(e,1,!1,null,null,n,!1,o,l),e[Fr]=r.current,Ln(e.nodeType===8?e.parentNode:e),new ba(r)},tr.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var r=e._reactInternals;if(r===void 0)throw typeof e.render=="function"?Error(i(188)):(e=Object.keys(e).join(","),Error(i(268,e)));return e=yi(r),e=e===null?null:e.stateNode,e},tr.flushSync=function(e){return kt(e)},tr.hydrate=function(e,r,n){if(!is(r))throw Error(i(200));return cs(null,e,r,!0,n)},tr.hydrateRoot=function(e,r,n){if(!ka(e))throw Error(i(405));var o=n!=null&&n.hydratedSources||null,l=!1,a="",d=Jd;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(d=n.onRecoverableError)),r=$d(r,null,e,1,n!=null?n:null,l,!1,a,d),e[Fr]=r.current,Ln(e),o)for(e=0;e<o.length;e++)n=o[e],l=n._getVersion,l=l(n._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[n,l]:r.mutableSourceEagerHydrationData.push(n,l);return new as(r)},tr.render=function(e,r,n){if(!is(r))throw Error(i(200));return cs(null,e,r,!1,n)},tr.unmountComponentAtNode=function(e){if(!is(e))throw Error(i(40));return e._reactRootContainer?(kt(function(){cs(null,null,e,!1,function(){e._reactRootContainer=null,e[Fr]=null})}),!0):!1},tr.unstable_batchedUpdates=ma,tr.unstable_renderSubtreeIntoContainer=function(e,r,n,o){if(!is(n))throw Error(i(200));if(e==null||e._reactInternals===void 0)throw Error(i(38));return cs(e,r,n,!1,o)},tr.version="18.3.1-next-f1338f8080-20240426",tr}var ru;function af(){if(ru)return Ea.exports;ru=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(c){console.error(c)}}return s(),Ea.exports=lf(),Ea.exports}var tu;function cf(){if(tu)return us;tu=1;var s=af();return us.createRoot=s.createRoot,us.hydrateRoot=s.hydrateRoot,us}var df=cf(),ae=Ga();const yr=ef(ae);var nr=function(){return nr=Object.assign||function(c){for(var i,u=1,g=arguments.length;u<g;u++){i=arguments[u];for(var j in i)Object.prototype.hasOwnProperty.call(i,j)&&(c[j]=i[j])}return c},nr.apply(this,arguments)};function ys(s,c,i){if(i||arguments.length===2)for(var u=0,g=c.length,j;u<g;u++)(j||!(u in c))&&(j||(j=Array.prototype.slice.call(c,0,u)),j[u]=c[u]);return s.concat(j||Array.prototype.slice.call(c))}var we="-ms-",Xn="-moz-",xe="-webkit-",ku="comm",Cs="rule",Ya="decl",uf="@import",Su="@keyframes",pf="@layer",Cu=Math.abs,Ka=String.fromCharCode,Ma=Object.assign;function hf(s,c){return De(s,0)^45?(((c<<2^De(s,0))<<2^De(s,1))<<2^De(s,2))<<2^De(s,3):0}function Eu(s){return s.trim()}function Gr(s,c){return(s=c.exec(s))?s[0]:s}function Z(s,c,i){return s.replace(c,i)}function fs(s,c,i){return s.indexOf(c,i)}function De(s,c){return s.charCodeAt(c)|0}function on(s,c,i){return s.slice(c,i)}function Mr(s){return s.length}function Tu(s){return s.length}function qn(s,c){return c.push(s),s}function ff(s,c){return s.map(c).join("")}function nu(s,c){return s.filter(function(i){return!Gr(i,c)})}var Es=1,sn=1,zu=0,jr=0,Le=0,dn="";function Ts(s,c,i,u,g,j,C,L){return{value:s,root:c,parent:i,type:u,props:g,children:j,line:Es,column:sn,length:C,return:"",siblings:L}}function ft(s,c){return Ma(Ts("",null,null,"",null,null,0,s.siblings),s,{length:-s.length},c)}function tn(s){for(;s.root;)s=ft(s.root,{children:[s]});qn(s,s.siblings)}function mf(){return Le}function xf(){return Le=jr>0?De(dn,--jr):0,sn--,Le===10&&(sn=1,Es--),Le}function Ir(){return Le=jr<zu?De(dn,jr++):0,sn++,Le===10&&(sn=1,Es++),Le}function zt(){return De(dn,jr)}function ms(){return jr}function zs(s,c){return on(dn,s,c)}function Ra(s){switch(s){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function gf(s){return Es=sn=1,zu=Mr(dn=s),jr=0,[]}function vf(s){return dn="",s}function Ia(s){return Eu(zs(jr-1,Da(s===91?s+2:s===40?s+1:s)))}function yf(s){for(;(Le=zt())&&Le<33;)Ir();return Ra(s)>2||Ra(Le)>3?"":" "}function jf(s,c){for(;--c&&Ir()&&!(Le<48||Le>102||Le>57&&Le<65||Le>70&&Le<97););return zs(s,ms()+(c<6&&zt()==32&&Ir()==32))}function Da(s){for(;Ir();)switch(Le){case s:return jr;case 34:case 39:s!==34&&s!==39&&Da(Le);break;case 40:s===41&&Da(s);break;case 92:Ir();break}return jr}function Nf(s,c){for(;Ir()&&s+Le!==57;)if(s+Le===84&&zt()===47)break;return"/*"+zs(c,jr-1)+"*"+Ka(s===47?s:Ir())}function wf(s){for(;!Ra(zt());)Ir();return zs(s,jr)}function bf(s){return vf(xs("",null,null,null,[""],s=gf(s),0,[0],s))}function xs(s,c,i,u,g,j,C,L,E){for(var Q=0,V=0,R=C,D=0,G=0,oe=0,J=1,q=1,me=1,ce=0,se="",ee=g,he=j,Y=u,W=se;q;)switch(oe=ce,ce=Ir()){case 40:if(oe!=108&&De(W,R-1)==58){fs(W+=Z(Ia(ce),"&","&\f"),"&\f",Cu(Q?L[Q-1]:0))!=-1&&(me=-1);break}case 34:case 39:case 91:W+=Ia(ce);break;case 9:case 10:case 13:case 32:W+=yf(oe);break;case 92:W+=jf(ms()-1,7);continue;case 47:switch(zt()){case 42:case 47:qn(kf(Nf(Ir(),ms()),c,i,E),E);break;default:W+="/"}break;case 123*J:L[Q++]=Mr(W)*me;case 125*J:case 59:case 0:switch(ce){case 0:case 125:q=0;case 59+V:me==-1&&(W=Z(W,/\f/g,"")),G>0&&Mr(W)-R&&qn(G>32?su(W+";",u,i,R-1,E):su(Z(W," ","")+";",u,i,R-2,E),E);break;case 59:W+=";";default:if(qn(Y=ou(W,c,i,Q,V,g,L,se,ee=[],he=[],R,j),j),ce===123)if(V===0)xs(W,c,Y,Y,ee,j,R,L,he);else switch(D===99&&De(W,3)===110?100:D){case 100:case 108:case 109:case 115:xs(s,Y,Y,u&&qn(ou(s,Y,Y,0,0,g,L,se,g,ee=[],R,he),he),g,he,R,L,u?ee:he);break;default:xs(W,Y,Y,Y,[""],he,0,L,he)}}Q=V=G=0,J=me=1,se=W="",R=C;break;case 58:R=1+Mr(W),G=oe;default:if(J<1){if(ce==123)--J;else if(ce==125&&J++==0&&xf()==125)continue}switch(W+=Ka(ce),ce*J){case 38:me=V>0?1:(W+="\f",-1);break;case 44:L[Q++]=(Mr(W)-1)*me,me=1;break;case 64:zt()===45&&(W+=Ia(Ir())),D=zt(),V=R=Mr(se=W+=wf(ms())),ce++;break;case 45:oe===45&&Mr(W)==2&&(J=0)}}return j}function ou(s,c,i,u,g,j,C,L,E,Q,V,R){for(var D=g-1,G=g===0?j:[""],oe=Tu(G),J=0,q=0,me=0;J<u;++J)for(var ce=0,se=on(s,D+1,D=Cu(q=C[J])),ee=s;ce<oe;++ce)(ee=Eu(q>0?G[ce]+" "+se:Z(se,/&\f/g,G[ce])))&&(E[me++]=ee);return Ts(s,c,i,g===0?Cs:L,E,Q,V,R)}function kf(s,c,i,u){return Ts(s,c,i,ku,Ka(mf()),on(s,2,-2),0,u)}function su(s,c,i,u,g){return Ts(s,c,i,Ya,on(s,0,u),on(s,u+1,-1),u,g)}function Iu(s,c,i){switch(hf(s,c)){case 5103:return xe+"print-"+s+s;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return xe+s+s;case 4789:return Xn+s+s;case 5349:case 4246:case 4810:case 6968:case 2756:return xe+s+Xn+s+we+s+s;case 5936:switch(De(s,c+11)){case 114:return xe+s+we+Z(s,/[svh]\w+-[tblr]{2}/,"tb")+s;case 108:return xe+s+we+Z(s,/[svh]\w+-[tblr]{2}/,"tb-rl")+s;case 45:return xe+s+we+Z(s,/[svh]\w+-[tblr]{2}/,"lr")+s}case 6828:case 4268:case 2903:return xe+s+we+s+s;case 6165:return xe+s+we+"flex-"+s+s;case 5187:return xe+s+Z(s,/(\w+).+(:[^]+)/,xe+"box-$1$2"+we+"flex-$1$2")+s;case 5443:return xe+s+we+"flex-item-"+Z(s,/flex-|-self/g,"")+(Gr(s,/flex-|baseline/)?"":we+"grid-row-"+Z(s,/flex-|-self/g,""))+s;case 4675:return xe+s+we+"flex-line-pack"+Z(s,/align-content|flex-|-self/g,"")+s;case 5548:return xe+s+we+Z(s,"shrink","negative")+s;case 5292:return xe+s+we+Z(s,"basis","preferred-size")+s;case 6060:return xe+"box-"+Z(s,"-grow","")+xe+s+we+Z(s,"grow","positive")+s;case 4554:return xe+Z(s,/([^-])(transform)/g,"$1"+xe+"$2")+s;case 6187:return Z(Z(Z(s,/(zoom-|grab)/,xe+"$1"),/(image-set)/,xe+"$1"),s,"")+s;case 5495:case 3959:return Z(s,/(image-set\([^]*)/,xe+"$1$`$1");case 4968:return Z(Z(s,/(.+:)(flex-)?(.*)/,xe+"box-pack:$3"+we+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+xe+s+s;case 4200:if(!Gr(s,/flex-|baseline/))return we+"grid-column-align"+on(s,c)+s;break;case 2592:case 3360:return we+Z(s,"template-","")+s;case 4384:case 3616:return i&&i.some(function(u,g){return c=g,Gr(u.props,/grid-\w+-end/)})?~fs(s+(i=i[c].value),"span",0)?s:we+Z(s,"-start","")+s+we+"grid-row-span:"+(~fs(i,"span",0)?Gr(i,/\d+/):+Gr(i,/\d+/)-+Gr(s,/\d+/))+";":we+Z(s,"-start","")+s;case 4896:case 4128:return i&&i.some(function(u){return Gr(u.props,/grid-\w+-start/)})?s:we+Z(Z(s,"-end","-span"),"span ","")+s;case 4095:case 3583:case 4068:case 2532:return Z(s,/(.+)-inline(.+)/,xe+"$1$2")+s;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Mr(s)-1-c>6)switch(De(s,c+1)){case 109:if(De(s,c+4)!==45)break;case 102:return Z(s,/(.+:)(.+)-([^]+)/,"$1"+xe+"$2-$3$1"+Xn+(De(s,c+3)==108?"$3":"$2-$3"))+s;case 115:return~fs(s,"stretch",0)?Iu(Z(s,"stretch","fill-available"),c,i)+s:s}break;case 5152:case 5920:return Z(s,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(u,g,j,C,L,E,Q){return we+g+":"+j+Q+(C?we+g+"-span:"+(L?E:+E-+j)+Q:"")+s});case 4949:if(De(s,c+6)===121)return Z(s,":",":"+xe)+s;break;case 6444:switch(De(s,De(s,14)===45?18:11)){case 120:return Z(s,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+xe+(De(s,14)===45?"inline-":"")+"box$3$1"+xe+"$2$3$1"+we+"$2box$3")+s;case 100:return Z(s,":",":"+we)+s}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Z(s,"scroll-","scroll-snap-")+s}return s}function js(s,c){for(var i="",u=0;u<s.length;u++)i+=c(s[u],u,s,c)||"";return i}function Sf(s,c,i,u){switch(s.type){case pf:if(s.children.length)break;case uf:case Ya:return s.return=s.return||s.value;case ku:return"";case Su:return s.return=s.value+"{"+js(s.children,u)+"}";case Cs:if(!Mr(s.value=s.props.join(",")))return""}return Mr(i=js(s.children,u))?s.return=s.value+"{"+i+"}":""}function Cf(s){var c=Tu(s);return function(i,u,g,j){for(var C="",L=0;L<c;L++)C+=s[L](i,u,g,j)||"";return C}}function Ef(s){return function(c){c.root||(c=c.return)&&s(c)}}function Tf(s,c,i,u){if(s.length>-1&&!s.return)switch(s.type){case Ya:s.return=Iu(s.value,s.length,i);return;case Su:return js([ft(s,{value:Z(s.value,"@","@"+xe)})],u);case Cs:if(s.length)return ff(i=s.props,function(g){switch(Gr(g,u=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":tn(ft(s,{props:[Z(g,/:(read-\w+)/,":"+Xn+"$1")]})),tn(ft(s,{props:[g]})),Ma(s,{props:nu(i,u)});break;case"::placeholder":tn(ft(s,{props:[Z(g,/:(plac\w+)/,":"+xe+"input-$1")]})),tn(ft(s,{props:[Z(g,/:(plac\w+)/,":"+Xn+"$1")]})),tn(ft(s,{props:[Z(g,/:(plac\w+)/,we+"input-$1")]})),tn(ft(s,{props:[g]})),Ma(s,{props:nu(i,u)});break}return""})}}var zf={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},dr={},ln=typeof process!="undefined"&&dr!==void 0&&(dr.REACT_APP_SC_ATTR||dr.SC_ATTR)||"data-styled",Pu="active",Lu="data-styled-version",Is="6.1.18",qa=`/*!sc*/
`,Ns=typeof window!="undefined"&&typeof document!="undefined",If=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&dr!==void 0&&dr.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&dr.REACT_APP_SC_DISABLE_SPEEDY!==""?dr.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&dr.REACT_APP_SC_DISABLE_SPEEDY:typeof process!="undefined"&&dr!==void 0&&dr.SC_DISABLE_SPEEDY!==void 0&&dr.SC_DISABLE_SPEEDY!==""&&dr.SC_DISABLE_SPEEDY!=="false"&&dr.SC_DISABLE_SPEEDY),Ps=Object.freeze([]),an=Object.freeze({});function Pf(s,c,i){return i===void 0&&(i=an),s.theme!==i.theme&&s.theme||c||i.theme}var Bu=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Lf=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Bf=/(^-|-$)/g;function lu(s){return s.replace(Lf,"-").replace(Bf,"")}var _f=/(a)(d)/gi,ps=52,au=function(s){return String.fromCharCode(s+(s>25?39:97))};function Fa(s){var c,i="";for(c=Math.abs(s);c>ps;c=c/ps|0)i=au(c%ps)+i;return(au(c%ps)+i).replace(_f,"$1-$2")}var Pa,_u=5381,nn=function(s,c){for(var i=c.length;i;)s=33*s^c.charCodeAt(--i);return s},Ou=function(s){return nn(_u,s)};function Of(s){return Fa(Ou(s)>>>0)}function Af(s){return s.displayName||s.name||"Component"}function La(s){return typeof s=="string"&&!0}var Au=typeof Symbol=="function"&&Symbol.for,Mu=Au?Symbol.for("react.memo"):60115,Mf=Au?Symbol.for("react.forward_ref"):60112,Rf={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Df={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ru={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ff=((Pa={})[Mf]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Pa[Mu]=Ru,Pa);function iu(s){return("type"in(c=s)&&c.type.$$typeof)===Mu?Ru:"$$typeof"in s?Ff[s.$$typeof]:Rf;var c}var Hf=Object.defineProperty,Wf=Object.getOwnPropertyNames,cu=Object.getOwnPropertySymbols,Uf=Object.getOwnPropertyDescriptor,$f=Object.getPrototypeOf,du=Object.prototype;function Du(s,c,i){if(typeof c!="string"){if(du){var u=$f(c);u&&u!==du&&Du(s,u,i)}var g=Wf(c);cu&&(g=g.concat(cu(c)));for(var j=iu(s),C=iu(c),L=0;L<g.length;++L){var E=g[L];if(!(E in Df||i&&i[E]||C&&E in C||j&&E in j)){var Q=Uf(c,E);try{Hf(s,E,Q)}catch{}}}}return s}function cn(s){return typeof s=="function"}function Xa(s){return typeof s=="object"&&"styledComponentId"in s}function Tt(s,c){return s&&c?"".concat(s," ").concat(c):s||c||""}function uu(s,c){if(s.length===0)return"";for(var i=s[0],u=1;u<s.length;u++)i+=s[u];return i}function Zn(s){return s!==null&&typeof s=="object"&&s.constructor.name===Object.name&&!("props"in s&&s.$$typeof)}function Ha(s,c,i){if(i===void 0&&(i=!1),!i&&!Zn(s)&&!Array.isArray(s))return c;if(Array.isArray(c))for(var u=0;u<c.length;u++)s[u]=Ha(s[u],c[u]);else if(Zn(c))for(var u in c)s[u]=Ha(s[u],c[u]);return s}function Za(s,c){Object.defineProperty(s,"toString",{value:c})}function eo(s){for(var c=[],i=1;i<arguments.length;i++)c[i-1]=arguments[i];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(s," for more information.").concat(c.length>0?" Args: ".concat(c.join(", ")):""))}var Vf=(function(){function s(c){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=c}return s.prototype.indexOfGroup=function(c){for(var i=0,u=0;u<c;u++)i+=this.groupSizes[u];return i},s.prototype.insertRules=function(c,i){if(c>=this.groupSizes.length){for(var u=this.groupSizes,g=u.length,j=g;c>=j;)if((j<<=1)<0)throw eo(16,"".concat(c));this.groupSizes=new Uint32Array(j),this.groupSizes.set(u),this.length=j;for(var C=g;C<j;C++)this.groupSizes[C]=0}for(var L=this.indexOfGroup(c+1),E=(C=0,i.length);C<E;C++)this.tag.insertRule(L,i[C])&&(this.groupSizes[c]++,L++)},s.prototype.clearGroup=function(c){if(c<this.length){var i=this.groupSizes[c],u=this.indexOfGroup(c),g=u+i;this.groupSizes[c]=0;for(var j=u;j<g;j++)this.tag.deleteRule(u)}},s.prototype.getGroup=function(c){var i="";if(c>=this.length||this.groupSizes[c]===0)return i;for(var u=this.groupSizes[c],g=this.indexOfGroup(c),j=g+u,C=g;C<j;C++)i+="".concat(this.tag.getRule(C)).concat(qa);return i},s})(),gs=new Map,ws=new Map,vs=1,hs=function(s){if(gs.has(s))return gs.get(s);for(;ws.has(vs);)vs++;var c=vs++;return gs.set(s,c),ws.set(c,s),c},Jf=function(s,c){vs=c+1,gs.set(s,c),ws.set(c,s)},Qf="style[".concat(ln,"][").concat(Lu,'="').concat(Is,'"]'),Gf=new RegExp("^".concat(ln,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Yf=function(s,c,i){for(var u,g=i.split(","),j=0,C=g.length;j<C;j++)(u=g[j])&&s.registerName(c,u)},Kf=function(s,c){for(var i,u=((i=c.textContent)!==null&&i!==void 0?i:"").split(qa),g=[],j=0,C=u.length;j<C;j++){var L=u[j].trim();if(L){var E=L.match(Gf);if(E){var Q=0|parseInt(E[1],10),V=E[2];Q!==0&&(Jf(V,Q),Yf(s,V,E[3]),s.getTag().insertRules(Q,g)),g.length=0}else g.push(L)}}},pu=function(s){for(var c=document.querySelectorAll(Qf),i=0,u=c.length;i<u;i++){var g=c[i];g&&g.getAttribute(ln)!==Pu&&(Kf(s,g),g.parentNode&&g.parentNode.removeChild(g))}};function qf(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null}var Fu=function(s){var c=document.head,i=s||c,u=document.createElement("style"),g=(function(L){var E=Array.from(L.querySelectorAll("style[".concat(ln,"]")));return E[E.length-1]})(i),j=g!==void 0?g.nextSibling:null;u.setAttribute(ln,Pu),u.setAttribute(Lu,Is);var C=qf();return C&&u.setAttribute("nonce",C),i.insertBefore(u,j),u},Xf=(function(){function s(c){this.element=Fu(c),this.element.appendChild(document.createTextNode("")),this.sheet=(function(i){if(i.sheet)return i.sheet;for(var u=document.styleSheets,g=0,j=u.length;g<j;g++){var C=u[g];if(C.ownerNode===i)return C}throw eo(17)})(this.element),this.length=0}return s.prototype.insertRule=function(c,i){try{return this.sheet.insertRule(i,c),this.length++,!0}catch{return!1}},s.prototype.deleteRule=function(c){this.sheet.deleteRule(c),this.length--},s.prototype.getRule=function(c){var i=this.sheet.cssRules[c];return i&&i.cssText?i.cssText:""},s})(),Zf=(function(){function s(c){this.element=Fu(c),this.nodes=this.element.childNodes,this.length=0}return s.prototype.insertRule=function(c,i){if(c<=this.length&&c>=0){var u=document.createTextNode(i);return this.element.insertBefore(u,this.nodes[c]||null),this.length++,!0}return!1},s.prototype.deleteRule=function(c){this.element.removeChild(this.nodes[c]),this.length--},s.prototype.getRule=function(c){return c<this.length?this.nodes[c].textContent:""},s})(),em=(function(){function s(c){this.rules=[],this.length=0}return s.prototype.insertRule=function(c,i){return c<=this.length&&(this.rules.splice(c,0,i),this.length++,!0)},s.prototype.deleteRule=function(c){this.rules.splice(c,1),this.length--},s.prototype.getRule=function(c){return c<this.length?this.rules[c]:""},s})(),hu=Ns,rm={isServer:!Ns,useCSSOMInjection:!If},Hu=(function(){function s(c,i,u){c===void 0&&(c=an),i===void 0&&(i={});var g=this;this.options=nr(nr({},rm),c),this.gs=i,this.names=new Map(u),this.server=!!c.isServer,!this.server&&Ns&&hu&&(hu=!1,pu(this)),Za(this,function(){return(function(j){for(var C=j.getTag(),L=C.length,E="",Q=function(R){var D=(function(me){return ws.get(me)})(R);if(D===void 0)return"continue";var G=j.names.get(D),oe=C.getGroup(R);if(G===void 0||!G.size||oe.length===0)return"continue";var J="".concat(ln,".g").concat(R,'[id="').concat(D,'"]'),q="";G!==void 0&&G.forEach(function(me){me.length>0&&(q+="".concat(me,","))}),E+="".concat(oe).concat(J,'{content:"').concat(q,'"}').concat(qa)},V=0;V<L;V++)Q(V);return E})(g)})}return s.registerId=function(c){return hs(c)},s.prototype.rehydrate=function(){!this.server&&Ns&&pu(this)},s.prototype.reconstructWithOptions=function(c,i){return i===void 0&&(i=!0),new s(nr(nr({},this.options),c),this.gs,i&&this.names||void 0)},s.prototype.allocateGSInstance=function(c){return this.gs[c]=(this.gs[c]||0)+1},s.prototype.getTag=function(){return this.tag||(this.tag=(c=(function(i){var u=i.useCSSOMInjection,g=i.target;return i.isServer?new em(g):u?new Xf(g):new Zf(g)})(this.options),new Vf(c)));var c},s.prototype.hasNameForId=function(c,i){return this.names.has(c)&&this.names.get(c).has(i)},s.prototype.registerName=function(c,i){if(hs(c),this.names.has(c))this.names.get(c).add(i);else{var u=new Set;u.add(i),this.names.set(c,u)}},s.prototype.insertRules=function(c,i,u){this.registerName(c,i),this.getTag().insertRules(hs(c),u)},s.prototype.clearNames=function(c){this.names.has(c)&&this.names.get(c).clear()},s.prototype.clearRules=function(c){this.getTag().clearGroup(hs(c)),this.clearNames(c)},s.prototype.clearTag=function(){this.tag=void 0},s})(),tm=/&/g,nm=/^\s*\/\/.*$/gm;function Wu(s,c){return s.map(function(i){return i.type==="rule"&&(i.value="".concat(c," ").concat(i.value),i.value=i.value.replaceAll(",",",".concat(c," ")),i.props=i.props.map(function(u){return"".concat(c," ").concat(u)})),Array.isArray(i.children)&&i.type!=="@keyframes"&&(i.children=Wu(i.children,c)),i})}function om(s){var c,i,u,g=an,j=g.options,C=j===void 0?an:j,L=g.plugins,E=L===void 0?Ps:L,Q=function(D,G,oe){return oe.startsWith(i)&&oe.endsWith(i)&&oe.replaceAll(i,"").length>0?".".concat(c):D},V=E.slice();V.push(function(D){D.type===Cs&&D.value.includes("&")&&(D.props[0]=D.props[0].replace(tm,i).replace(u,Q))}),C.prefix&&V.push(Tf),V.push(Sf);var R=function(D,G,oe,J){G===void 0&&(G=""),oe===void 0&&(oe=""),J===void 0&&(J="&"),c=J,i=G,u=new RegExp("\\".concat(i,"\\b"),"g");var q=D.replace(nm,""),me=bf(oe||G?"".concat(oe," ").concat(G," { ").concat(q," }"):q);C.namespace&&(me=Wu(me,C.namespace));var ce=[];return js(me,Cf(V.concat(Ef(function(se){return ce.push(se)})))),ce};return R.hash=E.length?E.reduce(function(D,G){return G.name||eo(15),nn(D,G.name)},_u).toString():"",R}var sm=new Hu,Wa=om(),Uu=yr.createContext({shouldForwardProp:void 0,styleSheet:sm,stylis:Wa});Uu.Consumer;yr.createContext(void 0);function fu(){return ae.useContext(Uu)}var lm=(function(){function s(c,i){var u=this;this.inject=function(g,j){j===void 0&&(j=Wa);var C=u.name+j.hash;g.hasNameForId(u.id,C)||g.insertRules(u.id,C,j(u.rules,C,"@keyframes"))},this.name=c,this.id="sc-keyframes-".concat(c),this.rules=i,Za(this,function(){throw eo(12,String(u.name))})}return s.prototype.getName=function(c){return c===void 0&&(c=Wa),this.name+c.hash},s})(),am=function(s){return s>="A"&&s<="Z"};function mu(s){for(var c="",i=0;i<s.length;i++){var u=s[i];if(i===1&&u==="-"&&s[0]==="-")return s;am(u)?c+="-"+u.toLowerCase():c+=u}return c.startsWith("ms-")?"-"+c:c}var $u=function(s){return s==null||s===!1||s===""},Vu=function(s){var c,i,u=[];for(var g in s){var j=s[g];s.hasOwnProperty(g)&&!$u(j)&&(Array.isArray(j)&&j.isCss||cn(j)?u.push("".concat(mu(g),":"),j,";"):Zn(j)?u.push.apply(u,ys(ys(["".concat(g," {")],Vu(j),!1),["}"],!1)):u.push("".concat(mu(g),": ").concat((c=g,(i=j)==null||typeof i=="boolean"||i===""?"":typeof i!="number"||i===0||c in zf||c.startsWith("--")?String(i).trim():"".concat(i,"px")),";")))}return u};function It(s,c,i,u){if($u(s))return[];if(Xa(s))return[".".concat(s.styledComponentId)];if(cn(s)){if(!cn(j=s)||j.prototype&&j.prototype.isReactComponent||!c)return[s];var g=s(c);return It(g,c,i,u)}var j;return s instanceof lm?i?(s.inject(i,u),[s.getName(u)]):[s]:Zn(s)?Vu(s):Array.isArray(s)?Array.prototype.concat.apply(Ps,s.map(function(C){return It(C,c,i,u)})):[s.toString()]}function im(s){for(var c=0;c<s.length;c+=1){var i=s[c];if(cn(i)&&!Xa(i))return!1}return!0}var cm=Ou(Is),dm=(function(){function s(c,i,u){this.rules=c,this.staticRulesId="",this.isStatic=(u===void 0||u.isStatic)&&im(c),this.componentId=i,this.baseHash=nn(cm,i),this.baseStyle=u,Hu.registerId(i)}return s.prototype.generateAndInjectStyles=function(c,i,u){var g=this.baseStyle?this.baseStyle.generateAndInjectStyles(c,i,u):"";if(this.isStatic&&!u.hash)if(this.staticRulesId&&i.hasNameForId(this.componentId,this.staticRulesId))g=Tt(g,this.staticRulesId);else{var j=uu(It(this.rules,c,i,u)),C=Fa(nn(this.baseHash,j)>>>0);if(!i.hasNameForId(this.componentId,C)){var L=u(j,".".concat(C),void 0,this.componentId);i.insertRules(this.componentId,C,L)}g=Tt(g,C),this.staticRulesId=C}else{for(var E=nn(this.baseHash,u.hash),Q="",V=0;V<this.rules.length;V++){var R=this.rules[V];if(typeof R=="string")Q+=R;else if(R){var D=uu(It(R,c,i,u));E=nn(E,D+V),Q+=D}}if(Q){var G=Fa(E>>>0);i.hasNameForId(this.componentId,G)||i.insertRules(this.componentId,G,u(Q,".".concat(G),void 0,this.componentId)),g=Tt(g,G)}}return g},s})(),Ju=yr.createContext(void 0);Ju.Consumer;var Ba={};function um(s,c,i){var u=Xa(s),g=s,j=!La(s),C=c.attrs,L=C===void 0?Ps:C,E=c.componentId,Q=E===void 0?(function(ee,he){var Y=typeof ee!="string"?"sc":lu(ee);Ba[Y]=(Ba[Y]||0)+1;var W="".concat(Y,"-").concat(Of(Is+Y+Ba[Y]));return he?"".concat(he,"-").concat(W):W})(c.displayName,c.parentComponentId):E,V=c.displayName,R=V===void 0?(function(ee){return La(ee)?"styled.".concat(ee):"Styled(".concat(Af(ee),")")})(s):V,D=c.displayName&&c.componentId?"".concat(lu(c.displayName),"-").concat(c.componentId):c.componentId||Q,G=u&&g.attrs?g.attrs.concat(L).filter(Boolean):L,oe=c.shouldForwardProp;if(u&&g.shouldForwardProp){var J=g.shouldForwardProp;if(c.shouldForwardProp){var q=c.shouldForwardProp;oe=function(ee,he){return J(ee,he)&&q(ee,he)}}else oe=J}var me=new dm(i,D,u?g.componentStyle:void 0);function ce(ee,he){return(function(Y,W,Be){var or=Y.attrs,Nr=Y.componentStyle,Rr=Y.defaultProps,ur=Y.foldedComponentIds,Ge=Y.styledComponentId,sr=Y.target,pr=yr.useContext(Ju),Ue=fu(),ve=Y.shouldForwardProp||Ue.shouldForwardProp,T=Pf(W,pr,Rr)||an,M=(function(ne,re,fe){for(var le,ue=nr(nr({},re),{className:void 0,theme:fe}),Fe=0;Fe<ne.length;Fe+=1){var Dr=cn(le=ne[Fe])?le(ue):le;for(var wr in Dr)ue[wr]=wr==="className"?Tt(ue[wr],Dr[wr]):wr==="style"?nr(nr({},ue[wr]),Dr[wr]):Dr[wr]}return re.className&&(ue.className=Tt(ue.className,re.className)),ue})(or,W,T),I=M.as||sr,m={};for(var N in M)M[N]===void 0||N[0]==="$"||N==="as"||N==="theme"&&M.theme===T||(N==="forwardedAs"?m.as=M.forwardedAs:ve&&!ve(N,I)||(m[N]=M[N]));var K=(function(ne,re){var fe=fu(),le=ne.generateAndInjectStyles(re,fe.styleSheet,fe.stylis);return le})(Nr,M),X=Tt(ur,Ge);return K&&(X+=" "+K),M.className&&(X+=" "+M.className),m[La(I)&&!Bu.has(I)?"class":"className"]=X,Be&&(m.ref=Be),ae.createElement(I,m)})(se,ee,he)}ce.displayName=R;var se=yr.forwardRef(ce);return se.attrs=G,se.componentStyle=me,se.displayName=R,se.shouldForwardProp=oe,se.foldedComponentIds=u?Tt(g.foldedComponentIds,g.styledComponentId):"",se.styledComponentId=D,se.target=u?g.target:s,Object.defineProperty(se,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(ee){this._foldedDefaultProps=u?(function(he){for(var Y=[],W=1;W<arguments.length;W++)Y[W-1]=arguments[W];for(var Be=0,or=Y;Be<or.length;Be++)Ha(he,or[Be],!0);return he})({},g.defaultProps,ee):ee}}),Za(se,function(){return".".concat(se.styledComponentId)}),j&&Du(se,s,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),se}function xu(s,c){for(var i=[s[0]],u=0,g=c.length;u<g;u+=1)i.push(c[u],s[u+1]);return i}var gu=function(s){return Object.assign(s,{isCss:!0})};function pm(s){for(var c=[],i=1;i<arguments.length;i++)c[i-1]=arguments[i];if(cn(s)||Zn(s))return gu(It(xu(Ps,ys([s],c,!0))));var u=s;return c.length===0&&u.length===1&&typeof u[0]=="string"?It(u):gu(It(xu(u,c)))}function Ua(s,c,i){if(i===void 0&&(i=an),!c)throw eo(1,c);var u=function(g){for(var j=[],C=1;C<arguments.length;C++)j[C-1]=arguments[C];return s(c,i,pm.apply(void 0,ys([g],j,!1)))};return u.attrs=function(g){return Ua(s,c,nr(nr({},i),{attrs:Array.prototype.concat(i.attrs,g).filter(Boolean)}))},u.withConfig=function(g){return Ua(s,c,nr(nr({},i),g))},u}var Qu=function(s){return Ua(um,s)},ie=Qu;Bu.forEach(function(s){ie[s]=Qu(s)});const _a={Wrapper:ie.div`
        /* border: 1px solid #f00; */
        height: 100vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    `,Header:ie.header`
        /* border: 1px solid #f00; */
        height: 60px;
        flex-shrink: 0;
    `,Main:ie.main`
        /* border: 1px solid #f00; */
        flex: 1;
        overflow-y: auto;
        position: relative;

        .contentWrapper {
            /* border: 1px solid #f00; */
            min-height: 100%;
            max-width: 1440px;
            margin: auto;
            display: flex;
            flex-direction: column;
            padding: 15px;

            .category {
                margin: 30px 0 15px 0;
            }
        }

        .footerWrapper {
            /* border: 1px solid #f00; */
            /* min-height: 300px; */
            flex-shrink: 0;
        }
    `},vu={Wrapper:ie.header`
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 16px;
        border-bottom: 1px solid var(--color-border);
        background: var(--color-bg);
        position: sticky;
        top: 0;
        z-index: 50;
        height: 60px;
    `,Main:ie.div`
        width: 100%;
        display: flex;
        align-items: center;

        .logoNameThemeToggleWrapper {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;
            width: 100%;
        }

        .logoNameWrapper {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .logoWrapper {
            height: 50px;
            width: 50px;
            border-radius: 10px;
            background: #000;
            border: 1px solid var(--color-border);
            position: relative;
            overflow: hidden;
            flex: 0 0 auto;
            padding: 5px;

            img {
                height: 100%;
                width: 100%;
                object-fit: contain;
                display: block;
                transition: opacity 180ms ease;
            }

            .logoSkeleton {
                position: absolute;
                inset: 0;
                background: var(--color-surface-2);
                opacity: 0.75;
            }
        }

        .nameWrapper {
            display: flex;
            flex-direction: column;
            gap: 2px;
            min-width: 0;

            .title {
                color: var(--color-text-primary);
                font-weight: 800;
                letter-spacing: 0.2px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .subTitle {
                color: var(--color-text-muted);
                font-size: 12px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            @media (width < 520px) {
                .subTitle {
                    display: none;
                }
            }

            @media (width < 420px) {
                display: none;
            }
        }

        .themeToggleBtn {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-radius: 12px;
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            color: var(--color-text-primary);
            flex: 0 0 auto;

            .icon {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                font-size: 18px;
            }

            .label {
                font-size: 13px;
                font-weight: 700;
                color: var(--color-text-secondary);
            }

            &:hover {
                border-color: var(--color-border-light);
                background: var(--color-surface-2);
            }

            &:active {
                transform: translateY(1px);
            }

            &:focus-visible {
                outline: 2px solid var(--color-text-primary);
                outline-offset: 3px;
            }

            @media (width < 420px) {
                .label {
                    display: none;
                }
            }
        }
    `},hm="/javascript-core-notes/logo.png";var Gu={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},yu=yr.createContext&&yr.createContext(Gu),fm=["attr","size","title"];function mm(s,c){if(s==null)return{};var i=xm(s,c),u,g;if(Object.getOwnPropertySymbols){var j=Object.getOwnPropertySymbols(s);for(g=0;g<j.length;g++)u=j[g],!(c.indexOf(u)>=0)&&Object.prototype.propertyIsEnumerable.call(s,u)&&(i[u]=s[u])}return i}function xm(s,c){if(s==null)return{};var i={};for(var u in s)if(Object.prototype.hasOwnProperty.call(s,u)){if(c.indexOf(u)>=0)continue;i[u]=s[u]}return i}function bs(){return bs=Object.assign?Object.assign.bind():function(s){for(var c=1;c<arguments.length;c++){var i=arguments[c];for(var u in i)Object.prototype.hasOwnProperty.call(i,u)&&(s[u]=i[u])}return s},bs.apply(this,arguments)}function ju(s,c){var i=Object.keys(s);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(s);c&&(u=u.filter(function(g){return Object.getOwnPropertyDescriptor(s,g).enumerable})),i.push.apply(i,u)}return i}function ks(s){for(var c=1;c<arguments.length;c++){var i=arguments[c]!=null?arguments[c]:{};c%2?ju(Object(i),!0).forEach(function(u){gm(s,u,i[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(i)):ju(Object(i)).forEach(function(u){Object.defineProperty(s,u,Object.getOwnPropertyDescriptor(i,u))})}return s}function gm(s,c,i){return c=vm(c),c in s?Object.defineProperty(s,c,{value:i,enumerable:!0,configurable:!0,writable:!0}):s[c]=i,s}function vm(s){var c=ym(s,"string");return typeof c=="symbol"?c:c+""}function ym(s,c){if(typeof s!="object"||!s)return s;var i=s[Symbol.toPrimitive];if(i!==void 0){var u=i.call(s,c);if(typeof u!="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return(c==="string"?String:Number)(s)}function Yu(s){return s&&s.map((c,i)=>yr.createElement(c.tag,ks({key:i},c.attr),Yu(c.child)))}function U(s){return c=>yr.createElement(jm,bs({attr:ks({},s.attr)},c),Yu(s.child))}function jm(s){var c=i=>{var{attr:u,size:g,title:j}=s,C=mm(s,fm),L=g||i.size||"1em",E;return i.className&&(E=i.className),s.className&&(E=(E?E+" ":"")+s.className),yr.createElement("svg",bs({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,u,C,{className:E,style:ks(ks({color:s.color||i.color},i.style),s.style),height:L,width:L,xmlns:"http://www.w3.org/2000/svg"}),j&&yr.createElement("title",null,j),s.children)};return yu!==void 0?yr.createElement(yu.Consumer,null,i=>c(i)):c(Gu)}function Ku(s){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"22 12 18 12 15 21 9 3 6 12 2 12"},child:[]}]})(s)}function qu(s){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"},child:[]},{tag:"line",attr:{x1:"12",y1:"9",x2:"12",y2:"13"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12.01",y2:"17"},child:[]}]})(s)}function Nm(s){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"19",x2:"12",y2:"5"},child:[]},{tag:"polyline",attr:{points:"5 12 12 5 19 12"},child:[]}]})(s)}function Xu(s){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"},child:[]},{tag:"polyline",attr:{points:"3.27 6.96 12 12.01 20.73 6.96"},child:[]},{tag:"line",attr:{x1:"12",y1:"22.08",x2:"12",y2:"12"},child:[]}]})(s)}function wm(s){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"},child:[]},{tag:"polyline",attr:{points:"22 4 12 14.01 9 11.01"},child:[]}]})(s)}function ke(s){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"},child:[]}]})(s)}function Se(s){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"9 18 15 12 9 6"},child:[]}]})(s)}function Oa(s){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polyline",attr:{points:"12 6 12 12 16 14"},child:[]}]})(s)}function bm(s){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"},child:[]}]})(s)}function z(s){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 18 22 12 16 6"},child:[]},{tag:"polyline",attr:{points:"8 6 2 12 8 18"},child:[]}]})(s)}function km(s){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 8h1a4 4 0 0 1 0 8h-1"},child:[]},{tag:"path",attr:{d:"M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"},child:[]},{tag:"line",attr:{x1:"6",y1:"1",x2:"6",y2:"4"},child:[]},{tag:"line",attr:{x1:"10",y1:"1",x2:"10",y2:"4"},child:[]},{tag:"line",attr:{x1:"14",y1:"1",x2:"14",y2:"4"},child:[]}]})(s)}function Aa(s){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"},child:[]}]})(s)}function $a(s){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"15 10 20 15 15 20"},child:[]},{tag:"path",attr:{d:"M4 4v7a4 4 0 0 0 4 4h12"},child:[]}]})(s)}function Ss(s){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"4",y:"4",width:"16",height:"16",rx:"2",ry:"2"},child:[]},{tag:"rect",attr:{x:"9",y:"9",width:"6",height:"6"},child:[]},{tag:"line",attr:{x1:"9",y1:"1",x2:"9",y2:"4"},child:[]},{tag:"line",attr:{x1:"15",y1:"1",x2:"15",y2:"4"},child:[]},{tag:"line",attr:{x1:"9",y1:"20",x2:"9",y2:"23"},child:[]},{tag:"line",attr:{x1:"15",y1:"20",x2:"15",y2:"23"},child:[]},{tag:"line",attr:{x1:"20",y1:"9",x2:"23",y2:"9"},child:[]},{tag:"line",attr:{x1:"20",y1:"14",x2:"23",y2:"14"},child:[]},{tag:"line",attr:{x1:"1",y1:"9",x2:"4",y2:"9"},child:[]},{tag:"line",attr:{x1:"1",y1:"14",x2:"4",y2:"14"},child:[]}]})(s)}function Zu(s){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"ellipse",attr:{cx:"12",cy:"5",rx:"9",ry:"3"},child:[]},{tag:"path",attr:{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"},child:[]},{tag:"path",attr:{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"},child:[]}]})(s)}function ep(s){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"6",y1:"3",x2:"6",y2:"15"},child:[]},{tag:"circle",attr:{cx:"18",cy:"6",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"18",r:"3"},child:[]},{tag:"path",attr:{d:"M18 9a9 9 0 0 1-9 9"},child:[]}]})(s)}function Va(s){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"2",y1:"12",x2:"22",y2:"12"},child:[]},{tag:"path",attr:{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"},child:[]}]})(s)}function Nu(s){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"4",y1:"9",x2:"20",y2:"9"},child:[]},{tag:"line",attr:{x1:"4",y1:"15",x2:"20",y2:"15"},child:[]},{tag:"line",attr:{x1:"10",y1:"3",x2:"8",y2:"21"},child:[]},{tag:"line",attr:{x1:"16",y1:"3",x2:"14",y2:"21"},child:[]}]})(s)}function Sm(s){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"},child:[]}]})(s)}function Cm(s){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"16",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12.01",y2:"8"},child:[]}]})(s)}function ei(s){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 2 7 12 12 22 7 12 2"},child:[]},{tag:"polyline",attr:{points:"2 17 12 22 22 17"},child:[]},{tag:"polyline",attr:{points:"2 12 12 17 22 12"},child:[]}]})(s)}function Em(s){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"},child:[]},{tag:"path",attr:{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"},child:[]}]})(s)}function Tm(s){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"8",y1:"6",x2:"21",y2:"6"},child:[]},{tag:"line",attr:{x1:"8",y1:"12",x2:"21",y2:"12"},child:[]},{tag:"line",attr:{x1:"8",y1:"18",x2:"21",y2:"18"},child:[]},{tag:"line",attr:{x1:"3",y1:"6",x2:"3.01",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"12",x2:"3.01",y2:"12"},child:[]},{tag:"line",attr:{x1:"3",y1:"18",x2:"3.01",y2:"18"},child:[]}]})(s)}function zm(s){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"},child:[]},{tag:"polyline",attr:{points:"22,6 12,13 2,6"},child:[]}]})(s)}function Im(s){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"},child:[]}]})(s)}function rp(s){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"},child:[]},{tag:"path",attr:{d:"M13 13l6 6"},child:[]}]})(s)}function Pm(s){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"16.5",y1:"9.4",x2:"7.5",y2:"4.21"},child:[]},{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"},child:[]},{tag:"polyline",attr:{points:"3.27 6.96 12 12.01 20.73 6.96"},child:[]},{tag:"line",attr:{x1:"12",y1:"22.08",x2:"12",y2:"12"},child:[]}]})(s)}function Lm(s){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"1 4 1 10 7 10"},child:[]},{tag:"polyline",attr:{points:"23 20 23 14 17 14"},child:[]},{tag:"path",attr:{d:"M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"},child:[]}]})(s)}function tp(s){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"17 1 21 5 17 9"},child:[]},{tag:"path",attr:{d:"M3 11V9a4 4 0 0 1 4-4h14"},child:[]},{tag:"polyline",attr:{points:"7 23 3 19 7 15"},child:[]},{tag:"path",attr:{d:"M21 13v2a4 4 0 0 1-4 4H3"},child:[]}]})(s)}function Bm(s){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"22",y1:"2",x2:"11",y2:"13"},child:[]},{tag:"polygon",attr:{points:"22 2 15 22 11 13 2 9 22 2"},child:[]}]})(s)}function wu(s){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"18",cy:"5",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"12",r:"3"},child:[]},{tag:"circle",attr:{cx:"18",cy:"19",r:"3"},child:[]},{tag:"line",attr:{x1:"8.59",y1:"13.51",x2:"15.42",y2:"17.49"},child:[]},{tag:"line",attr:{x1:"15.41",y1:"6.51",x2:"8.59",y2:"10.49"},child:[]}]})(s)}function Ja(s){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"},child:[]}]})(s)}function _m(s){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 3 21 3 21 8"},child:[]},{tag:"line",attr:{x1:"4",y1:"20",x2:"21",y2:"3"},child:[]},{tag:"polyline",attr:{points:"21 16 21 21 16 21"},child:[]},{tag:"line",attr:{x1:"15",y1:"15",x2:"21",y2:"21"},child:[]},{tag:"line",attr:{x1:"4",y1:"4",x2:"9",y2:"9"},child:[]}]})(s)}function Om(s){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"4.93",y1:"4.93",x2:"19.07",y2:"19.07"},child:[]}]})(s)}function Am(s){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"4",y1:"21",x2:"4",y2:"14"},child:[]},{tag:"line",attr:{x1:"4",y1:"10",x2:"4",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"20",y1:"21",x2:"20",y2:"16"},child:[]},{tag:"line",attr:{x1:"20",y1:"12",x2:"20",y2:"3"},child:[]},{tag:"line",attr:{x1:"1",y1:"14",x2:"7",y2:"14"},child:[]},{tag:"line",attr:{x1:"9",y1:"8",x2:"15",y2:"8"},child:[]},{tag:"line",attr:{x1:"17",y1:"16",x2:"23",y2:"16"},child:[]}]})(s)}function Mm(s){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"rect",attr:{x:"9",y:"9",width:"6",height:"6"},child:[]}]})(s)}function Rm(s){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"5"},child:[]},{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"23"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"},child:[]},{tag:"line",attr:{x1:"1",y1:"12",x2:"3",y2:"12"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"23",y2:"12"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"},child:[]}]})(s)}function np(s){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"6"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"2"},child:[]}]})(s)}function Qa(s){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"4 17 10 11 4 5"},child:[]},{tag:"line",attr:{x1:"12",y1:"19",x2:"20",y2:"19"},child:[]}]})(s)}function Dm(s){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"},child:[]}]})(s)}function Fm(s){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"4 7 4 4 20 4 20 7"},child:[]},{tag:"line",attr:{x1:"9",y1:"20",x2:"15",y2:"20"},child:[]},{tag:"line",attr:{x1:"12",y1:"4",x2:"12",y2:"20"},child:[]}]})(s)}function Hm(s){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"},child:[]}]})(s)}function Pr(s){return U({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"},child:[]}]})(s)}const Wm=()=>{const[s,c]=ae.useState(!1),[i,u]=ae.useState("dark");ae.useEffect(()=>{const L=localStorage.getItem("app-theme")||"dark";u(L),L==="light"?document.documentElement.setAttribute("data-theme","light"):document.documentElement.removeAttribute("data-theme")},[]),ae.useEffect(()=>{i==="light"?document.documentElement.setAttribute("data-theme","light"):document.documentElement.removeAttribute("data-theme"),localStorage.setItem("app-theme",i)},[i]);const g=ae.useMemo(()=>i==="light"?"dark":"light",[i]),j=()=>{u(g)};return t.jsx(vu.Wrapper,{children:t.jsx(vu.Main,{children:t.jsxs("div",{className:"logoNameThemeToggleWrapper",children:[t.jsxs("div",{className:"logoNameWrapper",children:[t.jsxs("div",{className:"logoWrapper",children:[!s&&t.jsx("div",{className:"logoSkeleton"}),t.jsx("img",{src:hm,alt:"JavaScript Core Notes logo",onLoad:()=>c(!0),style:{opacity:s?1:0}})]}),t.jsxs("div",{className:"nameWrapper",children:[t.jsx("div",{className:"title",children:"javascript-core-notes"}),t.jsx("div",{className:"subTitle",children:"At-a-glance javascript revision"})]})]}),t.jsxs("button",{type:"button",className:"themeToggleBtn",onClick:j,"aria-label":`Switch to ${g} theme`,title:`Switch to ${g}`,children:[t.jsx("span",{className:"icon",children:i==="light"?t.jsx(Im,{}):t.jsx(Rm,{})}),t.jsx("span",{className:"label",children:i==="light"?"Light":"Dark"})]})]})})})};function Um(s){return U({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z"},child:[]}]})(s)}function $m(s){return U({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"},child:[]}]})(s)}function Vm(s){return U({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(s)}function Jm(s){return U({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"},child:[]}]})(s)}function Qm(s){return U({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M489.7 153.8c-.1-65.4-51-119-110.7-138.3C304.8-8.5 207-5 136.1 28.4C50.3 68.9 23.3 157.7 22.3 246.2C21.5 319 28.7 510.6 136.9 512c80.3 1 92.3-102.5 129.5-152.3c26.4-35.5 60.5-45.5 102.4-55.9c72-17.8 121.1-74.7 121-150z"},child:[]}]})(s)}function Gm(s){return U({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"},child:[]}]})(s)}const Ym={Wrapper:ie.footer`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 18px;
        padding: 18px 15px;
        border-top: 1px solid var(--color-border);
        color: var(--color-text-muted);
        font-size: 12px;
        .brand { display: inline-flex; align-items: center; gap: 9px; color: var(--color-text-primary); font-weight: 700; }
        .brand img { width: 30px; height: 30px; object-fit: contain; }
        .links { display: flex; flex-wrap: wrap; justify-content: center; gap: 7px; }
        .links a { display: grid; width: 32px; height: 32px; place-items: center; border: 1px solid var(--color-border); border-radius: 9px; color: var(--color-text-secondary); transition: border-color 180ms ease, box-shadow 180ms ease, text-shadow 180ms ease; }
        .links a:hover, .links a:focus-visible { border-color: var(--color-border-light); box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary) 18%, transparent); text-shadow: 0 0 10px color-mix(in srgb, var(--color-primary) 70%, transparent); }
        .copyright a { color: var(--color-text-secondary); font-weight: 700; }
        @media (width < 760px) { flex-direction: column; justify-content: center; }
    `},Km=[["Portfolio","https://www.ashishranjan.net/",Hm],["GitHub","https://github.com/a2rp",Vm],["CodePen","https://codepen.io/ash1198",Um],["LinkedIn","https://www.linkedin.com/in/aashishranjan",Jm],["Facebook","https://www.facebook.com/theash.ashish/",$m],["YouTube","https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1",Gm],["Email","mailto:ash.ranjan09@gmail.com",zm],["Support","https://a2rp-donation-page.netlify.app/",Sm],["Buy Me a Coffee","https://buymeacoffee.com/a2rp",km],["Patreon","https://www.patreon.com/a2rp",Qm]],qm=()=>t.jsxs(Ym.Wrapper,{children:[t.jsxs("div",{className:"brand",children:[t.jsx("img",{src:"/logo.png",alt:"Ashish Ranjan logo"}),t.jsx("span",{children:"JavaScript Core Notes"})]}),t.jsx("nav",{className:"links","aria-label":"Social and support links",children:Km.map(([s,c,i])=>t.jsx("a",{href:c,target:"_blank",rel:"noopener noreferrer","aria-label":s,title:s,children:t.jsx(i,{"aria-hidden":"true"})},s))}),t.jsxs("div",{className:"copyright",children:["Copyright © ",new Date().getFullYear()," "," ",t.jsx("a",{href:"https://www.ashishranjan.net/",target:"_blank",rel:"noopener noreferrer",children:"Ashish Ranjan"})]})]}),Xm={Button:ie.button`
        position: fixed; right: 22px; bottom: 22px; z-index: 60; display: grid; width: 42px; height: 42px; place-items: center; border: 1px solid var(--color-border-light); border-radius: 50%; color: var(--color-text-primary); background: var(--color-surface-2); box-shadow: 0 10px 24px var(--color-shadow); cursor: pointer; opacity: 0; pointer-events: none; transition: opacity 180ms ease, border-color 180ms ease, box-shadow 180ms ease, text-shadow 180ms ease;
        &.isVisible { opacity: 1; pointer-events: auto; }
        &:hover, &:focus-visible { border-color: var(--color-primary); box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary) 18%, transparent), 0 12px 26px var(--color-shadow); text-shadow: 0 0 10px color-mix(in srgb, var(--color-primary) 70%, transparent); }
    `},Zm=()=>{const[s,c]=ae.useState(!1);return ae.useEffect(()=>{const i=document.getElementById("notes-main");if(!i)return;const u=()=>c(i.scrollTop>220);return u(),i.addEventListener("scroll",u,{passive:!0}),()=>i.removeEventListener("scroll",u)},[]),t.jsx(Xm.Button,{className:s?"isVisible":"",type:"button","aria-label":"Scroll to top",onClick:()=>{var i;return(i=document.getElementById("notes-main"))==null?void 0:i.scrollTo({top:0,behavior:"smooth"})},children:t.jsx(Nm,{"aria-hidden":"true"})})},bu={Wrapper:ie.section`
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 60px 20px;
        /* margin-bottom: 30px; */
    `,Content:ie.div`
        max-width: 1440px;
        width: 100%;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-left: 4px solid var(--color-primary);
        border-radius: 18px;
        padding: 42px;
        box-shadow: 0 10px 30px var(--color-shadow);
        transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;

        &:hover {
            transform: translateY(-3px);
            box-shadow: 0 16px 40px var(--color-shadow);
        }

        .heading {
            font-size: 32px;
            margin-bottom: 26px;
            color: var(--color-primary);
            letter-spacing: 0.5px;
        }

        p {
            font-size: 16px;
            line-height: 1.75;
            margin-bottom: 18px;
            color: var(--color-text-secondary);
        }

        .meta {
            margin-top: 30px;
            padding-top: 18px;
            border-top: 1px solid var(--color-border);
            display: flex;
            gap: 10px;
            font-size: 14px;
            color: var(--color-text-muted);
        }

        .metaLabel {
            font-weight: 700;
            color: var(--color-text-secondary);
        }

        .metaValue {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            color: var(--color-primary);
        }
    `},ex=()=>{const s="2026-10-02T14:08:08.577Z",c=new Date(s).toLocaleString("en-US",{year:"numeric",month:"long",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1});return t.jsx(bu.Wrapper,{children:t.jsxs(bu.Content,{children:[t.jsx("h2",{className:"heading",children:"About JavaScript"}),t.jsx("p",{children:"JavaScript is the programming language of the web. It adds logic and behavior to HTML and CSS. While HTML structures content and CSS styles it, JavaScript controls interaction, state, dynamic updates, and application flow."}),t.jsx("p",{children:"JavaScript runs inside an engine that parses code, creates execution contexts, manages memory, and processes the event loop. Concepts like scope, closures, prototypes, asynchronous execution, and promises are fundamental to writing predictable and maintainable applications."}),t.jsx("p",{children:"The javascript-core-notes project is a structured revision system. It organizes language fundamentals, execution concepts, DOM manipulation, and modern ES6+ features into a clean single-page reference designed for fast recall and strong conceptual clarity."}),t.jsxs("div",{className:"meta",children:[t.jsx("span",{className:"metaLabel",children:"Last updated:"}),t.jsx("span",{className:"metaValue",children:c})]})]})})},rx={Wrapper:ie.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 10px 25px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 14px 16px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            display: grid;
            place-items: center;
            width: 28px;
            height: 28px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .icon {
            display: grid;
            place-items: center;
            width: 36px;
            height: 36px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            font-size: 18px;
            flex: 0 0 auto;
        }

        .title {
            font-weight: 900;
            flex: 1;
            letter-spacing: 0.2px;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            padding: 6px 10px;
            border-radius: 999px;
            background: var(--color-bg);
            white-space: nowrap;
            flex: 0 0 auto;
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 260ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 12000px;
        }

        .intro {
            padding: 14px 16px;
            border-bottom: 1px dashed var(--color-border-light);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-size: 14px;
        }

        .section {
            padding: 16px;
        }

        .section + .section {
            border-top: 1px dashed var(--color-border-light);
        }

        .h3 {
            font-size: 16px;
            margin-bottom: 8px;
            color: var(--color-text-primary);
        }

        .miniGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;
        }

        .mini {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 12px;
        }

        .miniTitle {
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 900;
            color: var(--color-text-primary);
            margin-bottom: 6px;
        }

        .miniIcon {
            width: 30px;
            height: 30px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            display: grid;
            place-items: center;
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .miniSub {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }

        .callout {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
            padding: 12px;
        }

        .calloutTitle {
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 900;
            margin-bottom: 8px;
            color: var(--color-text-primary);
        }

        .calloutIcon {
            width: 30px;
            height: 30px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            display: grid;
            place-items: center;
            color: var(--color-primary);
        }

        .calloutText {
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-size: 14px;
        }

        .codeBlock {
            margin-top: 12px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .codeTop {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-secondary);
            font-weight: 800;
            font-size: 12px;
            letter-spacing: 0.2px;
            background: var(--color-surface);
        }

        .codeIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
            font-size: 14px;
        }

        .code {
            margin: 0;
            padding: 12px;
            font-size: 13px;
            line-height: 1.6;
            color: var(--color-text-secondary);
            overflow-x: auto;
            white-space: pre;
        }

        @media (max-width: 720px) {
            .miniGrid {
                grid-template-columns: 1fr;
            }
        }
    `},tx=()=>{const[s,c]=ae.useState(!1),i=()=>c(u=>!u);return t.jsxs(rx.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:i,"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(ke,{}):t.jsx(Se,{})}),t.jsx("span",{className:"icon",children:t.jsx(Ss,{})}),t.jsx("span",{className:"title",children:"JavaScript Fundamentals"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsx("div",{className:"intro",children:t.jsx("p",{className:"p",children:"JavaScript is what makes the web interactive. These fundamentals explain where JS runs, how it executes, and how it connects to HTML and CSS."})}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"What is JavaScript"}),t.jsx("p",{className:"p",children:"JavaScript is a programming language used to add logic and interactivity to web pages. It can update content, respond to user actions, and work with data."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(Qa,{})}),"Quick example"]}),t.jsx("pre",{className:"code",children:`console.log("Hello JavaScript");
// Output - Hello JavaScript`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"History of JS"}),t.jsx("p",{className:"p",children:"JavaScript was created in 1995 to add interactivity to web pages. It grew fast and became the main language of the browser. Today it is standardized as ECMAScript."})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"JS engine"}),t.jsx("p",{className:"p",children:"A JavaScript engine is the program that executes your JS code. Example engines are V8 (Chrome, Node), SpiderMonkey (Firefox), and JavaScriptCore (Safari)."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(Ss,{})}),"Engine idea"]}),t.jsx("pre",{className:"code",children:`// You write JS
// Engine parses it and runs it
// Result - output appears in console or UI`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Browser vs Node"}),t.jsx("p",{className:"p",children:"Browser JavaScript can work with the DOM, events, and Web APIs. Node.js JavaScript runs outside the browser and is used for backend work like servers, files, and databases."}),t.jsxs("div",{className:"miniGrid",children:[t.jsxs("div",{className:"mini",children:[t.jsxs("div",{className:"miniTitle",children:[t.jsx("span",{className:"miniIcon",children:t.jsx(Va,{})}),"Browser"]}),t.jsx("div",{className:"miniSub",children:"DOM - events - fetch - storage"})]}),t.jsxs("div",{className:"mini",children:[t.jsxs("div",{className:"miniTitle",children:[t.jsx("span",{className:"miniIcon",children:t.jsx(z,{})}),"Node"]}),t.jsx("div",{className:"miniSub",children:"server - file system - backend APIs"})]})]}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Example"]}),t.jsx("pre",{className:"code",children:`// Browser
document.title = "JS running in browser";
// Result - page title changes

// Node
console.log("JS running in Node");
// Output - JS running in Node`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Interpreted vs compiled"}),t.jsx("p",{className:"p",children:"JavaScript is often called interpreted, but modern engines use JIT (Just In Time) compilation. That means code is compiled and optimized while running for better performance."}),t.jsxs("div",{className:"callout",children:[t.jsxs("div",{className:"calloutTitle",children:[t.jsx("span",{className:"calloutIcon",children:t.jsx(Pr,{})}),"Simple meaning"]}),t.jsx("div",{className:"calloutText",children:"JS runs fast today because engines optimize code as it executes."})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"ECMAScript"}),t.jsx("p",{className:"p",children:"ECMAScript is the standard that defines the JavaScript language. ES6 introduced modern features like let, const, arrow functions, classes, and modules."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(ei,{})}),"ES6 example"]}),t.jsx("pre",{className:"code",children:'const name = "Ash";\nconsole.log(`Hello ${name}`);\n// Output - Hello Ash'})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"How JS works with HTML & CSS"}),t.jsx("p",{className:"p",children:"The browser turns HTML into a DOM tree. JavaScript can read and change that DOM, and it can also update CSS by changing classes or inline styles."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(Va,{})}),"DOM and style idea"]}),t.jsx("pre",{className:"code",children:`// Example idea
// JS can update HTML text
// JS can add a class to change CSS
// Result - UI changes without page reload`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Script tag"}),t.jsx("p",{className:"p",children:"JavaScript is loaded in HTML using the script tag. Using defer is usually preferred because it loads the script without blocking HTML parsing."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Script loading"]}),t.jsx("pre",{className:"code",children:`<script src="app.js" defer><\/script>
<!-- Result - app.js runs after HTML is parsed -->`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"DOM manipulation concept"}),t.jsx("p",{className:"p",children:"DOM manipulation means selecting elements and updating them. You can change text, attributes, classes, and even create new elements."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(Qa,{})}),"Basic DOM update"]}),t.jsx("pre",{className:"code",children:`const el = document.querySelector(".title");
el.textContent = "Updated by JS";
// Result - text inside .title changes`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Event driven model"}),t.jsx("p",{className:"p",children:"JavaScript reacts to events like click, input, and submit. You attach event listeners, and when the event happens, your callback runs."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(Pr,{})}),"Click example"]}),t.jsx("pre",{className:"code",children:`const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  console.log("Clicked");
});

// Output - Clicked (when button is clicked)`})]})]})]})]})},nx={Wrapper:ie.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 10px 25px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 14px 16px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            display: grid;
            place-items: center;
            width: 28px;
            height: 28px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
        }

        .icon {
            display: grid;
            place-items: center;
            width: 36px;
            height: 36px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            font-size: 18px;
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            padding: 6px 10px;
            border-radius: 999px;
            background: var(--color-bg);
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 12000px;
        }

        .section {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
        }

        .section:last-child {
            border-bottom: none;
        }

        h3 {
            font-size: 16px;
            margin-bottom: 8px;
        }

        p {
            font-size: 14px;
            line-height: 1.65;
            color: var(--color-text-secondary);
        }

        .code {
            margin-top: 10px;
            padding: 12px;
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            border-radius: 12px;
            font-size: 13px;
            line-height: 1.6;
            overflow-x: auto;
            color: var(--color-text-secondary);
        }

        .miniGrid {
            margin-top: 10px;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
            gap: 10px;
        }

        .chip {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 8px 12px;
            font-size: 13px;
            color: var(--color-text-secondary);
            text-align: center;
        }

        .note {
            margin-top: 10px;
            display: flex;
            gap: 10px;
            align-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 10px 12px;
        }

        .noteIcon {
            color: var(--color-primary);
            display: grid;
            place-items: center;
        }

        .noteText {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.5;
        }

        .note2 {
            margin-top: 10px;
            display: flex;
            gap: 10px;
            align-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-surface-2);
            border-radius: 14px;
            padding: 10px 12px;
        }

        .noteIcon2 {
            color: var(--color-warning);
            display: grid;
            place-items: center;
        }

        .noteText2 {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.5;
        }

        .footer {
            padding: 16px;
            background: var(--color-surface-2);
            border-top: 1px solid var(--color-border);
        }

        .footerTitle {
            font-weight: 900;
            margin-bottom: 10px;
        }

        .footerList {
            margin: 0;
            padding-left: 0;
            list-style: none;
            display: grid;
            gap: 8px;
            color: var(--color-text-secondary);
            font-size: 13px;
        }
    `},ox=()=>{const[s,c]=ae.useState(!1),i=()=>c(u=>!u);return t.jsxs(nx.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:i,"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(ke,{}):t.jsx(Se,{})}),t.jsx("span",{className:"icon",children:t.jsx(Zu,{})}),t.jsx("span",{className:"title",children:"Variables & Data Types"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Variables"}),t.jsx("p",{children:"Variables are named containers to store values. In JavaScript you create variables using var, let, or const."})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"var"}),t.jsx("p",{children:"var is function scoped and can be re-declared. It can cause bugs in modern code, so avoid it unless required."}),t.jsx("pre",{className:"code",children:`var a = 10;
var a = 20;
console.log(a); // 20`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"let"}),t.jsx("p",{children:"let is block scoped and can be reassigned, but cannot be re-declared in the same scope."}),t.jsx("pre",{className:"code",children:`let score = 5;
score = 6;
console.log(score); // 6`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"const"}),t.jsx("p",{children:"const is block scoped and cannot be reassigned. Use it by default. For objects and arrays, the reference is fixed but internal values can change."}),t.jsx("pre",{className:"code",children:`const user = { name: "Ash" };
user.name = "Ashish";
console.log(user.name); // "Ashish"`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Scope basics"}),t.jsx("p",{children:"Scope means where a variable can be accessed. let and const follow block scope, var follows function scope."}),t.jsx("pre",{className:"code",children:`if (true) {
  let x = 1;
  const y = 2;
  console.log(x, y); // 1 2
}
// console.log(x); // ReferenceError`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Temporal Dead Zone"}),t.jsx("p",{children:"With let and const, the variable exists in the scope but cannot be used before its declaration line."}),t.jsx("pre",{className:"code",children:`// console.log(a); // ReferenceError
let a = 10;
console.log(a); // 10`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Primitive Types"}),t.jsx("p",{children:"Primitive values are stored directly and are immutable. JavaScript primitives are string, number, boolean, null, undefined, symbol, and bigint."}),t.jsxs("div",{className:"miniGrid",children:[t.jsx("div",{className:"chip",children:"string"}),t.jsx("div",{className:"chip",children:"number"}),t.jsx("div",{className:"chip",children:"boolean"}),t.jsx("div",{className:"chip",children:"null"}),t.jsx("div",{className:"chip",children:"undefined"}),t.jsx("div",{className:"chip",children:"symbol"}),t.jsx("div",{className:"chip",children:"bigint"})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"string"}),t.jsx("pre",{className:"code",children:`const name = "Ash";
console.log(name.length); // 3`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"number"}),t.jsx("pre",{className:"code",children:`const price = 99.5;
console.log(price + 0.5); // 100`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"boolean"}),t.jsx("pre",{className:"code",children:`const isOnline = true;
console.log(isOnline); // true`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"null"}),t.jsx("p",{children:'null means intentional empty value. You set it when you want "nothing here".'}),t.jsx("pre",{className:"code",children:`let data = null;
console.log(data); // null`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"undefined"}),t.jsx("p",{children:"undefined means a variable exists but no value is assigned yet."}),t.jsx("pre",{className:"code",children:`let x;
console.log(x); // undefined`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"symbol"}),t.jsx("p",{children:"symbol creates unique identifiers, often used as object keys to avoid collisions."}),t.jsx("pre",{className:"code",children:`const id1 = Symbol("id");
const id2 = Symbol("id");
console.log(id1 === id2); // false`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"bigint"}),t.jsx("p",{children:"bigint is for very large integers beyond Number safe limit. Use n at the end."}),t.jsx("pre",{className:"code",children:`const big = 9007199254740993n;
console.log(big); // 9007199254740993n`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Non Primitive"}),t.jsx("p",{children:"Non-primitive values are reference types. They are stored in memory and variables hold references."}),t.jsxs("div",{className:"miniGrid",children:[t.jsx("div",{className:"chip",children:"object"}),t.jsx("div",{className:"chip",children:"array"}),t.jsx("div",{className:"chip",children:"function"})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"object"}),t.jsx("pre",{className:"code",children:`const user = { name: "Ash", age: 22 };
console.log(user.name); // "Ash"`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"array"}),t.jsx("pre",{className:"code",children:`const nums = [1, 2, 3];
console.log(nums[1]); // 2`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"function"}),t.jsx("p",{children:"Functions are also values in JavaScript. You can store them in variables and pass them around."}),t.jsx("pre",{className:"code",children:`const add = (a, b) => a + b;
console.log(add(2, 3)); // 5`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Type system"}),t.jsx("p",{children:"JavaScript is dynamically typed. Types are attached to values, not variables."}),t.jsxs("div",{className:"note",children:[t.jsx("span",{className:"noteIcon",children:t.jsx(Cm,{})}),t.jsx("span",{className:"noteText",children:"Same variable can hold different types at different times."})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Dynamic typing"}),t.jsx("pre",{className:"code",children:`let v = 10;
v = "ten";
console.log(v); // "ten"`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"typeof operator"}),t.jsx("p",{children:'typeof tells the type of a value. Small gotcha: typeof null returns "object".'}),t.jsx("pre",{className:"code",children:`console.log(typeof "hi"); // "string"
console.log(typeof 10); // "number"
console.log(typeof null); // "object"`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Type coercion"}),t.jsx("p",{children:"Coercion means JavaScript automatically converts types. Use strict equality to avoid surprises."}),t.jsx("pre",{className:"code",children:`console.log("5" + 1); // "51"
console.log("5" - 1); // 4
console.log(5 == "5"); // true
console.log(5 === "5"); // false`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Truthy vs falsy"}),t.jsx("p",{children:"In conditions, some values behave like false. Everything else is truthy."}),t.jsx("pre",{className:"code",children:`console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean("ok")); // true`}),t.jsxs("div",{className:"note2",children:[t.jsx("span",{className:"noteIcon2",children:t.jsx(np,{})}),t.jsx("span",{className:"noteText2",children:'Falsy values: 0, "", null, undefined, NaN, false'})]})]}),t.jsxs("div",{className:"footer",children:[t.jsx("div",{className:"footerTitle",children:"Quick takeaway"}),t.jsxs("ul",{className:"footerList",children:[t.jsx("li",{children:"- Use const by default, let when reassignment needed"}),t.jsx("li",{children:"- Prefer === over =="}),t.jsx("li",{children:'- Remember typeof null is "object"'})]})]})]})]})},sx={Wrapper:ie.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 10px 25px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 14px 16px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            display: grid;
            place-items: center;
            width: 28px;
            height: 28px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
        }

        .icon {
            display: grid;
            place-items: center;
            width: 36px;
            height: 36px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            padding: 6px 10px;
            border-radius: 999px;
            background: var(--color-bg);
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 4000px;
        }

        .section {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
        }

        .section:last-child {
            border-bottom: none;
        }

        h3 {
            font-size: 16px;
            margin-bottom: 8px;
        }

        p {
            font-size: 14px;
            line-height: 1.6;
            color: var(--color-text-secondary);
        }

        .code {
            margin-top: 10px;
            padding: 12px;
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            border-radius: 12px;
            font-size: 13px;
            overflow-x: auto;
        }
    `},lx=()=>{const[s,c]=ae.useState(!1),i=()=>c(u=>!u);return t.jsxs(sx.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:i,"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(ke,{}):t.jsx(Se,{})}),t.jsx("span",{className:"icon",children:t.jsx(Am,{})}),t.jsx("span",{className:"title",children:"Operators"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Arithmetic"}),t.jsx("p",{children:"Arithmetic operators perform mathematical calculations. They are used for addition, subtraction, multiplication, division and more."}),t.jsx("pre",{className:"code",children:`let a = 10;
let b = 3;

a + b;  // 13
a - b;  // 7
a * b;  // 30
a / b;  // 3.333...
a % b;  // 1  remainder
a ** b; // 1000`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Assignment"}),t.jsx("p",{children:"Assignment operators store values in variables. They can also update values using shorthand syntax."}),t.jsx("pre",{className:"code",children:`let x = 5;
x += 2;  // 7
x -= 1;  // 6
x *= 3;  // 18
x /= 2;  // 9`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Comparison"}),t.jsx("p",{children:"Comparison operators check relationships between values and return true or false."}),t.jsx("pre",{className:"code",children:`5 > 3;   // true
5 < 3;   // false
5 >= 5;  // true
5 != 4;  // true`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Strict vs Loose equality"}),t.jsx("p",{children:"Loose equality uses == and performs type conversion. Strict equality uses === and checks both value and type. Strict equality is recommended."}),t.jsx("pre",{className:"code",children:`5 == "5";   // true  type conversion
5 === "5";  // false type mismatch
null == undefined;  // true
null === undefined; // false`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Logical operators"}),t.jsx("p",{children:"Logical operators combine conditions. They are often used in decision making."}),t.jsx("pre",{className:"code",children:`true && false;  // false
true || false;  // true
!true;          // false`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Nullish coalescing ??"}),t.jsx("p",{children:"The nullish operator returns the right value only if the left side is null or undefined. It does not treat 0 or empty string as false."}),t.jsx("pre",{className:"code",children:`let value = null;
value ?? "default";  // "default"

0 ?? 100;  // 0
"" ?? "text";  // ""`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Optional chaining ?."}),t.jsx("p",{children:"Optional chaining safely accesses nested properties. It prevents errors if a property does not exist."}),t.jsx("pre",{className:"code",children:`let user = {};

user.profile?.name;  // undefined
// No error even though profile does not exist`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Ternary operator"}),t.jsx("p",{children:"The ternary operator is a short form of if else. It returns one value if condition is true and another if false."}),t.jsx("pre",{className:"code",children:`let age = 18;

let status = age >= 18 ? "Adult" : "Minor";
// "Adult"`})]})]})]})},ax={Wrapper:ie.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 10px 25px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 14px 16px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            display: grid;
            place-items: center;
            width: 28px;
            height: 28px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
        }

        .icon {
            display: grid;
            place-items: center;
            width: 36px;
            height: 36px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            font-size: 18px;
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            padding: 6px 10px;
            border-radius: 999px;
            background: var(--color-bg);
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 9000px;
        }

        .intro {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-size: 14px;
        }

        .section {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
        }

        .section:last-child {
            border-bottom: none;
        }

        .h3 {
            font-size: 16px;
            margin-bottom: 8px;
        }

        .section p {
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-size: 14px;
        }

        .codeBlock {
            margin-top: 12px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .codeTop {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-secondary);
            font-weight: 800;
            font-size: 12px;
            letter-spacing: 0.2px;
            background: var(--color-surface);
        }

        .codeIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
            font-size: 14px;
        }

        .code {
            margin: 0;
            padding: 12px;
            font-size: 13px;
            line-height: 1.6;
            color: var(--color-text-secondary);
            overflow-x: auto;
            white-space: pre;
        }

        .hint {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 10px 12px;
            display: flex;
            align-items: flex-start;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }

        .hintIcon {
            color: var(--color-primary);
            margin-top: 2px;
            flex: 0 0 auto;
        }
    `},ix=()=>{const[s,c]=ae.useState(!1),i=()=>c(u=>!u);return t.jsxs(ax.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:i,"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(ke,{}):t.jsx(Se,{})}),t.jsx("span",{className:"icon",children:t.jsx(_m,{})}),t.jsx("span",{className:"title",children:"Control Flow"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsx("div",{className:"intro",children:t.jsx("p",{className:"p",children:"Control flow decides what code runs, when it runs, and how many times it runs. Most logic in JavaScript comes from conditions and loops."})}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"if else"}),t.jsx("p",{className:"p",children:"Use if else when you want to run code based on a condition."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Example"]}),t.jsx("pre",{className:"code",children:`const age = 20;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

// output - Adult`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"switch"}),t.jsx("p",{className:"p",children:"switch is useful when you have multiple exact matches for the same value."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Example"]}),t.jsx("pre",{className:"code",children:`const role = "admin";

switch (role) {
  case "admin":
    console.log("Full access");
    break;
  case "user":
    console.log("Limited access");
    break;
  default:
    console.log("No access");
}

// output - Full access`})]}),t.jsxs("div",{className:"hint",children:[t.jsx("span",{className:"hintIcon",children:t.jsx($a,{})}),"break is important - without it, execution continues to the next case."]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"for"}),t.jsx("p",{className:"p",children:"Use for when you know how many times you want to loop."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Example"]}),t.jsx("pre",{className:"code",children:`for (let i = 1; i <= 3; i++) {
  console.log(i);
}

// output - 1
// output - 2
// output - 3`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"while"}),t.jsx("p",{className:"p",children:"while runs as long as the condition stays true. Use it when you do not know the exact number of iterations in advance."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Example"]}),t.jsx("pre",{className:"code",children:`let n = 3;

while (n > 0) {
  console.log(n);
  n--;
}

// output - 3
// output - 2
// output - 1`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"do while"}),t.jsx("p",{className:"p",children:"do while runs the code at least once, even if the condition is false at the start."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Example"]}),t.jsx("pre",{className:"code",children:`let x = 0;

do {
  console.log("Runs once");
} while (x > 0);

// output - Runs once`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"break"}),t.jsx("p",{className:"p",children:"break stops the current loop or switch immediately."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Example"]}),t.jsx("pre",{className:"code",children:`for (let i = 1; i <= 5; i++) {
  if (i === 3) break;
  console.log(i);
}

// output - 1
// output - 2`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"continue"}),t.jsx("p",{className:"p",children:"continue skips the current iteration and moves to the next one."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Example"]}),t.jsx("pre",{className:"code",children:`for (let i = 1; i <= 4; i++) {
  if (i === 2) continue;
  console.log(i);
}

// output - 1
// output - 3
// output - 4`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Nested loops"}),t.jsx("p",{className:"p",children:"A loop inside another loop. Useful for grids and pairs. Be careful - nested loops can get slow for large sizes."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Example"]}),t.jsx("pre",{className:"code",children:`for (let row = 1; row <= 2; row++) {
  for (let col = 1; col <= 3; col++) {
    console.log(\`row \${row} col \${col}\`);
  }
}

// output - row 1 col 1
// output - row 1 col 2
// output - row 1 col 3
// output - row 2 col 1
// output - row 2 col 2
// output - row 2 col 3`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Guard clauses"}),t.jsx("p",{className:"p",children:"Guard clauses exit early to avoid deep nesting. This keeps code cleaner and easier to read."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Example"]}),t.jsx("pre",{className:"code",children:`const getDiscount = (isMember) => {
  if (!isMember) return 0; // guard clause - exit early
  return 10;
};

console.log(getDiscount(false));
console.log(getDiscount(true));

// output - 0
// output - 10`})]})]})]})]})},cx={Wrapper:ie.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 10px 25px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 14px 16px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            display: grid;
            place-items: center;
            width: 28px;
            height: 28px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .icon {
            display: grid;
            place-items: center;
            width: 36px;
            height: 36px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            font-size: 18px;
            flex: 0 0 auto;
        }

        .title {
            font-weight: 900;
            flex: 1;
            letter-spacing: 0.2px;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            padding: 6px 10px;
            border-radius: 999px;
            background: var(--color-bg);
            white-space: nowrap;
            flex: 0 0 auto;
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 12000px;
        }

        .section {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
        }

        .section:last-child {
            border-bottom: none;
        }

        .h3 {
            font-size: 16px;
            margin-bottom: 8px;
            color: var(--color-text-primary);
        }

        .p {
            font-size: 14px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            margin: 0;
        }

        .codeBlock {
            margin-top: 12px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .codeTop {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-secondary);
            font-weight: 800;
            font-size: 12px;
            letter-spacing: 0.2px;
            background: var(--color-surface);
        }

        .codeIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
            font-size: 14px;
        }

        .code {
            margin: 0;
            padding: 12px;
            font-size: 13px;
            line-height: 1.6;
            color: var(--color-text-secondary);
            overflow-x: auto;
            white-space: pre;
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }

        .miniRow {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 10px;
        }

        .mini {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 12px;
            display: flex;
            gap: 10px;
            align-items: center;
        }

        .miniIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .miniTitle {
            font-weight: 900;
            font-size: 13px;
            color: var(--color-text-primary);
        }

        .miniSub {
            font-size: 12px;
            color: var(--color-text-muted);
            margin-top: 2px;
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }

        @media (max-width: 820px) {
            .miniRow {
                grid-template-columns: 1fr;
            }
        }
    `},dx=()=>{const[s,c]=ae.useState(!1),i=()=>c(u=>!u);return t.jsxs(cx.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:i,"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(ke,{}):t.jsx(Se,{})}),t.jsx("span",{className:"icon",children:t.jsx(Pr,{})}),t.jsx("span",{className:"title",children:"Functions"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Function Basics"}),t.jsx("p",{className:"p",children:"A function is a reusable block of code. You call it when you want the same logic again. Functions can take inputs and can return outputs."})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Function declaration"}),t.jsx("p",{className:"p",children:"A named function declared with the function keyword. Declarations are hoisted, so you can call them before they appear in the file."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Example"]}),t.jsx("pre",{className:"code",children:`function add(a, b) {
  return a + b;
}

add(2, 3);`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Function expression"}),t.jsx("p",{className:"p",children:"A function stored in a variable. Expressions are not hoisted like declarations."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Example"]}),t.jsx("pre",{className:"code",children:`const multiply = function (a, b) {
  return a * b;
};

multiply(2, 3);`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Arrow functions"}),t.jsx("p",{className:"p",children:"A shorter syntax for writing functions. Arrow functions do not have their own this, they use this from the outer scope."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Example"]}),t.jsx("pre",{className:"code",children:`const greet = (name) => {
  return \`Hello, \${name}\`;
};

const square = (n) => n * n;`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Parameters vs arguments"}),t.jsx("p",{className:"p",children:"Parameters are the names in the function definition. Arguments are the real values you pass when calling the function."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Example"]}),t.jsx("pre",{className:"code",children:`function welcome(name) { // name is a parameter
  return \`Hi \${name}\`;
}

welcome("Ashish"); // "Ashish" is an argument`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Default parameters"}),t.jsx("p",{className:"p",children:"If an argument is not provided, you can set a default value in the function signature."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Example"]}),t.jsx("pre",{className:"code",children:`function sayHi(name = "Guest") {
  return \`Hi \${name}\`;
}

sayHi();
sayHi("Ashish");`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Rest parameters"}),t.jsx("p",{className:"p",children:"Rest parameters collect multiple arguments into a single array. Useful when you do not know how many values will be passed."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Example"]}),t.jsx("pre",{className:"code",children:`function sum(...nums) {
  return nums.reduce((acc, n) => acc + n, 0);
}

sum(1, 2, 3, 4);`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Advanced Function Concepts"}),t.jsx("p",{className:"p",children:"These concepts help you write cleaner and more reusable code, especially in real apps and React."})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Return values"}),t.jsx("p",{className:"p",children:"A return value is what a function sends back to the caller. Without return, the function returns undefined."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Example"]}),t.jsx("pre",{className:"code",children:`function getPrice() {
  return 499;
}

const price = getPrice();`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"First class functions"}),t.jsx("p",{className:"p",children:"In JavaScript, functions are values. You can store them in variables, pass them as arguments, or return them from other functions."}),t.jsxs("div",{className:"miniRow",children:[t.jsxs("div",{className:"mini",children:[t.jsx("span",{className:"miniIcon",children:t.jsx(ep,{})}),t.jsxs("div",{className:"miniText",children:[t.jsx("div",{className:"miniTitle",children:"Store"}),t.jsx("div",{className:"miniSub",children:"const fn = () => "})]})]}),t.jsxs("div",{className:"mini",children:[t.jsx("span",{className:"miniIcon",children:t.jsx(tp,{})}),t.jsxs("div",{className:"miniText",children:[t.jsx("div",{className:"miniTitle",children:"Pass"}),t.jsx("div",{className:"miniSub",children:"doWork(fn)"})]})]}),t.jsxs("div",{className:"mini",children:[t.jsx("span",{className:"miniIcon",children:t.jsx(Ss,{})}),t.jsxs("div",{className:"miniText",children:[t.jsx("div",{className:"miniTitle",children:"Return"}),t.jsx("div",{className:"miniSub",children:"return fn"})]})]})]}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Example"]}),t.jsx("pre",{className:"code",children:`function run(task) {
  return task();
}

run(() => "done");`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Higher order functions"}),t.jsx("p",{className:"p",children:"A higher order function either takes a function as an input or returns a function as output. Common examples are map, filter, and reduce."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Example"]}),t.jsx("pre",{className:"code",children:`const nums = [1, 2, 3];

const doubled = nums.map((n) => n * 2);`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Callback functions"}),t.jsx("p",{className:"p",children:"A callback is a function passed into another function to be called later. You see callbacks in events, timers, and array methods."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Example"]}),t.jsx("pre",{className:"code",children:`setTimeout(() => {
  console.log("Runs after 1 second");
}, 1000);`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Pure vs impure functions"}),t.jsx("p",{className:"p",children:"A pure function returns the same output for the same input and does not change anything outside itself. Impure functions depend on or modify external state."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Examples"]}),t.jsx("pre",{className:"code",children:`// pure
function add(a, b) {
  return a + b;
}

// impure
let count = 0;
function inc() {
  count = count + 1;
  return count;
}`})]})]})]})]})},ux={Wrapper:ie.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 10px 25px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 14px 16px;
            background: transparent;
            text-align: left;
            color: var(--color-text-primary);
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            display: grid;
            place-items: center;
            width: 28px;
            height: 28px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
        }

        .icon {
            display: grid;
            place-items: center;
            width: 36px;
            height: 36px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            padding: 6px 10px;
            border-radius: 999px;
            background: var(--color-bg);
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 5000px;
        }

        .section {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
        }

        .section:last-child {
            border-bottom: none;
        }

        h3 {
            font-size: 16px;
            margin-bottom: 8px;
        }

        p {
            font-size: 14px;
            line-height: 1.6;
            color: var(--color-text-secondary);
        }

        .code {
            margin-top: 10px;
            padding: 12px;
            background: var(--color-surface-2);
            border: 1px solid var(--color-border);
            border-radius: 12px;
            font-size: 13px;
            overflow-x: auto;
        }
    `},px=()=>{const[s,c]=ae.useState(!1);return t.jsxs(ux.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:()=>c(i=>!i),"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(ke,{}):t.jsx(Se,{})}),t.jsx("span",{className:"icon",children:t.jsx(ep,{})}),t.jsx("span",{className:"title",children:"Scope & Execution Context"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Global scope"}),t.jsx("p",{children:"Variables declared outside any function or block belong to global scope. They are accessible everywhere in the program."}),t.jsx("pre",{className:"code",children:`let name = "Ash";

function greet() {
  console.log(name);
}

greet();`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Function scope"}),t.jsx("p",{children:"Variables declared inside a function are only accessible inside that function."}),t.jsx("pre",{className:"code",children:`function test() {
  let age = 25;
  console.log(age);
}

test();
// console.log(age); // Error`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Block scope"}),t.jsxs("p",{children:["Variables declared with let and const inside "," are block scoped."]}),t.jsx("pre",{className:"code",children:`if (true) {
  let x = 10;
  const y = 20;
}

// console.log(x); // Error`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Lexical scope"}),t.jsx("p",{children:"Functions remember the scope where they were created. This is called lexical scope."}),t.jsx("pre",{className:"code",children:`function outer() {
  let count = 5;

  function inner() {
    console.log(count);
  }

  inner();
}

outer();`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Scope chain"}),t.jsx("p",{children:"When a variable is used, JavaScript looks in the current scope, then outer scopes, until it finds it."})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Execution context"}),t.jsx("p",{children:"Every time a function runs, JavaScript creates an execution context. It contains variables, arguments, and the value of this."})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Call stack"}),t.jsx("p",{children:"The call stack keeps track of function calls. Functions are pushed when called and popped when finished."}),t.jsx("pre",{className:"code",children:`function one() {
  two();
}

function two() {
  console.log("Inside two");
}

one();`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Hoisting"}),t.jsx("p",{children:"During compilation, JavaScript moves variable and function declarations to the top of their scope. This is called hoisting."})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"var vs let vs const hoisting"}),t.jsx("p",{children:"var is hoisted and initialized as undefined. let and const are hoisted but not initialized. Accessing them before declaration causes ReferenceError."}),t.jsx("pre",{className:"code",children:`console.log(a); // undefined
var a = 10;

// console.log(b); // ReferenceError
let b = 20;`})]})]})]})},hx={Wrapper:ie.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 10px 25px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 14px 16px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            display: grid;
            place-items: center;
            width: 28px;
            height: 28px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .icon {
            display: grid;
            place-items: center;
            width: 36px;
            height: 36px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            font-size: 18px;
            flex: 0 0 auto;
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            padding: 6px 10px;
            border-radius: 999px;
            background: var(--color-bg);
            white-space: nowrap;
            flex: 0 0 auto;
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 12000px;
        }

        .section {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
        }

        .section:last-child {
            border-bottom: none;
        }

        h3 {
            font-size: 16px;
            margin-bottom: 8px;
            color: var(--color-text-primary);
        }

        p {
            font-size: 14px;
            line-height: 1.7;
            color: var(--color-text-secondary);
            margin: 0;
        }

        .codeBlock {
            margin-top: 12px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .codeTop {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-secondary);
            font-weight: 800;
            font-size: 12px;
            background: var(--color-surface);
        }

        .codeIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
            font-size: 14px;
        }

        .code {
            margin: 0;
            padding: 12px;
            font-size: 13px;
            line-height: 1.6;
            color: var(--color-text-secondary);
            overflow-x: auto;
            white-space: pre;
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }

        .note {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-surface-2);
            border-radius: 14px;
            padding: 12px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-size: 13px;
        }
    `},fx=()=>{const[s,c]=ae.useState(!1),i=()=>c(u=>!u);return t.jsxs(hx.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:i,"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(ke,{}):t.jsx(Se,{})}),t.jsx("span",{className:"icon",children:t.jsx(Xu,{})}),t.jsx("span",{className:"title",children:"Objects"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Object Basics"}),t.jsx("p",{children:"An object stores data in key-value pairs. Keys are usually strings and values can be anything like strings, numbers, arrays, or even functions."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Basic object"]}),t.jsx("pre",{className:"code",children:`const user = {
  name: "Ash",
  age: 25,
  isPro: true
};

console.log(user.name); // "Ash"`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Creating objects"}),t.jsx("p",{children:"Most commonly we create objects using object literals using curly braces. Another way is using the Object constructor, but literals are preferred."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Two ways"]}),t.jsx("pre",{className:"code",children:`const a = { city: "Bangalore" };
const b = new Object({ city: "Bangalore" });

console.log(a.city); // "Bangalore"
console.log(b.city); // "Bangalore"`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Dot vs bracket notation"}),t.jsx("p",{children:"Dot notation is simple and common. Bracket notation is needed when the key has spaces, special characters, or when the key is stored in a variable."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(Nu,{})}),"Access keys"]}),t.jsx("pre",{className:"code",children:`const obj = { name: "Ash", "full name": "Ashish Ranjan" };

console.log(obj.name); // "Ash"
console.log(obj["full name"]); // "Ashish Ranjan"`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Nested objects"}),t.jsx("p",{children:"Objects can contain other objects. You access nested values using dot or bracket notation step by step."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(ei,{})}),"Nested example"]}),t.jsx("pre",{className:"code",children:`const profile = {
  name: "Ash",
  address: {
    city: "Bangalore",
    pin: 560049
  }
};

console.log(profile.address.city); // "Bangalore"`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Dynamic keys"}),t.jsx("p",{children:"Sometimes you do not know the key name in advance. You can create or access keys dynamically using bracket notation."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(Nu,{})}),"Dynamic key"]}),t.jsx("pre",{className:"code",children:`const key = "role";
const user = { name: "Ash" };

user[key] = "developer";

console.log(user.role); // "developer"`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Object Methods"}),t.jsx("p",{children:'A method is a function stored inside an object. Methods can use "this" to access other properties of the same object.'}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Method example"]}),t.jsx("pre",{className:"code",children:`const user = {
  name: "Ash",
  greet() {
    return "Hi, " + this.name;
  }
};

console.log(user.greet()); // "Hi, Ash"`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"this keyword"}),t.jsx("p",{children:'In an object method, "this" usually refers to the object before the dot. That is why user.greet() can access user.name using this.name.'}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"this in method"]}),t.jsx("pre",{className:"code",children:`const box = {
  label: "JS",
  show() {
    console.log(this.label);
  }
};

box.show(); // "JS"`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Object.keys"}),t.jsx("p",{children:"Object.keys returns an array of keys of an object. Useful when you want to loop over properties."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"keys"]}),t.jsx("pre",{className:"code",children:`const obj = { a: 1, b: 2 };

console.log(Object.keys(obj)); // ["a", "b"]`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Object.values"}),t.jsx("p",{children:"Object.values returns an array of values of an object. Useful for totals or quick checks."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"values"]}),t.jsx("pre",{className:"code",children:`const obj = { a: 1, b: 2 };

console.log(Object.values(obj)); // [1, 2]`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Object.entries"}),t.jsx("p",{children:"Object.entries returns an array of [key, value] pairs. Very handy for loops."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"entries"]}),t.jsx("pre",{className:"code",children:`const obj = { a: 1, b: 2 };

console.log(Object.entries(obj));
// [["a", 1], ["b", 2]]`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Destructuring"}),t.jsx("p",{children:"Destructuring is a shortcut to pull values from an object into variables. It makes code cleaner."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"destructuring"]}),t.jsx("pre",{className:"code",children:`const user = { name: "Ash", city: "Bangalore" };

const { name, city } = user;

console.log(name); // "Ash"
console.log(city); // "Bangalore"`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Spread operator"}),t.jsx("p",{children:"The spread operator copies properties into a new object. It is commonly used to make a shallow copy or merge objects."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(Aa,{})}),"spread merge"]}),t.jsx("pre",{className:"code",children:`const a = { x: 1 };
const b = { y: 2 };

const merged = { ...a, ...b };

console.log(merged); // { x: 1, y: 2 }`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Shallow vs deep copy"}),t.jsx("p",{children:"A shallow copy duplicates only the first level. Nested objects remain shared references. A deep copy duplicates nested objects too."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(Aa,{})}),"shallow copy problem"]}),t.jsx("pre",{className:"code",children:`const original = {
  name: "Ash",
  address: { city: "Bangalore" }
};

const shallow = { ...original };
shallow.address.city = "Bhopal";

console.log(original.address.city); // "Bhopal" (shared reference)`})]}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(Aa,{})}),"deep copy simple way"]}),t.jsx("pre",{className:"code",children:`const original = {
  name: "Ash",
  address: { city: "Bangalore" }
};

const deep = JSON.parse(JSON.stringify(original));
deep.address.city = "Bhopal";

console.log(original.address.city); // "Bangalore"
console.log(deep.address.city); // "Bhopal"`})]}),t.jsx("div",{className:"note",children:"Note - JSON deep copy works for simple data. It breaks for functions, Dates, undefined, and special types. Modern environments support structuredClone for better deep copying."})]})]})]})},mx={Wrapper:ie.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 10px 25px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 14px 16px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            display: grid;
            place-items: center;
            width: 28px;
            height: 28px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
        }

        .icon {
            display: grid;
            place-items: center;
            width: 36px;
            height: 36px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            padding: 6px 10px;
            border-radius: 999px;
            background: var(--color-bg);
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 5000px;
        }

        .section {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
        }

        .section:last-child {
            border-bottom: none;
        }

        h3 {
            font-size: 16px;
            margin-bottom: 8px;
        }

        p {
            font-size: 14px;
            line-height: 1.6;
            color: var(--color-text-secondary);
        }

        .code {
            margin-top: 10px;
            padding: 12px;
            background: var(--color-surface-2);
            border: 1px solid var(--color-border);
            border-radius: 12px;
            font-size: 13px;
            overflow-x: auto;
        }
    `},xx=()=>{const[s,c]=ae.useState(!1);return t.jsxs(mx.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:()=>c(i=>!i),"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(ke,{}):t.jsx(Se,{})}),t.jsx("span",{className:"icon",children:t.jsx(Tm,{})}),t.jsx("span",{className:"title",children:"Arrays"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Array Basics"}),t.jsx("p",{children:"An array is an ordered collection of values. It can store numbers, strings, objects, or even other arrays."}),t.jsx("pre",{className:"code",children:`const numbers = [10, 20, 30];
console.log(numbers);
// [10, 20, 30]`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Creating Arrays"}),t.jsx("pre",{className:"code",children:`const arr1 = [1, 2, 3];

const arr2 = new Array(4, 5, 6);

console.log(arr1);
// [1, 2, 3]`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Indexing"}),t.jsx("p",{children:"Arrays are zero-indexed. The first element is at index 0."}),t.jsx("pre",{className:"code",children:`const fruits = ["apple", "banana", "mango"];

console.log(fruits[0]);
// "apple"`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Length"}),t.jsx("pre",{className:"code",children:`const items = [1, 2, 3, 4];

console.log(items.length);
// 4`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"push"}),t.jsx("p",{children:"Add element to end."}),t.jsx("pre",{className:"code",children:`const arr = [1, 2];
arr.push(3);

console.log(arr);
// [1, 2, 3]`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"pop"}),t.jsx("p",{children:"Remove last element."}),t.jsx("pre",{className:"code",children:`const arr = [1, 2, 3];
arr.pop();

console.log(arr);
// [1, 2]`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"shift"}),t.jsx("p",{children:"Remove first element."}),t.jsx("pre",{className:"code",children:`const arr = [1, 2, 3];
arr.shift();

console.log(arr);
// [2, 3]`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"unshift"}),t.jsx("p",{children:"Add element to beginning."}),t.jsx("pre",{className:"code",children:`const arr = [2, 3];
arr.unshift(1);

console.log(arr);
// [1, 2, 3]`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"slice"}),t.jsx("p",{children:"Returns a shallow copy. Does not modify original."}),t.jsx("pre",{className:"code",children:`const arr = [1, 2, 3, 4];
const newArr = arr.slice(1, 3);

console.log(newArr);
// [2, 3]`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"splice"}),t.jsx("p",{children:"Modifies array. Can remove or insert elements."}),t.jsx("pre",{className:"code",children:`const arr = [1, 2, 3];
arr.splice(1, 1);

console.log(arr);
// [1, 3]`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"map"}),t.jsx("p",{children:"Returns new array after transformation."}),t.jsx("pre",{className:"code",children:`const nums = [1, 2, 3];

const doubled = nums.map(n => n * 2);

console.log(doubled);
// [2, 4, 6]`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"filter"}),t.jsx("pre",{className:"code",children:`const nums = [1, 2, 3, 4];

const even = nums.filter(n => n % 2 === 0);

console.log(even);
// [2, 4]`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"reduce"}),t.jsx("pre",{className:"code",children:`const nums = [1, 2, 3];

const sum = nums.reduce((acc, curr) => acc + curr, 0);

console.log(sum);
// 6`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"forEach"}),t.jsx("pre",{className:"code",children:`const nums = [1, 2, 3];

nums.forEach(n => {
    console.log(n);
});

// 1
// 2
// 3`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"find"}),t.jsx("pre",{className:"code",children:`const nums = [5, 10, 15];

const result = nums.find(n => n > 8);

console.log(result);
// 10`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"some"}),t.jsx("pre",{className:"code",children:`const nums = [1, 3, 5];

const hasEven = nums.some(n => n % 2 === 0);

console.log(hasEven);
// false`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"every"}),t.jsx("pre",{className:"code",children:`const nums = [2, 4, 6];

const allEven = nums.every(n => n % 2 === 0);

console.log(allEven);
// true`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"includes"}),t.jsx("pre",{className:"code",children:`const arr = ["a", "b", "c"];

console.log(arr.includes("b"));
// true`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"sort"}),t.jsx("p",{children:"Sort converts elements to strings by default. Always provide compare function for numbers."}),t.jsx("pre",{className:"code",children:`const nums = [10, 5, 20];

nums.sort((a, b) => a - b);

console.log(nums);
// [5, 10, 20]`})]})]})]})},gx={Wrapper:ie.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 10px 25px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 14px 16px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            display: grid;
            place-items: center;
            width: 28px;
            height: 28px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
        }

        .icon {
            display: grid;
            place-items: center;
            width: 36px;
            height: 36px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            font-size: 18px;
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            padding: 6px 10px;
            border-radius: 999px;
            background: var(--color-bg);
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 9000px;
        }

        .section {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
        }

        .section:last-child {
            border-bottom: none;
        }

        h3 {
            font-size: 16px;
            margin-bottom: 8px;
        }

        p {
            font-size: 14px;
            line-height: 1.65;
            color: var(--color-text-secondary);
        }

        .code {
            margin-top: 10px;
            padding: 12px;
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            border-radius: 12px;
            font-size: 13px;
            line-height: 1.55;
            overflow-x: auto;
            color: var(--color-text-secondary);
        }

        .footerNote {
            padding: 16px;
            border-top: 1px solid var(--color-border);
            background: var(--color-surface-2);
        }

        .footerTitle {
            font-weight: 900;
            margin-bottom: 10px;
            color: var(--color-text-primary);
        }

        .checks {
            list-style: none;
            padding-left: 0;
            display: grid;
            gap: 10px;
            margin: 0;
        }

        .checks li {
            display: flex;
            align-items: center;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
        }

        .checkDot {
            width: 10px;
            height: 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            box-shadow: inset 0 0 0 2px var(--color-primary);
            flex: 0 0 auto;
        }
    `},vx=()=>{const[s,c]=ae.useState(!1),i=()=>c(u=>!u);return t.jsxs(gx.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:i,"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(ke,{}):t.jsx(Se,{})}),t.jsx("span",{className:"icon",children:t.jsx(Fm,{})}),t.jsx("span",{className:"title",children:"Strings"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Strings"}),t.jsx("p",{children:"A string is text data in JavaScript. Strings are written inside quotes - \"hello\", 'world', or backticks `like this`. Strings are immutable, meaning methods return a new string instead of changing the original."}),t.jsx("pre",{className:"code",children:`const name = "Ash";
const city = 'Bangalore';

console.log(name); // Ash
console.log(city); // Bangalore`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Template literals"}),t.jsxs("p",{children:["Template literals use backticks and allow easy string interpolation using $","{...}",". They also support multi-line strings."]}),t.jsx("pre",{className:"code",children:`const name = "Ash";
const msg = \`Hello, \${name}!\`;

console.log(msg); // Hello, Ash!

const multi = \`Line 1
Line 2\`;

console.log(multi);
// Line 1
// Line 2`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"String methods"}),t.jsx("p",{children:"String methods help you transform, search, and extract parts of text. Most commonly used methods are below."})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"toUpperCase"}),t.jsx("p",{children:"Converts the string to uppercase."}),t.jsx("pre",{className:"code",children:`const s = "hello";
console.log(s.toUpperCase()); // HELLO`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"toLowerCase"}),t.jsx("p",{children:"Converts the string to lowercase."}),t.jsx("pre",{className:"code",children:`const s = "HeLLo";
console.log(s.toLowerCase()); // hello`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"trim"}),t.jsx("p",{children:"Removes spaces from the start and end of a string. Useful for form input cleaning."}),t.jsx("pre",{className:"code",children:`const raw = "   hello   ";
console.log(raw.trim()); // hello`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"slice"}),t.jsx("p",{children:"Extracts a part of a string and returns it. It does not modify the original string."}),t.jsx("pre",{className:"code",children:`const s = "JavaScript";
console.log(s.slice(0, 4)); // Java
console.log(s.slice(4)); // Script`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"replace"}),t.jsx("p",{children:"Replaces the first match of a substring and returns a new string. For multiple replacements, you usually use a regular expression."}),t.jsx("pre",{className:"code",children:`const s = "I love JS";
console.log(s.replace("JS", "JavaScript")); // I love JavaScript`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"split"}),t.jsx("p",{children:"Splits a string into an array using a separator. Very useful when working with CSV or user input."}),t.jsx("pre",{className:"code",children:`const s = "a,b,c";
const arr = s.split(",");

console.log(arr); // ["a","b","c"]`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"includes"}),t.jsx("p",{children:"Checks if a string contains another substring. Returns true or false."}),t.jsx("pre",{className:"code",children:`const s = "frontend developer";
console.log(s.includes("dev")); // true
console.log(s.includes("backend")); // false`})]}),t.jsxs("div",{className:"footerNote",children:[t.jsx("div",{className:"footerTitle",children:"Quick takeaway"}),t.jsxs("ul",{className:"checks",children:[t.jsxs("li",{children:[t.jsx("span",{className:"checkDot"}),"String methods return new strings - original does not change"]}),t.jsxs("li",{children:[t.jsx("span",{className:"checkDot"}),"Template literals are best for building dynamic text"]}),t.jsxs("li",{children:[t.jsx("span",{className:"checkDot"}),"trim and split are very common in real forms and APIs"]})]})]})]})]})},yx={Wrapper:ie.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 10px 25px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 14px 16px;
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border-radius: 10px;
            border: 1px solid var(--color-border);
        }

        .icon {
            width: 36px;
            height: 36px;
            display: grid;
            place-items: center;
            border-radius: 12px;
            border: 1px solid var(--color-border);
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 5000px;
        }

        .section {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
        }

        .section:last-child {
            border-bottom: none;
        }

        h3 {
            font-size: 16px;
            margin-bottom: 8px;
        }

        p {
            font-size: 14px;
            line-height: 1.6;
            color: var(--color-text-secondary);
            margin-bottom: 10px;
        }

        .code {
            padding: 12px;
            background: var(--color-surface-2);
            border: 1px solid var(--color-border);
            border-radius: 12px;
            font-size: 13px;
            overflow-x: auto;
        }
    `},jx=()=>{const[s,c]=ae.useState(!1),i=()=>c(u=>!u);return t.jsxs(yx.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:i,"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(ke,{}):t.jsx(Se,{})}),t.jsx("span",{className:"icon",children:t.jsx(Pr,{})}),t.jsx("span",{className:"title",children:"ES6+ Essentials"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Destructuring"}),t.jsx("p",{children:"Destructuring allows extracting values from arrays or objects into variables in a clean way."}),t.jsx("pre",{className:"code",children:`const user = { name: "Ash", age: 25 };

const { name, age } = user;

console.log(name); // Ash
console.log(age);  // 25`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Spread"}),t.jsx("p",{children:"Spread expands arrays or objects into individual elements."}),t.jsx("pre",{className:"code",children:`const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];

console.log(arr2); // [1, 2, 3, 4]`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Rest"}),t.jsx("p",{children:"Rest collects multiple values into a single array."}),t.jsx("pre",{className:"code",children:`function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3)); // 6`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Default parameters"}),t.jsx("p",{children:"Default values are used if no argument is provided."}),t.jsx("pre",{className:"code",children:`function greet(name = "Guest") {
  return "Hello " + name;
}

console.log(greet()); // Hello Guest`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Template literals"}),t.jsx("p",{children:"Template literals use backticks and allow string interpolation."}),t.jsx("pre",{className:"code",children:'const name = "Ash";\nconst message = `Welcome ${name}`;\n\nconsole.log(message); // Welcome Ash'})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Modules"}),t.jsx("p",{children:"Modules allow splitting code into separate files for better structure."})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"export"}),t.jsx("pre",{className:"code",children:`// math.js
export function add(a, b) {
  return a + b;
}`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"import"}),t.jsx("pre",{className:"code",children:`// main.js
import { add } from "./math.js";

console.log(add(2, 3)); // 5`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Classes"}),t.jsx("p",{children:"Classes provide a cleaner syntax for creating objects and constructors."}),t.jsx("pre",{className:"code",children:`class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return "Hi " + this.name;
  }
}

const p = new Person("Ash");
console.log(p.greet()); // Hi Ash`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Static methods"}),t.jsx("p",{children:"Static methods belong to the class itself, not instances."}),t.jsx("pre",{className:"code",children:`class MathUtil {
  static double(n) {
    return n * 2;
  }
}

console.log(MathUtil.double(5)); // 10`})]})]})]})},Nx={Wrapper:ie.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 10px 25px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 14px 16px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            display: grid;
            place-items: center;
            width: 28px;
            height: 28px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
        }

        .icon {
            display: grid;
            place-items: center;
            width: 36px;
            height: 36px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            font-size: 18px;
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            padding: 6px 10px;
            border-radius: 999px;
            background: var(--color-bg);
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 9000px;
        }

        .section {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
        }

        .section:last-child {
            border-bottom: none;
        }

        .h3 {
            font-size: 16px;
            margin-bottom: 8px;
            color: var(--color-text-primary);
        }

        .p {
            font-size: 14px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            margin: 0;
        }

        .codeBlock {
            margin-top: 12px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 14px;
            overflow: hidden;
        }

        .codeTop {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-secondary);
            font-weight: 800;
            font-size: 12px;
            background: var(--color-surface-2);
        }

        .codeIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
            font-size: 14px;
        }

        .code {
            margin: 0;
            padding: 12px;
            font-size: 13px;
            line-height: 1.6;
            color: var(--color-text-secondary);
            overflow-x: auto;
            white-space: pre;
        }
    `},wx=()=>{const[s,c]=ae.useState(!1),i=()=>c(u=>!u);return t.jsxs(Nx.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:i,"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(ke,{}):t.jsx(Se,{})}),t.jsx("span",{className:"icon",children:t.jsx(rp,{})}),t.jsx("span",{className:"title",children:"DOM Manipulation"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"DOM Manipulation"}),t.jsx("p",{className:"p",children:"DOM means Document Object Model. When the browser reads HTML, it creates a tree of elements. JavaScript can select elements from this tree and change them."})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Selecting elements"}),t.jsx("p",{className:"p",children:"To change anything, first you select it. The most common selectors are getElementById and querySelector."})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"getElementById"}),t.jsx("p",{className:"p",children:"Selects one element by its id. It is fast and returns a single element or null."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Example"]}),t.jsx("pre",{className:"code",children:`// HTML
// <h1 id="title">Hello</h1>

const el = document.getElementById("title");
console.log(el.textContent);
// Output: Hello`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"querySelector"}),t.jsx("p",{className:"p",children:"Selects the first element that matches a CSS selector. Works with classes, ids, tags, and combinations."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Example"]}),t.jsx("pre",{className:"code",children:`// HTML
// <div class="card"><p class="text">Hi</p></div>

const p = document.querySelector(".card .text");
console.log(p.textContent);
// Output: Hi`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Changing content"}),t.jsx("p",{className:"p",children:"Use textContent for plain text and innerHTML for HTML. Prefer textContent when possible."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Example"]}),t.jsx("pre",{className:"code",children:`// HTML
// <p id="msg">Old</p>

const msg = document.getElementById("msg");
msg.textContent = "New";
console.log(msg.textContent);
// Output: New`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Changing styles"}),t.jsx("p",{className:"p",children:"You can change inline styles using element.style. For bigger styling changes, classList is usually better."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Example"]}),t.jsx("pre",{className:"code",children:`// HTML
// <div id="box"></div>

const box = document.getElementById("box");
box.style.width = "120px";
box.style.height = "60px";
box.style.backgroundColor = "black";
// Result: box becomes a 120x60 black rectangle`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Creating elements"}),t.jsx("p",{className:"p",children:"Use document.createElement to create a new element, then append it to the page."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Example"]}),t.jsx("pre",{className:"code",children:`// HTML
// <div id="root"></div>

const root = document.getElementById("root");

const btn = document.createElement("button");
btn.textContent = "Click me";

root.appendChild(btn);
// Result: a button appears inside #root`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Removing elements"}),t.jsx("p",{className:"p",children:"You can remove an element using element.remove(). This removes it from the DOM."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Example"]}),t.jsx("pre",{className:"code",children:`// HTML
// <p id="temp">Delete me</p>

const temp = document.getElementById("temp");
temp.remove();
// Result: the paragraph disappears`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"classList"}),t.jsx("p",{className:"p",children:"classList is the clean way to add, remove, or toggle CSS classes on an element."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Example"]}),t.jsx("pre",{className:"code",children:`// HTML
// <div id="card" class="card"></div>

const card = document.getElementById("card");

card.classList.add("active");
// Result: class becomes "card active"

card.classList.toggle("active");
// Result: removes "active" if present, otherwise adds it`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Attributes"}),t.jsx("p",{className:"p",children:"Attributes are values on HTML elements like href, src, alt, and data-* values. Use getAttribute and setAttribute to work with them."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Example"]}),t.jsx("pre",{className:"code",children:`// HTML
// <a id="link" href="https://example.com">Open</a>

const link = document.getElementById("link");

console.log(link.getAttribute("href"));
// Output: https://example.com

link.setAttribute("target", "_blank");
// Result: link opens in new tab`})]})]})]})]})},bx={Wrapper:ie.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 10px 25px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 14px 16px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            display: grid;
            place-items: center;
            width: 28px;
            height: 28px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
        }

        .icon {
            display: grid;
            place-items: center;
            width: 36px;
            height: 36px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            font-size: 18px;
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            padding: 6px 10px;
            border-radius: 999px;
            background: var(--color-bg);
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 9000px;
        }

        .section {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
        }

        .section:last-child {
            border-bottom: none;
        }

        .h3 {
            font-size: 16px;
            margin-bottom: 8px;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .hIcon {
            width: 28px;
            height: 28px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            display: grid;
            place-items: center;
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .p {
            font-size: 14px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            margin: 0;
        }

        .codeBlock {
            margin-top: 12px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .codeTop {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-secondary);
            font-weight: 800;
            font-size: 12px;
            letter-spacing: 0.2px;
            background: var(--color-surface);
        }

        .codeIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
            font-size: 14px;
        }

        .code {
            margin: 0;
            padding: 12px;
            font-size: 13px;
            line-height: 1.6;
            color: var(--color-text-secondary);
            overflow-x: auto;
            white-space: pre;
        }
    `},kx=()=>{const[s,c]=ae.useState(!1),i=()=>c(u=>!u);return t.jsxs(bx.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:i,"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(ke,{}):t.jsx(Se,{})}),t.jsx("span",{className:"icon",children:t.jsx(Pr,{})}),t.jsx("span",{className:"title",children:"Events"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Events"}),t.jsx("p",{className:"p",children:"Events are signals that something happened - like a click, key press, scroll, submit, or page load. JavaScript listens to events and runs code when they happen."})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(rp,{})}),"addEventListener"]}),t.jsx("p",{className:"p",children:"addEventListener attaches a function to run when an event happens on an element."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Basic click listener"]}),t.jsx("pre",{className:"code",children:`const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  console.log("clicked"); // output - clicked
});`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(wu,{})}),"Event object"]}),t.jsx("p",{className:"p",children:"The event object is passed to your listener. It contains details like what type of event happened and which element triggered it."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Reading event data"]}),t.jsx("pre",{className:"code",children:`document.addEventListener("click", (e) => {
  console.log(e.type); // output - click
  console.log(e.target.tagName); // output - BUTTON (example)
});`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx($a,{})}),"Event bubbling"]}),t.jsx("p",{className:"p",children:"Bubbling means the event starts at the target element and then moves upward through its parent elements. This is the default behavior."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Bubbling example"]}),t.jsx("pre",{className:"code",children:`const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

parent.addEventListener("click", () => {
  console.log("parent"); // output - parent
});

child.addEventListener("click", () => {
  console.log("child"); // output - child
});

// click on .child
// output order - child then parent`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx($a,{})}),"Event capturing"]}),t.jsx("p",{className:"p",children:"Capturing means the event travels from the top (document) down to the target element. It happens before bubbling. You enable it using the third parameter or capture option."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Capturing enabled"]}),t.jsx("pre",{className:"code",children:`parent.addEventListener("click", () => {
  console.log("parent capture"); // output - parent capture
}, true);

child.addEventListener("click", () => {
  console.log("child"); // output - child
});

// click on .child
// output order - parent capture then child`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(wu,{})}),"Event delegation"]}),t.jsx("p",{className:"p",children:"Delegation means you attach one listener to a parent and handle events for its children using e.target. This is useful for dynamic lists where items are added later."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"One listener for many buttons"]}),t.jsx("pre",{className:"code",children:`const list = document.querySelector(".list");

list.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    console.log("button clicked"); // output - button clicked
  }
});`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Om,{})}),"preventDefault"]}),t.jsx("p",{className:"p",children:"preventDefault stops the browser's default action. Example: stop a form from submitting or stop a link from navigating."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Stop form submit"]}),t.jsx("pre",{className:"code",children:`const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("blocked submit"); // output - blocked submit
});`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Mm,{})}),"stopPropagation"]}),t.jsx("p",{className:"p",children:"stopPropagation stops the event from moving further in the bubbling or capturing chain. Use it when you do not want parent listeners to run."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Stop bubbling to parent"]}),t.jsx("pre",{className:"code",children:`parent.addEventListener("click", () => {
  console.log("parent"); // output - parent
});

child.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("child only"); // output - child only
});

// click on .child
// output - child only`})]})]})]})]})},Sx={Wrapper:ie.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 10px 25px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 14px 16px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            display: grid;
            place-items: center;
            width: 28px;
            height: 28px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
        }

        .icon {
            display: grid;
            place-items: center;
            width: 36px;
            height: 36px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            font-size: 18px;
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            padding: 6px 10px;
            border-radius: 999px;
            background: var(--color-bg);
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 14000px;
        }

        .section {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
        }

        .section:last-child {
            border-bottom: none;
        }

        h3 {
            font-size: 16px;
            margin-bottom: 8px;
        }

        p {
            font-size: 14px;
            line-height: 1.7;
            color: var(--color-text-secondary);
            margin: 0;
        }

        .note {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 12px;
            color: var(--color-text-secondary);
            display: flex;
            gap: 10px;
            align-items: flex-start;
            line-height: 1.6;
            font-size: 14px;
        }

        .noteIcon {
            color: var(--color-primary);
            margin-top: 2px;
            flex: 0 0 auto;
        }

        .codeBlock {
            margin-top: 12px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .codeTop {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-secondary);
            font-weight: 800;
            font-size: 12px;
            background: var(--color-surface);
        }

        .codeIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
            font-size: 14px;
        }

        .code {
            margin: 0;
            padding: 12px;
            font-size: 13px;
            line-height: 1.6;
            color: var(--color-text-secondary);
            overflow-x: auto;
            white-space: pre;
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }
    `},Cx=()=>{const[s,c]=ae.useState(!1),i=()=>c(u=>!u);return t.jsxs(Sx.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:i,"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(ke,{}):t.jsx(Se,{})}),t.jsx("span",{className:"icon",children:t.jsx(Oa,{})}),t.jsx("span",{className:"title",children:"Asynchronous JavaScript"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Basics"}),t.jsx("p",{children:"JavaScript runs code in a single main thread. Async code lets you start a task now and handle its result later, without freezing the UI or blocking other work."})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Synchronous vs asynchronous"}),t.jsx("p",{children:"Synchronous code runs line by line and waits for each step to finish. Asynchronous code starts a task and continues running the next lines, then comes back when the task is done."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Sync vs async example"]}),t.jsx("pre",{className:"code",children:`console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

console.log("C");

// output:
// A
// C
// B`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Blocking vs non blocking"}),t.jsx("p",{children:"Blocking means the main thread cannot do anything else until a task finishes. Non-blocking means the task is handled in the background and the main thread keeps running."}),t.jsxs("div",{className:"note",children:[t.jsx("span",{className:"noteIcon",children:t.jsx(Ku,{})}),"In the browser, network requests and timers are handled by Web APIs, so your UI stays responsive."]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Timers"}),t.jsx("p",{children:"Timers schedule code to run later or repeatedly. They do not pause JavaScript. They register a callback and JavaScript continues running."})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"setTimeout"}),t.jsx("p",{children:"setTimeout runs a function once after a delay in milliseconds."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(Oa,{})}),"Run once after delay"]}),t.jsx("pre",{className:"code",children:`console.log("Start");

setTimeout(() => {
  console.log("After 1 second");
}, 1000);

console.log("End");

// output:
// Start
// End
// After 1 second`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"setInterval"}),t.jsx("p",{children:"setInterval runs a function repeatedly after every given delay. You should clear it when you are done."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(Oa,{})}),"Repeat every second"]}),t.jsx("pre",{className:"code",children:`let count = 0;

const id = setInterval(() => {
  count += 1;
  console.log("Tick:", count);

  if (count === 3) {
    clearInterval(id);
  }
}, 1000);

// output:
// Tick: 1
// Tick: 2
// Tick: 3`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Promises"}),t.jsx("p",{children:"A Promise represents a value that will be available in the future. It can be pending, fulfilled, or rejected."})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Creating promises"}),t.jsx("p",{children:"You create a Promise using new Promise with resolve and reject functions."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(Pr,{})}),"Create a promise"]}),t.jsx("pre",{className:"code",children:`const p = new Promise((resolve, reject) => {
  const ok = true;

  setTimeout(() => {
    if (ok) resolve("Done");
    else reject("Failed");
  }, 500);
});

p.then((msg) => console.log(msg));
// output:
// Done`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"then"}),t.jsx("p",{children:"then runs when the Promise is fulfilled and gives you the resolved value."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"then example"]}),t.jsx("pre",{className:"code",children:`Promise.resolve(10)
  .then((n) => n * 2)
  .then((n) => console.log(n));

// output:
// 20`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"catch"}),t.jsx("p",{children:"catch runs when the Promise is rejected. It is used for error handling."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"catch example"]}),t.jsx("pre",{className:"code",children:`Promise.reject("Oops")
  .catch((err) => console.log("Error:", err));

// output:
// Error: Oops`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"finally"}),t.jsx("p",{children:"finally runs after the Promise settles, whether it is fulfilled or rejected. Useful for cleanup."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"finally example"]}),t.jsx("pre",{className:"code",children:`Promise.resolve("OK")
  .then((v) => console.log(v))
  .finally(() => console.log("Cleanup"));

// output:
// OK
// Cleanup`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Async Await"}),t.jsx("p",{children:"async and await are a cleaner way to work with Promises. async makes a function return a Promise. await pauses inside that async function until the Promise resolves."})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"async function"}),t.jsx("p",{children:"An async function always returns a Promise, even if you return a normal value."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(Pr,{})}),"async returns a promise"]}),t.jsx("pre",{className:"code",children:`async function getNumber() {
  return 5;
}

getNumber().then((v) => console.log(v));

// output:
// 5`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"await keyword"}),t.jsx("p",{children:"await waits for a Promise to resolve and gives you the resolved value. You can only use await inside an async function."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(Pr,{})}),"await example"]}),t.jsx("pre",{className:"code",children:`const wait = (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms));

async function run() {
  console.log("A");
  await wait(300);
  console.log("B");
}

run();

// output:
// A
// B`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"try catch"}),t.jsx("p",{children:"Use try catch with async await to handle rejected Promises in a clean way."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Error handling with try catch"]}),t.jsx("pre",{className:"code",children:`const fail = () =>
  Promise.reject("Network error");

async function load() {
  try {
    const res = await fail();
    console.log(res);
  } catch (err) {
    console.log("Caught:", err);
  }
}

load();

// output:
// Caught: Network error`})]})]})]})]})},Ex={Wrapper:ie.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 10px 25px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 14px 16px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            display: grid;
            place-items: center;
            width: 28px;
            height: 28px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .icon {
            display: grid;
            place-items: center;
            width: 36px;
            height: 36px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            font-size: 18px;
            flex: 0 0 auto;
        }

        .title {
            font-weight: 900;
            flex: 1;
            letter-spacing: 0.2px;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            padding: 6px 10px;
            border-radius: 999px;
            background: var(--color-bg);
            white-space: nowrap;
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 9000px;
        }

        .section {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
        }

        .section:last-child {
            border-bottom: none;
        }

        h3 {
            font-size: 16px;
            margin-bottom: 8px;
            color: var(--color-text-primary);
        }

        p {
            font-size: 14px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            margin: 0;
        }

        .bullets {
            list-style: none;
            padding-left: 0;
            margin-top: 10px;
            display: grid;
            gap: 10px;
        }

        .bullets li {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 14px;
            color: var(--color-text-secondary);
        }

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-primary);
            flex: 0 0 auto;
        }

        .codeBlock {
            margin-top: 12px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .codeTop {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-secondary);
            font-weight: 800;
            font-size: 12px;
            letter-spacing: 0.2px;
            background: var(--color-surface);
        }

        .codeIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
            font-size: 14px;
        }

        .code {
            margin: 0;
            padding: 12px;
            font-size: 13px;
            line-height: 1.6;
            color: var(--color-text-secondary);
            overflow-x: auto;
            white-space: pre;
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }

        .tip {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
            padding: 12px;
        }

        .tipTitle {
            font-weight: 900;
            margin-bottom: 6px;
            color: var(--color-text-primary);
        }

        .tipText {
            font-size: 13px;
            line-height: 1.6;
            color: var(--color-text-secondary);
            white-space: pre-line;
        }
    `},Tx=()=>{const[s,c]=ae.useState(!1),i=()=>c(u=>!u);return t.jsxs(Ex.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:i,"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(ke,{}):t.jsx(Se,{})}),t.jsx("span",{className:"icon",children:t.jsx(bm,{})}),t.jsx("span",{className:"title",children:"Fetch and APIs"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Fetch and APIs"}),t.jsx("p",{children:"An API is a way for your app to talk to another service over the internet. Most web APIs use HTTP and send data as JSON. In the browser, the most common way to call an API is using fetch()."})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Fetch API"}),t.jsx("p",{children:"fetch() makes an HTTP request and returns a Promise. The first await gives you a Response object. The second await reads the body data, usually with response.json()."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Basic GET request"]}),t.jsx("pre",{className:"code",children:`async function loadUser() {
  const res = await fetch('https://api.example.com/user/1');
  const data = await res.json();

  console.log(data);
  // output - { id: 1, name: 'Alex' }
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"HTTP methods"}),t.jsx("p",{children:"HTTP methods describe what action you want to perform on a resource."}),t.jsxs("ul",{className:"bullets",children:[t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"GET - read data"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"POST - create new data"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"PUT - replace data"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"PATCH - update part of data"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"DELETE - remove data"]})]}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(Bm,{})}),"POST request example"]}),t.jsx("pre",{className:"code",children:`async function createUser() {
  const res = await fetch('https://api.example.com/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: 'Sam' }),
  });

  const data = await res.json();
  console.log(data);
  // output - { id: 101, name: 'Sam' }
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"JSON"}),t.jsx("p",{children:"JSON stands for JavaScript Object Notation. It is a text format used to send data between systems. You usually convert objects to JSON using JSON.stringify and convert JSON text back to objects using JSON.parse."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(Zu,{})}),"JSON stringify and parse"]}),t.jsx("pre",{className:"code",children:`const obj = { name: 'Riya', age: 22 };

const jsonText = JSON.stringify(obj);
console.log(jsonText);
// output - {"name":"Riya","age":22}

const backToObj = JSON.parse(jsonText);
console.log(backToObj);
// output - { name: 'Riya', age: 22 }`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Handling API responses"}),t.jsx("p",{children:"fetch() resolves even for many HTTP errors like 404 or 500. So you should check response.ok or response.status before reading data. Also remember that response.json() can throw if the body is not valid JSON."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Checking status properly"]}),t.jsx("pre",{className:"code",children:`async function getProducts() {
  const res = await fetch('https://api.example.com/products');

  if (!res.ok) {
    console.log('Request failed');
    // output - Request failed
    return;
  }

  const data = await res.json();
  console.log(data);
  // output - [ { id: 1, title: 'Phone' } ]
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Error handling"}),t.jsx("p",{children:"Use try/catch to handle network failures, JSON parsing failures, and your own thrown errors. For a clean flow, throw a custom error when response.ok is false."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(qu,{})}),"try/catch with custom error"]}),t.jsx("pre",{className:"code",children:`async function loadProfile() {
  try {
    const res = await fetch('https://api.example.com/profile');

    if (!res.ok) {
      throw new Error('Server returned an error');
    }

    const data = await res.json();
    console.log('Profile loaded', data);
    // output - Profile loaded { id: 7, name: 'Neha' }
  } catch (err) {
    console.log('Something went wrong', err.message);
    // output - Something went wrong Server returned an error
  }
}`})]}),t.jsxs("div",{className:"tip",children:[t.jsx("div",{className:"tipTitle",children:"Tip"}),t.jsx("div",{className:"tipText",children:"Network error - fetch rejects and goes to catch. HTTP error - fetch does not reject, so check res.ok."})]})]})]})]})},zx={Wrapper:ie.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px 14px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-bg);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .icon {
            width: 36px;
            height: 36px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            font-size: 18px;
            flex: 0 0 auto;
        }

        .title {
            font-weight: 900;
            letter-spacing: 0.2px;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            white-space: nowrap;
            flex: 0 0 auto;
        }

        .topicBody {
            max-height: 0px;
            overflow: hidden;
            transition: max-height 260ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 14000px;
        }

        .section {
            padding: 14px 14px;
        }

        .section + .section {
            border-top: 1px dashed var(--color-border-light);
        }

        .h3 {
            font-size: 16px;
            margin-bottom: 8px;
        }

        .h4 {
            font-size: 14px;
            margin-bottom: 8px;
            color: var(--color-text-primary);
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-size: 14px;
        }

        .subSection {
            margin-top: 12px;
            padding-top: 12px;
            border-top: 1px solid var(--color-border);
        }

        .codeBlock {
            margin-top: 12px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .codeTop {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-secondary);
            font-weight: 800;
            font-size: 12px;
            letter-spacing: 0.2px;
            background: var(--color-surface);
        }

        .codeIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
            font-size: 14px;
        }

        .code {
            margin: 0;
            padding: 12px;
            font-size: 13px;
            line-height: 1.6;
            color: var(--color-text-secondary);
            overflow-x: auto;
            white-space: pre;
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }
    `},Ix=()=>{const[s,c]=ae.useState(!1),i=()=>c(u=>!u);return t.jsxs(zx.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:i,"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(ke,{}):t.jsx(Se,{})}),t.jsx("span",{className:"icon",children:t.jsx(Pr,{})}),t.jsx("span",{className:"title",children:"Advanced Concepts - Must Know"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Closures"}),t.jsx("p",{className:"p",children:"A closure happens when a function remembers variables from its outer scope, even after the outer function has finished executing. This is why inner functions can access outer variables later."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Closure example"]}),t.jsx("pre",{className:"code",children:`function makeCounter() {
  let count = 0;

  return function () {
    count += 1;
    return count;
  };
}

const counter = makeCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3`})]}),t.jsx("p",{className:"p",children:"Practical use cases - data privacy, function factories, memoization, and keeping state without global variables."})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"this keyword"}),t.jsx("p",{className:"p",children:"this is a special keyword that usually points to the object that is calling the function. The value of this depends on how a function is called, not where it is written."}),t.jsxs("div",{className:"subSection",children:[t.jsx("h4",{className:"h4",children:"Global context"}),t.jsx("p",{className:"p",children:"In a browser, this in global scope typically refers to window. In modules, top-level this is undefined."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Global this"]}),t.jsx("pre",{className:"code",children:`// Browser script (not module)
console.log(this === window); // true`})]})]}),t.jsxs("div",{className:"subSection",children:[t.jsx("h4",{className:"h4",children:"Function context"}),t.jsx("p",{className:"p",children:"When a function is called normally, this depends on strict mode. In strict mode, this is undefined."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Function this"]}),t.jsx("pre",{className:"code",children:`function show() {
  'use strict';
  console.log(this); // undefined
}

show();`})]})]}),t.jsxs("div",{className:"subSection",children:[t.jsx("h4",{className:"h4",children:"Arrow function behavior"}),t.jsx("p",{className:"p",children:"Arrow functions do not have their own this. They inherit this from the surrounding scope. This makes them useful for callbacks."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Arrow this"]}),t.jsx("pre",{className:"code",children:`const user = {
  name: 'Ash',
  sayLater: function () {
    setTimeout(() => {
      console.log(this.name); // 'Ash'
    }, 10);
  },
};

user.sayLater();`})]})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"call - apply - bind"}),t.jsx("p",{className:"p",children:"call and apply invoke a function immediately with a chosen this value. bind returns a new function with this fixed permanently."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(np,{})}),"call - apply - bind"]}),t.jsx("pre",{className:"code",children:`function greet(city, role) {
  console.log('Hi ' + this.name + ' from ' + city + ' - ' + role);
}

const person = { name: 'Ash' };

greet.call(person, 'Bangalore', 'Developer');
// Hi Ash from Bangalore - Developer

greet.apply(person, ['Bangalore', 'Developer']);
// Hi Ash from Bangalore - Developer

const boundGreet = greet.bind(person);
boundGreet('Bangalore', 'Developer');
// Hi Ash from Bangalore - Developer`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Prototypes"}),t.jsx("p",{className:"p",children:"JavaScript objects can inherit properties from other objects using prototypes. When you access a property, JavaScript first checks the object, then checks its prototype chain."}),t.jsxs("div",{className:"subSection",children:[t.jsx("h4",{className:"h4",children:"Prototype chain"}),t.jsx("p",{className:"p",children:"If a property is not found on the object, JavaScript searches on its prototype, then that prototype's prototype, and so on, until it reaches null."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(Em,{})}),"Prototype chain lookup"]}),t.jsx("pre",{className:"code",children:`const base = { canRun: true };
const user = Object.create(base);

user.name = 'Ash';

console.log(user.canRun); // true
// not found on user, found on base`})]})]}),t.jsxs("div",{className:"subSection",children:[t.jsx("h4",{className:"h4",children:"__proto__"}),t.jsx("p",{className:"p",children:"__proto__ points to an object's prototype. It is mostly used for learning and debugging. Prefer Object.getPrototypeOf in real code."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"proto check"]}),t.jsx("pre",{className:"code",children:`const base = { canRun: true };
const user = Object.create(base);

console.log(user.__proto__ === base); // true
console.log(Object.getPrototypeOf(user) === base); // true`})]})]}),t.jsxs("div",{className:"subSection",children:[t.jsx("h4",{className:"h4",children:"constructor function"}),t.jsx("p",{className:"p",children:"Before classes, constructor functions were used to create objects. Shared methods are placed on the constructor's prototype so all instances can use them without duplication."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Constructor + prototype"]}),t.jsx("pre",{className:"code",children:`function Person(name) {
  this.name = name;
}

Person.prototype.sayHi = function () {
  console.log('Hi ' + this.name);
};

const p1 = new Person('Ash');
const p2 = new Person('Neha');

p1.sayHi(); // Hi Ash
p2.sayHi(); // Hi Neha`})]}),t.jsx("p",{className:"p",children:"Key idea - methods on Person.prototype are shared, but properties created inside Person are per instance."})]})]})]})]})},Px={Wrapper:ie.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 10px 25px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 14px 16px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            display: grid;
            place-items: center;
            width: 28px;
            height: 28px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
        }

        .icon {
            display: grid;
            place-items: center;
            width: 36px;
            height: 36px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            padding: 6px 10px;
            border-radius: 999px;
            background: var(--color-bg);
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 5000px;
        }

        .section {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
        }

        .section:last-child {
            border-bottom: none;
        }

        h3 {
            font-size: 16px;
            margin-bottom: 8px;
        }

        p {
            font-size: 14px;
            line-height: 1.6;
            color: var(--color-text-secondary);
        }

        .code {
            margin-top: 10px;
            padding: 12px;
            background: var(--color-surface-2);
            border: 1px solid var(--color-border);
            border-radius: 12px;
            font-size: 13px;
            overflow-x: auto;
        }
    `},Lx=()=>{const[s,c]=ae.useState(!1);return t.jsxs(Px.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:()=>c(i=>!i),"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(ke,{}):t.jsx(Se,{})}),t.jsx("span",{className:"icon",children:t.jsx(Xu,{})}),t.jsx("span",{className:"title",children:"Classes and OOP"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Class syntax"}),t.jsx("p",{children:"A class is a blueprint for creating objects. It groups properties and methods together. Classes were introduced in ES6 to make object oriented programming clearer."}),t.jsx("pre",{className:"code",children:`class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return "Hello " + this.name;
  }
}

const user = new Person("Ashish");
console.log(user.greet());
// Hello Ashish`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Constructor"}),t.jsx("p",{children:"The constructor is a special method that runs automatically when a new object is created using new. It initializes properties."}),t.jsx("pre",{className:"code",children:`class Car {
  constructor(brand) {
    this.brand = brand;
  }
}

const c = new Car("Tesla");
console.log(c.brand);
// Tesla`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Methods"}),t.jsx("p",{children:"Methods are functions defined inside a class. They describe behavior of the object."}),t.jsx("pre",{className:"code",children:`class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }
}

const counter = new Counter();
counter.increment();
console.log(counter.count);
// 1`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Inheritance"}),t.jsx("p",{children:"Inheritance allows one class to reuse properties and methods of another class using extends."}),t.jsx("pre",{className:"code",children:`class Animal {
  speak() {
    return "Animal sound";
  }
}

class Dog extends Animal {
}

const d = new Dog();
console.log(d.speak());
// Animal sound`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"super"}),t.jsx("p",{children:"The super keyword is used to call the parent class constructor or methods."}),t.jsx("pre",{className:"code",children:`class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
}

const dog = new Dog("Tommy", "Labrador");
console.log(dog.name);
// Tommy`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Encapsulation concept"}),t.jsx("p",{children:"Encapsulation means hiding internal details and exposing only what is necessary. In modern JavaScript, private fields are defined using #."}),t.jsx("pre",{className:"code",children:`class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const acc = new BankAccount();
acc.deposit(1000);
console.log(acc.getBalance());
// 1000

// console.log(acc.#balance);
// SyntaxError - private field not accessible`})]})]})]})},Bx={Wrapper:ie.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 10px 25px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 14px 16px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-bg);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .icon {
            width: 36px;
            height: 36px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            flex: 0 0 auto;
            font-size: 18px;
        }

        .title {
            font-weight: 900;
            flex: 1;
            letter-spacing: 0.2px;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            padding: 6px 10px;
            border-radius: 999px;
            background: var(--color-bg);
            white-space: nowrap;
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 12000px;
        }

        .section {
            padding: 16px;
        }

        .section + .section {
            border-top: 1px dashed var(--color-border-light);
        }

        .h3 {
            font-size: 16px;
            margin-bottom: 8px;
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-size: 14px;
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            color: var(--color-text-primary);
        }

        .codeBlock {
            margin-top: 12px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .codeTop {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-secondary);
            font-weight: 800;
            font-size: 12px;
            letter-spacing: 0.2px;
            background: var(--color-surface);
        }

        .codeIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
            font-size: 14px;
        }

        .code {
            margin: 0;
            padding: 12px;
            font-size: 13px;
            line-height: 1.6;
            color: var(--color-text-secondary);
            overflow-x: auto;
            white-space: pre;
        }

        .callout {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
            padding: 12px;
        }

        .calloutTitle {
            font-weight: 900;
            margin-bottom: 8px;
            color: var(--color-text-primary);
        }

        .calloutText {
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-size: 14px;
        }

        .footerNote {
            padding: 16px;
            border-top: 1px solid var(--color-border);
            background: var(--color-surface-2);
        }

        .footerTitle {
            font-weight: 900;
            margin-bottom: 10px;
            color: var(--color-text-primary);
        }

        .checks {
            list-style: none;
            padding-left: 0;
            display: grid;
            gap: 10px;
            margin: 0;
        }

        .checks li {
            display: flex;
            align-items: center;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.6;
        }

        .checkDot {
            width: 10px;
            height: 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            box-shadow: inset 0 0 0 2px var(--color-primary);
            flex: 0 0 auto;
        }
    `},_x=()=>{const[s,c]=ae.useState(!1),i=()=>c(u=>!u);return t.jsxs(Bx.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:i,"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(ke,{}):t.jsx(Se,{})}),t.jsx("span",{className:"icon",children:t.jsx(Ss,{})}),t.jsx("span",{className:"title",children:"Memory and Performance"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Stack vs heap"}),t.jsx("p",{className:"p",children:"JavaScript uses two main memory areas. The stack stores short-lived data like function calls and primitive values. The heap stores objects, arrays, and functions because they can be larger and live longer."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Stack (primitive) vs Heap (object)"]}),t.jsx("pre",{className:"code",children:`let a = 10;           // stack
let user = { name: "Ash" }; // heap (object lives in heap)

// user variable holds a reference (address) on stack`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Garbage collection"}),t.jsx("p",{className:"p",children:"Garbage collection is how JavaScript frees unused heap memory automatically. When an object is no longer reachable from your code, the engine can clean it up. You do not manually free memory in JavaScript."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Unreachable objects get cleaned"]}),t.jsx("pre",{className:"code",children:`let obj = { x: 1 };   // heap
obj = null;            // object becomes unreachable
// later: GC can free that memory`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Reference vs value"}),t.jsx("p",{className:"p",children:"Primitives are copied by value, so each variable gets its own separate value. Objects and arrays are copied by reference, meaning variables can point to the same object in heap."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Value copy (primitive)"]}),t.jsx("pre",{className:"code",children:`let x = 5;
let y = x;
y = 99;

console.log(x); // 5
console.log(y); // 99`})]}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Reference copy (object)"]}),t.jsx("pre",{className:"code",children:`const a = { score: 10 };
const b = a;

b.score = 99;

console.log(a.score); // 99
console.log(b.score); // 99`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Shallow copy vs deep copy"}),t.jsx("p",{className:"p",children:"A shallow copy copies the top-level structure but still shares nested references. A deep copy duplicates nested objects too, so changes do not leak back."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Shallow copy (spread)"]}),t.jsx("pre",{className:"code",children:`const original = { name: "Ash", meta: { level: 1 } };
const copy = { ...original };

copy.name = "Bro";
copy.meta.level = 99;

console.log(original.name);      // "Ash"
console.log(original.meta.level); // 99 (shared nested object)`})]}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Deep copy (structuredClone)"]}),t.jsx("pre",{className:"code",children:`const original = { name: "Ash", meta: { level: 1 } };
const deep = structuredClone(original);

deep.meta.level = 99;

console.log(original.meta.level); // 1
console.log(deep.meta.level);     // 99`})]}),t.jsxs("div",{className:"callout",children:[t.jsx("div",{className:"calloutTitle",children:"Quick tip"}),t.jsxs("div",{className:"calloutText",children:["Use ",t.jsx("span",{className:"mono",children:"structuredClone"})," ","when available. For older environments, you may use JSON clone for simple data, but it breaks for dates, functions, undefined, and special types."]})]})]}),t.jsxs("div",{className:"footerNote",children:[t.jsx("div",{className:"footerTitle",children:"Practical mindset"}),t.jsxs("ul",{className:"checks",children:[t.jsxs("li",{children:[t.jsx("span",{className:"checkDot"})," Prefer immutability in state updates"]}),t.jsxs("li",{children:[t.jsx("span",{className:"checkDot"})," Watch out for shared nested objects"]}),t.jsxs("li",{children:[t.jsx("span",{className:"checkDot"})," Avoid keeping large unused objects referenced"]})]})]})]})]})},Ox={Wrapper:ie.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 10px 25px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 14px 16px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            display: grid;
            place-items: center;
            width: 28px;
            height: 28px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
        }

        .icon {
            display: grid;
            place-items: center;
            width: 36px;
            height: 36px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            padding: 6px 10px;
            border-radius: 999px;
            background: var(--color-bg);
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 4000px;
        }

        .section {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
        }

        .section:last-child {
            border-bottom: none;
        }

        h3 {
            font-size: 16px;
            margin-bottom: 8px;
        }

        p {
            font-size: 14px;
            line-height: 1.6;
            color: var(--color-text-secondary);
            margin-bottom: 8px;
        }

        .code {
            margin-top: 8px;
            padding: 12px;
            background: var(--color-surface-2);
            border: 1px solid var(--color-border-light);
            border-radius: 12px;
            font-size: 13px;
            overflow-x: auto;
        }
    `},Ax=()=>{const[s,c]=ae.useState(!1),i=()=>c(u=>!u);return t.jsxs(Ox.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:i,"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(ke,{}):t.jsx(Se,{})}),t.jsx("span",{className:"icon",children:t.jsx(Pm,{})}),t.jsx("span",{className:"title",children:"Modules"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"ES modules"}),t.jsx("p",{children:"ES modules allow JavaScript code to be split into reusable files. Each file is treated as its own module with its own scope. Nothing leaks to the global scope unless exported."}),t.jsx("pre",{className:"code",children:`// math.js
export const add = (a, b) => a + b;

// app.js
import { add } from "./math.js";

console.log(add(2, 3));
// 5`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Default export"}),t.jsx("p",{children:"A module can have one default export. It is imported without curly braces and can be renamed during import."}),t.jsx("pre",{className:"code",children:`// greet.js
export default function greet(name) {
    return "Hello " + name;
}

// app.js
import greet from "./greet.js";

console.log(greet("Ashish"));
// Hello Ashish`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Named export"}),t.jsx("p",{children:"Named exports allow multiple values to be exported from a file. They must be imported using curly braces."}),t.jsx("pre",{className:"code",children:`// utils.js
export const PI = 3.14;
export const square = (n) => n * n;

// app.js
import { PI, square } from "./utils.js";

console.log(PI);
// 3.14

console.log(square(4));
// 16`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Dynamic import"}),t.jsx("p",{children:"Dynamic import allows modules to be loaded on demand. It returns a Promise. This is useful for lazy loading and performance optimization."}),t.jsx("pre",{className:"code",children:`// lazy load a module
import("./math.js")
    .then((module) => {
        console.log(module.add(5, 5));
        // 10
    })
    .catch((err) => {
        console.error(err);
    });`}),t.jsx("p",{children:"Dynamic import helps reduce initial bundle size by loading code only when needed."})]})]})]})},Mx={Wrapper:ie.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 10px 25px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 14px 16px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            display: grid;
            place-items: center;
            width: 28px;
            height: 28px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
        }

        .icon {
            display: grid;
            place-items: center;
            width: 36px;
            height: 36px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            padding: 6px 10px;
            border-radius: 999px;
            background: var(--color-bg);
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 4000px;
        }

        .section {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
        }

        .section:last-child {
            border-bottom: none;
        }

        h3 {
            font-size: 16px;
            margin-bottom: 8px;
        }

        p {
            font-size: 14px;
            line-height: 1.6;
            color: var(--color-text-secondary);
            margin-bottom: 10px;
        }

        .code {
            padding: 12px;
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            border-radius: 12px;
            font-size: 13px;
            overflow-x: auto;
        }
    `},Rx=()=>{const[s,c]=ae.useState(!1),i=()=>c(u=>!u);return t.jsxs(Mx.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:i,"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(ke,{}):t.jsx(Se,{})}),t.jsx("span",{className:"icon",children:t.jsx(Va,{})}),t.jsx("span",{className:"title",children:"Browser APIs"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"What are Browser APIs"}),t.jsx("p",{children:"Browser APIs are built-in features provided by the browser. JavaScript itself does not include storage, URL handling, or DOM access. The browser provides these capabilities."}),t.jsx("p",{children:"Examples include localStorage, sessionStorage, fetch, and URLSearchParams."})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"localStorage"}),t.jsx("p",{children:"localStorage stores data in the browser with no expiration. The data remains even after page refresh or browser restart."}),t.jsx("pre",{className:"code",children:`localStorage.setItem("name", "Ashish");

const value = localStorage.getItem("name");
console.log(value); 
// Output: Ashish

localStorage.removeItem("name");`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"sessionStorage"}),t.jsx("p",{children:"sessionStorage works like localStorage but data exists only for the current browser tab session. Closing the tab clears the data."}),t.jsx("pre",{className:"code",children:`sessionStorage.setItem("token", "12345");

const token = sessionStorage.getItem("token");
console.log(token);
// Output: 12345`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"JSON methods"}),t.jsx("p",{children:"localStorage stores only strings. To store objects, we convert them using JSON.stringify and JSON.parse."}),t.jsx("pre",{className:"code",children:`const user = { name: "Ashish", age: 25 };

const stringified = JSON.stringify(user);
console.log(stringified);
// Output: {"name":"Ashish","age":25}

const parsed = JSON.parse(stringified);
console.log(parsed.name);
// Output: Ashish`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"URLSearchParams"}),t.jsx("p",{children:"URLSearchParams helps read and modify query parameters in a URL."}),t.jsx("pre",{className:"code",children:`const params = new URLSearchParams("?id=10&name=ashish");

console.log(params.get("id"));
// Output: 10

console.log(params.get("name"));
// Output: ashish`})]})]})]})},Dx={Wrapper:ie.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 10px 25px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 14px 16px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            display: grid;
            place-items: center;
            width: 28px;
            height: 28px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .icon {
            display: grid;
            place-items: center;
            width: 36px;
            height: 36px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            font-size: 18px;
            flex: 0 0 auto;
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            padding: 6px 10px;
            border-radius: 999px;
            background: var(--color-bg);
            white-space: nowrap;
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 9000px;
        }

        .intro {
            padding: 14px 16px;
            border-bottom: 1px dashed var(--color-border-light);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
        }

        .section {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
        }

        .section:last-child {
            border-bottom: none;
        }

        .h3 {
            font-size: 16px;
            margin-bottom: 8px;
            color: var(--color-text-primary);
        }

        .p {
            margin: 0;
            font-size: 14px;
            line-height: 1.7;
            color: var(--color-text-secondary);
        }

        .p.muted {
            color: var(--color-text-muted);
            margin-top: 10px;
        }

        .code {
            margin-top: 12px;
            padding: 12px;
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            border-radius: 14px;
            font-size: 13px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            overflow-x: auto;
            white-space: pre;
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }

        .summary {
            padding: 16px;
            border-top: 1px solid var(--color-border);
            background: var(--color-surface-2);
        }

        .summaryRow {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-bottom: 10px;
        }

        .chip {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
            font-size: 12px;
            font-weight: 800;
        }

        @media (max-width: 720px) {
            .topicHeader {
                padding: 14px 12px;
            }

            .section {
                padding: 14px 12px;
            }

            .intro {
                padding: 14px 12px;
            }

            .summary {
                padding: 14px 12px;
            }
        }
    `},Fx=()=>{const[s,c]=ae.useState(!1),i=()=>c(u=>!u);return t.jsxs(Dx.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:i,"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(ke,{}):t.jsx(Se,{})}),t.jsx("span",{className:"icon",children:t.jsx(Ku,{})}),t.jsx("span",{className:"title",children:"Functional Programming Concepts"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsx("div",{className:"intro",children:t.jsx("p",{className:"p",children:"Functional programming in JavaScript means writing code that is predictable and easier to test. The big ideas are keeping data unchanged, using functions that return values, and avoiding hidden changes."})}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Immutability"}),t.jsx("p",{className:"p",children:"Immutability means you do not change the original data. Instead, you create a new copy with updates. This avoids unexpected bugs in large apps."}),t.jsx("pre",{className:"code",children:`// Bad - mutates original
const nums = [1, 2, 3];
nums.push(4);
console.log(nums); // [1, 2, 3, 4]

// Good - create a new array
const nums2 = [1, 2, 3];
const next = [...nums2, 4];
console.log(nums2); // [1, 2, 3]
console.log(next);  // [1, 2, 3, 4]`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"map vs forEach"}),t.jsx("p",{className:"p",children:"map returns a new array with transformed values. forEach does not return a new array, it is used for doing an action like logging or updating something outside."}),t.jsx("pre",{className:"code",children:`const nums = [1, 2, 3];

// map - returns a new array
const doubled = nums.map((n) => n * 2);
console.log(doubled); // [2, 4, 6]
console.log(nums);    // [1, 2, 3]

// forEach - returns undefined
const result = nums.forEach((n) => n * 2);
console.log(result);  // undefined`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Pure functions"}),t.jsx("p",{className:"p",children:"A pure function always gives the same output for the same input and does not change anything outside it. Pure functions are easier to debug and test."}),t.jsx("pre",{className:"code",children:`// Pure - depends only on input
const add = (a, b) => a + b;

console.log(add(2, 3)); // 5
console.log(add(2, 3)); // 5

// Not pure - uses outside value
let tax = 10;
const addTax = (price) => price + tax;

console.log(addTax(100)); // 110
tax = 20;
console.log(addTax(100)); // 120`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Side effects"}),t.jsx("p",{className:"p",children:"A side effect is when a function changes something outside itself, like updating a global variable, making an API call, writing to localStorage, or changing the DOM. Side effects are not always bad, but should be controlled and kept in clear places."}),t.jsx("pre",{className:"code",children:`// Side effect - changes outside state
let count = 0;

const increment = () => {
  count = count + 1;
  console.log(count); // logs output as a side effect
};

increment(); // 1
increment(); // 2

// No side effect - returns a value
const incrementPure = (n) => n + 1;

console.log(incrementPure(1)); // 2
console.log(incrementPure(2)); // 3`})]}),t.jsxs("div",{className:"summary",children:[t.jsxs("div",{className:"summaryRow",children:[t.jsxs("span",{className:"chip",children:[t.jsx(Ja,{})," immutability"]}),t.jsxs("span",{className:"chip",children:[t.jsx(tp,{})," map returns new array"]}),t.jsxs("span",{className:"chip",children:[t.jsx(Pr,{})," pure functions"]})]}),t.jsx("p",{className:"p muted",children:"Quick rule - prefer returning new values instead of changing existing values. Keep side effects separate."})]})]})]})},Hx={Wrapper:ie.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 10px 25px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 14px 16px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            display: grid;
            place-items: center;
            width: 28px;
            height: 28px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
        }

        .icon {
            display: grid;
            place-items: center;
            width: 36px;
            height: 36px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            padding: 6px 10px;
            border-radius: 999px;
            background: var(--color-bg);
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 4000px;
        }

        .section {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
        }

        .section:last-child {
            border-bottom: none;
        }

        h3 {
            font-size: 16px;
            margin-bottom: 8px;
        }

        p {
            font-size: 14px;
            line-height: 1.6;
            color: var(--color-text-secondary);
        }

        .code {
            margin-top: 10px;
            padding: 12px;
            background: var(--color-bg);
            border: 1px solid var(--color-border);
            border-radius: 12px;
            font-size: 13px;
            overflow-x: auto;
        }
    `},Wx=()=>{const[s,c]=ae.useState(!1),i=()=>c(u=>!u);return t.jsxs(Hx.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:i,"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(ke,{}):t.jsx(Se,{})}),t.jsx("span",{className:"icon",children:t.jsx(Pr,{})}),t.jsx("span",{className:"title",children:"Modern Features"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Optional chaining"}),t.jsx("p",{children:"Optional chaining lets you safely access deeply nested properties without throwing an error if something is undefined."}),t.jsx("pre",{className:"code",children:`const user = {};
console.log(user.profile?.name);
// undefined

// Without optional chaining this would throw an error`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Nullish coalescing"}),t.jsx("p",{children:"The nullish coalescing operator ?? returns the right side only if the left side is null or undefined."}),t.jsx("pre",{className:"code",children:`const count = 0;
const result = count ?? 10;
console.log(result);
// 0

// Unlike ||, it does not treat 0 as false`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Object shorthand"}),t.jsx("p",{children:"If variable name and object property name are same, you can skip writing them twice."}),t.jsx("pre",{className:"code",children:`const name = "Ash";
const age = 25;

const user = { name, age };
console.log(user);
// { name: "Ash", age: 25 }`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Logical assignment operators"}),t.jsx("p",{children:"These combine logical operators with assignment. They make conditions shorter and cleaner."}),t.jsx("pre",{className:"code",children:`let value = null;

value ??= 10;
console.log(value);
// 10

let flag = true;
flag &&= false;
console.log(flag);
// false`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"BigInt"}),t.jsx("p",{children:"BigInt is used to represent very large integers beyond the safe limit of normal numbers."}),t.jsx("pre",{className:"code",children:`const big = 123456789012345678901234567890n;
console.log(big + 1n);
// 123456789012345678901234567891n`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Symbol"}),t.jsx("p",{children:"Symbol creates a unique identifier. Even if two symbols have the same description, they are different."}),t.jsx("pre",{className:"code",children:`const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 === id2);
// false`})]})]})]})},Ux={Wrapper:ie.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 10px 25px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 14px 16px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            display: grid;
            place-items: center;
            width: 28px;
            height: 28px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
        }

        .icon {
            display: grid;
            place-items: center;
            width: 36px;
            height: 36px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            font-size: 18px;
        }

        .title {
            font-weight: 900;
            flex: 1;
            letter-spacing: 0.2px;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            padding: 6px 10px;
            border-radius: 999px;
            background: var(--color-bg);
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 12000px;
        }

        .section {
            padding: 16px;
        }

        .section + .section {
            border-top: 1px dashed var(--color-border-light);
        }

        .h3 {
            font-size: 16px;
            margin-bottom: 8px;
        }

        .p {
            margin: 0;
            font-size: 14px;
            line-height: 1.7;
            color: var(--color-text-secondary);
        }

        .codeBlock {
            margin-top: 12px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .codeTop {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-secondary);
            font-weight: 800;
            font-size: 12px;
            letter-spacing: 0.2px;
            background: var(--color-surface);
        }

        .codeIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
            font-size: 14px;
        }

        .code {
            margin: 0;
            padding: 12px;
            font-size: 13px;
            line-height: 1.6;
            color: var(--color-text-secondary);
            overflow-x: auto;
            white-space: pre;
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }

        .list {
            list-style: none;
            padding-left: 0;
            margin-top: 12px;
            display: grid;
            gap: 10px;
        }

        .list li {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.6;
        }

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-primary);
            flex: 0 0 auto;
            margin-top: 7px;
        }

        .tip {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 12px;
            display: flex;
            gap: 10px;
            align-items: center;
        }

        .tipIcon {
            width: 30px;
            height: 30px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            display: grid;
            place-items: center;
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .tipText {
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.6;
        }
    `},$x=()=>{const[s,c]=ae.useState(!1),i=()=>c(u=>!u);return t.jsxs(Ux.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:i,"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(ke,{}):t.jsx(Se,{})}),t.jsx("span",{className:"icon",children:t.jsx(wm,{})}),t.jsx("span",{className:"title",children:"Best Practices"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Clean code"}),t.jsx("p",{className:"p",children:"Write code that another developer can understand fast. Use clear names, small functions, and avoid clever hacks that confuse future you."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Naming and small functions"]}),t.jsx("pre",{className:"code",children:`function calcTotal(price, qty) {
  return price * qty;
}

const total = calcTotal(499, 2);
console.log(total); // 998`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Avoid global pollution"}),t.jsx("p",{className:"p",children:"Avoid creating variables in the global scope. Globals are easy to overwrite and cause hard to debug issues. Keep variables inside functions or modules."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(Ja,{})}),"Keep scope local"]}),t.jsx("pre",{className:"code",children:`// bad - global variable
// userName = "ash"; // creates global in sloppy code, avoid

// good - local variable inside function
function setUserName() {
  const userName = "ash";
  return userName;
}

console.log(setUserName()); // "ash"`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Avoid callback hell"}),t.jsx("p",{className:"p",children:"Deep nested callbacks make code unreadable and error handling painful. Prefer promises and async - await."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(ei,{})}),"Async - await example"]}),t.jsx("pre",{className:"code",children:`async function loadUser() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const data = await res.json();
    console.log(data.name); // "Leanne Graham"
  } catch (err) {
    console.log("error:", err);
  }
}

loadUser();`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Avoid unnecessary re renders"}),t.jsx("p",{className:"p",children:"In React, avoid re rendering components when nothing changed. Keep props stable, avoid creating new objects and functions on every render unless needed."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Stable values with useMemo"]}),t.jsx("pre",{className:"code",children:`import React, { useMemo } from "react";

const PriceBox = ({ price, qty }) => {
  const total = useMemo(() => price * qty, [price, qty]);

  return <div>Total: {total}</div>;
};

// result - total recalculates only when price or qty changes`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Defensive coding"}),t.jsx("p",{className:"p",children:"Assume data can be missing or wrong. Validate inputs, handle null and undefined, and avoid breaking the UI on bad values."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(Ja,{})}),"Safe access and fallback"]}),t.jsx("pre",{className:"code",children:`function getCity(user) {
  const city = user?.address?.city ?? "Unknown";
  return city;
}

console.log(getCity({ address: { city: "Bangalore" } })); // "Bangalore"
console.log(getCity(null)); // "Unknown"`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Debugging with console"}),t.jsx("p",{className:"p",children:"Use console tools properly. console.log is fine, but console.table, console.time, and console.group make debugging faster."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(Qa,{})}),"Useful console tools"]}),t.jsx("pre",{className:"code",children:`const users = [
  { id: 1, name: "ash" },
  { id: 2, name: "neha" },
];

console.table(users); 
// result - table view in console

console.time("load");
// do something
console.timeEnd("load");
// result - prints time taken`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"DevTools basics"}),t.jsx("p",{className:"p",children:"Browser DevTools help you inspect DOM, CSS, network calls, storage, and performance. Learn the basics and debugging becomes 10x easier."}),t.jsxs("ul",{className:"list",children:[t.jsxs("li",{children:[t.jsx("span",{className:"dot"})," Elements - inspect HTML and CSS"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"})," Console - logs and errors"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"})," Network - API requests and timing"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"})," Application - storage and cookies"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"})," Performance - slow renders and bottlenecks"]})]}),t.jsxs("div",{className:"tip",children:[t.jsx("span",{className:"tipIcon",children:t.jsx(Dm,{})}),t.jsx("span",{className:"tipText",children:"Shortcut - Press F12 or Ctrl - Shift - I to open DevTools."})]})]})]})]})},Vx={Wrapper:ie.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 10px 25px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 14px 16px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            display: grid;
            place-items: center;
            width: 28px;
            height: 28px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
        }

        .icon {
            display: grid;
            place-items: center;
            width: 36px;
            height: 36px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-warning);
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            padding: 6px 10px;
            border-radius: 999px;
            background: var(--color-bg);
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 12000px;
        }

        .intro {
            padding: 14px 16px;
            border-bottom: 1px dashed var(--color-border-light);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-size: 14px;
        }

        .section {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
        }

        .section:last-child {
            border-bottom: none;
        }

        .h3 {
            font-size: 16px;
            margin-bottom: 8px;
        }

        .codeBlock {
            margin-top: 12px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .codeTop {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-secondary);
            font-weight: 800;
            font-size: 12px;
            background: var(--color-surface);
        }

        .codeIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
            font-size: 14px;
        }

        .code {
            margin: 0;
            padding: 12px;
            font-size: 13px;
            line-height: 1.6;
            color: var(--color-text-secondary);
            overflow-x: auto;
            white-space: pre;
        }
    `},Jx=()=>{const[s,c]=ae.useState(!1),i=()=>c(u=>!u);return t.jsxs(Vx.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:i,"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(ke,{}):t.jsx(Se,{})}),t.jsx("span",{className:"icon",children:t.jsx(qu,{})}),t.jsx("span",{className:"title",children:"Common Interview Traps"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsx("div",{className:"intro",children:t.jsx("p",{className:"p",children:"These are the most common JavaScript traps asked in interviews. The goal is not to memorize, but to understand why the output happens."})}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"== vs ==="}),t.jsx("p",{className:"p",children:"== compares after type conversion - === compares without conversion. Prefer === for predictable results."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Example"]}),t.jsx("pre",{className:"code",children:`console.log(5 == "5");   // true - "5" becomes 5
console.log(5 === "5");  // false - number vs string
console.log(null == undefined);  // true - special case
console.log(null === undefined); // false`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"null vs undefined"}),t.jsx("p",{className:"p",children:'undefined means "not assigned" - null is "intentionally empty". Both mean "no value", but they are different types.'}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Example"]}),t.jsx("pre",{className:"code",children:`let a;
let b = null;

console.log(a);          // undefined
console.log(b);          // null
console.log(typeof a);   // "undefined"
console.log(typeof b);   // "object" - legacy JavaScript quirk`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"var scope"}),t.jsx("p",{className:"p",children:"var is function scoped - let and const are block scoped. This can create bugs inside loops and if blocks."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Example"]}),t.jsx("pre",{className:"code",children:`if (true) {
  var x = 10;
  let y = 20;
}

console.log(x); // 10 - var escapes the block
// console.log(y); // ReferenceError - let stays inside block`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Hoisting behavior"}),t.jsx("p",{className:"p",children:"Hoisting means declarations are moved to the top of their scope during compilation. var becomes undefined before assignment. let and const exist in a temporal dead zone until initialized."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Example"]}),t.jsx("pre",{className:"code",children:`console.log(a); // undefined
var a = 5;

// console.log(b); // ReferenceError - temporal dead zone
let b = 10;`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Event loop basics"}),t.jsx("p",{className:"p",children:"JavaScript runs one thing at a time (single thread). The event loop decides when queued tasks run. Promises (microtasks) run before timers (macrotasks)."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Example"]}),t.jsx("pre",{className:"code",children:`console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D");

// Output:
// A
// D
// C
// B`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Closure question patterns"}),t.jsx("p",{className:"p",children:"A closure is when a function remembers variables from its outer scope even after the outer function finishes. Common interview pattern is returning a function."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Example"]}),t.jsx("pre",{className:"code",children:`function makeCounter() {
  let count = 0;

  return function () {
    count += 1;
    return count;
  };
}

const counter = makeCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Async timing questions"}),t.jsx("p",{className:"p",children:"Async questions usually test order of execution. Know sync code runs first, then promise microtasks, then timer callbacks."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Example"]}),t.jsx("pre",{className:"code",children:`async function run() {
  console.log("1");

  setTimeout(() => {
    console.log("2");
  }, 0);

  await Promise.resolve();
  console.log("3");
}

run();
console.log("4");

// Output:
// 1
// 4
// 3
// 2`})]})]})]})]})},Qx={Wrapper:ie.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 10px 25px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 14px 16px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            display: grid;
            place-items: center;
            width: 28px;
            height: 28px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
        }

        .icon {
            display: grid;
            place-items: center;
            width: 36px;
            height: 36px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            padding: 6px 10px;
            border-radius: 999px;
            background: var(--color-bg);
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 5000px;
        }

        .section {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
        }

        .section:last-child {
            border-bottom: none;
        }

        h3 {
            font-size: 16px;
            margin-bottom: 8px;
        }

        p {
            font-size: 14px;
            line-height: 1.6;
            color: var(--color-text-secondary);
            margin-bottom: 10px;
        }

        .code {
            margin-top: 10px;
            padding: 12px;
            background: var(--color-surface-2);
            border: 1px solid var(--color-border);
            border-radius: 12px;
            font-size: 13px;
            overflow-x: auto;
        }
    `},Gx=()=>{const[s,c]=ae.useState(!1),i=()=>c(u=>!u);return t.jsxs(Qx.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:i,"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(ke,{}):t.jsx(Se,{})}),t.jsx("span",{className:"icon",children:t.jsx(Lm,{})}),t.jsx("span",{className:"title",children:"Event Loop and Concurrency Model"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Call Stack"}),t.jsx("p",{children:"The call stack is where JavaScript executes functions. It follows LIFO - last in first out."}),t.jsx("pre",{className:"code",children:`function one() {
  console.log("one");
}

function two() {
  one();
  console.log("two");
}

two();

// Output:
// one
// two`}),t.jsx("p",{children:"two goes into stack first, then one runs, then stack clears."})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Web APIs"}),t.jsx("p",{children:"Web APIs are provided by the browser, not JavaScript itself. Examples include setTimeout, fetch, DOM events."}),t.jsx("pre",{className:"code",children:`console.log("start");

setTimeout(() => {
  console.log("timer");
}, 1000);

console.log("end");

// Output:
// start
// end
// timer`}),t.jsx("p",{children:"setTimeout runs in Web APIs and waits outside the call stack."})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Task Queue"}),t.jsx("p",{children:"Also called macrotask queue. setTimeout and setInterval callbacks go here after Web APIs finish."})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Microtask Queue"}),t.jsx("p",{children:"Promises and queueMicrotask use the microtask queue. It has higher priority than the task queue."}),t.jsx("pre",{className:"code",children:`console.log("start");

Promise.resolve().then(() => {
  console.log("promise");
});

console.log("end");

// Output:
// start
// end
// promise`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Promise Queue"}),t.jsx("p",{children:"Promise callbacks are stored in the microtask queue. They always run before setTimeout callbacks."}),t.jsx("pre",{className:"code",children:`setTimeout(() => {
  console.log("timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("promise");
});

// Output:
// promise
// timeout`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Event Loop Visual Model"}),t.jsx("p",{children:"The event loop constantly checks: 1 - Is call stack empty 2 - If yes, run microtasks 3 - Then run next task from task queue"}),t.jsx("p",{children:"Order of execution: Call Stack - Microtasks - Macrotasks"})]})]})]})},Yx=()=>t.jsxs(_a.Wrapper,{children:[t.jsx(_a.Header,{children:t.jsx(Wm,{})}),t.jsxs(_a.Main,{id:"notes-main",children:[t.jsxs("div",{className:"contentWrapper",children:[t.jsx(ex,{}),t.jsx(tx,{}),t.jsx(ox,{}),t.jsx(lx,{}),t.jsx(ix,{}),t.jsx(dx,{}),t.jsx(px,{}),t.jsx(fx,{}),t.jsx(xx,{}),t.jsx(vx,{}),t.jsx(jx,{}),t.jsx(wx,{}),t.jsx(kx,{}),t.jsx(Cx,{}),t.jsx(Tx,{}),t.jsx(Ix,{}),t.jsx(Lx,{}),t.jsx(_x,{}),t.jsx(Ax,{}),t.jsx(Rx,{}),t.jsx(Fx,{}),t.jsx(Wx,{}),t.jsx($x,{}),t.jsx(Jx,{}),t.jsx(Gx,{})]}),t.jsx("div",{className:"footerWrapper",children:t.jsx(qm,{})}),t.jsx(Zm,{})]})]});df.createRoot(document.getElementById("root")).render(t.jsx(t.Fragment,{children:t.jsx(Yx,{})}));
