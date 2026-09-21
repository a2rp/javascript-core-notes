(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))u(m);new MutationObserver(m=>{for(const j of m)if(j.type==="childList")for(const S of j.addedNodes)S.tagName==="LINK"&&S.rel==="modulepreload"&&u(S)}).observe(document,{childList:!0,subtree:!0});function a(m){const j={};return m.integrity&&(j.integrity=m.integrity),m.referrerPolicy&&(j.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?j.credentials="include":m.crossOrigin==="anonymous"?j.credentials="omit":j.credentials="same-origin",j}function u(m){if(m.ep)return;m.ep=!0;const j=a(m);fetch(m.href,j)}})();function tf(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Ci={exports:{}},Zt={},Ei={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qd;function of(){if(qd)return te;qd=1;var s=Symbol.for("react.element"),c=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),j=Symbol.for("react.provider"),S=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),E=Symbol.for("react.suspense"),Y=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),H=Symbol.iterator;function X(x){return x===null||typeof x!="object"?null:(x=H&&x[H]||x["@@iterator"],typeof x=="function"?x:null)}var ae={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},K=Object.assign,W={};function Q(x,N,Z){this.props=x,this.context=N,this.refs=W,this.updater=Z||ae}Q.prototype.isReactComponent={},Q.prototype.setState=function(x,N){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,N,"setState")},Q.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function ge(){}ge.prototype=Q.prototype;function de(x,N,Z){this.props=x,this.context=N,this.refs=W,this.updater=Z||ae}var ne=de.prototype=new ge;ne.constructor=de,K(ne,Q.prototype),ne.isPureReactComponent=!0;var _=Array.isArray,q=Object.prototype.hasOwnProperty,U={current:null},P={key:!0,ref:!0,__self:!0,__source:!0};function M(x,N,Z){var ee,ie={},se=null,ue=null;if(N!=null)for(ee in N.ref!==void 0&&(ue=N.ref),N.key!==void 0&&(se=""+N.key),N)q.call(N,ee)&&!P.hasOwnProperty(ee)&&(ie[ee]=N[ee]);var ce=arguments.length-2;if(ce===1)ie.children=Z;else if(1<ce){for(var ve=Array(ce),Pe=0;Pe<ce;Pe++)ve[Pe]=arguments[Pe+2];ie.children=ve}if(x&&x.defaultProps)for(ee in ce=x.defaultProps,ce)ie[ee]===void 0&&(ie[ee]=ce[ee]);return{$$typeof:s,type:x,key:se,ref:ue,props:ie,_owner:U.current}}function je(x,N){return{$$typeof:s,type:x.type,key:N,ref:x.ref,props:x.props,_owner:x._owner}}function Oe(x){return typeof x=="object"&&x!==null&&x.$$typeof===s}function le(x){var N={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(Z){return N[Z]})}var Le=/\/+/g;function Ce(x,N){return typeof x=="object"&&x!==null&&x.key!=null?le(""+x.key):N.toString(36)}function Ge(x,N,Z,ee,ie){var se=typeof x;(se==="undefined"||se==="boolean")&&(x=null);var ue=!1;if(x===null)ue=!0;else switch(se){case"string":case"number":ue=!0;break;case"object":switch(x.$$typeof){case s:case c:ue=!0}}if(ue)return ue=x,ie=ie(ue),x=ee===""?"."+Ce(ue,0):ee,_(ie)?(Z="",x!=null&&(Z=x.replace(Le,"$&/")+"/"),Ge(ie,N,Z,"",function(Pe){return Pe})):ie!=null&&(Oe(ie)&&(ie=je(ie,Z+(!ie.key||ue&&ue.key===ie.key?"":(""+ie.key).replace(Le,"$&/")+"/")+x)),N.push(ie)),1;if(ue=0,ee=ee===""?".":ee+":",_(x))for(var ce=0;ce<x.length;ce++){se=x[ce];var ve=ee+Ce(se,ce);ue+=Ge(se,N,Z,ve,ie)}else if(ve=X(x),typeof ve=="function")for(x=ve.call(x),ce=0;!(se=x.next()).done;)se=se.value,ve=ee+Ce(se,ce++),ue+=Ge(se,N,Z,ve,ie);else if(se==="object")throw N=String(x),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.");return ue}function er(x,N,Z){if(x==null)return x;var ee=[],ie=0;return Ge(x,ee,"","",function(se){return N.call(Z,se,ie++)}),ee}function Ye(x){if(x._status===-1){var N=x._result;N=N(),N.then(function(Z){(x._status===0||x._status===-1)&&(x._status=1,x._result=Z)},function(Z){(x._status===0||x._status===-1)&&(x._status=2,x._result=Z)}),x._status===-1&&(x._status=0,x._result=N)}if(x._status===1)return x._result.default;throw x._result}var Ne={current:null},T={transition:null},F={ReactCurrentDispatcher:Ne,ReactCurrentBatchConfig:T,ReactCurrentOwner:U};function L(){throw Error("act(...) is not supported in production builds of React.")}return te.Children={map:er,forEach:function(x,N,Z){er(x,function(){N.apply(this,arguments)},Z)},count:function(x){var N=0;return er(x,function(){N++}),N},toArray:function(x){return er(x,function(N){return N})||[]},only:function(x){if(!Oe(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},te.Component=Q,te.Fragment=a,te.Profiler=m,te.PureComponent=de,te.StrictMode=u,te.Suspense=E,te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,te.act=L,te.cloneElement=function(x,N,Z){if(x==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+x+".");var ee=K({},x.props),ie=x.key,se=x.ref,ue=x._owner;if(N!=null){if(N.ref!==void 0&&(se=N.ref,ue=U.current),N.key!==void 0&&(ie=""+N.key),x.type&&x.type.defaultProps)var ce=x.type.defaultProps;for(ve in N)q.call(N,ve)&&!P.hasOwnProperty(ve)&&(ee[ve]=N[ve]===void 0&&ce!==void 0?ce[ve]:N[ve])}var ve=arguments.length-2;if(ve===1)ee.children=Z;else if(1<ve){ce=Array(ve);for(var Pe=0;Pe<ve;Pe++)ce[Pe]=arguments[Pe+2];ee.children=ce}return{$$typeof:s,type:x.type,key:ie,ref:se,props:ee,_owner:ue}},te.createContext=function(x){return x={$$typeof:S,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},x.Provider={$$typeof:j,_context:x},x.Consumer=x},te.createElement=M,te.createFactory=function(x){var N=M.bind(null,x);return N.type=x,N},te.createRef=function(){return{current:null}},te.forwardRef=function(x){return{$$typeof:z,render:x}},te.isValidElement=Oe,te.lazy=function(x){return{$$typeof:J,_payload:{_status:-1,_result:x},_init:Ye}},te.memo=function(x,N){return{$$typeof:Y,type:x,compare:N===void 0?null:N}},te.startTransition=function(x){var N=T.transition;T.transition={};try{x()}finally{T.transition=N}},te.unstable_act=L,te.useCallback=function(x,N){return Ne.current.useCallback(x,N)},te.useContext=function(x){return Ne.current.useContext(x)},te.useDebugValue=function(){},te.useDeferredValue=function(x){return Ne.current.useDeferredValue(x)},te.useEffect=function(x,N){return Ne.current.useEffect(x,N)},te.useId=function(){return Ne.current.useId()},te.useImperativeHandle=function(x,N,Z){return Ne.current.useImperativeHandle(x,N,Z)},te.useInsertionEffect=function(x,N){return Ne.current.useInsertionEffect(x,N)},te.useLayoutEffect=function(x,N){return Ne.current.useLayoutEffect(x,N)},te.useMemo=function(x,N){return Ne.current.useMemo(x,N)},te.useReducer=function(x,N,Z){return Ne.current.useReducer(x,N,Z)},te.useRef=function(x){return Ne.current.useRef(x)},te.useState=function(x){return Ne.current.useState(x)},te.useSyncExternalStore=function(x,N,Z){return Ne.current.useSyncExternalStore(x,N,Z)},te.useTransition=function(){return Ne.current.useTransition()},te.version="18.3.1",te}var Xd;function Ki(){return Xd||(Xd=1,Ei.exports=of()),Ei.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zd;function sf(){if(Zd)return Zt;Zd=1;var s=Ki(),c=Symbol.for("react.element"),a=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,m=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j={key:!0,ref:!0,__self:!0,__source:!0};function S(z,E,Y){var J,H={},X=null,ae=null;Y!==void 0&&(X=""+Y),E.key!==void 0&&(X=""+E.key),E.ref!==void 0&&(ae=E.ref);for(J in E)u.call(E,J)&&!j.hasOwnProperty(J)&&(H[J]=E[J]);if(z&&z.defaultProps)for(J in E=z.defaultProps,E)H[J]===void 0&&(H[J]=E[J]);return{$$typeof:c,type:z,key:X,ref:ae,props:H,_owner:m.current}}return Zt.Fragment=a,Zt.jsx=S,Zt.jsxs=S,Zt}var eu;function lf(){return eu||(eu=1,Ci.exports=sf()),Ci.exports}var n=lf(),xs={},Ti={exports:{}},ar={},Ii={exports:{}},Pi={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ru;function af(){return ru||(ru=1,(function(s){function c(T,F){var L=T.length;T.push(F);e:for(;0<L;){var x=L-1>>>1,N=T[x];if(0<m(N,F))T[x]=F,T[L]=N,L=x;else break e}}function a(T){return T.length===0?null:T[0]}function u(T){if(T.length===0)return null;var F=T[0],L=T.pop();if(L!==F){T[0]=L;e:for(var x=0,N=T.length,Z=N>>>1;x<Z;){var ee=2*(x+1)-1,ie=T[ee],se=ee+1,ue=T[se];if(0>m(ie,L))se<N&&0>m(ue,ie)?(T[x]=ue,T[se]=L,x=se):(T[x]=ie,T[ee]=L,x=ee);else if(se<N&&0>m(ue,L))T[x]=ue,T[se]=L,x=se;else break e}}return F}function m(T,F){var L=T.sortIndex-F.sortIndex;return L!==0?L:T.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var j=performance;s.unstable_now=function(){return j.now()}}else{var S=Date,z=S.now();s.unstable_now=function(){return S.now()-z}}var E=[],Y=[],J=1,H=null,X=3,ae=!1,K=!1,W=!1,Q=typeof setTimeout=="function"?setTimeout:null,ge=typeof clearTimeout=="function"?clearTimeout:null,de=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ne(T){for(var F=a(Y);F!==null;){if(F.callback===null)u(Y);else if(F.startTime<=T)u(Y),F.sortIndex=F.expirationTime,c(E,F);else break;F=a(Y)}}function _(T){if(W=!1,ne(T),!K)if(a(E)!==null)K=!0,Ye(q);else{var F=a(Y);F!==null&&Ne(_,F.startTime-T)}}function q(T,F){K=!1,W&&(W=!1,ge(M),M=-1),ae=!0;var L=X;try{for(ne(F),H=a(E);H!==null&&(!(H.expirationTime>F)||T&&!le());){var x=H.callback;if(typeof x=="function"){H.callback=null,X=H.priorityLevel;var N=x(H.expirationTime<=F);F=s.unstable_now(),typeof N=="function"?H.callback=N:H===a(E)&&u(E),ne(F)}else u(E);H=a(E)}if(H!==null)var Z=!0;else{var ee=a(Y);ee!==null&&Ne(_,ee.startTime-F),Z=!1}return Z}finally{H=null,X=L,ae=!1}}var U=!1,P=null,M=-1,je=5,Oe=-1;function le(){return!(s.unstable_now()-Oe<je)}function Le(){if(P!==null){var T=s.unstable_now();Oe=T;var F=!0;try{F=P(!0,T)}finally{F?Ce():(U=!1,P=null)}}else U=!1}var Ce;if(typeof de=="function")Ce=function(){de(Le)};else if(typeof MessageChannel!="undefined"){var Ge=new MessageChannel,er=Ge.port2;Ge.port1.onmessage=Le,Ce=function(){er.postMessage(null)}}else Ce=function(){Q(Le,0)};function Ye(T){P=T,U||(U=!0,Ce())}function Ne(T,F){M=Q(function(){T(s.unstable_now())},F)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(T){T.callback=null},s.unstable_continueExecution=function(){K||ae||(K=!0,Ye(q))},s.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):je=0<T?Math.floor(1e3/T):5},s.unstable_getCurrentPriorityLevel=function(){return X},s.unstable_getFirstCallbackNode=function(){return a(E)},s.unstable_next=function(T){switch(X){case 1:case 2:case 3:var F=3;break;default:F=X}var L=X;X=F;try{return T()}finally{X=L}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(T,F){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var L=X;X=T;try{return F()}finally{X=L}},s.unstable_scheduleCallback=function(T,F,L){var x=s.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?x+L:x):L=x,T){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=L+N,T={id:J++,callback:F,priorityLevel:T,startTime:L,expirationTime:N,sortIndex:-1},L>x?(T.sortIndex=L,c(Y,T),a(E)===null&&T===a(Y)&&(W?(ge(M),M=-1):W=!0,Ne(_,L-x))):(T.sortIndex=N,c(E,T),K||ae||(K=!0,Ye(q))),T},s.unstable_shouldYield=le,s.unstable_wrapCallback=function(T){var F=X;return function(){var L=X;X=F;try{return T.apply(this,arguments)}finally{X=L}}}})(Pi)),Pi}var nu;function cf(){return nu||(nu=1,Ii.exports=af()),Ii.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tu;function df(){if(tu)return ar;tu=1;var s=Ki(),c=cf();function a(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var u=new Set,m={};function j(e,r){S(e,r),S(e+"Capture",r)}function S(e,r){for(m[e]=r,e=0;e<r.length;e++)u.add(r[e])}var z=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),E=Object.prototype.hasOwnProperty,Y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,J={},H={};function X(e){return E.call(H,e)?!0:E.call(J,e)?!1:Y.test(e)?H[e]=!0:(J[e]=!0,!1)}function ae(e,r,t,o){if(t!==null&&t.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return o?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function K(e,r,t,o){if(r===null||typeof r=="undefined"||ae(e,r,t,o))return!0;if(o)return!1;if(t!==null)switch(t.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function W(e,r,t,o,l,i,d){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=o,this.attributeNamespace=l,this.mustUseProperty=t,this.propertyName=e,this.type=r,this.sanitizeURL=i,this.removeEmptyString=d}var Q={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Q[e]=new W(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var r=e[0];Q[r]=new W(r,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){Q[e]=new W(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Q[e]=new W(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Q[e]=new W(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){Q[e]=new W(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){Q[e]=new W(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){Q[e]=new W(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){Q[e]=new W(e,5,!1,e.toLowerCase(),null,!1,!1)});var ge=/[\-:]([a-z])/g;function de(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var r=e.replace(ge,de);Q[r]=new W(r,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var r=e.replace(ge,de);Q[r]=new W(r,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var r=e.replace(ge,de);Q[r]=new W(r,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){Q[e]=new W(e,1,!1,e.toLowerCase(),null,!1,!1)}),Q.xlinkHref=new W("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){Q[e]=new W(e,1,!1,e.toLowerCase(),null,!0,!0)});function ne(e,r,t,o){var l=Q.hasOwnProperty(r)?Q[r]:null;(l!==null?l.type!==0:o||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(K(r,t,l,o)&&(t=null),o||l===null?X(r)&&(t===null?e.removeAttribute(r):e.setAttribute(r,""+t)):l.mustUseProperty?e[l.propertyName]=t===null?l.type===3?!1:"":t:(r=l.attributeName,o=l.attributeNamespace,t===null?e.removeAttribute(r):(l=l.type,t=l===3||l===4&&t===!0?"":""+t,o?e.setAttributeNS(o,r,t):e.setAttribute(r,t))))}var _=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,q=Symbol.for("react.element"),U=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),je=Symbol.for("react.profiler"),Oe=Symbol.for("react.provider"),le=Symbol.for("react.context"),Le=Symbol.for("react.forward_ref"),Ce=Symbol.for("react.suspense"),Ge=Symbol.for("react.suspense_list"),er=Symbol.for("react.memo"),Ye=Symbol.for("react.lazy"),Ne=Symbol.for("react.offscreen"),T=Symbol.iterator;function F(e){return e===null||typeof e!="object"?null:(e=T&&e[T]||e["@@iterator"],typeof e=="function"?e:null)}var L=Object.assign,x;function N(e){if(x===void 0)try{throw Error()}catch(t){var r=t.stack.trim().match(/\n( *(at )?)/);x=r&&r[1]||""}return`
`+x+e}var Z=!1;function ee(e,r){if(!e||Z)return"";Z=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(y){var o=y}Reflect.construct(e,[],r)}else{try{r.call()}catch(y){o=y}e.call(r.prototype)}else{try{throw Error()}catch(y){o=y}e()}}catch(y){if(y&&o&&typeof y.stack=="string"){for(var l=y.stack.split(`
`),i=o.stack.split(`
`),d=l.length-1,p=i.length-1;1<=d&&0<=p&&l[d]!==i[p];)p--;for(;1<=d&&0<=p;d--,p--)if(l[d]!==i[p]){if(d!==1||p!==1)do if(d--,p--,0>p||l[d]!==i[p]){var h=`
`+l[d].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=d&&0<=p);break}}}finally{Z=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?N(e):""}function ie(e){switch(e.tag){case 5:return N(e.type);case 16:return N("Lazy");case 13:return N("Suspense");case 19:return N("SuspenseList");case 0:case 2:case 15:return e=ee(e.type,!1),e;case 11:return e=ee(e.type.render,!1),e;case 1:return e=ee(e.type,!0),e;default:return""}}function se(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case P:return"Fragment";case U:return"Portal";case je:return"Profiler";case M:return"StrictMode";case Ce:return"Suspense";case Ge:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case le:return(e.displayName||"Context")+".Consumer";case Oe:return(e._context.displayName||"Context")+".Provider";case Le:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case er:return r=e.displayName||null,r!==null?r:se(e.type)||"Memo";case Ye:r=e._payload,e=e._init;try{return se(e(r))}catch{}}return null}function ue(e){var r=e.type;switch(e.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=r.render,e=e.displayName||e.name||"",r.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return se(r);case 8:return r===M?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function ce(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ve(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Pe(e){var r=ve(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),o=""+e[r];if(!e.hasOwnProperty(r)&&typeof t!="undefined"&&typeof t.get=="function"&&typeof t.set=="function"){var l=t.get,i=t.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return l.call(this)},set:function(d){o=""+d,i.call(this,d)}}),Object.defineProperty(e,r,{enumerable:t.enumerable}),{getValue:function(){return o},setValue:function(d){o=""+d},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function Yr(e){e._valueTracker||(e._valueTracker=Pe(e))}function vn(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var t=r.getValue(),o="";return e&&(o=ve(e)?e.checked?"true":"false":e.value),e=o,e!==t?(r.setValue(e),!0):!1}function br(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ls(e,r){var t=r.checked;return L({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t!=null?t:e._wrapperState.initialChecked})}function oa(e,r){var t=r.defaultValue==null?"":r.defaultValue,o=r.checked!=null?r.checked:r.defaultChecked;t=ce(r.value!=null?r.value:t),e._wrapperState={initialChecked:o,initialValue:t,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function sa(e,r){r=r.checked,r!=null&&ne(e,"checked",r,!1)}function Bs(e,r){sa(e,r);var t=ce(r.value),o=r.type;if(t!=null)o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}r.hasOwnProperty("value")?Os(e,r.type,t):r.hasOwnProperty("defaultValue")&&Os(e,r.type,ce(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(e.defaultChecked=!!r.defaultChecked)}function la(e,r,t){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var o=r.type;if(!(o!=="submit"&&o!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+e._wrapperState.initialValue,t||r===e.value||(e.value=r),e.defaultValue=r}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Os(e,r,t){(r!=="number"||br(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var ft=Array.isArray;function Rn(e,r,t,o){if(e=e.options,r){r={};for(var l=0;l<t.length;l++)r["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=r.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&o&&(e[t].defaultSelected=!0)}else{for(t=""+ce(t),r=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,o&&(e[l].defaultSelected=!0);return}r!==null||e[l].disabled||(r=e[l])}r!==null&&(r.selected=!0)}}function As(e,r){if(r.dangerouslySetInnerHTML!=null)throw Error(a(91));return L({},r,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ia(e,r){var t=r.value;if(t==null){if(t=r.children,r=r.defaultValue,t!=null){if(r!=null)throw Error(a(92));if(ft(t)){if(1<t.length)throw Error(a(93));t=t[0]}r=t}r==null&&(r=""),t=r}e._wrapperState={initialValue:ce(t)}}function aa(e,r){var t=ce(r.value),o=ce(r.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),r.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),o!=null&&(e.defaultValue=""+o)}function ca(e){var r=e.textContent;r===e._wrapperState.initialValue&&r!==""&&r!==null&&(e.value=r)}function da(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Rs(e,r){return e==null||e==="http://www.w3.org/1999/xhtml"?da(r):e==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var io,ua=(function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(r,t,o,l){MSApp.execUnsafeLocalFunction(function(){return e(r,t,o,l)})}:e})(function(e,r){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=r;else{for(io=io||document.createElement("div"),io.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=io.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;r.firstChild;)e.appendChild(r.firstChild)}});function mt(e,r){if(r){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=r;return}}e.textContent=r}var xt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ip=["Webkit","ms","Moz","O"];Object.keys(xt).forEach(function(e){ip.forEach(function(r){r=r+e.charAt(0).toUpperCase()+e.substring(1),xt[r]=xt[e]})});function pa(e,r,t){return r==null||typeof r=="boolean"||r===""?"":t||typeof r!="number"||r===0||xt.hasOwnProperty(e)&&xt[e]?(""+r).trim():r+"px"}function ha(e,r){e=e.style;for(var t in r)if(r.hasOwnProperty(t)){var o=t.indexOf("--")===0,l=pa(t,r[t],o);t==="float"&&(t="cssFloat"),o?e.setProperty(t,l):e[t]=l}}var ap=L({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ms(e,r){if(r){if(ap[e]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(a(137,e));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(a(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(a(61))}if(r.style!=null&&typeof r.style!="object")throw Error(a(62))}}function Ds(e,r){if(e.indexOf("-")===-1)return typeof r.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fs=null;function Hs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ws=null,Mn=null,Dn=null;function fa(e){if(e=Mt(e)){if(typeof Ws!="function")throw Error(a(280));var r=e.stateNode;r&&(r=zo(r),Ws(e.stateNode,e.type,r))}}function ma(e){Mn?Dn?Dn.push(e):Dn=[e]:Mn=e}function xa(){if(Mn){var e=Mn,r=Dn;if(Dn=Mn=null,fa(e),r)for(e=0;e<r.length;e++)fa(r[e])}}function ga(e,r){return e(r)}function va(){}var Us=!1;function ya(e,r,t){if(Us)return e(r,t);Us=!0;try{return ga(e,r,t)}finally{Us=!1,(Mn!==null||Dn!==null)&&(va(),xa())}}function gt(e,r){var t=e.stateNode;if(t===null)return null;var o=zo(t);if(o===null)return null;t=o[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(a(231,r,typeof t));return t}var $s=!1;if(z)try{var vt={};Object.defineProperty(vt,"passive",{get:function(){$s=!0}}),window.addEventListener("test",vt,vt),window.removeEventListener("test",vt,vt)}catch{$s=!1}function cp(e,r,t,o,l,i,d,p,h){var y=Array.prototype.slice.call(arguments,3);try{r.apply(t,y)}catch(b){this.onError(b)}}var yt=!1,ao=null,co=!1,Vs=null,dp={onError:function(e){yt=!0,ao=e}};function up(e,r,t,o,l,i,d,p,h){yt=!1,ao=null,cp.apply(dp,arguments)}function pp(e,r,t,o,l,i,d,p,h){if(up.apply(this,arguments),yt){if(yt){var y=ao;yt=!1,ao=null}else throw Error(a(198));co||(co=!0,Vs=y)}}function yn(e){var r=e,t=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,(r.flags&4098)!==0&&(t=r.return),e=r.return;while(e)}return r.tag===3?t:null}function ja(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function Na(e){if(yn(e)!==e)throw Error(a(188))}function hp(e){var r=e.alternate;if(!r){if(r=yn(e),r===null)throw Error(a(188));return r!==e?null:e}for(var t=e,o=r;;){var l=t.return;if(l===null)break;var i=l.alternate;if(i===null){if(o=l.return,o!==null){t=o;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===t)return Na(l),e;if(i===o)return Na(l),r;i=i.sibling}throw Error(a(188))}if(t.return!==o.return)t=l,o=i;else{for(var d=!1,p=l.child;p;){if(p===t){d=!0,t=l,o=i;break}if(p===o){d=!0,o=l,t=i;break}p=p.sibling}if(!d){for(p=i.child;p;){if(p===t){d=!0,t=i,o=l;break}if(p===o){d=!0,o=i,t=l;break}p=p.sibling}if(!d)throw Error(a(189))}}if(t.alternate!==o)throw Error(a(190))}if(t.tag!==3)throw Error(a(188));return t.stateNode.current===t?e:r}function wa(e){return e=hp(e),e!==null?ba(e):null}function ba(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var r=ba(e);if(r!==null)return r;e=e.sibling}return null}var ka=c.unstable_scheduleCallback,Sa=c.unstable_cancelCallback,fp=c.unstable_shouldYield,mp=c.unstable_requestPaint,Ae=c.unstable_now,xp=c.unstable_getCurrentPriorityLevel,Js=c.unstable_ImmediatePriority,Ca=c.unstable_UserBlockingPriority,uo=c.unstable_NormalPriority,gp=c.unstable_LowPriority,Ea=c.unstable_IdlePriority,po=null,Br=null;function vp(e){if(Br&&typeof Br.onCommitFiberRoot=="function")try{Br.onCommitFiberRoot(po,e,void 0,(e.current.flags&128)===128)}catch{}}var kr=Math.clz32?Math.clz32:Np,yp=Math.log,jp=Math.LN2;function Np(e){return e>>>=0,e===0?32:31-(yp(e)/jp|0)|0}var ho=64,fo=4194304;function jt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function mo(e,r){var t=e.pendingLanes;if(t===0)return 0;var o=0,l=e.suspendedLanes,i=e.pingedLanes,d=t&268435455;if(d!==0){var p=d&~l;p!==0?o=jt(p):(i&=d,i!==0&&(o=jt(i)))}else d=t&~l,d!==0?o=jt(d):i!==0&&(o=jt(i));if(o===0)return 0;if(r!==0&&r!==o&&(r&l)===0&&(l=o&-o,i=r&-r,l>=i||l===16&&(i&4194240)!==0))return r;if((o&4)!==0&&(o|=t&16),r=e.entangledLanes,r!==0)for(e=e.entanglements,r&=o;0<r;)t=31-kr(r),l=1<<t,o|=e[t],r&=~l;return o}function wp(e,r){switch(e){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bp(e,r){for(var t=e.suspendedLanes,o=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var d=31-kr(i),p=1<<d,h=l[d];h===-1?((p&t)===0||(p&o)!==0)&&(l[d]=wp(p,r)):h<=r&&(e.expiredLanes|=p),i&=~p}}function Qs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ta(){var e=ho;return ho<<=1,(ho&4194240)===0&&(ho=64),e}function Gs(e){for(var r=[],t=0;31>t;t++)r.push(e);return r}function Nt(e,r,t){e.pendingLanes|=r,r!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,r=31-kr(r),e[r]=t}function kp(e,r){var t=e.pendingLanes&~r;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=r,e.mutableReadLanes&=r,e.entangledLanes&=r,r=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<t;){var l=31-kr(t),i=1<<l;r[l]=0,o[l]=-1,e[l]=-1,t&=~i}}function Ys(e,r){var t=e.entangledLanes|=r;for(e=e.entanglements;t;){var o=31-kr(t),l=1<<o;l&r|e[o]&r&&(e[o]|=r),t&=~l}}var ye=0;function Ia(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Pa,Ks,za,_a,La,qs=!1,xo=[],Kr=null,qr=null,Xr=null,wt=new Map,bt=new Map,Zr=[],Sp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ba(e,r){switch(e){case"focusin":case"focusout":Kr=null;break;case"dragenter":case"dragleave":qr=null;break;case"mouseover":case"mouseout":Xr=null;break;case"pointerover":case"pointerout":wt.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":bt.delete(r.pointerId)}}function kt(e,r,t,o,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:r,domEventName:t,eventSystemFlags:o,nativeEvent:i,targetContainers:[l]},r!==null&&(r=Mt(r),r!==null&&Ks(r)),e):(e.eventSystemFlags|=o,r=e.targetContainers,l!==null&&r.indexOf(l)===-1&&r.push(l),e)}function Cp(e,r,t,o,l){switch(r){case"focusin":return Kr=kt(Kr,e,r,t,o,l),!0;case"dragenter":return qr=kt(qr,e,r,t,o,l),!0;case"mouseover":return Xr=kt(Xr,e,r,t,o,l),!0;case"pointerover":var i=l.pointerId;return wt.set(i,kt(wt.get(i)||null,e,r,t,o,l)),!0;case"gotpointercapture":return i=l.pointerId,bt.set(i,kt(bt.get(i)||null,e,r,t,o,l)),!0}return!1}function Oa(e){var r=jn(e.target);if(r!==null){var t=yn(r);if(t!==null){if(r=t.tag,r===13){if(r=ja(t),r!==null){e.blockedOn=r,La(e.priority,function(){za(t)});return}}else if(r===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function go(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var t=Zs(e.domEventName,e.eventSystemFlags,r[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var o=new t.constructor(t.type,t);Fs=o,t.target.dispatchEvent(o),Fs=null}else return r=Mt(t),r!==null&&Ks(r),e.blockedOn=t,!1;r.shift()}return!0}function Aa(e,r,t){go(e)&&t.delete(r)}function Ep(){qs=!1,Kr!==null&&go(Kr)&&(Kr=null),qr!==null&&go(qr)&&(qr=null),Xr!==null&&go(Xr)&&(Xr=null),wt.forEach(Aa),bt.forEach(Aa)}function St(e,r){e.blockedOn===r&&(e.blockedOn=null,qs||(qs=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,Ep)))}function Ct(e){function r(l){return St(l,e)}if(0<xo.length){St(xo[0],e);for(var t=1;t<xo.length;t++){var o=xo[t];o.blockedOn===e&&(o.blockedOn=null)}}for(Kr!==null&&St(Kr,e),qr!==null&&St(qr,e),Xr!==null&&St(Xr,e),wt.forEach(r),bt.forEach(r),t=0;t<Zr.length;t++)o=Zr[t],o.blockedOn===e&&(o.blockedOn=null);for(;0<Zr.length&&(t=Zr[0],t.blockedOn===null);)Oa(t),t.blockedOn===null&&Zr.shift()}var Fn=_.ReactCurrentBatchConfig,vo=!0;function Tp(e,r,t,o){var l=ye,i=Fn.transition;Fn.transition=null;try{ye=1,Xs(e,r,t,o)}finally{ye=l,Fn.transition=i}}function Ip(e,r,t,o){var l=ye,i=Fn.transition;Fn.transition=null;try{ye=4,Xs(e,r,t,o)}finally{ye=l,Fn.transition=i}}function Xs(e,r,t,o){if(vo){var l=Zs(e,r,t,o);if(l===null)xl(e,r,o,yo,t),Ba(e,o);else if(Cp(l,e,r,t,o))o.stopPropagation();else if(Ba(e,o),r&4&&-1<Sp.indexOf(e)){for(;l!==null;){var i=Mt(l);if(i!==null&&Pa(i),i=Zs(e,r,t,o),i===null&&xl(e,r,o,yo,t),i===l)break;l=i}l!==null&&o.stopPropagation()}else xl(e,r,o,null,t)}}var yo=null;function Zs(e,r,t,o){if(yo=null,e=Hs(o),e=jn(e),e!==null)if(r=yn(e),r===null)e=null;else if(t=r.tag,t===13){if(e=ja(r),e!==null)return e;e=null}else if(t===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null);return yo=e,null}function Ra(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(xp()){case Js:return 1;case Ca:return 4;case uo:case gp:return 16;case Ea:return 536870912;default:return 16}default:return 16}}var en=null,el=null,jo=null;function Ma(){if(jo)return jo;var e,r=el,t=r.length,o,l="value"in en?en.value:en.textContent,i=l.length;for(e=0;e<t&&r[e]===l[e];e++);var d=t-e;for(o=1;o<=d&&r[t-o]===l[i-o];o++);return jo=l.slice(e,1<o?1-o:void 0)}function No(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function wo(){return!0}function Da(){return!1}function dr(e){function r(t,o,l,i,d){this._reactName=t,this._targetInst=l,this.type=o,this.nativeEvent=i,this.target=d,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(t=e[p],this[p]=t?t(i):i[p]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?wo:Da,this.isPropagationStopped=Da,this}return L(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=wo)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=wo)},persist:function(){},isPersistent:wo}),r}var Hn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rl=dr(Hn),Et=L({},Hn,{view:0,detail:0}),Pp=dr(Et),nl,tl,Tt,bo=L({},Et,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Tt&&(Tt&&e.type==="mousemove"?(nl=e.screenX-Tt.screenX,tl=e.screenY-Tt.screenY):tl=nl=0,Tt=e),nl)},movementY:function(e){return"movementY"in e?e.movementY:tl}}),Fa=dr(bo),zp=L({},bo,{dataTransfer:0}),_p=dr(zp),Lp=L({},Et,{relatedTarget:0}),ol=dr(Lp),Bp=L({},Hn,{animationName:0,elapsedTime:0,pseudoElement:0}),Op=dr(Bp),Ap=L({},Hn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Rp=dr(Ap),Mp=L({},Hn,{data:0}),Ha=dr(Mp),Dp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wp(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=Hp[e])?!!r[e]:!1}function sl(){return Wp}var Up=L({},Et,{key:function(e){if(e.key){var r=Dp[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=No(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Fp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sl,charCode:function(e){return e.type==="keypress"?No(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?No(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),$p=dr(Up),Vp=L({},bo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wa=dr(Vp),Jp=L({},Et,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sl}),Qp=dr(Jp),Gp=L({},Hn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yp=dr(Gp),Kp=L({},bo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),qp=dr(Kp),Xp=[9,13,27,32],ll=z&&"CompositionEvent"in window,It=null;z&&"documentMode"in document&&(It=document.documentMode);var Zp=z&&"TextEvent"in window&&!It,Ua=z&&(!ll||It&&8<It&&11>=It),$a=" ",Va=!1;function Ja(e,r){switch(e){case"keyup":return Xp.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qa(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wn=!1;function eh(e,r){switch(e){case"compositionend":return Qa(r);case"keypress":return r.which!==32?null:(Va=!0,$a);case"textInput":return e=r.data,e===$a&&Va?null:e;default:return null}}function rh(e,r){if(Wn)return e==="compositionend"||!ll&&Ja(e,r)?(e=Ma(),jo=el=en=null,Wn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Ua&&r.locale!=="ko"?null:r.data;default:return null}}var nh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ga(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!nh[e.type]:r==="textarea"}function Ya(e,r,t,o){ma(o),r=To(r,"onChange"),0<r.length&&(t=new rl("onChange","change",null,t,o),e.push({event:t,listeners:r}))}var Pt=null,zt=null;function th(e){hc(e,0)}function ko(e){var r=Qn(e);if(vn(r))return e}function oh(e,r){if(e==="change")return r}var Ka=!1;if(z){var il;if(z){var al="oninput"in document;if(!al){var qa=document.createElement("div");qa.setAttribute("oninput","return;"),al=typeof qa.oninput=="function"}il=al}else il=!1;Ka=il&&(!document.documentMode||9<document.documentMode)}function Xa(){Pt&&(Pt.detachEvent("onpropertychange",Za),zt=Pt=null)}function Za(e){if(e.propertyName==="value"&&ko(zt)){var r=[];Ya(r,zt,e,Hs(e)),ya(th,r)}}function sh(e,r,t){e==="focusin"?(Xa(),Pt=r,zt=t,Pt.attachEvent("onpropertychange",Za)):e==="focusout"&&Xa()}function lh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ko(zt)}function ih(e,r){if(e==="click")return ko(r)}function ah(e,r){if(e==="input"||e==="change")return ko(r)}function ch(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var Sr=typeof Object.is=="function"?Object.is:ch;function _t(e,r){if(Sr(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var t=Object.keys(e),o=Object.keys(r);if(t.length!==o.length)return!1;for(o=0;o<t.length;o++){var l=t[o];if(!E.call(r,l)||!Sr(e[l],r[l]))return!1}return!0}function ec(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function rc(e,r){var t=ec(e);e=0;for(var o;t;){if(t.nodeType===3){if(o=e+t.textContent.length,e<=r&&o>=r)return{node:t,offset:r-e};e=o}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=ec(t)}}function nc(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?nc(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function tc(){for(var e=window,r=br();r instanceof e.HTMLIFrameElement;){try{var t=typeof r.contentWindow.location.href=="string"}catch{t=!1}if(t)e=r.contentWindow;else break;r=br(e.document)}return r}function cl(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}function dh(e){var r=tc(),t=e.focusedElem,o=e.selectionRange;if(r!==t&&t&&t.ownerDocument&&nc(t.ownerDocument.documentElement,t)){if(o!==null&&cl(t)){if(r=o.start,e=o.end,e===void 0&&(e=r),"selectionStart"in t)t.selectionStart=r,t.selectionEnd=Math.min(e,t.value.length);else if(e=(r=t.ownerDocument||document)&&r.defaultView||window,e.getSelection){e=e.getSelection();var l=t.textContent.length,i=Math.min(o.start,l);o=o.end===void 0?i:Math.min(o.end,l),!e.extend&&i>o&&(l=o,o=i,i=l),l=rc(t,i);var d=rc(t,o);l&&d&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==d.node||e.focusOffset!==d.offset)&&(r=r.createRange(),r.setStart(l.node,l.offset),e.removeAllRanges(),i>o?(e.addRange(r),e.extend(d.node,d.offset)):(r.setEnd(d.node,d.offset),e.addRange(r)))}}for(r=[],e=t;e=e.parentNode;)e.nodeType===1&&r.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<r.length;t++)e=r[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var uh=z&&"documentMode"in document&&11>=document.documentMode,Un=null,dl=null,Lt=null,ul=!1;function oc(e,r,t){var o=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;ul||Un==null||Un!==br(o)||(o=Un,"selectionStart"in o&&cl(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Lt&&_t(Lt,o)||(Lt=o,o=To(dl,"onSelect"),0<o.length&&(r=new rl("onSelect","select",null,r,t),e.push({event:r,listeners:o}),r.target=Un)))}function So(e,r){var t={};return t[e.toLowerCase()]=r.toLowerCase(),t["Webkit"+e]="webkit"+r,t["Moz"+e]="moz"+r,t}var $n={animationend:So("Animation","AnimationEnd"),animationiteration:So("Animation","AnimationIteration"),animationstart:So("Animation","AnimationStart"),transitionend:So("Transition","TransitionEnd")},pl={},sc={};z&&(sc=document.createElement("div").style,"AnimationEvent"in window||(delete $n.animationend.animation,delete $n.animationiteration.animation,delete $n.animationstart.animation),"TransitionEvent"in window||delete $n.transitionend.transition);function Co(e){if(pl[e])return pl[e];if(!$n[e])return e;var r=$n[e],t;for(t in r)if(r.hasOwnProperty(t)&&t in sc)return pl[e]=r[t];return e}var lc=Co("animationend"),ic=Co("animationiteration"),ac=Co("animationstart"),cc=Co("transitionend"),dc=new Map,uc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rn(e,r){dc.set(e,r),j(r,[e])}for(var hl=0;hl<uc.length;hl++){var fl=uc[hl],ph=fl.toLowerCase(),hh=fl[0].toUpperCase()+fl.slice(1);rn(ph,"on"+hh)}rn(lc,"onAnimationEnd"),rn(ic,"onAnimationIteration"),rn(ac,"onAnimationStart"),rn("dblclick","onDoubleClick"),rn("focusin","onFocus"),rn("focusout","onBlur"),rn(cc,"onTransitionEnd"),S("onMouseEnter",["mouseout","mouseover"]),S("onMouseLeave",["mouseout","mouseover"]),S("onPointerEnter",["pointerout","pointerover"]),S("onPointerLeave",["pointerout","pointerover"]),j("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),j("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),j("onBeforeInput",["compositionend","keypress","textInput","paste"]),j("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fh=new Set("cancel close invalid load scroll toggle".split(" ").concat(Bt));function pc(e,r,t){var o=e.type||"unknown-event";e.currentTarget=t,pp(o,r,void 0,e),e.currentTarget=null}function hc(e,r){r=(r&4)!==0;for(var t=0;t<e.length;t++){var o=e[t],l=o.event;o=o.listeners;e:{var i=void 0;if(r)for(var d=o.length-1;0<=d;d--){var p=o[d],h=p.instance,y=p.currentTarget;if(p=p.listener,h!==i&&l.isPropagationStopped())break e;pc(l,p,y),i=h}else for(d=0;d<o.length;d++){if(p=o[d],h=p.instance,y=p.currentTarget,p=p.listener,h!==i&&l.isPropagationStopped())break e;pc(l,p,y),i=h}}}if(co)throw e=Vs,co=!1,Vs=null,e}function be(e,r){var t=r[wl];t===void 0&&(t=r[wl]=new Set);var o=e+"__bubble";t.has(o)||(fc(r,e,2,!1),t.add(o))}function ml(e,r,t){var o=0;r&&(o|=4),fc(t,e,o,r)}var Eo="_reactListening"+Math.random().toString(36).slice(2);function Ot(e){if(!e[Eo]){e[Eo]=!0,u.forEach(function(t){t!=="selectionchange"&&(fh.has(t)||ml(t,!1,e),ml(t,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[Eo]||(r[Eo]=!0,ml("selectionchange",!1,r))}}function fc(e,r,t,o){switch(Ra(r)){case 1:var l=Tp;break;case 4:l=Ip;break;default:l=Xs}t=l.bind(null,r,t,e),l=void 0,!$s||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(l=!0),o?l!==void 0?e.addEventListener(r,t,{capture:!0,passive:l}):e.addEventListener(r,t,!0):l!==void 0?e.addEventListener(r,t,{passive:l}):e.addEventListener(r,t,!1)}function xl(e,r,t,o,l){var i=o;if((r&1)===0&&(r&2)===0&&o!==null)e:for(;;){if(o===null)return;var d=o.tag;if(d===3||d===4){var p=o.stateNode.containerInfo;if(p===l||p.nodeType===8&&p.parentNode===l)break;if(d===4)for(d=o.return;d!==null;){var h=d.tag;if((h===3||h===4)&&(h=d.stateNode.containerInfo,h===l||h.nodeType===8&&h.parentNode===l))return;d=d.return}for(;p!==null;){if(d=jn(p),d===null)return;if(h=d.tag,h===5||h===6){o=i=d;continue e}p=p.parentNode}}o=o.return}ya(function(){var y=i,b=Hs(t),k=[];e:{var w=dc.get(e);if(w!==void 0){var B=rl,A=e;switch(e){case"keypress":if(No(t)===0)break e;case"keydown":case"keyup":B=$p;break;case"focusin":A="focus",B=ol;break;case"focusout":A="blur",B=ol;break;case"beforeblur":case"afterblur":B=ol;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":B=Fa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":B=_p;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":B=Qp;break;case lc:case ic:case ac:B=Op;break;case cc:B=Yp;break;case"scroll":B=Pp;break;case"wheel":B=qp;break;case"copy":case"cut":case"paste":B=Rp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":B=Wa}var R=(r&4)!==0,Re=!R&&e==="scroll",g=R?w!==null?w+"Capture":null:w;R=[];for(var f=y,v;f!==null;){v=f;var C=v.stateNode;if(v.tag===5&&C!==null&&(v=C,g!==null&&(C=gt(f,g),C!=null&&R.push(At(f,C,v)))),Re)break;f=f.return}0<R.length&&(w=new B(w,A,null,t,b),k.push({event:w,listeners:R}))}}if((r&7)===0){e:{if(w=e==="mouseover"||e==="pointerover",B=e==="mouseout"||e==="pointerout",w&&t!==Fs&&(A=t.relatedTarget||t.fromElement)&&(jn(A)||A[Dr]))break e;if((B||w)&&(w=b.window===b?b:(w=b.ownerDocument)?w.defaultView||w.parentWindow:window,B?(A=t.relatedTarget||t.toElement,B=y,A=A?jn(A):null,A!==null&&(Re=yn(A),A!==Re||A.tag!==5&&A.tag!==6)&&(A=null)):(B=null,A=y),B!==A)){if(R=Fa,C="onMouseLeave",g="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(R=Wa,C="onPointerLeave",g="onPointerEnter",f="pointer"),Re=B==null?w:Qn(B),v=A==null?w:Qn(A),w=new R(C,f+"leave",B,t,b),w.target=Re,w.relatedTarget=v,C=null,jn(b)===y&&(R=new R(g,f+"enter",A,t,b),R.target=v,R.relatedTarget=Re,C=R),Re=C,B&&A)r:{for(R=B,g=A,f=0,v=R;v;v=Vn(v))f++;for(v=0,C=g;C;C=Vn(C))v++;for(;0<f-v;)R=Vn(R),f--;for(;0<v-f;)g=Vn(g),v--;for(;f--;){if(R===g||g!==null&&R===g.alternate)break r;R=Vn(R),g=Vn(g)}R=null}else R=null;B!==null&&mc(k,w,B,R,!1),A!==null&&Re!==null&&mc(k,Re,A,R,!0)}}e:{if(w=y?Qn(y):window,B=w.nodeName&&w.nodeName.toLowerCase(),B==="select"||B==="input"&&w.type==="file")var D=oh;else if(Ga(w))if(Ka)D=ah;else{D=lh;var $=sh}else(B=w.nodeName)&&B.toLowerCase()==="input"&&(w.type==="checkbox"||w.type==="radio")&&(D=ih);if(D&&(D=D(e,y))){Ya(k,D,t,b);break e}$&&$(e,w,y),e==="focusout"&&($=w._wrapperState)&&$.controlled&&w.type==="number"&&Os(w,"number",w.value)}switch($=y?Qn(y):window,e){case"focusin":(Ga($)||$.contentEditable==="true")&&(Un=$,dl=y,Lt=null);break;case"focusout":Lt=dl=Un=null;break;case"mousedown":ul=!0;break;case"contextmenu":case"mouseup":case"dragend":ul=!1,oc(k,t,b);break;case"selectionchange":if(uh)break;case"keydown":case"keyup":oc(k,t,b)}var V;if(ll)e:{switch(e){case"compositionstart":var G="onCompositionStart";break e;case"compositionend":G="onCompositionEnd";break e;case"compositionupdate":G="onCompositionUpdate";break e}G=void 0}else Wn?Ja(e,t)&&(G="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(G="onCompositionStart");G&&(Ua&&t.locale!=="ko"&&(Wn||G!=="onCompositionStart"?G==="onCompositionEnd"&&Wn&&(V=Ma()):(en=b,el="value"in en?en.value:en.textContent,Wn=!0)),$=To(y,G),0<$.length&&(G=new Ha(G,e,null,t,b),k.push({event:G,listeners:$}),V?G.data=V:(V=Qa(t),V!==null&&(G.data=V)))),(V=Zp?eh(e,t):rh(e,t))&&(y=To(y,"onBeforeInput"),0<y.length&&(b=new Ha("onBeforeInput","beforeinput",null,t,b),k.push({event:b,listeners:y}),b.data=V))}hc(k,r)})}function At(e,r,t){return{instance:e,listener:r,currentTarget:t}}function To(e,r){for(var t=r+"Capture",o=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=gt(e,t),i!=null&&o.unshift(At(e,i,l)),i=gt(e,r),i!=null&&o.push(At(e,i,l))),e=e.return}return o}function Vn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function mc(e,r,t,o,l){for(var i=r._reactName,d=[];t!==null&&t!==o;){var p=t,h=p.alternate,y=p.stateNode;if(h!==null&&h===o)break;p.tag===5&&y!==null&&(p=y,l?(h=gt(t,i),h!=null&&d.unshift(At(t,h,p))):l||(h=gt(t,i),h!=null&&d.push(At(t,h,p)))),t=t.return}d.length!==0&&e.push({event:r,listeners:d})}var mh=/\r\n?/g,xh=/\u0000|\uFFFD/g;function xc(e){return(typeof e=="string"?e:""+e).replace(mh,`
`).replace(xh,"")}function Io(e,r,t){if(r=xc(r),xc(e)!==r&&t)throw Error(a(425))}function Po(){}var gl=null,vl=null;function yl(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var jl=typeof setTimeout=="function"?setTimeout:void 0,gh=typeof clearTimeout=="function"?clearTimeout:void 0,gc=typeof Promise=="function"?Promise:void 0,vh=typeof queueMicrotask=="function"?queueMicrotask:typeof gc!="undefined"?function(e){return gc.resolve(null).then(e).catch(yh)}:jl;function yh(e){setTimeout(function(){throw e})}function Nl(e,r){var t=r,o=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(o===0){e.removeChild(l),Ct(r);return}o--}else t!=="$"&&t!=="$?"&&t!=="$!"||o++;t=l}while(t);Ct(r)}function nn(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return e}function vc(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(r===0)return e;r--}else t==="/$"&&r++}e=e.previousSibling}return null}var Jn=Math.random().toString(36).slice(2),Or="__reactFiber$"+Jn,Rt="__reactProps$"+Jn,Dr="__reactContainer$"+Jn,wl="__reactEvents$"+Jn,jh="__reactListeners$"+Jn,Nh="__reactHandles$"+Jn;function jn(e){var r=e[Or];if(r)return r;for(var t=e.parentNode;t;){if(r=t[Dr]||t[Or]){if(t=r.alternate,r.child!==null||t!==null&&t.child!==null)for(e=vc(e);e!==null;){if(t=e[Or])return t;e=vc(e)}return r}e=t,t=e.parentNode}return null}function Mt(e){return e=e[Or]||e[Dr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Qn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(a(33))}function zo(e){return e[Rt]||null}var bl=[],Gn=-1;function tn(e){return{current:e}}function ke(e){0>Gn||(e.current=bl[Gn],bl[Gn]=null,Gn--)}function we(e,r){Gn++,bl[Gn]=e.current,e.current=r}var on={},Ke=tn(on),tr=tn(!1),Nn=on;function Yn(e,r){var t=e.type.contextTypes;if(!t)return on;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===r)return o.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in t)l[i]=r[i];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=l),l}function or(e){return e=e.childContextTypes,e!=null}function _o(){ke(tr),ke(Ke)}function yc(e,r,t){if(Ke.current!==on)throw Error(a(168));we(Ke,r),we(tr,t)}function jc(e,r,t){var o=e.stateNode;if(r=r.childContextTypes,typeof o.getChildContext!="function")return t;o=o.getChildContext();for(var l in o)if(!(l in r))throw Error(a(108,ue(e)||"Unknown",l));return L({},t,o)}function Lo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||on,Nn=Ke.current,we(Ke,e),we(tr,tr.current),!0}function Nc(e,r,t){var o=e.stateNode;if(!o)throw Error(a(169));t?(e=jc(e,r,Nn),o.__reactInternalMemoizedMergedChildContext=e,ke(tr),ke(Ke),we(Ke,e)):ke(tr),we(tr,t)}var Fr=null,Bo=!1,kl=!1;function wc(e){Fr===null?Fr=[e]:Fr.push(e)}function wh(e){Bo=!0,wc(e)}function sn(){if(!kl&&Fr!==null){kl=!0;var e=0,r=ye;try{var t=Fr;for(ye=1;e<t.length;e++){var o=t[e];do o=o(!0);while(o!==null)}Fr=null,Bo=!1}catch(l){throw Fr!==null&&(Fr=Fr.slice(e+1)),ka(Js,sn),l}finally{ye=r,kl=!1}}return null}var Kn=[],qn=0,Oo=null,Ao=0,xr=[],gr=0,wn=null,Hr=1,Wr="";function bn(e,r){Kn[qn++]=Ao,Kn[qn++]=Oo,Oo=e,Ao=r}function bc(e,r,t){xr[gr++]=Hr,xr[gr++]=Wr,xr[gr++]=wn,wn=e;var o=Hr;e=Wr;var l=32-kr(o)-1;o&=~(1<<l),t+=1;var i=32-kr(r)+l;if(30<i){var d=l-l%5;i=(o&(1<<d)-1).toString(32),o>>=d,l-=d,Hr=1<<32-kr(r)+l|t<<l|o,Wr=i+e}else Hr=1<<i|t<<l|o,Wr=e}function Sl(e){e.return!==null&&(bn(e,1),bc(e,1,0))}function Cl(e){for(;e===Oo;)Oo=Kn[--qn],Kn[qn]=null,Ao=Kn[--qn],Kn[qn]=null;for(;e===wn;)wn=xr[--gr],xr[gr]=null,Wr=xr[--gr],xr[gr]=null,Hr=xr[--gr],xr[gr]=null}var ur=null,pr=null,Ee=!1,Cr=null;function kc(e,r){var t=Nr(5,null,null,0);t.elementType="DELETED",t.stateNode=r,t.return=e,r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)}function Sc(e,r){switch(e.tag){case 5:var t=e.type;return r=r.nodeType!==1||t.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(e.stateNode=r,ur=e,pr=nn(r.firstChild),!0):!1;case 6:return r=e.pendingProps===""||r.nodeType!==3?null:r,r!==null?(e.stateNode=r,ur=e,pr=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(t=wn!==null?{id:Hr,overflow:Wr}:null,e.memoizedState={dehydrated:r,treeContext:t,retryLane:1073741824},t=Nr(18,null,null,0),t.stateNode=r,t.return=e,e.child=t,ur=e,pr=null,!0):!1;default:return!1}}function El(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Tl(e){if(Ee){var r=pr;if(r){var t=r;if(!Sc(e,r)){if(El(e))throw Error(a(418));r=nn(t.nextSibling);var o=ur;r&&Sc(e,r)?kc(o,t):(e.flags=e.flags&-4097|2,Ee=!1,ur=e)}}else{if(El(e))throw Error(a(418));e.flags=e.flags&-4097|2,Ee=!1,ur=e}}}function Cc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ur=e}function Ro(e){if(e!==ur)return!1;if(!Ee)return Cc(e),Ee=!0,!1;var r;if((r=e.tag!==3)&&!(r=e.tag!==5)&&(r=e.type,r=r!=="head"&&r!=="body"&&!yl(e.type,e.memoizedProps)),r&&(r=pr)){if(El(e))throw Ec(),Error(a(418));for(;r;)kc(e,r),r=nn(r.nextSibling)}if(Cc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));e:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(r===0){pr=nn(e.nextSibling);break e}r--}else t!=="$"&&t!=="$!"&&t!=="$?"||r++}e=e.nextSibling}pr=null}}else pr=ur?nn(e.stateNode.nextSibling):null;return!0}function Ec(){for(var e=pr;e;)e=nn(e.nextSibling)}function Xn(){pr=ur=null,Ee=!1}function Il(e){Cr===null?Cr=[e]:Cr.push(e)}var bh=_.ReactCurrentBatchConfig;function Dt(e,r,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(a(309));var o=t.stateNode}if(!o)throw Error(a(147,e));var l=o,i=""+e;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===i?r.ref:(r=function(d){var p=l.refs;d===null?delete p[i]:p[i]=d},r._stringRef=i,r)}if(typeof e!="string")throw Error(a(284));if(!t._owner)throw Error(a(290,e))}return e}function Mo(e,r){throw e=Object.prototype.toString.call(r),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e))}function Tc(e){var r=e._init;return r(e._payload)}function Ic(e){function r(g,f){if(e){var v=g.deletions;v===null?(g.deletions=[f],g.flags|=16):v.push(f)}}function t(g,f){if(!e)return null;for(;f!==null;)r(g,f),f=f.sibling;return null}function o(g,f){for(g=new Map;f!==null;)f.key!==null?g.set(f.key,f):g.set(f.index,f),f=f.sibling;return g}function l(g,f){return g=fn(g,f),g.index=0,g.sibling=null,g}function i(g,f,v){return g.index=v,e?(v=g.alternate,v!==null?(v=v.index,v<f?(g.flags|=2,f):v):(g.flags|=2,f)):(g.flags|=1048576,f)}function d(g){return e&&g.alternate===null&&(g.flags|=2),g}function p(g,f,v,C){return f===null||f.tag!==6?(f=ji(v,g.mode,C),f.return=g,f):(f=l(f,v),f.return=g,f)}function h(g,f,v,C){var D=v.type;return D===P?b(g,f,v.props.children,C,v.key):f!==null&&(f.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===Ye&&Tc(D)===f.type)?(C=l(f,v.props),C.ref=Dt(g,f,v),C.return=g,C):(C=as(v.type,v.key,v.props,null,g.mode,C),C.ref=Dt(g,f,v),C.return=g,C)}function y(g,f,v,C){return f===null||f.tag!==4||f.stateNode.containerInfo!==v.containerInfo||f.stateNode.implementation!==v.implementation?(f=Ni(v,g.mode,C),f.return=g,f):(f=l(f,v.children||[]),f.return=g,f)}function b(g,f,v,C,D){return f===null||f.tag!==7?(f=zn(v,g.mode,C,D),f.return=g,f):(f=l(f,v),f.return=g,f)}function k(g,f,v){if(typeof f=="string"&&f!==""||typeof f=="number")return f=ji(""+f,g.mode,v),f.return=g,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case q:return v=as(f.type,f.key,f.props,null,g.mode,v),v.ref=Dt(g,null,f),v.return=g,v;case U:return f=Ni(f,g.mode,v),f.return=g,f;case Ye:var C=f._init;return k(g,C(f._payload),v)}if(ft(f)||F(f))return f=zn(f,g.mode,v,null),f.return=g,f;Mo(g,f)}return null}function w(g,f,v,C){var D=f!==null?f.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return D!==null?null:p(g,f,""+v,C);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case q:return v.key===D?h(g,f,v,C):null;case U:return v.key===D?y(g,f,v,C):null;case Ye:return D=v._init,w(g,f,D(v._payload),C)}if(ft(v)||F(v))return D!==null?null:b(g,f,v,C,null);Mo(g,v)}return null}function B(g,f,v,C,D){if(typeof C=="string"&&C!==""||typeof C=="number")return g=g.get(v)||null,p(f,g,""+C,D);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case q:return g=g.get(C.key===null?v:C.key)||null,h(f,g,C,D);case U:return g=g.get(C.key===null?v:C.key)||null,y(f,g,C,D);case Ye:var $=C._init;return B(g,f,v,$(C._payload),D)}if(ft(C)||F(C))return g=g.get(v)||null,b(f,g,C,D,null);Mo(f,C)}return null}function A(g,f,v,C){for(var D=null,$=null,V=f,G=f=0,Ve=null;V!==null&&G<v.length;G++){V.index>G?(Ve=V,V=null):Ve=V.sibling;var fe=w(g,V,v[G],C);if(fe===null){V===null&&(V=Ve);break}e&&V&&fe.alternate===null&&r(g,V),f=i(fe,f,G),$===null?D=fe:$.sibling=fe,$=fe,V=Ve}if(G===v.length)return t(g,V),Ee&&bn(g,G),D;if(V===null){for(;G<v.length;G++)V=k(g,v[G],C),V!==null&&(f=i(V,f,G),$===null?D=V:$.sibling=V,$=V);return Ee&&bn(g,G),D}for(V=o(g,V);G<v.length;G++)Ve=B(V,g,G,v[G],C),Ve!==null&&(e&&Ve.alternate!==null&&V.delete(Ve.key===null?G:Ve.key),f=i(Ve,f,G),$===null?D=Ve:$.sibling=Ve,$=Ve);return e&&V.forEach(function(mn){return r(g,mn)}),Ee&&bn(g,G),D}function R(g,f,v,C){var D=F(v);if(typeof D!="function")throw Error(a(150));if(v=D.call(v),v==null)throw Error(a(151));for(var $=D=null,V=f,G=f=0,Ve=null,fe=v.next();V!==null&&!fe.done;G++,fe=v.next()){V.index>G?(Ve=V,V=null):Ve=V.sibling;var mn=w(g,V,fe.value,C);if(mn===null){V===null&&(V=Ve);break}e&&V&&mn.alternate===null&&r(g,V),f=i(mn,f,G),$===null?D=mn:$.sibling=mn,$=mn,V=Ve}if(fe.done)return t(g,V),Ee&&bn(g,G),D;if(V===null){for(;!fe.done;G++,fe=v.next())fe=k(g,fe.value,C),fe!==null&&(f=i(fe,f,G),$===null?D=fe:$.sibling=fe,$=fe);return Ee&&bn(g,G),D}for(V=o(g,V);!fe.done;G++,fe=v.next())fe=B(V,g,G,fe.value,C),fe!==null&&(e&&fe.alternate!==null&&V.delete(fe.key===null?G:fe.key),f=i(fe,f,G),$===null?D=fe:$.sibling=fe,$=fe);return e&&V.forEach(function(nf){return r(g,nf)}),Ee&&bn(g,G),D}function Re(g,f,v,C){if(typeof v=="object"&&v!==null&&v.type===P&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case q:e:{for(var D=v.key,$=f;$!==null;){if($.key===D){if(D=v.type,D===P){if($.tag===7){t(g,$.sibling),f=l($,v.props.children),f.return=g,g=f;break e}}else if($.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===Ye&&Tc(D)===$.type){t(g,$.sibling),f=l($,v.props),f.ref=Dt(g,$,v),f.return=g,g=f;break e}t(g,$);break}else r(g,$);$=$.sibling}v.type===P?(f=zn(v.props.children,g.mode,C,v.key),f.return=g,g=f):(C=as(v.type,v.key,v.props,null,g.mode,C),C.ref=Dt(g,f,v),C.return=g,g=C)}return d(g);case U:e:{for($=v.key;f!==null;){if(f.key===$)if(f.tag===4&&f.stateNode.containerInfo===v.containerInfo&&f.stateNode.implementation===v.implementation){t(g,f.sibling),f=l(f,v.children||[]),f.return=g,g=f;break e}else{t(g,f);break}else r(g,f);f=f.sibling}f=Ni(v,g.mode,C),f.return=g,g=f}return d(g);case Ye:return $=v._init,Re(g,f,$(v._payload),C)}if(ft(v))return A(g,f,v,C);if(F(v))return R(g,f,v,C);Mo(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,f!==null&&f.tag===6?(t(g,f.sibling),f=l(f,v),f.return=g,g=f):(t(g,f),f=ji(v,g.mode,C),f.return=g,g=f),d(g)):t(g,f)}return Re}var Zn=Ic(!0),Pc=Ic(!1),Do=tn(null),Fo=null,et=null,Pl=null;function zl(){Pl=et=Fo=null}function _l(e){var r=Do.current;ke(Do),e._currentValue=r}function Ll(e,r,t){for(;e!==null;){var o=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,o!==null&&(o.childLanes|=r)):o!==null&&(o.childLanes&r)!==r&&(o.childLanes|=r),e===t)break;e=e.return}}function rt(e,r){Fo=e,Pl=et=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&r)!==0&&(sr=!0),e.firstContext=null)}function vr(e){var r=e._currentValue;if(Pl!==e)if(e={context:e,memoizedValue:r,next:null},et===null){if(Fo===null)throw Error(a(308));et=e,Fo.dependencies={lanes:0,firstContext:e}}else et=et.next=e;return r}var kn=null;function Bl(e){kn===null?kn=[e]:kn.push(e)}function zc(e,r,t,o){var l=r.interleaved;return l===null?(t.next=t,Bl(r)):(t.next=l.next,l.next=t),r.interleaved=t,Ur(e,o)}function Ur(e,r){e.lanes|=r;var t=e.alternate;for(t!==null&&(t.lanes|=r),t=e,e=e.return;e!==null;)e.childLanes|=r,t=e.alternate,t!==null&&(t.childLanes|=r),t=e,e=e.return;return t.tag===3?t.stateNode:null}var ln=!1;function Ol(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _c(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function $r(e,r){return{eventTime:e,lane:r,tag:0,payload:null,callback:null,next:null}}function an(e,r,t){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(pe&2)!==0){var l=o.pending;return l===null?r.next=r:(r.next=l.next,l.next=r),o.pending=r,Ur(e,t)}return l=o.interleaved,l===null?(r.next=r,Bl(o)):(r.next=l.next,l.next=r),o.interleaved=r,Ur(e,t)}function Ho(e,r,t){if(r=r.updateQueue,r!==null&&(r=r.shared,(t&4194240)!==0)){var o=r.lanes;o&=e.pendingLanes,t|=o,r.lanes=t,Ys(e,t)}}function Lc(e,r){var t=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,t===o)){var l=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var d={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?l=i=d:i=i.next=d,t=t.next}while(t!==null);i===null?l=i=r:i=i.next=r}else l=i=r;t={baseState:o.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:o.shared,effects:o.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=r:e.next=r,t.lastBaseUpdate=r}function Wo(e,r,t,o){var l=e.updateQueue;ln=!1;var i=l.firstBaseUpdate,d=l.lastBaseUpdate,p=l.shared.pending;if(p!==null){l.shared.pending=null;var h=p,y=h.next;h.next=null,d===null?i=y:d.next=y,d=h;var b=e.alternate;b!==null&&(b=b.updateQueue,p=b.lastBaseUpdate,p!==d&&(p===null?b.firstBaseUpdate=y:p.next=y,b.lastBaseUpdate=h))}if(i!==null){var k=l.baseState;d=0,b=y=h=null,p=i;do{var w=p.lane,B=p.eventTime;if((o&w)===w){b!==null&&(b=b.next={eventTime:B,lane:0,tag:p.tag,payload:p.payload,callback:p.callback,next:null});e:{var A=e,R=p;switch(w=r,B=t,R.tag){case 1:if(A=R.payload,typeof A=="function"){k=A.call(B,k,w);break e}k=A;break e;case 3:A.flags=A.flags&-65537|128;case 0:if(A=R.payload,w=typeof A=="function"?A.call(B,k,w):A,w==null)break e;k=L({},k,w);break e;case 2:ln=!0}}p.callback!==null&&p.lane!==0&&(e.flags|=64,w=l.effects,w===null?l.effects=[p]:w.push(p))}else B={eventTime:B,lane:w,tag:p.tag,payload:p.payload,callback:p.callback,next:null},b===null?(y=b=B,h=k):b=b.next=B,d|=w;if(p=p.next,p===null){if(p=l.shared.pending,p===null)break;w=p,p=w.next,w.next=null,l.lastBaseUpdate=w,l.shared.pending=null}}while(!0);if(b===null&&(h=k),l.baseState=h,l.firstBaseUpdate=y,l.lastBaseUpdate=b,r=l.shared.interleaved,r!==null){l=r;do d|=l.lane,l=l.next;while(l!==r)}else i===null&&(l.shared.lanes=0);En|=d,e.lanes=d,e.memoizedState=k}}function Bc(e,r,t){if(e=r.effects,r.effects=null,e!==null)for(r=0;r<e.length;r++){var o=e[r],l=o.callback;if(l!==null){if(o.callback=null,o=t,typeof l!="function")throw Error(a(191,l));l.call(o)}}}var Ft={},Ar=tn(Ft),Ht=tn(Ft),Wt=tn(Ft);function Sn(e){if(e===Ft)throw Error(a(174));return e}function Al(e,r){switch(we(Wt,r),we(Ht,e),we(Ar,Ft),e=r.nodeType,e){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Rs(null,"");break;default:e=e===8?r.parentNode:r,r=e.namespaceURI||null,e=e.tagName,r=Rs(r,e)}ke(Ar),we(Ar,r)}function nt(){ke(Ar),ke(Ht),ke(Wt)}function Oc(e){Sn(Wt.current);var r=Sn(Ar.current),t=Rs(r,e.type);r!==t&&(we(Ht,e),we(Ar,t))}function Rl(e){Ht.current===e&&(ke(Ar),ke(Ht))}var ze=tn(0);function Uo(e){for(var r=e;r!==null;){if(r.tag===13){var t=r.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Ml=[];function Dl(){for(var e=0;e<Ml.length;e++)Ml[e]._workInProgressVersionPrimary=null;Ml.length=0}var $o=_.ReactCurrentDispatcher,Fl=_.ReactCurrentBatchConfig,Cn=0,_e=null,Fe=null,Ue=null,Vo=!1,Ut=!1,$t=0,kh=0;function qe(){throw Error(a(321))}function Hl(e,r){if(r===null)return!1;for(var t=0;t<r.length&&t<e.length;t++)if(!Sr(e[t],r[t]))return!1;return!0}function Wl(e,r,t,o,l,i){if(Cn=i,_e=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,$o.current=e===null||e.memoizedState===null?Th:Ih,e=t(o,l),Ut){i=0;do{if(Ut=!1,$t=0,25<=i)throw Error(a(301));i+=1,Ue=Fe=null,r.updateQueue=null,$o.current=Ph,e=t(o,l)}while(Ut)}if($o.current=Go,r=Fe!==null&&Fe.next!==null,Cn=0,Ue=Fe=_e=null,Vo=!1,r)throw Error(a(300));return e}function Ul(){var e=$t!==0;return $t=0,e}function Rr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?_e.memoizedState=Ue=e:Ue=Ue.next=e,Ue}function yr(){if(Fe===null){var e=_e.alternate;e=e!==null?e.memoizedState:null}else e=Fe.next;var r=Ue===null?_e.memoizedState:Ue.next;if(r!==null)Ue=r,Fe=e;else{if(e===null)throw Error(a(310));Fe=e,e={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},Ue===null?_e.memoizedState=Ue=e:Ue=Ue.next=e}return Ue}function Vt(e,r){return typeof r=="function"?r(e):r}function $l(e){var r=yr(),t=r.queue;if(t===null)throw Error(a(311));t.lastRenderedReducer=e;var o=Fe,l=o.baseQueue,i=t.pending;if(i!==null){if(l!==null){var d=l.next;l.next=i.next,i.next=d}o.baseQueue=l=i,t.pending=null}if(l!==null){i=l.next,o=o.baseState;var p=d=null,h=null,y=i;do{var b=y.lane;if((Cn&b)===b)h!==null&&(h=h.next={lane:0,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null}),o=y.hasEagerState?y.eagerState:e(o,y.action);else{var k={lane:b,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null};h===null?(p=h=k,d=o):h=h.next=k,_e.lanes|=b,En|=b}y=y.next}while(y!==null&&y!==i);h===null?d=o:h.next=p,Sr(o,r.memoizedState)||(sr=!0),r.memoizedState=o,r.baseState=d,r.baseQueue=h,t.lastRenderedState=o}if(e=t.interleaved,e!==null){l=e;do i=l.lane,_e.lanes|=i,En|=i,l=l.next;while(l!==e)}else l===null&&(t.lanes=0);return[r.memoizedState,t.dispatch]}function Vl(e){var r=yr(),t=r.queue;if(t===null)throw Error(a(311));t.lastRenderedReducer=e;var o=t.dispatch,l=t.pending,i=r.memoizedState;if(l!==null){t.pending=null;var d=l=l.next;do i=e(i,d.action),d=d.next;while(d!==l);Sr(i,r.memoizedState)||(sr=!0),r.memoizedState=i,r.baseQueue===null&&(r.baseState=i),t.lastRenderedState=i}return[i,o]}function Ac(){}function Rc(e,r){var t=_e,o=yr(),l=r(),i=!Sr(o.memoizedState,l);if(i&&(o.memoizedState=l,sr=!0),o=o.queue,Jl(Fc.bind(null,t,o,e),[e]),o.getSnapshot!==r||i||Ue!==null&&Ue.memoizedState.tag&1){if(t.flags|=2048,Jt(9,Dc.bind(null,t,o,l,r),void 0,null),$e===null)throw Error(a(349));(Cn&30)!==0||Mc(t,r,l)}return l}function Mc(e,r,t){e.flags|=16384,e={getSnapshot:r,value:t},r=_e.updateQueue,r===null?(r={lastEffect:null,stores:null},_e.updateQueue=r,r.stores=[e]):(t=r.stores,t===null?r.stores=[e]:t.push(e))}function Dc(e,r,t,o){r.value=t,r.getSnapshot=o,Hc(r)&&Wc(e)}function Fc(e,r,t){return t(function(){Hc(r)&&Wc(e)})}function Hc(e){var r=e.getSnapshot;e=e.value;try{var t=r();return!Sr(e,t)}catch{return!0}}function Wc(e){var r=Ur(e,1);r!==null&&Pr(r,e,1,-1)}function Uc(e){var r=Rr();return typeof e=="function"&&(e=e()),r.memoizedState=r.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vt,lastRenderedState:e},r.queue=e,e=e.dispatch=Eh.bind(null,_e,e),[r.memoizedState,e]}function Jt(e,r,t,o){return e={tag:e,create:r,destroy:t,deps:o,next:null},r=_e.updateQueue,r===null?(r={lastEffect:null,stores:null},_e.updateQueue=r,r.lastEffect=e.next=e):(t=r.lastEffect,t===null?r.lastEffect=e.next=e:(o=t.next,t.next=e,e.next=o,r.lastEffect=e)),e}function $c(){return yr().memoizedState}function Jo(e,r,t,o){var l=Rr();_e.flags|=e,l.memoizedState=Jt(1|r,t,void 0,o===void 0?null:o)}function Qo(e,r,t,o){var l=yr();o=o===void 0?null:o;var i=void 0;if(Fe!==null){var d=Fe.memoizedState;if(i=d.destroy,o!==null&&Hl(o,d.deps)){l.memoizedState=Jt(r,t,i,o);return}}_e.flags|=e,l.memoizedState=Jt(1|r,t,i,o)}function Vc(e,r){return Jo(8390656,8,e,r)}function Jl(e,r){return Qo(2048,8,e,r)}function Jc(e,r){return Qo(4,2,e,r)}function Qc(e,r){return Qo(4,4,e,r)}function Gc(e,r){if(typeof r=="function")return e=e(),r(e),function(){r(null)};if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function Yc(e,r,t){return t=t!=null?t.concat([e]):null,Qo(4,4,Gc.bind(null,r,e),t)}function Ql(){}function Kc(e,r){var t=yr();r=r===void 0?null:r;var o=t.memoizedState;return o!==null&&r!==null&&Hl(r,o[1])?o[0]:(t.memoizedState=[e,r],e)}function qc(e,r){var t=yr();r=r===void 0?null:r;var o=t.memoizedState;return o!==null&&r!==null&&Hl(r,o[1])?o[0]:(e=e(),t.memoizedState=[e,r],e)}function Xc(e,r,t){return(Cn&21)===0?(e.baseState&&(e.baseState=!1,sr=!0),e.memoizedState=t):(Sr(t,r)||(t=Ta(),_e.lanes|=t,En|=t,e.baseState=!0),r)}function Sh(e,r){var t=ye;ye=t!==0&&4>t?t:4,e(!0);var o=Fl.transition;Fl.transition={};try{e(!1),r()}finally{ye=t,Fl.transition=o}}function Zc(){return yr().memoizedState}function Ch(e,r,t){var o=pn(e);if(t={lane:o,action:t,hasEagerState:!1,eagerState:null,next:null},ed(e))rd(r,t);else if(t=zc(e,r,t,o),t!==null){var l=nr();Pr(t,e,o,l),nd(t,r,o)}}function Eh(e,r,t){var o=pn(e),l={lane:o,action:t,hasEagerState:!1,eagerState:null,next:null};if(ed(e))rd(r,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=r.lastRenderedReducer,i!==null))try{var d=r.lastRenderedState,p=i(d,t);if(l.hasEagerState=!0,l.eagerState=p,Sr(p,d)){var h=r.interleaved;h===null?(l.next=l,Bl(r)):(l.next=h.next,h.next=l),r.interleaved=l;return}}catch{}finally{}t=zc(e,r,l,o),t!==null&&(l=nr(),Pr(t,e,o,l),nd(t,r,o))}}function ed(e){var r=e.alternate;return e===_e||r!==null&&r===_e}function rd(e,r){Ut=Vo=!0;var t=e.pending;t===null?r.next=r:(r.next=t.next,t.next=r),e.pending=r}function nd(e,r,t){if((t&4194240)!==0){var o=r.lanes;o&=e.pendingLanes,t|=o,r.lanes=t,Ys(e,t)}}var Go={readContext:vr,useCallback:qe,useContext:qe,useEffect:qe,useImperativeHandle:qe,useInsertionEffect:qe,useLayoutEffect:qe,useMemo:qe,useReducer:qe,useRef:qe,useState:qe,useDebugValue:qe,useDeferredValue:qe,useTransition:qe,useMutableSource:qe,useSyncExternalStore:qe,useId:qe,unstable_isNewReconciler:!1},Th={readContext:vr,useCallback:function(e,r){return Rr().memoizedState=[e,r===void 0?null:r],e},useContext:vr,useEffect:Vc,useImperativeHandle:function(e,r,t){return t=t!=null?t.concat([e]):null,Jo(4194308,4,Gc.bind(null,r,e),t)},useLayoutEffect:function(e,r){return Jo(4194308,4,e,r)},useInsertionEffect:function(e,r){return Jo(4,2,e,r)},useMemo:function(e,r){var t=Rr();return r=r===void 0?null:r,e=e(),t.memoizedState=[e,r],e},useReducer:function(e,r,t){var o=Rr();return r=t!==void 0?t(r):r,o.memoizedState=o.baseState=r,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},o.queue=e,e=e.dispatch=Ch.bind(null,_e,e),[o.memoizedState,e]},useRef:function(e){var r=Rr();return e={current:e},r.memoizedState=e},useState:Uc,useDebugValue:Ql,useDeferredValue:function(e){return Rr().memoizedState=e},useTransition:function(){var e=Uc(!1),r=e[0];return e=Sh.bind(null,e[1]),Rr().memoizedState=e,[r,e]},useMutableSource:function(){},useSyncExternalStore:function(e,r,t){var o=_e,l=Rr();if(Ee){if(t===void 0)throw Error(a(407));t=t()}else{if(t=r(),$e===null)throw Error(a(349));(Cn&30)!==0||Mc(o,r,t)}l.memoizedState=t;var i={value:t,getSnapshot:r};return l.queue=i,Vc(Fc.bind(null,o,i,e),[e]),o.flags|=2048,Jt(9,Dc.bind(null,o,i,t,r),void 0,null),t},useId:function(){var e=Rr(),r=$e.identifierPrefix;if(Ee){var t=Wr,o=Hr;t=(o&~(1<<32-kr(o)-1)).toString(32)+t,r=":"+r+"R"+t,t=$t++,0<t&&(r+="H"+t.toString(32)),r+=":"}else t=kh++,r=":"+r+"r"+t.toString(32)+":";return e.memoizedState=r},unstable_isNewReconciler:!1},Ih={readContext:vr,useCallback:Kc,useContext:vr,useEffect:Jl,useImperativeHandle:Yc,useInsertionEffect:Jc,useLayoutEffect:Qc,useMemo:qc,useReducer:$l,useRef:$c,useState:function(){return $l(Vt)},useDebugValue:Ql,useDeferredValue:function(e){var r=yr();return Xc(r,Fe.memoizedState,e)},useTransition:function(){var e=$l(Vt)[0],r=yr().memoizedState;return[e,r]},useMutableSource:Ac,useSyncExternalStore:Rc,useId:Zc,unstable_isNewReconciler:!1},Ph={readContext:vr,useCallback:Kc,useContext:vr,useEffect:Jl,useImperativeHandle:Yc,useInsertionEffect:Jc,useLayoutEffect:Qc,useMemo:qc,useReducer:Vl,useRef:$c,useState:function(){return Vl(Vt)},useDebugValue:Ql,useDeferredValue:function(e){var r=yr();return Fe===null?r.memoizedState=e:Xc(r,Fe.memoizedState,e)},useTransition:function(){var e=Vl(Vt)[0],r=yr().memoizedState;return[e,r]},useMutableSource:Ac,useSyncExternalStore:Rc,useId:Zc,unstable_isNewReconciler:!1};function Er(e,r){if(e&&e.defaultProps){r=L({},r),e=e.defaultProps;for(var t in e)r[t]===void 0&&(r[t]=e[t]);return r}return r}function Gl(e,r,t,o){r=e.memoizedState,t=t(o,r),t=t==null?r:L({},r,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Yo={isMounted:function(e){return(e=e._reactInternals)?yn(e)===e:!1},enqueueSetState:function(e,r,t){e=e._reactInternals;var o=nr(),l=pn(e),i=$r(o,l);i.payload=r,t!=null&&(i.callback=t),r=an(e,i,l),r!==null&&(Pr(r,e,l,o),Ho(r,e,l))},enqueueReplaceState:function(e,r,t){e=e._reactInternals;var o=nr(),l=pn(e),i=$r(o,l);i.tag=1,i.payload=r,t!=null&&(i.callback=t),r=an(e,i,l),r!==null&&(Pr(r,e,l,o),Ho(r,e,l))},enqueueForceUpdate:function(e,r){e=e._reactInternals;var t=nr(),o=pn(e),l=$r(t,o);l.tag=2,r!=null&&(l.callback=r),r=an(e,l,o),r!==null&&(Pr(r,e,o,t),Ho(r,e,o))}};function td(e,r,t,o,l,i,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,i,d):r.prototype&&r.prototype.isPureReactComponent?!_t(t,o)||!_t(l,i):!0}function od(e,r,t){var o=!1,l=on,i=r.contextType;return typeof i=="object"&&i!==null?i=vr(i):(l=or(r)?Nn:Ke.current,o=r.contextTypes,i=(o=o!=null)?Yn(e,l):on),r=new r(t,i),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Yo,e.stateNode=r,r._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),r}function sd(e,r,t,o){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(t,o),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(t,o),r.state!==e&&Yo.enqueueReplaceState(r,r.state,null)}function Yl(e,r,t,o){var l=e.stateNode;l.props=t,l.state=e.memoizedState,l.refs={},Ol(e);var i=r.contextType;typeof i=="object"&&i!==null?l.context=vr(i):(i=or(r)?Nn:Ke.current,l.context=Yn(e,i)),l.state=e.memoizedState,i=r.getDerivedStateFromProps,typeof i=="function"&&(Gl(e,r,i,t),l.state=e.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(r=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),r!==l.state&&Yo.enqueueReplaceState(l,l.state,null),Wo(e,t,l,o),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function tt(e,r){try{var t="",o=r;do t+=ie(o),o=o.return;while(o);var l=t}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:r,stack:l,digest:null}}function Kl(e,r,t){return{value:e,source:null,stack:t!=null?t:null,digest:r!=null?r:null}}function ql(e,r){try{console.error(r.value)}catch(t){setTimeout(function(){throw t})}}var zh=typeof WeakMap=="function"?WeakMap:Map;function ld(e,r,t){t=$r(-1,t),t.tag=3,t.payload={element:null};var o=r.value;return t.callback=function(){ns||(ns=!0,pi=o),ql(e,r)},t}function id(e,r,t){t=$r(-1,t),t.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var l=r.value;t.payload=function(){return o(l)},t.callback=function(){ql(e,r)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){ql(e,r),typeof o!="function"&&(dn===null?dn=new Set([this]):dn.add(this));var d=r.stack;this.componentDidCatch(r.value,{componentStack:d!==null?d:""})}),t}function ad(e,r,t){var o=e.pingCache;if(o===null){o=e.pingCache=new zh;var l=new Set;o.set(r,l)}else l=o.get(r),l===void 0&&(l=new Set,o.set(r,l));l.has(t)||(l.add(t),e=Vh.bind(null,e,r,t),r.then(e,e))}function cd(e){do{var r;if((r=e.tag===13)&&(r=e.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return e;e=e.return}while(e!==null);return null}function dd(e,r,t,o,l){return(e.mode&1)===0?(e===r?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(r=$r(-1,1),r.tag=2,an(t,r,1))),t.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var _h=_.ReactCurrentOwner,sr=!1;function rr(e,r,t,o){r.child=e===null?Pc(r,null,t,o):Zn(r,e.child,t,o)}function ud(e,r,t,o,l){t=t.render;var i=r.ref;return rt(r,l),o=Wl(e,r,t,o,i,l),t=Ul(),e!==null&&!sr?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~l,Vr(e,r,l)):(Ee&&t&&Sl(r),r.flags|=1,rr(e,r,o,l),r.child)}function pd(e,r,t,o,l){if(e===null){var i=t.type;return typeof i=="function"&&!yi(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(r.tag=15,r.type=i,hd(e,r,i,o,l)):(e=as(t.type,null,o,r,r.mode,l),e.ref=r.ref,e.return=r,r.child=e)}if(i=e.child,(e.lanes&l)===0){var d=i.memoizedProps;if(t=t.compare,t=t!==null?t:_t,t(d,o)&&e.ref===r.ref)return Vr(e,r,l)}return r.flags|=1,e=fn(i,o),e.ref=r.ref,e.return=r,r.child=e}function hd(e,r,t,o,l){if(e!==null){var i=e.memoizedProps;if(_t(i,o)&&e.ref===r.ref)if(sr=!1,r.pendingProps=o=i,(e.lanes&l)!==0)(e.flags&131072)!==0&&(sr=!0);else return r.lanes=e.lanes,Vr(e,r,l)}return Xl(e,r,t,o,l)}function fd(e,r,t){var o=r.pendingProps,l=o.children,i=e!==null?e.memoizedState:null;if(o.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},we(st,hr),hr|=t;else{if((t&1073741824)===0)return e=i!==null?i.baseLanes|t:t,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:e,cachePool:null,transitions:null},r.updateQueue=null,we(st,hr),hr|=e,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=i!==null?i.baseLanes:t,we(st,hr),hr|=o}else i!==null?(o=i.baseLanes|t,r.memoizedState=null):o=t,we(st,hr),hr|=o;return rr(e,r,l,t),r.child}function md(e,r){var t=r.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(r.flags|=512,r.flags|=2097152)}function Xl(e,r,t,o,l){var i=or(t)?Nn:Ke.current;return i=Yn(r,i),rt(r,l),t=Wl(e,r,t,o,i,l),o=Ul(),e!==null&&!sr?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~l,Vr(e,r,l)):(Ee&&o&&Sl(r),r.flags|=1,rr(e,r,t,l),r.child)}function xd(e,r,t,o,l){if(or(t)){var i=!0;Lo(r)}else i=!1;if(rt(r,l),r.stateNode===null)qo(e,r),od(r,t,o),Yl(r,t,o,l),o=!0;else if(e===null){var d=r.stateNode,p=r.memoizedProps;d.props=p;var h=d.context,y=t.contextType;typeof y=="object"&&y!==null?y=vr(y):(y=or(t)?Nn:Ke.current,y=Yn(r,y));var b=t.getDerivedStateFromProps,k=typeof b=="function"||typeof d.getSnapshotBeforeUpdate=="function";k||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(p!==o||h!==y)&&sd(r,d,o,y),ln=!1;var w=r.memoizedState;d.state=w,Wo(r,o,d,l),h=r.memoizedState,p!==o||w!==h||tr.current||ln?(typeof b=="function"&&(Gl(r,t,b,o),h=r.memoizedState),(p=ln||td(r,t,p,o,w,h,y))?(k||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(r.flags|=4194308)):(typeof d.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=o,r.memoizedState=h),d.props=o,d.state=h,d.context=y,o=p):(typeof d.componentDidMount=="function"&&(r.flags|=4194308),o=!1)}else{d=r.stateNode,_c(e,r),p=r.memoizedProps,y=r.type===r.elementType?p:Er(r.type,p),d.props=y,k=r.pendingProps,w=d.context,h=t.contextType,typeof h=="object"&&h!==null?h=vr(h):(h=or(t)?Nn:Ke.current,h=Yn(r,h));var B=t.getDerivedStateFromProps;(b=typeof B=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(p!==k||w!==h)&&sd(r,d,o,h),ln=!1,w=r.memoizedState,d.state=w,Wo(r,o,d,l);var A=r.memoizedState;p!==k||w!==A||tr.current||ln?(typeof B=="function"&&(Gl(r,t,B,o),A=r.memoizedState),(y=ln||td(r,t,y,o,w,A,h)||!1)?(b||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,A,h),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,A,h)),typeof d.componentDidUpdate=="function"&&(r.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof d.componentDidUpdate!="function"||p===e.memoizedProps&&w===e.memoizedState||(r.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&w===e.memoizedState||(r.flags|=1024),r.memoizedProps=o,r.memoizedState=A),d.props=o,d.state=A,d.context=h,o=y):(typeof d.componentDidUpdate!="function"||p===e.memoizedProps&&w===e.memoizedState||(r.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&w===e.memoizedState||(r.flags|=1024),o=!1)}return Zl(e,r,t,o,i,l)}function Zl(e,r,t,o,l,i){md(e,r);var d=(r.flags&128)!==0;if(!o&&!d)return l&&Nc(r,t,!1),Vr(e,r,i);o=r.stateNode,_h.current=r;var p=d&&typeof t.getDerivedStateFromError!="function"?null:o.render();return r.flags|=1,e!==null&&d?(r.child=Zn(r,e.child,null,i),r.child=Zn(r,null,p,i)):rr(e,r,p,i),r.memoizedState=o.state,l&&Nc(r,t,!0),r.child}function gd(e){var r=e.stateNode;r.pendingContext?yc(e,r.pendingContext,r.pendingContext!==r.context):r.context&&yc(e,r.context,!1),Al(e,r.containerInfo)}function vd(e,r,t,o,l){return Xn(),Il(l),r.flags|=256,rr(e,r,t,o),r.child}var ei={dehydrated:null,treeContext:null,retryLane:0};function ri(e){return{baseLanes:e,cachePool:null,transitions:null}}function yd(e,r,t){var o=r.pendingProps,l=ze.current,i=!1,d=(r.flags&128)!==0,p;if((p=d)||(p=e!==null&&e.memoizedState===null?!1:(l&2)!==0),p?(i=!0,r.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),we(ze,l&1),e===null)return Tl(r),e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((r.mode&1)===0?r.lanes=1:e.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(d=o.children,e=o.fallback,i?(o=r.mode,i=r.child,d={mode:"hidden",children:d},(o&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=d):i=cs(d,o,0,null),e=zn(e,o,t,null),i.return=r,e.return=r,i.sibling=e,r.child=i,r.child.memoizedState=ri(t),r.memoizedState=ei,e):ni(r,d));if(l=e.memoizedState,l!==null&&(p=l.dehydrated,p!==null))return Lh(e,r,d,o,p,l,t);if(i){i=o.fallback,d=r.mode,l=e.child,p=l.sibling;var h={mode:"hidden",children:o.children};return(d&1)===0&&r.child!==l?(o=r.child,o.childLanes=0,o.pendingProps=h,r.deletions=null):(o=fn(l,h),o.subtreeFlags=l.subtreeFlags&14680064),p!==null?i=fn(p,i):(i=zn(i,d,t,null),i.flags|=2),i.return=r,o.return=r,o.sibling=i,r.child=o,o=i,i=r.child,d=e.child.memoizedState,d=d===null?ri(t):{baseLanes:d.baseLanes|t,cachePool:null,transitions:d.transitions},i.memoizedState=d,i.childLanes=e.childLanes&~t,r.memoizedState=ei,o}return i=e.child,e=i.sibling,o=fn(i,{mode:"visible",children:o.children}),(r.mode&1)===0&&(o.lanes=t),o.return=r,o.sibling=null,e!==null&&(t=r.deletions,t===null?(r.deletions=[e],r.flags|=16):t.push(e)),r.child=o,r.memoizedState=null,o}function ni(e,r){return r=cs({mode:"visible",children:r},e.mode,0,null),r.return=e,e.child=r}function Ko(e,r,t,o){return o!==null&&Il(o),Zn(r,e.child,null,t),e=ni(r,r.pendingProps.children),e.flags|=2,r.memoizedState=null,e}function Lh(e,r,t,o,l,i,d){if(t)return r.flags&256?(r.flags&=-257,o=Kl(Error(a(422))),Ko(e,r,d,o)):r.memoizedState!==null?(r.child=e.child,r.flags|=128,null):(i=o.fallback,l=r.mode,o=cs({mode:"visible",children:o.children},l,0,null),i=zn(i,l,d,null),i.flags|=2,o.return=r,i.return=r,o.sibling=i,r.child=o,(r.mode&1)!==0&&Zn(r,e.child,null,d),r.child.memoizedState=ri(d),r.memoizedState=ei,i);if((r.mode&1)===0)return Ko(e,r,d,null);if(l.data==="$!"){if(o=l.nextSibling&&l.nextSibling.dataset,o)var p=o.dgst;return o=p,i=Error(a(419)),o=Kl(i,o,void 0),Ko(e,r,d,o)}if(p=(d&e.childLanes)!==0,sr||p){if(o=$e,o!==null){switch(d&-d){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(o.suspendedLanes|d))!==0?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Ur(e,l),Pr(o,e,l,-1))}return vi(),o=Kl(Error(a(421))),Ko(e,r,d,o)}return l.data==="$?"?(r.flags|=128,r.child=e.child,r=Jh.bind(null,e),l._reactRetry=r,null):(e=i.treeContext,pr=nn(l.nextSibling),ur=r,Ee=!0,Cr=null,e!==null&&(xr[gr++]=Hr,xr[gr++]=Wr,xr[gr++]=wn,Hr=e.id,Wr=e.overflow,wn=r),r=ni(r,o.children),r.flags|=4096,r)}function jd(e,r,t){e.lanes|=r;var o=e.alternate;o!==null&&(o.lanes|=r),Ll(e.return,r,t)}function ti(e,r,t,o,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:o,tail:t,tailMode:l}:(i.isBackwards=r,i.rendering=null,i.renderingStartTime=0,i.last=o,i.tail=t,i.tailMode=l)}function Nd(e,r,t){var o=r.pendingProps,l=o.revealOrder,i=o.tail;if(rr(e,r,o.children,t),o=ze.current,(o&2)!==0)o=o&1|2,r.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=r.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&jd(e,t,r);else if(e.tag===19)jd(e,t,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break e;for(;e.sibling===null;){if(e.return===null||e.return===r)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(we(ze,o),(r.mode&1)===0)r.memoizedState=null;else switch(l){case"forwards":for(t=r.child,l=null;t!==null;)e=t.alternate,e!==null&&Uo(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=r.child,r.child=null):(l=t.sibling,t.sibling=null),ti(r,!1,l,t,i);break;case"backwards":for(t=null,l=r.child,r.child=null;l!==null;){if(e=l.alternate,e!==null&&Uo(e)===null){r.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}ti(r,!0,t,null,i);break;case"together":ti(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function qo(e,r){(r.mode&1)===0&&e!==null&&(e.alternate=null,r.alternate=null,r.flags|=2)}function Vr(e,r,t){if(e!==null&&(r.dependencies=e.dependencies),En|=r.lanes,(t&r.childLanes)===0)return null;if(e!==null&&r.child!==e.child)throw Error(a(153));if(r.child!==null){for(e=r.child,t=fn(e,e.pendingProps),r.child=t,t.return=r;e.sibling!==null;)e=e.sibling,t=t.sibling=fn(e,e.pendingProps),t.return=r;t.sibling=null}return r.child}function Bh(e,r,t){switch(r.tag){case 3:gd(r),Xn();break;case 5:Oc(r);break;case 1:or(r.type)&&Lo(r);break;case 4:Al(r,r.stateNode.containerInfo);break;case 10:var o=r.type._context,l=r.memoizedProps.value;we(Do,o._currentValue),o._currentValue=l;break;case 13:if(o=r.memoizedState,o!==null)return o.dehydrated!==null?(we(ze,ze.current&1),r.flags|=128,null):(t&r.child.childLanes)!==0?yd(e,r,t):(we(ze,ze.current&1),e=Vr(e,r,t),e!==null?e.sibling:null);we(ze,ze.current&1);break;case 19:if(o=(t&r.childLanes)!==0,(e.flags&128)!==0){if(o)return Nd(e,r,t);r.flags|=128}if(l=r.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),we(ze,ze.current),o)break;return null;case 22:case 23:return r.lanes=0,fd(e,r,t)}return Vr(e,r,t)}var wd,oi,bd,kd;wd=function(e,r){for(var t=r.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break;for(;t.sibling===null;){if(t.return===null||t.return===r)return;t=t.return}t.sibling.return=t.return,t=t.sibling}},oi=function(){},bd=function(e,r,t,o){var l=e.memoizedProps;if(l!==o){e=r.stateNode,Sn(Ar.current);var i=null;switch(t){case"input":l=Ls(e,l),o=Ls(e,o),i=[];break;case"select":l=L({},l,{value:void 0}),o=L({},o,{value:void 0}),i=[];break;case"textarea":l=As(e,l),o=As(e,o),i=[];break;default:typeof l.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=Po)}Ms(t,o);var d;t=null;for(y in l)if(!o.hasOwnProperty(y)&&l.hasOwnProperty(y)&&l[y]!=null)if(y==="style"){var p=l[y];for(d in p)p.hasOwnProperty(d)&&(t||(t={}),t[d]="")}else y!=="dangerouslySetInnerHTML"&&y!=="children"&&y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(m.hasOwnProperty(y)?i||(i=[]):(i=i||[]).push(y,null));for(y in o){var h=o[y];if(p=l!=null?l[y]:void 0,o.hasOwnProperty(y)&&h!==p&&(h!=null||p!=null))if(y==="style")if(p){for(d in p)!p.hasOwnProperty(d)||h&&h.hasOwnProperty(d)||(t||(t={}),t[d]="");for(d in h)h.hasOwnProperty(d)&&p[d]!==h[d]&&(t||(t={}),t[d]=h[d])}else t||(i||(i=[]),i.push(y,t)),t=h;else y==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,p=p?p.__html:void 0,h!=null&&p!==h&&(i=i||[]).push(y,h)):y==="children"?typeof h!="string"&&typeof h!="number"||(i=i||[]).push(y,""+h):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&(m.hasOwnProperty(y)?(h!=null&&y==="onScroll"&&be("scroll",e),i||p===h||(i=[])):(i=i||[]).push(y,h))}t&&(i=i||[]).push("style",t);var y=i;(r.updateQueue=y)&&(r.flags|=4)}},kd=function(e,r,t,o){t!==o&&(r.flags|=4)};function Qt(e,r){if(!Ee)switch(e.tailMode){case"hidden":r=e.tail;for(var t=null;r!==null;)r.alternate!==null&&(t=r),r=r.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var o=null;t!==null;)t.alternate!==null&&(o=t),t=t.sibling;o===null?r||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Xe(e){var r=e.alternate!==null&&e.alternate.child===e.child,t=0,o=0;if(r)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,o|=l.subtreeFlags&14680064,o|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,o|=l.subtreeFlags,o|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=o,e.childLanes=t,r}function Oh(e,r,t){var o=r.pendingProps;switch(Cl(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(r),null;case 1:return or(r.type)&&_o(),Xe(r),null;case 3:return o=r.stateNode,nt(),ke(tr),ke(Ke),Dl(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(Ro(r)?r.flags|=4:e===null||e.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Cr!==null&&(mi(Cr),Cr=null))),oi(e,r),Xe(r),null;case 5:Rl(r);var l=Sn(Wt.current);if(t=r.type,e!==null&&r.stateNode!=null)bd(e,r,t,o,l),e.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!o){if(r.stateNode===null)throw Error(a(166));return Xe(r),null}if(e=Sn(Ar.current),Ro(r)){o=r.stateNode,t=r.type;var i=r.memoizedProps;switch(o[Or]=r,o[Rt]=i,e=(r.mode&1)!==0,t){case"dialog":be("cancel",o),be("close",o);break;case"iframe":case"object":case"embed":be("load",o);break;case"video":case"audio":for(l=0;l<Bt.length;l++)be(Bt[l],o);break;case"source":be("error",o);break;case"img":case"image":case"link":be("error",o),be("load",o);break;case"details":be("toggle",o);break;case"input":oa(o,i),be("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!i.multiple},be("invalid",o);break;case"textarea":ia(o,i),be("invalid",o)}Ms(t,i),l=null;for(var d in i)if(i.hasOwnProperty(d)){var p=i[d];d==="children"?typeof p=="string"?o.textContent!==p&&(i.suppressHydrationWarning!==!0&&Io(o.textContent,p,e),l=["children",p]):typeof p=="number"&&o.textContent!==""+p&&(i.suppressHydrationWarning!==!0&&Io(o.textContent,p,e),l=["children",""+p]):m.hasOwnProperty(d)&&p!=null&&d==="onScroll"&&be("scroll",o)}switch(t){case"input":Yr(o),la(o,i,!0);break;case"textarea":Yr(o),ca(o);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(o.onclick=Po)}o=l,r.updateQueue=o,o!==null&&(r.flags|=4)}else{d=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=da(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=d.createElement(t,{is:o.is}):(e=d.createElement(t),t==="select"&&(d=e,o.multiple?d.multiple=!0:o.size&&(d.size=o.size))):e=d.createElementNS(e,t),e[Or]=r,e[Rt]=o,wd(e,r,!1,!1),r.stateNode=e;e:{switch(d=Ds(t,o),t){case"dialog":be("cancel",e),be("close",e),l=o;break;case"iframe":case"object":case"embed":be("load",e),l=o;break;case"video":case"audio":for(l=0;l<Bt.length;l++)be(Bt[l],e);l=o;break;case"source":be("error",e),l=o;break;case"img":case"image":case"link":be("error",e),be("load",e),l=o;break;case"details":be("toggle",e),l=o;break;case"input":oa(e,o),l=Ls(e,o),be("invalid",e);break;case"option":l=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},l=L({},o,{value:void 0}),be("invalid",e);break;case"textarea":ia(e,o),l=As(e,o),be("invalid",e);break;default:l=o}Ms(t,l),p=l;for(i in p)if(p.hasOwnProperty(i)){var h=p[i];i==="style"?ha(e,h):i==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,h!=null&&ua(e,h)):i==="children"?typeof h=="string"?(t!=="textarea"||h!=="")&&mt(e,h):typeof h=="number"&&mt(e,""+h):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(m.hasOwnProperty(i)?h!=null&&i==="onScroll"&&be("scroll",e):h!=null&&ne(e,i,h,d))}switch(t){case"input":Yr(e),la(e,o,!1);break;case"textarea":Yr(e),ca(e);break;case"option":o.value!=null&&e.setAttribute("value",""+ce(o.value));break;case"select":e.multiple=!!o.multiple,i=o.value,i!=null?Rn(e,!!o.multiple,i,!1):o.defaultValue!=null&&Rn(e,!!o.multiple,o.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Po)}switch(t){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Xe(r),null;case 6:if(e&&r.stateNode!=null)kd(e,r,e.memoizedProps,o);else{if(typeof o!="string"&&r.stateNode===null)throw Error(a(166));if(t=Sn(Wt.current),Sn(Ar.current),Ro(r)){if(o=r.stateNode,t=r.memoizedProps,o[Or]=r,(i=o.nodeValue!==t)&&(e=ur,e!==null))switch(e.tag){case 3:Io(o.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Io(o.nodeValue,t,(e.mode&1)!==0)}i&&(r.flags|=4)}else o=(t.nodeType===9?t:t.ownerDocument).createTextNode(o),o[Or]=r,r.stateNode=o}return Xe(r),null;case 13:if(ke(ze),o=r.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ee&&pr!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Ec(),Xn(),r.flags|=98560,i=!1;else if(i=Ro(r),o!==null&&o.dehydrated!==null){if(e===null){if(!i)throw Error(a(318));if(i=r.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(a(317));i[Or]=r}else Xn(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Xe(r),i=!1}else Cr!==null&&(mi(Cr),Cr=null),i=!0;if(!i)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=t,r):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(r.child.flags|=8192,(r.mode&1)!==0&&(e===null||(ze.current&1)!==0?He===0&&(He=3):vi())),r.updateQueue!==null&&(r.flags|=4),Xe(r),null);case 4:return nt(),oi(e,r),e===null&&Ot(r.stateNode.containerInfo),Xe(r),null;case 10:return _l(r.type._context),Xe(r),null;case 17:return or(r.type)&&_o(),Xe(r),null;case 19:if(ke(ze),i=r.memoizedState,i===null)return Xe(r),null;if(o=(r.flags&128)!==0,d=i.rendering,d===null)if(o)Qt(i,!1);else{if(He!==0||e!==null&&(e.flags&128)!==0)for(e=r.child;e!==null;){if(d=Uo(e),d!==null){for(r.flags|=128,Qt(i,!1),o=d.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),r.subtreeFlags=0,o=t,t=r.child;t!==null;)i=t,e=o,i.flags&=14680066,d=i.alternate,d===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=d.childLanes,i.lanes=d.lanes,i.child=d.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=d.memoizedProps,i.memoizedState=d.memoizedState,i.updateQueue=d.updateQueue,i.type=d.type,e=d.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return we(ze,ze.current&1|2),r.child}e=e.sibling}i.tail!==null&&Ae()>lt&&(r.flags|=128,o=!0,Qt(i,!1),r.lanes=4194304)}else{if(!o)if(e=Uo(d),e!==null){if(r.flags|=128,o=!0,t=e.updateQueue,t!==null&&(r.updateQueue=t,r.flags|=4),Qt(i,!0),i.tail===null&&i.tailMode==="hidden"&&!d.alternate&&!Ee)return Xe(r),null}else 2*Ae()-i.renderingStartTime>lt&&t!==1073741824&&(r.flags|=128,o=!0,Qt(i,!1),r.lanes=4194304);i.isBackwards?(d.sibling=r.child,r.child=d):(t=i.last,t!==null?t.sibling=d:r.child=d,i.last=d)}return i.tail!==null?(r=i.tail,i.rendering=r,i.tail=r.sibling,i.renderingStartTime=Ae(),r.sibling=null,t=ze.current,we(ze,o?t&1|2:t&1),r):(Xe(r),null);case 22:case 23:return gi(),o=r.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(r.flags|=8192),o&&(r.mode&1)!==0?(hr&1073741824)!==0&&(Xe(r),r.subtreeFlags&6&&(r.flags|=8192)):Xe(r),null;case 24:return null;case 25:return null}throw Error(a(156,r.tag))}function Ah(e,r){switch(Cl(r),r.tag){case 1:return or(r.type)&&_o(),e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 3:return nt(),ke(tr),ke(Ke),Dl(),e=r.flags,(e&65536)!==0&&(e&128)===0?(r.flags=e&-65537|128,r):null;case 5:return Rl(r),null;case 13:if(ke(ze),e=r.memoizedState,e!==null&&e.dehydrated!==null){if(r.alternate===null)throw Error(a(340));Xn()}return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 19:return ke(ze),null;case 4:return nt(),null;case 10:return _l(r.type._context),null;case 22:case 23:return gi(),null;case 24:return null;default:return null}}var Xo=!1,Ze=!1,Rh=typeof WeakSet=="function"?WeakSet:Set,O=null;function ot(e,r){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(o){Be(e,r,o)}else t.current=null}function si(e,r,t){try{t()}catch(o){Be(e,r,o)}}var Sd=!1;function Mh(e,r){if(gl=vo,e=tc(),cl(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var o=t.getSelection&&t.getSelection();if(o&&o.rangeCount!==0){t=o.anchorNode;var l=o.anchorOffset,i=o.focusNode;o=o.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var d=0,p=-1,h=-1,y=0,b=0,k=e,w=null;r:for(;;){for(var B;k!==t||l!==0&&k.nodeType!==3||(p=d+l),k!==i||o!==0&&k.nodeType!==3||(h=d+o),k.nodeType===3&&(d+=k.nodeValue.length),(B=k.firstChild)!==null;)w=k,k=B;for(;;){if(k===e)break r;if(w===t&&++y===l&&(p=d),w===i&&++b===o&&(h=d),(B=k.nextSibling)!==null)break;k=w,w=k.parentNode}k=B}t=p===-1||h===-1?null:{start:p,end:h}}else t=null}t=t||{start:0,end:0}}else t=null;for(vl={focusedElem:e,selectionRange:t},vo=!1,O=r;O!==null;)if(r=O,e=r.child,(r.subtreeFlags&1028)!==0&&e!==null)e.return=r,O=e;else for(;O!==null;){r=O;try{var A=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(A!==null){var R=A.memoizedProps,Re=A.memoizedState,g=r.stateNode,f=g.getSnapshotBeforeUpdate(r.elementType===r.type?R:Er(r.type,R),Re);g.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var v=r.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(a(163))}}catch(C){Be(r,r.return,C)}if(e=r.sibling,e!==null){e.return=r.return,O=e;break}O=r.return}return A=Sd,Sd=!1,A}function Gt(e,r,t){var o=r.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var l=o=o.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&si(r,t,i)}l=l.next}while(l!==o)}}function Zo(e,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var t=r=r.next;do{if((t.tag&e)===e){var o=t.create;t.destroy=o()}t=t.next}while(t!==r)}}function li(e){var r=e.ref;if(r!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof r=="function"?r(e):r.current=e}}function Cd(e){var r=e.alternate;r!==null&&(e.alternate=null,Cd(r)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(r=e.stateNode,r!==null&&(delete r[Or],delete r[Rt],delete r[wl],delete r[jh],delete r[Nh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ed(e){return e.tag===5||e.tag===3||e.tag===4}function Td(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ed(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ii(e,r,t){var o=e.tag;if(o===5||o===6)e=e.stateNode,r?t.nodeType===8?t.parentNode.insertBefore(e,r):t.insertBefore(e,r):(t.nodeType===8?(r=t.parentNode,r.insertBefore(e,t)):(r=t,r.appendChild(e)),t=t._reactRootContainer,t!=null||r.onclick!==null||(r.onclick=Po));else if(o!==4&&(e=e.child,e!==null))for(ii(e,r,t),e=e.sibling;e!==null;)ii(e,r,t),e=e.sibling}function ai(e,r,t){var o=e.tag;if(o===5||o===6)e=e.stateNode,r?t.insertBefore(e,r):t.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(ai(e,r,t),e=e.sibling;e!==null;)ai(e,r,t),e=e.sibling}var Je=null,Tr=!1;function cn(e,r,t){for(t=t.child;t!==null;)Id(e,r,t),t=t.sibling}function Id(e,r,t){if(Br&&typeof Br.onCommitFiberUnmount=="function")try{Br.onCommitFiberUnmount(po,t)}catch{}switch(t.tag){case 5:Ze||ot(t,r);case 6:var o=Je,l=Tr;Je=null,cn(e,r,t),Je=o,Tr=l,Je!==null&&(Tr?(e=Je,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):Je.removeChild(t.stateNode));break;case 18:Je!==null&&(Tr?(e=Je,t=t.stateNode,e.nodeType===8?Nl(e.parentNode,t):e.nodeType===1&&Nl(e,t),Ct(e)):Nl(Je,t.stateNode));break;case 4:o=Je,l=Tr,Je=t.stateNode.containerInfo,Tr=!0,cn(e,r,t),Je=o,Tr=l;break;case 0:case 11:case 14:case 15:if(!Ze&&(o=t.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){l=o=o.next;do{var i=l,d=i.destroy;i=i.tag,d!==void 0&&((i&2)!==0||(i&4)!==0)&&si(t,r,d),l=l.next}while(l!==o)}cn(e,r,t);break;case 1:if(!Ze&&(ot(t,r),o=t.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=t.memoizedProps,o.state=t.memoizedState,o.componentWillUnmount()}catch(p){Be(t,r,p)}cn(e,r,t);break;case 21:cn(e,r,t);break;case 22:t.mode&1?(Ze=(o=Ze)||t.memoizedState!==null,cn(e,r,t),Ze=o):cn(e,r,t);break;default:cn(e,r,t)}}function Pd(e){var r=e.updateQueue;if(r!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Rh),r.forEach(function(o){var l=Qh.bind(null,e,o);t.has(o)||(t.add(o),o.then(l,l))})}}function Ir(e,r){var t=r.deletions;if(t!==null)for(var o=0;o<t.length;o++){var l=t[o];try{var i=e,d=r,p=d;e:for(;p!==null;){switch(p.tag){case 5:Je=p.stateNode,Tr=!1;break e;case 3:Je=p.stateNode.containerInfo,Tr=!0;break e;case 4:Je=p.stateNode.containerInfo,Tr=!0;break e}p=p.return}if(Je===null)throw Error(a(160));Id(i,d,l),Je=null,Tr=!1;var h=l.alternate;h!==null&&(h.return=null),l.return=null}catch(y){Be(l,r,y)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)zd(r,e),r=r.sibling}function zd(e,r){var t=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ir(r,e),Mr(e),o&4){try{Gt(3,e,e.return),Zo(3,e)}catch(R){Be(e,e.return,R)}try{Gt(5,e,e.return)}catch(R){Be(e,e.return,R)}}break;case 1:Ir(r,e),Mr(e),o&512&&t!==null&&ot(t,t.return);break;case 5:if(Ir(r,e),Mr(e),o&512&&t!==null&&ot(t,t.return),e.flags&32){var l=e.stateNode;try{mt(l,"")}catch(R){Be(e,e.return,R)}}if(o&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,d=t!==null?t.memoizedProps:i,p=e.type,h=e.updateQueue;if(e.updateQueue=null,h!==null)try{p==="input"&&i.type==="radio"&&i.name!=null&&sa(l,i),Ds(p,d);var y=Ds(p,i);for(d=0;d<h.length;d+=2){var b=h[d],k=h[d+1];b==="style"?ha(l,k):b==="dangerouslySetInnerHTML"?ua(l,k):b==="children"?mt(l,k):ne(l,b,k,y)}switch(p){case"input":Bs(l,i);break;case"textarea":aa(l,i);break;case"select":var w=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var B=i.value;B!=null?Rn(l,!!i.multiple,B,!1):w!==!!i.multiple&&(i.defaultValue!=null?Rn(l,!!i.multiple,i.defaultValue,!0):Rn(l,!!i.multiple,i.multiple?[]:"",!1))}l[Rt]=i}catch(R){Be(e,e.return,R)}}break;case 6:if(Ir(r,e),Mr(e),o&4){if(e.stateNode===null)throw Error(a(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(R){Be(e,e.return,R)}}break;case 3:if(Ir(r,e),Mr(e),o&4&&t!==null&&t.memoizedState.isDehydrated)try{Ct(r.containerInfo)}catch(R){Be(e,e.return,R)}break;case 4:Ir(r,e),Mr(e);break;case 13:Ir(r,e),Mr(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(ui=Ae())),o&4&&Pd(e);break;case 22:if(b=t!==null&&t.memoizedState!==null,e.mode&1?(Ze=(y=Ze)||b,Ir(r,e),Ze=y):Ir(r,e),Mr(e),o&8192){if(y=e.memoizedState!==null,(e.stateNode.isHidden=y)&&!b&&(e.mode&1)!==0)for(O=e,b=e.child;b!==null;){for(k=O=b;O!==null;){switch(w=O,B=w.child,w.tag){case 0:case 11:case 14:case 15:Gt(4,w,w.return);break;case 1:ot(w,w.return);var A=w.stateNode;if(typeof A.componentWillUnmount=="function"){o=w,t=w.return;try{r=o,A.props=r.memoizedProps,A.state=r.memoizedState,A.componentWillUnmount()}catch(R){Be(o,t,R)}}break;case 5:ot(w,w.return);break;case 22:if(w.memoizedState!==null){Bd(k);continue}}B!==null?(B.return=w,O=B):Bd(k)}b=b.sibling}e:for(b=null,k=e;;){if(k.tag===5){if(b===null){b=k;try{l=k.stateNode,y?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(p=k.stateNode,h=k.memoizedProps.style,d=h!=null&&h.hasOwnProperty("display")?h.display:null,p.style.display=pa("display",d))}catch(R){Be(e,e.return,R)}}}else if(k.tag===6){if(b===null)try{k.stateNode.nodeValue=y?"":k.memoizedProps}catch(R){Be(e,e.return,R)}}else if((k.tag!==22&&k.tag!==23||k.memoizedState===null||k===e)&&k.child!==null){k.child.return=k,k=k.child;continue}if(k===e)break e;for(;k.sibling===null;){if(k.return===null||k.return===e)break e;b===k&&(b=null),k=k.return}b===k&&(b=null),k.sibling.return=k.return,k=k.sibling}}break;case 19:Ir(r,e),Mr(e),o&4&&Pd(e);break;case 21:break;default:Ir(r,e),Mr(e)}}function Mr(e){var r=e.flags;if(r&2){try{e:{for(var t=e.return;t!==null;){if(Ed(t)){var o=t;break e}t=t.return}throw Error(a(160))}switch(o.tag){case 5:var l=o.stateNode;o.flags&32&&(mt(l,""),o.flags&=-33);var i=Td(e);ai(e,i,l);break;case 3:case 4:var d=o.stateNode.containerInfo,p=Td(e);ii(e,p,d);break;default:throw Error(a(161))}}catch(h){Be(e,e.return,h)}e.flags&=-3}r&4096&&(e.flags&=-4097)}function Dh(e,r,t){O=e,_d(e)}function _d(e,r,t){for(var o=(e.mode&1)!==0;O!==null;){var l=O,i=l.child;if(l.tag===22&&o){var d=l.memoizedState!==null||Xo;if(!d){var p=l.alternate,h=p!==null&&p.memoizedState!==null||Ze;p=Xo;var y=Ze;if(Xo=d,(Ze=h)&&!y)for(O=l;O!==null;)d=O,h=d.child,d.tag===22&&d.memoizedState!==null?Od(l):h!==null?(h.return=d,O=h):Od(l);for(;i!==null;)O=i,_d(i),i=i.sibling;O=l,Xo=p,Ze=y}Ld(e)}else(l.subtreeFlags&8772)!==0&&i!==null?(i.return=l,O=i):Ld(e)}}function Ld(e){for(;O!==null;){var r=O;if((r.flags&8772)!==0){var t=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Ze||Zo(5,r);break;case 1:var o=r.stateNode;if(r.flags&4&&!Ze)if(t===null)o.componentDidMount();else{var l=r.elementType===r.type?t.memoizedProps:Er(r.type,t.memoizedProps);o.componentDidUpdate(l,t.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var i=r.updateQueue;i!==null&&Bc(r,i,o);break;case 3:var d=r.updateQueue;if(d!==null){if(t=null,r.child!==null)switch(r.child.tag){case 5:t=r.child.stateNode;break;case 1:t=r.child.stateNode}Bc(r,d,t)}break;case 5:var p=r.stateNode;if(t===null&&r.flags&4){t=p;var h=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":h.autoFocus&&t.focus();break;case"img":h.src&&(t.src=h.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var y=r.alternate;if(y!==null){var b=y.memoizedState;if(b!==null){var k=b.dehydrated;k!==null&&Ct(k)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(a(163))}Ze||r.flags&512&&li(r)}catch(w){Be(r,r.return,w)}}if(r===e){O=null;break}if(t=r.sibling,t!==null){t.return=r.return,O=t;break}O=r.return}}function Bd(e){for(;O!==null;){var r=O;if(r===e){O=null;break}var t=r.sibling;if(t!==null){t.return=r.return,O=t;break}O=r.return}}function Od(e){for(;O!==null;){var r=O;try{switch(r.tag){case 0:case 11:case 15:var t=r.return;try{Zo(4,r)}catch(h){Be(r,t,h)}break;case 1:var o=r.stateNode;if(typeof o.componentDidMount=="function"){var l=r.return;try{o.componentDidMount()}catch(h){Be(r,l,h)}}var i=r.return;try{li(r)}catch(h){Be(r,i,h)}break;case 5:var d=r.return;try{li(r)}catch(h){Be(r,d,h)}}}catch(h){Be(r,r.return,h)}if(r===e){O=null;break}var p=r.sibling;if(p!==null){p.return=r.return,O=p;break}O=r.return}}var Fh=Math.ceil,es=_.ReactCurrentDispatcher,ci=_.ReactCurrentOwner,jr=_.ReactCurrentBatchConfig,pe=0,$e=null,Me=null,Qe=0,hr=0,st=tn(0),He=0,Yt=null,En=0,rs=0,di=0,Kt=null,lr=null,ui=0,lt=1/0,Jr=null,ns=!1,pi=null,dn=null,ts=!1,un=null,os=0,qt=0,hi=null,ss=-1,ls=0;function nr(){return(pe&6)!==0?Ae():ss!==-1?ss:ss=Ae()}function pn(e){return(e.mode&1)===0?1:(pe&2)!==0&&Qe!==0?Qe&-Qe:bh.transition!==null?(ls===0&&(ls=Ta()),ls):(e=ye,e!==0||(e=window.event,e=e===void 0?16:Ra(e.type)),e)}function Pr(e,r,t,o){if(50<qt)throw qt=0,hi=null,Error(a(185));Nt(e,t,o),((pe&2)===0||e!==$e)&&(e===$e&&((pe&2)===0&&(rs|=t),He===4&&hn(e,Qe)),ir(e,o),t===1&&pe===0&&(r.mode&1)===0&&(lt=Ae()+500,Bo&&sn()))}function ir(e,r){var t=e.callbackNode;bp(e,r);var o=mo(e,e===$e?Qe:0);if(o===0)t!==null&&Sa(t),e.callbackNode=null,e.callbackPriority=0;else if(r=o&-o,e.callbackPriority!==r){if(t!=null&&Sa(t),r===1)e.tag===0?wh(Rd.bind(null,e)):wc(Rd.bind(null,e)),vh(function(){(pe&6)===0&&sn()}),t=null;else{switch(Ia(o)){case 1:t=Js;break;case 4:t=Ca;break;case 16:t=uo;break;case 536870912:t=Ea;break;default:t=uo}t=Vd(t,Ad.bind(null,e))}e.callbackPriority=r,e.callbackNode=t}}function Ad(e,r){if(ss=-1,ls=0,(pe&6)!==0)throw Error(a(327));var t=e.callbackNode;if(it()&&e.callbackNode!==t)return null;var o=mo(e,e===$e?Qe:0);if(o===0)return null;if((o&30)!==0||(o&e.expiredLanes)!==0||r)r=is(e,o);else{r=o;var l=pe;pe|=2;var i=Dd();($e!==e||Qe!==r)&&(Jr=null,lt=Ae()+500,In(e,r));do try{Uh();break}catch(p){Md(e,p)}while(!0);zl(),es.current=i,pe=l,Me!==null?r=0:($e=null,Qe=0,r=He)}if(r!==0){if(r===2&&(l=Qs(e),l!==0&&(o=l,r=fi(e,l))),r===1)throw t=Yt,In(e,0),hn(e,o),ir(e,Ae()),t;if(r===6)hn(e,o);else{if(l=e.current.alternate,(o&30)===0&&!Hh(l)&&(r=is(e,o),r===2&&(i=Qs(e),i!==0&&(o=i,r=fi(e,i))),r===1))throw t=Yt,In(e,0),hn(e,o),ir(e,Ae()),t;switch(e.finishedWork=l,e.finishedLanes=o,r){case 0:case 1:throw Error(a(345));case 2:Pn(e,lr,Jr);break;case 3:if(hn(e,o),(o&130023424)===o&&(r=ui+500-Ae(),10<r)){if(mo(e,0)!==0)break;if(l=e.suspendedLanes,(l&o)!==o){nr(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=jl(Pn.bind(null,e,lr,Jr),r);break}Pn(e,lr,Jr);break;case 4:if(hn(e,o),(o&4194240)===o)break;for(r=e.eventTimes,l=-1;0<o;){var d=31-kr(o);i=1<<d,d=r[d],d>l&&(l=d),o&=~i}if(o=l,o=Ae()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*Fh(o/1960))-o,10<o){e.timeoutHandle=jl(Pn.bind(null,e,lr,Jr),o);break}Pn(e,lr,Jr);break;case 5:Pn(e,lr,Jr);break;default:throw Error(a(329))}}}return ir(e,Ae()),e.callbackNode===t?Ad.bind(null,e):null}function fi(e,r){var t=Kt;return e.current.memoizedState.isDehydrated&&(In(e,r).flags|=256),e=is(e,r),e!==2&&(r=lr,lr=t,r!==null&&mi(r)),e}function mi(e){lr===null?lr=e:lr.push.apply(lr,e)}function Hh(e){for(var r=e;;){if(r.flags&16384){var t=r.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var o=0;o<t.length;o++){var l=t[o],i=l.getSnapshot;l=l.value;try{if(!Sr(i(),l))return!1}catch{return!1}}}if(t=r.child,r.subtreeFlags&16384&&t!==null)t.return=r,r=t;else{if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function hn(e,r){for(r&=~di,r&=~rs,e.suspendedLanes|=r,e.pingedLanes&=~r,e=e.expirationTimes;0<r;){var t=31-kr(r),o=1<<t;e[t]=-1,r&=~o}}function Rd(e){if((pe&6)!==0)throw Error(a(327));it();var r=mo(e,0);if((r&1)===0)return ir(e,Ae()),null;var t=is(e,r);if(e.tag!==0&&t===2){var o=Qs(e);o!==0&&(r=o,t=fi(e,o))}if(t===1)throw t=Yt,In(e,0),hn(e,r),ir(e,Ae()),t;if(t===6)throw Error(a(345));return e.finishedWork=e.current.alternate,e.finishedLanes=r,Pn(e,lr,Jr),ir(e,Ae()),null}function xi(e,r){var t=pe;pe|=1;try{return e(r)}finally{pe=t,pe===0&&(lt=Ae()+500,Bo&&sn())}}function Tn(e){un!==null&&un.tag===0&&(pe&6)===0&&it();var r=pe;pe|=1;var t=jr.transition,o=ye;try{if(jr.transition=null,ye=1,e)return e()}finally{ye=o,jr.transition=t,pe=r,(pe&6)===0&&sn()}}function gi(){hr=st.current,ke(st)}function In(e,r){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,gh(t)),Me!==null)for(t=Me.return;t!==null;){var o=t;switch(Cl(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&_o();break;case 3:nt(),ke(tr),ke(Ke),Dl();break;case 5:Rl(o);break;case 4:nt();break;case 13:ke(ze);break;case 19:ke(ze);break;case 10:_l(o.type._context);break;case 22:case 23:gi()}t=t.return}if($e=e,Me=e=fn(e.current,null),Qe=hr=r,He=0,Yt=null,di=rs=En=0,lr=Kt=null,kn!==null){for(r=0;r<kn.length;r++)if(t=kn[r],o=t.interleaved,o!==null){t.interleaved=null;var l=o.next,i=t.pending;if(i!==null){var d=i.next;i.next=l,o.next=d}t.pending=o}kn=null}return e}function Md(e,r){do{var t=Me;try{if(zl(),$o.current=Go,Vo){for(var o=_e.memoizedState;o!==null;){var l=o.queue;l!==null&&(l.pending=null),o=o.next}Vo=!1}if(Cn=0,Ue=Fe=_e=null,Ut=!1,$t=0,ci.current=null,t===null||t.return===null){He=1,Yt=r,Me=null;break}e:{var i=e,d=t.return,p=t,h=r;if(r=Qe,p.flags|=32768,h!==null&&typeof h=="object"&&typeof h.then=="function"){var y=h,b=p,k=b.tag;if((b.mode&1)===0&&(k===0||k===11||k===15)){var w=b.alternate;w?(b.updateQueue=w.updateQueue,b.memoizedState=w.memoizedState,b.lanes=w.lanes):(b.updateQueue=null,b.memoizedState=null)}var B=cd(d);if(B!==null){B.flags&=-257,dd(B,d,p,i,r),B.mode&1&&ad(i,y,r),r=B,h=y;var A=r.updateQueue;if(A===null){var R=new Set;R.add(h),r.updateQueue=R}else A.add(h);break e}else{if((r&1)===0){ad(i,y,r),vi();break e}h=Error(a(426))}}else if(Ee&&p.mode&1){var Re=cd(d);if(Re!==null){(Re.flags&65536)===0&&(Re.flags|=256),dd(Re,d,p,i,r),Il(tt(h,p));break e}}i=h=tt(h,p),He!==4&&(He=2),Kt===null?Kt=[i]:Kt.push(i),i=d;do{switch(i.tag){case 3:i.flags|=65536,r&=-r,i.lanes|=r;var g=ld(i,h,r);Lc(i,g);break e;case 1:p=h;var f=i.type,v=i.stateNode;if((i.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(dn===null||!dn.has(v)))){i.flags|=65536,r&=-r,i.lanes|=r;var C=id(i,p,r);Lc(i,C);break e}}i=i.return}while(i!==null)}Hd(t)}catch(D){r=D,Me===t&&t!==null&&(Me=t=t.return);continue}break}while(!0)}function Dd(){var e=es.current;return es.current=Go,e===null?Go:e}function vi(){(He===0||He===3||He===2)&&(He=4),$e===null||(En&268435455)===0&&(rs&268435455)===0||hn($e,Qe)}function is(e,r){var t=pe;pe|=2;var o=Dd();($e!==e||Qe!==r)&&(Jr=null,In(e,r));do try{Wh();break}catch(l){Md(e,l)}while(!0);if(zl(),pe=t,es.current=o,Me!==null)throw Error(a(261));return $e=null,Qe=0,He}function Wh(){for(;Me!==null;)Fd(Me)}function Uh(){for(;Me!==null&&!fp();)Fd(Me)}function Fd(e){var r=$d(e.alternate,e,hr);e.memoizedProps=e.pendingProps,r===null?Hd(e):Me=r,ci.current=null}function Hd(e){var r=e;do{var t=r.alternate;if(e=r.return,(r.flags&32768)===0){if(t=Oh(t,r,hr),t!==null){Me=t;return}}else{if(t=Ah(t,r),t!==null){t.flags&=32767,Me=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{He=6,Me=null;return}}if(r=r.sibling,r!==null){Me=r;return}Me=r=e}while(r!==null);He===0&&(He=5)}function Pn(e,r,t){var o=ye,l=jr.transition;try{jr.transition=null,ye=1,$h(e,r,t,o)}finally{jr.transition=l,ye=o}return null}function $h(e,r,t,o){do it();while(un!==null);if((pe&6)!==0)throw Error(a(327));t=e.finishedWork;var l=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(a(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(kp(e,i),e===$e&&(Me=$e=null,Qe=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||ts||(ts=!0,Vd(uo,function(){return it(),null})),i=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||i){i=jr.transition,jr.transition=null;var d=ye;ye=1;var p=pe;pe|=4,ci.current=null,Mh(e,t),zd(t,e),dh(vl),vo=!!gl,vl=gl=null,e.current=t,Dh(t),mp(),pe=p,ye=d,jr.transition=i}else e.current=t;if(ts&&(ts=!1,un=e,os=l),i=e.pendingLanes,i===0&&(dn=null),vp(t.stateNode),ir(e,Ae()),r!==null)for(o=e.onRecoverableError,t=0;t<r.length;t++)l=r[t],o(l.value,{componentStack:l.stack,digest:l.digest});if(ns)throw ns=!1,e=pi,pi=null,e;return(os&1)!==0&&e.tag!==0&&it(),i=e.pendingLanes,(i&1)!==0?e===hi?qt++:(qt=0,hi=e):qt=0,sn(),null}function it(){if(un!==null){var e=Ia(os),r=jr.transition,t=ye;try{if(jr.transition=null,ye=16>e?16:e,un===null)var o=!1;else{if(e=un,un=null,os=0,(pe&6)!==0)throw Error(a(331));var l=pe;for(pe|=4,O=e.current;O!==null;){var i=O,d=i.child;if((O.flags&16)!==0){var p=i.deletions;if(p!==null){for(var h=0;h<p.length;h++){var y=p[h];for(O=y;O!==null;){var b=O;switch(b.tag){case 0:case 11:case 15:Gt(8,b,i)}var k=b.child;if(k!==null)k.return=b,O=k;else for(;O!==null;){b=O;var w=b.sibling,B=b.return;if(Cd(b),b===y){O=null;break}if(w!==null){w.return=B,O=w;break}O=B}}}var A=i.alternate;if(A!==null){var R=A.child;if(R!==null){A.child=null;do{var Re=R.sibling;R.sibling=null,R=Re}while(R!==null)}}O=i}}if((i.subtreeFlags&2064)!==0&&d!==null)d.return=i,O=d;else e:for(;O!==null;){if(i=O,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:Gt(9,i,i.return)}var g=i.sibling;if(g!==null){g.return=i.return,O=g;break e}O=i.return}}var f=e.current;for(O=f;O!==null;){d=O;var v=d.child;if((d.subtreeFlags&2064)!==0&&v!==null)v.return=d,O=v;else e:for(d=f;O!==null;){if(p=O,(p.flags&2048)!==0)try{switch(p.tag){case 0:case 11:case 15:Zo(9,p)}}catch(D){Be(p,p.return,D)}if(p===d){O=null;break e}var C=p.sibling;if(C!==null){C.return=p.return,O=C;break e}O=p.return}}if(pe=l,sn(),Br&&typeof Br.onPostCommitFiberRoot=="function")try{Br.onPostCommitFiberRoot(po,e)}catch{}o=!0}return o}finally{ye=t,jr.transition=r}}return!1}function Wd(e,r,t){r=tt(t,r),r=ld(e,r,1),e=an(e,r,1),r=nr(),e!==null&&(Nt(e,1,r),ir(e,r))}function Be(e,r,t){if(e.tag===3)Wd(e,e,t);else for(;r!==null;){if(r.tag===3){Wd(r,e,t);break}else if(r.tag===1){var o=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(dn===null||!dn.has(o))){e=tt(t,e),e=id(r,e,1),r=an(r,e,1),e=nr(),r!==null&&(Nt(r,1,e),ir(r,e));break}}r=r.return}}function Vh(e,r,t){var o=e.pingCache;o!==null&&o.delete(r),r=nr(),e.pingedLanes|=e.suspendedLanes&t,$e===e&&(Qe&t)===t&&(He===4||He===3&&(Qe&130023424)===Qe&&500>Ae()-ui?In(e,0):di|=t),ir(e,r)}function Ud(e,r){r===0&&((e.mode&1)===0?r=1:(r=fo,fo<<=1,(fo&130023424)===0&&(fo=4194304)));var t=nr();e=Ur(e,r),e!==null&&(Nt(e,r,t),ir(e,t))}function Jh(e){var r=e.memoizedState,t=0;r!==null&&(t=r.retryLane),Ud(e,t)}function Qh(e,r){var t=0;switch(e.tag){case 13:var o=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(a(314))}o!==null&&o.delete(r),Ud(e,t)}var $d;$d=function(e,r,t){if(e!==null)if(e.memoizedProps!==r.pendingProps||tr.current)sr=!0;else{if((e.lanes&t)===0&&(r.flags&128)===0)return sr=!1,Bh(e,r,t);sr=(e.flags&131072)!==0}else sr=!1,Ee&&(r.flags&1048576)!==0&&bc(r,Ao,r.index);switch(r.lanes=0,r.tag){case 2:var o=r.type;qo(e,r),e=r.pendingProps;var l=Yn(r,Ke.current);rt(r,t),l=Wl(null,r,o,e,l,t);var i=Ul();return r.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,or(o)?(i=!0,Lo(r)):i=!1,r.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Ol(r),l.updater=Yo,r.stateNode=l,l._reactInternals=r,Yl(r,o,e,t),r=Zl(null,r,o,!0,i,t)):(r.tag=0,Ee&&i&&Sl(r),rr(null,r,l,t),r=r.child),r;case 16:o=r.elementType;e:{switch(qo(e,r),e=r.pendingProps,l=o._init,o=l(o._payload),r.type=o,l=r.tag=Yh(o),e=Er(o,e),l){case 0:r=Xl(null,r,o,e,t);break e;case 1:r=xd(null,r,o,e,t);break e;case 11:r=ud(null,r,o,e,t);break e;case 14:r=pd(null,r,o,Er(o.type,e),t);break e}throw Error(a(306,o,""))}return r;case 0:return o=r.type,l=r.pendingProps,l=r.elementType===o?l:Er(o,l),Xl(e,r,o,l,t);case 1:return o=r.type,l=r.pendingProps,l=r.elementType===o?l:Er(o,l),xd(e,r,o,l,t);case 3:e:{if(gd(r),e===null)throw Error(a(387));o=r.pendingProps,i=r.memoizedState,l=i.element,_c(e,r),Wo(r,o,null,t);var d=r.memoizedState;if(o=d.element,i.isDehydrated)if(i={element:o,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},r.updateQueue.baseState=i,r.memoizedState=i,r.flags&256){l=tt(Error(a(423)),r),r=vd(e,r,o,t,l);break e}else if(o!==l){l=tt(Error(a(424)),r),r=vd(e,r,o,t,l);break e}else for(pr=nn(r.stateNode.containerInfo.firstChild),ur=r,Ee=!0,Cr=null,t=Pc(r,null,o,t),r.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Xn(),o===l){r=Vr(e,r,t);break e}rr(e,r,o,t)}r=r.child}return r;case 5:return Oc(r),e===null&&Tl(r),o=r.type,l=r.pendingProps,i=e!==null?e.memoizedProps:null,d=l.children,yl(o,l)?d=null:i!==null&&yl(o,i)&&(r.flags|=32),md(e,r),rr(e,r,d,t),r.child;case 6:return e===null&&Tl(r),null;case 13:return yd(e,r,t);case 4:return Al(r,r.stateNode.containerInfo),o=r.pendingProps,e===null?r.child=Zn(r,null,o,t):rr(e,r,o,t),r.child;case 11:return o=r.type,l=r.pendingProps,l=r.elementType===o?l:Er(o,l),ud(e,r,o,l,t);case 7:return rr(e,r,r.pendingProps,t),r.child;case 8:return rr(e,r,r.pendingProps.children,t),r.child;case 12:return rr(e,r,r.pendingProps.children,t),r.child;case 10:e:{if(o=r.type._context,l=r.pendingProps,i=r.memoizedProps,d=l.value,we(Do,o._currentValue),o._currentValue=d,i!==null)if(Sr(i.value,d)){if(i.children===l.children&&!tr.current){r=Vr(e,r,t);break e}}else for(i=r.child,i!==null&&(i.return=r);i!==null;){var p=i.dependencies;if(p!==null){d=i.child;for(var h=p.firstContext;h!==null;){if(h.context===o){if(i.tag===1){h=$r(-1,t&-t),h.tag=2;var y=i.updateQueue;if(y!==null){y=y.shared;var b=y.pending;b===null?h.next=h:(h.next=b.next,b.next=h),y.pending=h}}i.lanes|=t,h=i.alternate,h!==null&&(h.lanes|=t),Ll(i.return,t,r),p.lanes|=t;break}h=h.next}}else if(i.tag===10)d=i.type===r.type?null:i.child;else if(i.tag===18){if(d=i.return,d===null)throw Error(a(341));d.lanes|=t,p=d.alternate,p!==null&&(p.lanes|=t),Ll(d,t,r),d=i.sibling}else d=i.child;if(d!==null)d.return=i;else for(d=i;d!==null;){if(d===r){d=null;break}if(i=d.sibling,i!==null){i.return=d.return,d=i;break}d=d.return}i=d}rr(e,r,l.children,t),r=r.child}return r;case 9:return l=r.type,o=r.pendingProps.children,rt(r,t),l=vr(l),o=o(l),r.flags|=1,rr(e,r,o,t),r.child;case 14:return o=r.type,l=Er(o,r.pendingProps),l=Er(o.type,l),pd(e,r,o,l,t);case 15:return hd(e,r,r.type,r.pendingProps,t);case 17:return o=r.type,l=r.pendingProps,l=r.elementType===o?l:Er(o,l),qo(e,r),r.tag=1,or(o)?(e=!0,Lo(r)):e=!1,rt(r,t),od(r,o,l),Yl(r,o,l,t),Zl(null,r,o,!0,e,t);case 19:return Nd(e,r,t);case 22:return fd(e,r,t)}throw Error(a(156,r.tag))};function Vd(e,r){return ka(e,r)}function Gh(e,r,t,o){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nr(e,r,t,o){return new Gh(e,r,t,o)}function yi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Yh(e){if(typeof e=="function")return yi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Le)return 11;if(e===er)return 14}return 2}function fn(e,r){var t=e.alternate;return t===null?(t=Nr(e.tag,r,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=r,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,r=e.dependencies,t.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function as(e,r,t,o,l,i){var d=2;if(o=e,typeof e=="function")yi(e)&&(d=1);else if(typeof e=="string")d=5;else e:switch(e){case P:return zn(t.children,l,i,r);case M:d=8,l|=8;break;case je:return e=Nr(12,t,r,l|2),e.elementType=je,e.lanes=i,e;case Ce:return e=Nr(13,t,r,l),e.elementType=Ce,e.lanes=i,e;case Ge:return e=Nr(19,t,r,l),e.elementType=Ge,e.lanes=i,e;case Ne:return cs(t,l,i,r);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Oe:d=10;break e;case le:d=9;break e;case Le:d=11;break e;case er:d=14;break e;case Ye:d=16,o=null;break e}throw Error(a(130,e==null?e:typeof e,""))}return r=Nr(d,t,r,l),r.elementType=e,r.type=o,r.lanes=i,r}function zn(e,r,t,o){return e=Nr(7,e,o,r),e.lanes=t,e}function cs(e,r,t,o){return e=Nr(22,e,o,r),e.elementType=Ne,e.lanes=t,e.stateNode={isHidden:!1},e}function ji(e,r,t){return e=Nr(6,e,null,r),e.lanes=t,e}function Ni(e,r,t){return r=Nr(4,e.children!==null?e.children:[],e.key,r),r.lanes=t,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}function Kh(e,r,t,o,l){this.tag=r,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gs(0),this.expirationTimes=Gs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gs(0),this.identifierPrefix=o,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function wi(e,r,t,o,l,i,d,p,h){return e=new Kh(e,r,t,p,h),r===1?(r=1,i===!0&&(r|=8)):r=0,i=Nr(3,null,null,r),e.current=i,i.stateNode=e,i.memoizedState={element:o,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ol(i),e}function qh(e,r,t){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:U,key:o==null?null:""+o,children:e,containerInfo:r,implementation:t}}function Jd(e){if(!e)return on;e=e._reactInternals;e:{if(yn(e)!==e||e.tag!==1)throw Error(a(170));var r=e;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(or(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(a(171))}if(e.tag===1){var t=e.type;if(or(t))return jc(e,t,r)}return r}function Qd(e,r,t,o,l,i,d,p,h){return e=wi(t,o,!0,e,l,i,d,p,h),e.context=Jd(null),t=e.current,o=nr(),l=pn(t),i=$r(o,l),i.callback=r!=null?r:null,an(t,i,l),e.current.lanes=l,Nt(e,l,o),ir(e,o),e}function ds(e,r,t,o){var l=r.current,i=nr(),d=pn(l);return t=Jd(t),r.context===null?r.context=t:r.pendingContext=t,r=$r(i,d),r.payload={element:e},o=o===void 0?null:o,o!==null&&(r.callback=o),e=an(l,r,d),e!==null&&(Pr(e,l,d,i),Ho(e,l,d)),d}function us(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Gd(e,r){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<r?t:r}}function bi(e,r){Gd(e,r),(e=e.alternate)&&Gd(e,r)}function Xh(){return null}var Yd=typeof reportError=="function"?reportError:function(e){console.error(e)};function ki(e){this._internalRoot=e}ps.prototype.render=ki.prototype.render=function(e){var r=this._internalRoot;if(r===null)throw Error(a(409));ds(e,r,null,null)},ps.prototype.unmount=ki.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var r=e.containerInfo;Tn(function(){ds(null,e,null,null)}),r[Dr]=null}};function ps(e){this._internalRoot=e}ps.prototype.unstable_scheduleHydration=function(e){if(e){var r=_a();e={blockedOn:null,target:e,priority:r};for(var t=0;t<Zr.length&&r!==0&&r<Zr[t].priority;t++);Zr.splice(t,0,e),t===0&&Oa(e)}};function Si(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function hs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Kd(){}function Zh(e,r,t,o,l){if(l){if(typeof o=="function"){var i=o;o=function(){var y=us(d);i.call(y)}}var d=Qd(r,o,e,0,null,!1,!1,"",Kd);return e._reactRootContainer=d,e[Dr]=d.current,Ot(e.nodeType===8?e.parentNode:e),Tn(),d}for(;l=e.lastChild;)e.removeChild(l);if(typeof o=="function"){var p=o;o=function(){var y=us(h);p.call(y)}}var h=wi(e,0,!1,null,null,!1,!1,"",Kd);return e._reactRootContainer=h,e[Dr]=h.current,Ot(e.nodeType===8?e.parentNode:e),Tn(function(){ds(r,h,t,o)}),h}function fs(e,r,t,o,l){var i=t._reactRootContainer;if(i){var d=i;if(typeof l=="function"){var p=l;l=function(){var h=us(d);p.call(h)}}ds(r,d,e,l)}else d=Zh(t,r,e,l,o);return us(d)}Pa=function(e){switch(e.tag){case 3:var r=e.stateNode;if(r.current.memoizedState.isDehydrated){var t=jt(r.pendingLanes);t!==0&&(Ys(r,t|1),ir(r,Ae()),(pe&6)===0&&(lt=Ae()+500,sn()))}break;case 13:Tn(function(){var o=Ur(e,1);if(o!==null){var l=nr();Pr(o,e,1,l)}}),bi(e,1)}},Ks=function(e){if(e.tag===13){var r=Ur(e,134217728);if(r!==null){var t=nr();Pr(r,e,134217728,t)}bi(e,134217728)}},za=function(e){if(e.tag===13){var r=pn(e),t=Ur(e,r);if(t!==null){var o=nr();Pr(t,e,r,o)}bi(e,r)}},_a=function(){return ye},La=function(e,r){var t=ye;try{return ye=e,r()}finally{ye=t}},Ws=function(e,r,t){switch(r){case"input":if(Bs(e,t),r=t.name,t.type==="radio"&&r!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<t.length;r++){var o=t[r];if(o!==e&&o.form===e.form){var l=zo(o);if(!l)throw Error(a(90));vn(o),Bs(o,l)}}}break;case"textarea":aa(e,t);break;case"select":r=t.value,r!=null&&Rn(e,!!t.multiple,r,!1)}},ga=xi,va=Tn;var ef={usingClientEntryPoint:!1,Events:[Mt,Qn,zo,ma,xa,xi]},Xt={findFiberByHostInstance:jn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},rf={bundleType:Xt.bundleType,version:Xt.version,rendererPackageName:Xt.rendererPackageName,rendererConfig:Xt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=wa(e),e===null?null:e.stateNode},findFiberByHostInstance:Xt.findFiberByHostInstance||Xh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var ms=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ms.isDisabled&&ms.supportsFiber)try{po=ms.inject(rf),Br=ms}catch{}}return ar.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ef,ar.createPortal=function(e,r){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Si(r))throw Error(a(200));return qh(e,r,null,t)},ar.createRoot=function(e,r){if(!Si(e))throw Error(a(299));var t=!1,o="",l=Yd;return r!=null&&(r.unstable_strictMode===!0&&(t=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(l=r.onRecoverableError)),r=wi(e,1,!1,null,null,t,!1,o,l),e[Dr]=r.current,Ot(e.nodeType===8?e.parentNode:e),new ki(r)},ar.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var r=e._reactInternals;if(r===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=wa(r),e=e===null?null:e.stateNode,e},ar.flushSync=function(e){return Tn(e)},ar.hydrate=function(e,r,t){if(!hs(r))throw Error(a(200));return fs(null,e,r,!0,t)},ar.hydrateRoot=function(e,r,t){if(!Si(e))throw Error(a(405));var o=t!=null&&t.hydratedSources||null,l=!1,i="",d=Yd;if(t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(d=t.onRecoverableError)),r=Qd(r,null,e,1,t!=null?t:null,l,!1,i,d),e[Dr]=r.current,Ot(e),o)for(e=0;e<o.length;e++)t=o[e],l=t._getVersion,l=l(t._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[t,l]:r.mutableSourceEagerHydrationData.push(t,l);return new ps(r)},ar.render=function(e,r,t){if(!hs(r))throw Error(a(200));return fs(null,e,r,!1,t)},ar.unmountComponentAtNode=function(e){if(!hs(e))throw Error(a(40));return e._reactRootContainer?(Tn(function(){fs(null,null,e,!1,function(){e._reactRootContainer=null,e[Dr]=null})}),!0):!1},ar.unstable_batchedUpdates=xi,ar.unstable_renderSubtreeIntoContainer=function(e,r,t,o){if(!hs(t))throw Error(a(200));if(e==null||e._reactInternals===void 0)throw Error(a(38));return fs(e,r,t,!1,o)},ar.version="18.3.1-next-f1338f8080-20240426",ar}var ou;function uf(){if(ou)return Ti.exports;ou=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(c){console.error(c)}}return s(),Ti.exports=df(),Ti.exports}var su;function pf(){if(su)return xs;su=1;var s=uf();return xs.createRoot=s.createRoot,xs.hydrateRoot=s.hydrateRoot,xs}var hf=pf(),xe=Ki();const mr=tf(xe);var cr=function(){return cr=Object.assign||function(c){for(var a,u=1,m=arguments.length;u<m;u++){a=arguments[u];for(var j in a)Object.prototype.hasOwnProperty.call(a,j)&&(c[j]=a[j])}return c},cr.apply(this,arguments)};function ws(s,c,a){if(a||arguments.length===2)for(var u=0,m=c.length,j;u<m;u++)(j||!(u in c))&&(j||(j=Array.prototype.slice.call(c,0,u)),j[u]=c[u]);return s.concat(j||Array.prototype.slice.call(c))}var Se="-ms-",no="-moz-",me="-webkit-",Tu="comm",Ts="rule",qi="decl",ff="@import",mf="@namespace",Iu="@keyframes",xf="@layer",Pu=Math.abs,Xi=String.fromCharCode,Di=Object.assign;function gf(s,c){return We(s,0)^45?(((c<<2^We(s,0))<<2^We(s,1))<<2^We(s,2))<<2^We(s,3):0}function zu(s){return s.trim()}function Qr(s,c){return(s=c.exec(s))?s[0]:s}function re(s,c,a){return s.replace(c,a)}function gs(s,c,a){return s.indexOf(c,a)}function We(s,c){return s.charCodeAt(c)|0}function An(s,c,a){return s.slice(c,a)}function zr(s){return s.length}function _u(s){return s.length}function eo(s,c){return c.push(s),s}function vf(s,c){return s.map(c).join("")}function lu(s,c){return s.filter(function(a){return!Qr(a,c)})}var Is=1,ct=1,Lu=0,wr=0,De=0,ht="";function Ps(s,c,a,u,m,j,S,z){return{value:s,root:c,parent:a,type:u,props:m,children:j,line:Is,column:ct,length:S,return:"",siblings:z}}function xn(s,c){return Di(Ps("",null,null,"",null,null,0,s.siblings),s,{length:-s.length},c)}function at(s){for(;s.root;)s=xn(s.root,{children:[s]});eo(s,s.siblings)}function yf(){return De}function jf(){return De=wr>0?We(ht,--wr):0,ct--,De===10&&(ct=1,Is--),De}function _r(){return De=wr<Lu?We(ht,wr++):0,ct++,De===10&&(ct=1,Is++),De}function gn(){return We(ht,wr)}function vs(){return wr}function zs(s,c){return An(ht,s,c)}function oo(s){switch(s){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Nf(s){return Is=ct=1,Lu=zr(ht=s),wr=0,[]}function wf(s){return ht="",s}function zi(s){return zu(zs(wr-1,Fi(s===91?s+2:s===40?s+1:s)))}function bf(s){for(;(De=gn())&&De<33;)_r();return oo(s)>2||oo(De)>3?"":" "}function kf(s,c){for(;--c&&_r()&&!(De<48||De>102||De>57&&De<65||De>70&&De<97););return zs(s,vs()+(c<6&&gn()==32&&_r()==32))}function Fi(s){for(;_r();)switch(De){case s:return wr;case 34:case 39:s!==34&&s!==39&&Fi(De);break;case 40:s===41&&Fi(s);break;case 92:_r();break}return wr}function Sf(s,c){for(;_r()&&s+De!==57;)if(s+De===84&&gn()===47)break;return"/*"+zs(c,wr-1)+"*"+Xi(s===47?s:_r())}function Cf(s){for(;!oo(gn());)_r();return zs(s,wr)}function Ef(s){return wf(ys("",null,null,null,[""],s=Nf(s),0,[0],s))}function ys(s,c,a,u,m,j,S,z,E){for(var Y=0,J=0,H=S,X=0,ae=0,K=0,W=1,Q=1,ge=1,de=0,ne="",_=m,q=j,U=u,P=ne;Q;)switch(K=de,de=_r()){case 40:if(K!=108&&We(P,H-1)==58){gs(P+=re(zi(de),"&","&\f"),"&\f",Pu(Y?z[Y-1]:0))!=-1&&(ge=-1);break}case 34:case 39:case 91:P+=zi(de);break;case 9:case 10:case 13:case 32:P+=bf(K);break;case 92:P+=kf(vs()-1,7);continue;case 47:switch(gn()){case 42:case 47:eo(Tf(Sf(_r(),vs()),c,a,E),E),(oo(K||1)==5||oo(gn()||1)==5)&&zr(P)&&An(P,-1,void 0)!==" "&&(P+=" ");break;default:P+="/"}break;case 123*W:z[Y++]=zr(P)*ge;case 125*W:case 59:case 0:switch(de){case 0:case 125:Q=0;case 59+J:ge==-1&&(P=re(P,/\f/g,"")),ae>0&&(zr(P)-H||W===0&&K===47)&&eo(ae>32?au(P+";",u,a,H-1,E):au(re(P," ","")+";",u,a,H-2,E),E);break;case 59:P+=";";default:if(eo(U=iu(P,c,a,Y,J,m,z,ne,_=[],q=[],H,j),j),de===123)if(J===0)ys(P,c,U,U,_,j,H,z,q);else{switch(X){case 99:if(We(P,3)===110)break;case 108:if(We(P,2)===97)break;default:J=0;case 100:case 109:case 115:}J?ys(s,U,U,u&&eo(iu(s,U,U,0,0,m,z,ne,m,_=[],H,q),q),m,q,H,z,u?_:q):ys(P,U,U,U,[""],q,0,z,q)}}Y=J=ae=0,W=ge=1,ne=P="",H=S;break;case 58:H=1+zr(P),ae=K;default:if(W<1){if(de==123)--W;else if(de==125&&W++==0&&jf()==125)continue}switch(P+=Xi(de),de*W){case 38:ge=J>0?1:(P+="\f",-1);break;case 44:z[Y++]=(zr(P)-1)*ge,ge=1;break;case 64:gn()===45&&(P+=zi(_r())),X=gn(),J=H=zr(ne=P+=Cf(vs())),de++;break;case 45:K===45&&zr(P)==2&&(W=0)}}return j}function iu(s,c,a,u,m,j,S,z,E,Y,J,H){for(var X=m-1,ae=m===0?j:[""],K=_u(ae),W=0,Q=0,ge=0;W<u;++W)for(var de=0,ne=An(s,X+1,X=Pu(Q=S[W])),_=s;de<K;++de)(_=zu(Q>0?ae[de]+" "+ne:re(ne,/&\f/g,ae[de])))&&(E[ge++]=_);return Ps(s,c,a,m===0?Ts:z,E,Y,J,H)}function Tf(s,c,a,u){return Ps(s,c,a,Tu,Xi(yf()),An(s,2,-2),0,u)}function au(s,c,a,u,m){return Ps(s,c,a,qi,An(s,0,u),An(s,u+1,-1),u,m)}function Bu(s,c,a){switch(gf(s,c)){case 5103:return me+"print-"+s+s;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return me+s+s;case 4855:return me+s.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+s;case 4789:return no+s+s;case 5349:case 4246:case 4810:case 6968:case 2756:return me+s+no+s+Se+s+s;case 5936:switch(We(s,c+11)){case 114:return me+s+Se+re(s,/[svh]\w+-[tblr]{2}/,"tb")+s;case 108:return me+s+Se+re(s,/[svh]\w+-[tblr]{2}/,"tb-rl")+s;case 45:return me+s+Se+re(s,/[svh]\w+-[tblr]{2}/,"lr")+s}case 6828:case 4268:case 2903:return me+s+Se+s+s;case 6165:return me+s+Se+"flex-"+s+s;case 5187:return me+s+re(s,/(\w+).+(:[^]+)/,me+"box-$1$2"+Se+"flex-$1$2")+s;case 5443:return me+s+Se+"flex-item-"+re(s,/flex-|-self/g,"")+(Qr(s,/flex-|baseline/)?"":Se+"grid-row-"+re(s,/flex-|-self/g,""))+s;case 4675:return me+s+Se+"flex-line-pack"+re(s,/align-content|flex-|-self/g,"")+s;case 5548:return me+s+Se+re(s,"shrink","negative")+s;case 5292:return me+s+Se+re(s,"basis","preferred-size")+s;case 6060:return me+"box-"+re(s,"-grow","")+me+s+Se+re(s,"grow","positive")+s;case 4554:return me+re(s,/([^-])(transform)/g,"$1"+me+"$2")+s;case 6187:return re(re(re(s,/(zoom-|grab)/,me+"$1"),/(image-set)/,me+"$1"),s,"")+s;case 5495:case 3959:return re(s,/(image-set\([^]*)/,me+"$1$`$1");case 4968:return re(re(s,/(.+:)(flex-)?(.*)/,me+"box-pack:$3"+Se+"flex-pack:$3"),/space-between/,"justify")+me+s+s;case 4200:if(!Qr(s,/flex-|baseline/))return Se+"grid-column-align"+An(s,c)+s;break;case 2592:case 3360:return Se+re(s,"template-","")+s;case 4384:case 3616:return a&&a.some(function(u,m){return c=m,Qr(u.props,/grid-\w+-end/)})?~gs(s+(a=a[c].value),"span",0)?s:Se+re(s,"-start","")+s+Se+"grid-row-span:"+(~gs(a,"span",0)?Qr(a,/\d+/):+Qr(a,/\d+/)-+Qr(s,/\d+/))+";":Se+re(s,"-start","")+s;case 4896:case 4128:return a&&a.some(function(u){return Qr(u.props,/grid-\w+-start/)})?s:Se+re(re(s,"-end","-span"),"span ","")+s;case 4095:case 3583:case 4068:case 2532:return re(s,/(.+)-inline(.+)/,me+"$1$2")+s;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(zr(s)-1-c>6)switch(We(s,c+1)){case 109:if(We(s,c+4)!==45)break;case 102:return re(s,/(.+:)(.+)-([^]+)/,"$1"+me+"$2-$3$1"+no+(We(s,c+3)==108?"$3":"$2-$3"))+s;case 115:return~gs(s,"stretch",0)?Bu(re(s,"stretch","fill-available"),c,a)+s:s}break;case 5152:case 5920:return re(s,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(u,m,j,S,z,E,Y){return Se+m+":"+j+Y+(S?Se+m+"-span:"+(z?E:+E-+j)+Y:"")+s});case 4949:if(We(s,c+6)===121)return re(s,":",":"+me)+s;break;case 6444:switch(We(s,We(s,14)===45?18:11)){case 120:return re(s,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+me+(We(s,14)===45?"inline-":"")+"box$3$1"+me+"$2$3$1"+Se+"$2box$3")+s;case 100:return re(s,":",":"+Se)+s}break;case 5719:case 2647:case 2135:case 3927:case 2391:return re(s,"scroll-","scroll-snap-")+s}return s}function bs(s,c){for(var a="",u=0;u<s.length;u++)a+=c(s[u],u,s,c)||"";return a}function If(s,c,a,u){switch(s.type){case xf:if(s.children.length)break;case ff:case mf:case qi:return s.return=s.return||s.value;case Tu:return"";case Iu:return s.return=s.value+"{"+bs(s.children,u)+"}";case Ts:if(!zr(s.value=s.props.join(",")))return""}return zr(a=bs(s.children,u))?s.return=s.value+"{"+a+"}":""}function Pf(s){var c=_u(s);return function(a,u,m,j){for(var S="",z=0;z<c;z++)S+=s[z](a,u,m,j)||"";return S}}function zf(s){return function(c){c.root||(c=c.return)&&s(c)}}function _f(s,c,a,u){if(s.length>-1&&!s.return)switch(s.type){case qi:s.return=Bu(s.value,s.length,a);return;case Iu:return bs([xn(s,{value:re(s.value,"@","@"+me)})],u);case Ts:if(s.length)return vf(a=s.props,function(m){switch(Qr(m,u=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":at(xn(s,{props:[re(m,/:(read-\w+)/,":"+no+"$1")]})),at(xn(s,{props:[m]})),Di(s,{props:lu(a,u)});break;case"::placeholder":at(xn(s,{props:[re(m,/:(plac\w+)/,":"+me+"input-$1")]})),at(xn(s,{props:[re(m,/:(plac\w+)/,":"+no+"$1")]})),at(xn(s,{props:[re(m,/:(plac\w+)/,Se+"input-$1")]})),at(xn(s,{props:[m]})),Di(s,{props:lu(a,u)});break}return""})}}var Lf={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},fr={},dt=typeof process!="undefined"&&fr!==void 0&&(fr.REACT_APP_SC_ATTR||fr.SC_ATTR)||"data-styled",Ou="active",Au="data-styled-version",_s="6.3.10",Zi=`/*!sc*/
`,to=typeof window!="undefined"&&typeof document!="undefined",Bf=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&fr!==void 0&&fr.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&fr.REACT_APP_SC_DISABLE_SPEEDY!==""?fr.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&fr.REACT_APP_SC_DISABLE_SPEEDY:typeof process!="undefined"&&fr!==void 0&&fr.SC_DISABLE_SPEEDY!==void 0&&fr.SC_DISABLE_SPEEDY!==""&&fr.SC_DISABLE_SPEEDY!=="false"&&fr.SC_DISABLE_SPEEDY);function lo(s){for(var c=[],a=1;a<arguments.length;a++)c[a-1]=arguments[a];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(s," for more information.").concat(c.length>0?" Args: ".concat(c.join(", ")):""))}var js=new Map,ks=new Map,Ns=1,ro=function(s){if(js.has(s))return js.get(s);for(;ks.has(Ns);)Ns++;var c=Ns++;return js.set(s,c),ks.set(c,s),c},Of=function(s,c){Ns=c+1,js.set(s,c),ks.set(c,s)},ea=Object.freeze([]),ut=Object.freeze({});function Af(s,c,a){return a===void 0&&(a=ut),s.theme!==a.theme&&s.theme||c||a.theme}var Ru=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),Rf=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Mf=/(^-|-$)/g;function cu(s){return s.replace(Rf,"-").replace(Mf,"")}var Df=/(a)(d)/gi,du=function(s){return String.fromCharCode(s+(s>25?39:97))};function Hi(s){var c,a="";for(c=Math.abs(s);c>52;c=c/52|0)a=du(c%52)+a;return(du(c%52)+a).replace(Df,"$1-$2")}var _i,_n=function(s,c){for(var a=c.length;a;)s=33*s^c.charCodeAt(--a);return s},Mu=function(s){return _n(5381,s)};function Ff(s){return Hi(Mu(s)>>>0)}function Hf(s){return s.displayName||s.name||"Component"}function Li(s){return typeof s=="string"&&!0}var Du=typeof Symbol=="function"&&Symbol.for,Fu=Du?Symbol.for("react.memo"):60115,Wf=Du?Symbol.for("react.forward_ref"):60112,Uf={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},$f={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Hu={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Vf=((_i={})[Wf]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},_i[Fu]=Hu,_i);function uu(s){return("type"in(c=s)&&c.type.$$typeof)===Fu?Hu:"$$typeof"in s?Vf[s.$$typeof]:Uf;var c}var Jf=Object.defineProperty,Qf=Object.getOwnPropertyNames,pu=Object.getOwnPropertySymbols,Gf=Object.getOwnPropertyDescriptor,Yf=Object.getPrototypeOf,hu=Object.prototype;function Wu(s,c,a){if(typeof c!="string"){if(hu){var u=Yf(c);u&&u!==hu&&Wu(s,u,a)}var m=Qf(c);pu&&(m=m.concat(pu(c)));for(var j=uu(s),S=uu(c),z=0;z<m.length;++z){var E=m[z];if(!(E in $f||a&&a[E]||S&&E in S||j&&E in j)){var Y=Gf(c,E);try{Jf(s,E,Y)}catch{}}}}return s}function pt(s){return typeof s=="function"}function ra(s){return typeof s=="object"&&"styledComponentId"in s}function Bn(s,c){return s&&c?"".concat(s," ").concat(c):s||c||""}function fu(s,c){return s.join("")}function so(s){return s!==null&&typeof s=="object"&&s.constructor.name===Object.name&&!("props"in s&&s.$$typeof)}function Wi(s,c,a){if(a===void 0&&(a=!1),!a&&!so(s)&&!Array.isArray(s))return c;if(Array.isArray(c))for(var u=0;u<c.length;u++)s[u]=Wi(s[u],c[u]);else if(so(c))for(var u in c)s[u]=Wi(s[u],c[u]);return s}function na(s,c){Object.defineProperty(s,"toString",{value:c})}var Kf=(function(){function s(c){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=c,this._cGroup=0,this._cIndex=0}return s.prototype.indexOfGroup=function(c){if(c===this._cGroup)return this._cIndex;var a=this._cIndex;if(c>this._cGroup)for(var u=this._cGroup;u<c;u++)a+=this.groupSizes[u];else for(u=this._cGroup-1;u>=c;u--)a-=this.groupSizes[u];return this._cGroup=c,this._cIndex=a,a},s.prototype.insertRules=function(c,a){if(c>=this.groupSizes.length){for(var u=this.groupSizes,m=u.length,j=m;c>=j;)if((j<<=1)<0)throw lo(16,"".concat(c));this.groupSizes=new Uint32Array(j),this.groupSizes.set(u),this.length=j;for(var S=m;S<j;S++)this.groupSizes[S]=0}for(var z=this.indexOfGroup(c+1),E=0,Y=(S=0,a.length);S<Y;S++)this.tag.insertRule(z,a[S])&&(this.groupSizes[c]++,z++,E++);E>0&&this._cGroup>c&&(this._cIndex+=E)},s.prototype.clearGroup=function(c){if(c<this.length){var a=this.groupSizes[c],u=this.indexOfGroup(c),m=u+a;this.groupSizes[c]=0;for(var j=u;j<m;j++)this.tag.deleteRule(u);a>0&&this._cGroup>c&&(this._cIndex-=a)}},s.prototype.getGroup=function(c){var a="";if(c>=this.length||this.groupSizes[c]===0)return a;for(var u=this.groupSizes[c],m=this.indexOfGroup(c),j=m+u,S=m;S<j;S++)a+=this.tag.getRule(S)+Zi;return a},s})(),qf="style[".concat(dt,"][").concat(Au,'="').concat(_s,'"]'),Xf=new RegExp("^".concat(dt,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),mu=function(s){return typeof ShadowRoot!="undefined"&&s instanceof ShadowRoot||"host"in s&&s.nodeType===11},Ui=function(s){if(!s)return document;if(mu(s))return s;if("getRootNode"in s){var c=s.getRootNode();if(mu(c))return c}return document},Zf=function(s,c,a){for(var u,m=a.split(","),j=0,S=m.length;j<S;j++)(u=m[j])&&s.registerName(c,u)},em=function(s,c){for(var a,u=((a=c.textContent)!==null&&a!==void 0?a:"").split(Zi),m=[],j=0,S=u.length;j<S;j++){var z=u[j].trim();if(z){var E=z.match(Xf);if(E){var Y=0|parseInt(E[1],10),J=E[2];Y!==0&&(Of(J,Y),Zf(s,J,E[3]),s.getTag().insertRules(Y,m)),m.length=0}else m.push(z)}}},Bi=function(s){for(var c=Ui(s.options.target).querySelectorAll(qf),a=0,u=c.length;a<u;a++){var m=c[a];m&&m.getAttribute(dt)!==Ou&&(em(s,m),m.parentNode&&m.parentNode.removeChild(m))}};function rm(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null}var Uu=function(s){var c=document.head,a=s||c,u=document.createElement("style"),m=(function(z){var E=Array.from(z.querySelectorAll("style[".concat(dt,"]")));return E[E.length-1]})(a),j=m!==void 0?m.nextSibling:null;u.setAttribute(dt,Ou),u.setAttribute(Au,_s);var S=rm();return S&&u.setAttribute("nonce",S),a.insertBefore(u,j),u},nm=(function(){function s(c){this.element=Uu(c),this.element.appendChild(document.createTextNode("")),this.sheet=(function(a){var u;if(a.sheet)return a.sheet;for(var m=(u=a.getRootNode().styleSheets)!==null&&u!==void 0?u:document.styleSheets,j=0,S=m.length;j<S;j++){var z=m[j];if(z.ownerNode===a)return z}throw lo(17)})(this.element),this.length=0}return s.prototype.insertRule=function(c,a){try{return this.sheet.insertRule(a,c),this.length++,!0}catch{return!1}},s.prototype.deleteRule=function(c){this.sheet.deleteRule(c),this.length--},s.prototype.getRule=function(c){var a=this.sheet.cssRules[c];return a&&a.cssText?a.cssText:""},s})(),tm=(function(){function s(c){this.element=Uu(c),this.nodes=this.element.childNodes,this.length=0}return s.prototype.insertRule=function(c,a){if(c<=this.length&&c>=0){var u=document.createTextNode(a);return this.element.insertBefore(u,this.nodes[c]||null),this.length++,!0}return!1},s.prototype.deleteRule=function(c){this.element.removeChild(this.nodes[c]),this.length--},s.prototype.getRule=function(c){return c<this.length?this.nodes[c].textContent:""},s})(),om=(function(){function s(c){this.rules=[],this.length=0}return s.prototype.insertRule=function(c,a){return c<=this.length&&(c===this.length?this.rules.push(a):this.rules.splice(c,0,a),this.length++,!0)},s.prototype.deleteRule=function(c){this.rules.splice(c,1),this.length--},s.prototype.getRule=function(c){return c<this.length?this.rules[c]:""},s})(),xu=to,sm={isServer:!to,useCSSOMInjection:!Bf},$u=(function(){function s(c,a,u){c===void 0&&(c=ut),a===void 0&&(a={});var m=this;this.options=cr(cr({},sm),c),this.gs=a,this.names=new Map(u),this.server=!!c.isServer,!this.server&&to&&xu&&(xu=!1,Bi(this)),na(this,function(){return(function(j){for(var S=j.getTag(),z=S.length,E="",Y=function(H){var X=(function(ge){return ks.get(ge)})(H);if(X===void 0)return"continue";var ae=j.names.get(X);if(ae===void 0||!ae.size)return"continue";var K=S.getGroup(H);if(K.length===0)return"continue";var W=dt+".g"+H+'[id="'+X+'"]',Q="";ae.forEach(function(ge){ge.length>0&&(Q+=ge+",")}),E+=K+W+'{content:"'+Q+'"}'+Zi},J=0;J<z;J++)Y(J);return E})(m)})}return s.registerId=function(c){return ro(c)},s.prototype.rehydrate=function(){!this.server&&to&&Bi(this)},s.prototype.reconstructWithOptions=function(c,a){a===void 0&&(a=!0);var u=new s(cr(cr({},this.options),c),this.gs,a&&this.names||void 0);return!this.server&&to&&c.target!==this.options.target&&Ui(this.options.target)!==Ui(c.target)&&Bi(u),u},s.prototype.allocateGSInstance=function(c){return this.gs[c]=(this.gs[c]||0)+1},s.prototype.getTag=function(){return this.tag||(this.tag=(c=(function(a){var u=a.useCSSOMInjection,m=a.target;return a.isServer?new om(m):u?new nm(m):new tm(m)})(this.options),new Kf(c)));var c},s.prototype.hasNameForId=function(c,a){var u,m;return(m=(u=this.names.get(c))===null||u===void 0?void 0:u.has(a))!==null&&m!==void 0&&m},s.prototype.registerName=function(c,a){ro(c);var u=this.names.get(c);u?u.add(a):this.names.set(c,new Set([a]))},s.prototype.insertRules=function(c,a,u){this.registerName(c,a),this.getTag().insertRules(ro(c),u)},s.prototype.clearNames=function(c){this.names.has(c)&&this.names.get(c).clear()},s.prototype.clearRules=function(c){this.getTag().clearGroup(ro(c)),this.clearNames(c)},s.prototype.clearTag=function(){this.tag=void 0},s})(),lm=/&/g,Gr=47,Ln=42;function gu(s){if(s.indexOf("}")===-1)return!1;for(var c=s.length,a=0,u=0,m=!1,j=0;j<c;j++){var S=s.charCodeAt(j);if(u!==0||m||S!==Gr||s.charCodeAt(j+1)!==Ln)if(m)S===Ln&&s.charCodeAt(j+1)===Gr&&(m=!1,j++);else if(S!==34&&S!==39||j!==0&&s.charCodeAt(j-1)===92){if(u===0){if(S===123)a++;else if(S===125&&--a<0)return!0}}else u===0?u=S:u===S&&(u=0);else m=!0,j++}return a!==0||u!==0}function Vu(s,c){return s.map(function(a){return a.type==="rule"&&(a.value="".concat(c," ").concat(a.value),a.value=a.value.replaceAll(",",",".concat(c," ")),a.props=a.props.map(function(u){return"".concat(c," ").concat(u)})),Array.isArray(a.children)&&a.type!=="@keyframes"&&(a.children=Vu(a.children,c)),a})}function im(s){var c,a,u,m=ut,j=m.options,S=j===void 0?ut:j,z=m.plugins,E=z===void 0?ea:z,Y=function(K,W,Q){return Q.startsWith(a)&&Q.endsWith(a)&&Q.replaceAll(a,"").length>0?".".concat(c):K},J=E.slice();J.push(function(K){K.type===Ts&&K.value.includes("&")&&(u||(u=new RegExp("\\".concat(a,"\\b"),"g")),K.props[0]=K.props[0].replace(lm,a).replace(u,Y))}),S.prefix&&J.push(_f),J.push(If);var H=[],X=Pf(J.concat(zf(function(K){return H.push(K)}))),ae=function(K,W,Q,ge){W===void 0&&(W=""),Q===void 0&&(Q=""),ge===void 0&&(ge="&"),c=ge,a=W,u=void 0;var de=(function(_){if(!gu(_))return _;for(var q=_.length,U="",P=0,M=0,je=0,Oe=!1,le=0;le<q;le++){var Le=_.charCodeAt(le);if(je!==0||Oe||Le!==Gr||_.charCodeAt(le+1)!==Ln)if(Oe)Le===Ln&&_.charCodeAt(le+1)===Gr&&(Oe=!1,le++);else if(Le!==34&&Le!==39||le!==0&&_.charCodeAt(le-1)===92){if(je===0)if(Le===123)M++;else if(Le===125){if(--M<0){for(var Ce=le+1;Ce<q;){var Ge=_.charCodeAt(Ce);if(Ge===59||Ge===10)break;Ce++}Ce<q&&_.charCodeAt(Ce)===59&&Ce++,M=0,le=Ce-1,P=Ce;continue}M===0&&(U+=_.substring(P,le+1),P=le+1)}else Le===59&&M===0&&(U+=_.substring(P,le+1),P=le+1)}else je===0?je=Le:je===Le&&(je=0);else Oe=!0,le++}if(P<q){var er=_.substring(P);gu(er)||(U+=er)}return U})((function(_){if(_.indexOf("//")===-1)return _;for(var q=_.length,U=[],P=0,M=0,je=0,Oe=0;M<q;){var le=_.charCodeAt(M);if(le!==34&&le!==39||M!==0&&_.charCodeAt(M-1)===92)if(je===0)if(le===Gr&&M+1<q&&_.charCodeAt(M+1)===Ln){for(M+=2;M+1<q&&(_.charCodeAt(M)!==Ln||_.charCodeAt(M+1)!==Gr);)M++;M+=2}else if(le===40&&M>=3&&(32|_.charCodeAt(M-1))==108&&(32|_.charCodeAt(M-2))==114&&(32|_.charCodeAt(M-3))==117)Oe=1,M++;else if(Oe>0)le===41?Oe--:le===40&&Oe++,M++;else if(le===Ln&&M+1<q&&_.charCodeAt(M+1)===Gr)M>P&&U.push(_.substring(P,M)),P=M+=2;else if(le===Gr&&M+1<q&&_.charCodeAt(M+1)===Gr){for(M>P&&U.push(_.substring(P,M));M<q&&_.charCodeAt(M)!==10;)M++;P=M}else M++;else M++;else je===0?je=le:je===le&&(je=0),M++}return P===0?_:(P<q&&U.push(_.substring(P)),U.join(""))})(K)),ne=Ef(Q||W?"".concat(Q," ").concat(W," { ").concat(de," }"):de);return S.namespace&&(ne=Vu(ne,S.namespace)),H=[],bs(ne,X),H};return ae.hash=E.length?E.reduce(function(K,W){return W.name||lo(15),_n(K,W.name)},5381).toString():"",ae}var am=new $u,$i=im(),Ju=mr.createContext({shouldForwardProp:void 0,styleSheet:am,stylis:$i});Ju.Consumer;mr.createContext(void 0);function vu(){return mr.useContext(Ju)}var cm=(function(){function s(c,a){var u=this;this.inject=function(m,j){j===void 0&&(j=$i);var S=u.name+j.hash;m.hasNameForId(u.id,S)||m.insertRules(u.id,S,j(u.rules,S,"@keyframes"))},this.name=c,this.id="sc-keyframes-".concat(c),this.rules=a,na(this,function(){throw lo(12,String(u.name))})}return s.prototype.getName=function(c){return c===void 0&&(c=$i),this.name+c.hash},s})();function dm(s,c){return c==null||typeof c=="boolean"||c===""?"":typeof c!="number"||c===0||s in Lf||s.startsWith("--")?String(c).trim():"".concat(c,"px")}var um=function(s){return s>="A"&&s<="Z"};function yu(s){for(var c="",a=0;a<s.length;a++){var u=s[a];if(a===1&&u==="-"&&s[0]==="-")return s;um(u)?c+="-"+u.toLowerCase():c+=u}return c.startsWith("ms-")?"-"+c:c}var Qu=function(s){return s==null||s===!1||s===""},Gu=function(s){var c=[];for(var a in s){var u=s[a];s.hasOwnProperty(a)&&!Qu(u)&&(Array.isArray(u)&&u.isCss||pt(u)?c.push("".concat(yu(a),":"),u,";"):so(u)?c.push.apply(c,ws(ws(["".concat(a," {")],Gu(u),!1),["}"],!1)):c.push("".concat(yu(a),": ").concat(dm(a,u),";")))}return c};function On(s,c,a,u,m){if(m===void 0&&(m=[]),typeof s=="string")return s&&m.push(s),m;if(Qu(s))return m;if(ra(s))return m.push(".".concat(s.styledComponentId)),m;if(pt(s)){if(!pt(S=s)||S.prototype&&S.prototype.isReactComponent||!c)return m.push(s),m;var j=s(c);return On(j,c,a,u,m)}var S;if(s instanceof cm)return a?(s.inject(a,u),m.push(s.getName(u))):m.push(s),m;if(so(s)){for(var z=Gu(s),E=0;E<z.length;E++)m.push(z[E]);return m}if(!Array.isArray(s))return m.push(s.toString()),m;for(E=0;E<s.length;E++)On(s[E],c,a,u,m);return m}function pm(s){for(var c=0;c<s.length;c+=1){var a=s[c];if(pt(a)&&!ra(a))return!1}return!0}var hm=Mu(_s),fm=(function(){function s(c,a,u){this.rules=c,this.staticRulesId="",this.isStatic=(u===void 0||u.isStatic)&&pm(c),this.componentId=a,this.baseHash=_n(hm,a),this.baseStyle=u,$u.registerId(a)}return s.prototype.generateAndInjectStyles=function(c,a,u){var m=this.baseStyle?this.baseStyle.generateAndInjectStyles(c,a,u).className:"";if(this.isStatic&&!u.hash)if(this.staticRulesId&&a.hasNameForId(this.componentId,this.staticRulesId))m=Bn(m,this.staticRulesId);else{var j=fu(On(this.rules,c,a,u)),S=Hi(_n(this.baseHash,j)>>>0);if(!a.hasNameForId(this.componentId,S)){var z=u(j,".".concat(S),void 0,this.componentId);a.insertRules(this.componentId,S,z)}m=Bn(m,S),this.staticRulesId=S}else{for(var E=_n(this.baseHash,u.hash),Y="",J=0;J<this.rules.length;J++){var H=this.rules[J];if(typeof H=="string")Y+=H;else if(H){var X=fu(On(H,c,a,u));E=_n(_n(E,String(J)),X),Y+=X}}if(Y){var ae=Hi(E>>>0);if(!a.hasNameForId(this.componentId,ae)){var K=u(Y,".".concat(ae),void 0,this.componentId);a.insertRules(this.componentId,ae,K)}m=Bn(m,ae)}}return{className:m,css:typeof window=="undefined"?a.getTag().getGroup(ro(this.componentId)):""}},s})(),Yu=mr.createContext(void 0);Yu.Consumer;var Oi={};function mm(s,c,a){var u=ra(s),m=s,j=!Li(s),S=c.attrs,z=S===void 0?ea:S,E=c.componentId,Y=E===void 0?(function(_,q){var U=typeof _!="string"?"sc":cu(_);Oi[U]=(Oi[U]||0)+1;var P="".concat(U,"-").concat(Ff(_s+U+Oi[U]));return q?"".concat(q,"-").concat(P):P})(c.displayName,c.parentComponentId):E,J=c.displayName,H=J===void 0?(function(_){return Li(_)?"styled.".concat(_):"Styled(".concat(Hf(_),")")})(s):J,X=c.displayName&&c.componentId?"".concat(cu(c.displayName),"-").concat(c.componentId):c.componentId||Y,ae=u&&m.attrs?m.attrs.concat(z).filter(Boolean):z,K=c.shouldForwardProp;if(u&&m.shouldForwardProp){var W=m.shouldForwardProp;if(c.shouldForwardProp){var Q=c.shouldForwardProp;K=function(_,q){return W(_,q)&&Q(_,q)}}else K=W}var ge=new fm(a,X,u?m.componentStyle:void 0);function de(_,q){return(function(U,P,M){var je=U.attrs,Oe=U.componentStyle,le=U.defaultProps,Le=U.foldedComponentIds,Ce=U.styledComponentId,Ge=U.target,er=mr.useContext(Yu),Ye=vu(),Ne=U.shouldForwardProp||Ye.shouldForwardProp,T=Af(P,er,le)||ut,F=(function(se,ue,ce){for(var ve,Pe=cr(cr({},ue),{className:void 0,theme:ce}),Yr=0;Yr<se.length;Yr+=1){var vn=pt(ve=se[Yr])?ve(Pe):ve;for(var br in vn)br==="className"?Pe.className=Bn(Pe.className,vn[br]):br==="style"?Pe.style=cr(cr({},Pe.style),vn[br]):Pe[br]=vn[br]}return"className"in ue&&typeof ue.className=="string"&&(Pe.className=Bn(Pe.className,ue.className)),Pe})(je,P,T),L=F.as||Ge,x={};for(var N in F)F[N]===void 0||N[0]==="$"||N==="as"||N==="theme"&&F.theme===T||(N==="forwardedAs"?x.as=F.forwardedAs:Ne&&!Ne(N,L)||(x[N]=F[N]));var Z=(function(se,ue){var ce=vu(),ve=se.generateAndInjectStyles(ue,ce.styleSheet,ce.stylis);return ve})(Oe,F),ee=Z.className,ie=Bn(Le,Ce);return ee&&(ie+=" "+ee),F.className&&(ie+=" "+F.className),x[Li(L)&&!Ru.has(L)?"class":"className"]=ie,M&&(x.ref=M),xe.createElement(L,x)})(ne,_,q)}de.displayName=H;var ne=mr.forwardRef(de);return ne.attrs=ae,ne.componentStyle=ge,ne.displayName=H,ne.shouldForwardProp=K,ne.foldedComponentIds=u?Bn(m.foldedComponentIds,m.styledComponentId):"",ne.styledComponentId=X,ne.target=u?m.target:s,Object.defineProperty(ne,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(_){this._foldedDefaultProps=u?(function(q){for(var U=[],P=1;P<arguments.length;P++)U[P-1]=arguments[P];for(var M=0,je=U;M<je.length;M++)Wi(q,je[M],!0);return q})({},m.defaultProps,_):_}}),na(ne,function(){return".".concat(ne.styledComponentId)}),j&&Wu(ne,s,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),ne}function ju(s,c){for(var a=[s[0]],u=0,m=c.length;u<m;u+=1)a.push(c[u],s[u+1]);return a}var Nu=function(s){return Object.assign(s,{isCss:!0})};function xm(s){for(var c=[],a=1;a<arguments.length;a++)c[a-1]=arguments[a];if(pt(s)||so(s))return Nu(On(ju(ea,ws([s],c,!0))));var u=s;return c.length===0&&u.length===1&&typeof u[0]=="string"?On(u):Nu(On(ju(u,c)))}function Vi(s,c,a){if(a===void 0&&(a=ut),!c)throw lo(1,c);var u=function(m){for(var j=[],S=1;S<arguments.length;S++)j[S-1]=arguments[S];return s(c,a,xm.apply(void 0,ws([m],j,!1)))};return u.attrs=function(m){return Vi(s,c,cr(cr({},a),{attrs:Array.prototype.concat(a.attrs,m).filter(Boolean)}))},u.withConfig=function(m){return Vi(s,c,cr(cr({},a),m))},u}var Ku=function(s){return Vi(mm,s)},he=Ku;Ru.forEach(function(s){he[s]=Ku(s)});const Ai={Wrapper:he.div`
        /* border: 1px solid #f00; */
        height: 100vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    `,Header:he.header`
        /* border: 1px solid #f00; */
        height: 60px;
        flex-shrink: 0;
    `,Main:he.main`
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
    `},wu={Wrapper:he.header`
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
    `,Main:he.div`
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
    `},gm="/javascript-core-notes/images/transparentLogo.png";var qu={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},bu=mr.createContext&&mr.createContext(qu),vm=["attr","size","title"];function ym(s,c){if(s==null)return{};var a=jm(s,c),u,m;if(Object.getOwnPropertySymbols){var j=Object.getOwnPropertySymbols(s);for(m=0;m<j.length;m++)u=j[m],!(c.indexOf(u)>=0)&&Object.prototype.propertyIsEnumerable.call(s,u)&&(a[u]=s[u])}return a}function jm(s,c){if(s==null)return{};var a={};for(var u in s)if(Object.prototype.hasOwnProperty.call(s,u)){if(c.indexOf(u)>=0)continue;a[u]=s[u]}return a}function Ss(){return Ss=Object.assign?Object.assign.bind():function(s){for(var c=1;c<arguments.length;c++){var a=arguments[c];for(var u in a)Object.prototype.hasOwnProperty.call(a,u)&&(s[u]=a[u])}return s},Ss.apply(this,arguments)}function ku(s,c){var a=Object.keys(s);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(s);c&&(u=u.filter(function(m){return Object.getOwnPropertyDescriptor(s,m).enumerable})),a.push.apply(a,u)}return a}function Cs(s){for(var c=1;c<arguments.length;c++){var a=arguments[c]!=null?arguments[c]:{};c%2?ku(Object(a),!0).forEach(function(u){Nm(s,u,a[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(a)):ku(Object(a)).forEach(function(u){Object.defineProperty(s,u,Object.getOwnPropertyDescriptor(a,u))})}return s}function Nm(s,c,a){return c=wm(c),c in s?Object.defineProperty(s,c,{value:a,enumerable:!0,configurable:!0,writable:!0}):s[c]=a,s}function wm(s){var c=bm(s,"string");return typeof c=="symbol"?c:c+""}function bm(s,c){if(typeof s!="object"||!s)return s;var a=s[Symbol.toPrimitive];if(a!==void 0){var u=a.call(s,c);if(typeof u!="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return(c==="string"?String:Number)(s)}function Xu(s){return s&&s.map((c,a)=>mr.createElement(c.tag,Cs({key:a},c.attr),Xu(c.child)))}function oe(s){return c=>mr.createElement(km,Ss({attr:Cs({},s.attr)},c),Xu(s.child))}function km(s){var c=a=>{var{attr:u,size:m,title:j}=s,S=ym(s,vm),z=m||a.size||"1em",E;return a.className&&(E=a.className),s.className&&(E=(E?E+" ":"")+s.className),mr.createElement("svg",Ss({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},a.attr,u,S,{className:E,style:Cs(Cs({color:s.color||a.color},a.style),s.style),height:z,width:z,xmlns:"http://www.w3.org/2000/svg"}),j&&mr.createElement("title",null,j),s.children)};return bu!==void 0?mr.createElement(bu.Consumer,null,a=>c(a)):c(qu)}function Zu(s){return oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"22 12 18 12 15 21 9 3 6 12 2 12"},child:[]}]})(s)}function ep(s){return oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"},child:[]},{tag:"line",attr:{x1:"12",y1:"9",x2:"12",y2:"13"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12.01",y2:"17"},child:[]}]})(s)}function rp(s){return oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"},child:[]},{tag:"polyline",attr:{points:"3.27 6.96 12 12.01 20.73 6.96"},child:[]},{tag:"line",attr:{x1:"12",y1:"22.08",x2:"12",y2:"12"},child:[]}]})(s)}function Sm(s){return oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"},child:[]},{tag:"polyline",attr:{points:"22 4 12 14.01 9 11.01"},child:[]}]})(s)}function Te(s){return oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"},child:[]}]})(s)}function Ie(s){return oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"9 18 15 12 9 6"},child:[]}]})(s)}function Ri(s){return oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polyline",attr:{points:"12 6 12 12 16 14"},child:[]}]})(s)}function Cm(s){return oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"},child:[]}]})(s)}function I(s){return oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 18 22 12 16 6"},child:[]},{tag:"polyline",attr:{points:"8 6 2 12 8 18"},child:[]}]})(s)}function Mi(s){return oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"},child:[]}]})(s)}function Ji(s){return oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"15 10 20 15 15 20"},child:[]},{tag:"path",attr:{d:"M4 4v7a4 4 0 0 0 4 4h12"},child:[]}]})(s)}function Es(s){return oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"4",y:"4",width:"16",height:"16",rx:"2",ry:"2"},child:[]},{tag:"rect",attr:{x:"9",y:"9",width:"6",height:"6"},child:[]},{tag:"line",attr:{x1:"9",y1:"1",x2:"9",y2:"4"},child:[]},{tag:"line",attr:{x1:"15",y1:"1",x2:"15",y2:"4"},child:[]},{tag:"line",attr:{x1:"9",y1:"20",x2:"9",y2:"23"},child:[]},{tag:"line",attr:{x1:"15",y1:"20",x2:"15",y2:"23"},child:[]},{tag:"line",attr:{x1:"20",y1:"9",x2:"23",y2:"9"},child:[]},{tag:"line",attr:{x1:"20",y1:"14",x2:"23",y2:"14"},child:[]},{tag:"line",attr:{x1:"1",y1:"9",x2:"4",y2:"9"},child:[]},{tag:"line",attr:{x1:"1",y1:"14",x2:"4",y2:"14"},child:[]}]})(s)}function np(s){return oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"ellipse",attr:{cx:"12",cy:"5",rx:"9",ry:"3"},child:[]},{tag:"path",attr:{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"},child:[]},{tag:"path",attr:{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"},child:[]}]})(s)}function tp(s){return oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"6",y1:"3",x2:"6",y2:"15"},child:[]},{tag:"circle",attr:{cx:"18",cy:"6",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"18",r:"3"},child:[]},{tag:"path",attr:{d:"M18 9a9 9 0 0 1-9 9"},child:[]}]})(s)}function Qi(s){return oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"2",y1:"12",x2:"22",y2:"12"},child:[]},{tag:"path",attr:{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"},child:[]}]})(s)}function Su(s){return oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"4",y1:"9",x2:"20",y2:"9"},child:[]},{tag:"line",attr:{x1:"4",y1:"15",x2:"20",y2:"15"},child:[]},{tag:"line",attr:{x1:"10",y1:"3",x2:"8",y2:"21"},child:[]},{tag:"line",attr:{x1:"16",y1:"3",x2:"14",y2:"21"},child:[]}]})(s)}function Em(s){return oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"16",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12.01",y2:"8"},child:[]}]})(s)}function ta(s){return oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 2 7 12 12 22 7 12 2"},child:[]},{tag:"polyline",attr:{points:"2 17 12 22 22 17"},child:[]},{tag:"polyline",attr:{points:"2 12 12 17 22 12"},child:[]}]})(s)}function Tm(s){return oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"},child:[]},{tag:"path",attr:{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"},child:[]}]})(s)}function Im(s){return oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"8",y1:"6",x2:"21",y2:"6"},child:[]},{tag:"line",attr:{x1:"8",y1:"12",x2:"21",y2:"12"},child:[]},{tag:"line",attr:{x1:"8",y1:"18",x2:"21",y2:"18"},child:[]},{tag:"line",attr:{x1:"3",y1:"6",x2:"3.01",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"12",x2:"3.01",y2:"12"},child:[]},{tag:"line",attr:{x1:"3",y1:"18",x2:"3.01",y2:"18"},child:[]}]})(s)}function Pm(s){return oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"},child:[]}]})(s)}function op(s){return oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"},child:[]},{tag:"path",attr:{d:"M13 13l6 6"},child:[]}]})(s)}function zm(s){return oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"16.5",y1:"9.4",x2:"7.5",y2:"4.21"},child:[]},{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"},child:[]},{tag:"polyline",attr:{points:"3.27 6.96 12 12.01 20.73 6.96"},child:[]},{tag:"line",attr:{x1:"12",y1:"22.08",x2:"12",y2:"12"},child:[]}]})(s)}function _m(s){return oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"1 4 1 10 7 10"},child:[]},{tag:"polyline",attr:{points:"23 20 23 14 17 14"},child:[]},{tag:"path",attr:{d:"M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"},child:[]}]})(s)}function sp(s){return oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"17 1 21 5 17 9"},child:[]},{tag:"path",attr:{d:"M3 11V9a4 4 0 0 1 4-4h14"},child:[]},{tag:"polyline",attr:{points:"7 23 3 19 7 15"},child:[]},{tag:"path",attr:{d:"M21 13v2a4 4 0 0 1-4 4H3"},child:[]}]})(s)}function Lm(s){return oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"22",y1:"2",x2:"11",y2:"13"},child:[]},{tag:"polygon",attr:{points:"22 2 15 22 11 13 2 9 22 2"},child:[]}]})(s)}function Cu(s){return oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"18",cy:"5",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"12",r:"3"},child:[]},{tag:"circle",attr:{cx:"18",cy:"19",r:"3"},child:[]},{tag:"line",attr:{x1:"8.59",y1:"13.51",x2:"15.42",y2:"17.49"},child:[]},{tag:"line",attr:{x1:"15.41",y1:"6.51",x2:"8.59",y2:"10.49"},child:[]}]})(s)}function Gi(s){return oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"},child:[]}]})(s)}function Bm(s){return oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 3 21 3 21 8"},child:[]},{tag:"line",attr:{x1:"4",y1:"20",x2:"21",y2:"3"},child:[]},{tag:"polyline",attr:{points:"21 16 21 21 16 21"},child:[]},{tag:"line",attr:{x1:"15",y1:"15",x2:"21",y2:"21"},child:[]},{tag:"line",attr:{x1:"4",y1:"4",x2:"9",y2:"9"},child:[]}]})(s)}function Om(s){return oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"4.93",y1:"4.93",x2:"19.07",y2:"19.07"},child:[]}]})(s)}function Am(s){return oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"4",y1:"21",x2:"4",y2:"14"},child:[]},{tag:"line",attr:{x1:"4",y1:"10",x2:"4",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"20",y1:"21",x2:"20",y2:"16"},child:[]},{tag:"line",attr:{x1:"20",y1:"12",x2:"20",y2:"3"},child:[]},{tag:"line",attr:{x1:"1",y1:"14",x2:"7",y2:"14"},child:[]},{tag:"line",attr:{x1:"9",y1:"8",x2:"15",y2:"8"},child:[]},{tag:"line",attr:{x1:"17",y1:"16",x2:"23",y2:"16"},child:[]}]})(s)}function Rm(s){return oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"rect",attr:{x:"9",y:"9",width:"6",height:"6"},child:[]}]})(s)}function Mm(s){return oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"5"},child:[]},{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"23"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"},child:[]},{tag:"line",attr:{x1:"1",y1:"12",x2:"3",y2:"12"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"23",y2:"12"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"},child:[]}]})(s)}function lp(s){return oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"6"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"2"},child:[]}]})(s)}function Yi(s){return oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"4 17 10 11 4 5"},child:[]},{tag:"line",attr:{x1:"12",y1:"19",x2:"20",y2:"19"},child:[]}]})(s)}function Dm(s){return oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"},child:[]}]})(s)}function Fm(s){return oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"4 7 4 4 20 4 20 7"},child:[]},{tag:"line",attr:{x1:"9",y1:"20",x2:"15",y2:"20"},child:[]},{tag:"line",attr:{x1:"12",y1:"4",x2:"12",y2:"20"},child:[]}]})(s)}function Lr(s){return oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"},child:[]}]})(s)}const Hm=()=>{const[s,c]=xe.useState(!1),[a,u]=xe.useState("dark");xe.useEffect(()=>{const z=localStorage.getItem("app-theme")||"dark";u(z),z==="light"?document.documentElement.setAttribute("data-theme","light"):document.documentElement.removeAttribute("data-theme")},[]),xe.useEffect(()=>{a==="light"?document.documentElement.setAttribute("data-theme","light"):document.documentElement.removeAttribute("data-theme"),localStorage.setItem("app-theme",a)},[a]);const m=xe.useMemo(()=>a==="light"?"dark":"light",[a]),j=()=>{u(m)};return n.jsx(wu.Wrapper,{children:n.jsx(wu.Main,{children:n.jsxs("div",{className:"logoNameThemeToggleWrapper",children:[n.jsxs("div",{className:"logoNameWrapper",children:[n.jsxs("div",{className:"logoWrapper",children:[!s&&n.jsx("div",{className:"logoSkeleton"}),n.jsx("img",{src:gm,alt:"javascript-core-notes",onLoad:()=>c(!0),style:{opacity:s?1:0}})]}),n.jsxs("div",{className:"nameWrapper",children:[n.jsx("div",{className:"title",children:"javascript-core-notes"}),n.jsx("div",{className:"subTitle",children:"At-a-glance javascript revision"})]})]}),n.jsxs("button",{type:"button",className:"themeToggleBtn",onClick:j,"aria-label":`Switch to ${m} theme`,title:`Switch to ${m}`,children:[n.jsx("span",{className:"icon",children:a==="light"?n.jsx(Pm,{}):n.jsx(Mm,{})}),n.jsx("span",{className:"label",children:a==="light"?"Light":"Dark"})]})]})})})},Wm={Wrapper:he.footer`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 15px;
        border-top: 1px solid var(--color-border);

        font-size: 12px;
        color: var(--color-text-muted);

        .right a {
            color: var(--color-text-secondary);
            font-weight: 600;
        }

        .right a:hover {
            color: var(--color-text-primary);
        }

        a {
            color: var(--color-text-secondary);
            font-weight: 600;
        }

        a:hover {
            color: var(--color-text-primary);
        }

        @media (width < 600px) {
            flex-direction: column;
            align-items: flex-start;
            gap: 6px;
        }
    `},Um=()=>n.jsxs(Wm.Wrapper,{children:[n.jsxs("div",{className:"left",children:["© ",new Date().getFullYear()," | All rights reserved"]}),n.jsxs("div",{className:"right",children:["By ",n.jsx("a",{href:"https://www.ashishranjan.net",target:"_blank",rel:"noopener noreferrer",children:"Ashish Ranjan"})]})]}),Eu={Wrapper:he.section`
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 60px 20px;
        /* margin-bottom: 30px; */
    `,Content:he.div`
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
    `},$m=()=>{const s="2026-09-21T13:13:43.572Z",c=new Date(s).toLocaleString("en-US",{year:"numeric",month:"long",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1});return n.jsx(Eu.Wrapper,{children:n.jsxs(Eu.Content,{children:[n.jsx("h2",{className:"heading",children:"About JavaScript"}),n.jsx("p",{children:"JavaScript is the programming language of the web. It adds logic and behavior to HTML and CSS. While HTML structures content and CSS styles it, JavaScript controls interaction, state, dynamic updates, and application flow."}),n.jsx("p",{children:"JavaScript runs inside an engine that parses code, creates execution contexts, manages memory, and processes the event loop. Concepts like scope, closures, prototypes, asynchronous execution, and promises are fundamental to writing predictable and maintainable applications."}),n.jsx("p",{children:"The javascript-core-notes project is a structured revision system. It organizes language fundamentals, execution concepts, DOM manipulation, and modern ES6+ features into a clean single-page reference designed for fast recall and strong conceptual clarity."}),n.jsxs("div",{className:"meta",children:[n.jsx("span",{className:"metaLabel",children:"Last updated:"}),n.jsx("span",{className:"metaValue",children:c})]})]})})},Vm={Wrapper:he.section`
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
    `},Jm=()=>{const[s,c]=xe.useState(!1),a=()=>c(u=>!u);return n.jsxs(Vm.Wrapper,{className:s?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:a,"aria-expanded":s,children:[n.jsx("span",{className:"chev",children:s?n.jsx(Te,{}):n.jsx(Ie,{})}),n.jsx("span",{className:"icon",children:n.jsx(Es,{})}),n.jsx("span",{className:"title",children:"JavaScript Fundamentals"}),n.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[n.jsx("div",{className:"intro",children:n.jsx("p",{className:"p",children:"JavaScript is what makes the web interactive. These fundamentals explain where JS runs, how it executes, and how it connects to HTML and CSS."})}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"What is JavaScript"}),n.jsx("p",{className:"p",children:"JavaScript is a programming language used to add logic and interactivity to web pages. It can update content, respond to user actions, and work with data."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(Yi,{})}),"Quick example"]}),n.jsx("pre",{className:"code",children:`console.log("Hello JavaScript");
// Output - Hello JavaScript`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"History of JS"}),n.jsx("p",{className:"p",children:"JavaScript was created in 1995 to add interactivity to web pages. It grew fast and became the main language of the browser. Today it is standardized as ECMAScript."})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"JS engine"}),n.jsx("p",{className:"p",children:"A JavaScript engine is the program that executes your JS code. Example engines are V8 (Chrome, Node), SpiderMonkey (Firefox), and JavaScriptCore (Safari)."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(Es,{})}),"Engine idea"]}),n.jsx("pre",{className:"code",children:`// You write JS
// Engine parses it and runs it
// Result - output appears in console or UI`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Browser vs Node"}),n.jsx("p",{className:"p",children:"Browser JavaScript can work with the DOM, events, and Web APIs. Node.js JavaScript runs outside the browser and is used for backend work like servers, files, and databases."}),n.jsxs("div",{className:"miniGrid",children:[n.jsxs("div",{className:"mini",children:[n.jsxs("div",{className:"miniTitle",children:[n.jsx("span",{className:"miniIcon",children:n.jsx(Qi,{})}),"Browser"]}),n.jsx("div",{className:"miniSub",children:"DOM - events - fetch - storage"})]}),n.jsxs("div",{className:"mini",children:[n.jsxs("div",{className:"miniTitle",children:[n.jsx("span",{className:"miniIcon",children:n.jsx(I,{})}),"Node"]}),n.jsx("div",{className:"miniSub",children:"server - file system - backend APIs"})]})]}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example"]}),n.jsx("pre",{className:"code",children:`// Browser
document.title = "JS running in browser";
// Result - page title changes

// Node
console.log("JS running in Node");
// Output - JS running in Node`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Interpreted vs compiled"}),n.jsx("p",{className:"p",children:"JavaScript is often called interpreted, but modern engines use JIT (Just In Time) compilation. That means code is compiled and optimized while running for better performance."}),n.jsxs("div",{className:"callout",children:[n.jsxs("div",{className:"calloutTitle",children:[n.jsx("span",{className:"calloutIcon",children:n.jsx(Lr,{})}),"Simple meaning"]}),n.jsx("div",{className:"calloutText",children:"JS runs fast today because engines optimize code as it executes."})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"ECMAScript"}),n.jsx("p",{className:"p",children:"ECMAScript is the standard that defines the JavaScript language. ES6 introduced modern features like let, const, arrow functions, classes, and modules."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(ta,{})}),"ES6 example"]}),n.jsx("pre",{className:"code",children:'const name = "Ash";\nconsole.log(`Hello ${name}`);\n// Output - Hello Ash'})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"How JS works with HTML & CSS"}),n.jsx("p",{className:"p",children:"The browser turns HTML into a DOM tree. JavaScript can read and change that DOM, and it can also update CSS by changing classes or inline styles."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(Qi,{})}),"DOM and style idea"]}),n.jsx("pre",{className:"code",children:`// Example idea
// JS can update HTML text
// JS can add a class to change CSS
// Result - UI changes without page reload`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Script tag"}),n.jsx("p",{className:"p",children:"JavaScript is loaded in HTML using the script tag. Using defer is usually preferred because it loads the script without blocking HTML parsing."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Script loading"]}),n.jsx("pre",{className:"code",children:`<script src="app.js" defer><\/script>
<!-- Result - app.js runs after HTML is parsed -->`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"DOM manipulation concept"}),n.jsx("p",{className:"p",children:"DOM manipulation means selecting elements and updating them. You can change text, attributes, classes, and even create new elements."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(Yi,{})}),"Basic DOM update"]}),n.jsx("pre",{className:"code",children:`const el = document.querySelector(".title");
el.textContent = "Updated by JS";
// Result - text inside .title changes`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Event driven model"}),n.jsx("p",{className:"p",children:"JavaScript reacts to events like click, input, and submit. You attach event listeners, and when the event happens, your callback runs."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(Lr,{})}),"Click example"]}),n.jsx("pre",{className:"code",children:`const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  console.log("Clicked");
});

// Output - Clicked (when button is clicked)`})]})]})]})]})},Qm={Wrapper:he.section`
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
    `},Gm=()=>{const[s,c]=xe.useState(!1),a=()=>c(u=>!u);return n.jsxs(Qm.Wrapper,{className:s?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:a,"aria-expanded":s,children:[n.jsx("span",{className:"chev",children:s?n.jsx(Te,{}):n.jsx(Ie,{})}),n.jsx("span",{className:"icon",children:n.jsx(np,{})}),n.jsx("span",{className:"title",children:"Variables & Data Types"}),n.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Variables"}),n.jsx("p",{children:"Variables are named containers to store values. In JavaScript you create variables using var, let, or const."})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"var"}),n.jsx("p",{children:"var is function scoped and can be re-declared. It can cause bugs in modern code, so avoid it unless required."}),n.jsx("pre",{className:"code",children:`var a = 10;
var a = 20;
console.log(a); // 20`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"let"}),n.jsx("p",{children:"let is block scoped and can be reassigned, but cannot be re-declared in the same scope."}),n.jsx("pre",{className:"code",children:`let score = 5;
score = 6;
console.log(score); // 6`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"const"}),n.jsx("p",{children:"const is block scoped and cannot be reassigned. Use it by default. For objects and arrays, the reference is fixed but internal values can change."}),n.jsx("pre",{className:"code",children:`const user = { name: "Ash" };
user.name = "Ashish";
console.log(user.name); // "Ashish"`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Scope basics"}),n.jsx("p",{children:"Scope means where a variable can be accessed. let and const follow block scope, var follows function scope."}),n.jsx("pre",{className:"code",children:`if (true) {
  let x = 1;
  const y = 2;
  console.log(x, y); // 1 2
}
// console.log(x); // ReferenceError`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Temporal Dead Zone"}),n.jsx("p",{children:"With let and const, the variable exists in the scope but cannot be used before its declaration line."}),n.jsx("pre",{className:"code",children:`// console.log(a); // ReferenceError
let a = 10;
console.log(a); // 10`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Primitive Types"}),n.jsx("p",{children:"Primitive values are stored directly and are immutable. JavaScript primitives are string, number, boolean, null, undefined, symbol, and bigint."}),n.jsxs("div",{className:"miniGrid",children:[n.jsx("div",{className:"chip",children:"string"}),n.jsx("div",{className:"chip",children:"number"}),n.jsx("div",{className:"chip",children:"boolean"}),n.jsx("div",{className:"chip",children:"null"}),n.jsx("div",{className:"chip",children:"undefined"}),n.jsx("div",{className:"chip",children:"symbol"}),n.jsx("div",{className:"chip",children:"bigint"})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"string"}),n.jsx("pre",{className:"code",children:`const name = "Ash";
console.log(name.length); // 3`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"number"}),n.jsx("pre",{className:"code",children:`const price = 99.5;
console.log(price + 0.5); // 100`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"boolean"}),n.jsx("pre",{className:"code",children:`const isOnline = true;
console.log(isOnline); // true`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"null"}),n.jsx("p",{children:'null means intentional empty value. You set it when you want "nothing here".'}),n.jsx("pre",{className:"code",children:`let data = null;
console.log(data); // null`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"undefined"}),n.jsx("p",{children:"undefined means a variable exists but no value is assigned yet."}),n.jsx("pre",{className:"code",children:`let x;
console.log(x); // undefined`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"symbol"}),n.jsx("p",{children:"symbol creates unique identifiers, often used as object keys to avoid collisions."}),n.jsx("pre",{className:"code",children:`const id1 = Symbol("id");
const id2 = Symbol("id");
console.log(id1 === id2); // false`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"bigint"}),n.jsx("p",{children:"bigint is for very large integers beyond Number safe limit. Use n at the end."}),n.jsx("pre",{className:"code",children:`const big = 9007199254740993n;
console.log(big); // 9007199254740993n`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Non Primitive"}),n.jsx("p",{children:"Non-primitive values are reference types. They are stored in memory and variables hold references."}),n.jsxs("div",{className:"miniGrid",children:[n.jsx("div",{className:"chip",children:"object"}),n.jsx("div",{className:"chip",children:"array"}),n.jsx("div",{className:"chip",children:"function"})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"object"}),n.jsx("pre",{className:"code",children:`const user = { name: "Ash", age: 22 };
console.log(user.name); // "Ash"`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"array"}),n.jsx("pre",{className:"code",children:`const nums = [1, 2, 3];
console.log(nums[1]); // 2`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"function"}),n.jsx("p",{children:"Functions are also values in JavaScript. You can store them in variables and pass them around."}),n.jsx("pre",{className:"code",children:`const add = (a, b) => a + b;
console.log(add(2, 3)); // 5`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Type system"}),n.jsx("p",{children:"JavaScript is dynamically typed. Types are attached to values, not variables."}),n.jsxs("div",{className:"note",children:[n.jsx("span",{className:"noteIcon",children:n.jsx(Em,{})}),n.jsx("span",{className:"noteText",children:"Same variable can hold different types at different times."})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Dynamic typing"}),n.jsx("pre",{className:"code",children:`let v = 10;
v = "ten";
console.log(v); // "ten"`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"typeof operator"}),n.jsx("p",{children:'typeof tells the type of a value. Small gotcha: typeof null returns "object".'}),n.jsx("pre",{className:"code",children:`console.log(typeof "hi"); // "string"
console.log(typeof 10); // "number"
console.log(typeof null); // "object"`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Type coercion"}),n.jsx("p",{children:"Coercion means JavaScript automatically converts types. Use strict equality to avoid surprises."}),n.jsx("pre",{className:"code",children:`console.log("5" + 1); // "51"
console.log("5" - 1); // 4
console.log(5 == "5"); // true
console.log(5 === "5"); // false`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Truthy vs falsy"}),n.jsx("p",{children:"In conditions, some values behave like false. Everything else is truthy."}),n.jsx("pre",{className:"code",children:`console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean("ok")); // true`}),n.jsxs("div",{className:"note2",children:[n.jsx("span",{className:"noteIcon2",children:n.jsx(lp,{})}),n.jsx("span",{className:"noteText2",children:'Falsy values: 0, "", null, undefined, NaN, false'})]})]}),n.jsxs("div",{className:"footer",children:[n.jsx("div",{className:"footerTitle",children:"Quick takeaway"}),n.jsxs("ul",{className:"footerList",children:[n.jsx("li",{children:"- Use const by default, let when reassignment needed"}),n.jsx("li",{children:"- Prefer === over =="}),n.jsx("li",{children:'- Remember typeof null is "object"'})]})]})]})]})},Ym={Wrapper:he.section`
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
    `},Km=()=>{const[s,c]=xe.useState(!1),a=()=>c(u=>!u);return n.jsxs(Ym.Wrapper,{className:s?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:a,"aria-expanded":s,children:[n.jsx("span",{className:"chev",children:s?n.jsx(Te,{}):n.jsx(Ie,{})}),n.jsx("span",{className:"icon",children:n.jsx(Am,{})}),n.jsx("span",{className:"title",children:"Operators"}),n.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Arithmetic"}),n.jsx("p",{children:"Arithmetic operators perform mathematical calculations. They are used for addition, subtraction, multiplication, division and more."}),n.jsx("pre",{className:"code",children:`let a = 10;
let b = 3;

a + b;  // 13
a - b;  // 7
a * b;  // 30
a / b;  // 3.333...
a % b;  // 1  remainder
a ** b; // 1000`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Assignment"}),n.jsx("p",{children:"Assignment operators store values in variables. They can also update values using shorthand syntax."}),n.jsx("pre",{className:"code",children:`let x = 5;
x += 2;  // 7
x -= 1;  // 6
x *= 3;  // 18
x /= 2;  // 9`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Comparison"}),n.jsx("p",{children:"Comparison operators check relationships between values and return true or false."}),n.jsx("pre",{className:"code",children:`5 > 3;   // true
5 < 3;   // false
5 >= 5;  // true
5 != 4;  // true`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Strict vs Loose equality"}),n.jsx("p",{children:"Loose equality uses == and performs type conversion. Strict equality uses === and checks both value and type. Strict equality is recommended."}),n.jsx("pre",{className:"code",children:`5 == "5";   // true  type conversion
5 === "5";  // false type mismatch
null == undefined;  // true
null === undefined; // false`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Logical operators"}),n.jsx("p",{children:"Logical operators combine conditions. They are often used in decision making."}),n.jsx("pre",{className:"code",children:`true && false;  // false
true || false;  // true
!true;          // false`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Nullish coalescing ??"}),n.jsx("p",{children:"The nullish operator returns the right value only if the left side is null or undefined. It does not treat 0 or empty string as false."}),n.jsx("pre",{className:"code",children:`let value = null;
value ?? "default";  // "default"

0 ?? 100;  // 0
"" ?? "text";  // ""`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Optional chaining ?."}),n.jsx("p",{children:"Optional chaining safely accesses nested properties. It prevents errors if a property does not exist."}),n.jsx("pre",{className:"code",children:`let user = {};

user.profile?.name;  // undefined
// No error even though profile does not exist`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Ternary operator"}),n.jsx("p",{children:"The ternary operator is a short form of if else. It returns one value if condition is true and another if false."}),n.jsx("pre",{className:"code",children:`let age = 18;

let status = age >= 18 ? "Adult" : "Minor";
// "Adult"`})]})]})]})},qm={Wrapper:he.section`
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
    `},Xm=()=>{const[s,c]=xe.useState(!1),a=()=>c(u=>!u);return n.jsxs(qm.Wrapper,{className:s?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:a,"aria-expanded":s,children:[n.jsx("span",{className:"chev",children:s?n.jsx(Te,{}):n.jsx(Ie,{})}),n.jsx("span",{className:"icon",children:n.jsx(Bm,{})}),n.jsx("span",{className:"title",children:"Control Flow"}),n.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[n.jsx("div",{className:"intro",children:n.jsx("p",{className:"p",children:"Control flow decides what code runs, when it runs, and how many times it runs. Most logic in JavaScript comes from conditions and loops."})}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"if else"}),n.jsx("p",{className:"p",children:"Use if else when you want to run code based on a condition."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example"]}),n.jsx("pre",{className:"code",children:`const age = 20;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

// output - Adult`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"switch"}),n.jsx("p",{className:"p",children:"switch is useful when you have multiple exact matches for the same value."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example"]}),n.jsx("pre",{className:"code",children:`const role = "admin";

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

// output - Full access`})]}),n.jsxs("div",{className:"hint",children:[n.jsx("span",{className:"hintIcon",children:n.jsx(Ji,{})}),"break is important - without it, execution continues to the next case."]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"for"}),n.jsx("p",{className:"p",children:"Use for when you know how many times you want to loop."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example"]}),n.jsx("pre",{className:"code",children:`for (let i = 1; i <= 3; i++) {
  console.log(i);
}

// output - 1
// output - 2
// output - 3`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"while"}),n.jsx("p",{className:"p",children:"while runs as long as the condition stays true. Use it when you do not know the exact number of iterations in advance."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example"]}),n.jsx("pre",{className:"code",children:`let n = 3;

while (n > 0) {
  console.log(n);
  n--;
}

// output - 3
// output - 2
// output - 1`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"do while"}),n.jsx("p",{className:"p",children:"do while runs the code at least once, even if the condition is false at the start."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example"]}),n.jsx("pre",{className:"code",children:`let x = 0;

do {
  console.log("Runs once");
} while (x > 0);

// output - Runs once`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"break"}),n.jsx("p",{className:"p",children:"break stops the current loop or switch immediately."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example"]}),n.jsx("pre",{className:"code",children:`for (let i = 1; i <= 5; i++) {
  if (i === 3) break;
  console.log(i);
}

// output - 1
// output - 2`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"continue"}),n.jsx("p",{className:"p",children:"continue skips the current iteration and moves to the next one."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example"]}),n.jsx("pre",{className:"code",children:`for (let i = 1; i <= 4; i++) {
  if (i === 2) continue;
  console.log(i);
}

// output - 1
// output - 3
// output - 4`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Nested loops"}),n.jsx("p",{className:"p",children:"A loop inside another loop. Useful for grids and pairs. Be careful - nested loops can get slow for large sizes."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example"]}),n.jsx("pre",{className:"code",children:`for (let row = 1; row <= 2; row++) {
  for (let col = 1; col <= 3; col++) {
    console.log(\`row \${row} col \${col}\`);
  }
}

// output - row 1 col 1
// output - row 1 col 2
// output - row 1 col 3
// output - row 2 col 1
// output - row 2 col 2
// output - row 2 col 3`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Guard clauses"}),n.jsx("p",{className:"p",children:"Guard clauses exit early to avoid deep nesting. This keeps code cleaner and easier to read."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example"]}),n.jsx("pre",{className:"code",children:`const getDiscount = (isMember) => {
  if (!isMember) return 0; // guard clause - exit early
  return 10;
};

console.log(getDiscount(false));
console.log(getDiscount(true));

// output - 0
// output - 10`})]})]})]})]})},Zm={Wrapper:he.section`
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
    `},ex=()=>{const[s,c]=xe.useState(!1),a=()=>c(u=>!u);return n.jsxs(Zm.Wrapper,{className:s?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:a,"aria-expanded":s,children:[n.jsx("span",{className:"chev",children:s?n.jsx(Te,{}):n.jsx(Ie,{})}),n.jsx("span",{className:"icon",children:n.jsx(Lr,{})}),n.jsx("span",{className:"title",children:"Functions"}),n.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Function Basics"}),n.jsx("p",{className:"p",children:"A function is a reusable block of code. You call it when you want the same logic again. Functions can take inputs and can return outputs."})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Function declaration"}),n.jsx("p",{className:"p",children:"A named function declared with the function keyword. Declarations are hoisted, so you can call them before they appear in the file."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example"]}),n.jsx("pre",{className:"code",children:`function add(a, b) {
  return a + b;
}

add(2, 3);`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Function expression"}),n.jsx("p",{className:"p",children:"A function stored in a variable. Expressions are not hoisted like declarations."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example"]}),n.jsx("pre",{className:"code",children:`const multiply = function (a, b) {
  return a * b;
};

multiply(2, 3);`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Arrow functions"}),n.jsx("p",{className:"p",children:"A shorter syntax for writing functions. Arrow functions do not have their own this, they use this from the outer scope."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example"]}),n.jsx("pre",{className:"code",children:`const greet = (name) => {
  return \`Hello, \${name}\`;
};

const square = (n) => n * n;`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Parameters vs arguments"}),n.jsx("p",{className:"p",children:"Parameters are the names in the function definition. Arguments are the real values you pass when calling the function."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example"]}),n.jsx("pre",{className:"code",children:`function welcome(name) { // name is a parameter
  return \`Hi \${name}\`;
}

welcome("Ashish"); // "Ashish" is an argument`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Default parameters"}),n.jsx("p",{className:"p",children:"If an argument is not provided, you can set a default value in the function signature."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example"]}),n.jsx("pre",{className:"code",children:`function sayHi(name = "Guest") {
  return \`Hi \${name}\`;
}

sayHi();
sayHi("Ashish");`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Rest parameters"}),n.jsx("p",{className:"p",children:"Rest parameters collect multiple arguments into a single array. Useful when you do not know how many values will be passed."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example"]}),n.jsx("pre",{className:"code",children:`function sum(...nums) {
  return nums.reduce((acc, n) => acc + n, 0);
}

sum(1, 2, 3, 4);`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Advanced Function Concepts"}),n.jsx("p",{className:"p",children:"These concepts help you write cleaner and more reusable code, especially in real apps and React."})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Return values"}),n.jsx("p",{className:"p",children:"A return value is what a function sends back to the caller. Without return, the function returns undefined."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example"]}),n.jsx("pre",{className:"code",children:`function getPrice() {
  return 499;
}

const price = getPrice();`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"First class functions"}),n.jsx("p",{className:"p",children:"In JavaScript, functions are values. You can store them in variables, pass them as arguments, or return them from other functions."}),n.jsxs("div",{className:"miniRow",children:[n.jsxs("div",{className:"mini",children:[n.jsx("span",{className:"miniIcon",children:n.jsx(tp,{})}),n.jsxs("div",{className:"miniText",children:[n.jsx("div",{className:"miniTitle",children:"Store"}),n.jsx("div",{className:"miniSub",children:"const fn = () => "})]})]}),n.jsxs("div",{className:"mini",children:[n.jsx("span",{className:"miniIcon",children:n.jsx(sp,{})}),n.jsxs("div",{className:"miniText",children:[n.jsx("div",{className:"miniTitle",children:"Pass"}),n.jsx("div",{className:"miniSub",children:"doWork(fn)"})]})]}),n.jsxs("div",{className:"mini",children:[n.jsx("span",{className:"miniIcon",children:n.jsx(Es,{})}),n.jsxs("div",{className:"miniText",children:[n.jsx("div",{className:"miniTitle",children:"Return"}),n.jsx("div",{className:"miniSub",children:"return fn"})]})]})]}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example"]}),n.jsx("pre",{className:"code",children:`function run(task) {
  return task();
}

run(() => "done");`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Higher order functions"}),n.jsx("p",{className:"p",children:"A higher order function either takes a function as an input or returns a function as output. Common examples are map, filter, and reduce."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example"]}),n.jsx("pre",{className:"code",children:`const nums = [1, 2, 3];

const doubled = nums.map((n) => n * 2);`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Callback functions"}),n.jsx("p",{className:"p",children:"A callback is a function passed into another function to be called later. You see callbacks in events, timers, and array methods."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example"]}),n.jsx("pre",{className:"code",children:`setTimeout(() => {
  console.log("Runs after 1 second");
}, 1000);`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Pure vs impure functions"}),n.jsx("p",{className:"p",children:"A pure function returns the same output for the same input and does not change anything outside itself. Impure functions depend on or modify external state."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Examples"]}),n.jsx("pre",{className:"code",children:`// pure
function add(a, b) {
  return a + b;
}

// impure
let count = 0;
function inc() {
  count = count + 1;
  return count;
}`})]})]})]})]})},rx={Wrapper:he.section`
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
    `},nx=()=>{const[s,c]=xe.useState(!1);return n.jsxs(rx.Wrapper,{className:s?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:()=>c(a=>!a),"aria-expanded":s,children:[n.jsx("span",{className:"chev",children:s?n.jsx(Te,{}):n.jsx(Ie,{})}),n.jsx("span",{className:"icon",children:n.jsx(tp,{})}),n.jsx("span",{className:"title",children:"Scope & Execution Context"}),n.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Global scope"}),n.jsx("p",{children:"Variables declared outside any function or block belong to global scope. They are accessible everywhere in the program."}),n.jsx("pre",{className:"code",children:`let name = "Ash";

function greet() {
  console.log(name);
}

greet();`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Function scope"}),n.jsx("p",{children:"Variables declared inside a function are only accessible inside that function."}),n.jsx("pre",{className:"code",children:`function test() {
  let age = 25;
  console.log(age);
}

test();
// console.log(age); // Error`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Block scope"}),n.jsxs("p",{children:["Variables declared with let and const inside "," are block scoped."]}),n.jsx("pre",{className:"code",children:`if (true) {
  let x = 10;
  const y = 20;
}

// console.log(x); // Error`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Lexical scope"}),n.jsx("p",{children:"Functions remember the scope where they were created. This is called lexical scope."}),n.jsx("pre",{className:"code",children:`function outer() {
  let count = 5;

  function inner() {
    console.log(count);
  }

  inner();
}

outer();`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Scope chain"}),n.jsx("p",{children:"When a variable is used, JavaScript looks in the current scope, then outer scopes, until it finds it."})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Execution context"}),n.jsx("p",{children:"Every time a function runs, JavaScript creates an execution context. It contains variables, arguments, and the value of this."})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Call stack"}),n.jsx("p",{children:"The call stack keeps track of function calls. Functions are pushed when called and popped when finished."}),n.jsx("pre",{className:"code",children:`function one() {
  two();
}

function two() {
  console.log("Inside two");
}

one();`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Hoisting"}),n.jsx("p",{children:"During compilation, JavaScript moves variable and function declarations to the top of their scope. This is called hoisting."})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"var vs let vs const hoisting"}),n.jsx("p",{children:"var is hoisted and initialized as undefined. let and const are hoisted but not initialized. Accessing them before declaration causes ReferenceError."}),n.jsx("pre",{className:"code",children:`console.log(a); // undefined
var a = 10;

// console.log(b); // ReferenceError
let b = 20;`})]})]})]})},tx={Wrapper:he.section`
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
    `},ox=()=>{const[s,c]=xe.useState(!1),a=()=>c(u=>!u);return n.jsxs(tx.Wrapper,{className:s?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:a,"aria-expanded":s,children:[n.jsx("span",{className:"chev",children:s?n.jsx(Te,{}):n.jsx(Ie,{})}),n.jsx("span",{className:"icon",children:n.jsx(rp,{})}),n.jsx("span",{className:"title",children:"Objects"}),n.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Object Basics"}),n.jsx("p",{children:"An object stores data in key-value pairs. Keys are usually strings and values can be anything like strings, numbers, arrays, or even functions."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Basic object"]}),n.jsx("pre",{className:"code",children:`const user = {
  name: "Ash",
  age: 25,
  isPro: true
};

console.log(user.name); // "Ash"`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Creating objects"}),n.jsx("p",{children:"Most commonly we create objects using object literals using curly braces. Another way is using the Object constructor, but literals are preferred."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Two ways"]}),n.jsx("pre",{className:"code",children:`const a = { city: "Bangalore" };
const b = new Object({ city: "Bangalore" });

console.log(a.city); // "Bangalore"
console.log(b.city); // "Bangalore"`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Dot vs bracket notation"}),n.jsx("p",{children:"Dot notation is simple and common. Bracket notation is needed when the key has spaces, special characters, or when the key is stored in a variable."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(Su,{})}),"Access keys"]}),n.jsx("pre",{className:"code",children:`const obj = { name: "Ash", "full name": "Ashish Ranjan" };

console.log(obj.name); // "Ash"
console.log(obj["full name"]); // "Ashish Ranjan"`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Nested objects"}),n.jsx("p",{children:"Objects can contain other objects. You access nested values using dot or bracket notation step by step."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(ta,{})}),"Nested example"]}),n.jsx("pre",{className:"code",children:`const profile = {
  name: "Ash",
  address: {
    city: "Bangalore",
    pin: 560049
  }
};

console.log(profile.address.city); // "Bangalore"`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Dynamic keys"}),n.jsx("p",{children:"Sometimes you do not know the key name in advance. You can create or access keys dynamically using bracket notation."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(Su,{})}),"Dynamic key"]}),n.jsx("pre",{className:"code",children:`const key = "role";
const user = { name: "Ash" };

user[key] = "developer";

console.log(user.role); // "developer"`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Object Methods"}),n.jsx("p",{children:'A method is a function stored inside an object. Methods can use "this" to access other properties of the same object.'}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Method example"]}),n.jsx("pre",{className:"code",children:`const user = {
  name: "Ash",
  greet() {
    return "Hi, " + this.name;
  }
};

console.log(user.greet()); // "Hi, Ash"`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"this keyword"}),n.jsx("p",{children:'In an object method, "this" usually refers to the object before the dot. That is why user.greet() can access user.name using this.name.'}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"this in method"]}),n.jsx("pre",{className:"code",children:`const box = {
  label: "JS",
  show() {
    console.log(this.label);
  }
};

box.show(); // "JS"`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Object.keys"}),n.jsx("p",{children:"Object.keys returns an array of keys of an object. Useful when you want to loop over properties."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"keys"]}),n.jsx("pre",{className:"code",children:`const obj = { a: 1, b: 2 };

console.log(Object.keys(obj)); // ["a", "b"]`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Object.values"}),n.jsx("p",{children:"Object.values returns an array of values of an object. Useful for totals or quick checks."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"values"]}),n.jsx("pre",{className:"code",children:`const obj = { a: 1, b: 2 };

console.log(Object.values(obj)); // [1, 2]`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Object.entries"}),n.jsx("p",{children:"Object.entries returns an array of [key, value] pairs. Very handy for loops."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"entries"]}),n.jsx("pre",{className:"code",children:`const obj = { a: 1, b: 2 };

console.log(Object.entries(obj));
// [["a", 1], ["b", 2]]`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Destructuring"}),n.jsx("p",{children:"Destructuring is a shortcut to pull values from an object into variables. It makes code cleaner."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"destructuring"]}),n.jsx("pre",{className:"code",children:`const user = { name: "Ash", city: "Bangalore" };

const { name, city } = user;

console.log(name); // "Ash"
console.log(city); // "Bangalore"`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Spread operator"}),n.jsx("p",{children:"The spread operator copies properties into a new object. It is commonly used to make a shallow copy or merge objects."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(Mi,{})}),"spread merge"]}),n.jsx("pre",{className:"code",children:`const a = { x: 1 };
const b = { y: 2 };

const merged = { ...a, ...b };

console.log(merged); // { x: 1, y: 2 }`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Shallow vs deep copy"}),n.jsx("p",{children:"A shallow copy duplicates only the first level. Nested objects remain shared references. A deep copy duplicates nested objects too."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(Mi,{})}),"shallow copy problem"]}),n.jsx("pre",{className:"code",children:`const original = {
  name: "Ash",
  address: { city: "Bangalore" }
};

const shallow = { ...original };
shallow.address.city = "Bhopal";

console.log(original.address.city); // "Bhopal" (shared reference)`})]}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(Mi,{})}),"deep copy simple way"]}),n.jsx("pre",{className:"code",children:`const original = {
  name: "Ash",
  address: { city: "Bangalore" }
};

const deep = JSON.parse(JSON.stringify(original));
deep.address.city = "Bhopal";

console.log(original.address.city); // "Bangalore"
console.log(deep.address.city); // "Bhopal"`})]}),n.jsx("div",{className:"note",children:"Note - JSON deep copy works for simple data. It breaks for functions, Dates, undefined, and special types. Modern environments support structuredClone for better deep copying."})]})]})]})},sx={Wrapper:he.section`
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
    `},lx=()=>{const[s,c]=xe.useState(!1);return n.jsxs(sx.Wrapper,{className:s?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:()=>c(a=>!a),"aria-expanded":s,children:[n.jsx("span",{className:"chev",children:s?n.jsx(Te,{}):n.jsx(Ie,{})}),n.jsx("span",{className:"icon",children:n.jsx(Im,{})}),n.jsx("span",{className:"title",children:"Arrays"}),n.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Array Basics"}),n.jsx("p",{children:"An array is an ordered collection of values. It can store numbers, strings, objects, or even other arrays."}),n.jsx("pre",{className:"code",children:`const numbers = [10, 20, 30];
console.log(numbers);
// [10, 20, 30]`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Creating Arrays"}),n.jsx("pre",{className:"code",children:`const arr1 = [1, 2, 3];

const arr2 = new Array(4, 5, 6);

console.log(arr1);
// [1, 2, 3]`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Indexing"}),n.jsx("p",{children:"Arrays are zero-indexed. The first element is at index 0."}),n.jsx("pre",{className:"code",children:`const fruits = ["apple", "banana", "mango"];

console.log(fruits[0]);
// "apple"`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Length"}),n.jsx("pre",{className:"code",children:`const items = [1, 2, 3, 4];

console.log(items.length);
// 4`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"push"}),n.jsx("p",{children:"Add element to end."}),n.jsx("pre",{className:"code",children:`const arr = [1, 2];
arr.push(3);

console.log(arr);
// [1, 2, 3]`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"pop"}),n.jsx("p",{children:"Remove last element."}),n.jsx("pre",{className:"code",children:`const arr = [1, 2, 3];
arr.pop();

console.log(arr);
// [1, 2]`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"shift"}),n.jsx("p",{children:"Remove first element."}),n.jsx("pre",{className:"code",children:`const arr = [1, 2, 3];
arr.shift();

console.log(arr);
// [2, 3]`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"unshift"}),n.jsx("p",{children:"Add element to beginning."}),n.jsx("pre",{className:"code",children:`const arr = [2, 3];
arr.unshift(1);

console.log(arr);
// [1, 2, 3]`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"slice"}),n.jsx("p",{children:"Returns a shallow copy. Does not modify original."}),n.jsx("pre",{className:"code",children:`const arr = [1, 2, 3, 4];
const newArr = arr.slice(1, 3);

console.log(newArr);
// [2, 3]`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"splice"}),n.jsx("p",{children:"Modifies array. Can remove or insert elements."}),n.jsx("pre",{className:"code",children:`const arr = [1, 2, 3];
arr.splice(1, 1);

console.log(arr);
// [1, 3]`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"map"}),n.jsx("p",{children:"Returns new array after transformation."}),n.jsx("pre",{className:"code",children:`const nums = [1, 2, 3];

const doubled = nums.map(n => n * 2);

console.log(doubled);
// [2, 4, 6]`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"filter"}),n.jsx("pre",{className:"code",children:`const nums = [1, 2, 3, 4];

const even = nums.filter(n => n % 2 === 0);

console.log(even);
// [2, 4]`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"reduce"}),n.jsx("pre",{className:"code",children:`const nums = [1, 2, 3];

const sum = nums.reduce((acc, curr) => acc + curr, 0);

console.log(sum);
// 6`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"forEach"}),n.jsx("pre",{className:"code",children:`const nums = [1, 2, 3];

nums.forEach(n => {
    console.log(n);
});

// 1
// 2
// 3`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"find"}),n.jsx("pre",{className:"code",children:`const nums = [5, 10, 15];

const result = nums.find(n => n > 8);

console.log(result);
// 10`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"some"}),n.jsx("pre",{className:"code",children:`const nums = [1, 3, 5];

const hasEven = nums.some(n => n % 2 === 0);

console.log(hasEven);
// false`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"every"}),n.jsx("pre",{className:"code",children:`const nums = [2, 4, 6];

const allEven = nums.every(n => n % 2 === 0);

console.log(allEven);
// true`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"includes"}),n.jsx("pre",{className:"code",children:`const arr = ["a", "b", "c"];

console.log(arr.includes("b"));
// true`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"sort"}),n.jsx("p",{children:"Sort converts elements to strings by default. Always provide compare function for numbers."}),n.jsx("pre",{className:"code",children:`const nums = [10, 5, 20];

nums.sort((a, b) => a - b);

console.log(nums);
// [5, 10, 20]`})]})]})]})},ix={Wrapper:he.section`
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
    `},ax=()=>{const[s,c]=xe.useState(!1),a=()=>c(u=>!u);return n.jsxs(ix.Wrapper,{className:s?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:a,"aria-expanded":s,children:[n.jsx("span",{className:"chev",children:s?n.jsx(Te,{}):n.jsx(Ie,{})}),n.jsx("span",{className:"icon",children:n.jsx(Fm,{})}),n.jsx("span",{className:"title",children:"Strings"}),n.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Strings"}),n.jsx("p",{children:"A string is text data in JavaScript. Strings are written inside quotes - \"hello\", 'world', or backticks `like this`. Strings are immutable, meaning methods return a new string instead of changing the original."}),n.jsx("pre",{className:"code",children:`const name = "Ash";
const city = 'Bangalore';

console.log(name); // Ash
console.log(city); // Bangalore`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Template literals"}),n.jsxs("p",{children:["Template literals use backticks and allow easy string interpolation using $","{...}",". They also support multi-line strings."]}),n.jsx("pre",{className:"code",children:`const name = "Ash";
const msg = \`Hello, \${name}!\`;

console.log(msg); // Hello, Ash!

const multi = \`Line 1
Line 2\`;

console.log(multi);
// Line 1
// Line 2`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"String methods"}),n.jsx("p",{children:"String methods help you transform, search, and extract parts of text. Most commonly used methods are below."})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"toUpperCase"}),n.jsx("p",{children:"Converts the string to uppercase."}),n.jsx("pre",{className:"code",children:`const s = "hello";
console.log(s.toUpperCase()); // HELLO`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"toLowerCase"}),n.jsx("p",{children:"Converts the string to lowercase."}),n.jsx("pre",{className:"code",children:`const s = "HeLLo";
console.log(s.toLowerCase()); // hello`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"trim"}),n.jsx("p",{children:"Removes spaces from the start and end of a string. Useful for form input cleaning."}),n.jsx("pre",{className:"code",children:`const raw = "   hello   ";
console.log(raw.trim()); // hello`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"slice"}),n.jsx("p",{children:"Extracts a part of a string and returns it. It does not modify the original string."}),n.jsx("pre",{className:"code",children:`const s = "JavaScript";
console.log(s.slice(0, 4)); // Java
console.log(s.slice(4)); // Script`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"replace"}),n.jsx("p",{children:"Replaces the first match of a substring and returns a new string. For multiple replacements, you usually use a regular expression."}),n.jsx("pre",{className:"code",children:`const s = "I love JS";
console.log(s.replace("JS", "JavaScript")); // I love JavaScript`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"split"}),n.jsx("p",{children:"Splits a string into an array using a separator. Very useful when working with CSV or user input."}),n.jsx("pre",{className:"code",children:`const s = "a,b,c";
const arr = s.split(",");

console.log(arr); // ["a","b","c"]`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"includes"}),n.jsx("p",{children:"Checks if a string contains another substring. Returns true or false."}),n.jsx("pre",{className:"code",children:`const s = "frontend developer";
console.log(s.includes("dev")); // true
console.log(s.includes("backend")); // false`})]}),n.jsxs("div",{className:"footerNote",children:[n.jsx("div",{className:"footerTitle",children:"Quick takeaway"}),n.jsxs("ul",{className:"checks",children:[n.jsxs("li",{children:[n.jsx("span",{className:"checkDot"}),"String methods return new strings - original does not change"]}),n.jsxs("li",{children:[n.jsx("span",{className:"checkDot"}),"Template literals are best for building dynamic text"]}),n.jsxs("li",{children:[n.jsx("span",{className:"checkDot"}),"trim and split are very common in real forms and APIs"]})]})]})]})]})},cx={Wrapper:he.section`
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
    `},dx=()=>{const[s,c]=xe.useState(!1),a=()=>c(u=>!u);return n.jsxs(cx.Wrapper,{className:s?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:a,"aria-expanded":s,children:[n.jsx("span",{className:"chev",children:s?n.jsx(Te,{}):n.jsx(Ie,{})}),n.jsx("span",{className:"icon",children:n.jsx(Lr,{})}),n.jsx("span",{className:"title",children:"ES6+ Essentials"}),n.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Destructuring"}),n.jsx("p",{children:"Destructuring allows extracting values from arrays or objects into variables in a clean way."}),n.jsx("pre",{className:"code",children:`const user = { name: "Ash", age: 25 };

const { name, age } = user;

console.log(name); // Ash
console.log(age);  // 25`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Spread"}),n.jsx("p",{children:"Spread expands arrays or objects into individual elements."}),n.jsx("pre",{className:"code",children:`const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];

console.log(arr2); // [1, 2, 3, 4]`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Rest"}),n.jsx("p",{children:"Rest collects multiple values into a single array."}),n.jsx("pre",{className:"code",children:`function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3)); // 6`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Default parameters"}),n.jsx("p",{children:"Default values are used if no argument is provided."}),n.jsx("pre",{className:"code",children:`function greet(name = "Guest") {
  return "Hello " + name;
}

console.log(greet()); // Hello Guest`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Template literals"}),n.jsx("p",{children:"Template literals use backticks and allow string interpolation."}),n.jsx("pre",{className:"code",children:'const name = "Ash";\nconst message = `Welcome ${name}`;\n\nconsole.log(message); // Welcome Ash'})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Modules"}),n.jsx("p",{children:"Modules allow splitting code into separate files for better structure."})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"export"}),n.jsx("pre",{className:"code",children:`// math.js
export function add(a, b) {
  return a + b;
}`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"import"}),n.jsx("pre",{className:"code",children:`// main.js
import { add } from "./math.js";

console.log(add(2, 3)); // 5`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Classes"}),n.jsx("p",{children:"Classes provide a cleaner syntax for creating objects and constructors."}),n.jsx("pre",{className:"code",children:`class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return "Hi " + this.name;
  }
}

const p = new Person("Ash");
console.log(p.greet()); // Hi Ash`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Static methods"}),n.jsx("p",{children:"Static methods belong to the class itself, not instances."}),n.jsx("pre",{className:"code",children:`class MathUtil {
  static double(n) {
    return n * 2;
  }
}

console.log(MathUtil.double(5)); // 10`})]})]})]})},ux={Wrapper:he.section`
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
    `},px=()=>{const[s,c]=xe.useState(!1),a=()=>c(u=>!u);return n.jsxs(ux.Wrapper,{className:s?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:a,"aria-expanded":s,children:[n.jsx("span",{className:"chev",children:s?n.jsx(Te,{}):n.jsx(Ie,{})}),n.jsx("span",{className:"icon",children:n.jsx(op,{})}),n.jsx("span",{className:"title",children:"DOM Manipulation"}),n.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"DOM Manipulation"}),n.jsx("p",{className:"p",children:"DOM means Document Object Model. When the browser reads HTML, it creates a tree of elements. JavaScript can select elements from this tree and change them."})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Selecting elements"}),n.jsx("p",{className:"p",children:"To change anything, first you select it. The most common selectors are getElementById and querySelector."})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"getElementById"}),n.jsx("p",{className:"p",children:"Selects one element by its id. It is fast and returns a single element or null."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example"]}),n.jsx("pre",{className:"code",children:`// HTML
// <h1 id="title">Hello</h1>

const el = document.getElementById("title");
console.log(el.textContent);
// Output: Hello`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"querySelector"}),n.jsx("p",{className:"p",children:"Selects the first element that matches a CSS selector. Works with classes, ids, tags, and combinations."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example"]}),n.jsx("pre",{className:"code",children:`// HTML
// <div class="card"><p class="text">Hi</p></div>

const p = document.querySelector(".card .text");
console.log(p.textContent);
// Output: Hi`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Changing content"}),n.jsx("p",{className:"p",children:"Use textContent for plain text and innerHTML for HTML. Prefer textContent when possible."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example"]}),n.jsx("pre",{className:"code",children:`// HTML
// <p id="msg">Old</p>

const msg = document.getElementById("msg");
msg.textContent = "New";
console.log(msg.textContent);
// Output: New`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Changing styles"}),n.jsx("p",{className:"p",children:"You can change inline styles using element.style. For bigger styling changes, classList is usually better."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example"]}),n.jsx("pre",{className:"code",children:`// HTML
// <div id="box"></div>

const box = document.getElementById("box");
box.style.width = "120px";
box.style.height = "60px";
box.style.backgroundColor = "black";
// Result: box becomes a 120x60 black rectangle`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Creating elements"}),n.jsx("p",{className:"p",children:"Use document.createElement to create a new element, then append it to the page."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example"]}),n.jsx("pre",{className:"code",children:`// HTML
// <div id="root"></div>

const root = document.getElementById("root");

const btn = document.createElement("button");
btn.textContent = "Click me";

root.appendChild(btn);
// Result: a button appears inside #root`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Removing elements"}),n.jsx("p",{className:"p",children:"You can remove an element using element.remove(). This removes it from the DOM."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example"]}),n.jsx("pre",{className:"code",children:`// HTML
// <p id="temp">Delete me</p>

const temp = document.getElementById("temp");
temp.remove();
// Result: the paragraph disappears`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"classList"}),n.jsx("p",{className:"p",children:"classList is the clean way to add, remove, or toggle CSS classes on an element."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example"]}),n.jsx("pre",{className:"code",children:`// HTML
// <div id="card" class="card"></div>

const card = document.getElementById("card");

card.classList.add("active");
// Result: class becomes "card active"

card.classList.toggle("active");
// Result: removes "active" if present, otherwise adds it`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Attributes"}),n.jsx("p",{className:"p",children:"Attributes are values on HTML elements like href, src, alt, and data-* values. Use getAttribute and setAttribute to work with them."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example"]}),n.jsx("pre",{className:"code",children:`// HTML
// <a id="link" href="https://example.com">Open</a>

const link = document.getElementById("link");

console.log(link.getAttribute("href"));
// Output: https://example.com

link.setAttribute("target", "_blank");
// Result: link opens in new tab`})]})]})]})]})},hx={Wrapper:he.section`
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
    `},fx=()=>{const[s,c]=xe.useState(!1),a=()=>c(u=>!u);return n.jsxs(hx.Wrapper,{className:s?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:a,"aria-expanded":s,children:[n.jsx("span",{className:"chev",children:s?n.jsx(Te,{}):n.jsx(Ie,{})}),n.jsx("span",{className:"icon",children:n.jsx(Lr,{})}),n.jsx("span",{className:"title",children:"Events"}),n.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Events"}),n.jsx("p",{className:"p",children:"Events are signals that something happened - like a click, key press, scroll, submit, or page load. JavaScript listens to events and runs code when they happen."})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(op,{})}),"addEventListener"]}),n.jsx("p",{className:"p",children:"addEventListener attaches a function to run when an event happens on an element."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Basic click listener"]}),n.jsx("pre",{className:"code",children:`const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  console.log("clicked"); // output - clicked
});`})]})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(Cu,{})}),"Event object"]}),n.jsx("p",{className:"p",children:"The event object is passed to your listener. It contains details like what type of event happened and which element triggered it."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Reading event data"]}),n.jsx("pre",{className:"code",children:`document.addEventListener("click", (e) => {
  console.log(e.type); // output - click
  console.log(e.target.tagName); // output - BUTTON (example)
});`})]})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(Ji,{})}),"Event bubbling"]}),n.jsx("p",{className:"p",children:"Bubbling means the event starts at the target element and then moves upward through its parent elements. This is the default behavior."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Bubbling example"]}),n.jsx("pre",{className:"code",children:`const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

parent.addEventListener("click", () => {
  console.log("parent"); // output - parent
});

child.addEventListener("click", () => {
  console.log("child"); // output - child
});

// click on .child
// output order - child then parent`})]})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(Ji,{})}),"Event capturing"]}),n.jsx("p",{className:"p",children:"Capturing means the event travels from the top (document) down to the target element. It happens before bubbling. You enable it using the third parameter or capture option."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Capturing enabled"]}),n.jsx("pre",{className:"code",children:`parent.addEventListener("click", () => {
  console.log("parent capture"); // output - parent capture
}, true);

child.addEventListener("click", () => {
  console.log("child"); // output - child
});

// click on .child
// output order - parent capture then child`})]})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(Cu,{})}),"Event delegation"]}),n.jsx("p",{className:"p",children:"Delegation means you attach one listener to a parent and handle events for its children using e.target. This is useful for dynamic lists where items are added later."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"One listener for many buttons"]}),n.jsx("pre",{className:"code",children:`const list = document.querySelector(".list");

list.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    console.log("button clicked"); // output - button clicked
  }
});`})]})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(Om,{})}),"preventDefault"]}),n.jsx("p",{className:"p",children:"preventDefault stops the browser's default action. Example: stop a form from submitting or stop a link from navigating."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Stop form submit"]}),n.jsx("pre",{className:"code",children:`const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("blocked submit"); // output - blocked submit
});`})]})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(Rm,{})}),"stopPropagation"]}),n.jsx("p",{className:"p",children:"stopPropagation stops the event from moving further in the bubbling or capturing chain. Use it when you do not want parent listeners to run."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Stop bubbling to parent"]}),n.jsx("pre",{className:"code",children:`parent.addEventListener("click", () => {
  console.log("parent"); // output - parent
});

child.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("child only"); // output - child only
});

// click on .child
// output - child only`})]})]})]})]})},mx={Wrapper:he.section`
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
    `},xx=()=>{const[s,c]=xe.useState(!1),a=()=>c(u=>!u);return n.jsxs(mx.Wrapper,{className:s?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:a,"aria-expanded":s,children:[n.jsx("span",{className:"chev",children:s?n.jsx(Te,{}):n.jsx(Ie,{})}),n.jsx("span",{className:"icon",children:n.jsx(Ri,{})}),n.jsx("span",{className:"title",children:"Asynchronous JavaScript"}),n.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Basics"}),n.jsx("p",{children:"JavaScript runs code in a single main thread. Async code lets you start a task now and handle its result later, without freezing the UI or blocking other work."})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Synchronous vs asynchronous"}),n.jsx("p",{children:"Synchronous code runs line by line and waits for each step to finish. Asynchronous code starts a task and continues running the next lines, then comes back when the task is done."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Sync vs async example"]}),n.jsx("pre",{className:"code",children:`console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

console.log("C");

// output:
// A
// C
// B`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Blocking vs non blocking"}),n.jsx("p",{children:"Blocking means the main thread cannot do anything else until a task finishes. Non-blocking means the task is handled in the background and the main thread keeps running."}),n.jsxs("div",{className:"note",children:[n.jsx("span",{className:"noteIcon",children:n.jsx(Zu,{})}),"In the browser, network requests and timers are handled by Web APIs, so your UI stays responsive."]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Timers"}),n.jsx("p",{children:"Timers schedule code to run later or repeatedly. They do not pause JavaScript. They register a callback and JavaScript continues running."})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"setTimeout"}),n.jsx("p",{children:"setTimeout runs a function once after a delay in milliseconds."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(Ri,{})}),"Run once after delay"]}),n.jsx("pre",{className:"code",children:`console.log("Start");

setTimeout(() => {
  console.log("After 1 second");
}, 1000);

console.log("End");

// output:
// Start
// End
// After 1 second`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"setInterval"}),n.jsx("p",{children:"setInterval runs a function repeatedly after every given delay. You should clear it when you are done."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(Ri,{})}),"Repeat every second"]}),n.jsx("pre",{className:"code",children:`let count = 0;

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
// Tick: 3`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Promises"}),n.jsx("p",{children:"A Promise represents a value that will be available in the future. It can be pending, fulfilled, or rejected."})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Creating promises"}),n.jsx("p",{children:"You create a Promise using new Promise with resolve and reject functions."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(Lr,{})}),"Create a promise"]}),n.jsx("pre",{className:"code",children:`const p = new Promise((resolve, reject) => {
  const ok = true;

  setTimeout(() => {
    if (ok) resolve("Done");
    else reject("Failed");
  }, 500);
});

p.then((msg) => console.log(msg));
// output:
// Done`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"then"}),n.jsx("p",{children:"then runs when the Promise is fulfilled and gives you the resolved value."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"then example"]}),n.jsx("pre",{className:"code",children:`Promise.resolve(10)
  .then((n) => n * 2)
  .then((n) => console.log(n));

// output:
// 20`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"catch"}),n.jsx("p",{children:"catch runs when the Promise is rejected. It is used for error handling."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"catch example"]}),n.jsx("pre",{className:"code",children:`Promise.reject("Oops")
  .catch((err) => console.log("Error:", err));

// output:
// Error: Oops`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"finally"}),n.jsx("p",{children:"finally runs after the Promise settles, whether it is fulfilled or rejected. Useful for cleanup."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"finally example"]}),n.jsx("pre",{className:"code",children:`Promise.resolve("OK")
  .then((v) => console.log(v))
  .finally(() => console.log("Cleanup"));

// output:
// OK
// Cleanup`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Async Await"}),n.jsx("p",{children:"async and await are a cleaner way to work with Promises. async makes a function return a Promise. await pauses inside that async function until the Promise resolves."})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"async function"}),n.jsx("p",{children:"An async function always returns a Promise, even if you return a normal value."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(Lr,{})}),"async returns a promise"]}),n.jsx("pre",{className:"code",children:`async function getNumber() {
  return 5;
}

getNumber().then((v) => console.log(v));

// output:
// 5`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"await keyword"}),n.jsx("p",{children:"await waits for a Promise to resolve and gives you the resolved value. You can only use await inside an async function."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(Lr,{})}),"await example"]}),n.jsx("pre",{className:"code",children:`const wait = (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms));

async function run() {
  console.log("A");
  await wait(300);
  console.log("B");
}

run();

// output:
// A
// B`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"try catch"}),n.jsx("p",{children:"Use try catch with async await to handle rejected Promises in a clean way."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Error handling with try catch"]}),n.jsx("pre",{className:"code",children:`const fail = () =>
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
// Caught: Network error`})]})]})]})]})},gx={Wrapper:he.section`
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
    `},vx=()=>{const[s,c]=xe.useState(!1),a=()=>c(u=>!u);return n.jsxs(gx.Wrapper,{className:s?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:a,"aria-expanded":s,children:[n.jsx("span",{className:"chev",children:s?n.jsx(Te,{}):n.jsx(Ie,{})}),n.jsx("span",{className:"icon",children:n.jsx(Cm,{})}),n.jsx("span",{className:"title",children:"Fetch and APIs"}),n.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Fetch and APIs"}),n.jsx("p",{children:"An API is a way for your app to talk to another service over the internet. Most web APIs use HTTP and send data as JSON. In the browser, the most common way to call an API is using fetch()."})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Fetch API"}),n.jsx("p",{children:"fetch() makes an HTTP request and returns a Promise. The first await gives you a Response object. The second await reads the body data, usually with response.json()."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Basic GET request"]}),n.jsx("pre",{className:"code",children:`async function loadUser() {
  const res = await fetch('https://api.example.com/user/1');
  const data = await res.json();

  console.log(data);
  // output - { id: 1, name: 'Alex' }
}`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"HTTP methods"}),n.jsx("p",{children:"HTTP methods describe what action you want to perform on a resource."}),n.jsxs("ul",{className:"bullets",children:[n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),"GET - read data"]}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),"POST - create new data"]}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),"PUT - replace data"]}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),"PATCH - update part of data"]}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),"DELETE - remove data"]})]}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(Lm,{})}),"POST request example"]}),n.jsx("pre",{className:"code",children:`async function createUser() {
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
}`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"JSON"}),n.jsx("p",{children:"JSON stands for JavaScript Object Notation. It is a text format used to send data between systems. You usually convert objects to JSON using JSON.stringify and convert JSON text back to objects using JSON.parse."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(np,{})}),"JSON stringify and parse"]}),n.jsx("pre",{className:"code",children:`const obj = { name: 'Riya', age: 22 };

const jsonText = JSON.stringify(obj);
console.log(jsonText);
// output - {"name":"Riya","age":22}

const backToObj = JSON.parse(jsonText);
console.log(backToObj);
// output - { name: 'Riya', age: 22 }`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Handling API responses"}),n.jsx("p",{children:"fetch() resolves even for many HTTP errors like 404 or 500. So you should check response.ok or response.status before reading data. Also remember that response.json() can throw if the body is not valid JSON."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Checking status properly"]}),n.jsx("pre",{className:"code",children:`async function getProducts() {
  const res = await fetch('https://api.example.com/products');

  if (!res.ok) {
    console.log('Request failed');
    // output - Request failed
    return;
  }

  const data = await res.json();
  console.log(data);
  // output - [ { id: 1, title: 'Phone' } ]
}`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Error handling"}),n.jsx("p",{children:"Use try/catch to handle network failures, JSON parsing failures, and your own thrown errors. For a clean flow, throw a custom error when response.ok is false."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(ep,{})}),"try/catch with custom error"]}),n.jsx("pre",{className:"code",children:`async function loadProfile() {
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
}`})]}),n.jsxs("div",{className:"tip",children:[n.jsx("div",{className:"tipTitle",children:"Tip"}),n.jsx("div",{className:"tipText",children:"Network error - fetch rejects and goes to catch. HTTP error - fetch does not reject, so check res.ok."})]})]})]})]})},yx={Wrapper:he.section`
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
    `},jx=()=>{const[s,c]=xe.useState(!1),a=()=>c(u=>!u);return n.jsxs(yx.Wrapper,{className:s?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:a,"aria-expanded":s,children:[n.jsx("span",{className:"chev",children:s?n.jsx(Te,{}):n.jsx(Ie,{})}),n.jsx("span",{className:"icon",children:n.jsx(Lr,{})}),n.jsx("span",{className:"title",children:"Advanced Concepts - Must Know"}),n.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Closures"}),n.jsx("p",{className:"p",children:"A closure happens when a function remembers variables from its outer scope, even after the outer function has finished executing. This is why inner functions can access outer variables later."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Closure example"]}),n.jsx("pre",{className:"code",children:`function makeCounter() {
  let count = 0;

  return function () {
    count += 1;
    return count;
  };
}

const counter = makeCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3`})]}),n.jsx("p",{className:"p",children:"Practical use cases - data privacy, function factories, memoization, and keeping state without global variables."})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"this keyword"}),n.jsx("p",{className:"p",children:"this is a special keyword that usually points to the object that is calling the function. The value of this depends on how a function is called, not where it is written."}),n.jsxs("div",{className:"subSection",children:[n.jsx("h4",{className:"h4",children:"Global context"}),n.jsx("p",{className:"p",children:"In a browser, this in global scope typically refers to window. In modules, top-level this is undefined."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Global this"]}),n.jsx("pre",{className:"code",children:`// Browser script (not module)
console.log(this === window); // true`})]})]}),n.jsxs("div",{className:"subSection",children:[n.jsx("h4",{className:"h4",children:"Function context"}),n.jsx("p",{className:"p",children:"When a function is called normally, this depends on strict mode. In strict mode, this is undefined."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Function this"]}),n.jsx("pre",{className:"code",children:`function show() {
  'use strict';
  console.log(this); // undefined
}

show();`})]})]}),n.jsxs("div",{className:"subSection",children:[n.jsx("h4",{className:"h4",children:"Arrow function behavior"}),n.jsx("p",{className:"p",children:"Arrow functions do not have their own this. They inherit this from the surrounding scope. This makes them useful for callbacks."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Arrow this"]}),n.jsx("pre",{className:"code",children:`const user = {
  name: 'Ash',
  sayLater: function () {
    setTimeout(() => {
      console.log(this.name); // 'Ash'
    }, 10);
  },
};

user.sayLater();`})]})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"call - apply - bind"}),n.jsx("p",{className:"p",children:"call and apply invoke a function immediately with a chosen this value. bind returns a new function with this fixed permanently."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(lp,{})}),"call - apply - bind"]}),n.jsx("pre",{className:"code",children:`function greet(city, role) {
  console.log('Hi ' + this.name + ' from ' + city + ' - ' + role);
}

const person = { name: 'Ash' };

greet.call(person, 'Bangalore', 'Developer');
// Hi Ash from Bangalore - Developer

greet.apply(person, ['Bangalore', 'Developer']);
// Hi Ash from Bangalore - Developer

const boundGreet = greet.bind(person);
boundGreet('Bangalore', 'Developer');
// Hi Ash from Bangalore - Developer`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Prototypes"}),n.jsx("p",{className:"p",children:"JavaScript objects can inherit properties from other objects using prototypes. When you access a property, JavaScript first checks the object, then checks its prototype chain."}),n.jsxs("div",{className:"subSection",children:[n.jsx("h4",{className:"h4",children:"Prototype chain"}),n.jsx("p",{className:"p",children:"If a property is not found on the object, JavaScript searches on its prototype, then that prototype's prototype, and so on, until it reaches null."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(Tm,{})}),"Prototype chain lookup"]}),n.jsx("pre",{className:"code",children:`const base = { canRun: true };
const user = Object.create(base);

user.name = 'Ash';

console.log(user.canRun); // true
// not found on user, found on base`})]})]}),n.jsxs("div",{className:"subSection",children:[n.jsx("h4",{className:"h4",children:"__proto__"}),n.jsx("p",{className:"p",children:"__proto__ points to an object's prototype. It is mostly used for learning and debugging. Prefer Object.getPrototypeOf in real code."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"proto check"]}),n.jsx("pre",{className:"code",children:`const base = { canRun: true };
const user = Object.create(base);

console.log(user.__proto__ === base); // true
console.log(Object.getPrototypeOf(user) === base); // true`})]})]}),n.jsxs("div",{className:"subSection",children:[n.jsx("h4",{className:"h4",children:"constructor function"}),n.jsx("p",{className:"p",children:"Before classes, constructor functions were used to create objects. Shared methods are placed on the constructor's prototype so all instances can use them without duplication."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Constructor + prototype"]}),n.jsx("pre",{className:"code",children:`function Person(name) {
  this.name = name;
}

Person.prototype.sayHi = function () {
  console.log('Hi ' + this.name);
};

const p1 = new Person('Ash');
const p2 = new Person('Neha');

p1.sayHi(); // Hi Ash
p2.sayHi(); // Hi Neha`})]}),n.jsx("p",{className:"p",children:"Key idea - methods on Person.prototype are shared, but properties created inside Person are per instance."})]})]})]})]})},Nx={Wrapper:he.section`
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
    `},wx=()=>{const[s,c]=xe.useState(!1);return n.jsxs(Nx.Wrapper,{className:s?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:()=>c(a=>!a),"aria-expanded":s,children:[n.jsx("span",{className:"chev",children:s?n.jsx(Te,{}):n.jsx(Ie,{})}),n.jsx("span",{className:"icon",children:n.jsx(rp,{})}),n.jsx("span",{className:"title",children:"Classes and OOP"}),n.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Class syntax"}),n.jsx("p",{children:"A class is a blueprint for creating objects. It groups properties and methods together. Classes were introduced in ES6 to make object oriented programming clearer."}),n.jsx("pre",{className:"code",children:`class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return "Hello " + this.name;
  }
}

const user = new Person("Ashish");
console.log(user.greet());
// Hello Ashish`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Constructor"}),n.jsx("p",{children:"The constructor is a special method that runs automatically when a new object is created using new. It initializes properties."}),n.jsx("pre",{className:"code",children:`class Car {
  constructor(brand) {
    this.brand = brand;
  }
}

const c = new Car("Tesla");
console.log(c.brand);
// Tesla`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Methods"}),n.jsx("p",{children:"Methods are functions defined inside a class. They describe behavior of the object."}),n.jsx("pre",{className:"code",children:`class Counter {
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
// 1`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Inheritance"}),n.jsx("p",{children:"Inheritance allows one class to reuse properties and methods of another class using extends."}),n.jsx("pre",{className:"code",children:`class Animal {
  speak() {
    return "Animal sound";
  }
}

class Dog extends Animal {
}

const d = new Dog();
console.log(d.speak());
// Animal sound`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"super"}),n.jsx("p",{children:"The super keyword is used to call the parent class constructor or methods."}),n.jsx("pre",{className:"code",children:`class Animal {
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
// Tommy`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Encapsulation concept"}),n.jsx("p",{children:"Encapsulation means hiding internal details and exposing only what is necessary. In modern JavaScript, private fields are defined using #."}),n.jsx("pre",{className:"code",children:`class BankAccount {
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
// SyntaxError - private field not accessible`})]})]})]})},bx={Wrapper:he.section`
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
    `},kx=()=>{const[s,c]=xe.useState(!1),a=()=>c(u=>!u);return n.jsxs(bx.Wrapper,{className:s?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:a,"aria-expanded":s,children:[n.jsx("span",{className:"chev",children:s?n.jsx(Te,{}):n.jsx(Ie,{})}),n.jsx("span",{className:"icon",children:n.jsx(Es,{})}),n.jsx("span",{className:"title",children:"Memory and Performance"}),n.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Stack vs heap"}),n.jsx("p",{className:"p",children:"JavaScript uses two main memory areas. The stack stores short-lived data like function calls and primitive values. The heap stores objects, arrays, and functions because they can be larger and live longer."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Stack (primitive) vs Heap (object)"]}),n.jsx("pre",{className:"code",children:`let a = 10;           // stack
let user = { name: "Ash" }; // heap (object lives in heap)

// user variable holds a reference (address) on stack`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Garbage collection"}),n.jsx("p",{className:"p",children:"Garbage collection is how JavaScript frees unused heap memory automatically. When an object is no longer reachable from your code, the engine can clean it up. You do not manually free memory in JavaScript."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Unreachable objects get cleaned"]}),n.jsx("pre",{className:"code",children:`let obj = { x: 1 };   // heap
obj = null;            // object becomes unreachable
// later: GC can free that memory`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Reference vs value"}),n.jsx("p",{className:"p",children:"Primitives are copied by value, so each variable gets its own separate value. Objects and arrays are copied by reference, meaning variables can point to the same object in heap."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Value copy (primitive)"]}),n.jsx("pre",{className:"code",children:`let x = 5;
let y = x;
y = 99;

console.log(x); // 5
console.log(y); // 99`})]}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Reference copy (object)"]}),n.jsx("pre",{className:"code",children:`const a = { score: 10 };
const b = a;

b.score = 99;

console.log(a.score); // 99
console.log(b.score); // 99`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Shallow copy vs deep copy"}),n.jsx("p",{className:"p",children:"A shallow copy copies the top-level structure but still shares nested references. A deep copy duplicates nested objects too, so changes do not leak back."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Shallow copy (spread)"]}),n.jsx("pre",{className:"code",children:`const original = { name: "Ash", meta: { level: 1 } };
const copy = { ...original };

copy.name = "Bro";
copy.meta.level = 99;

console.log(original.name);      // "Ash"
console.log(original.meta.level); // 99 (shared nested object)`})]}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Deep copy (structuredClone)"]}),n.jsx("pre",{className:"code",children:`const original = { name: "Ash", meta: { level: 1 } };
const deep = structuredClone(original);

deep.meta.level = 99;

console.log(original.meta.level); // 1
console.log(deep.meta.level);     // 99`})]}),n.jsxs("div",{className:"callout",children:[n.jsx("div",{className:"calloutTitle",children:"Quick tip"}),n.jsxs("div",{className:"calloutText",children:["Use ",n.jsx("span",{className:"mono",children:"structuredClone"})," ","when available. For older environments, you may use JSON clone for simple data, but it breaks for dates, functions, undefined, and special types."]})]})]}),n.jsxs("div",{className:"footerNote",children:[n.jsx("div",{className:"footerTitle",children:"Practical mindset"}),n.jsxs("ul",{className:"checks",children:[n.jsxs("li",{children:[n.jsx("span",{className:"checkDot"})," Prefer immutability in state updates"]}),n.jsxs("li",{children:[n.jsx("span",{className:"checkDot"})," Watch out for shared nested objects"]}),n.jsxs("li",{children:[n.jsx("span",{className:"checkDot"})," Avoid keeping large unused objects referenced"]})]})]})]})]})},Sx={Wrapper:he.section`
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
    `},Cx=()=>{const[s,c]=xe.useState(!1),a=()=>c(u=>!u);return n.jsxs(Sx.Wrapper,{className:s?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:a,"aria-expanded":s,children:[n.jsx("span",{className:"chev",children:s?n.jsx(Te,{}):n.jsx(Ie,{})}),n.jsx("span",{className:"icon",children:n.jsx(zm,{})}),n.jsx("span",{className:"title",children:"Modules"}),n.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"ES modules"}),n.jsx("p",{children:"ES modules allow JavaScript code to be split into reusable files. Each file is treated as its own module with its own scope. Nothing leaks to the global scope unless exported."}),n.jsx("pre",{className:"code",children:`// math.js
export const add = (a, b) => a + b;

// app.js
import { add } from "./math.js";

console.log(add(2, 3));
// 5`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Default export"}),n.jsx("p",{children:"A module can have one default export. It is imported without curly braces and can be renamed during import."}),n.jsx("pre",{className:"code",children:`// greet.js
export default function greet(name) {
    return "Hello " + name;
}

// app.js
import greet from "./greet.js";

console.log(greet("Ashish"));
// Hello Ashish`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Named export"}),n.jsx("p",{children:"Named exports allow multiple values to be exported from a file. They must be imported using curly braces."}),n.jsx("pre",{className:"code",children:`// utils.js
export const PI = 3.14;
export const square = (n) => n * n;

// app.js
import { PI, square } from "./utils.js";

console.log(PI);
// 3.14

console.log(square(4));
// 16`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Dynamic import"}),n.jsx("p",{children:"Dynamic import allows modules to be loaded on demand. It returns a Promise. This is useful for lazy loading and performance optimization."}),n.jsx("pre",{className:"code",children:`// lazy load a module
import("./math.js")
    .then((module) => {
        console.log(module.add(5, 5));
        // 10
    })
    .catch((err) => {
        console.error(err);
    });`}),n.jsx("p",{children:"Dynamic import helps reduce initial bundle size by loading code only when needed."})]})]})]})},Ex={Wrapper:he.section`
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
    `},Tx=()=>{const[s,c]=xe.useState(!1),a=()=>c(u=>!u);return n.jsxs(Ex.Wrapper,{className:s?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:a,"aria-expanded":s,children:[n.jsx("span",{className:"chev",children:s?n.jsx(Te,{}):n.jsx(Ie,{})}),n.jsx("span",{className:"icon",children:n.jsx(Qi,{})}),n.jsx("span",{className:"title",children:"Browser APIs"}),n.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"What are Browser APIs"}),n.jsx("p",{children:"Browser APIs are built-in features provided by the browser. JavaScript itself does not include storage, URL handling, or DOM access. The browser provides these capabilities."}),n.jsx("p",{children:"Examples include localStorage, sessionStorage, fetch, and URLSearchParams."})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"localStorage"}),n.jsx("p",{children:"localStorage stores data in the browser with no expiration. The data remains even after page refresh or browser restart."}),n.jsx("pre",{className:"code",children:`localStorage.setItem("name", "Ashish");

const value = localStorage.getItem("name");
console.log(value); 
// Output: Ashish

localStorage.removeItem("name");`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"sessionStorage"}),n.jsx("p",{children:"sessionStorage works like localStorage but data exists only for the current browser tab session. Closing the tab clears the data."}),n.jsx("pre",{className:"code",children:`sessionStorage.setItem("token", "12345");

const token = sessionStorage.getItem("token");
console.log(token);
// Output: 12345`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"JSON methods"}),n.jsx("p",{children:"localStorage stores only strings. To store objects, we convert them using JSON.stringify and JSON.parse."}),n.jsx("pre",{className:"code",children:`const user = { name: "Ashish", age: 25 };

const stringified = JSON.stringify(user);
console.log(stringified);
// Output: {"name":"Ashish","age":25}

const parsed = JSON.parse(stringified);
console.log(parsed.name);
// Output: Ashish`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"URLSearchParams"}),n.jsx("p",{children:"URLSearchParams helps read and modify query parameters in a URL."}),n.jsx("pre",{className:"code",children:`const params = new URLSearchParams("?id=10&name=ashish");

console.log(params.get("id"));
// Output: 10

console.log(params.get("name"));
// Output: ashish`})]})]})]})},Ix={Wrapper:he.section`
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
    `},Px=()=>{const[s,c]=xe.useState(!1),a=()=>c(u=>!u);return n.jsxs(Ix.Wrapper,{className:s?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:a,"aria-expanded":s,children:[n.jsx("span",{className:"chev",children:s?n.jsx(Te,{}):n.jsx(Ie,{})}),n.jsx("span",{className:"icon",children:n.jsx(Zu,{})}),n.jsx("span",{className:"title",children:"Functional Programming Concepts"}),n.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[n.jsx("div",{className:"intro",children:n.jsx("p",{className:"p",children:"Functional programming in JavaScript means writing code that is predictable and easier to test. The big ideas are keeping data unchanged, using functions that return values, and avoiding hidden changes."})}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Immutability"}),n.jsx("p",{className:"p",children:"Immutability means you do not change the original data. Instead, you create a new copy with updates. This avoids unexpected bugs in large apps."}),n.jsx("pre",{className:"code",children:`// Bad - mutates original
const nums = [1, 2, 3];
nums.push(4);
console.log(nums); // [1, 2, 3, 4]

// Good - create a new array
const nums2 = [1, 2, 3];
const next = [...nums2, 4];
console.log(nums2); // [1, 2, 3]
console.log(next);  // [1, 2, 3, 4]`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"map vs forEach"}),n.jsx("p",{className:"p",children:"map returns a new array with transformed values. forEach does not return a new array, it is used for doing an action like logging or updating something outside."}),n.jsx("pre",{className:"code",children:`const nums = [1, 2, 3];

// map - returns a new array
const doubled = nums.map((n) => n * 2);
console.log(doubled); // [2, 4, 6]
console.log(nums);    // [1, 2, 3]

// forEach - returns undefined
const result = nums.forEach((n) => n * 2);
console.log(result);  // undefined`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Pure functions"}),n.jsx("p",{className:"p",children:"A pure function always gives the same output for the same input and does not change anything outside it. Pure functions are easier to debug and test."}),n.jsx("pre",{className:"code",children:`// Pure - depends only on input
const add = (a, b) => a + b;

console.log(add(2, 3)); // 5
console.log(add(2, 3)); // 5

// Not pure - uses outside value
let tax = 10;
const addTax = (price) => price + tax;

console.log(addTax(100)); // 110
tax = 20;
console.log(addTax(100)); // 120`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Side effects"}),n.jsx("p",{className:"p",children:"A side effect is when a function changes something outside itself, like updating a global variable, making an API call, writing to localStorage, or changing the DOM. Side effects are not always bad, but should be controlled and kept in clear places."}),n.jsx("pre",{className:"code",children:`// Side effect - changes outside state
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
console.log(incrementPure(2)); // 3`})]}),n.jsxs("div",{className:"summary",children:[n.jsxs("div",{className:"summaryRow",children:[n.jsxs("span",{className:"chip",children:[n.jsx(Gi,{})," immutability"]}),n.jsxs("span",{className:"chip",children:[n.jsx(sp,{})," map returns new array"]}),n.jsxs("span",{className:"chip",children:[n.jsx(Lr,{})," pure functions"]})]}),n.jsx("p",{className:"p muted",children:"Quick rule - prefer returning new values instead of changing existing values. Keep side effects separate."})]})]})]})},zx={Wrapper:he.section`
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
    `},_x=()=>{const[s,c]=xe.useState(!1),a=()=>c(u=>!u);return n.jsxs(zx.Wrapper,{className:s?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:a,"aria-expanded":s,children:[n.jsx("span",{className:"chev",children:s?n.jsx(Te,{}):n.jsx(Ie,{})}),n.jsx("span",{className:"icon",children:n.jsx(Lr,{})}),n.jsx("span",{className:"title",children:"Modern Features"}),n.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Optional chaining"}),n.jsx("p",{children:"Optional chaining lets you safely access deeply nested properties without throwing an error if something is undefined."}),n.jsx("pre",{className:"code",children:`const user = {};
console.log(user.profile?.name);
// undefined

// Without optional chaining this would throw an error`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Nullish coalescing"}),n.jsx("p",{children:"The nullish coalescing operator ?? returns the right side only if the left side is null or undefined."}),n.jsx("pre",{className:"code",children:`const count = 0;
const result = count ?? 10;
console.log(result);
// 0

// Unlike ||, it does not treat 0 as false`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Object shorthand"}),n.jsx("p",{children:"If variable name and object property name are same, you can skip writing them twice."}),n.jsx("pre",{className:"code",children:`const name = "Ash";
const age = 25;

const user = { name, age };
console.log(user);
// { name: "Ash", age: 25 }`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Logical assignment operators"}),n.jsx("p",{children:"These combine logical operators with assignment. They make conditions shorter and cleaner."}),n.jsx("pre",{className:"code",children:`let value = null;

value ??= 10;
console.log(value);
// 10

let flag = true;
flag &&= false;
console.log(flag);
// false`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"BigInt"}),n.jsx("p",{children:"BigInt is used to represent very large integers beyond the safe limit of normal numbers."}),n.jsx("pre",{className:"code",children:`const big = 123456789012345678901234567890n;
console.log(big + 1n);
// 123456789012345678901234567891n`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Symbol"}),n.jsx("p",{children:"Symbol creates a unique identifier. Even if two symbols have the same description, they are different."}),n.jsx("pre",{className:"code",children:`const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 === id2);
// false`})]})]})]})},Lx={Wrapper:he.section`
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
    `},Bx=()=>{const[s,c]=xe.useState(!1),a=()=>c(u=>!u);return n.jsxs(Lx.Wrapper,{className:s?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:a,"aria-expanded":s,children:[n.jsx("span",{className:"chev",children:s?n.jsx(Te,{}):n.jsx(Ie,{})}),n.jsx("span",{className:"icon",children:n.jsx(Sm,{})}),n.jsx("span",{className:"title",children:"Best Practices"}),n.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Clean code"}),n.jsx("p",{className:"p",children:"Write code that another developer can understand fast. Use clear names, small functions, and avoid clever hacks that confuse future you."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Naming and small functions"]}),n.jsx("pre",{className:"code",children:`function calcTotal(price, qty) {
  return price * qty;
}

const total = calcTotal(499, 2);
console.log(total); // 998`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Avoid global pollution"}),n.jsx("p",{className:"p",children:"Avoid creating variables in the global scope. Globals are easy to overwrite and cause hard to debug issues. Keep variables inside functions or modules."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(Gi,{})}),"Keep scope local"]}),n.jsx("pre",{className:"code",children:`// bad - global variable
// userName = "ash"; // creates global in sloppy code, avoid

// good - local variable inside function
function setUserName() {
  const userName = "ash";
  return userName;
}

console.log(setUserName()); // "ash"`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Avoid callback hell"}),n.jsx("p",{className:"p",children:"Deep nested callbacks make code unreadable and error handling painful. Prefer promises and async - await."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(ta,{})}),"Async - await example"]}),n.jsx("pre",{className:"code",children:`async function loadUser() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const data = await res.json();
    console.log(data.name); // "Leanne Graham"
  } catch (err) {
    console.log("error:", err);
  }
}

loadUser();`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Avoid unnecessary re renders"}),n.jsx("p",{className:"p",children:"In React, avoid re rendering components when nothing changed. Keep props stable, avoid creating new objects and functions on every render unless needed."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Stable values with useMemo"]}),n.jsx("pre",{className:"code",children:`import React, { useMemo } from "react";

const PriceBox = ({ price, qty }) => {
  const total = useMemo(() => price * qty, [price, qty]);

  return <div>Total: {total}</div>;
};

// result - total recalculates only when price or qty changes`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Defensive coding"}),n.jsx("p",{className:"p",children:"Assume data can be missing or wrong. Validate inputs, handle null and undefined, and avoid breaking the UI on bad values."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(Gi,{})}),"Safe access and fallback"]}),n.jsx("pre",{className:"code",children:`function getCity(user) {
  const city = user?.address?.city ?? "Unknown";
  return city;
}

console.log(getCity({ address: { city: "Bangalore" } })); // "Bangalore"
console.log(getCity(null)); // "Unknown"`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Debugging with console"}),n.jsx("p",{className:"p",children:"Use console tools properly. console.log is fine, but console.table, console.time, and console.group make debugging faster."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(Yi,{})}),"Useful console tools"]}),n.jsx("pre",{className:"code",children:`const users = [
  { id: 1, name: "ash" },
  { id: 2, name: "neha" },
];

console.table(users); 
// result - table view in console

console.time("load");
// do something
console.timeEnd("load");
// result - prints time taken`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"DevTools basics"}),n.jsx("p",{className:"p",children:"Browser DevTools help you inspect DOM, CSS, network calls, storage, and performance. Learn the basics and debugging becomes 10x easier."}),n.jsxs("ul",{className:"list",children:[n.jsxs("li",{children:[n.jsx("span",{className:"dot"})," Elements - inspect HTML and CSS"]}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"})," Console - logs and errors"]}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"})," Network - API requests and timing"]}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"})," Application - storage and cookies"]}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"})," Performance - slow renders and bottlenecks"]})]}),n.jsxs("div",{className:"tip",children:[n.jsx("span",{className:"tipIcon",children:n.jsx(Dm,{})}),n.jsx("span",{className:"tipText",children:"Shortcut - Press F12 or Ctrl - Shift - I to open DevTools."})]})]})]})]})},Ox={Wrapper:he.section`
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
    `},Ax=()=>{const[s,c]=xe.useState(!1),a=()=>c(u=>!u);return n.jsxs(Ox.Wrapper,{className:s?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:a,"aria-expanded":s,children:[n.jsx("span",{className:"chev",children:s?n.jsx(Te,{}):n.jsx(Ie,{})}),n.jsx("span",{className:"icon",children:n.jsx(ep,{})}),n.jsx("span",{className:"title",children:"Common Interview Traps"}),n.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[n.jsx("div",{className:"intro",children:n.jsx("p",{className:"p",children:"These are the most common JavaScript traps asked in interviews. The goal is not to memorize, but to understand why the output happens."})}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"== vs ==="}),n.jsx("p",{className:"p",children:"== compares after type conversion - === compares without conversion. Prefer === for predictable results."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example"]}),n.jsx("pre",{className:"code",children:`console.log(5 == "5");   // true - "5" becomes 5
console.log(5 === "5");  // false - number vs string
console.log(null == undefined);  // true - special case
console.log(null === undefined); // false`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"null vs undefined"}),n.jsx("p",{className:"p",children:'undefined means "not assigned" - null is "intentionally empty". Both mean "no value", but they are different types.'}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example"]}),n.jsx("pre",{className:"code",children:`let a;
let b = null;

console.log(a);          // undefined
console.log(b);          // null
console.log(typeof a);   // "undefined"
console.log(typeof b);   // "object" - legacy JavaScript quirk`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"var scope"}),n.jsx("p",{className:"p",children:"var is function scoped - let and const are block scoped. This can create bugs inside loops and if blocks."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example"]}),n.jsx("pre",{className:"code",children:`if (true) {
  var x = 10;
  let y = 20;
}

console.log(x); // 10 - var escapes the block
// console.log(y); // ReferenceError - let stays inside block`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Hoisting behavior"}),n.jsx("p",{className:"p",children:"Hoisting means declarations are moved to the top of their scope during compilation. var becomes undefined before assignment. let and const exist in a temporal dead zone until initialized."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example"]}),n.jsx("pre",{className:"code",children:`console.log(a); // undefined
var a = 5;

// console.log(b); // ReferenceError - temporal dead zone
let b = 10;`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Event loop basics"}),n.jsx("p",{className:"p",children:"JavaScript runs one thing at a time (single thread). The event loop decides when queued tasks run. Promises (microtasks) run before timers (macrotasks)."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example"]}),n.jsx("pre",{className:"code",children:`console.log("A");

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
// B`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Closure question patterns"}),n.jsx("p",{className:"p",children:"A closure is when a function remembers variables from its outer scope even after the outer function finishes. Common interview pattern is returning a function."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example"]}),n.jsx("pre",{className:"code",children:`function makeCounter() {
  let count = 0;

  return function () {
    count += 1;
    return count;
  };
}

const counter = makeCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Async timing questions"}),n.jsx("p",{className:"p",children:"Async questions usually test order of execution. Know sync code runs first, then promise microtasks, then timer callbacks."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example"]}),n.jsx("pre",{className:"code",children:`async function run() {
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
// 2`})]})]})]})]})},Rx={Wrapper:he.section`
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
    `},Mx=()=>{const[s,c]=xe.useState(!1),a=()=>c(u=>!u);return n.jsxs(Rx.Wrapper,{className:s?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:a,"aria-expanded":s,children:[n.jsx("span",{className:"chev",children:s?n.jsx(Te,{}):n.jsx(Ie,{})}),n.jsx("span",{className:"icon",children:n.jsx(_m,{})}),n.jsx("span",{className:"title",children:"Event Loop and Concurrency Model"}),n.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Call Stack"}),n.jsx("p",{children:"The call stack is where JavaScript executes functions. It follows LIFO - last in first out."}),n.jsx("pre",{className:"code",children:`function one() {
  console.log("one");
}

function two() {
  one();
  console.log("two");
}

two();

// Output:
// one
// two`}),n.jsx("p",{children:"two goes into stack first, then one runs, then stack clears."})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Web APIs"}),n.jsx("p",{children:"Web APIs are provided by the browser, not JavaScript itself. Examples include setTimeout, fetch, DOM events."}),n.jsx("pre",{className:"code",children:`console.log("start");

setTimeout(() => {
  console.log("timer");
}, 1000);

console.log("end");

// Output:
// start
// end
// timer`}),n.jsx("p",{children:"setTimeout runs in Web APIs and waits outside the call stack."})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Task Queue"}),n.jsx("p",{children:"Also called macrotask queue. setTimeout and setInterval callbacks go here after Web APIs finish."})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Microtask Queue"}),n.jsx("p",{children:"Promises and queueMicrotask use the microtask queue. It has higher priority than the task queue."}),n.jsx("pre",{className:"code",children:`console.log("start");

Promise.resolve().then(() => {
  console.log("promise");
});

console.log("end");

// Output:
// start
// end
// promise`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Promise Queue"}),n.jsx("p",{children:"Promise callbacks are stored in the microtask queue. They always run before setTimeout callbacks."}),n.jsx("pre",{className:"code",children:`setTimeout(() => {
  console.log("timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("promise");
});

// Output:
// promise
// timeout`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Event Loop Visual Model"}),n.jsx("p",{children:"The event loop constantly checks: 1 - Is call stack empty 2 - If yes, run microtasks 3 - Then run next task from task queue"}),n.jsx("p",{children:"Order of execution: Call Stack - Microtasks - Macrotasks"})]})]})]})},Dx=()=>n.jsxs(Ai.Wrapper,{children:[n.jsx(Ai.Header,{children:n.jsx(Hm,{})}),n.jsxs(Ai.Main,{children:[n.jsxs("div",{className:"contentWrapper",children:[n.jsx($m,{}),n.jsx(Jm,{}),n.jsx(Gm,{}),n.jsx(Km,{}),n.jsx(Xm,{}),n.jsx(ex,{}),n.jsx(nx,{}),n.jsx(ox,{}),n.jsx(lx,{}),n.jsx(ax,{}),n.jsx(dx,{}),n.jsx(px,{}),n.jsx(fx,{}),n.jsx(xx,{}),n.jsx(vx,{}),n.jsx(jx,{}),n.jsx(wx,{}),n.jsx(kx,{}),n.jsx(Cx,{}),n.jsx(Tx,{}),n.jsx(Px,{}),n.jsx(_x,{}),n.jsx(Bx,{}),n.jsx(Ax,{}),n.jsx(Mx,{})]}),n.jsx("div",{className:"footerWrapper",children:n.jsx(Um,{})})]})]});hf.createRoot(document.getElementById("root")).render(n.jsx(n.Fragment,{children:n.jsx(Dx,{})}));
