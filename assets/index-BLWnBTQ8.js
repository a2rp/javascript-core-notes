(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))u(m);new MutationObserver(m=>{for(const j of m)if(j.type==="childList")for(const S of j.addedNodes)S.tagName==="LINK"&&S.rel==="modulepreload"&&u(S)}).observe(document,{childList:!0,subtree:!0});function a(m){const j={};return m.integrity&&(j.integrity=m.integrity),m.referrerPolicy&&(j.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?j.credentials="include":m.crossOrigin==="anonymous"?j.credentials="omit":j.credentials="same-origin",j}function u(m){if(m.ep)return;m.ep=!0;const j=a(m);fetch(m.href,j)}})();function nf(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Ci={exports:{}},Zn={},Ei={exports:{}},oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qd;function of(){if(qd)return oe;qd=1;var s=Symbol.for("react.element"),c=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),j=Symbol.for("react.provider"),S=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),E=Symbol.for("react.suspense"),K=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),H=Symbol.iterator;function Z(x){return x===null||typeof x!="object"?null:(x=H&&x[H]||x["@@iterator"],typeof x=="function"?x:null)}var ae={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q=Object.assign,W={};function G(x,N,ee){this.props=x,this.context=N,this.refs=W,this.updater=ee||ae}G.prototype.isReactComponent={},G.prototype.setState=function(x,N){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,N,"setState")},G.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function ge(){}ge.prototype=G.prototype;function ue(x,N,ee){this.props=x,this.context=N,this.refs=W,this.updater=ee||ae}var ne=ue.prototype=new ge;ne.constructor=ue,q(ne,G.prototype),ne.isPureReactComponent=!0;var L=Array.isArray,X=Object.prototype.hasOwnProperty,U={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function R(x,N,ee){var re,ie={},se=null,pe=null;if(N!=null)for(re in N.ref!==void 0&&(pe=N.ref),N.key!==void 0&&(se=""+N.key),N)X.call(N,re)&&!I.hasOwnProperty(re)&&(ie[re]=N[re]);var ce=arguments.length-2;if(ce===1)ie.children=ee;else if(1<ce){for(var ve=Array(ce),Ie=0;Ie<ce;Ie++)ve[Ie]=arguments[Ie+2];ie.children=ve}if(x&&x.defaultProps)for(re in ce=x.defaultProps,ce)ie[re]===void 0&&(ie[re]=ce[re]);return{$$typeof:s,type:x,key:se,ref:pe,props:ie,_owner:U.current}}function je(x,N){return{$$typeof:s,type:x.type,key:N,ref:x.ref,props:x.props,_owner:x._owner}}function Oe(x){return typeof x=="object"&&x!==null&&x.$$typeof===s}function le(x){var N={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(ee){return N[ee]})}var Be=/\/+/g;function Ce(x,N){return typeof x=="object"&&x!==null&&x.key!=null?le(""+x.key):N.toString(36)}function Ge(x,N,ee,re,ie){var se=typeof x;(se==="undefined"||se==="boolean")&&(x=null);var pe=!1;if(x===null)pe=!0;else switch(se){case"string":case"number":pe=!0;break;case"object":switch(x.$$typeof){case s:case c:pe=!0}}if(pe)return pe=x,ie=ie(pe),x=re===""?"."+Ce(pe,0):re,L(ie)?(ee="",x!=null&&(ee=x.replace(Be,"$&/")+"/"),Ge(ie,N,ee,"",function(Ie){return Ie})):ie!=null&&(Oe(ie)&&(ie=je(ie,ee+(!ie.key||pe&&pe.key===ie.key?"":(""+ie.key).replace(Be,"$&/")+"/")+x)),N.push(ie)),1;if(pe=0,re=re===""?".":re+":",L(x))for(var ce=0;ce<x.length;ce++){se=x[ce];var ve=re+Ce(se,ce);pe+=Ge(se,N,ee,ve,ie)}else if(ve=Z(x),typeof ve=="function")for(x=ve.call(x),ce=0;!(se=x.next()).done;)se=se.value,ve=re+Ce(se,ce++),pe+=Ge(se,N,ee,ve,ie);else if(se==="object")throw N=String(x),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.");return pe}function er(x,N,ee){if(x==null)return x;var re=[],ie=0;return Ge(x,re,"","",function(se){return N.call(ee,se,ie++)}),re}function Ye(x){if(x._status===-1){var N=x._result;N=N(),N.then(function(ee){(x._status===0||x._status===-1)&&(x._status=1,x._result=ee)},function(ee){(x._status===0||x._status===-1)&&(x._status=2,x._result=ee)}),x._status===-1&&(x._status=0,x._result=N)}if(x._status===1)return x._result.default;throw x._result}var Ne={current:null},T={transition:null},F={ReactCurrentDispatcher:Ne,ReactCurrentBatchConfig:T,ReactCurrentOwner:U};function B(){throw Error("act(...) is not supported in production builds of React.")}return oe.Children={map:er,forEach:function(x,N,ee){er(x,function(){N.apply(this,arguments)},ee)},count:function(x){var N=0;return er(x,function(){N++}),N},toArray:function(x){return er(x,function(N){return N})||[]},only:function(x){if(!Oe(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},oe.Component=G,oe.Fragment=a,oe.Profiler=m,oe.PureComponent=ue,oe.StrictMode=u,oe.Suspense=E,oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,oe.act=B,oe.cloneElement=function(x,N,ee){if(x==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+x+".");var re=q({},x.props),ie=x.key,se=x.ref,pe=x._owner;if(N!=null){if(N.ref!==void 0&&(se=N.ref,pe=U.current),N.key!==void 0&&(ie=""+N.key),x.type&&x.type.defaultProps)var ce=x.type.defaultProps;for(ve in N)X.call(N,ve)&&!I.hasOwnProperty(ve)&&(re[ve]=N[ve]===void 0&&ce!==void 0?ce[ve]:N[ve])}var ve=arguments.length-2;if(ve===1)re.children=ee;else if(1<ve){ce=Array(ve);for(var Ie=0;Ie<ve;Ie++)ce[Ie]=arguments[Ie+2];re.children=ce}return{$$typeof:s,type:x.type,key:ie,ref:se,props:re,_owner:pe}},oe.createContext=function(x){return x={$$typeof:S,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},x.Provider={$$typeof:j,_context:x},x.Consumer=x},oe.createElement=R,oe.createFactory=function(x){var N=R.bind(null,x);return N.type=x,N},oe.createRef=function(){return{current:null}},oe.forwardRef=function(x){return{$$typeof:P,render:x}},oe.isValidElement=Oe,oe.lazy=function(x){return{$$typeof:Q,_payload:{_status:-1,_result:x},_init:Ye}},oe.memo=function(x,N){return{$$typeof:K,type:x,compare:N===void 0?null:N}},oe.startTransition=function(x){var N=T.transition;T.transition={};try{x()}finally{T.transition=N}},oe.unstable_act=B,oe.useCallback=function(x,N){return Ne.current.useCallback(x,N)},oe.useContext=function(x){return Ne.current.useContext(x)},oe.useDebugValue=function(){},oe.useDeferredValue=function(x){return Ne.current.useDeferredValue(x)},oe.useEffect=function(x,N){return Ne.current.useEffect(x,N)},oe.useId=function(){return Ne.current.useId()},oe.useImperativeHandle=function(x,N,ee){return Ne.current.useImperativeHandle(x,N,ee)},oe.useInsertionEffect=function(x,N){return Ne.current.useInsertionEffect(x,N)},oe.useLayoutEffect=function(x,N){return Ne.current.useLayoutEffect(x,N)},oe.useMemo=function(x,N){return Ne.current.useMemo(x,N)},oe.useReducer=function(x,N,ee){return Ne.current.useReducer(x,N,ee)},oe.useRef=function(x){return Ne.current.useRef(x)},oe.useState=function(x){return Ne.current.useState(x)},oe.useSyncExternalStore=function(x,N,ee){return Ne.current.useSyncExternalStore(x,N,ee)},oe.useTransition=function(){return Ne.current.useTransition()},oe.version="18.3.1",oe}var Xd;function Ki(){return Xd||(Xd=1,Ei.exports=of()),Ei.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zd;function sf(){if(Zd)return Zn;Zd=1;var s=Ki(),c=Symbol.for("react.element"),a=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,m=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j={key:!0,ref:!0,__self:!0,__source:!0};function S(P,E,K){var Q,H={},Z=null,ae=null;K!==void 0&&(Z=""+K),E.key!==void 0&&(Z=""+E.key),E.ref!==void 0&&(ae=E.ref);for(Q in E)u.call(E,Q)&&!j.hasOwnProperty(Q)&&(H[Q]=E[Q]);if(P&&P.defaultProps)for(Q in E=P.defaultProps,E)H[Q]===void 0&&(H[Q]=E[Q]);return{$$typeof:c,type:P,key:Z,ref:ae,props:H,_owner:m.current}}return Zn.Fragment=a,Zn.jsx=S,Zn.jsxs=S,Zn}var eu;function lf(){return eu||(eu=1,Ci.exports=sf()),Ci.exports}var t=lf(),xs={},Ti={exports:{}},ar={},zi={exports:{}},Ii={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ru;function af(){return ru||(ru=1,(function(s){function c(T,F){var B=T.length;T.push(F);e:for(;0<B;){var x=B-1>>>1,N=T[x];if(0<m(N,F))T[x]=F,T[B]=N,B=x;else break e}}function a(T){return T.length===0?null:T[0]}function u(T){if(T.length===0)return null;var F=T[0],B=T.pop();if(B!==F){T[0]=B;e:for(var x=0,N=T.length,ee=N>>>1;x<ee;){var re=2*(x+1)-1,ie=T[re],se=re+1,pe=T[se];if(0>m(ie,B))se<N&&0>m(pe,ie)?(T[x]=pe,T[se]=B,x=se):(T[x]=ie,T[re]=B,x=re);else if(se<N&&0>m(pe,B))T[x]=pe,T[se]=B,x=se;else break e}}return F}function m(T,F){var B=T.sortIndex-F.sortIndex;return B!==0?B:T.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var j=performance;s.unstable_now=function(){return j.now()}}else{var S=Date,P=S.now();s.unstable_now=function(){return S.now()-P}}var E=[],K=[],Q=1,H=null,Z=3,ae=!1,q=!1,W=!1,G=typeof setTimeout=="function"?setTimeout:null,ge=typeof clearTimeout=="function"?clearTimeout:null,ue=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ne(T){for(var F=a(K);F!==null;){if(F.callback===null)u(K);else if(F.startTime<=T)u(K),F.sortIndex=F.expirationTime,c(E,F);else break;F=a(K)}}function L(T){if(W=!1,ne(T),!q)if(a(E)!==null)q=!0,Ye(X);else{var F=a(K);F!==null&&Ne(L,F.startTime-T)}}function X(T,F){q=!1,W&&(W=!1,ge(R),R=-1),ae=!0;var B=Z;try{for(ne(F),H=a(E);H!==null&&(!(H.expirationTime>F)||T&&!le());){var x=H.callback;if(typeof x=="function"){H.callback=null,Z=H.priorityLevel;var N=x(H.expirationTime<=F);F=s.unstable_now(),typeof N=="function"?H.callback=N:H===a(E)&&u(E),ne(F)}else u(E);H=a(E)}if(H!==null)var ee=!0;else{var re=a(K);re!==null&&Ne(L,re.startTime-F),ee=!1}return ee}finally{H=null,Z=B,ae=!1}}var U=!1,I=null,R=-1,je=5,Oe=-1;function le(){return!(s.unstable_now()-Oe<je)}function Be(){if(I!==null){var T=s.unstable_now();Oe=T;var F=!0;try{F=I(!0,T)}finally{F?Ce():(U=!1,I=null)}}else U=!1}var Ce;if(typeof ue=="function")Ce=function(){ue(Be)};else if(typeof MessageChannel!="undefined"){var Ge=new MessageChannel,er=Ge.port2;Ge.port1.onmessage=Be,Ce=function(){er.postMessage(null)}}else Ce=function(){G(Be,0)};function Ye(T){I=T,U||(U=!0,Ce())}function Ne(T,F){R=G(function(){T(s.unstable_now())},F)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(T){T.callback=null},s.unstable_continueExecution=function(){q||ae||(q=!0,Ye(X))},s.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):je=0<T?Math.floor(1e3/T):5},s.unstable_getCurrentPriorityLevel=function(){return Z},s.unstable_getFirstCallbackNode=function(){return a(E)},s.unstable_next=function(T){switch(Z){case 1:case 2:case 3:var F=3;break;default:F=Z}var B=Z;Z=F;try{return T()}finally{Z=B}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(T,F){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var B=Z;Z=T;try{return F()}finally{Z=B}},s.unstable_scheduleCallback=function(T,F,B){var x=s.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?x+B:x):B=x,T){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=B+N,T={id:Q++,callback:F,priorityLevel:T,startTime:B,expirationTime:N,sortIndex:-1},B>x?(T.sortIndex=B,c(K,T),a(E)===null&&T===a(K)&&(W?(ge(R),R=-1):W=!0,Ne(L,B-x))):(T.sortIndex=N,c(E,T),q||ae||(q=!0,Ye(X))),T},s.unstable_shouldYield=le,s.unstable_wrapCallback=function(T){var F=Z;return function(){var B=Z;Z=F;try{return T.apply(this,arguments)}finally{Z=B}}}})(Ii)),Ii}var tu;function cf(){return tu||(tu=1,zi.exports=af()),zi.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nu;function df(){if(nu)return ar;nu=1;var s=Ki(),c=cf();function a(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var u=new Set,m={};function j(e,r){S(e,r),S(e+"Capture",r)}function S(e,r){for(m[e]=r,e=0;e<r.length;e++)u.add(r[e])}var P=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),E=Object.prototype.hasOwnProperty,K=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Q={},H={};function Z(e){return E.call(H,e)?!0:E.call(Q,e)?!1:K.test(e)?H[e]=!0:(Q[e]=!0,!1)}function ae(e,r,n,o){if(n!==null&&n.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return o?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function q(e,r,n,o){if(r===null||typeof r=="undefined"||ae(e,r,n,o))return!0;if(o)return!1;if(n!==null)switch(n.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function W(e,r,n,o,l,i,d){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=o,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=r,this.sanitizeURL=i,this.removeEmptyString=d}var G={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){G[e]=new W(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var r=e[0];G[r]=new W(r,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){G[e]=new W(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){G[e]=new W(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){G[e]=new W(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){G[e]=new W(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){G[e]=new W(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){G[e]=new W(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){G[e]=new W(e,5,!1,e.toLowerCase(),null,!1,!1)});var ge=/[\-:]([a-z])/g;function ue(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var r=e.replace(ge,ue);G[r]=new W(r,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var r=e.replace(ge,ue);G[r]=new W(r,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var r=e.replace(ge,ue);G[r]=new W(r,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){G[e]=new W(e,1,!1,e.toLowerCase(),null,!1,!1)}),G.xlinkHref=new W("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){G[e]=new W(e,1,!1,e.toLowerCase(),null,!0,!0)});function ne(e,r,n,o){var l=G.hasOwnProperty(r)?G[r]:null;(l!==null?l.type!==0:o||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(q(r,n,l,o)&&(n=null),o||l===null?Z(r)&&(n===null?e.removeAttribute(r):e.setAttribute(r,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(r=l.attributeName,o=l.attributeNamespace,n===null?e.removeAttribute(r):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,o?e.setAttributeNS(o,r,n):e.setAttribute(r,n))))}var L=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,X=Symbol.for("react.element"),U=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),je=Symbol.for("react.profiler"),Oe=Symbol.for("react.provider"),le=Symbol.for("react.context"),Be=Symbol.for("react.forward_ref"),Ce=Symbol.for("react.suspense"),Ge=Symbol.for("react.suspense_list"),er=Symbol.for("react.memo"),Ye=Symbol.for("react.lazy"),Ne=Symbol.for("react.offscreen"),T=Symbol.iterator;function F(e){return e===null||typeof e!="object"?null:(e=T&&e[T]||e["@@iterator"],typeof e=="function"?e:null)}var B=Object.assign,x;function N(e){if(x===void 0)try{throw Error()}catch(n){var r=n.stack.trim().match(/\n( *(at )?)/);x=r&&r[1]||""}return`
`+x+e}var ee=!1;function re(e,r){if(!e||ee)return"";ee=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(y){var o=y}Reflect.construct(e,[],r)}else{try{r.call()}catch(y){o=y}e.call(r.prototype)}else{try{throw Error()}catch(y){o=y}e()}}catch(y){if(y&&o&&typeof y.stack=="string"){for(var l=y.stack.split(`
`),i=o.stack.split(`
`),d=l.length-1,p=i.length-1;1<=d&&0<=p&&l[d]!==i[p];)p--;for(;1<=d&&0<=p;d--,p--)if(l[d]!==i[p]){if(d!==1||p!==1)do if(d--,p--,0>p||l[d]!==i[p]){var h=`
`+l[d].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=d&&0<=p);break}}}finally{ee=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?N(e):""}function ie(e){switch(e.tag){case 5:return N(e.type);case 16:return N("Lazy");case 13:return N("Suspense");case 19:return N("SuspenseList");case 0:case 2:case 15:return e=re(e.type,!1),e;case 11:return e=re(e.type.render,!1),e;case 1:return e=re(e.type,!0),e;default:return""}}function se(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case I:return"Fragment";case U:return"Portal";case je:return"Profiler";case R:return"StrictMode";case Ce:return"Suspense";case Ge:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case le:return(e.displayName||"Context")+".Consumer";case Oe:return(e._context.displayName||"Context")+".Provider";case Be:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case er:return r=e.displayName||null,r!==null?r:se(e.type)||"Memo";case Ye:r=e._payload,e=e._init;try{return se(e(r))}catch{}}return null}function pe(e){var r=e.type;switch(e.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=r.render,e=e.displayName||e.name||"",r.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return se(r);case 8:return r===R?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function ce(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ve(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Ie(e){var r=ve(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),o=""+e[r];if(!e.hasOwnProperty(r)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return l.call(this)},set:function(d){o=""+d,i.call(this,d)}}),Object.defineProperty(e,r,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(d){o=""+d},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function Yr(e){e._valueTracker||(e._valueTracker=Ie(e))}function gt(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var n=r.getValue(),o="";return e&&(o=ve(e)?e.checked?"true":"false":e.value),e=o,e!==n?(r.setValue(e),!0):!1}function br(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function Bs(e,r){var n=r.checked;return B({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function oa(e,r){var n=r.defaultValue==null?"":r.defaultValue,o=r.checked!=null?r.checked:r.defaultChecked;n=ce(r.value!=null?r.value:n),e._wrapperState={initialChecked:o,initialValue:n,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function sa(e,r){r=r.checked,r!=null&&ne(e,"checked",r,!1)}function _s(e,r){sa(e,r);var n=ce(r.value),o=r.type;if(n!=null)o==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}r.hasOwnProperty("value")?Os(e,r.type,n):r.hasOwnProperty("defaultValue")&&Os(e,r.type,ce(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(e.defaultChecked=!!r.defaultChecked)}function la(e,r,n){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var o=r.type;if(!(o!=="submit"&&o!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+e._wrapperState.initialValue,n||r===e.value||(e.value=r),e.defaultValue=r}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Os(e,r,n){(r!=="number"||br(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var fn=Array.isArray;function At(e,r,n,o){if(e=e.options,r){r={};for(var l=0;l<n.length;l++)r["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=r.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&o&&(e[n].defaultSelected=!0)}else{for(n=""+ce(n),r=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,o&&(e[l].defaultSelected=!0);return}r!==null||e[l].disabled||(r=e[l])}r!==null&&(r.selected=!0)}}function As(e,r){if(r.dangerouslySetInnerHTML!=null)throw Error(a(91));return B({},r,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ia(e,r){var n=r.value;if(n==null){if(n=r.children,r=r.defaultValue,n!=null){if(r!=null)throw Error(a(92));if(fn(n)){if(1<n.length)throw Error(a(93));n=n[0]}r=n}r==null&&(r=""),n=r}e._wrapperState={initialValue:ce(n)}}function aa(e,r){var n=ce(r.value),o=ce(r.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),r.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),o!=null&&(e.defaultValue=""+o)}function ca(e){var r=e.textContent;r===e._wrapperState.initialValue&&r!==""&&r!==null&&(e.value=r)}function da(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ms(e,r){return e==null||e==="http://www.w3.org/1999/xhtml"?da(r):e==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var io,ua=(function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(r,n,o,l){MSApp.execUnsafeLocalFunction(function(){return e(r,n,o,l)})}:e})(function(e,r){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=r;else{for(io=io||document.createElement("div"),io.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=io.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;r.firstChild;)e.appendChild(r.firstChild)}});function mn(e,r){if(r){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=r;return}}e.textContent=r}var xn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ip=["Webkit","ms","Moz","O"];Object.keys(xn).forEach(function(e){ip.forEach(function(r){r=r+e.charAt(0).toUpperCase()+e.substring(1),xn[r]=xn[e]})});function pa(e,r,n){return r==null||typeof r=="boolean"||r===""?"":n||typeof r!="number"||r===0||xn.hasOwnProperty(e)&&xn[e]?(""+r).trim():r+"px"}function ha(e,r){e=e.style;for(var n in r)if(r.hasOwnProperty(n)){var o=n.indexOf("--")===0,l=pa(n,r[n],o);n==="float"&&(n="cssFloat"),o?e.setProperty(n,l):e[n]=l}}var ap=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Rs(e,r){if(r){if(ap[e]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(a(137,e));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(a(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(a(61))}if(r.style!=null&&typeof r.style!="object")throw Error(a(62))}}function Ds(e,r){if(e.indexOf("-")===-1)return typeof r.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fs=null;function Hs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ws=null,Mt=null,Rt=null;function fa(e){if(e=Rn(e)){if(typeof Ws!="function")throw Error(a(280));var r=e.stateNode;r&&(r=Po(r),Ws(e.stateNode,e.type,r))}}function ma(e){Mt?Rt?Rt.push(e):Rt=[e]:Mt=e}function xa(){if(Mt){var e=Mt,r=Rt;if(Rt=Mt=null,fa(e),r)for(e=0;e<r.length;e++)fa(r[e])}}function ga(e,r){return e(r)}function va(){}var Us=!1;function ya(e,r,n){if(Us)return e(r,n);Us=!0;try{return ga(e,r,n)}finally{Us=!1,(Mt!==null||Rt!==null)&&(va(),xa())}}function gn(e,r){var n=e.stateNode;if(n===null)return null;var o=Po(n);if(o===null)return null;n=o[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(a(231,r,typeof n));return n}var $s=!1;if(P)try{var vn={};Object.defineProperty(vn,"passive",{get:function(){$s=!0}}),window.addEventListener("test",vn,vn),window.removeEventListener("test",vn,vn)}catch{$s=!1}function cp(e,r,n,o,l,i,d,p,h){var y=Array.prototype.slice.call(arguments,3);try{r.apply(n,y)}catch(b){this.onError(b)}}var yn=!1,ao=null,co=!1,Vs=null,dp={onError:function(e){yn=!0,ao=e}};function up(e,r,n,o,l,i,d,p,h){yn=!1,ao=null,cp.apply(dp,arguments)}function pp(e,r,n,o,l,i,d,p,h){if(up.apply(this,arguments),yn){if(yn){var y=ao;yn=!1,ao=null}else throw Error(a(198));co||(co=!0,Vs=y)}}function vt(e){var r=e,n=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,(r.flags&4098)!==0&&(n=r.return),e=r.return;while(e)}return r.tag===3?n:null}function ja(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function Na(e){if(vt(e)!==e)throw Error(a(188))}function hp(e){var r=e.alternate;if(!r){if(r=vt(e),r===null)throw Error(a(188));return r!==e?null:e}for(var n=e,o=r;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(o=l.return,o!==null){n=o;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return Na(l),e;if(i===o)return Na(l),r;i=i.sibling}throw Error(a(188))}if(n.return!==o.return)n=l,o=i;else{for(var d=!1,p=l.child;p;){if(p===n){d=!0,n=l,o=i;break}if(p===o){d=!0,o=l,n=i;break}p=p.sibling}if(!d){for(p=i.child;p;){if(p===n){d=!0,n=i,o=l;break}if(p===o){d=!0,o=i,n=l;break}p=p.sibling}if(!d)throw Error(a(189))}}if(n.alternate!==o)throw Error(a(190))}if(n.tag!==3)throw Error(a(188));return n.stateNode.current===n?e:r}function wa(e){return e=hp(e),e!==null?ba(e):null}function ba(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var r=ba(e);if(r!==null)return r;e=e.sibling}return null}var ka=c.unstable_scheduleCallback,Sa=c.unstable_cancelCallback,fp=c.unstable_shouldYield,mp=c.unstable_requestPaint,Ae=c.unstable_now,xp=c.unstable_getCurrentPriorityLevel,Js=c.unstable_ImmediatePriority,Ca=c.unstable_UserBlockingPriority,uo=c.unstable_NormalPriority,gp=c.unstable_LowPriority,Ea=c.unstable_IdlePriority,po=null,_r=null;function vp(e){if(_r&&typeof _r.onCommitFiberRoot=="function")try{_r.onCommitFiberRoot(po,e,void 0,(e.current.flags&128)===128)}catch{}}var kr=Math.clz32?Math.clz32:Np,yp=Math.log,jp=Math.LN2;function Np(e){return e>>>=0,e===0?32:31-(yp(e)/jp|0)|0}var ho=64,fo=4194304;function jn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function mo(e,r){var n=e.pendingLanes;if(n===0)return 0;var o=0,l=e.suspendedLanes,i=e.pingedLanes,d=n&268435455;if(d!==0){var p=d&~l;p!==0?o=jn(p):(i&=d,i!==0&&(o=jn(i)))}else d=n&~l,d!==0?o=jn(d):i!==0&&(o=jn(i));if(o===0)return 0;if(r!==0&&r!==o&&(r&l)===0&&(l=o&-o,i=r&-r,l>=i||l===16&&(i&4194240)!==0))return r;if((o&4)!==0&&(o|=n&16),r=e.entangledLanes,r!==0)for(e=e.entanglements,r&=o;0<r;)n=31-kr(r),l=1<<n,o|=e[n],r&=~l;return o}function wp(e,r){switch(e){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bp(e,r){for(var n=e.suspendedLanes,o=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var d=31-kr(i),p=1<<d,h=l[d];h===-1?((p&n)===0||(p&o)!==0)&&(l[d]=wp(p,r)):h<=r&&(e.expiredLanes|=p),i&=~p}}function Qs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ta(){var e=ho;return ho<<=1,(ho&4194240)===0&&(ho=64),e}function Gs(e){for(var r=[],n=0;31>n;n++)r.push(e);return r}function Nn(e,r,n){e.pendingLanes|=r,r!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,r=31-kr(r),e[r]=n}function kp(e,r){var n=e.pendingLanes&~r;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=r,e.mutableReadLanes&=r,e.entangledLanes&=r,r=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-kr(n),i=1<<l;r[l]=0,o[l]=-1,e[l]=-1,n&=~i}}function Ys(e,r){var n=e.entangledLanes|=r;for(e=e.entanglements;n;){var o=31-kr(n),l=1<<o;l&r|e[o]&r&&(e[o]|=r),n&=~l}}var ye=0;function za(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Ia,Ks,Pa,La,Ba,qs=!1,xo=[],Kr=null,qr=null,Xr=null,wn=new Map,bn=new Map,Zr=[],Sp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _a(e,r){switch(e){case"focusin":case"focusout":Kr=null;break;case"dragenter":case"dragleave":qr=null;break;case"mouseover":case"mouseout":Xr=null;break;case"pointerover":case"pointerout":wn.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":bn.delete(r.pointerId)}}function kn(e,r,n,o,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:r,domEventName:n,eventSystemFlags:o,nativeEvent:i,targetContainers:[l]},r!==null&&(r=Rn(r),r!==null&&Ks(r)),e):(e.eventSystemFlags|=o,r=e.targetContainers,l!==null&&r.indexOf(l)===-1&&r.push(l),e)}function Cp(e,r,n,o,l){switch(r){case"focusin":return Kr=kn(Kr,e,r,n,o,l),!0;case"dragenter":return qr=kn(qr,e,r,n,o,l),!0;case"mouseover":return Xr=kn(Xr,e,r,n,o,l),!0;case"pointerover":var i=l.pointerId;return wn.set(i,kn(wn.get(i)||null,e,r,n,o,l)),!0;case"gotpointercapture":return i=l.pointerId,bn.set(i,kn(bn.get(i)||null,e,r,n,o,l)),!0}return!1}function Oa(e){var r=yt(e.target);if(r!==null){var n=vt(r);if(n!==null){if(r=n.tag,r===13){if(r=ja(n),r!==null){e.blockedOn=r,Ba(e.priority,function(){Pa(n)});return}}else if(r===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function go(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var n=Zs(e.domEventName,e.eventSystemFlags,r[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var o=new n.constructor(n.type,n);Fs=o,n.target.dispatchEvent(o),Fs=null}else return r=Rn(n),r!==null&&Ks(r),e.blockedOn=n,!1;r.shift()}return!0}function Aa(e,r,n){go(e)&&n.delete(r)}function Ep(){qs=!1,Kr!==null&&go(Kr)&&(Kr=null),qr!==null&&go(qr)&&(qr=null),Xr!==null&&go(Xr)&&(Xr=null),wn.forEach(Aa),bn.forEach(Aa)}function Sn(e,r){e.blockedOn===r&&(e.blockedOn=null,qs||(qs=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,Ep)))}function Cn(e){function r(l){return Sn(l,e)}if(0<xo.length){Sn(xo[0],e);for(var n=1;n<xo.length;n++){var o=xo[n];o.blockedOn===e&&(o.blockedOn=null)}}for(Kr!==null&&Sn(Kr,e),qr!==null&&Sn(qr,e),Xr!==null&&Sn(Xr,e),wn.forEach(r),bn.forEach(r),n=0;n<Zr.length;n++)o=Zr[n],o.blockedOn===e&&(o.blockedOn=null);for(;0<Zr.length&&(n=Zr[0],n.blockedOn===null);)Oa(n),n.blockedOn===null&&Zr.shift()}var Dt=L.ReactCurrentBatchConfig,vo=!0;function Tp(e,r,n,o){var l=ye,i=Dt.transition;Dt.transition=null;try{ye=1,Xs(e,r,n,o)}finally{ye=l,Dt.transition=i}}function zp(e,r,n,o){var l=ye,i=Dt.transition;Dt.transition=null;try{ye=4,Xs(e,r,n,o)}finally{ye=l,Dt.transition=i}}function Xs(e,r,n,o){if(vo){var l=Zs(e,r,n,o);if(l===null)xl(e,r,o,yo,n),_a(e,o);else if(Cp(l,e,r,n,o))o.stopPropagation();else if(_a(e,o),r&4&&-1<Sp.indexOf(e)){for(;l!==null;){var i=Rn(l);if(i!==null&&Ia(i),i=Zs(e,r,n,o),i===null&&xl(e,r,o,yo,n),i===l)break;l=i}l!==null&&o.stopPropagation()}else xl(e,r,o,null,n)}}var yo=null;function Zs(e,r,n,o){if(yo=null,e=Hs(o),e=yt(e),e!==null)if(r=vt(e),r===null)e=null;else if(n=r.tag,n===13){if(e=ja(r),e!==null)return e;e=null}else if(n===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null);return yo=e,null}function Ma(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(xp()){case Js:return 1;case Ca:return 4;case uo:case gp:return 16;case Ea:return 536870912;default:return 16}default:return 16}}var et=null,el=null,jo=null;function Ra(){if(jo)return jo;var e,r=el,n=r.length,o,l="value"in et?et.value:et.textContent,i=l.length;for(e=0;e<n&&r[e]===l[e];e++);var d=n-e;for(o=1;o<=d&&r[n-o]===l[i-o];o++);return jo=l.slice(e,1<o?1-o:void 0)}function No(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function wo(){return!0}function Da(){return!1}function dr(e){function r(n,o,l,i,d){this._reactName=n,this._targetInst=l,this.type=o,this.nativeEvent=i,this.target=d,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(n=e[p],this[p]=n?n(i):i[p]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?wo:Da,this.isPropagationStopped=Da,this}return B(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=wo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=wo)},persist:function(){},isPersistent:wo}),r}var Ft={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rl=dr(Ft),En=B({},Ft,{view:0,detail:0}),Ip=dr(En),tl,nl,Tn,bo=B({},En,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Tn&&(Tn&&e.type==="mousemove"?(tl=e.screenX-Tn.screenX,nl=e.screenY-Tn.screenY):nl=tl=0,Tn=e),tl)},movementY:function(e){return"movementY"in e?e.movementY:nl}}),Fa=dr(bo),Pp=B({},bo,{dataTransfer:0}),Lp=dr(Pp),Bp=B({},En,{relatedTarget:0}),ol=dr(Bp),_p=B({},Ft,{animationName:0,elapsedTime:0,pseudoElement:0}),Op=dr(_p),Ap=B({},Ft,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Mp=dr(Ap),Rp=B({},Ft,{data:0}),Ha=dr(Rp),Dp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wp(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=Hp[e])?!!r[e]:!1}function sl(){return Wp}var Up=B({},En,{key:function(e){if(e.key){var r=Dp[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=No(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Fp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sl,charCode:function(e){return e.type==="keypress"?No(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?No(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),$p=dr(Up),Vp=B({},bo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wa=dr(Vp),Jp=B({},En,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sl}),Qp=dr(Jp),Gp=B({},Ft,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yp=dr(Gp),Kp=B({},bo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),qp=dr(Kp),Xp=[9,13,27,32],ll=P&&"CompositionEvent"in window,zn=null;P&&"documentMode"in document&&(zn=document.documentMode);var Zp=P&&"TextEvent"in window&&!zn,Ua=P&&(!ll||zn&&8<zn&&11>=zn),$a=" ",Va=!1;function Ja(e,r){switch(e){case"keyup":return Xp.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qa(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ht=!1;function eh(e,r){switch(e){case"compositionend":return Qa(r);case"keypress":return r.which!==32?null:(Va=!0,$a);case"textInput":return e=r.data,e===$a&&Va?null:e;default:return null}}function rh(e,r){if(Ht)return e==="compositionend"||!ll&&Ja(e,r)?(e=Ra(),jo=el=et=null,Ht=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Ua&&r.locale!=="ko"?null:r.data;default:return null}}var th={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ga(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!th[e.type]:r==="textarea"}function Ya(e,r,n,o){ma(o),r=To(r,"onChange"),0<r.length&&(n=new rl("onChange","change",null,n,o),e.push({event:n,listeners:r}))}var In=null,Pn=null;function nh(e){hc(e,0)}function ko(e){var r=Jt(e);if(gt(r))return e}function oh(e,r){if(e==="change")return r}var Ka=!1;if(P){var il;if(P){var al="oninput"in document;if(!al){var qa=document.createElement("div");qa.setAttribute("oninput","return;"),al=typeof qa.oninput=="function"}il=al}else il=!1;Ka=il&&(!document.documentMode||9<document.documentMode)}function Xa(){In&&(In.detachEvent("onpropertychange",Za),Pn=In=null)}function Za(e){if(e.propertyName==="value"&&ko(Pn)){var r=[];Ya(r,Pn,e,Hs(e)),ya(nh,r)}}function sh(e,r,n){e==="focusin"?(Xa(),In=r,Pn=n,In.attachEvent("onpropertychange",Za)):e==="focusout"&&Xa()}function lh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ko(Pn)}function ih(e,r){if(e==="click")return ko(r)}function ah(e,r){if(e==="input"||e==="change")return ko(r)}function ch(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var Sr=typeof Object.is=="function"?Object.is:ch;function Ln(e,r){if(Sr(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var n=Object.keys(e),o=Object.keys(r);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var l=n[o];if(!E.call(r,l)||!Sr(e[l],r[l]))return!1}return!0}function ec(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function rc(e,r){var n=ec(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=r&&o>=r)return{node:n,offset:r-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ec(n)}}function tc(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?tc(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function nc(){for(var e=window,r=br();r instanceof e.HTMLIFrameElement;){try{var n=typeof r.contentWindow.location.href=="string"}catch{n=!1}if(n)e=r.contentWindow;else break;r=br(e.document)}return r}function cl(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}function dh(e){var r=nc(),n=e.focusedElem,o=e.selectionRange;if(r!==n&&n&&n.ownerDocument&&tc(n.ownerDocument.documentElement,n)){if(o!==null&&cl(n)){if(r=o.start,e=o.end,e===void 0&&(e=r),"selectionStart"in n)n.selectionStart=r,n.selectionEnd=Math.min(e,n.value.length);else if(e=(r=n.ownerDocument||document)&&r.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(o.start,l);o=o.end===void 0?i:Math.min(o.end,l),!e.extend&&i>o&&(l=o,o=i,i=l),l=rc(n,i);var d=rc(n,o);l&&d&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==d.node||e.focusOffset!==d.offset)&&(r=r.createRange(),r.setStart(l.node,l.offset),e.removeAllRanges(),i>o?(e.addRange(r),e.extend(d.node,d.offset)):(r.setEnd(d.node,d.offset),e.addRange(r)))}}for(r=[],e=n;e=e.parentNode;)e.nodeType===1&&r.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<r.length;n++)e=r[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var uh=P&&"documentMode"in document&&11>=document.documentMode,Wt=null,dl=null,Bn=null,ul=!1;function oc(e,r,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ul||Wt==null||Wt!==br(o)||(o=Wt,"selectionStart"in o&&cl(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Bn&&Ln(Bn,o)||(Bn=o,o=To(dl,"onSelect"),0<o.length&&(r=new rl("onSelect","select",null,r,n),e.push({event:r,listeners:o}),r.target=Wt)))}function So(e,r){var n={};return n[e.toLowerCase()]=r.toLowerCase(),n["Webkit"+e]="webkit"+r,n["Moz"+e]="moz"+r,n}var Ut={animationend:So("Animation","AnimationEnd"),animationiteration:So("Animation","AnimationIteration"),animationstart:So("Animation","AnimationStart"),transitionend:So("Transition","TransitionEnd")},pl={},sc={};P&&(sc=document.createElement("div").style,"AnimationEvent"in window||(delete Ut.animationend.animation,delete Ut.animationiteration.animation,delete Ut.animationstart.animation),"TransitionEvent"in window||delete Ut.transitionend.transition);function Co(e){if(pl[e])return pl[e];if(!Ut[e])return e;var r=Ut[e],n;for(n in r)if(r.hasOwnProperty(n)&&n in sc)return pl[e]=r[n];return e}var lc=Co("animationend"),ic=Co("animationiteration"),ac=Co("animationstart"),cc=Co("transitionend"),dc=new Map,uc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rt(e,r){dc.set(e,r),j(r,[e])}for(var hl=0;hl<uc.length;hl++){var fl=uc[hl],ph=fl.toLowerCase(),hh=fl[0].toUpperCase()+fl.slice(1);rt(ph,"on"+hh)}rt(lc,"onAnimationEnd"),rt(ic,"onAnimationIteration"),rt(ac,"onAnimationStart"),rt("dblclick","onDoubleClick"),rt("focusin","onFocus"),rt("focusout","onBlur"),rt(cc,"onTransitionEnd"),S("onMouseEnter",["mouseout","mouseover"]),S("onMouseLeave",["mouseout","mouseover"]),S("onPointerEnter",["pointerout","pointerover"]),S("onPointerLeave",["pointerout","pointerover"]),j("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),j("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),j("onBeforeInput",["compositionend","keypress","textInput","paste"]),j("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _n="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fh=new Set("cancel close invalid load scroll toggle".split(" ").concat(_n));function pc(e,r,n){var o=e.type||"unknown-event";e.currentTarget=n,pp(o,r,void 0,e),e.currentTarget=null}function hc(e,r){r=(r&4)!==0;for(var n=0;n<e.length;n++){var o=e[n],l=o.event;o=o.listeners;e:{var i=void 0;if(r)for(var d=o.length-1;0<=d;d--){var p=o[d],h=p.instance,y=p.currentTarget;if(p=p.listener,h!==i&&l.isPropagationStopped())break e;pc(l,p,y),i=h}else for(d=0;d<o.length;d++){if(p=o[d],h=p.instance,y=p.currentTarget,p=p.listener,h!==i&&l.isPropagationStopped())break e;pc(l,p,y),i=h}}}if(co)throw e=Vs,co=!1,Vs=null,e}function be(e,r){var n=r[wl];n===void 0&&(n=r[wl]=new Set);var o=e+"__bubble";n.has(o)||(fc(r,e,2,!1),n.add(o))}function ml(e,r,n){var o=0;r&&(o|=4),fc(n,e,o,r)}var Eo="_reactListening"+Math.random().toString(36).slice(2);function On(e){if(!e[Eo]){e[Eo]=!0,u.forEach(function(n){n!=="selectionchange"&&(fh.has(n)||ml(n,!1,e),ml(n,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[Eo]||(r[Eo]=!0,ml("selectionchange",!1,r))}}function fc(e,r,n,o){switch(Ma(r)){case 1:var l=Tp;break;case 4:l=zp;break;default:l=Xs}n=l.bind(null,r,n,e),l=void 0,!$s||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(l=!0),o?l!==void 0?e.addEventListener(r,n,{capture:!0,passive:l}):e.addEventListener(r,n,!0):l!==void 0?e.addEventListener(r,n,{passive:l}):e.addEventListener(r,n,!1)}function xl(e,r,n,o,l){var i=o;if((r&1)===0&&(r&2)===0&&o!==null)e:for(;;){if(o===null)return;var d=o.tag;if(d===3||d===4){var p=o.stateNode.containerInfo;if(p===l||p.nodeType===8&&p.parentNode===l)break;if(d===4)for(d=o.return;d!==null;){var h=d.tag;if((h===3||h===4)&&(h=d.stateNode.containerInfo,h===l||h.nodeType===8&&h.parentNode===l))return;d=d.return}for(;p!==null;){if(d=yt(p),d===null)return;if(h=d.tag,h===5||h===6){o=i=d;continue e}p=p.parentNode}}o=o.return}ya(function(){var y=i,b=Hs(n),k=[];e:{var w=dc.get(e);if(w!==void 0){var _=rl,A=e;switch(e){case"keypress":if(No(n)===0)break e;case"keydown":case"keyup":_=$p;break;case"focusin":A="focus",_=ol;break;case"focusout":A="blur",_=ol;break;case"beforeblur":case"afterblur":_=ol;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Fa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=Lp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=Qp;break;case lc:case ic:case ac:_=Op;break;case cc:_=Yp;break;case"scroll":_=Ip;break;case"wheel":_=qp;break;case"copy":case"cut":case"paste":_=Mp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=Wa}var M=(r&4)!==0,Me=!M&&e==="scroll",g=M?w!==null?w+"Capture":null:w;M=[];for(var f=y,v;f!==null;){v=f;var C=v.stateNode;if(v.tag===5&&C!==null&&(v=C,g!==null&&(C=gn(f,g),C!=null&&M.push(An(f,C,v)))),Me)break;f=f.return}0<M.length&&(w=new _(w,A,null,n,b),k.push({event:w,listeners:M}))}}if((r&7)===0){e:{if(w=e==="mouseover"||e==="pointerover",_=e==="mouseout"||e==="pointerout",w&&n!==Fs&&(A=n.relatedTarget||n.fromElement)&&(yt(A)||A[Dr]))break e;if((_||w)&&(w=b.window===b?b:(w=b.ownerDocument)?w.defaultView||w.parentWindow:window,_?(A=n.relatedTarget||n.toElement,_=y,A=A?yt(A):null,A!==null&&(Me=vt(A),A!==Me||A.tag!==5&&A.tag!==6)&&(A=null)):(_=null,A=y),_!==A)){if(M=Fa,C="onMouseLeave",g="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(M=Wa,C="onPointerLeave",g="onPointerEnter",f="pointer"),Me=_==null?w:Jt(_),v=A==null?w:Jt(A),w=new M(C,f+"leave",_,n,b),w.target=Me,w.relatedTarget=v,C=null,yt(b)===y&&(M=new M(g,f+"enter",A,n,b),M.target=v,M.relatedTarget=Me,C=M),Me=C,_&&A)r:{for(M=_,g=A,f=0,v=M;v;v=$t(v))f++;for(v=0,C=g;C;C=$t(C))v++;for(;0<f-v;)M=$t(M),f--;for(;0<v-f;)g=$t(g),v--;for(;f--;){if(M===g||g!==null&&M===g.alternate)break r;M=$t(M),g=$t(g)}M=null}else M=null;_!==null&&mc(k,w,_,M,!1),A!==null&&Me!==null&&mc(k,Me,A,M,!0)}}e:{if(w=y?Jt(y):window,_=w.nodeName&&w.nodeName.toLowerCase(),_==="select"||_==="input"&&w.type==="file")var D=oh;else if(Ga(w))if(Ka)D=ah;else{D=lh;var $=sh}else(_=w.nodeName)&&_.toLowerCase()==="input"&&(w.type==="checkbox"||w.type==="radio")&&(D=ih);if(D&&(D=D(e,y))){Ya(k,D,n,b);break e}$&&$(e,w,y),e==="focusout"&&($=w._wrapperState)&&$.controlled&&w.type==="number"&&Os(w,"number",w.value)}switch($=y?Jt(y):window,e){case"focusin":(Ga($)||$.contentEditable==="true")&&(Wt=$,dl=y,Bn=null);break;case"focusout":Bn=dl=Wt=null;break;case"mousedown":ul=!0;break;case"contextmenu":case"mouseup":case"dragend":ul=!1,oc(k,n,b);break;case"selectionchange":if(uh)break;case"keydown":case"keyup":oc(k,n,b)}var V;if(ll)e:{switch(e){case"compositionstart":var Y="onCompositionStart";break e;case"compositionend":Y="onCompositionEnd";break e;case"compositionupdate":Y="onCompositionUpdate";break e}Y=void 0}else Ht?Ja(e,n)&&(Y="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Y="onCompositionStart");Y&&(Ua&&n.locale!=="ko"&&(Ht||Y!=="onCompositionStart"?Y==="onCompositionEnd"&&Ht&&(V=Ra()):(et=b,el="value"in et?et.value:et.textContent,Ht=!0)),$=To(y,Y),0<$.length&&(Y=new Ha(Y,e,null,n,b),k.push({event:Y,listeners:$}),V?Y.data=V:(V=Qa(n),V!==null&&(Y.data=V)))),(V=Zp?eh(e,n):rh(e,n))&&(y=To(y,"onBeforeInput"),0<y.length&&(b=new Ha("onBeforeInput","beforeinput",null,n,b),k.push({event:b,listeners:y}),b.data=V))}hc(k,r)})}function An(e,r,n){return{instance:e,listener:r,currentTarget:n}}function To(e,r){for(var n=r+"Capture",o=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=gn(e,n),i!=null&&o.unshift(An(e,i,l)),i=gn(e,r),i!=null&&o.push(An(e,i,l))),e=e.return}return o}function $t(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function mc(e,r,n,o,l){for(var i=r._reactName,d=[];n!==null&&n!==o;){var p=n,h=p.alternate,y=p.stateNode;if(h!==null&&h===o)break;p.tag===5&&y!==null&&(p=y,l?(h=gn(n,i),h!=null&&d.unshift(An(n,h,p))):l||(h=gn(n,i),h!=null&&d.push(An(n,h,p)))),n=n.return}d.length!==0&&e.push({event:r,listeners:d})}var mh=/\r\n?/g,xh=/\u0000|\uFFFD/g;function xc(e){return(typeof e=="string"?e:""+e).replace(mh,`
`).replace(xh,"")}function zo(e,r,n){if(r=xc(r),xc(e)!==r&&n)throw Error(a(425))}function Io(){}var gl=null,vl=null;function yl(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var jl=typeof setTimeout=="function"?setTimeout:void 0,gh=typeof clearTimeout=="function"?clearTimeout:void 0,gc=typeof Promise=="function"?Promise:void 0,vh=typeof queueMicrotask=="function"?queueMicrotask:typeof gc!="undefined"?function(e){return gc.resolve(null).then(e).catch(yh)}:jl;function yh(e){setTimeout(function(){throw e})}function Nl(e,r){var n=r,o=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(o===0){e.removeChild(l),Cn(r);return}o--}else n!=="$"&&n!=="$?"&&n!=="$!"||o++;n=l}while(n);Cn(r)}function tt(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return e}function vc(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(r===0)return e;r--}else n==="/$"&&r++}e=e.previousSibling}return null}var Vt=Math.random().toString(36).slice(2),Or="__reactFiber$"+Vt,Mn="__reactProps$"+Vt,Dr="__reactContainer$"+Vt,wl="__reactEvents$"+Vt,jh="__reactListeners$"+Vt,Nh="__reactHandles$"+Vt;function yt(e){var r=e[Or];if(r)return r;for(var n=e.parentNode;n;){if(r=n[Dr]||n[Or]){if(n=r.alternate,r.child!==null||n!==null&&n.child!==null)for(e=vc(e);e!==null;){if(n=e[Or])return n;e=vc(e)}return r}e=n,n=e.parentNode}return null}function Rn(e){return e=e[Or]||e[Dr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Jt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(a(33))}function Po(e){return e[Mn]||null}var bl=[],Qt=-1;function nt(e){return{current:e}}function ke(e){0>Qt||(e.current=bl[Qt],bl[Qt]=null,Qt--)}function we(e,r){Qt++,bl[Qt]=e.current,e.current=r}var ot={},Ke=nt(ot),nr=nt(!1),jt=ot;function Gt(e,r){var n=e.type.contextTypes;if(!n)return ot;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===r)return o.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=r[i];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=l),l}function or(e){return e=e.childContextTypes,e!=null}function Lo(){ke(nr),ke(Ke)}function yc(e,r,n){if(Ke.current!==ot)throw Error(a(168));we(Ke,r),we(nr,n)}function jc(e,r,n){var o=e.stateNode;if(r=r.childContextTypes,typeof o.getChildContext!="function")return n;o=o.getChildContext();for(var l in o)if(!(l in r))throw Error(a(108,pe(e)||"Unknown",l));return B({},n,o)}function Bo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ot,jt=Ke.current,we(Ke,e),we(nr,nr.current),!0}function Nc(e,r,n){var o=e.stateNode;if(!o)throw Error(a(169));n?(e=jc(e,r,jt),o.__reactInternalMemoizedMergedChildContext=e,ke(nr),ke(Ke),we(Ke,e)):ke(nr),we(nr,n)}var Fr=null,_o=!1,kl=!1;function wc(e){Fr===null?Fr=[e]:Fr.push(e)}function wh(e){_o=!0,wc(e)}function st(){if(!kl&&Fr!==null){kl=!0;var e=0,r=ye;try{var n=Fr;for(ye=1;e<n.length;e++){var o=n[e];do o=o(!0);while(o!==null)}Fr=null,_o=!1}catch(l){throw Fr!==null&&(Fr=Fr.slice(e+1)),ka(Js,st),l}finally{ye=r,kl=!1}}return null}var Yt=[],Kt=0,Oo=null,Ao=0,xr=[],gr=0,Nt=null,Hr=1,Wr="";function wt(e,r){Yt[Kt++]=Ao,Yt[Kt++]=Oo,Oo=e,Ao=r}function bc(e,r,n){xr[gr++]=Hr,xr[gr++]=Wr,xr[gr++]=Nt,Nt=e;var o=Hr;e=Wr;var l=32-kr(o)-1;o&=~(1<<l),n+=1;var i=32-kr(r)+l;if(30<i){var d=l-l%5;i=(o&(1<<d)-1).toString(32),o>>=d,l-=d,Hr=1<<32-kr(r)+l|n<<l|o,Wr=i+e}else Hr=1<<i|n<<l|o,Wr=e}function Sl(e){e.return!==null&&(wt(e,1),bc(e,1,0))}function Cl(e){for(;e===Oo;)Oo=Yt[--Kt],Yt[Kt]=null,Ao=Yt[--Kt],Yt[Kt]=null;for(;e===Nt;)Nt=xr[--gr],xr[gr]=null,Wr=xr[--gr],xr[gr]=null,Hr=xr[--gr],xr[gr]=null}var ur=null,pr=null,Ee=!1,Cr=null;function kc(e,r){var n=Nr(5,null,null,0);n.elementType="DELETED",n.stateNode=r,n.return=e,r=e.deletions,r===null?(e.deletions=[n],e.flags|=16):r.push(n)}function Sc(e,r){switch(e.tag){case 5:var n=e.type;return r=r.nodeType!==1||n.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(e.stateNode=r,ur=e,pr=tt(r.firstChild),!0):!1;case 6:return r=e.pendingProps===""||r.nodeType!==3?null:r,r!==null?(e.stateNode=r,ur=e,pr=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(n=Nt!==null?{id:Hr,overflow:Wr}:null,e.memoizedState={dehydrated:r,treeContext:n,retryLane:1073741824},n=Nr(18,null,null,0),n.stateNode=r,n.return=e,e.child=n,ur=e,pr=null,!0):!1;default:return!1}}function El(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Tl(e){if(Ee){var r=pr;if(r){var n=r;if(!Sc(e,r)){if(El(e))throw Error(a(418));r=tt(n.nextSibling);var o=ur;r&&Sc(e,r)?kc(o,n):(e.flags=e.flags&-4097|2,Ee=!1,ur=e)}}else{if(El(e))throw Error(a(418));e.flags=e.flags&-4097|2,Ee=!1,ur=e}}}function Cc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ur=e}function Mo(e){if(e!==ur)return!1;if(!Ee)return Cc(e),Ee=!0,!1;var r;if((r=e.tag!==3)&&!(r=e.tag!==5)&&(r=e.type,r=r!=="head"&&r!=="body"&&!yl(e.type,e.memoizedProps)),r&&(r=pr)){if(El(e))throw Ec(),Error(a(418));for(;r;)kc(e,r),r=tt(r.nextSibling)}if(Cc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));e:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(r===0){pr=tt(e.nextSibling);break e}r--}else n!=="$"&&n!=="$!"&&n!=="$?"||r++}e=e.nextSibling}pr=null}}else pr=ur?tt(e.stateNode.nextSibling):null;return!0}function Ec(){for(var e=pr;e;)e=tt(e.nextSibling)}function qt(){pr=ur=null,Ee=!1}function zl(e){Cr===null?Cr=[e]:Cr.push(e)}var bh=L.ReactCurrentBatchConfig;function Dn(e,r,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(a(309));var o=n.stateNode}if(!o)throw Error(a(147,e));var l=o,i=""+e;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===i?r.ref:(r=function(d){var p=l.refs;d===null?delete p[i]:p[i]=d},r._stringRef=i,r)}if(typeof e!="string")throw Error(a(284));if(!n._owner)throw Error(a(290,e))}return e}function Ro(e,r){throw e=Object.prototype.toString.call(r),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e))}function Tc(e){var r=e._init;return r(e._payload)}function zc(e){function r(g,f){if(e){var v=g.deletions;v===null?(g.deletions=[f],g.flags|=16):v.push(f)}}function n(g,f){if(!e)return null;for(;f!==null;)r(g,f),f=f.sibling;return null}function o(g,f){for(g=new Map;f!==null;)f.key!==null?g.set(f.key,f):g.set(f.index,f),f=f.sibling;return g}function l(g,f){return g=ht(g,f),g.index=0,g.sibling=null,g}function i(g,f,v){return g.index=v,e?(v=g.alternate,v!==null?(v=v.index,v<f?(g.flags|=2,f):v):(g.flags|=2,f)):(g.flags|=1048576,f)}function d(g){return e&&g.alternate===null&&(g.flags|=2),g}function p(g,f,v,C){return f===null||f.tag!==6?(f=ji(v,g.mode,C),f.return=g,f):(f=l(f,v),f.return=g,f)}function h(g,f,v,C){var D=v.type;return D===I?b(g,f,v.props.children,C,v.key):f!==null&&(f.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===Ye&&Tc(D)===f.type)?(C=l(f,v.props),C.ref=Dn(g,f,v),C.return=g,C):(C=as(v.type,v.key,v.props,null,g.mode,C),C.ref=Dn(g,f,v),C.return=g,C)}function y(g,f,v,C){return f===null||f.tag!==4||f.stateNode.containerInfo!==v.containerInfo||f.stateNode.implementation!==v.implementation?(f=Ni(v,g.mode,C),f.return=g,f):(f=l(f,v.children||[]),f.return=g,f)}function b(g,f,v,C,D){return f===null||f.tag!==7?(f=It(v,g.mode,C,D),f.return=g,f):(f=l(f,v),f.return=g,f)}function k(g,f,v){if(typeof f=="string"&&f!==""||typeof f=="number")return f=ji(""+f,g.mode,v),f.return=g,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case X:return v=as(f.type,f.key,f.props,null,g.mode,v),v.ref=Dn(g,null,f),v.return=g,v;case U:return f=Ni(f,g.mode,v),f.return=g,f;case Ye:var C=f._init;return k(g,C(f._payload),v)}if(fn(f)||F(f))return f=It(f,g.mode,v,null),f.return=g,f;Ro(g,f)}return null}function w(g,f,v,C){var D=f!==null?f.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return D!==null?null:p(g,f,""+v,C);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case X:return v.key===D?h(g,f,v,C):null;case U:return v.key===D?y(g,f,v,C):null;case Ye:return D=v._init,w(g,f,D(v._payload),C)}if(fn(v)||F(v))return D!==null?null:b(g,f,v,C,null);Ro(g,v)}return null}function _(g,f,v,C,D){if(typeof C=="string"&&C!==""||typeof C=="number")return g=g.get(v)||null,p(f,g,""+C,D);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case X:return g=g.get(C.key===null?v:C.key)||null,h(f,g,C,D);case U:return g=g.get(C.key===null?v:C.key)||null,y(f,g,C,D);case Ye:var $=C._init;return _(g,f,v,$(C._payload),D)}if(fn(C)||F(C))return g=g.get(v)||null,b(f,g,C,D,null);Ro(f,C)}return null}function A(g,f,v,C){for(var D=null,$=null,V=f,Y=f=0,Ve=null;V!==null&&Y<v.length;Y++){V.index>Y?(Ve=V,V=null):Ve=V.sibling;var me=w(g,V,v[Y],C);if(me===null){V===null&&(V=Ve);break}e&&V&&me.alternate===null&&r(g,V),f=i(me,f,Y),$===null?D=me:$.sibling=me,$=me,V=Ve}if(Y===v.length)return n(g,V),Ee&&wt(g,Y),D;if(V===null){for(;Y<v.length;Y++)V=k(g,v[Y],C),V!==null&&(f=i(V,f,Y),$===null?D=V:$.sibling=V,$=V);return Ee&&wt(g,Y),D}for(V=o(g,V);Y<v.length;Y++)Ve=_(V,g,Y,v[Y],C),Ve!==null&&(e&&Ve.alternate!==null&&V.delete(Ve.key===null?Y:Ve.key),f=i(Ve,f,Y),$===null?D=Ve:$.sibling=Ve,$=Ve);return e&&V.forEach(function(ft){return r(g,ft)}),Ee&&wt(g,Y),D}function M(g,f,v,C){var D=F(v);if(typeof D!="function")throw Error(a(150));if(v=D.call(v),v==null)throw Error(a(151));for(var $=D=null,V=f,Y=f=0,Ve=null,me=v.next();V!==null&&!me.done;Y++,me=v.next()){V.index>Y?(Ve=V,V=null):Ve=V.sibling;var ft=w(g,V,me.value,C);if(ft===null){V===null&&(V=Ve);break}e&&V&&ft.alternate===null&&r(g,V),f=i(ft,f,Y),$===null?D=ft:$.sibling=ft,$=ft,V=Ve}if(me.done)return n(g,V),Ee&&wt(g,Y),D;if(V===null){for(;!me.done;Y++,me=v.next())me=k(g,me.value,C),me!==null&&(f=i(me,f,Y),$===null?D=me:$.sibling=me,$=me);return Ee&&wt(g,Y),D}for(V=o(g,V);!me.done;Y++,me=v.next())me=_(V,g,Y,me.value,C),me!==null&&(e&&me.alternate!==null&&V.delete(me.key===null?Y:me.key),f=i(me,f,Y),$===null?D=me:$.sibling=me,$=me);return e&&V.forEach(function(tf){return r(g,tf)}),Ee&&wt(g,Y),D}function Me(g,f,v,C){if(typeof v=="object"&&v!==null&&v.type===I&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case X:e:{for(var D=v.key,$=f;$!==null;){if($.key===D){if(D=v.type,D===I){if($.tag===7){n(g,$.sibling),f=l($,v.props.children),f.return=g,g=f;break e}}else if($.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===Ye&&Tc(D)===$.type){n(g,$.sibling),f=l($,v.props),f.ref=Dn(g,$,v),f.return=g,g=f;break e}n(g,$);break}else r(g,$);$=$.sibling}v.type===I?(f=It(v.props.children,g.mode,C,v.key),f.return=g,g=f):(C=as(v.type,v.key,v.props,null,g.mode,C),C.ref=Dn(g,f,v),C.return=g,g=C)}return d(g);case U:e:{for($=v.key;f!==null;){if(f.key===$)if(f.tag===4&&f.stateNode.containerInfo===v.containerInfo&&f.stateNode.implementation===v.implementation){n(g,f.sibling),f=l(f,v.children||[]),f.return=g,g=f;break e}else{n(g,f);break}else r(g,f);f=f.sibling}f=Ni(v,g.mode,C),f.return=g,g=f}return d(g);case Ye:return $=v._init,Me(g,f,$(v._payload),C)}if(fn(v))return A(g,f,v,C);if(F(v))return M(g,f,v,C);Ro(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,f!==null&&f.tag===6?(n(g,f.sibling),f=l(f,v),f.return=g,g=f):(n(g,f),f=ji(v,g.mode,C),f.return=g,g=f),d(g)):n(g,f)}return Me}var Xt=zc(!0),Ic=zc(!1),Do=nt(null),Fo=null,Zt=null,Il=null;function Pl(){Il=Zt=Fo=null}function Ll(e){var r=Do.current;ke(Do),e._currentValue=r}function Bl(e,r,n){for(;e!==null;){var o=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,o!==null&&(o.childLanes|=r)):o!==null&&(o.childLanes&r)!==r&&(o.childLanes|=r),e===n)break;e=e.return}}function en(e,r){Fo=e,Il=Zt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&r)!==0&&(sr=!0),e.firstContext=null)}function vr(e){var r=e._currentValue;if(Il!==e)if(e={context:e,memoizedValue:r,next:null},Zt===null){if(Fo===null)throw Error(a(308));Zt=e,Fo.dependencies={lanes:0,firstContext:e}}else Zt=Zt.next=e;return r}var bt=null;function _l(e){bt===null?bt=[e]:bt.push(e)}function Pc(e,r,n,o){var l=r.interleaved;return l===null?(n.next=n,_l(r)):(n.next=l.next,l.next=n),r.interleaved=n,Ur(e,o)}function Ur(e,r){e.lanes|=r;var n=e.alternate;for(n!==null&&(n.lanes|=r),n=e,e=e.return;e!==null;)e.childLanes|=r,n=e.alternate,n!==null&&(n.childLanes|=r),n=e,e=e.return;return n.tag===3?n.stateNode:null}var lt=!1;function Ol(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Lc(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function $r(e,r){return{eventTime:e,lane:r,tag:0,payload:null,callback:null,next:null}}function it(e,r,n){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(he&2)!==0){var l=o.pending;return l===null?r.next=r:(r.next=l.next,l.next=r),o.pending=r,Ur(e,n)}return l=o.interleaved,l===null?(r.next=r,_l(o)):(r.next=l.next,l.next=r),o.interleaved=r,Ur(e,n)}function Ho(e,r,n){if(r=r.updateQueue,r!==null&&(r=r.shared,(n&4194240)!==0)){var o=r.lanes;o&=e.pendingLanes,n|=o,r.lanes=n,Ys(e,n)}}function Bc(e,r){var n=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var d={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=d:i=i.next=d,n=n.next}while(n!==null);i===null?l=i=r:i=i.next=r}else l=i=r;n={baseState:o.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:o.shared,effects:o.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=r:e.next=r,n.lastBaseUpdate=r}function Wo(e,r,n,o){var l=e.updateQueue;lt=!1;var i=l.firstBaseUpdate,d=l.lastBaseUpdate,p=l.shared.pending;if(p!==null){l.shared.pending=null;var h=p,y=h.next;h.next=null,d===null?i=y:d.next=y,d=h;var b=e.alternate;b!==null&&(b=b.updateQueue,p=b.lastBaseUpdate,p!==d&&(p===null?b.firstBaseUpdate=y:p.next=y,b.lastBaseUpdate=h))}if(i!==null){var k=l.baseState;d=0,b=y=h=null,p=i;do{var w=p.lane,_=p.eventTime;if((o&w)===w){b!==null&&(b=b.next={eventTime:_,lane:0,tag:p.tag,payload:p.payload,callback:p.callback,next:null});e:{var A=e,M=p;switch(w=r,_=n,M.tag){case 1:if(A=M.payload,typeof A=="function"){k=A.call(_,k,w);break e}k=A;break e;case 3:A.flags=A.flags&-65537|128;case 0:if(A=M.payload,w=typeof A=="function"?A.call(_,k,w):A,w==null)break e;k=B({},k,w);break e;case 2:lt=!0}}p.callback!==null&&p.lane!==0&&(e.flags|=64,w=l.effects,w===null?l.effects=[p]:w.push(p))}else _={eventTime:_,lane:w,tag:p.tag,payload:p.payload,callback:p.callback,next:null},b===null?(y=b=_,h=k):b=b.next=_,d|=w;if(p=p.next,p===null){if(p=l.shared.pending,p===null)break;w=p,p=w.next,w.next=null,l.lastBaseUpdate=w,l.shared.pending=null}}while(!0);if(b===null&&(h=k),l.baseState=h,l.firstBaseUpdate=y,l.lastBaseUpdate=b,r=l.shared.interleaved,r!==null){l=r;do d|=l.lane,l=l.next;while(l!==r)}else i===null&&(l.shared.lanes=0);Ct|=d,e.lanes=d,e.memoizedState=k}}function _c(e,r,n){if(e=r.effects,r.effects=null,e!==null)for(r=0;r<e.length;r++){var o=e[r],l=o.callback;if(l!==null){if(o.callback=null,o=n,typeof l!="function")throw Error(a(191,l));l.call(o)}}}var Fn={},Ar=nt(Fn),Hn=nt(Fn),Wn=nt(Fn);function kt(e){if(e===Fn)throw Error(a(174));return e}function Al(e,r){switch(we(Wn,r),we(Hn,e),we(Ar,Fn),e=r.nodeType,e){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Ms(null,"");break;default:e=e===8?r.parentNode:r,r=e.namespaceURI||null,e=e.tagName,r=Ms(r,e)}ke(Ar),we(Ar,r)}function rn(){ke(Ar),ke(Hn),ke(Wn)}function Oc(e){kt(Wn.current);var r=kt(Ar.current),n=Ms(r,e.type);r!==n&&(we(Hn,e),we(Ar,n))}function Ml(e){Hn.current===e&&(ke(Ar),ke(Hn))}var Pe=nt(0);function Uo(e){for(var r=e;r!==null;){if(r.tag===13){var n=r.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Rl=[];function Dl(){for(var e=0;e<Rl.length;e++)Rl[e]._workInProgressVersionPrimary=null;Rl.length=0}var $o=L.ReactCurrentDispatcher,Fl=L.ReactCurrentBatchConfig,St=0,Le=null,Fe=null,Ue=null,Vo=!1,Un=!1,$n=0,kh=0;function qe(){throw Error(a(321))}function Hl(e,r){if(r===null)return!1;for(var n=0;n<r.length&&n<e.length;n++)if(!Sr(e[n],r[n]))return!1;return!0}function Wl(e,r,n,o,l,i){if(St=i,Le=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,$o.current=e===null||e.memoizedState===null?Th:zh,e=n(o,l),Un){i=0;do{if(Un=!1,$n=0,25<=i)throw Error(a(301));i+=1,Ue=Fe=null,r.updateQueue=null,$o.current=Ih,e=n(o,l)}while(Un)}if($o.current=Go,r=Fe!==null&&Fe.next!==null,St=0,Ue=Fe=Le=null,Vo=!1,r)throw Error(a(300));return e}function Ul(){var e=$n!==0;return $n=0,e}function Mr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?Le.memoizedState=Ue=e:Ue=Ue.next=e,Ue}function yr(){if(Fe===null){var e=Le.alternate;e=e!==null?e.memoizedState:null}else e=Fe.next;var r=Ue===null?Le.memoizedState:Ue.next;if(r!==null)Ue=r,Fe=e;else{if(e===null)throw Error(a(310));Fe=e,e={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},Ue===null?Le.memoizedState=Ue=e:Ue=Ue.next=e}return Ue}function Vn(e,r){return typeof r=="function"?r(e):r}function $l(e){var r=yr(),n=r.queue;if(n===null)throw Error(a(311));n.lastRenderedReducer=e;var o=Fe,l=o.baseQueue,i=n.pending;if(i!==null){if(l!==null){var d=l.next;l.next=i.next,i.next=d}o.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,o=o.baseState;var p=d=null,h=null,y=i;do{var b=y.lane;if((St&b)===b)h!==null&&(h=h.next={lane:0,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null}),o=y.hasEagerState?y.eagerState:e(o,y.action);else{var k={lane:b,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null};h===null?(p=h=k,d=o):h=h.next=k,Le.lanes|=b,Ct|=b}y=y.next}while(y!==null&&y!==i);h===null?d=o:h.next=p,Sr(o,r.memoizedState)||(sr=!0),r.memoizedState=o,r.baseState=d,r.baseQueue=h,n.lastRenderedState=o}if(e=n.interleaved,e!==null){l=e;do i=l.lane,Le.lanes|=i,Ct|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[r.memoizedState,n.dispatch]}function Vl(e){var r=yr(),n=r.queue;if(n===null)throw Error(a(311));n.lastRenderedReducer=e;var o=n.dispatch,l=n.pending,i=r.memoizedState;if(l!==null){n.pending=null;var d=l=l.next;do i=e(i,d.action),d=d.next;while(d!==l);Sr(i,r.memoizedState)||(sr=!0),r.memoizedState=i,r.baseQueue===null&&(r.baseState=i),n.lastRenderedState=i}return[i,o]}function Ac(){}function Mc(e,r){var n=Le,o=yr(),l=r(),i=!Sr(o.memoizedState,l);if(i&&(o.memoizedState=l,sr=!0),o=o.queue,Jl(Fc.bind(null,n,o,e),[e]),o.getSnapshot!==r||i||Ue!==null&&Ue.memoizedState.tag&1){if(n.flags|=2048,Jn(9,Dc.bind(null,n,o,l,r),void 0,null),$e===null)throw Error(a(349));(St&30)!==0||Rc(n,r,l)}return l}function Rc(e,r,n){e.flags|=16384,e={getSnapshot:r,value:n},r=Le.updateQueue,r===null?(r={lastEffect:null,stores:null},Le.updateQueue=r,r.stores=[e]):(n=r.stores,n===null?r.stores=[e]:n.push(e))}function Dc(e,r,n,o){r.value=n,r.getSnapshot=o,Hc(r)&&Wc(e)}function Fc(e,r,n){return n(function(){Hc(r)&&Wc(e)})}function Hc(e){var r=e.getSnapshot;e=e.value;try{var n=r();return!Sr(e,n)}catch{return!0}}function Wc(e){var r=Ur(e,1);r!==null&&Ir(r,e,1,-1)}function Uc(e){var r=Mr();return typeof e=="function"&&(e=e()),r.memoizedState=r.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vn,lastRenderedState:e},r.queue=e,e=e.dispatch=Eh.bind(null,Le,e),[r.memoizedState,e]}function Jn(e,r,n,o){return e={tag:e,create:r,destroy:n,deps:o,next:null},r=Le.updateQueue,r===null?(r={lastEffect:null,stores:null},Le.updateQueue=r,r.lastEffect=e.next=e):(n=r.lastEffect,n===null?r.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,r.lastEffect=e)),e}function $c(){return yr().memoizedState}function Jo(e,r,n,o){var l=Mr();Le.flags|=e,l.memoizedState=Jn(1|r,n,void 0,o===void 0?null:o)}function Qo(e,r,n,o){var l=yr();o=o===void 0?null:o;var i=void 0;if(Fe!==null){var d=Fe.memoizedState;if(i=d.destroy,o!==null&&Hl(o,d.deps)){l.memoizedState=Jn(r,n,i,o);return}}Le.flags|=e,l.memoizedState=Jn(1|r,n,i,o)}function Vc(e,r){return Jo(8390656,8,e,r)}function Jl(e,r){return Qo(2048,8,e,r)}function Jc(e,r){return Qo(4,2,e,r)}function Qc(e,r){return Qo(4,4,e,r)}function Gc(e,r){if(typeof r=="function")return e=e(),r(e),function(){r(null)};if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function Yc(e,r,n){return n=n!=null?n.concat([e]):null,Qo(4,4,Gc.bind(null,r,e),n)}function Ql(){}function Kc(e,r){var n=yr();r=r===void 0?null:r;var o=n.memoizedState;return o!==null&&r!==null&&Hl(r,o[1])?o[0]:(n.memoizedState=[e,r],e)}function qc(e,r){var n=yr();r=r===void 0?null:r;var o=n.memoizedState;return o!==null&&r!==null&&Hl(r,o[1])?o[0]:(e=e(),n.memoizedState=[e,r],e)}function Xc(e,r,n){return(St&21)===0?(e.baseState&&(e.baseState=!1,sr=!0),e.memoizedState=n):(Sr(n,r)||(n=Ta(),Le.lanes|=n,Ct|=n,e.baseState=!0),r)}function Sh(e,r){var n=ye;ye=n!==0&&4>n?n:4,e(!0);var o=Fl.transition;Fl.transition={};try{e(!1),r()}finally{ye=n,Fl.transition=o}}function Zc(){return yr().memoizedState}function Ch(e,r,n){var o=ut(e);if(n={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null},ed(e))rd(r,n);else if(n=Pc(e,r,n,o),n!==null){var l=tr();Ir(n,e,o,l),td(n,r,o)}}function Eh(e,r,n){var o=ut(e),l={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null};if(ed(e))rd(r,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=r.lastRenderedReducer,i!==null))try{var d=r.lastRenderedState,p=i(d,n);if(l.hasEagerState=!0,l.eagerState=p,Sr(p,d)){var h=r.interleaved;h===null?(l.next=l,_l(r)):(l.next=h.next,h.next=l),r.interleaved=l;return}}catch{}finally{}n=Pc(e,r,l,o),n!==null&&(l=tr(),Ir(n,e,o,l),td(n,r,o))}}function ed(e){var r=e.alternate;return e===Le||r!==null&&r===Le}function rd(e,r){Un=Vo=!0;var n=e.pending;n===null?r.next=r:(r.next=n.next,n.next=r),e.pending=r}function td(e,r,n){if((n&4194240)!==0){var o=r.lanes;o&=e.pendingLanes,n|=o,r.lanes=n,Ys(e,n)}}var Go={readContext:vr,useCallback:qe,useContext:qe,useEffect:qe,useImperativeHandle:qe,useInsertionEffect:qe,useLayoutEffect:qe,useMemo:qe,useReducer:qe,useRef:qe,useState:qe,useDebugValue:qe,useDeferredValue:qe,useTransition:qe,useMutableSource:qe,useSyncExternalStore:qe,useId:qe,unstable_isNewReconciler:!1},Th={readContext:vr,useCallback:function(e,r){return Mr().memoizedState=[e,r===void 0?null:r],e},useContext:vr,useEffect:Vc,useImperativeHandle:function(e,r,n){return n=n!=null?n.concat([e]):null,Jo(4194308,4,Gc.bind(null,r,e),n)},useLayoutEffect:function(e,r){return Jo(4194308,4,e,r)},useInsertionEffect:function(e,r){return Jo(4,2,e,r)},useMemo:function(e,r){var n=Mr();return r=r===void 0?null:r,e=e(),n.memoizedState=[e,r],e},useReducer:function(e,r,n){var o=Mr();return r=n!==void 0?n(r):r,o.memoizedState=o.baseState=r,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},o.queue=e,e=e.dispatch=Ch.bind(null,Le,e),[o.memoizedState,e]},useRef:function(e){var r=Mr();return e={current:e},r.memoizedState=e},useState:Uc,useDebugValue:Ql,useDeferredValue:function(e){return Mr().memoizedState=e},useTransition:function(){var e=Uc(!1),r=e[0];return e=Sh.bind(null,e[1]),Mr().memoizedState=e,[r,e]},useMutableSource:function(){},useSyncExternalStore:function(e,r,n){var o=Le,l=Mr();if(Ee){if(n===void 0)throw Error(a(407));n=n()}else{if(n=r(),$e===null)throw Error(a(349));(St&30)!==0||Rc(o,r,n)}l.memoizedState=n;var i={value:n,getSnapshot:r};return l.queue=i,Vc(Fc.bind(null,o,i,e),[e]),o.flags|=2048,Jn(9,Dc.bind(null,o,i,n,r),void 0,null),n},useId:function(){var e=Mr(),r=$e.identifierPrefix;if(Ee){var n=Wr,o=Hr;n=(o&~(1<<32-kr(o)-1)).toString(32)+n,r=":"+r+"R"+n,n=$n++,0<n&&(r+="H"+n.toString(32)),r+=":"}else n=kh++,r=":"+r+"r"+n.toString(32)+":";return e.memoizedState=r},unstable_isNewReconciler:!1},zh={readContext:vr,useCallback:Kc,useContext:vr,useEffect:Jl,useImperativeHandle:Yc,useInsertionEffect:Jc,useLayoutEffect:Qc,useMemo:qc,useReducer:$l,useRef:$c,useState:function(){return $l(Vn)},useDebugValue:Ql,useDeferredValue:function(e){var r=yr();return Xc(r,Fe.memoizedState,e)},useTransition:function(){var e=$l(Vn)[0],r=yr().memoizedState;return[e,r]},useMutableSource:Ac,useSyncExternalStore:Mc,useId:Zc,unstable_isNewReconciler:!1},Ih={readContext:vr,useCallback:Kc,useContext:vr,useEffect:Jl,useImperativeHandle:Yc,useInsertionEffect:Jc,useLayoutEffect:Qc,useMemo:qc,useReducer:Vl,useRef:$c,useState:function(){return Vl(Vn)},useDebugValue:Ql,useDeferredValue:function(e){var r=yr();return Fe===null?r.memoizedState=e:Xc(r,Fe.memoizedState,e)},useTransition:function(){var e=Vl(Vn)[0],r=yr().memoizedState;return[e,r]},useMutableSource:Ac,useSyncExternalStore:Mc,useId:Zc,unstable_isNewReconciler:!1};function Er(e,r){if(e&&e.defaultProps){r=B({},r),e=e.defaultProps;for(var n in e)r[n]===void 0&&(r[n]=e[n]);return r}return r}function Gl(e,r,n,o){r=e.memoizedState,n=n(o,r),n=n==null?r:B({},r,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Yo={isMounted:function(e){return(e=e._reactInternals)?vt(e)===e:!1},enqueueSetState:function(e,r,n){e=e._reactInternals;var o=tr(),l=ut(e),i=$r(o,l);i.payload=r,n!=null&&(i.callback=n),r=it(e,i,l),r!==null&&(Ir(r,e,l,o),Ho(r,e,l))},enqueueReplaceState:function(e,r,n){e=e._reactInternals;var o=tr(),l=ut(e),i=$r(o,l);i.tag=1,i.payload=r,n!=null&&(i.callback=n),r=it(e,i,l),r!==null&&(Ir(r,e,l,o),Ho(r,e,l))},enqueueForceUpdate:function(e,r){e=e._reactInternals;var n=tr(),o=ut(e),l=$r(n,o);l.tag=2,r!=null&&(l.callback=r),r=it(e,l,o),r!==null&&(Ir(r,e,o,n),Ho(r,e,o))}};function nd(e,r,n,o,l,i,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,i,d):r.prototype&&r.prototype.isPureReactComponent?!Ln(n,o)||!Ln(l,i):!0}function od(e,r,n){var o=!1,l=ot,i=r.contextType;return typeof i=="object"&&i!==null?i=vr(i):(l=or(r)?jt:Ke.current,o=r.contextTypes,i=(o=o!=null)?Gt(e,l):ot),r=new r(n,i),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Yo,e.stateNode=r,r._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),r}function sd(e,r,n,o){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(n,o),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(n,o),r.state!==e&&Yo.enqueueReplaceState(r,r.state,null)}function Yl(e,r,n,o){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Ol(e);var i=r.contextType;typeof i=="object"&&i!==null?l.context=vr(i):(i=or(r)?jt:Ke.current,l.context=Gt(e,i)),l.state=e.memoizedState,i=r.getDerivedStateFromProps,typeof i=="function"&&(Gl(e,r,i,n),l.state=e.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(r=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),r!==l.state&&Yo.enqueueReplaceState(l,l.state,null),Wo(e,n,l,o),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function tn(e,r){try{var n="",o=r;do n+=ie(o),o=o.return;while(o);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:r,stack:l,digest:null}}function Kl(e,r,n){return{value:e,source:null,stack:n!=null?n:null,digest:r!=null?r:null}}function ql(e,r){try{console.error(r.value)}catch(n){setTimeout(function(){throw n})}}var Ph=typeof WeakMap=="function"?WeakMap:Map;function ld(e,r,n){n=$r(-1,n),n.tag=3,n.payload={element:null};var o=r.value;return n.callback=function(){ts||(ts=!0,pi=o),ql(e,r)},n}function id(e,r,n){n=$r(-1,n),n.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var l=r.value;n.payload=function(){return o(l)},n.callback=function(){ql(e,r)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){ql(e,r),typeof o!="function"&&(ct===null?ct=new Set([this]):ct.add(this));var d=r.stack;this.componentDidCatch(r.value,{componentStack:d!==null?d:""})}),n}function ad(e,r,n){var o=e.pingCache;if(o===null){o=e.pingCache=new Ph;var l=new Set;o.set(r,l)}else l=o.get(r),l===void 0&&(l=new Set,o.set(r,l));l.has(n)||(l.add(n),e=Vh.bind(null,e,r,n),r.then(e,e))}function cd(e){do{var r;if((r=e.tag===13)&&(r=e.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return e;e=e.return}while(e!==null);return null}function dd(e,r,n,o,l){return(e.mode&1)===0?(e===r?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(r=$r(-1,1),r.tag=2,it(n,r,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var Lh=L.ReactCurrentOwner,sr=!1;function rr(e,r,n,o){r.child=e===null?Ic(r,null,n,o):Xt(r,e.child,n,o)}function ud(e,r,n,o,l){n=n.render;var i=r.ref;return en(r,l),o=Wl(e,r,n,o,i,l),n=Ul(),e!==null&&!sr?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~l,Vr(e,r,l)):(Ee&&n&&Sl(r),r.flags|=1,rr(e,r,o,l),r.child)}function pd(e,r,n,o,l){if(e===null){var i=n.type;return typeof i=="function"&&!yi(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(r.tag=15,r.type=i,hd(e,r,i,o,l)):(e=as(n.type,null,o,r,r.mode,l),e.ref=r.ref,e.return=r,r.child=e)}if(i=e.child,(e.lanes&l)===0){var d=i.memoizedProps;if(n=n.compare,n=n!==null?n:Ln,n(d,o)&&e.ref===r.ref)return Vr(e,r,l)}return r.flags|=1,e=ht(i,o),e.ref=r.ref,e.return=r,r.child=e}function hd(e,r,n,o,l){if(e!==null){var i=e.memoizedProps;if(Ln(i,o)&&e.ref===r.ref)if(sr=!1,r.pendingProps=o=i,(e.lanes&l)!==0)(e.flags&131072)!==0&&(sr=!0);else return r.lanes=e.lanes,Vr(e,r,l)}return Xl(e,r,n,o,l)}function fd(e,r,n){var o=r.pendingProps,l=o.children,i=e!==null?e.memoizedState:null;if(o.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},we(on,hr),hr|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:e,cachePool:null,transitions:null},r.updateQueue=null,we(on,hr),hr|=e,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=i!==null?i.baseLanes:n,we(on,hr),hr|=o}else i!==null?(o=i.baseLanes|n,r.memoizedState=null):o=n,we(on,hr),hr|=o;return rr(e,r,l,n),r.child}function md(e,r){var n=r.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(r.flags|=512,r.flags|=2097152)}function Xl(e,r,n,o,l){var i=or(n)?jt:Ke.current;return i=Gt(r,i),en(r,l),n=Wl(e,r,n,o,i,l),o=Ul(),e!==null&&!sr?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~l,Vr(e,r,l)):(Ee&&o&&Sl(r),r.flags|=1,rr(e,r,n,l),r.child)}function xd(e,r,n,o,l){if(or(n)){var i=!0;Bo(r)}else i=!1;if(en(r,l),r.stateNode===null)qo(e,r),od(r,n,o),Yl(r,n,o,l),o=!0;else if(e===null){var d=r.stateNode,p=r.memoizedProps;d.props=p;var h=d.context,y=n.contextType;typeof y=="object"&&y!==null?y=vr(y):(y=or(n)?jt:Ke.current,y=Gt(r,y));var b=n.getDerivedStateFromProps,k=typeof b=="function"||typeof d.getSnapshotBeforeUpdate=="function";k||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(p!==o||h!==y)&&sd(r,d,o,y),lt=!1;var w=r.memoizedState;d.state=w,Wo(r,o,d,l),h=r.memoizedState,p!==o||w!==h||nr.current||lt?(typeof b=="function"&&(Gl(r,n,b,o),h=r.memoizedState),(p=lt||nd(r,n,p,o,w,h,y))?(k||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(r.flags|=4194308)):(typeof d.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=o,r.memoizedState=h),d.props=o,d.state=h,d.context=y,o=p):(typeof d.componentDidMount=="function"&&(r.flags|=4194308),o=!1)}else{d=r.stateNode,Lc(e,r),p=r.memoizedProps,y=r.type===r.elementType?p:Er(r.type,p),d.props=y,k=r.pendingProps,w=d.context,h=n.contextType,typeof h=="object"&&h!==null?h=vr(h):(h=or(n)?jt:Ke.current,h=Gt(r,h));var _=n.getDerivedStateFromProps;(b=typeof _=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(p!==k||w!==h)&&sd(r,d,o,h),lt=!1,w=r.memoizedState,d.state=w,Wo(r,o,d,l);var A=r.memoizedState;p!==k||w!==A||nr.current||lt?(typeof _=="function"&&(Gl(r,n,_,o),A=r.memoizedState),(y=lt||nd(r,n,y,o,w,A,h)||!1)?(b||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,A,h),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,A,h)),typeof d.componentDidUpdate=="function"&&(r.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof d.componentDidUpdate!="function"||p===e.memoizedProps&&w===e.memoizedState||(r.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&w===e.memoizedState||(r.flags|=1024),r.memoizedProps=o,r.memoizedState=A),d.props=o,d.state=A,d.context=h,o=y):(typeof d.componentDidUpdate!="function"||p===e.memoizedProps&&w===e.memoizedState||(r.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&w===e.memoizedState||(r.flags|=1024),o=!1)}return Zl(e,r,n,o,i,l)}function Zl(e,r,n,o,l,i){md(e,r);var d=(r.flags&128)!==0;if(!o&&!d)return l&&Nc(r,n,!1),Vr(e,r,i);o=r.stateNode,Lh.current=r;var p=d&&typeof n.getDerivedStateFromError!="function"?null:o.render();return r.flags|=1,e!==null&&d?(r.child=Xt(r,e.child,null,i),r.child=Xt(r,null,p,i)):rr(e,r,p,i),r.memoizedState=o.state,l&&Nc(r,n,!0),r.child}function gd(e){var r=e.stateNode;r.pendingContext?yc(e,r.pendingContext,r.pendingContext!==r.context):r.context&&yc(e,r.context,!1),Al(e,r.containerInfo)}function vd(e,r,n,o,l){return qt(),zl(l),r.flags|=256,rr(e,r,n,o),r.child}var ei={dehydrated:null,treeContext:null,retryLane:0};function ri(e){return{baseLanes:e,cachePool:null,transitions:null}}function yd(e,r,n){var o=r.pendingProps,l=Pe.current,i=!1,d=(r.flags&128)!==0,p;if((p=d)||(p=e!==null&&e.memoizedState===null?!1:(l&2)!==0),p?(i=!0,r.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),we(Pe,l&1),e===null)return Tl(r),e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((r.mode&1)===0?r.lanes=1:e.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(d=o.children,e=o.fallback,i?(o=r.mode,i=r.child,d={mode:"hidden",children:d},(o&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=d):i=cs(d,o,0,null),e=It(e,o,n,null),i.return=r,e.return=r,i.sibling=e,r.child=i,r.child.memoizedState=ri(n),r.memoizedState=ei,e):ti(r,d));if(l=e.memoizedState,l!==null&&(p=l.dehydrated,p!==null))return Bh(e,r,d,o,p,l,n);if(i){i=o.fallback,d=r.mode,l=e.child,p=l.sibling;var h={mode:"hidden",children:o.children};return(d&1)===0&&r.child!==l?(o=r.child,o.childLanes=0,o.pendingProps=h,r.deletions=null):(o=ht(l,h),o.subtreeFlags=l.subtreeFlags&14680064),p!==null?i=ht(p,i):(i=It(i,d,n,null),i.flags|=2),i.return=r,o.return=r,o.sibling=i,r.child=o,o=i,i=r.child,d=e.child.memoizedState,d=d===null?ri(n):{baseLanes:d.baseLanes|n,cachePool:null,transitions:d.transitions},i.memoizedState=d,i.childLanes=e.childLanes&~n,r.memoizedState=ei,o}return i=e.child,e=i.sibling,o=ht(i,{mode:"visible",children:o.children}),(r.mode&1)===0&&(o.lanes=n),o.return=r,o.sibling=null,e!==null&&(n=r.deletions,n===null?(r.deletions=[e],r.flags|=16):n.push(e)),r.child=o,r.memoizedState=null,o}function ti(e,r){return r=cs({mode:"visible",children:r},e.mode,0,null),r.return=e,e.child=r}function Ko(e,r,n,o){return o!==null&&zl(o),Xt(r,e.child,null,n),e=ti(r,r.pendingProps.children),e.flags|=2,r.memoizedState=null,e}function Bh(e,r,n,o,l,i,d){if(n)return r.flags&256?(r.flags&=-257,o=Kl(Error(a(422))),Ko(e,r,d,o)):r.memoizedState!==null?(r.child=e.child,r.flags|=128,null):(i=o.fallback,l=r.mode,o=cs({mode:"visible",children:o.children},l,0,null),i=It(i,l,d,null),i.flags|=2,o.return=r,i.return=r,o.sibling=i,r.child=o,(r.mode&1)!==0&&Xt(r,e.child,null,d),r.child.memoizedState=ri(d),r.memoizedState=ei,i);if((r.mode&1)===0)return Ko(e,r,d,null);if(l.data==="$!"){if(o=l.nextSibling&&l.nextSibling.dataset,o)var p=o.dgst;return o=p,i=Error(a(419)),o=Kl(i,o,void 0),Ko(e,r,d,o)}if(p=(d&e.childLanes)!==0,sr||p){if(o=$e,o!==null){switch(d&-d){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(o.suspendedLanes|d))!==0?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Ur(e,l),Ir(o,e,l,-1))}return vi(),o=Kl(Error(a(421))),Ko(e,r,d,o)}return l.data==="$?"?(r.flags|=128,r.child=e.child,r=Jh.bind(null,e),l._reactRetry=r,null):(e=i.treeContext,pr=tt(l.nextSibling),ur=r,Ee=!0,Cr=null,e!==null&&(xr[gr++]=Hr,xr[gr++]=Wr,xr[gr++]=Nt,Hr=e.id,Wr=e.overflow,Nt=r),r=ti(r,o.children),r.flags|=4096,r)}function jd(e,r,n){e.lanes|=r;var o=e.alternate;o!==null&&(o.lanes|=r),Bl(e.return,r,n)}function ni(e,r,n,o,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:l}:(i.isBackwards=r,i.rendering=null,i.renderingStartTime=0,i.last=o,i.tail=n,i.tailMode=l)}function Nd(e,r,n){var o=r.pendingProps,l=o.revealOrder,i=o.tail;if(rr(e,r,o.children,n),o=Pe.current,(o&2)!==0)o=o&1|2,r.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=r.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&jd(e,n,r);else if(e.tag===19)jd(e,n,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break e;for(;e.sibling===null;){if(e.return===null||e.return===r)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(we(Pe,o),(r.mode&1)===0)r.memoizedState=null;else switch(l){case"forwards":for(n=r.child,l=null;n!==null;)e=n.alternate,e!==null&&Uo(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=r.child,r.child=null):(l=n.sibling,n.sibling=null),ni(r,!1,l,n,i);break;case"backwards":for(n=null,l=r.child,r.child=null;l!==null;){if(e=l.alternate,e!==null&&Uo(e)===null){r.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}ni(r,!0,n,null,i);break;case"together":ni(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function qo(e,r){(r.mode&1)===0&&e!==null&&(e.alternate=null,r.alternate=null,r.flags|=2)}function Vr(e,r,n){if(e!==null&&(r.dependencies=e.dependencies),Ct|=r.lanes,(n&r.childLanes)===0)return null;if(e!==null&&r.child!==e.child)throw Error(a(153));if(r.child!==null){for(e=r.child,n=ht(e,e.pendingProps),r.child=n,n.return=r;e.sibling!==null;)e=e.sibling,n=n.sibling=ht(e,e.pendingProps),n.return=r;n.sibling=null}return r.child}function _h(e,r,n){switch(r.tag){case 3:gd(r),qt();break;case 5:Oc(r);break;case 1:or(r.type)&&Bo(r);break;case 4:Al(r,r.stateNode.containerInfo);break;case 10:var o=r.type._context,l=r.memoizedProps.value;we(Do,o._currentValue),o._currentValue=l;break;case 13:if(o=r.memoizedState,o!==null)return o.dehydrated!==null?(we(Pe,Pe.current&1),r.flags|=128,null):(n&r.child.childLanes)!==0?yd(e,r,n):(we(Pe,Pe.current&1),e=Vr(e,r,n),e!==null?e.sibling:null);we(Pe,Pe.current&1);break;case 19:if(o=(n&r.childLanes)!==0,(e.flags&128)!==0){if(o)return Nd(e,r,n);r.flags|=128}if(l=r.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),we(Pe,Pe.current),o)break;return null;case 22:case 23:return r.lanes=0,fd(e,r,n)}return Vr(e,r,n)}var wd,oi,bd,kd;wd=function(e,r){for(var n=r.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break;for(;n.sibling===null;){if(n.return===null||n.return===r)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},oi=function(){},bd=function(e,r,n,o){var l=e.memoizedProps;if(l!==o){e=r.stateNode,kt(Ar.current);var i=null;switch(n){case"input":l=Bs(e,l),o=Bs(e,o),i=[];break;case"select":l=B({},l,{value:void 0}),o=B({},o,{value:void 0}),i=[];break;case"textarea":l=As(e,l),o=As(e,o),i=[];break;default:typeof l.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=Io)}Rs(n,o);var d;n=null;for(y in l)if(!o.hasOwnProperty(y)&&l.hasOwnProperty(y)&&l[y]!=null)if(y==="style"){var p=l[y];for(d in p)p.hasOwnProperty(d)&&(n||(n={}),n[d]="")}else y!=="dangerouslySetInnerHTML"&&y!=="children"&&y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(m.hasOwnProperty(y)?i||(i=[]):(i=i||[]).push(y,null));for(y in o){var h=o[y];if(p=l!=null?l[y]:void 0,o.hasOwnProperty(y)&&h!==p&&(h!=null||p!=null))if(y==="style")if(p){for(d in p)!p.hasOwnProperty(d)||h&&h.hasOwnProperty(d)||(n||(n={}),n[d]="");for(d in h)h.hasOwnProperty(d)&&p[d]!==h[d]&&(n||(n={}),n[d]=h[d])}else n||(i||(i=[]),i.push(y,n)),n=h;else y==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,p=p?p.__html:void 0,h!=null&&p!==h&&(i=i||[]).push(y,h)):y==="children"?typeof h!="string"&&typeof h!="number"||(i=i||[]).push(y,""+h):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&(m.hasOwnProperty(y)?(h!=null&&y==="onScroll"&&be("scroll",e),i||p===h||(i=[])):(i=i||[]).push(y,h))}n&&(i=i||[]).push("style",n);var y=i;(r.updateQueue=y)&&(r.flags|=4)}},kd=function(e,r,n,o){n!==o&&(r.flags|=4)};function Qn(e,r){if(!Ee)switch(e.tailMode){case"hidden":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?r||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Xe(e){var r=e.alternate!==null&&e.alternate.child===e.child,n=0,o=0;if(r)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,o|=l.subtreeFlags&14680064,o|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,o|=l.subtreeFlags,o|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=o,e.childLanes=n,r}function Oh(e,r,n){var o=r.pendingProps;switch(Cl(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(r),null;case 1:return or(r.type)&&Lo(),Xe(r),null;case 3:return o=r.stateNode,rn(),ke(nr),ke(Ke),Dl(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(Mo(r)?r.flags|=4:e===null||e.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Cr!==null&&(mi(Cr),Cr=null))),oi(e,r),Xe(r),null;case 5:Ml(r);var l=kt(Wn.current);if(n=r.type,e!==null&&r.stateNode!=null)bd(e,r,n,o,l),e.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!o){if(r.stateNode===null)throw Error(a(166));return Xe(r),null}if(e=kt(Ar.current),Mo(r)){o=r.stateNode,n=r.type;var i=r.memoizedProps;switch(o[Or]=r,o[Mn]=i,e=(r.mode&1)!==0,n){case"dialog":be("cancel",o),be("close",o);break;case"iframe":case"object":case"embed":be("load",o);break;case"video":case"audio":for(l=0;l<_n.length;l++)be(_n[l],o);break;case"source":be("error",o);break;case"img":case"image":case"link":be("error",o),be("load",o);break;case"details":be("toggle",o);break;case"input":oa(o,i),be("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!i.multiple},be("invalid",o);break;case"textarea":ia(o,i),be("invalid",o)}Rs(n,i),l=null;for(var d in i)if(i.hasOwnProperty(d)){var p=i[d];d==="children"?typeof p=="string"?o.textContent!==p&&(i.suppressHydrationWarning!==!0&&zo(o.textContent,p,e),l=["children",p]):typeof p=="number"&&o.textContent!==""+p&&(i.suppressHydrationWarning!==!0&&zo(o.textContent,p,e),l=["children",""+p]):m.hasOwnProperty(d)&&p!=null&&d==="onScroll"&&be("scroll",o)}switch(n){case"input":Yr(o),la(o,i,!0);break;case"textarea":Yr(o),ca(o);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(o.onclick=Io)}o=l,r.updateQueue=o,o!==null&&(r.flags|=4)}else{d=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=da(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=d.createElement(n,{is:o.is}):(e=d.createElement(n),n==="select"&&(d=e,o.multiple?d.multiple=!0:o.size&&(d.size=o.size))):e=d.createElementNS(e,n),e[Or]=r,e[Mn]=o,wd(e,r,!1,!1),r.stateNode=e;e:{switch(d=Ds(n,o),n){case"dialog":be("cancel",e),be("close",e),l=o;break;case"iframe":case"object":case"embed":be("load",e),l=o;break;case"video":case"audio":for(l=0;l<_n.length;l++)be(_n[l],e);l=o;break;case"source":be("error",e),l=o;break;case"img":case"image":case"link":be("error",e),be("load",e),l=o;break;case"details":be("toggle",e),l=o;break;case"input":oa(e,o),l=Bs(e,o),be("invalid",e);break;case"option":l=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},l=B({},o,{value:void 0}),be("invalid",e);break;case"textarea":ia(e,o),l=As(e,o),be("invalid",e);break;default:l=o}Rs(n,l),p=l;for(i in p)if(p.hasOwnProperty(i)){var h=p[i];i==="style"?ha(e,h):i==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,h!=null&&ua(e,h)):i==="children"?typeof h=="string"?(n!=="textarea"||h!=="")&&mn(e,h):typeof h=="number"&&mn(e,""+h):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(m.hasOwnProperty(i)?h!=null&&i==="onScroll"&&be("scroll",e):h!=null&&ne(e,i,h,d))}switch(n){case"input":Yr(e),la(e,o,!1);break;case"textarea":Yr(e),ca(e);break;case"option":o.value!=null&&e.setAttribute("value",""+ce(o.value));break;case"select":e.multiple=!!o.multiple,i=o.value,i!=null?At(e,!!o.multiple,i,!1):o.defaultValue!=null&&At(e,!!o.multiple,o.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Io)}switch(n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Xe(r),null;case 6:if(e&&r.stateNode!=null)kd(e,r,e.memoizedProps,o);else{if(typeof o!="string"&&r.stateNode===null)throw Error(a(166));if(n=kt(Wn.current),kt(Ar.current),Mo(r)){if(o=r.stateNode,n=r.memoizedProps,o[Or]=r,(i=o.nodeValue!==n)&&(e=ur,e!==null))switch(e.tag){case 3:zo(o.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&zo(o.nodeValue,n,(e.mode&1)!==0)}i&&(r.flags|=4)}else o=(n.nodeType===9?n:n.ownerDocument).createTextNode(o),o[Or]=r,r.stateNode=o}return Xe(r),null;case 13:if(ke(Pe),o=r.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ee&&pr!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Ec(),qt(),r.flags|=98560,i=!1;else if(i=Mo(r),o!==null&&o.dehydrated!==null){if(e===null){if(!i)throw Error(a(318));if(i=r.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(a(317));i[Or]=r}else qt(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Xe(r),i=!1}else Cr!==null&&(mi(Cr),Cr=null),i=!0;if(!i)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=n,r):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(r.child.flags|=8192,(r.mode&1)!==0&&(e===null||(Pe.current&1)!==0?He===0&&(He=3):vi())),r.updateQueue!==null&&(r.flags|=4),Xe(r),null);case 4:return rn(),oi(e,r),e===null&&On(r.stateNode.containerInfo),Xe(r),null;case 10:return Ll(r.type._context),Xe(r),null;case 17:return or(r.type)&&Lo(),Xe(r),null;case 19:if(ke(Pe),i=r.memoizedState,i===null)return Xe(r),null;if(o=(r.flags&128)!==0,d=i.rendering,d===null)if(o)Qn(i,!1);else{if(He!==0||e!==null&&(e.flags&128)!==0)for(e=r.child;e!==null;){if(d=Uo(e),d!==null){for(r.flags|=128,Qn(i,!1),o=d.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),r.subtreeFlags=0,o=n,n=r.child;n!==null;)i=n,e=o,i.flags&=14680066,d=i.alternate,d===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=d.childLanes,i.lanes=d.lanes,i.child=d.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=d.memoizedProps,i.memoizedState=d.memoizedState,i.updateQueue=d.updateQueue,i.type=d.type,e=d.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return we(Pe,Pe.current&1|2),r.child}e=e.sibling}i.tail!==null&&Ae()>sn&&(r.flags|=128,o=!0,Qn(i,!1),r.lanes=4194304)}else{if(!o)if(e=Uo(d),e!==null){if(r.flags|=128,o=!0,n=e.updateQueue,n!==null&&(r.updateQueue=n,r.flags|=4),Qn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!d.alternate&&!Ee)return Xe(r),null}else 2*Ae()-i.renderingStartTime>sn&&n!==1073741824&&(r.flags|=128,o=!0,Qn(i,!1),r.lanes=4194304);i.isBackwards?(d.sibling=r.child,r.child=d):(n=i.last,n!==null?n.sibling=d:r.child=d,i.last=d)}return i.tail!==null?(r=i.tail,i.rendering=r,i.tail=r.sibling,i.renderingStartTime=Ae(),r.sibling=null,n=Pe.current,we(Pe,o?n&1|2:n&1),r):(Xe(r),null);case 22:case 23:return gi(),o=r.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(r.flags|=8192),o&&(r.mode&1)!==0?(hr&1073741824)!==0&&(Xe(r),r.subtreeFlags&6&&(r.flags|=8192)):Xe(r),null;case 24:return null;case 25:return null}throw Error(a(156,r.tag))}function Ah(e,r){switch(Cl(r),r.tag){case 1:return or(r.type)&&Lo(),e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 3:return rn(),ke(nr),ke(Ke),Dl(),e=r.flags,(e&65536)!==0&&(e&128)===0?(r.flags=e&-65537|128,r):null;case 5:return Ml(r),null;case 13:if(ke(Pe),e=r.memoizedState,e!==null&&e.dehydrated!==null){if(r.alternate===null)throw Error(a(340));qt()}return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 19:return ke(Pe),null;case 4:return rn(),null;case 10:return Ll(r.type._context),null;case 22:case 23:return gi(),null;case 24:return null;default:return null}}var Xo=!1,Ze=!1,Mh=typeof WeakSet=="function"?WeakSet:Set,O=null;function nn(e,r){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(o){_e(e,r,o)}else n.current=null}function si(e,r,n){try{n()}catch(o){_e(e,r,o)}}var Sd=!1;function Rh(e,r){if(gl=vo,e=nc(),cl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var l=o.anchorOffset,i=o.focusNode;o=o.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var d=0,p=-1,h=-1,y=0,b=0,k=e,w=null;r:for(;;){for(var _;k!==n||l!==0&&k.nodeType!==3||(p=d+l),k!==i||o!==0&&k.nodeType!==3||(h=d+o),k.nodeType===3&&(d+=k.nodeValue.length),(_=k.firstChild)!==null;)w=k,k=_;for(;;){if(k===e)break r;if(w===n&&++y===l&&(p=d),w===i&&++b===o&&(h=d),(_=k.nextSibling)!==null)break;k=w,w=k.parentNode}k=_}n=p===-1||h===-1?null:{start:p,end:h}}else n=null}n=n||{start:0,end:0}}else n=null;for(vl={focusedElem:e,selectionRange:n},vo=!1,O=r;O!==null;)if(r=O,e=r.child,(r.subtreeFlags&1028)!==0&&e!==null)e.return=r,O=e;else for(;O!==null;){r=O;try{var A=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(A!==null){var M=A.memoizedProps,Me=A.memoizedState,g=r.stateNode,f=g.getSnapshotBeforeUpdate(r.elementType===r.type?M:Er(r.type,M),Me);g.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var v=r.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(a(163))}}catch(C){_e(r,r.return,C)}if(e=r.sibling,e!==null){e.return=r.return,O=e;break}O=r.return}return A=Sd,Sd=!1,A}function Gn(e,r,n){var o=r.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var l=o=o.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&si(r,n,i)}l=l.next}while(l!==o)}}function Zo(e,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var n=r=r.next;do{if((n.tag&e)===e){var o=n.create;n.destroy=o()}n=n.next}while(n!==r)}}function li(e){var r=e.ref;if(r!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof r=="function"?r(e):r.current=e}}function Cd(e){var r=e.alternate;r!==null&&(e.alternate=null,Cd(r)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(r=e.stateNode,r!==null&&(delete r[Or],delete r[Mn],delete r[wl],delete r[jh],delete r[Nh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ed(e){return e.tag===5||e.tag===3||e.tag===4}function Td(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ed(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ii(e,r,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,r?n.nodeType===8?n.parentNode.insertBefore(e,r):n.insertBefore(e,r):(n.nodeType===8?(r=n.parentNode,r.insertBefore(e,n)):(r=n,r.appendChild(e)),n=n._reactRootContainer,n!=null||r.onclick!==null||(r.onclick=Io));else if(o!==4&&(e=e.child,e!==null))for(ii(e,r,n),e=e.sibling;e!==null;)ii(e,r,n),e=e.sibling}function ai(e,r,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,r?n.insertBefore(e,r):n.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(ai(e,r,n),e=e.sibling;e!==null;)ai(e,r,n),e=e.sibling}var Je=null,Tr=!1;function at(e,r,n){for(n=n.child;n!==null;)zd(e,r,n),n=n.sibling}function zd(e,r,n){if(_r&&typeof _r.onCommitFiberUnmount=="function")try{_r.onCommitFiberUnmount(po,n)}catch{}switch(n.tag){case 5:Ze||nn(n,r);case 6:var o=Je,l=Tr;Je=null,at(e,r,n),Je=o,Tr=l,Je!==null&&(Tr?(e=Je,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Je.removeChild(n.stateNode));break;case 18:Je!==null&&(Tr?(e=Je,n=n.stateNode,e.nodeType===8?Nl(e.parentNode,n):e.nodeType===1&&Nl(e,n),Cn(e)):Nl(Je,n.stateNode));break;case 4:o=Je,l=Tr,Je=n.stateNode.containerInfo,Tr=!0,at(e,r,n),Je=o,Tr=l;break;case 0:case 11:case 14:case 15:if(!Ze&&(o=n.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){l=o=o.next;do{var i=l,d=i.destroy;i=i.tag,d!==void 0&&((i&2)!==0||(i&4)!==0)&&si(n,r,d),l=l.next}while(l!==o)}at(e,r,n);break;case 1:if(!Ze&&(nn(n,r),o=n.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=n.memoizedProps,o.state=n.memoizedState,o.componentWillUnmount()}catch(p){_e(n,r,p)}at(e,r,n);break;case 21:at(e,r,n);break;case 22:n.mode&1?(Ze=(o=Ze)||n.memoizedState!==null,at(e,r,n),Ze=o):at(e,r,n);break;default:at(e,r,n)}}function Id(e){var r=e.updateQueue;if(r!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Mh),r.forEach(function(o){var l=Qh.bind(null,e,o);n.has(o)||(n.add(o),o.then(l,l))})}}function zr(e,r){var n=r.deletions;if(n!==null)for(var o=0;o<n.length;o++){var l=n[o];try{var i=e,d=r,p=d;e:for(;p!==null;){switch(p.tag){case 5:Je=p.stateNode,Tr=!1;break e;case 3:Je=p.stateNode.containerInfo,Tr=!0;break e;case 4:Je=p.stateNode.containerInfo,Tr=!0;break e}p=p.return}if(Je===null)throw Error(a(160));zd(i,d,l),Je=null,Tr=!1;var h=l.alternate;h!==null&&(h.return=null),l.return=null}catch(y){_e(l,r,y)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Pd(r,e),r=r.sibling}function Pd(e,r){var n=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(zr(r,e),Rr(e),o&4){try{Gn(3,e,e.return),Zo(3,e)}catch(M){_e(e,e.return,M)}try{Gn(5,e,e.return)}catch(M){_e(e,e.return,M)}}break;case 1:zr(r,e),Rr(e),o&512&&n!==null&&nn(n,n.return);break;case 5:if(zr(r,e),Rr(e),o&512&&n!==null&&nn(n,n.return),e.flags&32){var l=e.stateNode;try{mn(l,"")}catch(M){_e(e,e.return,M)}}if(o&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,d=n!==null?n.memoizedProps:i,p=e.type,h=e.updateQueue;if(e.updateQueue=null,h!==null)try{p==="input"&&i.type==="radio"&&i.name!=null&&sa(l,i),Ds(p,d);var y=Ds(p,i);for(d=0;d<h.length;d+=2){var b=h[d],k=h[d+1];b==="style"?ha(l,k):b==="dangerouslySetInnerHTML"?ua(l,k):b==="children"?mn(l,k):ne(l,b,k,y)}switch(p){case"input":_s(l,i);break;case"textarea":aa(l,i);break;case"select":var w=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var _=i.value;_!=null?At(l,!!i.multiple,_,!1):w!==!!i.multiple&&(i.defaultValue!=null?At(l,!!i.multiple,i.defaultValue,!0):At(l,!!i.multiple,i.multiple?[]:"",!1))}l[Mn]=i}catch(M){_e(e,e.return,M)}}break;case 6:if(zr(r,e),Rr(e),o&4){if(e.stateNode===null)throw Error(a(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(M){_e(e,e.return,M)}}break;case 3:if(zr(r,e),Rr(e),o&4&&n!==null&&n.memoizedState.isDehydrated)try{Cn(r.containerInfo)}catch(M){_e(e,e.return,M)}break;case 4:zr(r,e),Rr(e);break;case 13:zr(r,e),Rr(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(ui=Ae())),o&4&&Id(e);break;case 22:if(b=n!==null&&n.memoizedState!==null,e.mode&1?(Ze=(y=Ze)||b,zr(r,e),Ze=y):zr(r,e),Rr(e),o&8192){if(y=e.memoizedState!==null,(e.stateNode.isHidden=y)&&!b&&(e.mode&1)!==0)for(O=e,b=e.child;b!==null;){for(k=O=b;O!==null;){switch(w=O,_=w.child,w.tag){case 0:case 11:case 14:case 15:Gn(4,w,w.return);break;case 1:nn(w,w.return);var A=w.stateNode;if(typeof A.componentWillUnmount=="function"){o=w,n=w.return;try{r=o,A.props=r.memoizedProps,A.state=r.memoizedState,A.componentWillUnmount()}catch(M){_e(o,n,M)}}break;case 5:nn(w,w.return);break;case 22:if(w.memoizedState!==null){_d(k);continue}}_!==null?(_.return=w,O=_):_d(k)}b=b.sibling}e:for(b=null,k=e;;){if(k.tag===5){if(b===null){b=k;try{l=k.stateNode,y?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(p=k.stateNode,h=k.memoizedProps.style,d=h!=null&&h.hasOwnProperty("display")?h.display:null,p.style.display=pa("display",d))}catch(M){_e(e,e.return,M)}}}else if(k.tag===6){if(b===null)try{k.stateNode.nodeValue=y?"":k.memoizedProps}catch(M){_e(e,e.return,M)}}else if((k.tag!==22&&k.tag!==23||k.memoizedState===null||k===e)&&k.child!==null){k.child.return=k,k=k.child;continue}if(k===e)break e;for(;k.sibling===null;){if(k.return===null||k.return===e)break e;b===k&&(b=null),k=k.return}b===k&&(b=null),k.sibling.return=k.return,k=k.sibling}}break;case 19:zr(r,e),Rr(e),o&4&&Id(e);break;case 21:break;default:zr(r,e),Rr(e)}}function Rr(e){var r=e.flags;if(r&2){try{e:{for(var n=e.return;n!==null;){if(Ed(n)){var o=n;break e}n=n.return}throw Error(a(160))}switch(o.tag){case 5:var l=o.stateNode;o.flags&32&&(mn(l,""),o.flags&=-33);var i=Td(e);ai(e,i,l);break;case 3:case 4:var d=o.stateNode.containerInfo,p=Td(e);ii(e,p,d);break;default:throw Error(a(161))}}catch(h){_e(e,e.return,h)}e.flags&=-3}r&4096&&(e.flags&=-4097)}function Dh(e,r,n){O=e,Ld(e)}function Ld(e,r,n){for(var o=(e.mode&1)!==0;O!==null;){var l=O,i=l.child;if(l.tag===22&&o){var d=l.memoizedState!==null||Xo;if(!d){var p=l.alternate,h=p!==null&&p.memoizedState!==null||Ze;p=Xo;var y=Ze;if(Xo=d,(Ze=h)&&!y)for(O=l;O!==null;)d=O,h=d.child,d.tag===22&&d.memoizedState!==null?Od(l):h!==null?(h.return=d,O=h):Od(l);for(;i!==null;)O=i,Ld(i),i=i.sibling;O=l,Xo=p,Ze=y}Bd(e)}else(l.subtreeFlags&8772)!==0&&i!==null?(i.return=l,O=i):Bd(e)}}function Bd(e){for(;O!==null;){var r=O;if((r.flags&8772)!==0){var n=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Ze||Zo(5,r);break;case 1:var o=r.stateNode;if(r.flags&4&&!Ze)if(n===null)o.componentDidMount();else{var l=r.elementType===r.type?n.memoizedProps:Er(r.type,n.memoizedProps);o.componentDidUpdate(l,n.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var i=r.updateQueue;i!==null&&_c(r,i,o);break;case 3:var d=r.updateQueue;if(d!==null){if(n=null,r.child!==null)switch(r.child.tag){case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}_c(r,d,n)}break;case 5:var p=r.stateNode;if(n===null&&r.flags&4){n=p;var h=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":h.autoFocus&&n.focus();break;case"img":h.src&&(n.src=h.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var y=r.alternate;if(y!==null){var b=y.memoizedState;if(b!==null){var k=b.dehydrated;k!==null&&Cn(k)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(a(163))}Ze||r.flags&512&&li(r)}catch(w){_e(r,r.return,w)}}if(r===e){O=null;break}if(n=r.sibling,n!==null){n.return=r.return,O=n;break}O=r.return}}function _d(e){for(;O!==null;){var r=O;if(r===e){O=null;break}var n=r.sibling;if(n!==null){n.return=r.return,O=n;break}O=r.return}}function Od(e){for(;O!==null;){var r=O;try{switch(r.tag){case 0:case 11:case 15:var n=r.return;try{Zo(4,r)}catch(h){_e(r,n,h)}break;case 1:var o=r.stateNode;if(typeof o.componentDidMount=="function"){var l=r.return;try{o.componentDidMount()}catch(h){_e(r,l,h)}}var i=r.return;try{li(r)}catch(h){_e(r,i,h)}break;case 5:var d=r.return;try{li(r)}catch(h){_e(r,d,h)}}}catch(h){_e(r,r.return,h)}if(r===e){O=null;break}var p=r.sibling;if(p!==null){p.return=r.return,O=p;break}O=r.return}}var Fh=Math.ceil,es=L.ReactCurrentDispatcher,ci=L.ReactCurrentOwner,jr=L.ReactCurrentBatchConfig,he=0,$e=null,Re=null,Qe=0,hr=0,on=nt(0),He=0,Yn=null,Ct=0,rs=0,di=0,Kn=null,lr=null,ui=0,sn=1/0,Jr=null,ts=!1,pi=null,ct=null,ns=!1,dt=null,os=0,qn=0,hi=null,ss=-1,ls=0;function tr(){return(he&6)!==0?Ae():ss!==-1?ss:ss=Ae()}function ut(e){return(e.mode&1)===0?1:(he&2)!==0&&Qe!==0?Qe&-Qe:bh.transition!==null?(ls===0&&(ls=Ta()),ls):(e=ye,e!==0||(e=window.event,e=e===void 0?16:Ma(e.type)),e)}function Ir(e,r,n,o){if(50<qn)throw qn=0,hi=null,Error(a(185));Nn(e,n,o),((he&2)===0||e!==$e)&&(e===$e&&((he&2)===0&&(rs|=n),He===4&&pt(e,Qe)),ir(e,o),n===1&&he===0&&(r.mode&1)===0&&(sn=Ae()+500,_o&&st()))}function ir(e,r){var n=e.callbackNode;bp(e,r);var o=mo(e,e===$e?Qe:0);if(o===0)n!==null&&Sa(n),e.callbackNode=null,e.callbackPriority=0;else if(r=o&-o,e.callbackPriority!==r){if(n!=null&&Sa(n),r===1)e.tag===0?wh(Md.bind(null,e)):wc(Md.bind(null,e)),vh(function(){(he&6)===0&&st()}),n=null;else{switch(za(o)){case 1:n=Js;break;case 4:n=Ca;break;case 16:n=uo;break;case 536870912:n=Ea;break;default:n=uo}n=Vd(n,Ad.bind(null,e))}e.callbackPriority=r,e.callbackNode=n}}function Ad(e,r){if(ss=-1,ls=0,(he&6)!==0)throw Error(a(327));var n=e.callbackNode;if(ln()&&e.callbackNode!==n)return null;var o=mo(e,e===$e?Qe:0);if(o===0)return null;if((o&30)!==0||(o&e.expiredLanes)!==0||r)r=is(e,o);else{r=o;var l=he;he|=2;var i=Dd();($e!==e||Qe!==r)&&(Jr=null,sn=Ae()+500,Tt(e,r));do try{Uh();break}catch(p){Rd(e,p)}while(!0);Pl(),es.current=i,he=l,Re!==null?r=0:($e=null,Qe=0,r=He)}if(r!==0){if(r===2&&(l=Qs(e),l!==0&&(o=l,r=fi(e,l))),r===1)throw n=Yn,Tt(e,0),pt(e,o),ir(e,Ae()),n;if(r===6)pt(e,o);else{if(l=e.current.alternate,(o&30)===0&&!Hh(l)&&(r=is(e,o),r===2&&(i=Qs(e),i!==0&&(o=i,r=fi(e,i))),r===1))throw n=Yn,Tt(e,0),pt(e,o),ir(e,Ae()),n;switch(e.finishedWork=l,e.finishedLanes=o,r){case 0:case 1:throw Error(a(345));case 2:zt(e,lr,Jr);break;case 3:if(pt(e,o),(o&130023424)===o&&(r=ui+500-Ae(),10<r)){if(mo(e,0)!==0)break;if(l=e.suspendedLanes,(l&o)!==o){tr(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=jl(zt.bind(null,e,lr,Jr),r);break}zt(e,lr,Jr);break;case 4:if(pt(e,o),(o&4194240)===o)break;for(r=e.eventTimes,l=-1;0<o;){var d=31-kr(o);i=1<<d,d=r[d],d>l&&(l=d),o&=~i}if(o=l,o=Ae()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*Fh(o/1960))-o,10<o){e.timeoutHandle=jl(zt.bind(null,e,lr,Jr),o);break}zt(e,lr,Jr);break;case 5:zt(e,lr,Jr);break;default:throw Error(a(329))}}}return ir(e,Ae()),e.callbackNode===n?Ad.bind(null,e):null}function fi(e,r){var n=Kn;return e.current.memoizedState.isDehydrated&&(Tt(e,r).flags|=256),e=is(e,r),e!==2&&(r=lr,lr=n,r!==null&&mi(r)),e}function mi(e){lr===null?lr=e:lr.push.apply(lr,e)}function Hh(e){for(var r=e;;){if(r.flags&16384){var n=r.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var o=0;o<n.length;o++){var l=n[o],i=l.getSnapshot;l=l.value;try{if(!Sr(i(),l))return!1}catch{return!1}}}if(n=r.child,r.subtreeFlags&16384&&n!==null)n.return=r,r=n;else{if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function pt(e,r){for(r&=~di,r&=~rs,e.suspendedLanes|=r,e.pingedLanes&=~r,e=e.expirationTimes;0<r;){var n=31-kr(r),o=1<<n;e[n]=-1,r&=~o}}function Md(e){if((he&6)!==0)throw Error(a(327));ln();var r=mo(e,0);if((r&1)===0)return ir(e,Ae()),null;var n=is(e,r);if(e.tag!==0&&n===2){var o=Qs(e);o!==0&&(r=o,n=fi(e,o))}if(n===1)throw n=Yn,Tt(e,0),pt(e,r),ir(e,Ae()),n;if(n===6)throw Error(a(345));return e.finishedWork=e.current.alternate,e.finishedLanes=r,zt(e,lr,Jr),ir(e,Ae()),null}function xi(e,r){var n=he;he|=1;try{return e(r)}finally{he=n,he===0&&(sn=Ae()+500,_o&&st())}}function Et(e){dt!==null&&dt.tag===0&&(he&6)===0&&ln();var r=he;he|=1;var n=jr.transition,o=ye;try{if(jr.transition=null,ye=1,e)return e()}finally{ye=o,jr.transition=n,he=r,(he&6)===0&&st()}}function gi(){hr=on.current,ke(on)}function Tt(e,r){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,gh(n)),Re!==null)for(n=Re.return;n!==null;){var o=n;switch(Cl(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&Lo();break;case 3:rn(),ke(nr),ke(Ke),Dl();break;case 5:Ml(o);break;case 4:rn();break;case 13:ke(Pe);break;case 19:ke(Pe);break;case 10:Ll(o.type._context);break;case 22:case 23:gi()}n=n.return}if($e=e,Re=e=ht(e.current,null),Qe=hr=r,He=0,Yn=null,di=rs=Ct=0,lr=Kn=null,bt!==null){for(r=0;r<bt.length;r++)if(n=bt[r],o=n.interleaved,o!==null){n.interleaved=null;var l=o.next,i=n.pending;if(i!==null){var d=i.next;i.next=l,o.next=d}n.pending=o}bt=null}return e}function Rd(e,r){do{var n=Re;try{if(Pl(),$o.current=Go,Vo){for(var o=Le.memoizedState;o!==null;){var l=o.queue;l!==null&&(l.pending=null),o=o.next}Vo=!1}if(St=0,Ue=Fe=Le=null,Un=!1,$n=0,ci.current=null,n===null||n.return===null){He=1,Yn=r,Re=null;break}e:{var i=e,d=n.return,p=n,h=r;if(r=Qe,p.flags|=32768,h!==null&&typeof h=="object"&&typeof h.then=="function"){var y=h,b=p,k=b.tag;if((b.mode&1)===0&&(k===0||k===11||k===15)){var w=b.alternate;w?(b.updateQueue=w.updateQueue,b.memoizedState=w.memoizedState,b.lanes=w.lanes):(b.updateQueue=null,b.memoizedState=null)}var _=cd(d);if(_!==null){_.flags&=-257,dd(_,d,p,i,r),_.mode&1&&ad(i,y,r),r=_,h=y;var A=r.updateQueue;if(A===null){var M=new Set;M.add(h),r.updateQueue=M}else A.add(h);break e}else{if((r&1)===0){ad(i,y,r),vi();break e}h=Error(a(426))}}else if(Ee&&p.mode&1){var Me=cd(d);if(Me!==null){(Me.flags&65536)===0&&(Me.flags|=256),dd(Me,d,p,i,r),zl(tn(h,p));break e}}i=h=tn(h,p),He!==4&&(He=2),Kn===null?Kn=[i]:Kn.push(i),i=d;do{switch(i.tag){case 3:i.flags|=65536,r&=-r,i.lanes|=r;var g=ld(i,h,r);Bc(i,g);break e;case 1:p=h;var f=i.type,v=i.stateNode;if((i.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(ct===null||!ct.has(v)))){i.flags|=65536,r&=-r,i.lanes|=r;var C=id(i,p,r);Bc(i,C);break e}}i=i.return}while(i!==null)}Hd(n)}catch(D){r=D,Re===n&&n!==null&&(Re=n=n.return);continue}break}while(!0)}function Dd(){var e=es.current;return es.current=Go,e===null?Go:e}function vi(){(He===0||He===3||He===2)&&(He=4),$e===null||(Ct&268435455)===0&&(rs&268435455)===0||pt($e,Qe)}function is(e,r){var n=he;he|=2;var o=Dd();($e!==e||Qe!==r)&&(Jr=null,Tt(e,r));do try{Wh();break}catch(l){Rd(e,l)}while(!0);if(Pl(),he=n,es.current=o,Re!==null)throw Error(a(261));return $e=null,Qe=0,He}function Wh(){for(;Re!==null;)Fd(Re)}function Uh(){for(;Re!==null&&!fp();)Fd(Re)}function Fd(e){var r=$d(e.alternate,e,hr);e.memoizedProps=e.pendingProps,r===null?Hd(e):Re=r,ci.current=null}function Hd(e){var r=e;do{var n=r.alternate;if(e=r.return,(r.flags&32768)===0){if(n=Oh(n,r,hr),n!==null){Re=n;return}}else{if(n=Ah(n,r),n!==null){n.flags&=32767,Re=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{He=6,Re=null;return}}if(r=r.sibling,r!==null){Re=r;return}Re=r=e}while(r!==null);He===0&&(He=5)}function zt(e,r,n){var o=ye,l=jr.transition;try{jr.transition=null,ye=1,$h(e,r,n,o)}finally{jr.transition=l,ye=o}return null}function $h(e,r,n,o){do ln();while(dt!==null);if((he&6)!==0)throw Error(a(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(a(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(kp(e,i),e===$e&&(Re=$e=null,Qe=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||ns||(ns=!0,Vd(uo,function(){return ln(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=jr.transition,jr.transition=null;var d=ye;ye=1;var p=he;he|=4,ci.current=null,Rh(e,n),Pd(n,e),dh(vl),vo=!!gl,vl=gl=null,e.current=n,Dh(n),mp(),he=p,ye=d,jr.transition=i}else e.current=n;if(ns&&(ns=!1,dt=e,os=l),i=e.pendingLanes,i===0&&(ct=null),vp(n.stateNode),ir(e,Ae()),r!==null)for(o=e.onRecoverableError,n=0;n<r.length;n++)l=r[n],o(l.value,{componentStack:l.stack,digest:l.digest});if(ts)throw ts=!1,e=pi,pi=null,e;return(os&1)!==0&&e.tag!==0&&ln(),i=e.pendingLanes,(i&1)!==0?e===hi?qn++:(qn=0,hi=e):qn=0,st(),null}function ln(){if(dt!==null){var e=za(os),r=jr.transition,n=ye;try{if(jr.transition=null,ye=16>e?16:e,dt===null)var o=!1;else{if(e=dt,dt=null,os=0,(he&6)!==0)throw Error(a(331));var l=he;for(he|=4,O=e.current;O!==null;){var i=O,d=i.child;if((O.flags&16)!==0){var p=i.deletions;if(p!==null){for(var h=0;h<p.length;h++){var y=p[h];for(O=y;O!==null;){var b=O;switch(b.tag){case 0:case 11:case 15:Gn(8,b,i)}var k=b.child;if(k!==null)k.return=b,O=k;else for(;O!==null;){b=O;var w=b.sibling,_=b.return;if(Cd(b),b===y){O=null;break}if(w!==null){w.return=_,O=w;break}O=_}}}var A=i.alternate;if(A!==null){var M=A.child;if(M!==null){A.child=null;do{var Me=M.sibling;M.sibling=null,M=Me}while(M!==null)}}O=i}}if((i.subtreeFlags&2064)!==0&&d!==null)d.return=i,O=d;else e:for(;O!==null;){if(i=O,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:Gn(9,i,i.return)}var g=i.sibling;if(g!==null){g.return=i.return,O=g;break e}O=i.return}}var f=e.current;for(O=f;O!==null;){d=O;var v=d.child;if((d.subtreeFlags&2064)!==0&&v!==null)v.return=d,O=v;else e:for(d=f;O!==null;){if(p=O,(p.flags&2048)!==0)try{switch(p.tag){case 0:case 11:case 15:Zo(9,p)}}catch(D){_e(p,p.return,D)}if(p===d){O=null;break e}var C=p.sibling;if(C!==null){C.return=p.return,O=C;break e}O=p.return}}if(he=l,st(),_r&&typeof _r.onPostCommitFiberRoot=="function")try{_r.onPostCommitFiberRoot(po,e)}catch{}o=!0}return o}finally{ye=n,jr.transition=r}}return!1}function Wd(e,r,n){r=tn(n,r),r=ld(e,r,1),e=it(e,r,1),r=tr(),e!==null&&(Nn(e,1,r),ir(e,r))}function _e(e,r,n){if(e.tag===3)Wd(e,e,n);else for(;r!==null;){if(r.tag===3){Wd(r,e,n);break}else if(r.tag===1){var o=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ct===null||!ct.has(o))){e=tn(n,e),e=id(r,e,1),r=it(r,e,1),e=tr(),r!==null&&(Nn(r,1,e),ir(r,e));break}}r=r.return}}function Vh(e,r,n){var o=e.pingCache;o!==null&&o.delete(r),r=tr(),e.pingedLanes|=e.suspendedLanes&n,$e===e&&(Qe&n)===n&&(He===4||He===3&&(Qe&130023424)===Qe&&500>Ae()-ui?Tt(e,0):di|=n),ir(e,r)}function Ud(e,r){r===0&&((e.mode&1)===0?r=1:(r=fo,fo<<=1,(fo&130023424)===0&&(fo=4194304)));var n=tr();e=Ur(e,r),e!==null&&(Nn(e,r,n),ir(e,n))}function Jh(e){var r=e.memoizedState,n=0;r!==null&&(n=r.retryLane),Ud(e,n)}function Qh(e,r){var n=0;switch(e.tag){case 13:var o=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(a(314))}o!==null&&o.delete(r),Ud(e,n)}var $d;$d=function(e,r,n){if(e!==null)if(e.memoizedProps!==r.pendingProps||nr.current)sr=!0;else{if((e.lanes&n)===0&&(r.flags&128)===0)return sr=!1,_h(e,r,n);sr=(e.flags&131072)!==0}else sr=!1,Ee&&(r.flags&1048576)!==0&&bc(r,Ao,r.index);switch(r.lanes=0,r.tag){case 2:var o=r.type;qo(e,r),e=r.pendingProps;var l=Gt(r,Ke.current);en(r,n),l=Wl(null,r,o,e,l,n);var i=Ul();return r.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,or(o)?(i=!0,Bo(r)):i=!1,r.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Ol(r),l.updater=Yo,r.stateNode=l,l._reactInternals=r,Yl(r,o,e,n),r=Zl(null,r,o,!0,i,n)):(r.tag=0,Ee&&i&&Sl(r),rr(null,r,l,n),r=r.child),r;case 16:o=r.elementType;e:{switch(qo(e,r),e=r.pendingProps,l=o._init,o=l(o._payload),r.type=o,l=r.tag=Yh(o),e=Er(o,e),l){case 0:r=Xl(null,r,o,e,n);break e;case 1:r=xd(null,r,o,e,n);break e;case 11:r=ud(null,r,o,e,n);break e;case 14:r=pd(null,r,o,Er(o.type,e),n);break e}throw Error(a(306,o,""))}return r;case 0:return o=r.type,l=r.pendingProps,l=r.elementType===o?l:Er(o,l),Xl(e,r,o,l,n);case 1:return o=r.type,l=r.pendingProps,l=r.elementType===o?l:Er(o,l),xd(e,r,o,l,n);case 3:e:{if(gd(r),e===null)throw Error(a(387));o=r.pendingProps,i=r.memoizedState,l=i.element,Lc(e,r),Wo(r,o,null,n);var d=r.memoizedState;if(o=d.element,i.isDehydrated)if(i={element:o,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},r.updateQueue.baseState=i,r.memoizedState=i,r.flags&256){l=tn(Error(a(423)),r),r=vd(e,r,o,n,l);break e}else if(o!==l){l=tn(Error(a(424)),r),r=vd(e,r,o,n,l);break e}else for(pr=tt(r.stateNode.containerInfo.firstChild),ur=r,Ee=!0,Cr=null,n=Ic(r,null,o,n),r.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(qt(),o===l){r=Vr(e,r,n);break e}rr(e,r,o,n)}r=r.child}return r;case 5:return Oc(r),e===null&&Tl(r),o=r.type,l=r.pendingProps,i=e!==null?e.memoizedProps:null,d=l.children,yl(o,l)?d=null:i!==null&&yl(o,i)&&(r.flags|=32),md(e,r),rr(e,r,d,n),r.child;case 6:return e===null&&Tl(r),null;case 13:return yd(e,r,n);case 4:return Al(r,r.stateNode.containerInfo),o=r.pendingProps,e===null?r.child=Xt(r,null,o,n):rr(e,r,o,n),r.child;case 11:return o=r.type,l=r.pendingProps,l=r.elementType===o?l:Er(o,l),ud(e,r,o,l,n);case 7:return rr(e,r,r.pendingProps,n),r.child;case 8:return rr(e,r,r.pendingProps.children,n),r.child;case 12:return rr(e,r,r.pendingProps.children,n),r.child;case 10:e:{if(o=r.type._context,l=r.pendingProps,i=r.memoizedProps,d=l.value,we(Do,o._currentValue),o._currentValue=d,i!==null)if(Sr(i.value,d)){if(i.children===l.children&&!nr.current){r=Vr(e,r,n);break e}}else for(i=r.child,i!==null&&(i.return=r);i!==null;){var p=i.dependencies;if(p!==null){d=i.child;for(var h=p.firstContext;h!==null;){if(h.context===o){if(i.tag===1){h=$r(-1,n&-n),h.tag=2;var y=i.updateQueue;if(y!==null){y=y.shared;var b=y.pending;b===null?h.next=h:(h.next=b.next,b.next=h),y.pending=h}}i.lanes|=n,h=i.alternate,h!==null&&(h.lanes|=n),Bl(i.return,n,r),p.lanes|=n;break}h=h.next}}else if(i.tag===10)d=i.type===r.type?null:i.child;else if(i.tag===18){if(d=i.return,d===null)throw Error(a(341));d.lanes|=n,p=d.alternate,p!==null&&(p.lanes|=n),Bl(d,n,r),d=i.sibling}else d=i.child;if(d!==null)d.return=i;else for(d=i;d!==null;){if(d===r){d=null;break}if(i=d.sibling,i!==null){i.return=d.return,d=i;break}d=d.return}i=d}rr(e,r,l.children,n),r=r.child}return r;case 9:return l=r.type,o=r.pendingProps.children,en(r,n),l=vr(l),o=o(l),r.flags|=1,rr(e,r,o,n),r.child;case 14:return o=r.type,l=Er(o,r.pendingProps),l=Er(o.type,l),pd(e,r,o,l,n);case 15:return hd(e,r,r.type,r.pendingProps,n);case 17:return o=r.type,l=r.pendingProps,l=r.elementType===o?l:Er(o,l),qo(e,r),r.tag=1,or(o)?(e=!0,Bo(r)):e=!1,en(r,n),od(r,o,l),Yl(r,o,l,n),Zl(null,r,o,!0,e,n);case 19:return Nd(e,r,n);case 22:return fd(e,r,n)}throw Error(a(156,r.tag))};function Vd(e,r){return ka(e,r)}function Gh(e,r,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nr(e,r,n,o){return new Gh(e,r,n,o)}function yi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Yh(e){if(typeof e=="function")return yi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Be)return 11;if(e===er)return 14}return 2}function ht(e,r){var n=e.alternate;return n===null?(n=Nr(e.tag,r,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=r,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,r=e.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function as(e,r,n,o,l,i){var d=2;if(o=e,typeof e=="function")yi(e)&&(d=1);else if(typeof e=="string")d=5;else e:switch(e){case I:return It(n.children,l,i,r);case R:d=8,l|=8;break;case je:return e=Nr(12,n,r,l|2),e.elementType=je,e.lanes=i,e;case Ce:return e=Nr(13,n,r,l),e.elementType=Ce,e.lanes=i,e;case Ge:return e=Nr(19,n,r,l),e.elementType=Ge,e.lanes=i,e;case Ne:return cs(n,l,i,r);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Oe:d=10;break e;case le:d=9;break e;case Be:d=11;break e;case er:d=14;break e;case Ye:d=16,o=null;break e}throw Error(a(130,e==null?e:typeof e,""))}return r=Nr(d,n,r,l),r.elementType=e,r.type=o,r.lanes=i,r}function It(e,r,n,o){return e=Nr(7,e,o,r),e.lanes=n,e}function cs(e,r,n,o){return e=Nr(22,e,o,r),e.elementType=Ne,e.lanes=n,e.stateNode={isHidden:!1},e}function ji(e,r,n){return e=Nr(6,e,null,r),e.lanes=n,e}function Ni(e,r,n){return r=Nr(4,e.children!==null?e.children:[],e.key,r),r.lanes=n,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}function Kh(e,r,n,o,l){this.tag=r,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gs(0),this.expirationTimes=Gs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gs(0),this.identifierPrefix=o,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function wi(e,r,n,o,l,i,d,p,h){return e=new Kh(e,r,n,p,h),r===1?(r=1,i===!0&&(r|=8)):r=0,i=Nr(3,null,null,r),e.current=i,i.stateNode=e,i.memoizedState={element:o,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ol(i),e}function qh(e,r,n){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:U,key:o==null?null:""+o,children:e,containerInfo:r,implementation:n}}function Jd(e){if(!e)return ot;e=e._reactInternals;e:{if(vt(e)!==e||e.tag!==1)throw Error(a(170));var r=e;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(or(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(a(171))}if(e.tag===1){var n=e.type;if(or(n))return jc(e,n,r)}return r}function Qd(e,r,n,o,l,i,d,p,h){return e=wi(n,o,!0,e,l,i,d,p,h),e.context=Jd(null),n=e.current,o=tr(),l=ut(n),i=$r(o,l),i.callback=r!=null?r:null,it(n,i,l),e.current.lanes=l,Nn(e,l,o),ir(e,o),e}function ds(e,r,n,o){var l=r.current,i=tr(),d=ut(l);return n=Jd(n),r.context===null?r.context=n:r.pendingContext=n,r=$r(i,d),r.payload={element:e},o=o===void 0?null:o,o!==null&&(r.callback=o),e=it(l,r,d),e!==null&&(Ir(e,l,d,i),Ho(e,l,d)),d}function us(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Gd(e,r){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<r?n:r}}function bi(e,r){Gd(e,r),(e=e.alternate)&&Gd(e,r)}function Xh(){return null}var Yd=typeof reportError=="function"?reportError:function(e){console.error(e)};function ki(e){this._internalRoot=e}ps.prototype.render=ki.prototype.render=function(e){var r=this._internalRoot;if(r===null)throw Error(a(409));ds(e,r,null,null)},ps.prototype.unmount=ki.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var r=e.containerInfo;Et(function(){ds(null,e,null,null)}),r[Dr]=null}};function ps(e){this._internalRoot=e}ps.prototype.unstable_scheduleHydration=function(e){if(e){var r=La();e={blockedOn:null,target:e,priority:r};for(var n=0;n<Zr.length&&r!==0&&r<Zr[n].priority;n++);Zr.splice(n,0,e),n===0&&Oa(e)}};function Si(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function hs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Kd(){}function Zh(e,r,n,o,l){if(l){if(typeof o=="function"){var i=o;o=function(){var y=us(d);i.call(y)}}var d=Qd(r,o,e,0,null,!1,!1,"",Kd);return e._reactRootContainer=d,e[Dr]=d.current,On(e.nodeType===8?e.parentNode:e),Et(),d}for(;l=e.lastChild;)e.removeChild(l);if(typeof o=="function"){var p=o;o=function(){var y=us(h);p.call(y)}}var h=wi(e,0,!1,null,null,!1,!1,"",Kd);return e._reactRootContainer=h,e[Dr]=h.current,On(e.nodeType===8?e.parentNode:e),Et(function(){ds(r,h,n,o)}),h}function fs(e,r,n,o,l){var i=n._reactRootContainer;if(i){var d=i;if(typeof l=="function"){var p=l;l=function(){var h=us(d);p.call(h)}}ds(r,d,e,l)}else d=Zh(n,r,e,l,o);return us(d)}Ia=function(e){switch(e.tag){case 3:var r=e.stateNode;if(r.current.memoizedState.isDehydrated){var n=jn(r.pendingLanes);n!==0&&(Ys(r,n|1),ir(r,Ae()),(he&6)===0&&(sn=Ae()+500,st()))}break;case 13:Et(function(){var o=Ur(e,1);if(o!==null){var l=tr();Ir(o,e,1,l)}}),bi(e,1)}},Ks=function(e){if(e.tag===13){var r=Ur(e,134217728);if(r!==null){var n=tr();Ir(r,e,134217728,n)}bi(e,134217728)}},Pa=function(e){if(e.tag===13){var r=ut(e),n=Ur(e,r);if(n!==null){var o=tr();Ir(n,e,r,o)}bi(e,r)}},La=function(){return ye},Ba=function(e,r){var n=ye;try{return ye=e,r()}finally{ye=n}},Ws=function(e,r,n){switch(r){case"input":if(_s(e,n),r=n.name,n.type==="radio"&&r!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<n.length;r++){var o=n[r];if(o!==e&&o.form===e.form){var l=Po(o);if(!l)throw Error(a(90));gt(o),_s(o,l)}}}break;case"textarea":aa(e,n);break;case"select":r=n.value,r!=null&&At(e,!!n.multiple,r,!1)}},ga=xi,va=Et;var ef={usingClientEntryPoint:!1,Events:[Rn,Jt,Po,ma,xa,xi]},Xn={findFiberByHostInstance:yt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},rf={bundleType:Xn.bundleType,version:Xn.version,rendererPackageName:Xn.rendererPackageName,rendererConfig:Xn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:L.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=wa(e),e===null?null:e.stateNode},findFiberByHostInstance:Xn.findFiberByHostInstance||Xh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var ms=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ms.isDisabled&&ms.supportsFiber)try{po=ms.inject(rf),_r=ms}catch{}}return ar.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ef,ar.createPortal=function(e,r){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Si(r))throw Error(a(200));return qh(e,r,null,n)},ar.createRoot=function(e,r){if(!Si(e))throw Error(a(299));var n=!1,o="",l=Yd;return r!=null&&(r.unstable_strictMode===!0&&(n=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(l=r.onRecoverableError)),r=wi(e,1,!1,null,null,n,!1,o,l),e[Dr]=r.current,On(e.nodeType===8?e.parentNode:e),new ki(r)},ar.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var r=e._reactInternals;if(r===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=wa(r),e=e===null?null:e.stateNode,e},ar.flushSync=function(e){return Et(e)},ar.hydrate=function(e,r,n){if(!hs(r))throw Error(a(200));return fs(null,e,r,!0,n)},ar.hydrateRoot=function(e,r,n){if(!Si(e))throw Error(a(405));var o=n!=null&&n.hydratedSources||null,l=!1,i="",d=Yd;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(d=n.onRecoverableError)),r=Qd(r,null,e,1,n!=null?n:null,l,!1,i,d),e[Dr]=r.current,On(e),o)for(e=0;e<o.length;e++)n=o[e],l=n._getVersion,l=l(n._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[n,l]:r.mutableSourceEagerHydrationData.push(n,l);return new ps(r)},ar.render=function(e,r,n){if(!hs(r))throw Error(a(200));return fs(null,e,r,!1,n)},ar.unmountComponentAtNode=function(e){if(!hs(e))throw Error(a(40));return e._reactRootContainer?(Et(function(){fs(null,null,e,!1,function(){e._reactRootContainer=null,e[Dr]=null})}),!0):!1},ar.unstable_batchedUpdates=xi,ar.unstable_renderSubtreeIntoContainer=function(e,r,n,o){if(!hs(n))throw Error(a(200));if(e==null||e._reactInternals===void 0)throw Error(a(38));return fs(e,r,n,!1,o)},ar.version="18.3.1-next-f1338f8080-20240426",ar}var ou;function uf(){if(ou)return Ti.exports;ou=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(c){console.error(c)}}return s(),Ti.exports=df(),Ti.exports}var su;function pf(){if(su)return xs;su=1;var s=uf();return xs.createRoot=s.createRoot,xs.hydrateRoot=s.hydrateRoot,xs}var hf=pf(),fe=Ki();const mr=nf(fe);var cr=function(){return cr=Object.assign||function(c){for(var a,u=1,m=arguments.length;u<m;u++){a=arguments[u];for(var j in a)Object.prototype.hasOwnProperty.call(a,j)&&(c[j]=a[j])}return c},cr.apply(this,arguments)};function ws(s,c,a){if(a||arguments.length===2)for(var u=0,m=c.length,j;u<m;u++)(j||!(u in c))&&(j||(j=Array.prototype.slice.call(c,0,u)),j[u]=c[u]);return s.concat(j||Array.prototype.slice.call(c))}var Se="-ms-",to="-moz-",xe="-webkit-",Tu="comm",Ts="rule",qi="decl",ff="@import",mf="@namespace",zu="@keyframes",xf="@layer",Iu=Math.abs,Xi=String.fromCharCode,Di=Object.assign;function gf(s,c){return We(s,0)^45?(((c<<2^We(s,0))<<2^We(s,1))<<2^We(s,2))<<2^We(s,3):0}function Pu(s){return s.trim()}function Qr(s,c){return(s=c.exec(s))?s[0]:s}function te(s,c,a){return s.replace(c,a)}function gs(s,c,a){return s.indexOf(c,a)}function We(s,c){return s.charCodeAt(c)|0}function Ot(s,c,a){return s.slice(c,a)}function Pr(s){return s.length}function Lu(s){return s.length}function eo(s,c){return c.push(s),s}function vf(s,c){return s.map(c).join("")}function lu(s,c){return s.filter(function(a){return!Qr(a,c)})}var zs=1,cn=1,Bu=0,wr=0,De=0,hn="";function Is(s,c,a,u,m,j,S,P){return{value:s,root:c,parent:a,type:u,props:m,children:j,line:zs,column:cn,length:S,return:"",siblings:P}}function mt(s,c){return Di(Is("",null,null,"",null,null,0,s.siblings),s,{length:-s.length},c)}function an(s){for(;s.root;)s=mt(s.root,{children:[s]});eo(s,s.siblings)}function yf(){return De}function jf(){return De=wr>0?We(hn,--wr):0,cn--,De===10&&(cn=1,zs--),De}function Lr(){return De=wr<Bu?We(hn,wr++):0,cn++,De===10&&(cn=1,zs++),De}function xt(){return We(hn,wr)}function vs(){return wr}function Ps(s,c){return Ot(hn,s,c)}function oo(s){switch(s){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Nf(s){return zs=cn=1,Bu=Pr(hn=s),wr=0,[]}function wf(s){return hn="",s}function Pi(s){return Pu(Ps(wr-1,Fi(s===91?s+2:s===40?s+1:s)))}function bf(s){for(;(De=xt())&&De<33;)Lr();return oo(s)>2||oo(De)>3?"":" "}function kf(s,c){for(;--c&&Lr()&&!(De<48||De>102||De>57&&De<65||De>70&&De<97););return Ps(s,vs()+(c<6&&xt()==32&&Lr()==32))}function Fi(s){for(;Lr();)switch(De){case s:return wr;case 34:case 39:s!==34&&s!==39&&Fi(De);break;case 40:s===41&&Fi(s);break;case 92:Lr();break}return wr}function Sf(s,c){for(;Lr()&&s+De!==57;)if(s+De===84&&xt()===47)break;return"/*"+Ps(c,wr-1)+"*"+Xi(s===47?s:Lr())}function Cf(s){for(;!oo(xt());)Lr();return Ps(s,wr)}function Ef(s){return wf(ys("",null,null,null,[""],s=Nf(s),0,[0],s))}function ys(s,c,a,u,m,j,S,P,E){for(var K=0,Q=0,H=S,Z=0,ae=0,q=0,W=1,G=1,ge=1,ue=0,ne="",L=m,X=j,U=u,I=ne;G;)switch(q=ue,ue=Lr()){case 40:if(q!=108&&We(I,H-1)==58){gs(I+=te(Pi(ue),"&","&\f"),"&\f",Iu(K?P[K-1]:0))!=-1&&(ge=-1);break}case 34:case 39:case 91:I+=Pi(ue);break;case 9:case 10:case 13:case 32:I+=bf(q);break;case 92:I+=kf(vs()-1,7);continue;case 47:switch(xt()){case 42:case 47:eo(Tf(Sf(Lr(),vs()),c,a,E),E),(oo(q||1)==5||oo(xt()||1)==5)&&Pr(I)&&Ot(I,-1,void 0)!==" "&&(I+=" ");break;default:I+="/"}break;case 123*W:P[K++]=Pr(I)*ge;case 125*W:case 59:case 0:switch(ue){case 0:case 125:G=0;case 59+Q:ge==-1&&(I=te(I,/\f/g,"")),ae>0&&(Pr(I)-H||W===0&&q===47)&&eo(ae>32?au(I+";",u,a,H-1,E):au(te(I," ","")+";",u,a,H-2,E),E);break;case 59:I+=";";default:if(eo(U=iu(I,c,a,K,Q,m,P,ne,L=[],X=[],H,j),j),ue===123)if(Q===0)ys(I,c,U,U,L,j,H,P,X);else{switch(Z){case 99:if(We(I,3)===110)break;case 108:if(We(I,2)===97)break;default:Q=0;case 100:case 109:case 115:}Q?ys(s,U,U,u&&eo(iu(s,U,U,0,0,m,P,ne,m,L=[],H,X),X),m,X,H,P,u?L:X):ys(I,U,U,U,[""],X,0,P,X)}}K=Q=ae=0,W=ge=1,ne=I="",H=S;break;case 58:H=1+Pr(I),ae=q;default:if(W<1){if(ue==123)--W;else if(ue==125&&W++==0&&jf()==125)continue}switch(I+=Xi(ue),ue*W){case 38:ge=Q>0?1:(I+="\f",-1);break;case 44:P[K++]=(Pr(I)-1)*ge,ge=1;break;case 64:xt()===45&&(I+=Pi(Lr())),Z=xt(),Q=H=Pr(ne=I+=Cf(vs())),ue++;break;case 45:q===45&&Pr(I)==2&&(W=0)}}return j}function iu(s,c,a,u,m,j,S,P,E,K,Q,H){for(var Z=m-1,ae=m===0?j:[""],q=Lu(ae),W=0,G=0,ge=0;W<u;++W)for(var ue=0,ne=Ot(s,Z+1,Z=Iu(G=S[W])),L=s;ue<q;++ue)(L=Pu(G>0?ae[ue]+" "+ne:te(ne,/&\f/g,ae[ue])))&&(E[ge++]=L);return Is(s,c,a,m===0?Ts:P,E,K,Q,H)}function Tf(s,c,a,u){return Is(s,c,a,Tu,Xi(yf()),Ot(s,2,-2),0,u)}function au(s,c,a,u,m){return Is(s,c,a,qi,Ot(s,0,u),Ot(s,u+1,-1),u,m)}function _u(s,c,a){switch(gf(s,c)){case 5103:return xe+"print-"+s+s;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return xe+s+s;case 4855:return xe+s.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+s;case 4789:return to+s+s;case 5349:case 4246:case 4810:case 6968:case 2756:return xe+s+to+s+Se+s+s;case 5936:switch(We(s,c+11)){case 114:return xe+s+Se+te(s,/[svh]\w+-[tblr]{2}/,"tb")+s;case 108:return xe+s+Se+te(s,/[svh]\w+-[tblr]{2}/,"tb-rl")+s;case 45:return xe+s+Se+te(s,/[svh]\w+-[tblr]{2}/,"lr")+s}case 6828:case 4268:case 2903:return xe+s+Se+s+s;case 6165:return xe+s+Se+"flex-"+s+s;case 5187:return xe+s+te(s,/(\w+).+(:[^]+)/,xe+"box-$1$2"+Se+"flex-$1$2")+s;case 5443:return xe+s+Se+"flex-item-"+te(s,/flex-|-self/g,"")+(Qr(s,/flex-|baseline/)?"":Se+"grid-row-"+te(s,/flex-|-self/g,""))+s;case 4675:return xe+s+Se+"flex-line-pack"+te(s,/align-content|flex-|-self/g,"")+s;case 5548:return xe+s+Se+te(s,"shrink","negative")+s;case 5292:return xe+s+Se+te(s,"basis","preferred-size")+s;case 6060:return xe+"box-"+te(s,"-grow","")+xe+s+Se+te(s,"grow","positive")+s;case 4554:return xe+te(s,/([^-])(transform)/g,"$1"+xe+"$2")+s;case 6187:return te(te(te(s,/(zoom-|grab)/,xe+"$1"),/(image-set)/,xe+"$1"),s,"")+s;case 5495:case 3959:return te(s,/(image-set\([^]*)/,xe+"$1$`$1");case 4968:return te(te(s,/(.+:)(flex-)?(.*)/,xe+"box-pack:$3"+Se+"flex-pack:$3"),/space-between/,"justify")+xe+s+s;case 4200:if(!Qr(s,/flex-|baseline/))return Se+"grid-column-align"+Ot(s,c)+s;break;case 2592:case 3360:return Se+te(s,"template-","")+s;case 4384:case 3616:return a&&a.some(function(u,m){return c=m,Qr(u.props,/grid-\w+-end/)})?~gs(s+(a=a[c].value),"span",0)?s:Se+te(s,"-start","")+s+Se+"grid-row-span:"+(~gs(a,"span",0)?Qr(a,/\d+/):+Qr(a,/\d+/)-+Qr(s,/\d+/))+";":Se+te(s,"-start","")+s;case 4896:case 4128:return a&&a.some(function(u){return Qr(u.props,/grid-\w+-start/)})?s:Se+te(te(s,"-end","-span"),"span ","")+s;case 4095:case 3583:case 4068:case 2532:return te(s,/(.+)-inline(.+)/,xe+"$1$2")+s;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Pr(s)-1-c>6)switch(We(s,c+1)){case 109:if(We(s,c+4)!==45)break;case 102:return te(s,/(.+:)(.+)-([^]+)/,"$1"+xe+"$2-$3$1"+to+(We(s,c+3)==108?"$3":"$2-$3"))+s;case 115:return~gs(s,"stretch",0)?_u(te(s,"stretch","fill-available"),c,a)+s:s}break;case 5152:case 5920:return te(s,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(u,m,j,S,P,E,K){return Se+m+":"+j+K+(S?Se+m+"-span:"+(P?E:+E-+j)+K:"")+s});case 4949:if(We(s,c+6)===121)return te(s,":",":"+xe)+s;break;case 6444:switch(We(s,We(s,14)===45?18:11)){case 120:return te(s,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+xe+(We(s,14)===45?"inline-":"")+"box$3$1"+xe+"$2$3$1"+Se+"$2box$3")+s;case 100:return te(s,":",":"+Se)+s}break;case 5719:case 2647:case 2135:case 3927:case 2391:return te(s,"scroll-","scroll-snap-")+s}return s}function bs(s,c){for(var a="",u=0;u<s.length;u++)a+=c(s[u],u,s,c)||"";return a}function zf(s,c,a,u){switch(s.type){case xf:if(s.children.length)break;case ff:case mf:case qi:return s.return=s.return||s.value;case Tu:return"";case zu:return s.return=s.value+"{"+bs(s.children,u)+"}";case Ts:if(!Pr(s.value=s.props.join(",")))return""}return Pr(a=bs(s.children,u))?s.return=s.value+"{"+a+"}":""}function If(s){var c=Lu(s);return function(a,u,m,j){for(var S="",P=0;P<c;P++)S+=s[P](a,u,m,j)||"";return S}}function Pf(s){return function(c){c.root||(c=c.return)&&s(c)}}function Lf(s,c,a,u){if(s.length>-1&&!s.return)switch(s.type){case qi:s.return=_u(s.value,s.length,a);return;case zu:return bs([mt(s,{value:te(s.value,"@","@"+xe)})],u);case Ts:if(s.length)return vf(a=s.props,function(m){switch(Qr(m,u=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":an(mt(s,{props:[te(m,/:(read-\w+)/,":"+to+"$1")]})),an(mt(s,{props:[m]})),Di(s,{props:lu(a,u)});break;case"::placeholder":an(mt(s,{props:[te(m,/:(plac\w+)/,":"+xe+"input-$1")]})),an(mt(s,{props:[te(m,/:(plac\w+)/,":"+to+"$1")]})),an(mt(s,{props:[te(m,/:(plac\w+)/,Se+"input-$1")]})),an(mt(s,{props:[m]})),Di(s,{props:lu(a,u)});break}return""})}}var Bf={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},fr={},dn=typeof process!="undefined"&&fr!==void 0&&(fr.REACT_APP_SC_ATTR||fr.SC_ATTR)||"data-styled",Ou="active",Au="data-styled-version",Ls="6.3.10",Zi=`/*!sc*/
`,no=typeof window!="undefined"&&typeof document!="undefined",_f=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&fr!==void 0&&fr.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&fr.REACT_APP_SC_DISABLE_SPEEDY!==""?fr.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&fr.REACT_APP_SC_DISABLE_SPEEDY:typeof process!="undefined"&&fr!==void 0&&fr.SC_DISABLE_SPEEDY!==void 0&&fr.SC_DISABLE_SPEEDY!==""&&fr.SC_DISABLE_SPEEDY!=="false"&&fr.SC_DISABLE_SPEEDY);function lo(s){for(var c=[],a=1;a<arguments.length;a++)c[a-1]=arguments[a];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(s," for more information.").concat(c.length>0?" Args: ".concat(c.join(", ")):""))}var js=new Map,ks=new Map,Ns=1,ro=function(s){if(js.has(s))return js.get(s);for(;ks.has(Ns);)Ns++;var c=Ns++;return js.set(s,c),ks.set(c,s),c},Of=function(s,c){Ns=c+1,js.set(s,c),ks.set(c,s)},ea=Object.freeze([]),un=Object.freeze({});function Af(s,c,a){return a===void 0&&(a=un),s.theme!==a.theme&&s.theme||c||a.theme}var Mu=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),Mf=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Rf=/(^-|-$)/g;function cu(s){return s.replace(Mf,"-").replace(Rf,"")}var Df=/(a)(d)/gi,du=function(s){return String.fromCharCode(s+(s>25?39:97))};function Hi(s){var c,a="";for(c=Math.abs(s);c>52;c=c/52|0)a=du(c%52)+a;return(du(c%52)+a).replace(Df,"$1-$2")}var Li,Pt=function(s,c){for(var a=c.length;a;)s=33*s^c.charCodeAt(--a);return s},Ru=function(s){return Pt(5381,s)};function Ff(s){return Hi(Ru(s)>>>0)}function Hf(s){return s.displayName||s.name||"Component"}function Bi(s){return typeof s=="string"&&!0}var Du=typeof Symbol=="function"&&Symbol.for,Fu=Du?Symbol.for("react.memo"):60115,Wf=Du?Symbol.for("react.forward_ref"):60112,Uf={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},$f={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Hu={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Vf=((Li={})[Wf]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Li[Fu]=Hu,Li);function uu(s){return("type"in(c=s)&&c.type.$$typeof)===Fu?Hu:"$$typeof"in s?Vf[s.$$typeof]:Uf;var c}var Jf=Object.defineProperty,Qf=Object.getOwnPropertyNames,pu=Object.getOwnPropertySymbols,Gf=Object.getOwnPropertyDescriptor,Yf=Object.getPrototypeOf,hu=Object.prototype;function Wu(s,c,a){if(typeof c!="string"){if(hu){var u=Yf(c);u&&u!==hu&&Wu(s,u,a)}var m=Qf(c);pu&&(m=m.concat(pu(c)));for(var j=uu(s),S=uu(c),P=0;P<m.length;++P){var E=m[P];if(!(E in $f||a&&a[E]||S&&E in S||j&&E in j)){var K=Gf(c,E);try{Jf(s,E,K)}catch{}}}}return s}function pn(s){return typeof s=="function"}function ra(s){return typeof s=="object"&&"styledComponentId"in s}function Bt(s,c){return s&&c?"".concat(s," ").concat(c):s||c||""}function fu(s,c){return s.join("")}function so(s){return s!==null&&typeof s=="object"&&s.constructor.name===Object.name&&!("props"in s&&s.$$typeof)}function Wi(s,c,a){if(a===void 0&&(a=!1),!a&&!so(s)&&!Array.isArray(s))return c;if(Array.isArray(c))for(var u=0;u<c.length;u++)s[u]=Wi(s[u],c[u]);else if(so(c))for(var u in c)s[u]=Wi(s[u],c[u]);return s}function ta(s,c){Object.defineProperty(s,"toString",{value:c})}var Kf=(function(){function s(c){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=c,this._cGroup=0,this._cIndex=0}return s.prototype.indexOfGroup=function(c){if(c===this._cGroup)return this._cIndex;var a=this._cIndex;if(c>this._cGroup)for(var u=this._cGroup;u<c;u++)a+=this.groupSizes[u];else for(u=this._cGroup-1;u>=c;u--)a-=this.groupSizes[u];return this._cGroup=c,this._cIndex=a,a},s.prototype.insertRules=function(c,a){if(c>=this.groupSizes.length){for(var u=this.groupSizes,m=u.length,j=m;c>=j;)if((j<<=1)<0)throw lo(16,"".concat(c));this.groupSizes=new Uint32Array(j),this.groupSizes.set(u),this.length=j;for(var S=m;S<j;S++)this.groupSizes[S]=0}for(var P=this.indexOfGroup(c+1),E=0,K=(S=0,a.length);S<K;S++)this.tag.insertRule(P,a[S])&&(this.groupSizes[c]++,P++,E++);E>0&&this._cGroup>c&&(this._cIndex+=E)},s.prototype.clearGroup=function(c){if(c<this.length){var a=this.groupSizes[c],u=this.indexOfGroup(c),m=u+a;this.groupSizes[c]=0;for(var j=u;j<m;j++)this.tag.deleteRule(u);a>0&&this._cGroup>c&&(this._cIndex-=a)}},s.prototype.getGroup=function(c){var a="";if(c>=this.length||this.groupSizes[c]===0)return a;for(var u=this.groupSizes[c],m=this.indexOfGroup(c),j=m+u,S=m;S<j;S++)a+=this.tag.getRule(S)+Zi;return a},s})(),qf="style[".concat(dn,"][").concat(Au,'="').concat(Ls,'"]'),Xf=new RegExp("^".concat(dn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),mu=function(s){return typeof ShadowRoot!="undefined"&&s instanceof ShadowRoot||"host"in s&&s.nodeType===11},Ui=function(s){if(!s)return document;if(mu(s))return s;if("getRootNode"in s){var c=s.getRootNode();if(mu(c))return c}return document},Zf=function(s,c,a){for(var u,m=a.split(","),j=0,S=m.length;j<S;j++)(u=m[j])&&s.registerName(c,u)},em=function(s,c){for(var a,u=((a=c.textContent)!==null&&a!==void 0?a:"").split(Zi),m=[],j=0,S=u.length;j<S;j++){var P=u[j].trim();if(P){var E=P.match(Xf);if(E){var K=0|parseInt(E[1],10),Q=E[2];K!==0&&(Of(Q,K),Zf(s,Q,E[3]),s.getTag().insertRules(K,m)),m.length=0}else m.push(P)}}},_i=function(s){for(var c=Ui(s.options.target).querySelectorAll(qf),a=0,u=c.length;a<u;a++){var m=c[a];m&&m.getAttribute(dn)!==Ou&&(em(s,m),m.parentNode&&m.parentNode.removeChild(m))}};function rm(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null}var Uu=function(s){var c=document.head,a=s||c,u=document.createElement("style"),m=(function(P){var E=Array.from(P.querySelectorAll("style[".concat(dn,"]")));return E[E.length-1]})(a),j=m!==void 0?m.nextSibling:null;u.setAttribute(dn,Ou),u.setAttribute(Au,Ls);var S=rm();return S&&u.setAttribute("nonce",S),a.insertBefore(u,j),u},tm=(function(){function s(c){this.element=Uu(c),this.element.appendChild(document.createTextNode("")),this.sheet=(function(a){var u;if(a.sheet)return a.sheet;for(var m=(u=a.getRootNode().styleSheets)!==null&&u!==void 0?u:document.styleSheets,j=0,S=m.length;j<S;j++){var P=m[j];if(P.ownerNode===a)return P}throw lo(17)})(this.element),this.length=0}return s.prototype.insertRule=function(c,a){try{return this.sheet.insertRule(a,c),this.length++,!0}catch{return!1}},s.prototype.deleteRule=function(c){this.sheet.deleteRule(c),this.length--},s.prototype.getRule=function(c){var a=this.sheet.cssRules[c];return a&&a.cssText?a.cssText:""},s})(),nm=(function(){function s(c){this.element=Uu(c),this.nodes=this.element.childNodes,this.length=0}return s.prototype.insertRule=function(c,a){if(c<=this.length&&c>=0){var u=document.createTextNode(a);return this.element.insertBefore(u,this.nodes[c]||null),this.length++,!0}return!1},s.prototype.deleteRule=function(c){this.element.removeChild(this.nodes[c]),this.length--},s.prototype.getRule=function(c){return c<this.length?this.nodes[c].textContent:""},s})(),om=(function(){function s(c){this.rules=[],this.length=0}return s.prototype.insertRule=function(c,a){return c<=this.length&&(c===this.length?this.rules.push(a):this.rules.splice(c,0,a),this.length++,!0)},s.prototype.deleteRule=function(c){this.rules.splice(c,1),this.length--},s.prototype.getRule=function(c){return c<this.length?this.rules[c]:""},s})(),xu=no,sm={isServer:!no,useCSSOMInjection:!_f},$u=(function(){function s(c,a,u){c===void 0&&(c=un),a===void 0&&(a={});var m=this;this.options=cr(cr({},sm),c),this.gs=a,this.names=new Map(u),this.server=!!c.isServer,!this.server&&no&&xu&&(xu=!1,_i(this)),ta(this,function(){return(function(j){for(var S=j.getTag(),P=S.length,E="",K=function(H){var Z=(function(ge){return ks.get(ge)})(H);if(Z===void 0)return"continue";var ae=j.names.get(Z);if(ae===void 0||!ae.size)return"continue";var q=S.getGroup(H);if(q.length===0)return"continue";var W=dn+".g"+H+'[id="'+Z+'"]',G="";ae.forEach(function(ge){ge.length>0&&(G+=ge+",")}),E+=q+W+'{content:"'+G+'"}'+Zi},Q=0;Q<P;Q++)K(Q);return E})(m)})}return s.registerId=function(c){return ro(c)},s.prototype.rehydrate=function(){!this.server&&no&&_i(this)},s.prototype.reconstructWithOptions=function(c,a){a===void 0&&(a=!0);var u=new s(cr(cr({},this.options),c),this.gs,a&&this.names||void 0);return!this.server&&no&&c.target!==this.options.target&&Ui(this.options.target)!==Ui(c.target)&&_i(u),u},s.prototype.allocateGSInstance=function(c){return this.gs[c]=(this.gs[c]||0)+1},s.prototype.getTag=function(){return this.tag||(this.tag=(c=(function(a){var u=a.useCSSOMInjection,m=a.target;return a.isServer?new om(m):u?new tm(m):new nm(m)})(this.options),new Kf(c)));var c},s.prototype.hasNameForId=function(c,a){var u,m;return(m=(u=this.names.get(c))===null||u===void 0?void 0:u.has(a))!==null&&m!==void 0&&m},s.prototype.registerName=function(c,a){ro(c);var u=this.names.get(c);u?u.add(a):this.names.set(c,new Set([a]))},s.prototype.insertRules=function(c,a,u){this.registerName(c,a),this.getTag().insertRules(ro(c),u)},s.prototype.clearNames=function(c){this.names.has(c)&&this.names.get(c).clear()},s.prototype.clearRules=function(c){this.getTag().clearGroup(ro(c)),this.clearNames(c)},s.prototype.clearTag=function(){this.tag=void 0},s})(),lm=/&/g,Gr=47,Lt=42;function gu(s){if(s.indexOf("}")===-1)return!1;for(var c=s.length,a=0,u=0,m=!1,j=0;j<c;j++){var S=s.charCodeAt(j);if(u!==0||m||S!==Gr||s.charCodeAt(j+1)!==Lt)if(m)S===Lt&&s.charCodeAt(j+1)===Gr&&(m=!1,j++);else if(S!==34&&S!==39||j!==0&&s.charCodeAt(j-1)===92){if(u===0){if(S===123)a++;else if(S===125&&--a<0)return!0}}else u===0?u=S:u===S&&(u=0);else m=!0,j++}return a!==0||u!==0}function Vu(s,c){return s.map(function(a){return a.type==="rule"&&(a.value="".concat(c," ").concat(a.value),a.value=a.value.replaceAll(",",",".concat(c," ")),a.props=a.props.map(function(u){return"".concat(c," ").concat(u)})),Array.isArray(a.children)&&a.type!=="@keyframes"&&(a.children=Vu(a.children,c)),a})}function im(s){var c,a,u,m=un,j=m.options,S=j===void 0?un:j,P=m.plugins,E=P===void 0?ea:P,K=function(q,W,G){return G.startsWith(a)&&G.endsWith(a)&&G.replaceAll(a,"").length>0?".".concat(c):q},Q=E.slice();Q.push(function(q){q.type===Ts&&q.value.includes("&")&&(u||(u=new RegExp("\\".concat(a,"\\b"),"g")),q.props[0]=q.props[0].replace(lm,a).replace(u,K))}),S.prefix&&Q.push(Lf),Q.push(zf);var H=[],Z=If(Q.concat(Pf(function(q){return H.push(q)}))),ae=function(q,W,G,ge){W===void 0&&(W=""),G===void 0&&(G=""),ge===void 0&&(ge="&"),c=ge,a=W,u=void 0;var ue=(function(L){if(!gu(L))return L;for(var X=L.length,U="",I=0,R=0,je=0,Oe=!1,le=0;le<X;le++){var Be=L.charCodeAt(le);if(je!==0||Oe||Be!==Gr||L.charCodeAt(le+1)!==Lt)if(Oe)Be===Lt&&L.charCodeAt(le+1)===Gr&&(Oe=!1,le++);else if(Be!==34&&Be!==39||le!==0&&L.charCodeAt(le-1)===92){if(je===0)if(Be===123)R++;else if(Be===125){if(--R<0){for(var Ce=le+1;Ce<X;){var Ge=L.charCodeAt(Ce);if(Ge===59||Ge===10)break;Ce++}Ce<X&&L.charCodeAt(Ce)===59&&Ce++,R=0,le=Ce-1,I=Ce;continue}R===0&&(U+=L.substring(I,le+1),I=le+1)}else Be===59&&R===0&&(U+=L.substring(I,le+1),I=le+1)}else je===0?je=Be:je===Be&&(je=0);else Oe=!0,le++}if(I<X){var er=L.substring(I);gu(er)||(U+=er)}return U})((function(L){if(L.indexOf("//")===-1)return L;for(var X=L.length,U=[],I=0,R=0,je=0,Oe=0;R<X;){var le=L.charCodeAt(R);if(le!==34&&le!==39||R!==0&&L.charCodeAt(R-1)===92)if(je===0)if(le===Gr&&R+1<X&&L.charCodeAt(R+1)===Lt){for(R+=2;R+1<X&&(L.charCodeAt(R)!==Lt||L.charCodeAt(R+1)!==Gr);)R++;R+=2}else if(le===40&&R>=3&&(32|L.charCodeAt(R-1))==108&&(32|L.charCodeAt(R-2))==114&&(32|L.charCodeAt(R-3))==117)Oe=1,R++;else if(Oe>0)le===41?Oe--:le===40&&Oe++,R++;else if(le===Lt&&R+1<X&&L.charCodeAt(R+1)===Gr)R>I&&U.push(L.substring(I,R)),I=R+=2;else if(le===Gr&&R+1<X&&L.charCodeAt(R+1)===Gr){for(R>I&&U.push(L.substring(I,R));R<X&&L.charCodeAt(R)!==10;)R++;I=R}else R++;else R++;else je===0?je=le:je===le&&(je=0),R++}return I===0?L:(I<X&&U.push(L.substring(I)),U.join(""))})(q)),ne=Ef(G||W?"".concat(G," ").concat(W," { ").concat(ue," }"):ue);return S.namespace&&(ne=Vu(ne,S.namespace)),H=[],bs(ne,Z),H};return ae.hash=E.length?E.reduce(function(q,W){return W.name||lo(15),Pt(q,W.name)},5381).toString():"",ae}var am=new $u,$i=im(),Ju=mr.createContext({shouldForwardProp:void 0,styleSheet:am,stylis:$i});Ju.Consumer;mr.createContext(void 0);function vu(){return mr.useContext(Ju)}var cm=(function(){function s(c,a){var u=this;this.inject=function(m,j){j===void 0&&(j=$i);var S=u.name+j.hash;m.hasNameForId(u.id,S)||m.insertRules(u.id,S,j(u.rules,S,"@keyframes"))},this.name=c,this.id="sc-keyframes-".concat(c),this.rules=a,ta(this,function(){throw lo(12,String(u.name))})}return s.prototype.getName=function(c){return c===void 0&&(c=$i),this.name+c.hash},s})();function dm(s,c){return c==null||typeof c=="boolean"||c===""?"":typeof c!="number"||c===0||s in Bf||s.startsWith("--")?String(c).trim():"".concat(c,"px")}var um=function(s){return s>="A"&&s<="Z"};function yu(s){for(var c="",a=0;a<s.length;a++){var u=s[a];if(a===1&&u==="-"&&s[0]==="-")return s;um(u)?c+="-"+u.toLowerCase():c+=u}return c.startsWith("ms-")?"-"+c:c}var Qu=function(s){return s==null||s===!1||s===""},Gu=function(s){var c=[];for(var a in s){var u=s[a];s.hasOwnProperty(a)&&!Qu(u)&&(Array.isArray(u)&&u.isCss||pn(u)?c.push("".concat(yu(a),":"),u,";"):so(u)?c.push.apply(c,ws(ws(["".concat(a," {")],Gu(u),!1),["}"],!1)):c.push("".concat(yu(a),": ").concat(dm(a,u),";")))}return c};function _t(s,c,a,u,m){if(m===void 0&&(m=[]),typeof s=="string")return s&&m.push(s),m;if(Qu(s))return m;if(ra(s))return m.push(".".concat(s.styledComponentId)),m;if(pn(s)){if(!pn(S=s)||S.prototype&&S.prototype.isReactComponent||!c)return m.push(s),m;var j=s(c);return _t(j,c,a,u,m)}var S;if(s instanceof cm)return a?(s.inject(a,u),m.push(s.getName(u))):m.push(s),m;if(so(s)){for(var P=Gu(s),E=0;E<P.length;E++)m.push(P[E]);return m}if(!Array.isArray(s))return m.push(s.toString()),m;for(E=0;E<s.length;E++)_t(s[E],c,a,u,m);return m}function pm(s){for(var c=0;c<s.length;c+=1){var a=s[c];if(pn(a)&&!ra(a))return!1}return!0}var hm=Ru(Ls),fm=(function(){function s(c,a,u){this.rules=c,this.staticRulesId="",this.isStatic=(u===void 0||u.isStatic)&&pm(c),this.componentId=a,this.baseHash=Pt(hm,a),this.baseStyle=u,$u.registerId(a)}return s.prototype.generateAndInjectStyles=function(c,a,u){var m=this.baseStyle?this.baseStyle.generateAndInjectStyles(c,a,u).className:"";if(this.isStatic&&!u.hash)if(this.staticRulesId&&a.hasNameForId(this.componentId,this.staticRulesId))m=Bt(m,this.staticRulesId);else{var j=fu(_t(this.rules,c,a,u)),S=Hi(Pt(this.baseHash,j)>>>0);if(!a.hasNameForId(this.componentId,S)){var P=u(j,".".concat(S),void 0,this.componentId);a.insertRules(this.componentId,S,P)}m=Bt(m,S),this.staticRulesId=S}else{for(var E=Pt(this.baseHash,u.hash),K="",Q=0;Q<this.rules.length;Q++){var H=this.rules[Q];if(typeof H=="string")K+=H;else if(H){var Z=fu(_t(H,c,a,u));E=Pt(Pt(E,String(Q)),Z),K+=Z}}if(K){var ae=Hi(E>>>0);if(!a.hasNameForId(this.componentId,ae)){var q=u(K,".".concat(ae),void 0,this.componentId);a.insertRules(this.componentId,ae,q)}m=Bt(m,ae)}}return{className:m,css:typeof window=="undefined"?a.getTag().getGroup(ro(this.componentId)):""}},s})(),Yu=mr.createContext(void 0);Yu.Consumer;var Oi={};function mm(s,c,a){var u=ra(s),m=s,j=!Bi(s),S=c.attrs,P=S===void 0?ea:S,E=c.componentId,K=E===void 0?(function(L,X){var U=typeof L!="string"?"sc":cu(L);Oi[U]=(Oi[U]||0)+1;var I="".concat(U,"-").concat(Ff(Ls+U+Oi[U]));return X?"".concat(X,"-").concat(I):I})(c.displayName,c.parentComponentId):E,Q=c.displayName,H=Q===void 0?(function(L){return Bi(L)?"styled.".concat(L):"Styled(".concat(Hf(L),")")})(s):Q,Z=c.displayName&&c.componentId?"".concat(cu(c.displayName),"-").concat(c.componentId):c.componentId||K,ae=u&&m.attrs?m.attrs.concat(P).filter(Boolean):P,q=c.shouldForwardProp;if(u&&m.shouldForwardProp){var W=m.shouldForwardProp;if(c.shouldForwardProp){var G=c.shouldForwardProp;q=function(L,X){return W(L,X)&&G(L,X)}}else q=W}var ge=new fm(a,Z,u?m.componentStyle:void 0);function ue(L,X){return(function(U,I,R){var je=U.attrs,Oe=U.componentStyle,le=U.defaultProps,Be=U.foldedComponentIds,Ce=U.styledComponentId,Ge=U.target,er=mr.useContext(Yu),Ye=vu(),Ne=U.shouldForwardProp||Ye.shouldForwardProp,T=Af(I,er,le)||un,F=(function(se,pe,ce){for(var ve,Ie=cr(cr({},pe),{className:void 0,theme:ce}),Yr=0;Yr<se.length;Yr+=1){var gt=pn(ve=se[Yr])?ve(Ie):ve;for(var br in gt)br==="className"?Ie.className=Bt(Ie.className,gt[br]):br==="style"?Ie.style=cr(cr({},Ie.style),gt[br]):Ie[br]=gt[br]}return"className"in pe&&typeof pe.className=="string"&&(Ie.className=Bt(Ie.className,pe.className)),Ie})(je,I,T),B=F.as||Ge,x={};for(var N in F)F[N]===void 0||N[0]==="$"||N==="as"||N==="theme"&&F.theme===T||(N==="forwardedAs"?x.as=F.forwardedAs:Ne&&!Ne(N,B)||(x[N]=F[N]));var ee=(function(se,pe){var ce=vu(),ve=se.generateAndInjectStyles(pe,ce.styleSheet,ce.stylis);return ve})(Oe,F),re=ee.className,ie=Bt(Be,Ce);return re&&(ie+=" "+re),F.className&&(ie+=" "+F.className),x[Bi(B)&&!Mu.has(B)?"class":"className"]=ie,R&&(x.ref=R),fe.createElement(B,x)})(ne,L,X)}ue.displayName=H;var ne=mr.forwardRef(ue);return ne.attrs=ae,ne.componentStyle=ge,ne.displayName=H,ne.shouldForwardProp=q,ne.foldedComponentIds=u?Bt(m.foldedComponentIds,m.styledComponentId):"",ne.styledComponentId=Z,ne.target=u?m.target:s,Object.defineProperty(ne,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(L){this._foldedDefaultProps=u?(function(X){for(var U=[],I=1;I<arguments.length;I++)U[I-1]=arguments[I];for(var R=0,je=U;R<je.length;R++)Wi(X,je[R],!0);return X})({},m.defaultProps,L):L}}),ta(ne,function(){return".".concat(ne.styledComponentId)}),j&&Wu(ne,s,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),ne}function ju(s,c){for(var a=[s[0]],u=0,m=c.length;u<m;u+=1)a.push(c[u],s[u+1]);return a}var Nu=function(s){return Object.assign(s,{isCss:!0})};function xm(s){for(var c=[],a=1;a<arguments.length;a++)c[a-1]=arguments[a];if(pn(s)||so(s))return Nu(_t(ju(ea,ws([s],c,!0))));var u=s;return c.length===0&&u.length===1&&typeof u[0]=="string"?_t(u):Nu(_t(ju(u,c)))}function Vi(s,c,a){if(a===void 0&&(a=un),!c)throw lo(1,c);var u=function(m){for(var j=[],S=1;S<arguments.length;S++)j[S-1]=arguments[S];return s(c,a,xm.apply(void 0,ws([m],j,!1)))};return u.attrs=function(m){return Vi(s,c,cr(cr({},a),{attrs:Array.prototype.concat(a.attrs,m).filter(Boolean)}))},u.withConfig=function(m){return Vi(s,c,cr(cr({},a),m))},u}var Ku=function(s){return Vi(mm,s)},de=Ku;Mu.forEach(function(s){de[s]=Ku(s)});const Ai={Wrapper:de.div`
        /* border: 1px solid #f00; */
        height: 100vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    `,Header:de.header`
        /* border: 1px solid #f00; */
        height: 60px;
        flex-shrink: 0;
    `,Main:de.main`
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
    `},wu={Wrapper:de.header`
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
    `,Main:de.div`
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
    `},gm="/javascript-core-notes/logo.png";var qu={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},bu=mr.createContext&&mr.createContext(qu),vm=["attr","size","title"];function ym(s,c){if(s==null)return{};var a=jm(s,c),u,m;if(Object.getOwnPropertySymbols){var j=Object.getOwnPropertySymbols(s);for(m=0;m<j.length;m++)u=j[m],!(c.indexOf(u)>=0)&&Object.prototype.propertyIsEnumerable.call(s,u)&&(a[u]=s[u])}return a}function jm(s,c){if(s==null)return{};var a={};for(var u in s)if(Object.prototype.hasOwnProperty.call(s,u)){if(c.indexOf(u)>=0)continue;a[u]=s[u]}return a}function Ss(){return Ss=Object.assign?Object.assign.bind():function(s){for(var c=1;c<arguments.length;c++){var a=arguments[c];for(var u in a)Object.prototype.hasOwnProperty.call(a,u)&&(s[u]=a[u])}return s},Ss.apply(this,arguments)}function ku(s,c){var a=Object.keys(s);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(s);c&&(u=u.filter(function(m){return Object.getOwnPropertyDescriptor(s,m).enumerable})),a.push.apply(a,u)}return a}function Cs(s){for(var c=1;c<arguments.length;c++){var a=arguments[c]!=null?arguments[c]:{};c%2?ku(Object(a),!0).forEach(function(u){Nm(s,u,a[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(a)):ku(Object(a)).forEach(function(u){Object.defineProperty(s,u,Object.getOwnPropertyDescriptor(a,u))})}return s}function Nm(s,c,a){return c=wm(c),c in s?Object.defineProperty(s,c,{value:a,enumerable:!0,configurable:!0,writable:!0}):s[c]=a,s}function wm(s){var c=bm(s,"string");return typeof c=="symbol"?c:c+""}function bm(s,c){if(typeof s!="object"||!s)return s;var a=s[Symbol.toPrimitive];if(a!==void 0){var u=a.call(s,c);if(typeof u!="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return(c==="string"?String:Number)(s)}function Xu(s){return s&&s.map((c,a)=>mr.createElement(c.tag,Cs({key:a},c.attr),Xu(c.child)))}function J(s){return c=>mr.createElement(km,Ss({attr:Cs({},s.attr)},c),Xu(s.child))}function km(s){var c=a=>{var{attr:u,size:m,title:j}=s,S=ym(s,vm),P=m||a.size||"1em",E;return a.className&&(E=a.className),s.className&&(E=(E?E+" ":"")+s.className),mr.createElement("svg",Ss({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},a.attr,u,S,{className:E,style:Cs(Cs({color:s.color||a.color},a.style),s.style),height:P,width:P,xmlns:"http://www.w3.org/2000/svg"}),j&&mr.createElement("title",null,j),s.children)};return bu!==void 0?mr.createElement(bu.Consumer,null,a=>c(a)):c(qu)}function Zu(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"22 12 18 12 15 21 9 3 6 12 2 12"},child:[]}]})(s)}function ep(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"},child:[]},{tag:"line",attr:{x1:"12",y1:"9",x2:"12",y2:"13"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12.01",y2:"17"},child:[]}]})(s)}function Sm(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"19",x2:"12",y2:"5"},child:[]},{tag:"polyline",attr:{points:"5 12 12 5 19 12"},child:[]}]})(s)}function rp(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"},child:[]},{tag:"polyline",attr:{points:"3.27 6.96 12 12.01 20.73 6.96"},child:[]},{tag:"line",attr:{x1:"12",y1:"22.08",x2:"12",y2:"12"},child:[]}]})(s)}function Cm(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"},child:[]},{tag:"polyline",attr:{points:"22 4 12 14.01 9 11.01"},child:[]}]})(s)}function Te(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"},child:[]}]})(s)}function ze(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"9 18 15 12 9 6"},child:[]}]})(s)}function Mi(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polyline",attr:{points:"12 6 12 12 16 14"},child:[]}]})(s)}function Em(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"},child:[]}]})(s)}function z(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 18 22 12 16 6"},child:[]},{tag:"polyline",attr:{points:"8 6 2 12 8 18"},child:[]}]})(s)}function Tm(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 8h1a4 4 0 0 1 0 8h-1"},child:[]},{tag:"path",attr:{d:"M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"},child:[]},{tag:"line",attr:{x1:"6",y1:"1",x2:"6",y2:"4"},child:[]},{tag:"line",attr:{x1:"10",y1:"1",x2:"10",y2:"4"},child:[]},{tag:"line",attr:{x1:"14",y1:"1",x2:"14",y2:"4"},child:[]}]})(s)}function Ri(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"},child:[]}]})(s)}function Ji(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"15 10 20 15 15 20"},child:[]},{tag:"path",attr:{d:"M4 4v7a4 4 0 0 0 4 4h12"},child:[]}]})(s)}function Es(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"4",y:"4",width:"16",height:"16",rx:"2",ry:"2"},child:[]},{tag:"rect",attr:{x:"9",y:"9",width:"6",height:"6"},child:[]},{tag:"line",attr:{x1:"9",y1:"1",x2:"9",y2:"4"},child:[]},{tag:"line",attr:{x1:"15",y1:"1",x2:"15",y2:"4"},child:[]},{tag:"line",attr:{x1:"9",y1:"20",x2:"9",y2:"23"},child:[]},{tag:"line",attr:{x1:"15",y1:"20",x2:"15",y2:"23"},child:[]},{tag:"line",attr:{x1:"20",y1:"9",x2:"23",y2:"9"},child:[]},{tag:"line",attr:{x1:"20",y1:"14",x2:"23",y2:"14"},child:[]},{tag:"line",attr:{x1:"1",y1:"9",x2:"4",y2:"9"},child:[]},{tag:"line",attr:{x1:"1",y1:"14",x2:"4",y2:"14"},child:[]}]})(s)}function tp(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"ellipse",attr:{cx:"12",cy:"5",rx:"9",ry:"3"},child:[]},{tag:"path",attr:{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"},child:[]},{tag:"path",attr:{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"},child:[]}]})(s)}function np(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"6",y1:"3",x2:"6",y2:"15"},child:[]},{tag:"circle",attr:{cx:"18",cy:"6",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"18",r:"3"},child:[]},{tag:"path",attr:{d:"M18 9a9 9 0 0 1-9 9"},child:[]}]})(s)}function Qi(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"2",y1:"12",x2:"22",y2:"12"},child:[]},{tag:"path",attr:{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"},child:[]}]})(s)}function Su(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"4",y1:"9",x2:"20",y2:"9"},child:[]},{tag:"line",attr:{x1:"4",y1:"15",x2:"20",y2:"15"},child:[]},{tag:"line",attr:{x1:"10",y1:"3",x2:"8",y2:"21"},child:[]},{tag:"line",attr:{x1:"16",y1:"3",x2:"14",y2:"21"},child:[]}]})(s)}function zm(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"},child:[]}]})(s)}function Im(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"16",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12.01",y2:"8"},child:[]}]})(s)}function na(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 2 7 12 12 22 7 12 2"},child:[]},{tag:"polyline",attr:{points:"2 17 12 22 22 17"},child:[]},{tag:"polyline",attr:{points:"2 12 12 17 22 12"},child:[]}]})(s)}function Pm(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"},child:[]},{tag:"path",attr:{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"},child:[]}]})(s)}function Lm(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"8",y1:"6",x2:"21",y2:"6"},child:[]},{tag:"line",attr:{x1:"8",y1:"12",x2:"21",y2:"12"},child:[]},{tag:"line",attr:{x1:"8",y1:"18",x2:"21",y2:"18"},child:[]},{tag:"line",attr:{x1:"3",y1:"6",x2:"3.01",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"12",x2:"3.01",y2:"12"},child:[]},{tag:"line",attr:{x1:"3",y1:"18",x2:"3.01",y2:"18"},child:[]}]})(s)}function Bm(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"},child:[]},{tag:"polyline",attr:{points:"22,6 12,13 2,6"},child:[]}]})(s)}function _m(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"},child:[]}]})(s)}function op(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"},child:[]},{tag:"path",attr:{d:"M13 13l6 6"},child:[]}]})(s)}function Om(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"16.5",y1:"9.4",x2:"7.5",y2:"4.21"},child:[]},{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"},child:[]},{tag:"polyline",attr:{points:"3.27 6.96 12 12.01 20.73 6.96"},child:[]},{tag:"line",attr:{x1:"12",y1:"22.08",x2:"12",y2:"12"},child:[]}]})(s)}function Am(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"1 4 1 10 7 10"},child:[]},{tag:"polyline",attr:{points:"23 20 23 14 17 14"},child:[]},{tag:"path",attr:{d:"M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"},child:[]}]})(s)}function sp(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"17 1 21 5 17 9"},child:[]},{tag:"path",attr:{d:"M3 11V9a4 4 0 0 1 4-4h14"},child:[]},{tag:"polyline",attr:{points:"7 23 3 19 7 15"},child:[]},{tag:"path",attr:{d:"M21 13v2a4 4 0 0 1-4 4H3"},child:[]}]})(s)}function Mm(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"22",y1:"2",x2:"11",y2:"13"},child:[]},{tag:"polygon",attr:{points:"22 2 15 22 11 13 2 9 22 2"},child:[]}]})(s)}function Cu(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"18",cy:"5",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"12",r:"3"},child:[]},{tag:"circle",attr:{cx:"18",cy:"19",r:"3"},child:[]},{tag:"line",attr:{x1:"8.59",y1:"13.51",x2:"15.42",y2:"17.49"},child:[]},{tag:"line",attr:{x1:"15.41",y1:"6.51",x2:"8.59",y2:"10.49"},child:[]}]})(s)}function Gi(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"},child:[]}]})(s)}function Rm(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 3 21 3 21 8"},child:[]},{tag:"line",attr:{x1:"4",y1:"20",x2:"21",y2:"3"},child:[]},{tag:"polyline",attr:{points:"21 16 21 21 16 21"},child:[]},{tag:"line",attr:{x1:"15",y1:"15",x2:"21",y2:"21"},child:[]},{tag:"line",attr:{x1:"4",y1:"4",x2:"9",y2:"9"},child:[]}]})(s)}function Dm(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"4.93",y1:"4.93",x2:"19.07",y2:"19.07"},child:[]}]})(s)}function Fm(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"4",y1:"21",x2:"4",y2:"14"},child:[]},{tag:"line",attr:{x1:"4",y1:"10",x2:"4",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"20",y1:"21",x2:"20",y2:"16"},child:[]},{tag:"line",attr:{x1:"20",y1:"12",x2:"20",y2:"3"},child:[]},{tag:"line",attr:{x1:"1",y1:"14",x2:"7",y2:"14"},child:[]},{tag:"line",attr:{x1:"9",y1:"8",x2:"15",y2:"8"},child:[]},{tag:"line",attr:{x1:"17",y1:"16",x2:"23",y2:"16"},child:[]}]})(s)}function Hm(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"rect",attr:{x:"9",y:"9",width:"6",height:"6"},child:[]}]})(s)}function Wm(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"5"},child:[]},{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"23"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"},child:[]},{tag:"line",attr:{x1:"1",y1:"12",x2:"3",y2:"12"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"23",y2:"12"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"},child:[]}]})(s)}function lp(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"6"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"2"},child:[]}]})(s)}function Yi(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"4 17 10 11 4 5"},child:[]},{tag:"line",attr:{x1:"12",y1:"19",x2:"20",y2:"19"},child:[]}]})(s)}function Um(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"},child:[]}]})(s)}function $m(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"4 7 4 4 20 4 20 7"},child:[]},{tag:"line",attr:{x1:"9",y1:"20",x2:"15",y2:"20"},child:[]},{tag:"line",attr:{x1:"12",y1:"4",x2:"12",y2:"20"},child:[]}]})(s)}function Vm(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"},child:[]}]})(s)}function Br(s){return J({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"},child:[]}]})(s)}const Jm=()=>{const[s,c]=fe.useState(!1),[a,u]=fe.useState("dark");fe.useEffect(()=>{const P=localStorage.getItem("app-theme")||"dark";u(P),P==="light"?document.documentElement.setAttribute("data-theme","light"):document.documentElement.removeAttribute("data-theme")},[]),fe.useEffect(()=>{a==="light"?document.documentElement.setAttribute("data-theme","light"):document.documentElement.removeAttribute("data-theme"),localStorage.setItem("app-theme",a)},[a]);const m=fe.useMemo(()=>a==="light"?"dark":"light",[a]),j=()=>{u(m)};return t.jsx(wu.Wrapper,{children:t.jsx(wu.Main,{children:t.jsxs("div",{className:"logoNameThemeToggleWrapper",children:[t.jsxs("div",{className:"logoNameWrapper",children:[t.jsxs("div",{className:"logoWrapper",children:[!s&&t.jsx("div",{className:"logoSkeleton"}),t.jsx("img",{src:gm,alt:"JavaScript Core Notes logo",onLoad:()=>c(!0),style:{opacity:s?1:0}})]}),t.jsxs("div",{className:"nameWrapper",children:[t.jsx("div",{className:"title",children:"javascript-core-notes"}),t.jsx("div",{className:"subTitle",children:"At-a-glance javascript revision"})]})]}),t.jsxs("button",{type:"button",className:"themeToggleBtn",onClick:j,"aria-label":`Switch to ${m} theme`,title:`Switch to ${m}`,children:[t.jsx("span",{className:"icon",children:a==="light"?t.jsx(_m,{}):t.jsx(Wm,{})}),t.jsx("span",{className:"label",children:a==="light"?"Light":"Dark"})]})]})})})};function Qm(s){return J({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z"},child:[]}]})(s)}function Gm(s){return J({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"},child:[]}]})(s)}function Ym(s){return J({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(s)}function Km(s){return J({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"},child:[]}]})(s)}function qm(s){return J({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M489.7 153.8c-.1-65.4-51-119-110.7-138.3C304.8-8.5 207-5 136.1 28.4C50.3 68.9 23.3 157.7 22.3 246.2C21.5 319 28.7 510.6 136.9 512c80.3 1 92.3-102.5 129.5-152.3c26.4-35.5 60.5-45.5 102.4-55.9c72-17.8 121.1-74.7 121-150z"},child:[]}]})(s)}function Xm(s){return J({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"},child:[]}]})(s)}const Zm={Wrapper:de.footer`
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
    `},ex=[["Portfolio","https://www.ashishranjan.net/",Vm],["GitHub","https://github.com/a2rp",Ym],["CodePen","https://codepen.io/ash1198",Qm],["LinkedIn","https://www.linkedin.com/in/aashishranjan",Km],["Facebook","https://www.facebook.com/theash.ashish/",Gm],["YouTube","https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1",Xm],["Email","mailto:ash.ranjan09@gmail.com",Bm],["Support","https://a2rp-donation-page.netlify.app/",zm],["Buy Me a Coffee","https://buymeacoffee.com/a2rp",Tm],["Patreon","https://www.patreon.com/a2rp",qm]],rx=()=>t.jsxs(Zm.Wrapper,{children:[t.jsxs("div",{className:"brand",children:[t.jsx("img",{src:"/logo.png",alt:"Ashish Ranjan logo"}),t.jsx("span",{children:"JavaScript Core Notes"})]}),t.jsx("nav",{className:"links","aria-label":"Social and support links",children:ex.map(([s,c,a])=>t.jsx("a",{href:c,target:"_blank",rel:"noopener noreferrer","aria-label":s,title:s,children:t.jsx(a,{"aria-hidden":"true"})},s))}),t.jsxs("div",{className:"copyright",children:["Copyright © ",new Date().getFullYear()," "," ",t.jsx("a",{href:"https://www.ashishranjan.net/",target:"_blank",rel:"noopener noreferrer",children:"Ashish Ranjan"})]})]}),tx={Button:de.button`
        position: fixed; right: 22px; bottom: 22px; z-index: 60; display: grid; width: 42px; height: 42px; place-items: center; border: 1px solid var(--color-border-light); border-radius: 50%; color: var(--color-text-primary); background: var(--color-surface-2); box-shadow: 0 10px 24px var(--color-shadow); cursor: pointer; opacity: 0; pointer-events: none; transition: opacity 180ms ease, border-color 180ms ease, box-shadow 180ms ease, text-shadow 180ms ease;
        &.isVisible { opacity: 1; pointer-events: auto; }
        &:hover, &:focus-visible { border-color: var(--color-primary); box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary) 18%, transparent), 0 12px 26px var(--color-shadow); text-shadow: 0 0 10px color-mix(in srgb, var(--color-primary) 70%, transparent); }
    `},nx=()=>{const[s,c]=fe.useState(!1);return fe.useEffect(()=>{const a=document.getElementById("notes-main");if(!a)return;const u=()=>c(a.scrollTop>220);return u(),a.addEventListener("scroll",u,{passive:!0}),()=>a.removeEventListener("scroll",u)},[]),t.jsx(tx.Button,{className:s?"isVisible":"",type:"button","aria-label":"Scroll to top",onClick:()=>{var a;return(a=document.getElementById("notes-main"))==null?void 0:a.scrollTo({top:0,behavior:"smooth"})},children:t.jsx(Sm,{"aria-hidden":"true"})})},Eu={Wrapper:de.section`
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 60px 20px;
        /* margin-bottom: 30px; */
    `,Content:de.div`
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
    `},ox=()=>{const s="2026-09-24T00:46:44.684Z",c=new Date(s).toLocaleString("en-US",{year:"numeric",month:"long",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1});return t.jsx(Eu.Wrapper,{children:t.jsxs(Eu.Content,{children:[t.jsx("h2",{className:"heading",children:"About JavaScript"}),t.jsx("p",{children:"JavaScript is the programming language of the web. It adds logic and behavior to HTML and CSS. While HTML structures content and CSS styles it, JavaScript controls interaction, state, dynamic updates, and application flow."}),t.jsx("p",{children:"JavaScript runs inside an engine that parses code, creates execution contexts, manages memory, and processes the event loop. Concepts like scope, closures, prototypes, asynchronous execution, and promises are fundamental to writing predictable and maintainable applications."}),t.jsx("p",{children:"The javascript-core-notes project is a structured revision system. It organizes language fundamentals, execution concepts, DOM manipulation, and modern ES6+ features into a clean single-page reference designed for fast recall and strong conceptual clarity."}),t.jsxs("div",{className:"meta",children:[t.jsx("span",{className:"metaLabel",children:"Last updated:"}),t.jsx("span",{className:"metaValue",children:c})]})]})})},sx={Wrapper:de.section`
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
    `},lx=()=>{const[s,c]=fe.useState(!1),a=()=>c(u=>!u);return t.jsxs(sx.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:a,"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(Te,{}):t.jsx(ze,{})}),t.jsx("span",{className:"icon",children:t.jsx(Es,{})}),t.jsx("span",{className:"title",children:"JavaScript Fundamentals"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsx("div",{className:"intro",children:t.jsx("p",{className:"p",children:"JavaScript is what makes the web interactive. These fundamentals explain where JS runs, how it executes, and how it connects to HTML and CSS."})}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"What is JavaScript"}),t.jsx("p",{className:"p",children:"JavaScript is a programming language used to add logic and interactivity to web pages. It can update content, respond to user actions, and work with data."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(Yi,{})}),"Quick example"]}),t.jsx("pre",{className:"code",children:`console.log("Hello JavaScript");
// Output - Hello JavaScript`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"History of JS"}),t.jsx("p",{className:"p",children:"JavaScript was created in 1995 to add interactivity to web pages. It grew fast and became the main language of the browser. Today it is standardized as ECMAScript."})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"JS engine"}),t.jsx("p",{className:"p",children:"A JavaScript engine is the program that executes your JS code. Example engines are V8 (Chrome, Node), SpiderMonkey (Firefox), and JavaScriptCore (Safari)."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(Es,{})}),"Engine idea"]}),t.jsx("pre",{className:"code",children:`// You write JS
// Engine parses it and runs it
// Result - output appears in console or UI`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Browser vs Node"}),t.jsx("p",{className:"p",children:"Browser JavaScript can work with the DOM, events, and Web APIs. Node.js JavaScript runs outside the browser and is used for backend work like servers, files, and databases."}),t.jsxs("div",{className:"miniGrid",children:[t.jsxs("div",{className:"mini",children:[t.jsxs("div",{className:"miniTitle",children:[t.jsx("span",{className:"miniIcon",children:t.jsx(Qi,{})}),"Browser"]}),t.jsx("div",{className:"miniSub",children:"DOM - events - fetch - storage"})]}),t.jsxs("div",{className:"mini",children:[t.jsxs("div",{className:"miniTitle",children:[t.jsx("span",{className:"miniIcon",children:t.jsx(z,{})}),"Node"]}),t.jsx("div",{className:"miniSub",children:"server - file system - backend APIs"})]})]}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Example"]}),t.jsx("pre",{className:"code",children:`// Browser
document.title = "JS running in browser";
// Result - page title changes

// Node
console.log("JS running in Node");
// Output - JS running in Node`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Interpreted vs compiled"}),t.jsx("p",{className:"p",children:"JavaScript is often called interpreted, but modern engines use JIT (Just In Time) compilation. That means code is compiled and optimized while running for better performance."}),t.jsxs("div",{className:"callout",children:[t.jsxs("div",{className:"calloutTitle",children:[t.jsx("span",{className:"calloutIcon",children:t.jsx(Br,{})}),"Simple meaning"]}),t.jsx("div",{className:"calloutText",children:"JS runs fast today because engines optimize code as it executes."})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"ECMAScript"}),t.jsx("p",{className:"p",children:"ECMAScript is the standard that defines the JavaScript language. ES6 introduced modern features like let, const, arrow functions, classes, and modules."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(na,{})}),"ES6 example"]}),t.jsx("pre",{className:"code",children:'const name = "Ash";\nconsole.log(`Hello ${name}`);\n// Output - Hello Ash'})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"How JS works with HTML & CSS"}),t.jsx("p",{className:"p",children:"The browser turns HTML into a DOM tree. JavaScript can read and change that DOM, and it can also update CSS by changing classes or inline styles."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(Qi,{})}),"DOM and style idea"]}),t.jsx("pre",{className:"code",children:`// Example idea
// JS can update HTML text
// JS can add a class to change CSS
// Result - UI changes without page reload`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Script tag"}),t.jsx("p",{className:"p",children:"JavaScript is loaded in HTML using the script tag. Using defer is usually preferred because it loads the script without blocking HTML parsing."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Script loading"]}),t.jsx("pre",{className:"code",children:`<script src="app.js" defer><\/script>
<!-- Result - app.js runs after HTML is parsed -->`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"DOM manipulation concept"}),t.jsx("p",{className:"p",children:"DOM manipulation means selecting elements and updating them. You can change text, attributes, classes, and even create new elements."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(Yi,{})}),"Basic DOM update"]}),t.jsx("pre",{className:"code",children:`const el = document.querySelector(".title");
el.textContent = "Updated by JS";
// Result - text inside .title changes`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Event driven model"}),t.jsx("p",{className:"p",children:"JavaScript reacts to events like click, input, and submit. You attach event listeners, and when the event happens, your callback runs."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(Br,{})}),"Click example"]}),t.jsx("pre",{className:"code",children:`const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  console.log("Clicked");
});

// Output - Clicked (when button is clicked)`})]})]})]})]})},ix={Wrapper:de.section`
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
    `},ax=()=>{const[s,c]=fe.useState(!1),a=()=>c(u=>!u);return t.jsxs(ix.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:a,"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(Te,{}):t.jsx(ze,{})}),t.jsx("span",{className:"icon",children:t.jsx(tp,{})}),t.jsx("span",{className:"title",children:"Variables & Data Types"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Variables"}),t.jsx("p",{children:"Variables are named containers to store values. In JavaScript you create variables using var, let, or const."})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"var"}),t.jsx("p",{children:"var is function scoped and can be re-declared. It can cause bugs in modern code, so avoid it unless required."}),t.jsx("pre",{className:"code",children:`var a = 10;
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
console.log(add(2, 3)); // 5`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Type system"}),t.jsx("p",{children:"JavaScript is dynamically typed. Types are attached to values, not variables."}),t.jsxs("div",{className:"note",children:[t.jsx("span",{className:"noteIcon",children:t.jsx(Im,{})}),t.jsx("span",{className:"noteText",children:"Same variable can hold different types at different times."})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Dynamic typing"}),t.jsx("pre",{className:"code",children:`let v = 10;
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
console.log(Boolean("ok")); // true`}),t.jsxs("div",{className:"note2",children:[t.jsx("span",{className:"noteIcon2",children:t.jsx(lp,{})}),t.jsx("span",{className:"noteText2",children:'Falsy values: 0, "", null, undefined, NaN, false'})]})]}),t.jsxs("div",{className:"footer",children:[t.jsx("div",{className:"footerTitle",children:"Quick takeaway"}),t.jsxs("ul",{className:"footerList",children:[t.jsx("li",{children:"- Use const by default, let when reassignment needed"}),t.jsx("li",{children:"- Prefer === over =="}),t.jsx("li",{children:'- Remember typeof null is "object"'})]})]})]})]})},cx={Wrapper:de.section`
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
    `},dx=()=>{const[s,c]=fe.useState(!1),a=()=>c(u=>!u);return t.jsxs(cx.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:a,"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(Te,{}):t.jsx(ze,{})}),t.jsx("span",{className:"icon",children:t.jsx(Fm,{})}),t.jsx("span",{className:"title",children:"Operators"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Arithmetic"}),t.jsx("p",{children:"Arithmetic operators perform mathematical calculations. They are used for addition, subtraction, multiplication, division and more."}),t.jsx("pre",{className:"code",children:`let a = 10;
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
// "Adult"`})]})]})]})},ux={Wrapper:de.section`
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
    `},px=()=>{const[s,c]=fe.useState(!1),a=()=>c(u=>!u);return t.jsxs(ux.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:a,"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(Te,{}):t.jsx(ze,{})}),t.jsx("span",{className:"icon",children:t.jsx(Rm,{})}),t.jsx("span",{className:"title",children:"Control Flow"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsx("div",{className:"intro",children:t.jsx("p",{className:"p",children:"Control flow decides what code runs, when it runs, and how many times it runs. Most logic in JavaScript comes from conditions and loops."})}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"if else"}),t.jsx("p",{className:"p",children:"Use if else when you want to run code based on a condition."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Example"]}),t.jsx("pre",{className:"code",children:`const age = 20;

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

// output - Full access`})]}),t.jsxs("div",{className:"hint",children:[t.jsx("span",{className:"hintIcon",children:t.jsx(Ji,{})}),"break is important - without it, execution continues to the next case."]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"for"}),t.jsx("p",{className:"p",children:"Use for when you know how many times you want to loop."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Example"]}),t.jsx("pre",{className:"code",children:`for (let i = 1; i <= 3; i++) {
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
// output - 10`})]})]})]})]})},hx={Wrapper:de.section`
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
    `},fx=()=>{const[s,c]=fe.useState(!1),a=()=>c(u=>!u);return t.jsxs(hx.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:a,"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(Te,{}):t.jsx(ze,{})}),t.jsx("span",{className:"icon",children:t.jsx(Br,{})}),t.jsx("span",{className:"title",children:"Functions"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Function Basics"}),t.jsx("p",{className:"p",children:"A function is a reusable block of code. You call it when you want the same logic again. Functions can take inputs and can return outputs."})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Function declaration"}),t.jsx("p",{className:"p",children:"A named function declared with the function keyword. Declarations are hoisted, so you can call them before they appear in the file."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Example"]}),t.jsx("pre",{className:"code",children:`function add(a, b) {
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

const price = getPrice();`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"First class functions"}),t.jsx("p",{className:"p",children:"In JavaScript, functions are values. You can store them in variables, pass them as arguments, or return them from other functions."}),t.jsxs("div",{className:"miniRow",children:[t.jsxs("div",{className:"mini",children:[t.jsx("span",{className:"miniIcon",children:t.jsx(np,{})}),t.jsxs("div",{className:"miniText",children:[t.jsx("div",{className:"miniTitle",children:"Store"}),t.jsx("div",{className:"miniSub",children:"const fn = () => "})]})]}),t.jsxs("div",{className:"mini",children:[t.jsx("span",{className:"miniIcon",children:t.jsx(sp,{})}),t.jsxs("div",{className:"miniText",children:[t.jsx("div",{className:"miniTitle",children:"Pass"}),t.jsx("div",{className:"miniSub",children:"doWork(fn)"})]})]}),t.jsxs("div",{className:"mini",children:[t.jsx("span",{className:"miniIcon",children:t.jsx(Es,{})}),t.jsxs("div",{className:"miniText",children:[t.jsx("div",{className:"miniTitle",children:"Return"}),t.jsx("div",{className:"miniSub",children:"return fn"})]})]})]}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Example"]}),t.jsx("pre",{className:"code",children:`function run(task) {
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
}`})]})]})]})]})},mx={Wrapper:de.section`
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
    `},xx=()=>{const[s,c]=fe.useState(!1);return t.jsxs(mx.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:()=>c(a=>!a),"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(Te,{}):t.jsx(ze,{})}),t.jsx("span",{className:"icon",children:t.jsx(np,{})}),t.jsx("span",{className:"title",children:"Scope & Execution Context"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Global scope"}),t.jsx("p",{children:"Variables declared outside any function or block belong to global scope. They are accessible everywhere in the program."}),t.jsx("pre",{className:"code",children:`let name = "Ash";

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
let b = 20;`})]})]})]})},gx={Wrapper:de.section`
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
    `},vx=()=>{const[s,c]=fe.useState(!1),a=()=>c(u=>!u);return t.jsxs(gx.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:a,"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(Te,{}):t.jsx(ze,{})}),t.jsx("span",{className:"icon",children:t.jsx(rp,{})}),t.jsx("span",{className:"title",children:"Objects"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Object Basics"}),t.jsx("p",{children:"An object stores data in key-value pairs. Keys are usually strings and values can be anything like strings, numbers, arrays, or even functions."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Basic object"]}),t.jsx("pre",{className:"code",children:`const user = {
  name: "Ash",
  age: 25,
  isPro: true
};

console.log(user.name); // "Ash"`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Creating objects"}),t.jsx("p",{children:"Most commonly we create objects using object literals using curly braces. Another way is using the Object constructor, but literals are preferred."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Two ways"]}),t.jsx("pre",{className:"code",children:`const a = { city: "Bangalore" };
const b = new Object({ city: "Bangalore" });

console.log(a.city); // "Bangalore"
console.log(b.city); // "Bangalore"`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Dot vs bracket notation"}),t.jsx("p",{children:"Dot notation is simple and common. Bracket notation is needed when the key has spaces, special characters, or when the key is stored in a variable."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(Su,{})}),"Access keys"]}),t.jsx("pre",{className:"code",children:`const obj = { name: "Ash", "full name": "Ashish Ranjan" };

console.log(obj.name); // "Ash"
console.log(obj["full name"]); // "Ashish Ranjan"`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Nested objects"}),t.jsx("p",{children:"Objects can contain other objects. You access nested values using dot or bracket notation step by step."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(na,{})}),"Nested example"]}),t.jsx("pre",{className:"code",children:`const profile = {
  name: "Ash",
  address: {
    city: "Bangalore",
    pin: 560049
  }
};

console.log(profile.address.city); // "Bangalore"`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Dynamic keys"}),t.jsx("p",{children:"Sometimes you do not know the key name in advance. You can create or access keys dynamically using bracket notation."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(Su,{})}),"Dynamic key"]}),t.jsx("pre",{className:"code",children:`const key = "role";
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
console.log(city); // "Bangalore"`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Spread operator"}),t.jsx("p",{children:"The spread operator copies properties into a new object. It is commonly used to make a shallow copy or merge objects."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(Ri,{})}),"spread merge"]}),t.jsx("pre",{className:"code",children:`const a = { x: 1 };
const b = { y: 2 };

const merged = { ...a, ...b };

console.log(merged); // { x: 1, y: 2 }`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Shallow vs deep copy"}),t.jsx("p",{children:"A shallow copy duplicates only the first level. Nested objects remain shared references. A deep copy duplicates nested objects too."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(Ri,{})}),"shallow copy problem"]}),t.jsx("pre",{className:"code",children:`const original = {
  name: "Ash",
  address: { city: "Bangalore" }
};

const shallow = { ...original };
shallow.address.city = "Bhopal";

console.log(original.address.city); // "Bhopal" (shared reference)`})]}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(Ri,{})}),"deep copy simple way"]}),t.jsx("pre",{className:"code",children:`const original = {
  name: "Ash",
  address: { city: "Bangalore" }
};

const deep = JSON.parse(JSON.stringify(original));
deep.address.city = "Bhopal";

console.log(original.address.city); // "Bangalore"
console.log(deep.address.city); // "Bhopal"`})]}),t.jsx("div",{className:"note",children:"Note - JSON deep copy works for simple data. It breaks for functions, Dates, undefined, and special types. Modern environments support structuredClone for better deep copying."})]})]})]})},yx={Wrapper:de.section`
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
    `},jx=()=>{const[s,c]=fe.useState(!1);return t.jsxs(yx.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:()=>c(a=>!a),"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(Te,{}):t.jsx(ze,{})}),t.jsx("span",{className:"icon",children:t.jsx(Lm,{})}),t.jsx("span",{className:"title",children:"Arrays"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Array Basics"}),t.jsx("p",{children:"An array is an ordered collection of values. It can store numbers, strings, objects, or even other arrays."}),t.jsx("pre",{className:"code",children:`const numbers = [10, 20, 30];
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
// [5, 10, 20]`})]})]})]})},Nx={Wrapper:de.section`
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
    `},wx=()=>{const[s,c]=fe.useState(!1),a=()=>c(u=>!u);return t.jsxs(Nx.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:a,"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(Te,{}):t.jsx(ze,{})}),t.jsx("span",{className:"icon",children:t.jsx($m,{})}),t.jsx("span",{className:"title",children:"Strings"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Strings"}),t.jsx("p",{children:"A string is text data in JavaScript. Strings are written inside quotes - \"hello\", 'world', or backticks `like this`. Strings are immutable, meaning methods return a new string instead of changing the original."}),t.jsx("pre",{className:"code",children:`const name = "Ash";
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
console.log(s.includes("backend")); // false`})]}),t.jsxs("div",{className:"footerNote",children:[t.jsx("div",{className:"footerTitle",children:"Quick takeaway"}),t.jsxs("ul",{className:"checks",children:[t.jsxs("li",{children:[t.jsx("span",{className:"checkDot"}),"String methods return new strings - original does not change"]}),t.jsxs("li",{children:[t.jsx("span",{className:"checkDot"}),"Template literals are best for building dynamic text"]}),t.jsxs("li",{children:[t.jsx("span",{className:"checkDot"}),"trim and split are very common in real forms and APIs"]})]})]})]})]})},bx={Wrapper:de.section`
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
    `},kx=()=>{const[s,c]=fe.useState(!1),a=()=>c(u=>!u);return t.jsxs(bx.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:a,"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(Te,{}):t.jsx(ze,{})}),t.jsx("span",{className:"icon",children:t.jsx(Br,{})}),t.jsx("span",{className:"title",children:"ES6+ Essentials"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Destructuring"}),t.jsx("p",{children:"Destructuring allows extracting values from arrays or objects into variables in a clean way."}),t.jsx("pre",{className:"code",children:`const user = { name: "Ash", age: 25 };

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

console.log(MathUtil.double(5)); // 10`})]})]})]})},Sx={Wrapper:de.section`
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
    `},Cx=()=>{const[s,c]=fe.useState(!1),a=()=>c(u=>!u);return t.jsxs(Sx.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:a,"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(Te,{}):t.jsx(ze,{})}),t.jsx("span",{className:"icon",children:t.jsx(op,{})}),t.jsx("span",{className:"title",children:"DOM Manipulation"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"DOM Manipulation"}),t.jsx("p",{className:"p",children:"DOM means Document Object Model. When the browser reads HTML, it creates a tree of elements. JavaScript can select elements from this tree and change them."})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Selecting elements"}),t.jsx("p",{className:"p",children:"To change anything, first you select it. The most common selectors are getElementById and querySelector."})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"getElementById"}),t.jsx("p",{className:"p",children:"Selects one element by its id. It is fast and returns a single element or null."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Example"]}),t.jsx("pre",{className:"code",children:`// HTML
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
// Result: link opens in new tab`})]})]})]})]})},Ex={Wrapper:de.section`
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
    `},Tx=()=>{const[s,c]=fe.useState(!1),a=()=>c(u=>!u);return t.jsxs(Ex.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:a,"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(Te,{}):t.jsx(ze,{})}),t.jsx("span",{className:"icon",children:t.jsx(Br,{})}),t.jsx("span",{className:"title",children:"Events"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Events"}),t.jsx("p",{className:"p",children:"Events are signals that something happened - like a click, key press, scroll, submit, or page load. JavaScript listens to events and runs code when they happen."})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(op,{})}),"addEventListener"]}),t.jsx("p",{className:"p",children:"addEventListener attaches a function to run when an event happens on an element."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Basic click listener"]}),t.jsx("pre",{className:"code",children:`const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  console.log("clicked"); // output - clicked
});`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Cu,{})}),"Event object"]}),t.jsx("p",{className:"p",children:"The event object is passed to your listener. It contains details like what type of event happened and which element triggered it."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Reading event data"]}),t.jsx("pre",{className:"code",children:`document.addEventListener("click", (e) => {
  console.log(e.type); // output - click
  console.log(e.target.tagName); // output - BUTTON (example)
});`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Ji,{})}),"Event bubbling"]}),t.jsx("p",{className:"p",children:"Bubbling means the event starts at the target element and then moves upward through its parent elements. This is the default behavior."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Bubbling example"]}),t.jsx("pre",{className:"code",children:`const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

parent.addEventListener("click", () => {
  console.log("parent"); // output - parent
});

child.addEventListener("click", () => {
  console.log("child"); // output - child
});

// click on .child
// output order - child then parent`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Ji,{})}),"Event capturing"]}),t.jsx("p",{className:"p",children:"Capturing means the event travels from the top (document) down to the target element. It happens before bubbling. You enable it using the third parameter or capture option."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Capturing enabled"]}),t.jsx("pre",{className:"code",children:`parent.addEventListener("click", () => {
  console.log("parent capture"); // output - parent capture
}, true);

child.addEventListener("click", () => {
  console.log("child"); // output - child
});

// click on .child
// output order - parent capture then child`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Cu,{})}),"Event delegation"]}),t.jsx("p",{className:"p",children:"Delegation means you attach one listener to a parent and handle events for its children using e.target. This is useful for dynamic lists where items are added later."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"One listener for many buttons"]}),t.jsx("pre",{className:"code",children:`const list = document.querySelector(".list");

list.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    console.log("button clicked"); // output - button clicked
  }
});`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Dm,{})}),"preventDefault"]}),t.jsx("p",{className:"p",children:"preventDefault stops the browser's default action. Example: stop a form from submitting or stop a link from navigating."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Stop form submit"]}),t.jsx("pre",{className:"code",children:`const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("blocked submit"); // output - blocked submit
});`})]})]}),t.jsxs("div",{className:"section",children:[t.jsxs("h3",{className:"h3",children:[t.jsx("span",{className:"hIcon",children:t.jsx(Hm,{})}),"stopPropagation"]}),t.jsx("p",{className:"p",children:"stopPropagation stops the event from moving further in the bubbling or capturing chain. Use it when you do not want parent listeners to run."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Stop bubbling to parent"]}),t.jsx("pre",{className:"code",children:`parent.addEventListener("click", () => {
  console.log("parent"); // output - parent
});

child.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("child only"); // output - child only
});

// click on .child
// output - child only`})]})]})]})]})},zx={Wrapper:de.section`
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
    `},Ix=()=>{const[s,c]=fe.useState(!1),a=()=>c(u=>!u);return t.jsxs(zx.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:a,"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(Te,{}):t.jsx(ze,{})}),t.jsx("span",{className:"icon",children:t.jsx(Mi,{})}),t.jsx("span",{className:"title",children:"Asynchronous JavaScript"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Basics"}),t.jsx("p",{children:"JavaScript runs code in a single main thread. Async code lets you start a task now and handle its result later, without freezing the UI or blocking other work."})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Synchronous vs asynchronous"}),t.jsx("p",{children:"Synchronous code runs line by line and waits for each step to finish. Asynchronous code starts a task and continues running the next lines, then comes back when the task is done."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Sync vs async example"]}),t.jsx("pre",{className:"code",children:`console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

console.log("C");

// output:
// A
// C
// B`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Blocking vs non blocking"}),t.jsx("p",{children:"Blocking means the main thread cannot do anything else until a task finishes. Non-blocking means the task is handled in the background and the main thread keeps running."}),t.jsxs("div",{className:"note",children:[t.jsx("span",{className:"noteIcon",children:t.jsx(Zu,{})}),"In the browser, network requests and timers are handled by Web APIs, so your UI stays responsive."]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Timers"}),t.jsx("p",{children:"Timers schedule code to run later or repeatedly. They do not pause JavaScript. They register a callback and JavaScript continues running."})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"setTimeout"}),t.jsx("p",{children:"setTimeout runs a function once after a delay in milliseconds."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(Mi,{})}),"Run once after delay"]}),t.jsx("pre",{className:"code",children:`console.log("Start");

setTimeout(() => {
  console.log("After 1 second");
}, 1000);

console.log("End");

// output:
// Start
// End
// After 1 second`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"setInterval"}),t.jsx("p",{children:"setInterval runs a function repeatedly after every given delay. You should clear it when you are done."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(Mi,{})}),"Repeat every second"]}),t.jsx("pre",{className:"code",children:`let count = 0;

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
// Tick: 3`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Promises"}),t.jsx("p",{children:"A Promise represents a value that will be available in the future. It can be pending, fulfilled, or rejected."})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Creating promises"}),t.jsx("p",{children:"You create a Promise using new Promise with resolve and reject functions."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(Br,{})}),"Create a promise"]}),t.jsx("pre",{className:"code",children:`const p = new Promise((resolve, reject) => {
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
// Cleanup`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Async Await"}),t.jsx("p",{children:"async and await are a cleaner way to work with Promises. async makes a function return a Promise. await pauses inside that async function until the Promise resolves."})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"async function"}),t.jsx("p",{children:"An async function always returns a Promise, even if you return a normal value."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(Br,{})}),"async returns a promise"]}),t.jsx("pre",{className:"code",children:`async function getNumber() {
  return 5;
}

getNumber().then((v) => console.log(v));

// output:
// 5`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"await keyword"}),t.jsx("p",{children:"await waits for a Promise to resolve and gives you the resolved value. You can only use await inside an async function."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(Br,{})}),"await example"]}),t.jsx("pre",{className:"code",children:`const wait = (ms) =>
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
// Caught: Network error`})]})]})]})]})},Px={Wrapper:de.section`
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
    `},Lx=()=>{const[s,c]=fe.useState(!1),a=()=>c(u=>!u);return t.jsxs(Px.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:a,"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(Te,{}):t.jsx(ze,{})}),t.jsx("span",{className:"icon",children:t.jsx(Em,{})}),t.jsx("span",{className:"title",children:"Fetch and APIs"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Fetch and APIs"}),t.jsx("p",{children:"An API is a way for your app to talk to another service over the internet. Most web APIs use HTTP and send data as JSON. In the browser, the most common way to call an API is using fetch()."})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Fetch API"}),t.jsx("p",{children:"fetch() makes an HTTP request and returns a Promise. The first await gives you a Response object. The second await reads the body data, usually with response.json()."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Basic GET request"]}),t.jsx("pre",{className:"code",children:`async function loadUser() {
  const res = await fetch('https://api.example.com/user/1');
  const data = await res.json();

  console.log(data);
  // output - { id: 1, name: 'Alex' }
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"HTTP methods"}),t.jsx("p",{children:"HTTP methods describe what action you want to perform on a resource."}),t.jsxs("ul",{className:"bullets",children:[t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"GET - read data"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"POST - create new data"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"PUT - replace data"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"PATCH - update part of data"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"}),"DELETE - remove data"]})]}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(Mm,{})}),"POST request example"]}),t.jsx("pre",{className:"code",children:`async function createUser() {
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
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"JSON"}),t.jsx("p",{children:"JSON stands for JavaScript Object Notation. It is a text format used to send data between systems. You usually convert objects to JSON using JSON.stringify and convert JSON text back to objects using JSON.parse."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(tp,{})}),"JSON stringify and parse"]}),t.jsx("pre",{className:"code",children:`const obj = { name: 'Riya', age: 22 };

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
}`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Error handling"}),t.jsx("p",{children:"Use try/catch to handle network failures, JSON parsing failures, and your own thrown errors. For a clean flow, throw a custom error when response.ok is false."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(ep,{})}),"try/catch with custom error"]}),t.jsx("pre",{className:"code",children:`async function loadProfile() {
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
}`})]}),t.jsxs("div",{className:"tip",children:[t.jsx("div",{className:"tipTitle",children:"Tip"}),t.jsx("div",{className:"tipText",children:"Network error - fetch rejects and goes to catch. HTTP error - fetch does not reject, so check res.ok."})]})]})]})]})},Bx={Wrapper:de.section`
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
    `},_x=()=>{const[s,c]=fe.useState(!1),a=()=>c(u=>!u);return t.jsxs(Bx.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:a,"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(Te,{}):t.jsx(ze,{})}),t.jsx("span",{className:"icon",children:t.jsx(Br,{})}),t.jsx("span",{className:"title",children:"Advanced Concepts - Must Know"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Closures"}),t.jsx("p",{className:"p",children:"A closure happens when a function remembers variables from its outer scope, even after the outer function has finished executing. This is why inner functions can access outer variables later."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Closure example"]}),t.jsx("pre",{className:"code",children:`function makeCounter() {
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

user.sayLater();`})]})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"call - apply - bind"}),t.jsx("p",{className:"p",children:"call and apply invoke a function immediately with a chosen this value. bind returns a new function with this fixed permanently."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(lp,{})}),"call - apply - bind"]}),t.jsx("pre",{className:"code",children:`function greet(city, role) {
  console.log('Hi ' + this.name + ' from ' + city + ' - ' + role);
}

const person = { name: 'Ash' };

greet.call(person, 'Bangalore', 'Developer');
// Hi Ash from Bangalore - Developer

greet.apply(person, ['Bangalore', 'Developer']);
// Hi Ash from Bangalore - Developer

const boundGreet = greet.bind(person);
boundGreet('Bangalore', 'Developer');
// Hi Ash from Bangalore - Developer`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Prototypes"}),t.jsx("p",{className:"p",children:"JavaScript objects can inherit properties from other objects using prototypes. When you access a property, JavaScript first checks the object, then checks its prototype chain."}),t.jsxs("div",{className:"subSection",children:[t.jsx("h4",{className:"h4",children:"Prototype chain"}),t.jsx("p",{className:"p",children:"If a property is not found on the object, JavaScript searches on its prototype, then that prototype's prototype, and so on, until it reaches null."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(Pm,{})}),"Prototype chain lookup"]}),t.jsx("pre",{className:"code",children:`const base = { canRun: true };
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
p2.sayHi(); // Hi Neha`})]}),t.jsx("p",{className:"p",children:"Key idea - methods on Person.prototype are shared, but properties created inside Person are per instance."})]})]})]})]})},Ox={Wrapper:de.section`
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
    `},Ax=()=>{const[s,c]=fe.useState(!1);return t.jsxs(Ox.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:()=>c(a=>!a),"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(Te,{}):t.jsx(ze,{})}),t.jsx("span",{className:"icon",children:t.jsx(rp,{})}),t.jsx("span",{className:"title",children:"Classes and OOP"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Class syntax"}),t.jsx("p",{children:"A class is a blueprint for creating objects. It groups properties and methods together. Classes were introduced in ES6 to make object oriented programming clearer."}),t.jsx("pre",{className:"code",children:`class Person {
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
// SyntaxError - private field not accessible`})]})]})]})},Mx={Wrapper:de.section`
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
    `},Rx=()=>{const[s,c]=fe.useState(!1),a=()=>c(u=>!u);return t.jsxs(Mx.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:a,"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(Te,{}):t.jsx(ze,{})}),t.jsx("span",{className:"icon",children:t.jsx(Es,{})}),t.jsx("span",{className:"title",children:"Memory and Performance"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Stack vs heap"}),t.jsx("p",{className:"p",children:"JavaScript uses two main memory areas. The stack stores short-lived data like function calls and primitive values. The heap stores objects, arrays, and functions because they can be larger and live longer."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Stack (primitive) vs Heap (object)"]}),t.jsx("pre",{className:"code",children:`let a = 10;           // stack
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
console.log(deep.meta.level);     // 99`})]}),t.jsxs("div",{className:"callout",children:[t.jsx("div",{className:"calloutTitle",children:"Quick tip"}),t.jsxs("div",{className:"calloutText",children:["Use ",t.jsx("span",{className:"mono",children:"structuredClone"})," ","when available. For older environments, you may use JSON clone for simple data, but it breaks for dates, functions, undefined, and special types."]})]})]}),t.jsxs("div",{className:"footerNote",children:[t.jsx("div",{className:"footerTitle",children:"Practical mindset"}),t.jsxs("ul",{className:"checks",children:[t.jsxs("li",{children:[t.jsx("span",{className:"checkDot"})," Prefer immutability in state updates"]}),t.jsxs("li",{children:[t.jsx("span",{className:"checkDot"})," Watch out for shared nested objects"]}),t.jsxs("li",{children:[t.jsx("span",{className:"checkDot"})," Avoid keeping large unused objects referenced"]})]})]})]})]})},Dx={Wrapper:de.section`
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
    `},Fx=()=>{const[s,c]=fe.useState(!1),a=()=>c(u=>!u);return t.jsxs(Dx.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:a,"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(Te,{}):t.jsx(ze,{})}),t.jsx("span",{className:"icon",children:t.jsx(Om,{})}),t.jsx("span",{className:"title",children:"Modules"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"ES modules"}),t.jsx("p",{children:"ES modules allow JavaScript code to be split into reusable files. Each file is treated as its own module with its own scope. Nothing leaks to the global scope unless exported."}),t.jsx("pre",{className:"code",children:`// math.js
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
    });`}),t.jsx("p",{children:"Dynamic import helps reduce initial bundle size by loading code only when needed."})]})]})]})},Hx={Wrapper:de.section`
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
    `},Wx=()=>{const[s,c]=fe.useState(!1),a=()=>c(u=>!u);return t.jsxs(Hx.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:a,"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(Te,{}):t.jsx(ze,{})}),t.jsx("span",{className:"icon",children:t.jsx(Qi,{})}),t.jsx("span",{className:"title",children:"Browser APIs"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"What are Browser APIs"}),t.jsx("p",{children:"Browser APIs are built-in features provided by the browser. JavaScript itself does not include storage, URL handling, or DOM access. The browser provides these capabilities."}),t.jsx("p",{children:"Examples include localStorage, sessionStorage, fetch, and URLSearchParams."})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"localStorage"}),t.jsx("p",{children:"localStorage stores data in the browser with no expiration. The data remains even after page refresh or browser restart."}),t.jsx("pre",{className:"code",children:`localStorage.setItem("name", "Ashish");

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
// Output: ashish`})]})]})]})},Ux={Wrapper:de.section`
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
    `},$x=()=>{const[s,c]=fe.useState(!1),a=()=>c(u=>!u);return t.jsxs(Ux.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:a,"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(Te,{}):t.jsx(ze,{})}),t.jsx("span",{className:"icon",children:t.jsx(Zu,{})}),t.jsx("span",{className:"title",children:"Functional Programming Concepts"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsx("div",{className:"intro",children:t.jsx("p",{className:"p",children:"Functional programming in JavaScript means writing code that is predictable and easier to test. The big ideas are keeping data unchanged, using functions that return values, and avoiding hidden changes."})}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Immutability"}),t.jsx("p",{className:"p",children:"Immutability means you do not change the original data. Instead, you create a new copy with updates. This avoids unexpected bugs in large apps."}),t.jsx("pre",{className:"code",children:`// Bad - mutates original
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
console.log(incrementPure(2)); // 3`})]}),t.jsxs("div",{className:"summary",children:[t.jsxs("div",{className:"summaryRow",children:[t.jsxs("span",{className:"chip",children:[t.jsx(Gi,{})," immutability"]}),t.jsxs("span",{className:"chip",children:[t.jsx(sp,{})," map returns new array"]}),t.jsxs("span",{className:"chip",children:[t.jsx(Br,{})," pure functions"]})]}),t.jsx("p",{className:"p muted",children:"Quick rule - prefer returning new values instead of changing existing values. Keep side effects separate."})]})]})]})},Vx={Wrapper:de.section`
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
    `},Jx=()=>{const[s,c]=fe.useState(!1),a=()=>c(u=>!u);return t.jsxs(Vx.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:a,"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(Te,{}):t.jsx(ze,{})}),t.jsx("span",{className:"icon",children:t.jsx(Br,{})}),t.jsx("span",{className:"title",children:"Modern Features"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Optional chaining"}),t.jsx("p",{children:"Optional chaining lets you safely access deeply nested properties without throwing an error if something is undefined."}),t.jsx("pre",{className:"code",children:`const user = {};
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
// false`})]})]})]})},Qx={Wrapper:de.section`
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
    `},Gx=()=>{const[s,c]=fe.useState(!1),a=()=>c(u=>!u);return t.jsxs(Qx.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:a,"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(Te,{}):t.jsx(ze,{})}),t.jsx("span",{className:"icon",children:t.jsx(Cm,{})}),t.jsx("span",{className:"title",children:"Best Practices"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Clean code"}),t.jsx("p",{className:"p",children:"Write code that another developer can understand fast. Use clear names, small functions, and avoid clever hacks that confuse future you."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Naming and small functions"]}),t.jsx("pre",{className:"code",children:`function calcTotal(price, qty) {
  return price * qty;
}

const total = calcTotal(499, 2);
console.log(total); // 998`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Avoid global pollution"}),t.jsx("p",{className:"p",children:"Avoid creating variables in the global scope. Globals are easy to overwrite and cause hard to debug issues. Keep variables inside functions or modules."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(Gi,{})}),"Keep scope local"]}),t.jsx("pre",{className:"code",children:`// bad - global variable
// userName = "ash"; // creates global in sloppy code, avoid

// good - local variable inside function
function setUserName() {
  const userName = "ash";
  return userName;
}

console.log(setUserName()); // "ash"`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Avoid callback hell"}),t.jsx("p",{className:"p",children:"Deep nested callbacks make code unreadable and error handling painful. Prefer promises and async - await."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(na,{})}),"Async - await example"]}),t.jsx("pre",{className:"code",children:`async function loadUser() {
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

// result - total recalculates only when price or qty changes`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Defensive coding"}),t.jsx("p",{className:"p",children:"Assume data can be missing or wrong. Validate inputs, handle null and undefined, and avoid breaking the UI on bad values."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(Gi,{})}),"Safe access and fallback"]}),t.jsx("pre",{className:"code",children:`function getCity(user) {
  const city = user?.address?.city ?? "Unknown";
  return city;
}

console.log(getCity({ address: { city: "Bangalore" } })); // "Bangalore"
console.log(getCity(null)); // "Unknown"`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"Debugging with console"}),t.jsx("p",{className:"p",children:"Use console tools properly. console.log is fine, but console.table, console.time, and console.group make debugging faster."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(Yi,{})}),"Useful console tools"]}),t.jsx("pre",{className:"code",children:`const users = [
  { id: 1, name: "ash" },
  { id: 2, name: "neha" },
];

console.table(users); 
// result - table view in console

console.time("load");
// do something
console.timeEnd("load");
// result - prints time taken`})]})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"DevTools basics"}),t.jsx("p",{className:"p",children:"Browser DevTools help you inspect DOM, CSS, network calls, storage, and performance. Learn the basics and debugging becomes 10x easier."}),t.jsxs("ul",{className:"list",children:[t.jsxs("li",{children:[t.jsx("span",{className:"dot"})," Elements - inspect HTML and CSS"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"})," Console - logs and errors"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"})," Network - API requests and timing"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"})," Application - storage and cookies"]}),t.jsxs("li",{children:[t.jsx("span",{className:"dot"})," Performance - slow renders and bottlenecks"]})]}),t.jsxs("div",{className:"tip",children:[t.jsx("span",{className:"tipIcon",children:t.jsx(Um,{})}),t.jsx("span",{className:"tipText",children:"Shortcut - Press F12 or Ctrl - Shift - I to open DevTools."})]})]})]})]})},Yx={Wrapper:de.section`
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
    `},Kx=()=>{const[s,c]=fe.useState(!1),a=()=>c(u=>!u);return t.jsxs(Yx.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:a,"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(Te,{}):t.jsx(ze,{})}),t.jsx("span",{className:"icon",children:t.jsx(ep,{})}),t.jsx("span",{className:"title",children:"Common Interview Traps"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsx("div",{className:"intro",children:t.jsx("p",{className:"p",children:"These are the most common JavaScript traps asked in interviews. The goal is not to memorize, but to understand why the output happens."})}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{className:"h3",children:"== vs ==="}),t.jsx("p",{className:"p",children:"== compares after type conversion - === compares without conversion. Prefer === for predictable results."}),t.jsxs("div",{className:"codeBlock",children:[t.jsxs("div",{className:"codeTop",children:[t.jsx("span",{className:"codeIcon",children:t.jsx(z,{})}),"Example"]}),t.jsx("pre",{className:"code",children:`console.log(5 == "5");   // true - "5" becomes 5
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
// 2`})]})]})]})]})},qx={Wrapper:de.section`
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
    `},Xx=()=>{const[s,c]=fe.useState(!1),a=()=>c(u=>!u);return t.jsxs(qx.Wrapper,{className:s?"open":"",children:[t.jsxs("button",{type:"button",className:"topicHeader",onClick:a,"aria-expanded":s,children:[t.jsx("span",{className:"chev",children:s?t.jsx(Te,{}):t.jsx(ze,{})}),t.jsx("span",{className:"icon",children:t.jsx(Am,{})}),t.jsx("span",{className:"title",children:"Event Loop and Concurrency Model"}),t.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),t.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Call Stack"}),t.jsx("p",{children:"The call stack is where JavaScript executes functions. It follows LIFO - last in first out."}),t.jsx("pre",{className:"code",children:`function one() {
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
// timeout`})]}),t.jsxs("div",{className:"section",children:[t.jsx("h3",{children:"Event Loop Visual Model"}),t.jsx("p",{children:"The event loop constantly checks: 1 - Is call stack empty 2 - If yes, run microtasks 3 - Then run next task from task queue"}),t.jsx("p",{children:"Order of execution: Call Stack - Microtasks - Macrotasks"})]})]})]})},Zx=()=>t.jsxs(Ai.Wrapper,{children:[t.jsx(Ai.Header,{children:t.jsx(Jm,{})}),t.jsxs(Ai.Main,{id:"notes-main",children:[t.jsxs("div",{className:"contentWrapper",children:[t.jsx(ox,{}),t.jsx(lx,{}),t.jsx(ax,{}),t.jsx(dx,{}),t.jsx(px,{}),t.jsx(fx,{}),t.jsx(xx,{}),t.jsx(vx,{}),t.jsx(jx,{}),t.jsx(wx,{}),t.jsx(kx,{}),t.jsx(Cx,{}),t.jsx(Tx,{}),t.jsx(Ix,{}),t.jsx(Lx,{}),t.jsx(_x,{}),t.jsx(Ax,{}),t.jsx(Rx,{}),t.jsx(Fx,{}),t.jsx(Wx,{}),t.jsx($x,{}),t.jsx(Jx,{}),t.jsx(Gx,{}),t.jsx(Kx,{}),t.jsx(Xx,{})]}),t.jsx("div",{className:"footerWrapper",children:t.jsx(rx,{})}),t.jsx(nx,{})]})]});hf.createRoot(document.getElementById("root")).render(t.jsx(t.Fragment,{children:t.jsx(Zx,{})}));
