(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(o){if(o.ep)return;o.ep=!0;const c=i(o);fetch(o.href,c)}})();var commonjsGlobal=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function getDefaultExportFromCjs(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var jsxRuntime={exports:{}},reactJsxRuntime_production_min={},react={exports:{}},react_production_min={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l$1=Symbol.for("react.element"),n$1=Symbol.for("react.portal"),p$2=Symbol.for("react.fragment"),q$1=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v$2=Symbol.for("react.forward_ref"),w$1=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z$1=Symbol.iterator;function A$1(e){return e===null||typeof e!="object"?null:(e=z$1&&e[z$1]||e["@@iterator"],typeof e=="function"?e:null)}var B$1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C$1=Object.assign,D$1={};function E$1(e,a,i){this.props=e,this.context=a,this.refs=D$1,this.updater=i||B$1}E$1.prototype.isReactComponent={};E$1.prototype.setState=function(e,a){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,a,"setState")};E$1.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function F(){}F.prototype=E$1.prototype;function G$1(e,a,i){this.props=e,this.context=a,this.refs=D$1,this.updater=i||B$1}var H$1=G$1.prototype=new F;H$1.constructor=G$1;C$1(H$1,E$1.prototype);H$1.isPureReactComponent=!0;var I$1=Array.isArray,J=Object.prototype.hasOwnProperty,K$1={current:null},L$1={key:!0,ref:!0,__self:!0,__source:!0};function M$1(e,a,i){var s,o={},c=null,d=null;if(a!=null)for(s in a.ref!==void 0&&(d=a.ref),a.key!==void 0&&(c=""+a.key),a)J.call(a,s)&&!L$1.hasOwnProperty(s)&&(o[s]=a[s]);var b=arguments.length-2;if(b===1)o.children=i;else if(1<b){for(var g=Array(b),_=0;_<b;_++)g[_]=arguments[_+2];o.children=g}if(e&&e.defaultProps)for(s in b=e.defaultProps,b)o[s]===void 0&&(o[s]=b[s]);return{$$typeof:l$1,type:e,key:c,ref:d,props:o,_owner:K$1.current}}function N$1(e,a){return{$$typeof:l$1,type:e.type,key:a,ref:e.ref,props:e.props,_owner:e._owner}}function O$1(e){return typeof e=="object"&&e!==null&&e.$$typeof===l$1}function escape(e){var a={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(i){return a[i]})}var P$1=/\/+/g;function Q$1(e,a){return typeof e=="object"&&e!==null&&e.key!=null?escape(""+e.key):a.toString(36)}function R$1(e,a,i,s,o){var c=typeof e;(c==="undefined"||c==="boolean")&&(e=null);var d=!1;if(e===null)d=!0;else switch(c){case"string":case"number":d=!0;break;case"object":switch(e.$$typeof){case l$1:case n$1:d=!0}}if(d)return d=e,o=o(d),e=s===""?"."+Q$1(d,0):s,I$1(o)?(i="",e!=null&&(i=e.replace(P$1,"$&/")+"/"),R$1(o,a,i,"",function(_){return _})):o!=null&&(O$1(o)&&(o=N$1(o,i+(!o.key||d&&d.key===o.key?"":(""+o.key).replace(P$1,"$&/")+"/")+e)),a.push(o)),1;if(d=0,s=s===""?".":s+":",I$1(e))for(var b=0;b<e.length;b++){c=e[b];var g=s+Q$1(c,b);d+=R$1(c,a,i,g,o)}else if(g=A$1(e),typeof g=="function")for(e=g.call(e),b=0;!(c=e.next()).done;)c=c.value,g=s+Q$1(c,b++),d+=R$1(c,a,i,g,o);else if(c==="object")throw a=String(e),Error("Objects are not valid as a React child (found: "+(a==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":a)+"). If you meant to render a collection of children, use an array instead.");return d}function S$1(e,a,i){if(e==null)return e;var s=[],o=0;return R$1(e,s,"","",function(c){return a.call(i,c,o++)}),s}function T$1(e){if(e._status===-1){var a=e._result;a=a(),a.then(function(i){(e._status===0||e._status===-1)&&(e._status=1,e._result=i)},function(i){(e._status===0||e._status===-1)&&(e._status=2,e._result=i)}),e._status===-1&&(e._status=0,e._result=a)}if(e._status===1)return e._result.default;throw e._result}var U$1={current:null},V$1={transition:null},W$1={ReactCurrentDispatcher:U$1,ReactCurrentBatchConfig:V$1,ReactCurrentOwner:K$1};function X$1(){throw Error("act(...) is not supported in production builds of React.")}react_production_min.Children={map:S$1,forEach:function(e,a,i){S$1(e,function(){a.apply(this,arguments)},i)},count:function(e){var a=0;return S$1(e,function(){a++}),a},toArray:function(e){return S$1(e,function(a){return a})||[]},only:function(e){if(!O$1(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};react_production_min.Component=E$1;react_production_min.Fragment=p$2;react_production_min.Profiler=r;react_production_min.PureComponent=G$1;react_production_min.StrictMode=q$1;react_production_min.Suspense=w$1;react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W$1;react_production_min.act=X$1;react_production_min.cloneElement=function(e,a,i){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var s=C$1({},e.props),o=e.key,c=e.ref,d=e._owner;if(a!=null){if(a.ref!==void 0&&(c=a.ref,d=K$1.current),a.key!==void 0&&(o=""+a.key),e.type&&e.type.defaultProps)var b=e.type.defaultProps;for(g in a)J.call(a,g)&&!L$1.hasOwnProperty(g)&&(s[g]=a[g]===void 0&&b!==void 0?b[g]:a[g])}var g=arguments.length-2;if(g===1)s.children=i;else if(1<g){b=Array(g);for(var _=0;_<g;_++)b[_]=arguments[_+2];s.children=b}return{$$typeof:l$1,type:e.type,key:o,ref:c,props:s,_owner:d}};react_production_min.createContext=function(e){return e={$$typeof:u,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:t,_context:e},e.Consumer=e};react_production_min.createElement=M$1;react_production_min.createFactory=function(e){var a=M$1.bind(null,e);return a.type=e,a};react_production_min.createRef=function(){return{current:null}};react_production_min.forwardRef=function(e){return{$$typeof:v$2,render:e}};react_production_min.isValidElement=O$1;react_production_min.lazy=function(e){return{$$typeof:y,_payload:{_status:-1,_result:e},_init:T$1}};react_production_min.memo=function(e,a){return{$$typeof:x,type:e,compare:a===void 0?null:a}};react_production_min.startTransition=function(e){var a=V$1.transition;V$1.transition={};try{e()}finally{V$1.transition=a}};react_production_min.unstable_act=X$1;react_production_min.useCallback=function(e,a){return U$1.current.useCallback(e,a)};react_production_min.useContext=function(e){return U$1.current.useContext(e)};react_production_min.useDebugValue=function(){};react_production_min.useDeferredValue=function(e){return U$1.current.useDeferredValue(e)};react_production_min.useEffect=function(e,a){return U$1.current.useEffect(e,a)};react_production_min.useId=function(){return U$1.current.useId()};react_production_min.useImperativeHandle=function(e,a,i){return U$1.current.useImperativeHandle(e,a,i)};react_production_min.useInsertionEffect=function(e,a){return U$1.current.useInsertionEffect(e,a)};react_production_min.useLayoutEffect=function(e,a){return U$1.current.useLayoutEffect(e,a)};react_production_min.useMemo=function(e,a){return U$1.current.useMemo(e,a)};react_production_min.useReducer=function(e,a,i){return U$1.current.useReducer(e,a,i)};react_production_min.useRef=function(e){return U$1.current.useRef(e)};react_production_min.useState=function(e){return U$1.current.useState(e)};react_production_min.useSyncExternalStore=function(e,a,i){return U$1.current.useSyncExternalStore(e,a,i)};react_production_min.useTransition=function(){return U$1.current.useTransition()};react_production_min.version="18.3.1";react.exports=react_production_min;var reactExports=react.exports;const React=getDefaultExportFromCjs(reactExports);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=reactExports,k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m$1=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p$1={key:!0,ref:!0,__self:!0,__source:!0};function q(e,a,i){var s,o={},c=null,d=null;i!==void 0&&(c=""+i),a.key!==void 0&&(c=""+a.key),a.ref!==void 0&&(d=a.ref);for(s in a)m$1.call(a,s)&&!p$1.hasOwnProperty(s)&&(o[s]=a[s]);if(e&&e.defaultProps)for(s in a=e.defaultProps,a)o[s]===void 0&&(o[s]=a[s]);return{$$typeof:k,type:e,key:c,ref:d,props:o,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;jsxRuntime.exports=reactJsxRuntime_production_min;var jsxRuntimeExports=jsxRuntime.exports,client={},reactDom={exports:{}},reactDom_production_min={},scheduler={exports:{}},scheduler_production_min={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function a(ot,ut){var yt=ot.length;ot.push(ut);e:for(;0<yt;){var dt=yt-1>>>1,kt=ot[dt];if(0<o(kt,ut))ot[dt]=ut,ot[yt]=kt,yt=dt;else break e}}function i(ot){return ot.length===0?null:ot[0]}function s(ot){if(ot.length===0)return null;var ut=ot[0],yt=ot.pop();if(yt!==ut){ot[0]=yt;e:for(var dt=0,kt=ot.length,At=kt>>>1;dt<At;){var Pt=2*(dt+1)-1,Dt=ot[Pt],wt=Pt+1,Ft=ot[wt];if(0>o(Dt,yt))wt<kt&&0>o(Ft,Dt)?(ot[dt]=Ft,ot[wt]=yt,dt=wt):(ot[dt]=Dt,ot[Pt]=yt,dt=Pt);else if(wt<kt&&0>o(Ft,yt))ot[dt]=Ft,ot[wt]=yt,dt=wt;else break e}}return ut}function o(ot,ut){var yt=ot.sortIndex-ut.sortIndex;return yt!==0?yt:ot.id-ut.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;e.unstable_now=function(){return c.now()}}else{var d=Date,b=d.now();e.unstable_now=function(){return d.now()-b}}var g=[],_=[],tt=1,it=null,et=3,st=!1,nt=!1,rt=!1,ht=typeof setTimeout=="function"?setTimeout:null,$=typeof clearTimeout=="function"?clearTimeout:null,_e=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function j(ot){for(var ut=i(_);ut!==null;){if(ut.callback===null)s(_);else if(ut.startTime<=ot)s(_),ut.sortIndex=ut.expirationTime,a(g,ut);else break;ut=i(_)}}function at(ot){if(rt=!1,j(ot),!nt)if(i(g)!==null)nt=!0,ct(lt);else{var ut=i(_);ut!==null&&xt(at,ut.startTime-ot)}}function lt(ot,ut){nt=!1,rt&&(rt=!1,$(mt),mt=-1),st=!0;var yt=et;try{for(j(ut),it=i(g);it!==null&&(!(it.expirationTime>ut)||ot&&!Et());){var dt=it.callback;if(typeof dt=="function"){it.callback=null,et=it.priorityLevel;var kt=dt(it.expirationTime<=ut);ut=e.unstable_now(),typeof kt=="function"?it.callback=kt:it===i(g)&&s(g),j(ut)}else s(g);it=i(g)}if(it!==null)var At=!0;else{var Pt=i(_);Pt!==null&&xt(at,Pt.startTime-ut),At=!1}return At}finally{it=null,et=yt,st=!1}}var pt=!1,ft=null,mt=-1,vt=5,_t=-1;function Et(){return!(e.unstable_now()-_t<vt)}function gt(){if(ft!==null){var ot=e.unstable_now();_t=ot;var ut=!0;try{ut=ft(!0,ot)}finally{ut?St():(pt=!1,ft=null)}}else pt=!1}var St;if(typeof _e=="function")St=function(){_e(gt)};else if(typeof MessageChannel<"u"){var Ct=new MessageChannel,bt=Ct.port2;Ct.port1.onmessage=gt,St=function(){bt.postMessage(null)}}else St=function(){ht(gt,0)};function ct(ot){ft=ot,pt||(pt=!0,St())}function xt(ot,ut){mt=ht(function(){ot(e.unstable_now())},ut)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(ot){ot.callback=null},e.unstable_continueExecution=function(){nt||st||(nt=!0,ct(lt))},e.unstable_forceFrameRate=function(ot){0>ot||125<ot?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):vt=0<ot?Math.floor(1e3/ot):5},e.unstable_getCurrentPriorityLevel=function(){return et},e.unstable_getFirstCallbackNode=function(){return i(g)},e.unstable_next=function(ot){switch(et){case 1:case 2:case 3:var ut=3;break;default:ut=et}var yt=et;et=ut;try{return ot()}finally{et=yt}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(ot,ut){switch(ot){case 1:case 2:case 3:case 4:case 5:break;default:ot=3}var yt=et;et=ot;try{return ut()}finally{et=yt}},e.unstable_scheduleCallback=function(ot,ut,yt){var dt=e.unstable_now();switch(typeof yt=="object"&&yt!==null?(yt=yt.delay,yt=typeof yt=="number"&&0<yt?dt+yt:dt):yt=dt,ot){case 1:var kt=-1;break;case 2:kt=250;break;case 5:kt=1073741823;break;case 4:kt=1e4;break;default:kt=5e3}return kt=yt+kt,ot={id:tt++,callback:ut,priorityLevel:ot,startTime:yt,expirationTime:kt,sortIndex:-1},yt>dt?(ot.sortIndex=yt,a(_,ot),i(g)===null&&ot===i(_)&&(rt?($(mt),mt=-1):rt=!0,xt(at,yt-dt))):(ot.sortIndex=kt,a(g,ot),nt||st||(nt=!0,ct(lt))),ot},e.unstable_shouldYield=Et,e.unstable_wrapCallback=function(ot){var ut=et;return function(){var yt=et;et=ut;try{return ot.apply(this,arguments)}finally{et=yt}}}})(scheduler_production_min);scheduler.exports=scheduler_production_min;var schedulerExports=scheduler.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var aa=reactExports,ca=schedulerExports;function p(e){for(var a="https://reactjs.org/docs/error-decoder.html?invariant="+e,i=1;i<arguments.length;i++)a+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var da=new Set,ea={};function fa(e,a){ha(e,a),ha(e+"Capture",a)}function ha(e,a){for(ea[e]=a,e=0;e<a.length;e++)da.add(a[e])}var ia=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ja=Object.prototype.hasOwnProperty,ka=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,la={},ma={};function oa(e){return ja.call(ma,e)?!0:ja.call(la,e)?!1:ka.test(e)?ma[e]=!0:(la[e]=!0,!1)}function pa(e,a,i,s){if(i!==null&&i.type===0)return!1;switch(typeof a){case"function":case"symbol":return!0;case"boolean":return s?!1:i!==null?!i.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function qa(e,a,i,s){if(a===null||typeof a>"u"||pa(e,a,i,s))return!0;if(s)return!1;if(i!==null)switch(i.type){case 3:return!a;case 4:return a===!1;case 5:return isNaN(a);case 6:return isNaN(a)||1>a}return!1}function v$1(e,a,i,s,o,c,d){this.acceptsBooleans=a===2||a===3||a===4,this.attributeName=s,this.attributeNamespace=o,this.mustUseProperty=i,this.propertyName=e,this.type=a,this.sanitizeURL=c,this.removeEmptyString=d}var z={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){z[e]=new v$1(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var a=e[0];z[a]=new v$1(a,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){z[e]=new v$1(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){z[e]=new v$1(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){z[e]=new v$1(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){z[e]=new v$1(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){z[e]=new v$1(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){z[e]=new v$1(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){z[e]=new v$1(e,5,!1,e.toLowerCase(),null,!1,!1)});var ra=/[\-:]([a-z])/g;function sa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var a=e.replace(ra,sa);z[a]=new v$1(a,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var a=e.replace(ra,sa);z[a]=new v$1(a,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var a=e.replace(ra,sa);z[a]=new v$1(a,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){z[e]=new v$1(e,1,!1,e.toLowerCase(),null,!1,!1)});z.xlinkHref=new v$1("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){z[e]=new v$1(e,1,!1,e.toLowerCase(),null,!0,!0)});function ta(e,a,i,s){var o=z.hasOwnProperty(a)?z[a]:null;(o!==null?o.type!==0:s||!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(qa(a,i,o,s)&&(i=null),s||o===null?oa(a)&&(i===null?e.removeAttribute(a):e.setAttribute(a,""+i)):o.mustUseProperty?e[o.propertyName]=i===null?o.type===3?!1:"":i:(a=o.attributeName,s=o.attributeNamespace,i===null?e.removeAttribute(a):(o=o.type,i=o===3||o===4&&i===!0?"":""+i,s?e.setAttributeNS(s,a,i):e.setAttribute(a,i))))}var ua=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,va=Symbol.for("react.element"),wa=Symbol.for("react.portal"),ya=Symbol.for("react.fragment"),za=Symbol.for("react.strict_mode"),Aa=Symbol.for("react.profiler"),Ba=Symbol.for("react.provider"),Ca=Symbol.for("react.context"),Da=Symbol.for("react.forward_ref"),Ea=Symbol.for("react.suspense"),Fa=Symbol.for("react.suspense_list"),Ga=Symbol.for("react.memo"),Ha=Symbol.for("react.lazy"),Ia=Symbol.for("react.offscreen"),Ja=Symbol.iterator;function Ka(e){return e===null||typeof e!="object"?null:(e=Ja&&e[Ja]||e["@@iterator"],typeof e=="function"?e:null)}var A=Object.assign,La;function Ma(e){if(La===void 0)try{throw Error()}catch(i){var a=i.stack.trim().match(/\n( *(at )?)/);La=a&&a[1]||""}return`
`+La+e}var Na=!1;function Oa(e,a){if(!e||Na)return"";Na=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(a)if(a=function(){throw Error()},Object.defineProperty(a.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(a,[])}catch(_){var s=_}Reflect.construct(e,[],a)}else{try{a.call()}catch(_){s=_}e.call(a.prototype)}else{try{throw Error()}catch(_){s=_}e()}}catch(_){if(_&&s&&typeof _.stack=="string"){for(var o=_.stack.split(`
`),c=s.stack.split(`
`),d=o.length-1,b=c.length-1;1<=d&&0<=b&&o[d]!==c[b];)b--;for(;1<=d&&0<=b;d--,b--)if(o[d]!==c[b]){if(d!==1||b!==1)do if(d--,b--,0>b||o[d]!==c[b]){var g=`
`+o[d].replace(" at new "," at ");return e.displayName&&g.includes("<anonymous>")&&(g=g.replace("<anonymous>",e.displayName)),g}while(1<=d&&0<=b);break}}}finally{Na=!1,Error.prepareStackTrace=i}return(e=e?e.displayName||e.name:"")?Ma(e):""}function Pa(e){switch(e.tag){case 5:return Ma(e.type);case 16:return Ma("Lazy");case 13:return Ma("Suspense");case 19:return Ma("SuspenseList");case 0:case 2:case 15:return e=Oa(e.type,!1),e;case 11:return e=Oa(e.type.render,!1),e;case 1:return e=Oa(e.type,!0),e;default:return""}}function Qa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ya:return"Fragment";case wa:return"Portal";case Aa:return"Profiler";case za:return"StrictMode";case Ea:return"Suspense";case Fa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ca:return(e.displayName||"Context")+".Consumer";case Ba:return(e._context.displayName||"Context")+".Provider";case Da:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ga:return a=e.displayName||null,a!==null?a:Qa(e.type)||"Memo";case Ha:a=e._payload,e=e._init;try{return Qa(e(a))}catch{}}return null}function Ra(e){var a=e.type;switch(e.tag){case 24:return"Cache";case 9:return(a.displayName||"Context")+".Consumer";case 10:return(a._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=a.render,e=e.displayName||e.name||"",a.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return a;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qa(a);case 8:return a===za?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof a=="function")return a.displayName||a.name||null;if(typeof a=="string")return a}return null}function Sa(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ta(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function Ua(e){var a=Ta(e)?"checked":"value",i=Object.getOwnPropertyDescriptor(e.constructor.prototype,a),s=""+e[a];if(!e.hasOwnProperty(a)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var o=i.get,c=i.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return o.call(this)},set:function(d){s=""+d,c.call(this,d)}}),Object.defineProperty(e,a,{enumerable:i.enumerable}),{getValue:function(){return s},setValue:function(d){s=""+d},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function Va(e){e._valueTracker||(e._valueTracker=Ua(e))}function Wa(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var i=a.getValue(),s="";return e&&(s=Ta(e)?e.checked?"true":"false":e.value),e=s,e!==i?(a.setValue(e),!0):!1}function Xa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ya(e,a){var i=a.checked;return A({},a,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??e._wrapperState.initialChecked})}function Za(e,a){var i=a.defaultValue==null?"":a.defaultValue,s=a.checked!=null?a.checked:a.defaultChecked;i=Sa(a.value!=null?a.value:i),e._wrapperState={initialChecked:s,initialValue:i,controlled:a.type==="checkbox"||a.type==="radio"?a.checked!=null:a.value!=null}}function ab(e,a){a=a.checked,a!=null&&ta(e,"checked",a,!1)}function bb(e,a){ab(e,a);var i=Sa(a.value),s=a.type;if(i!=null)s==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+i):e.value!==""+i&&(e.value=""+i);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}a.hasOwnProperty("value")?cb(e,a.type,i):a.hasOwnProperty("defaultValue")&&cb(e,a.type,Sa(a.defaultValue)),a.checked==null&&a.defaultChecked!=null&&(e.defaultChecked=!!a.defaultChecked)}function db(e,a,i){if(a.hasOwnProperty("value")||a.hasOwnProperty("defaultValue")){var s=a.type;if(!(s!=="submit"&&s!=="reset"||a.value!==void 0&&a.value!==null))return;a=""+e._wrapperState.initialValue,i||a===e.value||(e.value=a),e.defaultValue=a}i=e.name,i!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,i!==""&&(e.name=i)}function cb(e,a,i){(a!=="number"||Xa(e.ownerDocument)!==e)&&(i==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+i&&(e.defaultValue=""+i))}var eb=Array.isArray;function fb(e,a,i,s){if(e=e.options,a){a={};for(var o=0;o<i.length;o++)a["$"+i[o]]=!0;for(i=0;i<e.length;i++)o=a.hasOwnProperty("$"+e[i].value),e[i].selected!==o&&(e[i].selected=o),o&&s&&(e[i].defaultSelected=!0)}else{for(i=""+Sa(i),a=null,o=0;o<e.length;o++){if(e[o].value===i){e[o].selected=!0,s&&(e[o].defaultSelected=!0);return}a!==null||e[o].disabled||(a=e[o])}a!==null&&(a.selected=!0)}}function gb(e,a){if(a.dangerouslySetInnerHTML!=null)throw Error(p(91));return A({},a,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function hb(e,a){var i=a.value;if(i==null){if(i=a.children,a=a.defaultValue,i!=null){if(a!=null)throw Error(p(92));if(eb(i)){if(1<i.length)throw Error(p(93));i=i[0]}a=i}a==null&&(a=""),i=a}e._wrapperState={initialValue:Sa(i)}}function ib(e,a){var i=Sa(a.value),s=Sa(a.defaultValue);i!=null&&(i=""+i,i!==e.value&&(e.value=i),a.defaultValue==null&&e.defaultValue!==i&&(e.defaultValue=i)),s!=null&&(e.defaultValue=""+s)}function jb(e){var a=e.textContent;a===e._wrapperState.initialValue&&a!==""&&a!==null&&(e.value=a)}function kb(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lb(e,a){return e==null||e==="http://www.w3.org/1999/xhtml"?kb(a):e==="http://www.w3.org/2000/svg"&&a==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var mb,nb=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(a,i,s,o){MSApp.execUnsafeLocalFunction(function(){return e(a,i,s,o)})}:e}(function(e,a){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=a;else{for(mb=mb||document.createElement("div"),mb.innerHTML="<svg>"+a.valueOf().toString()+"</svg>",a=mb.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;a.firstChild;)e.appendChild(a.firstChild)}});function ob(e,a){if(a){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=a;return}}e.textContent=a}var pb={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qb=["Webkit","ms","Moz","O"];Object.keys(pb).forEach(function(e){qb.forEach(function(a){a=a+e.charAt(0).toUpperCase()+e.substring(1),pb[a]=pb[e]})});function rb(e,a,i){return a==null||typeof a=="boolean"||a===""?"":i||typeof a!="number"||a===0||pb.hasOwnProperty(e)&&pb[e]?(""+a).trim():a+"px"}function sb(e,a){e=e.style;for(var i in a)if(a.hasOwnProperty(i)){var s=i.indexOf("--")===0,o=rb(i,a[i],s);i==="float"&&(i="cssFloat"),s?e.setProperty(i,o):e[i]=o}}var tb=A({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ub(e,a){if(a){if(tb[e]&&(a.children!=null||a.dangerouslySetInnerHTML!=null))throw Error(p(137,e));if(a.dangerouslySetInnerHTML!=null){if(a.children!=null)throw Error(p(60));if(typeof a.dangerouslySetInnerHTML!="object"||!("__html"in a.dangerouslySetInnerHTML))throw Error(p(61))}if(a.style!=null&&typeof a.style!="object")throw Error(p(62))}}function vb(e,a){if(e.indexOf("-")===-1)return typeof a.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wb=null;function xb(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var yb=null,zb=null,Ab=null;function Bb(e){if(e=Cb(e)){if(typeof yb!="function")throw Error(p(280));var a=e.stateNode;a&&(a=Db(a),yb(e.stateNode,e.type,a))}}function Eb(e){zb?Ab?Ab.push(e):Ab=[e]:zb=e}function Fb(){if(zb){var e=zb,a=Ab;if(Ab=zb=null,Bb(e),a)for(e=0;e<a.length;e++)Bb(a[e])}}function Gb(e,a){return e(a)}function Hb(){}var Ib=!1;function Jb(e,a,i){if(Ib)return e(a,i);Ib=!0;try{return Gb(e,a,i)}finally{Ib=!1,(zb!==null||Ab!==null)&&(Hb(),Fb())}}function Kb(e,a){var i=e.stateNode;if(i===null)return null;var s=Db(i);if(s===null)return null;i=s[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(p(231,a,typeof i));return i}var Lb=!1;if(ia)try{var Mb={};Object.defineProperty(Mb,"passive",{get:function(){Lb=!0}}),window.addEventListener("test",Mb,Mb),window.removeEventListener("test",Mb,Mb)}catch{Lb=!1}function Nb(e,a,i,s,o,c,d,b,g){var _=Array.prototype.slice.call(arguments,3);try{a.apply(i,_)}catch(tt){this.onError(tt)}}var Ob=!1,Pb=null,Qb=!1,Rb=null,Sb={onError:function(e){Ob=!0,Pb=e}};function Tb(e,a,i,s,o,c,d,b,g){Ob=!1,Pb=null,Nb.apply(Sb,arguments)}function Ub(e,a,i,s,o,c,d,b,g){if(Tb.apply(this,arguments),Ob){if(Ob){var _=Pb;Ob=!1,Pb=null}else throw Error(p(198));Qb||(Qb=!0,Rb=_)}}function Vb(e){var a=e,i=e;if(e.alternate)for(;a.return;)a=a.return;else{e=a;do a=e,a.flags&4098&&(i=a.return),e=a.return;while(e)}return a.tag===3?i:null}function Wb(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function Xb(e){if(Vb(e)!==e)throw Error(p(188))}function Yb(e){var a=e.alternate;if(!a){if(a=Vb(e),a===null)throw Error(p(188));return a!==e?null:e}for(var i=e,s=a;;){var o=i.return;if(o===null)break;var c=o.alternate;if(c===null){if(s=o.return,s!==null){i=s;continue}break}if(o.child===c.child){for(c=o.child;c;){if(c===i)return Xb(o),e;if(c===s)return Xb(o),a;c=c.sibling}throw Error(p(188))}if(i.return!==s.return)i=o,s=c;else{for(var d=!1,b=o.child;b;){if(b===i){d=!0,i=o,s=c;break}if(b===s){d=!0,s=o,i=c;break}b=b.sibling}if(!d){for(b=c.child;b;){if(b===i){d=!0,i=c,s=o;break}if(b===s){d=!0,s=c,i=o;break}b=b.sibling}if(!d)throw Error(p(189))}}if(i.alternate!==s)throw Error(p(190))}if(i.tag!==3)throw Error(p(188));return i.stateNode.current===i?e:a}function Zb(e){return e=Yb(e),e!==null?$b(e):null}function $b(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var a=$b(e);if(a!==null)return a;e=e.sibling}return null}var ac=ca.unstable_scheduleCallback,bc=ca.unstable_cancelCallback,cc=ca.unstable_shouldYield,dc=ca.unstable_requestPaint,B=ca.unstable_now,ec=ca.unstable_getCurrentPriorityLevel,fc=ca.unstable_ImmediatePriority,gc=ca.unstable_UserBlockingPriority,hc=ca.unstable_NormalPriority,ic=ca.unstable_LowPriority,jc=ca.unstable_IdlePriority,kc=null,lc=null;function mc(e){if(lc&&typeof lc.onCommitFiberRoot=="function")try{lc.onCommitFiberRoot(kc,e,void 0,(e.current.flags&128)===128)}catch{}}var oc=Math.clz32?Math.clz32:nc,pc=Math.log,qc=Math.LN2;function nc(e){return e>>>=0,e===0?32:31-(pc(e)/qc|0)|0}var rc=64,sc=4194304;function tc(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function uc(e,a){var i=e.pendingLanes;if(i===0)return 0;var s=0,o=e.suspendedLanes,c=e.pingedLanes,d=i&268435455;if(d!==0){var b=d&~o;b!==0?s=tc(b):(c&=d,c!==0&&(s=tc(c)))}else d=i&~o,d!==0?s=tc(d):c!==0&&(s=tc(c));if(s===0)return 0;if(a!==0&&a!==s&&!(a&o)&&(o=s&-s,c=a&-a,o>=c||o===16&&(c&4194240)!==0))return a;if(s&4&&(s|=i&16),a=e.entangledLanes,a!==0)for(e=e.entanglements,a&=s;0<a;)i=31-oc(a),o=1<<i,s|=e[i],a&=~o;return s}function vc(e,a){switch(e){case 1:case 2:case 4:return a+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wc(e,a){for(var i=e.suspendedLanes,s=e.pingedLanes,o=e.expirationTimes,c=e.pendingLanes;0<c;){var d=31-oc(c),b=1<<d,g=o[d];g===-1?(!(b&i)||b&s)&&(o[d]=vc(b,a)):g<=a&&(e.expiredLanes|=b),c&=~b}}function xc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function yc(){var e=rc;return rc<<=1,!(rc&4194240)&&(rc=64),e}function zc(e){for(var a=[],i=0;31>i;i++)a.push(e);return a}function Ac(e,a,i){e.pendingLanes|=a,a!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,a=31-oc(a),e[a]=i}function Bc(e,a){var i=e.pendingLanes&~a;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=a,e.mutableReadLanes&=a,e.entangledLanes&=a,a=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<i;){var o=31-oc(i),c=1<<o;a[o]=0,s[o]=-1,e[o]=-1,i&=~c}}function Cc(e,a){var i=e.entangledLanes|=a;for(e=e.entanglements;i;){var s=31-oc(i),o=1<<s;o&a|e[s]&a&&(e[s]|=a),i&=~o}}var C=0;function Dc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ec,Fc,Gc,Hc,Ic,Jc=!1,Kc=[],Lc=null,Mc=null,Nc=null,Oc=new Map,Pc=new Map,Qc=[],Rc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sc(e,a){switch(e){case"focusin":case"focusout":Lc=null;break;case"dragenter":case"dragleave":Mc=null;break;case"mouseover":case"mouseout":Nc=null;break;case"pointerover":case"pointerout":Oc.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pc.delete(a.pointerId)}}function Tc(e,a,i,s,o,c){return e===null||e.nativeEvent!==c?(e={blockedOn:a,domEventName:i,eventSystemFlags:s,nativeEvent:c,targetContainers:[o]},a!==null&&(a=Cb(a),a!==null&&Fc(a)),e):(e.eventSystemFlags|=s,a=e.targetContainers,o!==null&&a.indexOf(o)===-1&&a.push(o),e)}function Uc(e,a,i,s,o){switch(a){case"focusin":return Lc=Tc(Lc,e,a,i,s,o),!0;case"dragenter":return Mc=Tc(Mc,e,a,i,s,o),!0;case"mouseover":return Nc=Tc(Nc,e,a,i,s,o),!0;case"pointerover":var c=o.pointerId;return Oc.set(c,Tc(Oc.get(c)||null,e,a,i,s,o)),!0;case"gotpointercapture":return c=o.pointerId,Pc.set(c,Tc(Pc.get(c)||null,e,a,i,s,o)),!0}return!1}function Vc(e){var a=Wc(e.target);if(a!==null){var i=Vb(a);if(i!==null){if(a=i.tag,a===13){if(a=Wb(i),a!==null){e.blockedOn=a,Ic(e.priority,function(){Gc(i)});return}}else if(a===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Xc(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var i=Yc(e.domEventName,e.eventSystemFlags,a[0],e.nativeEvent);if(i===null){i=e.nativeEvent;var s=new i.constructor(i.type,i);wb=s,i.target.dispatchEvent(s),wb=null}else return a=Cb(i),a!==null&&Fc(a),e.blockedOn=i,!1;a.shift()}return!0}function Zc(e,a,i){Xc(e)&&i.delete(a)}function $c(){Jc=!1,Lc!==null&&Xc(Lc)&&(Lc=null),Mc!==null&&Xc(Mc)&&(Mc=null),Nc!==null&&Xc(Nc)&&(Nc=null),Oc.forEach(Zc),Pc.forEach(Zc)}function ad(e,a){e.blockedOn===a&&(e.blockedOn=null,Jc||(Jc=!0,ca.unstable_scheduleCallback(ca.unstable_NormalPriority,$c)))}function bd(e){function a(o){return ad(o,e)}if(0<Kc.length){ad(Kc[0],e);for(var i=1;i<Kc.length;i++){var s=Kc[i];s.blockedOn===e&&(s.blockedOn=null)}}for(Lc!==null&&ad(Lc,e),Mc!==null&&ad(Mc,e),Nc!==null&&ad(Nc,e),Oc.forEach(a),Pc.forEach(a),i=0;i<Qc.length;i++)s=Qc[i],s.blockedOn===e&&(s.blockedOn=null);for(;0<Qc.length&&(i=Qc[0],i.blockedOn===null);)Vc(i),i.blockedOn===null&&Qc.shift()}var cd=ua.ReactCurrentBatchConfig,dd=!0;function ed(e,a,i,s){var o=C,c=cd.transition;cd.transition=null;try{C=1,fd(e,a,i,s)}finally{C=o,cd.transition=c}}function gd(e,a,i,s){var o=C,c=cd.transition;cd.transition=null;try{C=4,fd(e,a,i,s)}finally{C=o,cd.transition=c}}function fd(e,a,i,s){if(dd){var o=Yc(e,a,i,s);if(o===null)hd(e,a,s,id,i),Sc(e,s);else if(Uc(o,e,a,i,s))s.stopPropagation();else if(Sc(e,s),a&4&&-1<Rc.indexOf(e)){for(;o!==null;){var c=Cb(o);if(c!==null&&Ec(c),c=Yc(e,a,i,s),c===null&&hd(e,a,s,id,i),c===o)break;o=c}o!==null&&s.stopPropagation()}else hd(e,a,s,null,i)}}var id=null;function Yc(e,a,i,s){if(id=null,e=xb(s),e=Wc(e),e!==null)if(a=Vb(e),a===null)e=null;else if(i=a.tag,i===13){if(e=Wb(a),e!==null)return e;e=null}else if(i===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null);return id=e,null}function jd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ec()){case fc:return 1;case gc:return 4;case hc:case ic:return 16;case jc:return 536870912;default:return 16}default:return 16}}var kd=null,ld=null,md=null;function nd(){if(md)return md;var e,a=ld,i=a.length,s,o="value"in kd?kd.value:kd.textContent,c=o.length;for(e=0;e<i&&a[e]===o[e];e++);var d=i-e;for(s=1;s<=d&&a[i-s]===o[c-s];s++);return md=o.slice(e,1<s?1-s:void 0)}function od(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function pd(){return!0}function qd(){return!1}function rd(e){function a(i,s,o,c,d){this._reactName=i,this._targetInst=o,this.type=s,this.nativeEvent=c,this.target=d,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(i=e[b],this[b]=i?i(c):c[b]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?pd:qd,this.isPropagationStopped=qd,this}return A(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=pd)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=pd)},persist:function(){},isPersistent:pd}),a}var sd={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},td=rd(sd),ud=A({},sd,{view:0,detail:0}),vd=rd(ud),wd,xd,yd,Ad=A({},ud,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==yd&&(yd&&e.type==="mousemove"?(wd=e.screenX-yd.screenX,xd=e.screenY-yd.screenY):xd=wd=0,yd=e),wd)},movementY:function(e){return"movementY"in e?e.movementY:xd}}),Bd=rd(Ad),Cd=A({},Ad,{dataTransfer:0}),Dd=rd(Cd),Ed=A({},ud,{relatedTarget:0}),Fd=rd(Ed),Gd=A({},sd,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=rd(Gd),Id=A({},sd,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Jd=rd(Id),Kd=A({},sd,{data:0}),Ld=rd(Kd),Md={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Od={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=Od[e])?!!a[e]:!1}function zd(){return Pd}var Qd=A({},ud,{key:function(e){if(e.key){var a=Md[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=od(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Nd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zd,charCode:function(e){return e.type==="keypress"?od(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?od(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Rd=rd(Qd),Sd=A({},Ad,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=rd(Sd),Ud=A({},ud,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zd}),Vd=rd(Ud),Wd=A({},sd,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xd=rd(Wd),Yd=A({},Ad,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Zd=rd(Yd),$d=[9,13,27,32],ae=ia&&"CompositionEvent"in window,be=null;ia&&"documentMode"in document&&(be=document.documentMode);var ce=ia&&"TextEvent"in window&&!be,de=ia&&(!ae||be&&8<be&&11>=be),ee=" ",fe=!1;function ge(e,a){switch(e){case"keyup":return $d.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function he(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ie=!1;function je(e,a){switch(e){case"compositionend":return he(a);case"keypress":return a.which!==32?null:(fe=!0,ee);case"textInput":return e=a.data,e===ee&&fe?null:e;default:return null}}function ke(e,a){if(ie)return e==="compositionend"||!ae&&ge(e,a)?(e=nd(),md=ld=kd=null,ie=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return de&&a.locale!=="ko"?null:a.data;default:return null}}var le={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function me(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!le[e.type]:a==="textarea"}function ne(e,a,i,s){Eb(s),a=oe(a,"onChange"),0<a.length&&(i=new td("onChange","change",null,i,s),e.push({event:i,listeners:a}))}var pe=null,qe=null;function re(e){se(e,0)}function te(e){var a=ue(e);if(Wa(a))return e}function ve(e,a){if(e==="change")return a}var we=!1;if(ia){var xe;if(ia){var ye="oninput"in document;if(!ye){var ze=document.createElement("div");ze.setAttribute("oninput","return;"),ye=typeof ze.oninput=="function"}xe=ye}else xe=!1;we=xe&&(!document.documentMode||9<document.documentMode)}function Ae(){pe&&(pe.detachEvent("onpropertychange",Be),qe=pe=null)}function Be(e){if(e.propertyName==="value"&&te(qe)){var a=[];ne(a,qe,e,xb(e)),Jb(re,a)}}function Ce(e,a,i){e==="focusin"?(Ae(),pe=a,qe=i,pe.attachEvent("onpropertychange",Be)):e==="focusout"&&Ae()}function De(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return te(qe)}function Ee(e,a){if(e==="click")return te(a)}function Fe(e,a){if(e==="input"||e==="change")return te(a)}function Ge(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var He=typeof Object.is=="function"?Object.is:Ge;function Ie(e,a){if(He(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var i=Object.keys(e),s=Object.keys(a);if(i.length!==s.length)return!1;for(s=0;s<i.length;s++){var o=i[s];if(!ja.call(a,o)||!He(e[o],a[o]))return!1}return!0}function Je(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ke(e,a){var i=Je(e);e=0;for(var s;i;){if(i.nodeType===3){if(s=e+i.textContent.length,e<=a&&s>=a)return{node:i,offset:a-e};e=s}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=Je(i)}}function Le(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?Le(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function Me(){for(var e=window,a=Xa();a instanceof e.HTMLIFrameElement;){try{var i=typeof a.contentWindow.location.href=="string"}catch{i=!1}if(i)e=a.contentWindow;else break;a=Xa(e.document)}return a}function Ne(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}function Oe(e){var a=Me(),i=e.focusedElem,s=e.selectionRange;if(a!==i&&i&&i.ownerDocument&&Le(i.ownerDocument.documentElement,i)){if(s!==null&&Ne(i)){if(a=s.start,e=s.end,e===void 0&&(e=a),"selectionStart"in i)i.selectionStart=a,i.selectionEnd=Math.min(e,i.value.length);else if(e=(a=i.ownerDocument||document)&&a.defaultView||window,e.getSelection){e=e.getSelection();var o=i.textContent.length,c=Math.min(s.start,o);s=s.end===void 0?c:Math.min(s.end,o),!e.extend&&c>s&&(o=s,s=c,c=o),o=Ke(i,c);var d=Ke(i,s);o&&d&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==d.node||e.focusOffset!==d.offset)&&(a=a.createRange(),a.setStart(o.node,o.offset),e.removeAllRanges(),c>s?(e.addRange(a),e.extend(d.node,d.offset)):(a.setEnd(d.node,d.offset),e.addRange(a)))}}for(a=[],e=i;e=e.parentNode;)e.nodeType===1&&a.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<a.length;i++)e=a[i],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Pe=ia&&"documentMode"in document&&11>=document.documentMode,Qe=null,Re=null,Se=null,Te=!1;function Ue(e,a,i){var s=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Te||Qe==null||Qe!==Xa(s)||(s=Qe,"selectionStart"in s&&Ne(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Se&&Ie(Se,s)||(Se=s,s=oe(Re,"onSelect"),0<s.length&&(a=new td("onSelect","select",null,a,i),e.push({event:a,listeners:s}),a.target=Qe)))}function Ve(e,a){var i={};return i[e.toLowerCase()]=a.toLowerCase(),i["Webkit"+e]="webkit"+a,i["Moz"+e]="moz"+a,i}var We={animationend:Ve("Animation","AnimationEnd"),animationiteration:Ve("Animation","AnimationIteration"),animationstart:Ve("Animation","AnimationStart"),transitionend:Ve("Transition","TransitionEnd")},Xe={},Ye={};ia&&(Ye=document.createElement("div").style,"AnimationEvent"in window||(delete We.animationend.animation,delete We.animationiteration.animation,delete We.animationstart.animation),"TransitionEvent"in window||delete We.transitionend.transition);function Ze(e){if(Xe[e])return Xe[e];if(!We[e])return e;var a=We[e],i;for(i in a)if(a.hasOwnProperty(i)&&i in Ye)return Xe[e]=a[i];return e}var $e=Ze("animationend"),af=Ze("animationiteration"),bf=Ze("animationstart"),cf=Ze("transitionend"),df=new Map,ef="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ff(e,a){df.set(e,a),fa(a,[e])}for(var gf=0;gf<ef.length;gf++){var hf=ef[gf],jf=hf.toLowerCase(),kf=hf[0].toUpperCase()+hf.slice(1);ff(jf,"on"+kf)}ff($e,"onAnimationEnd");ff(af,"onAnimationIteration");ff(bf,"onAnimationStart");ff("dblclick","onDoubleClick");ff("focusin","onFocus");ff("focusout","onBlur");ff(cf,"onTransitionEnd");ha("onMouseEnter",["mouseout","mouseover"]);ha("onMouseLeave",["mouseout","mouseover"]);ha("onPointerEnter",["pointerout","pointerover"]);ha("onPointerLeave",["pointerout","pointerover"]);fa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fa("onBeforeInput",["compositionend","keypress","textInput","paste"]);fa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lf="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mf=new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));function nf(e,a,i){var s=e.type||"unknown-event";e.currentTarget=i,Ub(s,a,void 0,e),e.currentTarget=null}function se(e,a){a=(a&4)!==0;for(var i=0;i<e.length;i++){var s=e[i],o=s.event;s=s.listeners;e:{var c=void 0;if(a)for(var d=s.length-1;0<=d;d--){var b=s[d],g=b.instance,_=b.currentTarget;if(b=b.listener,g!==c&&o.isPropagationStopped())break e;nf(o,b,_),c=g}else for(d=0;d<s.length;d++){if(b=s[d],g=b.instance,_=b.currentTarget,b=b.listener,g!==c&&o.isPropagationStopped())break e;nf(o,b,_),c=g}}}if(Qb)throw e=Rb,Qb=!1,Rb=null,e}function D(e,a){var i=a[of];i===void 0&&(i=a[of]=new Set);var s=e+"__bubble";i.has(s)||(pf(a,e,2,!1),i.add(s))}function qf(e,a,i){var s=0;a&&(s|=4),pf(i,e,s,a)}var rf="_reactListening"+Math.random().toString(36).slice(2);function sf(e){if(!e[rf]){e[rf]=!0,da.forEach(function(i){i!=="selectionchange"&&(mf.has(i)||qf(i,!1,e),qf(i,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[rf]||(a[rf]=!0,qf("selectionchange",!1,a))}}function pf(e,a,i,s){switch(jd(a)){case 1:var o=ed;break;case 4:o=gd;break;default:o=fd}i=o.bind(null,a,i,e),o=void 0,!Lb||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(o=!0),s?o!==void 0?e.addEventListener(a,i,{capture:!0,passive:o}):e.addEventListener(a,i,!0):o!==void 0?e.addEventListener(a,i,{passive:o}):e.addEventListener(a,i,!1)}function hd(e,a,i,s,o){var c=s;if(!(a&1)&&!(a&2)&&s!==null)e:for(;;){if(s===null)return;var d=s.tag;if(d===3||d===4){var b=s.stateNode.containerInfo;if(b===o||b.nodeType===8&&b.parentNode===o)break;if(d===4)for(d=s.return;d!==null;){var g=d.tag;if((g===3||g===4)&&(g=d.stateNode.containerInfo,g===o||g.nodeType===8&&g.parentNode===o))return;d=d.return}for(;b!==null;){if(d=Wc(b),d===null)return;if(g=d.tag,g===5||g===6){s=c=d;continue e}b=b.parentNode}}s=s.return}Jb(function(){var _=c,tt=xb(i),it=[];e:{var et=df.get(e);if(et!==void 0){var st=td,nt=e;switch(e){case"keypress":if(od(i)===0)break e;case"keydown":case"keyup":st=Rd;break;case"focusin":nt="focus",st=Fd;break;case"focusout":nt="blur",st=Fd;break;case"beforeblur":case"afterblur":st=Fd;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":st=Bd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":st=Dd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":st=Vd;break;case $e:case af:case bf:st=Hd;break;case cf:st=Xd;break;case"scroll":st=vd;break;case"wheel":st=Zd;break;case"copy":case"cut":case"paste":st=Jd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":st=Td}var rt=(a&4)!==0,ht=!rt&&e==="scroll",$=rt?et!==null?et+"Capture":null:et;rt=[];for(var _e=_,j;_e!==null;){j=_e;var at=j.stateNode;if(j.tag===5&&at!==null&&(j=at,$!==null&&(at=Kb(_e,$),at!=null&&rt.push(tf(_e,at,j)))),ht)break;_e=_e.return}0<rt.length&&(et=new st(et,nt,null,i,tt),it.push({event:et,listeners:rt}))}}if(!(a&7)){e:{if(et=e==="mouseover"||e==="pointerover",st=e==="mouseout"||e==="pointerout",et&&i!==wb&&(nt=i.relatedTarget||i.fromElement)&&(Wc(nt)||nt[uf]))break e;if((st||et)&&(et=tt.window===tt?tt:(et=tt.ownerDocument)?et.defaultView||et.parentWindow:window,st?(nt=i.relatedTarget||i.toElement,st=_,nt=nt?Wc(nt):null,nt!==null&&(ht=Vb(nt),nt!==ht||nt.tag!==5&&nt.tag!==6)&&(nt=null)):(st=null,nt=_),st!==nt)){if(rt=Bd,at="onMouseLeave",$="onMouseEnter",_e="mouse",(e==="pointerout"||e==="pointerover")&&(rt=Td,at="onPointerLeave",$="onPointerEnter",_e="pointer"),ht=st==null?et:ue(st),j=nt==null?et:ue(nt),et=new rt(at,_e+"leave",st,i,tt),et.target=ht,et.relatedTarget=j,at=null,Wc(tt)===_&&(rt=new rt($,_e+"enter",nt,i,tt),rt.target=j,rt.relatedTarget=ht,at=rt),ht=at,st&&nt)t:{for(rt=st,$=nt,_e=0,j=rt;j;j=vf(j))_e++;for(j=0,at=$;at;at=vf(at))j++;for(;0<_e-j;)rt=vf(rt),_e--;for(;0<j-_e;)$=vf($),j--;for(;_e--;){if(rt===$||$!==null&&rt===$.alternate)break t;rt=vf(rt),$=vf($)}rt=null}else rt=null;st!==null&&wf(it,et,st,rt,!1),nt!==null&&ht!==null&&wf(it,ht,nt,rt,!0)}}e:{if(et=_?ue(_):window,st=et.nodeName&&et.nodeName.toLowerCase(),st==="select"||st==="input"&&et.type==="file")var lt=ve;else if(me(et))if(we)lt=Fe;else{lt=De;var pt=Ce}else(st=et.nodeName)&&st.toLowerCase()==="input"&&(et.type==="checkbox"||et.type==="radio")&&(lt=Ee);if(lt&&(lt=lt(e,_))){ne(it,lt,i,tt);break e}pt&&pt(e,et,_),e==="focusout"&&(pt=et._wrapperState)&&pt.controlled&&et.type==="number"&&cb(et,"number",et.value)}switch(pt=_?ue(_):window,e){case"focusin":(me(pt)||pt.contentEditable==="true")&&(Qe=pt,Re=_,Se=null);break;case"focusout":Se=Re=Qe=null;break;case"mousedown":Te=!0;break;case"contextmenu":case"mouseup":case"dragend":Te=!1,Ue(it,i,tt);break;case"selectionchange":if(Pe)break;case"keydown":case"keyup":Ue(it,i,tt)}var ft;if(ae)e:{switch(e){case"compositionstart":var mt="onCompositionStart";break e;case"compositionend":mt="onCompositionEnd";break e;case"compositionupdate":mt="onCompositionUpdate";break e}mt=void 0}else ie?ge(e,i)&&(mt="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(mt="onCompositionStart");mt&&(de&&i.locale!=="ko"&&(ie||mt!=="onCompositionStart"?mt==="onCompositionEnd"&&ie&&(ft=nd()):(kd=tt,ld="value"in kd?kd.value:kd.textContent,ie=!0)),pt=oe(_,mt),0<pt.length&&(mt=new Ld(mt,e,null,i,tt),it.push({event:mt,listeners:pt}),ft?mt.data=ft:(ft=he(i),ft!==null&&(mt.data=ft)))),(ft=ce?je(e,i):ke(e,i))&&(_=oe(_,"onBeforeInput"),0<_.length&&(tt=new Ld("onBeforeInput","beforeinput",null,i,tt),it.push({event:tt,listeners:_}),tt.data=ft))}se(it,a)})}function tf(e,a,i){return{instance:e,listener:a,currentTarget:i}}function oe(e,a){for(var i=a+"Capture",s=[];e!==null;){var o=e,c=o.stateNode;o.tag===5&&c!==null&&(o=c,c=Kb(e,i),c!=null&&s.unshift(tf(e,c,o)),c=Kb(e,a),c!=null&&s.push(tf(e,c,o))),e=e.return}return s}function vf(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function wf(e,a,i,s,o){for(var c=a._reactName,d=[];i!==null&&i!==s;){var b=i,g=b.alternate,_=b.stateNode;if(g!==null&&g===s)break;b.tag===5&&_!==null&&(b=_,o?(g=Kb(i,c),g!=null&&d.unshift(tf(i,g,b))):o||(g=Kb(i,c),g!=null&&d.push(tf(i,g,b)))),i=i.return}d.length!==0&&e.push({event:a,listeners:d})}var xf=/\r\n?/g,yf=/\u0000|\uFFFD/g;function zf(e){return(typeof e=="string"?e:""+e).replace(xf,`
`).replace(yf,"")}function Af(e,a,i){if(a=zf(a),zf(e)!==a&&i)throw Error(p(425))}function Bf(){}var Cf=null,Df=null;function Ef(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var Ff=typeof setTimeout=="function"?setTimeout:void 0,Gf=typeof clearTimeout=="function"?clearTimeout:void 0,Hf=typeof Promise=="function"?Promise:void 0,Jf=typeof queueMicrotask=="function"?queueMicrotask:typeof Hf<"u"?function(e){return Hf.resolve(null).then(e).catch(If)}:Ff;function If(e){setTimeout(function(){throw e})}function Kf(e,a){var i=a,s=0;do{var o=i.nextSibling;if(e.removeChild(i),o&&o.nodeType===8)if(i=o.data,i==="/$"){if(s===0){e.removeChild(o),bd(a);return}s--}else i!=="$"&&i!=="$?"&&i!=="$!"||s++;i=o}while(i);bd(a)}function Lf(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?")break;if(a==="/$")return null}}return e}function Mf(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"){if(a===0)return e;a--}else i==="/$"&&a++}e=e.previousSibling}return null}var Nf=Math.random().toString(36).slice(2),Of="__reactFiber$"+Nf,Pf="__reactProps$"+Nf,uf="__reactContainer$"+Nf,of="__reactEvents$"+Nf,Qf="__reactListeners$"+Nf,Rf="__reactHandles$"+Nf;function Wc(e){var a=e[Of];if(a)return a;for(var i=e.parentNode;i;){if(a=i[uf]||i[Of]){if(i=a.alternate,a.child!==null||i!==null&&i.child!==null)for(e=Mf(e);e!==null;){if(i=e[Of])return i;e=Mf(e)}return a}e=i,i=e.parentNode}return null}function Cb(e){return e=e[Of]||e[uf],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ue(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(p(33))}function Db(e){return e[Pf]||null}var Sf=[],Tf=-1;function Uf(e){return{current:e}}function E(e){0>Tf||(e.current=Sf[Tf],Sf[Tf]=null,Tf--)}function G(e,a){Tf++,Sf[Tf]=e.current,e.current=a}var Vf={},H=Uf(Vf),Wf=Uf(!1),Xf=Vf;function Yf(e,a){var i=e.type.contextTypes;if(!i)return Vf;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===a)return s.__reactInternalMemoizedMaskedChildContext;var o={},c;for(c in i)o[c]=a[c];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=o),o}function Zf(e){return e=e.childContextTypes,e!=null}function $f(){E(Wf),E(H)}function ag(e,a,i){if(H.current!==Vf)throw Error(p(168));G(H,a),G(Wf,i)}function bg(e,a,i){var s=e.stateNode;if(a=a.childContextTypes,typeof s.getChildContext!="function")return i;s=s.getChildContext();for(var o in s)if(!(o in a))throw Error(p(108,Ra(e)||"Unknown",o));return A({},i,s)}function cg(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Vf,Xf=H.current,G(H,e),G(Wf,Wf.current),!0}function dg(e,a,i){var s=e.stateNode;if(!s)throw Error(p(169));i?(e=bg(e,a,Xf),s.__reactInternalMemoizedMergedChildContext=e,E(Wf),E(H),G(H,e)):E(Wf),G(Wf,i)}var eg=null,fg=!1,gg=!1;function hg(e){eg===null?eg=[e]:eg.push(e)}function ig(e){fg=!0,hg(e)}function jg(){if(!gg&&eg!==null){gg=!0;var e=0,a=C;try{var i=eg;for(C=1;e<i.length;e++){var s=i[e];do s=s(!0);while(s!==null)}eg=null,fg=!1}catch(o){throw eg!==null&&(eg=eg.slice(e+1)),ac(fc,jg),o}finally{C=a,gg=!1}}return null}var kg=[],lg=0,mg=null,ng=0,og=[],pg=0,qg=null,rg=1,sg="";function tg(e,a){kg[lg++]=ng,kg[lg++]=mg,mg=e,ng=a}function ug(e,a,i){og[pg++]=rg,og[pg++]=sg,og[pg++]=qg,qg=e;var s=rg;e=sg;var o=32-oc(s)-1;s&=~(1<<o),i+=1;var c=32-oc(a)+o;if(30<c){var d=o-o%5;c=(s&(1<<d)-1).toString(32),s>>=d,o-=d,rg=1<<32-oc(a)+o|i<<o|s,sg=c+e}else rg=1<<c|i<<o|s,sg=e}function vg(e){e.return!==null&&(tg(e,1),ug(e,1,0))}function wg(e){for(;e===mg;)mg=kg[--lg],kg[lg]=null,ng=kg[--lg],kg[lg]=null;for(;e===qg;)qg=og[--pg],og[pg]=null,sg=og[--pg],og[pg]=null,rg=og[--pg],og[pg]=null}var xg=null,yg=null,I=!1,zg=null;function Ag(e,a){var i=Bg(5,null,null,0);i.elementType="DELETED",i.stateNode=a,i.return=e,a=e.deletions,a===null?(e.deletions=[i],e.flags|=16):a.push(i)}function Cg(e,a){switch(e.tag){case 5:var i=e.type;return a=a.nodeType!==1||i.toLowerCase()!==a.nodeName.toLowerCase()?null:a,a!==null?(e.stateNode=a,xg=e,yg=Lf(a.firstChild),!0):!1;case 6:return a=e.pendingProps===""||a.nodeType!==3?null:a,a!==null?(e.stateNode=a,xg=e,yg=null,!0):!1;case 13:return a=a.nodeType!==8?null:a,a!==null?(i=qg!==null?{id:rg,overflow:sg}:null,e.memoizedState={dehydrated:a,treeContext:i,retryLane:1073741824},i=Bg(18,null,null,0),i.stateNode=a,i.return=e,e.child=i,xg=e,yg=null,!0):!1;default:return!1}}function Dg(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Eg(e){if(I){var a=yg;if(a){var i=a;if(!Cg(e,a)){if(Dg(e))throw Error(p(418));a=Lf(i.nextSibling);var s=xg;a&&Cg(e,a)?Ag(s,i):(e.flags=e.flags&-4097|2,I=!1,xg=e)}}else{if(Dg(e))throw Error(p(418));e.flags=e.flags&-4097|2,I=!1,xg=e}}}function Fg(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;xg=e}function Gg(e){if(e!==xg)return!1;if(!I)return Fg(e),I=!0,!1;var a;if((a=e.tag!==3)&&!(a=e.tag!==5)&&(a=e.type,a=a!=="head"&&a!=="body"&&!Ef(e.type,e.memoizedProps)),a&&(a=yg)){if(Dg(e))throw Hg(),Error(p(418));for(;a;)Ag(e,a),a=Lf(a.nextSibling)}if(Fg(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(p(317));e:{for(e=e.nextSibling,a=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"){if(a===0){yg=Lf(e.nextSibling);break e}a--}else i!=="$"&&i!=="$!"&&i!=="$?"||a++}e=e.nextSibling}yg=null}}else yg=xg?Lf(e.stateNode.nextSibling):null;return!0}function Hg(){for(var e=yg;e;)e=Lf(e.nextSibling)}function Ig(){yg=xg=null,I=!1}function Jg(e){zg===null?zg=[e]:zg.push(e)}var Kg=ua.ReactCurrentBatchConfig;function Lg(e,a,i){if(e=i.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(p(309));var s=i.stateNode}if(!s)throw Error(p(147,e));var o=s,c=""+e;return a!==null&&a.ref!==null&&typeof a.ref=="function"&&a.ref._stringRef===c?a.ref:(a=function(d){var b=o.refs;d===null?delete b[c]:b[c]=d},a._stringRef=c,a)}if(typeof e!="string")throw Error(p(284));if(!i._owner)throw Error(p(290,e))}return e}function Mg(e,a){throw e=Object.prototype.toString.call(a),Error(p(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e))}function Ng(e){var a=e._init;return a(e._payload)}function Og(e){function a($,_e){if(e){var j=$.deletions;j===null?($.deletions=[_e],$.flags|=16):j.push(_e)}}function i($,_e){if(!e)return null;for(;_e!==null;)a($,_e),_e=_e.sibling;return null}function s($,_e){for($=new Map;_e!==null;)_e.key!==null?$.set(_e.key,_e):$.set(_e.index,_e),_e=_e.sibling;return $}function o($,_e){return $=Pg($,_e),$.index=0,$.sibling=null,$}function c($,_e,j){return $.index=j,e?(j=$.alternate,j!==null?(j=j.index,j<_e?($.flags|=2,_e):j):($.flags|=2,_e)):($.flags|=1048576,_e)}function d($){return e&&$.alternate===null&&($.flags|=2),$}function b($,_e,j,at){return _e===null||_e.tag!==6?(_e=Qg(j,$.mode,at),_e.return=$,_e):(_e=o(_e,j),_e.return=$,_e)}function g($,_e,j,at){var lt=j.type;return lt===ya?tt($,_e,j.props.children,at,j.key):_e!==null&&(_e.elementType===lt||typeof lt=="object"&&lt!==null&&lt.$$typeof===Ha&&Ng(lt)===_e.type)?(at=o(_e,j.props),at.ref=Lg($,_e,j),at.return=$,at):(at=Rg(j.type,j.key,j.props,null,$.mode,at),at.ref=Lg($,_e,j),at.return=$,at)}function _($,_e,j,at){return _e===null||_e.tag!==4||_e.stateNode.containerInfo!==j.containerInfo||_e.stateNode.implementation!==j.implementation?(_e=Sg(j,$.mode,at),_e.return=$,_e):(_e=o(_e,j.children||[]),_e.return=$,_e)}function tt($,_e,j,at,lt){return _e===null||_e.tag!==7?(_e=Tg(j,$.mode,at,lt),_e.return=$,_e):(_e=o(_e,j),_e.return=$,_e)}function it($,_e,j){if(typeof _e=="string"&&_e!==""||typeof _e=="number")return _e=Qg(""+_e,$.mode,j),_e.return=$,_e;if(typeof _e=="object"&&_e!==null){switch(_e.$$typeof){case va:return j=Rg(_e.type,_e.key,_e.props,null,$.mode,j),j.ref=Lg($,null,_e),j.return=$,j;case wa:return _e=Sg(_e,$.mode,j),_e.return=$,_e;case Ha:var at=_e._init;return it($,at(_e._payload),j)}if(eb(_e)||Ka(_e))return _e=Tg(_e,$.mode,j,null),_e.return=$,_e;Mg($,_e)}return null}function et($,_e,j,at){var lt=_e!==null?_e.key:null;if(typeof j=="string"&&j!==""||typeof j=="number")return lt!==null?null:b($,_e,""+j,at);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case va:return j.key===lt?g($,_e,j,at):null;case wa:return j.key===lt?_($,_e,j,at):null;case Ha:return lt=j._init,et($,_e,lt(j._payload),at)}if(eb(j)||Ka(j))return lt!==null?null:tt($,_e,j,at,null);Mg($,j)}return null}function st($,_e,j,at,lt){if(typeof at=="string"&&at!==""||typeof at=="number")return $=$.get(j)||null,b(_e,$,""+at,lt);if(typeof at=="object"&&at!==null){switch(at.$$typeof){case va:return $=$.get(at.key===null?j:at.key)||null,g(_e,$,at,lt);case wa:return $=$.get(at.key===null?j:at.key)||null,_(_e,$,at,lt);case Ha:var pt=at._init;return st($,_e,j,pt(at._payload),lt)}if(eb(at)||Ka(at))return $=$.get(j)||null,tt(_e,$,at,lt,null);Mg(_e,at)}return null}function nt($,_e,j,at){for(var lt=null,pt=null,ft=_e,mt=_e=0,vt=null;ft!==null&&mt<j.length;mt++){ft.index>mt?(vt=ft,ft=null):vt=ft.sibling;var _t=et($,ft,j[mt],at);if(_t===null){ft===null&&(ft=vt);break}e&&ft&&_t.alternate===null&&a($,ft),_e=c(_t,_e,mt),pt===null?lt=_t:pt.sibling=_t,pt=_t,ft=vt}if(mt===j.length)return i($,ft),I&&tg($,mt),lt;if(ft===null){for(;mt<j.length;mt++)ft=it($,j[mt],at),ft!==null&&(_e=c(ft,_e,mt),pt===null?lt=ft:pt.sibling=ft,pt=ft);return I&&tg($,mt),lt}for(ft=s($,ft);mt<j.length;mt++)vt=st(ft,$,mt,j[mt],at),vt!==null&&(e&&vt.alternate!==null&&ft.delete(vt.key===null?mt:vt.key),_e=c(vt,_e,mt),pt===null?lt=vt:pt.sibling=vt,pt=vt);return e&&ft.forEach(function(Et){return a($,Et)}),I&&tg($,mt),lt}function rt($,_e,j,at){var lt=Ka(j);if(typeof lt!="function")throw Error(p(150));if(j=lt.call(j),j==null)throw Error(p(151));for(var pt=lt=null,ft=_e,mt=_e=0,vt=null,_t=j.next();ft!==null&&!_t.done;mt++,_t=j.next()){ft.index>mt?(vt=ft,ft=null):vt=ft.sibling;var Et=et($,ft,_t.value,at);if(Et===null){ft===null&&(ft=vt);break}e&&ft&&Et.alternate===null&&a($,ft),_e=c(Et,_e,mt),pt===null?lt=Et:pt.sibling=Et,pt=Et,ft=vt}if(_t.done)return i($,ft),I&&tg($,mt),lt;if(ft===null){for(;!_t.done;mt++,_t=j.next())_t=it($,_t.value,at),_t!==null&&(_e=c(_t,_e,mt),pt===null?lt=_t:pt.sibling=_t,pt=_t);return I&&tg($,mt),lt}for(ft=s($,ft);!_t.done;mt++,_t=j.next())_t=st(ft,$,mt,_t.value,at),_t!==null&&(e&&_t.alternate!==null&&ft.delete(_t.key===null?mt:_t.key),_e=c(_t,_e,mt),pt===null?lt=_t:pt.sibling=_t,pt=_t);return e&&ft.forEach(function(gt){return a($,gt)}),I&&tg($,mt),lt}function ht($,_e,j,at){if(typeof j=="object"&&j!==null&&j.type===ya&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case va:e:{for(var lt=j.key,pt=_e;pt!==null;){if(pt.key===lt){if(lt=j.type,lt===ya){if(pt.tag===7){i($,pt.sibling),_e=o(pt,j.props.children),_e.return=$,$=_e;break e}}else if(pt.elementType===lt||typeof lt=="object"&&lt!==null&&lt.$$typeof===Ha&&Ng(lt)===pt.type){i($,pt.sibling),_e=o(pt,j.props),_e.ref=Lg($,pt,j),_e.return=$,$=_e;break e}i($,pt);break}else a($,pt);pt=pt.sibling}j.type===ya?(_e=Tg(j.props.children,$.mode,at,j.key),_e.return=$,$=_e):(at=Rg(j.type,j.key,j.props,null,$.mode,at),at.ref=Lg($,_e,j),at.return=$,$=at)}return d($);case wa:e:{for(pt=j.key;_e!==null;){if(_e.key===pt)if(_e.tag===4&&_e.stateNode.containerInfo===j.containerInfo&&_e.stateNode.implementation===j.implementation){i($,_e.sibling),_e=o(_e,j.children||[]),_e.return=$,$=_e;break e}else{i($,_e);break}else a($,_e);_e=_e.sibling}_e=Sg(j,$.mode,at),_e.return=$,$=_e}return d($);case Ha:return pt=j._init,ht($,_e,pt(j._payload),at)}if(eb(j))return nt($,_e,j,at);if(Ka(j))return rt($,_e,j,at);Mg($,j)}return typeof j=="string"&&j!==""||typeof j=="number"?(j=""+j,_e!==null&&_e.tag===6?(i($,_e.sibling),_e=o(_e,j),_e.return=$,$=_e):(i($,_e),_e=Qg(j,$.mode,at),_e.return=$,$=_e),d($)):i($,_e)}return ht}var Ug=Og(!0),Vg=Og(!1),Wg=Uf(null),Xg=null,Yg=null,Zg=null;function $g(){Zg=Yg=Xg=null}function ah(e){var a=Wg.current;E(Wg),e._currentValue=a}function bh(e,a,i){for(;e!==null;){var s=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,s!==null&&(s.childLanes|=a)):s!==null&&(s.childLanes&a)!==a&&(s.childLanes|=a),e===i)break;e=e.return}}function ch(e,a){Xg=e,Zg=Yg=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&a&&(dh=!0),e.firstContext=null)}function eh(e){var a=e._currentValue;if(Zg!==e)if(e={context:e,memoizedValue:a,next:null},Yg===null){if(Xg===null)throw Error(p(308));Yg=e,Xg.dependencies={lanes:0,firstContext:e}}else Yg=Yg.next=e;return a}var fh=null;function gh(e){fh===null?fh=[e]:fh.push(e)}function hh(e,a,i,s){var o=a.interleaved;return o===null?(i.next=i,gh(a)):(i.next=o.next,o.next=i),a.interleaved=i,ih(e,s)}function ih(e,a){e.lanes|=a;var i=e.alternate;for(i!==null&&(i.lanes|=a),i=e,e=e.return;e!==null;)e.childLanes|=a,i=e.alternate,i!==null&&(i.childLanes|=a),i=e,e=e.return;return i.tag===3?i.stateNode:null}var jh=!1;function kh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lh(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function mh(e,a){return{eventTime:e,lane:a,tag:0,payload:null,callback:null,next:null}}function nh(e,a,i){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,K&2){var o=s.pending;return o===null?a.next=a:(a.next=o.next,o.next=a),s.pending=a,ih(e,i)}return o=s.interleaved,o===null?(a.next=a,gh(s)):(a.next=o.next,o.next=a),s.interleaved=a,ih(e,i)}function oh(e,a,i){if(a=a.updateQueue,a!==null&&(a=a.shared,(i&4194240)!==0)){var s=a.lanes;s&=e.pendingLanes,i|=s,a.lanes=i,Cc(e,i)}}function ph(e,a){var i=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,i===s)){var o=null,c=null;if(i=i.firstBaseUpdate,i!==null){do{var d={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};c===null?o=c=d:c=c.next=d,i=i.next}while(i!==null);c===null?o=c=a:c=c.next=a}else o=c=a;i={baseState:s.baseState,firstBaseUpdate:o,lastBaseUpdate:c,shared:s.shared,effects:s.effects},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=a:e.next=a,i.lastBaseUpdate=a}function qh(e,a,i,s){var o=e.updateQueue;jh=!1;var c=o.firstBaseUpdate,d=o.lastBaseUpdate,b=o.shared.pending;if(b!==null){o.shared.pending=null;var g=b,_=g.next;g.next=null,d===null?c=_:d.next=_,d=g;var tt=e.alternate;tt!==null&&(tt=tt.updateQueue,b=tt.lastBaseUpdate,b!==d&&(b===null?tt.firstBaseUpdate=_:b.next=_,tt.lastBaseUpdate=g))}if(c!==null){var it=o.baseState;d=0,tt=_=g=null,b=c;do{var et=b.lane,st=b.eventTime;if((s&et)===et){tt!==null&&(tt=tt.next={eventTime:st,lane:0,tag:b.tag,payload:b.payload,callback:b.callback,next:null});e:{var nt=e,rt=b;switch(et=a,st=i,rt.tag){case 1:if(nt=rt.payload,typeof nt=="function"){it=nt.call(st,it,et);break e}it=nt;break e;case 3:nt.flags=nt.flags&-65537|128;case 0:if(nt=rt.payload,et=typeof nt=="function"?nt.call(st,it,et):nt,et==null)break e;it=A({},it,et);break e;case 2:jh=!0}}b.callback!==null&&b.lane!==0&&(e.flags|=64,et=o.effects,et===null?o.effects=[b]:et.push(b))}else st={eventTime:st,lane:et,tag:b.tag,payload:b.payload,callback:b.callback,next:null},tt===null?(_=tt=st,g=it):tt=tt.next=st,d|=et;if(b=b.next,b===null){if(b=o.shared.pending,b===null)break;et=b,b=et.next,et.next=null,o.lastBaseUpdate=et,o.shared.pending=null}}while(!0);if(tt===null&&(g=it),o.baseState=g,o.firstBaseUpdate=_,o.lastBaseUpdate=tt,a=o.shared.interleaved,a!==null){o=a;do d|=o.lane,o=o.next;while(o!==a)}else c===null&&(o.shared.lanes=0);rh|=d,e.lanes=d,e.memoizedState=it}}function sh(e,a,i){if(e=a.effects,a.effects=null,e!==null)for(a=0;a<e.length;a++){var s=e[a],o=s.callback;if(o!==null){if(s.callback=null,s=i,typeof o!="function")throw Error(p(191,o));o.call(s)}}}var th={},uh=Uf(th),vh=Uf(th),wh=Uf(th);function xh(e){if(e===th)throw Error(p(174));return e}function yh(e,a){switch(G(wh,a),G(vh,e),G(uh,th),e=a.nodeType,e){case 9:case 11:a=(a=a.documentElement)?a.namespaceURI:lb(null,"");break;default:e=e===8?a.parentNode:a,a=e.namespaceURI||null,e=e.tagName,a=lb(a,e)}E(uh),G(uh,a)}function zh(){E(uh),E(vh),E(wh)}function Ah(e){xh(wh.current);var a=xh(uh.current),i=lb(a,e.type);a!==i&&(G(vh,e),G(uh,i))}function Bh(e){vh.current===e&&(E(uh),E(vh))}var L=Uf(0);function Ch(e){for(var a=e;a!==null;){if(a.tag===13){var i=a.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if(a.flags&128)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var Dh=[];function Eh(){for(var e=0;e<Dh.length;e++)Dh[e]._workInProgressVersionPrimary=null;Dh.length=0}var Fh=ua.ReactCurrentDispatcher,Gh=ua.ReactCurrentBatchConfig,Hh=0,M=null,N=null,O=null,Ih=!1,Jh=!1,Kh=0,Lh=0;function P(){throw Error(p(321))}function Mh(e,a){if(a===null)return!1;for(var i=0;i<a.length&&i<e.length;i++)if(!He(e[i],a[i]))return!1;return!0}function Nh(e,a,i,s,o,c){if(Hh=c,M=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,Fh.current=e===null||e.memoizedState===null?Oh:Ph,e=i(s,o),Jh){c=0;do{if(Jh=!1,Kh=0,25<=c)throw Error(p(301));c+=1,O=N=null,a.updateQueue=null,Fh.current=Qh,e=i(s,o)}while(Jh)}if(Fh.current=Rh,a=N!==null&&N.next!==null,Hh=0,O=N=M=null,Ih=!1,a)throw Error(p(300));return e}function Sh(){var e=Kh!==0;return Kh=0,e}function Th(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return O===null?M.memoizedState=O=e:O=O.next=e,O}function Uh(){if(N===null){var e=M.alternate;e=e!==null?e.memoizedState:null}else e=N.next;var a=O===null?M.memoizedState:O.next;if(a!==null)O=a,N=e;else{if(e===null)throw Error(p(310));N=e,e={memoizedState:N.memoizedState,baseState:N.baseState,baseQueue:N.baseQueue,queue:N.queue,next:null},O===null?M.memoizedState=O=e:O=O.next=e}return O}function Vh(e,a){return typeof a=="function"?a(e):a}function Wh(e){var a=Uh(),i=a.queue;if(i===null)throw Error(p(311));i.lastRenderedReducer=e;var s=N,o=s.baseQueue,c=i.pending;if(c!==null){if(o!==null){var d=o.next;o.next=c.next,c.next=d}s.baseQueue=o=c,i.pending=null}if(o!==null){c=o.next,s=s.baseState;var b=d=null,g=null,_=c;do{var tt=_.lane;if((Hh&tt)===tt)g!==null&&(g=g.next={lane:0,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null}),s=_.hasEagerState?_.eagerState:e(s,_.action);else{var it={lane:tt,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null};g===null?(b=g=it,d=s):g=g.next=it,M.lanes|=tt,rh|=tt}_=_.next}while(_!==null&&_!==c);g===null?d=s:g.next=b,He(s,a.memoizedState)||(dh=!0),a.memoizedState=s,a.baseState=d,a.baseQueue=g,i.lastRenderedState=s}if(e=i.interleaved,e!==null){o=e;do c=o.lane,M.lanes|=c,rh|=c,o=o.next;while(o!==e)}else o===null&&(i.lanes=0);return[a.memoizedState,i.dispatch]}function Xh(e){var a=Uh(),i=a.queue;if(i===null)throw Error(p(311));i.lastRenderedReducer=e;var s=i.dispatch,o=i.pending,c=a.memoizedState;if(o!==null){i.pending=null;var d=o=o.next;do c=e(c,d.action),d=d.next;while(d!==o);He(c,a.memoizedState)||(dh=!0),a.memoizedState=c,a.baseQueue===null&&(a.baseState=c),i.lastRenderedState=c}return[c,s]}function Yh(){}function Zh(e,a){var i=M,s=Uh(),o=a(),c=!He(s.memoizedState,o);if(c&&(s.memoizedState=o,dh=!0),s=s.queue,$h(ai.bind(null,i,s,e),[e]),s.getSnapshot!==a||c||O!==null&&O.memoizedState.tag&1){if(i.flags|=2048,bi(9,ci.bind(null,i,s,o,a),void 0,null),Q===null)throw Error(p(349));Hh&30||di(i,a,o)}return o}function di(e,a,i){e.flags|=16384,e={getSnapshot:a,value:i},a=M.updateQueue,a===null?(a={lastEffect:null,stores:null},M.updateQueue=a,a.stores=[e]):(i=a.stores,i===null?a.stores=[e]:i.push(e))}function ci(e,a,i,s){a.value=i,a.getSnapshot=s,ei(a)&&fi(e)}function ai(e,a,i){return i(function(){ei(a)&&fi(e)})}function ei(e){var a=e.getSnapshot;e=e.value;try{var i=a();return!He(e,i)}catch{return!0}}function fi(e){var a=ih(e,1);a!==null&&gi(a,e,1,-1)}function hi(e){var a=Th();return typeof e=="function"&&(e=e()),a.memoizedState=a.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vh,lastRenderedState:e},a.queue=e,e=e.dispatch=ii.bind(null,M,e),[a.memoizedState,e]}function bi(e,a,i,s){return e={tag:e,create:a,destroy:i,deps:s,next:null},a=M.updateQueue,a===null?(a={lastEffect:null,stores:null},M.updateQueue=a,a.lastEffect=e.next=e):(i=a.lastEffect,i===null?a.lastEffect=e.next=e:(s=i.next,i.next=e,e.next=s,a.lastEffect=e)),e}function ji(){return Uh().memoizedState}function ki(e,a,i,s){var o=Th();M.flags|=e,o.memoizedState=bi(1|a,i,void 0,s===void 0?null:s)}function li(e,a,i,s){var o=Uh();s=s===void 0?null:s;var c=void 0;if(N!==null){var d=N.memoizedState;if(c=d.destroy,s!==null&&Mh(s,d.deps)){o.memoizedState=bi(a,i,c,s);return}}M.flags|=e,o.memoizedState=bi(1|a,i,c,s)}function mi(e,a){return ki(8390656,8,e,a)}function $h(e,a){return li(2048,8,e,a)}function ni(e,a){return li(4,2,e,a)}function oi(e,a){return li(4,4,e,a)}function pi(e,a){if(typeof a=="function")return e=e(),a(e),function(){a(null)};if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function qi(e,a,i){return i=i!=null?i.concat([e]):null,li(4,4,pi.bind(null,a,e),i)}function ri(){}function si(e,a){var i=Uh();a=a===void 0?null:a;var s=i.memoizedState;return s!==null&&a!==null&&Mh(a,s[1])?s[0]:(i.memoizedState=[e,a],e)}function ti(e,a){var i=Uh();a=a===void 0?null:a;var s=i.memoizedState;return s!==null&&a!==null&&Mh(a,s[1])?s[0]:(e=e(),i.memoizedState=[e,a],e)}function ui(e,a,i){return Hh&21?(He(i,a)||(i=yc(),M.lanes|=i,rh|=i,e.baseState=!0),a):(e.baseState&&(e.baseState=!1,dh=!0),e.memoizedState=i)}function vi(e,a){var i=C;C=i!==0&&4>i?i:4,e(!0);var s=Gh.transition;Gh.transition={};try{e(!1),a()}finally{C=i,Gh.transition=s}}function wi(){return Uh().memoizedState}function xi(e,a,i){var s=yi(e);if(i={lane:s,action:i,hasEagerState:!1,eagerState:null,next:null},zi(e))Ai(a,i);else if(i=hh(e,a,i,s),i!==null){var o=R();gi(i,e,s,o),Bi(i,a,s)}}function ii(e,a,i){var s=yi(e),o={lane:s,action:i,hasEagerState:!1,eagerState:null,next:null};if(zi(e))Ai(a,o);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=a.lastRenderedReducer,c!==null))try{var d=a.lastRenderedState,b=c(d,i);if(o.hasEagerState=!0,o.eagerState=b,He(b,d)){var g=a.interleaved;g===null?(o.next=o,gh(a)):(o.next=g.next,g.next=o),a.interleaved=o;return}}catch{}finally{}i=hh(e,a,o,s),i!==null&&(o=R(),gi(i,e,s,o),Bi(i,a,s))}}function zi(e){var a=e.alternate;return e===M||a!==null&&a===M}function Ai(e,a){Jh=Ih=!0;var i=e.pending;i===null?a.next=a:(a.next=i.next,i.next=a),e.pending=a}function Bi(e,a,i){if(i&4194240){var s=a.lanes;s&=e.pendingLanes,i|=s,a.lanes=i,Cc(e,i)}}var Rh={readContext:eh,useCallback:P,useContext:P,useEffect:P,useImperativeHandle:P,useInsertionEffect:P,useLayoutEffect:P,useMemo:P,useReducer:P,useRef:P,useState:P,useDebugValue:P,useDeferredValue:P,useTransition:P,useMutableSource:P,useSyncExternalStore:P,useId:P,unstable_isNewReconciler:!1},Oh={readContext:eh,useCallback:function(e,a){return Th().memoizedState=[e,a===void 0?null:a],e},useContext:eh,useEffect:mi,useImperativeHandle:function(e,a,i){return i=i!=null?i.concat([e]):null,ki(4194308,4,pi.bind(null,a,e),i)},useLayoutEffect:function(e,a){return ki(4194308,4,e,a)},useInsertionEffect:function(e,a){return ki(4,2,e,a)},useMemo:function(e,a){var i=Th();return a=a===void 0?null:a,e=e(),i.memoizedState=[e,a],e},useReducer:function(e,a,i){var s=Th();return a=i!==void 0?i(a):a,s.memoizedState=s.baseState=a,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},s.queue=e,e=e.dispatch=xi.bind(null,M,e),[s.memoizedState,e]},useRef:function(e){var a=Th();return e={current:e},a.memoizedState=e},useState:hi,useDebugValue:ri,useDeferredValue:function(e){return Th().memoizedState=e},useTransition:function(){var e=hi(!1),a=e[0];return e=vi.bind(null,e[1]),Th().memoizedState=e,[a,e]},useMutableSource:function(){},useSyncExternalStore:function(e,a,i){var s=M,o=Th();if(I){if(i===void 0)throw Error(p(407));i=i()}else{if(i=a(),Q===null)throw Error(p(349));Hh&30||di(s,a,i)}o.memoizedState=i;var c={value:i,getSnapshot:a};return o.queue=c,mi(ai.bind(null,s,c,e),[e]),s.flags|=2048,bi(9,ci.bind(null,s,c,i,a),void 0,null),i},useId:function(){var e=Th(),a=Q.identifierPrefix;if(I){var i=sg,s=rg;i=(s&~(1<<32-oc(s)-1)).toString(32)+i,a=":"+a+"R"+i,i=Kh++,0<i&&(a+="H"+i.toString(32)),a+=":"}else i=Lh++,a=":"+a+"r"+i.toString(32)+":";return e.memoizedState=a},unstable_isNewReconciler:!1},Ph={readContext:eh,useCallback:si,useContext:eh,useEffect:$h,useImperativeHandle:qi,useInsertionEffect:ni,useLayoutEffect:oi,useMemo:ti,useReducer:Wh,useRef:ji,useState:function(){return Wh(Vh)},useDebugValue:ri,useDeferredValue:function(e){var a=Uh();return ui(a,N.memoizedState,e)},useTransition:function(){var e=Wh(Vh)[0],a=Uh().memoizedState;return[e,a]},useMutableSource:Yh,useSyncExternalStore:Zh,useId:wi,unstable_isNewReconciler:!1},Qh={readContext:eh,useCallback:si,useContext:eh,useEffect:$h,useImperativeHandle:qi,useInsertionEffect:ni,useLayoutEffect:oi,useMemo:ti,useReducer:Xh,useRef:ji,useState:function(){return Xh(Vh)},useDebugValue:ri,useDeferredValue:function(e){var a=Uh();return N===null?a.memoizedState=e:ui(a,N.memoizedState,e)},useTransition:function(){var e=Xh(Vh)[0],a=Uh().memoizedState;return[e,a]},useMutableSource:Yh,useSyncExternalStore:Zh,useId:wi,unstable_isNewReconciler:!1};function Ci(e,a){if(e&&e.defaultProps){a=A({},a),e=e.defaultProps;for(var i in e)a[i]===void 0&&(a[i]=e[i]);return a}return a}function Di(e,a,i,s){a=e.memoizedState,i=i(s,a),i=i==null?a:A({},a,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var Ei={isMounted:function(e){return(e=e._reactInternals)?Vb(e)===e:!1},enqueueSetState:function(e,a,i){e=e._reactInternals;var s=R(),o=yi(e),c=mh(s,o);c.payload=a,i!=null&&(c.callback=i),a=nh(e,c,o),a!==null&&(gi(a,e,o,s),oh(a,e,o))},enqueueReplaceState:function(e,a,i){e=e._reactInternals;var s=R(),o=yi(e),c=mh(s,o);c.tag=1,c.payload=a,i!=null&&(c.callback=i),a=nh(e,c,o),a!==null&&(gi(a,e,o,s),oh(a,e,o))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var i=R(),s=yi(e),o=mh(i,s);o.tag=2,a!=null&&(o.callback=a),a=nh(e,o,s),a!==null&&(gi(a,e,s,i),oh(a,e,s))}};function Fi(e,a,i,s,o,c,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,c,d):a.prototype&&a.prototype.isPureReactComponent?!Ie(i,s)||!Ie(o,c):!0}function Gi(e,a,i){var s=!1,o=Vf,c=a.contextType;return typeof c=="object"&&c!==null?c=eh(c):(o=Zf(a)?Xf:H.current,s=a.contextTypes,c=(s=s!=null)?Yf(e,o):Vf),a=new a(i,c),e.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ei,e.stateNode=a,a._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=c),a}function Hi(e,a,i,s){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(i,s),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(i,s),a.state!==e&&Ei.enqueueReplaceState(a,a.state,null)}function Ii(e,a,i,s){var o=e.stateNode;o.props=i,o.state=e.memoizedState,o.refs={},kh(e);var c=a.contextType;typeof c=="object"&&c!==null?o.context=eh(c):(c=Zf(a)?Xf:H.current,o.context=Yf(e,c)),o.state=e.memoizedState,c=a.getDerivedStateFromProps,typeof c=="function"&&(Di(e,a,c,i),o.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(a=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),a!==o.state&&Ei.enqueueReplaceState(o,o.state,null),qh(e,i,o,s),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Ji(e,a){try{var i="",s=a;do i+=Pa(s),s=s.return;while(s);var o=i}catch(c){o=`
Error generating stack: `+c.message+`
`+c.stack}return{value:e,source:a,stack:o,digest:null}}function Ki(e,a,i){return{value:e,source:null,stack:i??null,digest:a??null}}function Li(e,a){try{console.error(a.value)}catch(i){setTimeout(function(){throw i})}}var Mi=typeof WeakMap=="function"?WeakMap:Map;function Ni(e,a,i){i=mh(-1,i),i.tag=3,i.payload={element:null};var s=a.value;return i.callback=function(){Oi||(Oi=!0,Pi=s),Li(e,a)},i}function Qi(e,a,i){i=mh(-1,i),i.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var o=a.value;i.payload=function(){return s(o)},i.callback=function(){Li(e,a)}}var c=e.stateNode;return c!==null&&typeof c.componentDidCatch=="function"&&(i.callback=function(){Li(e,a),typeof s!="function"&&(Ri===null?Ri=new Set([this]):Ri.add(this));var d=a.stack;this.componentDidCatch(a.value,{componentStack:d!==null?d:""})}),i}function Si(e,a,i){var s=e.pingCache;if(s===null){s=e.pingCache=new Mi;var o=new Set;s.set(a,o)}else o=s.get(a),o===void 0&&(o=new Set,s.set(a,o));o.has(i)||(o.add(i),e=Ti.bind(null,e,a,i),a.then(e,e))}function Ui(e){do{var a;if((a=e.tag===13)&&(a=e.memoizedState,a=a!==null?a.dehydrated!==null:!0),a)return e;e=e.return}while(e!==null);return null}function Vi(e,a,i,s,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===a?e.flags|=65536:(e.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(a=mh(-1,1),a.tag=2,nh(i,a,1))),i.lanes|=1),e)}var Wi=ua.ReactCurrentOwner,dh=!1;function Xi(e,a,i,s){a.child=e===null?Vg(a,null,i,s):Ug(a,e.child,i,s)}function Yi(e,a,i,s,o){i=i.render;var c=a.ref;return ch(a,o),s=Nh(e,a,i,s,c,o),i=Sh(),e!==null&&!dh?(a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~o,Zi(e,a,o)):(I&&i&&vg(a),a.flags|=1,Xi(e,a,s,o),a.child)}function $i(e,a,i,s,o){if(e===null){var c=i.type;return typeof c=="function"&&!aj(c)&&c.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(a.tag=15,a.type=c,bj(e,a,c,s,o)):(e=Rg(i.type,null,s,a,a.mode,o),e.ref=a.ref,e.return=a,a.child=e)}if(c=e.child,!(e.lanes&o)){var d=c.memoizedProps;if(i=i.compare,i=i!==null?i:Ie,i(d,s)&&e.ref===a.ref)return Zi(e,a,o)}return a.flags|=1,e=Pg(c,s),e.ref=a.ref,e.return=a,a.child=e}function bj(e,a,i,s,o){if(e!==null){var c=e.memoizedProps;if(Ie(c,s)&&e.ref===a.ref)if(dh=!1,a.pendingProps=s=c,(e.lanes&o)!==0)e.flags&131072&&(dh=!0);else return a.lanes=e.lanes,Zi(e,a,o)}return cj(e,a,i,s,o)}function dj(e,a,i){var s=a.pendingProps,o=s.children,c=e!==null?e.memoizedState:null;if(s.mode==="hidden")if(!(a.mode&1))a.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(ej,fj),fj|=i;else{if(!(i&1073741824))return e=c!==null?c.baseLanes|i:i,a.lanes=a.childLanes=1073741824,a.memoizedState={baseLanes:e,cachePool:null,transitions:null},a.updateQueue=null,G(ej,fj),fj|=e,null;a.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=c!==null?c.baseLanes:i,G(ej,fj),fj|=s}else c!==null?(s=c.baseLanes|i,a.memoizedState=null):s=i,G(ej,fj),fj|=s;return Xi(e,a,o,i),a.child}function gj(e,a){var i=a.ref;(e===null&&i!==null||e!==null&&e.ref!==i)&&(a.flags|=512,a.flags|=2097152)}function cj(e,a,i,s,o){var c=Zf(i)?Xf:H.current;return c=Yf(a,c),ch(a,o),i=Nh(e,a,i,s,c,o),s=Sh(),e!==null&&!dh?(a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~o,Zi(e,a,o)):(I&&s&&vg(a),a.flags|=1,Xi(e,a,i,o),a.child)}function hj(e,a,i,s,o){if(Zf(i)){var c=!0;cg(a)}else c=!1;if(ch(a,o),a.stateNode===null)ij(e,a),Gi(a,i,s),Ii(a,i,s,o),s=!0;else if(e===null){var d=a.stateNode,b=a.memoizedProps;d.props=b;var g=d.context,_=i.contextType;typeof _=="object"&&_!==null?_=eh(_):(_=Zf(i)?Xf:H.current,_=Yf(a,_));var tt=i.getDerivedStateFromProps,it=typeof tt=="function"||typeof d.getSnapshotBeforeUpdate=="function";it||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(b!==s||g!==_)&&Hi(a,d,s,_),jh=!1;var et=a.memoizedState;d.state=et,qh(a,s,d,o),g=a.memoizedState,b!==s||et!==g||Wf.current||jh?(typeof tt=="function"&&(Di(a,i,tt,s),g=a.memoizedState),(b=jh||Fi(a,i,b,s,et,g,_))?(it||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(a.flags|=4194308)):(typeof d.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=s,a.memoizedState=g),d.props=s,d.state=g,d.context=_,s=b):(typeof d.componentDidMount=="function"&&(a.flags|=4194308),s=!1)}else{d=a.stateNode,lh(e,a),b=a.memoizedProps,_=a.type===a.elementType?b:Ci(a.type,b),d.props=_,it=a.pendingProps,et=d.context,g=i.contextType,typeof g=="object"&&g!==null?g=eh(g):(g=Zf(i)?Xf:H.current,g=Yf(a,g));var st=i.getDerivedStateFromProps;(tt=typeof st=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(b!==it||et!==g)&&Hi(a,d,s,g),jh=!1,et=a.memoizedState,d.state=et,qh(a,s,d,o);var nt=a.memoizedState;b!==it||et!==nt||Wf.current||jh?(typeof st=="function"&&(Di(a,i,st,s),nt=a.memoizedState),(_=jh||Fi(a,i,_,s,et,nt,g)||!1)?(tt||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(s,nt,g),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(s,nt,g)),typeof d.componentDidUpdate=="function"&&(a.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof d.componentDidUpdate!="function"||b===e.memoizedProps&&et===e.memoizedState||(a.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&et===e.memoizedState||(a.flags|=1024),a.memoizedProps=s,a.memoizedState=nt),d.props=s,d.state=nt,d.context=g,s=_):(typeof d.componentDidUpdate!="function"||b===e.memoizedProps&&et===e.memoizedState||(a.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&et===e.memoizedState||(a.flags|=1024),s=!1)}return jj(e,a,i,s,c,o)}function jj(e,a,i,s,o,c){gj(e,a);var d=(a.flags&128)!==0;if(!s&&!d)return o&&dg(a,i,!1),Zi(e,a,c);s=a.stateNode,Wi.current=a;var b=d&&typeof i.getDerivedStateFromError!="function"?null:s.render();return a.flags|=1,e!==null&&d?(a.child=Ug(a,e.child,null,c),a.child=Ug(a,null,b,c)):Xi(e,a,b,c),a.memoizedState=s.state,o&&dg(a,i,!0),a.child}function kj(e){var a=e.stateNode;a.pendingContext?ag(e,a.pendingContext,a.pendingContext!==a.context):a.context&&ag(e,a.context,!1),yh(e,a.containerInfo)}function lj(e,a,i,s,o){return Ig(),Jg(o),a.flags|=256,Xi(e,a,i,s),a.child}var mj={dehydrated:null,treeContext:null,retryLane:0};function nj(e){return{baseLanes:e,cachePool:null,transitions:null}}function oj(e,a,i){var s=a.pendingProps,o=L.current,c=!1,d=(a.flags&128)!==0,b;if((b=d)||(b=e!==null&&e.memoizedState===null?!1:(o&2)!==0),b?(c=!0,a.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),G(L,o&1),e===null)return Eg(a),e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(a.mode&1?e.data==="$!"?a.lanes=8:a.lanes=1073741824:a.lanes=1,null):(d=s.children,e=s.fallback,c?(s=a.mode,c=a.child,d={mode:"hidden",children:d},!(s&1)&&c!==null?(c.childLanes=0,c.pendingProps=d):c=pj(d,s,0,null),e=Tg(e,s,i,null),c.return=a,e.return=a,c.sibling=e,a.child=c,a.child.memoizedState=nj(i),a.memoizedState=mj,e):qj(a,d));if(o=e.memoizedState,o!==null&&(b=o.dehydrated,b!==null))return rj(e,a,d,s,b,o,i);if(c){c=s.fallback,d=a.mode,o=e.child,b=o.sibling;var g={mode:"hidden",children:s.children};return!(d&1)&&a.child!==o?(s=a.child,s.childLanes=0,s.pendingProps=g,a.deletions=null):(s=Pg(o,g),s.subtreeFlags=o.subtreeFlags&14680064),b!==null?c=Pg(b,c):(c=Tg(c,d,i,null),c.flags|=2),c.return=a,s.return=a,s.sibling=c,a.child=s,s=c,c=a.child,d=e.child.memoizedState,d=d===null?nj(i):{baseLanes:d.baseLanes|i,cachePool:null,transitions:d.transitions},c.memoizedState=d,c.childLanes=e.childLanes&~i,a.memoizedState=mj,s}return c=e.child,e=c.sibling,s=Pg(c,{mode:"visible",children:s.children}),!(a.mode&1)&&(s.lanes=i),s.return=a,s.sibling=null,e!==null&&(i=a.deletions,i===null?(a.deletions=[e],a.flags|=16):i.push(e)),a.child=s,a.memoizedState=null,s}function qj(e,a){return a=pj({mode:"visible",children:a},e.mode,0,null),a.return=e,e.child=a}function sj(e,a,i,s){return s!==null&&Jg(s),Ug(a,e.child,null,i),e=qj(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function rj(e,a,i,s,o,c,d){if(i)return a.flags&256?(a.flags&=-257,s=Ki(Error(p(422))),sj(e,a,d,s)):a.memoizedState!==null?(a.child=e.child,a.flags|=128,null):(c=s.fallback,o=a.mode,s=pj({mode:"visible",children:s.children},o,0,null),c=Tg(c,o,d,null),c.flags|=2,s.return=a,c.return=a,s.sibling=c,a.child=s,a.mode&1&&Ug(a,e.child,null,d),a.child.memoizedState=nj(d),a.memoizedState=mj,c);if(!(a.mode&1))return sj(e,a,d,null);if(o.data==="$!"){if(s=o.nextSibling&&o.nextSibling.dataset,s)var b=s.dgst;return s=b,c=Error(p(419)),s=Ki(c,s,void 0),sj(e,a,d,s)}if(b=(d&e.childLanes)!==0,dh||b){if(s=Q,s!==null){switch(d&-d){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(s.suspendedLanes|d)?0:o,o!==0&&o!==c.retryLane&&(c.retryLane=o,ih(e,o),gi(s,e,o,-1))}return tj(),s=Ki(Error(p(421))),sj(e,a,d,s)}return o.data==="$?"?(a.flags|=128,a.child=e.child,a=uj.bind(null,e),o._reactRetry=a,null):(e=c.treeContext,yg=Lf(o.nextSibling),xg=a,I=!0,zg=null,e!==null&&(og[pg++]=rg,og[pg++]=sg,og[pg++]=qg,rg=e.id,sg=e.overflow,qg=a),a=qj(a,s.children),a.flags|=4096,a)}function vj(e,a,i){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a),bh(e.return,a,i)}function wj(e,a,i,s,o){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:s,tail:i,tailMode:o}:(c.isBackwards=a,c.rendering=null,c.renderingStartTime=0,c.last=s,c.tail=i,c.tailMode=o)}function xj(e,a,i){var s=a.pendingProps,o=s.revealOrder,c=s.tail;if(Xi(e,a,s.children,i),s=L.current,s&2)s=s&1|2,a.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&vj(e,i,a);else if(e.tag===19)vj(e,i,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break e;for(;e.sibling===null;){if(e.return===null||e.return===a)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(G(L,s),!(a.mode&1))a.memoizedState=null;else switch(o){case"forwards":for(i=a.child,o=null;i!==null;)e=i.alternate,e!==null&&Ch(e)===null&&(o=i),i=i.sibling;i=o,i===null?(o=a.child,a.child=null):(o=i.sibling,i.sibling=null),wj(a,!1,o,i,c);break;case"backwards":for(i=null,o=a.child,a.child=null;o!==null;){if(e=o.alternate,e!==null&&Ch(e)===null){a.child=o;break}e=o.sibling,o.sibling=i,i=o,o=e}wj(a,!0,i,null,c);break;case"together":wj(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function ij(e,a){!(a.mode&1)&&e!==null&&(e.alternate=null,a.alternate=null,a.flags|=2)}function Zi(e,a,i){if(e!==null&&(a.dependencies=e.dependencies),rh|=a.lanes,!(i&a.childLanes))return null;if(e!==null&&a.child!==e.child)throw Error(p(153));if(a.child!==null){for(e=a.child,i=Pg(e,e.pendingProps),a.child=i,i.return=a;e.sibling!==null;)e=e.sibling,i=i.sibling=Pg(e,e.pendingProps),i.return=a;i.sibling=null}return a.child}function yj(e,a,i){switch(a.tag){case 3:kj(a),Ig();break;case 5:Ah(a);break;case 1:Zf(a.type)&&cg(a);break;case 4:yh(a,a.stateNode.containerInfo);break;case 10:var s=a.type._context,o=a.memoizedProps.value;G(Wg,s._currentValue),s._currentValue=o;break;case 13:if(s=a.memoizedState,s!==null)return s.dehydrated!==null?(G(L,L.current&1),a.flags|=128,null):i&a.child.childLanes?oj(e,a,i):(G(L,L.current&1),e=Zi(e,a,i),e!==null?e.sibling:null);G(L,L.current&1);break;case 19:if(s=(i&a.childLanes)!==0,e.flags&128){if(s)return xj(e,a,i);a.flags|=128}if(o=a.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),G(L,L.current),s)break;return null;case 22:case 23:return a.lanes=0,dj(e,a,i)}return Zi(e,a,i)}var zj,Aj,Bj,Cj;zj=function(e,a){for(var i=a.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===a)break;for(;i.sibling===null;){if(i.return===null||i.return===a)return;i=i.return}i.sibling.return=i.return,i=i.sibling}};Aj=function(){};Bj=function(e,a,i,s){var o=e.memoizedProps;if(o!==s){e=a.stateNode,xh(uh.current);var c=null;switch(i){case"input":o=Ya(e,o),s=Ya(e,s),c=[];break;case"select":o=A({},o,{value:void 0}),s=A({},s,{value:void 0}),c=[];break;case"textarea":o=gb(e,o),s=gb(e,s),c=[];break;default:typeof o.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=Bf)}ub(i,s);var d;i=null;for(_ in o)if(!s.hasOwnProperty(_)&&o.hasOwnProperty(_)&&o[_]!=null)if(_==="style"){var b=o[_];for(d in b)b.hasOwnProperty(d)&&(i||(i={}),i[d]="")}else _!=="dangerouslySetInnerHTML"&&_!=="children"&&_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(ea.hasOwnProperty(_)?c||(c=[]):(c=c||[]).push(_,null));for(_ in s){var g=s[_];if(b=o!=null?o[_]:void 0,s.hasOwnProperty(_)&&g!==b&&(g!=null||b!=null))if(_==="style")if(b){for(d in b)!b.hasOwnProperty(d)||g&&g.hasOwnProperty(d)||(i||(i={}),i[d]="");for(d in g)g.hasOwnProperty(d)&&b[d]!==g[d]&&(i||(i={}),i[d]=g[d])}else i||(c||(c=[]),c.push(_,i)),i=g;else _==="dangerouslySetInnerHTML"?(g=g?g.__html:void 0,b=b?b.__html:void 0,g!=null&&b!==g&&(c=c||[]).push(_,g)):_==="children"?typeof g!="string"&&typeof g!="number"||(c=c||[]).push(_,""+g):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&(ea.hasOwnProperty(_)?(g!=null&&_==="onScroll"&&D("scroll",e),c||b===g||(c=[])):(c=c||[]).push(_,g))}i&&(c=c||[]).push("style",i);var _=c;(a.updateQueue=_)&&(a.flags|=4)}};Cj=function(e,a,i,s){i!==s&&(a.flags|=4)};function Dj(e,a){if(!I)switch(e.tailMode){case"hidden":a=e.tail;for(var i=null;a!==null;)a.alternate!==null&&(i=a),a=a.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function S(e){var a=e.alternate!==null&&e.alternate.child===e.child,i=0,s=0;if(a)for(var o=e.child;o!==null;)i|=o.lanes|o.childLanes,s|=o.subtreeFlags&14680064,s|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)i|=o.lanes|o.childLanes,s|=o.subtreeFlags,s|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=s,e.childLanes=i,a}function Ej(e,a,i){var s=a.pendingProps;switch(wg(a),a.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return S(a),null;case 1:return Zf(a.type)&&$f(),S(a),null;case 3:return s=a.stateNode,zh(),E(Wf),E(H),Eh(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(Gg(a)?a.flags|=4:e===null||e.memoizedState.isDehydrated&&!(a.flags&256)||(a.flags|=1024,zg!==null&&(Fj(zg),zg=null))),Aj(e,a),S(a),null;case 5:Bh(a);var o=xh(wh.current);if(i=a.type,e!==null&&a.stateNode!=null)Bj(e,a,i,s,o),e.ref!==a.ref&&(a.flags|=512,a.flags|=2097152);else{if(!s){if(a.stateNode===null)throw Error(p(166));return S(a),null}if(e=xh(uh.current),Gg(a)){s=a.stateNode,i=a.type;var c=a.memoizedProps;switch(s[Of]=a,s[Pf]=c,e=(a.mode&1)!==0,i){case"dialog":D("cancel",s),D("close",s);break;case"iframe":case"object":case"embed":D("load",s);break;case"video":case"audio":for(o=0;o<lf.length;o++)D(lf[o],s);break;case"source":D("error",s);break;case"img":case"image":case"link":D("error",s),D("load",s);break;case"details":D("toggle",s);break;case"input":Za(s,c),D("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!c.multiple},D("invalid",s);break;case"textarea":hb(s,c),D("invalid",s)}ub(i,c),o=null;for(var d in c)if(c.hasOwnProperty(d)){var b=c[d];d==="children"?typeof b=="string"?s.textContent!==b&&(c.suppressHydrationWarning!==!0&&Af(s.textContent,b,e),o=["children",b]):typeof b=="number"&&s.textContent!==""+b&&(c.suppressHydrationWarning!==!0&&Af(s.textContent,b,e),o=["children",""+b]):ea.hasOwnProperty(d)&&b!=null&&d==="onScroll"&&D("scroll",s)}switch(i){case"input":Va(s),db(s,c,!0);break;case"textarea":Va(s),jb(s);break;case"select":case"option":break;default:typeof c.onClick=="function"&&(s.onclick=Bf)}s=o,a.updateQueue=s,s!==null&&(a.flags|=4)}else{d=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=kb(i)),e==="http://www.w3.org/1999/xhtml"?i==="script"?(e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=d.createElement(i,{is:s.is}):(e=d.createElement(i),i==="select"&&(d=e,s.multiple?d.multiple=!0:s.size&&(d.size=s.size))):e=d.createElementNS(e,i),e[Of]=a,e[Pf]=s,zj(e,a,!1,!1),a.stateNode=e;e:{switch(d=vb(i,s),i){case"dialog":D("cancel",e),D("close",e),o=s;break;case"iframe":case"object":case"embed":D("load",e),o=s;break;case"video":case"audio":for(o=0;o<lf.length;o++)D(lf[o],e);o=s;break;case"source":D("error",e),o=s;break;case"img":case"image":case"link":D("error",e),D("load",e),o=s;break;case"details":D("toggle",e),o=s;break;case"input":Za(e,s),o=Ya(e,s),D("invalid",e);break;case"option":o=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},o=A({},s,{value:void 0}),D("invalid",e);break;case"textarea":hb(e,s),o=gb(e,s),D("invalid",e);break;default:o=s}ub(i,o),b=o;for(c in b)if(b.hasOwnProperty(c)){var g=b[c];c==="style"?sb(e,g):c==="dangerouslySetInnerHTML"?(g=g?g.__html:void 0,g!=null&&nb(e,g)):c==="children"?typeof g=="string"?(i!=="textarea"||g!=="")&&ob(e,g):typeof g=="number"&&ob(e,""+g):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ea.hasOwnProperty(c)?g!=null&&c==="onScroll"&&D("scroll",e):g!=null&&ta(e,c,g,d))}switch(i){case"input":Va(e),db(e,s,!1);break;case"textarea":Va(e),jb(e);break;case"option":s.value!=null&&e.setAttribute("value",""+Sa(s.value));break;case"select":e.multiple=!!s.multiple,c=s.value,c!=null?fb(e,!!s.multiple,c,!1):s.defaultValue!=null&&fb(e,!!s.multiple,s.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Bf)}switch(i){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(a.flags|=4)}a.ref!==null&&(a.flags|=512,a.flags|=2097152)}return S(a),null;case 6:if(e&&a.stateNode!=null)Cj(e,a,e.memoizedProps,s);else{if(typeof s!="string"&&a.stateNode===null)throw Error(p(166));if(i=xh(wh.current),xh(uh.current),Gg(a)){if(s=a.stateNode,i=a.memoizedProps,s[Of]=a,(c=s.nodeValue!==i)&&(e=xg,e!==null))switch(e.tag){case 3:Af(s.nodeValue,i,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Af(s.nodeValue,i,(e.mode&1)!==0)}c&&(a.flags|=4)}else s=(i.nodeType===9?i:i.ownerDocument).createTextNode(s),s[Of]=a,a.stateNode=s}return S(a),null;case 13:if(E(L),s=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(I&&yg!==null&&a.mode&1&&!(a.flags&128))Hg(),Ig(),a.flags|=98560,c=!1;else if(c=Gg(a),s!==null&&s.dehydrated!==null){if(e===null){if(!c)throw Error(p(318));if(c=a.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(p(317));c[Of]=a}else Ig(),!(a.flags&128)&&(a.memoizedState=null),a.flags|=4;S(a),c=!1}else zg!==null&&(Fj(zg),zg=null),c=!0;if(!c)return a.flags&65536?a:null}return a.flags&128?(a.lanes=i,a):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(a.child.flags|=8192,a.mode&1&&(e===null||L.current&1?T===0&&(T=3):tj())),a.updateQueue!==null&&(a.flags|=4),S(a),null);case 4:return zh(),Aj(e,a),e===null&&sf(a.stateNode.containerInfo),S(a),null;case 10:return ah(a.type._context),S(a),null;case 17:return Zf(a.type)&&$f(),S(a),null;case 19:if(E(L),c=a.memoizedState,c===null)return S(a),null;if(s=(a.flags&128)!==0,d=c.rendering,d===null)if(s)Dj(c,!1);else{if(T!==0||e!==null&&e.flags&128)for(e=a.child;e!==null;){if(d=Ch(e),d!==null){for(a.flags|=128,Dj(c,!1),s=d.updateQueue,s!==null&&(a.updateQueue=s,a.flags|=4),a.subtreeFlags=0,s=i,i=a.child;i!==null;)c=i,e=s,c.flags&=14680066,d=c.alternate,d===null?(c.childLanes=0,c.lanes=e,c.child=null,c.subtreeFlags=0,c.memoizedProps=null,c.memoizedState=null,c.updateQueue=null,c.dependencies=null,c.stateNode=null):(c.childLanes=d.childLanes,c.lanes=d.lanes,c.child=d.child,c.subtreeFlags=0,c.deletions=null,c.memoizedProps=d.memoizedProps,c.memoizedState=d.memoizedState,c.updateQueue=d.updateQueue,c.type=d.type,e=d.dependencies,c.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),i=i.sibling;return G(L,L.current&1|2),a.child}e=e.sibling}c.tail!==null&&B()>Gj&&(a.flags|=128,s=!0,Dj(c,!1),a.lanes=4194304)}else{if(!s)if(e=Ch(d),e!==null){if(a.flags|=128,s=!0,i=e.updateQueue,i!==null&&(a.updateQueue=i,a.flags|=4),Dj(c,!0),c.tail===null&&c.tailMode==="hidden"&&!d.alternate&&!I)return S(a),null}else 2*B()-c.renderingStartTime>Gj&&i!==1073741824&&(a.flags|=128,s=!0,Dj(c,!1),a.lanes=4194304);c.isBackwards?(d.sibling=a.child,a.child=d):(i=c.last,i!==null?i.sibling=d:a.child=d,c.last=d)}return c.tail!==null?(a=c.tail,c.rendering=a,c.tail=a.sibling,c.renderingStartTime=B(),a.sibling=null,i=L.current,G(L,s?i&1|2:i&1),a):(S(a),null);case 22:case 23:return Hj(),s=a.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(a.flags|=8192),s&&a.mode&1?fj&1073741824&&(S(a),a.subtreeFlags&6&&(a.flags|=8192)):S(a),null;case 24:return null;case 25:return null}throw Error(p(156,a.tag))}function Ij(e,a){switch(wg(a),a.tag){case 1:return Zf(a.type)&&$f(),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return zh(),E(Wf),E(H),Eh(),e=a.flags,e&65536&&!(e&128)?(a.flags=e&-65537|128,a):null;case 5:return Bh(a),null;case 13:if(E(L),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(p(340));Ig()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return E(L),null;case 4:return zh(),null;case 10:return ah(a.type._context),null;case 22:case 23:return Hj(),null;case 24:return null;default:return null}}var Jj=!1,U=!1,Kj=typeof WeakSet=="function"?WeakSet:Set,V=null;function Lj(e,a){var i=e.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(s){W(e,a,s)}else i.current=null}function Mj(e,a,i){try{i()}catch(s){W(e,a,s)}}var Nj=!1;function Oj(e,a){if(Cf=dd,e=Me(),Ne(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var s=i.getSelection&&i.getSelection();if(s&&s.rangeCount!==0){i=s.anchorNode;var o=s.anchorOffset,c=s.focusNode;s=s.focusOffset;try{i.nodeType,c.nodeType}catch{i=null;break e}var d=0,b=-1,g=-1,_=0,tt=0,it=e,et=null;t:for(;;){for(var st;it!==i||o!==0&&it.nodeType!==3||(b=d+o),it!==c||s!==0&&it.nodeType!==3||(g=d+s),it.nodeType===3&&(d+=it.nodeValue.length),(st=it.firstChild)!==null;)et=it,it=st;for(;;){if(it===e)break t;if(et===i&&++_===o&&(b=d),et===c&&++tt===s&&(g=d),(st=it.nextSibling)!==null)break;it=et,et=it.parentNode}it=st}i=b===-1||g===-1?null:{start:b,end:g}}else i=null}i=i||{start:0,end:0}}else i=null;for(Df={focusedElem:e,selectionRange:i},dd=!1,V=a;V!==null;)if(a=V,e=a.child,(a.subtreeFlags&1028)!==0&&e!==null)e.return=a,V=e;else for(;V!==null;){a=V;try{var nt=a.alternate;if(a.flags&1024)switch(a.tag){case 0:case 11:case 15:break;case 1:if(nt!==null){var rt=nt.memoizedProps,ht=nt.memoizedState,$=a.stateNode,_e=$.getSnapshotBeforeUpdate(a.elementType===a.type?rt:Ci(a.type,rt),ht);$.__reactInternalSnapshotBeforeUpdate=_e}break;case 3:var j=a.stateNode.containerInfo;j.nodeType===1?j.textContent="":j.nodeType===9&&j.documentElement&&j.removeChild(j.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(p(163))}}catch(at){W(a,a.return,at)}if(e=a.sibling,e!==null){e.return=a.return,V=e;break}V=a.return}return nt=Nj,Nj=!1,nt}function Pj(e,a,i){var s=a.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var o=s=s.next;do{if((o.tag&e)===e){var c=o.destroy;o.destroy=void 0,c!==void 0&&Mj(a,i,c)}o=o.next}while(o!==s)}}function Qj(e,a){if(a=a.updateQueue,a=a!==null?a.lastEffect:null,a!==null){var i=a=a.next;do{if((i.tag&e)===e){var s=i.create;i.destroy=s()}i=i.next}while(i!==a)}}function Rj(e){var a=e.ref;if(a!==null){var i=e.stateNode;switch(e.tag){case 5:e=i;break;default:e=i}typeof a=="function"?a(e):a.current=e}}function Sj(e){var a=e.alternate;a!==null&&(e.alternate=null,Sj(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&(delete a[Of],delete a[Pf],delete a[of],delete a[Qf],delete a[Rf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Tj(e){return e.tag===5||e.tag===3||e.tag===4}function Uj(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Tj(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vj(e,a,i){var s=e.tag;if(s===5||s===6)e=e.stateNode,a?i.nodeType===8?i.parentNode.insertBefore(e,a):i.insertBefore(e,a):(i.nodeType===8?(a=i.parentNode,a.insertBefore(e,i)):(a=i,a.appendChild(e)),i=i._reactRootContainer,i!=null||a.onclick!==null||(a.onclick=Bf));else if(s!==4&&(e=e.child,e!==null))for(Vj(e,a,i),e=e.sibling;e!==null;)Vj(e,a,i),e=e.sibling}function Wj(e,a,i){var s=e.tag;if(s===5||s===6)e=e.stateNode,a?i.insertBefore(e,a):i.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(Wj(e,a,i),e=e.sibling;e!==null;)Wj(e,a,i),e=e.sibling}var X=null,Xj=!1;function Yj(e,a,i){for(i=i.child;i!==null;)Zj(e,a,i),i=i.sibling}function Zj(e,a,i){if(lc&&typeof lc.onCommitFiberUnmount=="function")try{lc.onCommitFiberUnmount(kc,i)}catch{}switch(i.tag){case 5:U||Lj(i,a);case 6:var s=X,o=Xj;X=null,Yj(e,a,i),X=s,Xj=o,X!==null&&(Xj?(e=X,i=i.stateNode,e.nodeType===8?e.parentNode.removeChild(i):e.removeChild(i)):X.removeChild(i.stateNode));break;case 18:X!==null&&(Xj?(e=X,i=i.stateNode,e.nodeType===8?Kf(e.parentNode,i):e.nodeType===1&&Kf(e,i),bd(e)):Kf(X,i.stateNode));break;case 4:s=X,o=Xj,X=i.stateNode.containerInfo,Xj=!0,Yj(e,a,i),X=s,Xj=o;break;case 0:case 11:case 14:case 15:if(!U&&(s=i.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){o=s=s.next;do{var c=o,d=c.destroy;c=c.tag,d!==void 0&&(c&2||c&4)&&Mj(i,a,d),o=o.next}while(o!==s)}Yj(e,a,i);break;case 1:if(!U&&(Lj(i,a),s=i.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=i.memoizedProps,s.state=i.memoizedState,s.componentWillUnmount()}catch(b){W(i,a,b)}Yj(e,a,i);break;case 21:Yj(e,a,i);break;case 22:i.mode&1?(U=(s=U)||i.memoizedState!==null,Yj(e,a,i),U=s):Yj(e,a,i);break;default:Yj(e,a,i)}}function ak(e){var a=e.updateQueue;if(a!==null){e.updateQueue=null;var i=e.stateNode;i===null&&(i=e.stateNode=new Kj),a.forEach(function(s){var o=bk.bind(null,e,s);i.has(s)||(i.add(s),s.then(o,o))})}}function ck(e,a){var i=a.deletions;if(i!==null)for(var s=0;s<i.length;s++){var o=i[s];try{var c=e,d=a,b=d;e:for(;b!==null;){switch(b.tag){case 5:X=b.stateNode,Xj=!1;break e;case 3:X=b.stateNode.containerInfo,Xj=!0;break e;case 4:X=b.stateNode.containerInfo,Xj=!0;break e}b=b.return}if(X===null)throw Error(p(160));Zj(c,d,o),X=null,Xj=!1;var g=o.alternate;g!==null&&(g.return=null),o.return=null}catch(_){W(o,a,_)}}if(a.subtreeFlags&12854)for(a=a.child;a!==null;)dk(a,e),a=a.sibling}function dk(e,a){var i=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ck(a,e),ek(e),s&4){try{Pj(3,e,e.return),Qj(3,e)}catch(rt){W(e,e.return,rt)}try{Pj(5,e,e.return)}catch(rt){W(e,e.return,rt)}}break;case 1:ck(a,e),ek(e),s&512&&i!==null&&Lj(i,i.return);break;case 5:if(ck(a,e),ek(e),s&512&&i!==null&&Lj(i,i.return),e.flags&32){var o=e.stateNode;try{ob(o,"")}catch(rt){W(e,e.return,rt)}}if(s&4&&(o=e.stateNode,o!=null)){var c=e.memoizedProps,d=i!==null?i.memoizedProps:c,b=e.type,g=e.updateQueue;if(e.updateQueue=null,g!==null)try{b==="input"&&c.type==="radio"&&c.name!=null&&ab(o,c),vb(b,d);var _=vb(b,c);for(d=0;d<g.length;d+=2){var tt=g[d],it=g[d+1];tt==="style"?sb(o,it):tt==="dangerouslySetInnerHTML"?nb(o,it):tt==="children"?ob(o,it):ta(o,tt,it,_)}switch(b){case"input":bb(o,c);break;case"textarea":ib(o,c);break;case"select":var et=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!c.multiple;var st=c.value;st!=null?fb(o,!!c.multiple,st,!1):et!==!!c.multiple&&(c.defaultValue!=null?fb(o,!!c.multiple,c.defaultValue,!0):fb(o,!!c.multiple,c.multiple?[]:"",!1))}o[Pf]=c}catch(rt){W(e,e.return,rt)}}break;case 6:if(ck(a,e),ek(e),s&4){if(e.stateNode===null)throw Error(p(162));o=e.stateNode,c=e.memoizedProps;try{o.nodeValue=c}catch(rt){W(e,e.return,rt)}}break;case 3:if(ck(a,e),ek(e),s&4&&i!==null&&i.memoizedState.isDehydrated)try{bd(a.containerInfo)}catch(rt){W(e,e.return,rt)}break;case 4:ck(a,e),ek(e);break;case 13:ck(a,e),ek(e),o=e.child,o.flags&8192&&(c=o.memoizedState!==null,o.stateNode.isHidden=c,!c||o.alternate!==null&&o.alternate.memoizedState!==null||(fk=B())),s&4&&ak(e);break;case 22:if(tt=i!==null&&i.memoizedState!==null,e.mode&1?(U=(_=U)||tt,ck(a,e),U=_):ck(a,e),ek(e),s&8192){if(_=e.memoizedState!==null,(e.stateNode.isHidden=_)&&!tt&&e.mode&1)for(V=e,tt=e.child;tt!==null;){for(it=V=tt;V!==null;){switch(et=V,st=et.child,et.tag){case 0:case 11:case 14:case 15:Pj(4,et,et.return);break;case 1:Lj(et,et.return);var nt=et.stateNode;if(typeof nt.componentWillUnmount=="function"){s=et,i=et.return;try{a=s,nt.props=a.memoizedProps,nt.state=a.memoizedState,nt.componentWillUnmount()}catch(rt){W(s,i,rt)}}break;case 5:Lj(et,et.return);break;case 22:if(et.memoizedState!==null){gk(it);continue}}st!==null?(st.return=et,V=st):gk(it)}tt=tt.sibling}e:for(tt=null,it=e;;){if(it.tag===5){if(tt===null){tt=it;try{o=it.stateNode,_?(c=o.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none"):(b=it.stateNode,g=it.memoizedProps.style,d=g!=null&&g.hasOwnProperty("display")?g.display:null,b.style.display=rb("display",d))}catch(rt){W(e,e.return,rt)}}}else if(it.tag===6){if(tt===null)try{it.stateNode.nodeValue=_?"":it.memoizedProps}catch(rt){W(e,e.return,rt)}}else if((it.tag!==22&&it.tag!==23||it.memoizedState===null||it===e)&&it.child!==null){it.child.return=it,it=it.child;continue}if(it===e)break e;for(;it.sibling===null;){if(it.return===null||it.return===e)break e;tt===it&&(tt=null),it=it.return}tt===it&&(tt=null),it.sibling.return=it.return,it=it.sibling}}break;case 19:ck(a,e),ek(e),s&4&&ak(e);break;case 21:break;default:ck(a,e),ek(e)}}function ek(e){var a=e.flags;if(a&2){try{e:{for(var i=e.return;i!==null;){if(Tj(i)){var s=i;break e}i=i.return}throw Error(p(160))}switch(s.tag){case 5:var o=s.stateNode;s.flags&32&&(ob(o,""),s.flags&=-33);var c=Uj(e);Wj(e,c,o);break;case 3:case 4:var d=s.stateNode.containerInfo,b=Uj(e);Vj(e,b,d);break;default:throw Error(p(161))}}catch(g){W(e,e.return,g)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function hk(e,a,i){V=e,ik(e)}function ik(e,a,i){for(var s=(e.mode&1)!==0;V!==null;){var o=V,c=o.child;if(o.tag===22&&s){var d=o.memoizedState!==null||Jj;if(!d){var b=o.alternate,g=b!==null&&b.memoizedState!==null||U;b=Jj;var _=U;if(Jj=d,(U=g)&&!_)for(V=o;V!==null;)d=V,g=d.child,d.tag===22&&d.memoizedState!==null?jk(o):g!==null?(g.return=d,V=g):jk(o);for(;c!==null;)V=c,ik(c),c=c.sibling;V=o,Jj=b,U=_}kk(e)}else o.subtreeFlags&8772&&c!==null?(c.return=o,V=c):kk(e)}}function kk(e){for(;V!==null;){var a=V;if(a.flags&8772){var i=a.alternate;try{if(a.flags&8772)switch(a.tag){case 0:case 11:case 15:U||Qj(5,a);break;case 1:var s=a.stateNode;if(a.flags&4&&!U)if(i===null)s.componentDidMount();else{var o=a.elementType===a.type?i.memoizedProps:Ci(a.type,i.memoizedProps);s.componentDidUpdate(o,i.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var c=a.updateQueue;c!==null&&sh(a,c,s);break;case 3:var d=a.updateQueue;if(d!==null){if(i=null,a.child!==null)switch(a.child.tag){case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}sh(a,d,i)}break;case 5:var b=a.stateNode;if(i===null&&a.flags&4){i=b;var g=a.memoizedProps;switch(a.type){case"button":case"input":case"select":case"textarea":g.autoFocus&&i.focus();break;case"img":g.src&&(i.src=g.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(a.memoizedState===null){var _=a.alternate;if(_!==null){var tt=_.memoizedState;if(tt!==null){var it=tt.dehydrated;it!==null&&bd(it)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(p(163))}U||a.flags&512&&Rj(a)}catch(et){W(a,a.return,et)}}if(a===e){V=null;break}if(i=a.sibling,i!==null){i.return=a.return,V=i;break}V=a.return}}function gk(e){for(;V!==null;){var a=V;if(a===e){V=null;break}var i=a.sibling;if(i!==null){i.return=a.return,V=i;break}V=a.return}}function jk(e){for(;V!==null;){var a=V;try{switch(a.tag){case 0:case 11:case 15:var i=a.return;try{Qj(4,a)}catch(g){W(a,i,g)}break;case 1:var s=a.stateNode;if(typeof s.componentDidMount=="function"){var o=a.return;try{s.componentDidMount()}catch(g){W(a,o,g)}}var c=a.return;try{Rj(a)}catch(g){W(a,c,g)}break;case 5:var d=a.return;try{Rj(a)}catch(g){W(a,d,g)}}}catch(g){W(a,a.return,g)}if(a===e){V=null;break}var b=a.sibling;if(b!==null){b.return=a.return,V=b;break}V=a.return}}var lk=Math.ceil,mk=ua.ReactCurrentDispatcher,nk=ua.ReactCurrentOwner,ok=ua.ReactCurrentBatchConfig,K=0,Q=null,Y=null,Z=0,fj=0,ej=Uf(0),T=0,pk=null,rh=0,qk=0,rk=0,sk=null,tk=null,fk=0,Gj=1/0,uk=null,Oi=!1,Pi=null,Ri=null,vk=!1,wk=null,xk=0,yk=0,zk=null,Ak=-1,Bk=0;function R(){return K&6?B():Ak!==-1?Ak:Ak=B()}function yi(e){return e.mode&1?K&2&&Z!==0?Z&-Z:Kg.transition!==null?(Bk===0&&(Bk=yc()),Bk):(e=C,e!==0||(e=window.event,e=e===void 0?16:jd(e.type)),e):1}function gi(e,a,i,s){if(50<yk)throw yk=0,zk=null,Error(p(185));Ac(e,i,s),(!(K&2)||e!==Q)&&(e===Q&&(!(K&2)&&(qk|=i),T===4&&Ck(e,Z)),Dk(e,s),i===1&&K===0&&!(a.mode&1)&&(Gj=B()+500,fg&&jg()))}function Dk(e,a){var i=e.callbackNode;wc(e,a);var s=uc(e,e===Q?Z:0);if(s===0)i!==null&&bc(i),e.callbackNode=null,e.callbackPriority=0;else if(a=s&-s,e.callbackPriority!==a){if(i!=null&&bc(i),a===1)e.tag===0?ig(Ek.bind(null,e)):hg(Ek.bind(null,e)),Jf(function(){!(K&6)&&jg()}),i=null;else{switch(Dc(s)){case 1:i=fc;break;case 4:i=gc;break;case 16:i=hc;break;case 536870912:i=jc;break;default:i=hc}i=Fk(i,Gk.bind(null,e))}e.callbackPriority=a,e.callbackNode=i}}function Gk(e,a){if(Ak=-1,Bk=0,K&6)throw Error(p(327));var i=e.callbackNode;if(Hk()&&e.callbackNode!==i)return null;var s=uc(e,e===Q?Z:0);if(s===0)return null;if(s&30||s&e.expiredLanes||a)a=Ik(e,s);else{a=s;var o=K;K|=2;var c=Jk();(Q!==e||Z!==a)&&(uk=null,Gj=B()+500,Kk(e,a));do try{Lk();break}catch(b){Mk(e,b)}while(!0);$g(),mk.current=c,K=o,Y!==null?a=0:(Q=null,Z=0,a=T)}if(a!==0){if(a===2&&(o=xc(e),o!==0&&(s=o,a=Nk(e,o))),a===1)throw i=pk,Kk(e,0),Ck(e,s),Dk(e,B()),i;if(a===6)Ck(e,s);else{if(o=e.current.alternate,!(s&30)&&!Ok(o)&&(a=Ik(e,s),a===2&&(c=xc(e),c!==0&&(s=c,a=Nk(e,c))),a===1))throw i=pk,Kk(e,0),Ck(e,s),Dk(e,B()),i;switch(e.finishedWork=o,e.finishedLanes=s,a){case 0:case 1:throw Error(p(345));case 2:Pk(e,tk,uk);break;case 3:if(Ck(e,s),(s&130023424)===s&&(a=fk+500-B(),10<a)){if(uc(e,0)!==0)break;if(o=e.suspendedLanes,(o&s)!==s){R(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ff(Pk.bind(null,e,tk,uk),a);break}Pk(e,tk,uk);break;case 4:if(Ck(e,s),(s&4194240)===s)break;for(a=e.eventTimes,o=-1;0<s;){var d=31-oc(s);c=1<<d,d=a[d],d>o&&(o=d),s&=~c}if(s=o,s=B()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*lk(s/1960))-s,10<s){e.timeoutHandle=Ff(Pk.bind(null,e,tk,uk),s);break}Pk(e,tk,uk);break;case 5:Pk(e,tk,uk);break;default:throw Error(p(329))}}}return Dk(e,B()),e.callbackNode===i?Gk.bind(null,e):null}function Nk(e,a){var i=sk;return e.current.memoizedState.isDehydrated&&(Kk(e,a).flags|=256),e=Ik(e,a),e!==2&&(a=tk,tk=i,a!==null&&Fj(a)),e}function Fj(e){tk===null?tk=e:tk.push.apply(tk,e)}function Ok(e){for(var a=e;;){if(a.flags&16384){var i=a.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var s=0;s<i.length;s++){var o=i[s],c=o.getSnapshot;o=o.value;try{if(!He(c(),o))return!1}catch{return!1}}}if(i=a.child,a.subtreeFlags&16384&&i!==null)i.return=a,a=i;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function Ck(e,a){for(a&=~rk,a&=~qk,e.suspendedLanes|=a,e.pingedLanes&=~a,e=e.expirationTimes;0<a;){var i=31-oc(a),s=1<<i;e[i]=-1,a&=~s}}function Ek(e){if(K&6)throw Error(p(327));Hk();var a=uc(e,0);if(!(a&1))return Dk(e,B()),null;var i=Ik(e,a);if(e.tag!==0&&i===2){var s=xc(e);s!==0&&(a=s,i=Nk(e,s))}if(i===1)throw i=pk,Kk(e,0),Ck(e,a),Dk(e,B()),i;if(i===6)throw Error(p(345));return e.finishedWork=e.current.alternate,e.finishedLanes=a,Pk(e,tk,uk),Dk(e,B()),null}function Qk(e,a){var i=K;K|=1;try{return e(a)}finally{K=i,K===0&&(Gj=B()+500,fg&&jg())}}function Rk(e){wk!==null&&wk.tag===0&&!(K&6)&&Hk();var a=K;K|=1;var i=ok.transition,s=C;try{if(ok.transition=null,C=1,e)return e()}finally{C=s,ok.transition=i,K=a,!(K&6)&&jg()}}function Hj(){fj=ej.current,E(ej)}function Kk(e,a){e.finishedWork=null,e.finishedLanes=0;var i=e.timeoutHandle;if(i!==-1&&(e.timeoutHandle=-1,Gf(i)),Y!==null)for(i=Y.return;i!==null;){var s=i;switch(wg(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&$f();break;case 3:zh(),E(Wf),E(H),Eh();break;case 5:Bh(s);break;case 4:zh();break;case 13:E(L);break;case 19:E(L);break;case 10:ah(s.type._context);break;case 22:case 23:Hj()}i=i.return}if(Q=e,Y=e=Pg(e.current,null),Z=fj=a,T=0,pk=null,rk=qk=rh=0,tk=sk=null,fh!==null){for(a=0;a<fh.length;a++)if(i=fh[a],s=i.interleaved,s!==null){i.interleaved=null;var o=s.next,c=i.pending;if(c!==null){var d=c.next;c.next=o,s.next=d}i.pending=s}fh=null}return e}function Mk(e,a){do{var i=Y;try{if($g(),Fh.current=Rh,Ih){for(var s=M.memoizedState;s!==null;){var o=s.queue;o!==null&&(o.pending=null),s=s.next}Ih=!1}if(Hh=0,O=N=M=null,Jh=!1,Kh=0,nk.current=null,i===null||i.return===null){T=1,pk=a,Y=null;break}e:{var c=e,d=i.return,b=i,g=a;if(a=Z,b.flags|=32768,g!==null&&typeof g=="object"&&typeof g.then=="function"){var _=g,tt=b,it=tt.tag;if(!(tt.mode&1)&&(it===0||it===11||it===15)){var et=tt.alternate;et?(tt.updateQueue=et.updateQueue,tt.memoizedState=et.memoizedState,tt.lanes=et.lanes):(tt.updateQueue=null,tt.memoizedState=null)}var st=Ui(d);if(st!==null){st.flags&=-257,Vi(st,d,b,c,a),st.mode&1&&Si(c,_,a),a=st,g=_;var nt=a.updateQueue;if(nt===null){var rt=new Set;rt.add(g),a.updateQueue=rt}else nt.add(g);break e}else{if(!(a&1)){Si(c,_,a),tj();break e}g=Error(p(426))}}else if(I&&b.mode&1){var ht=Ui(d);if(ht!==null){!(ht.flags&65536)&&(ht.flags|=256),Vi(ht,d,b,c,a),Jg(Ji(g,b));break e}}c=g=Ji(g,b),T!==4&&(T=2),sk===null?sk=[c]:sk.push(c),c=d;do{switch(c.tag){case 3:c.flags|=65536,a&=-a,c.lanes|=a;var $=Ni(c,g,a);ph(c,$);break e;case 1:b=g;var _e=c.type,j=c.stateNode;if(!(c.flags&128)&&(typeof _e.getDerivedStateFromError=="function"||j!==null&&typeof j.componentDidCatch=="function"&&(Ri===null||!Ri.has(j)))){c.flags|=65536,a&=-a,c.lanes|=a;var at=Qi(c,b,a);ph(c,at);break e}}c=c.return}while(c!==null)}Sk(i)}catch(lt){a=lt,Y===i&&i!==null&&(Y=i=i.return);continue}break}while(!0)}function Jk(){var e=mk.current;return mk.current=Rh,e===null?Rh:e}function tj(){(T===0||T===3||T===2)&&(T=4),Q===null||!(rh&268435455)&&!(qk&268435455)||Ck(Q,Z)}function Ik(e,a){var i=K;K|=2;var s=Jk();(Q!==e||Z!==a)&&(uk=null,Kk(e,a));do try{Tk();break}catch(o){Mk(e,o)}while(!0);if($g(),K=i,mk.current=s,Y!==null)throw Error(p(261));return Q=null,Z=0,T}function Tk(){for(;Y!==null;)Uk(Y)}function Lk(){for(;Y!==null&&!cc();)Uk(Y)}function Uk(e){var a=Vk(e.alternate,e,fj);e.memoizedProps=e.pendingProps,a===null?Sk(e):Y=a,nk.current=null}function Sk(e){var a=e;do{var i=a.alternate;if(e=a.return,a.flags&32768){if(i=Ij(i,a),i!==null){i.flags&=32767,Y=i;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{T=6,Y=null;return}}else if(i=Ej(i,a,fj),i!==null){Y=i;return}if(a=a.sibling,a!==null){Y=a;return}Y=a=e}while(a!==null);T===0&&(T=5)}function Pk(e,a,i){var s=C,o=ok.transition;try{ok.transition=null,C=1,Wk(e,a,i,s)}finally{ok.transition=o,C=s}return null}function Wk(e,a,i,s){do Hk();while(wk!==null);if(K&6)throw Error(p(327));i=e.finishedWork;var o=e.finishedLanes;if(i===null)return null;if(e.finishedWork=null,e.finishedLanes=0,i===e.current)throw Error(p(177));e.callbackNode=null,e.callbackPriority=0;var c=i.lanes|i.childLanes;if(Bc(e,c),e===Q&&(Y=Q=null,Z=0),!(i.subtreeFlags&2064)&&!(i.flags&2064)||vk||(vk=!0,Fk(hc,function(){return Hk(),null})),c=(i.flags&15990)!==0,i.subtreeFlags&15990||c){c=ok.transition,ok.transition=null;var d=C;C=1;var b=K;K|=4,nk.current=null,Oj(e,i),dk(i,e),Oe(Df),dd=!!Cf,Df=Cf=null,e.current=i,hk(i),dc(),K=b,C=d,ok.transition=c}else e.current=i;if(vk&&(vk=!1,wk=e,xk=o),c=e.pendingLanes,c===0&&(Ri=null),mc(i.stateNode),Dk(e,B()),a!==null)for(s=e.onRecoverableError,i=0;i<a.length;i++)o=a[i],s(o.value,{componentStack:o.stack,digest:o.digest});if(Oi)throw Oi=!1,e=Pi,Pi=null,e;return xk&1&&e.tag!==0&&Hk(),c=e.pendingLanes,c&1?e===zk?yk++:(yk=0,zk=e):yk=0,jg(),null}function Hk(){if(wk!==null){var e=Dc(xk),a=ok.transition,i=C;try{if(ok.transition=null,C=16>e?16:e,wk===null)var s=!1;else{if(e=wk,wk=null,xk=0,K&6)throw Error(p(331));var o=K;for(K|=4,V=e.current;V!==null;){var c=V,d=c.child;if(V.flags&16){var b=c.deletions;if(b!==null){for(var g=0;g<b.length;g++){var _=b[g];for(V=_;V!==null;){var tt=V;switch(tt.tag){case 0:case 11:case 15:Pj(8,tt,c)}var it=tt.child;if(it!==null)it.return=tt,V=it;else for(;V!==null;){tt=V;var et=tt.sibling,st=tt.return;if(Sj(tt),tt===_){V=null;break}if(et!==null){et.return=st,V=et;break}V=st}}}var nt=c.alternate;if(nt!==null){var rt=nt.child;if(rt!==null){nt.child=null;do{var ht=rt.sibling;rt.sibling=null,rt=ht}while(rt!==null)}}V=c}}if(c.subtreeFlags&2064&&d!==null)d.return=c,V=d;else e:for(;V!==null;){if(c=V,c.flags&2048)switch(c.tag){case 0:case 11:case 15:Pj(9,c,c.return)}var $=c.sibling;if($!==null){$.return=c.return,V=$;break e}V=c.return}}var _e=e.current;for(V=_e;V!==null;){d=V;var j=d.child;if(d.subtreeFlags&2064&&j!==null)j.return=d,V=j;else e:for(d=_e;V!==null;){if(b=V,b.flags&2048)try{switch(b.tag){case 0:case 11:case 15:Qj(9,b)}}catch(lt){W(b,b.return,lt)}if(b===d){V=null;break e}var at=b.sibling;if(at!==null){at.return=b.return,V=at;break e}V=b.return}}if(K=o,jg(),lc&&typeof lc.onPostCommitFiberRoot=="function")try{lc.onPostCommitFiberRoot(kc,e)}catch{}s=!0}return s}finally{C=i,ok.transition=a}}return!1}function Xk(e,a,i){a=Ji(i,a),a=Ni(e,a,1),e=nh(e,a,1),a=R(),e!==null&&(Ac(e,1,a),Dk(e,a))}function W(e,a,i){if(e.tag===3)Xk(e,e,i);else for(;a!==null;){if(a.tag===3){Xk(a,e,i);break}else if(a.tag===1){var s=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Ri===null||!Ri.has(s))){e=Ji(i,e),e=Qi(a,e,1),a=nh(a,e,1),e=R(),a!==null&&(Ac(a,1,e),Dk(a,e));break}}a=a.return}}function Ti(e,a,i){var s=e.pingCache;s!==null&&s.delete(a),a=R(),e.pingedLanes|=e.suspendedLanes&i,Q===e&&(Z&i)===i&&(T===4||T===3&&(Z&130023424)===Z&&500>B()-fk?Kk(e,0):rk|=i),Dk(e,a)}function Yk(e,a){a===0&&(e.mode&1?(a=sc,sc<<=1,!(sc&130023424)&&(sc=4194304)):a=1);var i=R();e=ih(e,a),e!==null&&(Ac(e,a,i),Dk(e,i))}function uj(e){var a=e.memoizedState,i=0;a!==null&&(i=a.retryLane),Yk(e,i)}function bk(e,a){var i=0;switch(e.tag){case 13:var s=e.stateNode,o=e.memoizedState;o!==null&&(i=o.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(p(314))}s!==null&&s.delete(a),Yk(e,i)}var Vk;Vk=function(e,a,i){if(e!==null)if(e.memoizedProps!==a.pendingProps||Wf.current)dh=!0;else{if(!(e.lanes&i)&&!(a.flags&128))return dh=!1,yj(e,a,i);dh=!!(e.flags&131072)}else dh=!1,I&&a.flags&1048576&&ug(a,ng,a.index);switch(a.lanes=0,a.tag){case 2:var s=a.type;ij(e,a),e=a.pendingProps;var o=Yf(a,H.current);ch(a,i),o=Nh(null,a,s,e,o,i);var c=Sh();return a.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(a.tag=1,a.memoizedState=null,a.updateQueue=null,Zf(s)?(c=!0,cg(a)):c=!1,a.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,kh(a),o.updater=Ei,a.stateNode=o,o._reactInternals=a,Ii(a,s,e,i),a=jj(null,a,s,!0,c,i)):(a.tag=0,I&&c&&vg(a),Xi(null,a,o,i),a=a.child),a;case 16:s=a.elementType;e:{switch(ij(e,a),e=a.pendingProps,o=s._init,s=o(s._payload),a.type=s,o=a.tag=Zk(s),e=Ci(s,e),o){case 0:a=cj(null,a,s,e,i);break e;case 1:a=hj(null,a,s,e,i);break e;case 11:a=Yi(null,a,s,e,i);break e;case 14:a=$i(null,a,s,Ci(s.type,e),i);break e}throw Error(p(306,s,""))}return a;case 0:return s=a.type,o=a.pendingProps,o=a.elementType===s?o:Ci(s,o),cj(e,a,s,o,i);case 1:return s=a.type,o=a.pendingProps,o=a.elementType===s?o:Ci(s,o),hj(e,a,s,o,i);case 3:e:{if(kj(a),e===null)throw Error(p(387));s=a.pendingProps,c=a.memoizedState,o=c.element,lh(e,a),qh(a,s,null,i);var d=a.memoizedState;if(s=d.element,c.isDehydrated)if(c={element:s,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},a.updateQueue.baseState=c,a.memoizedState=c,a.flags&256){o=Ji(Error(p(423)),a),a=lj(e,a,s,i,o);break e}else if(s!==o){o=Ji(Error(p(424)),a),a=lj(e,a,s,i,o);break e}else for(yg=Lf(a.stateNode.containerInfo.firstChild),xg=a,I=!0,zg=null,i=Vg(a,null,s,i),a.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(Ig(),s===o){a=Zi(e,a,i);break e}Xi(e,a,s,i)}a=a.child}return a;case 5:return Ah(a),e===null&&Eg(a),s=a.type,o=a.pendingProps,c=e!==null?e.memoizedProps:null,d=o.children,Ef(s,o)?d=null:c!==null&&Ef(s,c)&&(a.flags|=32),gj(e,a),Xi(e,a,d,i),a.child;case 6:return e===null&&Eg(a),null;case 13:return oj(e,a,i);case 4:return yh(a,a.stateNode.containerInfo),s=a.pendingProps,e===null?a.child=Ug(a,null,s,i):Xi(e,a,s,i),a.child;case 11:return s=a.type,o=a.pendingProps,o=a.elementType===s?o:Ci(s,o),Yi(e,a,s,o,i);case 7:return Xi(e,a,a.pendingProps,i),a.child;case 8:return Xi(e,a,a.pendingProps.children,i),a.child;case 12:return Xi(e,a,a.pendingProps.children,i),a.child;case 10:e:{if(s=a.type._context,o=a.pendingProps,c=a.memoizedProps,d=o.value,G(Wg,s._currentValue),s._currentValue=d,c!==null)if(He(c.value,d)){if(c.children===o.children&&!Wf.current){a=Zi(e,a,i);break e}}else for(c=a.child,c!==null&&(c.return=a);c!==null;){var b=c.dependencies;if(b!==null){d=c.child;for(var g=b.firstContext;g!==null;){if(g.context===s){if(c.tag===1){g=mh(-1,i&-i),g.tag=2;var _=c.updateQueue;if(_!==null){_=_.shared;var tt=_.pending;tt===null?g.next=g:(g.next=tt.next,tt.next=g),_.pending=g}}c.lanes|=i,g=c.alternate,g!==null&&(g.lanes|=i),bh(c.return,i,a),b.lanes|=i;break}g=g.next}}else if(c.tag===10)d=c.type===a.type?null:c.child;else if(c.tag===18){if(d=c.return,d===null)throw Error(p(341));d.lanes|=i,b=d.alternate,b!==null&&(b.lanes|=i),bh(d,i,a),d=c.sibling}else d=c.child;if(d!==null)d.return=c;else for(d=c;d!==null;){if(d===a){d=null;break}if(c=d.sibling,c!==null){c.return=d.return,d=c;break}d=d.return}c=d}Xi(e,a,o.children,i),a=a.child}return a;case 9:return o=a.type,s=a.pendingProps.children,ch(a,i),o=eh(o),s=s(o),a.flags|=1,Xi(e,a,s,i),a.child;case 14:return s=a.type,o=Ci(s,a.pendingProps),o=Ci(s.type,o),$i(e,a,s,o,i);case 15:return bj(e,a,a.type,a.pendingProps,i);case 17:return s=a.type,o=a.pendingProps,o=a.elementType===s?o:Ci(s,o),ij(e,a),a.tag=1,Zf(s)?(e=!0,cg(a)):e=!1,ch(a,i),Gi(a,s,o),Ii(a,s,o,i),jj(null,a,s,!0,e,i);case 19:return xj(e,a,i);case 22:return dj(e,a,i)}throw Error(p(156,a.tag))};function Fk(e,a){return ac(e,a)}function $k(e,a,i,s){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bg(e,a,i,s){return new $k(e,a,i,s)}function aj(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Zk(e){if(typeof e=="function")return aj(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Da)return 11;if(e===Ga)return 14}return 2}function Pg(e,a){var i=e.alternate;return i===null?(i=Bg(e.tag,a,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=a,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&14680064,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,a=e.dependencies,i.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i}function Rg(e,a,i,s,o,c){var d=2;if(s=e,typeof e=="function")aj(e)&&(d=1);else if(typeof e=="string")d=5;else e:switch(e){case ya:return Tg(i.children,o,c,a);case za:d=8,o|=8;break;case Aa:return e=Bg(12,i,a,o|2),e.elementType=Aa,e.lanes=c,e;case Ea:return e=Bg(13,i,a,o),e.elementType=Ea,e.lanes=c,e;case Fa:return e=Bg(19,i,a,o),e.elementType=Fa,e.lanes=c,e;case Ia:return pj(i,o,c,a);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ba:d=10;break e;case Ca:d=9;break e;case Da:d=11;break e;case Ga:d=14;break e;case Ha:d=16,s=null;break e}throw Error(p(130,e==null?e:typeof e,""))}return a=Bg(d,i,a,o),a.elementType=e,a.type=s,a.lanes=c,a}function Tg(e,a,i,s){return e=Bg(7,e,s,a),e.lanes=i,e}function pj(e,a,i,s){return e=Bg(22,e,s,a),e.elementType=Ia,e.lanes=i,e.stateNode={isHidden:!1},e}function Qg(e,a,i){return e=Bg(6,e,null,a),e.lanes=i,e}function Sg(e,a,i){return a=Bg(4,e.children!==null?e.children:[],e.key,a),a.lanes=i,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}function al(e,a,i,s,o){this.tag=a,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zc(0),this.expirationTimes=zc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zc(0),this.identifierPrefix=s,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function bl(e,a,i,s,o,c,d,b,g){return e=new al(e,a,i,b,g),a===1?(a=1,c===!0&&(a|=8)):a=0,c=Bg(3,null,null,a),e.current=c,c.stateNode=e,c.memoizedState={element:s,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},kh(c),e}function cl(e,a,i){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:wa,key:s==null?null:""+s,children:e,containerInfo:a,implementation:i}}function dl(e){if(!e)return Vf;e=e._reactInternals;e:{if(Vb(e)!==e||e.tag!==1)throw Error(p(170));var a=e;do{switch(a.tag){case 3:a=a.stateNode.context;break e;case 1:if(Zf(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break e}}a=a.return}while(a!==null);throw Error(p(171))}if(e.tag===1){var i=e.type;if(Zf(i))return bg(e,i,a)}return a}function el(e,a,i,s,o,c,d,b,g){return e=bl(i,s,!0,e,o,c,d,b,g),e.context=dl(null),i=e.current,s=R(),o=yi(i),c=mh(s,o),c.callback=a??null,nh(i,c,o),e.current.lanes=o,Ac(e,o,s),Dk(e,s),e}function fl(e,a,i,s){var o=a.current,c=R(),d=yi(o);return i=dl(i),a.context===null?a.context=i:a.pendingContext=i,a=mh(c,d),a.payload={element:e},s=s===void 0?null:s,s!==null&&(a.callback=s),e=nh(o,a,d),e!==null&&(gi(e,o,d,c),oh(e,o,d)),d}function gl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function hl(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<a?i:a}}function il(e,a){hl(e,a),(e=e.alternate)&&hl(e,a)}function jl(){return null}var kl=typeof reportError=="function"?reportError:function(e){console.error(e)};function ll(e){this._internalRoot=e}ml.prototype.render=ll.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(p(409));fl(e,a,null,null)};ml.prototype.unmount=ll.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;Rk(function(){fl(null,e,null,null)}),a[uf]=null}};function ml(e){this._internalRoot=e}ml.prototype.unstable_scheduleHydration=function(e){if(e){var a=Hc();e={blockedOn:null,target:e,priority:a};for(var i=0;i<Qc.length&&a!==0&&a<Qc[i].priority;i++);Qc.splice(i,0,e),i===0&&Vc(e)}};function nl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ol(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function pl(){}function ql(e,a,i,s,o){if(o){if(typeof s=="function"){var c=s;s=function(){var _=gl(d);c.call(_)}}var d=el(a,s,e,0,null,!1,!1,"",pl);return e._reactRootContainer=d,e[uf]=d.current,sf(e.nodeType===8?e.parentNode:e),Rk(),d}for(;o=e.lastChild;)e.removeChild(o);if(typeof s=="function"){var b=s;s=function(){var _=gl(g);b.call(_)}}var g=bl(e,0,!1,null,null,!1,!1,"",pl);return e._reactRootContainer=g,e[uf]=g.current,sf(e.nodeType===8?e.parentNode:e),Rk(function(){fl(a,g,i,s)}),g}function rl(e,a,i,s,o){var c=i._reactRootContainer;if(c){var d=c;if(typeof o=="function"){var b=o;o=function(){var g=gl(d);b.call(g)}}fl(a,d,e,o)}else d=ql(i,a,e,o,s);return gl(d)}Ec=function(e){switch(e.tag){case 3:var a=e.stateNode;if(a.current.memoizedState.isDehydrated){var i=tc(a.pendingLanes);i!==0&&(Cc(a,i|1),Dk(a,B()),!(K&6)&&(Gj=B()+500,jg()))}break;case 13:Rk(function(){var s=ih(e,1);if(s!==null){var o=R();gi(s,e,1,o)}}),il(e,1)}};Fc=function(e){if(e.tag===13){var a=ih(e,134217728);if(a!==null){var i=R();gi(a,e,134217728,i)}il(e,134217728)}};Gc=function(e){if(e.tag===13){var a=yi(e),i=ih(e,a);if(i!==null){var s=R();gi(i,e,a,s)}il(e,a)}};Hc=function(){return C};Ic=function(e,a){var i=C;try{return C=e,a()}finally{C=i}};yb=function(e,a,i){switch(a){case"input":if(bb(e,i),a=i.name,i.type==="radio"&&a!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+a)+'][type="radio"]'),a=0;a<i.length;a++){var s=i[a];if(s!==e&&s.form===e.form){var o=Db(s);if(!o)throw Error(p(90));Wa(s),bb(s,o)}}}break;case"textarea":ib(e,i);break;case"select":a=i.value,a!=null&&fb(e,!!i.multiple,a,!1)}};Gb=Qk;Hb=Rk;var sl={usingClientEntryPoint:!1,Events:[Cb,ue,Db,Eb,Fb,Qk]},tl={findFiberByHostInstance:Wc,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ul={bundleType:tl.bundleType,version:tl.version,rendererPackageName:tl.rendererPackageName,rendererConfig:tl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ua.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Zb(e),e===null?null:e.stateNode},findFiberByHostInstance:tl.findFiberByHostInstance||jl,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vl.isDisabled&&vl.supportsFiber)try{kc=vl.inject(ul),lc=vl}catch{}}reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sl;reactDom_production_min.createPortal=function(e,a){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!nl(a))throw Error(p(200));return cl(e,a,null,i)};reactDom_production_min.createRoot=function(e,a){if(!nl(e))throw Error(p(299));var i=!1,s="",o=kl;return a!=null&&(a.unstable_strictMode===!0&&(i=!0),a.identifierPrefix!==void 0&&(s=a.identifierPrefix),a.onRecoverableError!==void 0&&(o=a.onRecoverableError)),a=bl(e,1,!1,null,null,i,!1,s,o),e[uf]=a.current,sf(e.nodeType===8?e.parentNode:e),new ll(a)};reactDom_production_min.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(p(188)):(e=Object.keys(e).join(","),Error(p(268,e)));return e=Zb(a),e=e===null?null:e.stateNode,e};reactDom_production_min.flushSync=function(e){return Rk(e)};reactDom_production_min.hydrate=function(e,a,i){if(!ol(a))throw Error(p(200));return rl(null,e,a,!0,i)};reactDom_production_min.hydrateRoot=function(e,a,i){if(!nl(e))throw Error(p(405));var s=i!=null&&i.hydratedSources||null,o=!1,c="",d=kl;if(i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),a=el(a,null,e,1,i??null,o,!1,c,d),e[uf]=a.current,sf(e),s)for(e=0;e<s.length;e++)i=s[e],o=i._getVersion,o=o(i._source),a.mutableSourceEagerHydrationData==null?a.mutableSourceEagerHydrationData=[i,o]:a.mutableSourceEagerHydrationData.push(i,o);return new ml(a)};reactDom_production_min.render=function(e,a,i){if(!ol(a))throw Error(p(200));return rl(null,e,a,!1,i)};reactDom_production_min.unmountComponentAtNode=function(e){if(!ol(e))throw Error(p(40));return e._reactRootContainer?(Rk(function(){rl(null,null,e,!1,function(){e._reactRootContainer=null,e[uf]=null})}),!0):!1};reactDom_production_min.unstable_batchedUpdates=Qk;reactDom_production_min.unstable_renderSubtreeIntoContainer=function(e,a,i,s){if(!ol(i))throw Error(p(200));if(e==null||e._reactInternals===void 0)throw Error(p(38));return rl(e,a,i,!1,s)};reactDom_production_min.version="18.3.1-next-f1338f8080-20240426";function checkDCE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE)}catch(e){console.error(e)}}checkDCE(),reactDom.exports=reactDom_production_min;var reactDomExports=reactDom.exports,m=reactDomExports;client.createRoot=m.createRoot,client.hydrateRoot=m.hydrateRoot;var dist={};Object.defineProperty(dist,"__esModule",{value:!0});dist.parse=parse;dist.serialize=serialize;const cookieNameRegExp=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,cookieValueRegExp=/^[\u0021-\u003A\u003C-\u007E]*$/,domainValueRegExp=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,pathValueRegExp=/^[\u0020-\u003A\u003D-\u007E]*$/,__toString=Object.prototype.toString,NullObject=(()=>{const e=function(){};return e.prototype=Object.create(null),e})();function parse(e,a){const i=new NullObject,s=e.length;if(s<2)return i;const o=(a==null?void 0:a.decode)||decode;let c=0;do{const d=e.indexOf("=",c);if(d===-1)break;const b=e.indexOf(";",c),g=b===-1?s:b;if(d>g){c=e.lastIndexOf(";",d-1)+1;continue}const _=startIndex(e,c,d),tt=endIndex(e,d,_),it=e.slice(_,tt);if(i[it]===void 0){let et=startIndex(e,d+1,g),st=endIndex(e,g,et);const nt=o(e.slice(et,st));i[it]=nt}c=g+1}while(c<s);return i}function startIndex(e,a,i){do{const s=e.charCodeAt(a);if(s!==32&&s!==9)return a}while(++a<i);return i}function endIndex(e,a,i){for(;a>i;){const s=e.charCodeAt(--a);if(s!==32&&s!==9)return a+1}return i}function serialize(e,a,i){const s=(i==null?void 0:i.encode)||encodeURIComponent;if(!cookieNameRegExp.test(e))throw new TypeError(`argument name is invalid: ${e}`);const o=s(a);if(!cookieValueRegExp.test(o))throw new TypeError(`argument val is invalid: ${a}`);let c=e+"="+o;if(!i)return c;if(i.maxAge!==void 0){if(!Number.isInteger(i.maxAge))throw new TypeError(`option maxAge is invalid: ${i.maxAge}`);c+="; Max-Age="+i.maxAge}if(i.domain){if(!domainValueRegExp.test(i.domain))throw new TypeError(`option domain is invalid: ${i.domain}`);c+="; Domain="+i.domain}if(i.path){if(!pathValueRegExp.test(i.path))throw new TypeError(`option path is invalid: ${i.path}`);c+="; Path="+i.path}if(i.expires){if(!isDate(i.expires)||!Number.isFinite(i.expires.valueOf()))throw new TypeError(`option expires is invalid: ${i.expires}`);c+="; Expires="+i.expires.toUTCString()}if(i.httpOnly&&(c+="; HttpOnly"),i.secure&&(c+="; Secure"),i.partitioned&&(c+="; Partitioned"),i.priority)switch(typeof i.priority=="string"?i.priority.toLowerCase():void 0){case"low":c+="; Priority=Low";break;case"medium":c+="; Priority=Medium";break;case"high":c+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${i.priority}`)}if(i.sameSite)switch(typeof i.sameSite=="string"?i.sameSite.toLowerCase():i.sameSite){case!0:case"strict":c+="; SameSite=Strict";break;case"lax":c+="; SameSite=Lax";break;case"none":c+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${i.sameSite}`)}return c}function decode(e){if(e.indexOf("%")===-1)return e;try{return decodeURIComponent(e)}catch{return e}}function isDate(e){return __toString.call(e)==="[object Date]"}var PopStateEventType="popstate";function createHashHistory(e={}){function a(o,c){let{pathname:d="/",search:b="",hash:g=""}=parsePath(o.location.hash.substring(1));return!d.startsWith("/")&&!d.startsWith(".")&&(d="/"+d),createLocation("",{pathname:d,search:b,hash:g},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function i(o,c){let d=o.document.querySelector("base"),b="";if(d&&d.getAttribute("href")){let g=o.location.href,_=g.indexOf("#");b=_===-1?g:g.slice(0,_)}return b+"#"+(typeof c=="string"?c:createPath(c))}function s(o,c){warning(o.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(c)})`)}return getUrlBasedHistory(a,i,s,e)}function invariant(e,a){if(e===!1||e===null||typeof e>"u")throw new Error(a)}function warning(e,a){if(!e){typeof console<"u"&&console.warn(a);try{throw new Error(a)}catch{}}}function createKey(){return Math.random().toString(36).substring(2,10)}function getHistoryState(e,a){return{usr:e.state,key:e.key,idx:a}}function createLocation(e,a,i=null,s){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof a=="string"?parsePath(a):a,state:i,key:a&&a.key||s||createKey()}}function createPath({pathname:e="/",search:a="",hash:i=""}){return a&&a!=="?"&&(e+=a.charAt(0)==="?"?a:"?"+a),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function parsePath(e){let a={};if(e){let i=e.indexOf("#");i>=0&&(a.hash=e.substring(i),e=e.substring(0,i));let s=e.indexOf("?");s>=0&&(a.search=e.substring(s),e=e.substring(0,s)),e&&(a.pathname=e)}return a}function getUrlBasedHistory(e,a,i,s={}){let{window:o=document.defaultView,v5Compat:c=!1}=s,d=o.history,b="POP",g=null,_=tt();_==null&&(_=0,d.replaceState({...d.state,idx:_},""));function tt(){return(d.state||{idx:null}).idx}function it(){b="POP";let ht=tt(),$=ht==null?null:ht-_;_=ht,g&&g({action:b,location:rt.location,delta:$})}function et(ht,$){b="PUSH";let _e=createLocation(rt.location,ht,$);i&&i(_e,ht),_=tt()+1;let j=getHistoryState(_e,_),at=rt.createHref(_e);try{d.pushState(j,"",at)}catch(lt){if(lt instanceof DOMException&&lt.name==="DataCloneError")throw lt;o.location.assign(at)}c&&g&&g({action:b,location:rt.location,delta:1})}function st(ht,$){b="REPLACE";let _e=createLocation(rt.location,ht,$);i&&i(_e,ht),_=tt();let j=getHistoryState(_e,_),at=rt.createHref(_e);d.replaceState(j,"",at),c&&g&&g({action:b,location:rt.location,delta:0})}function nt(ht){return createBrowserURLImpl(ht)}let rt={get action(){return b},get location(){return e(o,d)},listen(ht){if(g)throw new Error("A history only accepts one active listener");return o.addEventListener(PopStateEventType,it),g=ht,()=>{o.removeEventListener(PopStateEventType,it),g=null}},createHref(ht){return a(o,ht)},createURL:nt,encodeLocation(ht){let $=nt(ht);return{pathname:$.pathname,search:$.search,hash:$.hash}},push:et,replace:st,go(ht){return d.go(ht)}};return rt}function createBrowserURLImpl(e,a=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),invariant(i,"No window.location.(origin|href) available to create URL");let s=typeof e=="string"?e:createPath(e);return s=s.replace(/ $/,"%20"),!a&&s.startsWith("//")&&(s=i+s),new URL(s,i)}function matchRoutes(e,a,i="/"){return matchRoutesImpl(e,a,i,!1)}function matchRoutesImpl(e,a,i,s){let o=typeof a=="string"?parsePath(a):a,c=stripBasename(o.pathname||"/",i);if(c==null)return null;let d=flattenRoutes(e);rankRouteBranches(d);let b=null;for(let g=0;b==null&&g<d.length;++g){let _=decodePath(c);b=matchRouteBranch(d[g],_,s)}return b}function flattenRoutes(e,a=[],i=[],s=""){let o=(c,d,b)=>{let g={relativePath:b===void 0?c.path||"":b,caseSensitive:c.caseSensitive===!0,childrenIndex:d,route:c};g.relativePath.startsWith("/")&&(invariant(g.relativePath.startsWith(s),`Absolute route path "${g.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(s.length));let _=joinPaths([s,g.relativePath]),tt=i.concat(g);c.children&&c.children.length>0&&(invariant(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${_}".`),flattenRoutes(c.children,a,tt,_)),!(c.path==null&&!c.index)&&a.push({path:_,score:computeScore(_,c.index),routesMeta:tt})};return e.forEach((c,d)=>{var b;if(c.path===""||!((b=c.path)!=null&&b.includes("?")))o(c,d);else for(let g of explodeOptionalSegments(c.path))o(c,d,g)}),a}function explodeOptionalSegments(e){let a=e.split("/");if(a.length===0)return[];let[i,...s]=a,o=i.endsWith("?"),c=i.replace(/\?$/,"");if(s.length===0)return o?[c,""]:[c];let d=explodeOptionalSegments(s.join("/")),b=[];return b.push(...d.map(g=>g===""?c:[c,g].join("/"))),o&&b.push(...d),b.map(g=>e.startsWith("/")&&g===""?"/":g)}function rankRouteBranches(e){e.sort((a,i)=>a.score!==i.score?i.score-a.score:compareIndexes(a.routesMeta.map(s=>s.childrenIndex),i.routesMeta.map(s=>s.childrenIndex)))}var paramRe=/^:[\w-]+$/,dynamicSegmentValue=3,indexRouteValue=2,emptySegmentValue=1,staticSegmentValue=10,splatPenalty=-2,isSplat=e=>e==="*";function computeScore(e,a){let i=e.split("/"),s=i.length;return i.some(isSplat)&&(s+=splatPenalty),a&&(s+=indexRouteValue),i.filter(o=>!isSplat(o)).reduce((o,c)=>o+(paramRe.test(c)?dynamicSegmentValue:c===""?emptySegmentValue:staticSegmentValue),s)}function compareIndexes(e,a){return e.length===a.length&&e.slice(0,-1).every((s,o)=>s===a[o])?e[e.length-1]-a[a.length-1]:0}function matchRouteBranch(e,a,i=!1){let{routesMeta:s}=e,o={},c="/",d=[];for(let b=0;b<s.length;++b){let g=s[b],_=b===s.length-1,tt=c==="/"?a:a.slice(c.length)||"/",it=matchPath({path:g.relativePath,caseSensitive:g.caseSensitive,end:_},tt),et=g.route;if(!it&&_&&i&&!s[s.length-1].route.index&&(it=matchPath({path:g.relativePath,caseSensitive:g.caseSensitive,end:!1},tt)),!it)return null;Object.assign(o,it.params),d.push({params:o,pathname:joinPaths([c,it.pathname]),pathnameBase:normalizePathname(joinPaths([c,it.pathnameBase])),route:et}),it.pathnameBase!=="/"&&(c=joinPaths([c,it.pathnameBase]))}return d}function matchPath(e,a){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[i,s]=compilePath(e.path,e.caseSensitive,e.end),o=a.match(i);if(!o)return null;let c=o[0],d=c.replace(/(.)\/+$/,"$1"),b=o.slice(1);return{params:s.reduce((_,{paramName:tt,isOptional:it},et)=>{if(tt==="*"){let nt=b[et]||"";d=c.slice(0,c.length-nt.length).replace(/(.)\/+$/,"$1")}const st=b[et];return it&&!st?_[tt]=void 0:_[tt]=(st||"").replace(/%2F/g,"/"),_},{}),pathname:c,pathnameBase:d,pattern:e}}function compilePath(e,a=!1,i=!0){warning(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let s=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,b,g)=>(s.push({paramName:b,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(s.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,a?void 0:"i"),s]}function decodePath(e){try{return e.split("/").map(a=>decodeURIComponent(a).replace(/\//g,"%2F")).join("/")}catch(a){return warning(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${a}).`),e}}function stripBasename(e,a){if(a==="/")return e;if(!e.toLowerCase().startsWith(a.toLowerCase()))return null;let i=a.endsWith("/")?a.length-1:a.length,s=e.charAt(i);return s&&s!=="/"?null:e.slice(i)||"/"}function resolvePath(e,a="/"){let{pathname:i,search:s="",hash:o=""}=typeof e=="string"?parsePath(e):e;return{pathname:i?i.startsWith("/")?i:resolvePathname(i,a):a,search:normalizeSearch(s),hash:normalizeHash(o)}}function resolvePathname(e,a){let i=a.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?i.length>1&&i.pop():o!=="."&&i.push(o)}),i.length>1?i.join("/"):"/"}function getInvalidPathError(e,a,i,s){return`Cannot include a '${e}' character in a manually specified \`to.${a}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function getPathContributingMatches(e){return e.filter((a,i)=>i===0||a.route.path&&a.route.path.length>0)}function getResolveToMatches(e){let a=getPathContributingMatches(e);return a.map((i,s)=>s===a.length-1?i.pathname:i.pathnameBase)}function resolveTo(e,a,i,s=!1){let o;typeof e=="string"?o=parsePath(e):(o={...e},invariant(!o.pathname||!o.pathname.includes("?"),getInvalidPathError("?","pathname","search",o)),invariant(!o.pathname||!o.pathname.includes("#"),getInvalidPathError("#","pathname","hash",o)),invariant(!o.search||!o.search.includes("#"),getInvalidPathError("#","search","hash",o)));let c=e===""||o.pathname==="",d=c?"/":o.pathname,b;if(d==null)b=i;else{let it=a.length-1;if(!s&&d.startsWith("..")){let et=d.split("/");for(;et[0]==="..";)et.shift(),it-=1;o.pathname=et.join("/")}b=it>=0?a[it]:"/"}let g=resolvePath(o,b),_=d&&d!=="/"&&d.endsWith("/"),tt=(c||d===".")&&i.endsWith("/");return!g.pathname.endsWith("/")&&(_||tt)&&(g.pathname+="/"),g}var joinPaths=e=>e.join("/").replace(/\/\/+/g,"/"),normalizePathname=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),normalizeSearch=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,normalizeHash=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function isRouteErrorResponse(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var validMutationMethodsArr=["POST","PUT","PATCH","DELETE"];new Set(validMutationMethodsArr);var validRequestMethodsArr=["GET",...validMutationMethodsArr];new Set(validRequestMethodsArr);var DataRouterContext=reactExports.createContext(null);DataRouterContext.displayName="DataRouter";var DataRouterStateContext=reactExports.createContext(null);DataRouterStateContext.displayName="DataRouterState";var ViewTransitionContext=reactExports.createContext({isTransitioning:!1});ViewTransitionContext.displayName="ViewTransition";var FetchersContext=reactExports.createContext(new Map);FetchersContext.displayName="Fetchers";var AwaitContext=reactExports.createContext(null);AwaitContext.displayName="Await";var NavigationContext=reactExports.createContext(null);NavigationContext.displayName="Navigation";var LocationContext=reactExports.createContext(null);LocationContext.displayName="Location";var RouteContext=reactExports.createContext({outlet:null,matches:[],isDataRoute:!1});RouteContext.displayName="Route";var RouteErrorContext=reactExports.createContext(null);RouteErrorContext.displayName="RouteError";function useHref(e,{relative:a}={}){invariant(useInRouterContext(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:s}=reactExports.useContext(NavigationContext),{hash:o,pathname:c,search:d}=useResolvedPath(e,{relative:a}),b=c;return i!=="/"&&(b=c==="/"?i:joinPaths([i,c])),s.createHref({pathname:b,search:d,hash:o})}function useInRouterContext(){return reactExports.useContext(LocationContext)!=null}function useLocation(){return invariant(useInRouterContext(),"useLocation() may be used only in the context of a <Router> component."),reactExports.useContext(LocationContext).location}var navigateEffectWarning="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function useIsomorphicLayoutEffect(e){reactExports.useContext(NavigationContext).static||reactExports.useLayoutEffect(e)}function useNavigate(){let{isDataRoute:e}=reactExports.useContext(RouteContext);return e?useNavigateStable():useNavigateUnstable()}function useNavigateUnstable(){invariant(useInRouterContext(),"useNavigate() may be used only in the context of a <Router> component.");let e=reactExports.useContext(DataRouterContext),{basename:a,navigator:i}=reactExports.useContext(NavigationContext),{matches:s}=reactExports.useContext(RouteContext),{pathname:o}=useLocation(),c=JSON.stringify(getResolveToMatches(s)),d=reactExports.useRef(!1);return useIsomorphicLayoutEffect(()=>{d.current=!0}),reactExports.useCallback((g,_={})=>{if(warning(d.current,navigateEffectWarning),!d.current)return;if(typeof g=="number"){i.go(g);return}let tt=resolveTo(g,JSON.parse(c),o,_.relative==="path");e==null&&a!=="/"&&(tt.pathname=tt.pathname==="/"?a:joinPaths([a,tt.pathname])),(_.replace?i.replace:i.push)(tt,_.state,_)},[a,i,c,o,e])}reactExports.createContext(null);function useResolvedPath(e,{relative:a}={}){let{matches:i}=reactExports.useContext(RouteContext),{pathname:s}=useLocation(),o=JSON.stringify(getResolveToMatches(i));return reactExports.useMemo(()=>resolveTo(e,JSON.parse(o),s,a==="path"),[e,o,s,a])}function useRoutes(e,a){return useRoutesImpl(e,a)}function useRoutesImpl(e,a,i,s){var $;invariant(useInRouterContext(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=reactExports.useContext(NavigationContext),{matches:c}=reactExports.useContext(RouteContext),d=c[c.length-1],b=d?d.params:{},g=d?d.pathname:"/",_=d?d.pathnameBase:"/",tt=d&&d.route;{let _e=tt&&tt.path||"";warningOnce(g,!tt||_e.endsWith("*")||_e.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${_e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${_e}"> to <Route path="${_e==="/"?"*":`${_e}/*`}">.`)}let it=useLocation(),et;if(a){let _e=typeof a=="string"?parsePath(a):a;invariant(_==="/"||(($=_e.pathname)==null?void 0:$.startsWith(_)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${_}" but pathname "${_e.pathname}" was given in the \`location\` prop.`),et=_e}else et=it;let st=et.pathname||"/",nt=st;if(_!=="/"){let _e=_.replace(/^\//,"").split("/");nt="/"+st.replace(/^\//,"").split("/").slice(_e.length).join("/")}let rt=matchRoutes(e,{pathname:nt});warning(tt||rt!=null,`No routes matched location "${et.pathname}${et.search}${et.hash}" `),warning(rt==null||rt[rt.length-1].route.element!==void 0||rt[rt.length-1].route.Component!==void 0||rt[rt.length-1].route.lazy!==void 0,`Matched leaf route at location "${et.pathname}${et.search}${et.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let ht=_renderMatches(rt&&rt.map(_e=>Object.assign({},_e,{params:Object.assign({},b,_e.params),pathname:joinPaths([_,o.encodeLocation?o.encodeLocation(_e.pathname).pathname:_e.pathname]),pathnameBase:_e.pathnameBase==="/"?_:joinPaths([_,o.encodeLocation?o.encodeLocation(_e.pathnameBase).pathname:_e.pathnameBase])})),c,i,s);return a&&ht?reactExports.createElement(LocationContext.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...et},navigationType:"POP"}},ht):ht}function DefaultErrorComponent(){let e=useRouteError(),a=isRouteErrorResponse(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),i=e instanceof Error?e.stack:null,s="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:s},c={padding:"2px 4px",backgroundColor:s},d=null;return console.error("Error handled by React Router default ErrorBoundary:",e),d=reactExports.createElement(reactExports.Fragment,null,reactExports.createElement("p",null,"💿 Hey developer 👋"),reactExports.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",reactExports.createElement("code",{style:c},"ErrorBoundary")," or"," ",reactExports.createElement("code",{style:c},"errorElement")," prop on your route.")),reactExports.createElement(reactExports.Fragment,null,reactExports.createElement("h2",null,"Unexpected Application Error!"),reactExports.createElement("h3",{style:{fontStyle:"italic"}},a),i?reactExports.createElement("pre",{style:o},i):null,d)}var defaultErrorElement=reactExports.createElement(DefaultErrorComponent,null),RenderErrorBoundary=class extends reactExports.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,a){return a.location!==e.location||a.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:a.error,location:a.location,revalidation:e.revalidation||a.revalidation}}componentDidCatch(e,a){console.error("React Router caught the following error during render",e,a)}render(){return this.state.error!==void 0?reactExports.createElement(RouteContext.Provider,{value:this.props.routeContext},reactExports.createElement(RouteErrorContext.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function RenderedRoute({routeContext:e,match:a,children:i}){let s=reactExports.useContext(DataRouterContext);return s&&s.static&&s.staticContext&&(a.route.errorElement||a.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=a.route.id),reactExports.createElement(RouteContext.Provider,{value:e},i)}function _renderMatches(e,a=[],i=null,s=null){if(e==null){if(!i)return null;if(i.errors)e=i.matches;else if(a.length===0&&!i.initialized&&i.matches.length>0)e=i.matches;else return null}let o=e,c=i==null?void 0:i.errors;if(c!=null){let g=o.findIndex(_=>_.route.id&&(c==null?void 0:c[_.route.id])!==void 0);invariant(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),o=o.slice(0,Math.min(o.length,g+1))}let d=!1,b=-1;if(i)for(let g=0;g<o.length;g++){let _=o[g];if((_.route.HydrateFallback||_.route.hydrateFallbackElement)&&(b=g),_.route.id){let{loaderData:tt,errors:it}=i,et=_.route.loader&&!tt.hasOwnProperty(_.route.id)&&(!it||it[_.route.id]===void 0);if(_.route.lazy||et){d=!0,b>=0?o=o.slice(0,b+1):o=[o[0]];break}}}return o.reduceRight((g,_,tt)=>{let it,et=!1,st=null,nt=null;i&&(it=c&&_.route.id?c[_.route.id]:void 0,st=_.route.errorElement||defaultErrorElement,d&&(b<0&&tt===0?(warningOnce("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),et=!0,nt=null):b===tt&&(et=!0,nt=_.route.hydrateFallbackElement||null)));let rt=a.concat(o.slice(0,tt+1)),ht=()=>{let $;return it?$=st:et?$=nt:_.route.Component?$=reactExports.createElement(_.route.Component,null):_.route.element?$=_.route.element:$=g,reactExports.createElement(RenderedRoute,{match:_,routeContext:{outlet:g,matches:rt,isDataRoute:i!=null},children:$})};return i&&(_.route.ErrorBoundary||_.route.errorElement||tt===0)?reactExports.createElement(RenderErrorBoundary,{location:i.location,revalidation:i.revalidation,component:st,error:it,children:ht(),routeContext:{outlet:null,matches:rt,isDataRoute:!0}}):ht()},null)}function getDataRouterConsoleError(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function useDataRouterContext(e){let a=reactExports.useContext(DataRouterContext);return invariant(a,getDataRouterConsoleError(e)),a}function useDataRouterState(e){let a=reactExports.useContext(DataRouterStateContext);return invariant(a,getDataRouterConsoleError(e)),a}function useRouteContext(e){let a=reactExports.useContext(RouteContext);return invariant(a,getDataRouterConsoleError(e)),a}function useCurrentRouteId(e){let a=useRouteContext(e),i=a.matches[a.matches.length-1];return invariant(i.route.id,`${e} can only be used on routes that contain a unique "id"`),i.route.id}function useRouteId(){return useCurrentRouteId("useRouteId")}function useRouteError(){var s;let e=reactExports.useContext(RouteErrorContext),a=useDataRouterState("useRouteError"),i=useCurrentRouteId("useRouteError");return e!==void 0?e:(s=a.errors)==null?void 0:s[i]}function useNavigateStable(){let{router:e}=useDataRouterContext("useNavigate"),a=useCurrentRouteId("useNavigate"),i=reactExports.useRef(!1);return useIsomorphicLayoutEffect(()=>{i.current=!0}),reactExports.useCallback(async(o,c={})=>{warning(i.current,navigateEffectWarning),i.current&&(typeof o=="number"?e.navigate(o):await e.navigate(o,{fromRouteId:a,...c}))},[e,a])}var alreadyWarned={};function warningOnce(e,a,i){!a&&!alreadyWarned[e]&&(alreadyWarned[e]=!0,warning(!1,i))}reactExports.memo(DataRoutes);function DataRoutes({routes:e,future:a,state:i}){return useRoutesImpl(e,void 0,i,a)}function Navigate({to:e,replace:a,state:i,relative:s}){invariant(useInRouterContext(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=reactExports.useContext(NavigationContext);warning(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:c}=reactExports.useContext(RouteContext),{pathname:d}=useLocation(),b=useNavigate(),g=resolveTo(e,getResolveToMatches(c),d,s==="path"),_=JSON.stringify(g);return reactExports.useEffect(()=>{b(JSON.parse(_),{replace:a,state:i,relative:s})},[b,_,s,a,i]),null}function Route(e){invariant(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Router({basename:e="/",children:a=null,location:i,navigationType:s="POP",navigator:o,static:c=!1}){invariant(!useInRouterContext(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=e.replace(/^\/*/,"/"),b=reactExports.useMemo(()=>({basename:d,navigator:o,static:c,future:{}}),[d,o,c]);typeof i=="string"&&(i=parsePath(i));let{pathname:g="/",search:_="",hash:tt="",state:it=null,key:et="default"}=i,st=reactExports.useMemo(()=>{let nt=stripBasename(g,d);return nt==null?null:{location:{pathname:nt,search:_,hash:tt,state:it,key:et},navigationType:s}},[d,g,_,tt,it,et,s]);return warning(st!=null,`<Router basename="${d}"> is not able to match the URL "${g}${_}${tt}" because it does not start with the basename, so the <Router> won't render anything.`),st==null?null:reactExports.createElement(NavigationContext.Provider,{value:b},reactExports.createElement(LocationContext.Provider,{children:a,value:st}))}function Routes({children:e,location:a}){return useRoutes(createRoutesFromChildren(e),a)}function createRoutesFromChildren(e,a=[]){let i=[];return reactExports.Children.forEach(e,(s,o)=>{if(!reactExports.isValidElement(s))return;let c=[...a,o];if(s.type===reactExports.Fragment){i.push.apply(i,createRoutesFromChildren(s.props.children,c));return}invariant(s.type===Route,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),invariant(!s.props.index||!s.props.children,"An index route cannot have child routes.");let d={id:s.props.id||c.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(d.children=createRoutesFromChildren(s.props.children,c)),i.push(d)}),i}var defaultMethod="get",defaultEncType="application/x-www-form-urlencoded";function isHtmlElement(e){return e!=null&&typeof e.tagName=="string"}function isButtonElement(e){return isHtmlElement(e)&&e.tagName.toLowerCase()==="button"}function isFormElement(e){return isHtmlElement(e)&&e.tagName.toLowerCase()==="form"}function isInputElement(e){return isHtmlElement(e)&&e.tagName.toLowerCase()==="input"}function isModifiedEvent(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function shouldProcessLinkClick(e,a){return e.button===0&&(!a||a==="_self")&&!isModifiedEvent(e)}var _formDataSupportsSubmitter=null;function isFormDataSubmitterSupported(){if(_formDataSupportsSubmitter===null)try{new FormData(document.createElement("form"),0),_formDataSupportsSubmitter=!1}catch{_formDataSupportsSubmitter=!0}return _formDataSupportsSubmitter}var supportedFormEncTypes=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function getFormEncType(e){return e!=null&&!supportedFormEncTypes.has(e)?(warning(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${defaultEncType}"`),null):e}function getFormSubmissionInfo(e,a){let i,s,o,c,d;if(isFormElement(e)){let b=e.getAttribute("action");s=b?stripBasename(b,a):null,i=e.getAttribute("method")||defaultMethod,o=getFormEncType(e.getAttribute("enctype"))||defaultEncType,c=new FormData(e)}else if(isButtonElement(e)||isInputElement(e)&&(e.type==="submit"||e.type==="image")){let b=e.form;if(b==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let g=e.getAttribute("formaction")||b.getAttribute("action");if(s=g?stripBasename(g,a):null,i=e.getAttribute("formmethod")||b.getAttribute("method")||defaultMethod,o=getFormEncType(e.getAttribute("formenctype"))||getFormEncType(b.getAttribute("enctype"))||defaultEncType,c=new FormData(b,e),!isFormDataSubmitterSupported()){let{name:_,type:tt,value:it}=e;if(tt==="image"){let et=_?`${_}.`:"";c.append(`${et}x`,"0"),c.append(`${et}y`,"0")}else _&&c.append(_,it)}}else{if(isHtmlElement(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=defaultMethod,s=null,o=defaultEncType,d=e}return c&&o==="text/plain"&&(d=c,c=void 0),{action:s,method:i.toLowerCase(),encType:o,formData:c,body:d}}function invariant2(e,a){if(e===!1||e===null||typeof e>"u")throw new Error(a)}async function loadRouteModule(e,a){if(e.id in a)return a[e.id];try{let i=await import(e.module);return a[e.id]=i,i}catch(i){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function isHtmlLinkDescriptor(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function getKeyedPrefetchLinks(e,a,i){let s=await Promise.all(e.map(async o=>{let c=a.routes[o.route.id];if(c){let d=await loadRouteModule(c,i);return d.links?d.links():[]}return[]}));return dedupeLinkDescriptors(s.flat(1).filter(isHtmlLinkDescriptor).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function getNewMatchesForLinks(e,a,i,s,o,c){let d=(g,_)=>i[_]?g.route.id!==i[_].route.id:!0,b=(g,_)=>{var tt;return i[_].pathname!==g.pathname||((tt=i[_].route.path)==null?void 0:tt.endsWith("*"))&&i[_].params["*"]!==g.params["*"]};return c==="assets"?a.filter((g,_)=>d(g,_)||b(g,_)):c==="data"?a.filter((g,_)=>{var it;let tt=s.routes[g.route.id];if(!tt||!tt.hasLoader)return!1;if(d(g,_)||b(g,_))return!0;if(g.route.shouldRevalidate){let et=g.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((it=i[0])==null?void 0:it.params)||{},nextUrl:new URL(e,window.origin),nextParams:g.params,defaultShouldRevalidate:!0});if(typeof et=="boolean")return et}return!0}):[]}function getModuleLinkHrefs(e,a,{includeHydrateFallback:i}={}){return dedupeHrefs(e.map(s=>{let o=a.routes[s.route.id];if(!o)return[];let c=[o.module];return o.clientActionModule&&(c=c.concat(o.clientActionModule)),o.clientLoaderModule&&(c=c.concat(o.clientLoaderModule)),i&&o.hydrateFallbackModule&&(c=c.concat(o.hydrateFallbackModule)),o.imports&&(c=c.concat(o.imports)),c}).flat(1))}function dedupeHrefs(e){return[...new Set(e)]}function sortKeys(e){let a={},i=Object.keys(e).sort();for(let s of i)a[s]=e[s];return a}function dedupeLinkDescriptors(e,a){let i=new Set;return new Set(a),e.reduce((s,o)=>{let c=JSON.stringify(sortKeys(o));return i.has(c)||(i.add(c),s.push({key:c,link:o})),s},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var NO_BODY_STATUS_CODES=new Set([100,101,204,205]);function singleFetchUrl(e,a){let i=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return i.pathname==="/"?i.pathname="_root.data":a&&stripBasename(i.pathname,a)==="/"?i.pathname=`${a.replace(/\/$/,"")}/_root.data`:i.pathname=`${i.pathname.replace(/\/$/,"")}.data`,i}function useDataRouterContext2(){let e=reactExports.useContext(DataRouterContext);return invariant2(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function useDataRouterStateContext(){let e=reactExports.useContext(DataRouterStateContext);return invariant2(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var FrameworkContext=reactExports.createContext(void 0);FrameworkContext.displayName="FrameworkContext";function useFrameworkContext(){let e=reactExports.useContext(FrameworkContext);return invariant2(e,"You must render this element inside a <HydratedRouter> element"),e}function usePrefetchBehavior(e,a){let i=reactExports.useContext(FrameworkContext),[s,o]=reactExports.useState(!1),[c,d]=reactExports.useState(!1),{onFocus:b,onBlur:g,onMouseEnter:_,onMouseLeave:tt,onTouchStart:it}=a,et=reactExports.useRef(null);reactExports.useEffect(()=>{if(e==="render"&&d(!0),e==="viewport"){let rt=$=>{$.forEach(_e=>{d(_e.isIntersecting)})},ht=new IntersectionObserver(rt,{threshold:.5});return et.current&&ht.observe(et.current),()=>{ht.disconnect()}}},[e]),reactExports.useEffect(()=>{if(s){let rt=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(rt)}}},[s]);let st=()=>{o(!0)},nt=()=>{o(!1),d(!1)};return i?e!=="intent"?[c,et,{}]:[c,et,{onFocus:composeEventHandlers(b,st),onBlur:composeEventHandlers(g,nt),onMouseEnter:composeEventHandlers(_,st),onMouseLeave:composeEventHandlers(tt,nt),onTouchStart:composeEventHandlers(it,st)}]:[!1,et,{}]}function composeEventHandlers(e,a){return i=>{e&&e(i),i.defaultPrevented||a(i)}}function PrefetchPageLinks({page:e,...a}){let{router:i}=useDataRouterContext2(),s=reactExports.useMemo(()=>matchRoutes(i.routes,e,i.basename),[i.routes,e,i.basename]);return s?reactExports.createElement(PrefetchPageLinksImpl,{page:e,matches:s,...a}):null}function useKeyedPrefetchLinks(e){let{manifest:a,routeModules:i}=useFrameworkContext(),[s,o]=reactExports.useState([]);return reactExports.useEffect(()=>{let c=!1;return getKeyedPrefetchLinks(e,a,i).then(d=>{c||o(d)}),()=>{c=!0}},[e,a,i]),s}function PrefetchPageLinksImpl({page:e,matches:a,...i}){let s=useLocation(),{manifest:o,routeModules:c}=useFrameworkContext(),{basename:d}=useDataRouterContext2(),{loaderData:b,matches:g}=useDataRouterStateContext(),_=reactExports.useMemo(()=>getNewMatchesForLinks(e,a,g,o,s,"data"),[e,a,g,o,s]),tt=reactExports.useMemo(()=>getNewMatchesForLinks(e,a,g,o,s,"assets"),[e,a,g,o,s]),it=reactExports.useMemo(()=>{if(e===s.pathname+s.search+s.hash)return[];let nt=new Set,rt=!1;if(a.forEach($=>{var j;let _e=o.routes[$.route.id];!_e||!_e.hasLoader||(!_.some(at=>at.route.id===$.route.id)&&$.route.id in b&&((j=c[$.route.id])!=null&&j.shouldRevalidate)||_e.hasClientLoader?rt=!0:nt.add($.route.id))}),nt.size===0)return[];let ht=singleFetchUrl(e,d);return rt&&nt.size>0&&ht.searchParams.set("_routes",a.filter($=>nt.has($.route.id)).map($=>$.route.id).join(",")),[ht.pathname+ht.search]},[d,b,s,o,_,a,e,c]),et=reactExports.useMemo(()=>getModuleLinkHrefs(tt,o),[tt,o]),st=useKeyedPrefetchLinks(tt);return reactExports.createElement(reactExports.Fragment,null,it.map(nt=>reactExports.createElement("link",{key:nt,rel:"prefetch",as:"fetch",href:nt,...i})),et.map(nt=>reactExports.createElement("link",{key:nt,rel:"modulepreload",href:nt,...i})),st.map(({key:nt,link:rt})=>reactExports.createElement("link",{key:nt,...rt})))}function mergeRefs(...e){return a=>{e.forEach(i=>{typeof i=="function"?i(a):i!=null&&(i.current=a)})}}var isBrowser=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{isBrowser&&(window.__reactRouterVersion="7.6.2")}catch{}function HashRouter({basename:e,children:a,window:i}){let s=reactExports.useRef();s.current==null&&(s.current=createHashHistory({window:i,v5Compat:!0}));let o=s.current,[c,d]=reactExports.useState({action:o.action,location:o.location}),b=reactExports.useCallback(g=>{reactExports.startTransition(()=>d(g))},[d]);return reactExports.useLayoutEffect(()=>o.listen(b),[o,b]),reactExports.createElement(Router,{basename:e,children:a,location:c.location,navigationType:c.action,navigator:o})}var ABSOLUTE_URL_REGEX2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Link=reactExports.forwardRef(function({onClick:a,discover:i="render",prefetch:s="none",relative:o,reloadDocument:c,replace:d,state:b,target:g,to:_,preventScrollReset:tt,viewTransition:it,...et},st){let{basename:nt}=reactExports.useContext(NavigationContext),rt=typeof _=="string"&&ABSOLUTE_URL_REGEX2.test(_),ht,$=!1;if(typeof _=="string"&&rt&&(ht=_,isBrowser))try{let vt=new URL(window.location.href),_t=_.startsWith("//")?new URL(vt.protocol+_):new URL(_),Et=stripBasename(_t.pathname,nt);_t.origin===vt.origin&&Et!=null?_=Et+_t.search+_t.hash:$=!0}catch{warning(!1,`<Link to="${_}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let _e=useHref(_,{relative:o}),[j,at,lt]=usePrefetchBehavior(s,et),pt=useLinkClickHandler(_,{replace:d,state:b,target:g,preventScrollReset:tt,relative:o,viewTransition:it});function ft(vt){a&&a(vt),vt.defaultPrevented||pt(vt)}let mt=reactExports.createElement("a",{...et,...lt,href:ht||_e,onClick:$||c?a:ft,ref:mergeRefs(st,at),target:g,"data-discover":!rt&&i==="render"?"true":void 0});return j&&!rt?reactExports.createElement(reactExports.Fragment,null,mt,reactExports.createElement(PrefetchPageLinks,{page:_e})):mt});Link.displayName="Link";var NavLink=reactExports.forwardRef(function({"aria-current":a="page",caseSensitive:i=!1,className:s="",end:o=!1,style:c,to:d,viewTransition:b,children:g,..._},tt){let it=useResolvedPath(d,{relative:_.relative}),et=useLocation(),st=reactExports.useContext(DataRouterStateContext),{navigator:nt,basename:rt}=reactExports.useContext(NavigationContext),ht=st!=null&&useViewTransitionState(it)&&b===!0,$=nt.encodeLocation?nt.encodeLocation(it).pathname:it.pathname,_e=et.pathname,j=st&&st.navigation&&st.navigation.location?st.navigation.location.pathname:null;i||(_e=_e.toLowerCase(),j=j?j.toLowerCase():null,$=$.toLowerCase()),j&&rt&&(j=stripBasename(j,rt)||j);const at=$!=="/"&&$.endsWith("/")?$.length-1:$.length;let lt=_e===$||!o&&_e.startsWith($)&&_e.charAt(at)==="/",pt=j!=null&&(j===$||!o&&j.startsWith($)&&j.charAt($.length)==="/"),ft={isActive:lt,isPending:pt,isTransitioning:ht},mt=lt?a:void 0,vt;typeof s=="function"?vt=s(ft):vt=[s,lt?"active":null,pt?"pending":null,ht?"transitioning":null].filter(Boolean).join(" ");let _t=typeof c=="function"?c(ft):c;return reactExports.createElement(Link,{..._,"aria-current":mt,className:vt,ref:tt,style:_t,to:d,viewTransition:b},typeof g=="function"?g(ft):g)});NavLink.displayName="NavLink";var Form=reactExports.forwardRef(({discover:e="render",fetcherKey:a,navigate:i,reloadDocument:s,replace:o,state:c,method:d=defaultMethod,action:b,onSubmit:g,relative:_,preventScrollReset:tt,viewTransition:it,...et},st)=>{let nt=useSubmit(),rt=useFormAction(b,{relative:_}),ht=d.toLowerCase()==="get"?"get":"post",$=typeof b=="string"&&ABSOLUTE_URL_REGEX2.test(b),_e=j=>{if(g&&g(j),j.defaultPrevented)return;j.preventDefault();let at=j.nativeEvent.submitter,lt=(at==null?void 0:at.getAttribute("formmethod"))||d;nt(at||j.currentTarget,{fetcherKey:a,method:lt,navigate:i,replace:o,state:c,relative:_,preventScrollReset:tt,viewTransition:it})};return reactExports.createElement("form",{ref:st,method:ht,action:rt,onSubmit:s?g:_e,...et,"data-discover":!$&&e==="render"?"true":void 0})});Form.displayName="Form";function getDataRouterConsoleError2(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function useDataRouterContext3(e){let a=reactExports.useContext(DataRouterContext);return invariant(a,getDataRouterConsoleError2(e)),a}function useLinkClickHandler(e,{target:a,replace:i,state:s,preventScrollReset:o,relative:c,viewTransition:d}={}){let b=useNavigate(),g=useLocation(),_=useResolvedPath(e,{relative:c});return reactExports.useCallback(tt=>{if(shouldProcessLinkClick(tt,a)){tt.preventDefault();let it=i!==void 0?i:createPath(g)===createPath(_);b(e,{replace:it,state:s,preventScrollReset:o,relative:c,viewTransition:d})}},[g,b,_,i,s,a,e,o,c,d])}var fetcherId=0,getUniqueFetcherId=()=>`__${String(++fetcherId)}__`;function useSubmit(){let{router:e}=useDataRouterContext3("useSubmit"),{basename:a}=reactExports.useContext(NavigationContext),i=useRouteId();return reactExports.useCallback(async(s,o={})=>{let{action:c,method:d,encType:b,formData:g,body:_}=getFormSubmissionInfo(s,a);if(o.navigate===!1){let tt=o.fetcherKey||getUniqueFetcherId();await e.fetch(tt,i,o.action||c,{preventScrollReset:o.preventScrollReset,formData:g,body:_,formMethod:o.method||d,formEncType:o.encType||b,flushSync:o.flushSync})}else await e.navigate(o.action||c,{preventScrollReset:o.preventScrollReset,formData:g,body:_,formMethod:o.method||d,formEncType:o.encType||b,replace:o.replace,state:o.state,fromRouteId:i,flushSync:o.flushSync,viewTransition:o.viewTransition})},[e,a,i])}function useFormAction(e,{relative:a}={}){let{basename:i}=reactExports.useContext(NavigationContext),s=reactExports.useContext(RouteContext);invariant(s,"useFormAction must be used inside a RouteContext");let[o]=s.matches.slice(-1),c={...useResolvedPath(e||".",{relative:a})},d=useLocation();if(e==null){c.search=d.search;let b=new URLSearchParams(c.search),g=b.getAll("index");if(g.some(tt=>tt==="")){b.delete("index"),g.filter(it=>it).forEach(it=>b.append("index",it));let tt=b.toString();c.search=tt?`?${tt}`:""}}return(!e||e===".")&&o.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:joinPaths([i,c.pathname])),createPath(c)}function useViewTransitionState(e,a={}){let i=reactExports.useContext(ViewTransitionContext);invariant(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=useDataRouterContext3("useViewTransitionState"),o=useResolvedPath(e,{relative:a.relative});if(!i.isTransitioning)return!1;let c=stripBasename(i.currentLocation.pathname,s)||i.currentLocation.pathname,d=stripBasename(i.nextLocation.pathname,s)||i.nextLocation.pathname;return matchPath(o.pathname,d)!=null||matchPath(o.pathname,c)!=null}[...NO_BODY_STATUS_CODES];const CurrentUserContext=reactExports.createContext();var DefaultContext={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},IconContext=React.createContext&&React.createContext(DefaultContext),_excluded$2=["attr","size","title"];function _objectWithoutProperties$1(e,a){if(e==null)return{};var i=_objectWithoutPropertiesLoose$1(e,a),s,o;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)s=c[o],!(a.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(e,s)&&(i[s]=e[s])}return i}function _objectWithoutPropertiesLoose$1(e,a){if(e==null)return{};var i={};for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){if(a.indexOf(s)>=0)continue;i[s]=e[s]}return i}function _extends(){return _extends=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var i=arguments[a];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s])}return e},_extends.apply(this,arguments)}function ownKeys$1(e,a){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);a&&(s=s.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),i.push.apply(i,s)}return i}function _objectSpread(e){for(var a=1;a<arguments.length;a++){var i=arguments[a]!=null?arguments[a]:{};a%2?ownKeys$1(Object(i),!0).forEach(function(s){_defineProperty$1(e,s,i[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):ownKeys$1(Object(i)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(i,s))})}return e}function _defineProperty$1(e,a,i){return a=_toPropertyKey$1(a),a in e?Object.defineProperty(e,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[a]=i,e}function _toPropertyKey$1(e){var a=_toPrimitive$1(e,"string");return typeof a=="symbol"?a:a+""}function _toPrimitive$1(e,a){if(typeof e!="object"||!e)return e;var i=e[Symbol.toPrimitive];if(i!==void 0){var s=i.call(e,a);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(e)}function Tree2Element(e){return e&&e.map((a,i)=>React.createElement(a.tag,_objectSpread({key:i},a.attr),Tree2Element(a.child)))}function GenIcon(e){return a=>React.createElement(IconBase,_extends({attr:_objectSpread({},e.attr)},a),Tree2Element(e.child))}function IconBase(e){var a=i=>{var{attr:s,size:o,title:c}=e,d=_objectWithoutProperties$1(e,_excluded$2),b=o||i.size||"1em",g;return i.className&&(g=i.className),e.className&&(g=(g?g+" ":"")+e.className),React.createElement("svg",_extends({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,s,d,{className:g,style:_objectSpread(_objectSpread({color:e.color||i.color},i.style),e.style),height:b,width:b,xmlns:"http://www.w3.org/2000/svg"}),c&&React.createElement("title",null,c),e.children)};return IconContext!==void 0?React.createElement(IconContext.Consumer,null,i=>a(i)):a(DefaultContext)}function FiSearch(e){return GenIcon({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"},child:[]},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"},child:[]}]})(e)}const baseUrl="http://localhost:3001/api";async function getUser(e){const a=await fetch(`${baseUrl}/users/me`,{method:"GET",headers:{Authorization:`Bearer ${e}`,"Content-Type":"application/json"}});if(!a.ok)throw new Error("Failed to fetch user");return await a.json()}async function loginUser(e,a){const i=await fetch(`${baseUrl}/users/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:a})});if(!i.ok)throw new Error("Login failed");return await i.json()}async function registerUser(e,a,i){const s=await fetch(`${baseUrl}/users/register`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e,email:a,password:i})});if(!s.ok){const o=await s.json();throw new Error(o.message||"Failed to register")}return await s.json()}async function updateUser(e,a){const i=await fetch(`${baseUrl}/users/update`,{method:"PATCH",headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`},body:JSON.stringify(a)});if(!i.ok){const s=await i.json();throw new Error(s.message||"Failed to update user")}return await i.json()}async function askOtto(e,a){return await(await fetch(`${baseUrl}/gpt/chat`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${a}`},body:JSON.stringify({message:e})})).json()}async function fetchSurfSpots(e){const a=await fetch(`${baseUrl}/spots/enriched`,{headers:{Authorization:`Bearer ${e}`}});if(!a.ok){const s=await a.text();throw console.error("Failed to fetch surf spots:",s),new Error("Failed to fetch surf spots")}return(await a.json()).spots}function ChatBox({initialMessage:e}){const[a,i]=reactExports.useState([]),[s,o]=reactExports.useState(""),c=reactExports.useRef(!1),d=async(g,_=!1)=>{const tt=g||s;if(!tt.trim())return;const it=localStorage.getItem("jwt");_||i(et=>[...et,{sender:"user",text:tt}]),o("");try{const et=await askOtto(tt,it);i(st=>[...st,{sender:"otto",text:et.reply}])}catch(et){console.error("Error chatting with Otto:",et),i(st=>[...st,{sender:"otto",text:"Oops! Otto wiped out 🏄‍♂️"}])}},b=g=>{g.key==="Enter"&&d()};return reactExports.useEffect(()=>{e&&!c.current&&(c.current=!0,i([{sender:"user",text:e}]),d(e,!0))},[e]),jsxRuntimeExports.jsxs("div",{className:"chatbox",children:[jsxRuntimeExports.jsx("div",{className:"chatbox__messages",children:a.map((g,_)=>jsxRuntimeExports.jsx("div",{className:`chatbox__message chatbox__message--${g.sender}`,children:g.text},_))}),jsxRuntimeExports.jsxs("div",{className:"chatbox__input",children:[jsxRuntimeExports.jsx("input",{type:"text",value:s,onChange:g=>o(g.target.value),onKeyDown:b,placeholder:"Ask Otto about the surf..."}),jsxRuntimeExports.jsx("button",{onClick:d,children:"Send"})]})]})}function SearchBar(){const[e,a]=reactExports.useState(""),[i,s]=reactExports.useState(""),[o,c]=reactExports.useState(!1),{isLoggedIn:d,isOnboarded:b,setActiveModal:g}=reactExports.useContext(CurrentUserContext),_=tt=>{if(tt.preventDefault(),!d||!b){g("register");return}e.trim()&&(s(e),c(!0),a(""))};return reactExports.useEffect(()=>(o?document.body.style.overflow="hidden":document.body.style.overflow="auto",()=>{document.body.style.overflow="auto"}),[o]),jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment,{children:[jsxRuntimeExports.jsxs("form",{className:"searchbar",onSubmit:_,children:[jsxRuntimeExports.jsx("input",{type:"text",className:"searchbar__input",placeholder:"Best time to surf in Malibu?",value:e,onChange:tt=>a(tt.target.value)}),jsxRuntimeExports.jsx("button",{type:"submit",className:"searchbar__button",children:jsxRuntimeExports.jsx(FiSearch,{size:18})})]}),o&&jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment,{children:[jsxRuntimeExports.jsx("div",{className:"chatbox__backdrop"}),jsxRuntimeExports.jsxs("div",{className:"chatbox__overlay",children:[jsxRuntimeExports.jsx("button",{className:"chatbox__close",onClick:()=>c(!1),children:"✕"}),jsxRuntimeExports.jsx(ChatBox,{initialMessage:i})]})]})]})}const logo="/assets/logo-B12JcgWm.png";function Header({onLoginClick:e,onRegisterClick:a,onLogoutClick:i}){var g,_;const[s,o]=reactExports.useState(!1),{userData:c,isLoggedIn:d,isOnboarded:b}=reactExports.useContext(CurrentUserContext);return jsxRuntimeExports.jsx("header",{className:"header",children:jsxRuntimeExports.jsxs("div",{className:"header__container",children:[jsxRuntimeExports.jsxs("div",{className:"header__top",children:[jsxRuntimeExports.jsx("div",{className:"header__logo",children:jsxRuntimeExports.jsxs(Link,{to:d?"/":"/marketing",children:[jsxRuntimeExports.jsx("img",{src:logo,alt:"Otto logo"}),jsxRuntimeExports.jsx("span",{children:"OTTO"})]})}),jsxRuntimeExports.jsxs("button",{className:"header__hamburger",onClick:()=>o(!s),"aria-label":"Toggle menu",children:[jsxRuntimeExports.jsx("span",{className:"header__hamburger-line"}),jsxRuntimeExports.jsx("span",{className:"header__hamburger-line"}),jsxRuntimeExports.jsx("span",{className:"header__hamburger-line"})]})]}),jsxRuntimeExports.jsx("div",{className:"header__search",children:jsxRuntimeExports.jsx(SearchBar,{})}),jsxRuntimeExports.jsx("div",{className:`header__menu ${s?"header__menu--open":""}`,children:!d||!b?jsxRuntimeExports.jsxs("div",{className:"header__auth",children:[jsxRuntimeExports.jsx("button",{onClick:e,className:"button button--outline",children:"Log in"}),jsxRuntimeExports.jsx("button",{onClick:a,className:"button button--filled",children:"Create an account"})]}):jsxRuntimeExports.jsxs("div",{className:"header__profile",children:[jsxRuntimeExports.jsxs("span",{className:"header__username",children:["Hi"," ",((g=c==null?void 0:c.name)==null?void 0:g.charAt(0).toUpperCase())+((_=c==null?void 0:c.name)==null?void 0:_.slice(1)),"!"]}),jsxRuntimeExports.jsx("button",{className:"button button--outline",onClick:i,children:"Log out"})]})})]})})}function Footer(){return jsxRuntimeExports.jsxs("footer",{className:"footer",children:[jsxRuntimeExports.jsxs("div",{className:"footer__logo",children:[jsxRuntimeExports.jsx("img",{src:logo,alt:"Otto logo"}),jsxRuntimeExports.jsx("span",{children:"OTTO"})]}),jsxRuntimeExports.jsx("div",{className:"footer__bottom",children:jsxRuntimeExports.jsxs("div",{className:"footer__legal",children:[jsxRuntimeExports.jsx("a",{href:"#",children:"Privacy"}),jsxRuntimeExports.jsx("a",{href:"#",children:"Terms"})]})})]})}function ModalWithForm({children:e,title:a,onClose:i,onSubmit:s,isOpen:o,buttonText:c,className:d=""}){return reactExports.useEffect(()=>{const b=g=>{g.key==="Escape"&&i()};return o&&document.addEventListener("keydown",b),()=>{document.removeEventListener("keydown",b)}},[o,i]),jsxRuntimeExports.jsx("div",{className:`modal ${o?"modal_opened":""} ${d}`,children:jsxRuntimeExports.jsxs("div",{className:"modal__content",children:[jsxRuntimeExports.jsx("h2",{className:"modal__title",children:a}),jsxRuntimeExports.jsx("button",{onClick:i,className:"modal__close"}),jsxRuntimeExports.jsxs("form",{onSubmit:s,className:"modal__form",children:[e,jsxRuntimeExports.jsx("button",{type:"submit",className:"modal__submit",children:c})]})]})})}function LoginModal({onClose:e,onLogin:a,isOpen:i,handleRegisterClick:s}){const[o,c]=reactExports.useState(""),[d,b]=reactExports.useState(""),g=_=>{_.preventDefault(),a({email:o,password:d}).then(()=>{c(""),b(""),e()}).catch(tt=>{console.error("Error logging in user:",tt),alert("Could not login!")})};return jsxRuntimeExports.jsxs(ModalWithForm,{title:"Log In",onClose:e,isOpen:i,onSubmit:g,buttonText:"Log In",children:[jsxRuntimeExports.jsxs("label",{htmlFor:"email",className:"modal__label",children:["Email*"," ",jsxRuntimeExports.jsx("input",{type:"email",className:"modal__input",id:"login-email",placeholder:"Email",value:o,onChange:_=>c(_.target.value)})]}),jsxRuntimeExports.jsxs("label",{htmlFor:"password",className:"modal__label",children:["Password*"," ",jsxRuntimeExports.jsx("input",{type:"password",className:"modal__input",id:"login-password",placeholder:"Password",value:d,onChange:_=>b(_.target.value)})]}),jsxRuntimeExports.jsxs("div",{className:"modal__secondary-button",children:[jsxRuntimeExports.jsx("p",{children:"or"}),jsxRuntimeExports.jsx("button",{type:"button",className:"modal__login",onClick:s,children:"Sign Up"})]})]})}function RegisterModal({onClose:e,onRegister:a,isOpen:i,handleLoginClick:s}){const[o,c]=reactExports.useState(""),[d,b]=reactExports.useState(""),[g,_]=reactExports.useState(""),tt=it=>{it.preventDefault(),a({name:o,email:d,password:g}).then(()=>{c(""),b(""),_(""),e(),console.log("Successfully Registered User:",{name:o,email:d})}).catch(et=>{console.error("Error registering user:",et),alert("Could not register!")})};return jsxRuntimeExports.jsxs(ModalWithForm,{title:"Sign Up",onClose:e,isOpen:i,onSubmit:tt,buttonText:"Sign up",children:[jsxRuntimeExports.jsxs("label",{htmlFor:"name",className:"modal__label",children:["Name*"," ",jsxRuntimeExports.jsx("input",{type:"text",className:"modal__input",id:"register-name",placeholder:"Name",value:o,onChange:it=>c(it.target.value)})]}),jsxRuntimeExports.jsxs("label",{htmlFor:"email",className:"modal__label",children:["Email*"," ",jsxRuntimeExports.jsx("input",{type:"email",className:"modal__input",id:"register-email",placeholder:"Email",value:d,onChange:it=>b(it.target.value)})]}),jsxRuntimeExports.jsxs("label",{htmlFor:"password",className:"modal__label",children:["Password*"," ",jsxRuntimeExports.jsx("input",{type:"password",className:"modal__input",id:"register-password",placeholder:"Password",value:g,onChange:it=>_(it.target.value)})]}),jsxRuntimeExports.jsxs("div",{className:"modal__secondary-button",children:[jsxRuntimeExports.jsx("p",{children:"or"}),jsxRuntimeExports.jsx("button",{type:"button",className:"modal__login",onClick:s,children:"Login"})]})]})}const waveBanner="/assets/wave-banner-DRW7lBE_.jpg";function CTABanner({onRegisterClick:e}){return jsxRuntimeExports.jsxs("section",{className:"cta",children:[jsxRuntimeExports.jsx("img",{src:waveBanner,alt:"Waves from above",className:"cta__image"}),jsxRuntimeExports.jsxs("div",{className:"cta__content",children:[jsxRuntimeExports.jsx("div",{className:"cta__text",children:jsxRuntimeExports.jsxs("h2",{children:["LET'S FIND THAT ",jsxRuntimeExports.jsx("br",{}),jsxRuntimeExports.jsx("em",{children:"PERFECT WAVE"})]})}),jsxRuntimeExports.jsx("div",{className:"cta__arrow-wrap",children:jsxRuntimeExports.jsx("div",{className:"cta__arrow"})}),jsxRuntimeExports.jsx("button",{onClick:e,className:"cta__button",children:"Sign up"})]})]})}const step1Img="/assets/howitworks-step1-D_8sY2Tv.jpg",step2Img="/assets/howitworks-step2-Dtnx4CTR.jpg",step3Img="/assets/howitworks-step3-IDRRcW4S.jpg";function HowItWorks({onRegisterClick:e}){return jsxRuntimeExports.jsxs("section",{className:"how",children:[jsxRuntimeExports.jsx("h2",{className:"how__title",children:"How it Works"}),jsxRuntimeExports.jsx("p",{className:"how__subtitle",children:"You can use Otto in just 3 simple steps."}),jsxRuntimeExports.jsxs("div",{className:"how__steps",children:[jsxRuntimeExports.jsxs("div",{className:"how__step how__step--reverse",children:[jsxRuntimeExports.jsx("img",{src:step1Img,alt:"Set Surf Preferences",className:"how__image"}),jsxRuntimeExports.jsxs("div",{className:"how__text",children:[jsxRuntimeExports.jsx("h3",{children:"Set Surf Preferences"}),jsxRuntimeExports.jsx("p",{children:"Tell Otto what kind of waves you like and what kind of surf gear you own."}),jsxRuntimeExports.jsxs("div",{className:"how__buttons",children:[jsxRuntimeExports.jsx("button",{onClick:e,className:"primary",children:"Try now"}),jsxRuntimeExports.jsx("button",{onClick:e,className:"secondary",children:"Learn more"})]})]})]}),jsxRuntimeExports.jsxs("div",{className:"how__step",children:[jsxRuntimeExports.jsx("img",{src:step2Img,alt:"Track Conditions",className:"how__image"}),jsxRuntimeExports.jsxs("div",{className:"how__text",children:[jsxRuntimeExports.jsx("h3",{children:"Let Otto Track Conditions"}),jsxRuntimeExports.jsx("p",{children:"Otto monitors real-time swell, wind, and tides to match your preferences."}),jsxRuntimeExports.jsxs("div",{className:"how__buttons",children:[jsxRuntimeExports.jsx("button",{onClick:e,className:"primary",children:"Try now"}),jsxRuntimeExports.jsx("button",{onClick:e,className:"secondary",children:"Learn more"})]})]})]}),jsxRuntimeExports.jsxs("div",{className:"how__step how__step--reverse",children:[jsxRuntimeExports.jsx("img",{src:step3Img,alt:"Get Surf Alerts",className:"how__image"}),jsxRuntimeExports.jsxs("div",{className:"how__text",children:[jsxRuntimeExports.jsx("h3",{children:"Get Surf Alerts & Go!"}),jsxRuntimeExports.jsx("p",{children:"When conditions are perfect, Otto sends you a surf alert with the best spot and time to paddle out."}),jsxRuntimeExports.jsxs("div",{className:"how__buttons",children:[jsxRuntimeExports.jsx("button",{onClick:e,className:"primary",children:"Try now"}),jsxRuntimeExports.jsx("button",{onClick:e,className:"secondary",children:"Learn more"})]})]})]})]})]})}const heroImage="/assets/hero__image-DkWrk1lJ.png",heroImageAccent="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfEAAACeCAYAAAAi5zNGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAUGVYSWZNTQAqAAAACAACARIAAwAAAAEAAQAAh2kABAAAAAEAAAAmAAAAAAADoAEAAwAAAAEAAQAAoAIABAAAAAEAAAHxoAMABAAAAAEAAACeAAAAAInDsFsAAAFZaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIj4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Chle4QcAAAvgSURBVHgB7d3Li2RXHQfwNokiWYr4F6hrF4ogomgiIi40uFCELBRcqBtdCaLigEbRzYhgRMHgxIAPfBEjERMMPsYMJoYxCY6JOj0aEx+jMxnGVpMx4+9giqm+6emuW/d1frc+F3503e665/zO5wS+udXTVc/a2tq6I+qaKAcBAgQIECBQl8Bd0c6RqG9FPR6167hq15kTAgQIECBAYGqB09HAZ6Nujjq5XzNCfD8dPyNAgAABAuMJHIupboz68qpTCvFVpTyPAAECBAgMI3BnDPuhqLvbDi/E24p5PgECBAgQ6EfgthjmY1Gtw3sxvRBfSPhKgAABAgTGEbg3pnlvVHn5vNNxRaerXUyAAAECBAisKrATT3xX1EujOgd4mdSdeFFwECBAgACBYQV+EsNfH3Wqz2ncifepaSwCBAgQILBb4F9x+r6oV0f1GuBlGnfiRcFBgAABAgT6FzgRQ74p6qH+h/7/iO7Eh5I1LgECBAhsssAPYvEvjxoswAuuEC8KDgIECBAg0J/ALTHUG6LO9Tfk3iMJ8b1dfJcAAQIECKwjUN5xrfwDtovrXNz2GiHeVszzCRAgQIDA3gKH49vviRolwEsLQrwoOAgQIECAQDeBcgf+/m5DtL9aiLc3cwUBAgQIEFgWuDVOyh346IcQH53chAQIECAwI4Hyt99vn2o9QnwqefMSIECAwBwErotFnJ9qIUJ8KnnzEiBAgEB2gUOxgPumXIQQn1Lf3AQIECCQVaB8EtlHp25eiE+9A+YnQIAAgWwC5U/I3lFD00K8hl3QAwECBAhkEvh8NHt/DQ0L8Rp2QQ8ECBAgkEXgTDT6wVqaFeK17IQ+CBAgQCCDwCeiybO1NCrEa9kJfRAgQIBA7QKPRYOfrqlJIV7TbuiFAAECBGoW+EhtzQnx2nZEPwQIECBQo8DJaOqm2hoT4rXtiH4IECBAoEaB8rvw/9bWmBCvbUf0Q4AAAQK1CZyLhm6pranSjxCvcVf0RIAAAQI1CRyJZnZqamjRixBfSPhKgAABAgT2FqjyLry0KsT33jDfJUCAAAECReCRqLtrpRDite6MvggQIECgBoGv1NDE5XoQ4peT8X0CBAgQILC19Y2aEYR4zbujNwIECBCYUmA7Jv/llA0cNLcQP0jIzwkQIEBgUwW+XfvChXjtO6Q/AgQIEJhK4NapJl51XiG+qpTnESBAgMAmCfwnFnu09gUL8dp3SH8ECBAgMIVACfAS5FUfQrzq7dEcAQIECEwk8LOJ5m01rRBvxeXJBAgQILAhAvdkWKcQz7BLeiRAgACBsQWOjz3hOvMJ8XXUXEOAAAECcxYoH3aynWGBQjzDLumRAAECBMYUuH/MybrMJcS76LmWAAECBOYo8HCWRQnxLDulTwIECBAYS+AvY03UdR4h3lXQ9QQIECAwN4GrsyxIiGfZKX0SIECAAIGGgBBvgDglQIAAAQJZBIR4lp3SJwECBAgQaAgI8QaIUwIECBAgkEVAiGfZKX0SIECAAIGGgBBvgDglQIAAAQJZBIR4lp3SJwECBAgQaAgI8QaIUwIECBAgkEVAiGfZKX0SIECAAIGGgBBvgDglQIAAAQJZBIR4lp3SJwECBAgQaAgI8QaIUwIECBAgkEVAiGfZKX0SIECAAIGGgBBvgDglQIAAAQJZBIR4lp3SJwECBAgQaAgI8QaIUwIECBAgkEVAiGfZKX0SIECAAIGGgBBvgDglQIAAAQJZBIR4lp3SJwECBAgQaAgI8QaIUwIECBAgkEWghPjFLM3qkwABAgQIjCCQJhdLiD81AogpCBAgQIBAFoGdLI2WEP93lmb1SYAAAQIERhA4N8IcvUxRQvzKXkYyCAECBAgQmIdAqhB/7jzMrYIAAQIECPQicKaXUUYYpNyJOwgQIECAAIFLAr+99LDuR0K87v3RHQECBAiML/Cr8adcb0Yhvp6bqwgQIEBgngKnY1nnsyxNiGfZKX0SIECAwBgCx8eYpK85hHhfksYhQIAAgTkI/DjTIoR4pt3SKwECBAgMLXDX0BP0Ob4Q71PTWAQIECCQWaC8+dnRTAsQ4pl2S68ECBAgMKTA7TH4hSEn6HtsId63qPEIECBAIKvAkWyNC/FsO6ZfAgQIEBhC4GwM+r0hBh5yTCE+pK6xCRAgQCCLQLkLfzJLs4s+hfhCwlcCBAgQ2FSB8nvwT2ZcvBDPuGt6JkCAAIE+BW6KwR7rc8CxxhLiY0mbhwABAgRqFfh4rY0d1JcQP0jIzwkQIEBgzgI3xOJOZV2gEM+6c/omQIAAga4C2zHAoa6DTHm9EJ9S39wECBAgMKXAO2PyJ6ZsoOvcQryroOsJECBAIKPA4Wj6RxkbX+5ZiC9reEyAAAECmyDwYCzyA3NYqBCfwy5aAwECBAisKnA+nnhdVOqX0ReLFeILCV8JECBAYO4CO7HAa6MenstChfhcdtI6CBAgQGA/gfIxo6+POrbfk7L9TIhn2zH9EiBAgEBbgXIH/saon7a9sPbnX1V7g/ojQIAAAQIdBMqnk7026r4OY1R7qTvxardGYwQIECDQUeDRuP4VUbMM8GIjxIuCgwABAgTmJnA0FvSSqF/PbWHL6xHiyxoeEyBAgEB2gYuxgE9FvSrqb9kXc1D/fid+kJCfEyBAgEAWgXui0XdHla8bcbgT34httkgCBAjMWuAPsbq3Rb0samMCvOyoO/Gi4CBAgACBjALl5fLyWeA3Rs3iHdjaboIQbyvm+QQIECAwtcB2NPCFqM9Elb8B39hDiG/s1ls4AQIEUgn8Lrr9YdTNUeVfnjtCQIj7z4AAAQIEahP4YzR0b9QvosrvuMtbpT4e5WgIZAzx8v63d0Zt1D9eaOybUwIECMxFoLwcfubp+nt8PR71jyjHCgK1h/jJWMMDUd+MKv8ndiLKQYAAAQIECIRAbSFefufx1ahyp/3zqHLX7SBAgAABAgT2EKghxE9FX1+L+npU+R2IgwABAgQIEFhBYKoQL+9lW0L7u1GzfWP6Ffw9hQABAgQIdBK4I64u7zU7RpXgLu9n6yBAgAABAgR6EBg6xC9Ej+Xv+l7YQ6+GIECAAAECBJYEhgpx4b2E7CEBAgQIEBhCYIgQvz0afdEQzRqTAAECBAgQuCTQZ4g/GsO++dLQHhEgQIAAAQJDCvQV4uU9bZ83ZKPGJkCAAAECBHYL9BHiH949pDMCBAgQIEBgDIEuIX42Grx2jCbNQYAAAQIECOwW6PJmL9sx1DVRv989pDMCBAgQIEBgDIF1Q7wEd3nTlj+N0aQ5CBAgQIAAgWcKrBPi5UNKXhn152cO5zsECBAgQIDAWAJXtJyofFD7a6IEeEs4TydAgAABAn0LtAnxf8bkr4sqQe4gQIAAAQIEJhZoE+JvjV5/M3G/pidAgAABAgSeFlg1xA/H82+jRoAAAQIECNQlcNDfiZ+Idp9TV8u6IUCAAAECBFa5E39LMD2BigABAgQIEKhL4KAQPxTtPlhXy7ohQIAAAQIEFgKXezn9oXjCOn9HvhjXVwIECBAgQGBAgf3uxK+PeS8MOLehCRAgQIAAgQ4ClwvxL8aYxzqM61ICBAgQIEBgBIHmy+k7MefzR5jXFAQIECBAgEAHgb3uxD8X453uMKZLCRAgQIAAgZEElu/Ey134C0aa1zQECBAgQIBAB4HmnfgNMdZfO4znUgIECBAgQGBEgcWdePmAk6tHnNdUBAgQIECAQAeB5TvxIzFOeTndQYAAAQIECCQRKHfiT0W9OEm/2iRAgAABAgRCYHEn/v14XN6hzUGAAAECBAgkEViE+JeS9KtNAgQIECBAYEngO/H42UvnHhIgQIAAAQIJBK6MHp+MeiBBr1okQIAAAQIEGgL+rKwB4pQAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIBATwL/A0MJgABRoGUHAAAAAElFTkSuQmCC";function Main$1(){return jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment,{children:jsxRuntimeExports.jsxs("main",{className:"hero",children:[jsxRuntimeExports.jsx("h1",{className:"hero__title",children:"Meet Otto – your personal surf scout!"}),jsxRuntimeExports.jsx("div",{className:"hero__content",children:jsxRuntimeExports.jsxs("div",{className:"hero__image-wrapper",children:[jsxRuntimeExports.jsx("img",{className:"hero__image",src:heroImage,alt:"Hero Section Image"}),jsxRuntimeExports.jsx("img",{src:heroImageAccent,alt:"",className:"hero__image-accent"}),jsxRuntimeExports.jsx("span",{className:"hero__image-accent-text",children:"Otto finds your perfect wave based on real-time data and your surf style."}),jsxRuntimeExports.jsx("img",{src:heroImageAccent,alt:"",className:"hero__image-accent-rotated"}),jsxRuntimeExports.jsx("span",{className:"hero__image-accent-text-rotated",children:"Just tell Otto what you like — we’ll take it from there."})]})})]})})}function MarketingPage({onRegisterClick:e}){return jsxRuntimeExports.jsxs("div",{children:[jsxRuntimeExports.jsx(Main$1,{}),jsxRuntimeExports.jsx(HowItWorks,{onRegisterClick:e}),jsxRuntimeExports.jsx(CTABanner,{onRegisterClick:e})]})}function Step1({formData:e,updateForm:a,next:i}){var _;const s=["Beginner","Intermediate","Advanced","Grom mentality"],[o,c]=reactExports.useState(((_=e.shredderLevel)==null?void 0:_[0])||""),[d,b]=reactExports.useState(!1),g=tt=>{const it=o===tt?"":tt;c(it),a({shredderLevel:it?[it]:[]})};return reactExports.useEffect(()=>{b(!!o)},[o]),jsxRuntimeExports.jsxs("div",{className:"onboarding__step",children:[jsxRuntimeExports.jsx("h1",{className:"onboarding__welcome",children:"Fill out the following so Otto can scout waves just for you!"}),jsxRuntimeExports.jsx("h2",{className:"onboarding__title",children:"What level of shredder are you?"}),jsxRuntimeExports.jsx("div",{className:"onboarding__checkbox-group",children:s.map(tt=>{var it;return jsxRuntimeExports.jsxs("label",{className:"onboarding__checkbox-label",children:[jsxRuntimeExports.jsx("input",{type:"checkbox",checked:(it=e.shredderLevel)==null?void 0:it.includes(tt),onChange:()=>g(tt)}),tt]},tt)})}),jsxRuntimeExports.jsx("div",{className:"onboarding__nav-wrapper",children:jsxRuntimeExports.jsx("button",{className:"onboarding__nav-button onboarding__nav-button--right",onClick:i,disabled:!d,children:"→"})})]})}function Step2({formData:e,updateForm:a,next:i,prev:s}){const[o,c]=reactExports.useState(e.waveHeight||[]),[d,b]=reactExports.useState(!1),g=_=>{const tt=o.includes(_)?o.filter(it=>it!==_):[...o,_];c(tt),a({waveHeight:tt})};return reactExports.useEffect(()=>{b(o.length>0)},[o]),jsxRuntimeExports.jsxs("div",{className:"onboarding__step",children:[jsxRuntimeExports.jsx("h2",{className:"onboarding__title",children:"What wave height do you prefer?"}),jsxRuntimeExports.jsx("p",{className:"onboarding__subtext",children:"Check all that apply:"}),jsxRuntimeExports.jsx("div",{className:"onboarding__checkbox-group",children:["1-2 ft","2-4 ft","4-6 ft","6+"].map(_=>jsxRuntimeExports.jsxs("label",{className:"onboarding__checkbox-label",children:[jsxRuntimeExports.jsx("input",{type:"checkbox",checked:o.includes(_),onChange:()=>g(_)}),_]},_))}),jsxRuntimeExports.jsxs("div",{className:"onboarding__nav-wrapper",children:[jsxRuntimeExports.jsx("button",{className:"onboarding__nav-button onboarding__nav-button--left",onClick:s,children:"←"}),jsxRuntimeExports.jsx("button",{className:"onboarding__nav-button onboarding__nav-button--right",onClick:i,disabled:!d,children:"→"})]})]})}function Step3({formData:e,updateForm:a,next:i,prev:s}){const[o,c]=reactExports.useState(e.gear.boards||[]),[d,b]=reactExports.useState(e.gear.wetsuits||[]),[g,_]=reactExports.useState(e.gear.fins||[]),[tt,it]=reactExports.useState(!1),et=["Shortboard","Longboard","Fish","Funboard","My body of course"],st=["Just my skin suit","Spring Suit","Full Suit (3/2mm)","Full Suit (4/3mm+)","Boardies & Bikinis"],nt=["Single Fin","Twin Fin","Thruster (3 fins)","Quad (4 fins)","The ones for my feet"],rt=(ht,$,_e,j)=>{const at=j.includes($)?j.filter(lt=>lt!==$):[...j,$];_e(at),a({gear:{...e.gear,[ht]:at}})};return reactExports.useEffect(()=>{const ht=o.length>0&&d.length>0&&g.length>0;it(ht)},[o,d,g]),jsxRuntimeExports.jsxs("div",{className:"onboarding__step",children:[jsxRuntimeExports.jsx("h2",{className:"onboarding__title",children:"Surf Gear"}),jsxRuntimeExports.jsx("p",{className:"onboarding__subtext",children:"Check all that apply:"}),jsxRuntimeExports.jsxs("div",{className:"onboarding__checkbox-group",children:[jsxRuntimeExports.jsx("p",{children:"What type of board do you use?"}),et.map(ht=>jsxRuntimeExports.jsxs("label",{className:"onboarding__checkbox-label",children:[jsxRuntimeExports.jsx("input",{type:"checkbox",checked:o.includes(ht),onChange:()=>rt("boards",ht,c,o)}),ht]},ht))]}),jsxRuntimeExports.jsxs("div",{className:"onboarding__checkbox-group",children:[jsxRuntimeExports.jsx("p",{children:"What type of wetsuit do you own?"}),st.map(ht=>jsxRuntimeExports.jsxs("label",{className:"onboarding__checkbox-label",children:[jsxRuntimeExports.jsx("input",{type:"checkbox",checked:d.includes(ht),onChange:()=>rt("wetsuits",ht,b,d)}),ht]},ht))]}),jsxRuntimeExports.jsxs("div",{className:"onboarding__checkbox-group",children:[jsxRuntimeExports.jsx("p",{children:"What kind of fins do you have?"}),nt.map(ht=>jsxRuntimeExports.jsxs("label",{className:"onboarding__checkbox-label",children:[jsxRuntimeExports.jsx("input",{type:"checkbox",checked:g.includes(ht),onChange:()=>rt("fins",ht,_,g)}),ht]},ht))]}),jsxRuntimeExports.jsxs("div",{className:"onboarding__nav-wrapper",children:[jsxRuntimeExports.jsx("button",{className:"onboarding__nav-button onboarding__nav-button--left",onClick:s,children:"←"}),jsxRuntimeExports.jsx("button",{className:"onboarding__nav-button onboarding__nav-button--right",onClick:i,disabled:!tt,children:"→"})]})]})}function Step5({formData:e,updateForm:a,next:i,prev:s}){var rt;const[o,c]=reactExports.useState(((rt=e.notifications)==null?void 0:rt[0])||""),[d,b]=reactExports.useState(e.travelDistance||[]),[g,_]=reactExports.useState(!1),tt=["Yes","No","Maybe so"],it=["1-5 miles","5-10 miles","10-15 miles","20+"],et=ht=>{const $={"1-5 miles":0,"5-10 miles":1,"10-15 miles":2,"20+":3};return[...ht].sort((_e,j)=>$[_e]-$[j])},st=ht=>{const $=o===ht?"":ht;c($),a({notifications:$?[$]:[]})},nt=ht=>{const $=d.includes(ht)?d.filter(_e=>_e!==ht):et([...d,ht]);b($),a({travelDistance:$})};return reactExports.useEffect(()=>{_(o!==""&&d.length>0)},[o,d]),jsxRuntimeExports.jsxs("div",{className:"onboarding__step",children:[jsxRuntimeExports.jsx("h3",{className:"onboarding__title",children:"Notifications"}),jsxRuntimeExports.jsx("p",{className:"onboarding__subtext",children:"Get notified when conditions match?"}),jsxRuntimeExports.jsx("div",{className:"onboarding__checkbox-group",children:tt.map(ht=>jsxRuntimeExports.jsxs("label",{className:"onboarding__checkbox-label",children:[jsxRuntimeExports.jsx("input",{type:"checkbox",checked:o===ht,onChange:()=>st(ht)}),ht]},ht))}),jsxRuntimeExports.jsx("h3",{className:"onboarding__title",children:"Distance willing to travel?"}),jsxRuntimeExports.jsx("p",{className:"onboarding__subtext",children:"Check all that apply:"}),jsxRuntimeExports.jsx("div",{className:"onboarding__checkbox-group",children:it.map(ht=>jsxRuntimeExports.jsxs("label",{className:"onboarding__checkbox-label",children:[jsxRuntimeExports.jsx("input",{type:"checkbox",checked:d.includes(ht),onChange:()=>nt(ht)}),ht]},ht))}),jsxRuntimeExports.jsxs("div",{className:"onboarding__nav-wrapper",children:[jsxRuntimeExports.jsx("button",{className:"onboarding__nav-button onboarding__nav-button--left",onClick:s,children:"←"}),jsxRuntimeExports.jsx("button",{className:"onboarding__nav-button onboarding__nav-button--right",onClick:i,disabled:!g,children:"→"})]})]})}function Step6({formData:e,prev:a}){const{setUserData:i}=reactExports.useContext(CurrentUserContext),s=useNavigate(),o=async c=>{c.preventDefault();const d=localStorage.getItem("jwt");try{await updateUser(d,{preferences:e});const b=await getUser(d);i(b),console.log("Updated user:",b.name),console.log("With preferences:",e),s("/")}catch(b){console.error("Failed to submit preferences:",b.message),alert("Failed to submit preferences, please try again later"),s("/marketing")}};return jsxRuntimeExports.jsxs("div",{className:"onboarding__step",children:[jsxRuntimeExports.jsx("h2",{className:"onboarding__title",children:"You’re all set!"}),jsxRuntimeExports.jsx("p",{className:"onboarding__subtext",children:"Otto will now track your surf preferences."}),jsxRuntimeExports.jsx("div",{className:"onboarding__nav-wrapper",children:jsxRuntimeExports.jsx("button",{className:"onboarding__nav-button onboarding__nav-button--left",onClick:a,children:"←"})}),jsxRuntimeExports.jsx("div",{className:"onboarding__submit-container",children:jsxRuntimeExports.jsx("button",{className:"onboarding__submit-button",onClick:o,children:"Finish"})})]})}function ProgressDots({step:e,totalSteps:a}){return jsxRuntimeExports.jsx("div",{className:"progress-dots",children:Array.from({length:a}).map((i,s)=>jsxRuntimeExports.jsx("span",{className:`dot ${s===e?"active":""}`},s))})}const steps=[Step1,Step2,Step3,Step5,Step6];function OnboardingPage(){const[e,a]=reactExports.useState(0),[i,s]=reactExports.useState({shredderLevel:[],waveHeight:[],gear:{boards:[],wetsuits:[],fins:[]},notifications:[]}),o=steps[e],c=()=>a(g=>Math.min(g+1,steps.length-1)),d=()=>a(g=>Math.max(g-1,0)),b=g=>{s(_=>({..._,...g}))};return jsxRuntimeExports.jsxs("div",{className:"onboarding-page",children:[jsxRuntimeExports.jsxs("div",{className:"onboarding__logo",children:[jsxRuntimeExports.jsx("img",{src:logo,alt:"Otto logo"}),jsxRuntimeExports.jsx("span",{children:"OTTO"})]})," ",jsxRuntimeExports.jsx(o,{formData:i,updateForm:b,next:c,prev:d,isLastStep:e===steps.length-1}),jsxRuntimeExports.jsx(ProgressDots,{step:e,totalSteps:steps.length})]})}function Preloader(){return jsxRuntimeExports.jsxs("div",{className:"preloader",children:[jsxRuntimeExports.jsx("div",{className:"circle-preloader"}),jsxRuntimeExports.jsx("p",{className:"preloader__text",children:"Loading..."})]})}function Main(){const[e,a]=reactExports.useState(!1);return jsxRuntimeExports.jsxs("main",{className:"main",children:[jsxRuntimeExports.jsx("h1",{children:"Welcome to Otto!"}),jsxRuntimeExports.jsx("div",{className:"surf-edit",children:e?jsxRuntimeExports.jsx("iframe",{className:"surf-edit__iframe",src:"https://www.youtube.com/embed/5MzE-fT0jvI?autoplay=1&rel=0",title:"Chippa Wilson Surf Edit",frameBorder:"0",allow:"autoplay; encrypted-media",allowFullScreen:!0}):jsxRuntimeExports.jsxs("div",{className:"surf-edit__preview",onClick:()=>a(!0),children:[jsxRuntimeExports.jsx("img",{src:"https://img.youtube.com/vi/5MzE-fT0jvI/maxresdefault.jpg",alt:"Chippa Wilson surf edit",className:"surf-edit__thumbnail"}),jsxRuntimeExports.jsxs("div",{className:"surf-edit__overlay",children:[jsxRuntimeExports.jsx("h2",{children:"Surf Edit of the Week"}),jsxRuntimeExports.jsx("button",{className:"surf-edit__play",children:"▶"})]})]})})]})}function SurfCard({spot:e}){var i;const a=e.imageUrl||"/fallback-surf.jpg";return jsxRuntimeExports.jsxs("div",{className:"surf-card",children:[jsxRuntimeExports.jsx("img",{src:a,alt:e.name,className:"surf-card__img"}),jsxRuntimeExports.jsxs("div",{className:"surf-card__overlay",children:[jsxRuntimeExports.jsx("p",{className:"surf-card__wave",children:((i=e.buoyData)==null?void 0:i.waveHeight)||"N/A"}),jsxRuntimeExports.jsx("h3",{className:"surf-card__name",children:e.name})]})]})}function SurfFeed({backgroundImage:e}){const[a,i]=reactExports.useState([]),[s,o]=reactExports.useState(!0);return reactExports.useEffect(()=>{const c=localStorage.getItem("jwt");fetchSurfSpots(c).then(i).finally(()=>o(!1))},[]),s?jsxRuntimeExports.jsx(Preloader,{}):jsxRuntimeExports.jsxs("section",{className:"surf-spot",style:{backgroundImage:`url(${e})`},children:[jsxRuntimeExports.jsx("h2",{className:"surf-spot__title",children:"Surf Feed"}),jsxRuntimeExports.jsx("ul",{className:"surf-spot__grid",children:a.filter(c=>{var d;return((d=c.buoyData)==null?void 0:d.waveHeight)&&c.buoyData.waveHeight!=="N/A"}).map(c=>jsxRuntimeExports.jsx("li",{className:"surf-spot__card",children:jsxRuntimeExports.jsx(SurfCard,{spot:c})},c._id))})]})}function HomePage(){return jsxRuntimeExports.jsxs("div",{children:[jsxRuntimeExports.jsx(Main,{}),jsxRuntimeExports.jsx(SurfFeed,{backgroundImage:waveBanner})]})}function LogoutModal({onClose:e,isOpen:a,onLogout:i}){const s=o=>{o.preventDefault(),i(),e()};return jsxRuntimeExports.jsx(ModalWithForm,{title:"Log out?",onClose:e,isOpen:a,onSubmit:s,buttonText:"Log out",children:jsxRuntimeExports.jsx("p",{className:"modal__subtitle",children:"Are you sure you want to log out?"})})}const v="5.2.1",fr=30,ip=0,op=317,w=800,h=600,nm="Stanley Code",ddd=0,assets=[{id:"comp_0",layers:[{ddd:0,ind:1,ty:4,nm:"C | back foot 3",parent:27,hd:!0,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:1,k:[{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:0,s:[-121.625,-17.669,0],e:[-121.625,-17.669,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:60,s:[-121.625,-17.669,0],e:[-121.625,-17.669,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:61,s:[-121.625,-17.669,0],e:[-10.043,-447.891,0],to:[0,0,0],ti:[0,0,0]},{t:62}],ix:2},a:{a:0,k:[0,0,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,ef:[{ty:5,nm:"Controller",np:13,mn:"Pseudo/DUIK controller",ix:1,en:1,ef:[{ty:6,nm:"Icon",mn:"Pseudo/DUIK controller-0001",ix:1,v:0},{ty:2,nm:"Color",mn:"Pseudo/DUIK controller-0002",ix:2,v:{a:0,k:[.92549020052,.0941176489,.0941176489,1],ix:2}},{ty:3,nm:"Position",mn:"Pseudo/DUIK controller-0003",ix:3,v:{a:0,k:[0,0],ix:3}},{ty:0,nm:"Size",mn:"Pseudo/DUIK controller-0004",ix:4,v:{a:0,k:53,ix:4}},{ty:0,nm:"Orientation",mn:"Pseudo/DUIK controller-0005",ix:5,v:{a:0,k:0,ix:5}},{ty:0,nm:"Opacity",mn:"Pseudo/DUIK controller-0006",ix:6,v:{a:0,k:100,ix:6}},{ty:6,nm:"",mn:"Pseudo/DUIK controller-0007",ix:7,v:0},{ty:6,nm:"Anchor",mn:"Pseudo/DUIK controller-0008",ix:8,v:0},{ty:2,nm:"Color",mn:"Pseudo/DUIK controller-0009",ix:9,v:{a:0,k:[0,0,0,1],ix:9}},{ty:0,nm:"Size",mn:"Pseudo/DUIK controller-0010",ix:10,v:{a:0,k:53,ix:10}},{ty:6,nm:"",mn:"Pseudo/DUIK controller-0011",ix:11,v:0}]},{ty:5,nm:"IK | back foot",np:50,mn:"Pseudo/DUIK 2layer ik",ix:2,en:1,ef:[{ty:7,nm:"IK",mn:"Pseudo/DUIK 2layer ik-0001",ix:1,v:{a:0,k:1,ix:1}},{ty:7,nm:"Reverse",mn:"Pseudo/DUIK 2layer ik-0002",ix:2,v:{a:0,k:0,ix:2}},{ty:6,nm:"FK",mn:"Pseudo/DUIK 2layer ik-0003",ix:3,v:0},{ty:7,nm:"Follow through & Overlap",mn:"Pseudo/DUIK 2layer ik-0004",ix:4,v:{a:0,k:0,ix:4}},{ty:6,nm:"Follow through & Overlap",mn:"Pseudo/DUIK 2layer ik-0005",ix:5,v:0},{ty:0,nm:"FK",mn:"Pseudo/DUIK 2layer ik-0006",ix:6,v:{a:0,k:0,ix:6}},{ty:0,nm:"Flexibility",mn:"Pseudo/DUIK 2layer ik-0007",ix:7,v:{a:0,k:100,ix:7}},{ty:0,nm:"Resistance",mn:"Pseudo/DUIK 2layer ik-0008",ix:8,v:{a:0,k:10,ix:8}},{ty:6,nm:"",mn:"Pseudo/DUIK 2layer ik-0009",ix:9,v:0},{ty:6,nm:"Individual controls",mn:"Pseudo/DUIK 2layer ik-0010",ix:10,v:0},{ty:0,nm:"Upper",mn:"Pseudo/DUIK 2layer ik-0011",ix:11,v:{a:0,k:0,ix:11}},{ty:0,nm:"Lower",mn:"Pseudo/DUIK 2layer ik-0012",ix:12,v:{a:0,k:0,ix:12}},{ty:0,nm:"Goal",mn:"Pseudo/DUIK 2layer ik-0013",ix:13,v:{a:0,k:0,ix:13}},{ty:6,nm:"",mn:"Pseudo/DUIK 2layer ik-0014",ix:14,v:0},{ty:7,nm:"Parent rotation",mn:"Pseudo/DUIK 2layer ik-0015",ix:15,v:{a:0,k:1,ix:15}},{ty:6,nm:"",mn:"Pseudo/DUIK 2layer ik-0016",ix:16,v:0},{ty:6,nm:"Stretch",mn:"Pseudo/DUIK 2layer ik-0017",ix:17,v:0},{ty:7,nm:"Auto-Stretch",mn:"Pseudo/DUIK 2layer ik-0018",ix:18,v:{a:0,k:1,ix:18}},{ty:0,nm:"Stretch",mn:"Pseudo/DUIK 2layer ik-0019",ix:19,v:{a:0,k:0,ix:19}},{ty:0,nm:"Auto-Shrink",mn:"Pseudo/DUIK 2layer ik-0020",ix:20,v:{a:0,k:0,ix:20}},{ty:6,nm:"",mn:"Pseudo/DUIK 2layer ik-0021",ix:21,v:0},{ty:6,nm:"Advanced",mn:"Pseudo/DUIK 2layer ik-0022",ix:22,v:0},{ty:0,nm:"Full rotation limit",mn:"Pseudo/DUIK 2layer ik-0023",ix:23,v:{a:0,k:-180,ix:23}},{ty:6,nm:"",mn:"Pseudo/DUIK 2layer ik-0024",ix:24,v:0},{ty:6,nm:"Data",mn:"Pseudo/DUIK 2layer ik-0025",ix:25,v:0},{ty:6,nm:"Layers",mn:"Pseudo/DUIK 2layer ik-0026",ix:26,v:0},{ty:10,nm:"Upper",mn:"Pseudo/DUIK 2layer ik-0027",ix:27,v:{a:0,k:2,ix:27}},{ty:10,nm:"Lower",mn:"Pseudo/DUIK 2layer ik-0028",ix:28,v:{a:0,k:4,ix:28}},{ty:10,nm:"Goal",mn:"Pseudo/DUIK 2layer ik-0029",ix:29,v:{a:0,k:3,ix:29}},{ty:6,nm:"",mn:"Pseudo/DUIK 2layer ik-0030",ix:30,v:0},{ty:6,nm:"Stretch data",mn:"Pseudo/DUIK 2layer ik-0031",ix:31,v:0},{ty:0,nm:"Upper stretch",mn:"Pseudo/DUIK 2layer ik-0032",ix:32,v:{a:0,k:0,ix:32,x:`var $bm_rt;
var newLength;
var fx = effect('IK | back foot');
var layer1 = null;
var layer2 = null;
var result = 0;
try {
    layer1 = fx(27);
    layer2 = fx(28);
} catch (e) {
}
if (layer1 != null) {
    newLength = length(layer1.toWorld(layer1.anchorPoint), layer2.toWorld(layer2.anchorPoint));
    result = sub(newLength, fx(40).value);
}
$bm_rt = result;`}},{ty:0,nm:"Upper scale",mn:"Pseudo/DUIK 2layer ik-0033",ix:33,v:{a:0,k:100,ix:33,x:`var $bm_rt;
var fx = effect('IK | back foot');
if (fx(40).value > 0)
    $bm_rt = mul(div(sum(fx(32).value, fx(40).value), fx(40).value), 100);
else
    $bm_rt = 100;`}},{ty:0,nm:"Lower stretch",mn:"Pseudo/DUIK 2layer ik-0034",ix:34,v:{a:0,k:0,ix:34,x:`var $bm_rt;
var newLength;
var fx = effect('IK | back foot');
var layer2 = null;
var result = 0;
try {
    layer2 = fx(28);
} catch (e) {
}
if (layer2 != null) {
    newLength = length(layer2.toWorld(fx(36).value), layer2.toWorld(layer2.anchorPoint));
    result = sub(newLength, fx(41).value);
}
$bm_rt = result;`}},{ty:0,nm:"Lower scale",mn:"Pseudo/DUIK 2layer ik-0035",ix:35,v:{a:0,k:100,ix:35,x:`var $bm_rt;
var fx = effect('IK | back foot');
if (fx(41).value > 0)
    $bm_rt = mul(div(sum(fx(34).value, fx(41).value), fx(41).value), 100);
else
    $bm_rt = 100;`}},{ty:3,nm:"Goal position",mn:"Pseudo/DUIK 2layer ik-0036",ix:36,v:{a:0,k:[-232.536,261.725],ix:36,x:`var $bm_rt;
var fx, layer1, layer1, stretch, auto, IK, shrinkVal, dist1, dist2, IKLength, IKStretched, boneStretch, proportion, posC, posR, distC, shrinkMax, shrink, shrink, boneStretch, boneStretch, boneStretch, coef, coef, coef, coef;
var result = value;
fx = effect('IK | back foot');
layer1 = null;
try {
    layer1 = fx(27);
} catch (e) {
}
if (layer1 != null) {
    stretch = fx(19);
    auto = fx(18).value;
    IK = fx(1).value;
    shrinkVal = div(fx(20).value, 100);
    function getWorldPos(L) {
        return L.toWorld(L.anchorPoint);
    }
    dist1 = fx(40).value;
    dist2 = fx(41).value;
    IKLength = sum(dist1, dist2);
    IKStretched = sum(IKLength, stretch);
    boneStretch = 0;
    proportion = div(dist2, IKLength);
    posC = toWorld(anchorPoint);
    posR = getWorldPos(layer1);
    distC = length(posC, posR);
    shrinkMax = mul(IKLength, shrinkVal);
    shrink = 0;
    if (distC < IKStretched && IK)
        shrink = sub(1, div(distC, IKStretched));
    boneStretch = sub(boneStretch, mul(easeOut(shrink, 0, shrinkMax), proportion));
    if (distC > IKStretched && auto && IK)
        boneStretch = sum(boneStretch, mul(sub(distC, IKLength), proportion));
    else
        boneStretch = sum(boneStretch, mul(stretch, proportion));
    coef = 1;
    dist2 != 0 ? coef = div(sum(dist2, boneStretch), dist2) : coef = 1;
    result = sum(mul(sub([
        -124.019342278813,
        139.586542583283
    ], [
        -162,
        84,
        0
    ]), coef), [
        -162,
        84,
        0
    ]);
}
$bm_rt = result;`}},{ty:3,nm:"Goal world position",mn:"Pseudo/DUIK 2layer ik-0037",ix:37,v:{a:0,k:[750,750],ix:37,x:`var $bm_rt;
var fx = effect('IK | back foot');
var layer2 = null;
var result = [
        0,
        0
    ];
try {
    layer2 = fx(28);
} catch (e) {
}
if (layer2 != null) {
    result = layer2.toWorld(fx(36).value);
}
$bm_rt = result;`}},{ty:6,nm:"",mn:"Pseudo/DUIK 2layer ik-0038",ix:38,v:0},{ty:6,nm:"Lengths",mn:"Pseudo/DUIK 2layer ik-0039",ix:39,v:0},{ty:0,nm:"Upper length",mn:"Pseudo/DUIK 2layer ik-0040",ix:40,v:{a:0,k:76.062,ix:40}},{ty:0,nm:"Lower length",mn:"Pseudo/DUIK 2layer ik-0041",ix:41,v:{a:0,k:67.323,ix:41}},{ty:0,nm:"IK length",mn:"Pseudo/DUIK 2layer ik-0042",ix:42,v:{a:0,k:0,ix:42,x:`var $bm_rt;
var fx = effect('IK | back foot');
var result = sum(fx(40).value, fx(41).value);
var goalPos = fx(37).value;
var layer1 = null;
try {
    layer1 = fx(27);
} catch (e) {
}
if (layer1 != null) {
    result = length(layer1.toWorld(layer1.anchorPoint), goalPos);
}
$bm_rt = result;`}},{ty:6,nm:"",mn:"Pseudo/DUIK 2layer ik-0043",ix:43,v:0},{ty:7,nm:"Straight",mn:"Pseudo/DUIK 2layer ik-0044",ix:44,v:{a:0,k:0,ix:44,x:`var $bm_rt;
var fx;
fx = effect('IK | back foot');
var layer1 = null;
var layer2 = null;
var result = false;
try {
    layer1 = fx(27);
    layer2 = fx(28);
} catch (e) {
}
if (layer1 != null) {
    var a = layer1.toWorld(layer1.anchorPoint);
    var b = layer2.toWorld(layer2.anchorPoint);
    var c = layer2.toWorld(fx(36).value);
    result = Math.abs(a[0] * (b[1] - c[1]) + b[0] * (c[1] - a[1]) + c[0] * (a[1] - b[1])) < 1000;
}
$bm_rt = result;`}},{ty:6,nm:"",mn:"Pseudo/DUIK 2layer ik-0045",ix:45,v:0},{ty:6,nm:"Display",mn:"Pseudo/DUIK 2layer ik-0046",ix:46,v:0},{ty:7,nm:"Draw guides",mn:"Pseudo/DUIK 2layer ik-0047",ix:47,v:{a:0,k:0,ix:47}},{ty:6,nm:"",mn:"Pseudo/DUIK 2layer ik-0048",ix:48,v:0}]}],shapes:[{ty:"gr",it:[{d:1,ty:"el",s:{a:0,k:[2,2],ix:2},p:{a:0,k:[0,0],ix:3},nm:"Ellipse Path 1",mn:"ADBE Vector Shape - Ellipse",hd:!1},{d:1,ty:"el",s:{a:0,k:[10,10],ix:2},p:{a:0,k:[0,0],ix:3},nm:"Ellipse Path 2",mn:"ADBE Vector Shape - Ellipse",hd:!1},{ty:"sr",sy:1,d:1,pt:{a:0,k:4,ix:3},p:{a:0,k:[0,0],ix:4},r:{a:0,k:0,ix:5},ir:{a:0,k:0,ix:6},is:{a:0,k:0,ix:8},or:{a:0,k:10,ix:7},os:{a:0,k:0,ix:9},ix:3,nm:"Polystar Path 1",mn:"ADBE Vector Shape - Star",hd:!1},{ty:"st",c:{a:0,k:[1,1,1,1],ix:3,x:`var $bm_rt;
$bm_rt = effect('Controller')(9);`},o:{a:0,k:100,ix:4},w:{a:0,k:2,ix:5,x:`var $bm_rt;
$bm_rt = div(100, content('Anchor').transform.scale[0]);`},lc:2,lj:1,ml:4,ml2:{a:0,k:4,ix:8},nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3,x:`var $bm_rt;
$bm_rt = [
    effect('Controller')(10),
    effect('Controller')(10)
];`},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Anchor",np:4,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[-6.215,0],[0,6.215],[6.215,0],[0,0]],o:[[0,6.215],[6.215,0],[0,-6.216],[0,0],[0,0]],v:[[-11.067,.048],[.187,11.302],[11.442,.048],[.187,-11.206],[6.94,-17.115]],c:!1},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ind:1,ty:"sh",ix:2,ks:{a:0,k:{i:[[0,0],[0,0]],o:[[0,0],[0,0]],v:[[.062,-7.546],[.062,7.546]],c:!1},ix:2},nm:"Path 2",mn:"ADBE Vector Shape - Group",hd:!1},{ind:2,ty:"sh",ix:3,ks:{a:0,k:{i:[[0,0],[0,0]],o:[[0,0],[0,0]],v:[[7.546,0],[-7.546,0]],c:!1},ix:2},nm:"Path 3",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[.517647087574,.835294127464,.980392158031,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:1.5,ix:5},lc:2,lj:1,ml:4,ml2:{a:0,k:4,ix:8},nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2,x:`var $bm_rt;
$bm_rt = effect('Controller')(3);`},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3,x:`var $bm_rt;
$bm_rt = [
    effect('Controller')(4) * 2,
    effect('Controller')(4) * 2
];`},r:{a:0,k:0,ix:6,x:`var $bm_rt;
$bm_rt = effect('Controller')(5);`},o:{a:0,k:100,ix:7,x:`var $bm_rt;
$bm_rt = effect('Controller')(6);`},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Icon",np:4,cix:2,ix:2,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[0,0]],o:[[0,0],[0,0]],v:[[-8,16],[8,16]],c:!1},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[1,1,1,1],ix:3,x:`var $bm_rt;
$bm_rt = sub(effect('Controller')(2), [
    0.2,
    0.2,
    0.2,
    0
]);`},o:{a:0,k:100,ix:4,x:`var $bm_rt;
var fx = effect('IK | back foot');
if (fx(47).value)
    $bm_rt = mul(fx(44).value, 100);
else
    $bm_rt = 0;`},w:{a:0,k:2,ix:5},lc:2,lj:1,ml:4,ml2:{a:0,k:4,ix:8},nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2,x:`var $bm_rt;
$bm_rt = effect('Controller')(3);`},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3,x:`var $bm_rt;
$bm_rt = [
    effect('Controller')(4) * 2,
    effect('Controller')(4) * 2
];`},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7,x:`var $bm_rt;
$bm_rt = effect('Controller')(6);`},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"IK",np:2,cix:2,ix:3,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[],o:[],v:[],c:!1},ix:2,x:`var $bm_rt;
if (active) {
    var fx = effect('IK | back foot');
    var layer1 = null;
    var result = [[
                0,
                0
            ]];
    if (fx(1).value && fx(47).value) {
        try {
            layer1 = fx(27);
        } catch (e) {
        }
        if (layer1 != null) {
            var l = layer1.toWorld(layer1.anchorPoint);
            l = fromWorld(l);
            result = [
                l,
                [
                    0,
                    0
                ]
            ];
        }
    }
    $bm_rt = createPath(result, [], [], false);
} else
    $bm_rt = value;`},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[1,1,1,1],ix:3,x:`var $bm_rt;
$bm_rt = sub(effect('Controller')(2), [
    0.2,
    0.2,
    0.2,
    0
]);`},o:{a:0,k:100,ix:4},w:{a:0,k:2,ix:5},lc:2,lj:1,ml:4,ml2:{a:0,k:4,ix:8},d:[{n:"d",nm:"dash",v:{a:0,k:5,ix:1}}],nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"IK Line",np:2,cix:2,ix:4,mn:"ADBE Vector Group",hd:!1}],ip:0,op:51,st:0,bm:0},{ddd:0,ind:2,ty:4,nm:"Front Leg Outlines 2",parent:18,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10,x:`var $bm_rt;
var IKFK;
var controller = null;
var result = value;
try {
    controller = effect('IK 2')(1);
} catch (e) {
}
if (controller != null) {
    var fx = controller.effect('IK | back foot');
    IKFK = fx(1).value;
    function ik() {
        var layer1, layer2, endPos, limit, cw, A, C, B, E, a, b, c, x, alpha, D, delta, V, adj1, IK, IK;
        layer1 = thisLayer;
        layer2 = null;
        try {
            layer2 = fx(28);
        } catch (e) {
            return value;
        }
        if (layer2 != null) {
            endPos = fx(36).value;
            limit = fx(23).value;
            cw = fx(2).value;
            function getWorldPos(L) {
                return L.toWorld(L.anchorPoint);
            }
            A = getWorldPos(layer1);
            C = layer2.toWorld(endPos);
            B = getWorldPos(layer2);
            E = getWorldPos(controller);
            a = length(B, C);
            b = length(E, A);
            c = length(A, B);
            x = div(sub(sum(mul(b, b), mul(c, c)), mul(a, a)), mul(2, b));
            alpha = Math.acos(clamp(div(x, c), -1, 1));
            D = sub(E, A);
            delta = Math.atan2(D[1], D[0]);
            result = radiansToDegrees(sub(delta, mul(cw ? 1 : -1, alpha)));
            V = sub(B, A);
            adj1 = radiansToDegrees(Math.atan2(V[1], V[0]));
            IK = sum(sub(result, adj1), value);
            if (IK < limit)
                IK = sum(IK, 360);
            return IK;
        }
    }
    function fk() {
        var follow = fx(15).value;
        var FK = sum(fx(11).value, fx(6).value);
        var p = thisLayer;
        if (!follow) {
            while (p.hasParent) {
                p = p.parent;
                FK = sub(FK, p.rotation.value);
            }
        }
        return FK;
    }
    result = IKFK ? ik() : fk();
}
$bm_rt = result;`},p:{a:1,k:[{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:0,s:[71.385,63.51,0],e:[71.385,63.51,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:60,s:[71.385,63.51,0],e:[44.799,70.382,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:61,s:[44.799,70.382,0],e:[71.385,63.51,0],to:[0,0,0],ti:[0,0,0]},{t:62}],ix:2},a:{a:0,k:[23.424,10.167,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,ef:[{ty:5,nm:"IK",np:3,mn:"Pseudo/DUIK ik",ix:1,en:1,ef:[{ty:10,nm:"Controller",mn:"Pseudo/DUIK ik-0001",ix:1,v:{a:0,k:5,ix:1}}]},{ty:5,nm:"IK 2",np:3,mn:"Pseudo/DUIK ik",ix:2,en:1,ef:[{ty:10,nm:"Controller",mn:"Pseudo/DUIK ik-0001",ix:1,v:{a:0,k:1,ix:1}}]}],shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[3.87,0],[0,0],[0,-3.78],[0,0],[-4.555,3.138],[-.589,17.084]],o:[[0,0],[-3.78,0],[0,0],[0,5.531],[30.311,-20.881],[.134,-3.868]],v:[[16.198,-45.917],[-16.328,-45.917],[-23.173,-39.072],[-23.173,37.158],[-12.41,42.779],[23.039,-38.849]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[23.423,46.167],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 1",np:2,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:51,st:0,bm:0},{ddd:0,ind:3,ty:4,nm:"back foot 2",parent:4,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:-8,ix:10,x:`var $bm_rt;
var ctrl = null;
try {
    $bm_rt = ctrl = effect('IK 2')(1);
} catch (e) {
}
;
if (ctrl != null) {
    var fx = ctrl.effect('IK | back foot');
    var ikfk = fx(1).value;
    function ik() {
        var IK = ctrl.rotation.value;
        var layer = thisLayer;
        while (layer.hasParent) {
            layer = layer.parent;
            IK = sub(IK, layer.rotation);
        }
        return IK;
    }
    function fk() {
        var FK = value;
        var parentRot = parent.transform.rotation;
        var delay = fx(8).value;
        var amp = fx(7).value;
        var ftEnabled = fx(4).value;
        if (!ftEnabled) {
            amp = 0;
            delay = 0;
        } else {
            delay = div(delay, 100);
            amp = div(amp, 100);
        }
        FK = parentRot.valueAtTime(sub(time, delay));
        FK = mul(FK, amp);
        FK = sub(sum(sum(FK, value), fx(13)), parentRot.valueAtTime(0));
        return FK;
    }
    $bm_rt = ikfk ? ik() : fk();
} else
    $bm_rt = value;`},p:{a:0,k:[-124.019,139.587,0],ix:2,x:`var $bm_rt;
var ctrl = null;
var result = value;
try {
    ctrl = effect('IK 2')(1);
} catch (e) {
    value;
}
;
if (ctrl != null) {
    result = ctrl.effect('IK | back foot')(36).value;
}
$bm_rt = result;`},a:{a:0,k:[-275.348,161.652,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,ef:[{ty:5,nm:"IK",np:3,mn:"Pseudo/DUIK ik",ix:1,en:1,ef:[{ty:10,nm:"Controller",mn:"Pseudo/DUIK ik-0001",ix:1,v:{a:0,k:5,ix:1}}]},{ty:5,nm:"IK 2",np:3,mn:"Pseudo/DUIK ik",ix:2,en:1,ef:[{ty:10,nm:"Controller",mn:"Pseudo/DUIK ik-0001",ix:1,v:{a:0,k:1,ix:1}}]}],shapes:[{ty:"gr",it:[{d:1,ty:"el",s:{a:0,k:[43.305,43.305],ix:2},p:{a:0,k:[0,0],ix:3},nm:"Ellipse Path 1",mn:"ADBE Vector Shape - Ellipse",hd:!1},{ty:"st",c:{a:0,k:[.6,.6,.6,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:0,ix:5},lc:1,lj:1,ml:4,ml2:{a:0,k:4,ix:8},nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[-275.348,161.652],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[93.147,93.147],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Ellipse 1",np:3,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:51,st:0,bm:0},{ddd:0,ind:4,ty:4,nm:"leg 2",parent:2,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:8,ix:10,x:`var $bm_rt;
var IKFK, layer1, layer2;
var controller = null;
var result = value;
try {
    controller = effect('IK 2')(1);
} catch (e) {
}
if (controller != null) {
    var fx = controller.effect('IK | back foot');
    IKFK = fx(1).value;
    layer1 = null;
    layer2 = thisLayer;
    try {
        layer1 = fx(27);
    } catch (e) {
    }
    if (layer1 != null) {
        function ik() {
            var endPos, cw, A, B, C, E, a, b, c, x, alpha, y, gamma, V1, adj1, V2, adj2, IK;
            endPos = fx(36).value;
            cw = fx(2).value;
            function getWorldPos(L) {
                return L.toWorld(L.anchorPoint);
            }
            A = getWorldPos(layer1);
            B = getWorldPos(layer2);
            C = layer2.toWorld(endPos);
            E = getWorldPos(controller);
            a = length(B, C);
            b = length(E, A);
            c = length(A, B);
            x = div(sub(sum(mul(b, b), mul(c, c)), mul(a, a)), mul(2, b));
            alpha = Math.acos(clamp(div(x, c), -1, 1));
            y = sub(b, x);
            gamma = Math.acos(clamp(div(y, a), -1, 1));
            result = mul(cw ? 1 : -1, radiansToDegrees(sum(gamma, alpha)));
            V1 = sub(B, A);
            adj1 = radiansToDegrees(Math.atan2(V1[1], V1[0]));
            V2 = sub(C, B);
            adj2 = radiansToDegrees(Math.atan2(V2[1], V2[0]));
            IK = sum(sub(sum(result, adj1), adj2), value);
            return IK;
        }
        function fk() {
            var FK;
            var ctrlRot = fx(6);
            var delay = fx(8).value;
            var amp = fx(7).value;
            var follow = fx(15).value;
            var ftEnabled = fx(4).value;
            if (!ftEnabled) {
                amp = 0;
                delay = 0;
            } else {
                delay = div(delay, 100);
                amp = div(amp, 100);
            }
            FK = ctrlRot.valueAtTime(sub(time, delay));
            if (follow && hasParent) {
                var cP = layer1;
                while (cP.hasParent) {
                    cP = cP.parent;
                    FK = sub(FK, sub(cP.rotation.value, cP.rotation.valueAtTime(sub(time, delay))));
                }
            }
            FK = sub(FK, ctrlRot.value);
            FK = mul(FK, amp);
            FK = sub(FK, mul(ctrlRot.velocity, div(delay, 5)));
            FK = sum(FK, fx(12).value);
            return FK;
        }
        result = IKFK ? ik() : fk();
    }
}
$bm_rt = result;`},p:{a:0,k:[6.809,84.392,0],ix:2,x:`var $bm_rt;
var fx, layer1, stretch, auto, IK, shrinkVal, dist1, dist2, IKLength, IKStretched, boneStretch, proportion, posC, posR, distC, shrinkMax, shrink, shrink, boneStretch, boneStretch, boneStretch, coef, coef, coef, coef;
var ctrl = null;
var result = value;
try {
    ctrl = effect('IK 2')(1);
} catch (e) {
    value;
}
;
if (ctrl != null) {
    fx = ctrl.effect('IK | back foot');
    layer1 = null;
    result = [
        211,
        25
    ];
    try {
        layer1 = fx(27);
    } catch (e) {
    }
    if (layer1 != null) {
        stretch = fx(19).value;
        auto = fx(18).value;
        IK = fx(1).value;
        shrinkVal = div(fx(20).value, 100);
        function getWorldPos(L) {
            return L.toWorld(L.anchorPoint);
        }
        dist1 = fx(40).value;
        dist2 = fx(41).value;
        IKLength = sum(dist1, dist2);
        IKStretched = sum(IKLength, stretch);
        boneStretch = 0;
        proportion = div(dist1, IKLength);
        posC = getWorldPos(ctrl);
        posR = getWorldPos(layer1);
        distC = length(posC, posR);
        shrinkMax = mul(IKLength, shrinkVal);
        shrink = 0;
        if (distC < IKStretched && IK)
            shrink = sub(1, div(distC, IKStretched));
        boneStretch = sub(boneStretch, mul(easeOut(shrink, 0, shrinkMax), proportion));
        if (distC > IKStretched && auto && IK)
            boneStretch = sum(boneStretch, mul(sub(distC, IKLength), proportion));
        else
            boneStretch = sum(boneStretch, mul(stretch, proportion));
        coef = 1;
        dist1 != 0 ? coef = div(sum(dist1, boneStretch), dist1) : coef = 1;
        result = sum(mul(sub([
            6.80930328369141,
            84.3920974731445,
            0
        ], [
            23.4235000610352,
            10.1669998168945,
            0
        ]), coef), [
            23.4235000610352,
            10.1669998168945,
            0
        ]);
    }
}
$bm_rt = result;`},a:{a:0,k:[-162,84,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,ef:[{ty:5,nm:"IK",np:3,mn:"Pseudo/DUIK ik",ix:1,en:1,ef:[{ty:10,nm:"Controller",mn:"Pseudo/DUIK ik-0001",ix:1,v:{a:0,k:5,ix:1}}]},{ty:5,nm:"IK 2",np:3,mn:"Pseudo/DUIK ik",ix:2,en:1,ef:[{ty:10,nm:"Controller",mn:"Pseudo/DUIK ik-0001",ix:1,v:{a:0,k:1,ix:1}}]}],shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[0,0]],o:[[0,0],[0,0]],v:[[-162,84],[-123,150]],c:!1},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[.6,.6,.6,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:10,ix:5},lc:2,lj:1,ml:4,ml2:{a:0,k:4,ix:8},nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Shape 1",np:3,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:51,st:0,bm:0},{ddd:0,ind:5,ty:4,nm:"C | back foot 2",parent:27,hd:!0,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:1,k:[{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:0,s:[-163.848,-17.348,0],e:[-163.848,-17.348,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:60,s:[-163.848,-17.348,0],e:[-163.848,-17.348,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:61,s:[-163.848,-17.348,0],e:[58.423,-524.894,0],to:[0,0,0],ti:[0,0,0]},{t:62}],ix:2},a:{a:0,k:[0,0,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,ef:[{ty:5,nm:"Controller",np:13,mn:"Pseudo/DUIK controller",ix:1,en:1,ef:[{ty:6,nm:"Icon",mn:"Pseudo/DUIK controller-0001",ix:1,v:0},{ty:2,nm:"Color",mn:"Pseudo/DUIK controller-0002",ix:2,v:{a:0,k:[.92549020052,.0941176489,.0941176489,1],ix:2}},{ty:3,nm:"Position",mn:"Pseudo/DUIK controller-0003",ix:3,v:{a:0,k:[0,0],ix:3}},{ty:0,nm:"Size",mn:"Pseudo/DUIK controller-0004",ix:4,v:{a:0,k:53,ix:4}},{ty:0,nm:"Orientation",mn:"Pseudo/DUIK controller-0005",ix:5,v:{a:0,k:0,ix:5}},{ty:0,nm:"Opacity",mn:"Pseudo/DUIK controller-0006",ix:6,v:{a:0,k:100,ix:6}},{ty:6,nm:"",mn:"Pseudo/DUIK controller-0007",ix:7,v:0},{ty:6,nm:"Anchor",mn:"Pseudo/DUIK controller-0008",ix:8,v:0},{ty:2,nm:"Color",mn:"Pseudo/DUIK controller-0009",ix:9,v:{a:0,k:[0,0,0,1],ix:9}},{ty:0,nm:"Size",mn:"Pseudo/DUIK controller-0010",ix:10,v:{a:0,k:53,ix:10}},{ty:6,nm:"",mn:"Pseudo/DUIK controller-0011",ix:11,v:0}]},{ty:5,nm:"IK | back foot",np:50,mn:"Pseudo/DUIK 2layer ik",ix:2,en:1,ef:[{ty:7,nm:"IK",mn:"Pseudo/DUIK 2layer ik-0001",ix:1,v:{a:0,k:1,ix:1}},{ty:7,nm:"Reverse",mn:"Pseudo/DUIK 2layer ik-0002",ix:2,v:{a:0,k:0,ix:2}},{ty:6,nm:"FK",mn:"Pseudo/DUIK 2layer ik-0003",ix:3,v:0},{ty:7,nm:"Follow through & Overlap",mn:"Pseudo/DUIK 2layer ik-0004",ix:4,v:{a:0,k:0,ix:4}},{ty:6,nm:"Follow through & Overlap",mn:"Pseudo/DUIK 2layer ik-0005",ix:5,v:0},{ty:0,nm:"FK",mn:"Pseudo/DUIK 2layer ik-0006",ix:6,v:{a:0,k:0,ix:6}},{ty:0,nm:"Flexibility",mn:"Pseudo/DUIK 2layer ik-0007",ix:7,v:{a:0,k:100,ix:7}},{ty:0,nm:"Resistance",mn:"Pseudo/DUIK 2layer ik-0008",ix:8,v:{a:0,k:10,ix:8}},{ty:6,nm:"",mn:"Pseudo/DUIK 2layer ik-0009",ix:9,v:0},{ty:6,nm:"Individual controls",mn:"Pseudo/DUIK 2layer ik-0010",ix:10,v:0},{ty:0,nm:"Upper",mn:"Pseudo/DUIK 2layer ik-0011",ix:11,v:{a:0,k:0,ix:11}},{ty:0,nm:"Lower",mn:"Pseudo/DUIK 2layer ik-0012",ix:12,v:{a:0,k:0,ix:12}},{ty:0,nm:"Goal",mn:"Pseudo/DUIK 2layer ik-0013",ix:13,v:{a:0,k:0,ix:13}},{ty:6,nm:"",mn:"Pseudo/DUIK 2layer ik-0014",ix:14,v:0},{ty:7,nm:"Parent rotation",mn:"Pseudo/DUIK 2layer ik-0015",ix:15,v:{a:0,k:1,ix:15}},{ty:6,nm:"",mn:"Pseudo/DUIK 2layer ik-0016",ix:16,v:0},{ty:6,nm:"Stretch",mn:"Pseudo/DUIK 2layer ik-0017",ix:17,v:0},{ty:7,nm:"Auto-Stretch",mn:"Pseudo/DUIK 2layer ik-0018",ix:18,v:{a:0,k:1,ix:18}},{ty:0,nm:"Stretch",mn:"Pseudo/DUIK 2layer ik-0019",ix:19,v:{a:0,k:0,ix:19}},{ty:0,nm:"Auto-Shrink",mn:"Pseudo/DUIK 2layer ik-0020",ix:20,v:{a:0,k:0,ix:20}},{ty:6,nm:"",mn:"Pseudo/DUIK 2layer ik-0021",ix:21,v:0},{ty:6,nm:"Advanced",mn:"Pseudo/DUIK 2layer ik-0022",ix:22,v:0},{ty:0,nm:"Full rotation limit",mn:"Pseudo/DUIK 2layer ik-0023",ix:23,v:{a:0,k:-180,ix:23}},{ty:6,nm:"",mn:"Pseudo/DUIK 2layer ik-0024",ix:24,v:0},{ty:6,nm:"Data",mn:"Pseudo/DUIK 2layer ik-0025",ix:25,v:0},{ty:6,nm:"Layers",mn:"Pseudo/DUIK 2layer ik-0026",ix:26,v:0},{ty:10,nm:"Upper",mn:"Pseudo/DUIK 2layer ik-0027",ix:27,v:{a:0,k:6,ix:27}},{ty:10,nm:"Lower",mn:"Pseudo/DUIK 2layer ik-0028",ix:28,v:{a:0,k:8,ix:28}},{ty:10,nm:"Goal",mn:"Pseudo/DUIK 2layer ik-0029",ix:29,v:{a:0,k:7,ix:29}},{ty:6,nm:"",mn:"Pseudo/DUIK 2layer ik-0030",ix:30,v:0},{ty:6,nm:"Stretch data",mn:"Pseudo/DUIK 2layer ik-0031",ix:31,v:0},{ty:0,nm:"Upper stretch",mn:"Pseudo/DUIK 2layer ik-0032",ix:32,v:{a:0,k:0,ix:32,x:`var $bm_rt;
var newLength;
var fx = effect('IK | back foot');
var layer1 = null;
var layer2 = null;
var result = 0;
try {
    layer1 = fx(27);
    layer2 = fx(28);
} catch (e) {
}
if (layer1 != null) {
    newLength = length(layer1.toWorld(layer1.anchorPoint), layer2.toWorld(layer2.anchorPoint));
    result = sub(newLength, fx(40).value);
}
$bm_rt = result;`}},{ty:0,nm:"Upper scale",mn:"Pseudo/DUIK 2layer ik-0033",ix:33,v:{a:0,k:100,ix:33,x:`var $bm_rt;
var fx = effect('IK | back foot');
if (fx(40).value > 0)
    $bm_rt = mul(div(sum(fx(32).value, fx(40).value), fx(40).value), 100);
else
    $bm_rt = 100;`}},{ty:0,nm:"Lower stretch",mn:"Pseudo/DUIK 2layer ik-0034",ix:34,v:{a:0,k:0,ix:34,x:`var $bm_rt;
var newLength;
var fx = effect('IK | back foot');
var layer2 = null;
var result = 0;
try {
    layer2 = fx(28);
} catch (e) {
}
if (layer2 != null) {
    newLength = length(layer2.toWorld(fx(36).value), layer2.toWorld(layer2.anchorPoint));
    result = sub(newLength, fx(41).value);
}
$bm_rt = result;`}},{ty:0,nm:"Lower scale",mn:"Pseudo/DUIK 2layer ik-0035",ix:35,v:{a:0,k:100,ix:35,x:`var $bm_rt;
var fx = effect('IK | back foot');
if (fx(41).value > 0)
    $bm_rt = mul(div(sum(fx(34).value, fx(41).value), fx(41).value), 100);
else
    $bm_rt = 100;`}},{ty:3,nm:"Goal position",mn:"Pseudo/DUIK 2layer ik-0036",ix:36,v:{a:0,k:[-235.796,268.471],ix:36,x:`var $bm_rt;
var fx, layer1, layer1, stretch, auto, IK, shrinkVal, dist1, dist2, IKLength, IKStretched, boneStretch, proportion, posC, posR, distC, shrinkMax, shrink, shrink, boneStretch, boneStretch, boneStretch, coef, coef, coef, coef;
var result = value;
fx = effect('IK | back foot');
layer1 = null;
try {
    layer1 = fx(27);
} catch (e) {
}
if (layer1 != null) {
    stretch = fx(19);
    auto = fx(18).value;
    IK = fx(1).value;
    shrinkVal = div(fx(20).value, 100);
    function getWorldPos(L) {
        return L.toWorld(L.anchorPoint);
    }
    dist1 = fx(40).value;
    dist2 = fx(41).value;
    IKLength = sum(dist1, dist2);
    IKStretched = sum(IKLength, stretch);
    boneStretch = 0;
    proportion = div(dist2, IKLength);
    posC = toWorld(anchorPoint);
    posR = getWorldPos(layer1);
    distC = length(posC, posR);
    shrinkMax = mul(IKLength, shrinkVal);
    shrink = 0;
    if (distC < IKStretched && IK)
        shrink = sub(1, div(distC, IKStretched));
    boneStretch = sub(boneStretch, mul(easeOut(shrink, 0, shrinkMax), proportion));
    if (distC > IKStretched && auto && IK)
        boneStretch = sum(boneStretch, mul(sub(distC, IKLength), proportion));
    else
        boneStretch = sum(boneStretch, mul(stretch, proportion));
    coef = 1;
    dist2 != 0 ? coef = div(sum(dist2, boneStretch), dist2) : coef = 1;
    result = sum(mul(sub([
        -125.758072895446,
        143.184421087686
    ], [
        -162,
        84,
        0
    ]), coef), [
        -162,
        84,
        0
    ]);
}
$bm_rt = result;`}},{ty:3,nm:"Goal world position",mn:"Pseudo/DUIK 2layer ik-0037",ix:37,v:{a:0,k:[750,750],ix:37,x:`var $bm_rt;
var fx = effect('IK | back foot');
var layer2 = null;
var result = [
        0,
        0
    ];
try {
    layer2 = fx(28);
} catch (e) {
}
if (layer2 != null) {
    result = layer2.toWorld(fx(36).value);
}
$bm_rt = result;`}},{ty:6,nm:"",mn:"Pseudo/DUIK 2layer ik-0038",ix:38,v:0},{ty:6,nm:"Lengths",mn:"Pseudo/DUIK 2layer ik-0039",ix:39,v:0},{ty:0,nm:"Upper length",mn:"Pseudo/DUIK 2layer ik-0040",ix:40,v:{a:0,k:76.062,ix:40}},{ty:0,nm:"Lower length",mn:"Pseudo/DUIK 2layer ik-0041",ix:41,v:{a:0,k:69.399,ix:41}},{ty:0,nm:"IK length",mn:"Pseudo/DUIK 2layer ik-0042",ix:42,v:{a:0,k:0,ix:42,x:`var $bm_rt;
var fx = effect('IK | back foot');
var result = sum(fx(40).value, fx(41).value);
var goalPos = fx(37).value;
var layer1 = null;
try {
    layer1 = fx(27);
} catch (e) {
}
if (layer1 != null) {
    result = length(layer1.toWorld(layer1.anchorPoint), goalPos);
}
$bm_rt = result;`}},{ty:6,nm:"",mn:"Pseudo/DUIK 2layer ik-0043",ix:43,v:0},{ty:7,nm:"Straight",mn:"Pseudo/DUIK 2layer ik-0044",ix:44,v:{a:0,k:0,ix:44,x:`var $bm_rt;
var fx;
fx = effect('IK | back foot');
var layer1 = null;
var layer2 = null;
var result = false;
try {
    layer1 = fx(27);
    layer2 = fx(28);
} catch (e) {
}
if (layer1 != null) {
    var a = layer1.toWorld(layer1.anchorPoint);
    var b = layer2.toWorld(layer2.anchorPoint);
    var c = layer2.toWorld(fx(36).value);
    result = Math.abs(a[0] * (b[1] - c[1]) + b[0] * (c[1] - a[1]) + c[0] * (a[1] - b[1])) < 1000;
}
$bm_rt = result;`}},{ty:6,nm:"",mn:"Pseudo/DUIK 2layer ik-0045",ix:45,v:0},{ty:6,nm:"Display",mn:"Pseudo/DUIK 2layer ik-0046",ix:46,v:0},{ty:7,nm:"Draw guides",mn:"Pseudo/DUIK 2layer ik-0047",ix:47,v:{a:0,k:0,ix:47}},{ty:6,nm:"",mn:"Pseudo/DUIK 2layer ik-0048",ix:48,v:0}]}],shapes:[{ty:"gr",it:[{d:1,ty:"el",s:{a:0,k:[2,2],ix:2},p:{a:0,k:[0,0],ix:3},nm:"Ellipse Path 1",mn:"ADBE Vector Shape - Ellipse",hd:!1},{d:1,ty:"el",s:{a:0,k:[10,10],ix:2},p:{a:0,k:[0,0],ix:3},nm:"Ellipse Path 2",mn:"ADBE Vector Shape - Ellipse",hd:!1},{ty:"sr",sy:1,d:1,pt:{a:0,k:4,ix:3},p:{a:0,k:[0,0],ix:4},r:{a:0,k:0,ix:5},ir:{a:0,k:0,ix:6},is:{a:0,k:0,ix:8},or:{a:0,k:10,ix:7},os:{a:0,k:0,ix:9},ix:3,nm:"Polystar Path 1",mn:"ADBE Vector Shape - Star",hd:!1},{ty:"st",c:{a:0,k:[1,1,1,1],ix:3,x:`var $bm_rt;
$bm_rt = effect('Controller')(9);`},o:{a:0,k:100,ix:4},w:{a:0,k:2,ix:5,x:`var $bm_rt;
$bm_rt = div(100, content('Anchor').transform.scale[0]);`},lc:2,lj:1,ml:4,ml2:{a:0,k:4,ix:8},nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3,x:`var $bm_rt;
$bm_rt = [
    effect('Controller')(10),
    effect('Controller')(10)
];`},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Anchor",np:4,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[-6.215,0],[0,6.215],[6.215,0],[0,0]],o:[[0,6.215],[6.215,0],[0,-6.216],[0,0],[0,0]],v:[[-11.067,.048],[.187,11.302],[11.442,.048],[.187,-11.206],[6.94,-17.115]],c:!1},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ind:1,ty:"sh",ix:2,ks:{a:0,k:{i:[[0,0],[0,0]],o:[[0,0],[0,0]],v:[[.062,-7.546],[.062,7.546]],c:!1},ix:2},nm:"Path 2",mn:"ADBE Vector Shape - Group",hd:!1},{ind:2,ty:"sh",ix:3,ks:{a:0,k:{i:[[0,0],[0,0]],o:[[0,0],[0,0]],v:[[7.546,0],[-7.546,0]],c:!1},ix:2},nm:"Path 3",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[.517647087574,.835294127464,.980392158031,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:1.5,ix:5},lc:2,lj:1,ml:4,ml2:{a:0,k:4,ix:8},nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2,x:`var $bm_rt;
$bm_rt = effect('Controller')(3);`},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3,x:`var $bm_rt;
$bm_rt = [
    effect('Controller')(4) * 2,
    effect('Controller')(4) * 2
];`},r:{a:0,k:0,ix:6,x:`var $bm_rt;
$bm_rt = effect('Controller')(5);`},o:{a:0,k:100,ix:7,x:`var $bm_rt;
$bm_rt = effect('Controller')(6);`},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Icon",np:4,cix:2,ix:2,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[0,0]],o:[[0,0],[0,0]],v:[[-8,16],[8,16]],c:!1},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[1,1,1,1],ix:3,x:`var $bm_rt;
$bm_rt = sub(effect('Controller')(2), [
    0.2,
    0.2,
    0.2,
    0
]);`},o:{a:0,k:100,ix:4,x:`var $bm_rt;
var fx = effect('IK | back foot');
if (fx(47).value)
    $bm_rt = mul(fx(44).value, 100);
else
    $bm_rt = 0;`},w:{a:0,k:2,ix:5},lc:2,lj:1,ml:4,ml2:{a:0,k:4,ix:8},nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2,x:`var $bm_rt;
$bm_rt = effect('Controller')(3);`},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3,x:`var $bm_rt;
$bm_rt = [
    effect('Controller')(4) * 2,
    effect('Controller')(4) * 2
];`},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7,x:`var $bm_rt;
$bm_rt = effect('Controller')(6);`},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"IK",np:2,cix:2,ix:3,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[],o:[],v:[],c:!1},ix:2,x:`var $bm_rt;
if (active) {
    var fx = effect('IK | back foot');
    var layer1 = null;
    var result = [[
                0,
                0
            ]];
    if (fx(1).value && fx(47).value) {
        try {
            layer1 = fx(27);
        } catch (e) {
        }
        if (layer1 != null) {
            var l = layer1.toWorld(layer1.anchorPoint);
            l = fromWorld(l);
            result = [
                l,
                [
                    0,
                    0
                ]
            ];
        }
    }
    $bm_rt = createPath(result, [], [], false);
} else
    $bm_rt = value;`},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[.176470592618,.176470592618,.176470592618,1],ix:3,x:`var $bm_rt;
$bm_rt = sub(effect('Controller')(2), [
    0.2,
    0.2,
    0.2,
    0
]);`},o:{a:0,k:100,ix:4},w:{a:0,k:2,ix:5},lc:2,lj:1,ml:4,ml2:{a:0,k:4,ix:8},d:[{n:"d",nm:"dash",v:{a:0,k:5,ix:1}}],nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"IK Line",np:2,cix:2,ix:4,mn:"ADBE Vector Group",hd:!1}],ip:0,op:51,st:0,bm:0},{ddd:0,ind:6,ty:4,nm:"Front Leg Outlines",parent:18,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10,x:`var $bm_rt;
var IKFK;
var controller = null;
var result = value;
try {
    controller = effect('IK')(1);
} catch (e) {
}
if (controller != null) {
    var fx = controller.effect('IK | back foot');
    IKFK = fx(1).value;
    function ik() {
        var layer1, layer2, endPos, limit, cw, A, C, B, E, a, b, c, x, alpha, D, delta, V, adj1, IK, IK;
        layer1 = thisLayer;
        layer2 = null;
        try {
            layer2 = fx(28);
        } catch (e) {
            return value;
        }
        if (layer2 != null) {
            endPos = fx(36).value;
            limit = fx(23).value;
            cw = fx(2).value;
            function getWorldPos(L) {
                return L.toWorld(L.anchorPoint);
            }
            A = getWorldPos(layer1);
            C = layer2.toWorld(endPos);
            B = getWorldPos(layer2);
            E = getWorldPos(controller);
            a = length(B, C);
            b = length(E, A);
            c = length(A, B);
            x = div(sub(sum(mul(b, b), mul(c, c)), mul(a, a)), mul(2, b));
            alpha = Math.acos(clamp(div(x, c), -1, 1));
            D = sub(E, A);
            delta = Math.atan2(D[1], D[0]);
            result = radiansToDegrees(sub(delta, mul(cw ? 1 : -1, alpha)));
            V = sub(B, A);
            adj1 = radiansToDegrees(Math.atan2(V[1], V[0]));
            IK = sum(sub(result, adj1), value);
            if (IK < limit)
                IK = sum(IK, 360);
            return IK;
        }
    }
    function fk() {
        var follow = fx(15).value;
        var FK = sum(fx(11).value, fx(6).value);
        var p = thisLayer;
        if (!follow) {
            while (p.hasParent) {
                p = p.parent;
                FK = sub(FK, p.rotation.value);
            }
        }
        return FK;
    }
    result = IKFK ? ik() : fk();
}
$bm_rt = result;`},p:{a:1,k:[{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:0,s:[32.885,65.01,0],e:[32.885,65.01,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:60,s:[32.885,65.01,0],e:[40.767,34.386,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:61,s:[40.767,34.386,0],e:[32.885,65.01,0],to:[0,0,0],ti:[0,0,0]},{t:62}],ix:2},a:{a:0,k:[23.424,10.167,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,ef:[{ty:5,nm:"IK",np:3,mn:"Pseudo/DUIK ik",ix:1,en:1,ef:[{ty:10,nm:"Controller",mn:"Pseudo/DUIK ik-0001",ix:1,v:{a:0,k:5,ix:1}}]}],shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[3.87,0],[0,0],[0,-3.78],[0,0],[-4.555,3.138],[-.589,17.084]],o:[[0,0],[-3.78,0],[0,0],[0,5.531],[30.311,-20.881],[.134,-3.868]],v:[[16.198,-45.917],[-16.328,-45.917],[-23.173,-39.072],[-23.173,37.158],[-12.41,42.779],[23.039,-38.849]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[23.423,46.167],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 1",np:2,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:51,st:0,bm:0},{ddd:0,ind:7,ty:4,nm:"back foot",parent:8,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:-8,ix:10,x:`var $bm_rt;
var ctrl = null;
try {
    $bm_rt = ctrl = effect('IK')(1);
} catch (e) {
}
;
if (ctrl != null) {
    var fx = ctrl.effect('IK | back foot');
    var ikfk = fx(1).value;
    function ik() {
        var IK = ctrl.rotation.value;
        var layer = thisLayer;
        while (layer.hasParent) {
            layer = layer.parent;
            IK = sub(IK, layer.rotation);
        }
        return IK;
    }
    function fk() {
        var FK = value;
        var parentRot = parent.transform.rotation;
        var delay = fx(8).value;
        var amp = fx(7).value;
        var ftEnabled = fx(4).value;
        if (!ftEnabled) {
            amp = 0;
            delay = 0;
        } else {
            delay = div(delay, 100);
            amp = div(amp, 100);
        }
        FK = parentRot.valueAtTime(sub(time, delay));
        FK = mul(FK, amp);
        FK = sub(sum(sum(FK, value), fx(13)), parentRot.valueAtTime(0));
        return FK;
    }
    $bm_rt = ikfk ? ik() : fk();
} else
    $bm_rt = value;`},p:{a:0,k:[-109.649,83.759,0],ix:2,x:`var $bm_rt;
var ctrl = null;
var result = value;
try {
    ctrl = effect('IK')(1);
} catch (e) {
    value;
}
;
if (ctrl != null) {
    result = ctrl.effect('IK | back foot')(36).value;
}
$bm_rt = result;`},a:{a:0,k:[-275.348,161.652,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,ef:[{ty:5,nm:"IK",np:3,mn:"Pseudo/DUIK ik",ix:1,en:1,ef:[{ty:10,nm:"Controller",mn:"Pseudo/DUIK ik-0001",ix:1,v:{a:0,k:5,ix:1}}]}],shapes:[{ty:"gr",it:[{d:1,ty:"el",s:{a:0,k:[43.305,43.305],ix:2},p:{a:0,k:[0,0],ix:3},nm:"Ellipse Path 1",mn:"ADBE Vector Shape - Ellipse",hd:!1},{ty:"st",c:{a:0,k:[.6,.6,.6,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:0,ix:5},lc:1,lj:1,ml:4,ml2:{a:0,k:4,ix:8},nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[-275.348,161.652],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[93.147,93.147],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Ellipse 1",np:3,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:51,st:0,bm:0},{ddd:0,ind:8,ty:4,nm:"leg",parent:6,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:8,ix:10,x:`var $bm_rt;
var IKFK, layer1, layer2;
var controller = null;
var result = value;
try {
    controller = effect('IK')(1);
} catch (e) {
}
if (controller != null) {
    var fx = controller.effect('IK | back foot');
    IKFK = fx(1).value;
    layer1 = null;
    layer2 = thisLayer;
    try {
        layer1 = fx(27);
    } catch (e) {
    }
    if (layer1 != null) {
        function ik() {
            var endPos, cw, A, B, C, E, a, b, c, x, alpha, y, gamma, V1, adj1, V2, adj2, IK;
            endPos = fx(36).value;
            cw = fx(2).value;
            function getWorldPos(L) {
                return L.toWorld(L.anchorPoint);
            }
            A = getWorldPos(layer1);
            B = getWorldPos(layer2);
            C = layer2.toWorld(endPos);
            E = getWorldPos(controller);
            a = length(B, C);
            b = length(E, A);
            c = length(A, B);
            x = div(sub(sum(mul(b, b), mul(c, c)), mul(a, a)), mul(2, b));
            alpha = Math.acos(clamp(div(x, c), -1, 1));
            y = sub(b, x);
            gamma = Math.acos(clamp(div(y, a), -1, 1));
            result = mul(cw ? 1 : -1, radiansToDegrees(sum(gamma, alpha)));
            V1 = sub(B, A);
            adj1 = radiansToDegrees(Math.atan2(V1[1], V1[0]));
            V2 = sub(C, B);
            adj2 = radiansToDegrees(Math.atan2(V2[1], V2[0]));
            IK = sum(sub(sum(result, adj1), adj2), value);
            return IK;
        }
        function fk() {
            var FK;
            var ctrlRot = fx(6);
            var delay = fx(8).value;
            var amp = fx(7).value;
            var follow = fx(15).value;
            var ftEnabled = fx(4).value;
            if (!ftEnabled) {
                amp = 0;
                delay = 0;
            } else {
                delay = div(delay, 100);
                amp = div(amp, 100);
            }
            FK = ctrlRot.valueAtTime(sub(time, delay));
            if (follow && hasParent) {
                var cP = layer1;
                while (cP.hasParent) {
                    cP = cP.parent;
                    FK = sub(FK, sub(cP.rotation.value, cP.rotation.valueAtTime(sub(time, delay))));
                }
            }
            FK = sub(FK, ctrlRot.value);
            FK = mul(FK, amp);
            FK = sub(FK, mul(ctrlRot.velocity, div(delay, 5)));
            FK = sum(FK, fx(12).value);
            return FK;
        }
        result = IKFK ? ik() : fk();
    }
}
$bm_rt = result;`},p:{a:0,k:[6.809,84.392,0],ix:2,x:`var $bm_rt;
var fx, layer1, stretch, auto, IK, shrinkVal, dist1, dist2, IKLength, IKStretched, boneStretch, proportion, posC, posR, distC, shrinkMax, shrink, shrink, boneStretch, boneStretch, boneStretch, coef, coef, coef, coef;
var ctrl = null;
var result = value;
try {
    ctrl = effect('IK')(1);
} catch (e) {
    value;
}
;
if (ctrl != null) {
    fx = ctrl.effect('IK | back foot');
    layer1 = null;
    result = [
        211,
        25
    ];
    try {
        layer1 = fx(27);
    } catch (e) {
    }
    if (layer1 != null) {
        stretch = fx(19).value;
        auto = fx(18).value;
        IK = fx(1).value;
        shrinkVal = div(fx(20).value, 100);
        function getWorldPos(L) {
            return L.toWorld(L.anchorPoint);
        }
        dist1 = fx(40).value;
        dist2 = fx(41).value;
        IKLength = sum(dist1, dist2);
        IKStretched = sum(IKLength, stretch);
        boneStretch = 0;
        proportion = div(dist1, IKLength);
        posC = getWorldPos(ctrl);
        posR = getWorldPos(layer1);
        distC = length(posC, posR);
        shrinkMax = mul(IKLength, shrinkVal);
        shrink = 0;
        if (distC < IKStretched && IK)
            shrink = sub(1, div(distC, IKStretched));
        boneStretch = sub(boneStretch, mul(easeOut(shrink, 0, shrinkMax), proportion));
        if (distC > IKStretched && auto && IK)
            boneStretch = sum(boneStretch, mul(sub(distC, IKLength), proportion));
        else
            boneStretch = sum(boneStretch, mul(stretch, proportion));
        coef = 1;
        dist1 != 0 ? coef = div(sum(dist1, boneStretch), dist1) : coef = 1;
        result = sum(mul(sub([
            6.80930328369141,
            84.3920974731445,
            0
        ], [
            23.4235000610352,
            10.1669998168945,
            0
        ]), coef), [
            23.4235000610352,
            10.1669998168945,
            0
        ]);
    }
}
$bm_rt = result;`},a:{a:0,k:[-162,84,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,ef:[{ty:5,nm:"IK",np:3,mn:"Pseudo/DUIK ik",ix:1,en:1,ef:[{ty:10,nm:"Controller",mn:"Pseudo/DUIK ik-0001",ix:1,v:{a:0,k:5,ix:1}}]}],shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[0,0]],o:[[0,0],[0,0]],v:[[-162,84],[-123,150]],c:!1},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[.6,.6,.6,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:10,ix:5},lc:2,lj:1,ml:4,ml2:{a:0,k:4,ix:8},nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Shape 1",np:3,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:51,st:0,bm:0},{ddd:0,ind:9,ty:4,nm:"front leg 2::Ankle",parent:27,hd:!0,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10,x:`var $bm_rt;
try {
    var parentRot = hasParent ? parentTotal() : 0;
    var rotCalc = sub(thisLayer('ADBE Root Vectors Group')('Admin')('Transform')('Rotation'), parentRot);
    $bm_rt = sum(rotCalc, value);
} catch (err) {
    $bm_rt = value;
}
;
function parentTotal() {
    var parentVal = 0;
    var layerChain = 'thisLayer';
    while (eval([layerChain][0]).hasParent) {
        layerChain = sum(layerChain, '.parent');
        parentVal = sum(parentVal, eval([layerChain][0]).rotation);
    }
    return parentVal;
}`},p:{a:1,k:[{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:0,s:[83.08,-9.616,0],e:[83.08,-9.616,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:113,s:[83.08,-9.616,0],e:[1.654,-220.281,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:114,s:[1.654,-220.281,0],e:[53.244,-12.751,0],to:[0,0,0],ti:[0,0,0]},{t:115}],ix:2},a:{a:0,k:[0,0,0],ix:1},s:{a:0,k:[100,100],ix:6}},ao:0,ef:[{ty:5,nm:"RubberHose 2",np:18,mn:"Pseudo/3bf5uID/RubberHose_2",ix:1,en:1,ef:[{ty:0,nm:"Hose Length",mn:"Pseudo/3bf5uID/RubberHose_2-0001",ix:1,v:{a:0,k:104,ix:1}},{ty:0,nm:"Bend Radius",mn:"Pseudo/3bf5uID/RubberHose_2-0002",ix:2,v:{a:0,k:100,ix:2}},{ty:0,nm:"Realism",mn:"Pseudo/3bf5uID/RubberHose_2-0003",ix:3,v:{a:0,k:0,ix:3}},{ty:0,nm:"Bend Direction",mn:"Pseudo/3bf5uID/RubberHose_2-0004",ix:4,v:{a:0,k:100,ix:4}},{ty:7,nm:"Auto Rotate Start",mn:"Pseudo/3bf5uID/RubberHose_2-0005",ix:5,v:{a:0,k:0,ix:5}},{ty:7,nm:"Auto Rotate End",mn:"Pseudo/3bf5uID/RubberHose_2-0006",ix:6,v:{a:0,k:1,ix:6}},{ty:6,nm:"Math Stuff",mn:"Pseudo/3bf5uID/RubberHose_2-0007",ix:7,v:0},{ty:3,nm:"A",mn:"Pseudo/3bf5uID/RubberHose_2-0008",ix:8,v:{a:0,k:[0,0],ix:8,x:`var $bm_rt;
$bm_rt = thisLayer.toComp([
    0,
    0,
    0
]);`}},{ty:3,nm:"B",mn:"Pseudo/3bf5uID/RubberHose_2-0009",ix:9,v:{a:0,k:[0,0],ix:9,x:`var $bm_rt;
try {
    var b = thisLayer(2)('Admin')(2)('B')(2)(1)._name;
    $bm_rt = thisComp.layer(b).toComp([
        0,
        0,
        0
    ]);
} catch (err) {
    $bm_rt = value;
}`}},{ty:0,nm:"Outer Radius",mn:"Pseudo/3bf5uID/RubberHose_2-0010",ix:10,v:{a:0,k:0,ix:10,x:`var $bm_rt;
var a = thisLayer(4)('RubberHose 2')('A');
var b = thisLayer(4)('RubberHose 2')('B');
var s = length(a, b);
$bm_rt = mul(Math.sin(0.78539816339), s);`}},{ty:0,nm:"Inner Radius",mn:"Pseudo/3bf5uID/RubberHose_2-0011",ix:11,v:{a:0,k:0,ix:11,x:`var $bm_rt;
var eff = thisLayer(4)('RubberHose 2');
var bendRad = eff('Bend Radius');
var hoseLength = div(eff('Hose Length'), 2);
var realism = eff('Realism');
var bendDir = div(eff('Bend Direction'), 100);
var sFac = eff('Parent Scale');
var straight = eff('Straight');
var autoFlop = eff('AutoFlop');
var roundShrink = linear(Math.abs(bendRad), 0, 100, 1, 0.87);
var innerRad;
if (hoseLength > straight) {
    innerRad = sum(straight, mul(Math.sqrt(sub(Math.pow(hoseLength, 2), Math.pow(straight, 2))), roundShrink));
    innerRad = linear(realism, 0, 100, hoseLength, innerRad);
    innerRad = linear(Math.abs(bendDir), straight, innerRad);
} else {
    innerRad = straight;
}
innerRad *= Math.abs(sFac);
innerRad = linear(Math.abs(autoFlop), mul(straight, Math.max(Math.abs(sFac), 0.001)), innerRad);
$bm_rt = innerRad;`}},{ty:0,nm:"Straight",mn:"Pseudo/3bf5uID/RubberHose_2-0012",ix:12,v:{a:0,k:0,ix:12,x:`var $bm_rt;
var sFac = thisLayer(4)('RubberHose 2')('Parent Scale');
var outerRad = div(thisLayer(4)('RubberHose 2')('Outer Radius'), Math.max(Math.abs(sFac), 0.001));
;
$bm_rt = div(mul(1.4142135623731, outerRad), 2);`}},{ty:0,nm:"Base Rotation",mn:"Pseudo/3bf5uID/RubberHose_2-0013",ix:13,v:{a:0,k:0,ix:13,x:`var $bm_rt;
var a = thisLayer(4)('RubberHose 2')('A');
var b = thisLayer(4)('RubberHose 2')('B');
$bm_rt = radiansToDegrees(Math.atan2(sub(a[1], b[1]), sub(a[0], b[0])));`}},{ty:0,nm:"AutoFlop",mn:"Pseudo/3bf5uID/RubberHose_2-0014",ix:14,v:{a:0,k:0,ix:14,x:`var $bm_rt;
var hasAF = false, isEnabled = false, output;
try {
    var lyrAF = thisComp.layer(sum(thisLayer._name.split('::')[0], '::AutoFlop'));
    isEnabled = lyrAF(4)('Enable')(1);
    var falloffAngle = lyrAF(4)('Falloff')(1);
    hasAF = true;
    var a = thisLayer.toComp([
            0,
            0,
            0
        ]);
    var b = thisLayer(4)('RubberHose 2')('B');
} catch (e) {
}
if (hasAF && isEnabled == 1) {
    var threshRot = lyrAF('ADBE Transform Group')('ADBE Rotate Z');
    threshRot %= 360;
    var ctrlAngle = $bm_neg(radiansToDegrees(Math.atan2(sub(b[0], a[0]), sub(b[1], a[1]))));
    var offsetAngle = sub(threshRot, ctrlAngle);
    offsetAngle %= 360;
    var sign = offsetAngle > 0 && offsetAngle < 180 || offsetAngle < -180 ? -1 : 1;
    var absAngle = Math.abs(offsetAngle);
    if (absAngle > 90) {
        absAngle = Math.abs(sub(absAngle, 180));
    }
    if (absAngle > 90) {
        absAngle = Math.abs(sub(absAngle, 180));
    }
    output = linear(absAngle, 0, falloffAngle, 0, 1);
    output *= sign;
} else {
    output = 1;
}
$bm_rt = output;
function parentTotal() {
    var parentVal = 0;
    var layerChain = 'thisLayer';
    while (eval([layerChain][0]).hasParent) {
        layerChain = sum(layerChain, '.parent');
        parentVal = sum(parentVal, eval([layerChain][0]).rotation);
    }
    return parentVal;
}`}},{ty:0,nm:"Parent Scale",mn:"Pseudo/3bf5uID/RubberHose_2-0015",ix:15,v:{a:0,k:0,ix:15,x:`var $bm_rt;
var sFactor = 1;
var scaleNorm = 0;
var layerChain = 'thisLayer';
while (eval([layerChain][0]).hasParent) {
    layerChain = sum(layerChain, '.parent');
    scaleNorm = div(eval(layerChain)('ADBE Transform Group')('ADBE Scale')[0], 100);
    sFactor = mul(sFactor, scaleNorm);
}
$bm_rt = sFactor;`}},{ty:6,nm:"",mn:"Pseudo/3bf5uID/RubberHose_2-0016",ix:16,v:0}]}],shapes:[{ty:"gr",it:[{ty:"gr",it:[{ty:"gr",it:[{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"front leg 2::Ankle",np:0,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[135,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"A",np:1,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ty:"gr",it:[{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[20,20],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"front leg 2::Hip",np:0,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"B",np:1,cix:2,ix:2,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ty:"gr",it:[{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"2.04",np:0,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1,cl:"04"},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Version",np:1,cix:2,ix:3,mn:"ADBE Vector Group",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6,x:`var $bm_rt;
var eff = thisLayer(4)('RubberHose 2');
var autoRotate = eff('Auto Rotate End');
if (autoRotate == 1) {
    var a = thisLayer.toComp([
            0,
            0,
            0
        ]);
    var b = eff('B');
    var s = length(a, b);
    var sFac = eff('Parent Scale');
    var autoFlop = 1;
    var realism = eff('Realism');
    var bendDir = div(eff('Bend Direction'), 100);
    var hoseLength = div(eff('Hose Length'), 2);
    var bendRad = eff('Bend Radius');
    var autoFlop = eff('AutoFlop');
    var baseRot = $bm_neg(radiansToDegrees(Math.atan2(sub(b[0], a[0]), sub(b[1], a[1]))));
    var outerRad = mul(Math.sin(0.78539816339), s);
    var straight = div(mul(1.4142135623731, outerRad), 2);
    straight /= Math.max(Math.abs(sFac), 0.001);
    var roundShrink = linear(Math.abs(bendRad), 0, 100, 1, 0.87);
    var innerRad;
    if (hoseLength > straight) {
        innerRad = sum(straight, mul(Math.sqrt(sub(Math.pow(hoseLength, 2), Math.pow(straight, 2))), roundShrink));
        innerRad = linear(realism, 0, 100, hoseLength, innerRad);
        innerRad = linear(Math.abs(bendDir), straight, innerRad);
    } else {
        innerRad = straight;
    }
    innerRad = linear(Math.abs(autoFlop), straight, innerRad);
    var flopDir = 1;
    if (bendDir < 0) {
        flopDir = -1;
    }
    flopDir *= autoFlop;
    var opp = mul(sub(innerRad, straight), flopDir);
    var theta = Math.atan(div(opp, Math.max(straight, 0.001)));
    var bendAngle = radiansToDegrees(theta);
    if (sFac < 0) {
        baseRot *= -1;
    }
    bendRad *= div(div(theta, $bm_neg(Math.PI)), linear(s, hoseLength, 0, 2, 0.9));
    var rotCalc = sub(sum(baseRot, bendAngle), bendRad);
    $bm_rt = rotCalc;
} else {
    $bm_rt = value;
}
;`},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Admin",np:3,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ty:"gr",it:[{d:1,ty:"el",s:{a:0,k:[100,100],ix:2},p:{a:0,k:[0,0],ix:3},nm:"Circle",mn:"ADBE Vector Shape - Ellipse",hd:!1},{ind:1,ty:"sh",ix:2,ks:{a:0,k:{i:[[0,0],[0,0]],o:[[0,0],[0,0]],v:[[-75,0],[75,0]],c:!1},ix:2},nm:"01",mn:"ADBE Vector Shape - Group",hd:!1},{ind:2,ty:"sh",ix:3,ks:{a:0,k:{i:[[0,0],[0,0]],o:[[0,0],[0,0]],v:[[0,-30],[0,30]],c:!1},ix:2},nm:"02",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[15,15],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"ControlShape",np:3,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"st",c:{a:0,k:[1,.560000002384,0,1],ix:3,x:`var $bm_rt;
if (thisLayer.active) {
    try {
        var eff = thisLayer(4)('RubberHose 2');
        var a = thisLayer.toComp([
                0,
                0,
                0
            ]);
        var b = eff('B');
        var straight = eff('Straight');
        var hoseLength = div(eff('Hose Length'), 2);
        if (straight > hoseLength) {
            $bm_rt = [
                0.51,
                0.83,
                0.98,
                1
            ];
        } else {
            $bm_rt = value;
        }
    } catch (err) {
        $bm_rt = value;
    }
} else {
    $bm_rt = value;
}`},o:{a:0,k:100,ix:4},w:{a:0,k:1.5,ix:5},lc:1,lj:1,ml:4,ml2:{a:0,k:4,ix:8},nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Control Point",np:2,cix:2,ix:2,mn:"ADBE Vector Group",hd:!1}],ip:0,op:51,st:0,bm:0},{ddd:0,ind:10,ty:4,nm:"front leg 1::Ankle",parent:27,hd:!0,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10,x:`var $bm_rt;
try {
    var parentRot = hasParent ? parentTotal() : 0;
    var rotCalc = sub(thisLayer('ADBE Root Vectors Group')('Admin')('Transform')('Rotation'), parentRot);
    $bm_rt = sum(rotCalc, value);
} catch (err) {
    $bm_rt = value;
}
;
function parentTotal() {
    var parentVal = 0;
    var layerChain = 'thisLayer';
    while (eval([layerChain][0]).hasParent) {
        layerChain = sum(layerChain, '.parent');
        parentVal = sum(parentVal, eval([layerChain][0]).rotation);
    }
    return parentVal;
}`},p:{a:1,k:[{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:0,s:[30.236,-3.374,0],e:[30.236,-3.374,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:113,s:[30.236,-3.374,0],e:[-255.431,-222.434,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:114,s:[-255.431,-222.434,0],e:[9.664,-8.552,0],to:[0,0,0],ti:[0,0,0]},{t:115}],ix:2},a:{a:0,k:[0,0,0],ix:1},s:{a:0,k:[100,100],ix:6}},ao:0,ef:[{ty:5,nm:"RubberHose 2",np:18,mn:"Pseudo/3bf5uID/RubberHose_2",ix:1,en:1,ef:[{ty:0,nm:"Hose Length",mn:"Pseudo/3bf5uID/RubberHose_2-0001",ix:1,v:{a:0,k:96,ix:1}},{ty:0,nm:"Bend Radius",mn:"Pseudo/3bf5uID/RubberHose_2-0002",ix:2,v:{a:0,k:100,ix:2}},{ty:0,nm:"Realism",mn:"Pseudo/3bf5uID/RubberHose_2-0003",ix:3,v:{a:0,k:0,ix:3}},{ty:0,nm:"Bend Direction",mn:"Pseudo/3bf5uID/RubberHose_2-0004",ix:4,v:{a:0,k:100,ix:4}},{ty:7,nm:"Auto Rotate Start",mn:"Pseudo/3bf5uID/RubberHose_2-0005",ix:5,v:{a:0,k:0,ix:5}},{ty:7,nm:"Auto Rotate End",mn:"Pseudo/3bf5uID/RubberHose_2-0006",ix:6,v:{a:0,k:1,ix:6}},{ty:6,nm:"Math Stuff",mn:"Pseudo/3bf5uID/RubberHose_2-0007",ix:7,v:0},{ty:3,nm:"A",mn:"Pseudo/3bf5uID/RubberHose_2-0008",ix:8,v:{a:0,k:[0,0],ix:8,x:`var $bm_rt;
$bm_rt = thisLayer.toComp([
    0,
    0,
    0
]);`}},{ty:3,nm:"B",mn:"Pseudo/3bf5uID/RubberHose_2-0009",ix:9,v:{a:0,k:[0,0],ix:9,x:`var $bm_rt;
try {
    var b = thisLayer(2)('Admin')(2)('B')(2)(1)._name;
    $bm_rt = thisComp.layer(b).toComp([
        0,
        0,
        0
    ]);
} catch (err) {
    $bm_rt = value;
}`}},{ty:0,nm:"Outer Radius",mn:"Pseudo/3bf5uID/RubberHose_2-0010",ix:10,v:{a:0,k:0,ix:10,x:`var $bm_rt;
var a = thisLayer(4)('RubberHose 2')('A');
var b = thisLayer(4)('RubberHose 2')('B');
var s = length(a, b);
$bm_rt = mul(Math.sin(0.78539816339), s);`}},{ty:0,nm:"Inner Radius",mn:"Pseudo/3bf5uID/RubberHose_2-0011",ix:11,v:{a:0,k:0,ix:11,x:`var $bm_rt;
var eff = thisLayer(4)('RubberHose 2');
var bendRad = eff('Bend Radius');
var hoseLength = div(eff('Hose Length'), 2);
var realism = eff('Realism');
var bendDir = div(eff('Bend Direction'), 100);
var sFac = eff('Parent Scale');
var straight = eff('Straight');
var autoFlop = eff('AutoFlop');
var roundShrink = linear(Math.abs(bendRad), 0, 100, 1, 0.87);
var innerRad;
if (hoseLength > straight) {
    innerRad = sum(straight, mul(Math.sqrt(sub(Math.pow(hoseLength, 2), Math.pow(straight, 2))), roundShrink));
    innerRad = linear(realism, 0, 100, hoseLength, innerRad);
    innerRad = linear(Math.abs(bendDir), straight, innerRad);
} else {
    innerRad = straight;
}
innerRad *= Math.abs(sFac);
innerRad = linear(Math.abs(autoFlop), mul(straight, Math.max(Math.abs(sFac), 0.001)), innerRad);
$bm_rt = innerRad;`}},{ty:0,nm:"Straight",mn:"Pseudo/3bf5uID/RubberHose_2-0012",ix:12,v:{a:0,k:0,ix:12,x:`var $bm_rt;
var sFac = thisLayer(4)('RubberHose 2')('Parent Scale');
var outerRad = div(thisLayer(4)('RubberHose 2')('Outer Radius'), Math.max(Math.abs(sFac), 0.001));
;
$bm_rt = div(mul(1.4142135623731, outerRad), 2);`}},{ty:0,nm:"Base Rotation",mn:"Pseudo/3bf5uID/RubberHose_2-0013",ix:13,v:{a:0,k:0,ix:13,x:`var $bm_rt;
var a = thisLayer(4)('RubberHose 2')('A');
var b = thisLayer(4)('RubberHose 2')('B');
$bm_rt = radiansToDegrees(Math.atan2(sub(a[1], b[1]), sub(a[0], b[0])));`}},{ty:0,nm:"AutoFlop",mn:"Pseudo/3bf5uID/RubberHose_2-0014",ix:14,v:{a:0,k:0,ix:14,x:`var $bm_rt;
var hasAF = false, isEnabled = false, output;
try {
    var lyrAF = thisComp.layer(sum(thisLayer._name.split('::')[0], '::AutoFlop'));
    isEnabled = lyrAF(4)('Enable')(1);
    var falloffAngle = lyrAF(4)('Falloff')(1);
    hasAF = true;
    var a = thisLayer.toComp([
            0,
            0,
            0
        ]);
    var b = thisLayer(4)('RubberHose 2')('B');
} catch (e) {
}
if (hasAF && isEnabled == 1) {
    var threshRot = lyrAF('ADBE Transform Group')('ADBE Rotate Z');
    threshRot %= 360;
    var ctrlAngle = $bm_neg(radiansToDegrees(Math.atan2(sub(b[0], a[0]), sub(b[1], a[1]))));
    var offsetAngle = sub(threshRot, ctrlAngle);
    offsetAngle %= 360;
    var sign = offsetAngle > 0 && offsetAngle < 180 || offsetAngle < -180 ? -1 : 1;
    var absAngle = Math.abs(offsetAngle);
    if (absAngle > 90) {
        absAngle = Math.abs(sub(absAngle, 180));
    }
    if (absAngle > 90) {
        absAngle = Math.abs(sub(absAngle, 180));
    }
    output = linear(absAngle, 0, falloffAngle, 0, 1);
    output *= sign;
} else {
    output = 1;
}
$bm_rt = output;
function parentTotal() {
    var parentVal = 0;
    var layerChain = 'thisLayer';
    while (eval([layerChain][0]).hasParent) {
        layerChain = sum(layerChain, '.parent');
        parentVal = sum(parentVal, eval([layerChain][0]).rotation);
    }
    return parentVal;
}`}},{ty:0,nm:"Parent Scale",mn:"Pseudo/3bf5uID/RubberHose_2-0015",ix:15,v:{a:0,k:0,ix:15,x:`var $bm_rt;
var sFactor = 1;
var scaleNorm = 0;
var layerChain = 'thisLayer';
while (eval([layerChain][0]).hasParent) {
    layerChain = sum(layerChain, '.parent');
    scaleNorm = div(eval(layerChain)('ADBE Transform Group')('ADBE Scale')[0], 100);
    sFactor = mul(sFactor, scaleNorm);
}
$bm_rt = sFactor;`}},{ty:6,nm:"",mn:"Pseudo/3bf5uID/RubberHose_2-0016",ix:16,v:0}]}],shapes:[{ty:"gr",it:[{ty:"gr",it:[{ty:"gr",it:[{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"front leg 1::Ankle",np:0,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[135,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"A",np:1,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ty:"gr",it:[{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[20,20],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"front leg 1::Hip",np:0,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"B",np:1,cix:2,ix:2,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ty:"gr",it:[{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"2.04",np:0,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1,cl:"04"},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Version",np:1,cix:2,ix:3,mn:"ADBE Vector Group",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6,x:`var $bm_rt;
var eff = thisLayer(4)('RubberHose 2');
var autoRotate = eff('Auto Rotate End');
if (autoRotate == 1) {
    var a = thisLayer.toComp([
            0,
            0,
            0
        ]);
    var b = eff('B');
    var s = length(a, b);
    var sFac = eff('Parent Scale');
    var autoFlop = 1;
    var realism = eff('Realism');
    var bendDir = div(eff('Bend Direction'), 100);
    var hoseLength = div(eff('Hose Length'), 2);
    var bendRad = eff('Bend Radius');
    var autoFlop = eff('AutoFlop');
    var baseRot = $bm_neg(radiansToDegrees(Math.atan2(sub(b[0], a[0]), sub(b[1], a[1]))));
    var outerRad = mul(Math.sin(0.78539816339), s);
    var straight = div(mul(1.4142135623731, outerRad), 2);
    straight /= Math.max(Math.abs(sFac), 0.001);
    var roundShrink = linear(Math.abs(bendRad), 0, 100, 1, 0.87);
    var innerRad;
    if (hoseLength > straight) {
        innerRad = sum(straight, mul(Math.sqrt(sub(Math.pow(hoseLength, 2), Math.pow(straight, 2))), roundShrink));
        innerRad = linear(realism, 0, 100, hoseLength, innerRad);
        innerRad = linear(Math.abs(bendDir), straight, innerRad);
    } else {
        innerRad = straight;
    }
    innerRad = linear(Math.abs(autoFlop), straight, innerRad);
    var flopDir = 1;
    if (bendDir < 0) {
        flopDir = -1;
    }
    flopDir *= autoFlop;
    var opp = mul(sub(innerRad, straight), flopDir);
    var theta = Math.atan(div(opp, Math.max(straight, 0.001)));
    var bendAngle = radiansToDegrees(theta);
    if (sFac < 0) {
        baseRot *= -1;
    }
    bendRad *= div(div(theta, $bm_neg(Math.PI)), linear(s, hoseLength, 0, 2, 0.9));
    var rotCalc = sub(sum(baseRot, bendAngle), bendRad);
    $bm_rt = rotCalc;
} else {
    $bm_rt = value;
}
;`},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Admin",np:3,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ty:"gr",it:[{d:1,ty:"el",s:{a:0,k:[100,100],ix:2},p:{a:0,k:[0,0],ix:3},nm:"Circle",mn:"ADBE Vector Shape - Ellipse",hd:!1},{ind:1,ty:"sh",ix:2,ks:{a:0,k:{i:[[0,0],[0,0]],o:[[0,0],[0,0]],v:[[-75,0],[75,0]],c:!1},ix:2},nm:"01",mn:"ADBE Vector Shape - Group",hd:!1},{ind:2,ty:"sh",ix:3,ks:{a:0,k:{i:[[0,0],[0,0]],o:[[0,0],[0,0]],v:[[0,-30],[0,30]],c:!1},ix:2},nm:"02",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[15,15],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"ControlShape",np:3,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"st",c:{a:0,k:[1,.560000002384,0,1],ix:3,x:`var $bm_rt;
if (thisLayer.active) {
    try {
        var eff = thisLayer(4)('RubberHose 2');
        var a = thisLayer.toComp([
                0,
                0,
                0
            ]);
        var b = eff('B');
        var straight = eff('Straight');
        var hoseLength = div(eff('Hose Length'), 2);
        if (straight > hoseLength) {
            $bm_rt = [
                0.51,
                0.83,
                0.98,
                1
            ];
        } else {
            $bm_rt = value;
        }
    } catch (err) {
        $bm_rt = value;
    }
} else {
    $bm_rt = value;
}`},o:{a:0,k:100,ix:4},w:{a:0,k:1.5,ix:5},lc:1,lj:1,ml:4,ml2:{a:0,k:4,ix:8},nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Control Point",np:2,cix:2,ix:2,mn:"ADBE Vector Group",hd:!1}],ip:0,op:51,st:0,bm:0},{ddd:0,ind:11,ty:4,nm:"Glasses Outlines",parent:16,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[188.359,127.303,0],ix:2},a:{a:0,k:[55.355,19.042,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[0,0],[-3.764,-.836],[0,0]],o:[[0,0],[3.753,-.883],[0,0],[0,0]],v:[[-14.611,1.452],[-6.12,-.545],[5.302,-.616],[14.611,1.452]],c:!1},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[.176000004189,.176000004189,.176000004189,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:3.34,ix:5},lc:1,lj:1,ml:10,ml2:{a:0,k:10,ix:8},nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[55.773,11.752],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 1",np:2,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,13.372],[0,-13.372],[-13.372,0]],o:[[0,-13.372],[0,13.372],[13.373,0]],v:[[24.213,-5.421],[-24.213,-5.421],[0,18.792]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[.176000004189,.176000004189,.176000004189,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[86.248,19.043],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 2",np:2,cix:2,ix:2,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,13.372],[0,-13.372],[-13.372,0]],o:[[0,-13.372],[0,13.372],[13.373,0]],v:[[24.213,-5.421],[-24.213,-5.421],[0,18.792]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[.176000004189,.176000004189,.176000004189,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[24.463,19.043],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 3",np:2,cix:2,ix:3,mn:"ADBE Vector Group",hd:!1}],ip:0,op:51,st:0,bm:0},{ddd:0,ind:12,ty:4,nm:"Ear Outlines",parent:16,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:1,k:[{i:{x:[.76],y:[1]},o:{x:[.24],y:[0]},n:["0p76_1_0p24_0"],t:28,s:[0],e:[-8.733]},{i:{x:[.76],y:[1]},o:{x:[.24],y:[0]},n:["0p76_1_0p24_0"],t:38,s:[-8.733],e:[3.267]},{i:{x:[.76],y:[1]},o:{x:[.24],y:[0]},n:["0p76_1_0p24_0"],t:44,s:[3.267],e:[0]},{t:49}],ix:10},p:{a:0,k:[87.428,95.51,0],ix:2},a:{a:0,k:[25.983,15.042,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,14.765],[14.765,0],[0,-14.765],[-14.764,0]],o:[[0,-14.765],[-14.764,0],[0,14.765],[14.765,0]],v:[[26.734,0],[-.001,-26.734],[-26.734,0],[-.001,26.734]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[.866999966491,.866999966491,.866999966491,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[26.983,61.101],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 1",np:2,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[10.842,0],[0,0],[0,-10.842],[0,0],[-10.842,0],[0,10.842],[0,0]],o:[[0,0],[-10.842,0],[0,0],[0,10.842],[10.842,0],[0,0],[0,-10.842]],v:[[0,-33.359],[0,-33.359],[-19.712,-13.646],[-19.712,13.646],[0,33.359],[19.712,13.646],[19.712,-13.646]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[.866999966491,.866999966491,.866999966491,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[27.546,33.609],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 2",np:2,cix:2,ix:2,mn:"ADBE Vector Group",hd:!1}],ip:0,op:51,st:0,bm:0},{ddd:0,ind:13,ty:4,nm:"Top Floof Outlines",parent:16,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[148.672,42.241,0],ix:2},a:{a:0,k:[119.743,64.124,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,-33.643],[-33.644,0],[0,33.643],[33.643,0]],o:[[0,33.643],[33.643,0],[0,-33.643],[-33.644,0]],v:[[-60.916,0],[.001,60.917],[60.916,0],[.001,-60.917]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:1,k:[{i:{x:.76,y:1},o:{x:.24,y:0},n:"0p76_1_0p24_0",t:29,s:[84.874,67.081],e:[85.07,73.078],to:[0,0],ti:[0,0]},{i:{x:.76,y:1},o:{x:.24,y:0},n:"0p76_1_0p24_0",t:39.833,s:[85.07,73.078],e:[84.874,67.081],to:[0,0],ti:[0,0]},{t:49}],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 1",np:2,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,-33.643],[-33.644,0],[0,33.643],[33.643,0]],o:[[0,33.643],[33.643,0],[0,-33.643],[-33.644,0]],v:[[-60.916,0],[.001,60.917],[60.916,0],[.001,-60.917]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:1,k:[{i:{x:.76,y:1},o:{x:.24,y:0},n:"0p76_1_0p24_0",t:31,s:[178.319,61.167],e:[178.668,73.162],to:[0,0],ti:[0,0]},{i:{x:.76,y:1},o:{x:.24,y:0},n:"0p76_1_0p24_0",t:41.833,s:[178.668,73.162],e:[178.319,61.167],to:[0,0],ti:[0,0]},{t:51}],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 2",np:2,cix:2,ix:2,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,-13.511],[-13.511,0],[0,13.511],[13.511,0]],o:[[0,13.511],[13.511,0],[0,-13.511],[-13.511,0]],v:[[-24.464,0],[0,24.464],[24.464,0],[0,-24.464]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:1,k:[{i:{x:.76,y:.76},o:{x:.24,y:.24},n:"0p76_0p76_0p24_0p24",t:29,s:[24.714,55.796],e:[24.714,55.796],to:[0,0],ti:[0,0]},{i:{x:.76,y:.76},o:{x:.24,y:.24},n:"0p76_0p76_0p24_0p24",t:40,s:[24.714,55.796],e:[24.714,55.796],to:[0,0],ti:[0,0]},{t:49}],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 3",np:2,cix:2,ix:3,mn:"ADBE Vector Group",hd:!1}],ip:0,op:51,st:0,bm:0},{ddd:0,ind:14,ty:4,nm:"Face Fluff Outlines",parent:16,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[96.781,115.004,0],ix:2},a:{a:0,k:[99.764,105.819,0],ix:1},s:{a:0,k:[101,101,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,24.388],[33.644,0],[4.763,-28.894],[-38.661,-5.249]],o:[[0,-33.643],[-30.243,0],[15.04,34.564],[20.7,-9.731]],v:[[60.503,2.883],[-.414,-58.034],[-60.503,-7.095],[25.466,58.034]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[69.86,152.32],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 1",np:2,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,-20.422],[-20.422,0],[0,20.422],[20.422,0]],o:[[0,20.422],[20.422,0],[0,-20.422],[-20.422,0]],v:[[-36.978,0],[0,36.978],[36.978,0],[0,-36.978]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[162.301,67.673],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 2",np:2,cix:2,ix:2,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[33.643,0],[0,-33.644],[-.43,-2.921],[-30.189,0],[-10.105,3.059],[0,13.509]],o:[[-33.643,0],[0,3.041],[19.877,19.691],[11.103,0],[7.441,-10.102],[0,-33.644]],v:[[0,-50.863],[-60.917,10.055],[-60.257,19.003],[17.151,50.863],[49.071,46.143],[60.917,10.055]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[93.104,160.526],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 3",np:2,cix:2,ix:3,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,33.643],[33.644,0],[11.11,-14.848],[0,-2.516],[-28.154,-19.923],[-.85,0]],o:[[0,-33.643],[-19.971,0],[-.166,2.474],[0,37.114],[.842,.034],[33.644,0]],v:[[55.003,0],[-5.915,-60.917],[-54.721,-36.458],[-55.003,-28.98],[-8.451,60.853],[-5.915,60.917]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[55.253,130.364],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 4",np:2,cix:2,ix:4,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,-33.643],[-33.644,0],[0,33.643],[33.643,0]],o:[[0,33.643],[33.643,0],[0,-33.643],[-33.644,0]],v:[[-60.916,0],[.001,60.917],[60.916,0],[.001,-60.917]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[81.866,61.167],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 5",np:2,cix:2,ix:5,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[9.709,0],[0,-12.883],[-2.396,-3.664],[-11.825,9.941]],o:[[-12.883,0],[0,4.704],[15.292,-4.275],[-3.512,-8.437]],v:[[.894,-18.034],[-22.433,5.294],[-18.632,18.034],[22.433,-3.663]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[158.553,189.275],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 6",np:2,cix:2,ix:6,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,-20.422],[-20.422,0],[0,20.422],[20.422,0]],o:[[0,20.422],[20.422,0],[0,-20.422],[-20.422,0]],v:[[-36.978,0],[0,36.978],[36.978,0],[0,-36.978]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[119.127,116.761],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 7",np:2,cix:2,ix:7,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,33.643],[33.644,0],[4.968,-1.309],[0,-29.517],[-2.018,-8.332],[-16.793,0]],o:[[0,-33.643],[-5.379,0],[-18.922,19.757],[0,8.953],[11.019,10.991],[33.644,0]],v:[[53.524,0],[-7.393,-60.917],[-22.954,-58.903],[-53.524,17.151],[-50.41,43.129],[-7.393,60.917]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[53.774,84.233],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 8",np:2,cix:2,ix:8,mn:"ADBE Vector Group",hd:!1}],ip:0,op:51,st:0,bm:0},{ddd:0,ind:15,ty:4,nm:"Mouth Outlines",parent:16,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[185.247,168.806,0],ix:2},a:{a:0,k:[17.624,15.969,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[0,0]],o:[[.591,14.194],[0,0]],v:[[-8.752,-7.097],[8.752,3.145]],c:!1},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[.176000004189,.176000004189,.176000004189,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:3.549,ix:5},lc:1,lj:1,ml:10,ml2:{a:0,k:10,ix:8},nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[17.624,15.969],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 1",np:2,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:51,st:0,bm:0},{ddd:0,ind:16,ty:4,nm:"Face",parent:18,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:1,k:[{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:0,s:[0],e:[0]},{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:113,s:[0],e:[68]},{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:114,s:[68],e:[-75]},{t:115}],ix:10},p:{a:1,k:[{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:0,s:[273.127,19.29,0],e:[273.127,19.29,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:113,s:[273.127,19.29,0],e:[254.25,64.717,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:114,s:[254.25,64.717,0],e:[275.486,-41.41,0],to:[0,0,0],ti:[0,0,0]},{t:115}],ix:2},a:{a:0,k:[150.919,110.255,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,3.92],[3.92,0],[0,-3.92],[-3.92,0]],o:[[0,-3.92],[-3.92,0],[0,3.92],[3.92,0]],v:[[7.097,0],[0,-7.097],[-7.097,0],[0,7.097]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[.176000004189,.176000004189,.176000004189,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[173.505,126.223],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 1",np:2,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,3.92],[3.92,0],[0,-3.92],[-3.92,0]],o:[[0,-3.92],[-3.92,0],[0,3.92],[3.92,0]],v:[[7.097,0],[0,-7.097],[-7.097,0],[0,7.097]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[.176000004189,.176000004189,.176000004189,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[202.517,126.223],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 2",np:2,cix:2,ix:2,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[-2.651,0],[0,0],[.335,-1.626],[1.698,-2.592],[1.221,.782],[0,0]],o:[[0,0],[1.661,0],[-.659,3.199],[-.794,1.213],[0,0],[-2.232,-1.431]],v:[[-7.241,-6.681],[7.952,-6.681],[10.57,-3.535],[6.986,5.137],[3.332,5.898],[-8.673,-1.79]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[.176000004189,.176000004189,.176000004189,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[290.682,143.55],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 3",np:2,cix:2,ix:3,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[-3.708,43.546]],v:[[-52.523,11.534],[-52.523,-21.773],[52.523,-21.773]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[.6,.6,.6,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[246.522,160.417],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 4",np:2,cix:2,ix:4,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,60.754],[60.754,0],[0,-60.754],[-60.754,0]],o:[[0,-60.754],[-60.754,0],[0,60.754],[60.754,0]],v:[[110.005,0],[0,-110.005],[-110.005,0],[0,110.005]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[.6,.6,.6,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[110.255,110.255],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 5",np:2,cix:2,ix:5,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[12.58,0],[0,-20.422],[-.062,-.87],[-18.505,14.651]],o:[[-20.422,0],[0,.885],[25.381,-.228],[-6.679,-9.598]],v:[[3.311,-19.8],[-33.667,17.178],[-33.534,19.8],[33.667,-3.907]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[144.795,200.434],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 6",np:2,cix:2,ix:6,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[60.754,0],[0,-60.754],[-60.754,0],[-.337,.004],[0,.886],[-20.422,0],[-6.68,-9.598],[0,34.981]],o:[[-60.754,0],[0,60.754],[.337,0],[-.061,-.869],[0,-20.422],[12.58,0],[25.45,-20.149],[0,-60.754]],v:[[0,-110.005],[-110.005,0],[0,110.005],[1.006,109.979],[.873,107.357],[37.851,70.379],[68.208,86.273],[110.005,0]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[110.255,110.255],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 7",np:2,cix:2,ix:7,mn:"ADBE Vector Group",hd:!1}],ip:0,op:51,st:0,bm:0},{ddd:0,ind:17,ty:4,nm:"Back Leg Outlines",hd:!0,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[657.067,738.775,0],ix:2},a:{a:0,k:[3.424,5.167,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[3.87,0],[0,0],[0,-3.78],[0,0],[-4.555,3.138],[-.589,17.084]],o:[[0,0],[-3.78,0],[0,0],[0,5.531],[30.311,-20.881],[.134,-3.868]],v:[[16.198,-45.917],[-16.328,-45.917],[-23.173,-39.072],[-23.173,37.158],[-12.41,42.779],[23.039,-38.849]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[23.423,46.167],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 1",np:2,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:51,st:0,bm:0},{ddd:0,ind:18,ty:4,nm:"Hind",parent:27,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:1,k:[{i:{x:[.76],y:[1]},o:{x:[.24],y:[0]},n:["0p76_1_0p24_0"],t:-47,s:[2.133],e:[2.133]},{i:{x:[.76],y:[1]},o:{x:[.24],y:[0]},n:["0p76_1_0p24_0"],t:-32,s:[2.133],e:[-.867]},{i:{x:[.76],y:[1]},o:{x:[.24],y:[0]},n:["0p76_1_0p24_0"],t:-12,s:[-.867],e:[2.133]},{i:{x:[.76],y:[1]},o:{x:[.24],y:[0]},n:["0p76_1_0p24_0"],t:4,s:[2.133],e:[2.133]},{i:{x:[.76],y:[1]},o:{x:[.24],y:[0]},n:["0p76_1_0p24_0"],t:19,s:[2.133],e:[-.867]},{i:{x:[.76],y:[1]},o:{x:[.24],y:[0]},n:["0p76_1_0p24_0"],t:39,s:[-.867],e:[2.133]},{i:{x:[.833],y:[1]},o:{x:[.24],y:[0]},n:["0p833_1_0p24_0"],t:55,s:[2.133],e:[2.133]},{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:113,s:[2.133],e:[-81.867]},{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:114,s:[-81.867],e:[112.133]},{t:115}],ix:10},p:{a:1,k:[{i:{x:.76,y:1},o:{x:.24,y:0},n:"0p76_1_0p24_0",t:0,s:[-171.678,-160.042,0],e:[-158.87,-166.954,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.76,y:1},o:{x:.24,y:0},n:"0p76_1_0p24_0",t:15,s:[-158.87,-166.954,0],e:[-137.65,-153.835,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.76,y:1},o:{x:.24,y:0},n:"0p76_1_0p24_0",t:35,s:[-137.65,-153.835,0],e:[-171.678,-160.042,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.76,y:1},o:{x:.24,y:0},n:"0p76_1_0p24_0",t:51,s:[-171.678,-160.042,0],e:[-158.87,-166.954,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.76,y:1},o:{x:.24,y:0},n:"0p76_1_0p24_0",t:66,s:[-158.87,-166.954,0],e:[-137.65,-153.835,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.76,y:1},o:{x:.24,y:0},n:"0p76_1_0p24_0",t:86,s:[-137.65,-153.835,0],e:[-171.678,-160.042,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.833,y:.833},o:{x:.24,y:0},n:"0p833_0p833_0p24_0",t:102,s:[-171.678,-160.042,0],e:[-158.504,-172.943,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:113,s:[-158.504,-172.943,0],e:[-157.062,-192.891,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:114,s:[-157.062,-192.891,0],e:[109.931,-432.901,0],to:[0,0,0],ti:[0,0,0]},{t:115}],ix:2},a:{a:0,k:[46.317,46.317,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,25.442],[25.442,0],[0,-25.442],[-25.442,0]],o:[[0,-25.442],[-25.442,0],[0,25.442],[25.442,0]],v:[[46.067,0],[0,-46.067],[-46.067,0],[0,46.067]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[46.317,46.317],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 1",np:2,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:51,st:0,bm:0},{ddd:0,ind:19,ty:4,nm:"front leg 2::Hip",parent:16,hd:!0,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10,x:`var $bm_rt;
try {
    var parentRot = hasParent ? parentTotal() : 0;
    var rotCalc = sub(thisLayer('ADBE Root Vectors Group')('Admin')('Transform')('Rotation'), parentRot);
    $bm_rt = sum(rotCalc, value);
} catch (err) {
    $bm_rt = value;
}
;
function parentTotal() {
    var parentVal = 0;
    var layerChain = 'thisLayer';
    while (eval([layerChain][0]).hasParent) {
        layerChain = sum(layerChain, '.parent');
        parentVal = sum(parentVal, eval([layerChain][0]).rotation);
    }
    return parentVal;
}`},p:{a:1,k:[{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:0,s:[138.562,194.201,0],e:[138.562,194.201,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:113,s:[138.562,194.201,0],e:[115.392,210.424,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:114,s:[115.392,210.424,0],e:[138.562,194.201,0],to:[0,0,0],ti:[0,0,0]},{t:115}],ix:2},a:{a:0,k:[0,0,0],ix:1},s:{a:0,k:[100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ty:"gr",it:[{ty:"gr",it:[{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"front leg 2::Ankle",np:0,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[135,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"A",np:1,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ty:"gr",it:[{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[20,20],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"front leg 2::Hip",np:0,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"B",np:1,cix:2,ix:2,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ty:"gr",it:[{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"2.04",np:0,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1,cl:"04"},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Version",np:1,cix:2,ix:3,mn:"ADBE Vector Group",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6,x:`var $bm_rt;
try {
    var eff = thisComp.layer(thisLayer(2)('Admin')(2)('A')(2)(1)._name)(4)('RubberHose 2');
    var autoRotate = eff('Auto Rotate Start');
    if (autoRotate == 1) {
        var a = thisComp.layer(thisLayer(2)('Admin')(2)('A')(2)(1)._name).toComp([
                0,
                0,
                0
            ]);
        var b = thisLayer.toComp([
                0,
                0,
                0
            ]);
        var s = length(a, b);
        var sFac = eff('Parent Scale');
        var autoFlop = 1;
        var realism = eff('Realism');
        var bendDir = div(eff('Bend Direction'), 100);
        var hoseLength = div(eff('Hose Length'), 2);
        var bendRad = eff('Bend Radius');
        var autoFlop = eff('AutoFlop');
        var baseRot = $bm_neg(radiansToDegrees(Math.atan2(sub(b[0], a[0]), sub(b[1], a[1]))));
        var outerRad = mul(Math.sin(0.78539816339), s);
        var straight = div(mul(1.4142135623731, outerRad), 2);
        straight /= Math.max(Math.abs(sFac), 0.001);
        var roundShrink = linear(Math.abs(bendRad), 0, 100, 1, 0.87);
        var innerRad;
        if (straight <= hoseLength) {
            innerRad = sum(straight, mul(Math.sqrt(sub(Math.pow(hoseLength, 2), Math.pow(straight, 2))), roundShrink));
            innerRad = linear(realism, 0, 100, hoseLength, innerRad);
            innerRad = linear(Math.abs(bendDir), straight, innerRad);
        } else {
            innerRad = straight;
        }
        innerRad = linear(Math.abs(autoFlop), straight, innerRad);
        var flopDir = 1;
        if (bendDir < 0) {
            flopDir = -1;
        }
        flopDir *= autoFlop;
        var opp = mul(sub(innerRad, straight), flopDir);
        var theta = Math.atan(div(opp, Math.max(straight, 0.001)));
        var bendAngle = radiansToDegrees(theta);
        if (sFac < 0) {
            baseRot *= -1;
        }
        bendRad *= div(div(theta, $bm_neg(Math.PI)), linear(s, hoseLength, 0, 2, 0.9));
        var rotCalc = sum(sub(baseRot, bendAngle), bendRad);
        $bm_rt = rotCalc;
    } else {
        $bm_rt = 0;
    }
    ;
} catch (err) {
    $bm_rt = value;
}
;`},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Admin",np:3,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ty:"gr",it:[{d:1,ty:"el",s:{a:0,k:[100,100],ix:2},p:{a:0,k:[0,0],ix:3},nm:"Circle",mn:"ADBE Vector Shape - Ellipse",hd:!1},{ind:1,ty:"sh",ix:2,ks:{a:0,k:{i:[[0,0],[0,0]],o:[[0,0],[0,0]],v:[[-75,0],[75,0]],c:!1},ix:2},nm:"01",mn:"ADBE Vector Shape - Group",hd:!1},{ind:2,ty:"sh",ix:3,ks:{a:0,k:{i:[[0,0],[0,0]],o:[[0,0],[0,0]],v:[[0,-30],[0,30]],c:!1},ix:2},nm:"02",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[15,15],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"ControlShape",np:3,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"st",c:{a:0,k:[1,.560000002384,0,1],ix:3,x:`var $bm_rt;
try {
    var ctrl = thisComp.layer(thisLayer(2)('Admin')(2)('A')(2)(1)._name);
    $bm_rt = ctrl(2)('Control Point')(2)('Stroke 1')('Color');
} catch (e) {
    $bm_rt = value;
}`},o:{a:0,k:100,ix:4},w:{a:0,k:1.5,ix:5},lc:1,lj:1,ml:4,ml2:{a:0,k:4,ix:8},nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Control Point",np:2,cix:2,ix:2,mn:"ADBE Vector Group",hd:!1}],ip:0,op:51,st:0,bm:0},{ddd:0,ind:20,ty:4,nm:"front leg 1::Hip",parent:16,hd:!0,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10,x:`var $bm_rt;
try {
    var parentRot = hasParent ? parentTotal() : 0;
    var rotCalc = sub(thisLayer('ADBE Root Vectors Group')('Admin')('Transform')('Rotation'), parentRot);
    $bm_rt = sum(rotCalc, value);
} catch (err) {
    $bm_rt = value;
}
;
function parentTotal() {
    var parentVal = 0;
    var layerChain = 'thisLayer';
    while (eval([layerChain][0]).hasParent) {
        layerChain = sum(layerChain, '.parent');
        parentVal = sum(parentVal, eval([layerChain][0]).rotation);
    }
    return parentVal;
}`},p:{a:1,k:[{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:0,s:[86.562,194.201,0],e:[86.562,194.201,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:113,s:[86.562,194.201,0],e:[98.96,204.51,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:114,s:[98.96,204.51,0],e:[86.562,194.201,0],to:[0,0,0],ti:[0,0,0]},{t:115}],ix:2},a:{a:0,k:[0,0,0],ix:1},s:{a:0,k:[100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ty:"gr",it:[{ty:"gr",it:[{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"front leg 1::Ankle",np:0,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[135,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"A",np:1,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ty:"gr",it:[{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[20,20],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"front leg 1::Hip",np:0,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"B",np:1,cix:2,ix:2,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ty:"gr",it:[{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"2.04",np:0,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1,cl:"04"},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Version",np:1,cix:2,ix:3,mn:"ADBE Vector Group",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6,x:`var $bm_rt;
try {
    var eff = thisComp.layer(thisLayer(2)('Admin')(2)('A')(2)(1)._name)(4)('RubberHose 2');
    var autoRotate = eff('Auto Rotate Start');
    if (autoRotate == 1) {
        var a = thisComp.layer(thisLayer(2)('Admin')(2)('A')(2)(1)._name).toComp([
                0,
                0,
                0
            ]);
        var b = thisLayer.toComp([
                0,
                0,
                0
            ]);
        var s = length(a, b);
        var sFac = eff('Parent Scale');
        var autoFlop = 1;
        var realism = eff('Realism');
        var bendDir = div(eff('Bend Direction'), 100);
        var hoseLength = div(eff('Hose Length'), 2);
        var bendRad = eff('Bend Radius');
        var autoFlop = eff('AutoFlop');
        var baseRot = $bm_neg(radiansToDegrees(Math.atan2(sub(b[0], a[0]), sub(b[1], a[1]))));
        var outerRad = mul(Math.sin(0.78539816339), s);
        var straight = div(mul(1.4142135623731, outerRad), 2);
        straight /= Math.max(Math.abs(sFac), 0.001);
        var roundShrink = linear(Math.abs(bendRad), 0, 100, 1, 0.87);
        var innerRad;
        if (straight <= hoseLength) {
            innerRad = sum(straight, mul(Math.sqrt(sub(Math.pow(hoseLength, 2), Math.pow(straight, 2))), roundShrink));
            innerRad = linear(realism, 0, 100, hoseLength, innerRad);
            innerRad = linear(Math.abs(bendDir), straight, innerRad);
        } else {
            innerRad = straight;
        }
        innerRad = linear(Math.abs(autoFlop), straight, innerRad);
        var flopDir = 1;
        if (bendDir < 0) {
            flopDir = -1;
        }
        flopDir *= autoFlop;
        var opp = mul(sub(innerRad, straight), flopDir);
        var theta = Math.atan(div(opp, Math.max(straight, 0.001)));
        var bendAngle = radiansToDegrees(theta);
        if (sFac < 0) {
            baseRot *= -1;
        }
        bendRad *= div(div(theta, $bm_neg(Math.PI)), linear(s, hoseLength, 0, 2, 0.9));
        var rotCalc = sum(sub(baseRot, bendAngle), bendRad);
        $bm_rt = rotCalc;
    } else {
        $bm_rt = 0;
    }
    ;
} catch (err) {
    $bm_rt = value;
}
;`},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Admin",np:3,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ty:"gr",it:[{d:1,ty:"el",s:{a:0,k:[100,100],ix:2},p:{a:0,k:[0,0],ix:3},nm:"Circle",mn:"ADBE Vector Shape - Ellipse",hd:!1},{ind:1,ty:"sh",ix:2,ks:{a:0,k:{i:[[0,0],[0,0]],o:[[0,0],[0,0]],v:[[-75,0],[75,0]],c:!1},ix:2},nm:"01",mn:"ADBE Vector Shape - Group",hd:!1},{ind:2,ty:"sh",ix:3,ks:{a:0,k:{i:[[0,0],[0,0]],o:[[0,0],[0,0]],v:[[0,-30],[0,30]],c:!1},ix:2},nm:"02",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[15,15],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"ControlShape",np:3,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"st",c:{a:0,k:[1,.560000002384,0,1],ix:3,x:`var $bm_rt;
try {
    var ctrl = thisComp.layer(thisLayer(2)('Admin')(2)('A')(2)(1)._name);
    $bm_rt = ctrl(2)('Control Point')(2)('Stroke 1')('Color');
} catch (e) {
    $bm_rt = value;
}`},o:{a:0,k:100,ix:4},w:{a:0,k:1.5,ix:5},lc:1,lj:1,ml:4,ml2:{a:0,k:4,ix:8},nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Control Point",np:2,cix:2,ix:2,mn:"ADBE Vector Group",hd:!1}],ip:0,op:51,st:0,bm:0},{ddd:0,ind:21,ty:4,nm:"front foot 1",parent:10,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:180,ix:10},p:{a:0,k:[.08,-.42,0],ix:2},a:{a:0,k:[-75.08,120.92,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{d:1,ty:"el",s:{a:0,k:[34.16,34.16],ix:2},p:{a:0,k:[0,0],ix:3},nm:"Ellipse Path 1",mn:"ADBE Vector Shape - Ellipse",hd:!1},{ty:"st",c:{a:0,k:[.6,.6,.6,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:0,ix:5},lc:1,lj:1,ml:4,ml2:{a:0,k:4,ix:8},nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[-75.08,120.92],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[122.752,122.752],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Ellipse 1",np:3,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:51,st:0,bm:0},{ddd:0,ind:22,ty:4,nm:"front foot 2",parent:9,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:180,ix:10},p:{a:0,k:[.58,.08,0],ix:2},a:{a:0,k:[-75.08,120.92,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{d:1,ty:"el",s:{a:0,k:[34.16,34.16],ix:2},p:{a:0,k:[0,0],ix:3},nm:"Ellipse Path 1",mn:"ADBE Vector Shape - Ellipse",hd:!1},{ty:"st",c:{a:0,k:[.6,.6,.6,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:0,ix:5},lc:1,lj:1,ml:4,ml2:{a:0,k:4,ix:8},nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[-75.08,120.92],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[122.752,122.752],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Ellipse 1",np:3,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:51,st:0,bm:0},{ddd:0,ind:23,ty:4,nm:"front leg 2",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10,x:`var $bm_rt;
var r = 0;
if (thisLayer.hasParent) {
    r = $bm_neg(parentTotal());
}
$bm_rt = r;
function parentTotal() {
    var parentVal = 0;
    var layerChain = 'thisLayer';
    while (eval([layerChain][0]).hasParent) {
        layerChain = sum(layerChain, '.parent');
        parentVal = sum(parentVal, eval([layerChain][0]).rotation);
    }
    return parentVal;
}`},p:{a:0,k:[750,750,0],ix:2,x:`var $bm_rt;
var p = [
        0,
        0
    ];
try {
    if (thisLayer.hasParent) {
        p = parent.fromComp([
            0,
            0,
            0
        ]);
    }
    $bm_rt = p;
} catch (err) {
    $bm_rt = p;
}`},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100,100],ix:6,x:`var $bm_rt;
var s = [
        100,
        100
    ];
if (hasParent) {
    var sFactor = parentTotal();
    s = [
        s[0] * sFactor[0],
        s[1] * sFactor[1]
    ];
}
$bm_rt = s;
function parentTotal() {
    var sFactor = [
            1,
            1
        ];
    var scaleNorm = [
            0,
            0
        ];
    var layerChain = 'thisLayer';
    while (eval([layerChain][0]).hasParent) {
        layerChain = sum(layerChain, '.parent');
        scaleNorm = eval([layerChain][0]).scale;
        if (scaleNorm[0] != 0 && scaleNorm[1] != 0) {
            scaleNorm = [
                100 / scaleNorm[0],
                100 / scaleNorm[1]
            ];
        }
        sFactor = [
            sFactor[0] * scaleNorm[0],
            sFactor[1] * scaleNorm[1]
        ];
    }
    return sFactor;
}`}},ao:0,shapes:[{ty:"gr",it:[{ty:"gr",it:[{ty:"gr",it:[{ty:"sr",sy:1,d:1,pt:{a:0,k:4,ix:3},p:{a:0,k:[0,0],ix:4},r:{a:0,k:0,ix:5},ir:{a:0,k:500,ix:6,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(1).propertyIndex;
$bm_rt = thisLayer(2)('Admin')(2)('ArcMath')(2)(grp)(p);`},is:{a:0,k:0,ix:8,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(1).propertyIndex;
$bm_rt = thisLayer(2)('Admin')(2)('ArcMath')(2)(grp)(p);`},or:{a:0,k:113,ix:7,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(1).propertyIndex;
$bm_rt = thisLayer(2)('Admin')(2)('ArcMath')(2)(grp)(p);`},os:{a:0,k:0,ix:9,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(1).propertyIndex;
$bm_rt = thisLayer(2)('Admin')(2)('ArcMath')(2)(grp)(p);`},ix:1,nm:"LineForCurve",mn:"ADBE Vector Shape - Star",hd:!1},{ty:"tm",s:{a:0,k:0,ix:1,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(1).propertyIndex;
$bm_rt = thisLayer(2)('Admin')(2)('ArcMath')(2)(grp)(p);`},e:{a:0,k:0,ix:2,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(1).propertyIndex;
$bm_rt = thisLayer(2)('Admin')(2)('ArcMath')(2)(grp)(p);`},o:{a:0,k:-90,ix:3,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(1).propertyIndex;
$bm_rt = thisLayer(2)('Admin')(2)('ArcMath')(2)(grp)(p);`},m:1,ix:2,nm:"Line Halfer",mn:"ADBE Vector Filter - Trim",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(2).propertyIndex;
$bm_rt = content('Admin').content('ArcMath')('ADBE Vector Transform Group')(p);`},a:{a:0,k:[0,0],ix:1,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(2).propertyIndex;
$bm_rt = content('Admin').content('ArcMath')('ADBE Vector Transform Group')(p);`},s:{a:0,k:[100,100],ix:3,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(2).propertyIndex;
$bm_rt = content('Admin').content('ArcMath')('ADBE Vector Transform Group')(p);`},r:{a:0,k:45,ix:6,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(2).propertyIndex;
$bm_rt = content('Admin').content('ArcMath')('ADBE Vector Transform Group')(p);`},o:{a:0,k:100,ix:7,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(2).propertyIndex;
$bm_rt = content('Admin').content('ArcMath')('ADBE Vector Transform Group')(p);`},sk:{a:0,k:0,ix:4,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(2).propertyIndex;
$bm_rt = content('Admin').content('ArcMath')('ADBE Vector Transform Group')(p);`},sa:{a:0,k:0,ix:5,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(2).propertyIndex;
$bm_rt = content('Admin').content('ArcMath')('ADBE Vector Transform Group')(p);`},nm:"Transform"}],nm:"Arc",np:2,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"st",c:{a:0,k:[.6,.6,.6,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:9,ix:5,x:`var $bm_rt;
var sFac = thisComp.layer(thisLayer(2)('Admin')(2)('A')(2)(1)._name)(4)('RubberHose 2')('Parent Scale');
$bm_rt = mul(value, sFac);`},lc:2,lj:2,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2,x:`var $bm_rt;
try {
    var ctrl = thisComp.layer(thisLayer(2)('Admin')(2)('A')(2)(1)._name)(4)('RubberHose 2');
    $bm_rt = ctrl('A');
} catch (err) {
    $bm_rt = value;
}`},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"BaseHose",np:2,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Style",np:1,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ty:"gr",it:[{ty:"gr",it:[{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"front leg 2::Ankle",np:0,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[135,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"A",np:1,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ty:"gr",it:[{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[200,200],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"front leg 2::Hip",np:0,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"B",np:1,cix:2,ix:2,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ty:"gr",it:[{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"2.04",np:0,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1,cl:"04"},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Version",np:1,cix:2,ix:3,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ty:"sr",sy:1,d:1,pt:{a:0,k:4,ix:3},p:{a:0,k:[0,0],ix:4},r:{a:0,k:0,ix:5},ir:{a:0,k:200,ix:6,x:`var $bm_rt;
try {
    var ctrl = thisComp.layer(thisLayer(2)('Admin')(2)('A')(2)(1)._name)(4)('RubberHose 2');
    $bm_rt = ctrl('Inner Radius');
} catch (err) {
    $bm_rt = value;
}`},is:{a:0,k:100,ix:8,x:`var $bm_rt;
try {
    var ctrl = thisComp.layer(thisLayer(2)('Admin')(2)('A')(2)(1)._name)(4)('RubberHose 2');
    $bm_rt = ctrl('Bend Radius');
} catch (err) {
    $bm_rt = value;
}`},or:{a:0,k:200,ix:7,x:`var $bm_rt;
try {
    var ctrl = thisComp.layer(thisLayer(2)('Admin')(2)('A')(2)(1)._name)(4)('RubberHose 2');
    $bm_rt = ctrl('Outer Radius');
} catch (err) {
    $bm_rt = value;
}`},os:{a:0,k:0,ix:9},ix:1,nm:"LineForCurve",mn:"ADBE Vector Shape - Star",hd:!1},{ty:"tm",s:{a:0,k:.01,ix:1},e:{a:0,k:24.99,ix:2},o:{a:0,k:-90,ix:3,x:`var $bm_rt;
$bm_rt = -90;`},m:1,ix:2,nm:"Line Halfer",mn:"ADBE Vector Filter - Trim",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1,x:`var $bm_rt;
var s = thisProperty.propertyGroup(2)(2)(1)(7);
$bm_rt = [
    -s,
    0
];`},s:{a:0,k:[100,100],ix:3,x:`var $bm_rt;
var flop;
try {
    var eff = thisComp.layer(thisLayer(2)('Admin')(2)('A')(2)(1)._name)(4)('RubberHose 2');
    var bendDir = eff('Bend Direction');
    var autoFlop = eff('AutoFlop');
    flop = bendDir > 0 ? 1 : -1;
    autoFlop > 0 ? 0 : flop *= -1;
    var s = flop == 1 ? [
            -100,
            100
        ] : [
            100,
            100
        ];
    if (eff('Parent Scale') < 0) {
        s = [
            -s[0],
            s[1]
        ];
    }
    $bm_rt = s;
} catch (err) {
    $bm_rt = value;
}
;`},r:{a:0,k:45,ix:6,x:`var $bm_rt;
try {
    var ctrl = thisComp.layer(thisLayer(2)('Admin')(2)('A')(2)(1)._name)(4)('RubberHose 2');
    var baseRot = ctrl('Base Rotation');
    var flop = content('Admin').content('ArcMath').transform.scale[0];
    var rotOffset = flop < 0 ? -45 : 225;
    $bm_rt = sum(baseRot, rotOffset);
} catch (err) {
    $bm_rt = value;
}`},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"ArcMath",np:2,cix:2,ix:4,mn:"ADBE Vector Group",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2,x:`var $bm_rt;
try {
    var ctrl = thisComp.layer(thisLayer(2)('Admin')(2)('A')(2)(1)._name)(4)('RubberHose 2');
    $bm_rt = ctrl('A');
} catch (err) {
    $bm_rt = value;
}`},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Admin",np:4,cix:2,ix:2,mn:"ADBE Vector Group",hd:!1}],ip:0,op:51,st:0,bm:0},{ddd:0,ind:24,ty:4,nm:"front leg 1",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10,x:`var $bm_rt;
var r = 0;
if (thisLayer.hasParent) {
    r = $bm_neg(parentTotal());
}
$bm_rt = r;
function parentTotal() {
    var parentVal = 0;
    var layerChain = 'thisLayer';
    while (eval([layerChain][0]).hasParent) {
        layerChain = sum(layerChain, '.parent');
        parentVal = sum(parentVal, eval([layerChain][0]).rotation);
    }
    return parentVal;
}`},p:{a:0,k:[750,750,0],ix:2,x:`var $bm_rt;
var p = [
        0,
        0
    ];
try {
    if (thisLayer.hasParent) {
        p = parent.fromComp([
            0,
            0,
            0
        ]);
    }
    $bm_rt = p;
} catch (err) {
    $bm_rt = p;
}`},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100,100],ix:6,x:`var $bm_rt;
var s = [
        100,
        100
    ];
if (hasParent) {
    var sFactor = parentTotal();
    s = [
        s[0] * sFactor[0],
        s[1] * sFactor[1]
    ];
}
$bm_rt = s;
function parentTotal() {
    var sFactor = [
            1,
            1
        ];
    var scaleNorm = [
            0,
            0
        ];
    var layerChain = 'thisLayer';
    while (eval([layerChain][0]).hasParent) {
        layerChain = sum(layerChain, '.parent');
        scaleNorm = eval([layerChain][0]).scale;
        if (scaleNorm[0] != 0 && scaleNorm[1] != 0) {
            scaleNorm = [
                100 / scaleNorm[0],
                100 / scaleNorm[1]
            ];
        }
        sFactor = [
            sFactor[0] * scaleNorm[0],
            sFactor[1] * scaleNorm[1]
        ];
    }
    return sFactor;
}`}},ao:0,shapes:[{ty:"gr",it:[{ty:"gr",it:[{ty:"gr",it:[{ty:"sr",sy:1,d:1,pt:{a:0,k:4,ix:3},p:{a:0,k:[0,0],ix:4},r:{a:0,k:0,ix:5},ir:{a:0,k:500,ix:6,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(1).propertyIndex;
$bm_rt = thisLayer(2)('Admin')(2)('ArcMath')(2)(grp)(p);`},is:{a:0,k:0,ix:8,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(1).propertyIndex;
$bm_rt = thisLayer(2)('Admin')(2)('ArcMath')(2)(grp)(p);`},or:{a:0,k:113,ix:7,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(1).propertyIndex;
$bm_rt = thisLayer(2)('Admin')(2)('ArcMath')(2)(grp)(p);`},os:{a:0,k:0,ix:9,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(1).propertyIndex;
$bm_rt = thisLayer(2)('Admin')(2)('ArcMath')(2)(grp)(p);`},ix:1,nm:"LineForCurve",mn:"ADBE Vector Shape - Star",hd:!1},{ty:"tm",s:{a:0,k:0,ix:1,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(1).propertyIndex;
$bm_rt = thisLayer(2)('Admin')(2)('ArcMath')(2)(grp)(p);`},e:{a:0,k:0,ix:2,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(1).propertyIndex;
$bm_rt = thisLayer(2)('Admin')(2)('ArcMath')(2)(grp)(p);`},o:{a:0,k:-90,ix:3,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(1).propertyIndex;
$bm_rt = thisLayer(2)('Admin')(2)('ArcMath')(2)(grp)(p);`},m:1,ix:2,nm:"Line Halfer",mn:"ADBE Vector Filter - Trim",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(2).propertyIndex;
$bm_rt = content('Admin').content('ArcMath')('ADBE Vector Transform Group')(p);`},a:{a:0,k:[0,0],ix:1,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(2).propertyIndex;
$bm_rt = content('Admin').content('ArcMath')('ADBE Vector Transform Group')(p);`},s:{a:0,k:[100,100],ix:3,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(2).propertyIndex;
$bm_rt = content('Admin').content('ArcMath')('ADBE Vector Transform Group')(p);`},r:{a:0,k:45,ix:6,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(2).propertyIndex;
$bm_rt = content('Admin').content('ArcMath')('ADBE Vector Transform Group')(p);`},o:{a:0,k:100,ix:7,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(2).propertyIndex;
$bm_rt = content('Admin').content('ArcMath')('ADBE Vector Transform Group')(p);`},sk:{a:0,k:0,ix:4,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(2).propertyIndex;
$bm_rt = content('Admin').content('ArcMath')('ADBE Vector Transform Group')(p);`},sa:{a:0,k:0,ix:5,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(2).propertyIndex;
$bm_rt = content('Admin').content('ArcMath')('ADBE Vector Transform Group')(p);`},nm:"Transform"}],nm:"Arc",np:2,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"st",c:{a:0,k:[.6,.6,.6,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:9,ix:5,x:`var $bm_rt;
var sFac = thisComp.layer(thisLayer(2)('Admin')(2)('A')(2)(1)._name)(4)('RubberHose 2')('Parent Scale');
$bm_rt = mul(value, sFac);`},lc:2,lj:2,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2,x:`var $bm_rt;
try {
    var ctrl = thisComp.layer(thisLayer(2)('Admin')(2)('A')(2)(1)._name)(4)('RubberHose 2');
    $bm_rt = ctrl('A');
} catch (err) {
    $bm_rt = value;
}`},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"BaseHose",np:2,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Style",np:1,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ty:"gr",it:[{ty:"gr",it:[{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"front leg 1::Ankle",np:0,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[135,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"A",np:1,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ty:"gr",it:[{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[200,200],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"front leg 1::Hip",np:0,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"B",np:1,cix:2,ix:2,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ty:"gr",it:[{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"2.04",np:0,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1,cl:"04"},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Version",np:1,cix:2,ix:3,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ty:"sr",sy:1,d:1,pt:{a:0,k:4,ix:3},p:{a:0,k:[0,0],ix:4},r:{a:0,k:0,ix:5},ir:{a:0,k:200,ix:6,x:`var $bm_rt;
try {
    var ctrl = thisComp.layer(thisLayer(2)('Admin')(2)('A')(2)(1)._name)(4)('RubberHose 2');
    $bm_rt = ctrl('Inner Radius');
} catch (err) {
    $bm_rt = value;
}`},is:{a:0,k:100,ix:8,x:`var $bm_rt;
try {
    var ctrl = thisComp.layer(thisLayer(2)('Admin')(2)('A')(2)(1)._name)(4)('RubberHose 2');
    $bm_rt = ctrl('Bend Radius');
} catch (err) {
    $bm_rt = value;
}`},or:{a:0,k:200,ix:7,x:`var $bm_rt;
try {
    var ctrl = thisComp.layer(thisLayer(2)('Admin')(2)('A')(2)(1)._name)(4)('RubberHose 2');
    $bm_rt = ctrl('Outer Radius');
} catch (err) {
    $bm_rt = value;
}`},os:{a:0,k:0,ix:9},ix:1,nm:"LineForCurve",mn:"ADBE Vector Shape - Star",hd:!1},{ty:"tm",s:{a:0,k:.01,ix:1},e:{a:0,k:24.99,ix:2},o:{a:0,k:-90,ix:3,x:`var $bm_rt;
$bm_rt = -90;`},m:1,ix:2,nm:"Line Halfer",mn:"ADBE Vector Filter - Trim",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1,x:`var $bm_rt;
var s = thisProperty.propertyGroup(2)(2)(1)(7);
$bm_rt = [
    -s,
    0
];`},s:{a:0,k:[100,100],ix:3,x:`var $bm_rt;
var flop;
try {
    var eff = thisComp.layer(thisLayer(2)('Admin')(2)('A')(2)(1)._name)(4)('RubberHose 2');
    var bendDir = eff('Bend Direction');
    var autoFlop = eff('AutoFlop');
    flop = bendDir > 0 ? 1 : -1;
    autoFlop > 0 ? 0 : flop *= -1;
    var s = flop == 1 ? [
            -100,
            100
        ] : [
            100,
            100
        ];
    if (eff('Parent Scale') < 0) {
        s = [
            -s[0],
            s[1]
        ];
    }
    $bm_rt = s;
} catch (err) {
    $bm_rt = value;
}
;`},r:{a:0,k:45,ix:6,x:`var $bm_rt;
try {
    var ctrl = thisComp.layer(thisLayer(2)('Admin')(2)('A')(2)(1)._name)(4)('RubberHose 2');
    var baseRot = ctrl('Base Rotation');
    var flop = content('Admin').content('ArcMath').transform.scale[0];
    var rotOffset = flop < 0 ? -45 : 225;
    $bm_rt = sum(baseRot, rotOffset);
} catch (err) {
    $bm_rt = value;
}`},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"ArcMath",np:2,cix:2,ix:4,mn:"ADBE Vector Group",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2,x:`var $bm_rt;
try {
    var ctrl = thisComp.layer(thisLayer(2)('Admin')(2)('A')(2)(1)._name)(4)('RubberHose 2');
    $bm_rt = ctrl('A');
} catch (err) {
    $bm_rt = value;
}`},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Admin",np:4,cix:2,ix:2,mn:"ADBE Vector Group",hd:!1}],ip:0,op:51,st:0,bm:0},{ddd:0,ind:25,ty:4,nm:"body",parent:18,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[47.27,43.236,0],ix:2},a:{a:0,k:[-103,-28,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:1,k:[{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:0,s:[{i:[[0,0],[0,0]],o:[[0,0],[0,0]],v:[[-103,-28],[89.5,-28]],c:!1}],e:[{i:[[0,0],[0,0]],o:[[0,0],[0,0]],v:[[-103,-28],[89.5,-28]],c:!1}]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:113,s:[{i:[[0,0],[0,0]],o:[[0,0],[0,0]],v:[[-103,-28],[89.5,-28]],c:!1}],e:[{i:[[-128.92,-40.273],[0,0]],o:[[112.645,35.189],[0,0]],v:[[-103.279,-31.99],[88.105,-47.951]],c:!1}]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:114,s:[{i:[[-128.92,-40.273],[0,0]],o:[[112.645,35.189],[0,0]],v:[[-103.279,-31.99],[88.105,-47.951]],c:!1}],e:[{i:[[-109.849,-78.584],[0,0]],o:[[109.849,78.584],[0,0]],v:[[-103,-28],[89.5,-28]],c:!1}]},{t:115}],ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[1,1,1,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:67,ix:5},lc:1,lj:1,ml:4,ml2:{a:0,k:4,ix:8},nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!0},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Shape 1",np:3,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:51,st:0,bm:0},{ddd:0,ind:26,ty:4,nm:"Tail Outlines",parent:18,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[12.662,-8.409,0],ix:2},a:{a:0,k:[58.561,54.303,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:1,k:[{i:{x:.71,y:1},o:{x:.29,y:0},n:"0p71_1_0p29_0",t:23,s:[{i:[[0,12.395],[12.395,0],[0,-12.395],[-12.394,0]],o:[[0,-12.395],[-12.394,0],[0,12.395],[12.395,0]],v:[[22.443,0],[-.001,-22.443],[-22.443,0],[-.001,22.443]],c:!0}],e:[{i:[[0,12.395],[12.395,0],[0,-12.395],[-12.394,0]],o:[[0,-12.395],[-12.394,0],[0,12.395],[12.395,0]],v:[[6.443,12],[-16.001,-10.443],[-38.443,12],[-16.001,34.443]],c:!0}]},{i:{x:.71,y:1},o:{x:.29,y:0},n:"0p71_1_0p29_0",t:35.857,s:[{i:[[0,12.395],[12.395,0],[0,-12.395],[-12.394,0]],o:[[0,-12.395],[-12.394,0],[0,12.395],[12.395,0]],v:[[6.443,12],[-16.001,-10.443],[-38.443,12],[-16.001,34.443]],c:!0}],e:[{i:[[0,12.395],[12.395,0],[0,-12.395],[-12.394,0]],o:[[0,-12.395],[-12.394,0],[0,12.395],[12.395,0]],v:[[22.443,0],[-.001,-22.443],[-22.443,0],[-.001,22.443]],c:!0}]},{t:48}],ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[32.612,22.693],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 1",np:2,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:1,k:[{i:{x:.71,y:1},o:{x:.167,y:.167},n:"0p71_1_0p167_0p167",t:0,s:[{i:[[0,0],[-85.563,7.013]],o:[[0,0],[0,0]],v:[[-25.949,-37.171],[42.781,30.158]],c:!1}],e:[{i:[[0,0],[-85.563,7.013]],o:[[0,0],[0,0]],v:[[-25.949,-37.171],[42.781,30.158]],c:!1}]},{i:{x:.71,y:1},o:{x:.29,y:0},n:"0p71_1_0p29_0",t:21,s:[{i:[[0,0],[-85.563,7.013]],o:[[0,0],[0,0]],v:[[-25.949,-37.171],[42.781,30.158]],c:!1}],e:[{i:[[0,0],[-74.784,-12.959]],o:[[0,0],[0,0]],v:[[-41.3,-19.469],[42.781,30.158]],c:!1}]},{i:{x:.71,y:1},o:{x:.29,y:0},n:"0p71_1_0p29_0",t:33.857,s:[{i:[[0,0],[-74.784,-12.959]],o:[[0,0],[0,0]],v:[[-41.3,-19.469],[42.781,30.158]],c:!1}],e:[{i:[[0,0],[-85.563,7.013]],o:[[0,0],[0,0]],v:[[-25.949,-37.171],[42.781,30.158]],c:!1}]},{t:46}],ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[.6,.6,.6,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:6.312,ix:5},lc:1,lj:1,ml:10,ml2:{a:0,k:10,ix:8},nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[58.561,55.656],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 2",np:2,cix:2,ix:2,mn:"ADBE Vector Group",hd:!1}],ip:0,op:51,st:0,bm:0},{ddd:0,ind:27,ty:4,nm:"Surfboard",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:1,k:[{i:{x:[.102],y:[1]},o:{x:[.319],y:[0]},n:["0p102_1_0p319_0"],t:-47,s:[-5],e:[-3.5]},{i:{x:[.755],y:[1]},o:{x:[.758],y:[0]},n:["0p755_1_0p758_0"],t:-31,s:[-3.5],e:[2.5]},{i:{x:[.59],y:[1]},o:{x:[.397],y:[0]},n:["0p59_1_0p397_0"],t:-13,s:[2.5],e:[-5]},{i:{x:[.102],y:[1]},o:{x:[.319],y:[0]},n:["0p102_1_0p319_0"],t:4,s:[-5],e:[-3.5]},{i:{x:[.755],y:[1]},o:{x:[.758],y:[0]},n:["0p755_1_0p758_0"],t:20,s:[-3.5],e:[2.5]},{i:{x:[.59],y:[1]},o:{x:[.397],y:[0]},n:["0p59_1_0p397_0"],t:38,s:[2.5],e:[-5]},{i:{x:[.102],y:[1]},o:{x:[.319],y:[0]},n:["0p102_1_0p319_0"],t:55,s:[-5],e:[-3.5]},{i:{x:[.755],y:[1]},o:{x:[.758],y:[0]},n:["0p755_1_0p758_0"],t:71,s:[-3.5],e:[2.5]},{i:{x:[.59],y:[1]},o:{x:[.397],y:[0]},n:["0p59_1_0p397_0"],t:89,s:[2.5],e:[-5]},{i:{x:[.102],y:[1]},o:{x:[.319],y:[0]},n:["0p102_1_0p319_0"],t:106,s:[-5],e:[-3.5]},{i:{x:[.755],y:[1]},o:{x:[.758],y:[0]},n:["0p755_1_0p758_0"],t:122,s:[-3.5],e:[2.5]},{i:{x:[.59],y:[1]},o:{x:[.397],y:[0]},n:["0p59_1_0p397_0"],t:140,s:[2.5],e:[-5]},{t:157}],ix:10},p:{s:!0,x:{a:1,k:[{i:{x:[.515],y:[.985]},o:{x:[.578],y:[-.007]},n:["0p515_0p985_0p578_-0p007"],t:0,s:[609],e:[625]},{i:{x:[.578],y:[1.003]},o:{x:[.438],y:[-.018]},n:["0p578_1p003_0p438_-0p018"],t:16,s:[625],e:[599]},{i:{x:[.76],y:[1]},o:{x:[.52],y:[-.01]},n:["0p76_1_0p52_-0p01"],t:34,s:[599],e:[609]},{i:{x:[.515],y:[.985]},o:{x:[.578],y:[-.007]},n:["0p515_0p985_0p578_-0p007"],t:51,s:[609],e:[625]},{i:{x:[.578],y:[1.003]},o:{x:[.438],y:[-.018]},n:["0p578_1p003_0p438_-0p018"],t:67,s:[625],e:[599]},{i:{x:[.76],y:[1]},o:{x:[.52],y:[-.01]},n:["0p76_1_0p52_-0p01"],t:85,s:[599],e:[609]},{i:{x:[.515],y:[.985]},o:{x:[.578],y:[-.007]},n:["0p515_0p985_0p578_-0p007"],t:102,s:[609],e:[625]},{i:{x:[.578],y:[1.003]},o:{x:[.438],y:[-.018]},n:["0p578_1p003_0p438_-0p018"],t:118,s:[625],e:[599]},{i:{x:[.76],y:[1]},o:{x:[.52],y:[-.01]},n:["0p76_1_0p52_-0p01"],t:136,s:[599],e:[609]},{i:{x:[.515],y:[.985]},o:{x:[.578],y:[-.007]},n:["0p515_0p985_0p578_-0p007"],t:153,s:[609],e:[625]},{i:{x:[.578],y:[1.003]},o:{x:[.438],y:[-.018]},n:["0p578_1p003_0p438_-0p018"],t:169,s:[625],e:[599]},{i:{x:[.76],y:[1]},o:{x:[.52],y:[-.01]},n:["0p76_1_0p52_-0p01"],t:187,s:[599],e:[609]},{t:204}],ix:3},y:{a:1,k:[{i:{x:[.59],y:[1]},o:{x:[.41],y:[0]},n:["0p59_1_0p41_0"],t:-54,s:[919],e:[921]},{i:{x:[.59],y:[1]},o:{x:[.619],y:[-.004]},n:["0p59_1_0p619_-0p004"],t:-38,s:[921],e:[905]},{i:{x:[.59],y:[1]},o:{x:[.41],y:[0]},n:["0p59_1_0p41_0"],t:-20,s:[905],e:[919]},{i:{x:[.59],y:[1]},o:{x:[.41],y:[0]},n:["0p59_1_0p41_0"],t:-3,s:[919],e:[921]},{i:{x:[.59],y:[1]},o:{x:[.619],y:[-.004]},n:["0p59_1_0p619_-0p004"],t:13,s:[921],e:[905]},{i:{x:[.59],y:[1]},o:{x:[.41],y:[0]},n:["0p59_1_0p41_0"],t:31,s:[905],e:[919]},{i:{x:[.59],y:[1]},o:{x:[.41],y:[0]},n:["0p59_1_0p41_0"],t:48,s:[919],e:[921]},{i:{x:[.59],y:[1]},o:{x:[.619],y:[-.004]},n:["0p59_1_0p619_-0p004"],t:64,s:[921],e:[905]},{i:{x:[.59],y:[1]},o:{x:[.41],y:[0]},n:["0p59_1_0p41_0"],t:82,s:[905],e:[919]},{i:{x:[.59],y:[1]},o:{x:[.41],y:[0]},n:["0p59_1_0p41_0"],t:99,s:[919],e:[921]},{i:{x:[.59],y:[1]},o:{x:[.619],y:[-.004]},n:["0p59_1_0p619_-0p004"],t:115,s:[921],e:[905]},{i:{x:[.59],y:[1]},o:{x:[.41],y:[0]},n:["0p59_1_0p41_0"],t:133,s:[905],e:[919]},{t:150}],ix:4}},a:{a:0,k:[-208,-2,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[0,0],[0,0],[-.402,-1.285],[-9.061,0],[0,0],[-2.728,8.713],[1.347,0]],o:[[0,0],[0,0],[-1.347,0],[2.728,8.713],[0,0],[9.061,0],[.402,-1.285],[0,0]],v:[[243,-9],[-243,-9],[-250.675,-9],[-252.593,-6.408],[-225,9],[225,9],[252.593,-6.408],[250.675,-9]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[.231372997808,.470587995941,.623528992896,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:0,ix:5},lc:1,lj:1,ml:4,ml2:{a:0,k:4,ix:8},nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[.827450980392,.090196078431,.098039215686,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Board",np:3,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[-1.152,-1.152],[0,0],[0,0],[0,11.45],[0,0]],o:[[0,0],[0,0],[11.45,0],[0,0],[0,0]],v:[[-9.79,-15.166],[-9.79,16.317],[-9.79,16.317],[10.942,-4.415],[10.942,-15.933]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[.231372997808,.470587995941,.623528992896,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:0,ix:5},lc:1,lj:1,ml:4,ml2:{a:0,k:4,ix:8},nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[.374678308824,.374678308824,.374678308824,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[-184,20],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"fin",np:3,cix:2,ix:2,mn:"ADBE Vector Group",hd:!1}],ip:0,op:51,st:0,bm:0},{ddd:0,ind:28,ty:0,nm:"wave",hd:!0,refId:"comp_1",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[-718,898,0],ix:2},a:{a:0,k:[1500,150,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,ef:[{ty:21,nm:"Fill",np:9,mn:"ADBE Fill",ix:1,en:1,ef:[{ty:10,nm:"Fill Mask",mn:"ADBE Fill-0001",ix:1,v:{a:0,k:0,ix:1}},{ty:7,nm:"All Masks",mn:"ADBE Fill-0007",ix:2,v:{a:0,k:0,ix:2}},{ty:2,nm:"Color",mn:"ADBE Fill-0002",ix:3,v:{a:0,k:[1,1,1,1],ix:3}},{ty:7,nm:"Invert",mn:"ADBE Fill-0006",ix:4,v:{a:0,k:0,ix:4}},{ty:0,nm:"Horizontal Feather",mn:"ADBE Fill-0003",ix:5,v:{a:0,k:0,ix:5}},{ty:0,nm:"Vertical Feather",mn:"ADBE Fill-0004",ix:6,v:{a:0,k:0,ix:6}},{ty:0,nm:"Opacity",mn:"ADBE Fill-0005",ix:7,v:{a:0,k:1,ix:7}}]}],w:3e3,h:300,ip:0,op:51,st:0,bm:0},{ddd:0,ind:29,ty:4,nm:"BKG Outlines",hd:!0,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[750,750,0],ix:2},a:{a:0,k:[400.25,400.25,0],ix:1},s:{a:0,k:[198,198,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[-400,400],[400,400],[400,-400],[-400,-400]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[.698000021542,.8,.917999985639,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[400.25,400.25],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 1",np:2,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:51,st:0,bm:0}]},{id:"comp_1",layers:[{ddd:0,ind:1,ty:4,nm:"Shape Layer 6",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[1500,174,0],ix:2},a:{a:0,k:[0,0,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ty:"rc",d:1,s:{a:0,k:[2827.953,379.047],ix:2},p:{a:0,k:[0,0],ix:3},r:{a:0,k:0,ix:4},nm:"Rectangle Path 1",mn:"ADBE Vector Shape - Rect",hd:!1},{ty:"st",c:{a:0,k:[1,1,1,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:0,ix:5},lc:1,lj:1,ml:4,ml2:{a:0,k:4,ix:8},nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[-49.977,179.523],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Rectangle 1",np:3,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:300,st:0,bm:0},{ddd:0,ind:2,ty:4,nm:"Shape Layer 5",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[2512,150,0],ix:2},a:{a:0,k:[0,0,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[-44.498,0],[-44.5,0],[-44.499,0],[-44.5,0],[-44.499,0],[-44.5,0],[-44.502,0],[-44.502,0]],o:[[44.498,0],[44.5,0],[44.499,0],[44.5,0],[44.499,0],[44.5,0],[44.502,0],[44.502,0],[0,0]],v:[[-356,-12.136],[-267.004,12.136],[-178.005,-12.136],[-89.007,12.136],[-.008,-12.136],[88.99,12.136],[177.991,-12.136],[266.995,12.136],[356,-12.136]],c:!1},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[1,1,1,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:17,ix:5},lc:1,lj:1,ml:4,ml2:{a:0,k:4,ix:8},nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[.519332107843,.758959242877,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!0},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Shape 1",np:3,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:300,st:0,bm:0},{ddd:0,ind:3,ty:4,nm:"Shape Layer 4",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[1816,150,0],ix:2},a:{a:0,k:[0,0,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[-44.498,0],[-44.5,0],[-44.499,0],[-44.5,0],[-44.499,0],[-44.5,0],[-44.502,0],[-44.502,0]],o:[[44.498,0],[44.5,0],[44.499,0],[44.5,0],[44.499,0],[44.5,0],[44.502,0],[44.502,0],[0,0]],v:[[-356,-12.136],[-267.004,12.136],[-178.005,-12.136],[-89.007,12.136],[-.008,-12.136],[88.99,12.136],[177.991,-12.136],[266.995,12.136],[356,-12.136]],c:!1},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[1,1,1,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:17,ix:5},lc:1,lj:1,ml:4,ml2:{a:0,k:4,ix:8},nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[.519332107843,.758959242877,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!0},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Shape 1",np:3,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:300,st:0,bm:0},{ddd:0,ind:4,ty:4,nm:"Shape Layer 3",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[1104,150,0],ix:2},a:{a:0,k:[0,0,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[-44.498,0],[-44.5,0],[-44.499,0],[-44.5,0],[-44.499,0],[-44.5,0],[-44.502,0],[-44.502,0]],o:[[44.498,0],[44.5,0],[44.499,0],[44.5,0],[44.499,0],[44.5,0],[44.502,0],[44.502,0],[0,0]],v:[[-356,-12.136],[-267.004,12.136],[-178.005,-12.136],[-89.007,12.136],[-.008,-12.136],[88.99,12.136],[177.991,-12.136],[266.995,12.136],[356,-12.136]],c:!1},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[1,1,1,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:17,ix:5},lc:1,lj:1,ml:4,ml2:{a:0,k:4,ix:8},nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[.519332107843,.758959242877,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!0},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Shape 1",np:3,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:300,st:0,bm:0},{ddd:0,ind:5,ty:4,nm:"Shape Layer 2",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[408,150,0],ix:2},a:{a:0,k:[0,0,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[-44.498,0],[-44.5,0],[-44.499,0],[-44.5,0],[-44.499,0],[-44.5,0],[-44.502,0],[-44.502,0]],o:[[44.498,0],[44.5,0],[44.499,0],[44.5,0],[44.499,0],[44.5,0],[44.502,0],[44.502,0],[0,0]],v:[[-356,-12.136],[-267.004,12.136],[-178.005,-12.136],[-89.007,12.136],[-.008,-12.136],[88.99,12.136],[177.991,-12.136],[266.995,12.136],[356,-12.136]],c:!1},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[1,1,1,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:17,ix:5},lc:1,lj:1,ml:4,ml2:{a:0,k:4,ix:8},nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[.519332107843,.758959242877,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!0},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Shape 1",np:3,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:300,st:0,bm:0}]},{id:"comp_2",layers:[{ddd:0,ind:1,ty:4,nm:"C | back foot 3",parent:26,hd:!0,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:1,k:[{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:0,s:[-121.625,-17.669,0],e:[-121.625,-17.669,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:11,s:[-121.625,-17.669,0],e:[-121.625,-17.669,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:40,s:[-121.625,-17.669,0],e:[-81.642,-16.496,0],to:[0,0,0],ti:[-22.5413055419922,-38.0431671142578,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:46,s:[-81.642,-16.496,0],e:[-81.642,-16.496,0],to:[.0101480325684,.44866102933884,0],ti:[.65415120124817,.54380148649216,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:77,s:[-81.642,-16.496,0],e:[-121.625,-17.669,0],to:[-22.5413055419922,-38.0431671142578,0],ti:[0,0,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:83,s:[-121.625,-17.669,0],e:[-121.625,-17.669,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:118,s:[-121.625,-17.669,0],e:[-121.625,-17.669,0],to:[0,0,0],ti:[0,0,0]},{t:129}],ix:2},a:{a:0,k:[0,0,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,ef:[{ty:5,nm:"Controller",np:13,mn:"Pseudo/DUIK controller",ix:1,en:1,ef:[{ty:6,nm:"Icon",mn:"Pseudo/DUIK controller-0001",ix:1,v:0},{ty:2,nm:"Color",mn:"Pseudo/DUIK controller-0002",ix:2,v:{a:0,k:[.92549020052,.0941176489,.0941176489,1],ix:2}},{ty:3,nm:"Position",mn:"Pseudo/DUIK controller-0003",ix:3,v:{a:0,k:[0,0],ix:3}},{ty:0,nm:"Size",mn:"Pseudo/DUIK controller-0004",ix:4,v:{a:0,k:53,ix:4}},{ty:0,nm:"Orientation",mn:"Pseudo/DUIK controller-0005",ix:5,v:{a:0,k:0,ix:5}},{ty:0,nm:"Opacity",mn:"Pseudo/DUIK controller-0006",ix:6,v:{a:0,k:100,ix:6}},{ty:6,nm:"",mn:"Pseudo/DUIK controller-0007",ix:7,v:0},{ty:6,nm:"Anchor",mn:"Pseudo/DUIK controller-0008",ix:8,v:0},{ty:2,nm:"Color",mn:"Pseudo/DUIK controller-0009",ix:9,v:{a:0,k:[0,0,0,1],ix:9}},{ty:0,nm:"Size",mn:"Pseudo/DUIK controller-0010",ix:10,v:{a:0,k:53,ix:10}},{ty:6,nm:"",mn:"Pseudo/DUIK controller-0011",ix:11,v:0}]},{ty:5,nm:"IK | back foot",np:50,mn:"Pseudo/DUIK 2layer ik",ix:2,en:1,ef:[{ty:7,nm:"IK",mn:"Pseudo/DUIK 2layer ik-0001",ix:1,v:{a:0,k:1,ix:1}},{ty:7,nm:"Reverse",mn:"Pseudo/DUIK 2layer ik-0002",ix:2,v:{a:0,k:0,ix:2}},{ty:6,nm:"FK",mn:"Pseudo/DUIK 2layer ik-0003",ix:3,v:0},{ty:7,nm:"Follow through & Overlap",mn:"Pseudo/DUIK 2layer ik-0004",ix:4,v:{a:0,k:0,ix:4}},{ty:6,nm:"Follow through & Overlap",mn:"Pseudo/DUIK 2layer ik-0005",ix:5,v:0},{ty:0,nm:"FK",mn:"Pseudo/DUIK 2layer ik-0006",ix:6,v:{a:0,k:0,ix:6}},{ty:0,nm:"Flexibility",mn:"Pseudo/DUIK 2layer ik-0007",ix:7,v:{a:0,k:100,ix:7}},{ty:0,nm:"Resistance",mn:"Pseudo/DUIK 2layer ik-0008",ix:8,v:{a:0,k:10,ix:8}},{ty:6,nm:"",mn:"Pseudo/DUIK 2layer ik-0009",ix:9,v:0},{ty:6,nm:"Individual controls",mn:"Pseudo/DUIK 2layer ik-0010",ix:10,v:0},{ty:0,nm:"Upper",mn:"Pseudo/DUIK 2layer ik-0011",ix:11,v:{a:0,k:0,ix:11}},{ty:0,nm:"Lower",mn:"Pseudo/DUIK 2layer ik-0012",ix:12,v:{a:0,k:0,ix:12}},{ty:0,nm:"Goal",mn:"Pseudo/DUIK 2layer ik-0013",ix:13,v:{a:0,k:0,ix:13}},{ty:6,nm:"",mn:"Pseudo/DUIK 2layer ik-0014",ix:14,v:0},{ty:7,nm:"Parent rotation",mn:"Pseudo/DUIK 2layer ik-0015",ix:15,v:{a:0,k:1,ix:15}},{ty:6,nm:"",mn:"Pseudo/DUIK 2layer ik-0016",ix:16,v:0},{ty:6,nm:"Stretch",mn:"Pseudo/DUIK 2layer ik-0017",ix:17,v:0},{ty:7,nm:"Auto-Stretch",mn:"Pseudo/DUIK 2layer ik-0018",ix:18,v:{a:0,k:1,ix:18}},{ty:0,nm:"Stretch",mn:"Pseudo/DUIK 2layer ik-0019",ix:19,v:{a:0,k:0,ix:19}},{ty:0,nm:"Auto-Shrink",mn:"Pseudo/DUIK 2layer ik-0020",ix:20,v:{a:0,k:0,ix:20}},{ty:6,nm:"",mn:"Pseudo/DUIK 2layer ik-0021",ix:21,v:0},{ty:6,nm:"Advanced",mn:"Pseudo/DUIK 2layer ik-0022",ix:22,v:0},{ty:0,nm:"Full rotation limit",mn:"Pseudo/DUIK 2layer ik-0023",ix:23,v:{a:0,k:-180,ix:23}},{ty:6,nm:"",mn:"Pseudo/DUIK 2layer ik-0024",ix:24,v:0},{ty:6,nm:"Data",mn:"Pseudo/DUIK 2layer ik-0025",ix:25,v:0},{ty:6,nm:"Layers",mn:"Pseudo/DUIK 2layer ik-0026",ix:26,v:0},{ty:10,nm:"Upper",mn:"Pseudo/DUIK 2layer ik-0027",ix:27,v:{a:0,k:2,ix:27}},{ty:10,nm:"Lower",mn:"Pseudo/DUIK 2layer ik-0028",ix:28,v:{a:0,k:4,ix:28}},{ty:10,nm:"Goal",mn:"Pseudo/DUIK 2layer ik-0029",ix:29,v:{a:0,k:3,ix:29}},{ty:6,nm:"",mn:"Pseudo/DUIK 2layer ik-0030",ix:30,v:0},{ty:6,nm:"Stretch data",mn:"Pseudo/DUIK 2layer ik-0031",ix:31,v:0},{ty:0,nm:"Upper stretch",mn:"Pseudo/DUIK 2layer ik-0032",ix:32,v:{a:0,k:0,ix:32,x:`var $bm_rt;
var newLength;
var fx = effect('IK | back foot');
var layer1 = null;
var layer2 = null;
var result = 0;
try {
    layer1 = fx(27);
    layer2 = fx(28);
} catch (e) {
}
if (layer1 != null) {
    newLength = length(layer1.toWorld(layer1.anchorPoint), layer2.toWorld(layer2.anchorPoint));
    result = sub(newLength, fx(40).value);
}
$bm_rt = result;`}},{ty:0,nm:"Upper scale",mn:"Pseudo/DUIK 2layer ik-0033",ix:33,v:{a:0,k:100,ix:33,x:`var $bm_rt;
var fx = effect('IK | back foot');
if (fx(40).value > 0)
    $bm_rt = mul(div(sum(fx(32).value, fx(40).value), fx(40).value), 100);
else
    $bm_rt = 100;`}},{ty:0,nm:"Lower stretch",mn:"Pseudo/DUIK 2layer ik-0034",ix:34,v:{a:0,k:0,ix:34,x:`var $bm_rt;
var newLength;
var fx = effect('IK | back foot');
var layer2 = null;
var result = 0;
try {
    layer2 = fx(28);
} catch (e) {
}
if (layer2 != null) {
    newLength = length(layer2.toWorld(fx(36).value), layer2.toWorld(layer2.anchorPoint));
    result = sub(newLength, fx(41).value);
}
$bm_rt = result;`}},{ty:0,nm:"Lower scale",mn:"Pseudo/DUIK 2layer ik-0035",ix:35,v:{a:0,k:100,ix:35,x:`var $bm_rt;
var fx = effect('IK | back foot');
if (fx(41).value > 0)
    $bm_rt = mul(div(sum(fx(34).value, fx(41).value), fx(41).value), 100);
else
    $bm_rt = 100;`}},{ty:3,nm:"Goal position",mn:"Pseudo/DUIK 2layer ik-0036",ix:36,v:{a:0,k:[-232.536,261.725],ix:36,x:`var $bm_rt;
var fx, layer1, layer1, stretch, auto, IK, shrinkVal, dist1, dist2, IKLength, IKStretched, boneStretch, proportion, posC, posR, distC, shrinkMax, shrink, shrink, boneStretch, boneStretch, boneStretch, coef, coef, coef, coef;
var result = value;
fx = effect('IK | back foot');
layer1 = null;
try {
    layer1 = fx(27);
} catch (e) {
}
if (layer1 != null) {
    stretch = fx(19);
    auto = fx(18).value;
    IK = fx(1).value;
    shrinkVal = div(fx(20).value, 100);
    function getWorldPos(L) {
        return L.toWorld(L.anchorPoint);
    }
    dist1 = fx(40).value;
    dist2 = fx(41).value;
    IKLength = sum(dist1, dist2);
    IKStretched = sum(IKLength, stretch);
    boneStretch = 0;
    proportion = div(dist2, IKLength);
    posC = toWorld(anchorPoint);
    posR = getWorldPos(layer1);
    distC = length(posC, posR);
    shrinkMax = mul(IKLength, shrinkVal);
    shrink = 0;
    if (distC < IKStretched && IK)
        shrink = sub(1, div(distC, IKStretched));
    boneStretch = sub(boneStretch, mul(easeOut(shrink, 0, shrinkMax), proportion));
    if (distC > IKStretched && auto && IK)
        boneStretch = sum(boneStretch, mul(sub(distC, IKLength), proportion));
    else
        boneStretch = sum(boneStretch, mul(stretch, proportion));
    coef = 1;
    dist2 != 0 ? coef = div(sum(dist2, boneStretch), dist2) : coef = 1;
    result = sum(mul(sub([
        -124.019342278813,
        139.586542583283
    ], [
        -162,
        84,
        0
    ]), coef), [
        -162,
        84,
        0
    ]);
}
$bm_rt = result;`}},{ty:3,nm:"Goal world position",mn:"Pseudo/DUIK 2layer ik-0037",ix:37,v:{a:0,k:[750,750],ix:37,x:`var $bm_rt;
var fx = effect('IK | back foot');
var layer2 = null;
var result = [
        0,
        0
    ];
try {
    layer2 = fx(28);
} catch (e) {
}
if (layer2 != null) {
    result = layer2.toWorld(fx(36).value);
}
$bm_rt = result;`}},{ty:6,nm:"",mn:"Pseudo/DUIK 2layer ik-0038",ix:38,v:0},{ty:6,nm:"Lengths",mn:"Pseudo/DUIK 2layer ik-0039",ix:39,v:0},{ty:0,nm:"Upper length",mn:"Pseudo/DUIK 2layer ik-0040",ix:40,v:{a:0,k:76.062,ix:40}},{ty:0,nm:"Lower length",mn:"Pseudo/DUIK 2layer ik-0041",ix:41,v:{a:0,k:67.323,ix:41}},{ty:0,nm:"IK length",mn:"Pseudo/DUIK 2layer ik-0042",ix:42,v:{a:0,k:0,ix:42,x:`var $bm_rt;
var fx = effect('IK | back foot');
var result = sum(fx(40).value, fx(41).value);
var goalPos = fx(37).value;
var layer1 = null;
try {
    layer1 = fx(27);
} catch (e) {
}
if (layer1 != null) {
    result = length(layer1.toWorld(layer1.anchorPoint), goalPos);
}
$bm_rt = result;`}},{ty:6,nm:"",mn:"Pseudo/DUIK 2layer ik-0043",ix:43,v:0},{ty:7,nm:"Straight",mn:"Pseudo/DUIK 2layer ik-0044",ix:44,v:{a:0,k:0,ix:44,x:`var $bm_rt;
var fx;
fx = effect('IK | back foot');
var layer1 = null;
var layer2 = null;
var result = false;
try {
    layer1 = fx(27);
    layer2 = fx(28);
} catch (e) {
}
if (layer1 != null) {
    var a = layer1.toWorld(layer1.anchorPoint);
    var b = layer2.toWorld(layer2.anchorPoint);
    var c = layer2.toWorld(fx(36).value);
    result = Math.abs(a[0] * (b[1] - c[1]) + b[0] * (c[1] - a[1]) + c[0] * (a[1] - b[1])) < 1000;
}
$bm_rt = result;`}},{ty:6,nm:"",mn:"Pseudo/DUIK 2layer ik-0045",ix:45,v:0},{ty:6,nm:"Display",mn:"Pseudo/DUIK 2layer ik-0046",ix:46,v:0},{ty:7,nm:"Draw guides",mn:"Pseudo/DUIK 2layer ik-0047",ix:47,v:{a:0,k:0,ix:47}},{ty:6,nm:"",mn:"Pseudo/DUIK 2layer ik-0048",ix:48,v:0}]}],shapes:[{ty:"gr",it:[{d:1,ty:"el",s:{a:0,k:[2,2],ix:2},p:{a:0,k:[0,0],ix:3},nm:"Ellipse Path 1",mn:"ADBE Vector Shape - Ellipse",hd:!1},{d:1,ty:"el",s:{a:0,k:[10,10],ix:2},p:{a:0,k:[0,0],ix:3},nm:"Ellipse Path 2",mn:"ADBE Vector Shape - Ellipse",hd:!1},{ty:"sr",sy:1,d:1,pt:{a:0,k:4,ix:3},p:{a:0,k:[0,0],ix:4},r:{a:0,k:0,ix:5},ir:{a:0,k:0,ix:6},is:{a:0,k:0,ix:8},or:{a:0,k:10,ix:7},os:{a:0,k:0,ix:9},ix:3,nm:"Polystar Path 1",mn:"ADBE Vector Shape - Star",hd:!1},{ty:"st",c:{a:0,k:[1,1,1,1],ix:3,x:`var $bm_rt;
$bm_rt = effect('Controller')(9);`},o:{a:0,k:100,ix:4},w:{a:0,k:2,ix:5,x:`var $bm_rt;
$bm_rt = div(100, content('Anchor').transform.scale[0]);`},lc:2,lj:1,ml:4,ml2:{a:0,k:4,ix:8},nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3,x:`var $bm_rt;
$bm_rt = [
    effect('Controller')(10),
    effect('Controller')(10)
];`},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Anchor",np:4,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[-6.215,0],[0,6.215],[6.215,0],[0,0]],o:[[0,6.215],[6.215,0],[0,-6.216],[0,0],[0,0]],v:[[-11.067,.048],[.187,11.302],[11.442,.048],[.187,-11.206],[6.94,-17.115]],c:!1},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ind:1,ty:"sh",ix:2,ks:{a:0,k:{i:[[0,0],[0,0]],o:[[0,0],[0,0]],v:[[.062,-7.546],[.062,7.546]],c:!1},ix:2},nm:"Path 2",mn:"ADBE Vector Shape - Group",hd:!1},{ind:2,ty:"sh",ix:3,ks:{a:0,k:{i:[[0,0],[0,0]],o:[[0,0],[0,0]],v:[[7.546,0],[-7.546,0]],c:!1},ix:2},nm:"Path 3",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[.517647087574,.835294127464,.980392158031,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:1.5,ix:5},lc:2,lj:1,ml:4,ml2:{a:0,k:4,ix:8},nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2,x:`var $bm_rt;
$bm_rt = effect('Controller')(3);`},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3,x:`var $bm_rt;
$bm_rt = [
    effect('Controller')(4) * 2,
    effect('Controller')(4) * 2
];`},r:{a:0,k:0,ix:6,x:`var $bm_rt;
$bm_rt = effect('Controller')(5);`},o:{a:0,k:100,ix:7,x:`var $bm_rt;
$bm_rt = effect('Controller')(6);`},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Icon",np:4,cix:2,ix:2,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[0,0]],o:[[0,0],[0,0]],v:[[-8,16],[8,16]],c:!1},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[1,1,1,1],ix:3,x:`var $bm_rt;
$bm_rt = sub(effect('Controller')(2), [
    0.2,
    0.2,
    0.2,
    0
]);`},o:{a:0,k:100,ix:4,x:`var $bm_rt;
var fx = effect('IK | back foot');
if (fx(47).value)
    $bm_rt = mul(fx(44).value, 100);
else
    $bm_rt = 0;`},w:{a:0,k:2,ix:5},lc:2,lj:1,ml:4,ml2:{a:0,k:4,ix:8},nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2,x:`var $bm_rt;
$bm_rt = effect('Controller')(3);`},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3,x:`var $bm_rt;
$bm_rt = [
    effect('Controller')(4) * 2,
    effect('Controller')(4) * 2
];`},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7,x:`var $bm_rt;
$bm_rt = effect('Controller')(6);`},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"IK",np:2,cix:2,ix:3,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[],o:[],v:[],c:!1},ix:2,x:`var $bm_rt;
if (active) {
    var fx = effect('IK | back foot');
    var layer1 = null;
    var result = [[
                0,
                0
            ]];
    if (fx(1).value && fx(47).value) {
        try {
            layer1 = fx(27);
        } catch (e) {
        }
        if (layer1 != null) {
            var l = layer1.toWorld(layer1.anchorPoint);
            l = fromWorld(l);
            result = [
                l,
                [
                    0,
                    0
                ]
            ];
        }
    }
    $bm_rt = createPath(result, [], [], false);
} else
    $bm_rt = value;`},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[1,1,1,1],ix:3,x:`var $bm_rt;
$bm_rt = sub(effect('Controller')(2), [
    0.2,
    0.2,
    0.2,
    0
]);`},o:{a:0,k:100,ix:4},w:{a:0,k:2,ix:5},lc:2,lj:1,ml:4,ml2:{a:0,k:4,ix:8},d:[{n:"d",nm:"dash",v:{a:0,k:5,ix:1}}],nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"IK Line",np:2,cix:2,ix:4,mn:"ADBE Vector Group",hd:!1}],ip:0,op:158,st:0,bm:0},{ddd:0,ind:2,ty:4,nm:"Front Leg Outlines 2",parent:17,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10,x:`var $bm_rt;
var IKFK;
var controller = null;
var result = value;
try {
    controller = effect('IK 2')(1);
} catch (e) {
}
if (controller != null) {
    var fx = controller.effect('IK | back foot');
    IKFK = fx(1).value;
    function ik() {
        var layer1, layer2, endPos, limit, cw, A, C, B, E, a, b, c, x, alpha, D, delta, V, adj1, IK, IK;
        layer1 = thisLayer;
        layer2 = null;
        try {
            layer2 = fx(28);
        } catch (e) {
            return value;
        }
        if (layer2 != null) {
            endPos = fx(36).value;
            limit = fx(23).value;
            cw = fx(2).value;
            function getWorldPos(L) {
                return L.toWorld(L.anchorPoint);
            }
            A = getWorldPos(layer1);
            C = layer2.toWorld(endPos);
            B = getWorldPos(layer2);
            E = getWorldPos(controller);
            a = length(B, C);
            b = length(E, A);
            c = length(A, B);
            x = div(sub(sum(mul(b, b), mul(c, c)), mul(a, a)), mul(2, b));
            alpha = Math.acos(clamp(div(x, c), -1, 1));
            D = sub(E, A);
            delta = Math.atan2(D[1], D[0]);
            result = radiansToDegrees(sub(delta, mul(cw ? 1 : -1, alpha)));
            V = sub(B, A);
            adj1 = radiansToDegrees(Math.atan2(V[1], V[0]));
            IK = sum(sub(result, adj1), value);
            if (IK < limit)
                IK = sum(IK, 360);
            return IK;
        }
    }
    function fk() {
        var follow = fx(15).value;
        var FK = sum(fx(11).value, fx(6).value);
        var p = thisLayer;
        if (!follow) {
            while (p.hasParent) {
                p = p.parent;
                FK = sub(FK, p.rotation.value);
            }
        }
        return FK;
    }
    result = IKFK ? ik() : fk();
}
$bm_rt = result;`},p:{a:1,k:[{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:0,s:[71.385,63.51,0],e:[44.799,70.382,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:11,s:[44.799,70.382,0],e:[44.799,70.382,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:118,s:[44.799,70.382,0],e:[71.385,63.51,0],to:[0,0,0],ti:[0,0,0]},{t:129}],ix:2},a:{a:0,k:[23.424,10.167,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,ef:[{ty:5,nm:"IK",np:3,mn:"Pseudo/DUIK ik",ix:1,en:1,ef:[{ty:10,nm:"Controller",mn:"Pseudo/DUIK ik-0001",ix:1,v:{a:0,k:5,ix:1}}]},{ty:5,nm:"IK 2",np:3,mn:"Pseudo/DUIK ik",ix:2,en:1,ef:[{ty:10,nm:"Controller",mn:"Pseudo/DUIK ik-0001",ix:1,v:{a:0,k:1,ix:1}}]}],shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[3.87,0],[0,0],[0,-3.78],[0,0],[-4.555,3.138],[-.589,17.084]],o:[[0,0],[-3.78,0],[0,0],[0,5.531],[30.311,-20.881],[.134,-3.868]],v:[[16.198,-45.917],[-16.328,-45.917],[-23.173,-39.072],[-23.173,37.158],[-12.41,42.779],[23.039,-38.849]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[23.423,46.167],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 1",np:2,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:158,st:0,bm:0},{ddd:0,ind:3,ty:4,nm:"back foot 2",parent:4,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:-8,ix:10,x:`var $bm_rt;
var ctrl = null;
try {
    $bm_rt = ctrl = effect('IK 2')(1);
} catch (e) {
}
;
if (ctrl != null) {
    var fx = ctrl.effect('IK | back foot');
    var ikfk = fx(1).value;
    function ik() {
        var IK = ctrl.rotation.value;
        var layer = thisLayer;
        while (layer.hasParent) {
            layer = layer.parent;
            IK = sub(IK, layer.rotation);
        }
        return IK;
    }
    function fk() {
        var FK = value;
        var parentRot = parent.transform.rotation;
        var delay = fx(8).value;
        var amp = fx(7).value;
        var ftEnabled = fx(4).value;
        if (!ftEnabled) {
            amp = 0;
            delay = 0;
        } else {
            delay = div(delay, 100);
            amp = div(amp, 100);
        }
        FK = parentRot.valueAtTime(sub(time, delay));
        FK = mul(FK, amp);
        FK = sub(sum(sum(FK, value), fx(13)), parentRot.valueAtTime(0));
        return FK;
    }
    $bm_rt = ikfk ? ik() : fk();
} else
    $bm_rt = value;`},p:{a:0,k:[-124.019,139.587,0],ix:2,x:`var $bm_rt;
var ctrl = null;
var result = value;
try {
    ctrl = effect('IK 2')(1);
} catch (e) {
    value;
}
;
if (ctrl != null) {
    result = ctrl.effect('IK | back foot')(36).value;
}
$bm_rt = result;`},a:{a:0,k:[-275.348,161.652,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,ef:[{ty:5,nm:"IK",np:3,mn:"Pseudo/DUIK ik",ix:1,en:1,ef:[{ty:10,nm:"Controller",mn:"Pseudo/DUIK ik-0001",ix:1,v:{a:0,k:5,ix:1}}]},{ty:5,nm:"IK 2",np:3,mn:"Pseudo/DUIK ik",ix:2,en:1,ef:[{ty:10,nm:"Controller",mn:"Pseudo/DUIK ik-0001",ix:1,v:{a:0,k:1,ix:1}}]}],shapes:[{ty:"gr",it:[{d:1,ty:"el",s:{a:0,k:[43.305,43.305],ix:2},p:{a:0,k:[0,0],ix:3},nm:"Ellipse Path 1",mn:"ADBE Vector Shape - Ellipse",hd:!1},{ty:"st",c:{a:0,k:[.6,.6,.6,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:0,ix:5},lc:1,lj:1,ml:4,ml2:{a:0,k:4,ix:8},nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[-275.348,161.652],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[93.147,93.147],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Ellipse 1",np:3,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:158,st:0,bm:0},{ddd:0,ind:4,ty:4,nm:"leg 2",parent:2,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:8,ix:10,x:`var $bm_rt;
var IKFK, layer1, layer2;
var controller = null;
var result = value;
try {
    controller = effect('IK 2')(1);
} catch (e) {
}
if (controller != null) {
    var fx = controller.effect('IK | back foot');
    IKFK = fx(1).value;
    layer1 = null;
    layer2 = thisLayer;
    try {
        layer1 = fx(27);
    } catch (e) {
    }
    if (layer1 != null) {
        function ik() {
            var endPos, cw, A, B, C, E, a, b, c, x, alpha, y, gamma, V1, adj1, V2, adj2, IK;
            endPos = fx(36).value;
            cw = fx(2).value;
            function getWorldPos(L) {
                return L.toWorld(L.anchorPoint);
            }
            A = getWorldPos(layer1);
            B = getWorldPos(layer2);
            C = layer2.toWorld(endPos);
            E = getWorldPos(controller);
            a = length(B, C);
            b = length(E, A);
            c = length(A, B);
            x = div(sub(sum(mul(b, b), mul(c, c)), mul(a, a)), mul(2, b));
            alpha = Math.acos(clamp(div(x, c), -1, 1));
            y = sub(b, x);
            gamma = Math.acos(clamp(div(y, a), -1, 1));
            result = mul(cw ? 1 : -1, radiansToDegrees(sum(gamma, alpha)));
            V1 = sub(B, A);
            adj1 = radiansToDegrees(Math.atan2(V1[1], V1[0]));
            V2 = sub(C, B);
            adj2 = radiansToDegrees(Math.atan2(V2[1], V2[0]));
            IK = sum(sub(sum(result, adj1), adj2), value);
            return IK;
        }
        function fk() {
            var FK;
            var ctrlRot = fx(6);
            var delay = fx(8).value;
            var amp = fx(7).value;
            var follow = fx(15).value;
            var ftEnabled = fx(4).value;
            if (!ftEnabled) {
                amp = 0;
                delay = 0;
            } else {
                delay = div(delay, 100);
                amp = div(amp, 100);
            }
            FK = ctrlRot.valueAtTime(sub(time, delay));
            if (follow && hasParent) {
                var cP = layer1;
                while (cP.hasParent) {
                    cP = cP.parent;
                    FK = sub(FK, sub(cP.rotation.value, cP.rotation.valueAtTime(sub(time, delay))));
                }
            }
            FK = sub(FK, ctrlRot.value);
            FK = mul(FK, amp);
            FK = sub(FK, mul(ctrlRot.velocity, div(delay, 5)));
            FK = sum(FK, fx(12).value);
            return FK;
        }
        result = IKFK ? ik() : fk();
    }
}
$bm_rt = result;`},p:{a:0,k:[6.809,84.392,0],ix:2,x:`var $bm_rt;
var fx, layer1, stretch, auto, IK, shrinkVal, dist1, dist2, IKLength, IKStretched, boneStretch, proportion, posC, posR, distC, shrinkMax, shrink, shrink, boneStretch, boneStretch, boneStretch, coef, coef, coef, coef;
var ctrl = null;
var result = value;
try {
    ctrl = effect('IK 2')(1);
} catch (e) {
    value;
}
;
if (ctrl != null) {
    fx = ctrl.effect('IK | back foot');
    layer1 = null;
    result = [
        211,
        25
    ];
    try {
        layer1 = fx(27);
    } catch (e) {
    }
    if (layer1 != null) {
        stretch = fx(19).value;
        auto = fx(18).value;
        IK = fx(1).value;
        shrinkVal = div(fx(20).value, 100);
        function getWorldPos(L) {
            return L.toWorld(L.anchorPoint);
        }
        dist1 = fx(40).value;
        dist2 = fx(41).value;
        IKLength = sum(dist1, dist2);
        IKStretched = sum(IKLength, stretch);
        boneStretch = 0;
        proportion = div(dist1, IKLength);
        posC = getWorldPos(ctrl);
        posR = getWorldPos(layer1);
        distC = length(posC, posR);
        shrinkMax = mul(IKLength, shrinkVal);
        shrink = 0;
        if (distC < IKStretched && IK)
            shrink = sub(1, div(distC, IKStretched));
        boneStretch = sub(boneStretch, mul(easeOut(shrink, 0, shrinkMax), proportion));
        if (distC > IKStretched && auto && IK)
            boneStretch = sum(boneStretch, mul(sub(distC, IKLength), proportion));
        else
            boneStretch = sum(boneStretch, mul(stretch, proportion));
        coef = 1;
        dist1 != 0 ? coef = div(sum(dist1, boneStretch), dist1) : coef = 1;
        result = sum(mul(sub([
            6.80930328369141,
            84.3920974731445,
            0
        ], [
            23.4235000610352,
            10.1669998168945,
            0
        ]), coef), [
            23.4235000610352,
            10.1669998168945,
            0
        ]);
    }
}
$bm_rt = result;`},a:{a:0,k:[-162,84,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,ef:[{ty:5,nm:"IK",np:3,mn:"Pseudo/DUIK ik",ix:1,en:1,ef:[{ty:10,nm:"Controller",mn:"Pseudo/DUIK ik-0001",ix:1,v:{a:0,k:5,ix:1}}]},{ty:5,nm:"IK 2",np:3,mn:"Pseudo/DUIK ik",ix:2,en:1,ef:[{ty:10,nm:"Controller",mn:"Pseudo/DUIK ik-0001",ix:1,v:{a:0,k:1,ix:1}}]}],shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[0,0]],o:[[0,0],[0,0]],v:[[-162,84],[-123,150]],c:!1},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[.6,.6,.6,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:10,ix:5},lc:2,lj:1,ml:4,ml2:{a:0,k:4,ix:8},nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Shape 1",np:3,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:158,st:0,bm:0},{ddd:0,ind:5,ty:4,nm:"C | back foot 2",parent:26,hd:!0,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:1,k:[{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:0,s:[-163.848,-17.348,0],e:[-163.848,-17.348,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:11,s:[-163.848,-17.348,0],e:[-163.848,-17.348,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:46,s:[-163.848,-17.348,0],e:[-138.858,-16.615,0],to:[0,0,0],ti:[-11.6627559661865,-28.6877517700195,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:52,s:[-138.858,-16.615,0],e:[-138.858,-16.615,0],to:[.06960158795118,-.15403731167316,0],ti:[.59811794757843,.35360610485077,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:71,s:[-138.858,-16.615,0],e:[-163.848,-17.348,0],to:[-11.6627559661865,-28.6877517700195,0],ti:[0,0,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:77,s:[-163.848,-17.348,0],e:[-163.848,-17.348,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:118,s:[-163.848,-17.348,0],e:[-163.848,-17.348,0],to:[0,0,0],ti:[0,0,0]},{t:129}],ix:2},a:{a:0,k:[0,0,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,ef:[{ty:5,nm:"Controller",np:13,mn:"Pseudo/DUIK controller",ix:1,en:1,ef:[{ty:6,nm:"Icon",mn:"Pseudo/DUIK controller-0001",ix:1,v:0},{ty:2,nm:"Color",mn:"Pseudo/DUIK controller-0002",ix:2,v:{a:0,k:[.92549020052,.0941176489,.0941176489,1],ix:2}},{ty:3,nm:"Position",mn:"Pseudo/DUIK controller-0003",ix:3,v:{a:0,k:[0,0],ix:3}},{ty:0,nm:"Size",mn:"Pseudo/DUIK controller-0004",ix:4,v:{a:0,k:53,ix:4}},{ty:0,nm:"Orientation",mn:"Pseudo/DUIK controller-0005",ix:5,v:{a:0,k:0,ix:5}},{ty:0,nm:"Opacity",mn:"Pseudo/DUIK controller-0006",ix:6,v:{a:0,k:100,ix:6}},{ty:6,nm:"",mn:"Pseudo/DUIK controller-0007",ix:7,v:0},{ty:6,nm:"Anchor",mn:"Pseudo/DUIK controller-0008",ix:8,v:0},{ty:2,nm:"Color",mn:"Pseudo/DUIK controller-0009",ix:9,v:{a:0,k:[0,0,0,1],ix:9}},{ty:0,nm:"Size",mn:"Pseudo/DUIK controller-0010",ix:10,v:{a:0,k:53,ix:10}},{ty:6,nm:"",mn:"Pseudo/DUIK controller-0011",ix:11,v:0}]},{ty:5,nm:"IK | back foot",np:50,mn:"Pseudo/DUIK 2layer ik",ix:2,en:1,ef:[{ty:7,nm:"IK",mn:"Pseudo/DUIK 2layer ik-0001",ix:1,v:{a:0,k:1,ix:1}},{ty:7,nm:"Reverse",mn:"Pseudo/DUIK 2layer ik-0002",ix:2,v:{a:0,k:0,ix:2}},{ty:6,nm:"FK",mn:"Pseudo/DUIK 2layer ik-0003",ix:3,v:0},{ty:7,nm:"Follow through & Overlap",mn:"Pseudo/DUIK 2layer ik-0004",ix:4,v:{a:0,k:0,ix:4}},{ty:6,nm:"Follow through & Overlap",mn:"Pseudo/DUIK 2layer ik-0005",ix:5,v:0},{ty:0,nm:"FK",mn:"Pseudo/DUIK 2layer ik-0006",ix:6,v:{a:0,k:0,ix:6}},{ty:0,nm:"Flexibility",mn:"Pseudo/DUIK 2layer ik-0007",ix:7,v:{a:0,k:100,ix:7}},{ty:0,nm:"Resistance",mn:"Pseudo/DUIK 2layer ik-0008",ix:8,v:{a:0,k:10,ix:8}},{ty:6,nm:"",mn:"Pseudo/DUIK 2layer ik-0009",ix:9,v:0},{ty:6,nm:"Individual controls",mn:"Pseudo/DUIK 2layer ik-0010",ix:10,v:0},{ty:0,nm:"Upper",mn:"Pseudo/DUIK 2layer ik-0011",ix:11,v:{a:0,k:0,ix:11}},{ty:0,nm:"Lower",mn:"Pseudo/DUIK 2layer ik-0012",ix:12,v:{a:0,k:0,ix:12}},{ty:0,nm:"Goal",mn:"Pseudo/DUIK 2layer ik-0013",ix:13,v:{a:0,k:0,ix:13}},{ty:6,nm:"",mn:"Pseudo/DUIK 2layer ik-0014",ix:14,v:0},{ty:7,nm:"Parent rotation",mn:"Pseudo/DUIK 2layer ik-0015",ix:15,v:{a:0,k:1,ix:15}},{ty:6,nm:"",mn:"Pseudo/DUIK 2layer ik-0016",ix:16,v:0},{ty:6,nm:"Stretch",mn:"Pseudo/DUIK 2layer ik-0017",ix:17,v:0},{ty:7,nm:"Auto-Stretch",mn:"Pseudo/DUIK 2layer ik-0018",ix:18,v:{a:0,k:1,ix:18}},{ty:0,nm:"Stretch",mn:"Pseudo/DUIK 2layer ik-0019",ix:19,v:{a:0,k:0,ix:19}},{ty:0,nm:"Auto-Shrink",mn:"Pseudo/DUIK 2layer ik-0020",ix:20,v:{a:0,k:0,ix:20}},{ty:6,nm:"",mn:"Pseudo/DUIK 2layer ik-0021",ix:21,v:0},{ty:6,nm:"Advanced",mn:"Pseudo/DUIK 2layer ik-0022",ix:22,v:0},{ty:0,nm:"Full rotation limit",mn:"Pseudo/DUIK 2layer ik-0023",ix:23,v:{a:0,k:-180,ix:23}},{ty:6,nm:"",mn:"Pseudo/DUIK 2layer ik-0024",ix:24,v:0},{ty:6,nm:"Data",mn:"Pseudo/DUIK 2layer ik-0025",ix:25,v:0},{ty:6,nm:"Layers",mn:"Pseudo/DUIK 2layer ik-0026",ix:26,v:0},{ty:10,nm:"Upper",mn:"Pseudo/DUIK 2layer ik-0027",ix:27,v:{a:0,k:6,ix:27}},{ty:10,nm:"Lower",mn:"Pseudo/DUIK 2layer ik-0028",ix:28,v:{a:0,k:8,ix:28}},{ty:10,nm:"Goal",mn:"Pseudo/DUIK 2layer ik-0029",ix:29,v:{a:0,k:7,ix:29}},{ty:6,nm:"",mn:"Pseudo/DUIK 2layer ik-0030",ix:30,v:0},{ty:6,nm:"Stretch data",mn:"Pseudo/DUIK 2layer ik-0031",ix:31,v:0},{ty:0,nm:"Upper stretch",mn:"Pseudo/DUIK 2layer ik-0032",ix:32,v:{a:0,k:0,ix:32,x:`var $bm_rt;
var newLength;
var fx = effect('IK | back foot');
var layer1 = null;
var layer2 = null;
var result = 0;
try {
    layer1 = fx(27);
    layer2 = fx(28);
} catch (e) {
}
if (layer1 != null) {
    newLength = length(layer1.toWorld(layer1.anchorPoint), layer2.toWorld(layer2.anchorPoint));
    result = sub(newLength, fx(40).value);
}
$bm_rt = result;`}},{ty:0,nm:"Upper scale",mn:"Pseudo/DUIK 2layer ik-0033",ix:33,v:{a:0,k:100,ix:33,x:`var $bm_rt;
var fx = effect('IK | back foot');
if (fx(40).value > 0)
    $bm_rt = mul(div(sum(fx(32).value, fx(40).value), fx(40).value), 100);
else
    $bm_rt = 100;`}},{ty:0,nm:"Lower stretch",mn:"Pseudo/DUIK 2layer ik-0034",ix:34,v:{a:0,k:0,ix:34,x:`var $bm_rt;
var newLength;
var fx = effect('IK | back foot');
var layer2 = null;
var result = 0;
try {
    layer2 = fx(28);
} catch (e) {
}
if (layer2 != null) {
    newLength = length(layer2.toWorld(fx(36).value), layer2.toWorld(layer2.anchorPoint));
    result = sub(newLength, fx(41).value);
}
$bm_rt = result;`}},{ty:0,nm:"Lower scale",mn:"Pseudo/DUIK 2layer ik-0035",ix:35,v:{a:0,k:100,ix:35,x:`var $bm_rt;
var fx = effect('IK | back foot');
if (fx(41).value > 0)
    $bm_rt = mul(div(sum(fx(34).value, fx(41).value), fx(41).value), 100);
else
    $bm_rt = 100;`}},{ty:3,nm:"Goal position",mn:"Pseudo/DUIK 2layer ik-0036",ix:36,v:{a:0,k:[-235.796,268.471],ix:36,x:`var $bm_rt;
var fx, layer1, layer1, stretch, auto, IK, shrinkVal, dist1, dist2, IKLength, IKStretched, boneStretch, proportion, posC, posR, distC, shrinkMax, shrink, shrink, boneStretch, boneStretch, boneStretch, coef, coef, coef, coef;
var result = value;
fx = effect('IK | back foot');
layer1 = null;
try {
    layer1 = fx(27);
} catch (e) {
}
if (layer1 != null) {
    stretch = fx(19);
    auto = fx(18).value;
    IK = fx(1).value;
    shrinkVal = div(fx(20).value, 100);
    function getWorldPos(L) {
        return L.toWorld(L.anchorPoint);
    }
    dist1 = fx(40).value;
    dist2 = fx(41).value;
    IKLength = sum(dist1, dist2);
    IKStretched = sum(IKLength, stretch);
    boneStretch = 0;
    proportion = div(dist2, IKLength);
    posC = toWorld(anchorPoint);
    posR = getWorldPos(layer1);
    distC = length(posC, posR);
    shrinkMax = mul(IKLength, shrinkVal);
    shrink = 0;
    if (distC < IKStretched && IK)
        shrink = sub(1, div(distC, IKStretched));
    boneStretch = sub(boneStretch, mul(easeOut(shrink, 0, shrinkMax), proportion));
    if (distC > IKStretched && auto && IK)
        boneStretch = sum(boneStretch, mul(sub(distC, IKLength), proportion));
    else
        boneStretch = sum(boneStretch, mul(stretch, proportion));
    coef = 1;
    dist2 != 0 ? coef = div(sum(dist2, boneStretch), dist2) : coef = 1;
    result = sum(mul(sub([
        -125.758072895446,
        143.184421087686
    ], [
        -162,
        84,
        0
    ]), coef), [
        -162,
        84,
        0
    ]);
}
$bm_rt = result;`}},{ty:3,nm:"Goal world position",mn:"Pseudo/DUIK 2layer ik-0037",ix:37,v:{a:0,k:[750,750],ix:37,x:`var $bm_rt;
var fx = effect('IK | back foot');
var layer2 = null;
var result = [
        0,
        0
    ];
try {
    layer2 = fx(28);
} catch (e) {
}
if (layer2 != null) {
    result = layer2.toWorld(fx(36).value);
}
$bm_rt = result;`}},{ty:6,nm:"",mn:"Pseudo/DUIK 2layer ik-0038",ix:38,v:0},{ty:6,nm:"Lengths",mn:"Pseudo/DUIK 2layer ik-0039",ix:39,v:0},{ty:0,nm:"Upper length",mn:"Pseudo/DUIK 2layer ik-0040",ix:40,v:{a:0,k:76.062,ix:40}},{ty:0,nm:"Lower length",mn:"Pseudo/DUIK 2layer ik-0041",ix:41,v:{a:0,k:69.399,ix:41}},{ty:0,nm:"IK length",mn:"Pseudo/DUIK 2layer ik-0042",ix:42,v:{a:0,k:0,ix:42,x:`var $bm_rt;
var fx = effect('IK | back foot');
var result = sum(fx(40).value, fx(41).value);
var goalPos = fx(37).value;
var layer1 = null;
try {
    layer1 = fx(27);
} catch (e) {
}
if (layer1 != null) {
    result = length(layer1.toWorld(layer1.anchorPoint), goalPos);
}
$bm_rt = result;`}},{ty:6,nm:"",mn:"Pseudo/DUIK 2layer ik-0043",ix:43,v:0},{ty:7,nm:"Straight",mn:"Pseudo/DUIK 2layer ik-0044",ix:44,v:{a:0,k:0,ix:44,x:`var $bm_rt;
var fx;
fx = effect('IK | back foot');
var layer1 = null;
var layer2 = null;
var result = false;
try {
    layer1 = fx(27);
    layer2 = fx(28);
} catch (e) {
}
if (layer1 != null) {
    var a = layer1.toWorld(layer1.anchorPoint);
    var b = layer2.toWorld(layer2.anchorPoint);
    var c = layer2.toWorld(fx(36).value);
    result = Math.abs(a[0] * (b[1] - c[1]) + b[0] * (c[1] - a[1]) + c[0] * (a[1] - b[1])) < 1000;
}
$bm_rt = result;`}},{ty:6,nm:"",mn:"Pseudo/DUIK 2layer ik-0045",ix:45,v:0},{ty:6,nm:"Display",mn:"Pseudo/DUIK 2layer ik-0046",ix:46,v:0},{ty:7,nm:"Draw guides",mn:"Pseudo/DUIK 2layer ik-0047",ix:47,v:{a:0,k:0,ix:47}},{ty:6,nm:"",mn:"Pseudo/DUIK 2layer ik-0048",ix:48,v:0}]}],shapes:[{ty:"gr",it:[{d:1,ty:"el",s:{a:0,k:[2,2],ix:2},p:{a:0,k:[0,0],ix:3},nm:"Ellipse Path 1",mn:"ADBE Vector Shape - Ellipse",hd:!1},{d:1,ty:"el",s:{a:0,k:[10,10],ix:2},p:{a:0,k:[0,0],ix:3},nm:"Ellipse Path 2",mn:"ADBE Vector Shape - Ellipse",hd:!1},{ty:"sr",sy:1,d:1,pt:{a:0,k:4,ix:3},p:{a:0,k:[0,0],ix:4},r:{a:0,k:0,ix:5},ir:{a:0,k:0,ix:6},is:{a:0,k:0,ix:8},or:{a:0,k:10,ix:7},os:{a:0,k:0,ix:9},ix:3,nm:"Polystar Path 1",mn:"ADBE Vector Shape - Star",hd:!1},{ty:"st",c:{a:0,k:[1,1,1,1],ix:3,x:`var $bm_rt;
$bm_rt = effect('Controller')(9);`},o:{a:0,k:100,ix:4},w:{a:0,k:2,ix:5,x:`var $bm_rt;
$bm_rt = div(100, content('Anchor').transform.scale[0]);`},lc:2,lj:1,ml:4,ml2:{a:0,k:4,ix:8},nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3,x:`var $bm_rt;
$bm_rt = [
    effect('Controller')(10),
    effect('Controller')(10)
];`},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Anchor",np:4,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[-6.215,0],[0,6.215],[6.215,0],[0,0]],o:[[0,6.215],[6.215,0],[0,-6.216],[0,0],[0,0]],v:[[-11.067,.048],[.187,11.302],[11.442,.048],[.187,-11.206],[6.94,-17.115]],c:!1},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ind:1,ty:"sh",ix:2,ks:{a:0,k:{i:[[0,0],[0,0]],o:[[0,0],[0,0]],v:[[.062,-7.546],[.062,7.546]],c:!1},ix:2},nm:"Path 2",mn:"ADBE Vector Shape - Group",hd:!1},{ind:2,ty:"sh",ix:3,ks:{a:0,k:{i:[[0,0],[0,0]],o:[[0,0],[0,0]],v:[[7.546,0],[-7.546,0]],c:!1},ix:2},nm:"Path 3",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[.517647087574,.835294127464,.980392158031,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:1.5,ix:5},lc:2,lj:1,ml:4,ml2:{a:0,k:4,ix:8},nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2,x:`var $bm_rt;
$bm_rt = effect('Controller')(3);`},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3,x:`var $bm_rt;
$bm_rt = [
    effect('Controller')(4) * 2,
    effect('Controller')(4) * 2
];`},r:{a:0,k:0,ix:6,x:`var $bm_rt;
$bm_rt = effect('Controller')(5);`},o:{a:0,k:100,ix:7,x:`var $bm_rt;
$bm_rt = effect('Controller')(6);`},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Icon",np:4,cix:2,ix:2,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[0,0]],o:[[0,0],[0,0]],v:[[-8,16],[8,16]],c:!1},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[1,1,1,1],ix:3,x:`var $bm_rt;
$bm_rt = sub(effect('Controller')(2), [
    0.2,
    0.2,
    0.2,
    0
]);`},o:{a:0,k:100,ix:4,x:`var $bm_rt;
var fx = effect('IK | back foot');
if (fx(47).value)
    $bm_rt = mul(fx(44).value, 100);
else
    $bm_rt = 0;`},w:{a:0,k:2,ix:5},lc:2,lj:1,ml:4,ml2:{a:0,k:4,ix:8},nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2,x:`var $bm_rt;
$bm_rt = effect('Controller')(3);`},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3,x:`var $bm_rt;
$bm_rt = [
    effect('Controller')(4) * 2,
    effect('Controller')(4) * 2
];`},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7,x:`var $bm_rt;
$bm_rt = effect('Controller')(6);`},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"IK",np:2,cix:2,ix:3,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[],o:[],v:[],c:!1},ix:2,x:`var $bm_rt;
if (active) {
    var fx = effect('IK | back foot');
    var layer1 = null;
    var result = [[
                0,
                0
            ]];
    if (fx(1).value && fx(47).value) {
        try {
            layer1 = fx(27);
        } catch (e) {
        }
        if (layer1 != null) {
            var l = layer1.toWorld(layer1.anchorPoint);
            l = fromWorld(l);
            result = [
                l,
                [
                    0,
                    0
                ]
            ];
        }
    }
    $bm_rt = createPath(result, [], [], false);
} else
    $bm_rt = value;`},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[.176470592618,.176470592618,.176470592618,1],ix:3,x:`var $bm_rt;
$bm_rt = sub(effect('Controller')(2), [
    0.2,
    0.2,
    0.2,
    0
]);`},o:{a:0,k:100,ix:4},w:{a:0,k:2,ix:5},lc:2,lj:1,ml:4,ml2:{a:0,k:4,ix:8},d:[{n:"d",nm:"dash",v:{a:0,k:5,ix:1}}],nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"IK Line",np:2,cix:2,ix:4,mn:"ADBE Vector Group",hd:!1}],ip:0,op:158,st:0,bm:0},{ddd:0,ind:6,ty:4,nm:"Front Leg Outlines",parent:17,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10,x:`var $bm_rt;
var IKFK;
var controller = null;
var result = value;
try {
    controller = effect('IK')(1);
} catch (e) {
}
if (controller != null) {
    var fx = controller.effect('IK | back foot');
    IKFK = fx(1).value;
    function ik() {
        var layer1, layer2, endPos, limit, cw, A, C, B, E, a, b, c, x, alpha, D, delta, V, adj1, IK, IK;
        layer1 = thisLayer;
        layer2 = null;
        try {
            layer2 = fx(28);
        } catch (e) {
            return value;
        }
        if (layer2 != null) {
            endPos = fx(36).value;
            limit = fx(23).value;
            cw = fx(2).value;
            function getWorldPos(L) {
                return L.toWorld(L.anchorPoint);
            }
            A = getWorldPos(layer1);
            C = layer2.toWorld(endPos);
            B = getWorldPos(layer2);
            E = getWorldPos(controller);
            a = length(B, C);
            b = length(E, A);
            c = length(A, B);
            x = div(sub(sum(mul(b, b), mul(c, c)), mul(a, a)), mul(2, b));
            alpha = Math.acos(clamp(div(x, c), -1, 1));
            D = sub(E, A);
            delta = Math.atan2(D[1], D[0]);
            result = radiansToDegrees(sub(delta, mul(cw ? 1 : -1, alpha)));
            V = sub(B, A);
            adj1 = radiansToDegrees(Math.atan2(V[1], V[0]));
            IK = sum(sub(result, adj1), value);
            if (IK < limit)
                IK = sum(IK, 360);
            return IK;
        }
    }
    function fk() {
        var follow = fx(15).value;
        var FK = sum(fx(11).value, fx(6).value);
        var p = thisLayer;
        if (!follow) {
            while (p.hasParent) {
                p = p.parent;
                FK = sub(FK, p.rotation.value);
            }
        }
        return FK;
    }
    result = IKFK ? ik() : fk();
}
$bm_rt = result;`},p:{a:1,k:[{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:0,s:[32.885,65.01,0],e:[40.767,34.386,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:11,s:[40.767,34.386,0],e:[40.767,34.386,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:118,s:[40.767,34.386,0],e:[32.885,65.01,0],to:[0,0,0],ti:[0,0,0]},{t:129}],ix:2},a:{a:0,k:[23.424,10.167,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,ef:[{ty:5,nm:"IK",np:3,mn:"Pseudo/DUIK ik",ix:1,en:1,ef:[{ty:10,nm:"Controller",mn:"Pseudo/DUIK ik-0001",ix:1,v:{a:0,k:5,ix:1}}]}],shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[3.87,0],[0,0],[0,-3.78],[0,0],[-4.555,3.138],[-.589,17.084]],o:[[0,0],[-3.78,0],[0,0],[0,5.531],[30.311,-20.881],[.134,-3.868]],v:[[16.198,-45.917],[-16.328,-45.917],[-23.173,-39.072],[-23.173,37.158],[-12.41,42.779],[23.039,-38.849]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[23.423,46.167],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 1",np:2,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:158,st:0,bm:0},{ddd:0,ind:7,ty:4,nm:"back foot",parent:8,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:-8,ix:10,x:`var $bm_rt;
var ctrl = null;
try {
    $bm_rt = ctrl = effect('IK')(1);
} catch (e) {
}
;
if (ctrl != null) {
    var fx = ctrl.effect('IK | back foot');
    var ikfk = fx(1).value;
    function ik() {
        var IK = ctrl.rotation.value;
        var layer = thisLayer;
        while (layer.hasParent) {
            layer = layer.parent;
            IK = sub(IK, layer.rotation);
        }
        return IK;
    }
    function fk() {
        var FK = value;
        var parentRot = parent.transform.rotation;
        var delay = fx(8).value;
        var amp = fx(7).value;
        var ftEnabled = fx(4).value;
        if (!ftEnabled) {
            amp = 0;
            delay = 0;
        } else {
            delay = div(delay, 100);
            amp = div(amp, 100);
        }
        FK = parentRot.valueAtTime(sub(time, delay));
        FK = mul(FK, amp);
        FK = sub(sum(sum(FK, value), fx(13)), parentRot.valueAtTime(0));
        return FK;
    }
    $bm_rt = ikfk ? ik() : fk();
} else
    $bm_rt = value;`},p:{a:0,k:[-109.649,83.759,0],ix:2,x:`var $bm_rt;
var ctrl = null;
var result = value;
try {
    ctrl = effect('IK')(1);
} catch (e) {
    value;
}
;
if (ctrl != null) {
    result = ctrl.effect('IK | back foot')(36).value;
}
$bm_rt = result;`},a:{a:0,k:[-275.348,161.652,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,ef:[{ty:5,nm:"IK",np:3,mn:"Pseudo/DUIK ik",ix:1,en:1,ef:[{ty:10,nm:"Controller",mn:"Pseudo/DUIK ik-0001",ix:1,v:{a:0,k:5,ix:1}}]}],shapes:[{ty:"gr",it:[{d:1,ty:"el",s:{a:0,k:[43.305,43.305],ix:2},p:{a:0,k:[0,0],ix:3},nm:"Ellipse Path 1",mn:"ADBE Vector Shape - Ellipse",hd:!1},{ty:"st",c:{a:0,k:[.6,.6,.6,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:0,ix:5},lc:1,lj:1,ml:4,ml2:{a:0,k:4,ix:8},nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[-275.348,161.652],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[93.147,93.147],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Ellipse 1",np:3,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:158,st:0,bm:0},{ddd:0,ind:8,ty:4,nm:"leg",parent:6,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:8,ix:10,x:`var $bm_rt;
var IKFK, layer1, layer2;
var controller = null;
var result = value;
try {
    controller = effect('IK')(1);
} catch (e) {
}
if (controller != null) {
    var fx = controller.effect('IK | back foot');
    IKFK = fx(1).value;
    layer1 = null;
    layer2 = thisLayer;
    try {
        layer1 = fx(27);
    } catch (e) {
    }
    if (layer1 != null) {
        function ik() {
            var endPos, cw, A, B, C, E, a, b, c, x, alpha, y, gamma, V1, adj1, V2, adj2, IK;
            endPos = fx(36).value;
            cw = fx(2).value;
            function getWorldPos(L) {
                return L.toWorld(L.anchorPoint);
            }
            A = getWorldPos(layer1);
            B = getWorldPos(layer2);
            C = layer2.toWorld(endPos);
            E = getWorldPos(controller);
            a = length(B, C);
            b = length(E, A);
            c = length(A, B);
            x = div(sub(sum(mul(b, b), mul(c, c)), mul(a, a)), mul(2, b));
            alpha = Math.acos(clamp(div(x, c), -1, 1));
            y = sub(b, x);
            gamma = Math.acos(clamp(div(y, a), -1, 1));
            result = mul(cw ? 1 : -1, radiansToDegrees(sum(gamma, alpha)));
            V1 = sub(B, A);
            adj1 = radiansToDegrees(Math.atan2(V1[1], V1[0]));
            V2 = sub(C, B);
            adj2 = radiansToDegrees(Math.atan2(V2[1], V2[0]));
            IK = sum(sub(sum(result, adj1), adj2), value);
            return IK;
        }
        function fk() {
            var FK;
            var ctrlRot = fx(6);
            var delay = fx(8).value;
            var amp = fx(7).value;
            var follow = fx(15).value;
            var ftEnabled = fx(4).value;
            if (!ftEnabled) {
                amp = 0;
                delay = 0;
            } else {
                delay = div(delay, 100);
                amp = div(amp, 100);
            }
            FK = ctrlRot.valueAtTime(sub(time, delay));
            if (follow && hasParent) {
                var cP = layer1;
                while (cP.hasParent) {
                    cP = cP.parent;
                    FK = sub(FK, sub(cP.rotation.value, cP.rotation.valueAtTime(sub(time, delay))));
                }
            }
            FK = sub(FK, ctrlRot.value);
            FK = mul(FK, amp);
            FK = sub(FK, mul(ctrlRot.velocity, div(delay, 5)));
            FK = sum(FK, fx(12).value);
            return FK;
        }
        result = IKFK ? ik() : fk();
    }
}
$bm_rt = result;`},p:{a:0,k:[6.809,84.392,0],ix:2,x:`var $bm_rt;
var fx, layer1, stretch, auto, IK, shrinkVal, dist1, dist2, IKLength, IKStretched, boneStretch, proportion, posC, posR, distC, shrinkMax, shrink, shrink, boneStretch, boneStretch, boneStretch, coef, coef, coef, coef;
var ctrl = null;
var result = value;
try {
    ctrl = effect('IK')(1);
} catch (e) {
    value;
}
;
if (ctrl != null) {
    fx = ctrl.effect('IK | back foot');
    layer1 = null;
    result = [
        211,
        25
    ];
    try {
        layer1 = fx(27);
    } catch (e) {
    }
    if (layer1 != null) {
        stretch = fx(19).value;
        auto = fx(18).value;
        IK = fx(1).value;
        shrinkVal = div(fx(20).value, 100);
        function getWorldPos(L) {
            return L.toWorld(L.anchorPoint);
        }
        dist1 = fx(40).value;
        dist2 = fx(41).value;
        IKLength = sum(dist1, dist2);
        IKStretched = sum(IKLength, stretch);
        boneStretch = 0;
        proportion = div(dist1, IKLength);
        posC = getWorldPos(ctrl);
        posR = getWorldPos(layer1);
        distC = length(posC, posR);
        shrinkMax = mul(IKLength, shrinkVal);
        shrink = 0;
        if (distC < IKStretched && IK)
            shrink = sub(1, div(distC, IKStretched));
        boneStretch = sub(boneStretch, mul(easeOut(shrink, 0, shrinkMax), proportion));
        if (distC > IKStretched && auto && IK)
            boneStretch = sum(boneStretch, mul(sub(distC, IKLength), proportion));
        else
            boneStretch = sum(boneStretch, mul(stretch, proportion));
        coef = 1;
        dist1 != 0 ? coef = div(sum(dist1, boneStretch), dist1) : coef = 1;
        result = sum(mul(sub([
            6.80930328369141,
            84.3920974731445,
            0
        ], [
            23.4235000610352,
            10.1669998168945,
            0
        ]), coef), [
            23.4235000610352,
            10.1669998168945,
            0
        ]);
    }
}
$bm_rt = result;`},a:{a:0,k:[-162,84,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,ef:[{ty:5,nm:"IK",np:3,mn:"Pseudo/DUIK ik",ix:1,en:1,ef:[{ty:10,nm:"Controller",mn:"Pseudo/DUIK ik-0001",ix:1,v:{a:0,k:5,ix:1}}]}],shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[0,0]],o:[[0,0],[0,0]],v:[[-162,84],[-123,150]],c:!1},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[.6,.6,.6,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:10,ix:5},lc:2,lj:1,ml:4,ml2:{a:0,k:4,ix:8},nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Shape 1",np:3,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:158,st:0,bm:0},{ddd:0,ind:9,ty:4,nm:"front leg 2::Ankle",parent:26,hd:!0,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10,x:`var $bm_rt;
try {
    var parentRot = hasParent ? parentTotal() : 0;
    var rotCalc = sub(thisLayer('ADBE Root Vectors Group')('Admin')('Transform')('Rotation'), parentRot);
    $bm_rt = sum(rotCalc, value);
} catch (err) {
    $bm_rt = value;
}
;
function parentTotal() {
    var parentVal = 0;
    var layerChain = 'thisLayer';
    while (eval([layerChain][0]).hasParent) {
        layerChain = sum(layerChain, '.parent');
        parentVal = sum(parentVal, eval([layerChain][0]).rotation);
    }
    return parentVal;
}`},p:{a:1,k:[{i:{x:.833,y:.833},o:{x:.163,y:.16},n:"0p833_0p833_0p163_0p16",t:1.833,s:[82.342,3.17,0],e:[-47.069,-208.891,0],to:[19.8871307373047,-132.993179321289,0],ti:[36.858528137207,32.8615989685059,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:6,s:[-47.069,-208.891,0],e:[-96.217,-217.216,0],to:[-29.8371162414551,-26.6015853881836,0],ti:[56.0763206481934,-17.1899280548096,0]},{i:{x:.25,y:1},o:{x:.167,y:.167},n:"0p25_1_0p167_0p167",t:11,s:[-96.217,-217.216,0],e:[-76.258,-215.934,0],to:[2.38419914245605,-.52340537309647,0],ti:[0,0,0]},{i:{x:.582,y:.582},o:{x:.322,y:.322},n:"0p582_0p582_0p322_0p322",t:19,s:[-76.258,-215.934,0],e:[-76.258,-215.934,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.603,y:1},o:{x:.278,y:0},n:"0p603_1_0p278_0",t:39,s:[-76.258,-215.934,0],e:[-16.444,-211.21,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.617,y:.681},o:{x:.288,y:0},n:"0p617_0p681_0p288_0",t:52,s:[-16.444,-211.21,0],e:[-30.602,-192.268,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.61,y:.832},o:{x:.281,y:.158},n:"0p61_0p832_0p281_0p158",t:66,s:[-30.602,-192.268,0],e:[-84.343,-213.632,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.627,y:.978},o:{x:.287,y:.131},n:"0p627_0p978_0p287_0p131",t:89,s:[-84.343,-213.632,0],e:[-47.788,-203.226,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.45,y:1},o:{x:.323,y:.022},n:"0p45_1_0p323_0p022",t:105,s:[-47.788,-203.226,0],e:[-76.258,-215.934,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.45,y:1},o:{x:.167,y:0},n:"0p45_1_0p167_0",t:120,s:[-76.258,-215.934,0],e:[83.08,-9.616,0],to:[0,0,0],ti:[33.6495475769043,-219.909072875977,0]},{t:126}],ix:2},a:{a:0,k:[0,0,0],ix:1},s:{a:0,k:[100,100],ix:6}},ao:0,ef:[{ty:5,nm:"RubberHose 2",np:18,mn:"Pseudo/3bf5uID/RubberHose_2",ix:1,en:1,ef:[{ty:0,nm:"Hose Length",mn:"Pseudo/3bf5uID/RubberHose_2-0001",ix:1,v:{a:0,k:104,ix:1}},{ty:0,nm:"Bend Radius",mn:"Pseudo/3bf5uID/RubberHose_2-0002",ix:2,v:{a:0,k:100,ix:2}},{ty:0,nm:"Realism",mn:"Pseudo/3bf5uID/RubberHose_2-0003",ix:3,v:{a:0,k:0,ix:3}},{ty:0,nm:"Bend Direction",mn:"Pseudo/3bf5uID/RubberHose_2-0004",ix:4,v:{a:0,k:100,ix:4}},{ty:7,nm:"Auto Rotate Start",mn:"Pseudo/3bf5uID/RubberHose_2-0005",ix:5,v:{a:0,k:0,ix:5}},{ty:7,nm:"Auto Rotate End",mn:"Pseudo/3bf5uID/RubberHose_2-0006",ix:6,v:{a:0,k:1,ix:6}},{ty:6,nm:"Math Stuff",mn:"Pseudo/3bf5uID/RubberHose_2-0007",ix:7,v:0},{ty:3,nm:"A",mn:"Pseudo/3bf5uID/RubberHose_2-0008",ix:8,v:{a:0,k:[0,0],ix:8,x:`var $bm_rt;
$bm_rt = thisLayer.toComp([
    0,
    0,
    0
]);`}},{ty:3,nm:"B",mn:"Pseudo/3bf5uID/RubberHose_2-0009",ix:9,v:{a:0,k:[0,0],ix:9,x:`var $bm_rt;
try {
    var b = thisLayer(2)('Admin')(2)('B')(2)(1)._name;
    $bm_rt = thisComp.layer(b).toComp([
        0,
        0,
        0
    ]);
} catch (err) {
    $bm_rt = value;
}`}},{ty:0,nm:"Outer Radius",mn:"Pseudo/3bf5uID/RubberHose_2-0010",ix:10,v:{a:0,k:0,ix:10,x:`var $bm_rt;
var a = thisLayer(4)('RubberHose 2')('A');
var b = thisLayer(4)('RubberHose 2')('B');
var s = length(a, b);
$bm_rt = mul(Math.sin(0.78539816339), s);`}},{ty:0,nm:"Inner Radius",mn:"Pseudo/3bf5uID/RubberHose_2-0011",ix:11,v:{a:0,k:0,ix:11,x:`var $bm_rt;
var eff = thisLayer(4)('RubberHose 2');
var bendRad = eff('Bend Radius');
var hoseLength = div(eff('Hose Length'), 2);
var realism = eff('Realism');
var bendDir = div(eff('Bend Direction'), 100);
var sFac = eff('Parent Scale');
var straight = eff('Straight');
var autoFlop = eff('AutoFlop');
var roundShrink = linear(Math.abs(bendRad), 0, 100, 1, 0.87);
var innerRad;
if (hoseLength > straight) {
    innerRad = sum(straight, mul(Math.sqrt(sub(Math.pow(hoseLength, 2), Math.pow(straight, 2))), roundShrink));
    innerRad = linear(realism, 0, 100, hoseLength, innerRad);
    innerRad = linear(Math.abs(bendDir), straight, innerRad);
} else {
    innerRad = straight;
}
innerRad *= Math.abs(sFac);
innerRad = linear(Math.abs(autoFlop), mul(straight, Math.max(Math.abs(sFac), 0.001)), innerRad);
$bm_rt = innerRad;`}},{ty:0,nm:"Straight",mn:"Pseudo/3bf5uID/RubberHose_2-0012",ix:12,v:{a:0,k:0,ix:12,x:`var $bm_rt;
var sFac = thisLayer(4)('RubberHose 2')('Parent Scale');
var outerRad = div(thisLayer(4)('RubberHose 2')('Outer Radius'), Math.max(Math.abs(sFac), 0.001));
;
$bm_rt = div(mul(1.4142135623731, outerRad), 2);`}},{ty:0,nm:"Base Rotation",mn:"Pseudo/3bf5uID/RubberHose_2-0013",ix:13,v:{a:0,k:0,ix:13,x:`var $bm_rt;
var a = thisLayer(4)('RubberHose 2')('A');
var b = thisLayer(4)('RubberHose 2')('B');
$bm_rt = radiansToDegrees(Math.atan2(sub(a[1], b[1]), sub(a[0], b[0])));`}},{ty:0,nm:"AutoFlop",mn:"Pseudo/3bf5uID/RubberHose_2-0014",ix:14,v:{a:0,k:0,ix:14,x:`var $bm_rt;
var hasAF = false, isEnabled = false, output;
try {
    var lyrAF = thisComp.layer(sum(thisLayer._name.split('::')[0], '::AutoFlop'));
    isEnabled = lyrAF(4)('Enable')(1);
    var falloffAngle = lyrAF(4)('Falloff')(1);
    hasAF = true;
    var a = thisLayer.toComp([
            0,
            0,
            0
        ]);
    var b = thisLayer(4)('RubberHose 2')('B');
} catch (e) {
}
if (hasAF && isEnabled == 1) {
    var threshRot = lyrAF('ADBE Transform Group')('ADBE Rotate Z');
    threshRot %= 360;
    var ctrlAngle = $bm_neg(radiansToDegrees(Math.atan2(sub(b[0], a[0]), sub(b[1], a[1]))));
    var offsetAngle = sub(threshRot, ctrlAngle);
    offsetAngle %= 360;
    var sign = offsetAngle > 0 && offsetAngle < 180 || offsetAngle < -180 ? -1 : 1;
    var absAngle = Math.abs(offsetAngle);
    if (absAngle > 90) {
        absAngle = Math.abs(sub(absAngle, 180));
    }
    if (absAngle > 90) {
        absAngle = Math.abs(sub(absAngle, 180));
    }
    output = linear(absAngle, 0, falloffAngle, 0, 1);
    output *= sign;
} else {
    output = 1;
}
$bm_rt = output;
function parentTotal() {
    var parentVal = 0;
    var layerChain = 'thisLayer';
    while (eval([layerChain][0]).hasParent) {
        layerChain = sum(layerChain, '.parent');
        parentVal = sum(parentVal, eval([layerChain][0]).rotation);
    }
    return parentVal;
}`}},{ty:0,nm:"Parent Scale",mn:"Pseudo/3bf5uID/RubberHose_2-0015",ix:15,v:{a:0,k:0,ix:15,x:`var $bm_rt;
var sFactor = 1;
var scaleNorm = 0;
var layerChain = 'thisLayer';
while (eval([layerChain][0]).hasParent) {
    layerChain = sum(layerChain, '.parent');
    scaleNorm = div(eval(layerChain)('ADBE Transform Group')('ADBE Scale')[0], 100);
    sFactor = mul(sFactor, scaleNorm);
}
$bm_rt = sFactor;`}},{ty:6,nm:"",mn:"Pseudo/3bf5uID/RubberHose_2-0016",ix:16,v:0}]}],shapes:[{ty:"gr",it:[{ty:"gr",it:[{ty:"gr",it:[{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"front leg 2::Ankle",np:0,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[135,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"A",np:1,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ty:"gr",it:[{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[20,20],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"front leg 2::Hip",np:0,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"B",np:1,cix:2,ix:2,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ty:"gr",it:[{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"2.04",np:0,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1,cl:"04"},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Version",np:1,cix:2,ix:3,mn:"ADBE Vector Group",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6,x:`var $bm_rt;
var eff = thisLayer(4)('RubberHose 2');
var autoRotate = eff('Auto Rotate End');
if (autoRotate == 1) {
    var a = thisLayer.toComp([
            0,
            0,
            0
        ]);
    var b = eff('B');
    var s = length(a, b);
    var sFac = eff('Parent Scale');
    var autoFlop = 1;
    var realism = eff('Realism');
    var bendDir = div(eff('Bend Direction'), 100);
    var hoseLength = div(eff('Hose Length'), 2);
    var bendRad = eff('Bend Radius');
    var autoFlop = eff('AutoFlop');
    var baseRot = $bm_neg(radiansToDegrees(Math.atan2(sub(b[0], a[0]), sub(b[1], a[1]))));
    var outerRad = mul(Math.sin(0.78539816339), s);
    var straight = div(mul(1.4142135623731, outerRad), 2);
    straight /= Math.max(Math.abs(sFac), 0.001);
    var roundShrink = linear(Math.abs(bendRad), 0, 100, 1, 0.87);
    var innerRad;
    if (hoseLength > straight) {
        innerRad = sum(straight, mul(Math.sqrt(sub(Math.pow(hoseLength, 2), Math.pow(straight, 2))), roundShrink));
        innerRad = linear(realism, 0, 100, hoseLength, innerRad);
        innerRad = linear(Math.abs(bendDir), straight, innerRad);
    } else {
        innerRad = straight;
    }
    innerRad = linear(Math.abs(autoFlop), straight, innerRad);
    var flopDir = 1;
    if (bendDir < 0) {
        flopDir = -1;
    }
    flopDir *= autoFlop;
    var opp = mul(sub(innerRad, straight), flopDir);
    var theta = Math.atan(div(opp, Math.max(straight, 0.001)));
    var bendAngle = radiansToDegrees(theta);
    if (sFac < 0) {
        baseRot *= -1;
    }
    bendRad *= div(div(theta, $bm_neg(Math.PI)), linear(s, hoseLength, 0, 2, 0.9));
    var rotCalc = sub(sum(baseRot, bendAngle), bendRad);
    $bm_rt = rotCalc;
} else {
    $bm_rt = value;
}
;`},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Admin",np:3,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ty:"gr",it:[{d:1,ty:"el",s:{a:0,k:[100,100],ix:2},p:{a:0,k:[0,0],ix:3},nm:"Circle",mn:"ADBE Vector Shape - Ellipse",hd:!1},{ind:1,ty:"sh",ix:2,ks:{a:0,k:{i:[[0,0],[0,0]],o:[[0,0],[0,0]],v:[[-75,0],[75,0]],c:!1},ix:2},nm:"01",mn:"ADBE Vector Shape - Group",hd:!1},{ind:2,ty:"sh",ix:3,ks:{a:0,k:{i:[[0,0],[0,0]],o:[[0,0],[0,0]],v:[[0,-30],[0,30]],c:!1},ix:2},nm:"02",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[15,15],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"ControlShape",np:3,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"st",c:{a:0,k:[1,.560000002384,0,1],ix:3,x:`var $bm_rt;
if (thisLayer.active) {
    try {
        var eff = thisLayer(4)('RubberHose 2');
        var a = thisLayer.toComp([
                0,
                0,
                0
            ]);
        var b = eff('B');
        var straight = eff('Straight');
        var hoseLength = div(eff('Hose Length'), 2);
        if (straight > hoseLength) {
            $bm_rt = [
                0.51,
                0.83,
                0.98,
                1
            ];
        } else {
            $bm_rt = value;
        }
    } catch (err) {
        $bm_rt = value;
    }
} else {
    $bm_rt = value;
}`},o:{a:0,k:100,ix:4},w:{a:0,k:1.5,ix:5},lc:1,lj:1,ml:4,ml2:{a:0,k:4,ix:8},nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Control Point",np:2,cix:2,ix:2,mn:"ADBE Vector Group",hd:!1}],ip:0,op:158,st:0,bm:0},{ddd:0,ind:10,ty:4,nm:"front leg 1::Ankle",parent:26,hd:!0,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10,x:`var $bm_rt;
try {
    var parentRot = hasParent ? parentTotal() : 0;
    var rotCalc = sub(thisLayer('ADBE Root Vectors Group')('Admin')('Transform')('Rotation'), parentRot);
    $bm_rt = sum(rotCalc, value);
} catch (err) {
    $bm_rt = value;
}
;
function parentTotal() {
    var parentVal = 0;
    var layerChain = 'thisLayer';
    while (eval([layerChain][0]).hasParent) {
        layerChain = sum(layerChain, '.parent');
        parentVal = sum(parentVal, eval([layerChain][0]).rotation);
    }
    return parentVal;
}`},p:{a:1,k:[{i:{x:.833,y:.833},o:{x:.167,y:.246},n:"0p833_0p833_0p167_0p246",t:1,s:[30.236,-3.374,0],e:[-315.343,-203.04,0],to:[-4.58878755569458,-206.36181640625,0],ti:[0,0,0]},{i:{x:.25,y:1},o:{x:.167,y:.167},n:"0p25_1_0p167_0p167",t:9,s:[-315.343,-203.04,0],e:[-282.296,-218.796,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.572,y:.572},o:{x:.318,y:.318},n:"0p572_0p572_0p318_0p318",t:18,s:[-282.296,-218.796,0],e:[-282.296,-218.796,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.604,y:1},o:{x:.279,y:0},n:"0p604_1_0p279_0",t:36,s:[-282.296,-218.796,0],e:[-222.482,-214.072,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.618,y:.418},o:{x:.289,y:0},n:"0p618_0p418_0p289_0",t:49,s:[-222.482,-214.072,0],e:[-235.737,-215.119,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.611,y:.753},o:{x:.282,y:.238},n:"0p611_0p753_0p282_0p238",t:63,s:[-235.737,-215.119,0],e:[-270.878,-197.063,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.639,y:.954},o:{x:.307,y:.251},n:"0p639_0p954_0p307_0p251",t:86,s:[-270.878,-197.063,0],e:[-263.057,-216.903,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.655,y:.776},o:{x:.322,y:.023},n:"0p655_0p776_0p322_0p023",t:102,s:[-263.057,-216.903,0],e:[-238.923,-215.685,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.45,y:1},o:{x:.329,y:.071},n:"0p45_1_0p329_0p071",t:112,s:[-238.923,-215.685,0],e:[-282.296,-218.796,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.45,y:1},o:{x:.167,y:0},n:"0p45_1_0p167_0",t:118,s:[-282.296,-218.796,0],e:[30.236,-3.374,0],to:[0,0,0],ti:[-14.301383972168,-184.397262573242,0]},{t:124}],ix:2},a:{a:0,k:[0,0,0],ix:1},s:{a:0,k:[100,100],ix:6}},ao:0,ef:[{ty:5,nm:"RubberHose 2",np:18,mn:"Pseudo/3bf5uID/RubberHose_2",ix:1,en:1,ef:[{ty:0,nm:"Hose Length",mn:"Pseudo/3bf5uID/RubberHose_2-0001",ix:1,v:{a:0,k:96,ix:1}},{ty:0,nm:"Bend Radius",mn:"Pseudo/3bf5uID/RubberHose_2-0002",ix:2,v:{a:0,k:100,ix:2}},{ty:0,nm:"Realism",mn:"Pseudo/3bf5uID/RubberHose_2-0003",ix:3,v:{a:0,k:0,ix:3}},{ty:0,nm:"Bend Direction",mn:"Pseudo/3bf5uID/RubberHose_2-0004",ix:4,v:{a:0,k:100,ix:4}},{ty:7,nm:"Auto Rotate Start",mn:"Pseudo/3bf5uID/RubberHose_2-0005",ix:5,v:{a:0,k:0,ix:5}},{ty:7,nm:"Auto Rotate End",mn:"Pseudo/3bf5uID/RubberHose_2-0006",ix:6,v:{a:0,k:1,ix:6}},{ty:6,nm:"Math Stuff",mn:"Pseudo/3bf5uID/RubberHose_2-0007",ix:7,v:0},{ty:3,nm:"A",mn:"Pseudo/3bf5uID/RubberHose_2-0008",ix:8,v:{a:0,k:[0,0],ix:8,x:`var $bm_rt;
$bm_rt = thisLayer.toComp([
    0,
    0,
    0
]);`}},{ty:3,nm:"B",mn:"Pseudo/3bf5uID/RubberHose_2-0009",ix:9,v:{a:0,k:[0,0],ix:9,x:`var $bm_rt;
try {
    var b = thisLayer(2)('Admin')(2)('B')(2)(1)._name;
    $bm_rt = thisComp.layer(b).toComp([
        0,
        0,
        0
    ]);
} catch (err) {
    $bm_rt = value;
}`}},{ty:0,nm:"Outer Radius",mn:"Pseudo/3bf5uID/RubberHose_2-0010",ix:10,v:{a:0,k:0,ix:10,x:`var $bm_rt;
var a = thisLayer(4)('RubberHose 2')('A');
var b = thisLayer(4)('RubberHose 2')('B');
var s = length(a, b);
$bm_rt = mul(Math.sin(0.78539816339), s);`}},{ty:0,nm:"Inner Radius",mn:"Pseudo/3bf5uID/RubberHose_2-0011",ix:11,v:{a:0,k:0,ix:11,x:`var $bm_rt;
var eff = thisLayer(4)('RubberHose 2');
var bendRad = eff('Bend Radius');
var hoseLength = div(eff('Hose Length'), 2);
var realism = eff('Realism');
var bendDir = div(eff('Bend Direction'), 100);
var sFac = eff('Parent Scale');
var straight = eff('Straight');
var autoFlop = eff('AutoFlop');
var roundShrink = linear(Math.abs(bendRad), 0, 100, 1, 0.87);
var innerRad;
if (hoseLength > straight) {
    innerRad = sum(straight, mul(Math.sqrt(sub(Math.pow(hoseLength, 2), Math.pow(straight, 2))), roundShrink));
    innerRad = linear(realism, 0, 100, hoseLength, innerRad);
    innerRad = linear(Math.abs(bendDir), straight, innerRad);
} else {
    innerRad = straight;
}
innerRad *= Math.abs(sFac);
innerRad = linear(Math.abs(autoFlop), mul(straight, Math.max(Math.abs(sFac), 0.001)), innerRad);
$bm_rt = innerRad;`}},{ty:0,nm:"Straight",mn:"Pseudo/3bf5uID/RubberHose_2-0012",ix:12,v:{a:0,k:0,ix:12,x:`var $bm_rt;
var sFac = thisLayer(4)('RubberHose 2')('Parent Scale');
var outerRad = div(thisLayer(4)('RubberHose 2')('Outer Radius'), Math.max(Math.abs(sFac), 0.001));
;
$bm_rt = div(mul(1.4142135623731, outerRad), 2);`}},{ty:0,nm:"Base Rotation",mn:"Pseudo/3bf5uID/RubberHose_2-0013",ix:13,v:{a:0,k:0,ix:13,x:`var $bm_rt;
var a = thisLayer(4)('RubberHose 2')('A');
var b = thisLayer(4)('RubberHose 2')('B');
$bm_rt = radiansToDegrees(Math.atan2(sub(a[1], b[1]), sub(a[0], b[0])));`}},{ty:0,nm:"AutoFlop",mn:"Pseudo/3bf5uID/RubberHose_2-0014",ix:14,v:{a:0,k:0,ix:14,x:`var $bm_rt;
var hasAF = false, isEnabled = false, output;
try {
    var lyrAF = thisComp.layer(sum(thisLayer._name.split('::')[0], '::AutoFlop'));
    isEnabled = lyrAF(4)('Enable')(1);
    var falloffAngle = lyrAF(4)('Falloff')(1);
    hasAF = true;
    var a = thisLayer.toComp([
            0,
            0,
            0
        ]);
    var b = thisLayer(4)('RubberHose 2')('B');
} catch (e) {
}
if (hasAF && isEnabled == 1) {
    var threshRot = lyrAF('ADBE Transform Group')('ADBE Rotate Z');
    threshRot %= 360;
    var ctrlAngle = $bm_neg(radiansToDegrees(Math.atan2(sub(b[0], a[0]), sub(b[1], a[1]))));
    var offsetAngle = sub(threshRot, ctrlAngle);
    offsetAngle %= 360;
    var sign = offsetAngle > 0 && offsetAngle < 180 || offsetAngle < -180 ? -1 : 1;
    var absAngle = Math.abs(offsetAngle);
    if (absAngle > 90) {
        absAngle = Math.abs(sub(absAngle, 180));
    }
    if (absAngle > 90) {
        absAngle = Math.abs(sub(absAngle, 180));
    }
    output = linear(absAngle, 0, falloffAngle, 0, 1);
    output *= sign;
} else {
    output = 1;
}
$bm_rt = output;
function parentTotal() {
    var parentVal = 0;
    var layerChain = 'thisLayer';
    while (eval([layerChain][0]).hasParent) {
        layerChain = sum(layerChain, '.parent');
        parentVal = sum(parentVal, eval([layerChain][0]).rotation);
    }
    return parentVal;
}`}},{ty:0,nm:"Parent Scale",mn:"Pseudo/3bf5uID/RubberHose_2-0015",ix:15,v:{a:0,k:0,ix:15,x:`var $bm_rt;
var sFactor = 1;
var scaleNorm = 0;
var layerChain = 'thisLayer';
while (eval([layerChain][0]).hasParent) {
    layerChain = sum(layerChain, '.parent');
    scaleNorm = div(eval(layerChain)('ADBE Transform Group')('ADBE Scale')[0], 100);
    sFactor = mul(sFactor, scaleNorm);
}
$bm_rt = sFactor;`}},{ty:6,nm:"",mn:"Pseudo/3bf5uID/RubberHose_2-0016",ix:16,v:0}]}],shapes:[{ty:"gr",it:[{ty:"gr",it:[{ty:"gr",it:[{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"front leg 1::Ankle",np:0,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[135,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"A",np:1,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ty:"gr",it:[{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[20,20],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"front leg 1::Hip",np:0,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"B",np:1,cix:2,ix:2,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ty:"gr",it:[{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"2.04",np:0,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1,cl:"04"},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Version",np:1,cix:2,ix:3,mn:"ADBE Vector Group",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6,x:`var $bm_rt;
var eff = thisLayer(4)('RubberHose 2');
var autoRotate = eff('Auto Rotate End');
if (autoRotate == 1) {
    var a = thisLayer.toComp([
            0,
            0,
            0
        ]);
    var b = eff('B');
    var s = length(a, b);
    var sFac = eff('Parent Scale');
    var autoFlop = 1;
    var realism = eff('Realism');
    var bendDir = div(eff('Bend Direction'), 100);
    var hoseLength = div(eff('Hose Length'), 2);
    var bendRad = eff('Bend Radius');
    var autoFlop = eff('AutoFlop');
    var baseRot = $bm_neg(radiansToDegrees(Math.atan2(sub(b[0], a[0]), sub(b[1], a[1]))));
    var outerRad = mul(Math.sin(0.78539816339), s);
    var straight = div(mul(1.4142135623731, outerRad), 2);
    straight /= Math.max(Math.abs(sFac), 0.001);
    var roundShrink = linear(Math.abs(bendRad), 0, 100, 1, 0.87);
    var innerRad;
    if (hoseLength > straight) {
        innerRad = sum(straight, mul(Math.sqrt(sub(Math.pow(hoseLength, 2), Math.pow(straight, 2))), roundShrink));
        innerRad = linear(realism, 0, 100, hoseLength, innerRad);
        innerRad = linear(Math.abs(bendDir), straight, innerRad);
    } else {
        innerRad = straight;
    }
    innerRad = linear(Math.abs(autoFlop), straight, innerRad);
    var flopDir = 1;
    if (bendDir < 0) {
        flopDir = -1;
    }
    flopDir *= autoFlop;
    var opp = mul(sub(innerRad, straight), flopDir);
    var theta = Math.atan(div(opp, Math.max(straight, 0.001)));
    var bendAngle = radiansToDegrees(theta);
    if (sFac < 0) {
        baseRot *= -1;
    }
    bendRad *= div(div(theta, $bm_neg(Math.PI)), linear(s, hoseLength, 0, 2, 0.9));
    var rotCalc = sub(sum(baseRot, bendAngle), bendRad);
    $bm_rt = rotCalc;
} else {
    $bm_rt = value;
}
;`},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Admin",np:3,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ty:"gr",it:[{d:1,ty:"el",s:{a:0,k:[100,100],ix:2},p:{a:0,k:[0,0],ix:3},nm:"Circle",mn:"ADBE Vector Shape - Ellipse",hd:!1},{ind:1,ty:"sh",ix:2,ks:{a:0,k:{i:[[0,0],[0,0]],o:[[0,0],[0,0]],v:[[-75,0],[75,0]],c:!1},ix:2},nm:"01",mn:"ADBE Vector Shape - Group",hd:!1},{ind:2,ty:"sh",ix:3,ks:{a:0,k:{i:[[0,0],[0,0]],o:[[0,0],[0,0]],v:[[0,-30],[0,30]],c:!1},ix:2},nm:"02",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[15,15],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"ControlShape",np:3,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"st",c:{a:0,k:[1,.560000002384,0,1],ix:3,x:`var $bm_rt;
if (thisLayer.active) {
    try {
        var eff = thisLayer(4)('RubberHose 2');
        var a = thisLayer.toComp([
                0,
                0,
                0
            ]);
        var b = eff('B');
        var straight = eff('Straight');
        var hoseLength = div(eff('Hose Length'), 2);
        if (straight > hoseLength) {
            $bm_rt = [
                0.51,
                0.83,
                0.98,
                1
            ];
        } else {
            $bm_rt = value;
        }
    } catch (err) {
        $bm_rt = value;
    }
} else {
    $bm_rt = value;
}`},o:{a:0,k:100,ix:4},w:{a:0,k:1.5,ix:5},lc:1,lj:1,ml:4,ml2:{a:0,k:4,ix:8},nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Control Point",np:2,cix:2,ix:2,mn:"ADBE Vector Group",hd:!1}],ip:0,op:158,st:0,bm:0},{ddd:0,ind:11,ty:4,nm:"Glasses Outlines",parent:16,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[188.359,127.303,0],ix:2},a:{a:0,k:[55.355,19.042,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[0,0],[-3.764,-.836],[0,0]],o:[[0,0],[3.753,-.883],[0,0],[0,0]],v:[[-14.611,1.452],[-6.12,-.545],[5.302,-.616],[14.611,1.452]],c:!1},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[.176000004189,.176000004189,.176000004189,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:3.34,ix:5},lc:1,lj:1,ml:10,ml2:{a:0,k:10,ix:8},nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[55.773,11.752],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 1",np:2,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,13.372],[0,-13.372],[-13.372,0]],o:[[0,-13.372],[0,13.372],[13.373,0]],v:[[24.213,-5.421],[-24.213,-5.421],[0,18.792]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[.176000004189,.176000004189,.176000004189,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[86.248,19.043],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 2",np:2,cix:2,ix:2,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,13.372],[0,-13.372],[-13.372,0]],o:[[0,-13.372],[0,13.372],[13.373,0]],v:[[24.213,-5.421],[-24.213,-5.421],[0,18.792]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[.176000004189,.176000004189,.176000004189,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[24.463,19.043],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 3",np:2,cix:2,ix:3,mn:"ADBE Vector Group",hd:!1}],ip:0,op:158,st:0,bm:0},{ddd:0,ind:12,ty:4,nm:"Ear Outlines",parent:16,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:1,k:[{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:4,s:[0],e:[28]},{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:11,s:[28],e:[1]},{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:15,s:[1],e:[11]},{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:17,s:[11],e:[11]},{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:43,s:[11],e:[-9]},{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:50,s:[-9],e:[5]},{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:56,s:[5],e:[4]},{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:60,s:[4],e:[4]},{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:76,s:[4],e:[21]},{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:82,s:[21],e:[12]},{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:84,s:[12],e:[13]},{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:86,s:[13],e:[13]},{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:114,s:[13],e:[42]},{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:118,s:[42],e:[-33]},{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:125,s:[-33],e:[14]},{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:131,s:[14],e:[0]},{t:135}],ix:10},p:{a:0,k:[87.428,95.51,0],ix:2},a:{a:0,k:[25.983,15.042,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,14.765],[14.765,0],[0,-14.765],[-14.764,0]],o:[[0,-14.765],[-14.764,0],[0,14.765],[14.765,0]],v:[[26.734,0],[-.001,-26.734],[-26.734,0],[-.001,26.734]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[.866999966491,.866999966491,.866999966491,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[26.983,61.101],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 1",np:2,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[10.842,0],[0,0],[0,-10.842],[0,0],[-10.842,0],[0,10.842],[0,0]],o:[[0,0],[-10.842,0],[0,0],[0,10.842],[10.842,0],[0,0],[0,-10.842]],v:[[0,-33.359],[0,-33.359],[-19.712,-13.646],[-19.712,13.646],[0,33.359],[19.712,13.646],[19.712,-13.646]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[.866999966491,.866999966491,.866999966491,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[27.546,33.609],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 2",np:2,cix:2,ix:2,mn:"ADBE Vector Group",hd:!1}],ip:0,op:158,st:0,bm:0},{ddd:0,ind:13,ty:4,nm:"Top Floof Outlines",parent:16,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[148.672,42.241,0],ix:2},a:{a:0,k:[119.743,64.124,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,-33.643],[-33.644,0],[0,33.643],[33.643,0]],o:[[0,33.643],[33.643,0],[0,-33.643],[-33.644,0]],v:[[-60.916,0],[.001,60.917],[60.916,0],[.001,-60.917]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:1,k:[{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:1.066,s:[84.874,67.081],e:[90.173,51.984],to:[0,0],ti:[0,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:7.125,s:[90.173,51.984],e:[87.103,59.398],to:[0,0],ti:[0,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:10.154,s:[87.103,59.398],e:[84.874,67.081],to:[0,0],ti:[0,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:13.65,s:[84.874,67.081],e:[84.874,67.081],to:[0,0],ti:[0,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:113,s:[84.874,67.081],e:[79.993,49.756],to:[0,0],ti:[0,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:121,s:[79.993,49.756],e:[72.721,76.896],to:[0,0],ti:[0,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:126,s:[72.721,76.896],e:[84.874,67.081],to:[0,0],ti:[0,0]},{t:131}],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 1",np:2,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,-33.643],[-33.644,0],[0,33.643],[33.643,0]],o:[[0,33.643],[33.643,0],[0,-33.643],[-33.644,0]],v:[[-60.916,0],[.001,60.917],[60.916,0],[.001,-60.917]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:1,k:[{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:2.29,s:[178.319,61.167],e:[180.968,53.619],to:[0,0],ti:[0,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:8.349,s:[180.968,53.619],e:[175.532,70.771],to:[0,0],ti:[0,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:11.379,s:[175.532,70.771],e:[178.319,61.167],to:[0,0],ti:[0,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:14,s:[178.319,61.167],e:[178.319,61.167],to:[0,0],ti:[0,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:115,s:[178.319,61.167],e:[180,52.382],to:[0,0],ti:[0,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:123,s:[180,52.382],e:[164.105,74.95],to:[0,0],ti:[0,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:128,s:[164.105,74.95],e:[178.319,61.167],to:[0,0],ti:[0,0]},{t:133}],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 2",np:2,cix:2,ix:2,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,-13.511],[-13.511,0],[0,13.511],[13.511,0]],o:[[0,13.511],[13.511,0],[0,-13.511],[-13.511,0]],v:[[-24.464,0],[0,24.464],[24.464,0],[0,-24.464]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[24.714,55.796],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 3",np:2,cix:2,ix:3,mn:"ADBE Vector Group",hd:!1}],ip:0,op:158,st:0,bm:0},{ddd:0,ind:14,ty:4,nm:"Face Fluff Outlines",parent:16,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[96.781,115.004,0],ix:2},a:{a:0,k:[99.764,105.819,0],ix:1},s:{a:0,k:[101,101,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,24.388],[33.644,0],[4.763,-28.894],[-38.661,-5.249]],o:[[0,-33.643],[-30.243,0],[15.04,34.564],[20.7,-9.731]],v:[[60.503,2.883],[-.414,-58.034],[-60.503,-7.095],[25.466,58.034]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[69.86,152.32],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 1",np:2,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,-20.422],[-20.422,0],[0,20.422],[20.422,0]],o:[[0,20.422],[20.422,0],[0,-20.422],[-20.422,0]],v:[[-36.978,0],[0,36.978],[36.978,0],[0,-36.978]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[162.301,67.673],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 2",np:2,cix:2,ix:2,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[33.643,0],[0,-33.644],[-.43,-2.921],[-30.189,0],[-10.105,3.059],[0,13.509]],o:[[-33.643,0],[0,3.041],[19.877,19.691],[11.103,0],[7.441,-10.102],[0,-33.644]],v:[[0,-50.863],[-60.917,10.055],[-60.257,19.003],[17.151,50.863],[49.071,46.143],[60.917,10.055]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[93.104,160.526],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 3",np:2,cix:2,ix:3,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,33.643],[33.644,0],[11.11,-14.848],[0,-2.516],[-28.154,-19.923],[-.85,0]],o:[[0,-33.643],[-19.971,0],[-.166,2.474],[0,37.114],[.842,.034],[33.644,0]],v:[[55.003,0],[-5.915,-60.917],[-54.721,-36.458],[-55.003,-28.98],[-8.451,60.853],[-5.915,60.917]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[55.253,130.364],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 4",np:2,cix:2,ix:4,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,-33.643],[-33.644,0],[0,33.643],[33.643,0]],o:[[0,33.643],[33.643,0],[0,-33.643],[-33.644,0]],v:[[-60.916,0],[.001,60.917],[60.916,0],[.001,-60.917]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[81.866,61.167],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 5",np:2,cix:2,ix:5,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[9.709,0],[0,-12.883],[-2.396,-3.664],[-11.825,9.941]],o:[[-12.883,0],[0,4.704],[15.292,-4.275],[-3.512,-8.437]],v:[[.894,-18.034],[-22.433,5.294],[-18.632,18.034],[22.433,-3.663]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[158.553,189.275],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 6",np:2,cix:2,ix:6,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,-20.422],[-20.422,0],[0,20.422],[20.422,0]],o:[[0,20.422],[20.422,0],[0,-20.422],[-20.422,0]],v:[[-36.978,0],[0,36.978],[36.978,0],[0,-36.978]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[119.127,116.761],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 7",np:2,cix:2,ix:7,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,33.643],[33.644,0],[4.968,-1.309],[0,-29.517],[-2.018,-8.332],[-16.793,0]],o:[[0,-33.643],[-5.379,0],[-18.922,19.757],[0,8.953],[11.019,10.991],[33.644,0]],v:[[53.524,0],[-7.393,-60.917],[-22.954,-58.903],[-53.524,17.151],[-50.41,43.129],[-7.393,60.917]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[53.774,84.233],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 8",np:2,cix:2,ix:8,mn:"ADBE Vector Group",hd:!1}],ip:0,op:158,st:0,bm:0},{ddd:0,ind:15,ty:4,nm:"Mouth Outlines",parent:16,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[185.247,168.806,0],ix:2},a:{a:0,k:[17.624,15.969,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[0,0]],o:[[.591,14.194],[0,0]],v:[[-8.752,-7.097],[8.752,3.145]],c:!1},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[.176000004189,.176000004189,.176000004189,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:3.549,ix:5},lc:1,lj:1,ml:10,ml2:{a:0,k:10,ix:8},nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[17.624,15.969],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 1",np:2,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:158,st:0,bm:0},{ddd:0,ind:16,ty:4,nm:"Face",parent:17,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:1,k:[{i:{x:[.25],y:[1]},o:{x:[.167],y:[.188]},n:["0p25_1_0p167_0p188"],t:2,s:[0],e:[89]},{i:{x:[.25],y:[1]},o:{x:[.167],y:[.167]},n:["0p25_1_0p167_0p167"],t:13.632,s:[89],e:[85]},{i:{x:[.25],y:[1]},o:{x:[.167],y:[0]},n:["0p25_1_0p167_0"],t:19,s:[85],e:[85]},{i:{x:[.25],y:[1]},o:{x:[.167],y:[0]},n:["0p25_1_0p167_0"],t:118,s:[85],e:[0]},{t:128}],ix:10},p:{a:1,k:[{i:{x:.25,y:1},o:{x:.167,y:.196},n:"0p25_1_0p167_0p196",t:2,s:[273.127,19.29,0],e:[251.827,80.533,0],to:[-4.0279393196106,29.8873653411865,0],ti:[0,0,0]},{i:{x:.25,y:.25},o:{x:.167,y:.167},n:"0p25_0p25_0p167_0p167",t:13.632,s:[251.827,80.533,0],e:[251.827,80.533,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.25,y:.25},o:{x:.167,y:.167},n:"0p25_0p25_0p167_0p167",t:19,s:[251.827,80.533,0],e:[251.827,80.533,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.25,y:1},o:{x:.167,y:0},n:"0p25_1_0p167_0",t:118,s:[251.827,80.533,0],e:[273.127,19.29,0],to:[0,0,0],ti:[56.6385726928711,-30.2357158660889,0]},{t:128}],ix:2},a:{a:0,k:[150.919,110.255,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,3.92],[3.92,0],[0,-3.92],[-3.92,0]],o:[[0,-3.92],[-3.92,0],[0,3.92],[3.92,0]],v:[[7.097,0],[0,-7.097],[-7.097,0],[0,7.097]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[.176000004189,.176000004189,.176000004189,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[173.505,126.223],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 1",np:2,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,3.92],[3.92,0],[0,-3.92],[-3.92,0]],o:[[0,-3.92],[-3.92,0],[0,3.92],[3.92,0]],v:[[7.097,0],[0,-7.097],[-7.097,0],[0,7.097]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[.176000004189,.176000004189,.176000004189,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[202.517,126.223],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 2",np:2,cix:2,ix:2,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[-2.651,0],[0,0],[.335,-1.626],[1.698,-2.592],[1.221,.782],[0,0]],o:[[0,0],[1.661,0],[-.659,3.199],[-.794,1.213],[0,0],[-2.232,-1.431]],v:[[-7.241,-6.681],[7.952,-6.681],[10.57,-3.535],[6.986,5.137],[3.332,5.898],[-8.673,-1.79]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[.176000004189,.176000004189,.176000004189,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[290.682,143.55],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 3",np:2,cix:2,ix:3,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[-3.708,43.546]],v:[[-52.523,11.534],[-52.523,-21.773],[52.523,-21.773]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[.6,.6,.6,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[246.522,160.417],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 4",np:2,cix:2,ix:4,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,60.754],[60.754,0],[0,-60.754],[-60.754,0]],o:[[0,-60.754],[-60.754,0],[0,60.754],[60.754,0]],v:[[110.005,0],[0,-110.005],[-110.005,0],[0,110.005]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[.6,.6,.6,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[110.255,110.255],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 5",np:2,cix:2,ix:5,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[12.58,0],[0,-20.422],[-.062,-.87],[-18.505,14.651]],o:[[-20.422,0],[0,.885],[25.381,-.228],[-6.679,-9.598]],v:[[3.311,-19.8],[-33.667,17.178],[-33.534,19.8],[33.667,-3.907]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[144.795,200.434],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 6",np:2,cix:2,ix:6,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[60.754,0],[0,-60.754],[-60.754,0],[-.337,.004],[0,.886],[-20.422,0],[-6.68,-9.598],[0,34.981]],o:[[-60.754,0],[0,60.754],[.337,0],[-.061,-.869],[0,-20.422],[12.58,0],[25.45,-20.149],[0,-60.754]],v:[[0,-110.005],[-110.005,0],[0,110.005],[1.006,109.979],[.873,107.357],[37.851,70.379],[68.208,86.273],[110.005,0]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[110.255,110.255],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 7",np:2,cix:2,ix:7,mn:"ADBE Vector Group",hd:!1}],ip:0,op:158,st:0,bm:0},{ddd:0,ind:17,ty:4,nm:"Hind",parent:26,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:1,k:[{i:{x:[.76],y:[1]},o:{x:[.24],y:[0]},n:["0p76_1_0p24_0"],t:-47,s:[2.133],e:[2.133]},{i:{x:[.76],y:[1]},o:{x:[.24],y:[0]},n:["0p76_1_0p24_0"],t:-32,s:[2.133],e:[-.867]},{i:{x:[.25],y:[1]},o:{x:[.24],y:[0]},n:["0p25_1_0p24_0"],t:-12,s:[-.867],e:[2.133]},{i:{x:[.25],y:[1]},o:{x:[.24],y:[0]},n:["0p25_1_0p24_0"],t:0,s:[2.133],e:[-102]},{i:{x:[.833],y:[1]},o:{x:[.167],y:[0]},n:["0p833_1_0p167_0"],t:11,s:[-102],e:[-94.867]},{i:{x:[.588],y:[1]},o:{x:[.165],y:[0]},n:["0p588_1_0p165_0"],t:15,s:[-94.867],e:[-94.867]},{i:{x:[.831],y:[1]},o:{x:[.421],y:[0]},n:["0p831_1_0p421_0"],t:34,s:[-94.867],e:[-83.867]},{i:{x:[.833],y:[1]},o:{x:[.167],y:[0]},n:["0p833_1_0p167_0"],t:52,s:[-83.867],e:[-80.867]},{i:{x:[.833],y:[1]},o:{x:[.165],y:[0]},n:["0p833_1_0p165_0"],t:67,s:[-80.867],e:[-98.867]},{i:{x:[.833],y:[.833]},o:{x:[.167],y:[0]},n:["0p833_0p833_0p167_0"],t:85,s:[-98.867],e:[-83.867]},{i:{x:[.59],y:[1]},o:{x:[.167],y:[.167]},n:["0p59_1_0p167_0p167"],t:102,s:[-83.867],e:[-81.867]},{i:{x:[.39],y:[1]},o:{x:[.17],y:[0]},n:["0p39_1_0p17_0"],t:113,s:[-81.867],e:[-100.269]},{i:{x:[.673],y:[1]},o:{x:[.727],y:[0]},n:["0p673_1_0p727_0"],t:117,s:[-100.269],e:[2.133]},{t:123}],ix:10},p:{a:1,k:[{i:{x:.25,y:1},o:{x:.24,y:0},n:"0p25_1_0p24_0",t:0,s:[-171.678,-160.042,0],e:[-158.016,-148.856,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.25,y:.25},o:{x:.167,y:.167},n:"0p25_0p25_0p167_0p167",t:11,s:[-158.016,-148.856,0],e:[-158.016,-148.856,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.25,y:1},o:{x:.167,y:0},n:"0p25_1_0p167_0",t:15,s:[-158.016,-148.856,0],e:[-174.037,-150.68,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.469,y:.544},o:{x:.274,y:0},n:"0p469_0p544_0p274_0",t:34,s:[-174.037,-150.68,0],e:[-157.957,-149.518,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.514,y:1},o:{x:.209,y:.233},n:"0p514_1_0p209_0p233",t:40,s:[-157.957,-149.518,0],e:[-133.151,-147.625,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.25,y:1},o:{x:.167,y:0},n:"0p25_1_0p167_0",t:52,s:[-133.151,-147.625,0],e:[-136.058,-147.495,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.25,y:1},o:{x:.167,y:0},n:"0p25_1_0p167_0",t:67,s:[-136.058,-147.495,0],e:[-163.997,-146.644,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.833,y:.833},o:{x:.167,y:0},n:"0p833_0p833_0p167_0",t:85,s:[-163.997,-146.644,0],e:[-164.285,-142.655,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.59,y:1},o:{x:.167,y:.167},n:"0p59_1_0p167_0p167",t:102,s:[-164.285,-142.655,0],e:[-149.7,-151.77,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.39,y:1},o:{x:.17,y:0},n:"0p39_1_0p17_0",t:113,s:[-149.7,-151.77,0],e:[-153.122,-141.963,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.673,y:1},o:{x:.727,y:0},n:"0p673_1_0p727_0",t:117,s:[-153.122,-141.963,0],e:[-171.678,-160.042,0],to:[0,0,0],ti:[0,0,0]},{t:123}],ix:2},a:{a:0,k:[46.317,46.317,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,25.442],[25.442,0],[0,-25.442],[-25.442,0]],o:[[0,-25.442],[-25.442,0],[0,25.442],[25.442,0]],v:[[46.067,0],[0,-46.067],[-46.067,0],[0,46.067]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[46.317,46.317],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 1",np:2,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:158,st:0,bm:0},{ddd:0,ind:18,ty:4,nm:"front leg 2::Hip",parent:16,hd:!0,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10,x:`var $bm_rt;
try {
    var parentRot = hasParent ? parentTotal() : 0;
    var rotCalc = sub(thisLayer('ADBE Root Vectors Group')('Admin')('Transform')('Rotation'), parentRot);
    $bm_rt = sum(rotCalc, value);
} catch (err) {
    $bm_rt = value;
}
;
function parentTotal() {
    var parentVal = 0;
    var layerChain = 'thisLayer';
    while (eval([layerChain][0]).hasParent) {
        layerChain = sum(layerChain, '.parent');
        parentVal = sum(parentVal, eval([layerChain][0]).rotation);
    }
    return parentVal;
}`},p:{a:1,k:[{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:2,s:[138.562,194.201,0],e:[127.525,211.325,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:13,s:[127.525,211.325,0],e:[127.525,211.325,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:120,s:[127.525,211.325,0],e:[138.562,194.201,0],to:[0,0,0],ti:[0,0,0]},{t:131}],ix:2},a:{a:0,k:[0,0,0],ix:1},s:{a:0,k:[100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ty:"gr",it:[{ty:"gr",it:[{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"front leg 2::Ankle",np:0,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[135,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"A",np:1,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ty:"gr",it:[{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[20,20],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"front leg 2::Hip",np:0,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"B",np:1,cix:2,ix:2,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ty:"gr",it:[{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"2.04",np:0,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1,cl:"04"},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Version",np:1,cix:2,ix:3,mn:"ADBE Vector Group",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6,x:`var $bm_rt;
try {
    var eff = thisComp.layer(thisLayer(2)('Admin')(2)('A')(2)(1)._name)(4)('RubberHose 2');
    var autoRotate = eff('Auto Rotate Start');
    if (autoRotate == 1) {
        var a = thisComp.layer(thisLayer(2)('Admin')(2)('A')(2)(1)._name).toComp([
                0,
                0,
                0
            ]);
        var b = thisLayer.toComp([
                0,
                0,
                0
            ]);
        var s = length(a, b);
        var sFac = eff('Parent Scale');
        var autoFlop = 1;
        var realism = eff('Realism');
        var bendDir = div(eff('Bend Direction'), 100);
        var hoseLength = div(eff('Hose Length'), 2);
        var bendRad = eff('Bend Radius');
        var autoFlop = eff('AutoFlop');
        var baseRot = $bm_neg(radiansToDegrees(Math.atan2(sub(b[0], a[0]), sub(b[1], a[1]))));
        var outerRad = mul(Math.sin(0.78539816339), s);
        var straight = div(mul(1.4142135623731, outerRad), 2);
        straight /= Math.max(Math.abs(sFac), 0.001);
        var roundShrink = linear(Math.abs(bendRad), 0, 100, 1, 0.87);
        var innerRad;
        if (straight <= hoseLength) {
            innerRad = sum(straight, mul(Math.sqrt(sub(Math.pow(hoseLength, 2), Math.pow(straight, 2))), roundShrink));
            innerRad = linear(realism, 0, 100, hoseLength, innerRad);
            innerRad = linear(Math.abs(bendDir), straight, innerRad);
        } else {
            innerRad = straight;
        }
        innerRad = linear(Math.abs(autoFlop), straight, innerRad);
        var flopDir = 1;
        if (bendDir < 0) {
            flopDir = -1;
        }
        flopDir *= autoFlop;
        var opp = mul(sub(innerRad, straight), flopDir);
        var theta = Math.atan(div(opp, Math.max(straight, 0.001)));
        var bendAngle = radiansToDegrees(theta);
        if (sFac < 0) {
            baseRot *= -1;
        }
        bendRad *= div(div(theta, $bm_neg(Math.PI)), linear(s, hoseLength, 0, 2, 0.9));
        var rotCalc = sum(sub(baseRot, bendAngle), bendRad);
        $bm_rt = rotCalc;
    } else {
        $bm_rt = 0;
    }
    ;
} catch (err) {
    $bm_rt = value;
}
;`},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Admin",np:3,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ty:"gr",it:[{d:1,ty:"el",s:{a:0,k:[100,100],ix:2},p:{a:0,k:[0,0],ix:3},nm:"Circle",mn:"ADBE Vector Shape - Ellipse",hd:!1},{ind:1,ty:"sh",ix:2,ks:{a:0,k:{i:[[0,0],[0,0]],o:[[0,0],[0,0]],v:[[-75,0],[75,0]],c:!1},ix:2},nm:"01",mn:"ADBE Vector Shape - Group",hd:!1},{ind:2,ty:"sh",ix:3,ks:{a:0,k:{i:[[0,0],[0,0]],o:[[0,0],[0,0]],v:[[0,-30],[0,30]],c:!1},ix:2},nm:"02",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[15,15],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"ControlShape",np:3,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"st",c:{a:0,k:[1,.560000002384,0,1],ix:3,x:`var $bm_rt;
try {
    var ctrl = thisComp.layer(thisLayer(2)('Admin')(2)('A')(2)(1)._name);
    $bm_rt = ctrl(2)('Control Point')(2)('Stroke 1')('Color');
} catch (e) {
    $bm_rt = value;
}`},o:{a:0,k:100,ix:4},w:{a:0,k:1.5,ix:5},lc:1,lj:1,ml:4,ml2:{a:0,k:4,ix:8},nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Control Point",np:2,cix:2,ix:2,mn:"ADBE Vector Group",hd:!1}],ip:0,op:158,st:0,bm:0},{ddd:0,ind:19,ty:4,nm:"front leg 1::Hip",parent:16,hd:!0,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10,x:`var $bm_rt;
try {
    var parentRot = hasParent ? parentTotal() : 0;
    var rotCalc = sub(thisLayer('ADBE Root Vectors Group')('Admin')('Transform')('Rotation'), parentRot);
    $bm_rt = sum(rotCalc, value);
} catch (err) {
    $bm_rt = value;
}
;
function parentTotal() {
    var parentVal = 0;
    var layerChain = 'thisLayer';
    while (eval([layerChain][0]).hasParent) {
        layerChain = sum(layerChain, '.parent');
        parentVal = sum(parentVal, eval([layerChain][0]).rotation);
    }
    return parentVal;
}`},p:{a:1,k:[{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:2,s:[86.562,194.201,0],e:[58.734,182.992,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:13,s:[58.734,182.992,0],e:[58.734,182.992,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:120,s:[58.734,182.992,0],e:[86.562,194.201,0],to:[0,0,0],ti:[0,0,0]},{t:131}],ix:2},a:{a:0,k:[0,0,0],ix:1},s:{a:0,k:[100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ty:"gr",it:[{ty:"gr",it:[{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"front leg 1::Ankle",np:0,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[135,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"A",np:1,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ty:"gr",it:[{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[20,20],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"front leg 1::Hip",np:0,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"B",np:1,cix:2,ix:2,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ty:"gr",it:[{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"2.04",np:0,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1,cl:"04"},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Version",np:1,cix:2,ix:3,mn:"ADBE Vector Group",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6,x:`var $bm_rt;
try {
    var eff = thisComp.layer(thisLayer(2)('Admin')(2)('A')(2)(1)._name)(4)('RubberHose 2');
    var autoRotate = eff('Auto Rotate Start');
    if (autoRotate == 1) {
        var a = thisComp.layer(thisLayer(2)('Admin')(2)('A')(2)(1)._name).toComp([
                0,
                0,
                0
            ]);
        var b = thisLayer.toComp([
                0,
                0,
                0
            ]);
        var s = length(a, b);
        var sFac = eff('Parent Scale');
        var autoFlop = 1;
        var realism = eff('Realism');
        var bendDir = div(eff('Bend Direction'), 100);
        var hoseLength = div(eff('Hose Length'), 2);
        var bendRad = eff('Bend Radius');
        var autoFlop = eff('AutoFlop');
        var baseRot = $bm_neg(radiansToDegrees(Math.atan2(sub(b[0], a[0]), sub(b[1], a[1]))));
        var outerRad = mul(Math.sin(0.78539816339), s);
        var straight = div(mul(1.4142135623731, outerRad), 2);
        straight /= Math.max(Math.abs(sFac), 0.001);
        var roundShrink = linear(Math.abs(bendRad), 0, 100, 1, 0.87);
        var innerRad;
        if (straight <= hoseLength) {
            innerRad = sum(straight, mul(Math.sqrt(sub(Math.pow(hoseLength, 2), Math.pow(straight, 2))), roundShrink));
            innerRad = linear(realism, 0, 100, hoseLength, innerRad);
            innerRad = linear(Math.abs(bendDir), straight, innerRad);
        } else {
            innerRad = straight;
        }
        innerRad = linear(Math.abs(autoFlop), straight, innerRad);
        var flopDir = 1;
        if (bendDir < 0) {
            flopDir = -1;
        }
        flopDir *= autoFlop;
        var opp = mul(sub(innerRad, straight), flopDir);
        var theta = Math.atan(div(opp, Math.max(straight, 0.001)));
        var bendAngle = radiansToDegrees(theta);
        if (sFac < 0) {
            baseRot *= -1;
        }
        bendRad *= div(div(theta, $bm_neg(Math.PI)), linear(s, hoseLength, 0, 2, 0.9));
        var rotCalc = sum(sub(baseRot, bendAngle), bendRad);
        $bm_rt = rotCalc;
    } else {
        $bm_rt = 0;
    }
    ;
} catch (err) {
    $bm_rt = value;
}
;`},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Admin",np:3,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ty:"gr",it:[{d:1,ty:"el",s:{a:0,k:[100,100],ix:2},p:{a:0,k:[0,0],ix:3},nm:"Circle",mn:"ADBE Vector Shape - Ellipse",hd:!1},{ind:1,ty:"sh",ix:2,ks:{a:0,k:{i:[[0,0],[0,0]],o:[[0,0],[0,0]],v:[[-75,0],[75,0]],c:!1},ix:2},nm:"01",mn:"ADBE Vector Shape - Group",hd:!1},{ind:2,ty:"sh",ix:3,ks:{a:0,k:{i:[[0,0],[0,0]],o:[[0,0],[0,0]],v:[[0,-30],[0,30]],c:!1},ix:2},nm:"02",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[15,15],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"ControlShape",np:3,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"st",c:{a:0,k:[1,.560000002384,0,1],ix:3,x:`var $bm_rt;
try {
    var ctrl = thisComp.layer(thisLayer(2)('Admin')(2)('A')(2)(1)._name);
    $bm_rt = ctrl(2)('Control Point')(2)('Stroke 1')('Color');
} catch (e) {
    $bm_rt = value;
}`},o:{a:0,k:100,ix:4},w:{a:0,k:1.5,ix:5},lc:1,lj:1,ml:4,ml2:{a:0,k:4,ix:8},nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Control Point",np:2,cix:2,ix:2,mn:"ADBE Vector Group",hd:!1}],ip:0,op:158,st:0,bm:0},{ddd:0,ind:20,ty:4,nm:"front foot 1",parent:10,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:180,ix:10},p:{a:0,k:[.08,-.42,0],ix:2},a:{a:0,k:[-75.08,120.92,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{d:1,ty:"el",s:{a:0,k:[34.16,34.16],ix:2},p:{a:0,k:[0,0],ix:3},nm:"Ellipse Path 1",mn:"ADBE Vector Shape - Ellipse",hd:!1},{ty:"st",c:{a:0,k:[.6,.6,.6,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:0,ix:5},lc:1,lj:1,ml:4,ml2:{a:0,k:4,ix:8},nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[-75.08,120.92],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[122.752,122.752],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Ellipse 1",np:3,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:158,st:0,bm:0},{ddd:0,ind:21,ty:4,nm:"front foot 2",parent:9,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:180,ix:10},p:{a:0,k:[.58,.08,0],ix:2},a:{a:0,k:[-75.08,120.92,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{d:1,ty:"el",s:{a:0,k:[34.16,34.16],ix:2},p:{a:0,k:[0,0],ix:3},nm:"Ellipse Path 1",mn:"ADBE Vector Shape - Ellipse",hd:!1},{ty:"st",c:{a:0,k:[.6,.6,.6,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:0,ix:5},lc:1,lj:1,ml:4,ml2:{a:0,k:4,ix:8},nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[-75.08,120.92],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[122.752,122.752],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Ellipse 1",np:3,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:158,st:0,bm:0},{ddd:0,ind:22,ty:4,nm:"front leg 2",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10,x:`var $bm_rt;
var r = 0;
if (thisLayer.hasParent) {
    r = $bm_neg(parentTotal());
}
$bm_rt = r;
function parentTotal() {
    var parentVal = 0;
    var layerChain = 'thisLayer';
    while (eval([layerChain][0]).hasParent) {
        layerChain = sum(layerChain, '.parent');
        parentVal = sum(parentVal, eval([layerChain][0]).rotation);
    }
    return parentVal;
}`},p:{a:0,k:[750,750,0],ix:2,x:`var $bm_rt;
var p = [
        0,
        0
    ];
try {
    if (thisLayer.hasParent) {
        p = parent.fromComp([
            0,
            0,
            0
        ]);
    }
    $bm_rt = p;
} catch (err) {
    $bm_rt = p;
}`},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100,100],ix:6,x:`var $bm_rt;
var s = [
        100,
        100
    ];
if (hasParent) {
    var sFactor = parentTotal();
    s = [
        s[0] * sFactor[0],
        s[1] * sFactor[1]
    ];
}
$bm_rt = s;
function parentTotal() {
    var sFactor = [
            1,
            1
        ];
    var scaleNorm = [
            0,
            0
        ];
    var layerChain = 'thisLayer';
    while (eval([layerChain][0]).hasParent) {
        layerChain = sum(layerChain, '.parent');
        scaleNorm = eval([layerChain][0]).scale;
        if (scaleNorm[0] != 0 && scaleNorm[1] != 0) {
            scaleNorm = [
                100 / scaleNorm[0],
                100 / scaleNorm[1]
            ];
        }
        sFactor = [
            sFactor[0] * scaleNorm[0],
            sFactor[1] * scaleNorm[1]
        ];
    }
    return sFactor;
}`}},ao:0,shapes:[{ty:"gr",it:[{ty:"gr",it:[{ty:"gr",it:[{ty:"sr",sy:1,d:1,pt:{a:0,k:4,ix:3},p:{a:0,k:[0,0],ix:4},r:{a:0,k:0,ix:5},ir:{a:0,k:500,ix:6,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(1).propertyIndex;
$bm_rt = thisLayer(2)('Admin')(2)('ArcMath')(2)(grp)(p);`},is:{a:0,k:0,ix:8,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(1).propertyIndex;
$bm_rt = thisLayer(2)('Admin')(2)('ArcMath')(2)(grp)(p);`},or:{a:0,k:113,ix:7,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(1).propertyIndex;
$bm_rt = thisLayer(2)('Admin')(2)('ArcMath')(2)(grp)(p);`},os:{a:0,k:0,ix:9,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(1).propertyIndex;
$bm_rt = thisLayer(2)('Admin')(2)('ArcMath')(2)(grp)(p);`},ix:1,nm:"LineForCurve",mn:"ADBE Vector Shape - Star",hd:!1},{ty:"tm",s:{a:0,k:0,ix:1,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(1).propertyIndex;
$bm_rt = thisLayer(2)('Admin')(2)('ArcMath')(2)(grp)(p);`},e:{a:0,k:0,ix:2,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(1).propertyIndex;
$bm_rt = thisLayer(2)('Admin')(2)('ArcMath')(2)(grp)(p);`},o:{a:0,k:-90,ix:3,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(1).propertyIndex;
$bm_rt = thisLayer(2)('Admin')(2)('ArcMath')(2)(grp)(p);`},m:1,ix:2,nm:"Line Halfer",mn:"ADBE Vector Filter - Trim",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(2).propertyIndex;
$bm_rt = content('Admin').content('ArcMath')('ADBE Vector Transform Group')(p);`},a:{a:0,k:[0,0],ix:1,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(2).propertyIndex;
$bm_rt = content('Admin').content('ArcMath')('ADBE Vector Transform Group')(p);`},s:{a:0,k:[100,100],ix:3,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(2).propertyIndex;
$bm_rt = content('Admin').content('ArcMath')('ADBE Vector Transform Group')(p);`},r:{a:0,k:45,ix:6,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(2).propertyIndex;
$bm_rt = content('Admin').content('ArcMath')('ADBE Vector Transform Group')(p);`},o:{a:0,k:100,ix:7,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(2).propertyIndex;
$bm_rt = content('Admin').content('ArcMath')('ADBE Vector Transform Group')(p);`},sk:{a:0,k:0,ix:4,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(2).propertyIndex;
$bm_rt = content('Admin').content('ArcMath')('ADBE Vector Transform Group')(p);`},sa:{a:0,k:0,ix:5,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(2).propertyIndex;
$bm_rt = content('Admin').content('ArcMath')('ADBE Vector Transform Group')(p);`},nm:"Transform"}],nm:"Arc",np:2,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"st",c:{a:0,k:[.6,.6,.6,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:9,ix:5,x:`var $bm_rt;
var sFac = thisComp.layer(thisLayer(2)('Admin')(2)('A')(2)(1)._name)(4)('RubberHose 2')('Parent Scale');
$bm_rt = mul(value, sFac);`},lc:2,lj:2,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2,x:`var $bm_rt;
try {
    var ctrl = thisComp.layer(thisLayer(2)('Admin')(2)('A')(2)(1)._name)(4)('RubberHose 2');
    $bm_rt = ctrl('A');
} catch (err) {
    $bm_rt = value;
}`},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"BaseHose",np:2,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Style",np:1,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ty:"gr",it:[{ty:"gr",it:[{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"front leg 2::Ankle",np:0,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[135,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"A",np:1,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ty:"gr",it:[{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[200,200],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"front leg 2::Hip",np:0,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"B",np:1,cix:2,ix:2,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ty:"gr",it:[{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"2.04",np:0,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1,cl:"04"},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Version",np:1,cix:2,ix:3,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ty:"sr",sy:1,d:1,pt:{a:0,k:4,ix:3},p:{a:0,k:[0,0],ix:4},r:{a:0,k:0,ix:5},ir:{a:0,k:200,ix:6,x:`var $bm_rt;
try {
    var ctrl = thisComp.layer(thisLayer(2)('Admin')(2)('A')(2)(1)._name)(4)('RubberHose 2');
    $bm_rt = ctrl('Inner Radius');
} catch (err) {
    $bm_rt = value;
}`},is:{a:0,k:100,ix:8,x:`var $bm_rt;
try {
    var ctrl = thisComp.layer(thisLayer(2)('Admin')(2)('A')(2)(1)._name)(4)('RubberHose 2');
    $bm_rt = ctrl('Bend Radius');
} catch (err) {
    $bm_rt = value;
}`},or:{a:0,k:200,ix:7,x:`var $bm_rt;
try {
    var ctrl = thisComp.layer(thisLayer(2)('Admin')(2)('A')(2)(1)._name)(4)('RubberHose 2');
    $bm_rt = ctrl('Outer Radius');
} catch (err) {
    $bm_rt = value;
}`},os:{a:0,k:0,ix:9},ix:1,nm:"LineForCurve",mn:"ADBE Vector Shape - Star",hd:!1},{ty:"tm",s:{a:0,k:.01,ix:1},e:{a:0,k:24.99,ix:2},o:{a:0,k:-90,ix:3,x:`var $bm_rt;
$bm_rt = -90;`},m:1,ix:2,nm:"Line Halfer",mn:"ADBE Vector Filter - Trim",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1,x:`var $bm_rt;
var s = thisProperty.propertyGroup(2)(2)(1)(7);
$bm_rt = [
    -s,
    0
];`},s:{a:0,k:[100,100],ix:3,x:`var $bm_rt;
var flop;
try {
    var eff = thisComp.layer(thisLayer(2)('Admin')(2)('A')(2)(1)._name)(4)('RubberHose 2');
    var bendDir = eff('Bend Direction');
    var autoFlop = eff('AutoFlop');
    flop = bendDir > 0 ? 1 : -1;
    autoFlop > 0 ? 0 : flop *= -1;
    var s = flop == 1 ? [
            -100,
            100
        ] : [
            100,
            100
        ];
    if (eff('Parent Scale') < 0) {
        s = [
            -s[0],
            s[1]
        ];
    }
    $bm_rt = s;
} catch (err) {
    $bm_rt = value;
}
;`},r:{a:0,k:45,ix:6,x:`var $bm_rt;
try {
    var ctrl = thisComp.layer(thisLayer(2)('Admin')(2)('A')(2)(1)._name)(4)('RubberHose 2');
    var baseRot = ctrl('Base Rotation');
    var flop = content('Admin').content('ArcMath').transform.scale[0];
    var rotOffset = flop < 0 ? -45 : 225;
    $bm_rt = sum(baseRot, rotOffset);
} catch (err) {
    $bm_rt = value;
}`},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"ArcMath",np:2,cix:2,ix:4,mn:"ADBE Vector Group",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2,x:`var $bm_rt;
try {
    var ctrl = thisComp.layer(thisLayer(2)('Admin')(2)('A')(2)(1)._name)(4)('RubberHose 2');
    $bm_rt = ctrl('A');
} catch (err) {
    $bm_rt = value;
}`},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Admin",np:4,cix:2,ix:2,mn:"ADBE Vector Group",hd:!1}],ip:0,op:158,st:0,bm:0},{ddd:0,ind:23,ty:4,nm:"front leg 1",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10,x:`var $bm_rt;
var r = 0;
if (thisLayer.hasParent) {
    r = $bm_neg(parentTotal());
}
$bm_rt = r;
function parentTotal() {
    var parentVal = 0;
    var layerChain = 'thisLayer';
    while (eval([layerChain][0]).hasParent) {
        layerChain = sum(layerChain, '.parent');
        parentVal = sum(parentVal, eval([layerChain][0]).rotation);
    }
    return parentVal;
}`},p:{a:0,k:[750,750,0],ix:2,x:`var $bm_rt;
var p = [
        0,
        0
    ];
try {
    if (thisLayer.hasParent) {
        p = parent.fromComp([
            0,
            0,
            0
        ]);
    }
    $bm_rt = p;
} catch (err) {
    $bm_rt = p;
}`},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100,100],ix:6,x:`var $bm_rt;
var s = [
        100,
        100
    ];
if (hasParent) {
    var sFactor = parentTotal();
    s = [
        s[0] * sFactor[0],
        s[1] * sFactor[1]
    ];
}
$bm_rt = s;
function parentTotal() {
    var sFactor = [
            1,
            1
        ];
    var scaleNorm = [
            0,
            0
        ];
    var layerChain = 'thisLayer';
    while (eval([layerChain][0]).hasParent) {
        layerChain = sum(layerChain, '.parent');
        scaleNorm = eval([layerChain][0]).scale;
        if (scaleNorm[0] != 0 && scaleNorm[1] != 0) {
            scaleNorm = [
                100 / scaleNorm[0],
                100 / scaleNorm[1]
            ];
        }
        sFactor = [
            sFactor[0] * scaleNorm[0],
            sFactor[1] * scaleNorm[1]
        ];
    }
    return sFactor;
}`}},ao:0,shapes:[{ty:"gr",it:[{ty:"gr",it:[{ty:"gr",it:[{ty:"sr",sy:1,d:1,pt:{a:0,k:4,ix:3},p:{a:0,k:[0,0],ix:4},r:{a:0,k:0,ix:5},ir:{a:0,k:500,ix:6,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(1).propertyIndex;
$bm_rt = thisLayer(2)('Admin')(2)('ArcMath')(2)(grp)(p);`},is:{a:0,k:0,ix:8,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(1).propertyIndex;
$bm_rt = thisLayer(2)('Admin')(2)('ArcMath')(2)(grp)(p);`},or:{a:0,k:113,ix:7,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(1).propertyIndex;
$bm_rt = thisLayer(2)('Admin')(2)('ArcMath')(2)(grp)(p);`},os:{a:0,k:0,ix:9,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(1).propertyIndex;
$bm_rt = thisLayer(2)('Admin')(2)('ArcMath')(2)(grp)(p);`},ix:1,nm:"LineForCurve",mn:"ADBE Vector Shape - Star",hd:!1},{ty:"tm",s:{a:0,k:0,ix:1,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(1).propertyIndex;
$bm_rt = thisLayer(2)('Admin')(2)('ArcMath')(2)(grp)(p);`},e:{a:0,k:0,ix:2,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(1).propertyIndex;
$bm_rt = thisLayer(2)('Admin')(2)('ArcMath')(2)(grp)(p);`},o:{a:0,k:-90,ix:3,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(1).propertyIndex;
$bm_rt = thisLayer(2)('Admin')(2)('ArcMath')(2)(grp)(p);`},m:1,ix:2,nm:"Line Halfer",mn:"ADBE Vector Filter - Trim",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(2).propertyIndex;
$bm_rt = content('Admin').content('ArcMath')('ADBE Vector Transform Group')(p);`},a:{a:0,k:[0,0],ix:1,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(2).propertyIndex;
$bm_rt = content('Admin').content('ArcMath')('ADBE Vector Transform Group')(p);`},s:{a:0,k:[100,100],ix:3,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(2).propertyIndex;
$bm_rt = content('Admin').content('ArcMath')('ADBE Vector Transform Group')(p);`},r:{a:0,k:45,ix:6,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(2).propertyIndex;
$bm_rt = content('Admin').content('ArcMath')('ADBE Vector Transform Group')(p);`},o:{a:0,k:100,ix:7,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(2).propertyIndex;
$bm_rt = content('Admin').content('ArcMath')('ADBE Vector Transform Group')(p);`},sk:{a:0,k:0,ix:4,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(2).propertyIndex;
$bm_rt = content('Admin').content('ArcMath')('ADBE Vector Transform Group')(p);`},sa:{a:0,k:0,ix:5,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(2).propertyIndex;
$bm_rt = content('Admin').content('ArcMath')('ADBE Vector Transform Group')(p);`},nm:"Transform"}],nm:"Arc",np:2,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"st",c:{a:0,k:[.6,.6,.6,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:9,ix:5,x:`var $bm_rt;
var sFac = thisComp.layer(thisLayer(2)('Admin')(2)('A')(2)(1)._name)(4)('RubberHose 2')('Parent Scale');
$bm_rt = mul(value, sFac);`},lc:2,lj:2,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2,x:`var $bm_rt;
try {
    var ctrl = thisComp.layer(thisLayer(2)('Admin')(2)('A')(2)(1)._name)(4)('RubberHose 2');
    $bm_rt = ctrl('A');
} catch (err) {
    $bm_rt = value;
}`},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"BaseHose",np:2,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Style",np:1,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ty:"gr",it:[{ty:"gr",it:[{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"front leg 1::Ankle",np:0,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[135,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"A",np:1,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ty:"gr",it:[{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[200,200],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"front leg 1::Hip",np:0,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"B",np:1,cix:2,ix:2,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ty:"gr",it:[{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"2.04",np:0,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1,cl:"04"},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Version",np:1,cix:2,ix:3,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ty:"sr",sy:1,d:1,pt:{a:0,k:4,ix:3},p:{a:0,k:[0,0],ix:4},r:{a:0,k:0,ix:5},ir:{a:0,k:200,ix:6,x:`var $bm_rt;
try {
    var ctrl = thisComp.layer(thisLayer(2)('Admin')(2)('A')(2)(1)._name)(4)('RubberHose 2');
    $bm_rt = ctrl('Inner Radius');
} catch (err) {
    $bm_rt = value;
}`},is:{a:0,k:100,ix:8,x:`var $bm_rt;
try {
    var ctrl = thisComp.layer(thisLayer(2)('Admin')(2)('A')(2)(1)._name)(4)('RubberHose 2');
    $bm_rt = ctrl('Bend Radius');
} catch (err) {
    $bm_rt = value;
}`},or:{a:0,k:200,ix:7,x:`var $bm_rt;
try {
    var ctrl = thisComp.layer(thisLayer(2)('Admin')(2)('A')(2)(1)._name)(4)('RubberHose 2');
    $bm_rt = ctrl('Outer Radius');
} catch (err) {
    $bm_rt = value;
}`},os:{a:0,k:0,ix:9},ix:1,nm:"LineForCurve",mn:"ADBE Vector Shape - Star",hd:!1},{ty:"tm",s:{a:0,k:.01,ix:1},e:{a:0,k:24.99,ix:2},o:{a:0,k:-90,ix:3,x:`var $bm_rt;
$bm_rt = -90;`},m:1,ix:2,nm:"Line Halfer",mn:"ADBE Vector Filter - Trim",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1,x:`var $bm_rt;
var s = thisProperty.propertyGroup(2)(2)(1)(7);
$bm_rt = [
    -s,
    0
];`},s:{a:0,k:[100,100],ix:3,x:`var $bm_rt;
var flop;
try {
    var eff = thisComp.layer(thisLayer(2)('Admin')(2)('A')(2)(1)._name)(4)('RubberHose 2');
    var bendDir = eff('Bend Direction');
    var autoFlop = eff('AutoFlop');
    flop = bendDir > 0 ? 1 : -1;
    autoFlop > 0 ? 0 : flop *= -1;
    var s = flop == 1 ? [
            -100,
            100
        ] : [
            100,
            100
        ];
    if (eff('Parent Scale') < 0) {
        s = [
            -s[0],
            s[1]
        ];
    }
    $bm_rt = s;
} catch (err) {
    $bm_rt = value;
}
;`},r:{a:0,k:45,ix:6,x:`var $bm_rt;
try {
    var ctrl = thisComp.layer(thisLayer(2)('Admin')(2)('A')(2)(1)._name)(4)('RubberHose 2');
    var baseRot = ctrl('Base Rotation');
    var flop = content('Admin').content('ArcMath').transform.scale[0];
    var rotOffset = flop < 0 ? -45 : 225;
    $bm_rt = sum(baseRot, rotOffset);
} catch (err) {
    $bm_rt = value;
}`},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"ArcMath",np:2,cix:2,ix:4,mn:"ADBE Vector Group",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2,x:`var $bm_rt;
try {
    var ctrl = thisComp.layer(thisLayer(2)('Admin')(2)('A')(2)(1)._name)(4)('RubberHose 2');
    $bm_rt = ctrl('A');
} catch (err) {
    $bm_rt = value;
}`},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Admin",np:4,cix:2,ix:2,mn:"ADBE Vector Group",hd:!1}],ip:0,op:158,st:0,bm:0},{ddd:0,ind:24,ty:4,nm:"body",parent:17,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[47.27,43.236,0],ix:2},a:{a:0,k:[-103,-28,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:1,k:[{i:{x:.25,y:1},o:{x:.167,y:.167},n:"0p25_1_0p167_0p167",t:0,s:[{i:[[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0]],v:[[-103,-28],[-33.335,-28],[89.5,-28]],c:!1}],e:[{i:[[-78.468,40.847],[-34.752,9.131],[0,0]],o:[[36.937,-19.228],[50.665,-13.311],[0,0]],v:[[-105.423,-12.184],[6.516,-53.942],[96.163,-71.493]],c:!1}]},{i:{x:.25,y:1},o:{x:.167,y:0},n:"0p25_1_0p167_0",t:11,s:[{i:[[-78.468,40.847],[-34.752,9.131],[0,0]],o:[[36.937,-19.228],[50.665,-13.311],[0,0]],v:[[-105.423,-12.184],[6.516,-53.942],[96.163,-71.493]],c:!1}],e:[{i:[[-78.468,40.847],[-34.752,9.131],[0,0]],o:[[36.937,-19.228],[50.665,-13.311],[0,0]],v:[[-105.423,-12.184],[6.516,-53.942],[96.163,-71.493]],c:!1}]},{i:{x:.833,y:.833},o:{x:.75,y:0},n:"0p833_0p833_0p75_0",t:119,s:[{i:[[-78.468,40.847],[-34.752,9.131],[0,0]],o:[[36.937,-19.228],[50.665,-13.311],[0,0]],v:[[-105.423,-12.184],[6.516,-53.942],[96.163,-71.493]],c:!1}],e:[{i:[[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0]],v:[[-103,-28],[-33.335,-28],[89.5,-28]],c:!1}]},{t:128}],ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[1,1,1,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:67,ix:5},lc:2,lj:1,ml:4,ml2:{a:0,k:4,ix:8},nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!0},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Shape 1",np:3,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:158,st:0,bm:0},{ddd:0,ind:25,ty:4,nm:"Tail Outlines",parent:17,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:1,k:[{i:{x:[.71],y:[1]},o:{x:[.29],y:[0]},n:["0p71_1_0p29_0"],t:3.941,s:[0],e:[16]},{i:{x:[.71],y:[1]},o:{x:[.29],y:[0]},n:["0p71_1_0p29_0"],t:12.583,s:[16],e:[45]},{i:{x:[.833],y:[1]},o:{x:[.167],y:[0]},n:["0p833_1_0p167_0"],t:20,s:[45],e:[34]},{i:{x:[.833],y:[1]},o:{x:[.167],y:[0]},n:["0p833_1_0p167_0"],t:25,s:[34],e:[34]},{i:{x:[.833],y:[1]},o:{x:[.167],y:[0]},n:["0p833_1_0p167_0"],t:117,s:[34],e:[64]},{i:{x:[.833],y:[1]},o:{x:[.167],y:[0]},n:["0p833_1_0p167_0"],t:123,s:[64],e:[13]},{i:{x:[.833],y:[1]},o:{x:[.167],y:[0]},n:["0p833_1_0p167_0"],t:128,s:[13],e:[0]},{t:131}],ix:10},p:{a:0,k:[51.521,24.967,0],ix:2},a:{a:0,k:[97.42,87.679,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:1,k:[{i:{x:.71,y:1},o:{x:.29,y:0},n:"0p71_1_0p29_0",t:3.941,s:[{i:[[0,12.395],[12.395,0],[0,-12.395],[-12.394,0]],o:[[0,-12.395],[-12.394,0],[0,12.395],[12.395,0]],v:[[22.443,0],[-.001,-22.443],[-22.443,0],[-.001,22.443]],c:!0}],e:[{i:[[0,12.395],[12.395,0],[0,-12.395],[-12.394,0]],o:[[0,-12.395],[-12.394,0],[0,12.395],[12.395,0]],v:[[6.443,16],[-16.001,-6.443],[-38.443,16],[-16.001,38.443]],c:!0}]},{i:{x:.71,y:1},o:{x:.29,y:0},n:"0p71_1_0p29_0",t:12.583,s:[{i:[[0,12.395],[12.395,0],[0,-12.395],[-12.394,0]],o:[[0,-12.395],[-12.394,0],[0,12.395],[12.395,0]],v:[[6.443,16],[-16.001,-6.443],[-38.443,16],[-16.001,38.443]],c:!0}],e:[{i:[[0,12.395],[12.395,0],[0,-12.395],[-12.394,0]],o:[[0,-12.395],[-12.394,0],[0,12.395],[12.395,0]],v:[[22.443,0],[-.001,-22.443],[-22.443,0],[-.001,22.443]],c:!0}]},{i:{x:.833,y:1},o:{x:.167,y:0},n:"0p833_1_0p167_0",t:19.929,s:[{i:[[0,12.395],[12.395,0],[0,-12.395],[-12.394,0]],o:[[0,-12.395],[-12.394,0],[0,12.395],[12.395,0]],v:[[22.443,0],[-.001,-22.443],[-22.443,0],[-.001,22.443]],c:!0}],e:[{i:[[0,12.395],[12.395,0],[0,-12.395],[-12.394,0]],o:[[0,-12.395],[-12.394,0],[0,12.395],[12.395,0]],v:[[22.443,0],[-.001,-22.443],[-22.443,0],[-.001,22.443]],c:!0}]},{i:{x:.833,y:1},o:{x:.167,y:0},n:"0p833_1_0p167_0",t:119,s:[{i:[[0,12.395],[12.395,0],[0,-12.395],[-12.394,0]],o:[[0,-12.395],[-12.394,0],[0,12.395],[12.395,0]],v:[[22.443,0],[-.001,-22.443],[-22.443,0],[-.001,22.443]],c:!0}],e:[{i:[[0,12.395],[12.395,0],[0,-12.395],[-12.394,0]],o:[[0,-12.395],[-12.394,0],[0,12.395],[12.395,0]],v:[[19.992,-19.261],[-2.451,-41.704],[-24.893,-19.261],[-2.451,3.182]],c:!0}]},{i:{x:.833,y:1},o:{x:.167,y:0},n:"0p833_1_0p167_0",t:125,s:[{i:[[0,12.395],[12.395,0],[0,-12.395],[-12.394,0]],o:[[0,-12.395],[-12.394,0],[0,12.395],[12.395,0]],v:[[19.992,-19.261],[-2.451,-41.704],[-24.893,-19.261],[-2.451,3.182]],c:!0}],e:[{i:[[0,12.395],[12.395,0],[0,-12.395],[-12.394,0]],o:[[0,-12.395],[-12.394,0],[0,12.395],[12.395,0]],v:[[22.443,0],[-.001,-22.443],[-22.443,0],[-.001,22.443]],c:!0}]},{t:131}],ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[32.612,22.693],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 1",np:2,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:1,k:[{i:{x:.71,y:1},o:{x:.29,y:0},n:"0p71_1_0p29_0",t:3.941,s:[{i:[[0,0],[-85.563,7.013]],o:[[0,0],[0,0]],v:[[-25.949,-37.171],[42.781,30.158]],c:!1}],e:[{i:[[0,0],[-29.879,-54.686]],o:[[0,0],[0,0]],v:[[-43.431,-19.215],[42.781,30.158]],c:!1}]},{i:{x:.71,y:1},o:{x:.29,y:0},n:"0p71_1_0p29_0",t:12.583,s:[{i:[[0,0],[-29.879,-54.686]],o:[[0,0],[0,0]],v:[[-43.431,-19.215],[42.781,30.158]],c:!1}],e:[{i:[[0,0],[-85.563,7.013]],o:[[0,0],[0,0]],v:[[-25.949,-37.171],[42.781,30.158]],c:!1}]},{i:{x:.833,y:1},o:{x:.167,y:0},n:"0p833_1_0p167_0",t:19.929,s:[{i:[[0,0],[-85.563,7.013]],o:[[0,0],[0,0]],v:[[-25.949,-37.171],[42.781,30.158]],c:!1}],e:[{i:[[0,0],[-85.563,7.013]],o:[[0,0],[0,0]],v:[[-25.949,-37.171],[42.781,30.158]],c:!1}]},{i:{x:.833,y:1},o:{x:.167,y:0},n:"0p833_1_0p167_0",t:119,s:[{i:[[0,0],[-85.563,7.013]],o:[[0,0],[0,0]],v:[[-25.949,-37.171],[42.781,30.158]],c:!1}],e:[{i:[[0,0],[-59.745,-32.57]],o:[[0,0],[0,0]],v:[[-24.145,-38.49],[42.781,30.158]],c:!1}]},{i:{x:.833,y:1},o:{x:.167,y:0},n:"0p833_1_0p167_0",t:125,s:[{i:[[0,0],[-59.745,-32.57]],o:[[0,0],[0,0]],v:[[-24.145,-38.49],[42.781,30.158]],c:!1}],e:[{i:[[0,0],[-85.563,7.013]],o:[[0,0],[0,0]],v:[[-25.949,-37.171],[42.781,30.158]],c:!1}]},{t:131}],ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[.6,.6,.6,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:6.312,ix:5},lc:1,lj:1,ml:10,ml2:{a:0,k:10,ix:8},nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[58.561,55.656],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 2",np:2,cix:2,ix:2,mn:"ADBE Vector Group",hd:!1}],ip:0,op:158,st:0,bm:0},{ddd:0,ind:26,ty:4,nm:"Surfboard",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:1,k:[{i:{x:[.102],y:[1]},o:{x:[.319],y:[0]},n:["0p102_1_0p319_0"],t:-47,s:[-5],e:[-3.5]},{i:{x:[.755],y:[1]},o:{x:[.758],y:[0]},n:["0p755_1_0p758_0"],t:-31,s:[-3.5],e:[2.5]},{i:{x:[.59],y:[1]},o:{x:[.397],y:[0]},n:["0p59_1_0p397_0"],t:-13,s:[2.5],e:[-5]},{i:{x:[.102],y:[1]},o:{x:[.319],y:[0]},n:["0p102_1_0p319_0"],t:4,s:[-5],e:[-3.5]},{i:{x:[.755],y:[1]},o:{x:[.758],y:[0]},n:["0p755_1_0p758_0"],t:20,s:[-3.5],e:[2.5]},{i:{x:[.59],y:[1]},o:{x:[.397],y:[0]},n:["0p59_1_0p397_0"],t:38,s:[2.5],e:[-5]},{i:{x:[.102],y:[1]},o:{x:[.319],y:[0]},n:["0p102_1_0p319_0"],t:55,s:[-5],e:[-3.5]},{i:{x:[.755],y:[1]},o:{x:[.758],y:[0]},n:["0p755_1_0p758_0"],t:71,s:[-3.5],e:[2.5]},{i:{x:[.59],y:[1]},o:{x:[.397],y:[0]},n:["0p59_1_0p397_0"],t:89,s:[2.5],e:[-5]},{i:{x:[.102],y:[1]},o:{x:[.319],y:[0]},n:["0p102_1_0p319_0"],t:106,s:[-5],e:[-3.5]},{i:{x:[.755],y:[1]},o:{x:[.758],y:[0]},n:["0p755_1_0p758_0"],t:122,s:[-3.5],e:[2.5]},{i:{x:[.59],y:[1]},o:{x:[.397],y:[0]},n:["0p59_1_0p397_0"],t:140,s:[2.5],e:[-5]},{t:157}],ix:10},p:{s:!0,x:{a:1,k:[{i:{x:[.515],y:[.985]},o:{x:[.578],y:[-.007]},n:["0p515_0p985_0p578_-0p007"],t:0,s:[609],e:[625]},{i:{x:[.578],y:[1.003]},o:{x:[.438],y:[-.018]},n:["0p578_1p003_0p438_-0p018"],t:16,s:[625],e:[599]},{i:{x:[.76],y:[1]},o:{x:[.52],y:[-.01]},n:["0p76_1_0p52_-0p01"],t:34,s:[599],e:[609]},{i:{x:[.515],y:[.985]},o:{x:[.578],y:[-.007]},n:["0p515_0p985_0p578_-0p007"],t:51,s:[609],e:[625]},{i:{x:[.578],y:[1.003]},o:{x:[.438],y:[-.018]},n:["0p578_1p003_0p438_-0p018"],t:67,s:[625],e:[599]},{i:{x:[.76],y:[1]},o:{x:[.52],y:[-.01]},n:["0p76_1_0p52_-0p01"],t:85,s:[599],e:[609]},{i:{x:[.515],y:[.985]},o:{x:[.578],y:[-.007]},n:["0p515_0p985_0p578_-0p007"],t:102,s:[609],e:[625]},{i:{x:[.578],y:[1.003]},o:{x:[.438],y:[-.018]},n:["0p578_1p003_0p438_-0p018"],t:118,s:[625],e:[599]},{i:{x:[.76],y:[1]},o:{x:[.52],y:[-.01]},n:["0p76_1_0p52_-0p01"],t:136,s:[599],e:[609]},{i:{x:[.515],y:[.985]},o:{x:[.578],y:[-.007]},n:["0p515_0p985_0p578_-0p007"],t:153,s:[609],e:[625]},{i:{x:[.578],y:[1.003]},o:{x:[.438],y:[-.018]},n:["0p578_1p003_0p438_-0p018"],t:169,s:[625],e:[599]},{i:{x:[.76],y:[1]},o:{x:[.52],y:[-.01]},n:["0p76_1_0p52_-0p01"],t:187,s:[599],e:[609]},{t:204}],ix:3},y:{a:1,k:[{i:{x:[.59],y:[1]},o:{x:[.41],y:[0]},n:["0p59_1_0p41_0"],t:-54,s:[919],e:[921]},{i:{x:[.59],y:[1]},o:{x:[.619],y:[-.004]},n:["0p59_1_0p619_-0p004"],t:-38,s:[921],e:[905]},{i:{x:[.59],y:[1]},o:{x:[.41],y:[0]},n:["0p59_1_0p41_0"],t:-20,s:[905],e:[919]},{i:{x:[.59],y:[1]},o:{x:[.41],y:[0]},n:["0p59_1_0p41_0"],t:-3,s:[919],e:[921]},{i:{x:[.59],y:[1]},o:{x:[.619],y:[-.004]},n:["0p59_1_0p619_-0p004"],t:13,s:[921],e:[905]},{i:{x:[.59],y:[1]},o:{x:[.41],y:[0]},n:["0p59_1_0p41_0"],t:31,s:[905],e:[919]},{i:{x:[.59],y:[1]},o:{x:[.41],y:[0]},n:["0p59_1_0p41_0"],t:48,s:[919],e:[921]},{i:{x:[.59],y:[1]},o:{x:[.619],y:[-.004]},n:["0p59_1_0p619_-0p004"],t:64,s:[921],e:[905]},{i:{x:[.59],y:[1]},o:{x:[.41],y:[0]},n:["0p59_1_0p41_0"],t:82,s:[905],e:[919]},{i:{x:[.59],y:[1]},o:{x:[.41],y:[0]},n:["0p59_1_0p41_0"],t:99,s:[919],e:[921]},{i:{x:[.59],y:[1]},o:{x:[.619],y:[-.004]},n:["0p59_1_0p619_-0p004"],t:115,s:[921],e:[905]},{i:{x:[.59],y:[1]},o:{x:[.41],y:[0]},n:["0p59_1_0p41_0"],t:133,s:[905],e:[919]},{t:150}],ix:4}},a:{a:0,k:[-208,-2,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[0,0],[0,0],[-.402,-1.285],[-9.061,0],[0,0],[-2.728,8.713],[1.347,0]],o:[[0,0],[0,0],[-1.347,0],[2.728,8.713],[0,0],[9.061,0],[.402,-1.285],[0,0]],v:[[243,-9],[-243,-9],[-250.675,-9],[-252.593,-6.408],[-225,9],[225,9],[252.593,-6.408],[250.675,-9]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[.231372997808,.470587995941,.623528992896,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:0,ix:5},lc:1,lj:1,ml:4,ml2:{a:0,k:4,ix:8},nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[.827450980392,.090196078431,.098039215686,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Board",np:3,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[-1.152,-1.152],[0,0],[0,0],[0,11.45],[0,0]],o:[[0,0],[0,0],[11.45,0],[0,0],[0,0]],v:[[-9.79,-15.166],[-9.79,16.317],[-9.79,16.317],[10.942,-4.415],[10.942,-15.933]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[.231372997808,.470587995941,.623528992896,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:0,ix:5},lc:1,lj:1,ml:4,ml2:{a:0,k:4,ix:8},nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[.374678308824,.374678308824,.374678308824,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[-184,20],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"fin",np:3,cix:2,ix:2,mn:"ADBE Vector Group",hd:!1}],ip:0,op:158,st:0,bm:0},{ddd:0,ind:27,ty:0,nm:"wave",hd:!0,refId:"comp_1",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[-718,898,0],ix:2},a:{a:0,k:[1500,150,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,ef:[{ty:21,nm:"Fill",np:9,mn:"ADBE Fill",ix:1,en:1,ef:[{ty:10,nm:"Fill Mask",mn:"ADBE Fill-0001",ix:1,v:{a:0,k:0,ix:1}},{ty:7,nm:"All Masks",mn:"ADBE Fill-0007",ix:2,v:{a:0,k:0,ix:2}},{ty:2,nm:"Color",mn:"ADBE Fill-0002",ix:3,v:{a:0,k:[1,1,1,1],ix:3}},{ty:7,nm:"Invert",mn:"ADBE Fill-0006",ix:4,v:{a:0,k:0,ix:4}},{ty:0,nm:"Horizontal Feather",mn:"ADBE Fill-0003",ix:5,v:{a:0,k:0,ix:5}},{ty:0,nm:"Vertical Feather",mn:"ADBE Fill-0004",ix:6,v:{a:0,k:0,ix:6}},{ty:0,nm:"Opacity",mn:"ADBE Fill-0005",ix:7,v:{a:0,k:1,ix:7}}]}],w:3e3,h:300,ip:0,op:158,st:0,bm:0},{ddd:0,ind:28,ty:4,nm:"BKG Outlines",hd:!0,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[750,750,0],ix:2},a:{a:0,k:[400.25,400.25,0],ix:1},s:{a:0,k:[198,198,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[-400,400],[400,400],[400,-400],[-400,-400]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[.698000021542,.8,.917999985639,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[400.25,400.25],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 1",np:2,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:158,st:0,bm:0}]},{id:"comp_3",layers:[{ddd:0,ind:1,ty:4,nm:"C | back foot 3",parent:26,hd:!0,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:1,k:[{i:{x:.33,y:1},o:{x:.167,y:.149},n:"0p33_1_0p167_0p149",t:11,s:[-121.625,-17.669,0],e:[56.165,-578.212,0],to:[0,0,0],ti:[-200.736877441406,100.631172180176,0]},{i:{x:.15,y:1},o:{x:.167,y:.272},n:"0p15_1_0p167_0p272",t:19,s:[56.165,-578.212,0],e:[-10.043,-447.891,0],to:[-146.023529052734,19.4861755371094,0],ti:[0,0,0]},{i:{x:.79,y:1},o:{x:.167,y:0},n:"0p79_1_0p167_0",t:28,s:[-10.043,-447.891,0],e:[6.677,-403.261,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.79,y:1},o:{x:.21,y:0},n:"0p79_1_0p21_0",t:55,s:[6.677,-403.261,0],e:[-10.043,-447.891,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.623,y:1},o:{x:.211,y:0},n:"0p623_1_0p211_0",t:71,s:[-10.043,-447.891,0],e:[-22.04,-447.6,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.786,y:1},o:{x:.407,y:0},n:"0p786_1_0p407_0",t:86,s:[-22.04,-447.6,0],e:[-10.043,-447.891,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.79,y:1},o:{x:.21,y:0},n:"0p79_1_0p21_0",t:88.2,s:[-10.043,-447.891,0],e:[94.33,-513.39,0],to:[0,0,0],ti:[-78.377815246582,6.57929468154907,0]},{i:{x:.33,y:1},o:{x:.21,y:0},n:"0p33_1_0p21_0",t:93,s:[94.33,-513.39,0],e:[-121.625,-17.669,0],to:[-228.897232055664,32.4341163635254,0],ti:[0,0,0]},{t:100.2001953125}],ix:2},a:{a:0,k:[0,0,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,ef:[{ty:5,nm:"Controller",np:13,mn:"Pseudo/DUIK controller",ix:1,en:1,ef:[{ty:6,nm:"Icon",mn:"Pseudo/DUIK controller-0001",ix:1,v:0},{ty:2,nm:"Color",mn:"Pseudo/DUIK controller-0002",ix:2,v:{a:0,k:[.92549020052,.0941176489,.0941176489,1],ix:2}},{ty:3,nm:"Position",mn:"Pseudo/DUIK controller-0003",ix:3,v:{a:0,k:[0,0],ix:3}},{ty:0,nm:"Size",mn:"Pseudo/DUIK controller-0004",ix:4,v:{a:0,k:53,ix:4}},{ty:0,nm:"Orientation",mn:"Pseudo/DUIK controller-0005",ix:5,v:{a:0,k:0,ix:5}},{ty:0,nm:"Opacity",mn:"Pseudo/DUIK controller-0006",ix:6,v:{a:0,k:100,ix:6}},{ty:6,nm:"",mn:"Pseudo/DUIK controller-0007",ix:7,v:0},{ty:6,nm:"Anchor",mn:"Pseudo/DUIK controller-0008",ix:8,v:0},{ty:2,nm:"Color",mn:"Pseudo/DUIK controller-0009",ix:9,v:{a:0,k:[0,0,0,1],ix:9}},{ty:0,nm:"Size",mn:"Pseudo/DUIK controller-0010",ix:10,v:{a:0,k:53,ix:10}},{ty:6,nm:"",mn:"Pseudo/DUIK controller-0011",ix:11,v:0}]},{ty:5,nm:"IK | back foot",np:50,mn:"Pseudo/DUIK 2layer ik",ix:2,en:1,ef:[{ty:7,nm:"IK",mn:"Pseudo/DUIK 2layer ik-0001",ix:1,v:{a:0,k:1,ix:1}},{ty:7,nm:"Reverse",mn:"Pseudo/DUIK 2layer ik-0002",ix:2,v:{a:0,k:0,ix:2}},{ty:6,nm:"FK",mn:"Pseudo/DUIK 2layer ik-0003",ix:3,v:0},{ty:7,nm:"Follow through & Overlap",mn:"Pseudo/DUIK 2layer ik-0004",ix:4,v:{a:0,k:0,ix:4}},{ty:6,nm:"Follow through & Overlap",mn:"Pseudo/DUIK 2layer ik-0005",ix:5,v:0},{ty:0,nm:"FK",mn:"Pseudo/DUIK 2layer ik-0006",ix:6,v:{a:0,k:0,ix:6}},{ty:0,nm:"Flexibility",mn:"Pseudo/DUIK 2layer ik-0007",ix:7,v:{a:0,k:100,ix:7}},{ty:0,nm:"Resistance",mn:"Pseudo/DUIK 2layer ik-0008",ix:8,v:{a:0,k:10,ix:8}},{ty:6,nm:"",mn:"Pseudo/DUIK 2layer ik-0009",ix:9,v:0},{ty:6,nm:"Individual controls",mn:"Pseudo/DUIK 2layer ik-0010",ix:10,v:0},{ty:0,nm:"Upper",mn:"Pseudo/DUIK 2layer ik-0011",ix:11,v:{a:0,k:0,ix:11}},{ty:0,nm:"Lower",mn:"Pseudo/DUIK 2layer ik-0012",ix:12,v:{a:0,k:0,ix:12}},{ty:0,nm:"Goal",mn:"Pseudo/DUIK 2layer ik-0013",ix:13,v:{a:0,k:0,ix:13}},{ty:6,nm:"",mn:"Pseudo/DUIK 2layer ik-0014",ix:14,v:0},{ty:7,nm:"Parent rotation",mn:"Pseudo/DUIK 2layer ik-0015",ix:15,v:{a:0,k:1,ix:15}},{ty:6,nm:"",mn:"Pseudo/DUIK 2layer ik-0016",ix:16,v:0},{ty:6,nm:"Stretch",mn:"Pseudo/DUIK 2layer ik-0017",ix:17,v:0},{ty:7,nm:"Auto-Stretch",mn:"Pseudo/DUIK 2layer ik-0018",ix:18,v:{a:0,k:1,ix:18}},{ty:0,nm:"Stretch",mn:"Pseudo/DUIK 2layer ik-0019",ix:19,v:{a:0,k:0,ix:19}},{ty:0,nm:"Auto-Shrink",mn:"Pseudo/DUIK 2layer ik-0020",ix:20,v:{a:0,k:0,ix:20}},{ty:6,nm:"",mn:"Pseudo/DUIK 2layer ik-0021",ix:21,v:0},{ty:6,nm:"Advanced",mn:"Pseudo/DUIK 2layer ik-0022",ix:22,v:0},{ty:0,nm:"Full rotation limit",mn:"Pseudo/DUIK 2layer ik-0023",ix:23,v:{a:0,k:-180,ix:23}},{ty:6,nm:"",mn:"Pseudo/DUIK 2layer ik-0024",ix:24,v:0},{ty:6,nm:"Data",mn:"Pseudo/DUIK 2layer ik-0025",ix:25,v:0},{ty:6,nm:"Layers",mn:"Pseudo/DUIK 2layer ik-0026",ix:26,v:0},{ty:10,nm:"Upper",mn:"Pseudo/DUIK 2layer ik-0027",ix:27,v:{a:0,k:2,ix:27}},{ty:10,nm:"Lower",mn:"Pseudo/DUIK 2layer ik-0028",ix:28,v:{a:0,k:4,ix:28}},{ty:10,nm:"Goal",mn:"Pseudo/DUIK 2layer ik-0029",ix:29,v:{a:0,k:3,ix:29}},{ty:6,nm:"",mn:"Pseudo/DUIK 2layer ik-0030",ix:30,v:0},{ty:6,nm:"Stretch data",mn:"Pseudo/DUIK 2layer ik-0031",ix:31,v:0},{ty:0,nm:"Upper stretch",mn:"Pseudo/DUIK 2layer ik-0032",ix:32,v:{a:0,k:0,ix:32,x:`var $bm_rt;
var newLength;
var fx = effect('IK | back foot');
var layer1 = null;
var layer2 = null;
var result = 0;
try {
    layer1 = fx(27);
    layer2 = fx(28);
} catch (e) {
}
if (layer1 != null) {
    newLength = length(layer1.toWorld(layer1.anchorPoint), layer2.toWorld(layer2.anchorPoint));
    result = sub(newLength, fx(40).value);
}
$bm_rt = result;`}},{ty:0,nm:"Upper scale",mn:"Pseudo/DUIK 2layer ik-0033",ix:33,v:{a:0,k:100,ix:33,x:`var $bm_rt;
var fx = effect('IK | back foot');
if (fx(40).value > 0)
    $bm_rt = mul(div(sum(fx(32).value, fx(40).value), fx(40).value), 100);
else
    $bm_rt = 100;`}},{ty:0,nm:"Lower stretch",mn:"Pseudo/DUIK 2layer ik-0034",ix:34,v:{a:0,k:0,ix:34,x:`var $bm_rt;
var newLength;
var fx = effect('IK | back foot');
var layer2 = null;
var result = 0;
try {
    layer2 = fx(28);
} catch (e) {
}
if (layer2 != null) {
    newLength = length(layer2.toWorld(fx(36).value), layer2.toWorld(layer2.anchorPoint));
    result = sub(newLength, fx(41).value);
}
$bm_rt = result;`}},{ty:0,nm:"Lower scale",mn:"Pseudo/DUIK 2layer ik-0035",ix:35,v:{a:0,k:100,ix:35,x:`var $bm_rt;
var fx = effect('IK | back foot');
if (fx(41).value > 0)
    $bm_rt = mul(div(sum(fx(34).value, fx(41).value), fx(41).value), 100);
else
    $bm_rt = 100;`}},{ty:3,nm:"Goal position",mn:"Pseudo/DUIK 2layer ik-0036",ix:36,v:{a:0,k:[-232.536,261.725],ix:36,x:`var $bm_rt;
var fx, layer1, layer1, stretch, auto, IK, shrinkVal, dist1, dist2, IKLength, IKStretched, boneStretch, proportion, posC, posR, distC, shrinkMax, shrink, shrink, boneStretch, boneStretch, boneStretch, coef, coef, coef, coef;
var result = value;
fx = effect('IK | back foot');
layer1 = null;
try {
    layer1 = fx(27);
} catch (e) {
}
if (layer1 != null) {
    stretch = fx(19);
    auto = fx(18).value;
    IK = fx(1).value;
    shrinkVal = div(fx(20).value, 100);
    function getWorldPos(L) {
        return L.toWorld(L.anchorPoint);
    }
    dist1 = fx(40).value;
    dist2 = fx(41).value;
    IKLength = sum(dist1, dist2);
    IKStretched = sum(IKLength, stretch);
    boneStretch = 0;
    proportion = div(dist2, IKLength);
    posC = toWorld(anchorPoint);
    posR = getWorldPos(layer1);
    distC = length(posC, posR);
    shrinkMax = mul(IKLength, shrinkVal);
    shrink = 0;
    if (distC < IKStretched && IK)
        shrink = sub(1, div(distC, IKStretched));
    boneStretch = sub(boneStretch, mul(easeOut(shrink, 0, shrinkMax), proportion));
    if (distC > IKStretched && auto && IK)
        boneStretch = sum(boneStretch, mul(sub(distC, IKLength), proportion));
    else
        boneStretch = sum(boneStretch, mul(stretch, proportion));
    coef = 1;
    dist2 != 0 ? coef = div(sum(dist2, boneStretch), dist2) : coef = 1;
    result = sum(mul(sub([
        -124.019342278813,
        139.586542583283
    ], [
        -162,
        84,
        0
    ]), coef), [
        -162,
        84,
        0
    ]);
}
$bm_rt = result;`}},{ty:3,nm:"Goal world position",mn:"Pseudo/DUIK 2layer ik-0037",ix:37,v:{a:0,k:[750,750],ix:37,x:`var $bm_rt;
var fx = effect('IK | back foot');
var layer2 = null;
var result = [
        0,
        0
    ];
try {
    layer2 = fx(28);
} catch (e) {
}
if (layer2 != null) {
    result = layer2.toWorld(fx(36).value);
}
$bm_rt = result;`}},{ty:6,nm:"",mn:"Pseudo/DUIK 2layer ik-0038",ix:38,v:0},{ty:6,nm:"Lengths",mn:"Pseudo/DUIK 2layer ik-0039",ix:39,v:0},{ty:0,nm:"Upper length",mn:"Pseudo/DUIK 2layer ik-0040",ix:40,v:{a:0,k:76.062,ix:40}},{ty:0,nm:"Lower length",mn:"Pseudo/DUIK 2layer ik-0041",ix:41,v:{a:0,k:67.323,ix:41}},{ty:0,nm:"IK length",mn:"Pseudo/DUIK 2layer ik-0042",ix:42,v:{a:0,k:0,ix:42,x:`var $bm_rt;
var fx = effect('IK | back foot');
var result = sum(fx(40).value, fx(41).value);
var goalPos = fx(37).value;
var layer1 = null;
try {
    layer1 = fx(27);
} catch (e) {
}
if (layer1 != null) {
    result = length(layer1.toWorld(layer1.anchorPoint), goalPos);
}
$bm_rt = result;`}},{ty:6,nm:"",mn:"Pseudo/DUIK 2layer ik-0043",ix:43,v:0},{ty:7,nm:"Straight",mn:"Pseudo/DUIK 2layer ik-0044",ix:44,v:{a:0,k:0,ix:44,x:`var $bm_rt;
var fx;
fx = effect('IK | back foot');
var layer1 = null;
var layer2 = null;
var result = false;
try {
    layer1 = fx(27);
    layer2 = fx(28);
} catch (e) {
}
if (layer1 != null) {
    var a = layer1.toWorld(layer1.anchorPoint);
    var b = layer2.toWorld(layer2.anchorPoint);
    var c = layer2.toWorld(fx(36).value);
    result = Math.abs(a[0] * (b[1] - c[1]) + b[0] * (c[1] - a[1]) + c[0] * (a[1] - b[1])) < 1000;
}
$bm_rt = result;`}},{ty:6,nm:"",mn:"Pseudo/DUIK 2layer ik-0045",ix:45,v:0},{ty:6,nm:"Display",mn:"Pseudo/DUIK 2layer ik-0046",ix:46,v:0},{ty:7,nm:"Draw guides",mn:"Pseudo/DUIK 2layer ik-0047",ix:47,v:{a:0,k:0,ix:47}},{ty:6,nm:"",mn:"Pseudo/DUIK 2layer ik-0048",ix:48,v:0}]}],shapes:[{ty:"gr",it:[{d:1,ty:"el",s:{a:0,k:[2,2],ix:2},p:{a:0,k:[0,0],ix:3},nm:"Ellipse Path 1",mn:"ADBE Vector Shape - Ellipse",hd:!1},{d:1,ty:"el",s:{a:0,k:[10,10],ix:2},p:{a:0,k:[0,0],ix:3},nm:"Ellipse Path 2",mn:"ADBE Vector Shape - Ellipse",hd:!1},{ty:"sr",sy:1,d:1,pt:{a:0,k:4,ix:3},p:{a:0,k:[0,0],ix:4},r:{a:0,k:0,ix:5},ir:{a:0,k:0,ix:6},is:{a:0,k:0,ix:8},or:{a:0,k:10,ix:7},os:{a:0,k:0,ix:9},ix:3,nm:"Polystar Path 1",mn:"ADBE Vector Shape - Star",hd:!1},{ty:"st",c:{a:0,k:[1,1,1,1],ix:3,x:`var $bm_rt;
$bm_rt = effect('Controller')(9);`},o:{a:0,k:100,ix:4},w:{a:0,k:2,ix:5,x:`var $bm_rt;
$bm_rt = div(100, content('Anchor').transform.scale[0]);`},lc:2,lj:1,ml:4,ml2:{a:0,k:4,ix:8},nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3,x:`var $bm_rt;
$bm_rt = [
    effect('Controller')(10),
    effect('Controller')(10)
];`},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Anchor",np:4,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[-6.215,0],[0,6.215],[6.215,0],[0,0]],o:[[0,6.215],[6.215,0],[0,-6.216],[0,0],[0,0]],v:[[-11.067,.048],[.187,11.302],[11.442,.048],[.187,-11.206],[6.94,-17.115]],c:!1},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ind:1,ty:"sh",ix:2,ks:{a:0,k:{i:[[0,0],[0,0]],o:[[0,0],[0,0]],v:[[.062,-7.546],[.062,7.546]],c:!1},ix:2},nm:"Path 2",mn:"ADBE Vector Shape - Group",hd:!1},{ind:2,ty:"sh",ix:3,ks:{a:0,k:{i:[[0,0],[0,0]],o:[[0,0],[0,0]],v:[[7.546,0],[-7.546,0]],c:!1},ix:2},nm:"Path 3",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[.517647087574,.835294127464,.980392158031,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:1.5,ix:5},lc:2,lj:1,ml:4,ml2:{a:0,k:4,ix:8},nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2,x:`var $bm_rt;
$bm_rt = effect('Controller')(3);`},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3,x:`var $bm_rt;
$bm_rt = [
    effect('Controller')(4) * 2,
    effect('Controller')(4) * 2
];`},r:{a:0,k:0,ix:6,x:`var $bm_rt;
$bm_rt = effect('Controller')(5);`},o:{a:0,k:100,ix:7,x:`var $bm_rt;
$bm_rt = effect('Controller')(6);`},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Icon",np:4,cix:2,ix:2,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[0,0]],o:[[0,0],[0,0]],v:[[-8,16],[8,16]],c:!1},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[1,1,1,1],ix:3,x:`var $bm_rt;
$bm_rt = sub(effect('Controller')(2), [
    0.2,
    0.2,
    0.2,
    0
]);`},o:{a:0,k:100,ix:4,x:`var $bm_rt;
var fx = effect('IK | back foot');
if (fx(47).value)
    $bm_rt = mul(fx(44).value, 100);
else
    $bm_rt = 0;`},w:{a:0,k:2,ix:5},lc:2,lj:1,ml:4,ml2:{a:0,k:4,ix:8},nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2,x:`var $bm_rt;
$bm_rt = effect('Controller')(3);`},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3,x:`var $bm_rt;
$bm_rt = [
    effect('Controller')(4) * 2,
    effect('Controller')(4) * 2
];`},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7,x:`var $bm_rt;
$bm_rt = effect('Controller')(6);`},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"IK",np:2,cix:2,ix:3,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[],o:[],v:[],c:!1},ix:2,x:`var $bm_rt;
if (active) {
    var fx = effect('IK | back foot');
    var layer1 = null;
    var result = [[
                0,
                0
            ]];
    if (fx(1).value && fx(47).value) {
        try {
            layer1 = fx(27);
        } catch (e) {
        }
        if (layer1 != null) {
            var l = layer1.toWorld(layer1.anchorPoint);
            l = fromWorld(l);
            result = [
                l,
                [
                    0,
                    0
                ]
            ];
        }
    }
    $bm_rt = createPath(result, [], [], false);
} else
    $bm_rt = value;`},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[1,1,1,1],ix:3,x:`var $bm_rt;
$bm_rt = sub(effect('Controller')(2), [
    0.2,
    0.2,
    0.2,
    0
]);`},o:{a:0,k:100,ix:4},w:{a:0,k:2,ix:5},lc:2,lj:1,ml:4,ml2:{a:0,k:4,ix:8},d:[{n:"d",nm:"dash",v:{a:0,k:5,ix:1}}],nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"IK Line",np:2,cix:2,ix:4,mn:"ADBE Vector Group",hd:!1}],ip:-1,op:145,st:0,bm:0},{ddd:0,ind:2,ty:4,nm:"Front Leg Outlines 2",parent:17,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10,x:`var $bm_rt;
var IKFK;
var controller = null;
var result = value;
try {
    controller = effect('IK 2')(1);
} catch (e) {
}
if (controller != null) {
    var fx = controller.effect('IK | back foot');
    IKFK = fx(1).value;
    function ik() {
        var layer1, layer2, endPos, limit, cw, A, C, B, E, a, b, c, x, alpha, D, delta, V, adj1, IK, IK;
        layer1 = thisLayer;
        layer2 = null;
        try {
            layer2 = fx(28);
        } catch (e) {
            return value;
        }
        if (layer2 != null) {
            endPos = fx(36).value;
            limit = fx(23).value;
            cw = fx(2).value;
            function getWorldPos(L) {
                return L.toWorld(L.anchorPoint);
            }
            A = getWorldPos(layer1);
            C = layer2.toWorld(endPos);
            B = getWorldPos(layer2);
            E = getWorldPos(controller);
            a = length(B, C);
            b = length(E, A);
            c = length(A, B);
            x = div(sub(sum(mul(b, b), mul(c, c)), mul(a, a)), mul(2, b));
            alpha = Math.acos(clamp(div(x, c), -1, 1));
            D = sub(E, A);
            delta = Math.atan2(D[1], D[0]);
            result = radiansToDegrees(sub(delta, mul(cw ? 1 : -1, alpha)));
            V = sub(B, A);
            adj1 = radiansToDegrees(Math.atan2(V[1], V[0]));
            IK = sum(sub(result, adj1), value);
            if (IK < limit)
                IK = sum(IK, 360);
            return IK;
        }
    }
    function fk() {
        var follow = fx(15).value;
        var FK = sum(fx(11).value, fx(6).value);
        var p = thisLayer;
        if (!follow) {
            while (p.hasParent) {
                p = p.parent;
                FK = sub(FK, p.rotation.value);
            }
        }
        return FK;
    }
    result = IKFK ? ik() : fk();
}
$bm_rt = result;`},p:{a:1,k:[{i:{x:.33,y:1},o:{x:.167,y:.122},n:"0p33_1_0p167_0p122",t:11,s:[71.385,63.51,0],e:[29.89,51.21,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.15,y:1},o:{x:.167,y:.206},n:"0p15_1_0p167_0p206",t:19,s:[29.89,51.21,0],e:[71.385,63.51,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.79,y:1},o:{x:.167,y:0},n:"0p79_1_0p167_0",t:28,s:[71.385,63.51,0],e:[61.97,53.952,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.79,y:1},o:{x:.21,y:0},n:"0p79_1_0p21_0",t:51,s:[61.97,53.952,0],e:[71.385,63.51,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.79,y:.79},o:{x:.21,y:.21},n:"0p79_0p79_0p21_0p21",t:67,s:[71.385,63.51,0],e:[71.385,63.51,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.79,y:.79},o:{x:.21,y:.21},n:"0p79_0p79_0p21_0p21",t:88.2,s:[71.385,63.51,0],e:[71.385,63.51,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.33,y:.33},o:{x:.21,y:.21},n:"0p33_0p33_0p21_0p21",t:93,s:[71.385,63.51,0],e:[71.385,63.51,0],to:[0,0,0],ti:[0,0,0]},{t:100.2001953125}],ix:2},a:{a:0,k:[23.424,10.167,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,ef:[{ty:5,nm:"IK",np:3,mn:"Pseudo/DUIK ik",ix:1,en:1,ef:[{ty:10,nm:"Controller",mn:"Pseudo/DUIK ik-0001",ix:1,v:{a:0,k:5,ix:1}}]},{ty:5,nm:"IK 2",np:3,mn:"Pseudo/DUIK ik",ix:2,en:1,ef:[{ty:10,nm:"Controller",mn:"Pseudo/DUIK ik-0001",ix:1,v:{a:0,k:1,ix:1}}]}],shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[3.87,0],[0,0],[0,-3.78],[0,0],[-4.555,3.138],[-.589,17.084]],o:[[0,0],[-3.78,0],[0,0],[0,5.531],[30.311,-20.881],[.134,-3.868]],v:[[16.198,-45.917],[-16.328,-45.917],[-23.173,-39.072],[-23.173,37.158],[-12.41,42.779],[23.039,-38.849]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[23.423,46.167],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 1",np:2,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:-1,op:145,st:0,bm:0},{ddd:0,ind:3,ty:4,nm:"back foot 2",parent:4,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:-8,ix:10,x:`var $bm_rt;
var ctrl = null;
try {
    $bm_rt = ctrl = effect('IK 2')(1);
} catch (e) {
}
;
if (ctrl != null) {
    var fx = ctrl.effect('IK | back foot');
    var ikfk = fx(1).value;
    function ik() {
        var IK = ctrl.rotation.value;
        var layer = thisLayer;
        while (layer.hasParent) {
            layer = layer.parent;
            IK = sub(IK, layer.rotation);
        }
        return IK;
    }
    function fk() {
        var FK = value;
        var parentRot = parent.transform.rotation;
        var delay = fx(8).value;
        var amp = fx(7).value;
        var ftEnabled = fx(4).value;
        if (!ftEnabled) {
            amp = 0;
            delay = 0;
        } else {
            delay = div(delay, 100);
            amp = div(amp, 100);
        }
        FK = parentRot.valueAtTime(sub(time, delay));
        FK = mul(FK, amp);
        FK = sub(sum(sum(FK, value), fx(13)), parentRot.valueAtTime(0));
        return FK;
    }
    $bm_rt = ikfk ? ik() : fk();
} else
    $bm_rt = value;`},p:{a:0,k:[-124.019,139.587,0],ix:2,x:`var $bm_rt;
var ctrl = null;
var result = value;
try {
    ctrl = effect('IK 2')(1);
} catch (e) {
    value;
}
;
if (ctrl != null) {
    result = ctrl.effect('IK | back foot')(36).value;
}
$bm_rt = result;`},a:{a:0,k:[-275.348,161.652,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,ef:[{ty:5,nm:"IK",np:3,mn:"Pseudo/DUIK ik",ix:1,en:1,ef:[{ty:10,nm:"Controller",mn:"Pseudo/DUIK ik-0001",ix:1,v:{a:0,k:5,ix:1}}]},{ty:5,nm:"IK 2",np:3,mn:"Pseudo/DUIK ik",ix:2,en:1,ef:[{ty:10,nm:"Controller",mn:"Pseudo/DUIK ik-0001",ix:1,v:{a:0,k:1,ix:1}}]}],shapes:[{ty:"gr",it:[{d:1,ty:"el",s:{a:0,k:[43.305,43.305],ix:2},p:{a:0,k:[0,0],ix:3},nm:"Ellipse Path 1",mn:"ADBE Vector Shape - Ellipse",hd:!1},{ty:"st",c:{a:0,k:[.6,.6,.6,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:0,ix:5},lc:1,lj:1,ml:4,ml2:{a:0,k:4,ix:8},nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[-275.348,161.652],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[93.147,93.147],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Ellipse 1",np:3,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:145,st:0,bm:0},{ddd:0,ind:4,ty:4,nm:"leg 2",parent:2,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:8,ix:10,x:`var $bm_rt;
var IKFK, layer1, layer2;
var controller = null;
var result = value;
try {
    controller = effect('IK 2')(1);
} catch (e) {
}
if (controller != null) {
    var fx = controller.effect('IK | back foot');
    IKFK = fx(1).value;
    layer1 = null;
    layer2 = thisLayer;
    try {
        layer1 = fx(27);
    } catch (e) {
    }
    if (layer1 != null) {
        function ik() {
            var endPos, cw, A, B, C, E, a, b, c, x, alpha, y, gamma, V1, adj1, V2, adj2, IK;
            endPos = fx(36).value;
            cw = fx(2).value;
            function getWorldPos(L) {
                return L.toWorld(L.anchorPoint);
            }
            A = getWorldPos(layer1);
            B = getWorldPos(layer2);
            C = layer2.toWorld(endPos);
            E = getWorldPos(controller);
            a = length(B, C);
            b = length(E, A);
            c = length(A, B);
            x = div(sub(sum(mul(b, b), mul(c, c)), mul(a, a)), mul(2, b));
            alpha = Math.acos(clamp(div(x, c), -1, 1));
            y = sub(b, x);
            gamma = Math.acos(clamp(div(y, a), -1, 1));
            result = mul(cw ? 1 : -1, radiansToDegrees(sum(gamma, alpha)));
            V1 = sub(B, A);
            adj1 = radiansToDegrees(Math.atan2(V1[1], V1[0]));
            V2 = sub(C, B);
            adj2 = radiansToDegrees(Math.atan2(V2[1], V2[0]));
            IK = sum(sub(sum(result, adj1), adj2), value);
            return IK;
        }
        function fk() {
            var FK;
            var ctrlRot = fx(6);
            var delay = fx(8).value;
            var amp = fx(7).value;
            var follow = fx(15).value;
            var ftEnabled = fx(4).value;
            if (!ftEnabled) {
                amp = 0;
                delay = 0;
            } else {
                delay = div(delay, 100);
                amp = div(amp, 100);
            }
            FK = ctrlRot.valueAtTime(sub(time, delay));
            if (follow && hasParent) {
                var cP = layer1;
                while (cP.hasParent) {
                    cP = cP.parent;
                    FK = sub(FK, sub(cP.rotation.value, cP.rotation.valueAtTime(sub(time, delay))));
                }
            }
            FK = sub(FK, ctrlRot.value);
            FK = mul(FK, amp);
            FK = sub(FK, mul(ctrlRot.velocity, div(delay, 5)));
            FK = sum(FK, fx(12).value);
            return FK;
        }
        result = IKFK ? ik() : fk();
    }
}
$bm_rt = result;`},p:{a:0,k:[6.809,84.392,0],ix:2,x:`var $bm_rt;
var fx, layer1, stretch, auto, IK, shrinkVal, dist1, dist2, IKLength, IKStretched, boneStretch, proportion, posC, posR, distC, shrinkMax, shrink, shrink, boneStretch, boneStretch, boneStretch, coef, coef, coef, coef;
var ctrl = null;
var result = value;
try {
    ctrl = effect('IK 2')(1);
} catch (e) {
    value;
}
;
if (ctrl != null) {
    fx = ctrl.effect('IK | back foot');
    layer1 = null;
    result = [
        211,
        25
    ];
    try {
        layer1 = fx(27);
    } catch (e) {
    }
    if (layer1 != null) {
        stretch = fx(19).value;
        auto = fx(18).value;
        IK = fx(1).value;
        shrinkVal = div(fx(20).value, 100);
        function getWorldPos(L) {
            return L.toWorld(L.anchorPoint);
        }
        dist1 = fx(40).value;
        dist2 = fx(41).value;
        IKLength = sum(dist1, dist2);
        IKStretched = sum(IKLength, stretch);
        boneStretch = 0;
        proportion = div(dist1, IKLength);
        posC = getWorldPos(ctrl);
        posR = getWorldPos(layer1);
        distC = length(posC, posR);
        shrinkMax = mul(IKLength, shrinkVal);
        shrink = 0;
        if (distC < IKStretched && IK)
            shrink = sub(1, div(distC, IKStretched));
        boneStretch = sub(boneStretch, mul(easeOut(shrink, 0, shrinkMax), proportion));
        if (distC > IKStretched && auto && IK)
            boneStretch = sum(boneStretch, mul(sub(distC, IKLength), proportion));
        else
            boneStretch = sum(boneStretch, mul(stretch, proportion));
        coef = 1;
        dist1 != 0 ? coef = div(sum(dist1, boneStretch), dist1) : coef = 1;
        result = sum(mul(sub([
            6.80930328369141,
            84.3920974731445,
            0
        ], [
            23.4235000610352,
            10.1669998168945,
            0
        ]), coef), [
            23.4235000610352,
            10.1669998168945,
            0
        ]);
    }
}
$bm_rt = result;`},a:{a:0,k:[-162,84,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,ef:[{ty:5,nm:"IK",np:3,mn:"Pseudo/DUIK ik",ix:1,en:1,ef:[{ty:10,nm:"Controller",mn:"Pseudo/DUIK ik-0001",ix:1,v:{a:0,k:5,ix:1}}]},{ty:5,nm:"IK 2",np:3,mn:"Pseudo/DUIK ik",ix:2,en:1,ef:[{ty:10,nm:"Controller",mn:"Pseudo/DUIK ik-0001",ix:1,v:{a:0,k:1,ix:1}}]}],shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[0,0]],o:[[0,0],[0,0]],v:[[-162,84],[-123,150]],c:!1},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[.6,.6,.6,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:10,ix:5},lc:2,lj:1,ml:4,ml2:{a:0,k:4,ix:8},nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Shape 1",np:3,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:145,st:0,bm:0},{ddd:0,ind:5,ty:4,nm:"C | back foot 2",parent:26,hd:!0,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:1,k:[{i:{x:.33,y:1},o:{x:.167,y:.109},n:"0p33_1_0p167_0p109",t:10,s:[-163.848,-17.348,0],e:[178.647,-555.607,0],to:[0,0,0],ti:[-808.170104980469,.32668685913086,0]},{i:{x:.15,y:1},o:{x:.167,y:.25},n:"0p15_1_0p167_0p25",t:18,s:[178.647,-555.607,0],e:[58.423,-524.894,0],to:[-3.61699843406677,1.60178482532501,0],ti:[0,0,0]},{i:{x:.79,y:1},o:{x:.167,y:0},n:"0p79_1_0p167_0",t:27,s:[58.423,-524.894,0],e:[65.149,-503.769,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.79,y:1},o:{x:.21,y:0},n:"0p79_1_0p21_0",t:55,s:[65.149,-503.769,0],e:[58.423,-524.894,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.621,y:1},o:{x:.213,y:0},n:"0p621_1_0p213_0",t:71,s:[58.423,-524.894,0],e:[40.428,-524.457,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.788,y:1},o:{x:.406,y:0},n:"0p788_1_0p406_0",t:84,s:[40.428,-524.457,0],e:[58.423,-524.894,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.79,y:1},o:{x:.21,y:0},n:"0p79_1_0p21_0",t:89,s:[58.423,-524.894,0],e:[174.518,-585.639,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.33,y:1},o:{x:.21,y:0},n:"0p33_1_0p21_0",t:93.8,s:[174.518,-585.639,0],e:[-163.848,-17.348,0],to:[0,0,0],ti:[-274.685913085938,-533.772521972656,0]},{t:101}],ix:2},a:{a:0,k:[0,0,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,ef:[{ty:5,nm:"Controller",np:13,mn:"Pseudo/DUIK controller",ix:1,en:1,ef:[{ty:6,nm:"Icon",mn:"Pseudo/DUIK controller-0001",ix:1,v:0},{ty:2,nm:"Color",mn:"Pseudo/DUIK controller-0002",ix:2,v:{a:0,k:[.92549020052,.0941176489,.0941176489,1],ix:2}},{ty:3,nm:"Position",mn:"Pseudo/DUIK controller-0003",ix:3,v:{a:0,k:[0,0],ix:3}},{ty:0,nm:"Size",mn:"Pseudo/DUIK controller-0004",ix:4,v:{a:0,k:53,ix:4}},{ty:0,nm:"Orientation",mn:"Pseudo/DUIK controller-0005",ix:5,v:{a:0,k:0,ix:5}},{ty:0,nm:"Opacity",mn:"Pseudo/DUIK controller-0006",ix:6,v:{a:0,k:100,ix:6}},{ty:6,nm:"",mn:"Pseudo/DUIK controller-0007",ix:7,v:0},{ty:6,nm:"Anchor",mn:"Pseudo/DUIK controller-0008",ix:8,v:0},{ty:2,nm:"Color",mn:"Pseudo/DUIK controller-0009",ix:9,v:{a:0,k:[0,0,0,1],ix:9}},{ty:0,nm:"Size",mn:"Pseudo/DUIK controller-0010",ix:10,v:{a:0,k:53,ix:10}},{ty:6,nm:"",mn:"Pseudo/DUIK controller-0011",ix:11,v:0}]},{ty:5,nm:"IK | back foot",np:50,mn:"Pseudo/DUIK 2layer ik",ix:2,en:1,ef:[{ty:7,nm:"IK",mn:"Pseudo/DUIK 2layer ik-0001",ix:1,v:{a:0,k:1,ix:1}},{ty:7,nm:"Reverse",mn:"Pseudo/DUIK 2layer ik-0002",ix:2,v:{a:0,k:0,ix:2}},{ty:6,nm:"FK",mn:"Pseudo/DUIK 2layer ik-0003",ix:3,v:0},{ty:7,nm:"Follow through & Overlap",mn:"Pseudo/DUIK 2layer ik-0004",ix:4,v:{a:0,k:0,ix:4}},{ty:6,nm:"Follow through & Overlap",mn:"Pseudo/DUIK 2layer ik-0005",ix:5,v:0},{ty:0,nm:"FK",mn:"Pseudo/DUIK 2layer ik-0006",ix:6,v:{a:0,k:0,ix:6}},{ty:0,nm:"Flexibility",mn:"Pseudo/DUIK 2layer ik-0007",ix:7,v:{a:0,k:100,ix:7}},{ty:0,nm:"Resistance",mn:"Pseudo/DUIK 2layer ik-0008",ix:8,v:{a:0,k:10,ix:8}},{ty:6,nm:"",mn:"Pseudo/DUIK 2layer ik-0009",ix:9,v:0},{ty:6,nm:"Individual controls",mn:"Pseudo/DUIK 2layer ik-0010",ix:10,v:0},{ty:0,nm:"Upper",mn:"Pseudo/DUIK 2layer ik-0011",ix:11,v:{a:0,k:0,ix:11}},{ty:0,nm:"Lower",mn:"Pseudo/DUIK 2layer ik-0012",ix:12,v:{a:0,k:0,ix:12}},{ty:0,nm:"Goal",mn:"Pseudo/DUIK 2layer ik-0013",ix:13,v:{a:0,k:0,ix:13}},{ty:6,nm:"",mn:"Pseudo/DUIK 2layer ik-0014",ix:14,v:0},{ty:7,nm:"Parent rotation",mn:"Pseudo/DUIK 2layer ik-0015",ix:15,v:{a:0,k:1,ix:15}},{ty:6,nm:"",mn:"Pseudo/DUIK 2layer ik-0016",ix:16,v:0},{ty:6,nm:"Stretch",mn:"Pseudo/DUIK 2layer ik-0017",ix:17,v:0},{ty:7,nm:"Auto-Stretch",mn:"Pseudo/DUIK 2layer ik-0018",ix:18,v:{a:0,k:1,ix:18}},{ty:0,nm:"Stretch",mn:"Pseudo/DUIK 2layer ik-0019",ix:19,v:{a:0,k:0,ix:19}},{ty:0,nm:"Auto-Shrink",mn:"Pseudo/DUIK 2layer ik-0020",ix:20,v:{a:0,k:0,ix:20}},{ty:6,nm:"",mn:"Pseudo/DUIK 2layer ik-0021",ix:21,v:0},{ty:6,nm:"Advanced",mn:"Pseudo/DUIK 2layer ik-0022",ix:22,v:0},{ty:0,nm:"Full rotation limit",mn:"Pseudo/DUIK 2layer ik-0023",ix:23,v:{a:0,k:-180,ix:23}},{ty:6,nm:"",mn:"Pseudo/DUIK 2layer ik-0024",ix:24,v:0},{ty:6,nm:"Data",mn:"Pseudo/DUIK 2layer ik-0025",ix:25,v:0},{ty:6,nm:"Layers",mn:"Pseudo/DUIK 2layer ik-0026",ix:26,v:0},{ty:10,nm:"Upper",mn:"Pseudo/DUIK 2layer ik-0027",ix:27,v:{a:0,k:6,ix:27}},{ty:10,nm:"Lower",mn:"Pseudo/DUIK 2layer ik-0028",ix:28,v:{a:0,k:8,ix:28}},{ty:10,nm:"Goal",mn:"Pseudo/DUIK 2layer ik-0029",ix:29,v:{a:0,k:7,ix:29}},{ty:6,nm:"",mn:"Pseudo/DUIK 2layer ik-0030",ix:30,v:0},{ty:6,nm:"Stretch data",mn:"Pseudo/DUIK 2layer ik-0031",ix:31,v:0},{ty:0,nm:"Upper stretch",mn:"Pseudo/DUIK 2layer ik-0032",ix:32,v:{a:0,k:0,ix:32,x:`var $bm_rt;
var newLength;
var fx = effect('IK | back foot');
var layer1 = null;
var layer2 = null;
var result = 0;
try {
    layer1 = fx(27);
    layer2 = fx(28);
} catch (e) {
}
if (layer1 != null) {
    newLength = length(layer1.toWorld(layer1.anchorPoint), layer2.toWorld(layer2.anchorPoint));
    result = sub(newLength, fx(40).value);
}
$bm_rt = result;`}},{ty:0,nm:"Upper scale",mn:"Pseudo/DUIK 2layer ik-0033",ix:33,v:{a:0,k:100,ix:33,x:`var $bm_rt;
var fx = effect('IK | back foot');
if (fx(40).value > 0)
    $bm_rt = mul(div(sum(fx(32).value, fx(40).value), fx(40).value), 100);
else
    $bm_rt = 100;`}},{ty:0,nm:"Lower stretch",mn:"Pseudo/DUIK 2layer ik-0034",ix:34,v:{a:0,k:0,ix:34,x:`var $bm_rt;
var newLength;
var fx = effect('IK | back foot');
var layer2 = null;
var result = 0;
try {
    layer2 = fx(28);
} catch (e) {
}
if (layer2 != null) {
    newLength = length(layer2.toWorld(fx(36).value), layer2.toWorld(layer2.anchorPoint));
    result = sub(newLength, fx(41).value);
}
$bm_rt = result;`}},{ty:0,nm:"Lower scale",mn:"Pseudo/DUIK 2layer ik-0035",ix:35,v:{a:0,k:100,ix:35,x:`var $bm_rt;
var fx = effect('IK | back foot');
if (fx(41).value > 0)
    $bm_rt = mul(div(sum(fx(34).value, fx(41).value), fx(41).value), 100);
else
    $bm_rt = 100;`}},{ty:3,nm:"Goal position",mn:"Pseudo/DUIK 2layer ik-0036",ix:36,v:{a:0,k:[-235.796,268.471],ix:36,x:`var $bm_rt;
var fx, layer1, layer1, stretch, auto, IK, shrinkVal, dist1, dist2, IKLength, IKStretched, boneStretch, proportion, posC, posR, distC, shrinkMax, shrink, shrink, boneStretch, boneStretch, boneStretch, coef, coef, coef, coef;
var result = value;
fx = effect('IK | back foot');
layer1 = null;
try {
    layer1 = fx(27);
} catch (e) {
}
if (layer1 != null) {
    stretch = fx(19);
    auto = fx(18).value;
    IK = fx(1).value;
    shrinkVal = div(fx(20).value, 100);
    function getWorldPos(L) {
        return L.toWorld(L.anchorPoint);
    }
    dist1 = fx(40).value;
    dist2 = fx(41).value;
    IKLength = sum(dist1, dist2);
    IKStretched = sum(IKLength, stretch);
    boneStretch = 0;
    proportion = div(dist2, IKLength);
    posC = toWorld(anchorPoint);
    posR = getWorldPos(layer1);
    distC = length(posC, posR);
    shrinkMax = mul(IKLength, shrinkVal);
    shrink = 0;
    if (distC < IKStretched && IK)
        shrink = sub(1, div(distC, IKStretched));
    boneStretch = sub(boneStretch, mul(easeOut(shrink, 0, shrinkMax), proportion));
    if (distC > IKStretched && auto && IK)
        boneStretch = sum(boneStretch, mul(sub(distC, IKLength), proportion));
    else
        boneStretch = sum(boneStretch, mul(stretch, proportion));
    coef = 1;
    dist2 != 0 ? coef = div(sum(dist2, boneStretch), dist2) : coef = 1;
    result = sum(mul(sub([
        -125.758072895446,
        143.184421087686
    ], [
        -162,
        84,
        0
    ]), coef), [
        -162,
        84,
        0
    ]);
}
$bm_rt = result;`}},{ty:3,nm:"Goal world position",mn:"Pseudo/DUIK 2layer ik-0037",ix:37,v:{a:0,k:[750,750],ix:37,x:`var $bm_rt;
var fx = effect('IK | back foot');
var layer2 = null;
var result = [
        0,
        0
    ];
try {
    layer2 = fx(28);
} catch (e) {
}
if (layer2 != null) {
    result = layer2.toWorld(fx(36).value);
}
$bm_rt = result;`}},{ty:6,nm:"",mn:"Pseudo/DUIK 2layer ik-0038",ix:38,v:0},{ty:6,nm:"Lengths",mn:"Pseudo/DUIK 2layer ik-0039",ix:39,v:0},{ty:0,nm:"Upper length",mn:"Pseudo/DUIK 2layer ik-0040",ix:40,v:{a:0,k:76.062,ix:40}},{ty:0,nm:"Lower length",mn:"Pseudo/DUIK 2layer ik-0041",ix:41,v:{a:0,k:69.399,ix:41}},{ty:0,nm:"IK length",mn:"Pseudo/DUIK 2layer ik-0042",ix:42,v:{a:0,k:0,ix:42,x:`var $bm_rt;
var fx = effect('IK | back foot');
var result = sum(fx(40).value, fx(41).value);
var goalPos = fx(37).value;
var layer1 = null;
try {
    layer1 = fx(27);
} catch (e) {
}
if (layer1 != null) {
    result = length(layer1.toWorld(layer1.anchorPoint), goalPos);
}
$bm_rt = result;`}},{ty:6,nm:"",mn:"Pseudo/DUIK 2layer ik-0043",ix:43,v:0},{ty:7,nm:"Straight",mn:"Pseudo/DUIK 2layer ik-0044",ix:44,v:{a:0,k:0,ix:44,x:`var $bm_rt;
var fx;
fx = effect('IK | back foot');
var layer1 = null;
var layer2 = null;
var result = false;
try {
    layer1 = fx(27);
    layer2 = fx(28);
} catch (e) {
}
if (layer1 != null) {
    var a = layer1.toWorld(layer1.anchorPoint);
    var b = layer2.toWorld(layer2.anchorPoint);
    var c = layer2.toWorld(fx(36).value);
    result = Math.abs(a[0] * (b[1] - c[1]) + b[0] * (c[1] - a[1]) + c[0] * (a[1] - b[1])) < 1000;
}
$bm_rt = result;`}},{ty:6,nm:"",mn:"Pseudo/DUIK 2layer ik-0045",ix:45,v:0},{ty:6,nm:"Display",mn:"Pseudo/DUIK 2layer ik-0046",ix:46,v:0},{ty:7,nm:"Draw guides",mn:"Pseudo/DUIK 2layer ik-0047",ix:47,v:{a:0,k:0,ix:47}},{ty:6,nm:"",mn:"Pseudo/DUIK 2layer ik-0048",ix:48,v:0}]}],shapes:[{ty:"gr",it:[{d:1,ty:"el",s:{a:0,k:[2,2],ix:2},p:{a:0,k:[0,0],ix:3},nm:"Ellipse Path 1",mn:"ADBE Vector Shape - Ellipse",hd:!1},{d:1,ty:"el",s:{a:0,k:[10,10],ix:2},p:{a:0,k:[0,0],ix:3},nm:"Ellipse Path 2",mn:"ADBE Vector Shape - Ellipse",hd:!1},{ty:"sr",sy:1,d:1,pt:{a:0,k:4,ix:3},p:{a:0,k:[0,0],ix:4},r:{a:0,k:0,ix:5},ir:{a:0,k:0,ix:6},is:{a:0,k:0,ix:8},or:{a:0,k:10,ix:7},os:{a:0,k:0,ix:9},ix:3,nm:"Polystar Path 1",mn:"ADBE Vector Shape - Star",hd:!1},{ty:"st",c:{a:0,k:[1,1,1,1],ix:3,x:`var $bm_rt;
$bm_rt = effect('Controller')(9);`},o:{a:0,k:100,ix:4},w:{a:0,k:2,ix:5,x:`var $bm_rt;
$bm_rt = div(100, content('Anchor').transform.scale[0]);`},lc:2,lj:1,ml:4,ml2:{a:0,k:4,ix:8},nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3,x:`var $bm_rt;
$bm_rt = [
    effect('Controller')(10),
    effect('Controller')(10)
];`},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Anchor",np:4,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[-6.215,0],[0,6.215],[6.215,0],[0,0]],o:[[0,6.215],[6.215,0],[0,-6.216],[0,0],[0,0]],v:[[-11.067,.048],[.187,11.302],[11.442,.048],[.187,-11.206],[6.94,-17.115]],c:!1},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ind:1,ty:"sh",ix:2,ks:{a:0,k:{i:[[0,0],[0,0]],o:[[0,0],[0,0]],v:[[.062,-7.546],[.062,7.546]],c:!1},ix:2},nm:"Path 2",mn:"ADBE Vector Shape - Group",hd:!1},{ind:2,ty:"sh",ix:3,ks:{a:0,k:{i:[[0,0],[0,0]],o:[[0,0],[0,0]],v:[[7.546,0],[-7.546,0]],c:!1},ix:2},nm:"Path 3",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[.517647087574,.835294127464,.980392158031,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:1.5,ix:5},lc:2,lj:1,ml:4,ml2:{a:0,k:4,ix:8},nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2,x:`var $bm_rt;
$bm_rt = effect('Controller')(3);`},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3,x:`var $bm_rt;
$bm_rt = [
    effect('Controller')(4) * 2,
    effect('Controller')(4) * 2
];`},r:{a:0,k:0,ix:6,x:`var $bm_rt;
$bm_rt = effect('Controller')(5);`},o:{a:0,k:100,ix:7,x:`var $bm_rt;
$bm_rt = effect('Controller')(6);`},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Icon",np:4,cix:2,ix:2,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[0,0]],o:[[0,0],[0,0]],v:[[-8,16],[8,16]],c:!1},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[1,1,1,1],ix:3,x:`var $bm_rt;
$bm_rt = sub(effect('Controller')(2), [
    0.2,
    0.2,
    0.2,
    0
]);`},o:{a:0,k:100,ix:4,x:`var $bm_rt;
var fx = effect('IK | back foot');
if (fx(47).value)
    $bm_rt = mul(fx(44).value, 100);
else
    $bm_rt = 0;`},w:{a:0,k:2,ix:5},lc:2,lj:1,ml:4,ml2:{a:0,k:4,ix:8},nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2,x:`var $bm_rt;
$bm_rt = effect('Controller')(3);`},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3,x:`var $bm_rt;
$bm_rt = [
    effect('Controller')(4) * 2,
    effect('Controller')(4) * 2
];`},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7,x:`var $bm_rt;
$bm_rt = effect('Controller')(6);`},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"IK",np:2,cix:2,ix:3,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[],o:[],v:[],c:!1},ix:2,x:`var $bm_rt;
if (active) {
    var fx = effect('IK | back foot');
    var layer1 = null;
    var result = [[
                0,
                0
            ]];
    if (fx(1).value && fx(47).value) {
        try {
            layer1 = fx(27);
        } catch (e) {
        }
        if (layer1 != null) {
            var l = layer1.toWorld(layer1.anchorPoint);
            l = fromWorld(l);
            result = [
                l,
                [
                    0,
                    0
                ]
            ];
        }
    }
    $bm_rt = createPath(result, [], [], false);
} else
    $bm_rt = value;`},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[.176470592618,.176470592618,.176470592618,1],ix:3,x:`var $bm_rt;
$bm_rt = sub(effect('Controller')(2), [
    0.2,
    0.2,
    0.2,
    0
]);`},o:{a:0,k:100,ix:4},w:{a:0,k:2,ix:5},lc:2,lj:1,ml:4,ml2:{a:0,k:4,ix:8},d:[{n:"d",nm:"dash",v:{a:0,k:5,ix:1}}],nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"IK Line",np:2,cix:2,ix:4,mn:"ADBE Vector Group",hd:!1}],ip:0,op:145,st:0,bm:0},{ddd:0,ind:6,ty:4,nm:"Front Leg Outlines",parent:17,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10,x:`var $bm_rt;
var IKFK;
var controller = null;
var result = value;
try {
    controller = effect('IK')(1);
} catch (e) {
}
if (controller != null) {
    var fx = controller.effect('IK | back foot');
    IKFK = fx(1).value;
    function ik() {
        var layer1, layer2, endPos, limit, cw, A, C, B, E, a, b, c, x, alpha, D, delta, V, adj1, IK, IK;
        layer1 = thisLayer;
        layer2 = null;
        try {
            layer2 = fx(28);
        } catch (e) {
            return value;
        }
        if (layer2 != null) {
            endPos = fx(36).value;
            limit = fx(23).value;
            cw = fx(2).value;
            function getWorldPos(L) {
                return L.toWorld(L.anchorPoint);
            }
            A = getWorldPos(layer1);
            C = layer2.toWorld(endPos);
            B = getWorldPos(layer2);
            E = getWorldPos(controller);
            a = length(B, C);
            b = length(E, A);
            c = length(A, B);
            x = div(sub(sum(mul(b, b), mul(c, c)), mul(a, a)), mul(2, b));
            alpha = Math.acos(clamp(div(x, c), -1, 1));
            D = sub(E, A);
            delta = Math.atan2(D[1], D[0]);
            result = radiansToDegrees(sub(delta, mul(cw ? 1 : -1, alpha)));
            V = sub(B, A);
            adj1 = radiansToDegrees(Math.atan2(V[1], V[0]));
            IK = sum(sub(result, adj1), value);
            if (IK < limit)
                IK = sum(IK, 360);
            return IK;
        }
    }
    function fk() {
        var follow = fx(15).value;
        var FK = sum(fx(11).value, fx(6).value);
        var p = thisLayer;
        if (!follow) {
            while (p.hasParent) {
                p = p.parent;
                FK = sub(FK, p.rotation.value);
            }
        }
        return FK;
    }
    result = IKFK ? ik() : fk();
}
$bm_rt = result;`},p:{a:1,k:[{i:{x:.33,y:1},o:{x:.167,y:.148},n:"0p33_1_0p167_0p148",t:10,s:[32.885,65.01,0],e:[14.129,45.044,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.15,y:1},o:{x:.167,y:.25},n:"0p15_1_0p167_0p25",t:18,s:[14.129,45.044,0],e:[32.885,65.01,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.79,y:1},o:{x:.167,y:0},n:"0p79_1_0p167_0",t:27,s:[32.885,65.01,0],e:[28.249,50.745,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.79,y:1},o:{x:.21,y:0},n:"0p79_1_0p21_0",t:51,s:[28.249,50.745,0],e:[32.885,65.01,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.79,y:.79},o:{x:.21,y:.21},n:"0p79_0p79_0p21_0p21",t:67,s:[32.885,65.01,0],e:[32.885,65.01,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.33,y:.33},o:{x:.21,y:.21},n:"0p33_0p33_0p21_0p21",t:89,s:[32.885,65.01,0],e:[32.885,65.01,0],to:[0,0,0],ti:[0,0,0]},{t:101}],ix:2},a:{a:0,k:[23.424,10.167,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,ef:[{ty:5,nm:"IK",np:3,mn:"Pseudo/DUIK ik",ix:1,en:1,ef:[{ty:10,nm:"Controller",mn:"Pseudo/DUIK ik-0001",ix:1,v:{a:0,k:5,ix:1}}]}],shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[3.87,0],[0,0],[0,-3.78],[0,0],[-4.555,3.138],[-.589,17.084]],o:[[0,0],[-3.78,0],[0,0],[0,5.531],[30.311,-20.881],[.134,-3.868]],v:[[16.198,-45.917],[-16.328,-45.917],[-23.173,-39.072],[-23.173,37.158],[-12.41,42.779],[23.039,-38.849]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[23.423,46.167],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 1",np:2,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:145,st:0,bm:0},{ddd:0,ind:7,ty:4,nm:"back foot",parent:8,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:-8,ix:10,x:`var $bm_rt;
var ctrl = null;
try {
    $bm_rt = ctrl = effect('IK')(1);
} catch (e) {
}
;
if (ctrl != null) {
    var fx = ctrl.effect('IK | back foot');
    var ikfk = fx(1).value;
    function ik() {
        var IK = ctrl.rotation.value;
        var layer = thisLayer;
        while (layer.hasParent) {
            layer = layer.parent;
            IK = sub(IK, layer.rotation);
        }
        return IK;
    }
    function fk() {
        var FK = value;
        var parentRot = parent.transform.rotation;
        var delay = fx(8).value;
        var amp = fx(7).value;
        var ftEnabled = fx(4).value;
        if (!ftEnabled) {
            amp = 0;
            delay = 0;
        } else {
            delay = div(delay, 100);
            amp = div(amp, 100);
        }
        FK = parentRot.valueAtTime(sub(time, delay));
        FK = mul(FK, amp);
        FK = sub(sum(sum(FK, value), fx(13)), parentRot.valueAtTime(0));
        return FK;
    }
    $bm_rt = ikfk ? ik() : fk();
} else
    $bm_rt = value;`},p:{a:0,k:[-109.649,83.759,0],ix:2,x:`var $bm_rt;
var ctrl = null;
var result = value;
try {
    ctrl = effect('IK')(1);
} catch (e) {
    value;
}
;
if (ctrl != null) {
    result = ctrl.effect('IK | back foot')(36).value;
}
$bm_rt = result;`},a:{a:0,k:[-275.348,161.652,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,ef:[{ty:5,nm:"IK",np:3,mn:"Pseudo/DUIK ik",ix:1,en:1,ef:[{ty:10,nm:"Controller",mn:"Pseudo/DUIK ik-0001",ix:1,v:{a:0,k:5,ix:1}}]}],shapes:[{ty:"gr",it:[{d:1,ty:"el",s:{a:0,k:[43.305,43.305],ix:2},p:{a:0,k:[0,0],ix:3},nm:"Ellipse Path 1",mn:"ADBE Vector Shape - Ellipse",hd:!1},{ty:"st",c:{a:0,k:[.6,.6,.6,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:0,ix:5},lc:1,lj:1,ml:4,ml2:{a:0,k:4,ix:8},nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[-275.348,161.652],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[93.147,93.147],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Ellipse 1",np:3,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:145,st:0,bm:0},{ddd:0,ind:8,ty:4,nm:"leg",parent:6,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:8,ix:10,x:`var $bm_rt;
var IKFK, layer1, layer2;
var controller = null;
var result = value;
try {
    controller = effect('IK')(1);
} catch (e) {
}
if (controller != null) {
    var fx = controller.effect('IK | back foot');
    IKFK = fx(1).value;
    layer1 = null;
    layer2 = thisLayer;
    try {
        layer1 = fx(27);
    } catch (e) {
    }
    if (layer1 != null) {
        function ik() {
            var endPos, cw, A, B, C, E, a, b, c, x, alpha, y, gamma, V1, adj1, V2, adj2, IK;
            endPos = fx(36).value;
            cw = fx(2).value;
            function getWorldPos(L) {
                return L.toWorld(L.anchorPoint);
            }
            A = getWorldPos(layer1);
            B = getWorldPos(layer2);
            C = layer2.toWorld(endPos);
            E = getWorldPos(controller);
            a = length(B, C);
            b = length(E, A);
            c = length(A, B);
            x = div(sub(sum(mul(b, b), mul(c, c)), mul(a, a)), mul(2, b));
            alpha = Math.acos(clamp(div(x, c), -1, 1));
            y = sub(b, x);
            gamma = Math.acos(clamp(div(y, a), -1, 1));
            result = mul(cw ? 1 : -1, radiansToDegrees(sum(gamma, alpha)));
            V1 = sub(B, A);
            adj1 = radiansToDegrees(Math.atan2(V1[1], V1[0]));
            V2 = sub(C, B);
            adj2 = radiansToDegrees(Math.atan2(V2[1], V2[0]));
            IK = sum(sub(sum(result, adj1), adj2), value);
            return IK;
        }
        function fk() {
            var FK;
            var ctrlRot = fx(6);
            var delay = fx(8).value;
            var amp = fx(7).value;
            var follow = fx(15).value;
            var ftEnabled = fx(4).value;
            if (!ftEnabled) {
                amp = 0;
                delay = 0;
            } else {
                delay = div(delay, 100);
                amp = div(amp, 100);
            }
            FK = ctrlRot.valueAtTime(sub(time, delay));
            if (follow && hasParent) {
                var cP = layer1;
                while (cP.hasParent) {
                    cP = cP.parent;
                    FK = sub(FK, sub(cP.rotation.value, cP.rotation.valueAtTime(sub(time, delay))));
                }
            }
            FK = sub(FK, ctrlRot.value);
            FK = mul(FK, amp);
            FK = sub(FK, mul(ctrlRot.velocity, div(delay, 5)));
            FK = sum(FK, fx(12).value);
            return FK;
        }
        result = IKFK ? ik() : fk();
    }
}
$bm_rt = result;`},p:{a:0,k:[6.809,84.392,0],ix:2,x:`var $bm_rt;
var fx, layer1, stretch, auto, IK, shrinkVal, dist1, dist2, IKLength, IKStretched, boneStretch, proportion, posC, posR, distC, shrinkMax, shrink, shrink, boneStretch, boneStretch, boneStretch, coef, coef, coef, coef;
var ctrl = null;
var result = value;
try {
    ctrl = effect('IK')(1);
} catch (e) {
    value;
}
;
if (ctrl != null) {
    fx = ctrl.effect('IK | back foot');
    layer1 = null;
    result = [
        211,
        25
    ];
    try {
        layer1 = fx(27);
    } catch (e) {
    }
    if (layer1 != null) {
        stretch = fx(19).value;
        auto = fx(18).value;
        IK = fx(1).value;
        shrinkVal = div(fx(20).value, 100);
        function getWorldPos(L) {
            return L.toWorld(L.anchorPoint);
        }
        dist1 = fx(40).value;
        dist2 = fx(41).value;
        IKLength = sum(dist1, dist2);
        IKStretched = sum(IKLength, stretch);
        boneStretch = 0;
        proportion = div(dist1, IKLength);
        posC = getWorldPos(ctrl);
        posR = getWorldPos(layer1);
        distC = length(posC, posR);
        shrinkMax = mul(IKLength, shrinkVal);
        shrink = 0;
        if (distC < IKStretched && IK)
            shrink = sub(1, div(distC, IKStretched));
        boneStretch = sub(boneStretch, mul(easeOut(shrink, 0, shrinkMax), proportion));
        if (distC > IKStretched && auto && IK)
            boneStretch = sum(boneStretch, mul(sub(distC, IKLength), proportion));
        else
            boneStretch = sum(boneStretch, mul(stretch, proportion));
        coef = 1;
        dist1 != 0 ? coef = div(sum(dist1, boneStretch), dist1) : coef = 1;
        result = sum(mul(sub([
            6.80930328369141,
            84.3920974731445,
            0
        ], [
            23.4235000610352,
            10.1669998168945,
            0
        ]), coef), [
            23.4235000610352,
            10.1669998168945,
            0
        ]);
    }
}
$bm_rt = result;`},a:{a:0,k:[-162,84,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,ef:[{ty:5,nm:"IK",np:3,mn:"Pseudo/DUIK ik",ix:1,en:1,ef:[{ty:10,nm:"Controller",mn:"Pseudo/DUIK ik-0001",ix:1,v:{a:0,k:5,ix:1}}]}],shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[0,0]],o:[[0,0],[0,0]],v:[[-162,84],[-123,150]],c:!1},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[.6,.6,.6,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:10,ix:5},lc:2,lj:1,ml:4,ml2:{a:0,k:4,ix:8},nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Shape 1",np:3,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:145,st:0,bm:0},{ddd:0,ind:9,ty:4,nm:"front leg 2::Ankle",parent:26,hd:!0,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10,x:`var $bm_rt;
try {
    var parentRot = hasParent ? parentTotal() : 0;
    var rotCalc = sub(thisLayer('ADBE Root Vectors Group')('Admin')('Transform')('Rotation'), parentRot);
    $bm_rt = sum(rotCalc, value);
} catch (err) {
    $bm_rt = value;
}
;
function parentTotal() {
    var parentVal = 0;
    var layerChain = 'thisLayer';
    while (eval([layerChain][0]).hasParent) {
        layerChain = sum(layerChain, '.parent');
        parentVal = sum(parentVal, eval([layerChain][0]).rotation);
    }
    return parentVal;
}`},p:{a:1,k:[{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:11.197,s:[83.08,-9.616,0],e:[55.87,-6.578,0],to:[0,0,0],ti:[26.7964706420898,-48.7901458740234,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:19,s:[55.87,-6.578,0],e:[55.87,-6.578,0],to:[.33944493532181,-.61270922422409,0],ti:[0,0,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:35.197,s:[55.87,-6.578,0],e:[83.359,-9.519,0],to:[0,0,0],ti:[-18.5252857208252,-45.071704864502,0]},{t:43.197265625}],ix:2},a:{a:0,k:[0,0,0],ix:1},s:{a:0,k:[100,100],ix:6}},ao:0,ef:[{ty:5,nm:"RubberHose 2",np:18,mn:"Pseudo/3bf5uID/RubberHose_2",ix:1,en:1,ef:[{ty:0,nm:"Hose Length",mn:"Pseudo/3bf5uID/RubberHose_2-0001",ix:1,v:{a:0,k:104,ix:1}},{ty:0,nm:"Bend Radius",mn:"Pseudo/3bf5uID/RubberHose_2-0002",ix:2,v:{a:0,k:100,ix:2}},{ty:0,nm:"Realism",mn:"Pseudo/3bf5uID/RubberHose_2-0003",ix:3,v:{a:0,k:0,ix:3}},{ty:0,nm:"Bend Direction",mn:"Pseudo/3bf5uID/RubberHose_2-0004",ix:4,v:{a:0,k:100,ix:4}},{ty:7,nm:"Auto Rotate Start",mn:"Pseudo/3bf5uID/RubberHose_2-0005",ix:5,v:{a:0,k:0,ix:5}},{ty:7,nm:"Auto Rotate End",mn:"Pseudo/3bf5uID/RubberHose_2-0006",ix:6,v:{a:0,k:1,ix:6}},{ty:6,nm:"Math Stuff",mn:"Pseudo/3bf5uID/RubberHose_2-0007",ix:7,v:0},{ty:3,nm:"A",mn:"Pseudo/3bf5uID/RubberHose_2-0008",ix:8,v:{a:0,k:[0,0],ix:8,x:`var $bm_rt;
$bm_rt = thisLayer.toComp([
    0,
    0,
    0
]);`}},{ty:3,nm:"B",mn:"Pseudo/3bf5uID/RubberHose_2-0009",ix:9,v:{a:0,k:[0,0],ix:9,x:`var $bm_rt;
try {
    var b = thisLayer(2)('Admin')(2)('B')(2)(1)._name;
    $bm_rt = thisComp.layer(b).toComp([
        0,
        0,
        0
    ]);
} catch (err) {
    $bm_rt = value;
}`}},{ty:0,nm:"Outer Radius",mn:"Pseudo/3bf5uID/RubberHose_2-0010",ix:10,v:{a:0,k:0,ix:10,x:`var $bm_rt;
var a = thisLayer(4)('RubberHose 2')('A');
var b = thisLayer(4)('RubberHose 2')('B');
var s = length(a, b);
$bm_rt = mul(Math.sin(0.78539816339), s);`}},{ty:0,nm:"Inner Radius",mn:"Pseudo/3bf5uID/RubberHose_2-0011",ix:11,v:{a:0,k:0,ix:11,x:`var $bm_rt;
var eff = thisLayer(4)('RubberHose 2');
var bendRad = eff('Bend Radius');
var hoseLength = div(eff('Hose Length'), 2);
var realism = eff('Realism');
var bendDir = div(eff('Bend Direction'), 100);
var sFac = eff('Parent Scale');
var straight = eff('Straight');
var autoFlop = eff('AutoFlop');
var roundShrink = linear(Math.abs(bendRad), 0, 100, 1, 0.87);
var innerRad;
if (hoseLength > straight) {
    innerRad = sum(straight, mul(Math.sqrt(sub(Math.pow(hoseLength, 2), Math.pow(straight, 2))), roundShrink));
    innerRad = linear(realism, 0, 100, hoseLength, innerRad);
    innerRad = linear(Math.abs(bendDir), straight, innerRad);
} else {
    innerRad = straight;
}
innerRad *= Math.abs(sFac);
innerRad = linear(Math.abs(autoFlop), mul(straight, Math.max(Math.abs(sFac), 0.001)), innerRad);
$bm_rt = innerRad;`}},{ty:0,nm:"Straight",mn:"Pseudo/3bf5uID/RubberHose_2-0012",ix:12,v:{a:0,k:0,ix:12,x:`var $bm_rt;
var sFac = thisLayer(4)('RubberHose 2')('Parent Scale');
var outerRad = div(thisLayer(4)('RubberHose 2')('Outer Radius'), Math.max(Math.abs(sFac), 0.001));
;
$bm_rt = div(mul(1.4142135623731, outerRad), 2);`}},{ty:0,nm:"Base Rotation",mn:"Pseudo/3bf5uID/RubberHose_2-0013",ix:13,v:{a:0,k:0,ix:13,x:`var $bm_rt;
var a = thisLayer(4)('RubberHose 2')('A');
var b = thisLayer(4)('RubberHose 2')('B');
$bm_rt = radiansToDegrees(Math.atan2(sub(a[1], b[1]), sub(a[0], b[0])));`}},{ty:0,nm:"AutoFlop",mn:"Pseudo/3bf5uID/RubberHose_2-0014",ix:14,v:{a:0,k:0,ix:14,x:`var $bm_rt;
var hasAF = false, isEnabled = false, output;
try {
    var lyrAF = thisComp.layer(sum(thisLayer._name.split('::')[0], '::AutoFlop'));
    isEnabled = lyrAF(4)('Enable')(1);
    var falloffAngle = lyrAF(4)('Falloff')(1);
    hasAF = true;
    var a = thisLayer.toComp([
            0,
            0,
            0
        ]);
    var b = thisLayer(4)('RubberHose 2')('B');
} catch (e) {
}
if (hasAF && isEnabled == 1) {
    var threshRot = lyrAF('ADBE Transform Group')('ADBE Rotate Z');
    threshRot %= 360;
    var ctrlAngle = $bm_neg(radiansToDegrees(Math.atan2(sub(b[0], a[0]), sub(b[1], a[1]))));
    var offsetAngle = sub(threshRot, ctrlAngle);
    offsetAngle %= 360;
    var sign = offsetAngle > 0 && offsetAngle < 180 || offsetAngle < -180 ? -1 : 1;
    var absAngle = Math.abs(offsetAngle);
    if (absAngle > 90) {
        absAngle = Math.abs(sub(absAngle, 180));
    }
    if (absAngle > 90) {
        absAngle = Math.abs(sub(absAngle, 180));
    }
    output = linear(absAngle, 0, falloffAngle, 0, 1);
    output *= sign;
} else {
    output = 1;
}
$bm_rt = output;
function parentTotal() {
    var parentVal = 0;
    var layerChain = 'thisLayer';
    while (eval([layerChain][0]).hasParent) {
        layerChain = sum(layerChain, '.parent');
        parentVal = sum(parentVal, eval([layerChain][0]).rotation);
    }
    return parentVal;
}`}},{ty:0,nm:"Parent Scale",mn:"Pseudo/3bf5uID/RubberHose_2-0015",ix:15,v:{a:0,k:0,ix:15,x:`var $bm_rt;
var sFactor = 1;
var scaleNorm = 0;
var layerChain = 'thisLayer';
while (eval([layerChain][0]).hasParent) {
    layerChain = sum(layerChain, '.parent');
    scaleNorm = div(eval(layerChain)('ADBE Transform Group')('ADBE Scale')[0], 100);
    sFactor = mul(sFactor, scaleNorm);
}
$bm_rt = sFactor;`}},{ty:6,nm:"",mn:"Pseudo/3bf5uID/RubberHose_2-0016",ix:16,v:0}]}],shapes:[{ty:"gr",it:[{ty:"gr",it:[{ty:"gr",it:[{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"front leg 2::Ankle",np:0,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[135,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"A",np:1,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ty:"gr",it:[{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[20,20],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"front leg 2::Hip",np:0,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"B",np:1,cix:2,ix:2,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ty:"gr",it:[{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"2.04",np:0,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1,cl:"04"},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Version",np:1,cix:2,ix:3,mn:"ADBE Vector Group",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6,x:`var $bm_rt;
var eff = thisLayer(4)('RubberHose 2');
var autoRotate = eff('Auto Rotate End');
if (autoRotate == 1) {
    var a = thisLayer.toComp([
            0,
            0,
            0
        ]);
    var b = eff('B');
    var s = length(a, b);
    var sFac = eff('Parent Scale');
    var autoFlop = 1;
    var realism = eff('Realism');
    var bendDir = div(eff('Bend Direction'), 100);
    var hoseLength = div(eff('Hose Length'), 2);
    var bendRad = eff('Bend Radius');
    var autoFlop = eff('AutoFlop');
    var baseRot = $bm_neg(radiansToDegrees(Math.atan2(sub(b[0], a[0]), sub(b[1], a[1]))));
    var outerRad = mul(Math.sin(0.78539816339), s);
    var straight = div(mul(1.4142135623731, outerRad), 2);
    straight /= Math.max(Math.abs(sFac), 0.001);
    var roundShrink = linear(Math.abs(bendRad), 0, 100, 1, 0.87);
    var innerRad;
    if (hoseLength > straight) {
        innerRad = sum(straight, mul(Math.sqrt(sub(Math.pow(hoseLength, 2), Math.pow(straight, 2))), roundShrink));
        innerRad = linear(realism, 0, 100, hoseLength, innerRad);
        innerRad = linear(Math.abs(bendDir), straight, innerRad);
    } else {
        innerRad = straight;
    }
    innerRad = linear(Math.abs(autoFlop), straight, innerRad);
    var flopDir = 1;
    if (bendDir < 0) {
        flopDir = -1;
    }
    flopDir *= autoFlop;
    var opp = mul(sub(innerRad, straight), flopDir);
    var theta = Math.atan(div(opp, Math.max(straight, 0.001)));
    var bendAngle = radiansToDegrees(theta);
    if (sFac < 0) {
        baseRot *= -1;
    }
    bendRad *= div(div(theta, $bm_neg(Math.PI)), linear(s, hoseLength, 0, 2, 0.9));
    var rotCalc = sub(sum(baseRot, bendAngle), bendRad);
    $bm_rt = rotCalc;
} else {
    $bm_rt = value;
}
;`},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Admin",np:3,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ty:"gr",it:[{d:1,ty:"el",s:{a:0,k:[100,100],ix:2},p:{a:0,k:[0,0],ix:3},nm:"Circle",mn:"ADBE Vector Shape - Ellipse",hd:!1},{ind:1,ty:"sh",ix:2,ks:{a:0,k:{i:[[0,0],[0,0]],o:[[0,0],[0,0]],v:[[-75,0],[75,0]],c:!1},ix:2},nm:"01",mn:"ADBE Vector Shape - Group",hd:!1},{ind:2,ty:"sh",ix:3,ks:{a:0,k:{i:[[0,0],[0,0]],o:[[0,0],[0,0]],v:[[0,-30],[0,30]],c:!1},ix:2},nm:"02",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[15,15],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"ControlShape",np:3,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"st",c:{a:0,k:[1,.560000002384,0,1],ix:3,x:`var $bm_rt;
if (thisLayer.active) {
    try {
        var eff = thisLayer(4)('RubberHose 2');
        var a = thisLayer.toComp([
                0,
                0,
                0
            ]);
        var b = eff('B');
        var straight = eff('Straight');
        var hoseLength = div(eff('Hose Length'), 2);
        if (straight > hoseLength) {
            $bm_rt = [
                0.51,
                0.83,
                0.98,
                1
            ];
        } else {
            $bm_rt = value;
        }
    } catch (err) {
        $bm_rt = value;
    }
} else {
    $bm_rt = value;
}`},o:{a:0,k:100,ix:4},w:{a:0,k:1.5,ix:5},lc:1,lj:1,ml:4,ml2:{a:0,k:4,ix:8},nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Control Point",np:2,cix:2,ix:2,mn:"ADBE Vector Group",hd:!1}],ip:0,op:145,st:0,bm:0},{ddd:0,ind:10,ty:4,nm:"front leg 1::Ankle",parent:26,hd:!0,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10,x:`var $bm_rt;
try {
    var parentRot = hasParent ? parentTotal() : 0;
    var rotCalc = sub(thisLayer('ADBE Root Vectors Group')('Admin')('Transform')('Rotation'), parentRot);
    $bm_rt = sum(rotCalc, value);
} catch (err) {
    $bm_rt = value;
}
;
function parentTotal() {
    var parentVal = 0;
    var layerChain = 'thisLayer';
    while (eval([layerChain][0]).hasParent) {
        layerChain = sum(layerChain, '.parent');
        parentVal = sum(parentVal, eval([layerChain][0]).rotation);
    }
    return parentVal;
}`},p:{a:1,k:[{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:5,s:[30.236,-3.374,0],e:[9.664,-8.552,0],to:[0,0,0],ti:[27.0441341400146,-36.0684776306152,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:12.803,s:[9.664,-8.552,0],e:[9.664,-8.552,0],to:[-4.58688640594482,-2.60544085502625,0],ti:[0,0,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:43.197,s:[9.664,-8.552,0],e:[30.613,-3.124,0],to:[0,0,0],ti:[-8.81235885620117,-40.4117050170898,0]},{t:51.197265625}],ix:2},a:{a:0,k:[0,0,0],ix:1},s:{a:0,k:[100,100],ix:6}},ao:0,ef:[{ty:5,nm:"RubberHose 2",np:18,mn:"Pseudo/3bf5uID/RubberHose_2",ix:1,en:1,ef:[{ty:0,nm:"Hose Length",mn:"Pseudo/3bf5uID/RubberHose_2-0001",ix:1,v:{a:0,k:96,ix:1}},{ty:0,nm:"Bend Radius",mn:"Pseudo/3bf5uID/RubberHose_2-0002",ix:2,v:{a:0,k:100,ix:2}},{ty:0,nm:"Realism",mn:"Pseudo/3bf5uID/RubberHose_2-0003",ix:3,v:{a:0,k:0,ix:3}},{ty:0,nm:"Bend Direction",mn:"Pseudo/3bf5uID/RubberHose_2-0004",ix:4,v:{a:0,k:100,ix:4}},{ty:7,nm:"Auto Rotate Start",mn:"Pseudo/3bf5uID/RubberHose_2-0005",ix:5,v:{a:0,k:0,ix:5}},{ty:7,nm:"Auto Rotate End",mn:"Pseudo/3bf5uID/RubberHose_2-0006",ix:6,v:{a:0,k:1,ix:6}},{ty:6,nm:"Math Stuff",mn:"Pseudo/3bf5uID/RubberHose_2-0007",ix:7,v:0},{ty:3,nm:"A",mn:"Pseudo/3bf5uID/RubberHose_2-0008",ix:8,v:{a:0,k:[0,0],ix:8,x:`var $bm_rt;
$bm_rt = thisLayer.toComp([
    0,
    0,
    0
]);`}},{ty:3,nm:"B",mn:"Pseudo/3bf5uID/RubberHose_2-0009",ix:9,v:{a:0,k:[0,0],ix:9,x:`var $bm_rt;
try {
    var b = thisLayer(2)('Admin')(2)('B')(2)(1)._name;
    $bm_rt = thisComp.layer(b).toComp([
        0,
        0,
        0
    ]);
} catch (err) {
    $bm_rt = value;
}`}},{ty:0,nm:"Outer Radius",mn:"Pseudo/3bf5uID/RubberHose_2-0010",ix:10,v:{a:0,k:0,ix:10,x:`var $bm_rt;
var a = thisLayer(4)('RubberHose 2')('A');
var b = thisLayer(4)('RubberHose 2')('B');
var s = length(a, b);
$bm_rt = mul(Math.sin(0.78539816339), s);`}},{ty:0,nm:"Inner Radius",mn:"Pseudo/3bf5uID/RubberHose_2-0011",ix:11,v:{a:0,k:0,ix:11,x:`var $bm_rt;
var eff = thisLayer(4)('RubberHose 2');
var bendRad = eff('Bend Radius');
var hoseLength = div(eff('Hose Length'), 2);
var realism = eff('Realism');
var bendDir = div(eff('Bend Direction'), 100);
var sFac = eff('Parent Scale');
var straight = eff('Straight');
var autoFlop = eff('AutoFlop');
var roundShrink = linear(Math.abs(bendRad), 0, 100, 1, 0.87);
var innerRad;
if (hoseLength > straight) {
    innerRad = sum(straight, mul(Math.sqrt(sub(Math.pow(hoseLength, 2), Math.pow(straight, 2))), roundShrink));
    innerRad = linear(realism, 0, 100, hoseLength, innerRad);
    innerRad = linear(Math.abs(bendDir), straight, innerRad);
} else {
    innerRad = straight;
}
innerRad *= Math.abs(sFac);
innerRad = linear(Math.abs(autoFlop), mul(straight, Math.max(Math.abs(sFac), 0.001)), innerRad);
$bm_rt = innerRad;`}},{ty:0,nm:"Straight",mn:"Pseudo/3bf5uID/RubberHose_2-0012",ix:12,v:{a:0,k:0,ix:12,x:`var $bm_rt;
var sFac = thisLayer(4)('RubberHose 2')('Parent Scale');
var outerRad = div(thisLayer(4)('RubberHose 2')('Outer Radius'), Math.max(Math.abs(sFac), 0.001));
;
$bm_rt = div(mul(1.4142135623731, outerRad), 2);`}},{ty:0,nm:"Base Rotation",mn:"Pseudo/3bf5uID/RubberHose_2-0013",ix:13,v:{a:0,k:0,ix:13,x:`var $bm_rt;
var a = thisLayer(4)('RubberHose 2')('A');
var b = thisLayer(4)('RubberHose 2')('B');
$bm_rt = radiansToDegrees(Math.atan2(sub(a[1], b[1]), sub(a[0], b[0])));`}},{ty:0,nm:"AutoFlop",mn:"Pseudo/3bf5uID/RubberHose_2-0014",ix:14,v:{a:0,k:0,ix:14,x:`var $bm_rt;
var hasAF = false, isEnabled = false, output;
try {
    var lyrAF = thisComp.layer(sum(thisLayer._name.split('::')[0], '::AutoFlop'));
    isEnabled = lyrAF(4)('Enable')(1);
    var falloffAngle = lyrAF(4)('Falloff')(1);
    hasAF = true;
    var a = thisLayer.toComp([
            0,
            0,
            0
        ]);
    var b = thisLayer(4)('RubberHose 2')('B');
} catch (e) {
}
if (hasAF && isEnabled == 1) {
    var threshRot = lyrAF('ADBE Transform Group')('ADBE Rotate Z');
    threshRot %= 360;
    var ctrlAngle = $bm_neg(radiansToDegrees(Math.atan2(sub(b[0], a[0]), sub(b[1], a[1]))));
    var offsetAngle = sub(threshRot, ctrlAngle);
    offsetAngle %= 360;
    var sign = offsetAngle > 0 && offsetAngle < 180 || offsetAngle < -180 ? -1 : 1;
    var absAngle = Math.abs(offsetAngle);
    if (absAngle > 90) {
        absAngle = Math.abs(sub(absAngle, 180));
    }
    if (absAngle > 90) {
        absAngle = Math.abs(sub(absAngle, 180));
    }
    output = linear(absAngle, 0, falloffAngle, 0, 1);
    output *= sign;
} else {
    output = 1;
}
$bm_rt = output;
function parentTotal() {
    var parentVal = 0;
    var layerChain = 'thisLayer';
    while (eval([layerChain][0]).hasParent) {
        layerChain = sum(layerChain, '.parent');
        parentVal = sum(parentVal, eval([layerChain][0]).rotation);
    }
    return parentVal;
}`}},{ty:0,nm:"Parent Scale",mn:"Pseudo/3bf5uID/RubberHose_2-0015",ix:15,v:{a:0,k:0,ix:15,x:`var $bm_rt;
var sFactor = 1;
var scaleNorm = 0;
var layerChain = 'thisLayer';
while (eval([layerChain][0]).hasParent) {
    layerChain = sum(layerChain, '.parent');
    scaleNorm = div(eval(layerChain)('ADBE Transform Group')('ADBE Scale')[0], 100);
    sFactor = mul(sFactor, scaleNorm);
}
$bm_rt = sFactor;`}},{ty:6,nm:"",mn:"Pseudo/3bf5uID/RubberHose_2-0016",ix:16,v:0}]}],shapes:[{ty:"gr",it:[{ty:"gr",it:[{ty:"gr",it:[{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"front leg 1::Ankle",np:0,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[135,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"A",np:1,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ty:"gr",it:[{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[20,20],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"front leg 1::Hip",np:0,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"B",np:1,cix:2,ix:2,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ty:"gr",it:[{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"2.04",np:0,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1,cl:"04"},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Version",np:1,cix:2,ix:3,mn:"ADBE Vector Group",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6,x:`var $bm_rt;
var eff = thisLayer(4)('RubberHose 2');
var autoRotate = eff('Auto Rotate End');
if (autoRotate == 1) {
    var a = thisLayer.toComp([
            0,
            0,
            0
        ]);
    var b = eff('B');
    var s = length(a, b);
    var sFac = eff('Parent Scale');
    var autoFlop = 1;
    var realism = eff('Realism');
    var bendDir = div(eff('Bend Direction'), 100);
    var hoseLength = div(eff('Hose Length'), 2);
    var bendRad = eff('Bend Radius');
    var autoFlop = eff('AutoFlop');
    var baseRot = $bm_neg(radiansToDegrees(Math.atan2(sub(b[0], a[0]), sub(b[1], a[1]))));
    var outerRad = mul(Math.sin(0.78539816339), s);
    var straight = div(mul(1.4142135623731, outerRad), 2);
    straight /= Math.max(Math.abs(sFac), 0.001);
    var roundShrink = linear(Math.abs(bendRad), 0, 100, 1, 0.87);
    var innerRad;
    if (hoseLength > straight) {
        innerRad = sum(straight, mul(Math.sqrt(sub(Math.pow(hoseLength, 2), Math.pow(straight, 2))), roundShrink));
        innerRad = linear(realism, 0, 100, hoseLength, innerRad);
        innerRad = linear(Math.abs(bendDir), straight, innerRad);
    } else {
        innerRad = straight;
    }
    innerRad = linear(Math.abs(autoFlop), straight, innerRad);
    var flopDir = 1;
    if (bendDir < 0) {
        flopDir = -1;
    }
    flopDir *= autoFlop;
    var opp = mul(sub(innerRad, straight), flopDir);
    var theta = Math.atan(div(opp, Math.max(straight, 0.001)));
    var bendAngle = radiansToDegrees(theta);
    if (sFac < 0) {
        baseRot *= -1;
    }
    bendRad *= div(div(theta, $bm_neg(Math.PI)), linear(s, hoseLength, 0, 2, 0.9));
    var rotCalc = sub(sum(baseRot, bendAngle), bendRad);
    $bm_rt = rotCalc;
} else {
    $bm_rt = value;
}
;`},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Admin",np:3,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ty:"gr",it:[{d:1,ty:"el",s:{a:0,k:[100,100],ix:2},p:{a:0,k:[0,0],ix:3},nm:"Circle",mn:"ADBE Vector Shape - Ellipse",hd:!1},{ind:1,ty:"sh",ix:2,ks:{a:0,k:{i:[[0,0],[0,0]],o:[[0,0],[0,0]],v:[[-75,0],[75,0]],c:!1},ix:2},nm:"01",mn:"ADBE Vector Shape - Group",hd:!1},{ind:2,ty:"sh",ix:3,ks:{a:0,k:{i:[[0,0],[0,0]],o:[[0,0],[0,0]],v:[[0,-30],[0,30]],c:!1},ix:2},nm:"02",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[15,15],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"ControlShape",np:3,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"st",c:{a:0,k:[1,.560000002384,0,1],ix:3,x:`var $bm_rt;
if (thisLayer.active) {
    try {
        var eff = thisLayer(4)('RubberHose 2');
        var a = thisLayer.toComp([
                0,
                0,
                0
            ]);
        var b = eff('B');
        var straight = eff('Straight');
        var hoseLength = div(eff('Hose Length'), 2);
        if (straight > hoseLength) {
            $bm_rt = [
                0.51,
                0.83,
                0.98,
                1
            ];
        } else {
            $bm_rt = value;
        }
    } catch (err) {
        $bm_rt = value;
    }
} else {
    $bm_rt = value;
}`},o:{a:0,k:100,ix:4},w:{a:0,k:1.5,ix:5},lc:1,lj:1,ml:4,ml2:{a:0,k:4,ix:8},nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Control Point",np:2,cix:2,ix:2,mn:"ADBE Vector Group",hd:!1}],ip:0,op:145,st:0,bm:0},{ddd:0,ind:11,ty:4,nm:"Glasses Outlines",parent:16,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[188.359,127.303,0],ix:2},a:{a:0,k:[55.355,19.042,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[0,0],[-3.764,-.836],[0,0]],o:[[0,0],[3.753,-.883],[0,0],[0,0]],v:[[-14.611,1.452],[-6.12,-.545],[5.302,-.616],[14.611,1.452]],c:!1},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[.176000004189,.176000004189,.176000004189,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:3.34,ix:5},lc:1,lj:1,ml:10,ml2:{a:0,k:10,ix:8},nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[55.773,11.752],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 1",np:2,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,13.372],[0,-13.372],[-13.372,0]],o:[[0,-13.372],[0,13.372],[13.373,0]],v:[[24.213,-5.421],[-24.213,-5.421],[0,18.792]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[.176000004189,.176000004189,.176000004189,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[86.248,19.043],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 2",np:2,cix:2,ix:2,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,13.372],[0,-13.372],[-13.372,0]],o:[[0,-13.372],[0,13.372],[13.373,0]],v:[[24.213,-5.421],[-24.213,-5.421],[0,18.792]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[.176000004189,.176000004189,.176000004189,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[24.463,19.043],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 3",np:2,cix:2,ix:3,mn:"ADBE Vector Group",hd:!1}],ip:0,op:145,st:0,bm:0},{ddd:0,ind:12,ty:4,nm:"Ear Outlines",parent:16,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:1,k:[{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:4,s:[0],e:[-11]},{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:9,s:[-11],e:[-57]},{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:17,s:[-57],e:[-12]},{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:24.5,s:[-12],e:[-24]},{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:32,s:[-24],e:[-24]},{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:89,s:[-24],e:[-61]},{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:93,s:[-61],e:[52]},{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:97,s:[52],e:[-12]},{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:102,s:[-12],e:[0]},{t:109}],ix:10},p:{a:0,k:[87.428,95.51,0],ix:2},a:{a:0,k:[25.983,15.042,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,14.765],[14.765,0],[0,-14.765],[-14.764,0]],o:[[0,-14.765],[-14.764,0],[0,14.765],[14.765,0]],v:[[26.734,0],[-.001,-26.734],[-26.734,0],[-.001,26.734]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[.866999966491,.866999966491,.866999966491,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[26.983,61.101],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 1",np:2,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[10.842,0],[0,0],[0,-10.842],[0,0],[-10.842,0],[0,10.842],[0,0]],o:[[0,0],[-10.842,0],[0,0],[0,10.842],[10.842,0],[0,0],[0,-10.842]],v:[[0,-33.359],[0,-33.359],[-19.712,-13.646],[-19.712,13.646],[0,33.359],[19.712,13.646],[19.712,-13.646]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[.866999966491,.866999966491,.866999966491,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[27.546,33.609],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 2",np:2,cix:2,ix:2,mn:"ADBE Vector Group",hd:!1}],ip:0,op:145,st:0,bm:0},{ddd:0,ind:13,ty:4,nm:"Top Floof Outlines",parent:16,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[148.672,42.241,0],ix:2},a:{a:0,k:[119.743,64.124,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,-33.643],[-33.644,0],[0,33.643],[33.643,0]],o:[[0,33.643],[33.643,0],[0,-33.643],[-33.644,0]],v:[[-60.916,0],[.001,60.917],[60.916,0],[.001,-60.917]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:1,k:[{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:6,s:[84.874,67.081],e:[85.765,73.015],to:[0,0],ti:[0,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:10,s:[85.765,73.015],e:[80.219,59.378],to:[0,0],ti:[0,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:15,s:[80.219,59.378],e:[84.874,67.081],to:[0,0],ti:[0,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:19,s:[84.874,67.081],e:[84.874,67.081],to:[0,0],ti:[0,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:94,s:[84.874,67.081],e:[84.744,61.083],to:[0,0],ti:[0,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:96,s:[84.744,61.083],e:[84.362,67.071],to:[0,0],ti:[0,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:100,s:[84.362,67.071],e:[85.154,61.088],to:[0,0],ti:[0,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:105,s:[85.154,61.088],e:[84.874,67.081],to:[0,0],ti:[0,0]},{t:108}],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 1",np:2,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,-33.643],[-33.644,0],[0,33.643],[33.643,0]],o:[[0,33.643],[33.643,0],[0,-33.643],[-33.644,0]],v:[[-60.916,0],[.001,60.917],[60.916,0],[.001,-60.917]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:1,k:[{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:6,s:[178.319,61.167],e:[178.919,85.346],to:[0,0],ti:[0,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:10,s:[178.919,85.346],e:[177.248,47.793],to:[0,0],ti:[0,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:15,s:[177.248,47.793],e:[178.319,61.167],to:[0,0],ti:[0,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:19,s:[178.319,61.167],e:[178.319,61.167],to:[0,0],ti:[0,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:94,s:[178.319,61.167],e:[178.189,55.168],to:[0,0],ti:[0,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:96,s:[178.189,55.168],e:[177.043,73.132],to:[0,0],ti:[0,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:100,s:[177.043,73.132],e:[178.739,52.177],to:[0,0],ti:[0,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:105,s:[178.739,52.177],e:[178.319,61.167],to:[0,0],ti:[0,0]},{t:108}],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 2",np:2,cix:2,ix:2,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,-13.511],[-13.511,0],[0,13.511],[13.511,0]],o:[[0,13.511],[13.511,0],[0,-13.511],[-13.511,0]],v:[[-24.464,0],[0,24.464],[24.464,0],[0,-24.464]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[24.714,55.796],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 3",np:2,cix:2,ix:3,mn:"ADBE Vector Group",hd:!1}],ip:0,op:145,st:0,bm:0},{ddd:0,ind:14,ty:4,nm:"Face Fluff Outlines",parent:16,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[96.781,115.004,0],ix:2},a:{a:0,k:[99.764,105.819,0],ix:1},s:{a:0,k:[101,101,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,24.388],[33.644,0],[4.763,-28.894],[-38.661,-5.249]],o:[[0,-33.643],[-30.243,0],[15.04,34.564],[20.7,-9.731]],v:[[60.503,2.883],[-.414,-58.034],[-60.503,-7.095],[25.466,58.034]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[69.86,152.32],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 1",np:2,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,-20.422],[-20.422,0],[0,20.422],[20.422,0]],o:[[0,20.422],[20.422,0],[0,-20.422],[-20.422,0]],v:[[-36.978,0],[0,36.978],[36.978,0],[0,-36.978]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[162.301,67.673],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 2",np:2,cix:2,ix:2,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[33.643,0],[0,-33.644],[-.43,-2.921],[-30.189,0],[-10.105,3.059],[0,13.509]],o:[[-33.643,0],[0,3.041],[19.877,19.691],[11.103,0],[7.441,-10.102],[0,-33.644]],v:[[0,-50.863],[-60.917,10.055],[-60.257,19.003],[17.151,50.863],[49.071,46.143],[60.917,10.055]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[93.104,160.526],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 3",np:2,cix:2,ix:3,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,33.643],[33.644,0],[11.11,-14.848],[0,-2.516],[-28.154,-19.923],[-.85,0]],o:[[0,-33.643],[-19.971,0],[-.166,2.474],[0,37.114],[.842,.034],[33.644,0]],v:[[55.003,0],[-5.915,-60.917],[-54.721,-36.458],[-55.003,-28.98],[-8.451,60.853],[-5.915,60.917]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[55.253,130.364],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 4",np:2,cix:2,ix:4,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,-33.643],[-33.644,0],[0,33.643],[33.643,0]],o:[[0,33.643],[33.643,0],[0,-33.643],[-33.644,0]],v:[[-60.916,0],[.001,60.917],[60.916,0],[.001,-60.917]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[81.866,61.167],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 5",np:2,cix:2,ix:5,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[9.709,0],[0,-12.883],[-2.396,-3.664],[-11.825,9.941]],o:[[-12.883,0],[0,4.704],[15.292,-4.275],[-3.512,-8.437]],v:[[.894,-18.034],[-22.433,5.294],[-18.632,18.034],[22.433,-3.663]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[158.553,189.275],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 6",np:2,cix:2,ix:6,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,-20.422],[-20.422,0],[0,20.422],[20.422,0]],o:[[0,20.422],[20.422,0],[0,-20.422],[-20.422,0]],v:[[-36.978,0],[0,36.978],[36.978,0],[0,-36.978]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[119.127,116.761],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 7",np:2,cix:2,ix:7,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,33.643],[33.644,0],[4.968,-1.309],[0,-29.517],[-2.018,-8.332],[-16.793,0]],o:[[0,-33.643],[-5.379,0],[-18.922,19.757],[0,8.953],[11.019,10.991],[33.644,0]],v:[[53.524,0],[-7.393,-60.917],[-22.954,-58.903],[-53.524,17.151],[-50.41,43.129],[-7.393,60.917]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[53.774,84.233],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 8",np:2,cix:2,ix:8,mn:"ADBE Vector Group",hd:!1}],ip:0,op:145,st:0,bm:0},{ddd:0,ind:15,ty:4,nm:"Mouth Outlines",parent:16,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[185.247,168.806,0],ix:2},a:{a:0,k:[17.624,15.969,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[0,0]],o:[[.591,14.194],[0,0]],v:[[-8.752,-7.097],[8.752,3.145]],c:!1},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[.176000004189,.176000004189,.176000004189,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:3.549,ix:5},lc:1,lj:1,ml:10,ml2:{a:0,k:10,ix:8},nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[17.624,15.969],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 1",np:2,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:145,st:0,bm:0},{ddd:0,ind:16,ty:4,nm:"Face",parent:17,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:1,k:[{i:{x:[.26],y:[1]},o:{x:[.167],y:[.167]},n:["0p26_1_0p167_0p167"],t:3,s:[0],e:[10.385]},{i:{x:[.26],y:[1]},o:{x:[.167],y:[.167]},n:["0p26_1_0p167_0p167"],t:10,s:[10.385],e:[-75]},{i:{x:[.833],y:[1]},o:{x:[.167],y:[0]},n:["0p833_1_0p167_0"],t:17,s:[-75],e:[-75]},{i:{x:[.833],y:[1]},o:{x:[.167],y:[0]},n:["0p833_1_0p167_0"],t:54,s:[-75],e:[-79]},{i:{x:[.833],y:[1]},o:{x:[.167],y:[0]},n:["0p833_1_0p167_0"],t:68.223,s:[-79],e:[-75]},{i:{x:[.833],y:[1]},o:{x:[.167],y:[0]},n:["0p833_1_0p167_0"],t:81,s:[-75],e:[-75]},{i:{x:[.833],y:[1]},o:{x:[.167],y:[0]},n:["0p833_1_0p167_0"],t:88,s:[-75],e:[-61]},{i:{x:[.833],y:[.833]},o:{x:[.167],y:[0]},n:["0p833_0p833_0p167_0"],t:94,s:[-61],e:[0]},{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:100,s:[0],e:[0]},{t:107}],ix:10},p:{a:1,k:[{i:{x:.26,y:1},o:{x:.167,y:.167},n:"0p26_1_0p167_0p167",t:3,s:[273.127,19.29,0],e:[273.644,-14.753,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.26,y:1},o:{x:.167,y:.213},n:"0p26_1_0p167_0p213",t:10,s:[273.644,-14.753,0],e:[278.655,-44.587,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.376,y:.789},o:{x:.225,y:0},n:"0p376_0p789_0p225_0",t:17,s:[278.655,-44.587,0],e:[280.668,-26.081,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.584,y:1},o:{x:.259,y:.081},n:"0p584_1_0p259_0p081",t:22,s:[280.668,-26.081,0],e:[275.486,-41.41,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.584,y:.584},o:{x:.167,y:.167},n:"0p584_0p584_0p167_0p167",t:26,s:[275.486,-41.41,0],e:[275.486,-41.41,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.79,y:1},o:{x:.167,y:0},n:"0p79_1_0p167_0",t:60,s:[275.486,-41.41,0],e:[272.237,-50.867,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.79,y:.79},o:{x:.21,y:.21},n:"0p79_0p79_0p21_0p21",t:76,s:[272.237,-50.867,0],e:[272.237,-50.867,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.79,y:1},o:{x:.21,y:0},n:"0p79_1_0p21_0",t:88,s:[272.237,-50.867,0],e:[312.725,-76.65,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.833,y:.833},o:{x:.21,y:0},n:"0p833_0p833_0p21_0",t:94,s:[312.725,-76.65,0],e:[274.129,4.323,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:100,s:[274.129,4.323,0],e:[273.127,19.29,0],to:[0,0,0],ti:[0,0,0]},{t:107}],ix:2},a:{a:0,k:[150.919,110.255,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,3.92],[3.92,0],[0,-3.92],[-3.92,0]],o:[[0,-3.92],[-3.92,0],[0,3.92],[3.92,0]],v:[[7.097,0],[0,-7.097],[-7.097,0],[0,7.097]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[.176000004189,.176000004189,.176000004189,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[173.505,126.223],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 1",np:2,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,3.92],[3.92,0],[0,-3.92],[-3.92,0]],o:[[0,-3.92],[-3.92,0],[0,3.92],[3.92,0]],v:[[7.097,0],[0,-7.097],[-7.097,0],[0,7.097]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[.176000004189,.176000004189,.176000004189,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[202.517,126.223],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 2",np:2,cix:2,ix:2,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[-2.651,0],[0,0],[.335,-1.626],[1.698,-2.592],[1.221,.782],[0,0]],o:[[0,0],[1.661,0],[-.659,3.199],[-.794,1.213],[0,0],[-2.232,-1.431]],v:[[-7.241,-6.681],[7.952,-6.681],[10.57,-3.535],[6.986,5.137],[3.332,5.898],[-8.673,-1.79]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[.176000004189,.176000004189,.176000004189,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[290.682,143.55],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 3",np:2,cix:2,ix:3,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[-3.708,43.546]],v:[[-52.523,11.534],[-52.523,-21.773],[52.523,-21.773]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[.6,.6,.6,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[246.522,160.417],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 4",np:2,cix:2,ix:4,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,60.754],[60.754,0],[0,-60.754],[-60.754,0]],o:[[0,-60.754],[-60.754,0],[0,60.754],[60.754,0]],v:[[110.005,0],[0,-110.005],[-110.005,0],[0,110.005]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[.6,.6,.6,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[110.255,110.255],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 5",np:2,cix:2,ix:5,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[12.58,0],[0,-20.422],[-.062,-.87],[-18.505,14.651]],o:[[-20.422,0],[0,.885],[25.381,-.228],[-6.679,-9.598]],v:[[3.311,-19.8],[-33.667,17.178],[-33.534,19.8],[33.667,-3.907]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[144.795,200.434],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 6",np:2,cix:2,ix:6,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[60.754,0],[0,-60.754],[-60.754,0],[-.337,.004],[0,.886],[-20.422,0],[-6.68,-9.598],[0,34.981]],o:[[-60.754,0],[0,60.754],[.337,0],[-.061,-.869],[0,-20.422],[12.58,0],[25.45,-20.149],[0,-60.754]],v:[[0,-110.005],[-110.005,0],[0,110.005],[1.006,109.979],[.873,107.357],[37.851,70.379],[68.208,86.273],[110.005,0]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[110.255,110.255],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 7",np:2,cix:2,ix:7,mn:"ADBE Vector Group",hd:!1}],ip:0,op:145,st:0,bm:0},{ddd:0,ind:17,ty:4,nm:"Hind",parent:26,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:1,k:[{i:{x:[.76],y:[1]},o:{x:[.24],y:[0]},n:["0p76_1_0p24_0"],t:-47,s:[2.133],e:[2.133]},{i:{x:[.76],y:[1]},o:{x:[.24],y:[0]},n:["0p76_1_0p24_0"],t:-32,s:[2.133],e:[-.867]},{i:{x:[.637],y:[.457]},o:{x:[.234],y:[0]},n:["0p637_0p457_0p234_0"],t:-12,s:[-.867],e:[1.147]},{i:{x:[.26],y:[1]},o:{x:[.388],y:[.552]},n:["0p26_1_0p388_0p552"],t:3,s:[1.147],e:[2.133]},{i:{x:[.26],y:[1]},o:{x:[.24],y:[0]},n:["0p26_1_0p24_0"],t:10,s:[2.133],e:[112.133]},{i:{x:[.747],y:[1]},o:{x:[.16],y:[0]},n:["0p747_1_0p16_0"],t:17,s:[112.133],e:[112.133]},{i:{x:[.744],y:[1]},o:{x:[.405],y:[0]},n:["0p744_1_0p405_0"],t:87,s:[112.133],e:[126.133]},{i:{x:[.637],y:[1.003]},o:{x:[.167],y:[0]},n:["0p637_1p003_0p167_0"],t:93,s:[126.133],e:[1.147]},{i:{x:[.833],y:[1]},o:{x:[.167],y:[.234]},n:["0p833_1_0p167_0p234"],t:99,s:[1.147],e:[1.147]},{t:106}],ix:10},p:{a:1,k:[{i:{x:.26,y:1},o:{x:.24,y:0},n:"0p26_1_0p24_0",t:3,s:[-171.678,-160.042,0],e:[-175.074,-116.175,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.26,y:1},o:{x:.24,y:0},n:"0p26_1_0p24_0",t:10,s:[-175.074,-116.175,0],e:[109.931,-432.901,0],to:[0,0,0],ti:[-317.931091308594,-62.2800521850586,0]},{i:{x:.79,y:1},o:{x:.182,y:0},n:"0p79_1_0p182_0",t:17,s:[109.931,-432.901,0],e:[139.657,-431.908,0],to:[27.4962959289551,5.38629531860352,0],ti:[40.0184020996094,-3.46521544456482,0]},{i:{x:.79,y:1},o:{x:.21,y:0},n:"0p79_1_0p21_0",t:60,s:[139.657,-431.908,0],e:[129.9,-431.793,0],to:[-3.10727620124817,.26906076073647,0],ti:[-.05995079502463,-.0033270069398,0]},{i:{x:.659,y:.793},o:{x:.201,y:0},n:"0p659_0p793_0p201_0",t:76,s:[129.9,-431.793,0],e:[130.042,-431.785,0],to:[.59842944145203,.03321021795273,0],ti:[.19451810419559,.01079490408301,0]},{i:{x:.761,y:1},o:{x:.407,y:.001},n:"0p761_1_0p407_0p001",t:87,s:[130.042,-431.785,0],e:[203.9,-431.793,0],to:[-.07593881338835,-.00421427190304,0],ti:[0,0,0]},{i:{x:.833,y:1},o:{x:.21,y:0},n:"0p833_1_0p21_0",t:93,s:[203.9,-431.793,0],e:[-175.322,-118.201,0],to:[0,0,0],ti:[35.9488906860352,-445.452697753906,0]},{i:{x:.833,y:1},o:{x:.167,y:0},n:"0p833_1_0p167_0",t:99,s:[-175.322,-118.201,0],e:[-171.678,-160.042,0],to:[8.93818950653076,-12.3793230056763,0],ti:[0,0,0]},{t:106}],ix:2},a:{a:0,k:[46.317,46.317,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,25.442],[25.442,0],[0,-25.442],[-25.442,0]],o:[[0,-25.442],[-25.442,0],[0,25.442],[25.442,0]],v:[[46.067,0],[0,-46.067],[-46.067,0],[0,46.067]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:1,k:[{i:{x:.26,y:1},o:{x:.167,y:.167},n:"0p26_1_0p167_0p167",t:10,s:[46.317,46.317],e:[47.392,29.508],to:[0,0],ti:[0,0]},{i:{x:.26,y:1},o:{x:.167,y:0},n:"0p26_1_0p167_0",t:17,s:[47.392,29.508],e:[47.831,54.423],to:[0,0],ti:[0,0]},{i:{x:.26,y:1},o:{x:.167,y:0},n:"0p26_1_0p167_0",t:23,s:[47.831,54.423],e:[46.317,46.317],to:[0,0],ti:[0,0]},{i:{x:.26,y:.26},o:{x:.167,y:.167},n:"0p26_0p26_0p167_0p167",t:27,s:[46.317,46.317],e:[46.317,46.317],to:[0,0],ti:[0,0]},{i:{x:.26,y:1},o:{x:.167,y:0},n:"0p26_1_0p167_0",t:34,s:[46.317,46.317],e:[38.944,38.336],to:[0,0],ti:[0,0]},{i:{x:.373,y:.671},o:{x:.224,y:0},n:"0p373_0p671_0p224_0",t:51,s:[38.944,38.336],e:[45.209,45.118],to:[0,0],ti:[0,0]},{i:{x:.586,y:1},o:{x:.261,y:.602},n:"0p586_1_0p261_0p602",t:60,s:[45.209,45.118],e:[46.317,46.317],to:[0,0],ti:[0,0]},{t:67}],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,101.43],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 1",np:2,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:145,st:0,bm:0},{ddd:0,ind:18,ty:4,nm:"front leg 2::Hip",parent:16,hd:!0,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10,x:`var $bm_rt;
try {
    var parentRot = hasParent ? parentTotal() : 0;
    var rotCalc = sub(thisLayer('ADBE Root Vectors Group')('Admin')('Transform')('Rotation'), parentRot);
    $bm_rt = sum(rotCalc, value);
} catch (err) {
    $bm_rt = value;
}
;
function parentTotal() {
    var parentVal = 0;
    var layerChain = 'thisLayer';
    while (eval([layerChain][0]).hasParent) {
        layerChain = sum(layerChain, '.parent');
        parentVal = sum(parentVal, eval([layerChain][0]).rotation);
    }
    return parentVal;
}`},p:{a:1,k:[{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:7,s:[138.562,194.201,0],e:[138.562,194.201,0],to:[0,0,0],ti:[0,0,0]},{t:19}],ix:2},a:{a:0,k:[0,0,0],ix:1},s:{a:0,k:[100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ty:"gr",it:[{ty:"gr",it:[{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"front leg 2::Ankle",np:0,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[135,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"A",np:1,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ty:"gr",it:[{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[20,20],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"front leg 2::Hip",np:0,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"B",np:1,cix:2,ix:2,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ty:"gr",it:[{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"2.04",np:0,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1,cl:"04"},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Version",np:1,cix:2,ix:3,mn:"ADBE Vector Group",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6,x:`var $bm_rt;
try {
    var eff = thisComp.layer(thisLayer(2)('Admin')(2)('A')(2)(1)._name)(4)('RubberHose 2');
    var autoRotate = eff('Auto Rotate Start');
    if (autoRotate == 1) {
        var a = thisComp.layer(thisLayer(2)('Admin')(2)('A')(2)(1)._name).toComp([
                0,
                0,
                0
            ]);
        var b = thisLayer.toComp([
                0,
                0,
                0
            ]);
        var s = length(a, b);
        var sFac = eff('Parent Scale');
        var autoFlop = 1;
        var realism = eff('Realism');
        var bendDir = div(eff('Bend Direction'), 100);
        var hoseLength = div(eff('Hose Length'), 2);
        var bendRad = eff('Bend Radius');
        var autoFlop = eff('AutoFlop');
        var baseRot = $bm_neg(radiansToDegrees(Math.atan2(sub(b[0], a[0]), sub(b[1], a[1]))));
        var outerRad = mul(Math.sin(0.78539816339), s);
        var straight = div(mul(1.4142135623731, outerRad), 2);
        straight /= Math.max(Math.abs(sFac), 0.001);
        var roundShrink = linear(Math.abs(bendRad), 0, 100, 1, 0.87);
        var innerRad;
        if (straight <= hoseLength) {
            innerRad = sum(straight, mul(Math.sqrt(sub(Math.pow(hoseLength, 2), Math.pow(straight, 2))), roundShrink));
            innerRad = linear(realism, 0, 100, hoseLength, innerRad);
            innerRad = linear(Math.abs(bendDir), straight, innerRad);
        } else {
            innerRad = straight;
        }
        innerRad = linear(Math.abs(autoFlop), straight, innerRad);
        var flopDir = 1;
        if (bendDir < 0) {
            flopDir = -1;
        }
        flopDir *= autoFlop;
        var opp = mul(sub(innerRad, straight), flopDir);
        var theta = Math.atan(div(opp, Math.max(straight, 0.001)));
        var bendAngle = radiansToDegrees(theta);
        if (sFac < 0) {
            baseRot *= -1;
        }
        bendRad *= div(div(theta, $bm_neg(Math.PI)), linear(s, hoseLength, 0, 2, 0.9));
        var rotCalc = sum(sub(baseRot, bendAngle), bendRad);
        $bm_rt = rotCalc;
    } else {
        $bm_rt = 0;
    }
    ;
} catch (err) {
    $bm_rt = value;
}
;`},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Admin",np:3,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ty:"gr",it:[{d:1,ty:"el",s:{a:0,k:[100,100],ix:2},p:{a:0,k:[0,0],ix:3},nm:"Circle",mn:"ADBE Vector Shape - Ellipse",hd:!1},{ind:1,ty:"sh",ix:2,ks:{a:0,k:{i:[[0,0],[0,0]],o:[[0,0],[0,0]],v:[[-75,0],[75,0]],c:!1},ix:2},nm:"01",mn:"ADBE Vector Shape - Group",hd:!1},{ind:2,ty:"sh",ix:3,ks:{a:0,k:{i:[[0,0],[0,0]],o:[[0,0],[0,0]],v:[[0,-30],[0,30]],c:!1},ix:2},nm:"02",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[15,15],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"ControlShape",np:3,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"st",c:{a:0,k:[1,.560000002384,0,1],ix:3,x:`var $bm_rt;
try {
    var ctrl = thisComp.layer(thisLayer(2)('Admin')(2)('A')(2)(1)._name);
    $bm_rt = ctrl(2)('Control Point')(2)('Stroke 1')('Color');
} catch (e) {
    $bm_rt = value;
}`},o:{a:0,k:100,ix:4},w:{a:0,k:1.5,ix:5},lc:1,lj:1,ml:4,ml2:{a:0,k:4,ix:8},nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Control Point",np:2,cix:2,ix:2,mn:"ADBE Vector Group",hd:!1}],ip:0,op:145,st:0,bm:0},{ddd:0,ind:19,ty:4,nm:"front leg 1::Hip",parent:16,hd:!0,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10,x:`var $bm_rt;
try {
    var parentRot = hasParent ? parentTotal() : 0;
    var rotCalc = sub(thisLayer('ADBE Root Vectors Group')('Admin')('Transform')('Rotation'), parentRot);
    $bm_rt = sum(rotCalc, value);
} catch (err) {
    $bm_rt = value;
}
;
function parentTotal() {
    var parentVal = 0;
    var layerChain = 'thisLayer';
    while (eval([layerChain][0]).hasParent) {
        layerChain = sum(layerChain, '.parent');
        parentVal = sum(parentVal, eval([layerChain][0]).rotation);
    }
    return parentVal;
}`},p:{a:1,k:[{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:7,s:[86.562,194.201,0],e:[86.562,194.201,0],to:[0,0,0],ti:[0,0,0]},{t:19}],ix:2},a:{a:0,k:[0,0,0],ix:1},s:{a:0,k:[100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ty:"gr",it:[{ty:"gr",it:[{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"front leg 1::Ankle",np:0,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[135,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"A",np:1,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ty:"gr",it:[{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[20,20],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"front leg 1::Hip",np:0,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"B",np:1,cix:2,ix:2,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ty:"gr",it:[{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"2.04",np:0,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1,cl:"04"},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Version",np:1,cix:2,ix:3,mn:"ADBE Vector Group",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6,x:`var $bm_rt;
try {
    var eff = thisComp.layer(thisLayer(2)('Admin')(2)('A')(2)(1)._name)(4)('RubberHose 2');
    var autoRotate = eff('Auto Rotate Start');
    if (autoRotate == 1) {
        var a = thisComp.layer(thisLayer(2)('Admin')(2)('A')(2)(1)._name).toComp([
                0,
                0,
                0
            ]);
        var b = thisLayer.toComp([
                0,
                0,
                0
            ]);
        var s = length(a, b);
        var sFac = eff('Parent Scale');
        var autoFlop = 1;
        var realism = eff('Realism');
        var bendDir = div(eff('Bend Direction'), 100);
        var hoseLength = div(eff('Hose Length'), 2);
        var bendRad = eff('Bend Radius');
        var autoFlop = eff('AutoFlop');
        var baseRot = $bm_neg(radiansToDegrees(Math.atan2(sub(b[0], a[0]), sub(b[1], a[1]))));
        var outerRad = mul(Math.sin(0.78539816339), s);
        var straight = div(mul(1.4142135623731, outerRad), 2);
        straight /= Math.max(Math.abs(sFac), 0.001);
        var roundShrink = linear(Math.abs(bendRad), 0, 100, 1, 0.87);
        var innerRad;
        if (straight <= hoseLength) {
            innerRad = sum(straight, mul(Math.sqrt(sub(Math.pow(hoseLength, 2), Math.pow(straight, 2))), roundShrink));
            innerRad = linear(realism, 0, 100, hoseLength, innerRad);
            innerRad = linear(Math.abs(bendDir), straight, innerRad);
        } else {
            innerRad = straight;
        }
        innerRad = linear(Math.abs(autoFlop), straight, innerRad);
        var flopDir = 1;
        if (bendDir < 0) {
            flopDir = -1;
        }
        flopDir *= autoFlop;
        var opp = mul(sub(innerRad, straight), flopDir);
        var theta = Math.atan(div(opp, Math.max(straight, 0.001)));
        var bendAngle = radiansToDegrees(theta);
        if (sFac < 0) {
            baseRot *= -1;
        }
        bendRad *= div(div(theta, $bm_neg(Math.PI)), linear(s, hoseLength, 0, 2, 0.9));
        var rotCalc = sum(sub(baseRot, bendAngle), bendRad);
        $bm_rt = rotCalc;
    } else {
        $bm_rt = 0;
    }
    ;
} catch (err) {
    $bm_rt = value;
}
;`},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Admin",np:3,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ty:"gr",it:[{d:1,ty:"el",s:{a:0,k:[100,100],ix:2},p:{a:0,k:[0,0],ix:3},nm:"Circle",mn:"ADBE Vector Shape - Ellipse",hd:!1},{ind:1,ty:"sh",ix:2,ks:{a:0,k:{i:[[0,0],[0,0]],o:[[0,0],[0,0]],v:[[-75,0],[75,0]],c:!1},ix:2},nm:"01",mn:"ADBE Vector Shape - Group",hd:!1},{ind:2,ty:"sh",ix:3,ks:{a:0,k:{i:[[0,0],[0,0]],o:[[0,0],[0,0]],v:[[0,-30],[0,30]],c:!1},ix:2},nm:"02",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[15,15],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"ControlShape",np:3,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"st",c:{a:0,k:[1,.560000002384,0,1],ix:3,x:`var $bm_rt;
try {
    var ctrl = thisComp.layer(thisLayer(2)('Admin')(2)('A')(2)(1)._name);
    $bm_rt = ctrl(2)('Control Point')(2)('Stroke 1')('Color');
} catch (e) {
    $bm_rt = value;
}`},o:{a:0,k:100,ix:4},w:{a:0,k:1.5,ix:5},lc:1,lj:1,ml:4,ml2:{a:0,k:4,ix:8},nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Control Point",np:2,cix:2,ix:2,mn:"ADBE Vector Group",hd:!1}],ip:0,op:145,st:0,bm:0},{ddd:0,ind:20,ty:4,nm:"front foot 1",parent:10,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:180,ix:10},p:{a:0,k:[.08,-.42,0],ix:2},a:{a:0,k:[-75.08,120.92,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{d:1,ty:"el",s:{a:0,k:[34.16,34.16],ix:2},p:{a:0,k:[0,0],ix:3},nm:"Ellipse Path 1",mn:"ADBE Vector Shape - Ellipse",hd:!1},{ty:"st",c:{a:0,k:[.6,.6,.6,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:0,ix:5},lc:1,lj:1,ml:4,ml2:{a:0,k:4,ix:8},nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[-75.08,120.92],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[122.752,122.752],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Ellipse 1",np:3,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:145,st:0,bm:0},{ddd:0,ind:21,ty:4,nm:"front foot 2",parent:9,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:180,ix:10},p:{a:0,k:[.58,.08,0],ix:2},a:{a:0,k:[-75.08,120.92,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{d:1,ty:"el",s:{a:0,k:[34.16,34.16],ix:2},p:{a:0,k:[0,0],ix:3},nm:"Ellipse Path 1",mn:"ADBE Vector Shape - Ellipse",hd:!1},{ty:"st",c:{a:0,k:[.6,.6,.6,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:0,ix:5},lc:1,lj:1,ml:4,ml2:{a:0,k:4,ix:8},nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[-75.08,120.92],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[122.752,122.752],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Ellipse 1",np:3,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:145,st:0,bm:0},{ddd:0,ind:22,ty:4,nm:"front leg 2",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10,x:`var $bm_rt;
var r = 0;
if (thisLayer.hasParent) {
    r = $bm_neg(parentTotal());
}
$bm_rt = r;
function parentTotal() {
    var parentVal = 0;
    var layerChain = 'thisLayer';
    while (eval([layerChain][0]).hasParent) {
        layerChain = sum(layerChain, '.parent');
        parentVal = sum(parentVal, eval([layerChain][0]).rotation);
    }
    return parentVal;
}`},p:{a:0,k:[750,750,0],ix:2,x:`var $bm_rt;
var p = [
        0,
        0
    ];
try {
    if (thisLayer.hasParent) {
        p = parent.fromComp([
            0,
            0,
            0
        ]);
    }
    $bm_rt = p;
} catch (err) {
    $bm_rt = p;
}`},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100,100],ix:6,x:`var $bm_rt;
var s = [
        100,
        100
    ];
if (hasParent) {
    var sFactor = parentTotal();
    s = [
        s[0] * sFactor[0],
        s[1] * sFactor[1]
    ];
}
$bm_rt = s;
function parentTotal() {
    var sFactor = [
            1,
            1
        ];
    var scaleNorm = [
            0,
            0
        ];
    var layerChain = 'thisLayer';
    while (eval([layerChain][0]).hasParent) {
        layerChain = sum(layerChain, '.parent');
        scaleNorm = eval([layerChain][0]).scale;
        if (scaleNorm[0] != 0 && scaleNorm[1] != 0) {
            scaleNorm = [
                100 / scaleNorm[0],
                100 / scaleNorm[1]
            ];
        }
        sFactor = [
            sFactor[0] * scaleNorm[0],
            sFactor[1] * scaleNorm[1]
        ];
    }
    return sFactor;
}`}},ao:0,shapes:[{ty:"gr",it:[{ty:"gr",it:[{ty:"gr",it:[{ty:"sr",sy:1,d:1,pt:{a:0,k:4,ix:3},p:{a:0,k:[0,0],ix:4},r:{a:0,k:0,ix:5},ir:{a:0,k:500,ix:6,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(1).propertyIndex;
$bm_rt = thisLayer(2)('Admin')(2)('ArcMath')(2)(grp)(p);`},is:{a:0,k:0,ix:8,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(1).propertyIndex;
$bm_rt = thisLayer(2)('Admin')(2)('ArcMath')(2)(grp)(p);`},or:{a:0,k:113,ix:7,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(1).propertyIndex;
$bm_rt = thisLayer(2)('Admin')(2)('ArcMath')(2)(grp)(p);`},os:{a:0,k:0,ix:9,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(1).propertyIndex;
$bm_rt = thisLayer(2)('Admin')(2)('ArcMath')(2)(grp)(p);`},ix:1,nm:"LineForCurve",mn:"ADBE Vector Shape - Star",hd:!1},{ty:"tm",s:{a:0,k:0,ix:1,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(1).propertyIndex;
$bm_rt = thisLayer(2)('Admin')(2)('ArcMath')(2)(grp)(p);`},e:{a:0,k:0,ix:2,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(1).propertyIndex;
$bm_rt = thisLayer(2)('Admin')(2)('ArcMath')(2)(grp)(p);`},o:{a:0,k:-90,ix:3,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(1).propertyIndex;
$bm_rt = thisLayer(2)('Admin')(2)('ArcMath')(2)(grp)(p);`},m:1,ix:2,nm:"Line Halfer",mn:"ADBE Vector Filter - Trim",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(2).propertyIndex;
$bm_rt = content('Admin').content('ArcMath')('ADBE Vector Transform Group')(p);`},a:{a:0,k:[0,0],ix:1,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(2).propertyIndex;
$bm_rt = content('Admin').content('ArcMath')('ADBE Vector Transform Group')(p);`},s:{a:0,k:[100,100],ix:3,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(2).propertyIndex;
$bm_rt = content('Admin').content('ArcMath')('ADBE Vector Transform Group')(p);`},r:{a:0,k:45,ix:6,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(2).propertyIndex;
$bm_rt = content('Admin').content('ArcMath')('ADBE Vector Transform Group')(p);`},o:{a:0,k:100,ix:7,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(2).propertyIndex;
$bm_rt = content('Admin').content('ArcMath')('ADBE Vector Transform Group')(p);`},sk:{a:0,k:0,ix:4,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(2).propertyIndex;
$bm_rt = content('Admin').content('ArcMath')('ADBE Vector Transform Group')(p);`},sa:{a:0,k:0,ix:5,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(2).propertyIndex;
$bm_rt = content('Admin').content('ArcMath')('ADBE Vector Transform Group')(p);`},nm:"Transform"}],nm:"Arc",np:2,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"st",c:{a:0,k:[.6,.6,.6,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:9,ix:5,x:`var $bm_rt;
var sFac = thisComp.layer(thisLayer(2)('Admin')(2)('A')(2)(1)._name)(4)('RubberHose 2')('Parent Scale');
$bm_rt = mul(value, sFac);`},lc:2,lj:2,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2,x:`var $bm_rt;
try {
    var ctrl = thisComp.layer(thisLayer(2)('Admin')(2)('A')(2)(1)._name)(4)('RubberHose 2');
    $bm_rt = ctrl('A');
} catch (err) {
    $bm_rt = value;
}`},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"BaseHose",np:2,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Style",np:1,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ty:"gr",it:[{ty:"gr",it:[{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"front leg 2::Ankle",np:0,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[135,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"A",np:1,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ty:"gr",it:[{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[200,200],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"front leg 2::Hip",np:0,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"B",np:1,cix:2,ix:2,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ty:"gr",it:[{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"2.04",np:0,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1,cl:"04"},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Version",np:1,cix:2,ix:3,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ty:"sr",sy:1,d:1,pt:{a:0,k:4,ix:3},p:{a:0,k:[0,0],ix:4},r:{a:0,k:0,ix:5},ir:{a:0,k:200,ix:6,x:`var $bm_rt;
try {
    var ctrl = thisComp.layer(thisLayer(2)('Admin')(2)('A')(2)(1)._name)(4)('RubberHose 2');
    $bm_rt = ctrl('Inner Radius');
} catch (err) {
    $bm_rt = value;
}`},is:{a:0,k:100,ix:8,x:`var $bm_rt;
try {
    var ctrl = thisComp.layer(thisLayer(2)('Admin')(2)('A')(2)(1)._name)(4)('RubberHose 2');
    $bm_rt = ctrl('Bend Radius');
} catch (err) {
    $bm_rt = value;
}`},or:{a:0,k:200,ix:7,x:`var $bm_rt;
try {
    var ctrl = thisComp.layer(thisLayer(2)('Admin')(2)('A')(2)(1)._name)(4)('RubberHose 2');
    $bm_rt = ctrl('Outer Radius');
} catch (err) {
    $bm_rt = value;
}`},os:{a:0,k:0,ix:9},ix:1,nm:"LineForCurve",mn:"ADBE Vector Shape - Star",hd:!1},{ty:"tm",s:{a:0,k:.01,ix:1},e:{a:0,k:24.99,ix:2},o:{a:0,k:-90,ix:3,x:`var $bm_rt;
$bm_rt = -90;`},m:1,ix:2,nm:"Line Halfer",mn:"ADBE Vector Filter - Trim",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1,x:`var $bm_rt;
var s = thisProperty.propertyGroup(2)(2)(1)(7);
$bm_rt = [
    -s,
    0
];`},s:{a:0,k:[100,100],ix:3,x:`var $bm_rt;
var flop;
try {
    var eff = thisComp.layer(thisLayer(2)('Admin')(2)('A')(2)(1)._name)(4)('RubberHose 2');
    var bendDir = eff('Bend Direction');
    var autoFlop = eff('AutoFlop');
    flop = bendDir > 0 ? 1 : -1;
    autoFlop > 0 ? 0 : flop *= -1;
    var s = flop == 1 ? [
            -100,
            100
        ] : [
            100,
            100
        ];
    if (eff('Parent Scale') < 0) {
        s = [
            -s[0],
            s[1]
        ];
    }
    $bm_rt = s;
} catch (err) {
    $bm_rt = value;
}
;`},r:{a:0,k:45,ix:6,x:`var $bm_rt;
try {
    var ctrl = thisComp.layer(thisLayer(2)('Admin')(2)('A')(2)(1)._name)(4)('RubberHose 2');
    var baseRot = ctrl('Base Rotation');
    var flop = content('Admin').content('ArcMath').transform.scale[0];
    var rotOffset = flop < 0 ? -45 : 225;
    $bm_rt = sum(baseRot, rotOffset);
} catch (err) {
    $bm_rt = value;
}`},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"ArcMath",np:2,cix:2,ix:4,mn:"ADBE Vector Group",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2,x:`var $bm_rt;
try {
    var ctrl = thisComp.layer(thisLayer(2)('Admin')(2)('A')(2)(1)._name)(4)('RubberHose 2');
    $bm_rt = ctrl('A');
} catch (err) {
    $bm_rt = value;
}`},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Admin",np:4,cix:2,ix:2,mn:"ADBE Vector Group",hd:!1}],ip:0,op:145,st:0,bm:0},{ddd:0,ind:23,ty:4,nm:"front leg 1",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10,x:`var $bm_rt;
var r = 0;
if (thisLayer.hasParent) {
    r = $bm_neg(parentTotal());
}
$bm_rt = r;
function parentTotal() {
    var parentVal = 0;
    var layerChain = 'thisLayer';
    while (eval([layerChain][0]).hasParent) {
        layerChain = sum(layerChain, '.parent');
        parentVal = sum(parentVal, eval([layerChain][0]).rotation);
    }
    return parentVal;
}`},p:{a:0,k:[750,750,0],ix:2,x:`var $bm_rt;
var p = [
        0,
        0
    ];
try {
    if (thisLayer.hasParent) {
        p = parent.fromComp([
            0,
            0,
            0
        ]);
    }
    $bm_rt = p;
} catch (err) {
    $bm_rt = p;
}`},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100,100],ix:6,x:`var $bm_rt;
var s = [
        100,
        100
    ];
if (hasParent) {
    var sFactor = parentTotal();
    s = [
        s[0] * sFactor[0],
        s[1] * sFactor[1]
    ];
}
$bm_rt = s;
function parentTotal() {
    var sFactor = [
            1,
            1
        ];
    var scaleNorm = [
            0,
            0
        ];
    var layerChain = 'thisLayer';
    while (eval([layerChain][0]).hasParent) {
        layerChain = sum(layerChain, '.parent');
        scaleNorm = eval([layerChain][0]).scale;
        if (scaleNorm[0] != 0 && scaleNorm[1] != 0) {
            scaleNorm = [
                100 / scaleNorm[0],
                100 / scaleNorm[1]
            ];
        }
        sFactor = [
            sFactor[0] * scaleNorm[0],
            sFactor[1] * scaleNorm[1]
        ];
    }
    return sFactor;
}`}},ao:0,shapes:[{ty:"gr",it:[{ty:"gr",it:[{ty:"gr",it:[{ty:"sr",sy:1,d:1,pt:{a:0,k:4,ix:3},p:{a:0,k:[0,0],ix:4},r:{a:0,k:0,ix:5},ir:{a:0,k:500,ix:6,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(1).propertyIndex;
$bm_rt = thisLayer(2)('Admin')(2)('ArcMath')(2)(grp)(p);`},is:{a:0,k:0,ix:8,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(1).propertyIndex;
$bm_rt = thisLayer(2)('Admin')(2)('ArcMath')(2)(grp)(p);`},or:{a:0,k:113,ix:7,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(1).propertyIndex;
$bm_rt = thisLayer(2)('Admin')(2)('ArcMath')(2)(grp)(p);`},os:{a:0,k:0,ix:9,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(1).propertyIndex;
$bm_rt = thisLayer(2)('Admin')(2)('ArcMath')(2)(grp)(p);`},ix:1,nm:"LineForCurve",mn:"ADBE Vector Shape - Star",hd:!1},{ty:"tm",s:{a:0,k:0,ix:1,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(1).propertyIndex;
$bm_rt = thisLayer(2)('Admin')(2)('ArcMath')(2)(grp)(p);`},e:{a:0,k:0,ix:2,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(1).propertyIndex;
$bm_rt = thisLayer(2)('Admin')(2)('ArcMath')(2)(grp)(p);`},o:{a:0,k:-90,ix:3,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(1).propertyIndex;
$bm_rt = thisLayer(2)('Admin')(2)('ArcMath')(2)(grp)(p);`},m:1,ix:2,nm:"Line Halfer",mn:"ADBE Vector Filter - Trim",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(2).propertyIndex;
$bm_rt = content('Admin').content('ArcMath')('ADBE Vector Transform Group')(p);`},a:{a:0,k:[0,0],ix:1,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(2).propertyIndex;
$bm_rt = content('Admin').content('ArcMath')('ADBE Vector Transform Group')(p);`},s:{a:0,k:[100,100],ix:3,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(2).propertyIndex;
$bm_rt = content('Admin').content('ArcMath')('ADBE Vector Transform Group')(p);`},r:{a:0,k:45,ix:6,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(2).propertyIndex;
$bm_rt = content('Admin').content('ArcMath')('ADBE Vector Transform Group')(p);`},o:{a:0,k:100,ix:7,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(2).propertyIndex;
$bm_rt = content('Admin').content('ArcMath')('ADBE Vector Transform Group')(p);`},sk:{a:0,k:0,ix:4,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(2).propertyIndex;
$bm_rt = content('Admin').content('ArcMath')('ADBE Vector Transform Group')(p);`},sa:{a:0,k:0,ix:5,x:`var $bm_rt;
var p = thisProperty.propertyIndex;
var grp = thisProperty.propertyGroup(2).propertyIndex;
$bm_rt = content('Admin').content('ArcMath')('ADBE Vector Transform Group')(p);`},nm:"Transform"}],nm:"Arc",np:2,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"st",c:{a:0,k:[.6,.6,.6,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:9,ix:5,x:`var $bm_rt;
var sFac = thisComp.layer(thisLayer(2)('Admin')(2)('A')(2)(1)._name)(4)('RubberHose 2')('Parent Scale');
$bm_rt = mul(value, sFac);`},lc:2,lj:2,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2,x:`var $bm_rt;
try {
    var ctrl = thisComp.layer(thisLayer(2)('Admin')(2)('A')(2)(1)._name)(4)('RubberHose 2');
    $bm_rt = ctrl('A');
} catch (err) {
    $bm_rt = value;
}`},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"BaseHose",np:2,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Style",np:1,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ty:"gr",it:[{ty:"gr",it:[{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"front leg 1::Ankle",np:0,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[135,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"A",np:1,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ty:"gr",it:[{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[200,200],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"front leg 1::Hip",np:0,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"B",np:1,cix:2,ix:2,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ty:"gr",it:[{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"2.04",np:0,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1,cl:"04"},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Version",np:1,cix:2,ix:3,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ty:"sr",sy:1,d:1,pt:{a:0,k:4,ix:3},p:{a:0,k:[0,0],ix:4},r:{a:0,k:0,ix:5},ir:{a:0,k:200,ix:6,x:`var $bm_rt;
try {
    var ctrl = thisComp.layer(thisLayer(2)('Admin')(2)('A')(2)(1)._name)(4)('RubberHose 2');
    $bm_rt = ctrl('Inner Radius');
} catch (err) {
    $bm_rt = value;
}`},is:{a:0,k:100,ix:8,x:`var $bm_rt;
try {
    var ctrl = thisComp.layer(thisLayer(2)('Admin')(2)('A')(2)(1)._name)(4)('RubberHose 2');
    $bm_rt = ctrl('Bend Radius');
} catch (err) {
    $bm_rt = value;
}`},or:{a:0,k:200,ix:7,x:`var $bm_rt;
try {
    var ctrl = thisComp.layer(thisLayer(2)('Admin')(2)('A')(2)(1)._name)(4)('RubberHose 2');
    $bm_rt = ctrl('Outer Radius');
} catch (err) {
    $bm_rt = value;
}`},os:{a:0,k:0,ix:9},ix:1,nm:"LineForCurve",mn:"ADBE Vector Shape - Star",hd:!1},{ty:"tm",s:{a:0,k:.01,ix:1},e:{a:0,k:24.99,ix:2},o:{a:0,k:-90,ix:3,x:`var $bm_rt;
$bm_rt = -90;`},m:1,ix:2,nm:"Line Halfer",mn:"ADBE Vector Filter - Trim",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1,x:`var $bm_rt;
var s = thisProperty.propertyGroup(2)(2)(1)(7);
$bm_rt = [
    -s,
    0
];`},s:{a:0,k:[100,100],ix:3,x:`var $bm_rt;
var flop;
try {
    var eff = thisComp.layer(thisLayer(2)('Admin')(2)('A')(2)(1)._name)(4)('RubberHose 2');
    var bendDir = eff('Bend Direction');
    var autoFlop = eff('AutoFlop');
    flop = bendDir > 0 ? 1 : -1;
    autoFlop > 0 ? 0 : flop *= -1;
    var s = flop == 1 ? [
            -100,
            100
        ] : [
            100,
            100
        ];
    if (eff('Parent Scale') < 0) {
        s = [
            -s[0],
            s[1]
        ];
    }
    $bm_rt = s;
} catch (err) {
    $bm_rt = value;
}
;`},r:{a:0,k:45,ix:6,x:`var $bm_rt;
try {
    var ctrl = thisComp.layer(thisLayer(2)('Admin')(2)('A')(2)(1)._name)(4)('RubberHose 2');
    var baseRot = ctrl('Base Rotation');
    var flop = content('Admin').content('ArcMath').transform.scale[0];
    var rotOffset = flop < 0 ? -45 : 225;
    $bm_rt = sum(baseRot, rotOffset);
} catch (err) {
    $bm_rt = value;
}`},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"ArcMath",np:2,cix:2,ix:4,mn:"ADBE Vector Group",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2,x:`var $bm_rt;
try {
    var ctrl = thisComp.layer(thisLayer(2)('Admin')(2)('A')(2)(1)._name)(4)('RubberHose 2');
    $bm_rt = ctrl('A');
} catch (err) {
    $bm_rt = value;
}`},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Admin",np:4,cix:2,ix:2,mn:"ADBE Vector Group",hd:!1}],ip:0,op:145,st:0,bm:0},{ddd:0,ind:24,ty:4,nm:"body",parent:17,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[47.27,43.236,0],ix:2},a:{a:0,k:[-103,-28,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:1,k:[{i:{x:.26,y:1},o:{x:.167,y:.167},n:"0p26_1_0p167_0p167",t:3,s:[{i:[[0,0],[0,0]],o:[[0,0],[0,0]],v:[[-103,-28],[89.5,-28]],c:!1}],e:[{i:[[0,0],[-115.775,27.384]],o:[[64.167,0],[0,0]],v:[[-103,-28],[93.166,-107.916]],c:!1}]},{i:{x:.26,y:1},o:{x:.167,y:.167},n:"0p26_1_0p167_0p167",t:10,s:[{i:[[0,0],[-115.775,27.384]],o:[[64.167,0],[0,0]],v:[[-103,-28],[93.166,-107.916]],c:!1}],e:[{i:[[-109.849,-78.584],[0,0]],o:[[109.849,78.584],[0,0]],v:[[-97.261,-56.967],[89.5,-28]],c:!1}]},{i:{x:.26,y:1},o:{x:.167,y:0},n:"0p26_1_0p167_0",t:17,s:[{i:[[-109.849,-78.584],[0,0]],o:[[109.849,78.584],[0,0]],v:[[-97.261,-56.967],[89.5,-28]],c:!1}],e:[{i:[[-89.756,-100.926],[0,0]],o:[[102.089,114.794],[0,0]],v:[[-103,-28],[89.5,-28]],c:!1}]},{i:{x:.833,y:1},o:{x:.167,y:0},n:"0p833_1_0p167_0",t:23,s:[{i:[[-89.756,-100.926],[0,0]],o:[[102.089,114.794],[0,0]],v:[[-103,-28],[89.5,-28]],c:!1}],e:[{i:[[-109.849,-78.584],[0,0]],o:[[109.849,78.584],[0,0]],v:[[-103,-28],[89.5,-28]],c:!1}]},{i:{x:.833,y:1},o:{x:.167,y:0},n:"0p833_1_0p167_0",t:27,s:[{i:[[-109.849,-78.584],[0,0]],o:[[109.849,78.584],[0,0]],v:[[-103,-28],[89.5,-28]],c:!1}],e:[{i:[[-109.849,-78.584],[0,0]],o:[[109.849,78.584],[0,0]],v:[[-100.075,-38.414],[89.5,-28]],c:!1}]},{i:{x:.833,y:1},o:{x:.167,y:0},n:"0p833_1_0p167_0",t:51,s:[{i:[[-109.849,-78.584],[0,0]],o:[[109.849,78.584],[0,0]],v:[[-100.075,-38.414],[89.5,-28]],c:!1}],e:[{i:[[-109.849,-78.584],[0,0]],o:[[109.849,78.584],[0,0]],v:[[-103,-28],[89.5,-28]],c:!1}]},{i:{x:.833,y:1},o:{x:.167,y:0},n:"0p833_1_0p167_0",t:67,s:[{i:[[-109.849,-78.584],[0,0]],o:[[109.849,78.584],[0,0]],v:[[-103,-28],[89.5,-28]],c:!1}],e:[{i:[[-109.849,-78.584],[0,0]],o:[[109.849,78.584],[0,0]],v:[[-103,-28],[89.5,-28]],c:!1}]},{i:{x:.833,y:1},o:{x:.167,y:0},n:"0p833_1_0p167_0",t:87,s:[{i:[[-109.849,-78.584],[0,0]],o:[[109.849,78.584],[0,0]],v:[[-103,-28],[89.5,-28]],c:!1}],e:[{i:[[-109.849,-78.584],[0,0]],o:[[109.849,78.584],[0,0]],v:[[-103,-28],[89.5,-28]],c:!1}]},{i:{x:.833,y:.833},o:{x:.167,y:0},n:"0p833_0p833_0p167_0",t:93,s:[{i:[[-109.849,-78.584],[0,0]],o:[[109.849,78.584],[0,0]],v:[[-103,-28],[89.5,-28]],c:!1}],e:[{i:[[-55.027,-39.365],[-55.825,-64.708]],o:[[95.986,-41.268],[0,0]],v:[[-103,-28],[89.5,-28]],c:!1}]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:98,s:[{i:[[-55.027,-39.365],[-55.825,-64.708]],o:[[95.986,-41.268],[0,0]],v:[[-103,-28],[89.5,-28]],c:!1}],e:[{i:[[0,0],[0,0]],o:[[0,0],[0,0]],v:[[-103,-28],[89.5,-28]],c:!1}]},{t:102}],ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[1,1,1,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:67,ix:5},lc:1,lj:1,ml:4,ml2:{a:0,k:4,ix:8},nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Shape 1",np:2,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:145,st:0,bm:0},{ddd:0,ind:25,ty:4,nm:"Tail Outlines",parent:17,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:1,k:[{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:0,s:[0],e:[0]},{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:3,s:[0],e:[-58]},{i:{x:[.44],y:[1]},o:{x:[.167],y:[.167]},n:["0p44_1_0p167_0p167"],t:10,s:[-58],e:[90]},{i:{x:[.44],y:[1]},o:{x:[.167],y:[.144]},n:["0p44_1_0p167_0p144"],t:20,s:[90],e:[-14]},{i:{x:[.833],y:[1]},o:{x:[.167],y:[0]},n:["0p833_1_0p167_0"],t:27,s:[-14],e:[0]},{i:{x:[.833],y:[1]},o:{x:[.167],y:[0]},n:["0p833_1_0p167_0"],t:32,s:[0],e:[18]},{i:{x:[.833],y:[1]},o:{x:[.167],y:[0]},n:["0p833_1_0p167_0"],t:44,s:[18],e:[13]},{i:{x:[.833],y:[1]},o:{x:[.167],y:[0]},n:["0p833_1_0p167_0"],t:64,s:[13],e:[13]},{i:{x:[.833],y:[1]},o:{x:[.167],y:[0]},n:["0p833_1_0p167_0"],t:91,s:[13],e:[74]},{i:{x:[.833],y:[1]},o:{x:[.167],y:[0]},n:["0p833_1_0p167_0"],t:96,s:[74],e:[-31]},{i:{x:[.833],y:[.833]},o:{x:[.167],y:[0]},n:["0p833_0p833_0p167_0"],t:101,s:[-31],e:[0]},{t:106}],ix:10},p:{a:0,k:[38.746,23.271,0],ix:2},a:{a:0,k:[84.645,85.983,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,12.395],[12.395,0],[0,-12.395],[-12.394,0]],o:[[0,-12.395],[-12.394,0],[0,12.395],[12.395,0]],v:[[22.443,0],[-.001,-22.443],[-22.443,0],[-.001,22.443]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[32.612,22.693],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 1",np:2,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[-85.563,7.013]],o:[[0,0],[0,0]],v:[[-25.949,-37.171],[42.781,30.158]],c:!1},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[.6,.6,.6,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:6.312,ix:5},lc:1,lj:1,ml:10,ml2:{a:0,k:10,ix:8},nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[58.561,55.656],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 2",np:2,cix:2,ix:2,mn:"ADBE Vector Group",hd:!1}],ip:0,op:145,st:0,bm:0},{ddd:0,ind:26,ty:4,nm:"Surfboard",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:1,k:[{i:{x:[.102],y:[1]},o:{x:[.319],y:[0]},n:["0p102_1_0p319_0"],t:-47,s:[-5],e:[-3.5]},{i:{x:[.755],y:[1]},o:{x:[.758],y:[0]},n:["0p755_1_0p758_0"],t:-31,s:[-3.5],e:[2.5]},{i:{x:[.59],y:[1]},o:{x:[.397],y:[0]},n:["0p59_1_0p397_0"],t:-13,s:[2.5],e:[-5]},{i:{x:[.102],y:[1]},o:{x:[.319],y:[0]},n:["0p102_1_0p319_0"],t:4,s:[-5],e:[-3.5]},{i:{x:[.755],y:[1]},o:{x:[.758],y:[0]},n:["0p755_1_0p758_0"],t:20,s:[-3.5],e:[2.5]},{i:{x:[.59],y:[1]},o:{x:[.397],y:[0]},n:["0p59_1_0p397_0"],t:38,s:[2.5],e:[-5]},{i:{x:[.102],y:[1]},o:{x:[.319],y:[0]},n:["0p102_1_0p319_0"],t:55,s:[-5],e:[-3.5]},{i:{x:[.755],y:[1]},o:{x:[.758],y:[0]},n:["0p755_1_0p758_0"],t:71,s:[-3.5],e:[2.5]},{i:{x:[.59],y:[1]},o:{x:[.397],y:[0]},n:["0p59_1_0p397_0"],t:89,s:[2.5],e:[-5]},{i:{x:[.102],y:[1]},o:{x:[.319],y:[0]},n:["0p102_1_0p319_0"],t:106,s:[-5],e:[-3.5]},{i:{x:[.755],y:[1]},o:{x:[.758],y:[0]},n:["0p755_1_0p758_0"],t:122,s:[-3.5],e:[2.5]},{i:{x:[.59],y:[1]},o:{x:[.397],y:[0]},n:["0p59_1_0p397_0"],t:140,s:[2.5],e:[-5]},{t:157}],ix:10},p:{s:!0,x:{a:1,k:[{i:{x:[.515],y:[.985]},o:{x:[.578],y:[-.007]},n:["0p515_0p985_0p578_-0p007"],t:0,s:[609],e:[625]},{i:{x:[.578],y:[1.003]},o:{x:[.438],y:[-.018]},n:["0p578_1p003_0p438_-0p018"],t:16,s:[625],e:[599]},{i:{x:[.76],y:[1]},o:{x:[.52],y:[-.01]},n:["0p76_1_0p52_-0p01"],t:34,s:[599],e:[609]},{i:{x:[.515],y:[.985]},o:{x:[.578],y:[-.007]},n:["0p515_0p985_0p578_-0p007"],t:51,s:[609],e:[625]},{i:{x:[.578],y:[1.003]},o:{x:[.438],y:[-.018]},n:["0p578_1p003_0p438_-0p018"],t:67,s:[625],e:[599]},{i:{x:[.76],y:[1]},o:{x:[.52],y:[-.01]},n:["0p76_1_0p52_-0p01"],t:85,s:[599],e:[609]},{i:{x:[.515],y:[.985]},o:{x:[.578],y:[-.007]},n:["0p515_0p985_0p578_-0p007"],t:102,s:[609],e:[625]},{i:{x:[.578],y:[1.003]},o:{x:[.438],y:[-.018]},n:["0p578_1p003_0p438_-0p018"],t:118,s:[625],e:[599]},{i:{x:[.76],y:[1]},o:{x:[.52],y:[-.01]},n:["0p76_1_0p52_-0p01"],t:136,s:[599],e:[609]},{i:{x:[.515],y:[.985]},o:{x:[.578],y:[-.007]},n:["0p515_0p985_0p578_-0p007"],t:153,s:[609],e:[625]},{i:{x:[.578],y:[1.003]},o:{x:[.438],y:[-.018]},n:["0p578_1p003_0p438_-0p018"],t:169,s:[625],e:[599]},{i:{x:[.76],y:[1]},o:{x:[.52],y:[-.01]},n:["0p76_1_0p52_-0p01"],t:187,s:[599],e:[609]},{t:204}],ix:3},y:{a:1,k:[{i:{x:[.59],y:[1]},o:{x:[.41],y:[0]},n:["0p59_1_0p41_0"],t:-54,s:[919],e:[921]},{i:{x:[.59],y:[1]},o:{x:[.619],y:[-.004]},n:["0p59_1_0p619_-0p004"],t:-38,s:[921],e:[905]},{i:{x:[.59],y:[1]},o:{x:[.41],y:[0]},n:["0p59_1_0p41_0"],t:-20,s:[905],e:[919]},{i:{x:[.59],y:[1]},o:{x:[.41],y:[0]},n:["0p59_1_0p41_0"],t:-3,s:[919],e:[921]},{i:{x:[.59],y:[1]},o:{x:[.619],y:[-.004]},n:["0p59_1_0p619_-0p004"],t:13,s:[921],e:[905]},{i:{x:[.59],y:[1]},o:{x:[.41],y:[0]},n:["0p59_1_0p41_0"],t:31,s:[905],e:[919]},{i:{x:[.59],y:[1]},o:{x:[.41],y:[0]},n:["0p59_1_0p41_0"],t:48,s:[919],e:[921]},{i:{x:[.59],y:[1]},o:{x:[.619],y:[-.004]},n:["0p59_1_0p619_-0p004"],t:64,s:[921],e:[905]},{i:{x:[.59],y:[1]},o:{x:[.41],y:[0]},n:["0p59_1_0p41_0"],t:82,s:[905],e:[919]},{i:{x:[.59],y:[1]},o:{x:[.41],y:[0]},n:["0p59_1_0p41_0"],t:99,s:[919],e:[921]},{i:{x:[.59],y:[1]},o:{x:[.619],y:[-.004]},n:["0p59_1_0p619_-0p004"],t:115,s:[921],e:[905]},{i:{x:[.59],y:[1]},o:{x:[.41],y:[0]},n:["0p59_1_0p41_0"],t:133,s:[905],e:[919]},{t:150}],ix:4}},a:{a:0,k:[-208,-2,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[0,0],[0,0],[-.402,-1.285],[-9.061,0],[0,0],[-2.728,8.713],[1.347,0]],o:[[0,0],[0,0],[-1.347,0],[2.728,8.713],[0,0],[9.061,0],[.402,-1.285],[0,0]],v:[[243,-9],[-243,-9],[-250.675,-9],[-252.593,-6.408],[-225,9],[225,9],[252.593,-6.408],[250.675,-9]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[.231372997808,.470587995941,.623528992896,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:0,ix:5},lc:1,lj:1,ml:4,ml2:{a:0,k:4,ix:8},nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[.827450980392,.090196078431,.098039215686,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Board",np:3,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[-1.152,-1.152],[0,0],[0,0],[0,11.45],[0,0]],o:[[0,0],[0,0],[11.45,0],[0,0],[0,0]],v:[[-9.79,-15.166],[-9.79,16.317],[-9.79,16.317],[10.942,-4.415],[10.942,-15.933]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[.231372997808,.470587995941,.623528992896,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:0,ix:5},lc:1,lj:1,ml:4,ml2:{a:0,k:4,ix:8},nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[.374678308824,.374678308824,.374678308824,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[-184,20],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"fin",np:3,cix:2,ix:2,mn:"ADBE Vector Group",hd:!1}],ip:0,op:145,st:0,bm:0}]}],layers=[{ddd:0,ind:1,ty:3,nm:"NULL CONTROL",hd:!0,sr:1,ks:{o:{a:0,k:0,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[406,380,0],ix:2},a:{a:0,k:[60,60,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,ip:0,op:317,st:0,bm:0},{ddd:0,ind:2,ty:0,nm:"Poodle Main Loop",parent:1,refId:"comp_0",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[60,60,0],ix:2},a:{a:0,k:[750,750,0],ix:1},s:{a:0,k:[75,75,100],ix:6}},ao:0,w:1500,h:1500,ip:0,op:51,st:0,bm:0},{ddd:0,ind:3,ty:0,nm:"Poodle Main Walk out",parent:1,refId:"comp_2",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[60,60,0],ix:2},a:{a:0,k:[750,750,0],ix:1},s:{a:0,k:[75,75,100],ix:6}},ao:0,w:1500,h:1500,ip:51,op:209,st:51,bm:0},{ddd:0,ind:4,ty:0,nm:"Poodle Main Hand Stand",parent:1,refId:"comp_3",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[60,60,0],ix:2},a:{a:0,k:[750,750,0],ix:1},s:{a:0,k:[75,75,100],ix:6}},ao:0,w:1500,h:1500,ip:209,op:317,st:207,bm:0}],markers=[],spinner={v,fr,ip,op,w,h,nm,ddd,assets,layers,markers};var lottie$1={exports:{}};(function(module,exports){typeof document<"u"&&typeof navigator<"u"&&function(e,a){module.exports=a()}(commonjsGlobal,function(){var svgNS="http://www.w3.org/2000/svg",locationHref="",_useWebWorker=!1,initialDefaultFrame=-999999,setWebWorker=function(a){_useWebWorker=!!a},getWebWorker=function(){return _useWebWorker},setLocationHref=function(a){locationHref=a},getLocationHref=function(){return locationHref};function createTag(e){return document.createElement(e)}function extendPrototype(e,a){var i,s=e.length,o;for(i=0;i<s;i+=1){o=e[i].prototype;for(var c in o)Object.prototype.hasOwnProperty.call(o,c)&&(a.prototype[c]=o[c])}}function getDescriptor(e,a){return Object.getOwnPropertyDescriptor(e,a)}function createProxyFunction(e){function a(){}return a.prototype=e,a}var audioControllerFactory=function(){function e(a){this.audios=[],this.audioFactory=a,this._volume=1,this._isMuted=!1}return e.prototype={addAudio:function(i){this.audios.push(i)},pause:function(){var i,s=this.audios.length;for(i=0;i<s;i+=1)this.audios[i].pause()},resume:function(){var i,s=this.audios.length;for(i=0;i<s;i+=1)this.audios[i].resume()},setRate:function(i){var s,o=this.audios.length;for(s=0;s<o;s+=1)this.audios[s].setRate(i)},createAudio:function(i){return this.audioFactory?this.audioFactory(i):window.Howl?new window.Howl({src:[i]}):{isPlaying:!1,play:function(){this.isPlaying=!0},seek:function(){this.isPlaying=!1},playing:function(){},rate:function(){},setVolume:function(){}}},setAudioFactory:function(i){this.audioFactory=i},setVolume:function(i){this._volume=i,this._updateVolume()},mute:function(){this._isMuted=!0,this._updateVolume()},unmute:function(){this._isMuted=!1,this._updateVolume()},getVolume:function(){return this._volume},_updateVolume:function(){var i,s=this.audios.length;for(i=0;i<s;i+=1)this.audios[i].volume(this._volume*(this._isMuted?0:1))}},function(){return new e}}(),createTypedArray=function(){function e(i,s){var o=0,c=[],d;switch(i){case"int16":case"uint8c":d=1;break;default:d=1.1;break}for(o=0;o<s;o+=1)c.push(d);return c}function a(i,s){return i==="float32"?new Float32Array(s):i==="int16"?new Int16Array(s):i==="uint8c"?new Uint8ClampedArray(s):e(i,s)}return typeof Uint8ClampedArray=="function"&&typeof Float32Array=="function"?a:e}();function createSizedArray(e){return Array.apply(null,{length:e})}function _typeof$6(e){"@babel/helpers - typeof";return _typeof$6=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof$6(e)}var subframeEnabled=!0,expressionsPlugin=null,expressionsInterfaces=null,idPrefix$1="",isSafari=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),bmPow=Math.pow,bmSqrt=Math.sqrt,bmFloor=Math.floor,bmMax=Math.max,bmMin=Math.min,BMMath={};(function(){var e=["abs","acos","acosh","asin","asinh","atan","atanh","atan2","ceil","cbrt","expm1","clz32","cos","cosh","exp","floor","fround","hypot","imul","log","log1p","log2","log10","max","min","pow","random","round","sign","sin","sinh","sqrt","tan","tanh","trunc","E","LN10","LN2","LOG10E","LOG2E","PI","SQRT1_2","SQRT2"],a,i=e.length;for(a=0;a<i;a+=1)BMMath[e[a]]=Math[e[a]]})(),BMMath.random=Math.random,BMMath.abs=function(e){var a=_typeof$6(e);if(a==="object"&&e.length){var i=createSizedArray(e.length),s,o=e.length;for(s=0;s<o;s+=1)i[s]=Math.abs(e[s]);return i}return Math.abs(e)};var defaultCurveSegments=150,degToRads=Math.PI/180,roundCorner=.5519;function styleDiv(e){e.style.position="absolute",e.style.top=0,e.style.left=0,e.style.display="block",e.style.transformOrigin="0 0",e.style.webkitTransformOrigin="0 0",e.style.backfaceVisibility="visible",e.style.webkitBackfaceVisibility="visible",e.style.transformStyle="preserve-3d",e.style.webkitTransformStyle="preserve-3d",e.style.mozTransformStyle="preserve-3d"}function BMEnterFrameEvent(e,a,i,s){this.type=e,this.currentTime=a,this.totalTime=i,this.direction=s<0?-1:1}function BMCompleteEvent(e,a){this.type=e,this.direction=a<0?-1:1}function BMCompleteLoopEvent(e,a,i,s){this.type=e,this.currentLoop=i,this.totalLoops=a,this.direction=s<0?-1:1}function BMSegmentStartEvent(e,a,i){this.type=e,this.firstFrame=a,this.totalFrames=i}function BMDestroyEvent(e,a){this.type=e,this.target=a}function BMRenderFrameErrorEvent(e,a){this.type="renderFrameError",this.nativeError=e,this.currentTime=a}function BMConfigErrorEvent(e){this.type="configError",this.nativeError=e}var createElementID=function(){var e=0;return function(){return e+=1,idPrefix$1+"__lottie_element_"+e}}();function HSVtoRGB(e,a,i){var s,o,c,d,b,g,_,tt;switch(d=Math.floor(e*6),b=e*6-d,g=i*(1-a),_=i*(1-b*a),tt=i*(1-(1-b)*a),d%6){case 0:s=i,o=tt,c=g;break;case 1:s=_,o=i,c=g;break;case 2:s=g,o=i,c=tt;break;case 3:s=g,o=_,c=i;break;case 4:s=tt,o=g,c=i;break;case 5:s=i,o=g,c=_;break}return[s,o,c]}function RGBtoHSV(e,a,i){var s=Math.max(e,a,i),o=Math.min(e,a,i),c=s-o,d,b=s===0?0:c/s,g=s/255;switch(s){case o:d=0;break;case e:d=a-i+c*(a<i?6:0),d/=6*c;break;case a:d=i-e+c*2,d/=6*c;break;case i:d=e-a+c*4,d/=6*c;break}return[d,b,g]}function addSaturationToRGB(e,a){var i=RGBtoHSV(e[0]*255,e[1]*255,e[2]*255);return i[1]+=a,i[1]>1?i[1]=1:i[1]<=0&&(i[1]=0),HSVtoRGB(i[0],i[1],i[2])}function addBrightnessToRGB(e,a){var i=RGBtoHSV(e[0]*255,e[1]*255,e[2]*255);return i[2]+=a,i[2]>1?i[2]=1:i[2]<0&&(i[2]=0),HSVtoRGB(i[0],i[1],i[2])}function addHueToRGB(e,a){var i=RGBtoHSV(e[0]*255,e[1]*255,e[2]*255);return i[0]+=a/360,i[0]>1?i[0]-=1:i[0]<0&&(i[0]+=1),HSVtoRGB(i[0],i[1],i[2])}var rgbToHex=function(){var e=[],a,i;for(a=0;a<256;a+=1)i=a.toString(16),e[a]=i.length===1?"0"+i:i;return function(s,o,c){return s<0&&(s=0),o<0&&(o=0),c<0&&(c=0),"#"+e[s]+e[o]+e[c]}}(),setSubframeEnabled=function(a){subframeEnabled=!!a},getSubframeEnabled=function(){return subframeEnabled},setExpressionsPlugin=function(a){expressionsPlugin=a},getExpressionsPlugin=function(){return expressionsPlugin},setExpressionInterfaces=function(a){expressionsInterfaces=a},getExpressionInterfaces=function(){return expressionsInterfaces},setDefaultCurveSegments=function(a){defaultCurveSegments=a},getDefaultCurveSegments=function(){return defaultCurveSegments},setIdPrefix=function(a){idPrefix$1=a};function createNS(e){return document.createElementNS(svgNS,e)}function _typeof$5(e){"@babel/helpers - typeof";return _typeof$5=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof$5(e)}var dataManager=function(){var e=1,a=[],i,s,o={onmessage:function(){},postMessage:function(st){i({data:st})}},c={postMessage:function(st){o.onmessage({data:st})}};function d(et){if(window.Worker&&window.Blob&&getWebWorker()){var st=new Blob(["var _workerSelf = self; self.onmessage = ",et.toString()],{type:"text/javascript"}),nt=URL.createObjectURL(st);return new Worker(nt)}return i=et,o}function b(){s||(s=d(function(st){function nt(){function ht(bt,ct){var xt,ot,ut=bt.length,yt,dt,kt,At;for(ot=0;ot<ut;ot+=1)if(xt=bt[ot],"ks"in xt&&!xt.completed){if(xt.completed=!0,xt.hasMask){var Pt=xt.masksProperties;for(dt=Pt.length,yt=0;yt<dt;yt+=1)if(Pt[yt].pt.k.i)lt(Pt[yt].pt.k);else for(At=Pt[yt].pt.k.length,kt=0;kt<At;kt+=1)Pt[yt].pt.k[kt].s&&lt(Pt[yt].pt.k[kt].s[0]),Pt[yt].pt.k[kt].e&&lt(Pt[yt].pt.k[kt].e[0])}xt.ty===0?(xt.layers=j(xt.refId,ct),ht(xt.layers,ct)):xt.ty===4?at(xt.shapes):xt.ty===5&&St(xt)}}function $(bt,ct){if(bt){var xt=0,ot=bt.length;for(xt=0;xt<ot;xt+=1)bt[xt].t===1&&(bt[xt].data.layers=j(bt[xt].data.refId,ct),ht(bt[xt].data.layers,ct))}}function _e(bt,ct){for(var xt=0,ot=ct.length;xt<ot;){if(ct[xt].id===bt)return ct[xt];xt+=1}return null}function j(bt,ct){var xt=_e(bt,ct);return xt?xt.layers.__used?JSON.parse(JSON.stringify(xt.layers)):(xt.layers.__used=!0,xt.layers):null}function at(bt){var ct,xt=bt.length,ot,ut;for(ct=xt-1;ct>=0;ct-=1)if(bt[ct].ty==="sh")if(bt[ct].ks.k.i)lt(bt[ct].ks.k);else for(ut=bt[ct].ks.k.length,ot=0;ot<ut;ot+=1)bt[ct].ks.k[ot].s&&lt(bt[ct].ks.k[ot].s[0]),bt[ct].ks.k[ot].e&&lt(bt[ct].ks.k[ot].e[0]);else bt[ct].ty==="gr"&&at(bt[ct].it)}function lt(bt){var ct,xt=bt.i.length;for(ct=0;ct<xt;ct+=1)bt.i[ct][0]+=bt.v[ct][0],bt.i[ct][1]+=bt.v[ct][1],bt.o[ct][0]+=bt.v[ct][0],bt.o[ct][1]+=bt.v[ct][1]}function pt(bt,ct){var xt=ct?ct.split("."):[100,100,100];return bt[0]>xt[0]?!0:xt[0]>bt[0]?!1:bt[1]>xt[1]?!0:xt[1]>bt[1]?!1:bt[2]>xt[2]?!0:xt[2]>bt[2]?!1:null}var ft=function(){var bt=[4,4,14];function ct(ot){var ut=ot.t.d;ot.t.d={k:[{s:ut,t:0}]}}function xt(ot){var ut,yt=ot.length;for(ut=0;ut<yt;ut+=1)ot[ut].ty===5&&ct(ot[ut])}return function(ot){if(pt(bt,ot.v)&&(xt(ot.layers),ot.assets)){var ut,yt=ot.assets.length;for(ut=0;ut<yt;ut+=1)ot.assets[ut].layers&&xt(ot.assets[ut].layers)}}}(),mt=function(){var bt=[4,7,99];return function(ct){if(ct.chars&&!pt(bt,ct.v)){var xt,ot=ct.chars.length;for(xt=0;xt<ot;xt+=1){var ut=ct.chars[xt];ut.data&&ut.data.shapes&&(at(ut.data.shapes),ut.data.ip=0,ut.data.op=99999,ut.data.st=0,ut.data.sr=1,ut.data.ks={p:{k:[0,0],a:0},s:{k:[100,100],a:0},a:{k:[0,0],a:0},r:{k:0,a:0},o:{k:100,a:0}},ct.chars[xt].t||(ut.data.shapes.push({ty:"no"}),ut.data.shapes[0].it.push({p:{k:[0,0],a:0},s:{k:[100,100],a:0},a:{k:[0,0],a:0},r:{k:0,a:0},o:{k:100,a:0},sk:{k:0,a:0},sa:{k:0,a:0},ty:"tr"})))}}}}(),vt=function(){var bt=[5,7,15];function ct(ot){var ut=ot.t.p;typeof ut.a=="number"&&(ut.a={a:0,k:ut.a}),typeof ut.p=="number"&&(ut.p={a:0,k:ut.p}),typeof ut.r=="number"&&(ut.r={a:0,k:ut.r})}function xt(ot){var ut,yt=ot.length;for(ut=0;ut<yt;ut+=1)ot[ut].ty===5&&ct(ot[ut])}return function(ot){if(pt(bt,ot.v)&&(xt(ot.layers),ot.assets)){var ut,yt=ot.assets.length;for(ut=0;ut<yt;ut+=1)ot.assets[ut].layers&&xt(ot.assets[ut].layers)}}}(),_t=function(){var bt=[4,1,9];function ct(ot){var ut,yt=ot.length,dt,kt;for(ut=0;ut<yt;ut+=1)if(ot[ut].ty==="gr")ct(ot[ut].it);else if(ot[ut].ty==="fl"||ot[ut].ty==="st")if(ot[ut].c.k&&ot[ut].c.k[0].i)for(kt=ot[ut].c.k.length,dt=0;dt<kt;dt+=1)ot[ut].c.k[dt].s&&(ot[ut].c.k[dt].s[0]/=255,ot[ut].c.k[dt].s[1]/=255,ot[ut].c.k[dt].s[2]/=255,ot[ut].c.k[dt].s[3]/=255),ot[ut].c.k[dt].e&&(ot[ut].c.k[dt].e[0]/=255,ot[ut].c.k[dt].e[1]/=255,ot[ut].c.k[dt].e[2]/=255,ot[ut].c.k[dt].e[3]/=255);else ot[ut].c.k[0]/=255,ot[ut].c.k[1]/=255,ot[ut].c.k[2]/=255,ot[ut].c.k[3]/=255}function xt(ot){var ut,yt=ot.length;for(ut=0;ut<yt;ut+=1)ot[ut].ty===4&&ct(ot[ut].shapes)}return function(ot){if(pt(bt,ot.v)&&(xt(ot.layers),ot.assets)){var ut,yt=ot.assets.length;for(ut=0;ut<yt;ut+=1)ot.assets[ut].layers&&xt(ot.assets[ut].layers)}}}(),Et=function(){var bt=[4,4,18];function ct(ot){var ut,yt=ot.length,dt,kt;for(ut=yt-1;ut>=0;ut-=1)if(ot[ut].ty==="sh")if(ot[ut].ks.k.i)ot[ut].ks.k.c=ot[ut].closed;else for(kt=ot[ut].ks.k.length,dt=0;dt<kt;dt+=1)ot[ut].ks.k[dt].s&&(ot[ut].ks.k[dt].s[0].c=ot[ut].closed),ot[ut].ks.k[dt].e&&(ot[ut].ks.k[dt].e[0].c=ot[ut].closed);else ot[ut].ty==="gr"&&ct(ot[ut].it)}function xt(ot){var ut,yt,dt=ot.length,kt,At,Pt,Dt;for(yt=0;yt<dt;yt+=1){if(ut=ot[yt],ut.hasMask){var wt=ut.masksProperties;for(At=wt.length,kt=0;kt<At;kt+=1)if(wt[kt].pt.k.i)wt[kt].pt.k.c=wt[kt].cl;else for(Dt=wt[kt].pt.k.length,Pt=0;Pt<Dt;Pt+=1)wt[kt].pt.k[Pt].s&&(wt[kt].pt.k[Pt].s[0].c=wt[kt].cl),wt[kt].pt.k[Pt].e&&(wt[kt].pt.k[Pt].e[0].c=wt[kt].cl)}ut.ty===4&&ct(ut.shapes)}}return function(ot){if(pt(bt,ot.v)&&(xt(ot.layers),ot.assets)){var ut,yt=ot.assets.length;for(ut=0;ut<yt;ut+=1)ot.assets[ut].layers&&xt(ot.assets[ut].layers)}}}();function gt(bt){bt.__complete||(_t(bt),ft(bt),mt(bt),vt(bt),Et(bt),ht(bt.layers,bt.assets),$(bt.chars,bt.assets),bt.__complete=!0)}function St(bt){bt.t.a.length===0&&"m"in bt.t.p}var Ct={};return Ct.completeData=gt,Ct.checkColors=_t,Ct.checkChars=mt,Ct.checkPathProperties=vt,Ct.checkShapes=Et,Ct.completeLayers=ht,Ct}if(c.dataManager||(c.dataManager=nt()),c.assetLoader||(c.assetLoader=function(){function ht(_e){var j=_e.getResponseHeader("content-type");return j&&_e.responseType==="json"&&j.indexOf("json")!==-1||_e.response&&_typeof$5(_e.response)==="object"?_e.response:_e.response&&typeof _e.response=="string"?JSON.parse(_e.response):_e.responseText?JSON.parse(_e.responseText):null}function $(_e,j,at,lt){var pt,ft=new XMLHttpRequest;try{ft.responseType="json"}catch{}ft.onreadystatechange=function(){if(ft.readyState===4)if(ft.status===200)pt=ht(ft),at(pt);else try{pt=ht(ft),at(pt)}catch(mt){lt&&lt(mt)}};try{ft.open(["G","E","T"].join(""),_e,!0)}catch{ft.open(["G","E","T"].join(""),j+"/"+_e,!0)}ft.send()}return{load:$}}()),st.data.type==="loadAnimation")c.assetLoader.load(st.data.path,st.data.fullPath,function(ht){c.dataManager.completeData(ht),c.postMessage({id:st.data.id,payload:ht,status:"success"})},function(){c.postMessage({id:st.data.id,status:"error"})});else if(st.data.type==="complete"){var rt=st.data.animation;c.dataManager.completeData(rt),c.postMessage({id:st.data.id,payload:rt,status:"success"})}else st.data.type==="loadData"&&c.assetLoader.load(st.data.path,st.data.fullPath,function(ht){c.postMessage({id:st.data.id,payload:ht,status:"success"})},function(){c.postMessage({id:st.data.id,status:"error"})})}),s.onmessage=function(et){var st=et.data,nt=st.id,rt=a[nt];a[nt]=null,st.status==="success"?rt.onComplete(st.payload):rt.onError&&rt.onError()})}function g(et,st){e+=1;var nt="processId_"+e;return a[nt]={onComplete:et,onError:st},nt}function _(et,st,nt){b();var rt=g(st,nt);s.postMessage({type:"loadAnimation",path:et,fullPath:window.location.origin+window.location.pathname,id:rt})}function tt(et,st,nt){b();var rt=g(st,nt);s.postMessage({type:"loadData",path:et,fullPath:window.location.origin+window.location.pathname,id:rt})}function it(et,st,nt){b();var rt=g(st,nt);s.postMessage({type:"complete",animation:et,id:rt})}return{loadAnimation:_,loadData:tt,completeAnimation:it}}(),ImagePreloader=function(){var e=function(){var $=createTag("canvas");$.width=1,$.height=1;var _e=$.getContext("2d");return _e.fillStyle="rgba(0,0,0,0)",_e.fillRect(0,0,1,1),$}();function a(){this.loadedAssets+=1,this.loadedAssets===this.totalImages&&this.loadedFootagesCount===this.totalFootages&&this.imagesLoadedCb&&this.imagesLoadedCb(null)}function i(){this.loadedFootagesCount+=1,this.loadedAssets===this.totalImages&&this.loadedFootagesCount===this.totalFootages&&this.imagesLoadedCb&&this.imagesLoadedCb(null)}function s($,_e,j){var at="";if($.e)at=$.p;else if(_e){var lt=$.p;lt.indexOf("images/")!==-1&&(lt=lt.split("/")[1]),at=_e+lt}else at=j,at+=$.u?$.u:"",at+=$.p;return at}function o($){var _e=0,j=setInterval((function(){var at=$.getBBox();(at.width||_e>500)&&(this._imageLoaded(),clearInterval(j)),_e+=1}).bind(this),50)}function c($){var _e=s($,this.assetsPath,this.path),j=createNS("image");isSafari?this.testImageLoaded(j):j.addEventListener("load",this._imageLoaded,!1),j.addEventListener("error",(function(){at.img=e,this._imageLoaded()}).bind(this),!1),j.setAttributeNS("http://www.w3.org/1999/xlink","href",_e),this._elementHelper.append?this._elementHelper.append(j):this._elementHelper.appendChild(j);var at={img:j,assetData:$};return at}function d($){var _e=s($,this.assetsPath,this.path),j=createTag("img");j.crossOrigin="anonymous",j.addEventListener("load",this._imageLoaded,!1),j.addEventListener("error",(function(){at.img=e,this._imageLoaded()}).bind(this),!1),j.src=_e;var at={img:j,assetData:$};return at}function b($){var _e={assetData:$},j=s($,this.assetsPath,this.path);return dataManager.loadData(j,(function(at){_e.img=at,this._footageLoaded()}).bind(this),(function(){_e.img={},this._footageLoaded()}).bind(this)),_e}function g($,_e){this.imagesLoadedCb=_e;var j,at=$.length;for(j=0;j<at;j+=1)$[j].layers||(!$[j].t||$[j].t==="seq"?(this.totalImages+=1,this.images.push(this._createImageData($[j]))):$[j].t===3&&(this.totalFootages+=1,this.images.push(this.createFootageData($[j]))))}function _($){this.path=$||""}function tt($){this.assetsPath=$||""}function it($){for(var _e=0,j=this.images.length;_e<j;){if(this.images[_e].assetData===$)return this.images[_e].img;_e+=1}return null}function et(){this.imagesLoadedCb=null,this.images.length=0}function st(){return this.totalImages===this.loadedAssets}function nt(){return this.totalFootages===this.loadedFootagesCount}function rt($,_e){$==="svg"?(this._elementHelper=_e,this._createImageData=this.createImageData.bind(this)):this._createImageData=this.createImgData.bind(this)}function ht(){this._imageLoaded=a.bind(this),this._footageLoaded=i.bind(this),this.testImageLoaded=o.bind(this),this.createFootageData=b.bind(this),this.assetsPath="",this.path="",this.totalImages=0,this.totalFootages=0,this.loadedAssets=0,this.loadedFootagesCount=0,this.imagesLoadedCb=null,this.images=[]}return ht.prototype={loadAssets:g,setAssetsPath:tt,setPath:_,loadedImages:st,loadedFootages:nt,destroy:et,getAsset:it,createImgData:d,createImageData:c,imageLoaded:a,footageLoaded:i,setCacheType:rt},ht}();function BaseEvent(){}BaseEvent.prototype={triggerEvent:function(a,i){if(this._cbs[a])for(var s=this._cbs[a],o=0;o<s.length;o+=1)s[o](i)},addEventListener:function(a,i){return this._cbs[a]||(this._cbs[a]=[]),this._cbs[a].push(i),(function(){this.removeEventListener(a,i)}).bind(this)},removeEventListener:function(a,i){if(!i)this._cbs[a]=null;else if(this._cbs[a]){for(var s=0,o=this._cbs[a].length;s<o;)this._cbs[a][s]===i&&(this._cbs[a].splice(s,1),s-=1,o-=1),s+=1;this._cbs[a].length||(this._cbs[a]=null)}}};var markerParser=function(){function e(a){for(var i=a.split(`\r
`),s={},o,c=0,d=0;d<i.length;d+=1)o=i[d].split(":"),o.length===2&&(s[o[0]]=o[1].trim(),c+=1);if(c===0)throw new Error;return s}return function(a){for(var i=[],s=0;s<a.length;s+=1){var o=a[s],c={time:o.tm,duration:o.dr};try{c.payload=JSON.parse(a[s].cm)}catch{try{c.payload=e(a[s].cm)}catch{c.payload={name:a[s].cm}}}i.push(c)}return i}}(),ProjectInterface=function(){function e(a){this.compositions.push(a)}return function(){function a(i){for(var s=0,o=this.compositions.length;s<o;){if(this.compositions[s].data&&this.compositions[s].data.nm===i)return this.compositions[s].prepareFrame&&this.compositions[s].data.xt&&this.compositions[s].prepareFrame(this.currentFrame),this.compositions[s].compInterface;s+=1}return null}return a.compositions=[],a.currentFrame=0,a.registerComposition=e,a}}(),renderers={},registerRenderer=function(a,i){renderers[a]=i};function getRenderer(e){return renderers[e]}function getRegisteredRenderer(){if(renderers.canvas)return"canvas";for(var e in renderers)if(renderers[e])return e;return""}function _typeof$4(e){"@babel/helpers - typeof";return _typeof$4=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof$4(e)}var AnimationItem=function(){this._cbs=[],this.name="",this.path="",this.isLoaded=!1,this.currentFrame=0,this.currentRawFrame=0,this.firstFrame=0,this.totalFrames=0,this.frameRate=0,this.frameMult=0,this.playSpeed=1,this.playDirection=1,this.playCount=0,this.animationData={},this.assets=[],this.isPaused=!0,this.autoplay=!1,this.loop=!0,this.renderer=null,this.animationID=createElementID(),this.assetsPath="",this.timeCompleted=0,this.segmentPos=0,this.isSubframeEnabled=getSubframeEnabled(),this.segments=[],this._idle=!0,this._completedLoop=!1,this.projectInterface=ProjectInterface(),this.imagePreloader=new ImagePreloader,this.audioController=audioControllerFactory(),this.markers=[],this.configAnimation=this.configAnimation.bind(this),this.onSetupError=this.onSetupError.bind(this),this.onSegmentComplete=this.onSegmentComplete.bind(this),this.drawnFrameEvent=new BMEnterFrameEvent("drawnFrame",0,0,0),this.expressionsPlugin=getExpressionsPlugin()};extendPrototype([BaseEvent],AnimationItem),AnimationItem.prototype.setParams=function(e){(e.wrapper||e.container)&&(this.wrapper=e.wrapper||e.container);var a="svg";e.animType?a=e.animType:e.renderer&&(a=e.renderer);var i=getRenderer(a);this.renderer=new i(this,e.rendererSettings),this.imagePreloader.setCacheType(a,this.renderer.globalData.defs),this.renderer.setProjectInterface(this.projectInterface),this.animType=a,e.loop===""||e.loop===null||e.loop===void 0||e.loop===!0?this.loop=!0:e.loop===!1?this.loop=!1:this.loop=parseInt(e.loop,10),this.autoplay="autoplay"in e?e.autoplay:!0,this.name=e.name?e.name:"",this.autoloadSegments=Object.prototype.hasOwnProperty.call(e,"autoloadSegments")?e.autoloadSegments:!0,this.assetsPath=e.assetsPath,this.initialSegment=e.initialSegment,e.audioFactory&&this.audioController.setAudioFactory(e.audioFactory),e.animationData?this.setupAnimation(e.animationData):e.path&&(e.path.lastIndexOf("\\")!==-1?this.path=e.path.substr(0,e.path.lastIndexOf("\\")+1):this.path=e.path.substr(0,e.path.lastIndexOf("/")+1),this.fileName=e.path.substr(e.path.lastIndexOf("/")+1),this.fileName=this.fileName.substr(0,this.fileName.lastIndexOf(".json")),dataManager.loadAnimation(e.path,this.configAnimation,this.onSetupError))},AnimationItem.prototype.onSetupError=function(){this.trigger("data_failed")},AnimationItem.prototype.setupAnimation=function(e){dataManager.completeAnimation(e,this.configAnimation)},AnimationItem.prototype.setData=function(e,a){a&&_typeof$4(a)!=="object"&&(a=JSON.parse(a));var i={wrapper:e,animationData:a},s=e.attributes;i.path=s.getNamedItem("data-animation-path")?s.getNamedItem("data-animation-path").value:s.getNamedItem("data-bm-path")?s.getNamedItem("data-bm-path").value:s.getNamedItem("bm-path")?s.getNamedItem("bm-path").value:"",i.animType=s.getNamedItem("data-anim-type")?s.getNamedItem("data-anim-type").value:s.getNamedItem("data-bm-type")?s.getNamedItem("data-bm-type").value:s.getNamedItem("bm-type")?s.getNamedItem("bm-type").value:s.getNamedItem("data-bm-renderer")?s.getNamedItem("data-bm-renderer").value:s.getNamedItem("bm-renderer")?s.getNamedItem("bm-renderer").value:getRegisteredRenderer()||"canvas";var o=s.getNamedItem("data-anim-loop")?s.getNamedItem("data-anim-loop").value:s.getNamedItem("data-bm-loop")?s.getNamedItem("data-bm-loop").value:s.getNamedItem("bm-loop")?s.getNamedItem("bm-loop").value:"";o==="false"?i.loop=!1:o==="true"?i.loop=!0:o!==""&&(i.loop=parseInt(o,10));var c=s.getNamedItem("data-anim-autoplay")?s.getNamedItem("data-anim-autoplay").value:s.getNamedItem("data-bm-autoplay")?s.getNamedItem("data-bm-autoplay").value:s.getNamedItem("bm-autoplay")?s.getNamedItem("bm-autoplay").value:!0;i.autoplay=c!=="false",i.name=s.getNamedItem("data-name")?s.getNamedItem("data-name").value:s.getNamedItem("data-bm-name")?s.getNamedItem("data-bm-name").value:s.getNamedItem("bm-name")?s.getNamedItem("bm-name").value:"";var d=s.getNamedItem("data-anim-prerender")?s.getNamedItem("data-anim-prerender").value:s.getNamedItem("data-bm-prerender")?s.getNamedItem("data-bm-prerender").value:s.getNamedItem("bm-prerender")?s.getNamedItem("bm-prerender").value:"";d==="false"&&(i.prerender=!1),i.path?this.setParams(i):this.trigger("destroy")},AnimationItem.prototype.includeLayers=function(e){e.op>this.animationData.op&&(this.animationData.op=e.op,this.totalFrames=Math.floor(e.op-this.animationData.ip));var a=this.animationData.layers,i,s=a.length,o=e.layers,c,d=o.length;for(c=0;c<d;c+=1)for(i=0;i<s;){if(a[i].id===o[c].id){a[i]=o[c];break}i+=1}if((e.chars||e.fonts)&&(this.renderer.globalData.fontManager.addChars(e.chars),this.renderer.globalData.fontManager.addFonts(e.fonts,this.renderer.globalData.defs)),e.assets)for(s=e.assets.length,i=0;i<s;i+=1)this.animationData.assets.push(e.assets[i]);this.animationData.__complete=!1,dataManager.completeAnimation(this.animationData,this.onSegmentComplete)},AnimationItem.prototype.onSegmentComplete=function(e){this.animationData=e;var a=getExpressionsPlugin();a&&a.initExpressions(this),this.loadNextSegment()},AnimationItem.prototype.loadNextSegment=function(){var e=this.animationData.segments;if(!e||e.length===0||!this.autoloadSegments){this.trigger("data_ready"),this.timeCompleted=this.totalFrames;return}var a=e.shift();this.timeCompleted=a.time*this.frameRate;var i=this.path+this.fileName+"_"+this.segmentPos+".json";this.segmentPos+=1,dataManager.loadData(i,this.includeLayers.bind(this),(function(){this.trigger("data_failed")}).bind(this))},AnimationItem.prototype.loadSegments=function(){var e=this.animationData.segments;e||(this.timeCompleted=this.totalFrames),this.loadNextSegment()},AnimationItem.prototype.imagesLoaded=function(){this.trigger("loaded_images"),this.checkLoaded()},AnimationItem.prototype.preloadImages=function(){this.imagePreloader.setAssetsPath(this.assetsPath),this.imagePreloader.setPath(this.path),this.imagePreloader.loadAssets(this.animationData.assets,this.imagesLoaded.bind(this))},AnimationItem.prototype.configAnimation=function(e){if(this.renderer)try{this.animationData=e,this.initialSegment?(this.totalFrames=Math.floor(this.initialSegment[1]-this.initialSegment[0]),this.firstFrame=Math.round(this.initialSegment[0])):(this.totalFrames=Math.floor(this.animationData.op-this.animationData.ip),this.firstFrame=Math.round(this.animationData.ip)),this.renderer.configAnimation(e),e.assets||(e.assets=[]),this.assets=this.animationData.assets,this.frameRate=this.animationData.fr,this.frameMult=this.animationData.fr/1e3,this.renderer.searchExtraCompositions(e.assets),this.markers=markerParser(e.markers||[]),this.trigger("config_ready"),this.preloadImages(),this.loadSegments(),this.updaFrameModifier(),this.waitForFontsLoaded(),this.isPaused&&this.audioController.pause()}catch(a){this.triggerConfigError(a)}},AnimationItem.prototype.waitForFontsLoaded=function(){this.renderer&&(this.renderer.globalData.fontManager.isLoaded?this.checkLoaded():setTimeout(this.waitForFontsLoaded.bind(this),20))},AnimationItem.prototype.checkLoaded=function(){if(!this.isLoaded&&this.renderer.globalData.fontManager.isLoaded&&(this.imagePreloader.loadedImages()||this.renderer.rendererType!=="canvas")&&this.imagePreloader.loadedFootages()){this.isLoaded=!0;var e=getExpressionsPlugin();e&&e.initExpressions(this),this.renderer.initItems(),setTimeout((function(){this.trigger("DOMLoaded")}).bind(this),0),this.gotoFrame(),this.autoplay&&this.play()}},AnimationItem.prototype.resize=function(e,a){var i=typeof e=="number"?e:void 0,s=typeof a=="number"?a:void 0;this.renderer.updateContainerSize(i,s)},AnimationItem.prototype.setSubframe=function(e){this.isSubframeEnabled=!!e},AnimationItem.prototype.gotoFrame=function(){this.currentFrame=this.isSubframeEnabled?this.currentRawFrame:~~this.currentRawFrame,this.timeCompleted!==this.totalFrames&&this.currentFrame>this.timeCompleted&&(this.currentFrame=this.timeCompleted),this.trigger("enterFrame"),this.renderFrame(),this.trigger("drawnFrame")},AnimationItem.prototype.renderFrame=function(){if(!(this.isLoaded===!1||!this.renderer))try{this.expressionsPlugin&&this.expressionsPlugin.resetFrame(),this.renderer.renderFrame(this.currentFrame+this.firstFrame)}catch(e){this.triggerRenderFrameError(e)}},AnimationItem.prototype.play=function(e){e&&this.name!==e||this.isPaused===!0&&(this.isPaused=!1,this.trigger("_play"),this.audioController.resume(),this._idle&&(this._idle=!1,this.trigger("_active")))},AnimationItem.prototype.pause=function(e){e&&this.name!==e||this.isPaused===!1&&(this.isPaused=!0,this.trigger("_pause"),this._idle=!0,this.trigger("_idle"),this.audioController.pause())},AnimationItem.prototype.togglePause=function(e){e&&this.name!==e||(this.isPaused===!0?this.play():this.pause())},AnimationItem.prototype.stop=function(e){e&&this.name!==e||(this.pause(),this.playCount=0,this._completedLoop=!1,this.setCurrentRawFrameValue(0))},AnimationItem.prototype.getMarkerData=function(e){for(var a,i=0;i<this.markers.length;i+=1)if(a=this.markers[i],a.payload&&a.payload.name===e)return a;return null},AnimationItem.prototype.goToAndStop=function(e,a,i){if(!(i&&this.name!==i)){var s=Number(e);if(isNaN(s)){var o=this.getMarkerData(e);o&&this.goToAndStop(o.time,!0)}else a?this.setCurrentRawFrameValue(e):this.setCurrentRawFrameValue(e*this.frameModifier);this.pause()}},AnimationItem.prototype.goToAndPlay=function(e,a,i){if(!(i&&this.name!==i)){var s=Number(e);if(isNaN(s)){var o=this.getMarkerData(e);o&&(o.duration?this.playSegments([o.time,o.time+o.duration],!0):this.goToAndStop(o.time,!0))}else this.goToAndStop(s,a,i);this.play()}},AnimationItem.prototype.advanceTime=function(e){if(!(this.isPaused===!0||this.isLoaded===!1)){var a=this.currentRawFrame+e*this.frameModifier,i=!1;a>=this.totalFrames-1&&this.frameModifier>0?!this.loop||this.playCount===this.loop?this.checkSegments(a>this.totalFrames?a%this.totalFrames:0)||(i=!0,a=this.totalFrames-1):a>=this.totalFrames?(this.playCount+=1,this.checkSegments(a%this.totalFrames)||(this.setCurrentRawFrameValue(a%this.totalFrames),this._completedLoop=!0,this.trigger("loopComplete"))):this.setCurrentRawFrameValue(a):a<0?this.checkSegments(a%this.totalFrames)||(this.loop&&!(this.playCount--<=0&&this.loop!==!0)?(this.setCurrentRawFrameValue(this.totalFrames+a%this.totalFrames),this._completedLoop?this.trigger("loopComplete"):this._completedLoop=!0):(i=!0,a=0)):this.setCurrentRawFrameValue(a),i&&(this.setCurrentRawFrameValue(a),this.pause(),this.trigger("complete"))}},AnimationItem.prototype.adjustSegment=function(e,a){this.playCount=0,e[1]<e[0]?(this.frameModifier>0&&(this.playSpeed<0?this.setSpeed(-this.playSpeed):this.setDirection(-1)),this.totalFrames=e[0]-e[1],this.timeCompleted=this.totalFrames,this.firstFrame=e[1],this.setCurrentRawFrameValue(this.totalFrames-.001-a)):e[1]>e[0]&&(this.frameModifier<0&&(this.playSpeed<0?this.setSpeed(-this.playSpeed):this.setDirection(1)),this.totalFrames=e[1]-e[0],this.timeCompleted=this.totalFrames,this.firstFrame=e[0],this.setCurrentRawFrameValue(.001+a)),this.trigger("segmentStart")},AnimationItem.prototype.setSegment=function(e,a){var i=-1;this.isPaused&&(this.currentRawFrame+this.firstFrame<e?i=e:this.currentRawFrame+this.firstFrame>a&&(i=a-e)),this.firstFrame=e,this.totalFrames=a-e,this.timeCompleted=this.totalFrames,i!==-1&&this.goToAndStop(i,!0)},AnimationItem.prototype.playSegments=function(e,a){if(a&&(this.segments.length=0),_typeof$4(e[0])==="object"){var i,s=e.length;for(i=0;i<s;i+=1)this.segments.push(e[i])}else this.segments.push(e);this.segments.length&&a&&this.adjustSegment(this.segments.shift(),0),this.isPaused&&this.play()},AnimationItem.prototype.resetSegments=function(e){this.segments.length=0,this.segments.push([this.animationData.ip,this.animationData.op]),e&&this.checkSegments(0)},AnimationItem.prototype.checkSegments=function(e){return this.segments.length?(this.adjustSegment(this.segments.shift(),e),!0):!1},AnimationItem.prototype.destroy=function(e){e&&this.name!==e||!this.renderer||(this.renderer.destroy(),this.imagePreloader.destroy(),this.trigger("destroy"),this._cbs=null,this.onEnterFrame=null,this.onLoopComplete=null,this.onComplete=null,this.onSegmentStart=null,this.onDestroy=null,this.renderer=null,this.expressionsPlugin=null,this.imagePreloader=null,this.projectInterface=null)},AnimationItem.prototype.setCurrentRawFrameValue=function(e){this.currentRawFrame=e,this.gotoFrame()},AnimationItem.prototype.setSpeed=function(e){this.playSpeed=e,this.updaFrameModifier()},AnimationItem.prototype.setDirection=function(e){this.playDirection=e<0?-1:1,this.updaFrameModifier()},AnimationItem.prototype.setLoop=function(e){this.loop=e},AnimationItem.prototype.setVolume=function(e,a){a&&this.name!==a||this.audioController.setVolume(e)},AnimationItem.prototype.getVolume=function(){return this.audioController.getVolume()},AnimationItem.prototype.mute=function(e){e&&this.name!==e||this.audioController.mute()},AnimationItem.prototype.unmute=function(e){e&&this.name!==e||this.audioController.unmute()},AnimationItem.prototype.updaFrameModifier=function(){this.frameModifier=this.frameMult*this.playSpeed*this.playDirection,this.audioController.setRate(this.playSpeed*this.playDirection)},AnimationItem.prototype.getPath=function(){return this.path},AnimationItem.prototype.getAssetsPath=function(e){var a="";if(e.e)a=e.p;else if(this.assetsPath){var i=e.p;i.indexOf("images/")!==-1&&(i=i.split("/")[1]),a=this.assetsPath+i}else a=this.path,a+=e.u?e.u:"",a+=e.p;return a},AnimationItem.prototype.getAssetData=function(e){for(var a=0,i=this.assets.length;a<i;){if(e===this.assets[a].id)return this.assets[a];a+=1}return null},AnimationItem.prototype.hide=function(){this.renderer.hide()},AnimationItem.prototype.show=function(){this.renderer.show()},AnimationItem.prototype.getDuration=function(e){return e?this.totalFrames:this.totalFrames/this.frameRate},AnimationItem.prototype.updateDocumentData=function(e,a,i){try{var s=this.renderer.getElementByPath(e);s.updateDocumentData(a,i)}catch{}},AnimationItem.prototype.trigger=function(e){if(this._cbs&&this._cbs[e])switch(e){case"enterFrame":this.triggerEvent(e,new BMEnterFrameEvent(e,this.currentFrame,this.totalFrames,this.frameModifier));break;case"drawnFrame":this.drawnFrameEvent.currentTime=this.currentFrame,this.drawnFrameEvent.totalTime=this.totalFrames,this.drawnFrameEvent.direction=this.frameModifier,this.triggerEvent(e,this.drawnFrameEvent);break;case"loopComplete":this.triggerEvent(e,new BMCompleteLoopEvent(e,this.loop,this.playCount,this.frameMult));break;case"complete":this.triggerEvent(e,new BMCompleteEvent(e,this.frameMult));break;case"segmentStart":this.triggerEvent(e,new BMSegmentStartEvent(e,this.firstFrame,this.totalFrames));break;case"destroy":this.triggerEvent(e,new BMDestroyEvent(e,this));break;default:this.triggerEvent(e)}e==="enterFrame"&&this.onEnterFrame&&this.onEnterFrame.call(this,new BMEnterFrameEvent(e,this.currentFrame,this.totalFrames,this.frameMult)),e==="loopComplete"&&this.onLoopComplete&&this.onLoopComplete.call(this,new BMCompleteLoopEvent(e,this.loop,this.playCount,this.frameMult)),e==="complete"&&this.onComplete&&this.onComplete.call(this,new BMCompleteEvent(e,this.frameMult)),e==="segmentStart"&&this.onSegmentStart&&this.onSegmentStart.call(this,new BMSegmentStartEvent(e,this.firstFrame,this.totalFrames)),e==="destroy"&&this.onDestroy&&this.onDestroy.call(this,new BMDestroyEvent(e,this))},AnimationItem.prototype.triggerRenderFrameError=function(e){var a=new BMRenderFrameErrorEvent(e,this.currentFrame);this.triggerEvent("error",a),this.onError&&this.onError.call(this,a)},AnimationItem.prototype.triggerConfigError=function(e){var a=new BMConfigErrorEvent(e,this.currentFrame);this.triggerEvent("error",a),this.onError&&this.onError.call(this,a)};var animationManager=function(){var e={},a=[],i=0,s=0,o=0,c=!0,d=!1;function b(ct){for(var xt=0,ot=ct.target;xt<s;)a[xt].animation===ot&&(a.splice(xt,1),xt-=1,s-=1,ot.isPaused||it()),xt+=1}function g(ct,xt){if(!ct)return null;for(var ot=0;ot<s;){if(a[ot].elem===ct&&a[ot].elem!==null)return a[ot].animation;ot+=1}var ut=new AnimationItem;return et(ut,ct),ut.setData(ct,xt),ut}function _(){var ct,xt=a.length,ot=[];for(ct=0;ct<xt;ct+=1)ot.push(a[ct].animation);return ot}function tt(){o+=1,_t()}function it(){o-=1}function et(ct,xt){ct.addEventListener("destroy",b),ct.addEventListener("_active",tt),ct.addEventListener("_idle",it),a.push({elem:xt,animation:ct}),s+=1}function st(ct){var xt=new AnimationItem;return et(xt,null),xt.setParams(ct),xt}function nt(ct,xt){var ot;for(ot=0;ot<s;ot+=1)a[ot].animation.setSpeed(ct,xt)}function rt(ct,xt){var ot;for(ot=0;ot<s;ot+=1)a[ot].animation.setDirection(ct,xt)}function ht(ct){var xt;for(xt=0;xt<s;xt+=1)a[xt].animation.play(ct)}function $(ct){var xt=ct-i,ot;for(ot=0;ot<s;ot+=1)a[ot].animation.advanceTime(xt);i=ct,o&&!d?window.requestAnimationFrame($):c=!0}function _e(ct){i=ct,window.requestAnimationFrame($)}function j(ct){var xt;for(xt=0;xt<s;xt+=1)a[xt].animation.pause(ct)}function at(ct,xt,ot){var ut;for(ut=0;ut<s;ut+=1)a[ut].animation.goToAndStop(ct,xt,ot)}function lt(ct){var xt;for(xt=0;xt<s;xt+=1)a[xt].animation.stop(ct)}function pt(ct){var xt;for(xt=0;xt<s;xt+=1)a[xt].animation.togglePause(ct)}function ft(ct){var xt;for(xt=s-1;xt>=0;xt-=1)a[xt].animation.destroy(ct)}function mt(ct,xt,ot){var ut=[].concat([].slice.call(document.getElementsByClassName("lottie")),[].slice.call(document.getElementsByClassName("bodymovin"))),yt,dt=ut.length;for(yt=0;yt<dt;yt+=1)ot&&ut[yt].setAttribute("data-bm-type",ot),g(ut[yt],ct);if(xt&&dt===0){ot||(ot="svg");var kt=document.getElementsByTagName("body")[0];kt.innerText="";var At=createTag("div");At.style.width="100%",At.style.height="100%",At.setAttribute("data-bm-type",ot),kt.appendChild(At),g(At,ct)}}function vt(){var ct;for(ct=0;ct<s;ct+=1)a[ct].animation.resize()}function _t(){!d&&o&&c&&(window.requestAnimationFrame(_e),c=!1)}function Et(){d=!0}function gt(){d=!1,_t()}function St(ct,xt){var ot;for(ot=0;ot<s;ot+=1)a[ot].animation.setVolume(ct,xt)}function Ct(ct){var xt;for(xt=0;xt<s;xt+=1)a[xt].animation.mute(ct)}function bt(ct){var xt;for(xt=0;xt<s;xt+=1)a[xt].animation.unmute(ct)}return e.registerAnimation=g,e.loadAnimation=st,e.setSpeed=nt,e.setDirection=rt,e.play=ht,e.pause=j,e.stop=lt,e.togglePause=pt,e.searchAnimations=mt,e.resize=vt,e.goToAndStop=at,e.destroy=ft,e.freeze=Et,e.unfreeze=gt,e.setVolume=St,e.mute=Ct,e.unmute=bt,e.getRegisteredAnimations=_,e}(),BezierFactory=function(){var e={};e.getBezierEasing=i;var a={};function i(_e,j,at,lt,pt){var ft=pt||("bez_"+_e+"_"+j+"_"+at+"_"+lt).replace(/\./g,"p");if(a[ft])return a[ft];var mt=new $([_e,j,at,lt]);return a[ft]=mt,mt}var s=4,o=.001,c=1e-7,d=10,b=11,g=1/(b-1),_=typeof Float32Array=="function";function tt(_e,j){return 1-3*j+3*_e}function it(_e,j){return 3*j-6*_e}function et(_e){return 3*_e}function st(_e,j,at){return((tt(j,at)*_e+it(j,at))*_e+et(j))*_e}function nt(_e,j,at){return 3*tt(j,at)*_e*_e+2*it(j,at)*_e+et(j)}function rt(_e,j,at,lt,pt){var ft,mt,vt=0;do mt=j+(at-j)/2,ft=st(mt,lt,pt)-_e,ft>0?at=mt:j=mt;while(Math.abs(ft)>c&&++vt<d);return mt}function ht(_e,j,at,lt){for(var pt=0;pt<s;++pt){var ft=nt(j,at,lt);if(ft===0)return j;var mt=st(j,at,lt)-_e;j-=mt/ft}return j}function $(_e){this._p=_e,this._mSampleValues=_?new Float32Array(b):new Array(b),this._precomputed=!1,this.get=this.get.bind(this)}return $.prototype={get:function(j){var at=this._p[0],lt=this._p[1],pt=this._p[2],ft=this._p[3];return this._precomputed||this._precompute(),at===lt&&pt===ft?j:j===0?0:j===1?1:st(this._getTForX(j),lt,ft)},_precompute:function(){var j=this._p[0],at=this._p[1],lt=this._p[2],pt=this._p[3];this._precomputed=!0,(j!==at||lt!==pt)&&this._calcSampleValues()},_calcSampleValues:function(){for(var j=this._p[0],at=this._p[2],lt=0;lt<b;++lt)this._mSampleValues[lt]=st(lt*g,j,at)},_getTForX:function(j){for(var at=this._p[0],lt=this._p[2],pt=this._mSampleValues,ft=0,mt=1,vt=b-1;mt!==vt&&pt[mt]<=j;++mt)ft+=g;--mt;var _t=(j-pt[mt])/(pt[mt+1]-pt[mt]),Et=ft+_t*g,gt=nt(Et,at,lt);return gt>=o?ht(j,Et,at,lt):gt===0?Et:rt(j,ft,ft+g,at,lt)}},e}(),pooling=function(){function e(a){return a.concat(createSizedArray(a.length))}return{double:e}}(),poolFactory=function(){return function(e,a,i){var s=0,o=e,c=createSizedArray(o),d={newElement:b,release:g};function b(){var _;return s?(s-=1,_=c[s]):_=a(),_}function g(_){s===o&&(c=pooling.double(c),o*=2),i&&i(_),c[s]=_,s+=1}return d}}(),bezierLengthPool=function(){function e(){return{addedLength:0,percents:createTypedArray("float32",getDefaultCurveSegments()),lengths:createTypedArray("float32",getDefaultCurveSegments())}}return poolFactory(8,e)}(),segmentsLengthPool=function(){function e(){return{lengths:[],totalLength:0}}function a(i){var s,o=i.lengths.length;for(s=0;s<o;s+=1)bezierLengthPool.release(i.lengths[s]);i.lengths.length=0}return poolFactory(8,e,a)}();function bezFunction(){var e=Math;function a(et,st,nt,rt,ht,$){var _e=et*rt+st*ht+nt*$-ht*rt-$*et-nt*st;return _e>-.001&&_e<.001}function i(et,st,nt,rt,ht,$,_e,j,at){if(nt===0&&$===0&&at===0)return a(et,st,rt,ht,_e,j);var lt=e.sqrt(e.pow(rt-et,2)+e.pow(ht-st,2)+e.pow($-nt,2)),pt=e.sqrt(e.pow(_e-et,2)+e.pow(j-st,2)+e.pow(at-nt,2)),ft=e.sqrt(e.pow(_e-rt,2)+e.pow(j-ht,2)+e.pow(at-$,2)),mt;return lt>pt?lt>ft?mt=lt-pt-ft:mt=ft-pt-lt:ft>pt?mt=ft-pt-lt:mt=pt-lt-ft,mt>-1e-4&&mt<1e-4}var s=function(){return function(et,st,nt,rt){var ht=getDefaultCurveSegments(),$,_e,j,at,lt,pt=0,ft,mt=[],vt=[],_t=bezierLengthPool.newElement();for(j=nt.length,$=0;$<ht;$+=1){for(lt=$/(ht-1),ft=0,_e=0;_e<j;_e+=1)at=bmPow(1-lt,3)*et[_e]+3*bmPow(1-lt,2)*lt*nt[_e]+3*(1-lt)*bmPow(lt,2)*rt[_e]+bmPow(lt,3)*st[_e],mt[_e]=at,vt[_e]!==null&&(ft+=bmPow(mt[_e]-vt[_e],2)),vt[_e]=mt[_e];ft&&(ft=bmSqrt(ft),pt+=ft),_t.percents[$]=lt,_t.lengths[$]=pt}return _t.addedLength=pt,_t}}();function o(et){var st=segmentsLengthPool.newElement(),nt=et.c,rt=et.v,ht=et.o,$=et.i,_e,j=et._length,at=st.lengths,lt=0;for(_e=0;_e<j-1;_e+=1)at[_e]=s(rt[_e],rt[_e+1],ht[_e],$[_e+1]),lt+=at[_e].addedLength;return nt&&j&&(at[_e]=s(rt[_e],rt[0],ht[_e],$[0]),lt+=at[_e].addedLength),st.totalLength=lt,st}function c(et){this.segmentLength=0,this.points=new Array(et)}function d(et,st){this.partialLength=et,this.point=st}var b=function(){var et={};return function(st,nt,rt,ht){var $=(st[0]+"_"+st[1]+"_"+nt[0]+"_"+nt[1]+"_"+rt[0]+"_"+rt[1]+"_"+ht[0]+"_"+ht[1]).replace(/\./g,"p");if(!et[$]){var _e=getDefaultCurveSegments(),j,at,lt,pt,ft,mt=0,vt,_t,Et=null;st.length===2&&(st[0]!==nt[0]||st[1]!==nt[1])&&a(st[0],st[1],nt[0],nt[1],st[0]+rt[0],st[1]+rt[1])&&a(st[0],st[1],nt[0],nt[1],nt[0]+ht[0],nt[1]+ht[1])&&(_e=2);var gt=new c(_e);for(lt=rt.length,j=0;j<_e;j+=1){for(_t=createSizedArray(lt),ft=j/(_e-1),vt=0,at=0;at<lt;at+=1)pt=bmPow(1-ft,3)*st[at]+3*bmPow(1-ft,2)*ft*(st[at]+rt[at])+3*(1-ft)*bmPow(ft,2)*(nt[at]+ht[at])+bmPow(ft,3)*nt[at],_t[at]=pt,Et!==null&&(vt+=bmPow(_t[at]-Et[at],2));vt=bmSqrt(vt),mt+=vt,gt.points[j]=new d(vt,_t),Et=_t}gt.segmentLength=mt,et[$]=gt}return et[$]}}();function g(et,st){var nt=st.percents,rt=st.lengths,ht=nt.length,$=bmFloor((ht-1)*et),_e=et*st.addedLength,j=0;if($===ht-1||$===0||_e===rt[$])return nt[$];for(var at=rt[$]>_e?-1:1,lt=!0;lt;)if(rt[$]<=_e&&rt[$+1]>_e?(j=(_e-rt[$])/(rt[$+1]-rt[$]),lt=!1):$+=at,$<0||$>=ht-1){if($===ht-1)return nt[$];lt=!1}return nt[$]+(nt[$+1]-nt[$])*j}function _(et,st,nt,rt,ht,$){var _e=g(ht,$),j=1-_e,at=e.round((j*j*j*et[0]+(_e*j*j+j*_e*j+j*j*_e)*nt[0]+(_e*_e*j+j*_e*_e+_e*j*_e)*rt[0]+_e*_e*_e*st[0])*1e3)/1e3,lt=e.round((j*j*j*et[1]+(_e*j*j+j*_e*j+j*j*_e)*nt[1]+(_e*_e*j+j*_e*_e+_e*j*_e)*rt[1]+_e*_e*_e*st[1])*1e3)/1e3;return[at,lt]}var tt=createTypedArray("float32",8);function it(et,st,nt,rt,ht,$,_e){ht<0?ht=0:ht>1&&(ht=1);var j=g(ht,_e);$=$>1?1:$;var at=g($,_e),lt,pt=et.length,ft=1-j,mt=1-at,vt=ft*ft*ft,_t=j*ft*ft*3,Et=j*j*ft*3,gt=j*j*j,St=ft*ft*mt,Ct=j*ft*mt+ft*j*mt+ft*ft*at,bt=j*j*mt+ft*j*at+j*ft*at,ct=j*j*at,xt=ft*mt*mt,ot=j*mt*mt+ft*at*mt+ft*mt*at,ut=j*at*mt+ft*at*at+j*mt*at,yt=j*at*at,dt=mt*mt*mt,kt=at*mt*mt+mt*at*mt+mt*mt*at,At=at*at*mt+mt*at*at+at*mt*at,Pt=at*at*at;for(lt=0;lt<pt;lt+=1)tt[lt*4]=e.round((vt*et[lt]+_t*nt[lt]+Et*rt[lt]+gt*st[lt])*1e3)/1e3,tt[lt*4+1]=e.round((St*et[lt]+Ct*nt[lt]+bt*rt[lt]+ct*st[lt])*1e3)/1e3,tt[lt*4+2]=e.round((xt*et[lt]+ot*nt[lt]+ut*rt[lt]+yt*st[lt])*1e3)/1e3,tt[lt*4+3]=e.round((dt*et[lt]+kt*nt[lt]+At*rt[lt]+Pt*st[lt])*1e3)/1e3;return tt}return{getSegmentsLength:o,getNewSegment:it,getPointInSegment:_,buildBezierData:b,pointOnLine2D:a,pointOnLine3D:i}}var bez=bezFunction(),initFrame=initialDefaultFrame,mathAbs=Math.abs;function interpolateValue(e,a){var i=this.offsetTime,s;this.propType==="multidimensional"&&(s=createTypedArray("float32",this.pv.length));for(var o=a.lastIndex,c=o,d=this.keyframes.length-1,b=!0,g,_,tt;b;){if(g=this.keyframes[c],_=this.keyframes[c+1],c===d-1&&e>=_.t-i){g.h&&(g=_),o=0;break}if(_.t-i>e){o=c;break}c<d-1?c+=1:(o=0,b=!1)}tt=this.keyframesMetadata[c]||{};var it,et,st,nt,rt,ht,$=_.t-i,_e=g.t-i,j;if(g.to){tt.bezierData||(tt.bezierData=bez.buildBezierData(g.s,_.s||g.e,g.to,g.ti));var at=tt.bezierData;if(e>=$||e<_e){var lt=e>=$?at.points.length-1:0;for(et=at.points[lt].point.length,it=0;it<et;it+=1)s[it]=at.points[lt].point[it]}else{tt.__fnct?ht=tt.__fnct:(ht=BezierFactory.getBezierEasing(g.o.x,g.o.y,g.i.x,g.i.y,g.n).get,tt.__fnct=ht),st=ht((e-_e)/($-_e));var pt=at.segmentLength*st,ft,mt=a.lastFrame<e&&a._lastKeyframeIndex===c?a._lastAddedLength:0;for(rt=a.lastFrame<e&&a._lastKeyframeIndex===c?a._lastPoint:0,b=!0,nt=at.points.length;b;){if(mt+=at.points[rt].partialLength,pt===0||st===0||rt===at.points.length-1){for(et=at.points[rt].point.length,it=0;it<et;it+=1)s[it]=at.points[rt].point[it];break}else if(pt>=mt&&pt<mt+at.points[rt+1].partialLength){for(ft=(pt-mt)/at.points[rt+1].partialLength,et=at.points[rt].point.length,it=0;it<et;it+=1)s[it]=at.points[rt].point[it]+(at.points[rt+1].point[it]-at.points[rt].point[it])*ft;break}rt<nt-1?rt+=1:b=!1}a._lastPoint=rt,a._lastAddedLength=mt-at.points[rt].partialLength,a._lastKeyframeIndex=c}}else{var vt,_t,Et,gt,St;if(d=g.s.length,j=_.s||g.e,this.sh&&g.h!==1)if(e>=$)s[0]=j[0],s[1]=j[1],s[2]=j[2];else if(e<=_e)s[0]=g.s[0],s[1]=g.s[1],s[2]=g.s[2];else{var Ct=createQuaternion(g.s),bt=createQuaternion(j),ct=(e-_e)/($-_e);quaternionToEuler(s,slerp(Ct,bt,ct))}else for(c=0;c<d;c+=1)g.h!==1&&(e>=$?st=1:e<_e?st=0:(g.o.x.constructor===Array?(tt.__fnct||(tt.__fnct=[]),tt.__fnct[c]?ht=tt.__fnct[c]:(vt=g.o.x[c]===void 0?g.o.x[0]:g.o.x[c],_t=g.o.y[c]===void 0?g.o.y[0]:g.o.y[c],Et=g.i.x[c]===void 0?g.i.x[0]:g.i.x[c],gt=g.i.y[c]===void 0?g.i.y[0]:g.i.y[c],ht=BezierFactory.getBezierEasing(vt,_t,Et,gt).get,tt.__fnct[c]=ht)):tt.__fnct?ht=tt.__fnct:(vt=g.o.x,_t=g.o.y,Et=g.i.x,gt=g.i.y,ht=BezierFactory.getBezierEasing(vt,_t,Et,gt).get,g.keyframeMetadata=ht),st=ht((e-_e)/($-_e)))),j=_.s||g.e,St=g.h===1?g.s[c]:g.s[c]+(j[c]-g.s[c])*st,this.propType==="multidimensional"?s[c]=St:s=St}return a.lastIndex=o,s}function slerp(e,a,i){var s=[],o=e[0],c=e[1],d=e[2],b=e[3],g=a[0],_=a[1],tt=a[2],it=a[3],et,st,nt,rt,ht;return st=o*g+c*_+d*tt+b*it,st<0&&(st=-st,g=-g,_=-_,tt=-tt,it=-it),1-st>1e-6?(et=Math.acos(st),nt=Math.sin(et),rt=Math.sin((1-i)*et)/nt,ht=Math.sin(i*et)/nt):(rt=1-i,ht=i),s[0]=rt*o+ht*g,s[1]=rt*c+ht*_,s[2]=rt*d+ht*tt,s[3]=rt*b+ht*it,s}function quaternionToEuler(e,a){var i=a[0],s=a[1],o=a[2],c=a[3],d=Math.atan2(2*s*c-2*i*o,1-2*s*s-2*o*o),b=Math.asin(2*i*s+2*o*c),g=Math.atan2(2*i*c-2*s*o,1-2*i*i-2*o*o);e[0]=d/degToRads,e[1]=b/degToRads,e[2]=g/degToRads}function createQuaternion(e){var a=e[0]*degToRads,i=e[1]*degToRads,s=e[2]*degToRads,o=Math.cos(a/2),c=Math.cos(i/2),d=Math.cos(s/2),b=Math.sin(a/2),g=Math.sin(i/2),_=Math.sin(s/2),tt=o*c*d-b*g*_,it=b*g*d+o*c*_,et=b*c*d+o*g*_,st=o*g*d-b*c*_;return[it,et,st,tt]}function getValueAtCurrentTime(){var e=this.comp.renderedFrame-this.offsetTime,a=this.keyframes[0].t-this.offsetTime,i=this.keyframes[this.keyframes.length-1].t-this.offsetTime;if(!(e===this._caching.lastFrame||this._caching.lastFrame!==initFrame&&(this._caching.lastFrame>=i&&e>=i||this._caching.lastFrame<a&&e<a))){this._caching.lastFrame>=e&&(this._caching._lastKeyframeIndex=-1,this._caching.lastIndex=0);var s=this.interpolateValue(e,this._caching);this.pv=s}return this._caching.lastFrame=e,this.pv}function setVValue(e){var a;if(this.propType==="unidimensional")a=e*this.mult,mathAbs(this.v-a)>1e-5&&(this.v=a,this._mdf=!0);else for(var i=0,s=this.v.length;i<s;)a=e[i]*this.mult,mathAbs(this.v[i]-a)>1e-5&&(this.v[i]=a,this._mdf=!0),i+=1}function processEffectsSequence(){if(!(this.elem.globalData.frameId===this.frameId||!this.effectsSequence.length)){if(this.lock){this.setVValue(this.pv);return}this.lock=!0,this._mdf=this._isFirstFrame;var e,a=this.effectsSequence.length,i=this.kf?this.pv:this.data.k;for(e=0;e<a;e+=1)i=this.effectsSequence[e](i);this.setVValue(i),this._isFirstFrame=!1,this.lock=!1,this.frameId=this.elem.globalData.frameId}}function addEffect(e){this.effectsSequence.push(e),this.container.addDynamicProperty(this)}function ValueProperty(e,a,i,s){this.propType="unidimensional",this.mult=i||1,this.data=a,this.v=i?a.k*i:a.k,this.pv=a.k,this._mdf=!1,this.elem=e,this.container=s,this.comp=e.comp,this.k=!1,this.kf=!1,this.vel=0,this.effectsSequence=[],this._isFirstFrame=!0,this.getValue=processEffectsSequence,this.setVValue=setVValue,this.addEffect=addEffect}function MultiDimensionalProperty(e,a,i,s){this.propType="multidimensional",this.mult=i||1,this.data=a,this._mdf=!1,this.elem=e,this.container=s,this.comp=e.comp,this.k=!1,this.kf=!1,this.frameId=-1;var o,c=a.k.length;for(this.v=createTypedArray("float32",c),this.pv=createTypedArray("float32",c),this.vel=createTypedArray("float32",c),o=0;o<c;o+=1)this.v[o]=a.k[o]*this.mult,this.pv[o]=a.k[o];this._isFirstFrame=!0,this.effectsSequence=[],this.getValue=processEffectsSequence,this.setVValue=setVValue,this.addEffect=addEffect}function KeyframedValueProperty(e,a,i,s){this.propType="unidimensional",this.keyframes=a.k,this.keyframesMetadata=[],this.offsetTime=e.data.st,this.frameId=-1,this._caching={lastFrame:initFrame,lastIndex:0,value:0,_lastKeyframeIndex:-1},this.k=!0,this.kf=!0,this.data=a,this.mult=i||1,this.elem=e,this.container=s,this.comp=e.comp,this.v=initFrame,this.pv=initFrame,this._isFirstFrame=!0,this.getValue=processEffectsSequence,this.setVValue=setVValue,this.interpolateValue=interpolateValue,this.effectsSequence=[getValueAtCurrentTime.bind(this)],this.addEffect=addEffect}function KeyframedMultidimensionalProperty(e,a,i,s){this.propType="multidimensional";var o,c=a.k.length,d,b,g,_;for(o=0;o<c-1;o+=1)a.k[o].to&&a.k[o].s&&a.k[o+1]&&a.k[o+1].s&&(d=a.k[o].s,b=a.k[o+1].s,g=a.k[o].to,_=a.k[o].ti,(d.length===2&&!(d[0]===b[0]&&d[1]===b[1])&&bez.pointOnLine2D(d[0],d[1],b[0],b[1],d[0]+g[0],d[1]+g[1])&&bez.pointOnLine2D(d[0],d[1],b[0],b[1],b[0]+_[0],b[1]+_[1])||d.length===3&&!(d[0]===b[0]&&d[1]===b[1]&&d[2]===b[2])&&bez.pointOnLine3D(d[0],d[1],d[2],b[0],b[1],b[2],d[0]+g[0],d[1]+g[1],d[2]+g[2])&&bez.pointOnLine3D(d[0],d[1],d[2],b[0],b[1],b[2],b[0]+_[0],b[1]+_[1],b[2]+_[2]))&&(a.k[o].to=null,a.k[o].ti=null),d[0]===b[0]&&d[1]===b[1]&&g[0]===0&&g[1]===0&&_[0]===0&&_[1]===0&&(d.length===2||d[2]===b[2]&&g[2]===0&&_[2]===0)&&(a.k[o].to=null,a.k[o].ti=null));this.effectsSequence=[getValueAtCurrentTime.bind(this)],this.data=a,this.keyframes=a.k,this.keyframesMetadata=[],this.offsetTime=e.data.st,this.k=!0,this.kf=!0,this._isFirstFrame=!0,this.mult=i||1,this.elem=e,this.container=s,this.comp=e.comp,this.getValue=processEffectsSequence,this.setVValue=setVValue,this.interpolateValue=interpolateValue,this.frameId=-1;var tt=a.k[0].s.length;for(this.v=createTypedArray("float32",tt),this.pv=createTypedArray("float32",tt),o=0;o<tt;o+=1)this.v[o]=initFrame,this.pv[o]=initFrame;this._caching={lastFrame:initFrame,lastIndex:0,value:createTypedArray("float32",tt)},this.addEffect=addEffect}var PropertyFactory=function(){function e(i,s,o,c,d){s.sid&&(s=i.globalData.slotManager.getProp(s));var b;if(!s.k.length)b=new ValueProperty(i,s,c,d);else if(typeof s.k[0]=="number")b=new MultiDimensionalProperty(i,s,c,d);else switch(o){case 0:b=new KeyframedValueProperty(i,s,c,d);break;case 1:b=new KeyframedMultidimensionalProperty(i,s,c,d);break}return b.effectsSequence.length&&d.addDynamicProperty(b),b}var a={getProp:e};return a}();function DynamicPropertyContainer(){}DynamicPropertyContainer.prototype={addDynamicProperty:function(a){this.dynamicProperties.indexOf(a)===-1&&(this.dynamicProperties.push(a),this.container.addDynamicProperty(this),this._isAnimated=!0)},iterateDynamicProperties:function(){this._mdf=!1;var a,i=this.dynamicProperties.length;for(a=0;a<i;a+=1)this.dynamicProperties[a].getValue(),this.dynamicProperties[a]._mdf&&(this._mdf=!0)},initDynamicPropertyContainer:function(a){this.container=a,this.dynamicProperties=[],this._mdf=!1,this._isAnimated=!1}};var pointPool=function(){function e(){return createTypedArray("float32",2)}return poolFactory(8,e)}();function ShapePath(){this.c=!1,this._length=0,this._maxLength=8,this.v=createSizedArray(this._maxLength),this.o=createSizedArray(this._maxLength),this.i=createSizedArray(this._maxLength)}ShapePath.prototype.setPathData=function(e,a){this.c=e,this.setLength(a);for(var i=0;i<a;)this.v[i]=pointPool.newElement(),this.o[i]=pointPool.newElement(),this.i[i]=pointPool.newElement(),i+=1},ShapePath.prototype.setLength=function(e){for(;this._maxLength<e;)this.doubleArrayLength();this._length=e},ShapePath.prototype.doubleArrayLength=function(){this.v=this.v.concat(createSizedArray(this._maxLength)),this.i=this.i.concat(createSizedArray(this._maxLength)),this.o=this.o.concat(createSizedArray(this._maxLength)),this._maxLength*=2},ShapePath.prototype.setXYAt=function(e,a,i,s,o){var c;switch(this._length=Math.max(this._length,s+1),this._length>=this._maxLength&&this.doubleArrayLength(),i){case"v":c=this.v;break;case"i":c=this.i;break;case"o":c=this.o;break;default:c=[];break}(!c[s]||c[s]&&!o)&&(c[s]=pointPool.newElement()),c[s][0]=e,c[s][1]=a},ShapePath.prototype.setTripleAt=function(e,a,i,s,o,c,d,b){this.setXYAt(e,a,"v",d,b),this.setXYAt(i,s,"o",d,b),this.setXYAt(o,c,"i",d,b)},ShapePath.prototype.reverse=function(){var e=new ShapePath;e.setPathData(this.c,this._length);var a=this.v,i=this.o,s=this.i,o=0;this.c&&(e.setTripleAt(a[0][0],a[0][1],s[0][0],s[0][1],i[0][0],i[0][1],0,!1),o=1);var c=this._length-1,d=this._length,b;for(b=o;b<d;b+=1)e.setTripleAt(a[c][0],a[c][1],s[c][0],s[c][1],i[c][0],i[c][1],b,!1),c-=1;return e},ShapePath.prototype.length=function(){return this._length};var shapePool=function(){function e(){return new ShapePath}function a(o){var c=o._length,d;for(d=0;d<c;d+=1)pointPool.release(o.v[d]),pointPool.release(o.i[d]),pointPool.release(o.o[d]),o.v[d]=null,o.i[d]=null,o.o[d]=null;o._length=0,o.c=!1}function i(o){var c=s.newElement(),d,b=o._length===void 0?o.v.length:o._length;for(c.setLength(b),c.c=o.c,d=0;d<b;d+=1)c.setTripleAt(o.v[d][0],o.v[d][1],o.o[d][0],o.o[d][1],o.i[d][0],o.i[d][1],d);return c}var s=poolFactory(4,e,a);return s.clone=i,s}();function ShapeCollection(){this._length=0,this._maxLength=4,this.shapes=createSizedArray(this._maxLength)}ShapeCollection.prototype.addShape=function(e){this._length===this._maxLength&&(this.shapes=this.shapes.concat(createSizedArray(this._maxLength)),this._maxLength*=2),this.shapes[this._length]=e,this._length+=1},ShapeCollection.prototype.releaseShapes=function(){var e;for(e=0;e<this._length;e+=1)shapePool.release(this.shapes[e]);this._length=0};var shapeCollectionPool=function(){var e={newShapeCollection:o,release:c},a=0,i=4,s=createSizedArray(i);function o(){var d;return a?(a-=1,d=s[a]):d=new ShapeCollection,d}function c(d){var b,g=d._length;for(b=0;b<g;b+=1)shapePool.release(d.shapes[b]);d._length=0,a===i&&(s=pooling.double(s),i*=2),s[a]=d,a+=1}return e}(),ShapePropertyFactory=function(){var e=-999999;function a($,_e,j){var at=j.lastIndex,lt,pt,ft,mt,vt,_t,Et,gt,St,Ct=this.keyframes;if($<Ct[0].t-this.offsetTime)lt=Ct[0].s[0],ft=!0,at=0;else if($>=Ct[Ct.length-1].t-this.offsetTime)lt=Ct[Ct.length-1].s?Ct[Ct.length-1].s[0]:Ct[Ct.length-2].e[0],ft=!0;else{for(var bt=at,ct=Ct.length-1,xt=!0,ot,ut,yt;xt&&(ot=Ct[bt],ut=Ct[bt+1],!(ut.t-this.offsetTime>$));)bt<ct-1?bt+=1:xt=!1;if(yt=this.keyframesMetadata[bt]||{},ft=ot.h===1,at=bt,!ft){if($>=ut.t-this.offsetTime)gt=1;else if($<ot.t-this.offsetTime)gt=0;else{var dt;yt.__fnct?dt=yt.__fnct:(dt=BezierFactory.getBezierEasing(ot.o.x,ot.o.y,ot.i.x,ot.i.y).get,yt.__fnct=dt),gt=dt(($-(ot.t-this.offsetTime))/(ut.t-this.offsetTime-(ot.t-this.offsetTime)))}pt=ut.s?ut.s[0]:ot.e[0]}lt=ot.s[0]}for(_t=_e._length,Et=lt.i[0].length,j.lastIndex=at,mt=0;mt<_t;mt+=1)for(vt=0;vt<Et;vt+=1)St=ft?lt.i[mt][vt]:lt.i[mt][vt]+(pt.i[mt][vt]-lt.i[mt][vt])*gt,_e.i[mt][vt]=St,St=ft?lt.o[mt][vt]:lt.o[mt][vt]+(pt.o[mt][vt]-lt.o[mt][vt])*gt,_e.o[mt][vt]=St,St=ft?lt.v[mt][vt]:lt.v[mt][vt]+(pt.v[mt][vt]-lt.v[mt][vt])*gt,_e.v[mt][vt]=St}function i(){var $=this.comp.renderedFrame-this.offsetTime,_e=this.keyframes[0].t-this.offsetTime,j=this.keyframes[this.keyframes.length-1].t-this.offsetTime,at=this._caching.lastFrame;return at!==e&&(at<_e&&$<_e||at>j&&$>j)||(this._caching.lastIndex=at<$?this._caching.lastIndex:0,this.interpolateShape($,this.pv,this._caching)),this._caching.lastFrame=$,this.pv}function s(){this.paths=this.localShapeCollection}function o($,_e){if($._length!==_e._length||$.c!==_e.c)return!1;var j,at=$._length;for(j=0;j<at;j+=1)if($.v[j][0]!==_e.v[j][0]||$.v[j][1]!==_e.v[j][1]||$.o[j][0]!==_e.o[j][0]||$.o[j][1]!==_e.o[j][1]||$.i[j][0]!==_e.i[j][0]||$.i[j][1]!==_e.i[j][1])return!1;return!0}function c($){o(this.v,$)||(this.v=shapePool.clone($),this.localShapeCollection.releaseShapes(),this.localShapeCollection.addShape(this.v),this._mdf=!0,this.paths=this.localShapeCollection)}function d(){if(this.elem.globalData.frameId!==this.frameId){if(!this.effectsSequence.length){this._mdf=!1;return}if(this.lock){this.setVValue(this.pv);return}this.lock=!0,this._mdf=!1;var $;this.kf?$=this.pv:this.data.ks?$=this.data.ks.k:$=this.data.pt.k;var _e,j=this.effectsSequence.length;for(_e=0;_e<j;_e+=1)$=this.effectsSequence[_e]($);this.setVValue($),this.lock=!1,this.frameId=this.elem.globalData.frameId}}function b($,_e,j){this.propType="shape",this.comp=$.comp,this.container=$,this.elem=$,this.data=_e,this.k=!1,this.kf=!1,this._mdf=!1;var at=j===3?_e.pt.k:_e.ks.k;this.v=shapePool.clone(at),this.pv=shapePool.clone(this.v),this.localShapeCollection=shapeCollectionPool.newShapeCollection(),this.paths=this.localShapeCollection,this.paths.addShape(this.v),this.reset=s,this.effectsSequence=[]}function g($){this.effectsSequence.push($),this.container.addDynamicProperty(this)}b.prototype.interpolateShape=a,b.prototype.getValue=d,b.prototype.setVValue=c,b.prototype.addEffect=g;function _($,_e,j){this.propType="shape",this.comp=$.comp,this.elem=$,this.container=$,this.offsetTime=$.data.st,this.keyframes=j===3?_e.pt.k:_e.ks.k,this.keyframesMetadata=[],this.k=!0,this.kf=!0;var at=this.keyframes[0].s[0].i.length;this.v=shapePool.newElement(),this.v.setPathData(this.keyframes[0].s[0].c,at),this.pv=shapePool.clone(this.v),this.localShapeCollection=shapeCollectionPool.newShapeCollection(),this.paths=this.localShapeCollection,this.paths.addShape(this.v),this.lastFrame=e,this.reset=s,this._caching={lastFrame:e,lastIndex:0},this.effectsSequence=[i.bind(this)]}_.prototype.getValue=d,_.prototype.interpolateShape=a,_.prototype.setVValue=c,_.prototype.addEffect=g;var tt=function(){var $=roundCorner;function _e(j,at){this.v=shapePool.newElement(),this.v.setPathData(!0,4),this.localShapeCollection=shapeCollectionPool.newShapeCollection(),this.paths=this.localShapeCollection,this.localShapeCollection.addShape(this.v),this.d=at.d,this.elem=j,this.comp=j.comp,this.frameId=-1,this.initDynamicPropertyContainer(j),this.p=PropertyFactory.getProp(j,at.p,1,0,this),this.s=PropertyFactory.getProp(j,at.s,1,0,this),this.dynamicProperties.length?this.k=!0:(this.k=!1,this.convertEllToPath())}return _e.prototype={reset:s,getValue:function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf&&this.convertEllToPath())},convertEllToPath:function(){var at=this.p.v[0],lt=this.p.v[1],pt=this.s.v[0]/2,ft=this.s.v[1]/2,mt=this.d!==3,vt=this.v;vt.v[0][0]=at,vt.v[0][1]=lt-ft,vt.v[1][0]=mt?at+pt:at-pt,vt.v[1][1]=lt,vt.v[2][0]=at,vt.v[2][1]=lt+ft,vt.v[3][0]=mt?at-pt:at+pt,vt.v[3][1]=lt,vt.i[0][0]=mt?at-pt*$:at+pt*$,vt.i[0][1]=lt-ft,vt.i[1][0]=mt?at+pt:at-pt,vt.i[1][1]=lt-ft*$,vt.i[2][0]=mt?at+pt*$:at-pt*$,vt.i[2][1]=lt+ft,vt.i[3][0]=mt?at-pt:at+pt,vt.i[3][1]=lt+ft*$,vt.o[0][0]=mt?at+pt*$:at-pt*$,vt.o[0][1]=lt-ft,vt.o[1][0]=mt?at+pt:at-pt,vt.o[1][1]=lt+ft*$,vt.o[2][0]=mt?at-pt*$:at+pt*$,vt.o[2][1]=lt+ft,vt.o[3][0]=mt?at-pt:at+pt,vt.o[3][1]=lt-ft*$}},extendPrototype([DynamicPropertyContainer],_e),_e}(),it=function(){function $(_e,j){this.v=shapePool.newElement(),this.v.setPathData(!0,0),this.elem=_e,this.comp=_e.comp,this.data=j,this.frameId=-1,this.d=j.d,this.initDynamicPropertyContainer(_e),j.sy===1?(this.ir=PropertyFactory.getProp(_e,j.ir,0,0,this),this.is=PropertyFactory.getProp(_e,j.is,0,.01,this),this.convertToPath=this.convertStarToPath):this.convertToPath=this.convertPolygonToPath,this.pt=PropertyFactory.getProp(_e,j.pt,0,0,this),this.p=PropertyFactory.getProp(_e,j.p,1,0,this),this.r=PropertyFactory.getProp(_e,j.r,0,degToRads,this),this.or=PropertyFactory.getProp(_e,j.or,0,0,this),this.os=PropertyFactory.getProp(_e,j.os,0,.01,this),this.localShapeCollection=shapeCollectionPool.newShapeCollection(),this.localShapeCollection.addShape(this.v),this.paths=this.localShapeCollection,this.dynamicProperties.length?this.k=!0:(this.k=!1,this.convertToPath())}return $.prototype={reset:s,getValue:function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf&&this.convertToPath())},convertStarToPath:function(){var j=Math.floor(this.pt.v)*2,at=Math.PI*2/j,lt=!0,pt=this.or.v,ft=this.ir.v,mt=this.os.v,vt=this.is.v,_t=2*Math.PI*pt/(j*2),Et=2*Math.PI*ft/(j*2),gt,St,Ct,bt,ct=-Math.PI/2;ct+=this.r.v;var xt=this.data.d===3?-1:1;for(this.v._length=0,gt=0;gt<j;gt+=1){St=lt?pt:ft,Ct=lt?mt:vt,bt=lt?_t:Et;var ot=St*Math.cos(ct),ut=St*Math.sin(ct),yt=ot===0&&ut===0?0:ut/Math.sqrt(ot*ot+ut*ut),dt=ot===0&&ut===0?0:-ot/Math.sqrt(ot*ot+ut*ut);ot+=+this.p.v[0],ut+=+this.p.v[1],this.v.setTripleAt(ot,ut,ot-yt*bt*Ct*xt,ut-dt*bt*Ct*xt,ot+yt*bt*Ct*xt,ut+dt*bt*Ct*xt,gt,!0),lt=!lt,ct+=at*xt}},convertPolygonToPath:function(){var j=Math.floor(this.pt.v),at=Math.PI*2/j,lt=this.or.v,pt=this.os.v,ft=2*Math.PI*lt/(j*4),mt,vt=-Math.PI*.5,_t=this.data.d===3?-1:1;for(vt+=this.r.v,this.v._length=0,mt=0;mt<j;mt+=1){var Et=lt*Math.cos(vt),gt=lt*Math.sin(vt),St=Et===0&&gt===0?0:gt/Math.sqrt(Et*Et+gt*gt),Ct=Et===0&&gt===0?0:-Et/Math.sqrt(Et*Et+gt*gt);Et+=+this.p.v[0],gt+=+this.p.v[1],this.v.setTripleAt(Et,gt,Et-St*ft*pt*_t,gt-Ct*ft*pt*_t,Et+St*ft*pt*_t,gt+Ct*ft*pt*_t,mt,!0),vt+=at*_t}this.paths.length=0,this.paths[0]=this.v}},extendPrototype([DynamicPropertyContainer],$),$}(),et=function(){function $(_e,j){this.v=shapePool.newElement(),this.v.c=!0,this.localShapeCollection=shapeCollectionPool.newShapeCollection(),this.localShapeCollection.addShape(this.v),this.paths=this.localShapeCollection,this.elem=_e,this.comp=_e.comp,this.frameId=-1,this.d=j.d,this.initDynamicPropertyContainer(_e),this.p=PropertyFactory.getProp(_e,j.p,1,0,this),this.s=PropertyFactory.getProp(_e,j.s,1,0,this),this.r=PropertyFactory.getProp(_e,j.r,0,0,this),this.dynamicProperties.length?this.k=!0:(this.k=!1,this.convertRectToPath())}return $.prototype={convertRectToPath:function(){var j=this.p.v[0],at=this.p.v[1],lt=this.s.v[0]/2,pt=this.s.v[1]/2,ft=bmMin(lt,pt,this.r.v),mt=ft*(1-roundCorner);this.v._length=0,this.d===2||this.d===1?(this.v.setTripleAt(j+lt,at-pt+ft,j+lt,at-pt+ft,j+lt,at-pt+mt,0,!0),this.v.setTripleAt(j+lt,at+pt-ft,j+lt,at+pt-mt,j+lt,at+pt-ft,1,!0),ft!==0?(this.v.setTripleAt(j+lt-ft,at+pt,j+lt-ft,at+pt,j+lt-mt,at+pt,2,!0),this.v.setTripleAt(j-lt+ft,at+pt,j-lt+mt,at+pt,j-lt+ft,at+pt,3,!0),this.v.setTripleAt(j-lt,at+pt-ft,j-lt,at+pt-ft,j-lt,at+pt-mt,4,!0),this.v.setTripleAt(j-lt,at-pt+ft,j-lt,at-pt+mt,j-lt,at-pt+ft,5,!0),this.v.setTripleAt(j-lt+ft,at-pt,j-lt+ft,at-pt,j-lt+mt,at-pt,6,!0),this.v.setTripleAt(j+lt-ft,at-pt,j+lt-mt,at-pt,j+lt-ft,at-pt,7,!0)):(this.v.setTripleAt(j-lt,at+pt,j-lt+mt,at+pt,j-lt,at+pt,2),this.v.setTripleAt(j-lt,at-pt,j-lt,at-pt+mt,j-lt,at-pt,3))):(this.v.setTripleAt(j+lt,at-pt+ft,j+lt,at-pt+mt,j+lt,at-pt+ft,0,!0),ft!==0?(this.v.setTripleAt(j+lt-ft,at-pt,j+lt-ft,at-pt,j+lt-mt,at-pt,1,!0),this.v.setTripleAt(j-lt+ft,at-pt,j-lt+mt,at-pt,j-lt+ft,at-pt,2,!0),this.v.setTripleAt(j-lt,at-pt+ft,j-lt,at-pt+ft,j-lt,at-pt+mt,3,!0),this.v.setTripleAt(j-lt,at+pt-ft,j-lt,at+pt-mt,j-lt,at+pt-ft,4,!0),this.v.setTripleAt(j-lt+ft,at+pt,j-lt+ft,at+pt,j-lt+mt,at+pt,5,!0),this.v.setTripleAt(j+lt-ft,at+pt,j+lt-mt,at+pt,j+lt-ft,at+pt,6,!0),this.v.setTripleAt(j+lt,at+pt-ft,j+lt,at+pt-ft,j+lt,at+pt-mt,7,!0)):(this.v.setTripleAt(j-lt,at-pt,j-lt+mt,at-pt,j-lt,at-pt,1,!0),this.v.setTripleAt(j-lt,at+pt,j-lt,at+pt-mt,j-lt,at+pt,2,!0),this.v.setTripleAt(j+lt,at+pt,j+lt-mt,at+pt,j+lt,at+pt,3,!0)))},getValue:function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf&&this.convertRectToPath())},reset:s},extendPrototype([DynamicPropertyContainer],$),$}();function st($,_e,j){var at;if(j===3||j===4){var lt=j===3?_e.pt:_e.ks,pt=lt.k;pt.length?at=new _($,_e,j):at=new b($,_e,j)}else j===5?at=new et($,_e):j===6?at=new tt($,_e):j===7&&(at=new it($,_e));return at.k&&$.addDynamicProperty(at),at}function nt(){return b}function rt(){return _}var ht={};return ht.getShapeProp=st,ht.getConstructorFunction=nt,ht.getKeyframedConstructorFunction=rt,ht}();/*!
 Transformation Matrix v2.0
 (c) Epistemex 2014-2015
 www.epistemex.com
 By Ken Fyrstenberg
 Contributions by leeoniya.
 License: MIT, header required.
 */var Matrix=function(){var e=Math.cos,a=Math.sin,i=Math.tan,s=Math.round;function o(){return this.props[0]=1,this.props[1]=0,this.props[2]=0,this.props[3]=0,this.props[4]=0,this.props[5]=1,this.props[6]=0,this.props[7]=0,this.props[8]=0,this.props[9]=0,this.props[10]=1,this.props[11]=0,this.props[12]=0,this.props[13]=0,this.props[14]=0,this.props[15]=1,this}function c(ot){if(ot===0)return this;var ut=e(ot),yt=a(ot);return this._t(ut,-yt,0,0,yt,ut,0,0,0,0,1,0,0,0,0,1)}function d(ot){if(ot===0)return this;var ut=e(ot),yt=a(ot);return this._t(1,0,0,0,0,ut,-yt,0,0,yt,ut,0,0,0,0,1)}function b(ot){if(ot===0)return this;var ut=e(ot),yt=a(ot);return this._t(ut,0,yt,0,0,1,0,0,-yt,0,ut,0,0,0,0,1)}function g(ot){if(ot===0)return this;var ut=e(ot),yt=a(ot);return this._t(ut,-yt,0,0,yt,ut,0,0,0,0,1,0,0,0,0,1)}function _(ot,ut){return this._t(1,ut,ot,1,0,0)}function tt(ot,ut){return this.shear(i(ot),i(ut))}function it(ot,ut){var yt=e(ut),dt=a(ut);return this._t(yt,dt,0,0,-dt,yt,0,0,0,0,1,0,0,0,0,1)._t(1,0,0,0,i(ot),1,0,0,0,0,1,0,0,0,0,1)._t(yt,-dt,0,0,dt,yt,0,0,0,0,1,0,0,0,0,1)}function et(ot,ut,yt){return!yt&&yt!==0&&(yt=1),ot===1&&ut===1&&yt===1?this:this._t(ot,0,0,0,0,ut,0,0,0,0,yt,0,0,0,0,1)}function st(ot,ut,yt,dt,kt,At,Pt,Dt,wt,Ft,Bt,Kt,Vt,Tt,Lt,Rt){return this.props[0]=ot,this.props[1]=ut,this.props[2]=yt,this.props[3]=dt,this.props[4]=kt,this.props[5]=At,this.props[6]=Pt,this.props[7]=Dt,this.props[8]=wt,this.props[9]=Ft,this.props[10]=Bt,this.props[11]=Kt,this.props[12]=Vt,this.props[13]=Tt,this.props[14]=Lt,this.props[15]=Rt,this}function nt(ot,ut,yt){return yt=yt||0,ot!==0||ut!==0||yt!==0?this._t(1,0,0,0,0,1,0,0,0,0,1,0,ot,ut,yt,1):this}function rt(ot,ut,yt,dt,kt,At,Pt,Dt,wt,Ft,Bt,Kt,Vt,Tt,Lt,Rt){var It=this.props;if(ot===1&&ut===0&&yt===0&&dt===0&&kt===0&&At===1&&Pt===0&&Dt===0&&wt===0&&Ft===0&&Bt===1&&Kt===0)return It[12]=It[12]*ot+It[15]*Vt,It[13]=It[13]*At+It[15]*Tt,It[14]=It[14]*Bt+It[15]*Lt,It[15]*=Rt,this._identityCalculated=!1,this;var Nt=It[0],zt=It[1],Ot=It[2],jt=It[3],Ht=It[4],Ut=It[5],Mt=It[6],Wt=It[7],Qt=It[8],Gt=It[9],Yt=It[10],$t=It[11],Xt=It[12],qt=It[13],Zt=It[14],Jt=It[15];return It[0]=Nt*ot+zt*kt+Ot*wt+jt*Vt,It[1]=Nt*ut+zt*At+Ot*Ft+jt*Tt,It[2]=Nt*yt+zt*Pt+Ot*Bt+jt*Lt,It[3]=Nt*dt+zt*Dt+Ot*Kt+jt*Rt,It[4]=Ht*ot+Ut*kt+Mt*wt+Wt*Vt,It[5]=Ht*ut+Ut*At+Mt*Ft+Wt*Tt,It[6]=Ht*yt+Ut*Pt+Mt*Bt+Wt*Lt,It[7]=Ht*dt+Ut*Dt+Mt*Kt+Wt*Rt,It[8]=Qt*ot+Gt*kt+Yt*wt+$t*Vt,It[9]=Qt*ut+Gt*At+Yt*Ft+$t*Tt,It[10]=Qt*yt+Gt*Pt+Yt*Bt+$t*Lt,It[11]=Qt*dt+Gt*Dt+Yt*Kt+$t*Rt,It[12]=Xt*ot+qt*kt+Zt*wt+Jt*Vt,It[13]=Xt*ut+qt*At+Zt*Ft+Jt*Tt,It[14]=Xt*yt+qt*Pt+Zt*Bt+Jt*Lt,It[15]=Xt*dt+qt*Dt+Zt*Kt+Jt*Rt,this._identityCalculated=!1,this}function ht(ot){var ut=ot.props;return this.transform(ut[0],ut[1],ut[2],ut[3],ut[4],ut[5],ut[6],ut[7],ut[8],ut[9],ut[10],ut[11],ut[12],ut[13],ut[14],ut[15])}function $(){return this._identityCalculated||(this._identity=!(this.props[0]!==1||this.props[1]!==0||this.props[2]!==0||this.props[3]!==0||this.props[4]!==0||this.props[5]!==1||this.props[6]!==0||this.props[7]!==0||this.props[8]!==0||this.props[9]!==0||this.props[10]!==1||this.props[11]!==0||this.props[12]!==0||this.props[13]!==0||this.props[14]!==0||this.props[15]!==1),this._identityCalculated=!0),this._identity}function _e(ot){for(var ut=0;ut<16;){if(ot.props[ut]!==this.props[ut])return!1;ut+=1}return!0}function j(ot){var ut;for(ut=0;ut<16;ut+=1)ot.props[ut]=this.props[ut];return ot}function at(ot){var ut;for(ut=0;ut<16;ut+=1)this.props[ut]=ot[ut]}function lt(ot,ut,yt){return{x:ot*this.props[0]+ut*this.props[4]+yt*this.props[8]+this.props[12],y:ot*this.props[1]+ut*this.props[5]+yt*this.props[9]+this.props[13],z:ot*this.props[2]+ut*this.props[6]+yt*this.props[10]+this.props[14]}}function pt(ot,ut,yt){return ot*this.props[0]+ut*this.props[4]+yt*this.props[8]+this.props[12]}function ft(ot,ut,yt){return ot*this.props[1]+ut*this.props[5]+yt*this.props[9]+this.props[13]}function mt(ot,ut,yt){return ot*this.props[2]+ut*this.props[6]+yt*this.props[10]+this.props[14]}function vt(){var ot=this.props[0]*this.props[5]-this.props[1]*this.props[4],ut=this.props[5]/ot,yt=-this.props[1]/ot,dt=-this.props[4]/ot,kt=this.props[0]/ot,At=(this.props[4]*this.props[13]-this.props[5]*this.props[12])/ot,Pt=-(this.props[0]*this.props[13]-this.props[1]*this.props[12])/ot,Dt=new Matrix;return Dt.props[0]=ut,Dt.props[1]=yt,Dt.props[4]=dt,Dt.props[5]=kt,Dt.props[12]=At,Dt.props[13]=Pt,Dt}function _t(ot){var ut=this.getInverseMatrix();return ut.applyToPointArray(ot[0],ot[1],ot[2]||0)}function Et(ot){var ut,yt=ot.length,dt=[];for(ut=0;ut<yt;ut+=1)dt[ut]=_t(ot[ut]);return dt}function gt(ot,ut,yt){var dt=createTypedArray("float32",6);if(this.isIdentity())dt[0]=ot[0],dt[1]=ot[1],dt[2]=ut[0],dt[3]=ut[1],dt[4]=yt[0],dt[5]=yt[1];else{var kt=this.props[0],At=this.props[1],Pt=this.props[4],Dt=this.props[5],wt=this.props[12],Ft=this.props[13];dt[0]=ot[0]*kt+ot[1]*Pt+wt,dt[1]=ot[0]*At+ot[1]*Dt+Ft,dt[2]=ut[0]*kt+ut[1]*Pt+wt,dt[3]=ut[0]*At+ut[1]*Dt+Ft,dt[4]=yt[0]*kt+yt[1]*Pt+wt,dt[5]=yt[0]*At+yt[1]*Dt+Ft}return dt}function St(ot,ut,yt){var dt;return this.isIdentity()?dt=[ot,ut,yt]:dt=[ot*this.props[0]+ut*this.props[4]+yt*this.props[8]+this.props[12],ot*this.props[1]+ut*this.props[5]+yt*this.props[9]+this.props[13],ot*this.props[2]+ut*this.props[6]+yt*this.props[10]+this.props[14]],dt}function Ct(ot,ut){if(this.isIdentity())return ot+","+ut;var yt=this.props;return Math.round((ot*yt[0]+ut*yt[4]+yt[12])*100)/100+","+Math.round((ot*yt[1]+ut*yt[5]+yt[13])*100)/100}function bt(){for(var ot=0,ut=this.props,yt="matrix3d(",dt=1e4;ot<16;)yt+=s(ut[ot]*dt)/dt,yt+=ot===15?")":",",ot+=1;return yt}function ct(ot){var ut=1e4;return ot<1e-6&&ot>0||ot>-1e-6&&ot<0?s(ot*ut)/ut:ot}function xt(){var ot=this.props,ut=ct(ot[0]),yt=ct(ot[1]),dt=ct(ot[4]),kt=ct(ot[5]),At=ct(ot[12]),Pt=ct(ot[13]);return"matrix("+ut+","+yt+","+dt+","+kt+","+At+","+Pt+")"}return function(){this.reset=o,this.rotate=c,this.rotateX=d,this.rotateY=b,this.rotateZ=g,this.skew=tt,this.skewFromAxis=it,this.shear=_,this.scale=et,this.setTransform=st,this.translate=nt,this.transform=rt,this.multiply=ht,this.applyToPoint=lt,this.applyToX=pt,this.applyToY=ft,this.applyToZ=mt,this.applyToPointArray=St,this.applyToTriplePoints=gt,this.applyToPointStringified=Ct,this.toCSS=bt,this.to2dCSS=xt,this.clone=j,this.cloneFromProps=at,this.equals=_e,this.inversePoints=Et,this.inversePoint=_t,this.getInverseMatrix=vt,this._t=this.transform,this.isIdentity=$,this._identity=!0,this._identityCalculated=!1,this.props=createTypedArray("float32",16),this.reset()}}();function _typeof$3(e){"@babel/helpers - typeof";return _typeof$3=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof$3(e)}var lottie={};function setLocation(e){setLocationHref(e)}function searchAnimations(){animationManager.searchAnimations()}function setSubframeRendering(e){setSubframeEnabled(e)}function setPrefix(e){setIdPrefix(e)}function loadAnimation(e){return animationManager.loadAnimation(e)}function setQuality(e){if(typeof e=="string")switch(e){case"high":setDefaultCurveSegments(200);break;default:case"medium":setDefaultCurveSegments(50);break;case"low":setDefaultCurveSegments(10);break}else!isNaN(e)&&e>1&&setDefaultCurveSegments(e)}function inBrowser(){return typeof navigator<"u"}function installPlugin(e,a){e==="expressions"&&setExpressionsPlugin(a)}function getFactory(e){switch(e){case"propertyFactory":return PropertyFactory;case"shapePropertyFactory":return ShapePropertyFactory;case"matrix":return Matrix;default:return null}}lottie.play=animationManager.play,lottie.pause=animationManager.pause,lottie.setLocationHref=setLocation,lottie.togglePause=animationManager.togglePause,lottie.setSpeed=animationManager.setSpeed,lottie.setDirection=animationManager.setDirection,lottie.stop=animationManager.stop,lottie.searchAnimations=searchAnimations,lottie.registerAnimation=animationManager.registerAnimation,lottie.loadAnimation=loadAnimation,lottie.setSubframeRendering=setSubframeRendering,lottie.resize=animationManager.resize,lottie.goToAndStop=animationManager.goToAndStop,lottie.destroy=animationManager.destroy,lottie.setQuality=setQuality,lottie.inBrowser=inBrowser,lottie.installPlugin=installPlugin,lottie.freeze=animationManager.freeze,lottie.unfreeze=animationManager.unfreeze,lottie.setVolume=animationManager.setVolume,lottie.mute=animationManager.mute,lottie.unmute=animationManager.unmute,lottie.getRegisteredAnimations=animationManager.getRegisteredAnimations,lottie.useWebWorker=setWebWorker,lottie.setIDPrefix=setPrefix,lottie.__getFactory=getFactory,lottie.version="5.13.0";function checkReady(){document.readyState==="complete"&&(clearInterval(readyStateCheckInterval),searchAnimations())}function getQueryVariable(e){for(var a=queryString.split("&"),i=0;i<a.length;i+=1){var s=a[i].split("=");if(decodeURIComponent(s[0])==e)return decodeURIComponent(s[1])}return null}var queryString="";{var scripts=document.getElementsByTagName("script"),index=scripts.length-1,myScript=scripts[index]||{src:""};queryString=myScript.src?myScript.src.replace(/^[^\?]+\??/,""):"",getQueryVariable("renderer")}var readyStateCheckInterval=setInterval(checkReady,100);try{_typeof$3(exports)!=="object"&&(window.bodymovin=lottie)}catch(e){}var ShapeModifiers=function(){var e={},a={};e.registerModifier=i,e.getModifier=s;function i(o,c){a[o]||(a[o]=c)}function s(o,c,d){return new a[o](c,d)}return e}();function ShapeModifier(){}ShapeModifier.prototype.initModifierProperties=function(){},ShapeModifier.prototype.addShapeToModifier=function(){},ShapeModifier.prototype.addShape=function(e){if(!this.closed){e.sh.container.addDynamicProperty(e.sh);var a={shape:e.sh,data:e,localShapeCollection:shapeCollectionPool.newShapeCollection()};this.shapes.push(a),this.addShapeToModifier(a),this._isAnimated&&e.setAsAnimated()}},ShapeModifier.prototype.init=function(e,a){this.shapes=[],this.elem=e,this.initDynamicPropertyContainer(e),this.initModifierProperties(e,a),this.frameId=initialDefaultFrame,this.closed=!1,this.k=!1,this.dynamicProperties.length?this.k=!0:this.getValue(!0)},ShapeModifier.prototype.processKeys=function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties())},extendPrototype([DynamicPropertyContainer],ShapeModifier);function TrimModifier(){}extendPrototype([ShapeModifier],TrimModifier),TrimModifier.prototype.initModifierProperties=function(e,a){this.s=PropertyFactory.getProp(e,a.s,0,.01,this),this.e=PropertyFactory.getProp(e,a.e,0,.01,this),this.o=PropertyFactory.getProp(e,a.o,0,0,this),this.sValue=0,this.eValue=0,this.getValue=this.processKeys,this.m=a.m,this._isAnimated=!!this.s.effectsSequence.length||!!this.e.effectsSequence.length||!!this.o.effectsSequence.length},TrimModifier.prototype.addShapeToModifier=function(e){e.pathsData=[]},TrimModifier.prototype.calculateShapeEdges=function(e,a,i,s,o){var c=[];a<=1?c.push({s:e,e:a}):e>=1?c.push({s:e-1,e:a-1}):(c.push({s:e,e:1}),c.push({s:0,e:a-1}));var d=[],b,g=c.length,_;for(b=0;b<g;b+=1)if(_=c[b],!(_.e*o<s||_.s*o>s+i)){var tt,it;_.s*o<=s?tt=0:tt=(_.s*o-s)/i,_.e*o>=s+i?it=1:it=(_.e*o-s)/i,d.push([tt,it])}return d.length||d.push([0,0]),d},TrimModifier.prototype.releasePathsData=function(e){var a,i=e.length;for(a=0;a<i;a+=1)segmentsLengthPool.release(e[a]);return e.length=0,e},TrimModifier.prototype.processShapes=function(e){var a,i;if(this._mdf||e){var s=this.o.v%360/360;if(s<0&&(s+=1),this.s.v>1?a=1+s:this.s.v<0?a=0+s:a=this.s.v+s,this.e.v>1?i=1+s:this.e.v<0?i=0+s:i=this.e.v+s,a>i){var o=a;a=i,i=o}a=Math.round(a*1e4)*1e-4,i=Math.round(i*1e4)*1e-4,this.sValue=a,this.eValue=i}else a=this.sValue,i=this.eValue;var c,d,b=this.shapes.length,g,_,tt,it,et,st=0;if(i===a)for(d=0;d<b;d+=1)this.shapes[d].localShapeCollection.releaseShapes(),this.shapes[d].shape._mdf=!0,this.shapes[d].shape.paths=this.shapes[d].localShapeCollection,this._mdf&&(this.shapes[d].pathsData.length=0);else if(i===1&&a===0||i===0&&a===1){if(this._mdf)for(d=0;d<b;d+=1)this.shapes[d].pathsData.length=0,this.shapes[d].shape._mdf=!0}else{var nt=[],rt,ht;for(d=0;d<b;d+=1)if(rt=this.shapes[d],!rt.shape._mdf&&!this._mdf&&!e&&this.m!==2)rt.shape.paths=rt.localShapeCollection;else{if(c=rt.shape.paths,_=c._length,et=0,!rt.shape._mdf&&rt.pathsData.length)et=rt.totalShapeLength;else{for(tt=this.releasePathsData(rt.pathsData),g=0;g<_;g+=1)it=bez.getSegmentsLength(c.shapes[g]),tt.push(it),et+=it.totalLength;rt.totalShapeLength=et,rt.pathsData=tt}st+=et,rt.shape._mdf=!0}var $=a,_e=i,j=0,at;for(d=b-1;d>=0;d-=1)if(rt=this.shapes[d],rt.shape._mdf){for(ht=rt.localShapeCollection,ht.releaseShapes(),this.m===2&&b>1?(at=this.calculateShapeEdges(a,i,rt.totalShapeLength,j,st),j+=rt.totalShapeLength):at=[[$,_e]],_=at.length,g=0;g<_;g+=1){$=at[g][0],_e=at[g][1],nt.length=0,_e<=1?nt.push({s:rt.totalShapeLength*$,e:rt.totalShapeLength*_e}):$>=1?nt.push({s:rt.totalShapeLength*($-1),e:rt.totalShapeLength*(_e-1)}):(nt.push({s:rt.totalShapeLength*$,e:rt.totalShapeLength}),nt.push({s:0,e:rt.totalShapeLength*(_e-1)}));var lt=this.addShapes(rt,nt[0]);if(nt[0].s!==nt[0].e){if(nt.length>1){var pt=rt.shape.paths.shapes[rt.shape.paths._length-1];if(pt.c){var ft=lt.pop();this.addPaths(lt,ht),lt=this.addShapes(rt,nt[1],ft)}else this.addPaths(lt,ht),lt=this.addShapes(rt,nt[1])}this.addPaths(lt,ht)}}rt.shape.paths=ht}}},TrimModifier.prototype.addPaths=function(e,a){var i,s=e.length;for(i=0;i<s;i+=1)a.addShape(e[i])},TrimModifier.prototype.addSegment=function(e,a,i,s,o,c,d){o.setXYAt(a[0],a[1],"o",c),o.setXYAt(i[0],i[1],"i",c+1),d&&o.setXYAt(e[0],e[1],"v",c),o.setXYAt(s[0],s[1],"v",c+1)},TrimModifier.prototype.addSegmentFromArray=function(e,a,i,s){a.setXYAt(e[1],e[5],"o",i),a.setXYAt(e[2],e[6],"i",i+1),s&&a.setXYAt(e[0],e[4],"v",i),a.setXYAt(e[3],e[7],"v",i+1)},TrimModifier.prototype.addShapes=function(e,a,i){var s=e.pathsData,o=e.shape.paths.shapes,c,d=e.shape.paths._length,b,g,_=0,tt,it,et,st,nt=[],rt,ht=!0;for(i?(it=i._length,rt=i._length):(i=shapePool.newElement(),it=0,rt=0),nt.push(i),c=0;c<d;c+=1){for(et=s[c].lengths,i.c=o[c].c,g=o[c].c?et.length:et.length+1,b=1;b<g;b+=1)if(tt=et[b-1],_+tt.addedLength<a.s)_+=tt.addedLength,i.c=!1;else if(_>a.e){i.c=!1;break}else a.s<=_&&a.e>=_+tt.addedLength?(this.addSegment(o[c].v[b-1],o[c].o[b-1],o[c].i[b],o[c].v[b],i,it,ht),ht=!1):(st=bez.getNewSegment(o[c].v[b-1],o[c].v[b],o[c].o[b-1],o[c].i[b],(a.s-_)/tt.addedLength,(a.e-_)/tt.addedLength,et[b-1]),this.addSegmentFromArray(st,i,it,ht),ht=!1,i.c=!1),_+=tt.addedLength,it+=1;if(o[c].c&&et.length){if(tt=et[b-1],_<=a.e){var $=et[b-1].addedLength;a.s<=_&&a.e>=_+$?(this.addSegment(o[c].v[b-1],o[c].o[b-1],o[c].i[0],o[c].v[0],i,it,ht),ht=!1):(st=bez.getNewSegment(o[c].v[b-1],o[c].v[0],o[c].o[b-1],o[c].i[0],(a.s-_)/$,(a.e-_)/$,et[b-1]),this.addSegmentFromArray(st,i,it,ht),ht=!1,i.c=!1)}else i.c=!1;_+=tt.addedLength,it+=1}if(i._length&&(i.setXYAt(i.v[rt][0],i.v[rt][1],"i",rt),i.setXYAt(i.v[i._length-1][0],i.v[i._length-1][1],"o",i._length-1)),_>a.e)break;c<d-1&&(i=shapePool.newElement(),ht=!0,nt.push(i),it=0)}return nt};function PuckerAndBloatModifier(){}extendPrototype([ShapeModifier],PuckerAndBloatModifier),PuckerAndBloatModifier.prototype.initModifierProperties=function(e,a){this.getValue=this.processKeys,this.amount=PropertyFactory.getProp(e,a.a,0,null,this),this._isAnimated=!!this.amount.effectsSequence.length},PuckerAndBloatModifier.prototype.processPath=function(e,a){var i=a/100,s=[0,0],o=e._length,c=0;for(c=0;c<o;c+=1)s[0]+=e.v[c][0],s[1]+=e.v[c][1];s[0]/=o,s[1]/=o;var d=shapePool.newElement();d.c=e.c;var b,g,_,tt,it,et;for(c=0;c<o;c+=1)b=e.v[c][0]+(s[0]-e.v[c][0])*i,g=e.v[c][1]+(s[1]-e.v[c][1])*i,_=e.o[c][0]+(s[0]-e.o[c][0])*-i,tt=e.o[c][1]+(s[1]-e.o[c][1])*-i,it=e.i[c][0]+(s[0]-e.i[c][0])*-i,et=e.i[c][1]+(s[1]-e.i[c][1])*-i,d.setTripleAt(b,g,_,tt,it,et,c);return d},PuckerAndBloatModifier.prototype.processShapes=function(e){var a,i,s=this.shapes.length,o,c,d=this.amount.v;if(d!==0){var b,g;for(i=0;i<s;i+=1){if(b=this.shapes[i],g=b.localShapeCollection,!(!b.shape._mdf&&!this._mdf&&!e))for(g.releaseShapes(),b.shape._mdf=!0,a=b.shape.paths.shapes,c=b.shape.paths._length,o=0;o<c;o+=1)g.addShape(this.processPath(a[o],d));b.shape.paths=b.localShapeCollection}}this.dynamicProperties.length||(this._mdf=!1)};var TransformPropertyFactory=function(){var e=[0,0];function a(g){var _=this._mdf;this.iterateDynamicProperties(),this._mdf=this._mdf||_,this.a&&g.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.s&&g.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.sk&&g.skewFromAxis(-this.sk.v,this.sa.v),this.r?g.rotate(-this.r.v):g.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.data.p.s?this.data.p.z?g.translate(this.px.v,this.py.v,-this.pz.v):g.translate(this.px.v,this.py.v,0):g.translate(this.p.v[0],this.p.v[1],-this.p.v[2])}function i(g){if(this.elem.globalData.frameId!==this.frameId){if(this._isDirty&&(this.precalculateMatrix(),this._isDirty=!1),this.iterateDynamicProperties(),this._mdf||g){var _;if(this.v.cloneFromProps(this.pre.props),this.appliedTransformations<1&&this.v.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.appliedTransformations<2&&this.v.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.sk&&this.appliedTransformations<3&&this.v.skewFromAxis(-this.sk.v,this.sa.v),this.r&&this.appliedTransformations<4?this.v.rotate(-this.r.v):!this.r&&this.appliedTransformations<4&&this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.autoOriented){var tt,it;if(_=this.elem.globalData.frameRate,this.p&&this.p.keyframes&&this.p.getValueAtTime)this.p._caching.lastFrame+this.p.offsetTime<=this.p.keyframes[0].t?(tt=this.p.getValueAtTime((this.p.keyframes[0].t+.01)/_,0),it=this.p.getValueAtTime(this.p.keyframes[0].t/_,0)):this.p._caching.lastFrame+this.p.offsetTime>=this.p.keyframes[this.p.keyframes.length-1].t?(tt=this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length-1].t/_,0),it=this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length-1].t-.05)/_,0)):(tt=this.p.pv,it=this.p.getValueAtTime((this.p._caching.lastFrame+this.p.offsetTime-.01)/_,this.p.offsetTime));else if(this.px&&this.px.keyframes&&this.py.keyframes&&this.px.getValueAtTime&&this.py.getValueAtTime){tt=[],it=[];var et=this.px,st=this.py;et._caching.lastFrame+et.offsetTime<=et.keyframes[0].t?(tt[0]=et.getValueAtTime((et.keyframes[0].t+.01)/_,0),tt[1]=st.getValueAtTime((st.keyframes[0].t+.01)/_,0),it[0]=et.getValueAtTime(et.keyframes[0].t/_,0),it[1]=st.getValueAtTime(st.keyframes[0].t/_,0)):et._caching.lastFrame+et.offsetTime>=et.keyframes[et.keyframes.length-1].t?(tt[0]=et.getValueAtTime(et.keyframes[et.keyframes.length-1].t/_,0),tt[1]=st.getValueAtTime(st.keyframes[st.keyframes.length-1].t/_,0),it[0]=et.getValueAtTime((et.keyframes[et.keyframes.length-1].t-.01)/_,0),it[1]=st.getValueAtTime((st.keyframes[st.keyframes.length-1].t-.01)/_,0)):(tt=[et.pv,st.pv],it[0]=et.getValueAtTime((et._caching.lastFrame+et.offsetTime-.01)/_,et.offsetTime),it[1]=st.getValueAtTime((st._caching.lastFrame+st.offsetTime-.01)/_,st.offsetTime))}else it=e,tt=it;this.v.rotate(-Math.atan2(tt[1]-it[1],tt[0]-it[0]))}this.data.p&&this.data.p.s?this.data.p.z?this.v.translate(this.px.v,this.py.v,-this.pz.v):this.v.translate(this.px.v,this.py.v,0):this.v.translate(this.p.v[0],this.p.v[1],-this.p.v[2])}this.frameId=this.elem.globalData.frameId}}function s(){if(this.appliedTransformations=0,this.pre.reset(),!this.a.effectsSequence.length)this.pre.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.appliedTransformations=1;else return;if(!this.s.effectsSequence.length)this.pre.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.appliedTransformations=2;else return;if(this.sk)if(!this.sk.effectsSequence.length&&!this.sa.effectsSequence.length)this.pre.skewFromAxis(-this.sk.v,this.sa.v),this.appliedTransformations=3;else return;this.r?this.r.effectsSequence.length||(this.pre.rotate(-this.r.v),this.appliedTransformations=4):!this.rz.effectsSequence.length&&!this.ry.effectsSequence.length&&!this.rx.effectsSequence.length&&!this.or.effectsSequence.length&&(this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.appliedTransformations=4)}function o(){}function c(g){this._addDynamicProperty(g),this.elem.addDynamicProperty(g),this._isDirty=!0}function d(g,_,tt){if(this.elem=g,this.frameId=-1,this.propType="transform",this.data=_,this.v=new Matrix,this.pre=new Matrix,this.appliedTransformations=0,this.initDynamicPropertyContainer(tt||g),_.p&&_.p.s?(this.px=PropertyFactory.getProp(g,_.p.x,0,0,this),this.py=PropertyFactory.getProp(g,_.p.y,0,0,this),_.p.z&&(this.pz=PropertyFactory.getProp(g,_.p.z,0,0,this))):this.p=PropertyFactory.getProp(g,_.p||{k:[0,0,0]},1,0,this),_.rx){if(this.rx=PropertyFactory.getProp(g,_.rx,0,degToRads,this),this.ry=PropertyFactory.getProp(g,_.ry,0,degToRads,this),this.rz=PropertyFactory.getProp(g,_.rz,0,degToRads,this),_.or.k[0].ti){var it,et=_.or.k.length;for(it=0;it<et;it+=1)_.or.k[it].to=null,_.or.k[it].ti=null}this.or=PropertyFactory.getProp(g,_.or,1,degToRads,this),this.or.sh=!0}else this.r=PropertyFactory.getProp(g,_.r||{k:0},0,degToRads,this);_.sk&&(this.sk=PropertyFactory.getProp(g,_.sk,0,degToRads,this),this.sa=PropertyFactory.getProp(g,_.sa,0,degToRads,this)),this.a=PropertyFactory.getProp(g,_.a||{k:[0,0,0]},1,0,this),this.s=PropertyFactory.getProp(g,_.s||{k:[100,100,100]},1,.01,this),_.o?this.o=PropertyFactory.getProp(g,_.o,0,.01,g):this.o={_mdf:!1,v:1},this._isDirty=!0,this.dynamicProperties.length||this.getValue(!0)}d.prototype={applyToMatrix:a,getValue:i,precalculateMatrix:s,autoOrient:o},extendPrototype([DynamicPropertyContainer],d),d.prototype.addDynamicProperty=c,d.prototype._addDynamicProperty=DynamicPropertyContainer.prototype.addDynamicProperty;function b(g,_,tt){return new d(g,_,tt)}return{getTransformProperty:b}}();function RepeaterModifier(){}extendPrototype([ShapeModifier],RepeaterModifier),RepeaterModifier.prototype.initModifierProperties=function(e,a){this.getValue=this.processKeys,this.c=PropertyFactory.getProp(e,a.c,0,null,this),this.o=PropertyFactory.getProp(e,a.o,0,null,this),this.tr=TransformPropertyFactory.getTransformProperty(e,a.tr,this),this.so=PropertyFactory.getProp(e,a.tr.so,0,.01,this),this.eo=PropertyFactory.getProp(e,a.tr.eo,0,.01,this),this.data=a,this.dynamicProperties.length||this.getValue(!0),this._isAnimated=!!this.dynamicProperties.length,this.pMatrix=new Matrix,this.rMatrix=new Matrix,this.sMatrix=new Matrix,this.tMatrix=new Matrix,this.matrix=new Matrix},RepeaterModifier.prototype.applyTransforms=function(e,a,i,s,o,c){var d=c?-1:1,b=s.s.v[0]+(1-s.s.v[0])*(1-o),g=s.s.v[1]+(1-s.s.v[1])*(1-o);e.translate(s.p.v[0]*d*o,s.p.v[1]*d*o,s.p.v[2]),a.translate(-s.a.v[0],-s.a.v[1],s.a.v[2]),a.rotate(-s.r.v*d*o),a.translate(s.a.v[0],s.a.v[1],s.a.v[2]),i.translate(-s.a.v[0],-s.a.v[1],s.a.v[2]),i.scale(c?1/b:b,c?1/g:g),i.translate(s.a.v[0],s.a.v[1],s.a.v[2])},RepeaterModifier.prototype.init=function(e,a,i,s){for(this.elem=e,this.arr=a,this.pos=i,this.elemsData=s,this._currentCopies=0,this._elements=[],this._groups=[],this.frameId=-1,this.initDynamicPropertyContainer(e),this.initModifierProperties(e,a[i]);i>0;)i-=1,this._elements.unshift(a[i]);this.dynamicProperties.length?this.k=!0:this.getValue(!0)},RepeaterModifier.prototype.resetElements=function(e){var a,i=e.length;for(a=0;a<i;a+=1)e[a]._processed=!1,e[a].ty==="gr"&&this.resetElements(e[a].it)},RepeaterModifier.prototype.cloneElements=function(e){var a=JSON.parse(JSON.stringify(e));return this.resetElements(a),a},RepeaterModifier.prototype.changeGroupRender=function(e,a){var i,s=e.length;for(i=0;i<s;i+=1)e[i]._render=a,e[i].ty==="gr"&&this.changeGroupRender(e[i].it,a)},RepeaterModifier.prototype.processShapes=function(e){var a,i,s,o,c,d=!1;if(this._mdf||e){var b=Math.ceil(this.c.v);if(this._groups.length<b){for(;this._groups.length<b;){var g={it:this.cloneElements(this._elements),ty:"gr"};g.it.push({a:{a:0,ix:1,k:[0,0]},nm:"Transform",o:{a:0,ix:7,k:100},p:{a:0,ix:2,k:[0,0]},r:{a:1,ix:6,k:[{s:0,e:0,t:0},{s:0,e:0,t:1}]},s:{a:0,ix:3,k:[100,100]},sa:{a:0,ix:5,k:0},sk:{a:0,ix:4,k:0},ty:"tr"}),this.arr.splice(0,0,g),this._groups.splice(0,0,g),this._currentCopies+=1}this.elem.reloadShapes(),d=!0}c=0;var _;for(s=0;s<=this._groups.length-1;s+=1){if(_=c<b,this._groups[s]._render=_,this.changeGroupRender(this._groups[s].it,_),!_){var tt=this.elemsData[s].it,it=tt[tt.length-1];it.transform.op.v!==0?(it.transform.op._mdf=!0,it.transform.op.v=0):it.transform.op._mdf=!1}c+=1}this._currentCopies=b;var et=this.o.v,st=et%1,nt=et>0?Math.floor(et):Math.ceil(et),rt=this.pMatrix.props,ht=this.rMatrix.props,$=this.sMatrix.props;this.pMatrix.reset(),this.rMatrix.reset(),this.sMatrix.reset(),this.tMatrix.reset(),this.matrix.reset();var _e=0;if(et>0){for(;_e<nt;)this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!1),_e+=1;st&&(this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,st,!1),_e+=st)}else if(et<0){for(;_e>nt;)this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!0),_e-=1;st&&(this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,-st,!0),_e-=st)}s=this.data.m===1?0:this._currentCopies-1,o=this.data.m===1?1:-1,c=this._currentCopies;for(var j,at;c;){if(a=this.elemsData[s].it,i=a[a.length-1].transform.mProps.v.props,at=i.length,a[a.length-1].transform.mProps._mdf=!0,a[a.length-1].transform.op._mdf=!0,a[a.length-1].transform.op.v=this._currentCopies===1?this.so.v:this.so.v+(this.eo.v-this.so.v)*(s/(this._currentCopies-1)),_e!==0){for((s!==0&&o===1||s!==this._currentCopies-1&&o===-1)&&this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!1),this.matrix.transform(ht[0],ht[1],ht[2],ht[3],ht[4],ht[5],ht[6],ht[7],ht[8],ht[9],ht[10],ht[11],ht[12],ht[13],ht[14],ht[15]),this.matrix.transform($[0],$[1],$[2],$[3],$[4],$[5],$[6],$[7],$[8],$[9],$[10],$[11],$[12],$[13],$[14],$[15]),this.matrix.transform(rt[0],rt[1],rt[2],rt[3],rt[4],rt[5],rt[6],rt[7],rt[8],rt[9],rt[10],rt[11],rt[12],rt[13],rt[14],rt[15]),j=0;j<at;j+=1)i[j]=this.matrix.props[j];this.matrix.reset()}else for(this.matrix.reset(),j=0;j<at;j+=1)i[j]=this.matrix.props[j];_e+=1,c-=1,s+=o}}else for(c=this._currentCopies,s=0,o=1;c;)a=this.elemsData[s].it,i=a[a.length-1].transform.mProps.v.props,a[a.length-1].transform.mProps._mdf=!1,a[a.length-1].transform.op._mdf=!1,c-=1,s+=o;return d},RepeaterModifier.prototype.addShape=function(){};function RoundCornersModifier(){}extendPrototype([ShapeModifier],RoundCornersModifier),RoundCornersModifier.prototype.initModifierProperties=function(e,a){this.getValue=this.processKeys,this.rd=PropertyFactory.getProp(e,a.r,0,null,this),this._isAnimated=!!this.rd.effectsSequence.length},RoundCornersModifier.prototype.processPath=function(e,a){var i=shapePool.newElement();i.c=e.c;var s,o=e._length,c,d,b,g,_,tt,it=0,et,st,nt,rt,ht,$;for(s=0;s<o;s+=1)c=e.v[s],b=e.o[s],d=e.i[s],c[0]===b[0]&&c[1]===b[1]&&c[0]===d[0]&&c[1]===d[1]?(s===0||s===o-1)&&!e.c?(i.setTripleAt(c[0],c[1],b[0],b[1],d[0],d[1],it),it+=1):(s===0?g=e.v[o-1]:g=e.v[s-1],_=Math.sqrt(Math.pow(c[0]-g[0],2)+Math.pow(c[1]-g[1],2)),tt=_?Math.min(_/2,a)/_:0,ht=c[0]+(g[0]-c[0])*tt,et=ht,$=c[1]-(c[1]-g[1])*tt,st=$,nt=et-(et-c[0])*roundCorner,rt=st-(st-c[1])*roundCorner,i.setTripleAt(et,st,nt,rt,ht,$,it),it+=1,s===o-1?g=e.v[0]:g=e.v[s+1],_=Math.sqrt(Math.pow(c[0]-g[0],2)+Math.pow(c[1]-g[1],2)),tt=_?Math.min(_/2,a)/_:0,nt=c[0]+(g[0]-c[0])*tt,et=nt,rt=c[1]+(g[1]-c[1])*tt,st=rt,ht=et-(et-c[0])*roundCorner,$=st-(st-c[1])*roundCorner,i.setTripleAt(et,st,nt,rt,ht,$,it),it+=1):(i.setTripleAt(e.v[s][0],e.v[s][1],e.o[s][0],e.o[s][1],e.i[s][0],e.i[s][1],it),it+=1);return i},RoundCornersModifier.prototype.processShapes=function(e){var a,i,s=this.shapes.length,o,c,d=this.rd.v;if(d!==0){var b,g;for(i=0;i<s;i+=1){if(b=this.shapes[i],g=b.localShapeCollection,!(!b.shape._mdf&&!this._mdf&&!e))for(g.releaseShapes(),b.shape._mdf=!0,a=b.shape.paths.shapes,c=b.shape.paths._length,o=0;o<c;o+=1)g.addShape(this.processPath(a[o],d));b.shape.paths=b.localShapeCollection}}this.dynamicProperties.length||(this._mdf=!1)};function floatEqual(e,a){return Math.abs(e-a)*1e5<=Math.min(Math.abs(e),Math.abs(a))}function floatZero(e){return Math.abs(e)<=1e-5}function lerp(e,a,i){return e*(1-i)+a*i}function lerpPoint(e,a,i){return[lerp(e[0],a[0],i),lerp(e[1],a[1],i)]}function quadRoots(e,a,i){if(e===0)return[];var s=a*a-4*e*i;if(s<0)return[];var o=-a/(2*e);if(s===0)return[o];var c=Math.sqrt(s)/(2*e);return[o-c,o+c]}function polynomialCoefficients(e,a,i,s){return[-e+3*a-3*i+s,3*e-6*a+3*i,-3*e+3*a,e]}function singlePoint(e){return new PolynomialBezier(e,e,e,e,!1)}function PolynomialBezier(e,a,i,s,o){o&&pointEqual(e,a)&&(a=lerpPoint(e,s,1/3)),o&&pointEqual(i,s)&&(i=lerpPoint(e,s,2/3));var c=polynomialCoefficients(e[0],a[0],i[0],s[0]),d=polynomialCoefficients(e[1],a[1],i[1],s[1]);this.a=[c[0],d[0]],this.b=[c[1],d[1]],this.c=[c[2],d[2]],this.d=[c[3],d[3]],this.points=[e,a,i,s]}PolynomialBezier.prototype.point=function(e){return[((this.a[0]*e+this.b[0])*e+this.c[0])*e+this.d[0],((this.a[1]*e+this.b[1])*e+this.c[1])*e+this.d[1]]},PolynomialBezier.prototype.derivative=function(e){return[(3*e*this.a[0]+2*this.b[0])*e+this.c[0],(3*e*this.a[1]+2*this.b[1])*e+this.c[1]]},PolynomialBezier.prototype.tangentAngle=function(e){var a=this.derivative(e);return Math.atan2(a[1],a[0])},PolynomialBezier.prototype.normalAngle=function(e){var a=this.derivative(e);return Math.atan2(a[0],a[1])},PolynomialBezier.prototype.inflectionPoints=function(){var e=this.a[1]*this.b[0]-this.a[0]*this.b[1];if(floatZero(e))return[];var a=-.5*(this.a[1]*this.c[0]-this.a[0]*this.c[1])/e,i=a*a-1/3*(this.b[1]*this.c[0]-this.b[0]*this.c[1])/e;if(i<0)return[];var s=Math.sqrt(i);return floatZero(s)?s>0&&s<1?[a]:[]:[a-s,a+s].filter(function(o){return o>0&&o<1})},PolynomialBezier.prototype.split=function(e){if(e<=0)return[singlePoint(this.points[0]),this];if(e>=1)return[this,singlePoint(this.points[this.points.length-1])];var a=lerpPoint(this.points[0],this.points[1],e),i=lerpPoint(this.points[1],this.points[2],e),s=lerpPoint(this.points[2],this.points[3],e),o=lerpPoint(a,i,e),c=lerpPoint(i,s,e),d=lerpPoint(o,c,e);return[new PolynomialBezier(this.points[0],a,o,d,!0),new PolynomialBezier(d,c,s,this.points[3],!0)]};function extrema(e,a){var i=e.points[0][a],s=e.points[e.points.length-1][a];if(i>s){var o=s;s=i,i=o}for(var c=quadRoots(3*e.a[a],2*e.b[a],e.c[a]),d=0;d<c.length;d+=1)if(c[d]>0&&c[d]<1){var b=e.point(c[d])[a];b<i?i=b:b>s&&(s=b)}return{min:i,max:s}}PolynomialBezier.prototype.bounds=function(){return{x:extrema(this,0),y:extrema(this,1)}},PolynomialBezier.prototype.boundingBox=function(){var e=this.bounds();return{left:e.x.min,right:e.x.max,top:e.y.min,bottom:e.y.max,width:e.x.max-e.x.min,height:e.y.max-e.y.min,cx:(e.x.max+e.x.min)/2,cy:(e.y.max+e.y.min)/2}};function intersectData(e,a,i){var s=e.boundingBox();return{cx:s.cx,cy:s.cy,width:s.width,height:s.height,bez:e,t:(a+i)/2,t1:a,t2:i}}function splitData(e){var a=e.bez.split(.5);return[intersectData(a[0],e.t1,e.t),intersectData(a[1],e.t,e.t2)]}function boxIntersect(e,a){return Math.abs(e.cx-a.cx)*2<e.width+a.width&&Math.abs(e.cy-a.cy)*2<e.height+a.height}function intersectsImpl(e,a,i,s,o,c){if(boxIntersect(e,a)){if(i>=c||e.width<=s&&e.height<=s&&a.width<=s&&a.height<=s){o.push([e.t,a.t]);return}var d=splitData(e),b=splitData(a);intersectsImpl(d[0],b[0],i+1,s,o,c),intersectsImpl(d[0],b[1],i+1,s,o,c),intersectsImpl(d[1],b[0],i+1,s,o,c),intersectsImpl(d[1],b[1],i+1,s,o,c)}}PolynomialBezier.prototype.intersections=function(e,a,i){a===void 0&&(a=2),i===void 0&&(i=7);var s=[];return intersectsImpl(intersectData(this,0,1),intersectData(e,0,1),0,a,s,i),s},PolynomialBezier.shapeSegment=function(e,a){var i=(a+1)%e.length();return new PolynomialBezier(e.v[a],e.o[a],e.i[i],e.v[i],!0)},PolynomialBezier.shapeSegmentInverted=function(e,a){var i=(a+1)%e.length();return new PolynomialBezier(e.v[i],e.i[i],e.o[a],e.v[a],!0)};function crossProduct(e,a){return[e[1]*a[2]-e[2]*a[1],e[2]*a[0]-e[0]*a[2],e[0]*a[1]-e[1]*a[0]]}function lineIntersection(e,a,i,s){var o=[e[0],e[1],1],c=[a[0],a[1],1],d=[i[0],i[1],1],b=[s[0],s[1],1],g=crossProduct(crossProduct(o,c),crossProduct(d,b));return floatZero(g[2])?null:[g[0]/g[2],g[1]/g[2]]}function polarOffset(e,a,i){return[e[0]+Math.cos(a)*i,e[1]-Math.sin(a)*i]}function pointDistance(e,a){return Math.hypot(e[0]-a[0],e[1]-a[1])}function pointEqual(e,a){return floatEqual(e[0],a[0])&&floatEqual(e[1],a[1])}function ZigZagModifier(){}extendPrototype([ShapeModifier],ZigZagModifier),ZigZagModifier.prototype.initModifierProperties=function(e,a){this.getValue=this.processKeys,this.amplitude=PropertyFactory.getProp(e,a.s,0,null,this),this.frequency=PropertyFactory.getProp(e,a.r,0,null,this),this.pointsType=PropertyFactory.getProp(e,a.pt,0,null,this),this._isAnimated=this.amplitude.effectsSequence.length!==0||this.frequency.effectsSequence.length!==0||this.pointsType.effectsSequence.length!==0};function setPoint(e,a,i,s,o,c,d){var b=i-Math.PI/2,g=i+Math.PI/2,_=a[0]+Math.cos(i)*s*o,tt=a[1]-Math.sin(i)*s*o;e.setTripleAt(_,tt,_+Math.cos(b)*c,tt-Math.sin(b)*c,_+Math.cos(g)*d,tt-Math.sin(g)*d,e.length())}function getPerpendicularVector(e,a){var i=[a[0]-e[0],a[1]-e[1]],s=-Math.PI*.5,o=[Math.cos(s)*i[0]-Math.sin(s)*i[1],Math.sin(s)*i[0]+Math.cos(s)*i[1]];return o}function getProjectingAngle(e,a){var i=a===0?e.length()-1:a-1,s=(a+1)%e.length(),o=e.v[i],c=e.v[s],d=getPerpendicularVector(o,c);return Math.atan2(0,1)-Math.atan2(d[1],d[0])}function zigZagCorner(e,a,i,s,o,c,d){var b=getProjectingAngle(a,i),g=a.v[i%a._length],_=a.v[i===0?a._length-1:i-1],tt=a.v[(i+1)%a._length],it=c===2?Math.sqrt(Math.pow(g[0]-_[0],2)+Math.pow(g[1]-_[1],2)):0,et=c===2?Math.sqrt(Math.pow(g[0]-tt[0],2)+Math.pow(g[1]-tt[1],2)):0;setPoint(e,a.v[i%a._length],b,d,s,et/((o+1)*2),it/((o+1)*2))}function zigZagSegment(e,a,i,s,o,c){for(var d=0;d<s;d+=1){var b=(d+1)/(s+1),g=o===2?Math.sqrt(Math.pow(a.points[3][0]-a.points[0][0],2)+Math.pow(a.points[3][1]-a.points[0][1],2)):0,_=a.normalAngle(b),tt=a.point(b);setPoint(e,tt,_,c,i,g/((s+1)*2),g/((s+1)*2)),c=-c}return c}ZigZagModifier.prototype.processPath=function(e,a,i,s){var o=e._length,c=shapePool.newElement();if(c.c=e.c,e.c||(o-=1),o===0)return c;var d=-1,b=PolynomialBezier.shapeSegment(e,0);zigZagCorner(c,e,0,a,i,s,d);for(var g=0;g<o;g+=1)d=zigZagSegment(c,b,a,i,s,-d),g===o-1&&!e.c?b=null:b=PolynomialBezier.shapeSegment(e,(g+1)%o),zigZagCorner(c,e,g+1,a,i,s,d);return c},ZigZagModifier.prototype.processShapes=function(e){var a,i,s=this.shapes.length,o,c,d=this.amplitude.v,b=Math.max(0,Math.round(this.frequency.v)),g=this.pointsType.v;if(d!==0){var _,tt;for(i=0;i<s;i+=1){if(_=this.shapes[i],tt=_.localShapeCollection,!(!_.shape._mdf&&!this._mdf&&!e))for(tt.releaseShapes(),_.shape._mdf=!0,a=_.shape.paths.shapes,c=_.shape.paths._length,o=0;o<c;o+=1)tt.addShape(this.processPath(a[o],d,b,g));_.shape.paths=_.localShapeCollection}}this.dynamicProperties.length||(this._mdf=!1)};function linearOffset(e,a,i){var s=Math.atan2(a[0]-e[0],a[1]-e[1]);return[polarOffset(e,s,i),polarOffset(a,s,i)]}function offsetSegment(e,a){var i,s,o,c,d,b,g;g=linearOffset(e.points[0],e.points[1],a),i=g[0],s=g[1],g=linearOffset(e.points[1],e.points[2],a),o=g[0],c=g[1],g=linearOffset(e.points[2],e.points[3],a),d=g[0],b=g[1];var _=lineIntersection(i,s,o,c);_===null&&(_=s);var tt=lineIntersection(d,b,o,c);return tt===null&&(tt=d),new PolynomialBezier(i,_,tt,b)}function joinLines(e,a,i,s,o){var c=a.points[3],d=i.points[0];if(s===3||pointEqual(c,d))return c;if(s===2){var b=-a.tangentAngle(1),g=-i.tangentAngle(0)+Math.PI,_=lineIntersection(c,polarOffset(c,b+Math.PI/2,100),d,polarOffset(d,b+Math.PI/2,100)),tt=_?pointDistance(_,c):pointDistance(c,d)/2,it=polarOffset(c,b,2*tt*roundCorner);return e.setXYAt(it[0],it[1],"o",e.length()-1),it=polarOffset(d,g,2*tt*roundCorner),e.setTripleAt(d[0],d[1],d[0],d[1],it[0],it[1],e.length()),d}var et=pointEqual(c,a.points[2])?a.points[0]:a.points[2],st=pointEqual(d,i.points[1])?i.points[3]:i.points[1],nt=lineIntersection(et,c,d,st);return nt&&pointDistance(nt,c)<o?(e.setTripleAt(nt[0],nt[1],nt[0],nt[1],nt[0],nt[1],e.length()),nt):c}function getIntersection(e,a){var i=e.intersections(a);return i.length&&floatEqual(i[0][0],1)&&i.shift(),i.length?i[0]:null}function pruneSegmentIntersection(e,a){var i=e.slice(),s=a.slice(),o=getIntersection(e[e.length-1],a[0]);return o&&(i[e.length-1]=e[e.length-1].split(o[0])[0],s[0]=a[0].split(o[1])[1]),e.length>1&&a.length>1&&(o=getIntersection(e[0],a[a.length-1]),o)?[[e[0].split(o[0])[0]],[a[a.length-1].split(o[1])[1]]]:[i,s]}function pruneIntersections(e){for(var a,i=1;i<e.length;i+=1)a=pruneSegmentIntersection(e[i-1],e[i]),e[i-1]=a[0],e[i]=a[1];return e.length>1&&(a=pruneSegmentIntersection(e[e.length-1],e[0]),e[e.length-1]=a[0],e[0]=a[1]),e}function offsetSegmentSplit(e,a){var i=e.inflectionPoints(),s,o,c,d;if(i.length===0)return[offsetSegment(e,a)];if(i.length===1||floatEqual(i[1],1))return c=e.split(i[0]),s=c[0],o=c[1],[offsetSegment(s,a),offsetSegment(o,a)];c=e.split(i[0]),s=c[0];var b=(i[1]-i[0])/(1-i[0]);return c=c[1].split(b),d=c[0],o=c[1],[offsetSegment(s,a),offsetSegment(d,a),offsetSegment(o,a)]}function OffsetPathModifier(){}extendPrototype([ShapeModifier],OffsetPathModifier),OffsetPathModifier.prototype.initModifierProperties=function(e,a){this.getValue=this.processKeys,this.amount=PropertyFactory.getProp(e,a.a,0,null,this),this.miterLimit=PropertyFactory.getProp(e,a.ml,0,null,this),this.lineJoin=a.lj,this._isAnimated=this.amount.effectsSequence.length!==0},OffsetPathModifier.prototype.processPath=function(e,a,i,s){var o=shapePool.newElement();o.c=e.c;var c=e.length();e.c||(c-=1);var d,b,g,_=[];for(d=0;d<c;d+=1)g=PolynomialBezier.shapeSegment(e,d),_.push(offsetSegmentSplit(g,a));if(!e.c)for(d=c-1;d>=0;d-=1)g=PolynomialBezier.shapeSegmentInverted(e,d),_.push(offsetSegmentSplit(g,a));_=pruneIntersections(_);var tt=null,it=null;for(d=0;d<_.length;d+=1){var et=_[d];for(it&&(tt=joinLines(o,it,et[0],i,s)),it=et[et.length-1],b=0;b<et.length;b+=1)g=et[b],tt&&pointEqual(g.points[0],tt)?o.setXYAt(g.points[1][0],g.points[1][1],"o",o.length()-1):o.setTripleAt(g.points[0][0],g.points[0][1],g.points[1][0],g.points[1][1],g.points[0][0],g.points[0][1],o.length()),o.setTripleAt(g.points[3][0],g.points[3][1],g.points[3][0],g.points[3][1],g.points[2][0],g.points[2][1],o.length()),tt=g.points[3]}return _.length&&joinLines(o,it,_[0][0],i,s),o},OffsetPathModifier.prototype.processShapes=function(e){var a,i,s=this.shapes.length,o,c,d=this.amount.v,b=this.miterLimit.v,g=this.lineJoin;if(d!==0){var _,tt;for(i=0;i<s;i+=1){if(_=this.shapes[i],tt=_.localShapeCollection,!(!_.shape._mdf&&!this._mdf&&!e))for(tt.releaseShapes(),_.shape._mdf=!0,a=_.shape.paths.shapes,c=_.shape.paths._length,o=0;o<c;o+=1)tt.addShape(this.processPath(a[o],d,g,b));_.shape.paths=_.localShapeCollection}}this.dynamicProperties.length||(this._mdf=!1)};function getFontProperties(e){for(var a=e.fStyle?e.fStyle.split(" "):[],i="normal",s="normal",o=a.length,c,d=0;d<o;d+=1)switch(c=a[d].toLowerCase(),c){case"italic":s="italic";break;case"bold":i="700";break;case"black":i="900";break;case"medium":i="500";break;case"regular":case"normal":i="400";break;case"light":case"thin":i="200";break}return{style:s,weight:e.fWeight||i}}var FontManager=function(){var e=5e3,a={w:0,size:0,shapes:[],data:{shapes:[]}},i=[];i=i.concat([2304,2305,2306,2307,2362,2363,2364,2364,2366,2367,2368,2369,2370,2371,2372,2373,2374,2375,2376,2377,2378,2379,2380,2381,2382,2383,2387,2388,2389,2390,2391,2402,2403]);var s=127988,o=917631,c=917601,d=917626,b=65039,g=8205,_=127462,tt=127487,it=["d83cdffb","d83cdffc","d83cdffd","d83cdffe","d83cdfff"];function et(ct){var xt=ct.split(","),ot,ut=xt.length,yt=[];for(ot=0;ot<ut;ot+=1)xt[ot]!=="sans-serif"&&xt[ot]!=="monospace"&&yt.push(xt[ot]);return yt.join(",")}function st(ct,xt){var ot=createTag("span");ot.setAttribute("aria-hidden",!0),ot.style.fontFamily=xt;var ut=createTag("span");ut.innerText="giItT1WQy@!-/#",ot.style.position="absolute",ot.style.left="-10000px",ot.style.top="-10000px",ot.style.fontSize="300px",ot.style.fontVariant="normal",ot.style.fontStyle="normal",ot.style.fontWeight="normal",ot.style.letterSpacing="0",ot.appendChild(ut),document.body.appendChild(ot);var yt=ut.offsetWidth;return ut.style.fontFamily=et(ct)+", "+xt,{node:ut,w:yt,parent:ot}}function nt(){var ct,xt=this.fonts.length,ot,ut,yt=xt;for(ct=0;ct<xt;ct+=1)this.fonts[ct].loaded?yt-=1:this.fonts[ct].fOrigin==="n"||this.fonts[ct].origin===0?this.fonts[ct].loaded=!0:(ot=this.fonts[ct].monoCase.node,ut=this.fonts[ct].monoCase.w,ot.offsetWidth!==ut?(yt-=1,this.fonts[ct].loaded=!0):(ot=this.fonts[ct].sansCase.node,ut=this.fonts[ct].sansCase.w,ot.offsetWidth!==ut&&(yt-=1,this.fonts[ct].loaded=!0)),this.fonts[ct].loaded&&(this.fonts[ct].sansCase.parent.parentNode.removeChild(this.fonts[ct].sansCase.parent),this.fonts[ct].monoCase.parent.parentNode.removeChild(this.fonts[ct].monoCase.parent)));yt!==0&&Date.now()-this.initTime<e?setTimeout(this.checkLoadedFontsBinded,20):setTimeout(this.setIsLoadedBinded,10)}function rt(ct,xt){var ot=document.body&&xt?"svg":"canvas",ut,yt=getFontProperties(ct);if(ot==="svg"){var dt=createNS("text");dt.style.fontSize="100px",dt.setAttribute("font-family",ct.fFamily),dt.setAttribute("font-style",yt.style),dt.setAttribute("font-weight",yt.weight),dt.textContent="1",ct.fClass?(dt.style.fontFamily="inherit",dt.setAttribute("class",ct.fClass)):dt.style.fontFamily=ct.fFamily,xt.appendChild(dt),ut=dt}else{var kt=new OffscreenCanvas(500,500).getContext("2d");kt.font=yt.style+" "+yt.weight+" 100px "+ct.fFamily,ut=kt}function At(Pt){return ot==="svg"?(ut.textContent=Pt,ut.getComputedTextLength()):ut.measureText(Pt).width}return{measureText:At}}function ht(ct,xt){if(!ct){this.isLoaded=!0;return}if(this.chars){this.isLoaded=!0,this.fonts=ct.list;return}if(!document.body){this.isLoaded=!0,ct.list.forEach(function(Bt){Bt.helper=rt(Bt),Bt.cache={}}),this.fonts=ct.list;return}var ot=ct.list,ut,yt=ot.length,dt=yt;for(ut=0;ut<yt;ut+=1){var kt=!0,At,Pt;if(ot[ut].loaded=!1,ot[ut].monoCase=st(ot[ut].fFamily,"monospace"),ot[ut].sansCase=st(ot[ut].fFamily,"sans-serif"),!ot[ut].fPath)ot[ut].loaded=!0,dt-=1;else if(ot[ut].fOrigin==="p"||ot[ut].origin===3){if(At=document.querySelectorAll('style[f-forigin="p"][f-family="'+ot[ut].fFamily+'"], style[f-origin="3"][f-family="'+ot[ut].fFamily+'"]'),At.length>0&&(kt=!1),kt){var Dt=createTag("style");Dt.setAttribute("f-forigin",ot[ut].fOrigin),Dt.setAttribute("f-origin",ot[ut].origin),Dt.setAttribute("f-family",ot[ut].fFamily),Dt.type="text/css",Dt.innerText="@font-face {font-family: "+ot[ut].fFamily+"; font-style: normal; src: url('"+ot[ut].fPath+"');}",xt.appendChild(Dt)}}else if(ot[ut].fOrigin==="g"||ot[ut].origin===1){for(At=document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'),Pt=0;Pt<At.length;Pt+=1)At[Pt].href.indexOf(ot[ut].fPath)!==-1&&(kt=!1);if(kt){var wt=createTag("link");wt.setAttribute("f-forigin",ot[ut].fOrigin),wt.setAttribute("f-origin",ot[ut].origin),wt.type="text/css",wt.rel="stylesheet",wt.href=ot[ut].fPath,document.body.appendChild(wt)}}else if(ot[ut].fOrigin==="t"||ot[ut].origin===2){for(At=document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'),Pt=0;Pt<At.length;Pt+=1)ot[ut].fPath===At[Pt].src&&(kt=!1);if(kt){var Ft=createTag("link");Ft.setAttribute("f-forigin",ot[ut].fOrigin),Ft.setAttribute("f-origin",ot[ut].origin),Ft.setAttribute("rel","stylesheet"),Ft.setAttribute("href",ot[ut].fPath),xt.appendChild(Ft)}}ot[ut].helper=rt(ot[ut],xt),ot[ut].cache={},this.fonts.push(ot[ut])}dt===0?this.isLoaded=!0:setTimeout(this.checkLoadedFonts.bind(this),100)}function $(ct){if(ct){this.chars||(this.chars=[]);var xt,ot=ct.length,ut,yt=this.chars.length,dt;for(xt=0;xt<ot;xt+=1){for(ut=0,dt=!1;ut<yt;)this.chars[ut].style===ct[xt].style&&this.chars[ut].fFamily===ct[xt].fFamily&&this.chars[ut].ch===ct[xt].ch&&(dt=!0),ut+=1;dt||(this.chars.push(ct[xt]),yt+=1)}}}function _e(ct,xt,ot){for(var ut=0,yt=this.chars.length;ut<yt;){if(this.chars[ut].ch===ct&&this.chars[ut].style===xt&&this.chars[ut].fFamily===ot)return this.chars[ut];ut+=1}return(typeof ct=="string"&&ct.charCodeAt(0)!==13||!ct)&&console&&console.warn&&!this._warned&&(this._warned=!0,console.warn("Missing character from exported characters list: ",ct,xt,ot)),a}function j(ct,xt,ot){var ut=this.getFontByName(xt),yt=ct;if(!ut.cache[yt]){var dt=ut.helper;if(ct===" "){var kt=dt.measureText("|"+ct+"|"),At=dt.measureText("||");ut.cache[yt]=(kt-At)/100}else ut.cache[yt]=dt.measureText(ct)/100}return ut.cache[yt]*ot}function at(ct){for(var xt=0,ot=this.fonts.length;xt<ot;){if(this.fonts[xt].fName===ct)return this.fonts[xt];xt+=1}return this.fonts[0]}function lt(ct){var xt=0,ot=ct.charCodeAt(0);if(ot>=55296&&ot<=56319){var ut=ct.charCodeAt(1);ut>=56320&&ut<=57343&&(xt=(ot-55296)*1024+ut-56320+65536)}return xt}function pt(ct,xt){var ot=ct.toString(16)+xt.toString(16);return it.indexOf(ot)!==-1}function ft(ct){return ct===g}function mt(ct){return ct===b}function vt(ct){var xt=lt(ct);return xt>=_&&xt<=tt}function _t(ct){return vt(ct.substr(0,2))&&vt(ct.substr(2,2))}function Et(ct){return i.indexOf(ct)!==-1}function gt(ct,xt){var ot=lt(ct.substr(xt,2));if(ot!==s)return!1;var ut=0;for(xt+=2;ut<5;){if(ot=lt(ct.substr(xt,2)),ot<c||ot>d)return!1;ut+=1,xt+=2}return lt(ct.substr(xt,2))===o}function St(){this.isLoaded=!0}var Ct=function(){this.fonts=[],this.chars=null,this.typekitLoaded=0,this.isLoaded=!1,this._warned=!1,this.initTime=Date.now(),this.setIsLoadedBinded=this.setIsLoaded.bind(this),this.checkLoadedFontsBinded=this.checkLoadedFonts.bind(this)};Ct.isModifier=pt,Ct.isZeroWidthJoiner=ft,Ct.isFlagEmoji=_t,Ct.isRegionalCode=vt,Ct.isCombinedCharacter=Et,Ct.isRegionalFlag=gt,Ct.isVariationSelector=mt,Ct.BLACK_FLAG_CODE_POINT=s;var bt={addChars:$,addFonts:ht,getCharData:_e,getFontByName:at,measureText:j,checkLoadedFonts:nt,setIsLoaded:St};return Ct.prototype=bt,Ct}();function SlotManager(e){this.animationData=e}SlotManager.prototype.getProp=function(e){return this.animationData.slots&&this.animationData.slots[e.sid]?Object.assign(e,this.animationData.slots[e.sid].p):e};function slotFactory(e){return new SlotManager(e)}function RenderableElement(){}RenderableElement.prototype={initRenderable:function(){this.isInRange=!1,this.hidden=!1,this.isTransparent=!1,this.renderableComponents=[]},addRenderableComponent:function(a){this.renderableComponents.indexOf(a)===-1&&this.renderableComponents.push(a)},removeRenderableComponent:function(a){this.renderableComponents.indexOf(a)!==-1&&this.renderableComponents.splice(this.renderableComponents.indexOf(a),1)},prepareRenderableFrame:function(a){this.checkLayerLimits(a)},checkTransparency:function(){this.finalTransform.mProp.o.v<=0?!this.isTransparent&&this.globalData.renderConfig.hideOnTransparent&&(this.isTransparent=!0,this.hide()):this.isTransparent&&(this.isTransparent=!1,this.show())},checkLayerLimits:function(a){this.data.ip-this.data.st<=a&&this.data.op-this.data.st>a?this.isInRange!==!0&&(this.globalData._mdf=!0,this._mdf=!0,this.isInRange=!0,this.show()):this.isInRange!==!1&&(this.globalData._mdf=!0,this.isInRange=!1,this.hide())},renderRenderable:function(){var a,i=this.renderableComponents.length;for(a=0;a<i;a+=1)this.renderableComponents[a].renderFrame(this._isFirstFrame)},sourceRectAtTime:function(){return{top:0,left:0,width:100,height:100}},getLayerSize:function(){return this.data.ty===5?{w:this.data.textData.width,h:this.data.textData.height}:{w:this.data.width,h:this.data.height}}};var getBlendMode=function(){var e={0:"source-over",1:"multiply",2:"screen",3:"overlay",4:"darken",5:"lighten",6:"color-dodge",7:"color-burn",8:"hard-light",9:"soft-light",10:"difference",11:"exclusion",12:"hue",13:"saturation",14:"color",15:"luminosity"};return function(a){return e[a]||""}}();function SliderEffect(e,a,i){this.p=PropertyFactory.getProp(a,e.v,0,0,i)}function AngleEffect(e,a,i){this.p=PropertyFactory.getProp(a,e.v,0,0,i)}function ColorEffect(e,a,i){this.p=PropertyFactory.getProp(a,e.v,1,0,i)}function PointEffect(e,a,i){this.p=PropertyFactory.getProp(a,e.v,1,0,i)}function LayerIndexEffect(e,a,i){this.p=PropertyFactory.getProp(a,e.v,0,0,i)}function MaskIndexEffect(e,a,i){this.p=PropertyFactory.getProp(a,e.v,0,0,i)}function CheckboxEffect(e,a,i){this.p=PropertyFactory.getProp(a,e.v,0,0,i)}function NoValueEffect(){this.p={}}function EffectsManager(e,a){var i=e.ef||[];this.effectElements=[];var s,o=i.length,c;for(s=0;s<o;s+=1)c=new GroupEffect(i[s],a),this.effectElements.push(c)}function GroupEffect(e,a){this.init(e,a)}extendPrototype([DynamicPropertyContainer],GroupEffect),GroupEffect.prototype.getValue=GroupEffect.prototype.iterateDynamicProperties,GroupEffect.prototype.init=function(e,a){this.data=e,this.effectElements=[],this.initDynamicPropertyContainer(a);var i,s=this.data.ef.length,o,c=this.data.ef;for(i=0;i<s;i+=1){switch(o=null,c[i].ty){case 0:o=new SliderEffect(c[i],a,this);break;case 1:o=new AngleEffect(c[i],a,this);break;case 2:o=new ColorEffect(c[i],a,this);break;case 3:o=new PointEffect(c[i],a,this);break;case 4:case 7:o=new CheckboxEffect(c[i],a,this);break;case 10:o=new LayerIndexEffect(c[i],a,this);break;case 11:o=new MaskIndexEffect(c[i],a,this);break;case 5:o=new EffectsManager(c[i],a);break;default:o=new NoValueEffect(c[i]);break}o&&this.effectElements.push(o)}};function BaseElement(){}BaseElement.prototype={checkMasks:function(){if(!this.data.hasMask)return!1;for(var a=0,i=this.data.masksProperties.length;a<i;){if(this.data.masksProperties[a].mode!=="n"&&this.data.masksProperties[a].cl!==!1)return!0;a+=1}return!1},initExpressions:function(){var a=getExpressionInterfaces();if(a){var i=a("layer"),s=a("effects"),o=a("shape"),c=a("text"),d=a("comp");this.layerInterface=i(this),this.data.hasMask&&this.maskManager&&this.layerInterface.registerMaskInterface(this.maskManager);var b=s.createEffectsInterface(this,this.layerInterface);this.layerInterface.registerEffectsInterface(b),this.data.ty===0||this.data.xt?this.compInterface=d(this):this.data.ty===4?(this.layerInterface.shapeInterface=o(this.shapesData,this.itemsData,this.layerInterface),this.layerInterface.content=this.layerInterface.shapeInterface):this.data.ty===5&&(this.layerInterface.textInterface=c(this),this.layerInterface.text=this.layerInterface.textInterface)}},setBlendMode:function(){var a=getBlendMode(this.data.bm),i=this.baseElement||this.layerElement;i.style["mix-blend-mode"]=a},initBaseData:function(a,i,s){this.globalData=i,this.comp=s,this.data=a,this.layerId=createElementID(),this.data.sr||(this.data.sr=1),this.effectsManager=new EffectsManager(this.data,this,this.dynamicProperties)},getType:function(){return this.type},sourceRectAtTime:function(){}};function FrameElement(){}FrameElement.prototype={initFrame:function(){this._isFirstFrame=!1,this.dynamicProperties=[],this._mdf=!1},prepareProperties:function(a,i){var s,o=this.dynamicProperties.length;for(s=0;s<o;s+=1)(i||this._isParent&&this.dynamicProperties[s].propType==="transform")&&(this.dynamicProperties[s].getValue(),this.dynamicProperties[s]._mdf&&(this.globalData._mdf=!0,this._mdf=!0))},addDynamicProperty:function(a){this.dynamicProperties.indexOf(a)===-1&&this.dynamicProperties.push(a)}};function FootageElement(e,a,i){this.initFrame(),this.initRenderable(),this.assetData=a.getAssetData(e.refId),this.footageData=a.imageLoader.getAsset(this.assetData),this.initBaseData(e,a,i)}FootageElement.prototype.prepareFrame=function(){},extendPrototype([RenderableElement,BaseElement,FrameElement],FootageElement),FootageElement.prototype.getBaseElement=function(){return null},FootageElement.prototype.renderFrame=function(){},FootageElement.prototype.destroy=function(){},FootageElement.prototype.initExpressions=function(){var e=getExpressionInterfaces();if(e){var a=e("footage");this.layerInterface=a(this)}},FootageElement.prototype.getFootageData=function(){return this.footageData};function AudioElement(e,a,i){this.initFrame(),this.initRenderable(),this.assetData=a.getAssetData(e.refId),this.initBaseData(e,a,i),this._isPlaying=!1,this._canPlay=!1;var s=this.globalData.getAssetsPath(this.assetData);this.audio=this.globalData.audioController.createAudio(s),this._currentTime=0,this.globalData.audioController.addAudio(this),this._volumeMultiplier=1,this._volume=1,this._previousVolume=null,this.tm=e.tm?PropertyFactory.getProp(this,e.tm,0,a.frameRate,this):{_placeholder:!0},this.lv=PropertyFactory.getProp(this,e.au&&e.au.lv?e.au.lv:{k:[100]},1,.01,this)}AudioElement.prototype.prepareFrame=function(e){if(this.prepareRenderableFrame(e,!0),this.prepareProperties(e,!0),this.tm._placeholder)this._currentTime=e/this.data.sr;else{var a=this.tm.v;this._currentTime=a}this._volume=this.lv.v[0];var i=this._volume*this._volumeMultiplier;this._previousVolume!==i&&(this._previousVolume=i,this.audio.volume(i))},extendPrototype([RenderableElement,BaseElement,FrameElement],AudioElement),AudioElement.prototype.renderFrame=function(){this.isInRange&&this._canPlay&&(this._isPlaying?(!this.audio.playing()||Math.abs(this._currentTime/this.globalData.frameRate-this.audio.seek())>.1)&&this.audio.seek(this._currentTime/this.globalData.frameRate):(this.audio.play(),this.audio.seek(this._currentTime/this.globalData.frameRate),this._isPlaying=!0))},AudioElement.prototype.show=function(){},AudioElement.prototype.hide=function(){this.audio.pause(),this._isPlaying=!1},AudioElement.prototype.pause=function(){this.audio.pause(),this._isPlaying=!1,this._canPlay=!1},AudioElement.prototype.resume=function(){this._canPlay=!0},AudioElement.prototype.setRate=function(e){this.audio.rate(e)},AudioElement.prototype.volume=function(e){this._volumeMultiplier=e,this._previousVolume=e*this._volume,this.audio.volume(this._previousVolume)},AudioElement.prototype.getBaseElement=function(){return null},AudioElement.prototype.destroy=function(){},AudioElement.prototype.sourceRectAtTime=function(){},AudioElement.prototype.initExpressions=function(){};function BaseRenderer(){}BaseRenderer.prototype.checkLayers=function(e){var a,i=this.layers.length,s;for(this.completeLayers=!0,a=i-1;a>=0;a-=1)this.elements[a]||(s=this.layers[a],s.ip-s.st<=e-this.layers[a].st&&s.op-s.st>e-this.layers[a].st&&this.buildItem(a)),this.completeLayers=this.elements[a]?this.completeLayers:!1;this.checkPendingElements()},BaseRenderer.prototype.createItem=function(e){switch(e.ty){case 2:return this.createImage(e);case 0:return this.createComp(e);case 1:return this.createSolid(e);case 3:return this.createNull(e);case 4:return this.createShape(e);case 5:return this.createText(e);case 6:return this.createAudio(e);case 13:return this.createCamera(e);case 15:return this.createFootage(e);default:return this.createNull(e)}},BaseRenderer.prototype.createCamera=function(){throw new Error("You're using a 3d camera. Try the html renderer.")},BaseRenderer.prototype.createAudio=function(e){return new AudioElement(e,this.globalData,this)},BaseRenderer.prototype.createFootage=function(e){return new FootageElement(e,this.globalData,this)},BaseRenderer.prototype.buildAllItems=function(){var e,a=this.layers.length;for(e=0;e<a;e+=1)this.buildItem(e);this.checkPendingElements()},BaseRenderer.prototype.includeLayers=function(e){this.completeLayers=!1;var a,i=e.length,s,o=this.layers.length;for(a=0;a<i;a+=1)for(s=0;s<o;){if(this.layers[s].id===e[a].id){this.layers[s]=e[a];break}s+=1}},BaseRenderer.prototype.setProjectInterface=function(e){this.globalData.projectInterface=e},BaseRenderer.prototype.initItems=function(){this.globalData.progressiveLoad||this.buildAllItems()},BaseRenderer.prototype.buildElementParenting=function(e,a,i){for(var s=this.elements,o=this.layers,c=0,d=o.length;c<d;)o[c].ind==a&&(!s[c]||s[c]===!0?(this.buildItem(c),this.addPendingElement(e)):(i.push(s[c]),s[c].setAsParent(),o[c].parent!==void 0?this.buildElementParenting(e,o[c].parent,i):e.setHierarchy(i))),c+=1},BaseRenderer.prototype.addPendingElement=function(e){this.pendingElements.push(e)},BaseRenderer.prototype.searchExtraCompositions=function(e){var a,i=e.length;for(a=0;a<i;a+=1)if(e[a].xt){var s=this.createComp(e[a]);s.initExpressions(),this.globalData.projectInterface.registerComposition(s)}},BaseRenderer.prototype.getElementById=function(e){var a,i=this.elements.length;for(a=0;a<i;a+=1)if(this.elements[a].data.ind===e)return this.elements[a];return null},BaseRenderer.prototype.getElementByPath=function(e){var a=e.shift(),i;if(typeof a=="number")i=this.elements[a];else{var s,o=this.elements.length;for(s=0;s<o;s+=1)if(this.elements[s].data.nm===a){i=this.elements[s];break}}return e.length===0?i:i.getElementByPath(e)},BaseRenderer.prototype.setupGlobalData=function(e,a){this.globalData.fontManager=new FontManager,this.globalData.slotManager=slotFactory(e),this.globalData.fontManager.addChars(e.chars),this.globalData.fontManager.addFonts(e.fonts,a),this.globalData.getAssetData=this.animationItem.getAssetData.bind(this.animationItem),this.globalData.getAssetsPath=this.animationItem.getAssetsPath.bind(this.animationItem),this.globalData.imageLoader=this.animationItem.imagePreloader,this.globalData.audioController=this.animationItem.audioController,this.globalData.frameId=0,this.globalData.frameRate=e.fr,this.globalData.nm=e.nm,this.globalData.compSize={w:e.w,h:e.h}};var effectTypes={TRANSFORM_EFFECT:"transformEFfect"};function TransformElement(){}TransformElement.prototype={initTransform:function(){var a=new Matrix;this.finalTransform={mProp:this.data.ks?TransformPropertyFactory.getTransformProperty(this,this.data.ks,this):{o:0},_matMdf:!1,_localMatMdf:!1,_opMdf:!1,mat:a,localMat:a,localOpacity:1},this.data.ao&&(this.finalTransform.mProp.autoOriented=!0),this.data.ty},renderTransform:function(){if(this.finalTransform._opMdf=this.finalTransform.mProp.o._mdf||this._isFirstFrame,this.finalTransform._matMdf=this.finalTransform.mProp._mdf||this._isFirstFrame,this.hierarchy){var a,i=this.finalTransform.mat,s=0,o=this.hierarchy.length;if(!this.finalTransform._matMdf)for(;s<o;){if(this.hierarchy[s].finalTransform.mProp._mdf){this.finalTransform._matMdf=!0;break}s+=1}if(this.finalTransform._matMdf)for(a=this.finalTransform.mProp.v.props,i.cloneFromProps(a),s=0;s<o;s+=1)i.multiply(this.hierarchy[s].finalTransform.mProp.v)}(!this.localTransforms||this.finalTransform._matMdf)&&(this.finalTransform._localMatMdf=this.finalTransform._matMdf),this.finalTransform._opMdf&&(this.finalTransform.localOpacity=this.finalTransform.mProp.o.v)},renderLocalTransform:function(){if(this.localTransforms){var a=0,i=this.localTransforms.length;if(this.finalTransform._localMatMdf=this.finalTransform._matMdf,!this.finalTransform._localMatMdf||!this.finalTransform._opMdf)for(;a<i;)this.localTransforms[a]._mdf&&(this.finalTransform._localMatMdf=!0),this.localTransforms[a]._opMdf&&!this.finalTransform._opMdf&&(this.finalTransform.localOpacity=this.finalTransform.mProp.o.v,this.finalTransform._opMdf=!0),a+=1;if(this.finalTransform._localMatMdf){var s=this.finalTransform.localMat;for(this.localTransforms[0].matrix.clone(s),a=1;a<i;a+=1){var o=this.localTransforms[a].matrix;s.multiply(o)}s.multiply(this.finalTransform.mat)}if(this.finalTransform._opMdf){var c=this.finalTransform.localOpacity;for(a=0;a<i;a+=1)c*=this.localTransforms[a].opacity*.01;this.finalTransform.localOpacity=c}}},searchEffectTransforms:function(){if(this.renderableEffectsManager){var a=this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT);if(a.length){this.localTransforms=[],this.finalTransform.localMat=new Matrix;var i=0,s=a.length;for(i=0;i<s;i+=1)this.localTransforms.push(a[i])}}},globalToLocal:function(a){var i=[];i.push(this.finalTransform);for(var s=!0,o=this.comp;s;)o.finalTransform?(o.data.hasMask&&i.splice(0,0,o.finalTransform),o=o.comp):s=!1;var c,d=i.length,b;for(c=0;c<d;c+=1)b=i[c].mat.applyToPointArray(0,0,0),a=[a[0]-b[0],a[1]-b[1],0];return a},mHelper:new Matrix};function MaskElement(e,a,i){this.data=e,this.element=a,this.globalData=i,this.storedData=[],this.masksProperties=this.data.masksProperties||[],this.maskElement=null;var s=this.globalData.defs,o,c=this.masksProperties?this.masksProperties.length:0;this.viewData=createSizedArray(c),this.solidPath="";var d,b=this.masksProperties,g=0,_=[],tt,it,et=createElementID(),st,nt,rt,ht,$="clipPath",_e="clip-path";for(o=0;o<c;o+=1)if((b[o].mode!=="a"&&b[o].mode!=="n"||b[o].inv||b[o].o.k!==100||b[o].o.x)&&($="mask",_e="mask"),(b[o].mode==="s"||b[o].mode==="i")&&g===0?(st=createNS("rect"),st.setAttribute("fill","#ffffff"),st.setAttribute("width",this.element.comp.data.w||0),st.setAttribute("height",this.element.comp.data.h||0),_.push(st)):st=null,d=createNS("path"),b[o].mode==="n")this.viewData[o]={op:PropertyFactory.getProp(this.element,b[o].o,0,.01,this.element),prop:ShapePropertyFactory.getShapeProp(this.element,b[o],3),elem:d,lastPath:""},s.appendChild(d);else{g+=1,d.setAttribute("fill",b[o].mode==="s"?"#000000":"#ffffff"),d.setAttribute("clip-rule","nonzero");var j;if(b[o].x.k!==0?($="mask",_e="mask",ht=PropertyFactory.getProp(this.element,b[o].x,0,null,this.element),j=createElementID(),nt=createNS("filter"),nt.setAttribute("id",j),rt=createNS("feMorphology"),rt.setAttribute("operator","erode"),rt.setAttribute("in","SourceGraphic"),rt.setAttribute("radius","0"),nt.appendChild(rt),s.appendChild(nt),d.setAttribute("stroke",b[o].mode==="s"?"#000000":"#ffffff")):(rt=null,ht=null),this.storedData[o]={elem:d,x:ht,expan:rt,lastPath:"",lastOperator:"",filterId:j,lastRadius:0},b[o].mode==="i"){it=_.length;var at=createNS("g");for(tt=0;tt<it;tt+=1)at.appendChild(_[tt]);var lt=createNS("mask");lt.setAttribute("mask-type","alpha"),lt.setAttribute("id",et+"_"+g),lt.appendChild(d),s.appendChild(lt),at.setAttribute("mask","url("+getLocationHref()+"#"+et+"_"+g+")"),_.length=0,_.push(at)}else _.push(d);b[o].inv&&!this.solidPath&&(this.solidPath=this.createLayerSolidPath()),this.viewData[o]={elem:d,lastPath:"",op:PropertyFactory.getProp(this.element,b[o].o,0,.01,this.element),prop:ShapePropertyFactory.getShapeProp(this.element,b[o],3),invRect:st},this.viewData[o].prop.k||this.drawPath(b[o],this.viewData[o].prop.v,this.viewData[o])}for(this.maskElement=createNS($),c=_.length,o=0;o<c;o+=1)this.maskElement.appendChild(_[o]);g>0&&(this.maskElement.setAttribute("id",et),this.element.maskedElement.setAttribute(_e,"url("+getLocationHref()+"#"+et+")"),s.appendChild(this.maskElement)),this.viewData.length&&this.element.addRenderableComponent(this)}MaskElement.prototype.getMaskProperty=function(e){return this.viewData[e].prop},MaskElement.prototype.renderFrame=function(e){var a=this.element.finalTransform.mat,i,s=this.masksProperties.length;for(i=0;i<s;i+=1)if((this.viewData[i].prop._mdf||e)&&this.drawPath(this.masksProperties[i],this.viewData[i].prop.v,this.viewData[i]),(this.viewData[i].op._mdf||e)&&this.viewData[i].elem.setAttribute("fill-opacity",this.viewData[i].op.v),this.masksProperties[i].mode!=="n"&&(this.viewData[i].invRect&&(this.element.finalTransform.mProp._mdf||e)&&this.viewData[i].invRect.setAttribute("transform",a.getInverseMatrix().to2dCSS()),this.storedData[i].x&&(this.storedData[i].x._mdf||e))){var o=this.storedData[i].expan;this.storedData[i].x.v<0?(this.storedData[i].lastOperator!=="erode"&&(this.storedData[i].lastOperator="erode",this.storedData[i].elem.setAttribute("filter","url("+getLocationHref()+"#"+this.storedData[i].filterId+")")),o.setAttribute("radius",-this.storedData[i].x.v)):(this.storedData[i].lastOperator!=="dilate"&&(this.storedData[i].lastOperator="dilate",this.storedData[i].elem.setAttribute("filter",null)),this.storedData[i].elem.setAttribute("stroke-width",this.storedData[i].x.v*2))}},MaskElement.prototype.getMaskelement=function(){return this.maskElement},MaskElement.prototype.createLayerSolidPath=function(){var e="M0,0 ";return e+=" h"+this.globalData.compSize.w,e+=" v"+this.globalData.compSize.h,e+=" h-"+this.globalData.compSize.w,e+=" v-"+this.globalData.compSize.h+" ",e},MaskElement.prototype.drawPath=function(e,a,i){var s=" M"+a.v[0][0]+","+a.v[0][1],o,c;for(c=a._length,o=1;o<c;o+=1)s+=" C"+a.o[o-1][0]+","+a.o[o-1][1]+" "+a.i[o][0]+","+a.i[o][1]+" "+a.v[o][0]+","+a.v[o][1];if(a.c&&c>1&&(s+=" C"+a.o[o-1][0]+","+a.o[o-1][1]+" "+a.i[0][0]+","+a.i[0][1]+" "+a.v[0][0]+","+a.v[0][1]),i.lastPath!==s){var d="";i.elem&&(a.c&&(d=e.inv?this.solidPath+s:s),i.elem.setAttribute("d",d)),i.lastPath=s}},MaskElement.prototype.destroy=function(){this.element=null,this.globalData=null,this.maskElement=null,this.data=null,this.masksProperties=null};var filtersFactory=function(){var e={};e.createFilter=a,e.createAlphaToLuminanceFilter=i;function a(s,o){var c=createNS("filter");return c.setAttribute("id",s),o!==!0&&(c.setAttribute("filterUnits","objectBoundingBox"),c.setAttribute("x","0%"),c.setAttribute("y","0%"),c.setAttribute("width","100%"),c.setAttribute("height","100%")),c}function i(){var s=createNS("feColorMatrix");return s.setAttribute("type","matrix"),s.setAttribute("color-interpolation-filters","sRGB"),s.setAttribute("values","0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"),s}return e}(),featureSupport=function(){var e={maskType:!0,svgLumaHidden:!0,offscreenCanvas:typeof OffscreenCanvas<"u"};return(/MSIE 10/i.test(navigator.userAgent)||/MSIE 9/i.test(navigator.userAgent)||/rv:11.0/i.test(navigator.userAgent)||/Edge\/\d./i.test(navigator.userAgent))&&(e.maskType=!1),/firefox/i.test(navigator.userAgent)&&(e.svgLumaHidden=!1),e}(),registeredEffects$1={},idPrefix="filter_result_";function SVGEffects(e){var a,i="SourceGraphic",s=e.data.ef?e.data.ef.length:0,o=createElementID(),c=filtersFactory.createFilter(o,!0),d=0;this.filters=[];var b;for(a=0;a<s;a+=1){b=null;var g=e.data.ef[a].ty;if(registeredEffects$1[g]){var _=registeredEffects$1[g].effect;b=new _(c,e.effectsManager.effectElements[a],e,idPrefix+d,i),i=idPrefix+d,registeredEffects$1[g].countsAsEffect&&(d+=1)}b&&this.filters.push(b)}d&&(e.globalData.defs.appendChild(c),e.layerElement.setAttribute("filter","url("+getLocationHref()+"#"+o+")")),this.filters.length&&e.addRenderableComponent(this)}SVGEffects.prototype.renderFrame=function(e){var a,i=this.filters.length;for(a=0;a<i;a+=1)this.filters[a].renderFrame(e)},SVGEffects.prototype.getEffects=function(e){var a,i=this.filters.length,s=[];for(a=0;a<i;a+=1)this.filters[a].type===e&&s.push(this.filters[a]);return s};function registerEffect$1(e,a,i){registeredEffects$1[e]={effect:a,countsAsEffect:i}}function SVGBaseElement(){}SVGBaseElement.prototype={initRendererElement:function(){this.layerElement=createNS("g")},createContainerElements:function(){this.matteElement=createNS("g"),this.transformedElement=this.layerElement,this.maskedElement=this.layerElement,this._sizeChanged=!1;var a=null;if(this.data.td){this.matteMasks={};var i=createNS("g");i.setAttribute("id",this.layerId),i.appendChild(this.layerElement),a=i,this.globalData.defs.appendChild(i)}else this.data.tt?(this.matteElement.appendChild(this.layerElement),a=this.matteElement,this.baseElement=this.matteElement):this.baseElement=this.layerElement;if(this.data.ln&&this.layerElement.setAttribute("id",this.data.ln),this.data.cl&&this.layerElement.setAttribute("class",this.data.cl),this.data.ty===0&&!this.data.hd){var s=createNS("clipPath"),o=createNS("path");o.setAttribute("d","M0,0 L"+this.data.w+",0 L"+this.data.w+","+this.data.h+" L0,"+this.data.h+"z");var c=createElementID();if(s.setAttribute("id",c),s.appendChild(o),this.globalData.defs.appendChild(s),this.checkMasks()){var d=createNS("g");d.setAttribute("clip-path","url("+getLocationHref()+"#"+c+")"),d.appendChild(this.layerElement),this.transformedElement=d,a?a.appendChild(this.transformedElement):this.baseElement=this.transformedElement}else this.layerElement.setAttribute("clip-path","url("+getLocationHref()+"#"+c+")")}this.data.bm!==0&&this.setBlendMode()},renderElement:function(){this.finalTransform._localMatMdf&&this.transformedElement.setAttribute("transform",this.finalTransform.localMat.to2dCSS()),this.finalTransform._opMdf&&this.transformedElement.setAttribute("opacity",this.finalTransform.localOpacity)},destroyBaseElement:function(){this.layerElement=null,this.matteElement=null,this.maskManager.destroy()},getBaseElement:function(){return this.data.hd?null:this.baseElement},createRenderableComponents:function(){this.maskManager=new MaskElement(this.data,this,this.globalData),this.renderableEffectsManager=new SVGEffects(this),this.searchEffectTransforms()},getMatte:function(a){if(this.matteMasks||(this.matteMasks={}),!this.matteMasks[a]){var i=this.layerId+"_"+a,s,o,c,d;if(a===1||a===3){var b=createNS("mask");b.setAttribute("id",i),b.setAttribute("mask-type",a===3?"luminance":"alpha"),c=createNS("use"),c.setAttributeNS("http://www.w3.org/1999/xlink","href","#"+this.layerId),b.appendChild(c),this.globalData.defs.appendChild(b),!featureSupport.maskType&&a===1&&(b.setAttribute("mask-type","luminance"),s=createElementID(),o=filtersFactory.createFilter(s),this.globalData.defs.appendChild(o),o.appendChild(filtersFactory.createAlphaToLuminanceFilter()),d=createNS("g"),d.appendChild(c),b.appendChild(d),d.setAttribute("filter","url("+getLocationHref()+"#"+s+")"))}else if(a===2){var g=createNS("mask");g.setAttribute("id",i),g.setAttribute("mask-type","alpha");var _=createNS("g");g.appendChild(_),s=createElementID(),o=filtersFactory.createFilter(s);var tt=createNS("feComponentTransfer");tt.setAttribute("in","SourceGraphic"),o.appendChild(tt);var it=createNS("feFuncA");it.setAttribute("type","table"),it.setAttribute("tableValues","1.0 0.0"),tt.appendChild(it),this.globalData.defs.appendChild(o);var et=createNS("rect");et.setAttribute("width",this.comp.data.w),et.setAttribute("height",this.comp.data.h),et.setAttribute("x","0"),et.setAttribute("y","0"),et.setAttribute("fill","#ffffff"),et.setAttribute("opacity","0"),_.setAttribute("filter","url("+getLocationHref()+"#"+s+")"),_.appendChild(et),c=createNS("use"),c.setAttributeNS("http://www.w3.org/1999/xlink","href","#"+this.layerId),_.appendChild(c),featureSupport.maskType||(g.setAttribute("mask-type","luminance"),o.appendChild(filtersFactory.createAlphaToLuminanceFilter()),d=createNS("g"),_.appendChild(et),d.appendChild(this.layerElement),_.appendChild(d)),this.globalData.defs.appendChild(g)}this.matteMasks[a]=i}return this.matteMasks[a]},setMatte:function(a){this.matteElement&&this.matteElement.setAttribute("mask","url("+getLocationHref()+"#"+a+")")}};function HierarchyElement(){}HierarchyElement.prototype={initHierarchy:function(){this.hierarchy=[],this._isParent=!1,this.checkParenting()},setHierarchy:function(a){this.hierarchy=a},setAsParent:function(){this._isParent=!0},checkParenting:function(){this.data.parent!==void 0&&this.comp.buildElementParenting(this,this.data.parent,[])}};function RenderableDOMElement(){}(function(){var e={initElement:function(i,s,o){this.initFrame(),this.initBaseData(i,s,o),this.initTransform(i,s,o),this.initHierarchy(),this.initRenderable(),this.initRendererElement(),this.createContainerElements(),this.createRenderableComponents(),this.createContent(),this.hide()},hide:function(){if(!this.hidden&&(!this.isInRange||this.isTransparent)){var i=this.baseElement||this.layerElement;i.style.display="none",this.hidden=!0}},show:function(){if(this.isInRange&&!this.isTransparent){if(!this.data.hd){var i=this.baseElement||this.layerElement;i.style.display="block"}this.hidden=!1,this._isFirstFrame=!0}},renderFrame:function(){this.data.hd||this.hidden||(this.renderTransform(),this.renderRenderable(),this.renderLocalTransform(),this.renderElement(),this.renderInnerContent(),this._isFirstFrame&&(this._isFirstFrame=!1))},renderInnerContent:function(){},prepareFrame:function(i){this._mdf=!1,this.prepareRenderableFrame(i),this.prepareProperties(i,this.isInRange),this.checkTransparency()},destroy:function(){this.innerElem=null,this.destroyBaseElement()}};extendPrototype([RenderableElement,createProxyFunction(e)],RenderableDOMElement)})();function IImageElement(e,a,i){this.assetData=a.getAssetData(e.refId),this.assetData&&this.assetData.sid&&(this.assetData=a.slotManager.getProp(this.assetData)),this.initElement(e,a,i),this.sourceRect={top:0,left:0,width:this.assetData.w,height:this.assetData.h}}extendPrototype([BaseElement,TransformElement,SVGBaseElement,HierarchyElement,FrameElement,RenderableDOMElement],IImageElement),IImageElement.prototype.createContent=function(){var e=this.globalData.getAssetsPath(this.assetData);this.innerElem=createNS("image"),this.innerElem.setAttribute("width",this.assetData.w+"px"),this.innerElem.setAttribute("height",this.assetData.h+"px"),this.innerElem.setAttribute("preserveAspectRatio",this.assetData.pr||this.globalData.renderConfig.imagePreserveAspectRatio),this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink","href",e),this.layerElement.appendChild(this.innerElem)},IImageElement.prototype.sourceRectAtTime=function(){return this.sourceRect};function ProcessedElement(e,a){this.elem=e,this.pos=a}function IShapeElement(){}IShapeElement.prototype={addShapeToModifiers:function(a){var i,s=this.shapeModifiers.length;for(i=0;i<s;i+=1)this.shapeModifiers[i].addShape(a)},isShapeInAnimatedModifiers:function(a){for(var i=0,s=this.shapeModifiers.length;i<s;)if(this.shapeModifiers[i].isAnimatedWithShape(a))return!0;return!1},renderModifiers:function(){if(this.shapeModifiers.length){var a,i=this.shapes.length;for(a=0;a<i;a+=1)this.shapes[a].sh.reset();i=this.shapeModifiers.length;var s;for(a=i-1;a>=0&&(s=this.shapeModifiers[a].processShapes(this._isFirstFrame),!s);a-=1);}},searchProcessedElement:function(a){for(var i=this.processedElements,s=0,o=i.length;s<o;){if(i[s].elem===a)return i[s].pos;s+=1}return 0},addProcessedElement:function(a,i){for(var s=this.processedElements,o=s.length;o;)if(o-=1,s[o].elem===a){s[o].pos=i;return}s.push(new ProcessedElement(a,i))},prepareFrame:function(a){this.prepareRenderableFrame(a),this.prepareProperties(a,this.isInRange)}};var lineCapEnum={1:"butt",2:"round",3:"square"},lineJoinEnum={1:"miter",2:"round",3:"bevel"};function SVGShapeData(e,a,i){this.caches=[],this.styles=[],this.transformers=e,this.lStr="",this.sh=i,this.lvl=a,this._isAnimated=!!i.k;for(var s=0,o=e.length;s<o;){if(e[s].mProps.dynamicProperties.length){this._isAnimated=!0;break}s+=1}}SVGShapeData.prototype.setAsAnimated=function(){this._isAnimated=!0};function SVGStyleData(e,a){this.data=e,this.type=e.ty,this.d="",this.lvl=a,this._mdf=!1,this.closed=e.hd===!0,this.pElem=createNS("path"),this.msElem=null}SVGStyleData.prototype.reset=function(){this.d="",this._mdf=!1};function DashProperty(e,a,i,s){this.elem=e,this.frameId=-1,this.dataProps=createSizedArray(a.length),this.renderer=i,this.k=!1,this.dashStr="",this.dashArray=createTypedArray("float32",a.length?a.length-1:0),this.dashoffset=createTypedArray("float32",1),this.initDynamicPropertyContainer(s);var o,c=a.length||0,d;for(o=0;o<c;o+=1)d=PropertyFactory.getProp(e,a[o].v,0,0,this),this.k=d.k||this.k,this.dataProps[o]={n:a[o].n,p:d};this.k||this.getValue(!0),this._isAnimated=this.k}DashProperty.prototype.getValue=function(e){if(!(this.elem.globalData.frameId===this.frameId&&!e)&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf=this._mdf||e,this._mdf)){var a=0,i=this.dataProps.length;for(this.renderer==="svg"&&(this.dashStr=""),a=0;a<i;a+=1)this.dataProps[a].n!=="o"?this.renderer==="svg"?this.dashStr+=" "+this.dataProps[a].p.v:this.dashArray[a]=this.dataProps[a].p.v:this.dashoffset[0]=this.dataProps[a].p.v}},extendPrototype([DynamicPropertyContainer],DashProperty);function SVGStrokeStyleData(e,a,i){this.initDynamicPropertyContainer(e),this.getValue=this.iterateDynamicProperties,this.o=PropertyFactory.getProp(e,a.o,0,.01,this),this.w=PropertyFactory.getProp(e,a.w,0,null,this),this.d=new DashProperty(e,a.d||{},"svg",this),this.c=PropertyFactory.getProp(e,a.c,1,255,this),this.style=i,this._isAnimated=!!this._isAnimated}extendPrototype([DynamicPropertyContainer],SVGStrokeStyleData);function SVGFillStyleData(e,a,i){this.initDynamicPropertyContainer(e),this.getValue=this.iterateDynamicProperties,this.o=PropertyFactory.getProp(e,a.o,0,.01,this),this.c=PropertyFactory.getProp(e,a.c,1,255,this),this.style=i}extendPrototype([DynamicPropertyContainer],SVGFillStyleData);function SVGNoStyleData(e,a,i){this.initDynamicPropertyContainer(e),this.getValue=this.iterateDynamicProperties,this.style=i}extendPrototype([DynamicPropertyContainer],SVGNoStyleData);function GradientProperty(e,a,i){this.data=a,this.c=createTypedArray("uint8c",a.p*4);var s=a.k.k[0].s?a.k.k[0].s.length-a.p*4:a.k.k.length-a.p*4;this.o=createTypedArray("float32",s),this._cmdf=!1,this._omdf=!1,this._collapsable=this.checkCollapsable(),this._hasOpacity=s,this.initDynamicPropertyContainer(i),this.prop=PropertyFactory.getProp(e,a.k,1,null,this),this.k=this.prop.k,this.getValue(!0)}GradientProperty.prototype.comparePoints=function(e,a){for(var i=0,s=this.o.length/2,o;i<s;){if(o=Math.abs(e[i*4]-e[a*4+i*2]),o>.01)return!1;i+=1}return!0},GradientProperty.prototype.checkCollapsable=function(){if(this.o.length/2!==this.c.length/4)return!1;if(this.data.k.k[0].s)for(var e=0,a=this.data.k.k.length;e<a;){if(!this.comparePoints(this.data.k.k[e].s,this.data.p))return!1;e+=1}else if(!this.comparePoints(this.data.k.k,this.data.p))return!1;return!0},GradientProperty.prototype.getValue=function(e){if(this.prop.getValue(),this._mdf=!1,this._cmdf=!1,this._omdf=!1,this.prop._mdf||e){var a,i=this.data.p*4,s,o;for(a=0;a<i;a+=1)s=a%4===0?100:255,o=Math.round(this.prop.v[a]*s),this.c[a]!==o&&(this.c[a]=o,this._cmdf=!e);if(this.o.length)for(i=this.prop.v.length,a=this.data.p*4;a<i;a+=1)s=a%2===0?100:1,o=a%2===0?Math.round(this.prop.v[a]*100):this.prop.v[a],this.o[a-this.data.p*4]!==o&&(this.o[a-this.data.p*4]=o,this._omdf=!e);this._mdf=!e}},extendPrototype([DynamicPropertyContainer],GradientProperty);function SVGGradientFillStyleData(e,a,i){this.initDynamicPropertyContainer(e),this.getValue=this.iterateDynamicProperties,this.initGradientData(e,a,i)}SVGGradientFillStyleData.prototype.initGradientData=function(e,a,i){this.o=PropertyFactory.getProp(e,a.o,0,.01,this),this.s=PropertyFactory.getProp(e,a.s,1,null,this),this.e=PropertyFactory.getProp(e,a.e,1,null,this),this.h=PropertyFactory.getProp(e,a.h||{k:0},0,.01,this),this.a=PropertyFactory.getProp(e,a.a||{k:0},0,degToRads,this),this.g=new GradientProperty(e,a.g,this),this.style=i,this.stops=[],this.setGradientData(i.pElem,a),this.setGradientOpacity(a,i),this._isAnimated=!!this._isAnimated},SVGGradientFillStyleData.prototype.setGradientData=function(e,a){var i=createElementID(),s=createNS(a.t===1?"linearGradient":"radialGradient");s.setAttribute("id",i),s.setAttribute("spreadMethod","pad"),s.setAttribute("gradientUnits","userSpaceOnUse");var o=[],c,d,b;for(b=a.g.p*4,d=0;d<b;d+=4)c=createNS("stop"),s.appendChild(c),o.push(c);e.setAttribute(a.ty==="gf"?"fill":"stroke","url("+getLocationHref()+"#"+i+")"),this.gf=s,this.cst=o},SVGGradientFillStyleData.prototype.setGradientOpacity=function(e,a){if(this.g._hasOpacity&&!this.g._collapsable){var i,s,o,c=createNS("mask"),d=createNS("path");c.appendChild(d);var b=createElementID(),g=createElementID();c.setAttribute("id",g);var _=createNS(e.t===1?"linearGradient":"radialGradient");_.setAttribute("id",b),_.setAttribute("spreadMethod","pad"),_.setAttribute("gradientUnits","userSpaceOnUse"),o=e.g.k.k[0].s?e.g.k.k[0].s.length:e.g.k.k.length;var tt=this.stops;for(s=e.g.p*4;s<o;s+=2)i=createNS("stop"),i.setAttribute("stop-color","rgb(255,255,255)"),_.appendChild(i),tt.push(i);d.setAttribute(e.ty==="gf"?"fill":"stroke","url("+getLocationHref()+"#"+b+")"),e.ty==="gs"&&(d.setAttribute("stroke-linecap",lineCapEnum[e.lc||2]),d.setAttribute("stroke-linejoin",lineJoinEnum[e.lj||2]),e.lj===1&&d.setAttribute("stroke-miterlimit",e.ml)),this.of=_,this.ms=c,this.ost=tt,this.maskId=g,a.msElem=d}},extendPrototype([DynamicPropertyContainer],SVGGradientFillStyleData);function SVGGradientStrokeStyleData(e,a,i){this.initDynamicPropertyContainer(e),this.getValue=this.iterateDynamicProperties,this.w=PropertyFactory.getProp(e,a.w,0,null,this),this.d=new DashProperty(e,a.d||{},"svg",this),this.initGradientData(e,a,i),this._isAnimated=!!this._isAnimated}extendPrototype([SVGGradientFillStyleData,DynamicPropertyContainer],SVGGradientStrokeStyleData);function ShapeGroupData(){this.it=[],this.prevViewData=[],this.gr=createNS("g")}function SVGTransformData(e,a,i){this.transform={mProps:e,op:a,container:i},this.elements=[],this._isAnimated=this.transform.mProps.dynamicProperties.length||this.transform.op.effectsSequence.length}var buildShapeString=function(a,i,s,o){if(i===0)return"";var c=a.o,d=a.i,b=a.v,g,_=" M"+o.applyToPointStringified(b[0][0],b[0][1]);for(g=1;g<i;g+=1)_+=" C"+o.applyToPointStringified(c[g-1][0],c[g-1][1])+" "+o.applyToPointStringified(d[g][0],d[g][1])+" "+o.applyToPointStringified(b[g][0],b[g][1]);return s&&i&&(_+=" C"+o.applyToPointStringified(c[g-1][0],c[g-1][1])+" "+o.applyToPointStringified(d[0][0],d[0][1])+" "+o.applyToPointStringified(b[0][0],b[0][1]),_+="z"),_},SVGElementsRenderer=function(){var e=new Matrix,a=new Matrix,i={createRenderFunction:s};function s(it){switch(it.ty){case"fl":return b;case"gf":return _;case"gs":return g;case"st":return tt;case"sh":case"el":case"rc":case"sr":return d;case"tr":return o;case"no":return c;default:return null}}function o(it,et,st){(st||et.transform.op._mdf)&&et.transform.container.setAttribute("opacity",et.transform.op.v),(st||et.transform.mProps._mdf)&&et.transform.container.setAttribute("transform",et.transform.mProps.v.to2dCSS())}function c(){}function d(it,et,st){var nt,rt,ht,$,_e,j,at=et.styles.length,lt=et.lvl,pt,ft,mt,vt;for(j=0;j<at;j+=1){if($=et.sh._mdf||st,et.styles[j].lvl<lt){for(ft=a.reset(),mt=lt-et.styles[j].lvl,vt=et.transformers.length-1;!$&&mt>0;)$=et.transformers[vt].mProps._mdf||$,mt-=1,vt-=1;if($)for(mt=lt-et.styles[j].lvl,vt=et.transformers.length-1;mt>0;)ft.multiply(et.transformers[vt].mProps.v),mt-=1,vt-=1}else ft=e;if(pt=et.sh.paths,rt=pt._length,$){for(ht="",nt=0;nt<rt;nt+=1)_e=pt.shapes[nt],_e&&_e._length&&(ht+=buildShapeString(_e,_e._length,_e.c,ft));et.caches[j]=ht}else ht=et.caches[j];et.styles[j].d+=it.hd===!0?"":ht,et.styles[j]._mdf=$||et.styles[j]._mdf}}function b(it,et,st){var nt=et.style;(et.c._mdf||st)&&nt.pElem.setAttribute("fill","rgb("+bmFloor(et.c.v[0])+","+bmFloor(et.c.v[1])+","+bmFloor(et.c.v[2])+")"),(et.o._mdf||st)&&nt.pElem.setAttribute("fill-opacity",et.o.v)}function g(it,et,st){_(it,et,st),tt(it,et,st)}function _(it,et,st){var nt=et.gf,rt=et.g._hasOpacity,ht=et.s.v,$=et.e.v;if(et.o._mdf||st){var _e=it.ty==="gf"?"fill-opacity":"stroke-opacity";et.style.pElem.setAttribute(_e,et.o.v)}if(et.s._mdf||st){var j=it.t===1?"x1":"cx",at=j==="x1"?"y1":"cy";nt.setAttribute(j,ht[0]),nt.setAttribute(at,ht[1]),rt&&!et.g._collapsable&&(et.of.setAttribute(j,ht[0]),et.of.setAttribute(at,ht[1]))}var lt,pt,ft,mt;if(et.g._cmdf||st){lt=et.cst;var vt=et.g.c;for(ft=lt.length,pt=0;pt<ft;pt+=1)mt=lt[pt],mt.setAttribute("offset",vt[pt*4]+"%"),mt.setAttribute("stop-color","rgb("+vt[pt*4+1]+","+vt[pt*4+2]+","+vt[pt*4+3]+")")}if(rt&&(et.g._omdf||st)){var _t=et.g.o;for(et.g._collapsable?lt=et.cst:lt=et.ost,ft=lt.length,pt=0;pt<ft;pt+=1)mt=lt[pt],et.g._collapsable||mt.setAttribute("offset",_t[pt*2]+"%"),mt.setAttribute("stop-opacity",_t[pt*2+1])}if(it.t===1)(et.e._mdf||st)&&(nt.setAttribute("x2",$[0]),nt.setAttribute("y2",$[1]),rt&&!et.g._collapsable&&(et.of.setAttribute("x2",$[0]),et.of.setAttribute("y2",$[1])));else{var Et;if((et.s._mdf||et.e._mdf||st)&&(Et=Math.sqrt(Math.pow(ht[0]-$[0],2)+Math.pow(ht[1]-$[1],2)),nt.setAttribute("r",Et),rt&&!et.g._collapsable&&et.of.setAttribute("r",Et)),et.s._mdf||et.e._mdf||et.h._mdf||et.a._mdf||st){Et||(Et=Math.sqrt(Math.pow(ht[0]-$[0],2)+Math.pow(ht[1]-$[1],2)));var gt=Math.atan2($[1]-ht[1],$[0]-ht[0]),St=et.h.v;St>=1?St=.99:St<=-1&&(St=-.99);var Ct=Et*St,bt=Math.cos(gt+et.a.v)*Ct+ht[0],ct=Math.sin(gt+et.a.v)*Ct+ht[1];nt.setAttribute("fx",bt),nt.setAttribute("fy",ct),rt&&!et.g._collapsable&&(et.of.setAttribute("fx",bt),et.of.setAttribute("fy",ct))}}}function tt(it,et,st){var nt=et.style,rt=et.d;rt&&(rt._mdf||st)&&rt.dashStr&&(nt.pElem.setAttribute("stroke-dasharray",rt.dashStr),nt.pElem.setAttribute("stroke-dashoffset",rt.dashoffset[0])),et.c&&(et.c._mdf||st)&&nt.pElem.setAttribute("stroke","rgb("+bmFloor(et.c.v[0])+","+bmFloor(et.c.v[1])+","+bmFloor(et.c.v[2])+")"),(et.o._mdf||st)&&nt.pElem.setAttribute("stroke-opacity",et.o.v),(et.w._mdf||st)&&(nt.pElem.setAttribute("stroke-width",et.w.v),nt.msElem&&nt.msElem.setAttribute("stroke-width",et.w.v))}return i}();function SVGShapeElement(e,a,i){this.shapes=[],this.shapesData=e.shapes,this.stylesList=[],this.shapeModifiers=[],this.itemsData=[],this.processedElements=[],this.animatedContents=[],this.initElement(e,a,i),this.prevViewData=[]}extendPrototype([BaseElement,TransformElement,SVGBaseElement,IShapeElement,HierarchyElement,FrameElement,RenderableDOMElement],SVGShapeElement),SVGShapeElement.prototype.initSecondaryElement=function(){},SVGShapeElement.prototype.identityMatrix=new Matrix,SVGShapeElement.prototype.buildExpressionInterface=function(){},SVGShapeElement.prototype.createContent=function(){this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.layerElement,0,[],!0),this.filterUniqueShapes()},SVGShapeElement.prototype.filterUniqueShapes=function(){var e,a=this.shapes.length,i,s,o=this.stylesList.length,c,d=[],b=!1;for(s=0;s<o;s+=1){for(c=this.stylesList[s],b=!1,d.length=0,e=0;e<a;e+=1)i=this.shapes[e],i.styles.indexOf(c)!==-1&&(d.push(i),b=i._isAnimated||b);d.length>1&&b&&this.setShapesAsAnimated(d)}},SVGShapeElement.prototype.setShapesAsAnimated=function(e){var a,i=e.length;for(a=0;a<i;a+=1)e[a].setAsAnimated()},SVGShapeElement.prototype.createStyleElement=function(e,a){var i,s=new SVGStyleData(e,a),o=s.pElem;if(e.ty==="st")i=new SVGStrokeStyleData(this,e,s);else if(e.ty==="fl")i=new SVGFillStyleData(this,e,s);else if(e.ty==="gf"||e.ty==="gs"){var c=e.ty==="gf"?SVGGradientFillStyleData:SVGGradientStrokeStyleData;i=new c(this,e,s),this.globalData.defs.appendChild(i.gf),i.maskId&&(this.globalData.defs.appendChild(i.ms),this.globalData.defs.appendChild(i.of),o.setAttribute("mask","url("+getLocationHref()+"#"+i.maskId+")"))}else e.ty==="no"&&(i=new SVGNoStyleData(this,e,s));return(e.ty==="st"||e.ty==="gs")&&(o.setAttribute("stroke-linecap",lineCapEnum[e.lc||2]),o.setAttribute("stroke-linejoin",lineJoinEnum[e.lj||2]),o.setAttribute("fill-opacity","0"),e.lj===1&&o.setAttribute("stroke-miterlimit",e.ml)),e.r===2&&o.setAttribute("fill-rule","evenodd"),e.ln&&o.setAttribute("id",e.ln),e.cl&&o.setAttribute("class",e.cl),e.bm&&(o.style["mix-blend-mode"]=getBlendMode(e.bm)),this.stylesList.push(s),this.addToAnimatedContents(e,i),i},SVGShapeElement.prototype.createGroupElement=function(e){var a=new ShapeGroupData;return e.ln&&a.gr.setAttribute("id",e.ln),e.cl&&a.gr.setAttribute("class",e.cl),e.bm&&(a.gr.style["mix-blend-mode"]=getBlendMode(e.bm)),a},SVGShapeElement.prototype.createTransformElement=function(e,a){var i=TransformPropertyFactory.getTransformProperty(this,e,this),s=new SVGTransformData(i,i.o,a);return this.addToAnimatedContents(e,s),s},SVGShapeElement.prototype.createShapeElement=function(e,a,i){var s=4;e.ty==="rc"?s=5:e.ty==="el"?s=6:e.ty==="sr"&&(s=7);var o=ShapePropertyFactory.getShapeProp(this,e,s,this),c=new SVGShapeData(a,i,o);return this.shapes.push(c),this.addShapeToModifiers(c),this.addToAnimatedContents(e,c),c},SVGShapeElement.prototype.addToAnimatedContents=function(e,a){for(var i=0,s=this.animatedContents.length;i<s;){if(this.animatedContents[i].element===a)return;i+=1}this.animatedContents.push({fn:SVGElementsRenderer.createRenderFunction(e),element:a,data:e})},SVGShapeElement.prototype.setElementStyles=function(e){var a=e.styles,i,s=this.stylesList.length;for(i=0;i<s;i+=1)a.indexOf(this.stylesList[i])===-1&&!this.stylesList[i].closed&&a.push(this.stylesList[i])},SVGShapeElement.prototype.reloadShapes=function(){this._isFirstFrame=!0;var e,a=this.itemsData.length;for(e=0;e<a;e+=1)this.prevViewData[e]=this.itemsData[e];for(this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.layerElement,0,[],!0),this.filterUniqueShapes(),a=this.dynamicProperties.length,e=0;e<a;e+=1)this.dynamicProperties[e].getValue();this.renderModifiers()},SVGShapeElement.prototype.searchShapes=function(e,a,i,s,o,c,d){var b=[].concat(c),g,_=e.length-1,tt,it,et=[],st=[],nt,rt,ht;for(g=_;g>=0;g-=1){if(ht=this.searchProcessedElement(e[g]),ht?a[g]=i[ht-1]:e[g]._render=d,e[g].ty==="fl"||e[g].ty==="st"||e[g].ty==="gf"||e[g].ty==="gs"||e[g].ty==="no")ht?a[g].style.closed=e[g].hd:a[g]=this.createStyleElement(e[g],o),e[g]._render&&a[g].style.pElem.parentNode!==s&&s.appendChild(a[g].style.pElem),et.push(a[g].style);else if(e[g].ty==="gr"){if(!ht)a[g]=this.createGroupElement(e[g]);else for(it=a[g].it.length,tt=0;tt<it;tt+=1)a[g].prevViewData[tt]=a[g].it[tt];this.searchShapes(e[g].it,a[g].it,a[g].prevViewData,a[g].gr,o+1,b,d),e[g]._render&&a[g].gr.parentNode!==s&&s.appendChild(a[g].gr)}else e[g].ty==="tr"?(ht||(a[g]=this.createTransformElement(e[g],s)),nt=a[g].transform,b.push(nt)):e[g].ty==="sh"||e[g].ty==="rc"||e[g].ty==="el"||e[g].ty==="sr"?(ht||(a[g]=this.createShapeElement(e[g],b,o)),this.setElementStyles(a[g])):e[g].ty==="tm"||e[g].ty==="rd"||e[g].ty==="ms"||e[g].ty==="pb"||e[g].ty==="zz"||e[g].ty==="op"?(ht?(rt=a[g],rt.closed=!1):(rt=ShapeModifiers.getModifier(e[g].ty),rt.init(this,e[g]),a[g]=rt,this.shapeModifiers.push(rt)),st.push(rt)):e[g].ty==="rp"&&(ht?(rt=a[g],rt.closed=!0):(rt=ShapeModifiers.getModifier(e[g].ty),a[g]=rt,rt.init(this,e,g,a),this.shapeModifiers.push(rt),d=!1),st.push(rt));this.addProcessedElement(e[g],g+1)}for(_=et.length,g=0;g<_;g+=1)et[g].closed=!0;for(_=st.length,g=0;g<_;g+=1)st[g].closed=!0},SVGShapeElement.prototype.renderInnerContent=function(){this.renderModifiers();var e,a=this.stylesList.length;for(e=0;e<a;e+=1)this.stylesList[e].reset();for(this.renderShape(),e=0;e<a;e+=1)(this.stylesList[e]._mdf||this._isFirstFrame)&&(this.stylesList[e].msElem&&(this.stylesList[e].msElem.setAttribute("d",this.stylesList[e].d),this.stylesList[e].d="M0 0"+this.stylesList[e].d),this.stylesList[e].pElem.setAttribute("d",this.stylesList[e].d||"M0 0"))},SVGShapeElement.prototype.renderShape=function(){var e,a=this.animatedContents.length,i;for(e=0;e<a;e+=1)i=this.animatedContents[e],(this._isFirstFrame||i.element._isAnimated)&&i.data!==!0&&i.fn(i.data,i.element,this._isFirstFrame)},SVGShapeElement.prototype.destroy=function(){this.destroyBaseElement(),this.shapesData=null,this.itemsData=null};function LetterProps(e,a,i,s,o,c){this.o=e,this.sw=a,this.sc=i,this.fc=s,this.m=o,this.p=c,this._mdf={o:!0,sw:!!a,sc:!!i,fc:!!s,m:!0,p:!0}}LetterProps.prototype.update=function(e,a,i,s,o,c){this._mdf.o=!1,this._mdf.sw=!1,this._mdf.sc=!1,this._mdf.fc=!1,this._mdf.m=!1,this._mdf.p=!1;var d=!1;return this.o!==e&&(this.o=e,this._mdf.o=!0,d=!0),this.sw!==a&&(this.sw=a,this._mdf.sw=!0,d=!0),this.sc!==i&&(this.sc=i,this._mdf.sc=!0,d=!0),this.fc!==s&&(this.fc=s,this._mdf.fc=!0,d=!0),this.m!==o&&(this.m=o,this._mdf.m=!0,d=!0),c.length&&(this.p[0]!==c[0]||this.p[1]!==c[1]||this.p[4]!==c[4]||this.p[5]!==c[5]||this.p[12]!==c[12]||this.p[13]!==c[13])&&(this.p=c,this._mdf.p=!0,d=!0),d};function TextProperty(e,a){this._frameId=initialDefaultFrame,this.pv="",this.v="",this.kf=!1,this._isFirstFrame=!0,this._mdf=!1,a.d&&a.d.sid&&(a.d=e.globalData.slotManager.getProp(a.d)),this.data=a,this.elem=e,this.comp=this.elem.comp,this.keysIndex=0,this.canResize=!1,this.minimumFontSize=1,this.effectsSequence=[],this.currentData={ascent:0,boxWidth:this.defaultBoxWidth,f:"",fStyle:"",fWeight:"",fc:"",j:"",justifyOffset:"",l:[],lh:0,lineWidths:[],ls:"",of:"",s:"",sc:"",sw:0,t:0,tr:0,sz:0,ps:null,fillColorAnim:!1,strokeColorAnim:!1,strokeWidthAnim:!1,yOffset:0,finalSize:0,finalText:[],finalLineHeight:0,__complete:!1},this.copyData(this.currentData,this.data.d.k[0].s),this.searchProperty()||this.completeTextData(this.currentData)}TextProperty.prototype.defaultBoxWidth=[0,0],TextProperty.prototype.copyData=function(e,a){for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i]);return e},TextProperty.prototype.setCurrentData=function(e){e.__complete||this.completeTextData(e),this.currentData=e,this.currentData.boxWidth=this.currentData.boxWidth||this.defaultBoxWidth,this._mdf=!0},TextProperty.prototype.searchProperty=function(){return this.searchKeyframes()},TextProperty.prototype.searchKeyframes=function(){return this.kf=this.data.d.k.length>1,this.kf&&this.addEffect(this.getKeyframeValue.bind(this)),this.kf},TextProperty.prototype.addEffect=function(e){this.effectsSequence.push(e),this.elem.addDynamicProperty(this)},TextProperty.prototype.getValue=function(e){if(!((this.elem.globalData.frameId===this.frameId||!this.effectsSequence.length)&&!e)){this.currentData.t=this.data.d.k[this.keysIndex].s.t;var a=this.currentData,i=this.keysIndex;if(this.lock){this.setCurrentData(this.currentData);return}this.lock=!0,this._mdf=!1;var s,o=this.effectsSequence.length,c=e||this.data.d.k[this.keysIndex].s;for(s=0;s<o;s+=1)i!==this.keysIndex?c=this.effectsSequence[s](c,c.t):c=this.effectsSequence[s](this.currentData,c.t);a!==c&&this.setCurrentData(c),this.v=this.currentData,this.pv=this.v,this.lock=!1,this.frameId=this.elem.globalData.frameId}},TextProperty.prototype.getKeyframeValue=function(){for(var e=this.data.d.k,a=this.elem.comp.renderedFrame,i=0,s=e.length;i<=s-1&&!(i===s-1||e[i+1].t>a);)i+=1;return this.keysIndex!==i&&(this.keysIndex=i),this.data.d.k[this.keysIndex].s},TextProperty.prototype.buildFinalText=function(e){for(var a=[],i=0,s=e.length,o,c,d=!1,b=!1,g="";i<s;)d=b,b=!1,o=e.charCodeAt(i),g=e.charAt(i),FontManager.isCombinedCharacter(o)?d=!0:o>=55296&&o<=56319?FontManager.isRegionalFlag(e,i)?g=e.substr(i,14):(c=e.charCodeAt(i+1),c>=56320&&c<=57343&&(FontManager.isModifier(o,c)?(g=e.substr(i,2),d=!0):FontManager.isFlagEmoji(e.substr(i,4))?g=e.substr(i,4):g=e.substr(i,2))):o>56319?(c=e.charCodeAt(i+1),FontManager.isVariationSelector(o)&&(d=!0)):FontManager.isZeroWidthJoiner(o)&&(d=!0,b=!0),d?(a[a.length-1]+=g,d=!1):a.push(g),i+=g.length;return a},TextProperty.prototype.completeTextData=function(e){e.__complete=!0;var a=this.elem.globalData.fontManager,i=this.data,s=[],o,c,d,b=0,g,_=i.m.g,tt=0,it=0,et=0,st=[],nt=0,rt=0,ht,$,_e=a.getFontByName(e.f),j,at=0,lt=getFontProperties(_e);e.fWeight=lt.weight,e.fStyle=lt.style,e.finalSize=e.s,e.finalText=this.buildFinalText(e.t),c=e.finalText.length,e.finalLineHeight=e.lh;var pt=e.tr/1e3*e.finalSize,ft;if(e.sz)for(var mt=!0,vt=e.sz[0],_t=e.sz[1],Et,gt;mt;){gt=this.buildFinalText(e.t),Et=0,nt=0,c=gt.length,pt=e.tr/1e3*e.finalSize;var St=-1;for(o=0;o<c;o+=1)ft=gt[o].charCodeAt(0),d=!1,gt[o]===" "?St=o:(ft===13||ft===3)&&(nt=0,d=!0,Et+=e.finalLineHeight||e.finalSize*1.2),a.chars?(j=a.getCharData(gt[o],_e.fStyle,_e.fFamily),at=d?0:j.w*e.finalSize/100):at=a.measureText(gt[o],e.f,e.finalSize),nt+at>vt&&gt[o]!==" "?(St===-1?c+=1:o=St,Et+=e.finalLineHeight||e.finalSize*1.2,gt.splice(o,St===o?1:0,"\r"),St=-1,nt=0):(nt+=at,nt+=pt);Et+=_e.ascent*e.finalSize/100,this.canResize&&e.finalSize>this.minimumFontSize&&_t<Et?(e.finalSize-=1,e.finalLineHeight=e.finalSize*e.lh/e.s):(e.finalText=gt,c=e.finalText.length,mt=!1)}nt=-pt,at=0;var Ct=0,bt;for(o=0;o<c;o+=1)if(d=!1,bt=e.finalText[o],ft=bt.charCodeAt(0),ft===13||ft===3?(Ct=0,st.push(nt),rt=nt>rt?nt:rt,nt=-2*pt,g="",d=!0,et+=1):g=bt,a.chars?(j=a.getCharData(bt,_e.fStyle,a.getFontByName(e.f).fFamily),at=d?0:j.w*e.finalSize/100):at=a.measureText(g,e.f,e.finalSize),bt===" "?Ct+=at+pt:(nt+=at+pt+Ct,Ct=0),s.push({l:at,an:at,add:tt,n:d,anIndexes:[],val:g,line:et,animatorJustifyOffset:0}),_==2){if(tt+=at,g===""||g===" "||o===c-1){for((g===""||g===" ")&&(tt-=at);it<=o;)s[it].an=tt,s[it].ind=b,s[it].extra=at,it+=1;b+=1,tt=0}}else if(_==3){if(tt+=at,g===""||o===c-1){for(g===""&&(tt-=at);it<=o;)s[it].an=tt,s[it].ind=b,s[it].extra=at,it+=1;tt=0,b+=1}}else s[b].ind=b,s[b].extra=0,b+=1;if(e.l=s,rt=nt>rt?nt:rt,st.push(nt),e.sz)e.boxWidth=e.sz[0],e.justifyOffset=0;else switch(e.boxWidth=rt,e.j){case 1:e.justifyOffset=-e.boxWidth;break;case 2:e.justifyOffset=-e.boxWidth/2;break;default:e.justifyOffset=0}e.lineWidths=st;var ct=i.a,xt,ot;$=ct.length;var ut,yt,dt=[];for(ht=0;ht<$;ht+=1){for(xt=ct[ht],xt.a.sc&&(e.strokeColorAnim=!0),xt.a.sw&&(e.strokeWidthAnim=!0),(xt.a.fc||xt.a.fh||xt.a.fs||xt.a.fb)&&(e.fillColorAnim=!0),yt=0,ut=xt.s.b,o=0;o<c;o+=1)ot=s[o],ot.anIndexes[ht]=yt,(ut==1&&ot.val!==""||ut==2&&ot.val!==""&&ot.val!==" "||ut==3&&(ot.n||ot.val==" "||o==c-1)||ut==4&&(ot.n||o==c-1))&&(xt.s.rn===1&&dt.push(yt),yt+=1);i.a[ht].s.totalChars=yt;var kt=-1,At;if(xt.s.rn===1)for(o=0;o<c;o+=1)ot=s[o],kt!=ot.anIndexes[ht]&&(kt=ot.anIndexes[ht],At=dt.splice(Math.floor(Math.random()*dt.length),1)[0]),ot.anIndexes[ht]=At}e.yOffset=e.finalLineHeight||e.finalSize*1.2,e.ls=e.ls||0,e.ascent=_e.ascent*e.finalSize/100},TextProperty.prototype.updateDocumentData=function(e,a){a=a===void 0?this.keysIndex:a;var i=this.copyData({},this.data.d.k[a].s);i=this.copyData(i,e),this.data.d.k[a].s=i,this.recalculate(a),this.setCurrentData(i),this.elem.addDynamicProperty(this)},TextProperty.prototype.recalculate=function(e){var a=this.data.d.k[e].s;a.__complete=!1,this.keysIndex=0,this._isFirstFrame=!0,this.getValue(a)},TextProperty.prototype.canResizeFont=function(e){this.canResize=e,this.recalculate(this.keysIndex),this.elem.addDynamicProperty(this)},TextProperty.prototype.setMinimumFontSize=function(e){this.minimumFontSize=Math.floor(e)||1,this.recalculate(this.keysIndex),this.elem.addDynamicProperty(this)};var TextSelectorProp=function(){var e=Math.max,a=Math.min,i=Math.floor;function s(c,d){this._currentTextLength=-1,this.k=!1,this.data=d,this.elem=c,this.comp=c.comp,this.finalS=0,this.finalE=0,this.initDynamicPropertyContainer(c),this.s=PropertyFactory.getProp(c,d.s||{k:0},0,0,this),"e"in d?this.e=PropertyFactory.getProp(c,d.e,0,0,this):this.e={v:100},this.o=PropertyFactory.getProp(c,d.o||{k:0},0,0,this),this.xe=PropertyFactory.getProp(c,d.xe||{k:0},0,0,this),this.ne=PropertyFactory.getProp(c,d.ne||{k:0},0,0,this),this.sm=PropertyFactory.getProp(c,d.sm||{k:100},0,0,this),this.a=PropertyFactory.getProp(c,d.a,0,.01,this),this.dynamicProperties.length||this.getValue()}s.prototype={getMult:function(d){this._currentTextLength!==this.elem.textProperty.currentData.l.length&&this.getValue();var b=0,g=0,_=1,tt=1;this.ne.v>0?b=this.ne.v/100:g=-this.ne.v/100,this.xe.v>0?_=1-this.xe.v/100:tt=1+this.xe.v/100;var it=BezierFactory.getBezierEasing(b,g,_,tt).get,et=0,st=this.finalS,nt=this.finalE,rt=this.data.sh;if(rt===2)nt===st?et=d>=nt?1:0:et=e(0,a(.5/(nt-st)+(d-st)/(nt-st),1)),et=it(et);else if(rt===3)nt===st?et=d>=nt?0:1:et=1-e(0,a(.5/(nt-st)+(d-st)/(nt-st),1)),et=it(et);else if(rt===4)nt===st?et=0:(et=e(0,a(.5/(nt-st)+(d-st)/(nt-st),1)),et<.5?et*=2:et=1-2*(et-.5)),et=it(et);else if(rt===5){if(nt===st)et=0;else{var ht=nt-st;d=a(e(0,d+.5-st),nt-st);var $=-ht/2+d,_e=ht/2;et=Math.sqrt(1-$*$/(_e*_e))}et=it(et)}else rt===6?(nt===st?et=0:(d=a(e(0,d+.5-st),nt-st),et=(1+Math.cos(Math.PI+Math.PI*2*d/(nt-st)))/2),et=it(et)):(d>=i(st)&&(d-st<0?et=e(0,a(a(nt,1)-(st-d),1)):et=e(0,a(nt-d,1))),et=it(et));if(this.sm.v!==100){var j=this.sm.v*.01;j===0&&(j=1e-8);var at=.5-j*.5;et<at?et=0:(et=(et-at)/j,et>1&&(et=1))}return et*this.a.v},getValue:function(d){this.iterateDynamicProperties(),this._mdf=d||this._mdf,this._currentTextLength=this.elem.textProperty.currentData.l.length||0,d&&this.data.r===2&&(this.e.v=this._currentTextLength);var b=this.data.r===2?1:100/this.data.totalChars,g=this.o.v/b,_=this.s.v/b+g,tt=this.e.v/b+g;if(_>tt){var it=_;_=tt,tt=it}this.finalS=_,this.finalE=tt}},extendPrototype([DynamicPropertyContainer],s);function o(c,d,b){return new s(c,d)}return{getTextSelectorProp:o}}();function TextAnimatorDataProperty(e,a,i){var s={propType:!1},o=PropertyFactory.getProp,c=a.a;this.a={r:c.r?o(e,c.r,0,degToRads,i):s,rx:c.rx?o(e,c.rx,0,degToRads,i):s,ry:c.ry?o(e,c.ry,0,degToRads,i):s,sk:c.sk?o(e,c.sk,0,degToRads,i):s,sa:c.sa?o(e,c.sa,0,degToRads,i):s,s:c.s?o(e,c.s,1,.01,i):s,a:c.a?o(e,c.a,1,0,i):s,o:c.o?o(e,c.o,0,.01,i):s,p:c.p?o(e,c.p,1,0,i):s,sw:c.sw?o(e,c.sw,0,0,i):s,sc:c.sc?o(e,c.sc,1,0,i):s,fc:c.fc?o(e,c.fc,1,0,i):s,fh:c.fh?o(e,c.fh,0,0,i):s,fs:c.fs?o(e,c.fs,0,.01,i):s,fb:c.fb?o(e,c.fb,0,.01,i):s,t:c.t?o(e,c.t,0,0,i):s},this.s=TextSelectorProp.getTextSelectorProp(e,a.s,i),this.s.t=a.s.t}function TextAnimatorProperty(e,a,i){this._isFirstFrame=!0,this._hasMaskedPath=!1,this._frameId=-1,this._textData=e,this._renderType=a,this._elem=i,this._animatorsData=createSizedArray(this._textData.a.length),this._pathData={},this._moreOptions={alignment:{}},this.renderedLetters=[],this.lettersChangedFlag=!1,this.initDynamicPropertyContainer(i)}TextAnimatorProperty.prototype.searchProperties=function(){var e,a=this._textData.a.length,i,s=PropertyFactory.getProp;for(e=0;e<a;e+=1)i=this._textData.a[e],this._animatorsData[e]=new TextAnimatorDataProperty(this._elem,i,this);this._textData.p&&"m"in this._textData.p?(this._pathData={a:s(this._elem,this._textData.p.a,0,0,this),f:s(this._elem,this._textData.p.f,0,0,this),l:s(this._elem,this._textData.p.l,0,0,this),r:s(this._elem,this._textData.p.r,0,0,this),p:s(this._elem,this._textData.p.p,0,0,this),m:this._elem.maskManager.getMaskProperty(this._textData.p.m)},this._hasMaskedPath=!0):this._hasMaskedPath=!1,this._moreOptions.alignment=s(this._elem,this._textData.m.a,1,0,this)},TextAnimatorProperty.prototype.getMeasures=function(e,a){if(this.lettersChangedFlag=a,!(!this._mdf&&!this._isFirstFrame&&!a&&(!this._hasMaskedPath||!this._pathData.m._mdf))){this._isFirstFrame=!1;var i=this._moreOptions.alignment.v,s=this._animatorsData,o=this._textData,c=this.mHelper,d=this._renderType,b=this.renderedLetters.length,g,_,tt,it,et=e.l,st,nt,rt,ht,$,_e,j,at,lt,pt,ft,mt,vt,_t,Et;if(this._hasMaskedPath){if(Et=this._pathData.m,!this._pathData.n||this._pathData._mdf){var gt=Et.v;this._pathData.r.v&&(gt=gt.reverse()),st={tLength:0,segments:[]},it=gt._length-1;var St;for(mt=0,tt=0;tt<it;tt+=1)St=bez.buildBezierData(gt.v[tt],gt.v[tt+1],[gt.o[tt][0]-gt.v[tt][0],gt.o[tt][1]-gt.v[tt][1]],[gt.i[tt+1][0]-gt.v[tt+1][0],gt.i[tt+1][1]-gt.v[tt+1][1]]),st.tLength+=St.segmentLength,st.segments.push(St),mt+=St.segmentLength;tt=it,Et.v.c&&(St=bez.buildBezierData(gt.v[tt],gt.v[0],[gt.o[tt][0]-gt.v[tt][0],gt.o[tt][1]-gt.v[tt][1]],[gt.i[0][0]-gt.v[0][0],gt.i[0][1]-gt.v[0][1]]),st.tLength+=St.segmentLength,st.segments.push(St),mt+=St.segmentLength),this._pathData.pi=st}if(st=this._pathData.pi,nt=this._pathData.f.v,j=0,_e=1,ht=0,$=!0,pt=st.segments,nt<0&&Et.v.c)for(st.tLength<Math.abs(nt)&&(nt=-Math.abs(nt)%st.tLength),j=pt.length-1,lt=pt[j].points,_e=lt.length-1;nt<0;)nt+=lt[_e].partialLength,_e-=1,_e<0&&(j-=1,lt=pt[j].points,_e=lt.length-1);lt=pt[j].points,at=lt[_e-1],rt=lt[_e],ft=rt.partialLength}it=et.length,g=0,_=0;var Ct=e.finalSize*1.2*.714,bt=!0,ct,xt,ot,ut,yt;ut=s.length;var dt,kt=-1,At,Pt,Dt,wt=nt,Ft=j,Bt=_e,Kt=-1,Vt,Tt,Lt,Rt,It,Nt,zt,Ot,jt="",Ht=this.defaultPropsArray,Ut;if(e.j===2||e.j===1){var Mt=0,Wt=0,Qt=e.j===2?-.5:-1,Gt=0,Yt=!0;for(tt=0;tt<it;tt+=1)if(et[tt].n){for(Mt&&(Mt+=Wt);Gt<tt;)et[Gt].animatorJustifyOffset=Mt,Gt+=1;Mt=0,Yt=!0}else{for(ot=0;ot<ut;ot+=1)ct=s[ot].a,ct.t.propType&&(Yt&&e.j===2&&(Wt+=ct.t.v*Qt),xt=s[ot].s,dt=xt.getMult(et[tt].anIndexes[ot],o.a[ot].s.totalChars),dt.length?Mt+=ct.t.v*dt[0]*Qt:Mt+=ct.t.v*dt*Qt);Yt=!1}for(Mt&&(Mt+=Wt);Gt<tt;)et[Gt].animatorJustifyOffset=Mt,Gt+=1}for(tt=0;tt<it;tt+=1){if(c.reset(),Vt=1,et[tt].n)g=0,_+=e.yOffset,_+=bt?1:0,nt=wt,bt=!1,this._hasMaskedPath&&(j=Ft,_e=Bt,lt=pt[j].points,at=lt[_e-1],rt=lt[_e],ft=rt.partialLength,ht=0),jt="",Ot="",Nt="",Ut="",Ht=this.defaultPropsArray;else{if(this._hasMaskedPath){if(Kt!==et[tt].line){switch(e.j){case 1:nt+=mt-e.lineWidths[et[tt].line];break;case 2:nt+=(mt-e.lineWidths[et[tt].line])/2;break}Kt=et[tt].line}kt!==et[tt].ind&&(et[kt]&&(nt+=et[kt].extra),nt+=et[tt].an/2,kt=et[tt].ind),nt+=i[0]*et[tt].an*.005;var $t=0;for(ot=0;ot<ut;ot+=1)ct=s[ot].a,ct.p.propType&&(xt=s[ot].s,dt=xt.getMult(et[tt].anIndexes[ot],o.a[ot].s.totalChars),dt.length?$t+=ct.p.v[0]*dt[0]:$t+=ct.p.v[0]*dt),ct.a.propType&&(xt=s[ot].s,dt=xt.getMult(et[tt].anIndexes[ot],o.a[ot].s.totalChars),dt.length?$t+=ct.a.v[0]*dt[0]:$t+=ct.a.v[0]*dt);for($=!0,this._pathData.a.v&&(nt=et[0].an*.5+(mt-this._pathData.f.v-et[0].an*.5-et[et.length-1].an*.5)*kt/(it-1),nt+=this._pathData.f.v);$;)ht+ft>=nt+$t||!lt?(vt=(nt+$t-ht)/rt.partialLength,Pt=at.point[0]+(rt.point[0]-at.point[0])*vt,Dt=at.point[1]+(rt.point[1]-at.point[1])*vt,c.translate(-i[0]*et[tt].an*.005,-(i[1]*Ct)*.01),$=!1):lt&&(ht+=rt.partialLength,_e+=1,_e>=lt.length&&(_e=0,j+=1,pt[j]?lt=pt[j].points:Et.v.c?(_e=0,j=0,lt=pt[j].points):(ht-=rt.partialLength,lt=null)),lt&&(at=rt,rt=lt[_e],ft=rt.partialLength));At=et[tt].an/2-et[tt].add,c.translate(-At,0,0)}else At=et[tt].an/2-et[tt].add,c.translate(-At,0,0),c.translate(-i[0]*et[tt].an*.005,-i[1]*Ct*.01,0);for(ot=0;ot<ut;ot+=1)ct=s[ot].a,ct.t.propType&&(xt=s[ot].s,dt=xt.getMult(et[tt].anIndexes[ot],o.a[ot].s.totalChars),(g!==0||e.j!==0)&&(this._hasMaskedPath?dt.length?nt+=ct.t.v*dt[0]:nt+=ct.t.v*dt:dt.length?g+=ct.t.v*dt[0]:g+=ct.t.v*dt));for(e.strokeWidthAnim&&(Lt=e.sw||0),e.strokeColorAnim&&(e.sc?Tt=[e.sc[0],e.sc[1],e.sc[2]]:Tt=[0,0,0]),e.fillColorAnim&&e.fc&&(Rt=[e.fc[0],e.fc[1],e.fc[2]]),ot=0;ot<ut;ot+=1)ct=s[ot].a,ct.a.propType&&(xt=s[ot].s,dt=xt.getMult(et[tt].anIndexes[ot],o.a[ot].s.totalChars),dt.length?c.translate(-ct.a.v[0]*dt[0],-ct.a.v[1]*dt[1],ct.a.v[2]*dt[2]):c.translate(-ct.a.v[0]*dt,-ct.a.v[1]*dt,ct.a.v[2]*dt));for(ot=0;ot<ut;ot+=1)ct=s[ot].a,ct.s.propType&&(xt=s[ot].s,dt=xt.getMult(et[tt].anIndexes[ot],o.a[ot].s.totalChars),dt.length?c.scale(1+(ct.s.v[0]-1)*dt[0],1+(ct.s.v[1]-1)*dt[1],1):c.scale(1+(ct.s.v[0]-1)*dt,1+(ct.s.v[1]-1)*dt,1));for(ot=0;ot<ut;ot+=1){if(ct=s[ot].a,xt=s[ot].s,dt=xt.getMult(et[tt].anIndexes[ot],o.a[ot].s.totalChars),ct.sk.propType&&(dt.length?c.skewFromAxis(-ct.sk.v*dt[0],ct.sa.v*dt[1]):c.skewFromAxis(-ct.sk.v*dt,ct.sa.v*dt)),ct.r.propType&&(dt.length?c.rotateZ(-ct.r.v*dt[2]):c.rotateZ(-ct.r.v*dt)),ct.ry.propType&&(dt.length?c.rotateY(ct.ry.v*dt[1]):c.rotateY(ct.ry.v*dt)),ct.rx.propType&&(dt.length?c.rotateX(ct.rx.v*dt[0]):c.rotateX(ct.rx.v*dt)),ct.o.propType&&(dt.length?Vt+=(ct.o.v*dt[0]-Vt)*dt[0]:Vt+=(ct.o.v*dt-Vt)*dt),e.strokeWidthAnim&&ct.sw.propType&&(dt.length?Lt+=ct.sw.v*dt[0]:Lt+=ct.sw.v*dt),e.strokeColorAnim&&ct.sc.propType)for(It=0;It<3;It+=1)dt.length?Tt[It]+=(ct.sc.v[It]-Tt[It])*dt[0]:Tt[It]+=(ct.sc.v[It]-Tt[It])*dt;if(e.fillColorAnim&&e.fc){if(ct.fc.propType)for(It=0;It<3;It+=1)dt.length?Rt[It]+=(ct.fc.v[It]-Rt[It])*dt[0]:Rt[It]+=(ct.fc.v[It]-Rt[It])*dt;ct.fh.propType&&(dt.length?Rt=addHueToRGB(Rt,ct.fh.v*dt[0]):Rt=addHueToRGB(Rt,ct.fh.v*dt)),ct.fs.propType&&(dt.length?Rt=addSaturationToRGB(Rt,ct.fs.v*dt[0]):Rt=addSaturationToRGB(Rt,ct.fs.v*dt)),ct.fb.propType&&(dt.length?Rt=addBrightnessToRGB(Rt,ct.fb.v*dt[0]):Rt=addBrightnessToRGB(Rt,ct.fb.v*dt))}}for(ot=0;ot<ut;ot+=1)ct=s[ot].a,ct.p.propType&&(xt=s[ot].s,dt=xt.getMult(et[tt].anIndexes[ot],o.a[ot].s.totalChars),this._hasMaskedPath?dt.length?c.translate(0,ct.p.v[1]*dt[0],-ct.p.v[2]*dt[1]):c.translate(0,ct.p.v[1]*dt,-ct.p.v[2]*dt):dt.length?c.translate(ct.p.v[0]*dt[0],ct.p.v[1]*dt[1],-ct.p.v[2]*dt[2]):c.translate(ct.p.v[0]*dt,ct.p.v[1]*dt,-ct.p.v[2]*dt));if(e.strokeWidthAnim&&(Nt=Lt<0?0:Lt),e.strokeColorAnim&&(zt="rgb("+Math.round(Tt[0]*255)+","+Math.round(Tt[1]*255)+","+Math.round(Tt[2]*255)+")"),e.fillColorAnim&&e.fc&&(Ot="rgb("+Math.round(Rt[0]*255)+","+Math.round(Rt[1]*255)+","+Math.round(Rt[2]*255)+")"),this._hasMaskedPath){if(c.translate(0,-e.ls),c.translate(0,i[1]*Ct*.01+_,0),this._pathData.p.v){_t=(rt.point[1]-at.point[1])/(rt.point[0]-at.point[0]);var Xt=Math.atan(_t)*180/Math.PI;rt.point[0]<at.point[0]&&(Xt+=180),c.rotate(-Xt*Math.PI/180)}c.translate(Pt,Dt,0),nt-=i[0]*et[tt].an*.005,et[tt+1]&&kt!==et[tt+1].ind&&(nt+=et[tt].an/2,nt+=e.tr*.001*e.finalSize)}else{switch(c.translate(g,_,0),e.ps&&c.translate(e.ps[0],e.ps[1]+e.ascent,0),e.j){case 1:c.translate(et[tt].animatorJustifyOffset+e.justifyOffset+(e.boxWidth-e.lineWidths[et[tt].line]),0,0);break;case 2:c.translate(et[tt].animatorJustifyOffset+e.justifyOffset+(e.boxWidth-e.lineWidths[et[tt].line])/2,0,0);break}c.translate(0,-e.ls),c.translate(At,0,0),c.translate(i[0]*et[tt].an*.005,i[1]*Ct*.01,0),g+=et[tt].l+e.tr*.001*e.finalSize}d==="html"?jt=c.toCSS():d==="svg"?jt=c.to2dCSS():Ht=[c.props[0],c.props[1],c.props[2],c.props[3],c.props[4],c.props[5],c.props[6],c.props[7],c.props[8],c.props[9],c.props[10],c.props[11],c.props[12],c.props[13],c.props[14],c.props[15]],Ut=Vt}b<=tt?(yt=new LetterProps(Ut,Nt,zt,Ot,jt,Ht),this.renderedLetters.push(yt),b+=1,this.lettersChangedFlag=!0):(yt=this.renderedLetters[tt],this.lettersChangedFlag=yt.update(Ut,Nt,zt,Ot,jt,Ht)||this.lettersChangedFlag)}}},TextAnimatorProperty.prototype.getValue=function(){this._elem.globalData.frameId!==this._frameId&&(this._frameId=this._elem.globalData.frameId,this.iterateDynamicProperties())},TextAnimatorProperty.prototype.mHelper=new Matrix,TextAnimatorProperty.prototype.defaultPropsArray=[],extendPrototype([DynamicPropertyContainer],TextAnimatorProperty);function ITextElement(){}ITextElement.prototype.initElement=function(e,a,i){this.lettersChangedFlag=!0,this.initFrame(),this.initBaseData(e,a,i),this.textProperty=new TextProperty(this,e.t,this.dynamicProperties),this.textAnimator=new TextAnimatorProperty(e.t,this.renderType,this),this.initTransform(e,a,i),this.initHierarchy(),this.initRenderable(),this.initRendererElement(),this.createContainerElements(),this.createRenderableComponents(),this.createContent(),this.hide(),this.textAnimator.searchProperties(this.dynamicProperties)},ITextElement.prototype.prepareFrame=function(e){this._mdf=!1,this.prepareRenderableFrame(e),this.prepareProperties(e,this.isInRange)},ITextElement.prototype.createPathShape=function(e,a){var i,s=a.length,o,c="";for(i=0;i<s;i+=1)a[i].ty==="sh"&&(o=a[i].ks.k,c+=buildShapeString(o,o.i.length,!0,e));return c},ITextElement.prototype.updateDocumentData=function(e,a){this.textProperty.updateDocumentData(e,a)},ITextElement.prototype.canResizeFont=function(e){this.textProperty.canResizeFont(e)},ITextElement.prototype.setMinimumFontSize=function(e){this.textProperty.setMinimumFontSize(e)},ITextElement.prototype.applyTextPropertiesToMatrix=function(e,a,i,s,o){switch(e.ps&&a.translate(e.ps[0],e.ps[1]+e.ascent,0),a.translate(0,-e.ls,0),e.j){case 1:a.translate(e.justifyOffset+(e.boxWidth-e.lineWidths[i]),0,0);break;case 2:a.translate(e.justifyOffset+(e.boxWidth-e.lineWidths[i])/2,0,0);break}a.translate(s,o,0)},ITextElement.prototype.buildColor=function(e){return"rgb("+Math.round(e[0]*255)+","+Math.round(e[1]*255)+","+Math.round(e[2]*255)+")"},ITextElement.prototype.emptyProp=new LetterProps,ITextElement.prototype.destroy=function(){},ITextElement.prototype.validateText=function(){(this.textProperty._mdf||this.textProperty._isFirstFrame)&&(this.buildNewText(),this.textProperty._isFirstFrame=!1,this.textProperty._mdf=!1)};var emptyShapeData={shapes:[]};function SVGTextLottieElement(e,a,i){this.textSpans=[],this.renderType="svg",this.initElement(e,a,i)}extendPrototype([BaseElement,TransformElement,SVGBaseElement,HierarchyElement,FrameElement,RenderableDOMElement,ITextElement],SVGTextLottieElement),SVGTextLottieElement.prototype.createContent=function(){this.data.singleShape&&!this.globalData.fontManager.chars&&(this.textContainer=createNS("text"))},SVGTextLottieElement.prototype.buildTextContents=function(e){for(var a=0,i=e.length,s=[],o="";a<i;)e[a]==="\r"||e[a]===""?(s.push(o),o=""):o+=e[a],a+=1;return s.push(o),s},SVGTextLottieElement.prototype.buildShapeData=function(e,a){if(e.shapes&&e.shapes.length){var i=e.shapes[0];if(i.it){var s=i.it[i.it.length-1];s.s&&(s.s.k[0]=a,s.s.k[1]=a)}}return e},SVGTextLottieElement.prototype.buildNewText=function(){this.addDynamicProperty(this);var e,a,i=this.textProperty.currentData;this.renderedLetters=createSizedArray(i?i.l.length:0),i.fc?this.layerElement.setAttribute("fill",this.buildColor(i.fc)):this.layerElement.setAttribute("fill","rgba(0,0,0,0)"),i.sc&&(this.layerElement.setAttribute("stroke",this.buildColor(i.sc)),this.layerElement.setAttribute("stroke-width",i.sw)),this.layerElement.setAttribute("font-size",i.finalSize);var s=this.globalData.fontManager.getFontByName(i.f);if(s.fClass)this.layerElement.setAttribute("class",s.fClass);else{this.layerElement.setAttribute("font-family",s.fFamily);var o=i.fWeight,c=i.fStyle;this.layerElement.setAttribute("font-style",c),this.layerElement.setAttribute("font-weight",o)}this.layerElement.setAttribute("aria-label",i.t);var d=i.l||[],b=!!this.globalData.fontManager.chars;a=d.length;var g,_=this.mHelper,tt="",it=this.data.singleShape,et=0,st=0,nt=!0,rt=i.tr*.001*i.finalSize;if(it&&!b&&!i.sz){var ht=this.textContainer,$="start";switch(i.j){case 1:$="end";break;case 2:$="middle";break;default:$="start";break}ht.setAttribute("text-anchor",$),ht.setAttribute("letter-spacing",rt);var _e=this.buildTextContents(i.finalText);for(a=_e.length,st=i.ps?i.ps[1]+i.ascent:0,e=0;e<a;e+=1)g=this.textSpans[e].span||createNS("tspan"),g.textContent=_e[e],g.setAttribute("x",0),g.setAttribute("y",st),g.style.display="inherit",ht.appendChild(g),this.textSpans[e]||(this.textSpans[e]={span:null,glyph:null}),this.textSpans[e].span=g,st+=i.finalLineHeight;this.layerElement.appendChild(ht)}else{var j=this.textSpans.length,at;for(e=0;e<a;e+=1){if(this.textSpans[e]||(this.textSpans[e]={span:null,childSpan:null,glyph:null}),!b||!it||e===0){if(g=j>e?this.textSpans[e].span:createNS(b?"g":"text"),j<=e){if(g.setAttribute("stroke-linecap","butt"),g.setAttribute("stroke-linejoin","round"),g.setAttribute("stroke-miterlimit","4"),this.textSpans[e].span=g,b){var lt=createNS("g");g.appendChild(lt),this.textSpans[e].childSpan=lt}this.textSpans[e].span=g,this.layerElement.appendChild(g)}g.style.display="inherit"}if(_.reset(),it&&(d[e].n&&(et=-rt,st+=i.yOffset,st+=nt?1:0,nt=!1),this.applyTextPropertiesToMatrix(i,_,d[e].line,et,st),et+=d[e].l||0,et+=rt),b){at=this.globalData.fontManager.getCharData(i.finalText[e],s.fStyle,this.globalData.fontManager.getFontByName(i.f).fFamily);var pt;if(at.t===1)pt=new SVGCompElement(at.data,this.globalData,this);else{var ft=emptyShapeData;at.data&&at.data.shapes&&(ft=this.buildShapeData(at.data,i.finalSize)),pt=new SVGShapeElement(ft,this.globalData,this)}if(this.textSpans[e].glyph){var mt=this.textSpans[e].glyph;this.textSpans[e].childSpan.removeChild(mt.layerElement),mt.destroy()}this.textSpans[e].glyph=pt,pt._debug=!0,pt.prepareFrame(0),pt.renderFrame(),this.textSpans[e].childSpan.appendChild(pt.layerElement),at.t===1&&this.textSpans[e].childSpan.setAttribute("transform","scale("+i.finalSize/100+","+i.finalSize/100+")")}else it&&g.setAttribute("transform","translate("+_.props[12]+","+_.props[13]+")"),g.textContent=d[e].val,g.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve")}it&&g&&g.setAttribute("d",tt)}for(;e<this.textSpans.length;)this.textSpans[e].span.style.display="none",e+=1;this._sizeChanged=!0},SVGTextLottieElement.prototype.sourceRectAtTime=function(){if(this.prepareFrame(this.comp.renderedFrame-this.data.st),this.renderInnerContent(),this._sizeChanged){this._sizeChanged=!1;var e=this.layerElement.getBBox();this.bbox={top:e.y,left:e.x,width:e.width,height:e.height}}return this.bbox},SVGTextLottieElement.prototype.getValue=function(){var e,a=this.textSpans.length,i;for(this.renderedFrame=this.comp.renderedFrame,e=0;e<a;e+=1)i=this.textSpans[e].glyph,i&&(i.prepareFrame(this.comp.renderedFrame-this.data.st),i._mdf&&(this._mdf=!0))},SVGTextLottieElement.prototype.renderInnerContent=function(){if(this.validateText(),(!this.data.singleShape||this._mdf)&&(this.textAnimator.getMeasures(this.textProperty.currentData,this.lettersChangedFlag),this.lettersChangedFlag||this.textAnimator.lettersChangedFlag)){this._sizeChanged=!0;var e,a,i=this.textAnimator.renderedLetters,s=this.textProperty.currentData.l;a=s.length;var o,c,d;for(e=0;e<a;e+=1)s[e].n||(o=i[e],c=this.textSpans[e].span,d=this.textSpans[e].glyph,d&&d.renderFrame(),o._mdf.m&&c.setAttribute("transform",o.m),o._mdf.o&&c.setAttribute("opacity",o.o),o._mdf.sw&&c.setAttribute("stroke-width",o.sw),o._mdf.sc&&c.setAttribute("stroke",o.sc),o._mdf.fc&&c.setAttribute("fill",o.fc))}};function ISolidElement(e,a,i){this.initElement(e,a,i)}extendPrototype([IImageElement],ISolidElement),ISolidElement.prototype.createContent=function(){var e=createNS("rect");e.setAttribute("width",this.data.sw),e.setAttribute("height",this.data.sh),e.setAttribute("fill",this.data.sc),this.layerElement.appendChild(e)};function NullElement(e,a,i){this.initFrame(),this.initBaseData(e,a,i),this.initFrame(),this.initTransform(e,a,i),this.initHierarchy()}NullElement.prototype.prepareFrame=function(e){this.prepareProperties(e,!0)},NullElement.prototype.renderFrame=function(){},NullElement.prototype.getBaseElement=function(){return null},NullElement.prototype.destroy=function(){},NullElement.prototype.sourceRectAtTime=function(){},NullElement.prototype.hide=function(){},extendPrototype([BaseElement,TransformElement,HierarchyElement,FrameElement],NullElement);function SVGRendererBase(){}extendPrototype([BaseRenderer],SVGRendererBase),SVGRendererBase.prototype.createNull=function(e){return new NullElement(e,this.globalData,this)},SVGRendererBase.prototype.createShape=function(e){return new SVGShapeElement(e,this.globalData,this)},SVGRendererBase.prototype.createText=function(e){return new SVGTextLottieElement(e,this.globalData,this)},SVGRendererBase.prototype.createImage=function(e){return new IImageElement(e,this.globalData,this)},SVGRendererBase.prototype.createSolid=function(e){return new ISolidElement(e,this.globalData,this)},SVGRendererBase.prototype.configAnimation=function(e){this.svgElement.setAttribute("xmlns","http://www.w3.org/2000/svg"),this.svgElement.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink"),this.renderConfig.viewBoxSize?this.svgElement.setAttribute("viewBox",this.renderConfig.viewBoxSize):this.svgElement.setAttribute("viewBox","0 0 "+e.w+" "+e.h),this.renderConfig.viewBoxOnly||(this.svgElement.setAttribute("width",e.w),this.svgElement.setAttribute("height",e.h),this.svgElement.style.width="100%",this.svgElement.style.height="100%",this.svgElement.style.transform="translate3d(0,0,0)",this.svgElement.style.contentVisibility=this.renderConfig.contentVisibility),this.renderConfig.width&&this.svgElement.setAttribute("width",this.renderConfig.width),this.renderConfig.height&&this.svgElement.setAttribute("height",this.renderConfig.height),this.renderConfig.className&&this.svgElement.setAttribute("class",this.renderConfig.className),this.renderConfig.id&&this.svgElement.setAttribute("id",this.renderConfig.id),this.renderConfig.focusable!==void 0&&this.svgElement.setAttribute("focusable",this.renderConfig.focusable),this.svgElement.setAttribute("preserveAspectRatio",this.renderConfig.preserveAspectRatio),this.animationItem.wrapper.appendChild(this.svgElement);var a=this.globalData.defs;this.setupGlobalData(e,a),this.globalData.progressiveLoad=this.renderConfig.progressiveLoad,this.data=e;var i=createNS("clipPath"),s=createNS("rect");s.setAttribute("width",e.w),s.setAttribute("height",e.h),s.setAttribute("x",0),s.setAttribute("y",0);var o=createElementID();i.setAttribute("id",o),i.appendChild(s),this.layerElement.setAttribute("clip-path","url("+getLocationHref()+"#"+o+")"),a.appendChild(i),this.layers=e.layers,this.elements=createSizedArray(e.layers.length)},SVGRendererBase.prototype.destroy=function(){this.animationItem.wrapper&&(this.animationItem.wrapper.innerText=""),this.layerElement=null,this.globalData.defs=null;var e,a=this.layers?this.layers.length:0;for(e=0;e<a;e+=1)this.elements[e]&&this.elements[e].destroy&&this.elements[e].destroy();this.elements.length=0,this.destroyed=!0,this.animationItem=null},SVGRendererBase.prototype.updateContainerSize=function(){},SVGRendererBase.prototype.findIndexByInd=function(e){var a=0,i=this.layers.length;for(a=0;a<i;a+=1)if(this.layers[a].ind===e)return a;return-1},SVGRendererBase.prototype.buildItem=function(e){var a=this.elements;if(!(a[e]||this.layers[e].ty===99)){a[e]=!0;var i=this.createItem(this.layers[e]);if(a[e]=i,getExpressionsPlugin()&&(this.layers[e].ty===0&&this.globalData.projectInterface.registerComposition(i),i.initExpressions()),this.appendElementInPos(i,e),this.layers[e].tt){var s="tp"in this.layers[e]?this.findIndexByInd(this.layers[e].tp):e-1;if(s===-1)return;if(!this.elements[s]||this.elements[s]===!0)this.buildItem(s),this.addPendingElement(i);else{var o=a[s],c=o.getMatte(this.layers[e].tt);i.setMatte(c)}}}},SVGRendererBase.prototype.checkPendingElements=function(){for(;this.pendingElements.length;){var e=this.pendingElements.pop();if(e.checkParenting(),e.data.tt)for(var a=0,i=this.elements.length;a<i;){if(this.elements[a]===e){var s="tp"in e.data?this.findIndexByInd(e.data.tp):a-1,o=this.elements[s],c=o.getMatte(this.layers[a].tt);e.setMatte(c);break}a+=1}}},SVGRendererBase.prototype.renderFrame=function(e){if(!(this.renderedFrame===e||this.destroyed)){e===null?e=this.renderedFrame:this.renderedFrame=e,this.globalData.frameNum=e,this.globalData.frameId+=1,this.globalData.projectInterface.currentFrame=e,this.globalData._mdf=!1;var a,i=this.layers.length;for(this.completeLayers||this.checkLayers(e),a=i-1;a>=0;a-=1)(this.completeLayers||this.elements[a])&&this.elements[a].prepareFrame(e-this.layers[a].st);if(this.globalData._mdf)for(a=0;a<i;a+=1)(this.completeLayers||this.elements[a])&&this.elements[a].renderFrame()}},SVGRendererBase.prototype.appendElementInPos=function(e,a){var i=e.getBaseElement();if(i){for(var s=0,o;s<a;)this.elements[s]&&this.elements[s]!==!0&&this.elements[s].getBaseElement()&&(o=this.elements[s].getBaseElement()),s+=1;o?this.layerElement.insertBefore(i,o):this.layerElement.appendChild(i)}},SVGRendererBase.prototype.hide=function(){this.layerElement.style.display="none"},SVGRendererBase.prototype.show=function(){this.layerElement.style.display="block"};function ICompElement(){}extendPrototype([BaseElement,TransformElement,HierarchyElement,FrameElement,RenderableDOMElement],ICompElement),ICompElement.prototype.initElement=function(e,a,i){this.initFrame(),this.initBaseData(e,a,i),this.initTransform(e,a,i),this.initRenderable(),this.initHierarchy(),this.initRendererElement(),this.createContainerElements(),this.createRenderableComponents(),(this.data.xt||!a.progressiveLoad)&&this.buildAllItems(),this.hide()},ICompElement.prototype.prepareFrame=function(e){if(this._mdf=!1,this.prepareRenderableFrame(e),this.prepareProperties(e,this.isInRange),!(!this.isInRange&&!this.data.xt)){if(this.tm._placeholder)this.renderedFrame=e/this.data.sr;else{var a=this.tm.v;a===this.data.op&&(a=this.data.op-1),this.renderedFrame=a}var i,s=this.elements.length;for(this.completeLayers||this.checkLayers(this.renderedFrame),i=s-1;i>=0;i-=1)(this.completeLayers||this.elements[i])&&(this.elements[i].prepareFrame(this.renderedFrame-this.layers[i].st),this.elements[i]._mdf&&(this._mdf=!0))}},ICompElement.prototype.renderInnerContent=function(){var e,a=this.layers.length;for(e=0;e<a;e+=1)(this.completeLayers||this.elements[e])&&this.elements[e].renderFrame()},ICompElement.prototype.setElements=function(e){this.elements=e},ICompElement.prototype.getElements=function(){return this.elements},ICompElement.prototype.destroyElements=function(){var e,a=this.layers.length;for(e=0;e<a;e+=1)this.elements[e]&&this.elements[e].destroy()},ICompElement.prototype.destroy=function(){this.destroyElements(),this.destroyBaseElement()};function SVGCompElement(e,a,i){this.layers=e.layers,this.supports3d=!0,this.completeLayers=!1,this.pendingElements=[],this.elements=this.layers?createSizedArray(this.layers.length):[],this.initElement(e,a,i),this.tm=e.tm?PropertyFactory.getProp(this,e.tm,0,a.frameRate,this):{_placeholder:!0}}extendPrototype([SVGRendererBase,ICompElement,SVGBaseElement],SVGCompElement),SVGCompElement.prototype.createComp=function(e){return new SVGCompElement(e,this.globalData,this)};function SVGRenderer(e,a){this.animationItem=e,this.layers=null,this.renderedFrame=-1,this.svgElement=createNS("svg");var i="";if(a&&a.title){var s=createNS("title"),o=createElementID();s.setAttribute("id",o),s.textContent=a.title,this.svgElement.appendChild(s),i+=o}if(a&&a.description){var c=createNS("desc"),d=createElementID();c.setAttribute("id",d),c.textContent=a.description,this.svgElement.appendChild(c),i+=" "+d}i&&this.svgElement.setAttribute("aria-labelledby",i);var b=createNS("defs");this.svgElement.appendChild(b);var g=createNS("g");this.svgElement.appendChild(g),this.layerElement=g,this.renderConfig={preserveAspectRatio:a&&a.preserveAspectRatio||"xMidYMid meet",imagePreserveAspectRatio:a&&a.imagePreserveAspectRatio||"xMidYMid slice",contentVisibility:a&&a.contentVisibility||"visible",progressiveLoad:a&&a.progressiveLoad||!1,hideOnTransparent:!(a&&a.hideOnTransparent===!1),viewBoxOnly:a&&a.viewBoxOnly||!1,viewBoxSize:a&&a.viewBoxSize||!1,className:a&&a.className||"",id:a&&a.id||"",focusable:a&&a.focusable,filterSize:{width:a&&a.filterSize&&a.filterSize.width||"100%",height:a&&a.filterSize&&a.filterSize.height||"100%",x:a&&a.filterSize&&a.filterSize.x||"0%",y:a&&a.filterSize&&a.filterSize.y||"0%"},width:a&&a.width,height:a&&a.height,runExpressions:!a||a.runExpressions===void 0||a.runExpressions},this.globalData={_mdf:!1,frameNum:-1,defs:b,renderConfig:this.renderConfig},this.elements=[],this.pendingElements=[],this.destroyed=!1,this.rendererType="svg"}extendPrototype([SVGRendererBase],SVGRenderer),SVGRenderer.prototype.createComp=function(e){return new SVGCompElement(e,this.globalData,this)};function ShapeTransformManager(){this.sequences={},this.sequenceList=[],this.transform_key_count=0}ShapeTransformManager.prototype={addTransformSequence:function(a){var i,s=a.length,o="_";for(i=0;i<s;i+=1)o+=a[i].transform.key+"_";var c=this.sequences[o];return c||(c={transforms:[].concat(a),finalTransform:new Matrix,_mdf:!1},this.sequences[o]=c,this.sequenceList.push(c)),c},processSequence:function(a,i){for(var s=0,o=a.transforms.length,c=i;s<o&&!i;){if(a.transforms[s].transform.mProps._mdf){c=!0;break}s+=1}if(c)for(a.finalTransform.reset(),s=o-1;s>=0;s-=1)a.finalTransform.multiply(a.transforms[s].transform.mProps.v);a._mdf=c},processSequences:function(a){var i,s=this.sequenceList.length;for(i=0;i<s;i+=1)this.processSequence(this.sequenceList[i],a)},getNewKey:function(){return this.transform_key_count+=1,"_"+this.transform_key_count}};var lumaLoader=function(){var a="__lottie_element_luma_buffer",i=null,s=null,o=null;function c(){var g=createNS("svg"),_=createNS("filter"),tt=createNS("feColorMatrix");return _.setAttribute("id",a),tt.setAttribute("type","matrix"),tt.setAttribute("color-interpolation-filters","sRGB"),tt.setAttribute("values","0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0"),_.appendChild(tt),g.appendChild(_),g.setAttribute("id",a+"_svg"),featureSupport.svgLumaHidden&&(g.style.display="none"),g}function d(){i||(o=c(),document.body.appendChild(o),i=createTag("canvas"),s=i.getContext("2d"),s.filter="url(#"+a+")",s.fillStyle="rgba(0,0,0,0)",s.fillRect(0,0,1,1))}function b(g){return i||d(),i.width=g.width,i.height=g.height,s.filter="url(#"+a+")",i}return{load:d,get:b}};function createCanvas(e,a){if(featureSupport.offscreenCanvas)return new OffscreenCanvas(e,a);var i=createTag("canvas");return i.width=e,i.height=a,i}var assetLoader=function(){return{loadLumaCanvas:lumaLoader.load,getLumaCanvas:lumaLoader.get,createCanvas}}(),registeredEffects={};function CVEffects(e){var a,i=e.data.ef?e.data.ef.length:0;this.filters=[];var s;for(a=0;a<i;a+=1){s=null;var o=e.data.ef[a].ty;if(registeredEffects[o]){var c=registeredEffects[o].effect;s=new c(e.effectsManager.effectElements[a],e)}s&&this.filters.push(s)}this.filters.length&&e.addRenderableComponent(this)}CVEffects.prototype.renderFrame=function(e){var a,i=this.filters.length;for(a=0;a<i;a+=1)this.filters[a].renderFrame(e)},CVEffects.prototype.getEffects=function(e){var a,i=this.filters.length,s=[];for(a=0;a<i;a+=1)this.filters[a].type===e&&s.push(this.filters[a]);return s};function registerEffect(e,a){registeredEffects[e]={effect:a}}function CVMaskElement(e,a){this.data=e,this.element=a,this.masksProperties=this.data.masksProperties||[],this.viewData=createSizedArray(this.masksProperties.length);var i,s=this.masksProperties.length,o=!1;for(i=0;i<s;i+=1)this.masksProperties[i].mode!=="n"&&(o=!0),this.viewData[i]=ShapePropertyFactory.getShapeProp(this.element,this.masksProperties[i],3);this.hasMasks=o,o&&this.element.addRenderableComponent(this)}CVMaskElement.prototype.renderFrame=function(){if(this.hasMasks){var e=this.element.finalTransform.mat,a=this.element.canvasContext,i,s=this.masksProperties.length,o,c,d;for(a.beginPath(),i=0;i<s;i+=1)if(this.masksProperties[i].mode!=="n"){this.masksProperties[i].inv&&(a.moveTo(0,0),a.lineTo(this.element.globalData.compSize.w,0),a.lineTo(this.element.globalData.compSize.w,this.element.globalData.compSize.h),a.lineTo(0,this.element.globalData.compSize.h),a.lineTo(0,0)),d=this.viewData[i].v,o=e.applyToPointArray(d.v[0][0],d.v[0][1],0),a.moveTo(o[0],o[1]);var b,g=d._length;for(b=1;b<g;b+=1)c=e.applyToTriplePoints(d.o[b-1],d.i[b],d.v[b]),a.bezierCurveTo(c[0],c[1],c[2],c[3],c[4],c[5]);c=e.applyToTriplePoints(d.o[b-1],d.i[0],d.v[0]),a.bezierCurveTo(c[0],c[1],c[2],c[3],c[4],c[5])}this.element.globalData.renderer.save(!0),a.clip()}},CVMaskElement.prototype.getMaskProperty=MaskElement.prototype.getMaskProperty,CVMaskElement.prototype.destroy=function(){this.element=null};function CVBaseElement(){}var operationsMap={1:"source-in",2:"source-out",3:"source-in",4:"source-out"};CVBaseElement.prototype={createElements:function(){},initRendererElement:function(){},createContainerElements:function(){if(this.data.tt>=1){this.buffers=[];var a=this.globalData.canvasContext,i=assetLoader.createCanvas(a.canvas.width,a.canvas.height);this.buffers.push(i);var s=assetLoader.createCanvas(a.canvas.width,a.canvas.height);this.buffers.push(s),this.data.tt>=3&&!document._isProxy&&assetLoader.loadLumaCanvas()}this.canvasContext=this.globalData.canvasContext,this.transformCanvas=this.globalData.transformCanvas,this.renderableEffectsManager=new CVEffects(this),this.searchEffectTransforms()},createContent:function(){},setBlendMode:function(){var a=this.globalData;if(a.blendMode!==this.data.bm){a.blendMode=this.data.bm;var i=getBlendMode(this.data.bm);a.canvasContext.globalCompositeOperation=i}},createRenderableComponents:function(){this.maskManager=new CVMaskElement(this.data,this),this.transformEffects=this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT)},hideElement:function(){!this.hidden&&(!this.isInRange||this.isTransparent)&&(this.hidden=!0)},showElement:function(){this.isInRange&&!this.isTransparent&&(this.hidden=!1,this._isFirstFrame=!0,this.maskManager._isFirstFrame=!0)},clearCanvas:function(a){a.clearRect(this.transformCanvas.tx,this.transformCanvas.ty,this.transformCanvas.w*this.transformCanvas.sx,this.transformCanvas.h*this.transformCanvas.sy)},prepareLayer:function(){if(this.data.tt>=1){var a=this.buffers[0],i=a.getContext("2d");this.clearCanvas(i),i.drawImage(this.canvasContext.canvas,0,0),this.currentTransform=this.canvasContext.getTransform(),this.canvasContext.setTransform(1,0,0,1,0,0),this.clearCanvas(this.canvasContext),this.canvasContext.setTransform(this.currentTransform)}},exitLayer:function(){if(this.data.tt>=1){var a=this.buffers[1],i=a.getContext("2d");this.clearCanvas(i),i.drawImage(this.canvasContext.canvas,0,0),this.canvasContext.setTransform(1,0,0,1,0,0),this.clearCanvas(this.canvasContext),this.canvasContext.setTransform(this.currentTransform);var s=this.comp.getElementById("tp"in this.data?this.data.tp:this.data.ind-1);if(s.renderFrame(!0),this.canvasContext.setTransform(1,0,0,1,0,0),this.data.tt>=3&&!document._isProxy){var o=assetLoader.getLumaCanvas(this.canvasContext.canvas),c=o.getContext("2d");c.drawImage(this.canvasContext.canvas,0,0),this.clearCanvas(this.canvasContext),this.canvasContext.drawImage(o,0,0)}this.canvasContext.globalCompositeOperation=operationsMap[this.data.tt],this.canvasContext.drawImage(a,0,0),this.canvasContext.globalCompositeOperation="destination-over",this.canvasContext.drawImage(this.buffers[0],0,0),this.canvasContext.setTransform(this.currentTransform),this.canvasContext.globalCompositeOperation="source-over"}},renderFrame:function(a){if(!(this.hidden||this.data.hd)&&!(this.data.td===1&&!a)){this.renderTransform(),this.renderRenderable(),this.renderLocalTransform(),this.setBlendMode();var i=this.data.ty===0;this.prepareLayer(),this.globalData.renderer.save(i),this.globalData.renderer.ctxTransform(this.finalTransform.localMat.props),this.globalData.renderer.ctxOpacity(this.finalTransform.localOpacity),this.renderInnerContent(),this.globalData.renderer.restore(i),this.exitLayer(),this.maskManager.hasMasks&&this.globalData.renderer.restore(!0),this._isFirstFrame&&(this._isFirstFrame=!1)}},destroy:function(){this.canvasContext=null,this.data=null,this.globalData=null,this.maskManager.destroy()},mHelper:new Matrix},CVBaseElement.prototype.hide=CVBaseElement.prototype.hideElement,CVBaseElement.prototype.show=CVBaseElement.prototype.showElement;function CVShapeData(e,a,i,s){this.styledShapes=[],this.tr=[0,0,0,0,0,0];var o=4;a.ty==="rc"?o=5:a.ty==="el"?o=6:a.ty==="sr"&&(o=7),this.sh=ShapePropertyFactory.getShapeProp(e,a,o,e);var c,d=i.length,b;for(c=0;c<d;c+=1)i[c].closed||(b={transforms:s.addTransformSequence(i[c].transforms),trNodes:[]},this.styledShapes.push(b),i[c].elements.push(b))}CVShapeData.prototype.setAsAnimated=SVGShapeData.prototype.setAsAnimated;function CVShapeElement(e,a,i){this.shapes=[],this.shapesData=e.shapes,this.stylesList=[],this.itemsData=[],this.prevViewData=[],this.shapeModifiers=[],this.processedElements=[],this.transformsManager=new ShapeTransformManager,this.initElement(e,a,i)}extendPrototype([BaseElement,TransformElement,CVBaseElement,IShapeElement,HierarchyElement,FrameElement,RenderableElement],CVShapeElement),CVShapeElement.prototype.initElement=RenderableDOMElement.prototype.initElement,CVShapeElement.prototype.transformHelper={opacity:1,_opMdf:!1},CVShapeElement.prototype.dashResetter=[],CVShapeElement.prototype.createContent=function(){this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,!0,[])},CVShapeElement.prototype.createStyleElement=function(e,a){var i={data:e,type:e.ty,preTransforms:this.transformsManager.addTransformSequence(a),transforms:[],elements:[],closed:e.hd===!0},s={};if(e.ty==="fl"||e.ty==="st"?(s.c=PropertyFactory.getProp(this,e.c,1,255,this),s.c.k||(i.co="rgb("+bmFloor(s.c.v[0])+","+bmFloor(s.c.v[1])+","+bmFloor(s.c.v[2])+")")):(e.ty==="gf"||e.ty==="gs")&&(s.s=PropertyFactory.getProp(this,e.s,1,null,this),s.e=PropertyFactory.getProp(this,e.e,1,null,this),s.h=PropertyFactory.getProp(this,e.h||{k:0},0,.01,this),s.a=PropertyFactory.getProp(this,e.a||{k:0},0,degToRads,this),s.g=new GradientProperty(this,e.g,this)),s.o=PropertyFactory.getProp(this,e.o,0,.01,this),e.ty==="st"||e.ty==="gs"){if(i.lc=lineCapEnum[e.lc||2],i.lj=lineJoinEnum[e.lj||2],e.lj==1&&(i.ml=e.ml),s.w=PropertyFactory.getProp(this,e.w,0,null,this),s.w.k||(i.wi=s.w.v),e.d){var o=new DashProperty(this,e.d,"canvas",this);s.d=o,s.d.k||(i.da=s.d.dashArray,i.do=s.d.dashoffset[0])}}else i.r=e.r===2?"evenodd":"nonzero";return this.stylesList.push(i),s.style=i,s},CVShapeElement.prototype.createGroupElement=function(){var e={it:[],prevViewData:[]};return e},CVShapeElement.prototype.createTransformElement=function(e){var a={transform:{opacity:1,_opMdf:!1,key:this.transformsManager.getNewKey(),op:PropertyFactory.getProp(this,e.o,0,.01,this),mProps:TransformPropertyFactory.getTransformProperty(this,e,this)}};return a},CVShapeElement.prototype.createShapeElement=function(e){var a=new CVShapeData(this,e,this.stylesList,this.transformsManager);return this.shapes.push(a),this.addShapeToModifiers(a),a},CVShapeElement.prototype.reloadShapes=function(){this._isFirstFrame=!0;var e,a=this.itemsData.length;for(e=0;e<a;e+=1)this.prevViewData[e]=this.itemsData[e];for(this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,!0,[]),a=this.dynamicProperties.length,e=0;e<a;e+=1)this.dynamicProperties[e].getValue();this.renderModifiers(),this.transformsManager.processSequences(this._isFirstFrame)},CVShapeElement.prototype.addTransformToStyleList=function(e){var a,i=this.stylesList.length;for(a=0;a<i;a+=1)this.stylesList[a].closed||this.stylesList[a].transforms.push(e)},CVShapeElement.prototype.removeTransformFromStyleList=function(){var e,a=this.stylesList.length;for(e=0;e<a;e+=1)this.stylesList[e].closed||this.stylesList[e].transforms.pop()},CVShapeElement.prototype.closeStyles=function(e){var a,i=e.length;for(a=0;a<i;a+=1)e[a].closed=!0},CVShapeElement.prototype.searchShapes=function(e,a,i,s,o){var c,d=e.length-1,b,g,_=[],tt=[],it,et,st,nt=[].concat(o);for(c=d;c>=0;c-=1){if(it=this.searchProcessedElement(e[c]),it?a[c]=i[it-1]:e[c]._shouldRender=s,e[c].ty==="fl"||e[c].ty==="st"||e[c].ty==="gf"||e[c].ty==="gs")it?a[c].style.closed=!1:a[c]=this.createStyleElement(e[c],nt),_.push(a[c].style);else if(e[c].ty==="gr"){if(!it)a[c]=this.createGroupElement(e[c]);else for(g=a[c].it.length,b=0;b<g;b+=1)a[c].prevViewData[b]=a[c].it[b];this.searchShapes(e[c].it,a[c].it,a[c].prevViewData,s,nt)}else e[c].ty==="tr"?(it||(st=this.createTransformElement(e[c]),a[c]=st),nt.push(a[c]),this.addTransformToStyleList(a[c])):e[c].ty==="sh"||e[c].ty==="rc"||e[c].ty==="el"||e[c].ty==="sr"?it||(a[c]=this.createShapeElement(e[c])):e[c].ty==="tm"||e[c].ty==="rd"||e[c].ty==="pb"||e[c].ty==="zz"||e[c].ty==="op"?(it?(et=a[c],et.closed=!1):(et=ShapeModifiers.getModifier(e[c].ty),et.init(this,e[c]),a[c]=et,this.shapeModifiers.push(et)),tt.push(et)):e[c].ty==="rp"&&(it?(et=a[c],et.closed=!0):(et=ShapeModifiers.getModifier(e[c].ty),a[c]=et,et.init(this,e,c,a),this.shapeModifiers.push(et),s=!1),tt.push(et));this.addProcessedElement(e[c],c+1)}for(this.removeTransformFromStyleList(),this.closeStyles(_),d=tt.length,c=0;c<d;c+=1)tt[c].closed=!0},CVShapeElement.prototype.renderInnerContent=function(){this.transformHelper.opacity=1,this.transformHelper._opMdf=!1,this.renderModifiers(),this.transformsManager.processSequences(this._isFirstFrame),this.renderShape(this.transformHelper,this.shapesData,this.itemsData,!0)},CVShapeElement.prototype.renderShapeTransform=function(e,a){(e._opMdf||a.op._mdf||this._isFirstFrame)&&(a.opacity=e.opacity,a.opacity*=a.op.v,a._opMdf=!0)},CVShapeElement.prototype.drawLayer=function(){var e,a=this.stylesList.length,i,s,o,c,d,b,g=this.globalData.renderer,_=this.globalData.canvasContext,tt,it;for(e=0;e<a;e+=1)if(it=this.stylesList[e],tt=it.type,!((tt==="st"||tt==="gs")&&it.wi===0||!it.data._shouldRender||it.coOp===0||this.globalData.currentGlobalAlpha===0)){for(g.save(),d=it.elements,tt==="st"||tt==="gs"?(g.ctxStrokeStyle(tt==="st"?it.co:it.grd),g.ctxLineWidth(it.wi),g.ctxLineCap(it.lc),g.ctxLineJoin(it.lj),g.ctxMiterLimit(it.ml||0)):g.ctxFillStyle(tt==="fl"?it.co:it.grd),g.ctxOpacity(it.coOp),tt!=="st"&&tt!=="gs"&&_.beginPath(),g.ctxTransform(it.preTransforms.finalTransform.props),s=d.length,i=0;i<s;i+=1){for((tt==="st"||tt==="gs")&&(_.beginPath(),it.da&&(_.setLineDash(it.da),_.lineDashOffset=it.do)),b=d[i].trNodes,c=b.length,o=0;o<c;o+=1)b[o].t==="m"?_.moveTo(b[o].p[0],b[o].p[1]):b[o].t==="c"?_.bezierCurveTo(b[o].pts[0],b[o].pts[1],b[o].pts[2],b[o].pts[3],b[o].pts[4],b[o].pts[5]):_.closePath();(tt==="st"||tt==="gs")&&(g.ctxStroke(),it.da&&_.setLineDash(this.dashResetter))}tt!=="st"&&tt!=="gs"&&this.globalData.renderer.ctxFill(it.r),g.restore()}},CVShapeElement.prototype.renderShape=function(e,a,i,s){var o,c=a.length-1,d;for(d=e,o=c;o>=0;o-=1)a[o].ty==="tr"?(d=i[o].transform,this.renderShapeTransform(e,d)):a[o].ty==="sh"||a[o].ty==="el"||a[o].ty==="rc"||a[o].ty==="sr"?this.renderPath(a[o],i[o]):a[o].ty==="fl"?this.renderFill(a[o],i[o],d):a[o].ty==="st"?this.renderStroke(a[o],i[o],d):a[o].ty==="gf"||a[o].ty==="gs"?this.renderGradientFill(a[o],i[o],d):a[o].ty==="gr"?this.renderShape(d,a[o].it,i[o].it):a[o].ty;s&&this.drawLayer()},CVShapeElement.prototype.renderStyledShape=function(e,a){if(this._isFirstFrame||a._mdf||e.transforms._mdf){var i=e.trNodes,s=a.paths,o,c,d,b=s._length;i.length=0;var g=e.transforms.finalTransform;for(d=0;d<b;d+=1){var _=s.shapes[d];if(_&&_.v){for(c=_._length,o=1;o<c;o+=1)o===1&&i.push({t:"m",p:g.applyToPointArray(_.v[0][0],_.v[0][1],0)}),i.push({t:"c",pts:g.applyToTriplePoints(_.o[o-1],_.i[o],_.v[o])});c===1&&i.push({t:"m",p:g.applyToPointArray(_.v[0][0],_.v[0][1],0)}),_.c&&c&&(i.push({t:"c",pts:g.applyToTriplePoints(_.o[o-1],_.i[0],_.v[0])}),i.push({t:"z"}))}}e.trNodes=i}},CVShapeElement.prototype.renderPath=function(e,a){if(e.hd!==!0&&e._shouldRender){var i,s=a.styledShapes.length;for(i=0;i<s;i+=1)this.renderStyledShape(a.styledShapes[i],a.sh)}},CVShapeElement.prototype.renderFill=function(e,a,i){var s=a.style;(a.c._mdf||this._isFirstFrame)&&(s.co="rgb("+bmFloor(a.c.v[0])+","+bmFloor(a.c.v[1])+","+bmFloor(a.c.v[2])+")"),(a.o._mdf||i._opMdf||this._isFirstFrame)&&(s.coOp=a.o.v*i.opacity)},CVShapeElement.prototype.renderGradientFill=function(e,a,i){var s=a.style,o;if(!s.grd||a.g._mdf||a.s._mdf||a.e._mdf||e.t!==1&&(a.h._mdf||a.a._mdf)){var c=this.globalData.canvasContext,d=a.s.v,b=a.e.v;if(e.t===1)o=c.createLinearGradient(d[0],d[1],b[0],b[1]);else{var g=Math.sqrt(Math.pow(d[0]-b[0],2)+Math.pow(d[1]-b[1],2)),_=Math.atan2(b[1]-d[1],b[0]-d[0]),tt=a.h.v;tt>=1?tt=.99:tt<=-1&&(tt=-.99);var it=g*tt,et=Math.cos(_+a.a.v)*it+d[0],st=Math.sin(_+a.a.v)*it+d[1];o=c.createRadialGradient(et,st,0,d[0],d[1],g)}var nt,rt=e.g.p,ht=a.g.c,$=1;for(nt=0;nt<rt;nt+=1)a.g._hasOpacity&&a.g._collapsable&&($=a.g.o[nt*2+1]),o.addColorStop(ht[nt*4]/100,"rgba("+ht[nt*4+1]+","+ht[nt*4+2]+","+ht[nt*4+3]+","+$+")");s.grd=o}s.coOp=a.o.v*i.opacity},CVShapeElement.prototype.renderStroke=function(e,a,i){var s=a.style,o=a.d;o&&(o._mdf||this._isFirstFrame)&&(s.da=o.dashArray,s.do=o.dashoffset[0]),(a.c._mdf||this._isFirstFrame)&&(s.co="rgb("+bmFloor(a.c.v[0])+","+bmFloor(a.c.v[1])+","+bmFloor(a.c.v[2])+")"),(a.o._mdf||i._opMdf||this._isFirstFrame)&&(s.coOp=a.o.v*i.opacity),(a.w._mdf||this._isFirstFrame)&&(s.wi=a.w.v)},CVShapeElement.prototype.destroy=function(){this.shapesData=null,this.globalData=null,this.canvasContext=null,this.stylesList.length=0,this.itemsData.length=0};function CVTextElement(e,a,i){this.textSpans=[],this.yOffset=0,this.fillColorAnim=!1,this.strokeColorAnim=!1,this.strokeWidthAnim=!1,this.stroke=!1,this.fill=!1,this.justifyOffset=0,this.currentRender=null,this.renderType="canvas",this.values={fill:"rgba(0,0,0,0)",stroke:"rgba(0,0,0,0)",sWidth:0,fValue:""},this.initElement(e,a,i)}extendPrototype([BaseElement,TransformElement,CVBaseElement,HierarchyElement,FrameElement,RenderableElement,ITextElement],CVTextElement),CVTextElement.prototype.tHelper=createTag("canvas").getContext("2d"),CVTextElement.prototype.buildNewText=function(){var e=this.textProperty.currentData;this.renderedLetters=createSizedArray(e.l?e.l.length:0);var a=!1;e.fc?(a=!0,this.values.fill=this.buildColor(e.fc)):this.values.fill="rgba(0,0,0,0)",this.fill=a;var i=!1;e.sc&&(i=!0,this.values.stroke=this.buildColor(e.sc),this.values.sWidth=e.sw);var s=this.globalData.fontManager.getFontByName(e.f),o,c,d=e.l,b=this.mHelper;this.stroke=i,this.values.fValue=e.finalSize+"px "+this.globalData.fontManager.getFontByName(e.f).fFamily,c=e.finalText.length;var g,_,tt,it,et,st,nt,rt,ht,$,_e=this.data.singleShape,j=e.tr*.001*e.finalSize,at=0,lt=0,pt=!0,ft=0;for(o=0;o<c;o+=1){g=this.globalData.fontManager.getCharData(e.finalText[o],s.fStyle,this.globalData.fontManager.getFontByName(e.f).fFamily),_=g&&g.data||{},b.reset(),_e&&d[o].n&&(at=-j,lt+=e.yOffset,lt+=pt?1:0,pt=!1),et=_.shapes?_.shapes[0].it:[],nt=et.length,b.scale(e.finalSize/100,e.finalSize/100),_e&&this.applyTextPropertiesToMatrix(e,b,d[o].line,at,lt),ht=createSizedArray(nt-1);var mt=0;for(st=0;st<nt;st+=1)if(et[st].ty==="sh"){for(it=et[st].ks.k.i.length,rt=et[st].ks.k,$=[],tt=1;tt<it;tt+=1)tt===1&&$.push(b.applyToX(rt.v[0][0],rt.v[0][1],0),b.applyToY(rt.v[0][0],rt.v[0][1],0)),$.push(b.applyToX(rt.o[tt-1][0],rt.o[tt-1][1],0),b.applyToY(rt.o[tt-1][0],rt.o[tt-1][1],0),b.applyToX(rt.i[tt][0],rt.i[tt][1],0),b.applyToY(rt.i[tt][0],rt.i[tt][1],0),b.applyToX(rt.v[tt][0],rt.v[tt][1],0),b.applyToY(rt.v[tt][0],rt.v[tt][1],0));$.push(b.applyToX(rt.o[tt-1][0],rt.o[tt-1][1],0),b.applyToY(rt.o[tt-1][0],rt.o[tt-1][1],0),b.applyToX(rt.i[0][0],rt.i[0][1],0),b.applyToY(rt.i[0][0],rt.i[0][1],0),b.applyToX(rt.v[0][0],rt.v[0][1],0),b.applyToY(rt.v[0][0],rt.v[0][1],0)),ht[mt]=$,mt+=1}_e&&(at+=d[o].l,at+=j),this.textSpans[ft]?this.textSpans[ft].elem=ht:this.textSpans[ft]={elem:ht},ft+=1}},CVTextElement.prototype.renderInnerContent=function(){this.validateText();var e=this.canvasContext;e.font=this.values.fValue,this.globalData.renderer.ctxLineCap("butt"),this.globalData.renderer.ctxLineJoin("miter"),this.globalData.renderer.ctxMiterLimit(4),this.data.singleShape||this.textAnimator.getMeasures(this.textProperty.currentData,this.lettersChangedFlag);var a,i,s,o,c,d,b=this.textAnimator.renderedLetters,g=this.textProperty.currentData.l;i=g.length;var _,tt=null,it=null,et=null,st,nt,rt=this.globalData.renderer;for(a=0;a<i;a+=1)if(!g[a].n){if(_=b[a],_&&(rt.save(),rt.ctxTransform(_.p),rt.ctxOpacity(_.o)),this.fill){for(_&&_.fc?tt!==_.fc&&(rt.ctxFillStyle(_.fc),tt=_.fc):tt!==this.values.fill&&(tt=this.values.fill,rt.ctxFillStyle(this.values.fill)),st=this.textSpans[a].elem,o=st.length,this.globalData.canvasContext.beginPath(),s=0;s<o;s+=1)for(nt=st[s],d=nt.length,this.globalData.canvasContext.moveTo(nt[0],nt[1]),c=2;c<d;c+=6)this.globalData.canvasContext.bezierCurveTo(nt[c],nt[c+1],nt[c+2],nt[c+3],nt[c+4],nt[c+5]);this.globalData.canvasContext.closePath(),rt.ctxFill()}if(this.stroke){for(_&&_.sw?et!==_.sw&&(et=_.sw,rt.ctxLineWidth(_.sw)):et!==this.values.sWidth&&(et=this.values.sWidth,rt.ctxLineWidth(this.values.sWidth)),_&&_.sc?it!==_.sc&&(it=_.sc,rt.ctxStrokeStyle(_.sc)):it!==this.values.stroke&&(it=this.values.stroke,rt.ctxStrokeStyle(this.values.stroke)),st=this.textSpans[a].elem,o=st.length,this.globalData.canvasContext.beginPath(),s=0;s<o;s+=1)for(nt=st[s],d=nt.length,this.globalData.canvasContext.moveTo(nt[0],nt[1]),c=2;c<d;c+=6)this.globalData.canvasContext.bezierCurveTo(nt[c],nt[c+1],nt[c+2],nt[c+3],nt[c+4],nt[c+5]);this.globalData.canvasContext.closePath(),rt.ctxStroke()}_&&this.globalData.renderer.restore()}};function CVImageElement(e,a,i){this.assetData=a.getAssetData(e.refId),this.img=a.imageLoader.getAsset(this.assetData),this.initElement(e,a,i)}extendPrototype([BaseElement,TransformElement,CVBaseElement,HierarchyElement,FrameElement,RenderableElement],CVImageElement),CVImageElement.prototype.initElement=SVGShapeElement.prototype.initElement,CVImageElement.prototype.prepareFrame=IImageElement.prototype.prepareFrame,CVImageElement.prototype.createContent=function(){if(this.img.width&&(this.assetData.w!==this.img.width||this.assetData.h!==this.img.height)){var e=createTag("canvas");e.width=this.assetData.w,e.height=this.assetData.h;var a=e.getContext("2d"),i=this.img.width,s=this.img.height,o=i/s,c=this.assetData.w/this.assetData.h,d,b,g=this.assetData.pr||this.globalData.renderConfig.imagePreserveAspectRatio;o>c&&g==="xMidYMid slice"||o<c&&g!=="xMidYMid slice"?(b=s,d=b*c):(d=i,b=d/c),a.drawImage(this.img,(i-d)/2,(s-b)/2,d,b,0,0,this.assetData.w,this.assetData.h),this.img=e}},CVImageElement.prototype.renderInnerContent=function(){this.canvasContext.drawImage(this.img,0,0)},CVImageElement.prototype.destroy=function(){this.img=null};function CVSolidElement(e,a,i){this.initElement(e,a,i)}extendPrototype([BaseElement,TransformElement,CVBaseElement,HierarchyElement,FrameElement,RenderableElement],CVSolidElement),CVSolidElement.prototype.initElement=SVGShapeElement.prototype.initElement,CVSolidElement.prototype.prepareFrame=IImageElement.prototype.prepareFrame,CVSolidElement.prototype.renderInnerContent=function(){this.globalData.renderer.ctxFillStyle(this.data.sc),this.globalData.renderer.ctxFillRect(0,0,this.data.sw,this.data.sh)};function CanvasRendererBase(){}extendPrototype([BaseRenderer],CanvasRendererBase),CanvasRendererBase.prototype.createShape=function(e){return new CVShapeElement(e,this.globalData,this)},CanvasRendererBase.prototype.createText=function(e){return new CVTextElement(e,this.globalData,this)},CanvasRendererBase.prototype.createImage=function(e){return new CVImageElement(e,this.globalData,this)},CanvasRendererBase.prototype.createSolid=function(e){return new CVSolidElement(e,this.globalData,this)},CanvasRendererBase.prototype.createNull=SVGRenderer.prototype.createNull,CanvasRendererBase.prototype.ctxTransform=function(e){e[0]===1&&e[1]===0&&e[4]===0&&e[5]===1&&e[12]===0&&e[13]===0||this.canvasContext.transform(e[0],e[1],e[4],e[5],e[12],e[13])},CanvasRendererBase.prototype.ctxOpacity=function(e){this.canvasContext.globalAlpha*=e<0?0:e},CanvasRendererBase.prototype.ctxFillStyle=function(e){this.canvasContext.fillStyle=e},CanvasRendererBase.prototype.ctxStrokeStyle=function(e){this.canvasContext.strokeStyle=e},CanvasRendererBase.prototype.ctxLineWidth=function(e){this.canvasContext.lineWidth=e},CanvasRendererBase.prototype.ctxLineCap=function(e){this.canvasContext.lineCap=e},CanvasRendererBase.prototype.ctxLineJoin=function(e){this.canvasContext.lineJoin=e},CanvasRendererBase.prototype.ctxMiterLimit=function(e){this.canvasContext.miterLimit=e},CanvasRendererBase.prototype.ctxFill=function(e){this.canvasContext.fill(e)},CanvasRendererBase.prototype.ctxFillRect=function(e,a,i,s){this.canvasContext.fillRect(e,a,i,s)},CanvasRendererBase.prototype.ctxStroke=function(){this.canvasContext.stroke()},CanvasRendererBase.prototype.reset=function(){if(!this.renderConfig.clearCanvas){this.canvasContext.restore();return}this.contextData.reset()},CanvasRendererBase.prototype.save=function(){this.canvasContext.save()},CanvasRendererBase.prototype.restore=function(e){if(!this.renderConfig.clearCanvas){this.canvasContext.restore();return}e&&(this.globalData.blendMode="source-over"),this.contextData.restore(e)},CanvasRendererBase.prototype.configAnimation=function(e){if(this.animationItem.wrapper){this.animationItem.container=createTag("canvas");var a=this.animationItem.container.style;a.width="100%",a.height="100%";var i="0px 0px 0px";a.transformOrigin=i,a.mozTransformOrigin=i,a.webkitTransformOrigin=i,a["-webkit-transform"]=i,a.contentVisibility=this.renderConfig.contentVisibility,this.animationItem.wrapper.appendChild(this.animationItem.container),this.canvasContext=this.animationItem.container.getContext("2d"),this.renderConfig.className&&this.animationItem.container.setAttribute("class",this.renderConfig.className),this.renderConfig.id&&this.animationItem.container.setAttribute("id",this.renderConfig.id)}else this.canvasContext=this.renderConfig.context;this.contextData.setContext(this.canvasContext),this.data=e,this.layers=e.layers,this.transformCanvas={w:e.w,h:e.h,sx:0,sy:0,tx:0,ty:0},this.setupGlobalData(e,document.body),this.globalData.canvasContext=this.canvasContext,this.globalData.renderer=this,this.globalData.isDashed=!1,this.globalData.progressiveLoad=this.renderConfig.progressiveLoad,this.globalData.transformCanvas=this.transformCanvas,this.elements=createSizedArray(e.layers.length),this.updateContainerSize()},CanvasRendererBase.prototype.updateContainerSize=function(e,a){this.reset();var i,s;e?(i=e,s=a,this.canvasContext.canvas.width=i,this.canvasContext.canvas.height=s):(this.animationItem.wrapper&&this.animationItem.container?(i=this.animationItem.wrapper.offsetWidth,s=this.animationItem.wrapper.offsetHeight):(i=this.canvasContext.canvas.width,s=this.canvasContext.canvas.height),this.canvasContext.canvas.width=i*this.renderConfig.dpr,this.canvasContext.canvas.height=s*this.renderConfig.dpr);var o,c;if(this.renderConfig.preserveAspectRatio.indexOf("meet")!==-1||this.renderConfig.preserveAspectRatio.indexOf("slice")!==-1){var d=this.renderConfig.preserveAspectRatio.split(" "),b=d[1]||"meet",g=d[0]||"xMidYMid",_=g.substr(0,4),tt=g.substr(4);o=i/s,c=this.transformCanvas.w/this.transformCanvas.h,c>o&&b==="meet"||c<o&&b==="slice"?(this.transformCanvas.sx=i/(this.transformCanvas.w/this.renderConfig.dpr),this.transformCanvas.sy=i/(this.transformCanvas.w/this.renderConfig.dpr)):(this.transformCanvas.sx=s/(this.transformCanvas.h/this.renderConfig.dpr),this.transformCanvas.sy=s/(this.transformCanvas.h/this.renderConfig.dpr)),_==="xMid"&&(c<o&&b==="meet"||c>o&&b==="slice")?this.transformCanvas.tx=(i-this.transformCanvas.w*(s/this.transformCanvas.h))/2*this.renderConfig.dpr:_==="xMax"&&(c<o&&b==="meet"||c>o&&b==="slice")?this.transformCanvas.tx=(i-this.transformCanvas.w*(s/this.transformCanvas.h))*this.renderConfig.dpr:this.transformCanvas.tx=0,tt==="YMid"&&(c>o&&b==="meet"||c<o&&b==="slice")?this.transformCanvas.ty=(s-this.transformCanvas.h*(i/this.transformCanvas.w))/2*this.renderConfig.dpr:tt==="YMax"&&(c>o&&b==="meet"||c<o&&b==="slice")?this.transformCanvas.ty=(s-this.transformCanvas.h*(i/this.transformCanvas.w))*this.renderConfig.dpr:this.transformCanvas.ty=0}else this.renderConfig.preserveAspectRatio==="none"?(this.transformCanvas.sx=i/(this.transformCanvas.w/this.renderConfig.dpr),this.transformCanvas.sy=s/(this.transformCanvas.h/this.renderConfig.dpr),this.transformCanvas.tx=0,this.transformCanvas.ty=0):(this.transformCanvas.sx=this.renderConfig.dpr,this.transformCanvas.sy=this.renderConfig.dpr,this.transformCanvas.tx=0,this.transformCanvas.ty=0);this.transformCanvas.props=[this.transformCanvas.sx,0,0,0,0,this.transformCanvas.sy,0,0,0,0,1,0,this.transformCanvas.tx,this.transformCanvas.ty,0,1],this.ctxTransform(this.transformCanvas.props),this.canvasContext.beginPath(),this.canvasContext.rect(0,0,this.transformCanvas.w,this.transformCanvas.h),this.canvasContext.closePath(),this.canvasContext.clip(),this.renderFrame(this.renderedFrame,!0)},CanvasRendererBase.prototype.destroy=function(){this.renderConfig.clearCanvas&&this.animationItem.wrapper&&(this.animationItem.wrapper.innerText="");var e,a=this.layers?this.layers.length:0;for(e=a-1;e>=0;e-=1)this.elements[e]&&this.elements[e].destroy&&this.elements[e].destroy();this.elements.length=0,this.globalData.canvasContext=null,this.animationItem.container=null,this.destroyed=!0},CanvasRendererBase.prototype.renderFrame=function(e,a){if(!(this.renderedFrame===e&&this.renderConfig.clearCanvas===!0&&!a||this.destroyed||e===-1)){this.renderedFrame=e,this.globalData.frameNum=e-this.animationItem._isFirstFrame,this.globalData.frameId+=1,this.globalData._mdf=!this.renderConfig.clearCanvas||a,this.globalData.projectInterface.currentFrame=e;var i,s=this.layers.length;for(this.completeLayers||this.checkLayers(e),i=s-1;i>=0;i-=1)(this.completeLayers||this.elements[i])&&this.elements[i].prepareFrame(e-this.layers[i].st);if(this.globalData._mdf){for(this.renderConfig.clearCanvas===!0?this.canvasContext.clearRect(0,0,this.transformCanvas.w,this.transformCanvas.h):this.save(),i=s-1;i>=0;i-=1)(this.completeLayers||this.elements[i])&&this.elements[i].renderFrame();this.renderConfig.clearCanvas!==!0&&this.restore()}}},CanvasRendererBase.prototype.buildItem=function(e){var a=this.elements;if(!(a[e]||this.layers[e].ty===99)){var i=this.createItem(this.layers[e],this,this.globalData);a[e]=i,i.initExpressions()}},CanvasRendererBase.prototype.checkPendingElements=function(){for(;this.pendingElements.length;){var e=this.pendingElements.pop();e.checkParenting()}},CanvasRendererBase.prototype.hide=function(){this.animationItem.container.style.display="none"},CanvasRendererBase.prototype.show=function(){this.animationItem.container.style.display="block"};function CanvasContext(){this.opacity=-1,this.transform=createTypedArray("float32",16),this.fillStyle="",this.strokeStyle="",this.lineWidth="",this.lineCap="",this.lineJoin="",this.miterLimit="",this.id=Math.random()}function CVContextData(){this.stack=[],this.cArrPos=0,this.cTr=new Matrix;var e,a=15;for(e=0;e<a;e+=1){var i=new CanvasContext;this.stack[e]=i}this._length=a,this.nativeContext=null,this.transformMat=new Matrix,this.currentOpacity=1,this.currentFillStyle="",this.appliedFillStyle="",this.currentStrokeStyle="",this.appliedStrokeStyle="",this.currentLineWidth="",this.appliedLineWidth="",this.currentLineCap="",this.appliedLineCap="",this.currentLineJoin="",this.appliedLineJoin="",this.appliedMiterLimit="",this.currentMiterLimit=""}CVContextData.prototype.duplicate=function(){var e=this._length*2,a=0;for(a=this._length;a<e;a+=1)this.stack[a]=new CanvasContext;this._length=e},CVContextData.prototype.reset=function(){this.cArrPos=0,this.cTr.reset(),this.stack[this.cArrPos].opacity=1},CVContextData.prototype.restore=function(e){this.cArrPos-=1;var a=this.stack[this.cArrPos],i=a.transform,s,o=this.cTr.props;for(s=0;s<16;s+=1)o[s]=i[s];if(e){this.nativeContext.restore();var c=this.stack[this.cArrPos+1];this.appliedFillStyle=c.fillStyle,this.appliedStrokeStyle=c.strokeStyle,this.appliedLineWidth=c.lineWidth,this.appliedLineCap=c.lineCap,this.appliedLineJoin=c.lineJoin,this.appliedMiterLimit=c.miterLimit}this.nativeContext.setTransform(i[0],i[1],i[4],i[5],i[12],i[13]),(e||a.opacity!==-1&&this.currentOpacity!==a.opacity)&&(this.nativeContext.globalAlpha=a.opacity,this.currentOpacity=a.opacity),this.currentFillStyle=a.fillStyle,this.currentStrokeStyle=a.strokeStyle,this.currentLineWidth=a.lineWidth,this.currentLineCap=a.lineCap,this.currentLineJoin=a.lineJoin,this.currentMiterLimit=a.miterLimit},CVContextData.prototype.save=function(e){e&&this.nativeContext.save();var a=this.cTr.props;this._length<=this.cArrPos&&this.duplicate();var i=this.stack[this.cArrPos],s;for(s=0;s<16;s+=1)i.transform[s]=a[s];this.cArrPos+=1;var o=this.stack[this.cArrPos];o.opacity=i.opacity,o.fillStyle=i.fillStyle,o.strokeStyle=i.strokeStyle,o.lineWidth=i.lineWidth,o.lineCap=i.lineCap,o.lineJoin=i.lineJoin,o.miterLimit=i.miterLimit},CVContextData.prototype.setOpacity=function(e){this.stack[this.cArrPos].opacity=e},CVContextData.prototype.setContext=function(e){this.nativeContext=e},CVContextData.prototype.fillStyle=function(e){this.stack[this.cArrPos].fillStyle!==e&&(this.currentFillStyle=e,this.stack[this.cArrPos].fillStyle=e)},CVContextData.prototype.strokeStyle=function(e){this.stack[this.cArrPos].strokeStyle!==e&&(this.currentStrokeStyle=e,this.stack[this.cArrPos].strokeStyle=e)},CVContextData.prototype.lineWidth=function(e){this.stack[this.cArrPos].lineWidth!==e&&(this.currentLineWidth=e,this.stack[this.cArrPos].lineWidth=e)},CVContextData.prototype.lineCap=function(e){this.stack[this.cArrPos].lineCap!==e&&(this.currentLineCap=e,this.stack[this.cArrPos].lineCap=e)},CVContextData.prototype.lineJoin=function(e){this.stack[this.cArrPos].lineJoin!==e&&(this.currentLineJoin=e,this.stack[this.cArrPos].lineJoin=e)},CVContextData.prototype.miterLimit=function(e){this.stack[this.cArrPos].miterLimit!==e&&(this.currentMiterLimit=e,this.stack[this.cArrPos].miterLimit=e)},CVContextData.prototype.transform=function(e){this.transformMat.cloneFromProps(e);var a=this.cTr;this.transformMat.multiply(a),a.cloneFromProps(this.transformMat.props);var i=a.props;this.nativeContext.setTransform(i[0],i[1],i[4],i[5],i[12],i[13])},CVContextData.prototype.opacity=function(e){var a=this.stack[this.cArrPos].opacity;a*=e<0?0:e,this.stack[this.cArrPos].opacity!==a&&(this.currentOpacity!==e&&(this.nativeContext.globalAlpha=e,this.currentOpacity=e),this.stack[this.cArrPos].opacity=a)},CVContextData.prototype.fill=function(e){this.appliedFillStyle!==this.currentFillStyle&&(this.appliedFillStyle=this.currentFillStyle,this.nativeContext.fillStyle=this.appliedFillStyle),this.nativeContext.fill(e)},CVContextData.prototype.fillRect=function(e,a,i,s){this.appliedFillStyle!==this.currentFillStyle&&(this.appliedFillStyle=this.currentFillStyle,this.nativeContext.fillStyle=this.appliedFillStyle),this.nativeContext.fillRect(e,a,i,s)},CVContextData.prototype.stroke=function(){this.appliedStrokeStyle!==this.currentStrokeStyle&&(this.appliedStrokeStyle=this.currentStrokeStyle,this.nativeContext.strokeStyle=this.appliedStrokeStyle),this.appliedLineWidth!==this.currentLineWidth&&(this.appliedLineWidth=this.currentLineWidth,this.nativeContext.lineWidth=this.appliedLineWidth),this.appliedLineCap!==this.currentLineCap&&(this.appliedLineCap=this.currentLineCap,this.nativeContext.lineCap=this.appliedLineCap),this.appliedLineJoin!==this.currentLineJoin&&(this.appliedLineJoin=this.currentLineJoin,this.nativeContext.lineJoin=this.appliedLineJoin),this.appliedMiterLimit!==this.currentMiterLimit&&(this.appliedMiterLimit=this.currentMiterLimit,this.nativeContext.miterLimit=this.appliedMiterLimit),this.nativeContext.stroke()};function CVCompElement(e,a,i){this.completeLayers=!1,this.layers=e.layers,this.pendingElements=[],this.elements=createSizedArray(this.layers.length),this.initElement(e,a,i),this.tm=e.tm?PropertyFactory.getProp(this,e.tm,0,a.frameRate,this):{_placeholder:!0}}extendPrototype([CanvasRendererBase,ICompElement,CVBaseElement],CVCompElement),CVCompElement.prototype.renderInnerContent=function(){var e=this.canvasContext;e.beginPath(),e.moveTo(0,0),e.lineTo(this.data.w,0),e.lineTo(this.data.w,this.data.h),e.lineTo(0,this.data.h),e.lineTo(0,0),e.clip();var a,i=this.layers.length;for(a=i-1;a>=0;a-=1)(this.completeLayers||this.elements[a])&&this.elements[a].renderFrame()},CVCompElement.prototype.destroy=function(){var e,a=this.layers.length;for(e=a-1;e>=0;e-=1)this.elements[e]&&this.elements[e].destroy();this.layers=null,this.elements=null},CVCompElement.prototype.createComp=function(e){return new CVCompElement(e,this.globalData,this)};function CanvasRenderer(e,a){this.animationItem=e,this.renderConfig={clearCanvas:a&&a.clearCanvas!==void 0?a.clearCanvas:!0,context:a&&a.context||null,progressiveLoad:a&&a.progressiveLoad||!1,preserveAspectRatio:a&&a.preserveAspectRatio||"xMidYMid meet",imagePreserveAspectRatio:a&&a.imagePreserveAspectRatio||"xMidYMid slice",contentVisibility:a&&a.contentVisibility||"visible",className:a&&a.className||"",id:a&&a.id||"",runExpressions:!a||a.runExpressions===void 0||a.runExpressions},this.renderConfig.dpr=a&&a.dpr||1,this.animationItem.wrapper&&(this.renderConfig.dpr=a&&a.dpr||window.devicePixelRatio||1),this.renderedFrame=-1,this.globalData={frameNum:-1,_mdf:!1,renderConfig:this.renderConfig,currentGlobalAlpha:-1},this.contextData=new CVContextData,this.elements=[],this.pendingElements=[],this.transformMat=new Matrix,this.completeLayers=!1,this.rendererType="canvas",this.renderConfig.clearCanvas&&(this.ctxTransform=this.contextData.transform.bind(this.contextData),this.ctxOpacity=this.contextData.opacity.bind(this.contextData),this.ctxFillStyle=this.contextData.fillStyle.bind(this.contextData),this.ctxStrokeStyle=this.contextData.strokeStyle.bind(this.contextData),this.ctxLineWidth=this.contextData.lineWidth.bind(this.contextData),this.ctxLineCap=this.contextData.lineCap.bind(this.contextData),this.ctxLineJoin=this.contextData.lineJoin.bind(this.contextData),this.ctxMiterLimit=this.contextData.miterLimit.bind(this.contextData),this.ctxFill=this.contextData.fill.bind(this.contextData),this.ctxFillRect=this.contextData.fillRect.bind(this.contextData),this.ctxStroke=this.contextData.stroke.bind(this.contextData),this.save=this.contextData.save.bind(this.contextData))}extendPrototype([CanvasRendererBase],CanvasRenderer),CanvasRenderer.prototype.createComp=function(e){return new CVCompElement(e,this.globalData,this)};function HBaseElement(){}HBaseElement.prototype={checkBlendMode:function(){},initRendererElement:function(){this.baseElement=createTag(this.data.tg||"div"),this.data.hasMask?(this.svgElement=createNS("svg"),this.layerElement=createNS("g"),this.maskedElement=this.layerElement,this.svgElement.appendChild(this.layerElement),this.baseElement.appendChild(this.svgElement)):this.layerElement=this.baseElement,styleDiv(this.baseElement)},createContainerElements:function(){this.renderableEffectsManager=new CVEffects(this),this.transformedElement=this.baseElement,this.maskedElement=this.layerElement,this.data.ln&&this.layerElement.setAttribute("id",this.data.ln),this.data.cl&&this.layerElement.setAttribute("class",this.data.cl),this.data.bm!==0&&this.setBlendMode()},renderElement:function(){var a=this.transformedElement?this.transformedElement.style:{};if(this.finalTransform._matMdf){var i=this.finalTransform.mat.toCSS();a.transform=i,a.webkitTransform=i}this.finalTransform._opMdf&&(a.opacity=this.finalTransform.mProp.o.v)},renderFrame:function(){this.data.hd||this.hidden||(this.renderTransform(),this.renderRenderable(),this.renderElement(),this.renderInnerContent(),this._isFirstFrame&&(this._isFirstFrame=!1))},destroy:function(){this.layerElement=null,this.transformedElement=null,this.matteElement&&(this.matteElement=null),this.maskManager&&(this.maskManager.destroy(),this.maskManager=null)},createRenderableComponents:function(){this.maskManager=new MaskElement(this.data,this,this.globalData)},addEffects:function(){},setMatte:function(){}},HBaseElement.prototype.getBaseElement=SVGBaseElement.prototype.getBaseElement,HBaseElement.prototype.destroyBaseElement=HBaseElement.prototype.destroy,HBaseElement.prototype.buildElementParenting=BaseRenderer.prototype.buildElementParenting;function HSolidElement(e,a,i){this.initElement(e,a,i)}extendPrototype([BaseElement,TransformElement,HBaseElement,HierarchyElement,FrameElement,RenderableDOMElement],HSolidElement),HSolidElement.prototype.createContent=function(){var e;this.data.hasMask?(e=createNS("rect"),e.setAttribute("width",this.data.sw),e.setAttribute("height",this.data.sh),e.setAttribute("fill",this.data.sc),this.svgElement.setAttribute("width",this.data.sw),this.svgElement.setAttribute("height",this.data.sh)):(e=createTag("div"),e.style.width=this.data.sw+"px",e.style.height=this.data.sh+"px",e.style.backgroundColor=this.data.sc),this.layerElement.appendChild(e)};function HShapeElement(e,a,i){this.shapes=[],this.shapesData=e.shapes,this.stylesList=[],this.shapeModifiers=[],this.itemsData=[],this.processedElements=[],this.animatedContents=[],this.shapesContainer=createNS("g"),this.initElement(e,a,i),this.prevViewData=[],this.currentBBox={x:999999,y:-999999,h:0,w:0}}extendPrototype([BaseElement,TransformElement,HSolidElement,SVGShapeElement,HBaseElement,HierarchyElement,FrameElement,RenderableElement],HShapeElement),HShapeElement.prototype._renderShapeFrame=HShapeElement.prototype.renderInnerContent,HShapeElement.prototype.createContent=function(){var e;if(this.baseElement.style.fontSize=0,this.data.hasMask)this.layerElement.appendChild(this.shapesContainer),e=this.svgElement;else{e=createNS("svg");var a=this.comp.data?this.comp.data:this.globalData.compSize;e.setAttribute("width",a.w),e.setAttribute("height",a.h),e.appendChild(this.shapesContainer),this.layerElement.appendChild(e)}this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.shapesContainer,0,[],!0),this.filterUniqueShapes(),this.shapeCont=e},HShapeElement.prototype.getTransformedPoint=function(e,a){var i,s=e.length;for(i=0;i<s;i+=1)a=e[i].mProps.v.applyToPointArray(a[0],a[1],0);return a},HShapeElement.prototype.calculateShapeBoundingBox=function(e,a){var i=e.sh.v,s=e.transformers,o,c=i._length,d,b,g,_;if(!(c<=1)){for(o=0;o<c-1;o+=1)d=this.getTransformedPoint(s,i.v[o]),b=this.getTransformedPoint(s,i.o[o]),g=this.getTransformedPoint(s,i.i[o+1]),_=this.getTransformedPoint(s,i.v[o+1]),this.checkBounds(d,b,g,_,a);i.c&&(d=this.getTransformedPoint(s,i.v[o]),b=this.getTransformedPoint(s,i.o[o]),g=this.getTransformedPoint(s,i.i[0]),_=this.getTransformedPoint(s,i.v[0]),this.checkBounds(d,b,g,_,a))}},HShapeElement.prototype.checkBounds=function(e,a,i,s,o){this.getBoundsOfCurve(e,a,i,s);var c=this.shapeBoundingBox;o.x=bmMin(c.left,o.x),o.xMax=bmMax(c.right,o.xMax),o.y=bmMin(c.top,o.y),o.yMax=bmMax(c.bottom,o.yMax)},HShapeElement.prototype.shapeBoundingBox={left:0,right:0,top:0,bottom:0},HShapeElement.prototype.tempBoundingBox={x:0,xMax:0,y:0,yMax:0,width:0,height:0},HShapeElement.prototype.getBoundsOfCurve=function(e,a,i,s){for(var o=[[e[0],s[0]],[e[1],s[1]]],c,d,b,g,_,tt,it,et=0;et<2;++et)d=6*e[et]-12*a[et]+6*i[et],c=-3*e[et]+9*a[et]-9*i[et]+3*s[et],b=3*a[et]-3*e[et],d|=0,c|=0,b|=0,c===0&&d===0||(c===0?(g=-b/d,g>0&&g<1&&o[et].push(this.calculateF(g,e,a,i,s,et))):(_=d*d-4*b*c,_>=0&&(tt=(-d+bmSqrt(_))/(2*c),tt>0&&tt<1&&o[et].push(this.calculateF(tt,e,a,i,s,et)),it=(-d-bmSqrt(_))/(2*c),it>0&&it<1&&o[et].push(this.calculateF(it,e,a,i,s,et)))));this.shapeBoundingBox.left=bmMin.apply(null,o[0]),this.shapeBoundingBox.top=bmMin.apply(null,o[1]),this.shapeBoundingBox.right=bmMax.apply(null,o[0]),this.shapeBoundingBox.bottom=bmMax.apply(null,o[1])},HShapeElement.prototype.calculateF=function(e,a,i,s,o,c){return bmPow(1-e,3)*a[c]+3*bmPow(1-e,2)*e*i[c]+3*(1-e)*bmPow(e,2)*s[c]+bmPow(e,3)*o[c]},HShapeElement.prototype.calculateBoundingBox=function(e,a){var i,s=e.length;for(i=0;i<s;i+=1)e[i]&&e[i].sh?this.calculateShapeBoundingBox(e[i],a):e[i]&&e[i].it?this.calculateBoundingBox(e[i].it,a):e[i]&&e[i].style&&e[i].w&&this.expandStrokeBoundingBox(e[i].w,a)},HShapeElement.prototype.expandStrokeBoundingBox=function(e,a){var i=0;if(e.keyframes){for(var s=0;s<e.keyframes.length;s+=1){var o=e.keyframes[s].s;o>i&&(i=o)}i*=e.mult}else i=e.v*e.mult;a.x-=i,a.xMax+=i,a.y-=i,a.yMax+=i},HShapeElement.prototype.currentBoxContains=function(e){return this.currentBBox.x<=e.x&&this.currentBBox.y<=e.y&&this.currentBBox.width+this.currentBBox.x>=e.x+e.width&&this.currentBBox.height+this.currentBBox.y>=e.y+e.height},HShapeElement.prototype.renderInnerContent=function(){if(this._renderShapeFrame(),!this.hidden&&(this._isFirstFrame||this._mdf)){var e=this.tempBoundingBox,a=999999;if(e.x=a,e.xMax=-a,e.y=a,e.yMax=-a,this.calculateBoundingBox(this.itemsData,e),e.width=e.xMax<e.x?0:e.xMax-e.x,e.height=e.yMax<e.y?0:e.yMax-e.y,this.currentBoxContains(e))return;var i=!1;if(this.currentBBox.w!==e.width&&(this.currentBBox.w=e.width,this.shapeCont.setAttribute("width",e.width),i=!0),this.currentBBox.h!==e.height&&(this.currentBBox.h=e.height,this.shapeCont.setAttribute("height",e.height),i=!0),i||this.currentBBox.x!==e.x||this.currentBBox.y!==e.y){this.currentBBox.w=e.width,this.currentBBox.h=e.height,this.currentBBox.x=e.x,this.currentBBox.y=e.y,this.shapeCont.setAttribute("viewBox",this.currentBBox.x+" "+this.currentBBox.y+" "+this.currentBBox.w+" "+this.currentBBox.h);var s=this.shapeCont.style,o="translate("+this.currentBBox.x+"px,"+this.currentBBox.y+"px)";s.transform=o,s.webkitTransform=o}}};function HTextElement(e,a,i){this.textSpans=[],this.textPaths=[],this.currentBBox={x:999999,y:-999999,h:0,w:0},this.renderType="svg",this.isMasked=!1,this.initElement(e,a,i)}extendPrototype([BaseElement,TransformElement,HBaseElement,HierarchyElement,FrameElement,RenderableDOMElement,ITextElement],HTextElement),HTextElement.prototype.createContent=function(){if(this.isMasked=this.checkMasks(),this.isMasked){this.renderType="svg",this.compW=this.comp.data.w,this.compH=this.comp.data.h,this.svgElement.setAttribute("width",this.compW),this.svgElement.setAttribute("height",this.compH);var e=createNS("g");this.maskedElement.appendChild(e),this.innerElem=e}else this.renderType="html",this.innerElem=this.layerElement;this.checkParenting()},HTextElement.prototype.buildNewText=function(){var e=this.textProperty.currentData;this.renderedLetters=createSizedArray(e.l?e.l.length:0);var a=this.innerElem.style,i=e.fc?this.buildColor(e.fc):"rgba(0,0,0,0)";a.fill=i,a.color=i,e.sc&&(a.stroke=this.buildColor(e.sc),a.strokeWidth=e.sw+"px");var s=this.globalData.fontManager.getFontByName(e.f);if(!this.globalData.fontManager.chars)if(a.fontSize=e.finalSize+"px",a.lineHeight=e.finalSize+"px",s.fClass)this.innerElem.className=s.fClass;else{a.fontFamily=s.fFamily;var o=e.fWeight,c=e.fStyle;a.fontStyle=c,a.fontWeight=o}var d,b,g=e.l;b=g.length;var _,tt,it,et=this.mHelper,st,nt="",rt=0;for(d=0;d<b;d+=1){if(this.globalData.fontManager.chars?(this.textPaths[rt]?_=this.textPaths[rt]:(_=createNS("path"),_.setAttribute("stroke-linecap",lineCapEnum[1]),_.setAttribute("stroke-linejoin",lineJoinEnum[2]),_.setAttribute("stroke-miterlimit","4")),this.isMasked||(this.textSpans[rt]?(tt=this.textSpans[rt],it=tt.children[0]):(tt=createTag("div"),tt.style.lineHeight=0,it=createNS("svg"),it.appendChild(_),styleDiv(tt)))):this.isMasked?_=this.textPaths[rt]?this.textPaths[rt]:createNS("text"):this.textSpans[rt]?(tt=this.textSpans[rt],_=this.textPaths[rt]):(tt=createTag("span"),styleDiv(tt),_=createTag("span"),styleDiv(_),tt.appendChild(_)),this.globalData.fontManager.chars){var ht=this.globalData.fontManager.getCharData(e.finalText[d],s.fStyle,this.globalData.fontManager.getFontByName(e.f).fFamily),$;if(ht?$=ht.data:$=null,et.reset(),$&&$.shapes&&$.shapes.length&&(st=$.shapes[0].it,et.scale(e.finalSize/100,e.finalSize/100),nt=this.createPathShape(et,st),_.setAttribute("d",nt)),this.isMasked)this.innerElem.appendChild(_);else{if(this.innerElem.appendChild(tt),$&&$.shapes){document.body.appendChild(it);var _e=it.getBBox();it.setAttribute("width",_e.width+2),it.setAttribute("height",_e.height+2),it.setAttribute("viewBox",_e.x-1+" "+(_e.y-1)+" "+(_e.width+2)+" "+(_e.height+2));var j=it.style,at="translate("+(_e.x-1)+"px,"+(_e.y-1)+"px)";j.transform=at,j.webkitTransform=at,g[d].yOffset=_e.y-1}else it.setAttribute("width",1),it.setAttribute("height",1);tt.appendChild(it)}}else if(_.textContent=g[d].val,_.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),this.isMasked)this.innerElem.appendChild(_);else{this.innerElem.appendChild(tt);var lt=_.style,pt="translate3d(0,"+-e.finalSize/1.2+"px,0)";lt.transform=pt,lt.webkitTransform=pt}this.isMasked?this.textSpans[rt]=_:this.textSpans[rt]=tt,this.textSpans[rt].style.display="block",this.textPaths[rt]=_,rt+=1}for(;rt<this.textSpans.length;)this.textSpans[rt].style.display="none",rt+=1},HTextElement.prototype.renderInnerContent=function(){this.validateText();var e;if(this.data.singleShape){if(!this._isFirstFrame&&!this.lettersChangedFlag)return;if(this.isMasked&&this.finalTransform._matMdf){this.svgElement.setAttribute("viewBox",-this.finalTransform.mProp.p.v[0]+" "+-this.finalTransform.mProp.p.v[1]+" "+this.compW+" "+this.compH),e=this.svgElement.style;var a="translate("+-this.finalTransform.mProp.p.v[0]+"px,"+-this.finalTransform.mProp.p.v[1]+"px)";e.transform=a,e.webkitTransform=a}}if(this.textAnimator.getMeasures(this.textProperty.currentData,this.lettersChangedFlag),!(!this.lettersChangedFlag&&!this.textAnimator.lettersChangedFlag)){var i,s,o=0,c=this.textAnimator.renderedLetters,d=this.textProperty.currentData.l;s=d.length;var b,g,_;for(i=0;i<s;i+=1)d[i].n?o+=1:(g=this.textSpans[i],_=this.textPaths[i],b=c[o],o+=1,b._mdf.m&&(this.isMasked?g.setAttribute("transform",b.m):(g.style.webkitTransform=b.m,g.style.transform=b.m)),g.style.opacity=b.o,b.sw&&b._mdf.sw&&_.setAttribute("stroke-width",b.sw),b.sc&&b._mdf.sc&&_.setAttribute("stroke",b.sc),b.fc&&b._mdf.fc&&(_.setAttribute("fill",b.fc),_.style.color=b.fc));if(this.innerElem.getBBox&&!this.hidden&&(this._isFirstFrame||this._mdf)){var tt=this.innerElem.getBBox();this.currentBBox.w!==tt.width&&(this.currentBBox.w=tt.width,this.svgElement.setAttribute("width",tt.width)),this.currentBBox.h!==tt.height&&(this.currentBBox.h=tt.height,this.svgElement.setAttribute("height",tt.height));var it=1;if(this.currentBBox.w!==tt.width+it*2||this.currentBBox.h!==tt.height+it*2||this.currentBBox.x!==tt.x-it||this.currentBBox.y!==tt.y-it){this.currentBBox.w=tt.width+it*2,this.currentBBox.h=tt.height+it*2,this.currentBBox.x=tt.x-it,this.currentBBox.y=tt.y-it,this.svgElement.setAttribute("viewBox",this.currentBBox.x+" "+this.currentBBox.y+" "+this.currentBBox.w+" "+this.currentBBox.h),e=this.svgElement.style;var et="translate("+this.currentBBox.x+"px,"+this.currentBBox.y+"px)";e.transform=et,e.webkitTransform=et}}}};function HCameraElement(e,a,i){this.initFrame(),this.initBaseData(e,a,i),this.initHierarchy();var s=PropertyFactory.getProp;if(this.pe=s(this,e.pe,0,0,this),e.ks.p.s?(this.px=s(this,e.ks.p.x,1,0,this),this.py=s(this,e.ks.p.y,1,0,this),this.pz=s(this,e.ks.p.z,1,0,this)):this.p=s(this,e.ks.p,1,0,this),e.ks.a&&(this.a=s(this,e.ks.a,1,0,this)),e.ks.or.k.length&&e.ks.or.k[0].to){var o,c=e.ks.or.k.length;for(o=0;o<c;o+=1)e.ks.or.k[o].to=null,e.ks.or.k[o].ti=null}this.or=s(this,e.ks.or,1,degToRads,this),this.or.sh=!0,this.rx=s(this,e.ks.rx,0,degToRads,this),this.ry=s(this,e.ks.ry,0,degToRads,this),this.rz=s(this,e.ks.rz,0,degToRads,this),this.mat=new Matrix,this._prevMat=new Matrix,this._isFirstFrame=!0,this.finalTransform={mProp:this}}extendPrototype([BaseElement,FrameElement,HierarchyElement],HCameraElement),HCameraElement.prototype.setup=function(){var e,a=this.comp.threeDElements.length,i,s,o;for(e=0;e<a;e+=1)if(i=this.comp.threeDElements[e],i.type==="3d"){s=i.perspectiveElem.style,o=i.container.style;var c=this.pe.v+"px",d="0px 0px 0px",b="matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";s.perspective=c,s.webkitPerspective=c,o.transformOrigin=d,o.mozTransformOrigin=d,o.webkitTransformOrigin=d,s.transform=b,s.webkitTransform=b}},HCameraElement.prototype.createElements=function(){},HCameraElement.prototype.hide=function(){},HCameraElement.prototype.renderFrame=function(){var e=this._isFirstFrame,a,i;if(this.hierarchy)for(i=this.hierarchy.length,a=0;a<i;a+=1)e=this.hierarchy[a].finalTransform.mProp._mdf||e;if(e||this.pe._mdf||this.p&&this.p._mdf||this.px&&(this.px._mdf||this.py._mdf||this.pz._mdf)||this.rx._mdf||this.ry._mdf||this.rz._mdf||this.or._mdf||this.a&&this.a._mdf){if(this.mat.reset(),this.hierarchy)for(i=this.hierarchy.length-1,a=i;a>=0;a-=1){var s=this.hierarchy[a].finalTransform.mProp;this.mat.translate(-s.p.v[0],-s.p.v[1],s.p.v[2]),this.mat.rotateX(-s.or.v[0]).rotateY(-s.or.v[1]).rotateZ(s.or.v[2]),this.mat.rotateX(-s.rx.v).rotateY(-s.ry.v).rotateZ(s.rz.v),this.mat.scale(1/s.s.v[0],1/s.s.v[1],1/s.s.v[2]),this.mat.translate(s.a.v[0],s.a.v[1],s.a.v[2])}if(this.p?this.mat.translate(-this.p.v[0],-this.p.v[1],this.p.v[2]):this.mat.translate(-this.px.v,-this.py.v,this.pz.v),this.a){var o;this.p?o=[this.p.v[0]-this.a.v[0],this.p.v[1]-this.a.v[1],this.p.v[2]-this.a.v[2]]:o=[this.px.v-this.a.v[0],this.py.v-this.a.v[1],this.pz.v-this.a.v[2]];var c=Math.sqrt(Math.pow(o[0],2)+Math.pow(o[1],2)+Math.pow(o[2],2)),d=[o[0]/c,o[1]/c,o[2]/c],b=Math.sqrt(d[2]*d[2]+d[0]*d[0]),g=Math.atan2(d[1],b),_=Math.atan2(d[0],-d[2]);this.mat.rotateY(_).rotateX(-g)}this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v),this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]),this.mat.translate(this.globalData.compSize.w/2,this.globalData.compSize.h/2,0),this.mat.translate(0,0,this.pe.v);var tt=!this._prevMat.equals(this.mat);if((tt||this.pe._mdf)&&this.comp.threeDElements){i=this.comp.threeDElements.length;var it,et,st;for(a=0;a<i;a+=1)if(it=this.comp.threeDElements[a],it.type==="3d"){if(tt){var nt=this.mat.toCSS();st=it.container.style,st.transform=nt,st.webkitTransform=nt}this.pe._mdf&&(et=it.perspectiveElem.style,et.perspective=this.pe.v+"px",et.webkitPerspective=this.pe.v+"px")}this.mat.clone(this._prevMat)}}this._isFirstFrame=!1},HCameraElement.prototype.prepareFrame=function(e){this.prepareProperties(e,!0)},HCameraElement.prototype.destroy=function(){},HCameraElement.prototype.getBaseElement=function(){return null};function HImageElement(e,a,i){this.assetData=a.getAssetData(e.refId),this.initElement(e,a,i)}extendPrototype([BaseElement,TransformElement,HBaseElement,HSolidElement,HierarchyElement,FrameElement,RenderableElement],HImageElement),HImageElement.prototype.createContent=function(){var e=this.globalData.getAssetsPath(this.assetData),a=new Image;this.data.hasMask?(this.imageElem=createNS("image"),this.imageElem.setAttribute("width",this.assetData.w+"px"),this.imageElem.setAttribute("height",this.assetData.h+"px"),this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink","href",e),this.layerElement.appendChild(this.imageElem),this.baseElement.setAttribute("width",this.assetData.w),this.baseElement.setAttribute("height",this.assetData.h)):this.layerElement.appendChild(a),a.crossOrigin="anonymous",a.src=e,this.data.ln&&this.baseElement.setAttribute("id",this.data.ln)};function HybridRendererBase(e,a){this.animationItem=e,this.layers=null,this.renderedFrame=-1,this.renderConfig={className:a&&a.className||"",imagePreserveAspectRatio:a&&a.imagePreserveAspectRatio||"xMidYMid slice",hideOnTransparent:!(a&&a.hideOnTransparent===!1),filterSize:{width:a&&a.filterSize&&a.filterSize.width||"400%",height:a&&a.filterSize&&a.filterSize.height||"400%",x:a&&a.filterSize&&a.filterSize.x||"-100%",y:a&&a.filterSize&&a.filterSize.y||"-100%"}},this.globalData={_mdf:!1,frameNum:-1,renderConfig:this.renderConfig},this.pendingElements=[],this.elements=[],this.threeDElements=[],this.destroyed=!1,this.camera=null,this.supports3d=!0,this.rendererType="html"}extendPrototype([BaseRenderer],HybridRendererBase),HybridRendererBase.prototype.buildItem=SVGRenderer.prototype.buildItem,HybridRendererBase.prototype.checkPendingElements=function(){for(;this.pendingElements.length;){var e=this.pendingElements.pop();e.checkParenting()}},HybridRendererBase.prototype.appendElementInPos=function(e,a){var i=e.getBaseElement();if(i){var s=this.layers[a];if(!s.ddd||!this.supports3d)if(this.threeDElements)this.addTo3dContainer(i,a);else{for(var o=0,c,d,b;o<a;)this.elements[o]&&this.elements[o]!==!0&&this.elements[o].getBaseElement&&(d=this.elements[o],b=this.layers[o].ddd?this.getThreeDContainerByPos(o):d.getBaseElement(),c=b||c),o+=1;c?(!s.ddd||!this.supports3d)&&this.layerElement.insertBefore(i,c):(!s.ddd||!this.supports3d)&&this.layerElement.appendChild(i)}else this.addTo3dContainer(i,a)}},HybridRendererBase.prototype.createShape=function(e){return this.supports3d?new HShapeElement(e,this.globalData,this):new SVGShapeElement(e,this.globalData,this)},HybridRendererBase.prototype.createText=function(e){return this.supports3d?new HTextElement(e,this.globalData,this):new SVGTextLottieElement(e,this.globalData,this)},HybridRendererBase.prototype.createCamera=function(e){return this.camera=new HCameraElement(e,this.globalData,this),this.camera},HybridRendererBase.prototype.createImage=function(e){return this.supports3d?new HImageElement(e,this.globalData,this):new IImageElement(e,this.globalData,this)},HybridRendererBase.prototype.createSolid=function(e){return this.supports3d?new HSolidElement(e,this.globalData,this):new ISolidElement(e,this.globalData,this)},HybridRendererBase.prototype.createNull=SVGRenderer.prototype.createNull,HybridRendererBase.prototype.getThreeDContainerByPos=function(e){for(var a=0,i=this.threeDElements.length;a<i;){if(this.threeDElements[a].startPos<=e&&this.threeDElements[a].endPos>=e)return this.threeDElements[a].perspectiveElem;a+=1}return null},HybridRendererBase.prototype.createThreeDContainer=function(e,a){var i=createTag("div"),s,o;styleDiv(i);var c=createTag("div");if(styleDiv(c),a==="3d"){s=i.style,s.width=this.globalData.compSize.w+"px",s.height=this.globalData.compSize.h+"px";var d="50% 50%";s.webkitTransformOrigin=d,s.mozTransformOrigin=d,s.transformOrigin=d,o=c.style;var b="matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";o.transform=b,o.webkitTransform=b}i.appendChild(c);var g={container:c,perspectiveElem:i,startPos:e,endPos:e,type:a};return this.threeDElements.push(g),g},HybridRendererBase.prototype.build3dContainers=function(){var e,a=this.layers.length,i,s="";for(e=0;e<a;e+=1)this.layers[e].ddd&&this.layers[e].ty!==3?(s!=="3d"&&(s="3d",i=this.createThreeDContainer(e,"3d")),i.endPos=Math.max(i.endPos,e)):(s!=="2d"&&(s="2d",i=this.createThreeDContainer(e,"2d")),i.endPos=Math.max(i.endPos,e));for(a=this.threeDElements.length,e=a-1;e>=0;e-=1)this.resizerElem.appendChild(this.threeDElements[e].perspectiveElem)},HybridRendererBase.prototype.addTo3dContainer=function(e,a){for(var i=0,s=this.threeDElements.length;i<s;){if(a<=this.threeDElements[i].endPos){for(var o=this.threeDElements[i].startPos,c;o<a;)this.elements[o]&&this.elements[o].getBaseElement&&(c=this.elements[o].getBaseElement()),o+=1;c?this.threeDElements[i].container.insertBefore(e,c):this.threeDElements[i].container.appendChild(e);break}i+=1}},HybridRendererBase.prototype.configAnimation=function(e){var a=createTag("div"),i=this.animationItem.wrapper,s=a.style;s.width=e.w+"px",s.height=e.h+"px",this.resizerElem=a,styleDiv(a),s.transformStyle="flat",s.mozTransformStyle="flat",s.webkitTransformStyle="flat",this.renderConfig.className&&a.setAttribute("class",this.renderConfig.className),i.appendChild(a),s.overflow="hidden";var o=createNS("svg");o.setAttribute("width","1"),o.setAttribute("height","1"),styleDiv(o),this.resizerElem.appendChild(o);var c=createNS("defs");o.appendChild(c),this.data=e,this.setupGlobalData(e,o),this.globalData.defs=c,this.layers=e.layers,this.layerElement=this.resizerElem,this.build3dContainers(),this.updateContainerSize()},HybridRendererBase.prototype.destroy=function(){this.animationItem.wrapper&&(this.animationItem.wrapper.innerText=""),this.animationItem.container=null,this.globalData.defs=null;var e,a=this.layers?this.layers.length:0;for(e=0;e<a;e+=1)this.elements[e]&&this.elements[e].destroy&&this.elements[e].destroy();this.elements.length=0,this.destroyed=!0,this.animationItem=null},HybridRendererBase.prototype.updateContainerSize=function(){var e=this.animationItem.wrapper.offsetWidth,a=this.animationItem.wrapper.offsetHeight,i=e/a,s=this.globalData.compSize.w/this.globalData.compSize.h,o,c,d,b;s>i?(o=e/this.globalData.compSize.w,c=e/this.globalData.compSize.w,d=0,b=(a-this.globalData.compSize.h*(e/this.globalData.compSize.w))/2):(o=a/this.globalData.compSize.h,c=a/this.globalData.compSize.h,d=(e-this.globalData.compSize.w*(a/this.globalData.compSize.h))/2,b=0);var g=this.resizerElem.style;g.webkitTransform="matrix3d("+o+",0,0,0,0,"+c+",0,0,0,0,1,0,"+d+","+b+",0,1)",g.transform=g.webkitTransform},HybridRendererBase.prototype.renderFrame=SVGRenderer.prototype.renderFrame,HybridRendererBase.prototype.hide=function(){this.resizerElem.style.display="none"},HybridRendererBase.prototype.show=function(){this.resizerElem.style.display="block"},HybridRendererBase.prototype.initItems=function(){if(this.buildAllItems(),this.camera)this.camera.setup();else{var e=this.globalData.compSize.w,a=this.globalData.compSize.h,i,s=this.threeDElements.length;for(i=0;i<s;i+=1){var o=this.threeDElements[i].perspectiveElem.style;o.webkitPerspective=Math.sqrt(Math.pow(e,2)+Math.pow(a,2))+"px",o.perspective=o.webkitPerspective}}},HybridRendererBase.prototype.searchExtraCompositions=function(e){var a,i=e.length,s=createTag("div");for(a=0;a<i;a+=1)if(e[a].xt){var o=this.createComp(e[a],s,this.globalData.comp,null);o.initExpressions(),this.globalData.projectInterface.registerComposition(o)}};function HCompElement(e,a,i){this.layers=e.layers,this.supports3d=!e.hasMask,this.completeLayers=!1,this.pendingElements=[],this.elements=this.layers?createSizedArray(this.layers.length):[],this.initElement(e,a,i),this.tm=e.tm?PropertyFactory.getProp(this,e.tm,0,a.frameRate,this):{_placeholder:!0}}extendPrototype([HybridRendererBase,ICompElement,HBaseElement],HCompElement),HCompElement.prototype._createBaseContainerElements=HCompElement.prototype.createContainerElements,HCompElement.prototype.createContainerElements=function(){this._createBaseContainerElements(),this.data.hasMask?(this.svgElement.setAttribute("width",this.data.w),this.svgElement.setAttribute("height",this.data.h),this.transformedElement=this.baseElement):this.transformedElement=this.layerElement},HCompElement.prototype.addTo3dContainer=function(e,a){for(var i=0,s;i<a;)this.elements[i]&&this.elements[i].getBaseElement&&(s=this.elements[i].getBaseElement()),i+=1;s?this.layerElement.insertBefore(e,s):this.layerElement.appendChild(e)},HCompElement.prototype.createComp=function(e){return this.supports3d?new HCompElement(e,this.globalData,this):new SVGCompElement(e,this.globalData,this)};function HybridRenderer(e,a){this.animationItem=e,this.layers=null,this.renderedFrame=-1,this.renderConfig={className:a&&a.className||"",imagePreserveAspectRatio:a&&a.imagePreserveAspectRatio||"xMidYMid slice",hideOnTransparent:!(a&&a.hideOnTransparent===!1),filterSize:{width:a&&a.filterSize&&a.filterSize.width||"400%",height:a&&a.filterSize&&a.filterSize.height||"400%",x:a&&a.filterSize&&a.filterSize.x||"-100%",y:a&&a.filterSize&&a.filterSize.y||"-100%"},runExpressions:!a||a.runExpressions===void 0||a.runExpressions},this.globalData={_mdf:!1,frameNum:-1,renderConfig:this.renderConfig},this.pendingElements=[],this.elements=[],this.threeDElements=[],this.destroyed=!1,this.camera=null,this.supports3d=!0,this.rendererType="html"}extendPrototype([HybridRendererBase],HybridRenderer),HybridRenderer.prototype.createComp=function(e){return this.supports3d?new HCompElement(e,this.globalData,this):new SVGCompElement(e,this.globalData,this)};var CompExpressionInterface=function(){return function(e){function a(i){for(var s=0,o=e.layers.length;s<o;){if(e.layers[s].nm===i||e.layers[s].ind===i)return e.elements[s].layerInterface;s+=1}return null}return Object.defineProperty(a,"_name",{value:e.data.nm}),a.layer=a,a.pixelAspect=1,a.height=e.data.h||e.globalData.compSize.h,a.width=e.data.w||e.globalData.compSize.w,a.pixelAspect=1,a.frameDuration=1/e.globalData.frameRate,a.displayStartTime=0,a.numLayers=e.layers.length,a}}();function _typeof$2(e){"@babel/helpers - typeof";return _typeof$2=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof$2(e)}function seedRandom(e,a){var i=this,s=256,o=6,c=52,d="random",b=a.pow(s,o),g=a.pow(2,c),_=g*2,tt=s-1,it;function et(j,at,lt){var pt=[];at=at===!0?{entropy:!0}:at||{};var ft=ht(rt(at.entropy?[j,_e(e)]:j===null?$():j,3),pt),mt=new st(pt),vt=function(){for(var Et=mt.g(o),gt=b,St=0;Et<g;)Et=(Et+St)*s,gt*=s,St=mt.g(1);for(;Et>=_;)Et/=2,gt/=2,St>>>=1;return(Et+St)/gt};return vt.int32=function(){return mt.g(4)|0},vt.quick=function(){return mt.g(4)/4294967296},vt.double=vt,ht(_e(mt.S),e),(at.pass||lt||function(_t,Et,gt,St){return St&&(St.S&&nt(St,mt),_t.state=function(){return nt(mt,{})}),gt?(a[d]=_t,Et):_t})(vt,ft,"global"in at?at.global:this==a,at.state)}a["seed"+d]=et;function st(j){var at,lt=j.length,pt=this,ft=0,mt=pt.i=pt.j=0,vt=pt.S=[];for(lt||(j=[lt++]);ft<s;)vt[ft]=ft++;for(ft=0;ft<s;ft++)vt[ft]=vt[mt=tt&mt+j[ft%lt]+(at=vt[ft])],vt[mt]=at;pt.g=function(_t){for(var Et,gt=0,St=pt.i,Ct=pt.j,bt=pt.S;_t--;)Et=bt[St=tt&St+1],gt=gt*s+bt[tt&(bt[St]=bt[Ct=tt&Ct+Et])+(bt[Ct]=Et)];return pt.i=St,pt.j=Ct,gt}}function nt(j,at){return at.i=j.i,at.j=j.j,at.S=j.S.slice(),at}function rt(j,at){var lt=[],pt=_typeof$2(j),ft;if(at&&pt=="object")for(ft in j)try{lt.push(rt(j[ft],at-1))}catch{}return lt.length?lt:pt=="string"?j:j+"\0"}function ht(j,at){for(var lt=j+"",pt,ft=0;ft<lt.length;)at[tt&ft]=tt&(pt^=at[tt&ft]*19)+lt.charCodeAt(ft++);return _e(at)}function $(){try{var j=new Uint8Array(s);return(i.crypto||i.msCrypto).getRandomValues(j),_e(j)}catch{var at=i.navigator,lt=at&&at.plugins;return[+new Date,i,lt,i.screen,_e(e)]}}function _e(j){return String.fromCharCode.apply(0,j)}ht(a.random(),e)}function initialize$2(e){seedRandom([],e)}var propTypes={SHAPE:"shape"};function _typeof$1(e){"@babel/helpers - typeof";return _typeof$1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof$1(e)}var ExpressionManager=function(){var ob={},Math=BMMath,window=null,document=null,XMLHttpRequest=null,fetch=null,frames=null,_lottieGlobal={};initialize$2(BMMath);function resetFrame(){_lottieGlobal={}}function $bm_isInstanceOfArray(e){return e.constructor===Array||e.constructor===Float32Array}function isNumerable(e,a){return e==="number"||a instanceof Number||e==="boolean"||e==="string"}function $bm_neg(e){var a=_typeof$1(e);if(a==="number"||e instanceof Number||a==="boolean")return-e;if($bm_isInstanceOfArray(e)){var i,s=e.length,o=[];for(i=0;i<s;i+=1)o[i]=-e[i];return o}return e.propType?e.v:-e}var easeInBez=BezierFactory.getBezierEasing(.333,0,.833,.833,"easeIn").get,easeOutBez=BezierFactory.getBezierEasing(.167,.167,.667,1,"easeOut").get,easeInOutBez=BezierFactory.getBezierEasing(.33,0,.667,1,"easeInOut").get;function sum(e,a){var i=_typeof$1(e),s=_typeof$1(a);if(isNumerable(i,e)&&isNumerable(s,a)||i==="string"||s==="string")return e+a;if($bm_isInstanceOfArray(e)&&isNumerable(s,a))return e=e.slice(0),e[0]+=a,e;if(isNumerable(i,e)&&$bm_isInstanceOfArray(a))return a=a.slice(0),a[0]=e+a[0],a;if($bm_isInstanceOfArray(e)&&$bm_isInstanceOfArray(a)){for(var o=0,c=e.length,d=a.length,b=[];o<c||o<d;)(typeof e[o]=="number"||e[o]instanceof Number)&&(typeof a[o]=="number"||a[o]instanceof Number)?b[o]=e[o]+a[o]:b[o]=a[o]===void 0?e[o]:e[o]||a[o],o+=1;return b}return 0}var add=sum;function sub(e,a){var i=_typeof$1(e),s=_typeof$1(a);if(isNumerable(i,e)&&isNumerable(s,a))return i==="string"&&(e=parseInt(e,10)),s==="string"&&(a=parseInt(a,10)),e-a;if($bm_isInstanceOfArray(e)&&isNumerable(s,a))return e=e.slice(0),e[0]-=a,e;if(isNumerable(i,e)&&$bm_isInstanceOfArray(a))return a=a.slice(0),a[0]=e-a[0],a;if($bm_isInstanceOfArray(e)&&$bm_isInstanceOfArray(a)){for(var o=0,c=e.length,d=a.length,b=[];o<c||o<d;)(typeof e[o]=="number"||e[o]instanceof Number)&&(typeof a[o]=="number"||a[o]instanceof Number)?b[o]=e[o]-a[o]:b[o]=a[o]===void 0?e[o]:e[o]||a[o],o+=1;return b}return 0}function mul(e,a){var i=_typeof$1(e),s=_typeof$1(a),o;if(isNumerable(i,e)&&isNumerable(s,a))return e*a;var c,d;if($bm_isInstanceOfArray(e)&&isNumerable(s,a)){for(d=e.length,o=createTypedArray("float32",d),c=0;c<d;c+=1)o[c]=e[c]*a;return o}if(isNumerable(i,e)&&$bm_isInstanceOfArray(a)){for(d=a.length,o=createTypedArray("float32",d),c=0;c<d;c+=1)o[c]=e*a[c];return o}return 0}function div(e,a){var i=_typeof$1(e),s=_typeof$1(a),o;if(isNumerable(i,e)&&isNumerable(s,a))return e/a;var c,d;if($bm_isInstanceOfArray(e)&&isNumerable(s,a)){for(d=e.length,o=createTypedArray("float32",d),c=0;c<d;c+=1)o[c]=e[c]/a;return o}if(isNumerable(i,e)&&$bm_isInstanceOfArray(a)){for(d=a.length,o=createTypedArray("float32",d),c=0;c<d;c+=1)o[c]=e/a[c];return o}return 0}function mod(e,a){return typeof e=="string"&&(e=parseInt(e,10)),typeof a=="string"&&(a=parseInt(a,10)),e%a}var $bm_sum=sum,$bm_sub=sub,$bm_mul=mul,$bm_div=div,$bm_mod=mod;function clamp(e,a,i){if(a>i){var s=i;i=a,a=s}return Math.min(Math.max(e,a),i)}function radiansToDegrees(e){return e/degToRads}var radians_to_degrees=radiansToDegrees;function degreesToRadians(e){return e*degToRads}var degrees_to_radians=radiansToDegrees,helperLengthArray=[0,0,0,0,0,0];function length(e,a){if(typeof e=="number"||e instanceof Number)return a=a||0,Math.abs(e-a);a||(a=helperLengthArray);var i,s=Math.min(e.length,a.length),o=0;for(i=0;i<s;i+=1)o+=Math.pow(a[i]-e[i],2);return Math.sqrt(o)}function normalize(e){return div(e,length(e))}function rgbToHsl(e){var a=e[0],i=e[1],s=e[2],o=Math.max(a,i,s),c=Math.min(a,i,s),d,b,g=(o+c)/2;if(o===c)d=0,b=0;else{var _=o-c;switch(b=g>.5?_/(2-o-c):_/(o+c),o){case a:d=(i-s)/_+(i<s?6:0);break;case i:d=(s-a)/_+2;break;case s:d=(a-i)/_+4;break}d/=6}return[d,b,g,e[3]]}function hue2rgb(e,a,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(a-e)*6*i:i<1/2?a:i<2/3?e+(a-e)*(2/3-i)*6:e}function hslToRgb(e){var a=e[0],i=e[1],s=e[2],o,c,d;if(i===0)o=s,d=s,c=s;else{var b=s<.5?s*(1+i):s+i-s*i,g=2*s-b;o=hue2rgb(g,b,a+1/3),c=hue2rgb(g,b,a),d=hue2rgb(g,b,a-1/3)}return[o,c,d,e[3]]}function linear(e,a,i,s,o){if((s===void 0||o===void 0)&&(s=a,o=i,a=0,i=1),i<a){var c=i;i=a,a=c}if(e<=a)return s;if(e>=i)return o;var d=i===a?0:(e-a)/(i-a);if(!s.length)return s+(o-s)*d;var b,g=s.length,_=createTypedArray("float32",g);for(b=0;b<g;b+=1)_[b]=s[b]+(o[b]-s[b])*d;return _}function random(e,a){if(a===void 0&&(e===void 0?(e=0,a=1):(a=e,e=void 0)),a.length){var i,s=a.length;e||(e=createTypedArray("float32",s));var o=createTypedArray("float32",s),c=BMMath.random();for(i=0;i<s;i+=1)o[i]=e[i]+c*(a[i]-e[i]);return o}e===void 0&&(e=0);var d=BMMath.random();return e+d*(a-e)}function createPath(e,a,i,s){var o,c=e.length,d=shapePool.newElement();d.setPathData(!!s,c);var b=[0,0],g,_;for(o=0;o<c;o+=1)g=a&&a[o]?a[o]:b,_=i&&i[o]?i[o]:b,d.setTripleAt(e[o][0],e[o][1],_[0]+e[o][0],_[1]+e[o][1],g[0]+e[o][0],g[1]+e[o][1],o,!0);return d}function initiateExpression(elem,data,property){function noOp(e){return e}if(!elem.globalData.renderConfig.runExpressions)return noOp;var val=data.x,needsVelocity=/velocity(?![\w\d])/.test(val),_needsRandom=val.indexOf("random")!==-1,elemType=elem.data.ty,transform,$bm_transform,content,effect,thisProperty=property;thisProperty._name=elem.data.nm,thisProperty.valueAtTime=thisProperty.getValueAtTime,Object.defineProperty(thisProperty,"value",{get:function(){return thisProperty.v}}),elem.comp.frameDuration=1/elem.comp.globalData.frameRate,elem.comp.displayStartTime=0;var inPoint=elem.data.ip/elem.comp.globalData.frameRate,outPoint=elem.data.op/elem.comp.globalData.frameRate,width=elem.data.sw?elem.data.sw:0,height=elem.data.sh?elem.data.sh:0,name=elem.data.nm,loopIn,loop_in,loopOut,loop_out,smooth,toWorld,fromWorld,fromComp,toComp,fromCompToSurface,position,rotation,anchorPoint,scale,thisLayer,thisComp,mask,valueAtTime,velocityAtTime,scoped_bm_rt,expression_function=eval("[function _expression_function(){"+val+";scoped_bm_rt=$bm_rt}]")[0],numKeys=property.kf?data.k.length:0,active=!this.data||this.data.hd!==!0,wiggle=(function e(a,i){var s,o,c=this.pv.length?this.pv.length:1,d=createTypedArray("float32",c);a=5;var b=Math.floor(time*a);for(s=0,o=0;s<b;){for(o=0;o<c;o+=1)d[o]+=-i+i*2*BMMath.random();s+=1}var g=time*a,_=g-Math.floor(g),tt=createTypedArray("float32",c);if(c>1){for(o=0;o<c;o+=1)tt[o]=this.pv[o]+d[o]+(-i+i*2*BMMath.random())*_;return tt}return this.pv+d[0]+(-i+i*2*BMMath.random())*_}).bind(this);thisProperty.loopIn&&(loopIn=thisProperty.loopIn.bind(thisProperty),loop_in=loopIn),thisProperty.loopOut&&(loopOut=thisProperty.loopOut.bind(thisProperty),loop_out=loopOut),thisProperty.smooth&&(smooth=thisProperty.smooth.bind(thisProperty));function loopInDuration(e,a){return loopIn(e,a,!0)}function loopOutDuration(e,a){return loopOut(e,a,!0)}this.getValueAtTime&&(valueAtTime=this.getValueAtTime.bind(this)),this.getVelocityAtTime&&(velocityAtTime=this.getVelocityAtTime.bind(this));var comp=elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface);function lookAt(e,a){var i=[a[0]-e[0],a[1]-e[1],a[2]-e[2]],s=Math.atan2(i[0],Math.sqrt(i[1]*i[1]+i[2]*i[2]))/degToRads,o=-Math.atan2(i[1],i[2])/degToRads;return[o,s,0]}function easeOut(e,a,i,s,o){return applyEase(easeOutBez,e,a,i,s,o)}function easeIn(e,a,i,s,o){return applyEase(easeInBez,e,a,i,s,o)}function ease(e,a,i,s,o){return applyEase(easeInOutBez,e,a,i,s,o)}function applyEase(e,a,i,s,o,c){o===void 0?(o=i,c=s):a=(a-i)/(s-i),a>1?a=1:a<0&&(a=0);var d=e(a);if($bm_isInstanceOfArray(o)){var b,g=o.length,_=createTypedArray("float32",g);for(b=0;b<g;b+=1)_[b]=(c[b]-o[b])*d+o[b];return _}return(c-o)*d+o}function nearestKey(e){var a,i=data.k.length,s,o;if(!data.k.length||typeof data.k[0]=="number")s=0,o=0;else if(s=-1,e*=elem.comp.globalData.frameRate,e<data.k[0].t)s=1,o=data.k[0].t;else{for(a=0;a<i-1;a+=1)if(e===data.k[a].t){s=a+1,o=data.k[a].t;break}else if(e>data.k[a].t&&e<data.k[a+1].t){e-data.k[a].t>data.k[a+1].t-e?(s=a+2,o=data.k[a+1].t):(s=a+1,o=data.k[a].t);break}s===-1&&(s=a+1,o=data.k[a].t)}var c={};return c.index=s,c.time=o/elem.comp.globalData.frameRate,c}function key(e){var a,i,s;if(!data.k.length||typeof data.k[0]=="number")throw new Error("The property has no keyframe at index "+e);e-=1,a={time:data.k[e].t/elem.comp.globalData.frameRate,value:[]};var o=Object.prototype.hasOwnProperty.call(data.k[e],"s")?data.k[e].s:data.k[e-1].e;for(s=o.length,i=0;i<s;i+=1)a[i]=o[i],a.value[i]=o[i];return a}function framesToTime(e,a){return a||(a=elem.comp.globalData.frameRate),e/a}function timeToFrames(e,a){return!e&&e!==0&&(e=time),a||(a=elem.comp.globalData.frameRate),e*a}function seedRandom(e){BMMath.seedrandom(randSeed+e)}function sourceRectAtTime(){return elem.sourceRectAtTime()}function substring(e,a){return typeof value=="string"?a===void 0?value.substring(e):value.substring(e,a):""}function substr(e,a){return typeof value=="string"?a===void 0?value.substr(e):value.substr(e,a):""}function posterizeTime(e){time=e===0?0:Math.floor(time*e)/e,value=valueAtTime(time)}var time,velocity,value,text,textIndex,textTotal,selectorValue,index=elem.data.ind,hasParent=!!(elem.hierarchy&&elem.hierarchy.length),parent,randSeed=Math.floor(Math.random()*1e6),globalData=elem.globalData;function executeExpression(e){return value=e,this.frameExpressionId===elem.globalData.frameId&&this.propType!=="textSelector"?value:(this.propType==="textSelector"&&(textIndex=this.textIndex,textTotal=this.textTotal,selectorValue=this.selectorValue),thisLayer||(text=elem.layerInterface.text,thisLayer=elem.layerInterface,thisComp=elem.comp.compInterface,toWorld=thisLayer.toWorld.bind(thisLayer),fromWorld=thisLayer.fromWorld.bind(thisLayer),fromComp=thisLayer.fromComp.bind(thisLayer),toComp=thisLayer.toComp.bind(thisLayer),mask=thisLayer.mask?thisLayer.mask.bind(thisLayer):null,fromCompToSurface=fromComp),transform||(transform=elem.layerInterface("ADBE Transform Group"),$bm_transform=transform,transform&&(anchorPoint=transform.anchorPoint)),elemType===4&&!content&&(content=thisLayer("ADBE Root Vectors Group")),effect||(effect=thisLayer(4)),hasParent=!!(elem.hierarchy&&elem.hierarchy.length),hasParent&&!parent&&(parent=elem.hierarchy[0].layerInterface),time=this.comp.renderedFrame/this.comp.globalData.frameRate,_needsRandom&&seedRandom(randSeed+time),needsVelocity&&(velocity=velocityAtTime(time)),expression_function(),this.frameExpressionId=elem.globalData.frameId,scoped_bm_rt=scoped_bm_rt.propType===propTypes.SHAPE?scoped_bm_rt.v:scoped_bm_rt,scoped_bm_rt)}return executeExpression.__preventDeadCodeRemoval=[$bm_transform,anchorPoint,time,velocity,inPoint,outPoint,width,height,name,loop_in,loop_out,smooth,toComp,fromCompToSurface,toWorld,fromWorld,mask,position,rotation,scale,thisComp,numKeys,active,wiggle,loopInDuration,loopOutDuration,comp,lookAt,easeOut,easeIn,ease,nearestKey,key,text,textIndex,textTotal,selectorValue,framesToTime,timeToFrames,sourceRectAtTime,substring,substr,posterizeTime,index,globalData],executeExpression}return ob.initiateExpression=initiateExpression,ob.__preventDeadCodeRemoval=[window,document,XMLHttpRequest,fetch,frames,$bm_neg,add,$bm_sum,$bm_sub,$bm_mul,$bm_div,$bm_mod,clamp,radians_to_degrees,degreesToRadians,degrees_to_radians,normalize,rgbToHsl,hslToRgb,linear,random,createPath,_lottieGlobal],ob.resetFrame=resetFrame,ob}(),Expressions=function(){var e={};e.initExpressions=a,e.resetFrame=ExpressionManager.resetFrame;function a(i){var s=0,o=[];function c(){s+=1}function d(){s-=1,s===0&&g()}function b(_){o.indexOf(_)===-1&&o.push(_)}function g(){var _,tt=o.length;for(_=0;_<tt;_+=1)o[_].release();o.length=0}i.renderer.compInterface=CompExpressionInterface(i.renderer),i.renderer.globalData.projectInterface.registerComposition(i.renderer),i.renderer.globalData.pushExpression=c,i.renderer.globalData.popExpression=d,i.renderer.globalData.registerExpressionProperty=b}return e}(),MaskManagerInterface=function(){function e(i,s){this._mask=i,this._data=s}Object.defineProperty(e.prototype,"maskPath",{get:function(){return this._mask.prop.k&&this._mask.prop.getValue(),this._mask.prop}}),Object.defineProperty(e.prototype,"maskOpacity",{get:function(){return this._mask.op.k&&this._mask.op.getValue(),this._mask.op.v*100}});var a=function(s){var o=createSizedArray(s.viewData.length),c,d=s.viewData.length;for(c=0;c<d;c+=1)o[c]=new e(s.viewData[c],s.masksProperties[c]);var b=function(_){for(c=0;c<d;){if(s.masksProperties[c].nm===_)return o[c];c+=1}return null};return b};return a}(),ExpressionPropertyInterface=function(){var e={pv:0,v:0,mult:1},a={pv:[0,0,0],v:[0,0,0],mult:1};function i(d,b,g){Object.defineProperty(d,"velocity",{get:function(){return b.getVelocityAtTime(b.comp.currentFrame)}}),d.numKeys=b.keyframes?b.keyframes.length:0,d.key=function(_){if(!d.numKeys)return 0;var tt="";"s"in b.keyframes[_-1]?tt=b.keyframes[_-1].s:"e"in b.keyframes[_-2]?tt=b.keyframes[_-2].e:tt=b.keyframes[_-2].s;var it=g==="unidimensional"?new Number(tt):Object.assign({},tt);return it.time=b.keyframes[_-1].t/b.elem.comp.globalData.frameRate,it.value=g==="unidimensional"?tt[0]:tt,it},d.valueAtTime=b.getValueAtTime,d.speedAtTime=b.getSpeedAtTime,d.velocityAtTime=b.getVelocityAtTime,d.propertyGroup=b.propertyGroup}function s(d){(!d||!("pv"in d))&&(d=e);var b=1/d.mult,g=d.pv*b,_=new Number(g);return _.value=g,i(_,d,"unidimensional"),function(){return d.k&&d.getValue(),g=d.v*b,_.value!==g&&(_=new Number(g),_.value=g,_[0]=g,i(_,d,"unidimensional")),_}}function o(d){(!d||!("pv"in d))&&(d=a);var b=1/d.mult,g=d.data&&d.data.l||d.pv.length,_=createTypedArray("float32",g),tt=createTypedArray("float32",g);return _.value=tt,i(_,d,"multidimensional"),function(){d.k&&d.getValue();for(var it=0;it<g;it+=1)tt[it]=d.v[it]*b,_[it]=tt[it];return _}}function c(){return e}return function(d){return d?d.propType==="unidimensional"?s(d):o(d):c}}(),TransformExpressionInterface=function(){return function(e){function a(d){switch(d){case"scale":case"Scale":case"ADBE Scale":case 6:return a.scale;case"rotation":case"Rotation":case"ADBE Rotation":case"ADBE Rotate Z":case 10:return a.rotation;case"ADBE Rotate X":return a.xRotation;case"ADBE Rotate Y":return a.yRotation;case"position":case"Position":case"ADBE Position":case 2:return a.position;case"ADBE Position_0":return a.xPosition;case"ADBE Position_1":return a.yPosition;case"ADBE Position_2":return a.zPosition;case"anchorPoint":case"AnchorPoint":case"Anchor Point":case"ADBE AnchorPoint":case 1:return a.anchorPoint;case"opacity":case"Opacity":case 11:return a.opacity;default:return null}}Object.defineProperty(a,"rotation",{get:ExpressionPropertyInterface(e.r||e.rz)}),Object.defineProperty(a,"zRotation",{get:ExpressionPropertyInterface(e.rz||e.r)}),Object.defineProperty(a,"xRotation",{get:ExpressionPropertyInterface(e.rx)}),Object.defineProperty(a,"yRotation",{get:ExpressionPropertyInterface(e.ry)}),Object.defineProperty(a,"scale",{get:ExpressionPropertyInterface(e.s)});var i,s,o,c;return e.p?c=ExpressionPropertyInterface(e.p):(i=ExpressionPropertyInterface(e.px),s=ExpressionPropertyInterface(e.py),e.pz&&(o=ExpressionPropertyInterface(e.pz))),Object.defineProperty(a,"position",{get:function(){return e.p?c():[i(),s(),o?o():0]}}),Object.defineProperty(a,"xPosition",{get:ExpressionPropertyInterface(e.px)}),Object.defineProperty(a,"yPosition",{get:ExpressionPropertyInterface(e.py)}),Object.defineProperty(a,"zPosition",{get:ExpressionPropertyInterface(e.pz)}),Object.defineProperty(a,"anchorPoint",{get:ExpressionPropertyInterface(e.a)}),Object.defineProperty(a,"opacity",{get:ExpressionPropertyInterface(e.o)}),Object.defineProperty(a,"skew",{get:ExpressionPropertyInterface(e.sk)}),Object.defineProperty(a,"skewAxis",{get:ExpressionPropertyInterface(e.sa)}),Object.defineProperty(a,"orientation",{get:ExpressionPropertyInterface(e.or)}),a}}(),LayerExpressionInterface=function(){function e(_){var tt=new Matrix;if(_!==void 0){var it=this._elem.finalTransform.mProp.getValueAtTime(_);it.clone(tt)}else{var et=this._elem.finalTransform.mProp;et.applyToMatrix(tt)}return tt}function a(_,tt){var it=this.getMatrix(tt);return it.props[12]=0,it.props[13]=0,it.props[14]=0,this.applyPoint(it,_)}function i(_,tt){var it=this.getMatrix(tt);return this.applyPoint(it,_)}function s(_,tt){var it=this.getMatrix(tt);return it.props[12]=0,it.props[13]=0,it.props[14]=0,this.invertPoint(it,_)}function o(_,tt){var it=this.getMatrix(tt);return this.invertPoint(it,_)}function c(_,tt){if(this._elem.hierarchy&&this._elem.hierarchy.length){var it,et=this._elem.hierarchy.length;for(it=0;it<et;it+=1)this._elem.hierarchy[it].finalTransform.mProp.applyToMatrix(_)}return _.applyToPointArray(tt[0],tt[1],tt[2]||0)}function d(_,tt){if(this._elem.hierarchy&&this._elem.hierarchy.length){var it,et=this._elem.hierarchy.length;for(it=0;it<et;it+=1)this._elem.hierarchy[it].finalTransform.mProp.applyToMatrix(_)}return _.inversePoint(tt)}function b(_){var tt=new Matrix;if(tt.reset(),this._elem.finalTransform.mProp.applyToMatrix(tt),this._elem.hierarchy&&this._elem.hierarchy.length){var it,et=this._elem.hierarchy.length;for(it=0;it<et;it+=1)this._elem.hierarchy[it].finalTransform.mProp.applyToMatrix(tt);return tt.inversePoint(_)}return tt.inversePoint(_)}function g(){return[1,1,1,1]}return function(_){var tt;function it(rt){st.mask=new MaskManagerInterface(rt,_)}function et(rt){st.effect=rt}function st(rt){switch(rt){case"ADBE Root Vectors Group":case"Contents":case 2:return st.shapeInterface;case 1:case 6:case"Transform":case"transform":case"ADBE Transform Group":return tt;case 4:case"ADBE Effect Parade":case"effects":case"Effects":return st.effect;case"ADBE Text Properties":return st.textInterface;default:return null}}st.getMatrix=e,st.invertPoint=d,st.applyPoint=c,st.toWorld=i,st.toWorldVec=a,st.fromWorld=o,st.fromWorldVec=s,st.toComp=i,st.fromComp=b,st.sampleImage=g,st.sourceRectAtTime=_.sourceRectAtTime.bind(_),st._elem=_,tt=TransformExpressionInterface(_.finalTransform.mProp);var nt=getDescriptor(tt,"anchorPoint");return Object.defineProperties(st,{hasParent:{get:function(){return _.hierarchy.length}},parent:{get:function(){return _.hierarchy[0].layerInterface}},rotation:getDescriptor(tt,"rotation"),scale:getDescriptor(tt,"scale"),position:getDescriptor(tt,"position"),opacity:getDescriptor(tt,"opacity"),anchorPoint:nt,anchor_point:nt,transform:{get:function(){return tt}},active:{get:function(){return _.isInRange}}}),st.startTime=_.data.st,st.index=_.data.ind,st.source=_.data.refId,st.height=_.data.ty===0?_.data.h:100,st.width=_.data.ty===0?_.data.w:100,st.inPoint=_.data.ip/_.comp.globalData.frameRate,st.outPoint=_.data.op/_.comp.globalData.frameRate,st._name=_.data.nm,st.registerMaskInterface=it,st.registerEffectsInterface=et,st}}(),propertyGroupFactory=function(){return function(e,a){return function(i){return i=i===void 0?1:i,i<=0?e:a(i-1)}}}(),PropertyInterface=function(){return function(e,a){var i={_name:e};function s(o){return o=o===void 0?1:o,o<=0?i:a(o-1)}return s}}(),EffectsExpressionInterface=function(){var e={createEffectsInterface:a};function a(o,c){if(o.effectsManager){var d=[],b=o.data.ef,g,_=o.effectsManager.effectElements.length;for(g=0;g<_;g+=1)d.push(i(b[g],o.effectsManager.effectElements[g],c,o));var tt=o.data.ef||[],it=function(st){for(g=0,_=tt.length;g<_;){if(st===tt[g].nm||st===tt[g].mn||st===tt[g].ix)return d[g];g+=1}return null};return Object.defineProperty(it,"numProperties",{get:function(){return tt.length}}),it}return null}function i(o,c,d,b){function g(st){for(var nt=o.ef,rt=0,ht=nt.length;rt<ht;){if(st===nt[rt].nm||st===nt[rt].mn||st===nt[rt].ix)return nt[rt].ty===5?tt[rt]:tt[rt]();rt+=1}throw new Error}var _=propertyGroupFactory(g,d),tt=[],it,et=o.ef.length;for(it=0;it<et;it+=1)o.ef[it].ty===5?tt.push(i(o.ef[it],c.effectElements[it],c.effectElements[it].propertyGroup,b)):tt.push(s(c.effectElements[it],o.ef[it].ty,b,_));return o.mn==="ADBE Color Control"&&Object.defineProperty(g,"color",{get:function(){return tt[0]()}}),Object.defineProperties(g,{numProperties:{get:function(){return o.np}},_name:{value:o.nm},propertyGroup:{value:_}}),g.enabled=o.en!==0,g.active=g.enabled,g}function s(o,c,d,b){var g=ExpressionPropertyInterface(o.p);function _(){return c===10?d.comp.compInterface(o.p.v):g()}return o.p.setGroupProperty&&o.p.setGroupProperty(PropertyInterface("",b)),_}return e}(),ShapePathInterface=function(){return function(a,i,s){var o=i.sh;function c(b){return b==="Shape"||b==="shape"||b==="Path"||b==="path"||b==="ADBE Vector Shape"||b===2?c.path:null}var d=propertyGroupFactory(c,s);return o.setGroupProperty(PropertyInterface("Path",d)),Object.defineProperties(c,{path:{get:function(){return o.k&&o.getValue(),o}},shape:{get:function(){return o.k&&o.getValue(),o}},_name:{value:a.nm},ix:{value:a.ix},propertyIndex:{value:a.ix},mn:{value:a.mn},propertyGroup:{value:s}}),c}}(),ShapeExpressionInterface=function(){function e(nt,rt,ht){var $=[],_e,j=nt?nt.length:0;for(_e=0;_e<j;_e+=1)nt[_e].ty==="gr"?$.push(i(nt[_e],rt[_e],ht)):nt[_e].ty==="fl"?$.push(s(nt[_e],rt[_e],ht)):nt[_e].ty==="st"?$.push(d(nt[_e],rt[_e],ht)):nt[_e].ty==="tm"?$.push(b(nt[_e],rt[_e],ht)):nt[_e].ty==="tr"||(nt[_e].ty==="el"?$.push(_(nt[_e],rt[_e],ht)):nt[_e].ty==="sr"?$.push(tt(nt[_e],rt[_e],ht)):nt[_e].ty==="sh"?$.push(ShapePathInterface(nt[_e],rt[_e],ht)):nt[_e].ty==="rc"?$.push(it(nt[_e],rt[_e],ht)):nt[_e].ty==="rd"?$.push(et(nt[_e],rt[_e],ht)):nt[_e].ty==="rp"?$.push(st(nt[_e],rt[_e],ht)):nt[_e].ty==="gf"?$.push(o(nt[_e],rt[_e],ht)):$.push(c(nt[_e],rt[_e])));return $}function a(nt,rt,ht){var $,_e=function(lt){for(var pt=0,ft=$.length;pt<ft;){if($[pt]._name===lt||$[pt].mn===lt||$[pt].propertyIndex===lt||$[pt].ix===lt||$[pt].ind===lt)return $[pt];pt+=1}return typeof lt=="number"?$[lt-1]:null};_e.propertyGroup=propertyGroupFactory(_e,ht),$=e(nt.it,rt.it,_e.propertyGroup),_e.numProperties=$.length;var j=g(nt.it[nt.it.length-1],rt.it[rt.it.length-1],_e.propertyGroup);return _e.transform=j,_e.propertyIndex=nt.cix,_e._name=nt.nm,_e}function i(nt,rt,ht){var $=function(lt){switch(lt){case"ADBE Vectors Group":case"Contents":case 2:return $.content;default:return $.transform}};$.propertyGroup=propertyGroupFactory($,ht);var _e=a(nt,rt,$.propertyGroup),j=g(nt.it[nt.it.length-1],rt.it[rt.it.length-1],$.propertyGroup);return $.content=_e,$.transform=j,Object.defineProperty($,"_name",{get:function(){return nt.nm}}),$.numProperties=nt.np,$.propertyIndex=nt.ix,$.nm=nt.nm,$.mn=nt.mn,$}function s(nt,rt,ht){function $(_e){return _e==="Color"||_e==="color"?$.color:_e==="Opacity"||_e==="opacity"?$.opacity:null}return Object.defineProperties($,{color:{get:ExpressionPropertyInterface(rt.c)},opacity:{get:ExpressionPropertyInterface(rt.o)},_name:{value:nt.nm},mn:{value:nt.mn}}),rt.c.setGroupProperty(PropertyInterface("Color",ht)),rt.o.setGroupProperty(PropertyInterface("Opacity",ht)),$}function o(nt,rt,ht){function $(_e){return _e==="Start Point"||_e==="start point"?$.startPoint:_e==="End Point"||_e==="end point"?$.endPoint:_e==="Opacity"||_e==="opacity"?$.opacity:null}return Object.defineProperties($,{startPoint:{get:ExpressionPropertyInterface(rt.s)},endPoint:{get:ExpressionPropertyInterface(rt.e)},opacity:{get:ExpressionPropertyInterface(rt.o)},type:{get:function(){return"a"}},_name:{value:nt.nm},mn:{value:nt.mn}}),rt.s.setGroupProperty(PropertyInterface("Start Point",ht)),rt.e.setGroupProperty(PropertyInterface("End Point",ht)),rt.o.setGroupProperty(PropertyInterface("Opacity",ht)),$}function c(){function nt(){return null}return nt}function d(nt,rt,ht){var $=propertyGroupFactory(ft,ht),_e=propertyGroupFactory(pt,$);function j(mt){Object.defineProperty(pt,nt.d[mt].nm,{get:ExpressionPropertyInterface(rt.d.dataProps[mt].p)})}var at,lt=nt.d?nt.d.length:0,pt={};for(at=0;at<lt;at+=1)j(at),rt.d.dataProps[at].p.setGroupProperty(_e);function ft(mt){return mt==="Color"||mt==="color"?ft.color:mt==="Opacity"||mt==="opacity"?ft.opacity:mt==="Stroke Width"||mt==="stroke width"?ft.strokeWidth:null}return Object.defineProperties(ft,{color:{get:ExpressionPropertyInterface(rt.c)},opacity:{get:ExpressionPropertyInterface(rt.o)},strokeWidth:{get:ExpressionPropertyInterface(rt.w)},dash:{get:function(){return pt}},_name:{value:nt.nm},mn:{value:nt.mn}}),rt.c.setGroupProperty(PropertyInterface("Color",$)),rt.o.setGroupProperty(PropertyInterface("Opacity",$)),rt.w.setGroupProperty(PropertyInterface("Stroke Width",$)),ft}function b(nt,rt,ht){function $(j){return j===nt.e.ix||j==="End"||j==="end"?$.end:j===nt.s.ix?$.start:j===nt.o.ix?$.offset:null}var _e=propertyGroupFactory($,ht);return $.propertyIndex=nt.ix,rt.s.setGroupProperty(PropertyInterface("Start",_e)),rt.e.setGroupProperty(PropertyInterface("End",_e)),rt.o.setGroupProperty(PropertyInterface("Offset",_e)),$.propertyIndex=nt.ix,$.propertyGroup=ht,Object.defineProperties($,{start:{get:ExpressionPropertyInterface(rt.s)},end:{get:ExpressionPropertyInterface(rt.e)},offset:{get:ExpressionPropertyInterface(rt.o)},_name:{value:nt.nm}}),$.mn=nt.mn,$}function g(nt,rt,ht){function $(j){return nt.a.ix===j||j==="Anchor Point"?$.anchorPoint:nt.o.ix===j||j==="Opacity"?$.opacity:nt.p.ix===j||j==="Position"?$.position:nt.r.ix===j||j==="Rotation"||j==="ADBE Vector Rotation"?$.rotation:nt.s.ix===j||j==="Scale"?$.scale:nt.sk&&nt.sk.ix===j||j==="Skew"?$.skew:nt.sa&&nt.sa.ix===j||j==="Skew Axis"?$.skewAxis:null}var _e=propertyGroupFactory($,ht);return rt.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity",_e)),rt.transform.mProps.p.setGroupProperty(PropertyInterface("Position",_e)),rt.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point",_e)),rt.transform.mProps.s.setGroupProperty(PropertyInterface("Scale",_e)),rt.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation",_e)),rt.transform.mProps.sk&&(rt.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew",_e)),rt.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle",_e))),rt.transform.op.setGroupProperty(PropertyInterface("Opacity",_e)),Object.defineProperties($,{opacity:{get:ExpressionPropertyInterface(rt.transform.mProps.o)},position:{get:ExpressionPropertyInterface(rt.transform.mProps.p)},anchorPoint:{get:ExpressionPropertyInterface(rt.transform.mProps.a)},scale:{get:ExpressionPropertyInterface(rt.transform.mProps.s)},rotation:{get:ExpressionPropertyInterface(rt.transform.mProps.r)},skew:{get:ExpressionPropertyInterface(rt.transform.mProps.sk)},skewAxis:{get:ExpressionPropertyInterface(rt.transform.mProps.sa)},_name:{value:nt.nm}}),$.ty="tr",$.mn=nt.mn,$.propertyGroup=ht,$}function _(nt,rt,ht){function $(at){return nt.p.ix===at?$.position:nt.s.ix===at?$.size:null}var _e=propertyGroupFactory($,ht);$.propertyIndex=nt.ix;var j=rt.sh.ty==="tm"?rt.sh.prop:rt.sh;return j.s.setGroupProperty(PropertyInterface("Size",_e)),j.p.setGroupProperty(PropertyInterface("Position",_e)),Object.defineProperties($,{size:{get:ExpressionPropertyInterface(j.s)},position:{get:ExpressionPropertyInterface(j.p)},_name:{value:nt.nm}}),$.mn=nt.mn,$}function tt(nt,rt,ht){function $(at){return nt.p.ix===at?$.position:nt.r.ix===at?$.rotation:nt.pt.ix===at?$.points:nt.or.ix===at||at==="ADBE Vector Star Outer Radius"?$.outerRadius:nt.os.ix===at?$.outerRoundness:nt.ir&&(nt.ir.ix===at||at==="ADBE Vector Star Inner Radius")?$.innerRadius:nt.is&&nt.is.ix===at?$.innerRoundness:null}var _e=propertyGroupFactory($,ht),j=rt.sh.ty==="tm"?rt.sh.prop:rt.sh;return $.propertyIndex=nt.ix,j.or.setGroupProperty(PropertyInterface("Outer Radius",_e)),j.os.setGroupProperty(PropertyInterface("Outer Roundness",_e)),j.pt.setGroupProperty(PropertyInterface("Points",_e)),j.p.setGroupProperty(PropertyInterface("Position",_e)),j.r.setGroupProperty(PropertyInterface("Rotation",_e)),nt.ir&&(j.ir.setGroupProperty(PropertyInterface("Inner Radius",_e)),j.is.setGroupProperty(PropertyInterface("Inner Roundness",_e))),Object.defineProperties($,{position:{get:ExpressionPropertyInterface(j.p)},rotation:{get:ExpressionPropertyInterface(j.r)},points:{get:ExpressionPropertyInterface(j.pt)},outerRadius:{get:ExpressionPropertyInterface(j.or)},outerRoundness:{get:ExpressionPropertyInterface(j.os)},innerRadius:{get:ExpressionPropertyInterface(j.ir)},innerRoundness:{get:ExpressionPropertyInterface(j.is)},_name:{value:nt.nm}}),$.mn=nt.mn,$}function it(nt,rt,ht){function $(at){return nt.p.ix===at?$.position:nt.r.ix===at?$.roundness:nt.s.ix===at||at==="Size"||at==="ADBE Vector Rect Size"?$.size:null}var _e=propertyGroupFactory($,ht),j=rt.sh.ty==="tm"?rt.sh.prop:rt.sh;return $.propertyIndex=nt.ix,j.p.setGroupProperty(PropertyInterface("Position",_e)),j.s.setGroupProperty(PropertyInterface("Size",_e)),j.r.setGroupProperty(PropertyInterface("Rotation",_e)),Object.defineProperties($,{position:{get:ExpressionPropertyInterface(j.p)},roundness:{get:ExpressionPropertyInterface(j.r)},size:{get:ExpressionPropertyInterface(j.s)},_name:{value:nt.nm}}),$.mn=nt.mn,$}function et(nt,rt,ht){function $(at){return nt.r.ix===at||at==="Round Corners 1"?$.radius:null}var _e=propertyGroupFactory($,ht),j=rt;return $.propertyIndex=nt.ix,j.rd.setGroupProperty(PropertyInterface("Radius",_e)),Object.defineProperties($,{radius:{get:ExpressionPropertyInterface(j.rd)},_name:{value:nt.nm}}),$.mn=nt.mn,$}function st(nt,rt,ht){function $(at){return nt.c.ix===at||at==="Copies"?$.copies:nt.o.ix===at||at==="Offset"?$.offset:null}var _e=propertyGroupFactory($,ht),j=rt;return $.propertyIndex=nt.ix,j.c.setGroupProperty(PropertyInterface("Copies",_e)),j.o.setGroupProperty(PropertyInterface("Offset",_e)),Object.defineProperties($,{copies:{get:ExpressionPropertyInterface(j.c)},offset:{get:ExpressionPropertyInterface(j.o)},_name:{value:nt.nm}}),$.mn=nt.mn,$}return function(nt,rt,ht){var $;function _e(at){if(typeof at=="number")return at=at===void 0?1:at,at===0?ht:$[at-1];for(var lt=0,pt=$.length;lt<pt;){if($[lt]._name===at)return $[lt];lt+=1}return null}function j(){return ht}return _e.propertyGroup=propertyGroupFactory(_e,j),$=e(nt,rt,_e.propertyGroup),_e.numProperties=$.length,_e._name="Contents",_e}}(),TextExpressionInterface=function(){return function(e){var a;function i(s){switch(s){case"ADBE Text Document":return i.sourceText;default:return null}}return Object.defineProperty(i,"sourceText",{get:function(){e.textProperty.getValue();var o=e.textProperty.currentData.t;return(!a||o!==a.value)&&(a=new String(o),a.value=o||new String(o),Object.defineProperty(a,"style",{get:function(){return{fillColor:e.textProperty.currentData.fc}}})),a}}),i}}();function _typeof(e){"@babel/helpers - typeof";return _typeof=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(e)}var FootageInterface=function(){var e=function(s){var o="",c=s.getFootageData();function d(){return o="",c=s.getFootageData(),b}function b(g){if(c[g])return o=g,c=c[g],_typeof(c)==="object"?b:c;var _=g.indexOf(o);if(_!==-1){var tt=parseInt(g.substr(_+o.length),10);return c=c[tt],_typeof(c)==="object"?b:c}return""}return d},a=function(s){function o(c){return c==="Outline"?o.outlineInterface():null}return o._name="Outline",o.outlineInterface=e(s),o};return function(i){function s(o){return o==="Data"?s.dataInterface:null}return s._name="Data",s.dataInterface=a(i),s}}(),interfaces={layer:LayerExpressionInterface,effects:EffectsExpressionInterface,comp:CompExpressionInterface,shape:ShapeExpressionInterface,text:TextExpressionInterface,footage:FootageInterface};function getInterface(e){return interfaces[e]||null}var expressionHelpers=function(){function e(d,b,g){b.x&&(g.k=!0,g.x=!0,g.initiateExpression=ExpressionManager.initiateExpression,g.effectsSequence.push(g.initiateExpression(d,b,g).bind(g)))}function a(d){return d*=this.elem.globalData.frameRate,d-=this.offsetTime,d!==this._cachingAtTime.lastFrame&&(this._cachingAtTime.lastIndex=this._cachingAtTime.lastFrame<d?this._cachingAtTime.lastIndex:0,this._cachingAtTime.value=this.interpolateValue(d,this._cachingAtTime),this._cachingAtTime.lastFrame=d),this._cachingAtTime.value}function i(d){var b=-.01,g=this.getValueAtTime(d),_=this.getValueAtTime(d+b),tt=0;if(g.length){var it;for(it=0;it<g.length;it+=1)tt+=Math.pow(_[it]-g[it],2);tt=Math.sqrt(tt)*100}else tt=0;return tt}function s(d){if(this.vel!==void 0)return this.vel;var b=-.001,g=this.getValueAtTime(d),_=this.getValueAtTime(d+b),tt;if(g.length){tt=createTypedArray("float32",g.length);var it;for(it=0;it<g.length;it+=1)tt[it]=(_[it]-g[it])/b}else tt=(_-g)/b;return tt}function o(){return this.pv}function c(d){this.propertyGroup=d}return{searchExpressions:e,getSpeedAtTime:i,getVelocityAtTime:s,getValueAtTime:a,getStaticValueAtTime:o,setGroupProperty:c}}();function addPropertyDecorator(){function e(et,st,nt){if(!this.k||!this.keyframes)return this.pv;et=et?et.toLowerCase():"";var rt=this.comp.renderedFrame,ht=this.keyframes,$=ht[ht.length-1].t;if(rt<=$)return this.pv;var _e,j;nt?(st?_e=Math.abs($-this.elem.comp.globalData.frameRate*st):_e=Math.max(0,$-this.elem.data.ip),j=$-_e):((!st||st>ht.length-1)&&(st=ht.length-1),j=ht[ht.length-1-st].t,_e=$-j);var at,lt,pt;if(et==="pingpong"){var ft=Math.floor((rt-j)/_e);if(ft%2!==0)return this.getValueAtTime((_e-(rt-j)%_e+j)/this.comp.globalData.frameRate,0)}else if(et==="offset"){var mt=this.getValueAtTime(j/this.comp.globalData.frameRate,0),vt=this.getValueAtTime($/this.comp.globalData.frameRate,0),_t=this.getValueAtTime(((rt-j)%_e+j)/this.comp.globalData.frameRate,0),Et=Math.floor((rt-j)/_e);if(this.pv.length){for(pt=new Array(mt.length),lt=pt.length,at=0;at<lt;at+=1)pt[at]=(vt[at]-mt[at])*Et+_t[at];return pt}return(vt-mt)*Et+_t}else if(et==="continue"){var gt=this.getValueAtTime($/this.comp.globalData.frameRate,0),St=this.getValueAtTime(($-.001)/this.comp.globalData.frameRate,0);if(this.pv.length){for(pt=new Array(gt.length),lt=pt.length,at=0;at<lt;at+=1)pt[at]=gt[at]+(gt[at]-St[at])*((rt-$)/this.comp.globalData.frameRate)/5e-4;return pt}return gt+(gt-St)*((rt-$)/.001)}return this.getValueAtTime(((rt-j)%_e+j)/this.comp.globalData.frameRate,0)}function a(et,st,nt){if(!this.k)return this.pv;et=et?et.toLowerCase():"";var rt=this.comp.renderedFrame,ht=this.keyframes,$=ht[0].t;if(rt>=$)return this.pv;var _e,j;nt?(st?_e=Math.abs(this.elem.comp.globalData.frameRate*st):_e=Math.max(0,this.elem.data.op-$),j=$+_e):((!st||st>ht.length-1)&&(st=ht.length-1),j=ht[st].t,_e=j-$);var at,lt,pt;if(et==="pingpong"){var ft=Math.floor(($-rt)/_e);if(ft%2===0)return this.getValueAtTime((($-rt)%_e+$)/this.comp.globalData.frameRate,0)}else if(et==="offset"){var mt=this.getValueAtTime($/this.comp.globalData.frameRate,0),vt=this.getValueAtTime(j/this.comp.globalData.frameRate,0),_t=this.getValueAtTime((_e-($-rt)%_e+$)/this.comp.globalData.frameRate,0),Et=Math.floor(($-rt)/_e)+1;if(this.pv.length){for(pt=new Array(mt.length),lt=pt.length,at=0;at<lt;at+=1)pt[at]=_t[at]-(vt[at]-mt[at])*Et;return pt}return _t-(vt-mt)*Et}else if(et==="continue"){var gt=this.getValueAtTime($/this.comp.globalData.frameRate,0),St=this.getValueAtTime(($+.001)/this.comp.globalData.frameRate,0);if(this.pv.length){for(pt=new Array(gt.length),lt=pt.length,at=0;at<lt;at+=1)pt[at]=gt[at]+(gt[at]-St[at])*($-rt)/.001;return pt}return gt+(gt-St)*($-rt)/.001}return this.getValueAtTime((_e-(($-rt)%_e+$))/this.comp.globalData.frameRate,0)}function i(et,st){if(!this.k)return this.pv;if(et=(et||.4)*.5,st=Math.floor(st||5),st<=1)return this.pv;var nt=this.comp.renderedFrame/this.comp.globalData.frameRate,rt=nt-et,ht=nt+et,$=st>1?(ht-rt)/(st-1):1,_e=0,j=0,at;this.pv.length?at=createTypedArray("float32",this.pv.length):at=0;for(var lt;_e<st;){if(lt=this.getValueAtTime(rt+_e*$),this.pv.length)for(j=0;j<this.pv.length;j+=1)at[j]+=lt[j];else at+=lt;_e+=1}if(this.pv.length)for(j=0;j<this.pv.length;j+=1)at[j]/=st;else at/=st;return at}function s(et){this._transformCachingAtTime||(this._transformCachingAtTime={v:new Matrix});var st=this._transformCachingAtTime.v;if(st.cloneFromProps(this.pre.props),this.appliedTransformations<1){var nt=this.a.getValueAtTime(et);st.translate(-nt[0]*this.a.mult,-nt[1]*this.a.mult,nt[2]*this.a.mult)}if(this.appliedTransformations<2){var rt=this.s.getValueAtTime(et);st.scale(rt[0]*this.s.mult,rt[1]*this.s.mult,rt[2]*this.s.mult)}if(this.sk&&this.appliedTransformations<3){var ht=this.sk.getValueAtTime(et),$=this.sa.getValueAtTime(et);st.skewFromAxis(-ht*this.sk.mult,$*this.sa.mult)}if(this.r&&this.appliedTransformations<4){var _e=this.r.getValueAtTime(et);st.rotate(-_e*this.r.mult)}else if(!this.r&&this.appliedTransformations<4){var j=this.rz.getValueAtTime(et),at=this.ry.getValueAtTime(et),lt=this.rx.getValueAtTime(et),pt=this.or.getValueAtTime(et);st.rotateZ(-j*this.rz.mult).rotateY(at*this.ry.mult).rotateX(lt*this.rx.mult).rotateZ(-pt[2]*this.or.mult).rotateY(pt[1]*this.or.mult).rotateX(pt[0]*this.or.mult)}if(this.data.p&&this.data.p.s){var ft=this.px.getValueAtTime(et),mt=this.py.getValueAtTime(et);if(this.data.p.z){var vt=this.pz.getValueAtTime(et);st.translate(ft*this.px.mult,mt*this.py.mult,-vt*this.pz.mult)}else st.translate(ft*this.px.mult,mt*this.py.mult,0)}else{var _t=this.p.getValueAtTime(et);st.translate(_t[0]*this.p.mult,_t[1]*this.p.mult,-_t[2]*this.p.mult)}return st}function o(){return this.v.clone(new Matrix)}var c=TransformPropertyFactory.getTransformProperty;TransformPropertyFactory.getTransformProperty=function(et,st,nt){var rt=c(et,st,nt);return rt.dynamicProperties.length?rt.getValueAtTime=s.bind(rt):rt.getValueAtTime=o.bind(rt),rt.setGroupProperty=expressionHelpers.setGroupProperty,rt};var d=PropertyFactory.getProp;PropertyFactory.getProp=function(et,st,nt,rt,ht){var $=d(et,st,nt,rt,ht);$.kf?$.getValueAtTime=expressionHelpers.getValueAtTime.bind($):$.getValueAtTime=expressionHelpers.getStaticValueAtTime.bind($),$.setGroupProperty=expressionHelpers.setGroupProperty,$.loopOut=e,$.loopIn=a,$.smooth=i,$.getVelocityAtTime=expressionHelpers.getVelocityAtTime.bind($),$.getSpeedAtTime=expressionHelpers.getSpeedAtTime.bind($),$.numKeys=st.a===1?st.k.length:0,$.propertyIndex=st.ix;var _e=0;return nt!==0&&(_e=createTypedArray("float32",st.a===1?st.k[0].s.length:st.k.length)),$._cachingAtTime={lastFrame:initialDefaultFrame,lastIndex:0,value:_e},expressionHelpers.searchExpressions(et,st,$),$.k&&ht.addDynamicProperty($),$};function b(et){return this._cachingAtTime||(this._cachingAtTime={shapeValue:shapePool.clone(this.pv),lastIndex:0,lastTime:initialDefaultFrame}),et*=this.elem.globalData.frameRate,et-=this.offsetTime,et!==this._cachingAtTime.lastTime&&(this._cachingAtTime.lastIndex=this._cachingAtTime.lastTime<et?this._caching.lastIndex:0,this._cachingAtTime.lastTime=et,this.interpolateShape(et,this._cachingAtTime.shapeValue,this._cachingAtTime)),this._cachingAtTime.shapeValue}var g=ShapePropertyFactory.getConstructorFunction(),_=ShapePropertyFactory.getKeyframedConstructorFunction();function tt(){}tt.prototype={vertices:function(st,nt){this.k&&this.getValue();var rt=this.v;nt!==void 0&&(rt=this.getValueAtTime(nt,0));var ht,$=rt._length,_e=rt[st],j=rt.v,at=createSizedArray($);for(ht=0;ht<$;ht+=1)st==="i"||st==="o"?at[ht]=[_e[ht][0]-j[ht][0],_e[ht][1]-j[ht][1]]:at[ht]=[_e[ht][0],_e[ht][1]];return at},points:function(st){return this.vertices("v",st)},inTangents:function(st){return this.vertices("i",st)},outTangents:function(st){return this.vertices("o",st)},isClosed:function(){return this.v.c},pointOnPath:function(st,nt){var rt=this.v;nt!==void 0&&(rt=this.getValueAtTime(nt,0)),this._segmentsLength||(this._segmentsLength=bez.getSegmentsLength(rt));for(var ht=this._segmentsLength,$=ht.lengths,_e=ht.totalLength*st,j=0,at=$.length,lt=0,pt;j<at;){if(lt+$[j].addedLength>_e){var ft=j,mt=rt.c&&j===at-1?0:j+1,vt=(_e-lt)/$[j].addedLength;pt=bez.getPointInSegment(rt.v[ft],rt.v[mt],rt.o[ft],rt.i[mt],vt,$[j]);break}else lt+=$[j].addedLength;j+=1}return pt||(pt=rt.c?[rt.v[0][0],rt.v[0][1]]:[rt.v[rt._length-1][0],rt.v[rt._length-1][1]]),pt},vectorOnPath:function(st,nt,rt){st==1?st=this.v.c:st==0&&(st=.999);var ht=this.pointOnPath(st,nt),$=this.pointOnPath(st+.001,nt),_e=$[0]-ht[0],j=$[1]-ht[1],at=Math.sqrt(Math.pow(_e,2)+Math.pow(j,2));if(at===0)return[0,0];var lt=rt==="tangent"?[_e/at,j/at]:[-j/at,_e/at];return lt},tangentOnPath:function(st,nt){return this.vectorOnPath(st,nt,"tangent")},normalOnPath:function(st,nt){return this.vectorOnPath(st,nt,"normal")},setGroupProperty:expressionHelpers.setGroupProperty,getValueAtTime:expressionHelpers.getStaticValueAtTime},extendPrototype([tt],g),extendPrototype([tt],_),_.prototype.getValueAtTime=b,_.prototype.initiateExpression=ExpressionManager.initiateExpression;var it=ShapePropertyFactory.getShapeProp;ShapePropertyFactory.getShapeProp=function(et,st,nt,rt,ht){var $=it(et,st,nt,rt,ht);return $.propertyIndex=st.ix,$.lock=!1,nt===3?expressionHelpers.searchExpressions(et,st.pt,$):nt===4&&expressionHelpers.searchExpressions(et,st.ks,$),$.k&&et.addDynamicProperty($),$}}function initialize$1(){addPropertyDecorator()}function addDecorator(){function e(){return this.data.d.x?(this.calculateExpression=ExpressionManager.initiateExpression.bind(this)(this.elem,this.data.d,this),this.addEffect(this.getExpressionValue.bind(this)),!0):null}TextProperty.prototype.getExpressionValue=function(a,i){var s=this.calculateExpression(i);if(a.t!==s){var o={};return this.copyData(o,a),o.t=s.toString(),o.__complete=!1,o}return a},TextProperty.prototype.searchProperty=function(){var a=this.searchKeyframes(),i=this.searchExpressions();return this.kf=a||i,this.kf},TextProperty.prototype.searchExpressions=e}function initialize(){addDecorator()}function SVGComposableEffect(){}SVGComposableEffect.prototype={createMergeNode:function e(a,i){var s=createNS("feMerge");s.setAttribute("result",a);var o,c;for(c=0;c<i.length;c+=1)o=createNS("feMergeNode"),o.setAttribute("in",i[c]),s.appendChild(o),s.appendChild(o);return s}};var linearFilterValue="0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0";function SVGTintFilter(e,a,i,s,o){this.filterManager=a;var c=createNS("feColorMatrix");c.setAttribute("type","matrix"),c.setAttribute("color-interpolation-filters","linearRGB"),c.setAttribute("values",linearFilterValue+" 1 0"),this.linearFilter=c,c.setAttribute("result",s+"_tint_1"),e.appendChild(c),c=createNS("feColorMatrix"),c.setAttribute("type","matrix"),c.setAttribute("color-interpolation-filters","sRGB"),c.setAttribute("values","1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"),c.setAttribute("result",s+"_tint_2"),e.appendChild(c),this.matrixFilter=c;var d=this.createMergeNode(s,[o,s+"_tint_1",s+"_tint_2"]);e.appendChild(d)}extendPrototype([SVGComposableEffect],SVGTintFilter),SVGTintFilter.prototype.renderFrame=function(e){if(e||this.filterManager._mdf){var a=this.filterManager.effectElements[0].p.v,i=this.filterManager.effectElements[1].p.v,s=this.filterManager.effectElements[2].p.v/100;this.linearFilter.setAttribute("values",linearFilterValue+" "+s+" 0"),this.matrixFilter.setAttribute("values",i[0]-a[0]+" 0 0 0 "+a[0]+" "+(i[1]-a[1])+" 0 0 0 "+a[1]+" "+(i[2]-a[2])+" 0 0 0 "+a[2]+" 0 0 0 1 0")}};function SVGFillFilter(e,a,i,s){this.filterManager=a;var o=createNS("feColorMatrix");o.setAttribute("type","matrix"),o.setAttribute("color-interpolation-filters","sRGB"),o.setAttribute("values","1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"),o.setAttribute("result",s),e.appendChild(o),this.matrixFilter=o}SVGFillFilter.prototype.renderFrame=function(e){if(e||this.filterManager._mdf){var a=this.filterManager.effectElements[2].p.v,i=this.filterManager.effectElements[6].p.v;this.matrixFilter.setAttribute("values","0 0 0 0 "+a[0]+" 0 0 0 0 "+a[1]+" 0 0 0 0 "+a[2]+" 0 0 0 "+i+" 0")}};function SVGStrokeEffect(e,a,i){this.initialized=!1,this.filterManager=a,this.elem=i,this.paths=[]}SVGStrokeEffect.prototype.initialize=function(){var e=this.elem.layerElement.children||this.elem.layerElement.childNodes,a,i,s,o;for(this.filterManager.effectElements[1].p.v===1?(o=this.elem.maskManager.masksProperties.length,s=0):(s=this.filterManager.effectElements[0].p.v-1,o=s+1),i=createNS("g"),i.setAttribute("fill","none"),i.setAttribute("stroke-linecap","round"),i.setAttribute("stroke-dashoffset",1),s;s<o;s+=1)a=createNS("path"),i.appendChild(a),this.paths.push({p:a,m:s});if(this.filterManager.effectElements[10].p.v===3){var c=createNS("mask"),d=createElementID();c.setAttribute("id",d),c.setAttribute("mask-type","alpha"),c.appendChild(i),this.elem.globalData.defs.appendChild(c);var b=createNS("g");for(b.setAttribute("mask","url("+getLocationHref()+"#"+d+")");e[0];)b.appendChild(e[0]);this.elem.layerElement.appendChild(b),this.masker=c,i.setAttribute("stroke","#fff")}else if(this.filterManager.effectElements[10].p.v===1||this.filterManager.effectElements[10].p.v===2){if(this.filterManager.effectElements[10].p.v===2)for(e=this.elem.layerElement.children||this.elem.layerElement.childNodes;e.length;)this.elem.layerElement.removeChild(e[0]);this.elem.layerElement.appendChild(i),this.elem.layerElement.removeAttribute("mask"),i.setAttribute("stroke","#fff")}this.initialized=!0,this.pathMasker=i},SVGStrokeEffect.prototype.renderFrame=function(e){this.initialized||this.initialize();var a,i=this.paths.length,s,o;for(a=0;a<i;a+=1)if(this.paths[a].m!==-1&&(s=this.elem.maskManager.viewData[this.paths[a].m],o=this.paths[a].p,(e||this.filterManager._mdf||s.prop._mdf)&&o.setAttribute("d",s.lastPath),e||this.filterManager.effectElements[9].p._mdf||this.filterManager.effectElements[4].p._mdf||this.filterManager.effectElements[7].p._mdf||this.filterManager.effectElements[8].p._mdf||s.prop._mdf)){var c;if(this.filterManager.effectElements[7].p.v!==0||this.filterManager.effectElements[8].p.v!==100){var d=Math.min(this.filterManager.effectElements[7].p.v,this.filterManager.effectElements[8].p.v)*.01,b=Math.max(this.filterManager.effectElements[7].p.v,this.filterManager.effectElements[8].p.v)*.01,g=o.getTotalLength();c="0 0 0 "+g*d+" ";var _=g*(b-d),tt=1+this.filterManager.effectElements[4].p.v*2*this.filterManager.effectElements[9].p.v*.01,it=Math.floor(_/tt),et;for(et=0;et<it;et+=1)c+="1 "+this.filterManager.effectElements[4].p.v*2*this.filterManager.effectElements[9].p.v*.01+" ";c+="0 "+g*10+" 0 0"}else c="1 "+this.filterManager.effectElements[4].p.v*2*this.filterManager.effectElements[9].p.v*.01;o.setAttribute("stroke-dasharray",c)}if((e||this.filterManager.effectElements[4].p._mdf)&&this.pathMasker.setAttribute("stroke-width",this.filterManager.effectElements[4].p.v*2),(e||this.filterManager.effectElements[6].p._mdf)&&this.pathMasker.setAttribute("opacity",this.filterManager.effectElements[6].p.v),(this.filterManager.effectElements[10].p.v===1||this.filterManager.effectElements[10].p.v===2)&&(e||this.filterManager.effectElements[3].p._mdf)){var st=this.filterManager.effectElements[3].p.v;this.pathMasker.setAttribute("stroke","rgb("+bmFloor(st[0]*255)+","+bmFloor(st[1]*255)+","+bmFloor(st[2]*255)+")")}};function SVGTritoneFilter(e,a,i,s){this.filterManager=a;var o=createNS("feColorMatrix");o.setAttribute("type","matrix"),o.setAttribute("color-interpolation-filters","linearRGB"),o.setAttribute("values","0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"),e.appendChild(o);var c=createNS("feComponentTransfer");c.setAttribute("color-interpolation-filters","sRGB"),c.setAttribute("result",s),this.matrixFilter=c;var d=createNS("feFuncR");d.setAttribute("type","table"),c.appendChild(d),this.feFuncR=d;var b=createNS("feFuncG");b.setAttribute("type","table"),c.appendChild(b),this.feFuncG=b;var g=createNS("feFuncB");g.setAttribute("type","table"),c.appendChild(g),this.feFuncB=g,e.appendChild(c)}SVGTritoneFilter.prototype.renderFrame=function(e){if(e||this.filterManager._mdf){var a=this.filterManager.effectElements[0].p.v,i=this.filterManager.effectElements[1].p.v,s=this.filterManager.effectElements[2].p.v,o=s[0]+" "+i[0]+" "+a[0],c=s[1]+" "+i[1]+" "+a[1],d=s[2]+" "+i[2]+" "+a[2];this.feFuncR.setAttribute("tableValues",o),this.feFuncG.setAttribute("tableValues",c),this.feFuncB.setAttribute("tableValues",d)}};function SVGProLevelsFilter(e,a,i,s){this.filterManager=a;var o=this.filterManager.effectElements,c=createNS("feComponentTransfer");(o[10].p.k||o[10].p.v!==0||o[11].p.k||o[11].p.v!==1||o[12].p.k||o[12].p.v!==1||o[13].p.k||o[13].p.v!==0||o[14].p.k||o[14].p.v!==1)&&(this.feFuncR=this.createFeFunc("feFuncR",c)),(o[17].p.k||o[17].p.v!==0||o[18].p.k||o[18].p.v!==1||o[19].p.k||o[19].p.v!==1||o[20].p.k||o[20].p.v!==0||o[21].p.k||o[21].p.v!==1)&&(this.feFuncG=this.createFeFunc("feFuncG",c)),(o[24].p.k||o[24].p.v!==0||o[25].p.k||o[25].p.v!==1||o[26].p.k||o[26].p.v!==1||o[27].p.k||o[27].p.v!==0||o[28].p.k||o[28].p.v!==1)&&(this.feFuncB=this.createFeFunc("feFuncB",c)),(o[31].p.k||o[31].p.v!==0||o[32].p.k||o[32].p.v!==1||o[33].p.k||o[33].p.v!==1||o[34].p.k||o[34].p.v!==0||o[35].p.k||o[35].p.v!==1)&&(this.feFuncA=this.createFeFunc("feFuncA",c)),(this.feFuncR||this.feFuncG||this.feFuncB||this.feFuncA)&&(c.setAttribute("color-interpolation-filters","sRGB"),e.appendChild(c)),(o[3].p.k||o[3].p.v!==0||o[4].p.k||o[4].p.v!==1||o[5].p.k||o[5].p.v!==1||o[6].p.k||o[6].p.v!==0||o[7].p.k||o[7].p.v!==1)&&(c=createNS("feComponentTransfer"),c.setAttribute("color-interpolation-filters","sRGB"),c.setAttribute("result",s),e.appendChild(c),this.feFuncRComposed=this.createFeFunc("feFuncR",c),this.feFuncGComposed=this.createFeFunc("feFuncG",c),this.feFuncBComposed=this.createFeFunc("feFuncB",c))}SVGProLevelsFilter.prototype.createFeFunc=function(e,a){var i=createNS(e);return i.setAttribute("type","table"),a.appendChild(i),i},SVGProLevelsFilter.prototype.getTableValue=function(e,a,i,s,o){for(var c=0,d=256,b,g=Math.min(e,a),_=Math.max(e,a),tt=Array.call(null,{length:d}),it,et=0,st=o-s,nt=a-e;c<=256;)b=c/256,b<=g?it=nt<0?o:s:b>=_?it=nt<0?s:o:it=s+st*Math.pow((b-e)/nt,1/i),tt[et]=it,et+=1,c+=256/(d-1);return tt.join(" ")},SVGProLevelsFilter.prototype.renderFrame=function(e){if(e||this.filterManager._mdf){var a,i=this.filterManager.effectElements;this.feFuncRComposed&&(e||i[3].p._mdf||i[4].p._mdf||i[5].p._mdf||i[6].p._mdf||i[7].p._mdf)&&(a=this.getTableValue(i[3].p.v,i[4].p.v,i[5].p.v,i[6].p.v,i[7].p.v),this.feFuncRComposed.setAttribute("tableValues",a),this.feFuncGComposed.setAttribute("tableValues",a),this.feFuncBComposed.setAttribute("tableValues",a)),this.feFuncR&&(e||i[10].p._mdf||i[11].p._mdf||i[12].p._mdf||i[13].p._mdf||i[14].p._mdf)&&(a=this.getTableValue(i[10].p.v,i[11].p.v,i[12].p.v,i[13].p.v,i[14].p.v),this.feFuncR.setAttribute("tableValues",a)),this.feFuncG&&(e||i[17].p._mdf||i[18].p._mdf||i[19].p._mdf||i[20].p._mdf||i[21].p._mdf)&&(a=this.getTableValue(i[17].p.v,i[18].p.v,i[19].p.v,i[20].p.v,i[21].p.v),this.feFuncG.setAttribute("tableValues",a)),this.feFuncB&&(e||i[24].p._mdf||i[25].p._mdf||i[26].p._mdf||i[27].p._mdf||i[28].p._mdf)&&(a=this.getTableValue(i[24].p.v,i[25].p.v,i[26].p.v,i[27].p.v,i[28].p.v),this.feFuncB.setAttribute("tableValues",a)),this.feFuncA&&(e||i[31].p._mdf||i[32].p._mdf||i[33].p._mdf||i[34].p._mdf||i[35].p._mdf)&&(a=this.getTableValue(i[31].p.v,i[32].p.v,i[33].p.v,i[34].p.v,i[35].p.v),this.feFuncA.setAttribute("tableValues",a))}};function SVGDropShadowEffect(e,a,i,s,o){var c=a.container.globalData.renderConfig.filterSize,d=a.data.fs||c;e.setAttribute("x",d.x||c.x),e.setAttribute("y",d.y||c.y),e.setAttribute("width",d.width||c.width),e.setAttribute("height",d.height||c.height),this.filterManager=a;var b=createNS("feGaussianBlur");b.setAttribute("in","SourceAlpha"),b.setAttribute("result",s+"_drop_shadow_1"),b.setAttribute("stdDeviation","0"),this.feGaussianBlur=b,e.appendChild(b);var g=createNS("feOffset");g.setAttribute("dx","25"),g.setAttribute("dy","0"),g.setAttribute("in",s+"_drop_shadow_1"),g.setAttribute("result",s+"_drop_shadow_2"),this.feOffset=g,e.appendChild(g);var _=createNS("feFlood");_.setAttribute("flood-color","#00ff00"),_.setAttribute("flood-opacity","1"),_.setAttribute("result",s+"_drop_shadow_3"),this.feFlood=_,e.appendChild(_);var tt=createNS("feComposite");tt.setAttribute("in",s+"_drop_shadow_3"),tt.setAttribute("in2",s+"_drop_shadow_2"),tt.setAttribute("operator","in"),tt.setAttribute("result",s+"_drop_shadow_4"),e.appendChild(tt);var it=this.createMergeNode(s,[s+"_drop_shadow_4",o]);e.appendChild(it)}extendPrototype([SVGComposableEffect],SVGDropShadowEffect),SVGDropShadowEffect.prototype.renderFrame=function(e){if(e||this.filterManager._mdf){if((e||this.filterManager.effectElements[4].p._mdf)&&this.feGaussianBlur.setAttribute("stdDeviation",this.filterManager.effectElements[4].p.v/4),e||this.filterManager.effectElements[0].p._mdf){var a=this.filterManager.effectElements[0].p.v;this.feFlood.setAttribute("flood-color",rgbToHex(Math.round(a[0]*255),Math.round(a[1]*255),Math.round(a[2]*255)))}if((e||this.filterManager.effectElements[1].p._mdf)&&this.feFlood.setAttribute("flood-opacity",this.filterManager.effectElements[1].p.v/255),e||this.filterManager.effectElements[2].p._mdf||this.filterManager.effectElements[3].p._mdf){var i=this.filterManager.effectElements[3].p.v,s=(this.filterManager.effectElements[2].p.v-90)*degToRads,o=i*Math.cos(s),c=i*Math.sin(s);this.feOffset.setAttribute("dx",o),this.feOffset.setAttribute("dy",c)}}};var _svgMatteSymbols=[];function SVGMatte3Effect(e,a,i){this.initialized=!1,this.filterManager=a,this.filterElem=e,this.elem=i,i.matteElement=createNS("g"),i.matteElement.appendChild(i.layerElement),i.matteElement.appendChild(i.transformedElement),i.baseElement=i.matteElement}SVGMatte3Effect.prototype.findSymbol=function(e){for(var a=0,i=_svgMatteSymbols.length;a<i;){if(_svgMatteSymbols[a]===e)return _svgMatteSymbols[a];a+=1}return null},SVGMatte3Effect.prototype.replaceInParent=function(e,a){var i=e.layerElement.parentNode;if(i){for(var s=i.children,o=0,c=s.length;o<c&&s[o]!==e.layerElement;)o+=1;var d;o<=c-2&&(d=s[o+1]);var b=createNS("use");b.setAttribute("href","#"+a),d?i.insertBefore(b,d):i.appendChild(b)}},SVGMatte3Effect.prototype.setElementAsMask=function(e,a){if(!this.findSymbol(a)){var i=createElementID(),s=createNS("mask");s.setAttribute("id",a.layerId),s.setAttribute("mask-type","alpha"),_svgMatteSymbols.push(a);var o=e.globalData.defs;o.appendChild(s);var c=createNS("symbol");c.setAttribute("id",i),this.replaceInParent(a,i),c.appendChild(a.layerElement),o.appendChild(c);var d=createNS("use");d.setAttribute("href","#"+i),s.appendChild(d),a.data.hd=!1,a.show()}e.setMatte(a.layerId)},SVGMatte3Effect.prototype.initialize=function(){for(var e=this.filterManager.effectElements[0].p.v,a=this.elem.comp.elements,i=0,s=a.length;i<s;)a[i]&&a[i].data.ind===e&&this.setElementAsMask(this.elem,a[i]),i+=1;this.initialized=!0},SVGMatte3Effect.prototype.renderFrame=function(){this.initialized||this.initialize()};function SVGGaussianBlurEffect(e,a,i,s){e.setAttribute("x","-100%"),e.setAttribute("y","-100%"),e.setAttribute("width","300%"),e.setAttribute("height","300%"),this.filterManager=a;var o=createNS("feGaussianBlur");o.setAttribute("result",s),e.appendChild(o),this.feGaussianBlur=o}SVGGaussianBlurEffect.prototype.renderFrame=function(e){if(e||this.filterManager._mdf){var a=.3,i=this.filterManager.effectElements[0].p.v*a,s=this.filterManager.effectElements[1].p.v,o=s==3?0:i,c=s==2?0:i;this.feGaussianBlur.setAttribute("stdDeviation",o+" "+c);var d=this.filterManager.effectElements[2].p.v==1?"wrap":"duplicate";this.feGaussianBlur.setAttribute("edgeMode",d)}};function TransformEffect(){}TransformEffect.prototype.init=function(e){this.effectsManager=e,this.type=effectTypes.TRANSFORM_EFFECT,this.matrix=new Matrix,this.opacity=-1,this._mdf=!1,this._opMdf=!1},TransformEffect.prototype.renderFrame=function(e){if(this._opMdf=!1,this._mdf=!1,e||this.effectsManager._mdf){var a=this.effectsManager.effectElements,i=a[0].p.v,s=a[1].p.v,o=a[2].p.v===1,c=a[3].p.v,d=o?c:a[4].p.v,b=a[5].p.v,g=a[6].p.v,_=a[7].p.v;this.matrix.reset(),this.matrix.translate(-i[0],-i[1],i[2]),this.matrix.scale(d*.01,c*.01,1),this.matrix.rotate(-_*degToRads),this.matrix.skewFromAxis(-b*degToRads,(g+90)*degToRads),this.matrix.translate(s[0],s[1],0),this._mdf=!0,this.opacity!==a[8].p.v&&(this.opacity=a[8].p.v,this._opMdf=!0)}};function SVGTransformEffect(e,a){this.init(a)}extendPrototype([TransformEffect],SVGTransformEffect);function CVTransformEffect(e){this.init(e)}return extendPrototype([TransformEffect],CVTransformEffect),registerRenderer("canvas",CanvasRenderer),registerRenderer("html",HybridRenderer),registerRenderer("svg",SVGRenderer),ShapeModifiers.registerModifier("tm",TrimModifier),ShapeModifiers.registerModifier("pb",PuckerAndBloatModifier),ShapeModifiers.registerModifier("rp",RepeaterModifier),ShapeModifiers.registerModifier("rd",RoundCornersModifier),ShapeModifiers.registerModifier("zz",ZigZagModifier),ShapeModifiers.registerModifier("op",OffsetPathModifier),setExpressionsPlugin(Expressions),setExpressionInterfaces(getInterface),initialize$1(),initialize(),registerEffect$1(20,SVGTintFilter,!0),registerEffect$1(21,SVGFillFilter,!0),registerEffect$1(22,SVGStrokeEffect,!1),registerEffect$1(23,SVGTritoneFilter,!0),registerEffect$1(24,SVGProLevelsFilter,!0),registerEffect$1(25,SVGDropShadowEffect,!0),registerEffect$1(28,SVGMatte3Effect,!1),registerEffect$1(29,SVGGaussianBlurEffect,!0),registerEffect$1(35,SVGTransformEffect,!1),registerEffect(35,CVTransformEffect),lottie})})(lottie$1,lottie$1.exports);var lottieExports=lottie$1.exports;const lottie=getDefaultExportFromCjs(lottieExports);function _arrayLikeToArray(e,a){(a==null||a>e.length)&&(a=e.length);for(var i=0,s=Array(a);i<a;i++)s[i]=e[i];return s}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _defineProperty(e,a,i){return(a=_toPropertyKey(a))in e?Object.defineProperty(e,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[a]=i,e}function _iterableToArrayLimit(e,a){var i=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(i!=null){var s,o,c,d,b=[],g=!0,_=!1;try{if(c=(i=i.call(e)).next,a!==0)for(;!(g=(s=c.call(i)).done)&&(b.push(s.value),b.length!==a);g=!0);}catch(tt){_=!0,o=tt}finally{try{if(!g&&i.return!=null&&(d=i.return(),Object(d)!==d))return}finally{if(_)throw o}}return b}}function _nonIterableRest(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ownKeys(e,a){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);a&&(s=s.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),i.push.apply(i,s)}return i}function _objectSpread2(e){for(var a=1;a<arguments.length;a++){var i=arguments[a]!=null?arguments[a]:{};a%2?ownKeys(Object(i),!0).forEach(function(s){_defineProperty(e,s,i[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):ownKeys(Object(i)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(i,s))})}return e}function _objectWithoutProperties(e,a){if(e==null)return{};var i,s,o=_objectWithoutPropertiesLoose(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(s=0;s<c.length;s++)i=c[s],a.includes(i)||{}.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}function _objectWithoutPropertiesLoose(e,a){if(e==null)return{};var i={};for(var s in e)if({}.hasOwnProperty.call(e,s)){if(a.includes(s))continue;i[s]=e[s]}return i}function _slicedToArray(e,a){return _arrayWithHoles(e)||_iterableToArrayLimit(e,a)||_unsupportedIterableToArray(e,a)||_nonIterableRest()}function _toPrimitive(e,a){if(typeof e!="object"||!e)return e;var i=e[Symbol.toPrimitive];if(i!==void 0){var s=i.call(e,a);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(e)}function _toPropertyKey(e){var a=_toPrimitive(e,"string");return typeof a=="symbol"?a:a+""}function _unsupportedIterableToArray(e,a){if(e){if(typeof e=="string")return _arrayLikeToArray(e,a);var i={}.toString.call(e).slice(8,-1);return i==="Object"&&e.constructor&&(i=e.constructor.name),i==="Map"||i==="Set"?Array.from(e):i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?_arrayLikeToArray(e,a):void 0}}var _excluded$1=["animationData","loop","autoplay","initialSegment","onComplete","onLoopComplete","onEnterFrame","onSegmentStart","onConfigReady","onDataReady","onDataFailed","onLoadedImages","onDOMLoaded","onDestroy","lottieRef","renderer","name","assetsPath","rendererSettings"],useLottie=function e(a,i){var s=a.animationData,o=a.loop,c=a.autoplay,d=a.initialSegment,b=a.onComplete,g=a.onLoopComplete,_=a.onEnterFrame,tt=a.onSegmentStart,it=a.onConfigReady,et=a.onDataReady,st=a.onDataFailed,nt=a.onLoadedImages,rt=a.onDOMLoaded,ht=a.onDestroy;a.lottieRef,a.renderer,a.name,a.assetsPath,a.rendererSettings;var $=_objectWithoutProperties(a,_excluded$1),_e=reactExports.useState(!1),j=_slicedToArray(_e,2),at=j[0],lt=j[1],pt=reactExports.useRef(),ft=reactExports.useRef(null),mt=function(){var kt;(kt=pt.current)===null||kt===void 0||kt.play()},vt=function(){var kt;(kt=pt.current)===null||kt===void 0||kt.stop()},_t=function(){var kt;(kt=pt.current)===null||kt===void 0||kt.pause()},Et=function(kt){var At;(At=pt.current)===null||At===void 0||At.setSpeed(kt)},gt=function(kt,At){var Pt;(Pt=pt.current)===null||Pt===void 0||Pt.goToAndPlay(kt,At)},St=function(kt,At){var Pt;(Pt=pt.current)===null||Pt===void 0||Pt.goToAndStop(kt,At)},Ct=function(kt){var At;(At=pt.current)===null||At===void 0||At.setDirection(kt)},bt=function(kt,At){var Pt;(Pt=pt.current)===null||Pt===void 0||Pt.playSegments(kt,At)},ct=function(kt){var At;(At=pt.current)===null||At===void 0||At.setSubframe(kt)},xt=function(kt){var At;return(At=pt.current)===null||At===void 0?void 0:At.getDuration(kt)},ot=function(){var kt;(kt=pt.current)===null||kt===void 0||kt.destroy(),pt.current=void 0},ut=function(){var kt=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},At;if(ft.current){(At=pt.current)===null||At===void 0||At.destroy();var Pt=_objectSpread2(_objectSpread2(_objectSpread2({},a),kt),{},{container:ft.current});return pt.current=lottie.loadAnimation(Pt),lt(!!pt.current),function(){var Dt;(Dt=pt.current)===null||Dt===void 0||Dt.destroy(),pt.current=void 0}}};reactExports.useEffect(function(){var dt=ut();return function(){return dt==null?void 0:dt()}},[s,o]),reactExports.useEffect(function(){pt.current&&(pt.current.autoplay=!!c)},[c]),reactExports.useEffect(function(){if(pt.current){if(!d){pt.current.resetSegments(!0);return}!Array.isArray(d)||!d.length||((pt.current.currentRawFrame<d[0]||pt.current.currentRawFrame>d[1])&&(pt.current.currentRawFrame=d[0]),pt.current.setSegment(d[0],d[1]))}},[d]),reactExports.useEffect(function(){var dt=[{name:"complete",handler:b},{name:"loopComplete",handler:g},{name:"enterFrame",handler:_},{name:"segmentStart",handler:tt},{name:"config_ready",handler:it},{name:"data_ready",handler:et},{name:"data_failed",handler:st},{name:"loaded_images",handler:nt},{name:"DOMLoaded",handler:rt},{name:"destroy",handler:ht}],kt=dt.filter(function(Pt){return Pt.handler!=null});if(kt.length){var At=kt.map(function(Pt){var Dt;return(Dt=pt.current)===null||Dt===void 0||Dt.addEventListener(Pt.name,Pt.handler),function(){var wt;(wt=pt.current)===null||wt===void 0||wt.removeEventListener(Pt.name,Pt.handler)}});return function(){At.forEach(function(Pt){return Pt()})}}},[b,g,_,tt,it,et,st,nt,rt,ht]);var yt=React.createElement("div",_objectSpread2({style:i,ref:ft},$));return{View:yt,play:mt,stop:vt,pause:_t,setSpeed:Et,goToAndStop:St,goToAndPlay:gt,setDirection:Ct,playSegments:bt,setSubframe:ct,getDuration:xt,destroy:ot,animationContainerRef:ft,animationLoaded:at,animationItem:pt.current}};function getContainerVisibility(e){var a=e.getBoundingClientRect(),i=a.top,s=a.height,o=window.innerHeight-i,c=window.innerHeight+s;return o/c}function getContainerCursorPosition(e,a,i){var s=e.getBoundingClientRect(),o=s.top,c=s.left,d=s.width,b=s.height,g=(a-c)/d,_=(i-o)/b;return{x:g,y:_}}var useInitInteractivity=function e(a){var i=a.wrapperRef,s=a.animationItem,o=a.mode,c=a.actions;reactExports.useEffect(function(){var d=i.current;if(!(!d||!s||!c.length)){s.stop();var b=function(){var tt=null,it=function(){var st=getContainerVisibility(d),nt=c.find(function(ht){var $=ht.visibility;return $&&st>=$[0]&&st<=$[1]});if(nt){if(nt.type==="seek"&&nt.visibility&&nt.frames.length===2){var rt=nt.frames[0]+Math.ceil((st-nt.visibility[0])/(nt.visibility[1]-nt.visibility[0])*nt.frames[1]);//! goToAndStop must be relative to the start of the current segment
s.goToAndStop(rt-s.firstFrame-1,!0)}nt.type==="loop"&&(tt===null||tt!==nt.frames||s.isPaused)&&(s.playSegments(nt.frames,!0),tt=nt.frames),nt.type==="play"&&s.isPaused&&(s.resetSegments(!0),s.play()),nt.type==="stop"&&s.goToAndStop(nt.frames[0]-s.firstFrame-1,!0)}};return document.addEventListener("scroll",it),function(){document.removeEventListener("scroll",it)}},g=function(){var tt=function(nt,rt){var ht=nt,$=rt;if(ht!==-1&&$!==-1){var _e=getContainerCursorPosition(d,ht,$);ht=_e.x,$=_e.y}var j=c.find(function(pt){var ft=pt.position;return ft&&Array.isArray(ft.x)&&Array.isArray(ft.y)?ht>=ft.x[0]&&ht<=ft.x[1]&&$>=ft.y[0]&&$<=ft.y[1]:ft&&!Number.isNaN(ft.x)&&!Number.isNaN(ft.y)?ht===ft.x&&$===ft.y:!1});if(j){if(j.type==="seek"&&j.position&&Array.isArray(j.position.x)&&Array.isArray(j.position.y)&&j.frames.length===2){var at=(ht-j.position.x[0])/(j.position.x[1]-j.position.x[0]),lt=($-j.position.y[0])/(j.position.y[1]-j.position.y[0]);s.playSegments(j.frames,!0),s.goToAndStop(Math.ceil((at+lt)/2*(j.frames[1]-j.frames[0])),!0)}j.type==="loop"&&s.playSegments(j.frames,!0),j.type==="play"&&(s.isPaused&&s.resetSegments(!1),s.playSegments(j.frames)),j.type==="stop"&&s.goToAndStop(j.frames[0],!0)}},it=function(nt){tt(nt.clientX,nt.clientY)},et=function(){tt(-1,-1)};return d.addEventListener("mousemove",it),d.addEventListener("mouseout",et),function(){d.removeEventListener("mousemove",it),d.removeEventListener("mouseout",et)}};switch(o){case"scroll":return b();case"cursor":return g()}}},[o,s])},useLottieInteractivity=function e(a){var i=a.actions,s=a.mode,o=a.lottieObj,c=o.animationItem,d=o.View,b=o.animationContainerRef;return useInitInteractivity({actions:i,animationItem:c,mode:s,wrapperRef:b}),d},_excluded=["style","interactivity"],Lottie=function e(a){var i,s,o,c=a.style,d=a.interactivity,b=_objectWithoutProperties(a,_excluded),g=useLottie(b,c),_=g.View,tt=g.play,it=g.stop,et=g.pause,st=g.setSpeed,nt=g.goToAndStop,rt=g.goToAndPlay,ht=g.setDirection,$=g.playSegments,_e=g.setSubframe,j=g.getDuration,at=g.destroy,lt=g.animationContainerRef,pt=g.animationLoaded,ft=g.animationItem;return reactExports.useEffect(function(){a.lottieRef&&(a.lottieRef.current={play:tt,stop:it,pause:et,setSpeed:st,goToAndPlay:rt,goToAndStop:nt,setDirection:ht,playSegments:$,setSubframe:_e,getDuration:j,destroy:at,animationContainerRef:lt,animationLoaded:pt,animationItem:ft})},[(i=a.lottieRef)===null||i===void 0?void 0:i.current]),useLottieInteractivity({lottieObj:{View:_,play:tt,stop:it,pause:et,setSpeed:st,goToAndStop:nt,goToAndPlay:rt,setDirection:ht,playSegments:$,setSubframe:_e,getDuration:j,destroy:at,animationContainerRef:lt,animationLoaded:pt,animationItem:ft},actions:(s=d==null?void 0:d.actions)!==null&&s!==void 0?s:[],mode:(o=d==null?void 0:d.mode)!==null&&o!==void 0?o:"scroll"})};function WakingUpModal({isOpen:e,onClose:a}){return jsxRuntimeExports.jsx(ModalWithForm,{activeModal:"waking-up",isOpen:e,onClose:a,buttonText:"Close",className:"waking-up",children:jsxRuntimeExports.jsxs("div",{className:"modal__content",children:[jsxRuntimeExports.jsx(Lottie,{animationData:spinner}),jsxRuntimeExports.jsx("p",{children:"🐾 Servers are fetching… Otto’s still paddling."}),jsxRuntimeExports.jsx("p",{children:"Grab a towel — we’ll be ready in just a moment."})]})})}function App(){var lt,pt,ft,mt,vt,_t,Et,gt,St,Ct,bt,ct,xt,ot,ut,yt,dt;const[e,a]=reactExports.useState(""),[i,s]=reactExports.useState(null),[o,c]=reactExports.useState(!1),[d,b]=reactExports.useState(!0),[g,_]=reactExports.useState(!1),tt=useLocation(),it=useNavigate(),et=()=>a("login"),st=()=>a("register"),nt=()=>a("logout"),rt=()=>a(""),ht=tt.pathname==="/onboarding",$=async({email:kt,password:At})=>{try{const{user:Pt,token:Dt}=await loginUser(kt,At);localStorage.setItem("jwt",Dt),console.log("Successfully logged in user:",Pt),s(Pt),c(!0),it("/")}catch(Pt){console.error("Login failed:",Pt),alert("Login failed. Please try again.")}},_e=async({name:kt,email:At,password:Pt})=>{try{const{user:Dt,token:wt}=await registerUser(kt,At,Pt);localStorage.setItem("jwt",wt),s(Dt),c(!0),it("/onboarding")}catch(Dt){console.error("Registration failed:",Dt),alert(Dt.message)}},j=()=>{localStorage.removeItem("jwt"),c(!1),s(null),it("/marketing")},at=!!((pt=(lt=i==null?void 0:i.preferences)==null?void 0:lt.waveHeight)!=null&&pt.length)&&!!((mt=(ft=i==null?void 0:i.preferences)==null?void 0:ft.shredderLevel)!=null&&mt.length)&&!!((Et=(_t=(vt=i==null?void 0:i.preferences)==null?void 0:vt.gear)==null?void 0:_t.boards)!=null&&Et.length)&&!!((Ct=(St=(gt=i==null?void 0:i.preferences)==null?void 0:gt.gear)==null?void 0:St.wetsuits)!=null&&Ct.length)&&!!((xt=(ct=(bt=i==null?void 0:i.preferences)==null?void 0:bt.gear)==null?void 0:ct.fins)!=null&&xt.length)&&!!((ut=(ot=i==null?void 0:i.preferences)==null?void 0:ot.travelDistance)!=null&&ut.length)&&!!((dt=(yt=i==null?void 0:i.preferences)==null?void 0:yt.notifications)!=null&&dt.length);return reactExports.useEffect(()=>{const kt=localStorage.getItem("jwt");kt?getUser(kt).then(At=>{s(At),c(!0),(tt.pathname==="/marketing"||tt.pathname==="/onboarding")&&it("/")}).catch(At=>{console.error("Invalid token, logging out:",At),localStorage.removeItem("jwt"),c(!1),s(null)}).finally(()=>b(!1)):b(!1)},[]),reactExports.useEffect(()=>{(async()=>{try{if(!(await fetch("https://otto-backend-9bmr.onrender.com/health")).ok)throw new Error("failed fetching Render server");_(!1)}catch(At){console.error(At)}})()},[]),d?jsxRuntimeExports.jsx(Preloader,{}):jsxRuntimeExports.jsx(CurrentUserContext.Provider,{value:{userData:i,setUserData:s,isLoggedIn:o,isOnboarded:at,setActiveModal:a},children:jsxRuntimeExports.jsxs("div",{className:"page",children:[!ht&&jsxRuntimeExports.jsx(Header,{onLoginClick:et,onRegisterClick:st,onLogoutClick:nt,onClose:rt}),jsxRuntimeExports.jsx("div",{className:"page_content",children:jsxRuntimeExports.jsxs(Routes,{children:[jsxRuntimeExports.jsx(Route,{path:"/",element:o&&at?jsxRuntimeExports.jsx(HomePage,{userData:i}):o&&!at?jsxRuntimeExports.jsx(Navigate,{to:"/onboarding",replace:!0}):jsxRuntimeExports.jsx(Navigate,{to:"/marketing",replace:!0})}),jsxRuntimeExports.jsx(Route,{path:"/marketing",element:jsxRuntimeExports.jsx(MarketingPage,{onLoginClick:et,onRegisterClick:st,onClose:rt})}),jsxRuntimeExports.jsx(Route,{path:"/onboarding",element:o?jsxRuntimeExports.jsx(OnboardingPage,{}):jsxRuntimeExports.jsx(Navigate,{to:"/marketing",replace:!0})}),jsxRuntimeExports.jsx(Route,{path:"*",element:o&&at?jsxRuntimeExports.jsx(Navigate,{to:"/",replace:!0}):jsxRuntimeExports.jsx(Navigate,{to:"/marketing",replace:!0})})]})}),!ht&&jsxRuntimeExports.jsx(Footer,{}),g&&jsxRuntimeExports.jsx(WakingUpModal,{isOpen:g,onClose:rt}),jsxRuntimeExports.jsx(LoginModal,{isOpen:e==="login",onClose:rt,onLogin:$,handleRegisterClick:st}),jsxRuntimeExports.jsx(RegisterModal,{isOpen:e==="register",onClose:rt,onRegister:_e,handleLoginClick:et}),jsxRuntimeExports.jsx(LogoutModal,{isOpen:e==="logout",onClose:rt,onLogout:j})]})})}client.createRoot(document.getElementById("root")).render(jsxRuntimeExports.jsx(React.StrictMode,{children:jsxRuntimeExports.jsx(HashRouter,{children:jsxRuntimeExports.jsx(App,{})})}));
