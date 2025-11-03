function fh(n,r){for(var u=0;u<r.length;u++){const c=r[u];if(typeof c!="string"&&!Array.isArray(c)){for(const d in c)if(d!=="default"&&!(d in n)){const p=Object.getOwnPropertyDescriptor(c,d);p&&Object.defineProperty(n,d,p.get?p:{enumerable:!0,get:()=>c[d]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))c(d);new MutationObserver(d=>{for(const p of d)if(p.type==="childList")for(const h of p.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&c(h)}).observe(document,{childList:!0,subtree:!0});function u(d){const p={};return d.integrity&&(p.integrity=d.integrity),d.referrerPolicy&&(p.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?p.credentials="include":d.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function c(d){if(d.ep)return;d.ep=!0;const p=u(d);fetch(d.href,p)}})();function dh(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Hc={exports:{}},dl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R1;function mh(){if(R1)return dl;R1=1;var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function u(c,d,p){var h=null;if(p!==void 0&&(h=""+p),d.key!==void 0&&(h=""+d.key),"key"in d){p={};for(var j in d)j!=="key"&&(p[j]=d[j])}else p=d;return d=p.ref,{$$typeof:n,type:c,key:h,ref:d!==void 0?d:null,props:p}}return dl.Fragment=r,dl.jsx=u,dl.jsxs=u,dl}var N1;function ph(){return N1||(N1=1,Hc.exports=mh()),Hc.exports}var f=ph(),Gc={exports:{}},ne={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _1;function gh(){if(_1)return ne;_1=1;var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),h=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),O=Symbol.for("react.activity"),N=Symbol.iterator;function w(b){return b===null||typeof b!="object"?null:(b=N&&b[N]||b["@@iterator"],typeof b=="function"?b:null)}var G={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Q=Object.assign,Z={};function I(b,U,Y){this.props=b,this.context=U,this.refs=Z,this.updater=Y||G}I.prototype.isReactComponent={},I.prototype.setState=function(b,U){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,U,"setState")},I.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function k(){}k.prototype=I.prototype;function J(b,U,Y){this.props=b,this.context=U,this.refs=Z,this.updater=Y||G}var ae=J.prototype=new k;ae.constructor=J,Q(ae,I.prototype),ae.isPureReactComponent=!0;var ce=Array.isArray;function te(){}var L={H:null,A:null,T:null,S:null},xe=Object.prototype.hasOwnProperty;function ke(b,U,Y){var X=Y.ref;return{$$typeof:n,type:b,key:U,ref:X!==void 0?X:null,props:Y}}function kt(b,U){return ke(b.type,U,b.props)}function Ye(b){return typeof b=="object"&&b!==null&&b.$$typeof===n}function Ze(b){var U={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(Y){return U[Y]})}var Qt=/\/+/g;function xt(b,U){return typeof b=="object"&&b!==null&&b.key!=null?Ze(""+b.key):U.toString(36)}function yt(b){switch(b.status){case"fulfilled":return b.value;case"rejected":throw b.reason;default:switch(typeof b.status=="string"?b.then(te,te):(b.status="pending",b.then(function(U){b.status==="pending"&&(b.status="fulfilled",b.value=U)},function(U){b.status==="pending"&&(b.status="rejected",b.reason=U)})),b.status){case"fulfilled":return b.value;case"rejected":throw b.reason}}throw b}function D(b,U,Y,X,ie){var le=typeof b;(le==="undefined"||le==="boolean")&&(b=null);var he=!1;if(b===null)he=!0;else switch(le){case"bigint":case"string":case"number":he=!0;break;case"object":switch(b.$$typeof){case n:case r:he=!0;break;case T:return he=b._init,D(he(b._payload),U,Y,X,ie)}}if(he)return ie=ie(b),he=X===""?"."+xt(b,0):X,ce(ie)?(Y="",he!=null&&(Y=he.replace(Qt,"$&/")+"/"),D(ie,U,Y,"",function(na){return na})):ie!=null&&(Ye(ie)&&(ie=kt(ie,Y+(ie.key==null||b&&b.key===ie.key?"":(""+ie.key).replace(Qt,"$&/")+"/")+he)),U.push(ie)),1;he=0;var Ge=X===""?".":X+":";if(ce(b))for(var Ce=0;Ce<b.length;Ce++)X=b[Ce],le=Ge+xt(X,Ce),he+=D(X,U,Y,le,ie);else if(Ce=w(b),typeof Ce=="function")for(b=Ce.call(b),Ce=0;!(X=b.next()).done;)X=X.value,le=Ge+xt(X,Ce++),he+=D(X,U,Y,le,ie);else if(le==="object"){if(typeof b.then=="function")return D(yt(b),U,Y,X,ie);throw U=String(b),Error("Objects are not valid as a React child (found: "+(U==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":U)+"). If you meant to render a collection of children, use an array instead.")}return he}function $(b,U,Y){if(b==null)return b;var X=[],ie=0;return D(b,X,"","",function(le){return U.call(Y,le,ie++)}),X}function W(b){if(b._status===-1){var U=b._result;U=U(),U.then(function(Y){(b._status===0||b._status===-1)&&(b._status=1,b._result=Y)},function(Y){(b._status===0||b._status===-1)&&(b._status=2,b._result=Y)}),b._status===-1&&(b._status=0,b._result=U)}if(b._status===1)return b._result.default;throw b._result}var se=typeof reportError=="function"?reportError:function(b){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var U=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof b=="object"&&b!==null&&typeof b.message=="string"?String(b.message):String(b),error:b});if(!window.dispatchEvent(U))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",b);return}console.error(b)},ye={map:$,forEach:function(b,U,Y){$(b,function(){U.apply(this,arguments)},Y)},count:function(b){var U=0;return $(b,function(){U++}),U},toArray:function(b){return $(b,function(U){return U})||[]},only:function(b){if(!Ye(b))throw Error("React.Children.only expected to receive a single React element child.");return b}};return ne.Activity=O,ne.Children=ye,ne.Component=I,ne.Fragment=u,ne.Profiler=d,ne.PureComponent=J,ne.StrictMode=c,ne.Suspense=z,ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=L,ne.__COMPILER_RUNTIME={__proto__:null,c:function(b){return L.H.useMemoCache(b)}},ne.cache=function(b){return function(){return b.apply(null,arguments)}},ne.cacheSignal=function(){return null},ne.cloneElement=function(b,U,Y){if(b==null)throw Error("The argument must be a React element, but you passed "+b+".");var X=Q({},b.props),ie=b.key;if(U!=null)for(le in U.key!==void 0&&(ie=""+U.key),U)!xe.call(U,le)||le==="key"||le==="__self"||le==="__source"||le==="ref"&&U.ref===void 0||(X[le]=U[le]);var le=arguments.length-2;if(le===1)X.children=Y;else if(1<le){for(var he=Array(le),Ge=0;Ge<le;Ge++)he[Ge]=arguments[Ge+2];X.children=he}return ke(b.type,ie,X)},ne.createContext=function(b){return b={$$typeof:h,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null},b.Provider=b,b.Consumer={$$typeof:p,_context:b},b},ne.createElement=function(b,U,Y){var X,ie={},le=null;if(U!=null)for(X in U.key!==void 0&&(le=""+U.key),U)xe.call(U,X)&&X!=="key"&&X!=="__self"&&X!=="__source"&&(ie[X]=U[X]);var he=arguments.length-2;if(he===1)ie.children=Y;else if(1<he){for(var Ge=Array(he),Ce=0;Ce<he;Ce++)Ge[Ce]=arguments[Ce+2];ie.children=Ge}if(b&&b.defaultProps)for(X in he=b.defaultProps,he)ie[X]===void 0&&(ie[X]=he[X]);return ke(b,le,ie)},ne.createRef=function(){return{current:null}},ne.forwardRef=function(b){return{$$typeof:j,render:b}},ne.isValidElement=Ye,ne.lazy=function(b){return{$$typeof:T,_payload:{_status:-1,_result:b},_init:W}},ne.memo=function(b,U){return{$$typeof:g,type:b,compare:U===void 0?null:U}},ne.startTransition=function(b){var U=L.T,Y={};L.T=Y;try{var X=b(),ie=L.S;ie!==null&&ie(Y,X),typeof X=="object"&&X!==null&&typeof X.then=="function"&&X.then(te,se)}catch(le){se(le)}finally{U!==null&&Y.types!==null&&(U.types=Y.types),L.T=U}},ne.unstable_useCacheRefresh=function(){return L.H.useCacheRefresh()},ne.use=function(b){return L.H.use(b)},ne.useActionState=function(b,U,Y){return L.H.useActionState(b,U,Y)},ne.useCallback=function(b,U){return L.H.useCallback(b,U)},ne.useContext=function(b){return L.H.useContext(b)},ne.useDebugValue=function(){},ne.useDeferredValue=function(b,U){return L.H.useDeferredValue(b,U)},ne.useEffect=function(b,U){return L.H.useEffect(b,U)},ne.useEffectEvent=function(b){return L.H.useEffectEvent(b)},ne.useId=function(){return L.H.useId()},ne.useImperativeHandle=function(b,U,Y){return L.H.useImperativeHandle(b,U,Y)},ne.useInsertionEffect=function(b,U){return L.H.useInsertionEffect(b,U)},ne.useLayoutEffect=function(b,U){return L.H.useLayoutEffect(b,U)},ne.useMemo=function(b,U){return L.H.useMemo(b,U)},ne.useOptimistic=function(b,U){return L.H.useOptimistic(b,U)},ne.useReducer=function(b,U,Y){return L.H.useReducer(b,U,Y)},ne.useRef=function(b){return L.H.useRef(b)},ne.useState=function(b){return L.H.useState(b)},ne.useSyncExternalStore=function(b,U,Y){return L.H.useSyncExternalStore(b,U,Y)},ne.useTransition=function(){return L.H.useTransition()},ne.version="19.2.0",ne}var D1;function bs(){return D1||(D1=1,Gc.exports=gh()),Gc.exports}var H=bs();const _t=dh(H),hh=fh({__proto__:null,default:_t},[H]);var $c={exports:{}},ml={},Vc={exports:{}},Yc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U1;function vh(){return U1||(U1=1,(function(n){function r(D,$){var W=D.length;D.push($);e:for(;0<W;){var se=W-1>>>1,ye=D[se];if(0<d(ye,$))D[se]=$,D[W]=ye,W=se;else break e}}function u(D){return D.length===0?null:D[0]}function c(D){if(D.length===0)return null;var $=D[0],W=D.pop();if(W!==$){D[0]=W;e:for(var se=0,ye=D.length,b=ye>>>1;se<b;){var U=2*(se+1)-1,Y=D[U],X=U+1,ie=D[X];if(0>d(Y,W))X<ye&&0>d(ie,Y)?(D[se]=ie,D[X]=W,se=X):(D[se]=Y,D[U]=W,se=U);else if(X<ye&&0>d(ie,W))D[se]=ie,D[X]=W,se=X;else break e}}return $}function d(D,$){var W=D.sortIndex-$.sortIndex;return W!==0?W:D.id-$.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;n.unstable_now=function(){return p.now()}}else{var h=Date,j=h.now();n.unstable_now=function(){return h.now()-j}}var z=[],g=[],T=1,O=null,N=3,w=!1,G=!1,Q=!1,Z=!1,I=typeof setTimeout=="function"?setTimeout:null,k=typeof clearTimeout=="function"?clearTimeout:null,J=typeof setImmediate<"u"?setImmediate:null;function ae(D){for(var $=u(g);$!==null;){if($.callback===null)c(g);else if($.startTime<=D)c(g),$.sortIndex=$.expirationTime,r(z,$);else break;$=u(g)}}function ce(D){if(Q=!1,ae(D),!G)if(u(z)!==null)G=!0,te||(te=!0,Ze());else{var $=u(g);$!==null&&yt(ce,$.startTime-D)}}var te=!1,L=-1,xe=5,ke=-1;function kt(){return Z?!0:!(n.unstable_now()-ke<xe)}function Ye(){if(Z=!1,te){var D=n.unstable_now();ke=D;var $=!0;try{e:{G=!1,Q&&(Q=!1,k(L),L=-1),w=!0;var W=N;try{t:{for(ae(D),O=u(z);O!==null&&!(O.expirationTime>D&&kt());){var se=O.callback;if(typeof se=="function"){O.callback=null,N=O.priorityLevel;var ye=se(O.expirationTime<=D);if(D=n.unstable_now(),typeof ye=="function"){O.callback=ye,ae(D),$=!0;break t}O===u(z)&&c(z),ae(D)}else c(z);O=u(z)}if(O!==null)$=!0;else{var b=u(g);b!==null&&yt(ce,b.startTime-D),$=!1}}break e}finally{O=null,N=W,w=!1}$=void 0}}finally{$?Ze():te=!1}}}var Ze;if(typeof J=="function")Ze=function(){J(Ye)};else if(typeof MessageChannel<"u"){var Qt=new MessageChannel,xt=Qt.port2;Qt.port1.onmessage=Ye,Ze=function(){xt.postMessage(null)}}else Ze=function(){I(Ye,0)};function yt(D,$){L=I(function(){D(n.unstable_now())},$)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(D){D.callback=null},n.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):xe=0<D?Math.floor(1e3/D):5},n.unstable_getCurrentPriorityLevel=function(){return N},n.unstable_next=function(D){switch(N){case 1:case 2:case 3:var $=3;break;default:$=N}var W=N;N=$;try{return D()}finally{N=W}},n.unstable_requestPaint=function(){Z=!0},n.unstable_runWithPriority=function(D,$){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var W=N;N=D;try{return $()}finally{N=W}},n.unstable_scheduleCallback=function(D,$,W){var se=n.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?se+W:se):W=se,D){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=W+ye,D={id:T++,callback:$,priorityLevel:D,startTime:W,expirationTime:ye,sortIndex:-1},W>se?(D.sortIndex=W,r(g,D),u(z)===null&&D===u(g)&&(Q?(k(L),L=-1):Q=!0,yt(ce,W-se))):(D.sortIndex=ye,r(z,D),G||w||(G=!0,te||(te=!0,Ze()))),D},n.unstable_shouldYield=kt,n.unstable_wrapCallback=function(D){var $=N;return function(){var W=N;N=$;try{return D.apply(this,arguments)}finally{N=W}}}})(Yc)),Yc}var q1;function xh(){return q1||(q1=1,Vc.exports=vh()),Vc.exports}var Zc={exports:{}},rt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w1;function yh(){if(w1)return rt;w1=1;var n=bs();function r(z){var g="https://react.dev/errors/"+z;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var T=2;T<arguments.length;T++)g+="&args[]="+encodeURIComponent(arguments[T])}return"Minified React error #"+z+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var c={d:{f:u,r:function(){throw Error(r(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},d=Symbol.for("react.portal");function p(z,g,T){var O=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:O==null?null:""+O,children:z,containerInfo:g,implementation:T}}var h=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function j(z,g){if(z==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return rt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,rt.createPortal=function(z,g){var T=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(r(299));return p(z,g,null,T)},rt.flushSync=function(z){var g=h.T,T=c.p;try{if(h.T=null,c.p=2,z)return z()}finally{h.T=g,c.p=T,c.d.f()}},rt.preconnect=function(z,g){typeof z=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,c.d.C(z,g))},rt.prefetchDNS=function(z){typeof z=="string"&&c.d.D(z)},rt.preinit=function(z,g){if(typeof z=="string"&&g&&typeof g.as=="string"){var T=g.as,O=j(T,g.crossOrigin),N=typeof g.integrity=="string"?g.integrity:void 0,w=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;T==="style"?c.d.S(z,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:O,integrity:N,fetchPriority:w}):T==="script"&&c.d.X(z,{crossOrigin:O,integrity:N,fetchPriority:w,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},rt.preinitModule=function(z,g){if(typeof z=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var T=j(g.as,g.crossOrigin);c.d.M(z,{crossOrigin:T,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&c.d.M(z)},rt.preload=function(z,g){if(typeof z=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var T=g.as,O=j(T,g.crossOrigin);c.d.L(z,T,{crossOrigin:O,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},rt.preloadModule=function(z,g){if(typeof z=="string")if(g){var T=j(g.as,g.crossOrigin);c.d.m(z,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:T,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else c.d.m(z)},rt.requestFormReset=function(z){c.d.r(z)},rt.unstable_batchedUpdates=function(z,g){return z(g)},rt.useFormState=function(z,g,T){return h.H.useFormState(z,g,T)},rt.useFormStatus=function(){return h.H.useHostTransitionStatus()},rt.version="19.2.0",rt}var B1;function Jm(){if(B1)return Zc.exports;B1=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(r){console.error(r)}}return n(),Zc.exports=yh(),Zc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L1;function bh(){if(L1)return ml;L1=1;var n=xh(),r=bs(),u=Jm();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function h(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function j(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function z(e){if(p(e)!==e)throw Error(c(188))}function g(e){var t=e.alternate;if(!t){if(t=p(e),t===null)throw Error(c(188));return t!==e?null:e}for(var a=e,i=t;;){var l=a.return;if(l===null)break;var o=l.alternate;if(o===null){if(i=l.return,i!==null){a=i;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===a)return z(l),e;if(o===i)return z(l),t;o=o.sibling}throw Error(c(188))}if(a.return!==i.return)a=l,i=o;else{for(var s=!1,m=l.child;m;){if(m===a){s=!0,a=l,i=o;break}if(m===i){s=!0,i=l,a=o;break}m=m.sibling}if(!s){for(m=o.child;m;){if(m===a){s=!0,a=o,i=l;break}if(m===i){s=!0,i=o,a=l;break}m=m.sibling}if(!s)throw Error(c(189))}}if(a.alternate!==i)throw Error(c(190))}if(a.tag!==3)throw Error(c(188));return a.stateNode.current===a?e:t}function T(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=T(e),t!==null)return t;e=e.sibling}return null}var O=Object.assign,N=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),G=Symbol.for("react.portal"),Q=Symbol.for("react.fragment"),Z=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),k=Symbol.for("react.consumer"),J=Symbol.for("react.context"),ae=Symbol.for("react.forward_ref"),ce=Symbol.for("react.suspense"),te=Symbol.for("react.suspense_list"),L=Symbol.for("react.memo"),xe=Symbol.for("react.lazy"),ke=Symbol.for("react.activity"),kt=Symbol.for("react.memo_cache_sentinel"),Ye=Symbol.iterator;function Ze(e){return e===null||typeof e!="object"?null:(e=Ye&&e[Ye]||e["@@iterator"],typeof e=="function"?e:null)}var Qt=Symbol.for("react.client.reference");function xt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Qt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Q:return"Fragment";case I:return"Profiler";case Z:return"StrictMode";case ce:return"Suspense";case te:return"SuspenseList";case ke:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case G:return"Portal";case J:return e.displayName||"Context";case k:return(e._context.displayName||"Context")+".Consumer";case ae:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case L:return t=e.displayName||null,t!==null?t:xt(e.type)||"Memo";case xe:t=e._payload,e=e._init;try{return xt(e(t))}catch{}}return null}var yt=Array.isArray,D=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},se=[],ye=-1;function b(e){return{current:e}}function U(e){0>ye||(e.current=se[ye],se[ye]=null,ye--)}function Y(e,t){ye++,se[ye]=e.current,e.current=t}var X=b(null),ie=b(null),le=b(null),he=b(null);function Ge(e,t){switch(Y(le,t),Y(ie,e),Y(X,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?W0(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=W0(t),e=e1(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}U(X),Y(X,e)}function Ce(){U(X),U(ie),U(le)}function na(e){e.memoizedState!==null&&Y(he,e);var t=X.current,a=e1(t,e.type);t!==a&&(Y(ie,e),Y(X,a))}function la(e){ie.current===e&&(U(X),U(ie)),he.current===e&&(U(he),ul._currentValue=W)}var Dt,Ms;function ii(e){if(Dt===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Dt=t&&t[1]||"",Ms=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Dt+e+Ms}var Sr=!1;function Ar(e,t){if(!e||Sr)return"";Sr=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var B=function(){throw Error()};if(Object.defineProperty(B.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(B,[])}catch(R){var M=R}Reflect.construct(e,[],B)}else{try{B.call()}catch(R){M=R}e.call(B.prototype)}}else{try{throw Error()}catch(R){M=R}(B=e())&&typeof B.catch=="function"&&B.catch(function(){})}}catch(R){if(R&&M&&typeof R.stack=="string")return[R.stack,M.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=i.DetermineComponentFrameRoot(),s=o[0],m=o[1];if(s&&m){var x=s.split(`
`),E=m.split(`
`);for(l=i=0;i<x.length&&!x[i].includes("DetermineComponentFrameRoot");)i++;for(;l<E.length&&!E[l].includes("DetermineComponentFrameRoot");)l++;if(i===x.length||l===E.length)for(i=x.length-1,l=E.length-1;1<=i&&0<=l&&x[i]!==E[l];)l--;for(;1<=i&&0<=l;i--,l--)if(x[i]!==E[l]){if(i!==1||l!==1)do if(i--,l--,0>l||x[i]!==E[l]){var _=`
`+x[i].replace(" at new "," at ");return e.displayName&&_.includes("<anonymous>")&&(_=_.replace("<anonymous>",e.displayName)),_}while(1<=i&&0<=l);break}}}finally{Sr=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ii(a):""}function Vp(e,t){switch(e.tag){case 26:case 27:case 5:return ii(e.type);case 16:return ii("Lazy");case 13:return e.child!==t&&t!==null?ii("Suspense Fallback"):ii("Suspense");case 19:return ii("SuspenseList");case 0:case 15:return Ar(e.type,!1);case 11:return Ar(e.type.render,!1);case 1:return Ar(e.type,!0);case 31:return ii("Activity");default:return""}}function Os(e){try{var t="",a=null;do t+=Vp(e,a),a=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Cr=Object.prototype.hasOwnProperty,Er=n.unstable_scheduleCallback,jr=n.unstable_cancelCallback,Yp=n.unstable_shouldYield,Zp=n.unstable_requestPaint,bt=n.unstable_now,Qp=n.unstable_getCurrentPriorityLevel,Rs=n.unstable_ImmediatePriority,Ns=n.unstable_UserBlockingPriority,Sl=n.unstable_NormalPriority,Xp=n.unstable_LowPriority,_s=n.unstable_IdlePriority,Kp=n.log,Jp=n.unstable_setDisableYieldValue,bn=null,zt=null;function ja(e){if(typeof Kp=="function"&&Jp(e),zt&&typeof zt.setStrictMode=="function")try{zt.setStrictMode(bn,e)}catch{}}var St=Math.clz32?Math.clz32:kp,Fp=Math.log,Ip=Math.LN2;function kp(e){return e>>>=0,e===0?32:31-(Fp(e)/Ip|0)|0}var Al=256,Cl=262144,El=4194304;function ni(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function jl(e,t,a){var i=e.pendingLanes;if(i===0)return 0;var l=0,o=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var m=i&134217727;return m!==0?(i=m&~o,i!==0?l=ni(i):(s&=m,s!==0?l=ni(s):a||(a=m&~e,a!==0&&(l=ni(a))))):(m=i&~o,m!==0?l=ni(m):s!==0?l=ni(s):a||(a=i&~e,a!==0&&(l=ni(a)))),l===0?0:t!==0&&t!==l&&(t&o)===0&&(o=l&-l,a=t&-t,o>=a||o===32&&(a&4194048)!==0)?t:l}function zn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Pp(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ds(){var e=El;return El<<=1,(El&62914560)===0&&(El=4194304),e}function Tr(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Sn(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Wp(e,t,a,i,l,o){var s=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var m=e.entanglements,x=e.expirationTimes,E=e.hiddenUpdates;for(a=s&~a;0<a;){var _=31-St(a),B=1<<_;m[_]=0,x[_]=-1;var M=E[_];if(M!==null)for(E[_]=null,_=0;_<M.length;_++){var R=M[_];R!==null&&(R.lane&=-536870913)}a&=~B}i!==0&&Us(e,i,0),o!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=o&~(s&~t))}function Us(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-St(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|a&261930}function qs(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var i=31-St(a),l=1<<i;l&t|e[i]&t&&(e[i]|=t),a&=~l}}function ws(e,t){var a=t&-t;return a=(a&42)!==0?1:Mr(a),(a&(e.suspendedLanes|t))!==0?0:a}function Mr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Or(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Bs(){var e=$.p;return e!==0?e:(e=window.event,e===void 0?32:A1(e.type))}function Ls(e,t){var a=$.p;try{return $.p=e,t()}finally{$.p=a}}var Ta=Math.random().toString(36).slice(2),at="__reactFiber$"+Ta,ct="__reactProps$"+Ta,ji="__reactContainer$"+Ta,Rr="__reactEvents$"+Ta,eg="__reactListeners$"+Ta,tg="__reactHandles$"+Ta,Hs="__reactResources$"+Ta,An="__reactMarker$"+Ta;function Nr(e){delete e[at],delete e[ct],delete e[Rr],delete e[eg],delete e[tg]}function Ti(e){var t=e[at];if(t)return t;for(var a=e.parentNode;a;){if(t=a[ji]||a[at]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=r1(e);e!==null;){if(a=e[at])return a;e=r1(e)}return t}e=a,a=e.parentNode}return null}function Mi(e){if(e=e[at]||e[ji]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Cn(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function Oi(e){var t=e[Hs];return t||(t=e[Hs]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function We(e){e[An]=!0}var Gs=new Set,$s={};function li(e,t){Ri(e,t),Ri(e+"Capture",t)}function Ri(e,t){for($s[e]=t,e=0;e<t.length;e++)Gs.add(t[e])}var ag=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Vs={},Ys={};function ig(e){return Cr.call(Ys,e)?!0:Cr.call(Vs,e)?!1:ag.test(e)?Ys[e]=!0:(Vs[e]=!0,!1)}function Tl(e,t,a){if(ig(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Ml(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function oa(e,t,a,i){if(i===null)e.removeAttribute(a);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+i)}}function Ut(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Zs(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ng(e,t,a){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var l=i.get,o=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(s){a=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return a},setValue:function(s){a=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function _r(e){if(!e._valueTracker){var t=Zs(e)?"checked":"value";e._valueTracker=ng(e,t,""+e[t])}}function Qs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),i="";return e&&(i=Zs(e)?e.checked?"true":"false":e.value),e=i,e!==a?(t.setValue(e),!0):!1}function Ol(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var lg=/[\n"\\]/g;function qt(e){return e.replace(lg,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Dr(e,t,a,i,l,o,s,m){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),t!=null?s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Ut(t)):e.value!==""+Ut(t)&&(e.value=""+Ut(t)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),t!=null?Ur(e,s,Ut(t)):a!=null?Ur(e,s,Ut(a)):i!=null&&e.removeAttribute("value"),l==null&&o!=null&&(e.defaultChecked=!!o),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.name=""+Ut(m):e.removeAttribute("name")}function Xs(e,t,a,i,l,o,s,m){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.type=o),t!=null||a!=null){if(!(o!=="submit"&&o!=="reset"||t!=null)){_r(e);return}a=a!=null?""+Ut(a):"",t=t!=null?""+Ut(t):a,m||t===e.value||(e.value=t),e.defaultValue=t}i=i??l,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=m?e.checked:!!i,e.defaultChecked=!!i,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s),_r(e)}function Ur(e,t,a){t==="number"&&Ol(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Ni(e,t,a,i){if(e=e.options,t){t={};for(var l=0;l<a.length;l++)t["$"+a[l]]=!0;for(a=0;a<e.length;a++)l=t.hasOwnProperty("$"+e[a].value),e[a].selected!==l&&(e[a].selected=l),l&&i&&(e[a].defaultSelected=!0)}else{for(a=""+Ut(a),t=null,l=0;l<e.length;l++){if(e[l].value===a){e[l].selected=!0,i&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Ks(e,t,a){if(t!=null&&(t=""+Ut(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Ut(a):""}function Js(e,t,a,i){if(t==null){if(i!=null){if(a!=null)throw Error(c(92));if(yt(i)){if(1<i.length)throw Error(c(93));i=i[0]}a=i}a==null&&(a=""),t=a}a=Ut(t),e.defaultValue=a,i=e.textContent,i===a&&i!==""&&i!==null&&(e.value=i),_r(e)}function _i(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var og=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Fs(e,t,a){var i=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,a):typeof a!="number"||a===0||og.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Is(e,t,a){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,a!=null){for(var i in a)!a.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var l in t)i=t[l],t.hasOwnProperty(l)&&a[l]!==i&&Fs(e,l,i)}else for(var o in t)t.hasOwnProperty(o)&&Fs(e,o,t[o])}function qr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rg=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ug=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Rl(e){return ug.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ra(){}var wr=null;function Br(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Di=null,Ui=null;function ks(e){var t=Mi(e);if(t&&(e=t.stateNode)){var a=e[ct]||null;e:switch(e=t.stateNode,t.type){case"input":if(Dr(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+qt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var i=a[t];if(i!==e&&i.form===e.form){var l=i[ct]||null;if(!l)throw Error(c(90));Dr(i,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<a.length;t++)i=a[t],i.form===e.form&&Qs(i)}break e;case"textarea":Ks(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Ni(e,!!a.multiple,t,!1)}}}var Lr=!1;function Ps(e,t,a){if(Lr)return e(t,a);Lr=!0;try{var i=e(t);return i}finally{if(Lr=!1,(Di!==null||Ui!==null)&&(xo(),Di&&(t=Di,e=Ui,Ui=Di=null,ks(t),e)))for(t=0;t<e.length;t++)ks(e[t])}}function En(e,t){var a=e.stateNode;if(a===null)return null;var i=a[ct]||null;if(i===null)return null;a=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(c(231,t,typeof a));return a}var ua=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hr=!1;if(ua)try{var jn={};Object.defineProperty(jn,"passive",{get:function(){Hr=!0}}),window.addEventListener("test",jn,jn),window.removeEventListener("test",jn,jn)}catch{Hr=!1}var Ma=null,Gr=null,Nl=null;function Ws(){if(Nl)return Nl;var e,t=Gr,a=t.length,i,l="value"in Ma?Ma.value:Ma.textContent,o=l.length;for(e=0;e<a&&t[e]===l[e];e++);var s=a-e;for(i=1;i<=s&&t[a-i]===l[o-i];i++);return Nl=l.slice(e,1<i?1-i:void 0)}function _l(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Dl(){return!0}function ef(){return!1}function st(e){function t(a,i,l,o,s){this._reactName=a,this._targetInst=l,this.type=i,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(a=e[m],this[m]=a?a(o):o[m]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Dl:ef,this.isPropagationStopped=ef,this}return O(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Dl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Dl)},persist:function(){},isPersistent:Dl}),t}var oi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ul=st(oi),Tn=O({},oi,{view:0,detail:0}),cg=st(Tn),$r,Vr,Mn,ql=O({},Tn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Mn&&(Mn&&e.type==="mousemove"?($r=e.screenX-Mn.screenX,Vr=e.screenY-Mn.screenY):Vr=$r=0,Mn=e),$r)},movementY:function(e){return"movementY"in e?e.movementY:Vr}}),tf=st(ql),sg=O({},ql,{dataTransfer:0}),fg=st(sg),dg=O({},Tn,{relatedTarget:0}),Yr=st(dg),mg=O({},oi,{animationName:0,elapsedTime:0,pseudoElement:0}),pg=st(mg),gg=O({},oi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),hg=st(gg),vg=O({},oi,{data:0}),af=st(vg),xg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=bg[e])?!!t[e]:!1}function Zr(){return zg}var Sg=O({},Tn,{key:function(e){if(e.key){var t=xg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=_l(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?yg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zr,charCode:function(e){return e.type==="keypress"?_l(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_l(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ag=st(Sg),Cg=O({},ql,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nf=st(Cg),Eg=O({},Tn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zr}),jg=st(Eg),Tg=O({},oi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Mg=st(Tg),Og=O({},ql,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Rg=st(Og),Ng=O({},oi,{newState:0,oldState:0}),_g=st(Ng),Dg=[9,13,27,32],Qr=ua&&"CompositionEvent"in window,On=null;ua&&"documentMode"in document&&(On=document.documentMode);var Ug=ua&&"TextEvent"in window&&!On,lf=ua&&(!Qr||On&&8<On&&11>=On),of=" ",rf=!1;function uf(e,t){switch(e){case"keyup":return Dg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var qi=!1;function qg(e,t){switch(e){case"compositionend":return cf(t);case"keypress":return t.which!==32?null:(rf=!0,of);case"textInput":return e=t.data,e===of&&rf?null:e;default:return null}}function wg(e,t){if(qi)return e==="compositionend"||!Qr&&uf(e,t)?(e=Ws(),Nl=Gr=Ma=null,qi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return lf&&t.locale!=="ko"?null:t.data;default:return null}}var Bg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Bg[e.type]:t==="textarea"}function ff(e,t,a,i){Di?Ui?Ui.push(i):Ui=[i]:Di=i,t=Eo(t,"onChange"),0<t.length&&(a=new Ul("onChange","change",null,a,i),e.push({event:a,listeners:t}))}var Rn=null,Nn=null;function Lg(e){K0(e,0)}function wl(e){var t=Cn(e);if(Qs(t))return e}function df(e,t){if(e==="change")return t}var mf=!1;if(ua){var Xr;if(ua){var Kr="oninput"in document;if(!Kr){var pf=document.createElement("div");pf.setAttribute("oninput","return;"),Kr=typeof pf.oninput=="function"}Xr=Kr}else Xr=!1;mf=Xr&&(!document.documentMode||9<document.documentMode)}function gf(){Rn&&(Rn.detachEvent("onpropertychange",hf),Nn=Rn=null)}function hf(e){if(e.propertyName==="value"&&wl(Nn)){var t=[];ff(t,Nn,e,Br(e)),Ps(Lg,t)}}function Hg(e,t,a){e==="focusin"?(gf(),Rn=t,Nn=a,Rn.attachEvent("onpropertychange",hf)):e==="focusout"&&gf()}function Gg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return wl(Nn)}function $g(e,t){if(e==="click")return wl(t)}function Vg(e,t){if(e==="input"||e==="change")return wl(t)}function Yg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var At=typeof Object.is=="function"?Object.is:Yg;function _n(e,t){if(At(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(i=0;i<a.length;i++){var l=a[i];if(!Cr.call(t,l)||!At(e[l],t[l]))return!1}return!0}function vf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xf(e,t){var a=vf(e);e=0;for(var i;a;){if(a.nodeType===3){if(i=e+a.textContent.length,e<=t&&i>=t)return{node:a,offset:t-e};e=i}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=vf(a)}}function yf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?yf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function bf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ol(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Ol(e.document)}return t}function Jr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Zg=ua&&"documentMode"in document&&11>=document.documentMode,wi=null,Fr=null,Dn=null,Ir=!1;function zf(e,t,a){var i=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ir||wi==null||wi!==Ol(i)||(i=wi,"selectionStart"in i&&Jr(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Dn&&_n(Dn,i)||(Dn=i,i=Eo(Fr,"onSelect"),0<i.length&&(t=new Ul("onSelect","select",null,t,a),e.push({event:t,listeners:i}),t.target=wi)))}function ri(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Bi={animationend:ri("Animation","AnimationEnd"),animationiteration:ri("Animation","AnimationIteration"),animationstart:ri("Animation","AnimationStart"),transitionrun:ri("Transition","TransitionRun"),transitionstart:ri("Transition","TransitionStart"),transitioncancel:ri("Transition","TransitionCancel"),transitionend:ri("Transition","TransitionEnd")},kr={},Sf={};ua&&(Sf=document.createElement("div").style,"AnimationEvent"in window||(delete Bi.animationend.animation,delete Bi.animationiteration.animation,delete Bi.animationstart.animation),"TransitionEvent"in window||delete Bi.transitionend.transition);function ui(e){if(kr[e])return kr[e];if(!Bi[e])return e;var t=Bi[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Sf)return kr[e]=t[a];return e}var Af=ui("animationend"),Cf=ui("animationiteration"),Ef=ui("animationstart"),Qg=ui("transitionrun"),Xg=ui("transitionstart"),Kg=ui("transitioncancel"),jf=ui("transitionend"),Tf=new Map,Pr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Pr.push("scrollEnd");function Xt(e,t){Tf.set(e,t),li(t,[e])}var Bl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},wt=[],Li=0,Wr=0;function Ll(){for(var e=Li,t=Wr=Li=0;t<e;){var a=wt[t];wt[t++]=null;var i=wt[t];wt[t++]=null;var l=wt[t];wt[t++]=null;var o=wt[t];if(wt[t++]=null,i!==null&&l!==null){var s=i.pending;s===null?l.next=l:(l.next=s.next,s.next=l),i.pending=l}o!==0&&Mf(a,l,o)}}function Hl(e,t,a,i){wt[Li++]=e,wt[Li++]=t,wt[Li++]=a,wt[Li++]=i,Wr|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function eu(e,t,a,i){return Hl(e,t,a,i),Gl(e)}function ci(e,t){return Hl(e,null,null,t),Gl(e)}function Mf(e,t,a){e.lanes|=a;var i=e.alternate;i!==null&&(i.lanes|=a);for(var l=!1,o=e.return;o!==null;)o.childLanes|=a,i=o.alternate,i!==null&&(i.childLanes|=a),o.tag===22&&(e=o.stateNode,e===null||e._visibility&1||(l=!0)),e=o,o=o.return;return e.tag===3?(o=e.stateNode,l&&t!==null&&(l=31-St(a),e=o.hiddenUpdates,i=e[l],i===null?e[l]=[t]:i.push(t),t.lane=a|536870912),o):null}function Gl(e){if(50<tl)throw tl=0,cc=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Hi={};function Jg(e,t,a,i){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ct(e,t,a,i){return new Jg(e,t,a,i)}function tu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ca(e,t){var a=e.alternate;return a===null?(a=Ct(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Of(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function $l(e,t,a,i,l,o){var s=0;if(i=e,typeof e=="function")tu(e)&&(s=1);else if(typeof e=="string")s=W2(e,a,X.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ke:return e=Ct(31,a,t,l),e.elementType=ke,e.lanes=o,e;case Q:return si(a.children,l,o,t);case Z:s=8,l|=24;break;case I:return e=Ct(12,a,t,l|2),e.elementType=I,e.lanes=o,e;case ce:return e=Ct(13,a,t,l),e.elementType=ce,e.lanes=o,e;case te:return e=Ct(19,a,t,l),e.elementType=te,e.lanes=o,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case J:s=10;break e;case k:s=9;break e;case ae:s=11;break e;case L:s=14;break e;case xe:s=16,i=null;break e}s=29,a=Error(c(130,e===null?"null":typeof e,"")),i=null}return t=Ct(s,a,t,l),t.elementType=e,t.type=i,t.lanes=o,t}function si(e,t,a,i){return e=Ct(7,e,i,t),e.lanes=a,e}function au(e,t,a){return e=Ct(6,e,null,t),e.lanes=a,e}function Rf(e){var t=Ct(18,null,null,0);return t.stateNode=e,t}function iu(e,t,a){return t=Ct(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Nf=new WeakMap;function Bt(e,t){if(typeof e=="object"&&e!==null){var a=Nf.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Os(t)},Nf.set(e,t),t)}return{value:e,source:t,stack:Os(t)}}var Gi=[],$i=0,Vl=null,Un=0,Lt=[],Ht=0,Oa=null,Pt=1,Wt="";function sa(e,t){Gi[$i++]=Un,Gi[$i++]=Vl,Vl=e,Un=t}function _f(e,t,a){Lt[Ht++]=Pt,Lt[Ht++]=Wt,Lt[Ht++]=Oa,Oa=e;var i=Pt;e=Wt;var l=32-St(i)-1;i&=~(1<<l),a+=1;var o=32-St(t)+l;if(30<o){var s=l-l%5;o=(i&(1<<s)-1).toString(32),i>>=s,l-=s,Pt=1<<32-St(t)+l|a<<l|i,Wt=o+e}else Pt=1<<o|a<<l|i,Wt=e}function nu(e){e.return!==null&&(sa(e,1),_f(e,1,0))}function lu(e){for(;e===Vl;)Vl=Gi[--$i],Gi[$i]=null,Un=Gi[--$i],Gi[$i]=null;for(;e===Oa;)Oa=Lt[--Ht],Lt[Ht]=null,Wt=Lt[--Ht],Lt[Ht]=null,Pt=Lt[--Ht],Lt[Ht]=null}function Df(e,t){Lt[Ht++]=Pt,Lt[Ht++]=Wt,Lt[Ht++]=Oa,Pt=t.id,Wt=t.overflow,Oa=e}var it=null,_e=null,ve=!1,Ra=null,Gt=!1,ou=Error(c(519));function Na(e){var t=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw qn(Bt(t,e)),ou}function Uf(e){var t=e.stateNode,a=e.type,i=e.memoizedProps;switch(t[at]=e,t[ct]=i,a){case"dialog":de("cancel",t),de("close",t);break;case"iframe":case"object":case"embed":de("load",t);break;case"video":case"audio":for(a=0;a<il.length;a++)de(il[a],t);break;case"source":de("error",t);break;case"img":case"image":case"link":de("error",t),de("load",t);break;case"details":de("toggle",t);break;case"input":de("invalid",t),Xs(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":de("invalid",t);break;case"textarea":de("invalid",t),Js(t,i.value,i.defaultValue,i.children)}a=i.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||i.suppressHydrationWarning===!0||k0(t.textContent,a)?(i.popover!=null&&(de("beforetoggle",t),de("toggle",t)),i.onScroll!=null&&de("scroll",t),i.onScrollEnd!=null&&de("scrollend",t),i.onClick!=null&&(t.onclick=ra),t=!0):t=!1,t||Na(e,!0)}function qf(e){for(it=e.return;it;)switch(it.tag){case 5:case 31:case 13:Gt=!1;return;case 27:case 3:Gt=!0;return;default:it=it.return}}function Vi(e){if(e!==it)return!1;if(!ve)return qf(e),ve=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Cc(e.type,e.memoizedProps)),a=!a),a&&_e&&Na(e),qf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));_e=o1(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));_e=o1(e)}else t===27?(t=_e,Qa(e.type)?(e=Oc,Oc=null,_e=e):_e=t):_e=it?Vt(e.stateNode.nextSibling):null;return!0}function fi(){_e=it=null,ve=!1}function ru(){var e=Ra;return e!==null&&(pt===null?pt=e:pt.push.apply(pt,e),Ra=null),e}function qn(e){Ra===null?Ra=[e]:Ra.push(e)}var uu=b(null),di=null,fa=null;function _a(e,t,a){Y(uu,t._currentValue),t._currentValue=a}function da(e){e._currentValue=uu.current,U(uu)}function cu(e,t,a){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===a)break;e=e.return}}function su(e,t,a,i){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var o=l.dependencies;if(o!==null){var s=l.child;o=o.firstContext;e:for(;o!==null;){var m=o;o=l;for(var x=0;x<t.length;x++)if(m.context===t[x]){o.lanes|=a,m=o.alternate,m!==null&&(m.lanes|=a),cu(o.return,a,e),i||(s=null);break e}o=m.next}}else if(l.tag===18){if(s=l.return,s===null)throw Error(c(341));s.lanes|=a,o=s.alternate,o!==null&&(o.lanes|=a),cu(s,a,e),s=null}else s=l.child;if(s!==null)s.return=l;else for(s=l;s!==null;){if(s===e){s=null;break}if(l=s.sibling,l!==null){l.return=s.return,s=l;break}s=s.return}l=s}}function Yi(e,t,a,i){e=null;for(var l=t,o=!1;l!==null;){if(!o){if((l.flags&524288)!==0)o=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var s=l.alternate;if(s===null)throw Error(c(387));if(s=s.memoizedProps,s!==null){var m=l.type;At(l.pendingProps.value,s.value)||(e!==null?e.push(m):e=[m])}}else if(l===he.current){if(s=l.alternate,s===null)throw Error(c(387));s.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(ul):e=[ul])}l=l.return}e!==null&&su(t,e,a,i),t.flags|=262144}function Yl(e){for(e=e.firstContext;e!==null;){if(!At(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function mi(e){di=e,fa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function nt(e){return wf(di,e)}function Zl(e,t){return di===null&&mi(e),wf(e,t)}function wf(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},fa===null){if(e===null)throw Error(c(308));fa=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else fa=fa.next=t;return a}var Fg=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Ig=n.unstable_scheduleCallback,kg=n.unstable_NormalPriority,Qe={$$typeof:J,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function fu(){return{controller:new Fg,data:new Map,refCount:0}}function wn(e){e.refCount--,e.refCount===0&&Ig(kg,function(){e.controller.abort()})}var Bn=null,du=0,Zi=0,Qi=null;function Pg(e,t){if(Bn===null){var a=Bn=[];du=0,Zi=gc(),Qi={status:"pending",value:void 0,then:function(i){a.push(i)}}}return du++,t.then(Bf,Bf),t}function Bf(){if(--du===0&&Bn!==null){Qi!==null&&(Qi.status="fulfilled");var e=Bn;Bn=null,Zi=0,Qi=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Wg(e,t){var a=[],i={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var l=0;l<a.length;l++)(0,a[l])(t)},function(l){for(i.status="rejected",i.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),i}var Lf=D.S;D.S=function(e,t){z0=bt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Pg(e,t),Lf!==null&&Lf(e,t)};var pi=b(null);function mu(){var e=pi.current;return e!==null?e:Re.pooledCache}function Ql(e,t){t===null?Y(pi,pi.current):Y(pi,t.pool)}function Hf(){var e=mu();return e===null?null:{parent:Qe._currentValue,pool:e}}var Xi=Error(c(460)),pu=Error(c(474)),Xl=Error(c(542)),Kl={then:function(){}};function Gf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function $f(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(ra,ra),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Yf(e),e;default:if(typeof t.status=="string")t.then(ra,ra);else{if(e=Re,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=i}},function(i){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Yf(e),e}throw hi=t,Xi}}function gi(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(hi=a,Xi):a}}var hi=null;function Vf(){if(hi===null)throw Error(c(459));var e=hi;return hi=null,e}function Yf(e){if(e===Xi||e===Xl)throw Error(c(483))}var Ki=null,Ln=0;function Jl(e){var t=Ln;return Ln+=1,Ki===null&&(Ki=[]),$f(Ki,e,t)}function Hn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Fl(e,t){throw t.$$typeof===N?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Zf(e){function t(A,y){if(e){var C=A.deletions;C===null?(A.deletions=[y],A.flags|=16):C.push(y)}}function a(A,y){if(!e)return null;for(;y!==null;)t(A,y),y=y.sibling;return null}function i(A){for(var y=new Map;A!==null;)A.key!==null?y.set(A.key,A):y.set(A.index,A),A=A.sibling;return y}function l(A,y){return A=ca(A,y),A.index=0,A.sibling=null,A}function o(A,y,C){return A.index=C,e?(C=A.alternate,C!==null?(C=C.index,C<y?(A.flags|=67108866,y):C):(A.flags|=67108866,y)):(A.flags|=1048576,y)}function s(A){return e&&A.alternate===null&&(A.flags|=67108866),A}function m(A,y,C,q){return y===null||y.tag!==6?(y=au(C,A.mode,q),y.return=A,y):(y=l(y,C),y.return=A,y)}function x(A,y,C,q){var P=C.type;return P===Q?_(A,y,C.props.children,q,C.key):y!==null&&(y.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===xe&&gi(P)===y.type)?(y=l(y,C.props),Hn(y,C),y.return=A,y):(y=$l(C.type,C.key,C.props,null,A.mode,q),Hn(y,C),y.return=A,y)}function E(A,y,C,q){return y===null||y.tag!==4||y.stateNode.containerInfo!==C.containerInfo||y.stateNode.implementation!==C.implementation?(y=iu(C,A.mode,q),y.return=A,y):(y=l(y,C.children||[]),y.return=A,y)}function _(A,y,C,q,P){return y===null||y.tag!==7?(y=si(C,A.mode,q,P),y.return=A,y):(y=l(y,C),y.return=A,y)}function B(A,y,C){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return y=au(""+y,A.mode,C),y.return=A,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case w:return C=$l(y.type,y.key,y.props,null,A.mode,C),Hn(C,y),C.return=A,C;case G:return y=iu(y,A.mode,C),y.return=A,y;case xe:return y=gi(y),B(A,y,C)}if(yt(y)||Ze(y))return y=si(y,A.mode,C,null),y.return=A,y;if(typeof y.then=="function")return B(A,Jl(y),C);if(y.$$typeof===J)return B(A,Zl(A,y),C);Fl(A,y)}return null}function M(A,y,C,q){var P=y!==null?y.key:null;if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return P!==null?null:m(A,y,""+C,q);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case w:return C.key===P?x(A,y,C,q):null;case G:return C.key===P?E(A,y,C,q):null;case xe:return C=gi(C),M(A,y,C,q)}if(yt(C)||Ze(C))return P!==null?null:_(A,y,C,q,null);if(typeof C.then=="function")return M(A,y,Jl(C),q);if(C.$$typeof===J)return M(A,y,Zl(A,C),q);Fl(A,C)}return null}function R(A,y,C,q,P){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return A=A.get(C)||null,m(y,A,""+q,P);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case w:return A=A.get(q.key===null?C:q.key)||null,x(y,A,q,P);case G:return A=A.get(q.key===null?C:q.key)||null,E(y,A,q,P);case xe:return q=gi(q),R(A,y,C,q,P)}if(yt(q)||Ze(q))return A=A.get(C)||null,_(y,A,q,P,null);if(typeof q.then=="function")return R(A,y,C,Jl(q),P);if(q.$$typeof===J)return R(A,y,C,Zl(y,q),P);Fl(y,q)}return null}function K(A,y,C,q){for(var P=null,be=null,F=y,re=y=0,ge=null;F!==null&&re<C.length;re++){F.index>re?(ge=F,F=null):ge=F.sibling;var ze=M(A,F,C[re],q);if(ze===null){F===null&&(F=ge);break}e&&F&&ze.alternate===null&&t(A,F),y=o(ze,y,re),be===null?P=ze:be.sibling=ze,be=ze,F=ge}if(re===C.length)return a(A,F),ve&&sa(A,re),P;if(F===null){for(;re<C.length;re++)F=B(A,C[re],q),F!==null&&(y=o(F,y,re),be===null?P=F:be.sibling=F,be=F);return ve&&sa(A,re),P}for(F=i(F);re<C.length;re++)ge=R(F,A,re,C[re],q),ge!==null&&(e&&ge.alternate!==null&&F.delete(ge.key===null?re:ge.key),y=o(ge,y,re),be===null?P=ge:be.sibling=ge,be=ge);return e&&F.forEach(function(Ia){return t(A,Ia)}),ve&&sa(A,re),P}function ee(A,y,C,q){if(C==null)throw Error(c(151));for(var P=null,be=null,F=y,re=y=0,ge=null,ze=C.next();F!==null&&!ze.done;re++,ze=C.next()){F.index>re?(ge=F,F=null):ge=F.sibling;var Ia=M(A,F,ze.value,q);if(Ia===null){F===null&&(F=ge);break}e&&F&&Ia.alternate===null&&t(A,F),y=o(Ia,y,re),be===null?P=Ia:be.sibling=Ia,be=Ia,F=ge}if(ze.done)return a(A,F),ve&&sa(A,re),P;if(F===null){for(;!ze.done;re++,ze=C.next())ze=B(A,ze.value,q),ze!==null&&(y=o(ze,y,re),be===null?P=ze:be.sibling=ze,be=ze);return ve&&sa(A,re),P}for(F=i(F);!ze.done;re++,ze=C.next())ze=R(F,A,re,ze.value,q),ze!==null&&(e&&ze.alternate!==null&&F.delete(ze.key===null?re:ze.key),y=o(ze,y,re),be===null?P=ze:be.sibling=ze,be=ze);return e&&F.forEach(function(sh){return t(A,sh)}),ve&&sa(A,re),P}function Oe(A,y,C,q){if(typeof C=="object"&&C!==null&&C.type===Q&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case w:e:{for(var P=C.key;y!==null;){if(y.key===P){if(P=C.type,P===Q){if(y.tag===7){a(A,y.sibling),q=l(y,C.props.children),q.return=A,A=q;break e}}else if(y.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===xe&&gi(P)===y.type){a(A,y.sibling),q=l(y,C.props),Hn(q,C),q.return=A,A=q;break e}a(A,y);break}else t(A,y);y=y.sibling}C.type===Q?(q=si(C.props.children,A.mode,q,C.key),q.return=A,A=q):(q=$l(C.type,C.key,C.props,null,A.mode,q),Hn(q,C),q.return=A,A=q)}return s(A);case G:e:{for(P=C.key;y!==null;){if(y.key===P)if(y.tag===4&&y.stateNode.containerInfo===C.containerInfo&&y.stateNode.implementation===C.implementation){a(A,y.sibling),q=l(y,C.children||[]),q.return=A,A=q;break e}else{a(A,y);break}else t(A,y);y=y.sibling}q=iu(C,A.mode,q),q.return=A,A=q}return s(A);case xe:return C=gi(C),Oe(A,y,C,q)}if(yt(C))return K(A,y,C,q);if(Ze(C)){if(P=Ze(C),typeof P!="function")throw Error(c(150));return C=P.call(C),ee(A,y,C,q)}if(typeof C.then=="function")return Oe(A,y,Jl(C),q);if(C.$$typeof===J)return Oe(A,y,Zl(A,C),q);Fl(A,C)}return typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint"?(C=""+C,y!==null&&y.tag===6?(a(A,y.sibling),q=l(y,C),q.return=A,A=q):(a(A,y),q=au(C,A.mode,q),q.return=A,A=q),s(A)):a(A,y)}return function(A,y,C,q){try{Ln=0;var P=Oe(A,y,C,q);return Ki=null,P}catch(F){if(F===Xi||F===Xl)throw F;var be=Ct(29,F,null,A.mode);return be.lanes=q,be.return=A,be}finally{}}}var vi=Zf(!0),Qf=Zf(!1),Da=!1;function gu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function hu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ua(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function qa(e,t,a){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(Se&2)!==0){var l=i.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),i.pending=t,t=Gl(e),Mf(e,null,a),t}return Hl(e,i,t,a),Gl(e)}function Gn(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,a|=i,t.lanes=a,qs(e,a)}}function vu(e,t){var a=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,a===i)){var l=null,o=null;if(a=a.firstBaseUpdate,a!==null){do{var s={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};o===null?l=o=s:o=o.next=s,a=a.next}while(a!==null);o===null?l=o=t:o=o.next=t}else l=o=t;a={baseState:i.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:i.shared,callbacks:i.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var xu=!1;function $n(){if(xu){var e=Qi;if(e!==null)throw e}}function Vn(e,t,a,i){xu=!1;var l=e.updateQueue;Da=!1;var o=l.firstBaseUpdate,s=l.lastBaseUpdate,m=l.shared.pending;if(m!==null){l.shared.pending=null;var x=m,E=x.next;x.next=null,s===null?o=E:s.next=E,s=x;var _=e.alternate;_!==null&&(_=_.updateQueue,m=_.lastBaseUpdate,m!==s&&(m===null?_.firstBaseUpdate=E:m.next=E,_.lastBaseUpdate=x))}if(o!==null){var B=l.baseState;s=0,_=E=x=null,m=o;do{var M=m.lane&-536870913,R=M!==m.lane;if(R?(pe&M)===M:(i&M)===M){M!==0&&M===Zi&&(xu=!0),_!==null&&(_=_.next={lane:0,tag:m.tag,payload:m.payload,callback:null,next:null});e:{var K=e,ee=m;M=t;var Oe=a;switch(ee.tag){case 1:if(K=ee.payload,typeof K=="function"){B=K.call(Oe,B,M);break e}B=K;break e;case 3:K.flags=K.flags&-65537|128;case 0:if(K=ee.payload,M=typeof K=="function"?K.call(Oe,B,M):K,M==null)break e;B=O({},B,M);break e;case 2:Da=!0}}M=m.callback,M!==null&&(e.flags|=64,R&&(e.flags|=8192),R=l.callbacks,R===null?l.callbacks=[M]:R.push(M))}else R={lane:M,tag:m.tag,payload:m.payload,callback:m.callback,next:null},_===null?(E=_=R,x=B):_=_.next=R,s|=M;if(m=m.next,m===null){if(m=l.shared.pending,m===null)break;R=m,m=R.next,R.next=null,l.lastBaseUpdate=R,l.shared.pending=null}}while(!0);_===null&&(x=B),l.baseState=x,l.firstBaseUpdate=E,l.lastBaseUpdate=_,o===null&&(l.shared.lanes=0),Ga|=s,e.lanes=s,e.memoizedState=B}}function Xf(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function Kf(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Xf(a[e],t)}var Ji=b(null),Il=b(0);function Jf(e,t){e=za,Y(Il,e),Y(Ji,t),za=e|t.baseLanes}function yu(){Y(Il,za),Y(Ji,Ji.current)}function bu(){za=Il.current,U(Ji),U(Il)}var Et=b(null),$t=null;function wa(e){var t=e.alternate;Y($e,$e.current&1),Y(Et,e),$t===null&&(t===null||Ji.current!==null||t.memoizedState!==null)&&($t=e)}function zu(e){Y($e,$e.current),Y(Et,e),$t===null&&($t=e)}function Ff(e){e.tag===22?(Y($e,$e.current),Y(Et,e),$t===null&&($t=e)):Ba()}function Ba(){Y($e,$e.current),Y(Et,Et.current)}function jt(e){U(Et),$t===e&&($t=null),U($e)}var $e=b(0);function kl(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Tc(a)||Mc(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ma=0,oe=null,Te=null,Xe=null,Pl=!1,Fi=!1,xi=!1,Wl=0,Yn=0,Ii=null,e2=0;function Le(){throw Error(c(321))}function Su(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!At(e[a],t[a]))return!1;return!0}function Au(e,t,a,i,l,o){return ma=o,oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=e===null||e.memoizedState===null?_d:Lu,xi=!1,o=a(i,l),xi=!1,Fi&&(o=kf(t,a,i,l)),If(e),o}function If(e){D.H=Xn;var t=Te!==null&&Te.next!==null;if(ma=0,Xe=Te=oe=null,Pl=!1,Yn=0,Ii=null,t)throw Error(c(300));e===null||Ke||(e=e.dependencies,e!==null&&Yl(e)&&(Ke=!0))}function kf(e,t,a,i){oe=e;var l=0;do{if(Fi&&(Ii=null),Yn=0,Fi=!1,25<=l)throw Error(c(301));if(l+=1,Xe=Te=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}D.H=Dd,o=t(a,i)}while(Fi);return o}function t2(){var e=D.H,t=e.useState()[0];return t=typeof t.then=="function"?Zn(t):t,e=e.useState()[0],(Te!==null?Te.memoizedState:null)!==e&&(oe.flags|=1024),t}function Cu(){var e=Wl!==0;return Wl=0,e}function Eu(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function ju(e){if(Pl){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Pl=!1}ma=0,Xe=Te=oe=null,Fi=!1,Yn=Wl=0,Ii=null}function ut(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xe===null?oe.memoizedState=Xe=e:Xe=Xe.next=e,Xe}function Ve(){if(Te===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=Te.next;var t=Xe===null?oe.memoizedState:Xe.next;if(t!==null)Xe=t,Te=e;else{if(e===null)throw oe.alternate===null?Error(c(467)):Error(c(310));Te=e,e={memoizedState:Te.memoizedState,baseState:Te.baseState,baseQueue:Te.baseQueue,queue:Te.queue,next:null},Xe===null?oe.memoizedState=Xe=e:Xe=Xe.next=e}return Xe}function eo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Zn(e){var t=Yn;return Yn+=1,Ii===null&&(Ii=[]),e=$f(Ii,e,t),t=oe,(Xe===null?t.memoizedState:Xe.next)===null&&(t=t.alternate,D.H=t===null||t.memoizedState===null?_d:Lu),e}function to(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Zn(e);if(e.$$typeof===J)return nt(e)}throw Error(c(438,String(e)))}function Tu(e){var t=null,a=oe.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var i=oe.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=eo(),oe.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),i=0;i<e;i++)a[i]=kt;return t.index++,a}function pa(e,t){return typeof t=="function"?t(e):t}function ao(e){var t=Ve();return Mu(t,Te,e)}function Mu(e,t,a){var i=e.queue;if(i===null)throw Error(c(311));i.lastRenderedReducer=a;var l=e.baseQueue,o=i.pending;if(o!==null){if(l!==null){var s=l.next;l.next=o.next,o.next=s}t.baseQueue=l=o,i.pending=null}if(o=e.baseState,l===null)e.memoizedState=o;else{t=l.next;var m=s=null,x=null,E=t,_=!1;do{var B=E.lane&-536870913;if(B!==E.lane?(pe&B)===B:(ma&B)===B){var M=E.revertLane;if(M===0)x!==null&&(x=x.next={lane:0,revertLane:0,gesture:null,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null}),B===Zi&&(_=!0);else if((ma&M)===M){E=E.next,M===Zi&&(_=!0);continue}else B={lane:0,revertLane:E.revertLane,gesture:null,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},x===null?(m=x=B,s=o):x=x.next=B,oe.lanes|=M,Ga|=M;B=E.action,xi&&a(o,B),o=E.hasEagerState?E.eagerState:a(o,B)}else M={lane:B,revertLane:E.revertLane,gesture:E.gesture,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},x===null?(m=x=M,s=o):x=x.next=M,oe.lanes|=B,Ga|=B;E=E.next}while(E!==null&&E!==t);if(x===null?s=o:x.next=m,!At(o,e.memoizedState)&&(Ke=!0,_&&(a=Qi,a!==null)))throw a;e.memoizedState=o,e.baseState=s,e.baseQueue=x,i.lastRenderedState=o}return l===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Ou(e){var t=Ve(),a=t.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=e;var i=a.dispatch,l=a.pending,o=t.memoizedState;if(l!==null){a.pending=null;var s=l=l.next;do o=e(o,s.action),s=s.next;while(s!==l);At(o,t.memoizedState)||(Ke=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),a.lastRenderedState=o}return[o,i]}function Pf(e,t,a){var i=oe,l=Ve(),o=ve;if(o){if(a===void 0)throw Error(c(407));a=a()}else a=t();var s=!At((Te||l).memoizedState,a);if(s&&(l.memoizedState=a,Ke=!0),l=l.queue,_u(td.bind(null,i,l,e),[e]),l.getSnapshot!==t||s||Xe!==null&&Xe.memoizedState.tag&1){if(i.flags|=2048,ki(9,{destroy:void 0},ed.bind(null,i,l,a,t),null),Re===null)throw Error(c(349));o||(ma&127)!==0||Wf(i,t,a)}return a}function Wf(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=oe.updateQueue,t===null?(t=eo(),oe.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function ed(e,t,a,i){t.value=a,t.getSnapshot=i,ad(t)&&id(e)}function td(e,t,a){return a(function(){ad(t)&&id(e)})}function ad(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!At(e,a)}catch{return!0}}function id(e){var t=ci(e,2);t!==null&&gt(t,e,2)}function Ru(e){var t=ut();if(typeof e=="function"){var a=e;if(e=a(),xi){ja(!0);try{a()}finally{ja(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:e},t}function nd(e,t,a,i){return e.baseState=a,Mu(e,Te,typeof i=="function"?i:pa)}function a2(e,t,a,i,l){if(lo(e))throw Error(c(485));if(e=t.action,e!==null){var o={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){o.listeners.push(s)}};D.T!==null?a(!0):o.isTransition=!1,i(o),a=t.pending,a===null?(o.next=t.pending=o,ld(t,o)):(o.next=a.next,t.pending=a.next=o)}}function ld(e,t){var a=t.action,i=t.payload,l=e.state;if(t.isTransition){var o=D.T,s={};D.T=s;try{var m=a(l,i),x=D.S;x!==null&&x(s,m),od(e,t,m)}catch(E){Nu(e,t,E)}finally{o!==null&&s.types!==null&&(o.types=s.types),D.T=o}}else try{o=a(l,i),od(e,t,o)}catch(E){Nu(e,t,E)}}function od(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(i){rd(e,t,i)},function(i){return Nu(e,t,i)}):rd(e,t,a)}function rd(e,t,a){t.status="fulfilled",t.value=a,ud(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,ld(e,a)))}function Nu(e,t,a){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=a,ud(t),t=t.next;while(t!==i)}e.action=null}function ud(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function cd(e,t){return t}function sd(e,t){if(ve){var a=Re.formState;if(a!==null){e:{var i=oe;if(ve){if(_e){t:{for(var l=_e,o=Gt;l.nodeType!==8;){if(!o){l=null;break t}if(l=Vt(l.nextSibling),l===null){l=null;break t}}o=l.data,l=o==="F!"||o==="F"?l:null}if(l){_e=Vt(l.nextSibling),i=l.data==="F!";break e}}Na(i)}i=!1}i&&(t=a[0])}}return a=ut(),a.memoizedState=a.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:cd,lastRenderedState:t},a.queue=i,a=Od.bind(null,oe,i),i.dispatch=a,i=Ru(!1),o=Bu.bind(null,oe,!1,i.queue),i=ut(),l={state:t,dispatch:null,action:e,pending:null},i.queue=l,a=a2.bind(null,oe,l,o,a),l.dispatch=a,i.memoizedState=e,[t,a,!1]}function fd(e){var t=Ve();return dd(t,Te,e)}function dd(e,t,a){if(t=Mu(e,t,cd)[0],e=ao(pa)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Zn(t)}catch(s){throw s===Xi?Xl:s}else i=t;t=Ve();var l=t.queue,o=l.dispatch;return a!==t.memoizedState&&(oe.flags|=2048,ki(9,{destroy:void 0},i2.bind(null,l,a),null)),[i,o,e]}function i2(e,t){e.action=t}function md(e){var t=Ve(),a=Te;if(a!==null)return dd(t,a,e);Ve(),t=t.memoizedState,a=Ve();var i=a.queue.dispatch;return a.memoizedState=e,[t,i,!1]}function ki(e,t,a,i){return e={tag:e,create:a,deps:i,inst:t,next:null},t=oe.updateQueue,t===null&&(t=eo(),oe.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(i=a.next,a.next=e,e.next=i,t.lastEffect=e),e}function pd(){return Ve().memoizedState}function io(e,t,a,i){var l=ut();oe.flags|=e,l.memoizedState=ki(1|t,{destroy:void 0},a,i===void 0?null:i)}function no(e,t,a,i){var l=Ve();i=i===void 0?null:i;var o=l.memoizedState.inst;Te!==null&&i!==null&&Su(i,Te.memoizedState.deps)?l.memoizedState=ki(t,o,a,i):(oe.flags|=e,l.memoizedState=ki(1|t,o,a,i))}function gd(e,t){io(8390656,8,e,t)}function _u(e,t){no(2048,8,e,t)}function n2(e){oe.flags|=4;var t=oe.updateQueue;if(t===null)t=eo(),oe.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function hd(e){var t=Ve().memoizedState;return n2({ref:t,nextImpl:e}),function(){if((Se&2)!==0)throw Error(c(440));return t.impl.apply(void 0,arguments)}}function vd(e,t){return no(4,2,e,t)}function xd(e,t){return no(4,4,e,t)}function yd(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function bd(e,t,a){a=a!=null?a.concat([e]):null,no(4,4,yd.bind(null,t,e),a)}function Du(){}function zd(e,t){var a=Ve();t=t===void 0?null:t;var i=a.memoizedState;return t!==null&&Su(t,i[1])?i[0]:(a.memoizedState=[e,t],e)}function Sd(e,t){var a=Ve();t=t===void 0?null:t;var i=a.memoizedState;if(t!==null&&Su(t,i[1]))return i[0];if(i=e(),xi){ja(!0);try{e()}finally{ja(!1)}}return a.memoizedState=[i,t],i}function Uu(e,t,a){return a===void 0||(ma&1073741824)!==0&&(pe&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=A0(),oe.lanes|=e,Ga|=e,a)}function Ad(e,t,a,i){return At(a,t)?a:Ji.current!==null?(e=Uu(e,a,i),At(e,t)||(Ke=!0),e):(ma&42)===0||(ma&1073741824)!==0&&(pe&261930)===0?(Ke=!0,e.memoizedState=a):(e=A0(),oe.lanes|=e,Ga|=e,t)}function Cd(e,t,a,i,l){var o=$.p;$.p=o!==0&&8>o?o:8;var s=D.T,m={};D.T=m,Bu(e,!1,t,a);try{var x=l(),E=D.S;if(E!==null&&E(m,x),x!==null&&typeof x=="object"&&typeof x.then=="function"){var _=Wg(x,i);Qn(e,t,_,Ot(e))}else Qn(e,t,i,Ot(e))}catch(B){Qn(e,t,{then:function(){},status:"rejected",reason:B},Ot())}finally{$.p=o,s!==null&&m.types!==null&&(s.types=m.types),D.T=s}}function l2(){}function qu(e,t,a,i){if(e.tag!==5)throw Error(c(476));var l=Ed(e).queue;Cd(e,l,t,W,a===null?l2:function(){return jd(e),a(i)})}function Ed(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:W},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function jd(e){var t=Ed(e);t.next===null&&(t=e.alternate.memoizedState),Qn(e,t.next.queue,{},Ot())}function wu(){return nt(ul)}function Td(){return Ve().memoizedState}function Md(){return Ve().memoizedState}function o2(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=Ot();e=Ua(a);var i=qa(t,e,a);i!==null&&(gt(i,t,a),Gn(i,t,a)),t={cache:fu()},e.payload=t;return}t=t.return}}function r2(e,t,a){var i=Ot();a={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},lo(e)?Rd(t,a):(a=eu(e,t,a,i),a!==null&&(gt(a,e,i),Nd(a,t,i)))}function Od(e,t,a){var i=Ot();Qn(e,t,a,i)}function Qn(e,t,a,i){var l={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(lo(e))Rd(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,m=o(s,a);if(l.hasEagerState=!0,l.eagerState=m,At(m,s))return Hl(e,t,l,0),Re===null&&Ll(),!1}catch{}finally{}if(a=eu(e,t,l,i),a!==null)return gt(a,e,i),Nd(a,t,i),!0}return!1}function Bu(e,t,a,i){if(i={lane:2,revertLane:gc(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},lo(e)){if(t)throw Error(c(479))}else t=eu(e,a,i,2),t!==null&&gt(t,e,2)}function lo(e){var t=e.alternate;return e===oe||t!==null&&t===oe}function Rd(e,t){Fi=Pl=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Nd(e,t,a){if((a&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,a|=i,t.lanes=a,qs(e,a)}}var Xn={readContext:nt,use:to,useCallback:Le,useContext:Le,useEffect:Le,useImperativeHandle:Le,useLayoutEffect:Le,useInsertionEffect:Le,useMemo:Le,useReducer:Le,useRef:Le,useState:Le,useDebugValue:Le,useDeferredValue:Le,useTransition:Le,useSyncExternalStore:Le,useId:Le,useHostTransitionStatus:Le,useFormState:Le,useActionState:Le,useOptimistic:Le,useMemoCache:Le,useCacheRefresh:Le};Xn.useEffectEvent=Le;var _d={readContext:nt,use:to,useCallback:function(e,t){return ut().memoizedState=[e,t===void 0?null:t],e},useContext:nt,useEffect:gd,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,io(4194308,4,yd.bind(null,t,e),a)},useLayoutEffect:function(e,t){return io(4194308,4,e,t)},useInsertionEffect:function(e,t){io(4,2,e,t)},useMemo:function(e,t){var a=ut();t=t===void 0?null:t;var i=e();if(xi){ja(!0);try{e()}finally{ja(!1)}}return a.memoizedState=[i,t],i},useReducer:function(e,t,a){var i=ut();if(a!==void 0){var l=a(t);if(xi){ja(!0);try{a(t)}finally{ja(!1)}}}else l=t;return i.memoizedState=i.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},i.queue=e,e=e.dispatch=r2.bind(null,oe,e),[i.memoizedState,e]},useRef:function(e){var t=ut();return e={current:e},t.memoizedState=e},useState:function(e){e=Ru(e);var t=e.queue,a=Od.bind(null,oe,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Du,useDeferredValue:function(e,t){var a=ut();return Uu(a,e,t)},useTransition:function(){var e=Ru(!1);return e=Cd.bind(null,oe,e.queue,!0,!1),ut().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var i=oe,l=ut();if(ve){if(a===void 0)throw Error(c(407));a=a()}else{if(a=t(),Re===null)throw Error(c(349));(pe&127)!==0||Wf(i,t,a)}l.memoizedState=a;var o={value:a,getSnapshot:t};return l.queue=o,gd(td.bind(null,i,o,e),[e]),i.flags|=2048,ki(9,{destroy:void 0},ed.bind(null,i,o,a,t),null),a},useId:function(){var e=ut(),t=Re.identifierPrefix;if(ve){var a=Wt,i=Pt;a=(i&~(1<<32-St(i)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Wl++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=e2++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:wu,useFormState:sd,useActionState:sd,useOptimistic:function(e){var t=ut();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Bu.bind(null,oe,!0,a),a.dispatch=t,[e,t]},useMemoCache:Tu,useCacheRefresh:function(){return ut().memoizedState=o2.bind(null,oe)},useEffectEvent:function(e){var t=ut(),a={impl:e};return t.memoizedState=a,function(){if((Se&2)!==0)throw Error(c(440));return a.impl.apply(void 0,arguments)}}},Lu={readContext:nt,use:to,useCallback:zd,useContext:nt,useEffect:_u,useImperativeHandle:bd,useInsertionEffect:vd,useLayoutEffect:xd,useMemo:Sd,useReducer:ao,useRef:pd,useState:function(){return ao(pa)},useDebugValue:Du,useDeferredValue:function(e,t){var a=Ve();return Ad(a,Te.memoizedState,e,t)},useTransition:function(){var e=ao(pa)[0],t=Ve().memoizedState;return[typeof e=="boolean"?e:Zn(e),t]},useSyncExternalStore:Pf,useId:Td,useHostTransitionStatus:wu,useFormState:fd,useActionState:fd,useOptimistic:function(e,t){var a=Ve();return nd(a,Te,e,t)},useMemoCache:Tu,useCacheRefresh:Md};Lu.useEffectEvent=hd;var Dd={readContext:nt,use:to,useCallback:zd,useContext:nt,useEffect:_u,useImperativeHandle:bd,useInsertionEffect:vd,useLayoutEffect:xd,useMemo:Sd,useReducer:Ou,useRef:pd,useState:function(){return Ou(pa)},useDebugValue:Du,useDeferredValue:function(e,t){var a=Ve();return Te===null?Uu(a,e,t):Ad(a,Te.memoizedState,e,t)},useTransition:function(){var e=Ou(pa)[0],t=Ve().memoizedState;return[typeof e=="boolean"?e:Zn(e),t]},useSyncExternalStore:Pf,useId:Td,useHostTransitionStatus:wu,useFormState:md,useActionState:md,useOptimistic:function(e,t){var a=Ve();return Te!==null?nd(a,Te,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Tu,useCacheRefresh:Md};Dd.useEffectEvent=hd;function Hu(e,t,a,i){t=e.memoizedState,a=a(i,t),a=a==null?t:O({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Gu={enqueueSetState:function(e,t,a){e=e._reactInternals;var i=Ot(),l=Ua(i);l.payload=t,a!=null&&(l.callback=a),t=qa(e,l,i),t!==null&&(gt(t,e,i),Gn(t,e,i))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var i=Ot(),l=Ua(i);l.tag=1,l.payload=t,a!=null&&(l.callback=a),t=qa(e,l,i),t!==null&&(gt(t,e,i),Gn(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Ot(),i=Ua(a);i.tag=2,t!=null&&(i.callback=t),t=qa(e,i,a),t!==null&&(gt(t,e,a),Gn(t,e,a))}};function Ud(e,t,a,i,l,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,o,s):t.prototype&&t.prototype.isPureReactComponent?!_n(a,i)||!_n(l,o):!0}function qd(e,t,a,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,i),t.state!==e&&Gu.enqueueReplaceState(t,t.state,null)}function yi(e,t){var a=t;if("ref"in t){a={};for(var i in t)i!=="ref"&&(a[i]=t[i])}if(e=e.defaultProps){a===t&&(a=O({},a));for(var l in e)a[l]===void 0&&(a[l]=e[l])}return a}function wd(e){Bl(e)}function Bd(e){console.error(e)}function Ld(e){Bl(e)}function oo(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function Hd(e,t,a){try{var i=e.onCaughtError;i(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function $u(e,t,a){return a=Ua(a),a.tag=3,a.payload={element:null},a.callback=function(){oo(e,t)},a}function Gd(e){return e=Ua(e),e.tag=3,e}function $d(e,t,a,i){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var o=i.value;e.payload=function(){return l(o)},e.callback=function(){Hd(t,a,i)}}var s=a.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){Hd(t,a,i),typeof l!="function"&&($a===null?$a=new Set([this]):$a.add(this));var m=i.stack;this.componentDidCatch(i.value,{componentStack:m!==null?m:""})})}function u2(e,t,a,i,l){if(a.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=a.alternate,t!==null&&Yi(t,a,l,!0),a=Et.current,a!==null){switch(a.tag){case 31:case 13:return $t===null?yo():a.alternate===null&&He===0&&(He=3),a.flags&=-257,a.flags|=65536,a.lanes=l,i===Kl?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([i]):t.add(i),dc(e,i,l)),!1;case 22:return a.flags|=65536,i===Kl?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([i]):a.add(i)),dc(e,i,l)),!1}throw Error(c(435,a.tag))}return dc(e,i,l),yo(),!1}if(ve)return t=Et.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,i!==ou&&(e=Error(c(422),{cause:i}),qn(Bt(e,a)))):(i!==ou&&(t=Error(c(423),{cause:i}),qn(Bt(t,a))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,i=Bt(i,a),l=$u(e.stateNode,i,l),vu(e,l),He!==4&&(He=2)),!1;var o=Error(c(520),{cause:i});if(o=Bt(o,a),el===null?el=[o]:el.push(o),He!==4&&(He=2),t===null)return!0;i=Bt(i,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=l&-l,a.lanes|=e,e=$u(a.stateNode,i,e),vu(a,e),!1;case 1:if(t=a.type,o=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&($a===null||!$a.has(o))))return a.flags|=65536,l&=-l,a.lanes|=l,l=Gd(l),$d(l,e,a,i),vu(a,l),!1}a=a.return}while(a!==null);return!1}var Vu=Error(c(461)),Ke=!1;function lt(e,t,a,i){t.child=e===null?Qf(t,null,a,i):vi(t,e.child,a,i)}function Vd(e,t,a,i,l){a=a.render;var o=t.ref;if("ref"in i){var s={};for(var m in i)m!=="ref"&&(s[m]=i[m])}else s=i;return mi(t),i=Au(e,t,a,s,o,l),m=Cu(),e!==null&&!Ke?(Eu(e,t,l),ga(e,t,l)):(ve&&m&&nu(t),t.flags|=1,lt(e,t,i,l),t.child)}function Yd(e,t,a,i,l){if(e===null){var o=a.type;return typeof o=="function"&&!tu(o)&&o.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=o,Zd(e,t,o,i,l)):(e=$l(a.type,null,i,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!Iu(e,l)){var s=o.memoizedProps;if(a=a.compare,a=a!==null?a:_n,a(s,i)&&e.ref===t.ref)return ga(e,t,l)}return t.flags|=1,e=ca(o,i),e.ref=t.ref,e.return=t,t.child=e}function Zd(e,t,a,i,l){if(e!==null){var o=e.memoizedProps;if(_n(o,i)&&e.ref===t.ref)if(Ke=!1,t.pendingProps=i=o,Iu(e,l))(e.flags&131072)!==0&&(Ke=!0);else return t.lanes=e.lanes,ga(e,t,l)}return Yu(e,t,a,i,l)}function Qd(e,t,a,i){var l=i.children,o=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(o=o!==null?o.baseLanes|a:a,e!==null){for(i=t.child=e.child,l=0;i!==null;)l=l|i.lanes|i.childLanes,i=i.sibling;i=l&~o}else i=0,t.child=null;return Xd(e,t,o,a,i)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ql(t,o!==null?o.cachePool:null),o!==null?Jf(t,o):yu(),Ff(t);else return i=t.lanes=536870912,Xd(e,t,o!==null?o.baseLanes|a:a,a,i)}else o!==null?(Ql(t,o.cachePool),Jf(t,o),Ba(),t.memoizedState=null):(e!==null&&Ql(t,null),yu(),Ba());return lt(e,t,l,a),t.child}function Kn(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Xd(e,t,a,i,l){var o=mu();return o=o===null?null:{parent:Qe._currentValue,pool:o},t.memoizedState={baseLanes:a,cachePool:o},e!==null&&Ql(t,null),yu(),Ff(t),e!==null&&Yi(e,t,i,!0),t.childLanes=l,null}function ro(e,t){return t=co({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Kd(e,t,a){return vi(t,e.child,null,a),e=ro(t,t.pendingProps),e.flags|=2,jt(t),t.memoizedState=null,e}function c2(e,t,a){var i=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ve){if(i.mode==="hidden")return e=ro(t,i),t.lanes=536870912,Kn(null,e);if(zu(t),(e=_e)?(e=l1(e,Gt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Oa!==null?{id:Pt,overflow:Wt}:null,retryLane:536870912,hydrationErrors:null},a=Rf(e),a.return=t,t.child=a,it=t,_e=null)):e=null,e===null)throw Na(t);return t.lanes=536870912,null}return ro(t,i)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(zu(t),l)if(t.flags&256)t.flags&=-257,t=Kd(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(c(558));else if(Ke||Yi(e,t,a,!1),l=(a&e.childLanes)!==0,Ke||l){if(i=Re,i!==null&&(s=ws(i,a),s!==0&&s!==o.retryLane))throw o.retryLane=s,ci(e,s),gt(i,e,s),Vu;yo(),t=Kd(e,t,a)}else e=o.treeContext,_e=Vt(s.nextSibling),it=t,ve=!0,Ra=null,Gt=!1,e!==null&&Df(t,e),t=ro(t,i),t.flags|=4096;return t}return e=ca(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function uo(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(c(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Yu(e,t,a,i,l){return mi(t),a=Au(e,t,a,i,void 0,l),i=Cu(),e!==null&&!Ke?(Eu(e,t,l),ga(e,t,l)):(ve&&i&&nu(t),t.flags|=1,lt(e,t,a,l),t.child)}function Jd(e,t,a,i,l,o){return mi(t),t.updateQueue=null,a=kf(t,i,a,l),If(e),i=Cu(),e!==null&&!Ke?(Eu(e,t,o),ga(e,t,o)):(ve&&i&&nu(t),t.flags|=1,lt(e,t,a,o),t.child)}function Fd(e,t,a,i,l){if(mi(t),t.stateNode===null){var o=Hi,s=a.contextType;typeof s=="object"&&s!==null&&(o=nt(s)),o=new a(i,o),t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=Gu,t.stateNode=o,o._reactInternals=t,o=t.stateNode,o.props=i,o.state=t.memoizedState,o.refs={},gu(t),s=a.contextType,o.context=typeof s=="object"&&s!==null?nt(s):Hi,o.state=t.memoizedState,s=a.getDerivedStateFromProps,typeof s=="function"&&(Hu(t,a,s,i),o.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(s=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),s!==o.state&&Gu.enqueueReplaceState(o,o.state,null),Vn(t,i,o,l),$n(),o.state=t.memoizedState),typeof o.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){o=t.stateNode;var m=t.memoizedProps,x=yi(a,m);o.props=x;var E=o.context,_=a.contextType;s=Hi,typeof _=="object"&&_!==null&&(s=nt(_));var B=a.getDerivedStateFromProps;_=typeof B=="function"||typeof o.getSnapshotBeforeUpdate=="function",m=t.pendingProps!==m,_||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(m||E!==s)&&qd(t,o,i,s),Da=!1;var M=t.memoizedState;o.state=M,Vn(t,i,o,l),$n(),E=t.memoizedState,m||M!==E||Da?(typeof B=="function"&&(Hu(t,a,B,i),E=t.memoizedState),(x=Da||Ud(t,a,x,i,M,E,s))?(_||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=E),o.props=i,o.state=E,o.context=s,i=x):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{o=t.stateNode,hu(e,t),s=t.memoizedProps,_=yi(a,s),o.props=_,B=t.pendingProps,M=o.context,E=a.contextType,x=Hi,typeof E=="object"&&E!==null&&(x=nt(E)),m=a.getDerivedStateFromProps,(E=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==B||M!==x)&&qd(t,o,i,x),Da=!1,M=t.memoizedState,o.state=M,Vn(t,i,o,l),$n();var R=t.memoizedState;s!==B||M!==R||Da||e!==null&&e.dependencies!==null&&Yl(e.dependencies)?(typeof m=="function"&&(Hu(t,a,m,i),R=t.memoizedState),(_=Da||Ud(t,a,_,i,M,R,x)||e!==null&&e.dependencies!==null&&Yl(e.dependencies))?(E||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,R,x),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,R,x)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&M===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&M===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=R),o.props=i,o.state=R,o.context=x,i=_):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&M===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&M===e.memoizedState||(t.flags|=1024),i=!1)}return o=i,uo(e,t),i=(t.flags&128)!==0,o||i?(o=t.stateNode,a=i&&typeof a.getDerivedStateFromError!="function"?null:o.render(),t.flags|=1,e!==null&&i?(t.child=vi(t,e.child,null,l),t.child=vi(t,null,a,l)):lt(e,t,a,l),t.memoizedState=o.state,e=t.child):e=ga(e,t,l),e}function Id(e,t,a,i){return fi(),t.flags|=256,lt(e,t,a,i),t.child}var Zu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Qu(e){return{baseLanes:e,cachePool:Hf()}}function Xu(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Mt),e}function kd(e,t,a){var i=t.pendingProps,l=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:($e.current&2)!==0),s&&(l=!0,t.flags&=-129),s=(t.flags&32)!==0,t.flags&=-33,e===null){if(ve){if(l?wa(t):Ba(),(e=_e)?(e=l1(e,Gt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Oa!==null?{id:Pt,overflow:Wt}:null,retryLane:536870912,hydrationErrors:null},a=Rf(e),a.return=t,t.child=a,it=t,_e=null)):e=null,e===null)throw Na(t);return Mc(e)?t.lanes=32:t.lanes=536870912,null}var m=i.children;return i=i.fallback,l?(Ba(),l=t.mode,m=co({mode:"hidden",children:m},l),i=si(i,l,a,null),m.return=t,i.return=t,m.sibling=i,t.child=m,i=t.child,i.memoizedState=Qu(a),i.childLanes=Xu(e,s,a),t.memoizedState=Zu,Kn(null,i)):(wa(t),Ku(t,m))}var x=e.memoizedState;if(x!==null&&(m=x.dehydrated,m!==null)){if(o)t.flags&256?(wa(t),t.flags&=-257,t=Ju(e,t,a)):t.memoizedState!==null?(Ba(),t.child=e.child,t.flags|=128,t=null):(Ba(),m=i.fallback,l=t.mode,i=co({mode:"visible",children:i.children},l),m=si(m,l,a,null),m.flags|=2,i.return=t,m.return=t,i.sibling=m,t.child=i,vi(t,e.child,null,a),i=t.child,i.memoizedState=Qu(a),i.childLanes=Xu(e,s,a),t.memoizedState=Zu,t=Kn(null,i));else if(wa(t),Mc(m)){if(s=m.nextSibling&&m.nextSibling.dataset,s)var E=s.dgst;s=E,i=Error(c(419)),i.stack="",i.digest=s,qn({value:i,source:null,stack:null}),t=Ju(e,t,a)}else if(Ke||Yi(e,t,a,!1),s=(a&e.childLanes)!==0,Ke||s){if(s=Re,s!==null&&(i=ws(s,a),i!==0&&i!==x.retryLane))throw x.retryLane=i,ci(e,i),gt(s,e,i),Vu;Tc(m)||yo(),t=Ju(e,t,a)}else Tc(m)?(t.flags|=192,t.child=e.child,t=null):(e=x.treeContext,_e=Vt(m.nextSibling),it=t,ve=!0,Ra=null,Gt=!1,e!==null&&Df(t,e),t=Ku(t,i.children),t.flags|=4096);return t}return l?(Ba(),m=i.fallback,l=t.mode,x=e.child,E=x.sibling,i=ca(x,{mode:"hidden",children:i.children}),i.subtreeFlags=x.subtreeFlags&65011712,E!==null?m=ca(E,m):(m=si(m,l,a,null),m.flags|=2),m.return=t,i.return=t,i.sibling=m,t.child=i,Kn(null,i),i=t.child,m=e.child.memoizedState,m===null?m=Qu(a):(l=m.cachePool,l!==null?(x=Qe._currentValue,l=l.parent!==x?{parent:x,pool:x}:l):l=Hf(),m={baseLanes:m.baseLanes|a,cachePool:l}),i.memoizedState=m,i.childLanes=Xu(e,s,a),t.memoizedState=Zu,Kn(e.child,i)):(wa(t),a=e.child,e=a.sibling,a=ca(a,{mode:"visible",children:i.children}),a.return=t,a.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=a,t.memoizedState=null,a)}function Ku(e,t){return t=co({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function co(e,t){return e=Ct(22,e,null,t),e.lanes=0,e}function Ju(e,t,a){return vi(t,e.child,null,a),e=Ku(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Pd(e,t,a){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),cu(e.return,t,a)}function Fu(e,t,a,i,l,o){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:a,tailMode:l,treeForkCount:o}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=a,s.tailMode=l,s.treeForkCount=o)}function Wd(e,t,a){var i=t.pendingProps,l=i.revealOrder,o=i.tail;i=i.children;var s=$e.current,m=(s&2)!==0;if(m?(s=s&1|2,t.flags|=128):s&=1,Y($e,s),lt(e,t,i,a),i=ve?Un:0,!m&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Pd(e,a,t);else if(e.tag===19)Pd(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(a=t.child,l=null;a!==null;)e=a.alternate,e!==null&&kl(e)===null&&(l=a),a=a.sibling;a=l,a===null?(l=t.child,t.child=null):(l=a.sibling,a.sibling=null),Fu(t,!1,l,a,o,i);break;case"backwards":case"unstable_legacy-backwards":for(a=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&kl(e)===null){t.child=l;break}e=l.sibling,l.sibling=a,a=l,l=e}Fu(t,!0,a,null,o,i);break;case"together":Fu(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function ga(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Ga|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Yi(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,a=ca(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=ca(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Iu(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Yl(e)))}function s2(e,t,a){switch(t.tag){case 3:Ge(t,t.stateNode.containerInfo),_a(t,Qe,e.memoizedState.cache),fi();break;case 27:case 5:na(t);break;case 4:Ge(t,t.stateNode.containerInfo);break;case 10:_a(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,zu(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(wa(t),t.flags|=128,null):(a&t.child.childLanes)!==0?kd(e,t,a):(wa(t),e=ga(e,t,a),e!==null?e.sibling:null);wa(t);break;case 19:var l=(e.flags&128)!==0;if(i=(a&t.childLanes)!==0,i||(Yi(e,t,a,!1),i=(a&t.childLanes)!==0),l){if(i)return Wd(e,t,a);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Y($e,$e.current),i)break;return null;case 22:return t.lanes=0,Qd(e,t,a,t.pendingProps);case 24:_a(t,Qe,e.memoizedState.cache)}return ga(e,t,a)}function e0(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ke=!0;else{if(!Iu(e,a)&&(t.flags&128)===0)return Ke=!1,s2(e,t,a);Ke=(e.flags&131072)!==0}else Ke=!1,ve&&(t.flags&1048576)!==0&&_f(t,Un,t.index);switch(t.lanes=0,t.tag){case 16:e:{var i=t.pendingProps;if(e=gi(t.elementType),t.type=e,typeof e=="function")tu(e)?(i=yi(e,i),t.tag=1,t=Fd(null,t,e,i,a)):(t.tag=0,t=Yu(null,t,e,i,a));else{if(e!=null){var l=e.$$typeof;if(l===ae){t.tag=11,t=Vd(null,t,e,i,a);break e}else if(l===L){t.tag=14,t=Yd(null,t,e,i,a);break e}}throw t=xt(e)||e,Error(c(306,t,""))}}return t;case 0:return Yu(e,t,t.type,t.pendingProps,a);case 1:return i=t.type,l=yi(i,t.pendingProps),Fd(e,t,i,l,a);case 3:e:{if(Ge(t,t.stateNode.containerInfo),e===null)throw Error(c(387));i=t.pendingProps;var o=t.memoizedState;l=o.element,hu(e,t),Vn(t,i,null,a);var s=t.memoizedState;if(i=s.cache,_a(t,Qe,i),i!==o.cache&&su(t,[Qe],a,!0),$n(),i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=Id(e,t,i,a);break e}else if(i!==l){l=Bt(Error(c(424)),t),qn(l),t=Id(e,t,i,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(_e=Vt(e.firstChild),it=t,ve=!0,Ra=null,Gt=!0,a=Qf(t,null,i,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(fi(),i===l){t=ga(e,t,a);break e}lt(e,t,i,a)}t=t.child}return t;case 26:return uo(e,t),e===null?(a=f1(t.type,null,t.pendingProps,null))?t.memoizedState=a:ve||(a=t.type,e=t.pendingProps,i=jo(le.current).createElement(a),i[at]=t,i[ct]=e,ot(i,a,e),We(i),t.stateNode=i):t.memoizedState=f1(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return na(t),e===null&&ve&&(i=t.stateNode=u1(t.type,t.pendingProps,le.current),it=t,Gt=!0,l=_e,Qa(t.type)?(Oc=l,_e=Vt(i.firstChild)):_e=l),lt(e,t,t.pendingProps.children,a),uo(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ve&&((l=i=_e)&&(i=G2(i,t.type,t.pendingProps,Gt),i!==null?(t.stateNode=i,it=t,_e=Vt(i.firstChild),Gt=!1,l=!0):l=!1),l||Na(t)),na(t),l=t.type,o=t.pendingProps,s=e!==null?e.memoizedProps:null,i=o.children,Cc(l,o)?i=null:s!==null&&Cc(l,s)&&(t.flags|=32),t.memoizedState!==null&&(l=Au(e,t,t2,null,null,a),ul._currentValue=l),uo(e,t),lt(e,t,i,a),t.child;case 6:return e===null&&ve&&((e=a=_e)&&(a=$2(a,t.pendingProps,Gt),a!==null?(t.stateNode=a,it=t,_e=null,e=!0):e=!1),e||Na(t)),null;case 13:return kd(e,t,a);case 4:return Ge(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=vi(t,null,i,a):lt(e,t,i,a),t.child;case 11:return Vd(e,t,t.type,t.pendingProps,a);case 7:return lt(e,t,t.pendingProps,a),t.child;case 8:return lt(e,t,t.pendingProps.children,a),t.child;case 12:return lt(e,t,t.pendingProps.children,a),t.child;case 10:return i=t.pendingProps,_a(t,t.type,i.value),lt(e,t,i.children,a),t.child;case 9:return l=t.type._context,i=t.pendingProps.children,mi(t),l=nt(l),i=i(l),t.flags|=1,lt(e,t,i,a),t.child;case 14:return Yd(e,t,t.type,t.pendingProps,a);case 15:return Zd(e,t,t.type,t.pendingProps,a);case 19:return Wd(e,t,a);case 31:return c2(e,t,a);case 22:return Qd(e,t,a,t.pendingProps);case 24:return mi(t),i=nt(Qe),e===null?(l=mu(),l===null&&(l=Re,o=fu(),l.pooledCache=o,o.refCount++,o!==null&&(l.pooledCacheLanes|=a),l=o),t.memoizedState={parent:i,cache:l},gu(t),_a(t,Qe,l)):((e.lanes&a)!==0&&(hu(e,t),Vn(t,null,null,a),$n()),l=e.memoizedState,o=t.memoizedState,l.parent!==i?(l={parent:i,cache:i},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),_a(t,Qe,i)):(i=o.cache,_a(t,Qe,i),i!==l.cache&&su(t,[Qe],a,!0))),lt(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function ha(e){e.flags|=4}function ku(e,t,a,i,l){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(T0())e.flags|=8192;else throw hi=Kl,pu}else e.flags&=-16777217}function t0(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!h1(t))if(T0())e.flags|=8192;else throw hi=Kl,pu}function so(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Ds():536870912,e.lanes|=t,tn|=t)}function Jn(e,t){if(!ve)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var i=null;a!==null;)a.alternate!==null&&(i=a),a=a.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function De(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,i=0;if(t)for(var l=e.child;l!==null;)a|=l.lanes|l.childLanes,i|=l.subtreeFlags&65011712,i|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)a|=l.lanes|l.childLanes,i|=l.subtreeFlags,i|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=i,e.childLanes=a,t}function f2(e,t,a){var i=t.pendingProps;switch(lu(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return De(t),null;case 1:return De(t),null;case 3:return a=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),da(Qe),Ce(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Vi(t)?ha(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ru())),De(t),null;case 26:var l=t.type,o=t.memoizedState;return e===null?(ha(t),o!==null?(De(t),t0(t,o)):(De(t),ku(t,l,null,i,a))):o?o!==e.memoizedState?(ha(t),De(t),t0(t,o)):(De(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&ha(t),De(t),ku(t,l,e,i,a)),null;case 27:if(la(t),a=le.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&ha(t);else{if(!i){if(t.stateNode===null)throw Error(c(166));return De(t),null}e=X.current,Vi(t)?Uf(t):(e=u1(l,i,a),t.stateNode=e,ha(t))}return De(t),null;case 5:if(la(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&ha(t);else{if(!i){if(t.stateNode===null)throw Error(c(166));return De(t),null}if(o=X.current,Vi(t))Uf(t);else{var s=jo(le.current);switch(o){case 1:o=s.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:o=s.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":o=s.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":o=s.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":o=s.createElement("div"),o.innerHTML="<script><\/script>",o=o.removeChild(o.firstChild);break;case"select":o=typeof i.is=="string"?s.createElement("select",{is:i.is}):s.createElement("select"),i.multiple?o.multiple=!0:i.size&&(o.size=i.size);break;default:o=typeof i.is=="string"?s.createElement(l,{is:i.is}):s.createElement(l)}}o[at]=t,o[ct]=i;e:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break e;for(;s.sibling===null;){if(s.return===null||s.return===t)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;e:switch(ot(o,l,i),l){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&ha(t)}}return De(t),ku(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&ha(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(c(166));if(e=le.current,Vi(t)){if(e=t.stateNode,a=t.memoizedProps,i=null,l=it,l!==null)switch(l.tag){case 27:case 5:i=l.memoizedProps}e[at]=t,e=!!(e.nodeValue===a||i!==null&&i.suppressHydrationWarning===!0||k0(e.nodeValue,a)),e||Na(t,!0)}else e=jo(e).createTextNode(i),e[at]=t,t.stateNode=e}return De(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(i=Vi(t),a!==null){if(e===null){if(!i)throw Error(c(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[at]=t}else fi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;De(t),e=!1}else a=ru(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(jt(t),t):(jt(t),null);if((t.flags&128)!==0)throw Error(c(558))}return De(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=Vi(t),i!==null&&i.dehydrated!==null){if(e===null){if(!l)throw Error(c(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(c(317));l[at]=t}else fi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;De(t),l=!1}else l=ru(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(jt(t),t):(jt(t),null)}return jt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=i!==null,e=e!==null&&e.memoizedState!==null,a&&(i=t.child,l=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(l=i.alternate.memoizedState.cachePool.pool),o=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),o!==l&&(i.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),so(t,t.updateQueue),De(t),null);case 4:return Ce(),e===null&&yc(t.stateNode.containerInfo),De(t),null;case 10:return da(t.type),De(t),null;case 19:if(U($e),i=t.memoizedState,i===null)return De(t),null;if(l=(t.flags&128)!==0,o=i.rendering,o===null)if(l)Jn(i,!1);else{if(He!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=kl(e),o!==null){for(t.flags|=128,Jn(i,!1),e=o.updateQueue,t.updateQueue=e,so(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Of(a,e),a=a.sibling;return Y($e,$e.current&1|2),ve&&sa(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&bt()>ho&&(t.flags|=128,l=!0,Jn(i,!1),t.lanes=4194304)}else{if(!l)if(e=kl(o),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,so(t,e),Jn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!ve)return De(t),null}else 2*bt()-i.renderingStartTime>ho&&a!==536870912&&(t.flags|=128,l=!0,Jn(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(e=i.last,e!==null?e.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=bt(),e.sibling=null,a=$e.current,Y($e,l?a&1|2:a&1),ve&&sa(t,i.treeForkCount),e):(De(t),null);case 22:case 23:return jt(t),bu(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(a&536870912)!==0&&(t.flags&128)===0&&(De(t),t.subtreeFlags&6&&(t.flags|=8192)):De(t),a=t.updateQueue,a!==null&&so(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==a&&(t.flags|=2048),e!==null&&U(pi),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),da(Qe),De(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function d2(e,t){switch(lu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return da(Qe),Ce(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return la(t),null;case 31:if(t.memoizedState!==null){if(jt(t),t.alternate===null)throw Error(c(340));fi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(jt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));fi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return U($e),null;case 4:return Ce(),null;case 10:return da(t.type),null;case 22:case 23:return jt(t),bu(),e!==null&&U(pi),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return da(Qe),null;case 25:return null;default:return null}}function a0(e,t){switch(lu(t),t.tag){case 3:da(Qe),Ce();break;case 26:case 27:case 5:la(t);break;case 4:Ce();break;case 31:t.memoizedState!==null&&jt(t);break;case 13:jt(t);break;case 19:U($e);break;case 10:da(t.type);break;case 22:case 23:jt(t),bu(),e!==null&&U(pi);break;case 24:da(Qe)}}function Fn(e,t){try{var a=t.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var l=i.next;a=l;do{if((a.tag&e)===e){i=void 0;var o=a.create,s=a.inst;i=o(),s.destroy=i}a=a.next}while(a!==l)}}catch(m){je(t,t.return,m)}}function La(e,t,a){try{var i=t.updateQueue,l=i!==null?i.lastEffect:null;if(l!==null){var o=l.next;i=o;do{if((i.tag&e)===e){var s=i.inst,m=s.destroy;if(m!==void 0){s.destroy=void 0,l=t;var x=a,E=m;try{E()}catch(_){je(l,x,_)}}}i=i.next}while(i!==o)}}catch(_){je(t,t.return,_)}}function i0(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Kf(t,a)}catch(i){je(e,e.return,i)}}}function n0(e,t,a){a.props=yi(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(i){je(e,t,i)}}function In(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof a=="function"?e.refCleanup=a(i):a.current=i}}catch(l){je(e,t,l)}}function ea(e,t){var a=e.ref,i=e.refCleanup;if(a!==null)if(typeof i=="function")try{i()}catch(l){je(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){je(e,t,l)}else a.current=null}function l0(e){var t=e.type,a=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&i.focus();break e;case"img":a.src?i.src=a.src:a.srcSet&&(i.srcset=a.srcSet)}}catch(l){je(e,e.return,l)}}function Pu(e,t,a){try{var i=e.stateNode;U2(i,e.type,a,t),i[ct]=t}catch(l){je(e,e.return,l)}}function o0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Qa(e.type)||e.tag===4}function Wu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||o0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Qa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ec(e,t,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=ra));else if(i!==4&&(i===27&&Qa(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(ec(e,t,a),e=e.sibling;e!==null;)ec(e,t,a),e=e.sibling}function fo(e,t,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(i!==4&&(i===27&&Qa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(fo(e,t,a),e=e.sibling;e!==null;)fo(e,t,a),e=e.sibling}function r0(e){var t=e.stateNode,a=e.memoizedProps;try{for(var i=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);ot(t,i,a),t[at]=e,t[ct]=a}catch(o){je(e,e.return,o)}}var va=!1,Je=!1,tc=!1,u0=typeof WeakSet=="function"?WeakSet:Set,et=null;function m2(e,t){if(e=e.containerInfo,Sc=Do,e=bf(e),Jr(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var i=a.getSelection&&a.getSelection();if(i&&i.rangeCount!==0){a=i.anchorNode;var l=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{a.nodeType,o.nodeType}catch{a=null;break e}var s=0,m=-1,x=-1,E=0,_=0,B=e,M=null;t:for(;;){for(var R;B!==a||l!==0&&B.nodeType!==3||(m=s+l),B!==o||i!==0&&B.nodeType!==3||(x=s+i),B.nodeType===3&&(s+=B.nodeValue.length),(R=B.firstChild)!==null;)M=B,B=R;for(;;){if(B===e)break t;if(M===a&&++E===l&&(m=s),M===o&&++_===i&&(x=s),(R=B.nextSibling)!==null)break;B=M,M=B.parentNode}B=R}a=m===-1||x===-1?null:{start:m,end:x}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ac={focusedElem:e,selectionRange:a},Do=!1,et=t;et!==null;)if(t=et,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,et=e;else for(;et!==null;){switch(t=et,o=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)l=e[a],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&o!==null){e=void 0,a=t,l=o.memoizedProps,o=o.memoizedState,i=a.stateNode;try{var K=yi(a.type,l);e=i.getSnapshotBeforeUpdate(K,o),i.__reactInternalSnapshotBeforeUpdate=e}catch(ee){je(a,a.return,ee)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)jc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":jc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,et=e;break}et=t.return}}function c0(e,t,a){var i=a.flags;switch(a.tag){case 0:case 11:case 15:ya(e,a),i&4&&Fn(5,a);break;case 1:if(ya(e,a),i&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(s){je(a,a.return,s)}else{var l=yi(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){je(a,a.return,s)}}i&64&&i0(a),i&512&&In(a,a.return);break;case 3:if(ya(e,a),i&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Kf(e,t)}catch(s){je(a,a.return,s)}}break;case 27:t===null&&i&4&&r0(a);case 26:case 5:ya(e,a),t===null&&i&4&&l0(a),i&512&&In(a,a.return);break;case 12:ya(e,a);break;case 31:ya(e,a),i&4&&d0(e,a);break;case 13:ya(e,a),i&4&&m0(e,a),i&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=S2.bind(null,a),V2(e,a))));break;case 22:if(i=a.memoizedState!==null||va,!i){t=t!==null&&t.memoizedState!==null||Je,l=va;var o=Je;va=i,(Je=t)&&!o?ba(e,a,(a.subtreeFlags&8772)!==0):ya(e,a),va=l,Je=o}break;case 30:break;default:ya(e,a)}}function s0(e){var t=e.alternate;t!==null&&(e.alternate=null,s0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Nr(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var qe=null,ft=!1;function xa(e,t,a){for(a=a.child;a!==null;)f0(e,t,a),a=a.sibling}function f0(e,t,a){if(zt&&typeof zt.onCommitFiberUnmount=="function")try{zt.onCommitFiberUnmount(bn,a)}catch{}switch(a.tag){case 26:Je||ea(a,t),xa(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Je||ea(a,t);var i=qe,l=ft;Qa(a.type)&&(qe=a.stateNode,ft=!1),xa(e,t,a),ll(a.stateNode),qe=i,ft=l;break;case 5:Je||ea(a,t);case 6:if(i=qe,l=ft,qe=null,xa(e,t,a),qe=i,ft=l,qe!==null)if(ft)try{(qe.nodeType===9?qe.body:qe.nodeName==="HTML"?qe.ownerDocument.body:qe).removeChild(a.stateNode)}catch(o){je(a,t,o)}else try{qe.removeChild(a.stateNode)}catch(o){je(a,t,o)}break;case 18:qe!==null&&(ft?(e=qe,i1(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),sn(e)):i1(qe,a.stateNode));break;case 4:i=qe,l=ft,qe=a.stateNode.containerInfo,ft=!0,xa(e,t,a),qe=i,ft=l;break;case 0:case 11:case 14:case 15:La(2,a,t),Je||La(4,a,t),xa(e,t,a);break;case 1:Je||(ea(a,t),i=a.stateNode,typeof i.componentWillUnmount=="function"&&n0(a,t,i)),xa(e,t,a);break;case 21:xa(e,t,a);break;case 22:Je=(i=Je)||a.memoizedState!==null,xa(e,t,a),Je=i;break;default:xa(e,t,a)}}function d0(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{sn(e)}catch(a){je(t,t.return,a)}}}function m0(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{sn(e)}catch(a){je(t,t.return,a)}}function p2(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new u0),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new u0),t;default:throw Error(c(435,e.tag))}}function mo(e,t){var a=p2(e);t.forEach(function(i){if(!a.has(i)){a.add(i);var l=A2.bind(null,e,i);i.then(l,l)}})}function dt(e,t){var a=t.deletions;if(a!==null)for(var i=0;i<a.length;i++){var l=a[i],o=e,s=t,m=s;e:for(;m!==null;){switch(m.tag){case 27:if(Qa(m.type)){qe=m.stateNode,ft=!1;break e}break;case 5:qe=m.stateNode,ft=!1;break e;case 3:case 4:qe=m.stateNode.containerInfo,ft=!0;break e}m=m.return}if(qe===null)throw Error(c(160));f0(o,s,l),qe=null,ft=!1,o=l.alternate,o!==null&&(o.return=null),l.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)p0(t,e),t=t.sibling}var Kt=null;function p0(e,t){var a=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:dt(t,e),mt(e),i&4&&(La(3,e,e.return),Fn(3,e),La(5,e,e.return));break;case 1:dt(t,e),mt(e),i&512&&(Je||a===null||ea(a,a.return)),i&64&&va&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?i:a.concat(i))));break;case 26:var l=Kt;if(dt(t,e),mt(e),i&512&&(Je||a===null||ea(a,a.return)),i&4){var o=a!==null?a.memoizedState:null;if(i=e.memoizedState,a===null)if(i===null)if(e.stateNode===null){e:{i=e.type,a=e.memoizedProps,l=l.ownerDocument||l;t:switch(i){case"title":o=l.getElementsByTagName("title")[0],(!o||o[An]||o[at]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=l.createElement(i),l.head.insertBefore(o,l.querySelector("head > title"))),ot(o,i,a),o[at]=e,We(o),i=o;break e;case"link":var s=p1("link","href",l).get(i+(a.href||""));if(s){for(var m=0;m<s.length;m++)if(o=s[m],o.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&o.getAttribute("rel")===(a.rel==null?null:a.rel)&&o.getAttribute("title")===(a.title==null?null:a.title)&&o.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){s.splice(m,1);break t}}o=l.createElement(i),ot(o,i,a),l.head.appendChild(o);break;case"meta":if(s=p1("meta","content",l).get(i+(a.content||""))){for(m=0;m<s.length;m++)if(o=s[m],o.getAttribute("content")===(a.content==null?null:""+a.content)&&o.getAttribute("name")===(a.name==null?null:a.name)&&o.getAttribute("property")===(a.property==null?null:a.property)&&o.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&o.getAttribute("charset")===(a.charSet==null?null:a.charSet)){s.splice(m,1);break t}}o=l.createElement(i),ot(o,i,a),l.head.appendChild(o);break;default:throw Error(c(468,i))}o[at]=e,We(o),i=o}e.stateNode=i}else g1(l,e.type,e.stateNode);else e.stateNode=m1(l,i,e.memoizedProps);else o!==i?(o===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):o.count--,i===null?g1(l,e.type,e.stateNode):m1(l,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Pu(e,e.memoizedProps,a.memoizedProps)}break;case 27:dt(t,e),mt(e),i&512&&(Je||a===null||ea(a,a.return)),a!==null&&i&4&&Pu(e,e.memoizedProps,a.memoizedProps);break;case 5:if(dt(t,e),mt(e),i&512&&(Je||a===null||ea(a,a.return)),e.flags&32){l=e.stateNode;try{_i(l,"")}catch(K){je(e,e.return,K)}}i&4&&e.stateNode!=null&&(l=e.memoizedProps,Pu(e,l,a!==null?a.memoizedProps:l)),i&1024&&(tc=!0);break;case 6:if(dt(t,e),mt(e),i&4){if(e.stateNode===null)throw Error(c(162));i=e.memoizedProps,a=e.stateNode;try{a.nodeValue=i}catch(K){je(e,e.return,K)}}break;case 3:if(Oo=null,l=Kt,Kt=To(t.containerInfo),dt(t,e),Kt=l,mt(e),i&4&&a!==null&&a.memoizedState.isDehydrated)try{sn(t.containerInfo)}catch(K){je(e,e.return,K)}tc&&(tc=!1,g0(e));break;case 4:i=Kt,Kt=To(e.stateNode.containerInfo),dt(t,e),mt(e),Kt=i;break;case 12:dt(t,e),mt(e);break;case 31:dt(t,e),mt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,mo(e,i)));break;case 13:dt(t,e),mt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(go=bt()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,mo(e,i)));break;case 22:l=e.memoizedState!==null;var x=a!==null&&a.memoizedState!==null,E=va,_=Je;if(va=E||l,Je=_||x,dt(t,e),Je=_,va=E,mt(e),i&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(a===null||x||va||Je||bi(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){x=a=t;try{if(o=x.stateNode,l)s=o.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{m=x.stateNode;var B=x.memoizedProps.style,M=B!=null&&B.hasOwnProperty("display")?B.display:null;m.style.display=M==null||typeof M=="boolean"?"":(""+M).trim()}}catch(K){je(x,x.return,K)}}}else if(t.tag===6){if(a===null){x=t;try{x.stateNode.nodeValue=l?"":x.memoizedProps}catch(K){je(x,x.return,K)}}}else if(t.tag===18){if(a===null){x=t;try{var R=x.stateNode;l?n1(R,!0):n1(x.stateNode,!1)}catch(K){je(x,x.return,K)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(a=i.retryQueue,a!==null&&(i.retryQueue=null,mo(e,a))));break;case 19:dt(t,e),mt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,mo(e,i)));break;case 30:break;case 21:break;default:dt(t,e),mt(e)}}function mt(e){var t=e.flags;if(t&2){try{for(var a,i=e.return;i!==null;){if(o0(i)){a=i;break}i=i.return}if(a==null)throw Error(c(160));switch(a.tag){case 27:var l=a.stateNode,o=Wu(e);fo(e,o,l);break;case 5:var s=a.stateNode;a.flags&32&&(_i(s,""),a.flags&=-33);var m=Wu(e);fo(e,m,s);break;case 3:case 4:var x=a.stateNode.containerInfo,E=Wu(e);ec(e,E,x);break;default:throw Error(c(161))}}catch(_){je(e,e.return,_)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function g0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;g0(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ya(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)c0(e,t.alternate,t),t=t.sibling}function bi(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:La(4,t,t.return),bi(t);break;case 1:ea(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&n0(t,t.return,a),bi(t);break;case 27:ll(t.stateNode);case 26:case 5:ea(t,t.return),bi(t);break;case 22:t.memoizedState===null&&bi(t);break;case 30:bi(t);break;default:bi(t)}e=e.sibling}}function ba(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,l=e,o=t,s=o.flags;switch(o.tag){case 0:case 11:case 15:ba(l,o,a),Fn(4,o);break;case 1:if(ba(l,o,a),i=o,l=i.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(E){je(i,i.return,E)}if(i=o,l=i.updateQueue,l!==null){var m=i.stateNode;try{var x=l.shared.hiddenCallbacks;if(x!==null)for(l.shared.hiddenCallbacks=null,l=0;l<x.length;l++)Xf(x[l],m)}catch(E){je(i,i.return,E)}}a&&s&64&&i0(o),In(o,o.return);break;case 27:r0(o);case 26:case 5:ba(l,o,a),a&&i===null&&s&4&&l0(o),In(o,o.return);break;case 12:ba(l,o,a);break;case 31:ba(l,o,a),a&&s&4&&d0(l,o);break;case 13:ba(l,o,a),a&&s&4&&m0(l,o);break;case 22:o.memoizedState===null&&ba(l,o,a),In(o,o.return);break;case 30:break;default:ba(l,o,a)}t=t.sibling}}function ac(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&wn(a))}function ic(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&wn(e))}function Jt(e,t,a,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)h0(e,t,a,i),t=t.sibling}function h0(e,t,a,i){var l=t.flags;switch(t.tag){case 0:case 11:case 15:Jt(e,t,a,i),l&2048&&Fn(9,t);break;case 1:Jt(e,t,a,i);break;case 3:Jt(e,t,a,i),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&wn(e)));break;case 12:if(l&2048){Jt(e,t,a,i),e=t.stateNode;try{var o=t.memoizedProps,s=o.id,m=o.onPostCommit;typeof m=="function"&&m(s,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(x){je(t,t.return,x)}}else Jt(e,t,a,i);break;case 31:Jt(e,t,a,i);break;case 13:Jt(e,t,a,i);break;case 23:break;case 22:o=t.stateNode,s=t.alternate,t.memoizedState!==null?o._visibility&2?Jt(e,t,a,i):kn(e,t):o._visibility&2?Jt(e,t,a,i):(o._visibility|=2,Pi(e,t,a,i,(t.subtreeFlags&10256)!==0||!1)),l&2048&&ac(s,t);break;case 24:Jt(e,t,a,i),l&2048&&ic(t.alternate,t);break;default:Jt(e,t,a,i)}}function Pi(e,t,a,i,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var o=e,s=t,m=a,x=i,E=s.flags;switch(s.tag){case 0:case 11:case 15:Pi(o,s,m,x,l),Fn(8,s);break;case 23:break;case 22:var _=s.stateNode;s.memoizedState!==null?_._visibility&2?Pi(o,s,m,x,l):kn(o,s):(_._visibility|=2,Pi(o,s,m,x,l)),l&&E&2048&&ac(s.alternate,s);break;case 24:Pi(o,s,m,x,l),l&&E&2048&&ic(s.alternate,s);break;default:Pi(o,s,m,x,l)}t=t.sibling}}function kn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,i=t,l=i.flags;switch(i.tag){case 22:kn(a,i),l&2048&&ac(i.alternate,i);break;case 24:kn(a,i),l&2048&&ic(i.alternate,i);break;default:kn(a,i)}t=t.sibling}}var Pn=8192;function Wi(e,t,a){if(e.subtreeFlags&Pn)for(e=e.child;e!==null;)v0(e,t,a),e=e.sibling}function v0(e,t,a){switch(e.tag){case 26:Wi(e,t,a),e.flags&Pn&&e.memoizedState!==null&&eh(a,Kt,e.memoizedState,e.memoizedProps);break;case 5:Wi(e,t,a);break;case 3:case 4:var i=Kt;Kt=To(e.stateNode.containerInfo),Wi(e,t,a),Kt=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Pn,Pn=16777216,Wi(e,t,a),Pn=i):Wi(e,t,a));break;default:Wi(e,t,a)}}function x0(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Wn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];et=i,b0(i,e)}x0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)y0(e),e=e.sibling}function y0(e){switch(e.tag){case 0:case 11:case 15:Wn(e),e.flags&2048&&La(9,e,e.return);break;case 3:Wn(e);break;case 12:Wn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,po(e)):Wn(e);break;default:Wn(e)}}function po(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];et=i,b0(i,e)}x0(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:La(8,t,t.return),po(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,po(t));break;default:po(t)}e=e.sibling}}function b0(e,t){for(;et!==null;){var a=et;switch(a.tag){case 0:case 11:case 15:La(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var i=a.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:wn(a.memoizedState.cache)}if(i=a.child,i!==null)i.return=a,et=i;else e:for(a=e;et!==null;){i=et;var l=i.sibling,o=i.return;if(s0(i),i===a){et=null;break e}if(l!==null){l.return=o,et=l;break e}et=o}}}var g2={getCacheForType:function(e){var t=nt(Qe),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return nt(Qe).controller.signal}},h2=typeof WeakMap=="function"?WeakMap:Map,Se=0,Re=null,fe=null,pe=0,Ee=0,Tt=null,Ha=!1,en=!1,nc=!1,za=0,He=0,Ga=0,zi=0,lc=0,Mt=0,tn=0,el=null,pt=null,oc=!1,go=0,z0=0,ho=1/0,vo=null,$a=null,Pe=0,Va=null,an=null,Sa=0,rc=0,uc=null,S0=null,tl=0,cc=null;function Ot(){return(Se&2)!==0&&pe!==0?pe&-pe:D.T!==null?gc():Bs()}function A0(){if(Mt===0)if((pe&536870912)===0||ve){var e=Cl;Cl<<=1,(Cl&3932160)===0&&(Cl=262144),Mt=e}else Mt=536870912;return e=Et.current,e!==null&&(e.flags|=32),Mt}function gt(e,t,a){(e===Re&&(Ee===2||Ee===9)||e.cancelPendingCommit!==null)&&(nn(e,0),Ya(e,pe,Mt,!1)),Sn(e,a),((Se&2)===0||e!==Re)&&(e===Re&&((Se&2)===0&&(zi|=a),He===4&&Ya(e,pe,Mt,!1)),ta(e))}function C0(e,t,a){if((Se&6)!==0)throw Error(c(327));var i=!a&&(t&127)===0&&(t&e.expiredLanes)===0||zn(e,t),l=i?y2(e,t):fc(e,t,!0),o=i;do{if(l===0){en&&!i&&Ya(e,t,0,!1);break}else{if(a=e.current.alternate,o&&!v2(a)){l=fc(e,t,!1),o=!1;continue}if(l===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){t=s;e:{var m=e;l=el;var x=m.current.memoizedState.isDehydrated;if(x&&(nn(m,s).flags|=256),s=fc(m,s,!1),s!==2){if(nc&&!x){m.errorRecoveryDisabledLanes|=o,zi|=o,l=4;break e}o=pt,pt=l,o!==null&&(pt===null?pt=o:pt.push.apply(pt,o))}l=s}if(o=!1,l!==2)continue}}if(l===1){nn(e,0),Ya(e,t,0,!0);break}e:{switch(i=e,o=l,o){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:Ya(i,t,Mt,!Ha);break e;case 2:pt=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(l=go+300-bt(),10<l)){if(Ya(i,t,Mt,!Ha),jl(i,0,!0)!==0)break e;Sa=t,i.timeoutHandle=t1(E0.bind(null,i,a,pt,vo,oc,t,Mt,zi,tn,Ha,o,"Throttled",-0,0),l);break e}E0(i,a,pt,vo,oc,t,Mt,zi,tn,Ha,o,null,-0,0)}}break}while(!0);ta(e)}function E0(e,t,a,i,l,o,s,m,x,E,_,B,M,R){if(e.timeoutHandle=-1,B=t.subtreeFlags,B&8192||(B&16785408)===16785408){B={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ra},v0(t,o,B);var K=(o&62914560)===o?go-bt():(o&4194048)===o?z0-bt():0;if(K=th(B,K),K!==null){Sa=o,e.cancelPendingCommit=K(D0.bind(null,e,t,o,a,i,l,s,m,x,_,B,null,M,R)),Ya(e,o,s,!E);return}}D0(e,t,o,a,i,l,s,m,x)}function v2(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var i=0;i<a.length;i++){var l=a[i],o=l.getSnapshot;l=l.value;try{if(!At(o(),l))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ya(e,t,a,i){t&=~lc,t&=~zi,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var l=t;0<l;){var o=31-St(l),s=1<<o;i[o]=-1,l&=~s}a!==0&&Us(e,a,t)}function xo(){return(Se&6)===0?(al(0),!1):!0}function sc(){if(fe!==null){if(Ee===0)var e=fe.return;else e=fe,fa=di=null,ju(e),Ki=null,Ln=0,e=fe;for(;e!==null;)a0(e.alternate,e),e=e.return;fe=null}}function nn(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,B2(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Sa=0,sc(),Re=e,fe=a=ca(e.current,null),pe=t,Ee=0,Tt=null,Ha=!1,en=zn(e,t),nc=!1,tn=Mt=lc=zi=Ga=He=0,pt=el=null,oc=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var l=31-St(i),o=1<<l;t|=e[l],i&=~o}return za=t,Ll(),a}function j0(e,t){oe=null,D.H=Xn,t===Xi||t===Xl?(t=Vf(),Ee=3):t===pu?(t=Vf(),Ee=4):Ee=t===Vu?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Tt=t,fe===null&&(He=1,oo(e,Bt(t,e.current)))}function T0(){var e=Et.current;return e===null?!0:(pe&4194048)===pe?$t===null:(pe&62914560)===pe||(pe&536870912)!==0?e===$t:!1}function M0(){var e=D.H;return D.H=Xn,e===null?Xn:e}function O0(){var e=D.A;return D.A=g2,e}function yo(){He=4,Ha||(pe&4194048)!==pe&&Et.current!==null||(en=!0),(Ga&134217727)===0&&(zi&134217727)===0||Re===null||Ya(Re,pe,Mt,!1)}function fc(e,t,a){var i=Se;Se|=2;var l=M0(),o=O0();(Re!==e||pe!==t)&&(vo=null,nn(e,t)),t=!1;var s=He;e:do try{if(Ee!==0&&fe!==null){var m=fe,x=Tt;switch(Ee){case 8:sc(),s=6;break e;case 3:case 2:case 9:case 6:Et.current===null&&(t=!0);var E=Ee;if(Ee=0,Tt=null,ln(e,m,x,E),a&&en){s=0;break e}break;default:E=Ee,Ee=0,Tt=null,ln(e,m,x,E)}}x2(),s=He;break}catch(_){j0(e,_)}while(!0);return t&&e.shellSuspendCounter++,fa=di=null,Se=i,D.H=l,D.A=o,fe===null&&(Re=null,pe=0,Ll()),s}function x2(){for(;fe!==null;)R0(fe)}function y2(e,t){var a=Se;Se|=2;var i=M0(),l=O0();Re!==e||pe!==t?(vo=null,ho=bt()+500,nn(e,t)):en=zn(e,t);e:do try{if(Ee!==0&&fe!==null){t=fe;var o=Tt;t:switch(Ee){case 1:Ee=0,Tt=null,ln(e,t,o,1);break;case 2:case 9:if(Gf(o)){Ee=0,Tt=null,N0(t);break}t=function(){Ee!==2&&Ee!==9||Re!==e||(Ee=7),ta(e)},o.then(t,t);break e;case 3:Ee=7;break e;case 4:Ee=5;break e;case 7:Gf(o)?(Ee=0,Tt=null,N0(t)):(Ee=0,Tt=null,ln(e,t,o,7));break;case 5:var s=null;switch(fe.tag){case 26:s=fe.memoizedState;case 5:case 27:var m=fe;if(s?h1(s):m.stateNode.complete){Ee=0,Tt=null;var x=m.sibling;if(x!==null)fe=x;else{var E=m.return;E!==null?(fe=E,bo(E)):fe=null}break t}}Ee=0,Tt=null,ln(e,t,o,5);break;case 6:Ee=0,Tt=null,ln(e,t,o,6);break;case 8:sc(),He=6;break e;default:throw Error(c(462))}}b2();break}catch(_){j0(e,_)}while(!0);return fa=di=null,D.H=i,D.A=l,Se=a,fe!==null?0:(Re=null,pe=0,Ll(),He)}function b2(){for(;fe!==null&&!Yp();)R0(fe)}function R0(e){var t=e0(e.alternate,e,za);e.memoizedProps=e.pendingProps,t===null?bo(e):fe=t}function N0(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Jd(a,t,t.pendingProps,t.type,void 0,pe);break;case 11:t=Jd(a,t,t.pendingProps,t.type.render,t.ref,pe);break;case 5:ju(t);default:a0(a,t),t=fe=Of(t,za),t=e0(a,t,za)}e.memoizedProps=e.pendingProps,t===null?bo(e):fe=t}function ln(e,t,a,i){fa=di=null,ju(t),Ki=null,Ln=0;var l=t.return;try{if(u2(e,l,t,a,pe)){He=1,oo(e,Bt(a,e.current)),fe=null;return}}catch(o){if(l!==null)throw fe=l,o;He=1,oo(e,Bt(a,e.current)),fe=null;return}t.flags&32768?(ve||i===1?e=!0:en||(pe&536870912)!==0?e=!1:(Ha=e=!0,(i===2||i===9||i===3||i===6)&&(i=Et.current,i!==null&&i.tag===13&&(i.flags|=16384))),_0(t,e)):bo(t)}function bo(e){var t=e;do{if((t.flags&32768)!==0){_0(t,Ha);return}e=t.return;var a=f2(t.alternate,t,za);if(a!==null){fe=a;return}if(t=t.sibling,t!==null){fe=t;return}fe=t=e}while(t!==null);He===0&&(He=5)}function _0(e,t){do{var a=d2(e.alternate,e);if(a!==null){a.flags&=32767,fe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){fe=e;return}fe=e=a}while(e!==null);He=6,fe=null}function D0(e,t,a,i,l,o,s,m,x){e.cancelPendingCommit=null;do zo();while(Pe!==0);if((Se&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(o=t.lanes|t.childLanes,o|=Wr,Wp(e,a,o,s,m,x),e===Re&&(fe=Re=null,pe=0),an=t,Va=e,Sa=a,rc=o,uc=l,S0=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,C2(Sl,function(){return L0(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=D.T,D.T=null,l=$.p,$.p=2,s=Se,Se|=4;try{m2(e,t,a)}finally{Se=s,$.p=l,D.T=i}}Pe=1,U0(),q0(),w0()}}function U0(){if(Pe===1){Pe=0;var e=Va,t=an,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=D.T,D.T=null;var i=$.p;$.p=2;var l=Se;Se|=4;try{p0(t,e);var o=Ac,s=bf(e.containerInfo),m=o.focusedElem,x=o.selectionRange;if(s!==m&&m&&m.ownerDocument&&yf(m.ownerDocument.documentElement,m)){if(x!==null&&Jr(m)){var E=x.start,_=x.end;if(_===void 0&&(_=E),"selectionStart"in m)m.selectionStart=E,m.selectionEnd=Math.min(_,m.value.length);else{var B=m.ownerDocument||document,M=B&&B.defaultView||window;if(M.getSelection){var R=M.getSelection(),K=m.textContent.length,ee=Math.min(x.start,K),Oe=x.end===void 0?ee:Math.min(x.end,K);!R.extend&&ee>Oe&&(s=Oe,Oe=ee,ee=s);var A=xf(m,ee),y=xf(m,Oe);if(A&&y&&(R.rangeCount!==1||R.anchorNode!==A.node||R.anchorOffset!==A.offset||R.focusNode!==y.node||R.focusOffset!==y.offset)){var C=B.createRange();C.setStart(A.node,A.offset),R.removeAllRanges(),ee>Oe?(R.addRange(C),R.extend(y.node,y.offset)):(C.setEnd(y.node,y.offset),R.addRange(C))}}}}for(B=[],R=m;R=R.parentNode;)R.nodeType===1&&B.push({element:R,left:R.scrollLeft,top:R.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<B.length;m++){var q=B[m];q.element.scrollLeft=q.left,q.element.scrollTop=q.top}}Do=!!Sc,Ac=Sc=null}finally{Se=l,$.p=i,D.T=a}}e.current=t,Pe=2}}function q0(){if(Pe===2){Pe=0;var e=Va,t=an,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=D.T,D.T=null;var i=$.p;$.p=2;var l=Se;Se|=4;try{c0(e,t.alternate,t)}finally{Se=l,$.p=i,D.T=a}}Pe=3}}function w0(){if(Pe===4||Pe===3){Pe=0,Zp();var e=Va,t=an,a=Sa,i=S0;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Pe=5:(Pe=0,an=Va=null,B0(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&($a=null),Or(a),t=t.stateNode,zt&&typeof zt.onCommitFiberRoot=="function")try{zt.onCommitFiberRoot(bn,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=D.T,l=$.p,$.p=2,D.T=null;try{for(var o=e.onRecoverableError,s=0;s<i.length;s++){var m=i[s];o(m.value,{componentStack:m.stack})}}finally{D.T=t,$.p=l}}(Sa&3)!==0&&zo(),ta(e),l=e.pendingLanes,(a&261930)!==0&&(l&42)!==0?e===cc?tl++:(tl=0,cc=e):tl=0,al(0)}}function B0(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,wn(t)))}function zo(){return U0(),q0(),w0(),L0()}function L0(){if(Pe!==5)return!1;var e=Va,t=rc;rc=0;var a=Or(Sa),i=D.T,l=$.p;try{$.p=32>a?32:a,D.T=null,a=uc,uc=null;var o=Va,s=Sa;if(Pe=0,an=Va=null,Sa=0,(Se&6)!==0)throw Error(c(331));var m=Se;if(Se|=4,y0(o.current),h0(o,o.current,s,a),Se=m,al(0,!1),zt&&typeof zt.onPostCommitFiberRoot=="function")try{zt.onPostCommitFiberRoot(bn,o)}catch{}return!0}finally{$.p=l,D.T=i,B0(e,t)}}function H0(e,t,a){t=Bt(a,t),t=$u(e.stateNode,t,2),e=qa(e,t,2),e!==null&&(Sn(e,2),ta(e))}function je(e,t,a){if(e.tag===3)H0(e,e,a);else for(;t!==null;){if(t.tag===3){H0(t,e,a);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&($a===null||!$a.has(i))){e=Bt(a,e),a=Gd(2),i=qa(t,a,2),i!==null&&($d(a,i,t,e),Sn(i,2),ta(i));break}}t=t.return}}function dc(e,t,a){var i=e.pingCache;if(i===null){i=e.pingCache=new h2;var l=new Set;i.set(t,l)}else l=i.get(t),l===void 0&&(l=new Set,i.set(t,l));l.has(a)||(nc=!0,l.add(a),e=z2.bind(null,e,t,a),t.then(e,e))}function z2(e,t,a){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Re===e&&(pe&a)===a&&(He===4||He===3&&(pe&62914560)===pe&&300>bt()-go?(Se&2)===0&&nn(e,0):lc|=a,tn===pe&&(tn=0)),ta(e)}function G0(e,t){t===0&&(t=Ds()),e=ci(e,t),e!==null&&(Sn(e,t),ta(e))}function S2(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),G0(e,a)}function A2(e,t){var a=0;switch(e.tag){case 31:case 13:var i=e.stateNode,l=e.memoizedState;l!==null&&(a=l.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(c(314))}i!==null&&i.delete(t),G0(e,a)}function C2(e,t){return Er(e,t)}var So=null,on=null,mc=!1,Ao=!1,pc=!1,Za=0;function ta(e){e!==on&&e.next===null&&(on===null?So=on=e:on=on.next=e),Ao=!0,mc||(mc=!0,j2())}function al(e,t){if(!pc&&Ao){pc=!0;do for(var a=!1,i=So;i!==null;){if(e!==0){var l=i.pendingLanes;if(l===0)var o=0;else{var s=i.suspendedLanes,m=i.pingedLanes;o=(1<<31-St(42|e)+1)-1,o&=l&~(s&~m),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(a=!0,Z0(i,o))}else o=pe,o=jl(i,i===Re?o:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(o&3)===0||zn(i,o)||(a=!0,Z0(i,o));i=i.next}while(a);pc=!1}}function E2(){$0()}function $0(){Ao=mc=!1;var e=0;Za!==0&&w2()&&(e=Za);for(var t=bt(),a=null,i=So;i!==null;){var l=i.next,o=V0(i,t);o===0?(i.next=null,a===null?So=l:a.next=l,l===null&&(on=a)):(a=i,(e!==0||(o&3)!==0)&&(Ao=!0)),i=l}Pe!==0&&Pe!==5||al(e),Za!==0&&(Za=0)}function V0(e,t){for(var a=e.suspendedLanes,i=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes&-62914561;0<o;){var s=31-St(o),m=1<<s,x=l[s];x===-1?((m&a)===0||(m&i)!==0)&&(l[s]=Pp(m,t)):x<=t&&(e.expiredLanes|=m),o&=~m}if(t=Re,a=pe,a=jl(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,a===0||e===t&&(Ee===2||Ee===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&jr(i),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||zn(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(i!==null&&jr(i),Or(a)){case 2:case 8:a=Ns;break;case 32:a=Sl;break;case 268435456:a=_s;break;default:a=Sl}return i=Y0.bind(null,e),a=Er(a,i),e.callbackPriority=t,e.callbackNode=a,t}return i!==null&&i!==null&&jr(i),e.callbackPriority=2,e.callbackNode=null,2}function Y0(e,t){if(Pe!==0&&Pe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(zo()&&e.callbackNode!==a)return null;var i=pe;return i=jl(e,e===Re?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(C0(e,i,t),V0(e,bt()),e.callbackNode!=null&&e.callbackNode===a?Y0.bind(null,e):null)}function Z0(e,t){if(zo())return null;C0(e,t,!0)}function j2(){L2(function(){(Se&6)!==0?Er(Rs,E2):$0()})}function gc(){if(Za===0){var e=Zi;e===0&&(e=Al,Al<<=1,(Al&261888)===0&&(Al=256)),Za=e}return Za}function Q0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Rl(""+e)}function X0(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function T2(e,t,a,i,l){if(t==="submit"&&a&&a.stateNode===l){var o=Q0((l[ct]||null).action),s=i.submitter;s&&(t=(t=s[ct]||null)?Q0(t.formAction):s.getAttribute("formAction"),t!==null&&(o=t,s=null));var m=new Ul("action","action",null,i,l);e.push({event:m,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Za!==0){var x=s?X0(l,s):new FormData(l);qu(a,{pending:!0,data:x,method:l.method,action:o},null,x)}}else typeof o=="function"&&(m.preventDefault(),x=s?X0(l,s):new FormData(l),qu(a,{pending:!0,data:x,method:l.method,action:o},o,x))},currentTarget:l}]})}}for(var hc=0;hc<Pr.length;hc++){var vc=Pr[hc],M2=vc.toLowerCase(),O2=vc[0].toUpperCase()+vc.slice(1);Xt(M2,"on"+O2)}Xt(Af,"onAnimationEnd"),Xt(Cf,"onAnimationIteration"),Xt(Ef,"onAnimationStart"),Xt("dblclick","onDoubleClick"),Xt("focusin","onFocus"),Xt("focusout","onBlur"),Xt(Qg,"onTransitionRun"),Xt(Xg,"onTransitionStart"),Xt(Kg,"onTransitionCancel"),Xt(jf,"onTransitionEnd"),Ri("onMouseEnter",["mouseout","mouseover"]),Ri("onMouseLeave",["mouseout","mouseover"]),Ri("onPointerEnter",["pointerout","pointerover"]),Ri("onPointerLeave",["pointerout","pointerover"]),li("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),li("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),li("onBeforeInput",["compositionend","keypress","textInput","paste"]),li("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),li("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),li("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var il="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),R2=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(il));function K0(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var i=e[a],l=i.event;i=i.listeners;e:{var o=void 0;if(t)for(var s=i.length-1;0<=s;s--){var m=i[s],x=m.instance,E=m.currentTarget;if(m=m.listener,x!==o&&l.isPropagationStopped())break e;o=m,l.currentTarget=E;try{o(l)}catch(_){Bl(_)}l.currentTarget=null,o=x}else for(s=0;s<i.length;s++){if(m=i[s],x=m.instance,E=m.currentTarget,m=m.listener,x!==o&&l.isPropagationStopped())break e;o=m,l.currentTarget=E;try{o(l)}catch(_){Bl(_)}l.currentTarget=null,o=x}}}}function de(e,t){var a=t[Rr];a===void 0&&(a=t[Rr]=new Set);var i=e+"__bubble";a.has(i)||(J0(t,e,2,!1),a.add(i))}function xc(e,t,a){var i=0;t&&(i|=4),J0(a,e,i,t)}var Co="_reactListening"+Math.random().toString(36).slice(2);function yc(e){if(!e[Co]){e[Co]=!0,Gs.forEach(function(a){a!=="selectionchange"&&(R2.has(a)||xc(a,!1,e),xc(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Co]||(t[Co]=!0,xc("selectionchange",!1,t))}}function J0(e,t,a,i){switch(A1(t)){case 2:var l=nh;break;case 8:l=lh;break;default:l=Uc}a=l.bind(null,t,a,e),l=void 0,!Hr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),i?l!==void 0?e.addEventListener(t,a,{capture:!0,passive:l}):e.addEventListener(t,a,!0):l!==void 0?e.addEventListener(t,a,{passive:l}):e.addEventListener(t,a,!1)}function bc(e,t,a,i,l){var o=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var m=i.stateNode.containerInfo;if(m===l)break;if(s===4)for(s=i.return;s!==null;){var x=s.tag;if((x===3||x===4)&&s.stateNode.containerInfo===l)return;s=s.return}for(;m!==null;){if(s=Ti(m),s===null)return;if(x=s.tag,x===5||x===6||x===26||x===27){i=o=s;continue e}m=m.parentNode}}i=i.return}Ps(function(){var E=o,_=Br(a),B=[];e:{var M=Tf.get(e);if(M!==void 0){var R=Ul,K=e;switch(e){case"keypress":if(_l(a)===0)break e;case"keydown":case"keyup":R=Ag;break;case"focusin":K="focus",R=Yr;break;case"focusout":K="blur",R=Yr;break;case"beforeblur":case"afterblur":R=Yr;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=tf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=fg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=jg;break;case Af:case Cf:case Ef:R=pg;break;case jf:R=Mg;break;case"scroll":case"scrollend":R=cg;break;case"wheel":R=Rg;break;case"copy":case"cut":case"paste":R=hg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=nf;break;case"toggle":case"beforetoggle":R=_g}var ee=(t&4)!==0,Oe=!ee&&(e==="scroll"||e==="scrollend"),A=ee?M!==null?M+"Capture":null:M;ee=[];for(var y=E,C;y!==null;){var q=y;if(C=q.stateNode,q=q.tag,q!==5&&q!==26&&q!==27||C===null||A===null||(q=En(y,A),q!=null&&ee.push(nl(y,q,C))),Oe)break;y=y.return}0<ee.length&&(M=new R(M,K,null,a,_),B.push({event:M,listeners:ee}))}}if((t&7)===0){e:{if(M=e==="mouseover"||e==="pointerover",R=e==="mouseout"||e==="pointerout",M&&a!==wr&&(K=a.relatedTarget||a.fromElement)&&(Ti(K)||K[ji]))break e;if((R||M)&&(M=_.window===_?_:(M=_.ownerDocument)?M.defaultView||M.parentWindow:window,R?(K=a.relatedTarget||a.toElement,R=E,K=K?Ti(K):null,K!==null&&(Oe=p(K),ee=K.tag,K!==Oe||ee!==5&&ee!==27&&ee!==6)&&(K=null)):(R=null,K=E),R!==K)){if(ee=tf,q="onMouseLeave",A="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(ee=nf,q="onPointerLeave",A="onPointerEnter",y="pointer"),Oe=R==null?M:Cn(R),C=K==null?M:Cn(K),M=new ee(q,y+"leave",R,a,_),M.target=Oe,M.relatedTarget=C,q=null,Ti(_)===E&&(ee=new ee(A,y+"enter",K,a,_),ee.target=C,ee.relatedTarget=Oe,q=ee),Oe=q,R&&K)t:{for(ee=N2,A=R,y=K,C=0,q=A;q;q=ee(q))C++;q=0;for(var P=y;P;P=ee(P))q++;for(;0<C-q;)A=ee(A),C--;for(;0<q-C;)y=ee(y),q--;for(;C--;){if(A===y||y!==null&&A===y.alternate){ee=A;break t}A=ee(A),y=ee(y)}ee=null}else ee=null;R!==null&&F0(B,M,R,ee,!1),K!==null&&Oe!==null&&F0(B,Oe,K,ee,!0)}}e:{if(M=E?Cn(E):window,R=M.nodeName&&M.nodeName.toLowerCase(),R==="select"||R==="input"&&M.type==="file")var be=df;else if(sf(M))if(mf)be=Vg;else{be=Gg;var F=Hg}else R=M.nodeName,!R||R.toLowerCase()!=="input"||M.type!=="checkbox"&&M.type!=="radio"?E&&qr(E.elementType)&&(be=df):be=$g;if(be&&(be=be(e,E))){ff(B,be,a,_);break e}F&&F(e,M,E),e==="focusout"&&E&&M.type==="number"&&E.memoizedProps.value!=null&&Ur(M,"number",M.value)}switch(F=E?Cn(E):window,e){case"focusin":(sf(F)||F.contentEditable==="true")&&(wi=F,Fr=E,Dn=null);break;case"focusout":Dn=Fr=wi=null;break;case"mousedown":Ir=!0;break;case"contextmenu":case"mouseup":case"dragend":Ir=!1,zf(B,a,_);break;case"selectionchange":if(Zg)break;case"keydown":case"keyup":zf(B,a,_)}var re;if(Qr)e:{switch(e){case"compositionstart":var ge="onCompositionStart";break e;case"compositionend":ge="onCompositionEnd";break e;case"compositionupdate":ge="onCompositionUpdate";break e}ge=void 0}else qi?uf(e,a)&&(ge="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ge="onCompositionStart");ge&&(lf&&a.locale!=="ko"&&(qi||ge!=="onCompositionStart"?ge==="onCompositionEnd"&&qi&&(re=Ws()):(Ma=_,Gr="value"in Ma?Ma.value:Ma.textContent,qi=!0)),F=Eo(E,ge),0<F.length&&(ge=new af(ge,e,null,a,_),B.push({event:ge,listeners:F}),re?ge.data=re:(re=cf(a),re!==null&&(ge.data=re)))),(re=Ug?qg(e,a):wg(e,a))&&(ge=Eo(E,"onBeforeInput"),0<ge.length&&(F=new af("onBeforeInput","beforeinput",null,a,_),B.push({event:F,listeners:ge}),F.data=re)),T2(B,e,E,a,_)}K0(B,t)})}function nl(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Eo(e,t){for(var a=t+"Capture",i=[];e!==null;){var l=e,o=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||o===null||(l=En(e,a),l!=null&&i.unshift(nl(e,l,o)),l=En(e,t),l!=null&&i.push(nl(e,l,o))),e.tag===3)return i;e=e.return}return[]}function N2(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function F0(e,t,a,i,l){for(var o=t._reactName,s=[];a!==null&&a!==i;){var m=a,x=m.alternate,E=m.stateNode;if(m=m.tag,x!==null&&x===i)break;m!==5&&m!==26&&m!==27||E===null||(x=E,l?(E=En(a,o),E!=null&&s.unshift(nl(a,E,x))):l||(E=En(a,o),E!=null&&s.push(nl(a,E,x)))),a=a.return}s.length!==0&&e.push({event:t,listeners:s})}var _2=/\r\n?/g,D2=/\u0000|\uFFFD/g;function I0(e){return(typeof e=="string"?e:""+e).replace(_2,`
`).replace(D2,"")}function k0(e,t){return t=I0(t),I0(e)===t}function Me(e,t,a,i,l,o){switch(a){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||_i(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&_i(e,""+i);break;case"className":Ml(e,"class",i);break;case"tabIndex":Ml(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Ml(e,a,i);break;case"style":Is(e,i,o);break;case"data":if(t!=="object"){Ml(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(a);break}i=Rl(""+i),e.setAttribute(a,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(a==="formAction"?(t!=="input"&&Me(e,t,"name",l.name,l,null),Me(e,t,"formEncType",l.formEncType,l,null),Me(e,t,"formMethod",l.formMethod,l,null),Me(e,t,"formTarget",l.formTarget,l,null)):(Me(e,t,"encType",l.encType,l,null),Me(e,t,"method",l.method,l,null),Me(e,t,"target",l.target,l,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(a);break}i=Rl(""+i),e.setAttribute(a,i);break;case"onClick":i!=null&&(e.onclick=ra);break;case"onScroll":i!=null&&de("scroll",e);break;case"onScrollEnd":i!=null&&de("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(c(61));if(a=i.__html,a!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}a=Rl(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,""+i):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":i===!0?e.setAttribute(a,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,i):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(a,i):e.removeAttribute(a);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(a):e.setAttribute(a,i);break;case"popover":de("beforetoggle",e),de("toggle",e),Tl(e,"popover",i);break;case"xlinkActuate":oa(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":oa(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":oa(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":oa(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":oa(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":oa(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":oa(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":oa(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":oa(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Tl(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=rg.get(a)||a,Tl(e,a,i))}}function zc(e,t,a,i,l,o){switch(a){case"style":Is(e,i,o);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(c(61));if(a=i.__html,a!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"children":typeof i=="string"?_i(e,i):(typeof i=="number"||typeof i=="bigint")&&_i(e,""+i);break;case"onScroll":i!=null&&de("scroll",e);break;case"onScrollEnd":i!=null&&de("scrollend",e);break;case"onClick":i!=null&&(e.onclick=ra);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!$s.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),t=a.slice(2,l?a.length-7:void 0),o=e[ct]||null,o=o!=null?o[a]:null,typeof o=="function"&&e.removeEventListener(t,o,l),typeof i=="function")){typeof o!="function"&&o!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,i,l);break e}a in e?e[a]=i:i===!0?e.setAttribute(a,""):Tl(e,a,i)}}}function ot(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":de("error",e),de("load",e);var i=!1,l=!1,o;for(o in a)if(a.hasOwnProperty(o)){var s=a[o];if(s!=null)switch(o){case"src":i=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Me(e,t,o,s,a,null)}}l&&Me(e,t,"srcSet",a.srcSet,a,null),i&&Me(e,t,"src",a.src,a,null);return;case"input":de("invalid",e);var m=o=s=l=null,x=null,E=null;for(i in a)if(a.hasOwnProperty(i)){var _=a[i];if(_!=null)switch(i){case"name":l=_;break;case"type":s=_;break;case"checked":x=_;break;case"defaultChecked":E=_;break;case"value":o=_;break;case"defaultValue":m=_;break;case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(c(137,t));break;default:Me(e,t,i,_,a,null)}}Xs(e,o,m,x,E,s,l,!1);return;case"select":de("invalid",e),i=s=o=null;for(l in a)if(a.hasOwnProperty(l)&&(m=a[l],m!=null))switch(l){case"value":o=m;break;case"defaultValue":s=m;break;case"multiple":i=m;default:Me(e,t,l,m,a,null)}t=o,a=s,e.multiple=!!i,t!=null?Ni(e,!!i,t,!1):a!=null&&Ni(e,!!i,a,!0);return;case"textarea":de("invalid",e),o=l=i=null;for(s in a)if(a.hasOwnProperty(s)&&(m=a[s],m!=null))switch(s){case"value":i=m;break;case"defaultValue":l=m;break;case"children":o=m;break;case"dangerouslySetInnerHTML":if(m!=null)throw Error(c(91));break;default:Me(e,t,s,m,a,null)}Js(e,i,l,o);return;case"option":for(x in a)if(a.hasOwnProperty(x)&&(i=a[x],i!=null))switch(x){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:Me(e,t,x,i,a,null)}return;case"dialog":de("beforetoggle",e),de("toggle",e),de("cancel",e),de("close",e);break;case"iframe":case"object":de("load",e);break;case"video":case"audio":for(i=0;i<il.length;i++)de(il[i],e);break;case"image":de("error",e),de("load",e);break;case"details":de("toggle",e);break;case"embed":case"source":case"link":de("error",e),de("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(E in a)if(a.hasOwnProperty(E)&&(i=a[E],i!=null))switch(E){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Me(e,t,E,i,a,null)}return;default:if(qr(t)){for(_ in a)a.hasOwnProperty(_)&&(i=a[_],i!==void 0&&zc(e,t,_,i,a,void 0));return}}for(m in a)a.hasOwnProperty(m)&&(i=a[m],i!=null&&Me(e,t,m,i,a,null))}function U2(e,t,a,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,o=null,s=null,m=null,x=null,E=null,_=null;for(R in a){var B=a[R];if(a.hasOwnProperty(R)&&B!=null)switch(R){case"checked":break;case"value":break;case"defaultValue":x=B;default:i.hasOwnProperty(R)||Me(e,t,R,null,i,B)}}for(var M in i){var R=i[M];if(B=a[M],i.hasOwnProperty(M)&&(R!=null||B!=null))switch(M){case"type":o=R;break;case"name":l=R;break;case"checked":E=R;break;case"defaultChecked":_=R;break;case"value":s=R;break;case"defaultValue":m=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(c(137,t));break;default:R!==B&&Me(e,t,M,R,i,B)}}Dr(e,s,m,x,E,_,o,l);return;case"select":R=s=m=M=null;for(o in a)if(x=a[o],a.hasOwnProperty(o)&&x!=null)switch(o){case"value":break;case"multiple":R=x;default:i.hasOwnProperty(o)||Me(e,t,o,null,i,x)}for(l in i)if(o=i[l],x=a[l],i.hasOwnProperty(l)&&(o!=null||x!=null))switch(l){case"value":M=o;break;case"defaultValue":m=o;break;case"multiple":s=o;default:o!==x&&Me(e,t,l,o,i,x)}t=m,a=s,i=R,M!=null?Ni(e,!!a,M,!1):!!i!=!!a&&(t!=null?Ni(e,!!a,t,!0):Ni(e,!!a,a?[]:"",!1));return;case"textarea":R=M=null;for(m in a)if(l=a[m],a.hasOwnProperty(m)&&l!=null&&!i.hasOwnProperty(m))switch(m){case"value":break;case"children":break;default:Me(e,t,m,null,i,l)}for(s in i)if(l=i[s],o=a[s],i.hasOwnProperty(s)&&(l!=null||o!=null))switch(s){case"value":M=l;break;case"defaultValue":R=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(c(91));break;default:l!==o&&Me(e,t,s,l,i,o)}Ks(e,M,R);return;case"option":for(var K in a)if(M=a[K],a.hasOwnProperty(K)&&M!=null&&!i.hasOwnProperty(K))switch(K){case"selected":e.selected=!1;break;default:Me(e,t,K,null,i,M)}for(x in i)if(M=i[x],R=a[x],i.hasOwnProperty(x)&&M!==R&&(M!=null||R!=null))switch(x){case"selected":e.selected=M&&typeof M!="function"&&typeof M!="symbol";break;default:Me(e,t,x,M,i,R)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ee in a)M=a[ee],a.hasOwnProperty(ee)&&M!=null&&!i.hasOwnProperty(ee)&&Me(e,t,ee,null,i,M);for(E in i)if(M=i[E],R=a[E],i.hasOwnProperty(E)&&M!==R&&(M!=null||R!=null))switch(E){case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(c(137,t));break;default:Me(e,t,E,M,i,R)}return;default:if(qr(t)){for(var Oe in a)M=a[Oe],a.hasOwnProperty(Oe)&&M!==void 0&&!i.hasOwnProperty(Oe)&&zc(e,t,Oe,void 0,i,M);for(_ in i)M=i[_],R=a[_],!i.hasOwnProperty(_)||M===R||M===void 0&&R===void 0||zc(e,t,_,M,i,R);return}}for(var A in a)M=a[A],a.hasOwnProperty(A)&&M!=null&&!i.hasOwnProperty(A)&&Me(e,t,A,null,i,M);for(B in i)M=i[B],R=a[B],!i.hasOwnProperty(B)||M===R||M==null&&R==null||Me(e,t,B,M,i,R)}function P0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function q2(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),i=0;i<a.length;i++){var l=a[i],o=l.transferSize,s=l.initiatorType,m=l.duration;if(o&&m&&P0(s)){for(s=0,m=l.responseEnd,i+=1;i<a.length;i++){var x=a[i],E=x.startTime;if(E>m)break;var _=x.transferSize,B=x.initiatorType;_&&P0(B)&&(x=x.responseEnd,s+=_*(x<m?1:(m-E)/(x-E)))}if(--i,t+=8*(o+s)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Sc=null,Ac=null;function jo(e){return e.nodeType===9?e:e.ownerDocument}function W0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function e1(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Cc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ec=null;function w2(){var e=window.event;return e&&e.type==="popstate"?e===Ec?!1:(Ec=e,!0):(Ec=null,!1)}var t1=typeof setTimeout=="function"?setTimeout:void 0,B2=typeof clearTimeout=="function"?clearTimeout:void 0,a1=typeof Promise=="function"?Promise:void 0,L2=typeof queueMicrotask=="function"?queueMicrotask:typeof a1<"u"?function(e){return a1.resolve(null).then(e).catch(H2)}:t1;function H2(e){setTimeout(function(){throw e})}function Qa(e){return e==="head"}function i1(e,t){var a=t,i=0;do{var l=a.nextSibling;if(e.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"||a==="/&"){if(i===0){e.removeChild(l),sn(t);return}i--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")i++;else if(a==="html")ll(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,ll(a);for(var o=a.firstChild;o;){var s=o.nextSibling,m=o.nodeName;o[An]||m==="SCRIPT"||m==="STYLE"||m==="LINK"&&o.rel.toLowerCase()==="stylesheet"||a.removeChild(o),o=s}}else a==="body"&&ll(e.ownerDocument.body);a=l}while(a);sn(t)}function n1(e,t){var a=e;e=0;do{var i=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),i&&i.nodeType===8)if(a=i.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=i}while(a)}function jc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":jc(a),Nr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function G2(e,t,a,i){for(;e.nodeType===1;){var l=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[An])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(o=e.getAttribute("rel"),o==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(o!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(o=e.getAttribute("src"),(o!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var o=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===o)return e}else return e;if(e=Vt(e.nextSibling),e===null)break}return null}function $2(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Vt(e.nextSibling),e===null))return null;return e}function l1(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Vt(e.nextSibling),e===null))return null;return e}function Tc(e){return e.data==="$?"||e.data==="$~"}function Mc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function V2(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var i=function(){t(),a.removeEventListener("DOMContentLoaded",i)};a.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Vt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Oc=null;function o1(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Vt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function r1(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function u1(e,t,a){switch(t=jo(a),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function ll(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Nr(e)}var Yt=new Map,c1=new Set;function To(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Aa=$.d;$.d={f:Y2,r:Z2,D:Q2,C:X2,L:K2,m:J2,X:I2,S:F2,M:k2};function Y2(){var e=Aa.f(),t=xo();return e||t}function Z2(e){var t=Mi(e);t!==null&&t.tag===5&&t.type==="form"?jd(t):Aa.r(e)}var rn=typeof document>"u"?null:document;function s1(e,t,a){var i=rn;if(i&&typeof t=="string"&&t){var l=qt(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),c1.has(l)||(c1.add(l),e={rel:e,crossOrigin:a,href:t},i.querySelector(l)===null&&(t=i.createElement("link"),ot(t,"link",e),We(t),i.head.appendChild(t)))}}function Q2(e){Aa.D(e),s1("dns-prefetch",e,null)}function X2(e,t){Aa.C(e,t),s1("preconnect",e,t)}function K2(e,t,a){Aa.L(e,t,a);var i=rn;if(i&&e&&t){var l='link[rel="preload"][as="'+qt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+qt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+qt(a.imageSizes)+'"]')):l+='[href="'+qt(e)+'"]';var o=l;switch(t){case"style":o=un(e);break;case"script":o=cn(e)}Yt.has(o)||(e=O({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Yt.set(o,e),i.querySelector(l)!==null||t==="style"&&i.querySelector(ol(o))||t==="script"&&i.querySelector(rl(o))||(t=i.createElement("link"),ot(t,"link",e),We(t),i.head.appendChild(t)))}}function J2(e,t){Aa.m(e,t);var a=rn;if(a&&e){var i=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+qt(i)+'"][href="'+qt(e)+'"]',o=l;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=cn(e)}if(!Yt.has(o)&&(e=O({rel:"modulepreload",href:e},t),Yt.set(o,e),a.querySelector(l)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(rl(o)))return}i=a.createElement("link"),ot(i,"link",e),We(i),a.head.appendChild(i)}}}function F2(e,t,a){Aa.S(e,t,a);var i=rn;if(i&&e){var l=Oi(i).hoistableStyles,o=un(e);t=t||"default";var s=l.get(o);if(!s){var m={loading:0,preload:null};if(s=i.querySelector(ol(o)))m.loading=5;else{e=O({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Yt.get(o))&&Rc(e,a);var x=s=i.createElement("link");We(x),ot(x,"link",e),x._p=new Promise(function(E,_){x.onload=E,x.onerror=_}),x.addEventListener("load",function(){m.loading|=1}),x.addEventListener("error",function(){m.loading|=2}),m.loading|=4,Mo(s,t,i)}s={type:"stylesheet",instance:s,count:1,state:m},l.set(o,s)}}}function I2(e,t){Aa.X(e,t);var a=rn;if(a&&e){var i=Oi(a).hoistableScripts,l=cn(e),o=i.get(l);o||(o=a.querySelector(rl(l)),o||(e=O({src:e,async:!0},t),(t=Yt.get(l))&&Nc(e,t),o=a.createElement("script"),We(o),ot(o,"link",e),a.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},i.set(l,o))}}function k2(e,t){Aa.M(e,t);var a=rn;if(a&&e){var i=Oi(a).hoistableScripts,l=cn(e),o=i.get(l);o||(o=a.querySelector(rl(l)),o||(e=O({src:e,async:!0,type:"module"},t),(t=Yt.get(l))&&Nc(e,t),o=a.createElement("script"),We(o),ot(o,"link",e),a.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},i.set(l,o))}}function f1(e,t,a,i){var l=(l=le.current)?To(l):null;if(!l)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=un(a.href),a=Oi(l).hoistableStyles,i=a.get(t),i||(i={type:"style",instance:null,count:0,state:null},a.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=un(a.href);var o=Oi(l).hoistableStyles,s=o.get(e);if(s||(l=l.ownerDocument||l,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=l.querySelector(ol(e)))&&!o._p&&(s.instance=o,s.state.loading=5),Yt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Yt.set(e,a),o||P2(l,e,a,s.state))),t&&i===null)throw Error(c(528,""));return s}if(t&&i!==null)throw Error(c(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=cn(a),a=Oi(l).hoistableScripts,i=a.get(t),i||(i={type:"script",instance:null,count:0,state:null},a.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function un(e){return'href="'+qt(e)+'"'}function ol(e){return'link[rel="stylesheet"]['+e+"]"}function d1(e){return O({},e,{"data-precedence":e.precedence,precedence:null})}function P2(e,t,a,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),ot(t,"link",a),We(t),e.head.appendChild(t))}function cn(e){return'[src="'+qt(e)+'"]'}function rl(e){return"script[async]"+e}function m1(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+qt(a.href)+'"]');if(i)return t.instance=i,We(i),i;var l=O({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),We(i),ot(i,"style",l),Mo(i,a.precedence,e),t.instance=i;case"stylesheet":l=un(a.href);var o=e.querySelector(ol(l));if(o)return t.state.loading|=4,t.instance=o,We(o),o;i=d1(a),(l=Yt.get(l))&&Rc(i,l),o=(e.ownerDocument||e).createElement("link"),We(o);var s=o;return s._p=new Promise(function(m,x){s.onload=m,s.onerror=x}),ot(o,"link",i),t.state.loading|=4,Mo(o,a.precedence,e),t.instance=o;case"script":return o=cn(a.src),(l=e.querySelector(rl(o)))?(t.instance=l,We(l),l):(i=a,(l=Yt.get(o))&&(i=O({},a),Nc(i,l)),e=e.ownerDocument||e,l=e.createElement("script"),We(l),ot(l,"link",i),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,Mo(i,a.precedence,e));return t.instance}function Mo(e,t,a){for(var i=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=i.length?i[i.length-1]:null,o=l,s=0;s<i.length;s++){var m=i[s];if(m.dataset.precedence===t)o=m;else if(o!==l)break}o?o.parentNode.insertBefore(e,o.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Rc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Nc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Oo=null;function p1(e,t,a){if(Oo===null){var i=new Map,l=Oo=new Map;l.set(a,i)}else l=Oo,i=l.get(a),i||(i=new Map,l.set(a,i));if(i.has(e))return i;for(i.set(e,null),a=a.getElementsByTagName(e),l=0;l<a.length;l++){var o=a[l];if(!(o[An]||o[at]||e==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var s=o.getAttribute(t)||"";s=e+s;var m=i.get(s);m?m.push(o):i.set(s,[o])}}return i}function g1(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function W2(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function h1(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function eh(e,t,a,i){if(a.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var l=un(i.href),o=t.querySelector(ol(l));if(o){t=o._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Ro.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=o,We(o);return}o=t.ownerDocument||t,i=d1(i),(l=Yt.get(l))&&Rc(i,l),o=o.createElement("link"),We(o);var s=o;s._p=new Promise(function(m,x){s.onload=m,s.onerror=x}),ot(o,"link",i),a.instance=o}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Ro.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var _c=0;function th(e,t){return e.stylesheets&&e.count===0&&_o(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var i=setTimeout(function(){if(e.stylesheets&&_o(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4+t);0<e.imgBytes&&_c===0&&(_c=62500*q2());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&_o(e,e.stylesheets),e.unsuspend)){var o=e.unsuspend;e.unsuspend=null,o()}},(e.imgBytes>_c?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(l)}}:null}function Ro(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)_o(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var No=null;function _o(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,No=new Map,t.forEach(ah,e),No=null,Ro.call(e))}function ah(e,t){if(!(t.state.loading&4)){var a=No.get(e);if(a)var i=a.get(null);else{a=new Map,No.set(e,a);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<l.length;o++){var s=l[o];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(a.set(s.dataset.precedence,s),i=s)}i&&a.set(null,i)}l=t.instance,s=l.getAttribute("data-precedence"),o=a.get(s)||i,o===i&&a.set(null,l),a.set(s,l),this.count++,i=Ro.bind(this),l.addEventListener("load",i),l.addEventListener("error",i),o?o.parentNode.insertBefore(l,o.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var ul={$$typeof:J,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function ih(e,t,a,i,l,o,s,m,x){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Tr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tr(0),this.hiddenUpdates=Tr(null),this.identifierPrefix=i,this.onUncaughtError=l,this.onCaughtError=o,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=x,this.incompleteTransitions=new Map}function v1(e,t,a,i,l,o,s,m,x,E,_,B){return e=new ih(e,t,a,s,x,E,_,B,m),t=1,o===!0&&(t|=24),o=Ct(3,null,null,t),e.current=o,o.stateNode=e,t=fu(),t.refCount++,e.pooledCache=t,t.refCount++,o.memoizedState={element:i,isDehydrated:a,cache:t},gu(o),e}function x1(e){return e?(e=Hi,e):Hi}function y1(e,t,a,i,l,o){l=x1(l),i.context===null?i.context=l:i.pendingContext=l,i=Ua(t),i.payload={element:a},o=o===void 0?null:o,o!==null&&(i.callback=o),a=qa(e,i,t),a!==null&&(gt(a,e,t),Gn(a,e,t))}function b1(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Dc(e,t){b1(e,t),(e=e.alternate)&&b1(e,t)}function z1(e){if(e.tag===13||e.tag===31){var t=ci(e,67108864);t!==null&&gt(t,e,67108864),Dc(e,67108864)}}function S1(e){if(e.tag===13||e.tag===31){var t=Ot();t=Mr(t);var a=ci(e,t);a!==null&&gt(a,e,t),Dc(e,t)}}var Do=!0;function nh(e,t,a,i){var l=D.T;D.T=null;var o=$.p;try{$.p=2,Uc(e,t,a,i)}finally{$.p=o,D.T=l}}function lh(e,t,a,i){var l=D.T;D.T=null;var o=$.p;try{$.p=8,Uc(e,t,a,i)}finally{$.p=o,D.T=l}}function Uc(e,t,a,i){if(Do){var l=qc(i);if(l===null)bc(e,t,i,Uo,a),C1(e,i);else if(rh(l,e,t,a,i))i.stopPropagation();else if(C1(e,i),t&4&&-1<oh.indexOf(e)){for(;l!==null;){var o=Mi(l);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var s=ni(o.pendingLanes);if(s!==0){var m=o;for(m.pendingLanes|=2,m.entangledLanes|=2;s;){var x=1<<31-St(s);m.entanglements[1]|=x,s&=~x}ta(o),(Se&6)===0&&(ho=bt()+500,al(0))}}break;case 31:case 13:m=ci(o,2),m!==null&&gt(m,o,2),xo(),Dc(o,2)}if(o=qc(i),o===null&&bc(e,t,i,Uo,a),o===l)break;l=o}l!==null&&i.stopPropagation()}else bc(e,t,i,null,a)}}function qc(e){return e=Br(e),wc(e)}var Uo=null;function wc(e){if(Uo=null,e=Ti(e),e!==null){var t=p(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=h(t),e!==null)return e;e=null}else if(a===31){if(e=j(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Uo=e,null}function A1(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Qp()){case Rs:return 2;case Ns:return 8;case Sl:case Xp:return 32;case _s:return 268435456;default:return 32}default:return 32}}var Bc=!1,Xa=null,Ka=null,Ja=null,cl=new Map,sl=new Map,Fa=[],oh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function C1(e,t){switch(e){case"focusin":case"focusout":Xa=null;break;case"dragenter":case"dragleave":Ka=null;break;case"mouseover":case"mouseout":Ja=null;break;case"pointerover":case"pointerout":cl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":sl.delete(t.pointerId)}}function fl(e,t,a,i,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:a,eventSystemFlags:i,nativeEvent:o,targetContainers:[l]},t!==null&&(t=Mi(t),t!==null&&z1(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function rh(e,t,a,i,l){switch(t){case"focusin":return Xa=fl(Xa,e,t,a,i,l),!0;case"dragenter":return Ka=fl(Ka,e,t,a,i,l),!0;case"mouseover":return Ja=fl(Ja,e,t,a,i,l),!0;case"pointerover":var o=l.pointerId;return cl.set(o,fl(cl.get(o)||null,e,t,a,i,l)),!0;case"gotpointercapture":return o=l.pointerId,sl.set(o,fl(sl.get(o)||null,e,t,a,i,l)),!0}return!1}function E1(e){var t=Ti(e.target);if(t!==null){var a=p(t);if(a!==null){if(t=a.tag,t===13){if(t=h(a),t!==null){e.blockedOn=t,Ls(e.priority,function(){S1(a)});return}}else if(t===31){if(t=j(a),t!==null){e.blockedOn=t,Ls(e.priority,function(){S1(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function qo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=qc(e.nativeEvent);if(a===null){a=e.nativeEvent;var i=new a.constructor(a.type,a);wr=i,a.target.dispatchEvent(i),wr=null}else return t=Mi(a),t!==null&&z1(t),e.blockedOn=a,!1;t.shift()}return!0}function j1(e,t,a){qo(e)&&a.delete(t)}function uh(){Bc=!1,Xa!==null&&qo(Xa)&&(Xa=null),Ka!==null&&qo(Ka)&&(Ka=null),Ja!==null&&qo(Ja)&&(Ja=null),cl.forEach(j1),sl.forEach(j1)}function wo(e,t){e.blockedOn===t&&(e.blockedOn=null,Bc||(Bc=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,uh)))}var Bo=null;function T1(e){Bo!==e&&(Bo=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Bo===e&&(Bo=null);for(var t=0;t<e.length;t+=3){var a=e[t],i=e[t+1],l=e[t+2];if(typeof i!="function"){if(wc(i||a)===null)continue;break}var o=Mi(a);o!==null&&(e.splice(t,3),t-=3,qu(o,{pending:!0,data:l,method:a.method,action:i},i,l))}}))}function sn(e){function t(x){return wo(x,e)}Xa!==null&&wo(Xa,e),Ka!==null&&wo(Ka,e),Ja!==null&&wo(Ja,e),cl.forEach(t),sl.forEach(t);for(var a=0;a<Fa.length;a++){var i=Fa[a];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Fa.length&&(a=Fa[0],a.blockedOn===null);)E1(a),a.blockedOn===null&&Fa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(i=0;i<a.length;i+=3){var l=a[i],o=a[i+1],s=l[ct]||null;if(typeof o=="function")s||T1(a);else if(s){var m=null;if(o&&o.hasAttribute("formAction")){if(l=o,s=o[ct]||null)m=s.formAction;else if(wc(l)!==null)continue}else m=s.action;typeof m=="function"?a[i+1]=m:(a.splice(i,3),i-=3),T1(a)}}}function M1(){function e(o){o.canIntercept&&o.info==="react-transition"&&o.intercept({handler:function(){return new Promise(function(s){return l=s})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),i||setTimeout(a,20)}function a(){if(!i&&!navigation.transition){var o=navigation.currentEntry;o&&o.url!=null&&navigation.navigate(o.url,{state:o.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function Lc(e){this._internalRoot=e}Lo.prototype.render=Lc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var a=t.current,i=Ot();y1(a,i,e,t,null,null)},Lo.prototype.unmount=Lc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;y1(e.current,2,null,e,null,null),xo(),t[ji]=null}};function Lo(e){this._internalRoot=e}Lo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Bs();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Fa.length&&t!==0&&t<Fa[a].priority;a++);Fa.splice(a,0,e),a===0&&E1(e)}};var O1=r.version;if(O1!=="19.2.0")throw Error(c(527,O1,"19.2.0"));$.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=g(t),e=e!==null?T(e):null,e=e===null?null:e.stateNode,e};var ch={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ho=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ho.isDisabled&&Ho.supportsFiber)try{bn=Ho.inject(ch),zt=Ho}catch{}}return ml.createRoot=function(e,t){if(!d(e))throw Error(c(299));var a=!1,i="",l=wd,o=Bd,s=Ld;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(o=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=v1(e,1,!1,null,null,a,i,null,l,o,s,M1),e[ji]=t.current,yc(e),new Lc(t)},ml.hydrateRoot=function(e,t,a){if(!d(e))throw Error(c(299));var i=!1,l="",o=wd,s=Bd,m=Ld,x=null;return a!=null&&(a.unstable_strictMode===!0&&(i=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(o=a.onUncaughtError),a.onCaughtError!==void 0&&(s=a.onCaughtError),a.onRecoverableError!==void 0&&(m=a.onRecoverableError),a.formState!==void 0&&(x=a.formState)),t=v1(e,1,!0,t,a??null,i,l,x,o,s,m,M1),t.context=x1(null),a=t.current,i=Ot(),i=Mr(i),l=Ua(i),l.callback=null,qa(a,l,i),a=i,t.current.lanes=a,Sn(t,a),ta(t),e[ji]=t.current,yc(e),new Lo(t)},ml.version="19.2.0",ml}var H1;function zh(){if(H1)return $c.exports;H1=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(r){console.error(r)}}return n(),$c.exports=bh(),$c.exports}var Sh=zh();Jm();/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function hl(){return hl=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var u=arguments[r];for(var c in u)Object.prototype.hasOwnProperty.call(u,c)&&(n[c]=u[c])}return n},hl.apply(this,arguments)}var Wa;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(Wa||(Wa={}));const G1="popstate";function Ah(n){n===void 0&&(n={});function r(c,d){let{pathname:p,search:h,hash:j}=c.location;return cs("",{pathname:p,search:h,hash:j},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function u(c,d){return typeof d=="string"?d:lr(d)}return Eh(r,u,null,n)}function Ie(n,r){if(n===!1||n===null||typeof n>"u")throw new Error(r)}function Fm(n,r){if(!n){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function Ch(){return Math.random().toString(36).substr(2,8)}function $1(n,r){return{usr:n.state,key:n.key,idx:r}}function cs(n,r,u,c){return u===void 0&&(u=null),hl({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof r=="string"?xn(r):r,{state:u,key:r&&r.key||c||Ch()})}function lr(n){let{pathname:r="/",search:u="",hash:c=""}=n;return u&&u!=="?"&&(r+=u.charAt(0)==="?"?u:"?"+u),c&&c!=="#"&&(r+=c.charAt(0)==="#"?c:"#"+c),r}function xn(n){let r={};if(n){let u=n.indexOf("#");u>=0&&(r.hash=n.substr(u),n=n.substr(0,u));let c=n.indexOf("?");c>=0&&(r.search=n.substr(c),n=n.substr(0,c)),n&&(r.pathname=n)}return r}function Eh(n,r,u,c){c===void 0&&(c={});let{window:d=document.defaultView,v5Compat:p=!1}=c,h=d.history,j=Wa.Pop,z=null,g=T();g==null&&(g=0,h.replaceState(hl({},h.state,{idx:g}),""));function T(){return(h.state||{idx:null}).idx}function O(){j=Wa.Pop;let Z=T(),I=Z==null?null:Z-g;g=Z,z&&z({action:j,location:Q.location,delta:I})}function N(Z,I){j=Wa.Push;let k=cs(Q.location,Z,I);g=T()+1;let J=$1(k,g),ae=Q.createHref(k);try{h.pushState(J,"",ae)}catch(ce){if(ce instanceof DOMException&&ce.name==="DataCloneError")throw ce;d.location.assign(ae)}p&&z&&z({action:j,location:Q.location,delta:1})}function w(Z,I){j=Wa.Replace;let k=cs(Q.location,Z,I);g=T();let J=$1(k,g),ae=Q.createHref(k);h.replaceState(J,"",ae),p&&z&&z({action:j,location:Q.location,delta:0})}function G(Z){let I=d.location.origin!=="null"?d.location.origin:d.location.href,k=typeof Z=="string"?Z:lr(Z);return k=k.replace(/ $/,"%20"),Ie(I,"No window.location.(origin|href) available to create URL for href: "+k),new URL(k,I)}let Q={get action(){return j},get location(){return n(d,h)},listen(Z){if(z)throw new Error("A history only accepts one active listener");return d.addEventListener(G1,O),z=Z,()=>{d.removeEventListener(G1,O),z=null}},createHref(Z){return r(d,Z)},createURL:G,encodeLocation(Z){let I=G(Z);return{pathname:I.pathname,search:I.search,hash:I.hash}},push:N,replace:w,go(Z){return h.go(Z)}};return Q}var V1;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(V1||(V1={}));function jh(n,r,u){return u===void 0&&(u="/"),Th(n,r,u)}function Th(n,r,u,c){let d=typeof r=="string"?xn(r):r,p=zs(d.pathname||"/",u);if(p==null)return null;let h=Im(n);Mh(h);let j=null;for(let z=0;j==null&&z<h.length;++z){let g=Gh(p);j=Bh(h[z],g)}return j}function Im(n,r,u,c){r===void 0&&(r=[]),u===void 0&&(u=[]),c===void 0&&(c="");let d=(p,h,j)=>{let z={relativePath:j===void 0?p.path||"":j,caseSensitive:p.caseSensitive===!0,childrenIndex:h,route:p};z.relativePath.startsWith("/")&&(Ie(z.relativePath.startsWith(c),'Absolute route path "'+z.relativePath+'" nested under path '+('"'+c+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),z.relativePath=z.relativePath.slice(c.length));let g=ei([c,z.relativePath]),T=u.concat(z);p.children&&p.children.length>0&&(Ie(p.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+g+'".')),Im(p.children,r,T,g)),!(p.path==null&&!p.index)&&r.push({path:g,score:qh(g,p.index),routesMeta:T})};return n.forEach((p,h)=>{var j;if(p.path===""||!((j=p.path)!=null&&j.includes("?")))d(p,h);else for(let z of km(p.path))d(p,h,z)}),r}function km(n){let r=n.split("/");if(r.length===0)return[];let[u,...c]=r,d=u.endsWith("?"),p=u.replace(/\?$/,"");if(c.length===0)return d?[p,""]:[p];let h=km(c.join("/")),j=[];return j.push(...h.map(z=>z===""?p:[p,z].join("/"))),d&&j.push(...h),j.map(z=>n.startsWith("/")&&z===""?"/":z)}function Mh(n){n.sort((r,u)=>r.score!==u.score?u.score-r.score:wh(r.routesMeta.map(c=>c.childrenIndex),u.routesMeta.map(c=>c.childrenIndex)))}const Oh=/^:[\w-]+$/,Rh=3,Nh=2,_h=1,Dh=10,Uh=-2,Y1=n=>n==="*";function qh(n,r){let u=n.split("/"),c=u.length;return u.some(Y1)&&(c+=Uh),r&&(c+=Nh),u.filter(d=>!Y1(d)).reduce((d,p)=>d+(Oh.test(p)?Rh:p===""?_h:Dh),c)}function wh(n,r){return n.length===r.length&&n.slice(0,-1).every((c,d)=>c===r[d])?n[n.length-1]-r[r.length-1]:0}function Bh(n,r,u){let{routesMeta:c}=n,d={},p="/",h=[];for(let j=0;j<c.length;++j){let z=c[j],g=j===c.length-1,T=p==="/"?r:r.slice(p.length)||"/",O=Lh({path:z.relativePath,caseSensitive:z.caseSensitive,end:g},T),N=z.route;if(!O)return null;Object.assign(d,O.params),h.push({params:d,pathname:ei([p,O.pathname]),pathnameBase:Zh(ei([p,O.pathnameBase])),route:N}),O.pathnameBase!=="/"&&(p=ei([p,O.pathnameBase]))}return h}function Lh(n,r){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[u,c]=Hh(n.path,n.caseSensitive,n.end),d=r.match(u);if(!d)return null;let p=d[0],h=p.replace(/(.)\/+$/,"$1"),j=d.slice(1);return{params:c.reduce((g,T,O)=>{let{paramName:N,isOptional:w}=T;if(N==="*"){let Q=j[O]||"";h=p.slice(0,p.length-Q.length).replace(/(.)\/+$/,"$1")}const G=j[O];return w&&!G?g[N]=void 0:g[N]=(G||"").replace(/%2F/g,"/"),g},{}),pathname:p,pathnameBase:h,pattern:n}}function Hh(n,r,u){r===void 0&&(r=!1),u===void 0&&(u=!0),Fm(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let c=[],d="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,j,z)=>(c.push({paramName:j,isOptional:z!=null}),z?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(c.push({paramName:"*"}),d+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?d+="\\/*$":n!==""&&n!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,r?void 0:"i"),c]}function Gh(n){try{return n.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return Fm(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+r+").")),n}}function zs(n,r){if(r==="/")return n;if(!n.toLowerCase().startsWith(r.toLowerCase()))return null;let u=r.endsWith("/")?r.length-1:r.length,c=n.charAt(u);return c&&c!=="/"?null:n.slice(u)||"/"}function $h(n,r){r===void 0&&(r="/");let{pathname:u,search:c="",hash:d=""}=typeof n=="string"?xn(n):n;return{pathname:u?u.startsWith("/")?u:Vh(u,r):r,search:Qh(c),hash:Xh(d)}}function Vh(n,r){let u=r.replace(/\/+$/,"").split("/");return n.split("/").forEach(d=>{d===".."?u.length>1&&u.pop():d!=="."&&u.push(d)}),u.length>1?u.join("/"):"/"}function Qc(n,r,u,c){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+r+"` field ["+JSON.stringify(c)+"].  Please separate it out to the ")+("`to."+u+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Yh(n){return n.filter((r,u)=>u===0||r.route.path&&r.route.path.length>0)}function Pm(n,r){let u=Yh(n);return r?u.map((c,d)=>d===u.length-1?c.pathname:c.pathnameBase):u.map(c=>c.pathnameBase)}function Wm(n,r,u,c){c===void 0&&(c=!1);let d;typeof n=="string"?d=xn(n):(d=hl({},n),Ie(!d.pathname||!d.pathname.includes("?"),Qc("?","pathname","search",d)),Ie(!d.pathname||!d.pathname.includes("#"),Qc("#","pathname","hash",d)),Ie(!d.search||!d.search.includes("#"),Qc("#","search","hash",d)));let p=n===""||d.pathname==="",h=p?"/":d.pathname,j;if(h==null)j=u;else{let O=r.length-1;if(!c&&h.startsWith("..")){let N=h.split("/");for(;N[0]==="..";)N.shift(),O-=1;d.pathname=N.join("/")}j=O>=0?r[O]:"/"}let z=$h(d,j),g=h&&h!=="/"&&h.endsWith("/"),T=(p||h===".")&&u.endsWith("/");return!z.pathname.endsWith("/")&&(g||T)&&(z.pathname+="/"),z}const ei=n=>n.join("/").replace(/\/\/+/g,"/"),Zh=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),Qh=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,Xh=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function Kh(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const ep=["post","put","patch","delete"];new Set(ep);const Jh=["get",...ep];new Set(Jh);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vl(){return vl=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var u=arguments[r];for(var c in u)Object.prototype.hasOwnProperty.call(u,c)&&(n[c]=u[c])}return n},vl.apply(this,arguments)}const Ss=H.createContext(null),Fh=H.createContext(null),Ei=H.createContext(null),gr=H.createContext(null),ai=H.createContext({outlet:null,matches:[],isDataRoute:!1}),tp=H.createContext(null);function Ih(n,r){let{relative:u}=r===void 0?{}:r;yl()||Ie(!1);let{basename:c,navigator:d}=H.useContext(Ei),{hash:p,pathname:h,search:j}=ip(n,{relative:u}),z=h;return c!=="/"&&(z=h==="/"?c:ei([c,h])),d.createHref({pathname:z,search:j,hash:p})}function yl(){return H.useContext(gr)!=null}function bl(){return yl()||Ie(!1),H.useContext(gr).location}function ap(n){H.useContext(Ei).static||H.useLayoutEffect(n)}function Ea(){let{isDataRoute:n}=H.useContext(ai);return n?sv():kh()}function kh(){yl()||Ie(!1);let n=H.useContext(Ss),{basename:r,future:u,navigator:c}=H.useContext(Ei),{matches:d}=H.useContext(ai),{pathname:p}=bl(),h=JSON.stringify(Pm(d,u.v7_relativeSplatPath)),j=H.useRef(!1);return ap(()=>{j.current=!0}),H.useCallback(function(g,T){if(T===void 0&&(T={}),!j.current)return;if(typeof g=="number"){c.go(g);return}let O=Wm(g,JSON.parse(h),p,T.relative==="path");n==null&&r!=="/"&&(O.pathname=O.pathname==="/"?r:ei([r,O.pathname])),(T.replace?c.replace:c.push)(O,T.state,T)},[r,c,h,p,n])}function Ph(){let{matches:n}=H.useContext(ai),r=n[n.length-1];return r?r.params:{}}function ip(n,r){let{relative:u}=r===void 0?{}:r,{future:c}=H.useContext(Ei),{matches:d}=H.useContext(ai),{pathname:p}=bl(),h=JSON.stringify(Pm(d,c.v7_relativeSplatPath));return H.useMemo(()=>Wm(n,JSON.parse(h),p,u==="path"),[n,h,p,u])}function Wh(n,r){return ev(n,r)}function ev(n,r,u,c){yl()||Ie(!1);let{navigator:d}=H.useContext(Ei),{matches:p}=H.useContext(ai),h=p[p.length-1],j=h?h.params:{};h&&h.pathname;let z=h?h.pathnameBase:"/";h&&h.route;let g=bl(),T;if(r){var O;let Z=typeof r=="string"?xn(r):r;z==="/"||(O=Z.pathname)!=null&&O.startsWith(z)||Ie(!1),T=Z}else T=g;let N=T.pathname||"/",w=N;if(z!=="/"){let Z=z.replace(/^\//,"").split("/");w="/"+N.replace(/^\//,"").split("/").slice(Z.length).join("/")}let G=jh(n,{pathname:w}),Q=lv(G&&G.map(Z=>Object.assign({},Z,{params:Object.assign({},j,Z.params),pathname:ei([z,d.encodeLocation?d.encodeLocation(Z.pathname).pathname:Z.pathname]),pathnameBase:Z.pathnameBase==="/"?z:ei([z,d.encodeLocation?d.encodeLocation(Z.pathnameBase).pathname:Z.pathnameBase])})),p,u,c);return r&&Q?H.createElement(gr.Provider,{value:{location:vl({pathname:"/",search:"",hash:"",state:null,key:"default"},T),navigationType:Wa.Pop}},Q):Q}function tv(){let n=cv(),r=Kh(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),u=n instanceof Error?n.stack:null,d={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return H.createElement(H.Fragment,null,H.createElement("h2",null,"Unexpected Application Error!"),H.createElement("h3",{style:{fontStyle:"italic"}},r),u?H.createElement("pre",{style:d},u):null,null)}const av=H.createElement(tv,null);class iv extends H.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,u){return u.location!==r.location||u.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:u.error,location:u.location,revalidation:r.revalidation||u.revalidation}}componentDidCatch(r,u){console.error("React Router caught the following error during render",r,u)}render(){return this.state.error!==void 0?H.createElement(ai.Provider,{value:this.props.routeContext},H.createElement(tp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function nv(n){let{routeContext:r,match:u,children:c}=n,d=H.useContext(Ss);return d&&d.static&&d.staticContext&&(u.route.errorElement||u.route.ErrorBoundary)&&(d.staticContext._deepestRenderedBoundaryId=u.route.id),H.createElement(ai.Provider,{value:r},c)}function lv(n,r,u,c){var d;if(r===void 0&&(r=[]),u===void 0&&(u=null),c===void 0&&(c=null),n==null){var p;if(!u)return null;if(u.errors)n=u.matches;else if((p=c)!=null&&p.v7_partialHydration&&r.length===0&&!u.initialized&&u.matches.length>0)n=u.matches;else return null}let h=n,j=(d=u)==null?void 0:d.errors;if(j!=null){let T=h.findIndex(O=>O.route.id&&j?.[O.route.id]!==void 0);T>=0||Ie(!1),h=h.slice(0,Math.min(h.length,T+1))}let z=!1,g=-1;if(u&&c&&c.v7_partialHydration)for(let T=0;T<h.length;T++){let O=h[T];if((O.route.HydrateFallback||O.route.hydrateFallbackElement)&&(g=T),O.route.id){let{loaderData:N,errors:w}=u,G=O.route.loader&&N[O.route.id]===void 0&&(!w||w[O.route.id]===void 0);if(O.route.lazy||G){z=!0,g>=0?h=h.slice(0,g+1):h=[h[0]];break}}}return h.reduceRight((T,O,N)=>{let w,G=!1,Q=null,Z=null;u&&(w=j&&O.route.id?j[O.route.id]:void 0,Q=O.route.errorElement||av,z&&(g<0&&N===0?(fv("route-fallback"),G=!0,Z=null):g===N&&(G=!0,Z=O.route.hydrateFallbackElement||null)));let I=r.concat(h.slice(0,N+1)),k=()=>{let J;return w?J=Q:G?J=Z:O.route.Component?J=H.createElement(O.route.Component,null):O.route.element?J=O.route.element:J=T,H.createElement(nv,{match:O,routeContext:{outlet:T,matches:I,isDataRoute:u!=null},children:J})};return u&&(O.route.ErrorBoundary||O.route.errorElement||N===0)?H.createElement(iv,{location:u.location,revalidation:u.revalidation,component:Q,error:w,children:k(),routeContext:{outlet:null,matches:I,isDataRoute:!0}}):k()},null)}var np=(function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n})(np||{}),lp=(function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n})(lp||{});function ov(n){let r=H.useContext(Ss);return r||Ie(!1),r}function rv(n){let r=H.useContext(Fh);return r||Ie(!1),r}function uv(n){let r=H.useContext(ai);return r||Ie(!1),r}function op(n){let r=uv(),u=r.matches[r.matches.length-1];return u.route.id||Ie(!1),u.route.id}function cv(){var n;let r=H.useContext(tp),u=rv(),c=op();return r!==void 0?r:(n=u.errors)==null?void 0:n[c]}function sv(){let{router:n}=ov(np.UseNavigateStable),r=op(lp.UseNavigateStable),u=H.useRef(!1);return ap(()=>{u.current=!0}),H.useCallback(function(d,p){p===void 0&&(p={}),u.current&&(typeof d=="number"?n.navigate(d):n.navigate(d,vl({fromRouteId:r},p)))},[n,r])}const Z1={};function fv(n,r,u){Z1[n]||(Z1[n]=!0)}function dv(n,r){n?.v7_startTransition,n?.v7_relativeSplatPath}function aa(n){Ie(!1)}function mv(n){let{basename:r="/",children:u=null,location:c,navigationType:d=Wa.Pop,navigator:p,static:h=!1,future:j}=n;yl()&&Ie(!1);let z=r.replace(/^\/*/,"/"),g=H.useMemo(()=>({basename:z,navigator:p,static:h,future:vl({v7_relativeSplatPath:!1},j)}),[z,j,p,h]);typeof c=="string"&&(c=xn(c));let{pathname:T="/",search:O="",hash:N="",state:w=null,key:G="default"}=c,Q=H.useMemo(()=>{let Z=zs(T,z);return Z==null?null:{location:{pathname:Z,search:O,hash:N,state:w,key:G},navigationType:d}},[z,T,O,N,w,G,d]);return Q==null?null:H.createElement(Ei.Provider,{value:g},H.createElement(gr.Provider,{children:u,value:Q}))}function pv(n){let{children:r,location:u}=n;return Wh(ss(r),u)}new Promise(()=>{});function ss(n,r){r===void 0&&(r=[]);let u=[];return H.Children.forEach(n,(c,d)=>{if(!H.isValidElement(c))return;let p=[...r,d];if(c.type===H.Fragment){u.push.apply(u,ss(c.props.children,p));return}c.type!==aa&&Ie(!1),!c.props.index||!c.props.children||Ie(!1);let h={id:c.props.id||p.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,loader:c.props.loader,action:c.props.action,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(h.children=ss(c.props.children,p)),u.push(h)}),u}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fs(){return fs=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var u=arguments[r];for(var c in u)Object.prototype.hasOwnProperty.call(u,c)&&(n[c]=u[c])}return n},fs.apply(this,arguments)}function gv(n,r){if(n==null)return{};var u={},c=Object.keys(n),d,p;for(p=0;p<c.length;p++)d=c[p],!(r.indexOf(d)>=0)&&(u[d]=n[d]);return u}function hv(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function vv(n,r){return n.button===0&&(!r||r==="_self")&&!hv(n)}const xv=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],yv="6";try{window.__reactRouterVersion=yv}catch{}const bv="startTransition",Q1=hh[bv];function zv(n){let{basename:r,children:u,future:c,window:d}=n,p=H.useRef();p.current==null&&(p.current=Ah({window:d,v5Compat:!0}));let h=p.current,[j,z]=H.useState({action:h.action,location:h.location}),{v7_startTransition:g}=c||{},T=H.useCallback(O=>{g&&Q1?Q1(()=>z(O)):z(O)},[z,g]);return H.useLayoutEffect(()=>h.listen(T),[h,T]),H.useEffect(()=>dv(c),[c]),H.createElement(mv,{basename:r,children:u,location:j.location,navigationType:j.action,navigator:h,future:c})}const Sv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Av=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Cv=H.forwardRef(function(r,u){let{onClick:c,relative:d,reloadDocument:p,replace:h,state:j,target:z,to:g,preventScrollReset:T,viewTransition:O}=r,N=gv(r,xv),{basename:w}=H.useContext(Ei),G,Q=!1;if(typeof g=="string"&&Av.test(g)&&(G=g,Sv))try{let J=new URL(window.location.href),ae=g.startsWith("//")?new URL(J.protocol+g):new URL(g),ce=zs(ae.pathname,w);ae.origin===J.origin&&ce!=null?g=ce+ae.search+ae.hash:Q=!0}catch{}let Z=Ih(g,{relative:d}),I=Ev(g,{replace:h,state:j,target:z,preventScrollReset:T,relative:d,viewTransition:O});function k(J){c&&c(J),J.defaultPrevented||I(J)}return H.createElement("a",fs({},N,{href:G||Z,onClick:Q||p?c:k,ref:u,target:z}))});var X1;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(X1||(X1={}));var K1;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(K1||(K1={}));function Ev(n,r){let{target:u,replace:c,state:d,preventScrollReset:p,relative:h,viewTransition:j}=r===void 0?{}:r,z=Ea(),g=bl(),T=ip(n,{relative:h});return H.useCallback(O=>{if(vv(O,u)){O.preventDefault();let N=c!==void 0?c:lr(g)===lr(T);z(n,{replace:N,state:d,preventScrollReset:p,relative:h,viewTransition:j})}},[g,z,T,c,d,u,n,p,h,j])}var ht=function(){return ht=Object.assign||function(r){for(var u,c=1,d=arguments.length;c<d;c++){u=arguments[c];for(var p in u)Object.prototype.hasOwnProperty.call(u,p)&&(r[p]=u[p])}return r},ht.apply(this,arguments)};function or(n,r,u){if(u||arguments.length===2)for(var c=0,d=r.length,p;c<d;c++)(p||!(c in r))&&(p||(p=Array.prototype.slice.call(r,0,c)),p[c]=r[c]);return n.concat(p||Array.prototype.slice.call(r))}var Ue="-ms-",gl="-moz-",Ae="-webkit-",rp="comm",hr="rule",As="decl",jv="@import",up="@keyframes",Tv="@layer",cp=Math.abs,Cs=String.fromCharCode,ds=Object.assign;function Mv(n,r){return tt(n,0)^45?(((r<<2^tt(n,0))<<2^tt(n,1))<<2^tt(n,2))<<2^tt(n,3):0}function sp(n){return n.trim()}function Ca(n,r){return(n=r.exec(n))?n[0]:n}function ue(n,r,u){return n.replace(r,u)}function Wo(n,r,u){return n.indexOf(r,u)}function tt(n,r){return n.charCodeAt(r)|0}function mn(n,r,u){return n.slice(r,u)}function ia(n){return n.length}function fp(n){return n.length}function pl(n,r){return r.push(n),n}function Ov(n,r){return n.map(r).join("")}function J1(n,r){return n.filter(function(u){return!Ca(u,r)})}var vr=1,pn=1,dp=0,Zt=0,Fe=0,yn="";function xr(n,r,u,c,d,p,h,j){return{value:n,root:r,parent:u,type:c,props:d,children:p,line:vr,column:pn,length:h,return:"",siblings:j}}function ka(n,r){return ds(xr("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},r)}function fn(n){for(;n.root;)n=ka(n.root,{children:[n]});pl(n,n.siblings)}function Rv(){return Fe}function Nv(){return Fe=Zt>0?tt(yn,--Zt):0,pn--,Fe===10&&(pn=1,vr--),Fe}function Ft(){return Fe=Zt<dp?tt(yn,Zt++):0,pn++,Fe===10&&(pn=1,vr++),Fe}function Ai(){return tt(yn,Zt)}function er(){return Zt}function yr(n,r){return mn(yn,n,r)}function ms(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function _v(n){return vr=pn=1,dp=ia(yn=n),Zt=0,[]}function Dv(n){return yn="",n}function Xc(n){return sp(yr(Zt-1,ps(n===91?n+2:n===40?n+1:n)))}function Uv(n){for(;(Fe=Ai())&&Fe<33;)Ft();return ms(n)>2||ms(Fe)>3?"":" "}function qv(n,r){for(;--r&&Ft()&&!(Fe<48||Fe>102||Fe>57&&Fe<65||Fe>70&&Fe<97););return yr(n,er()+(r<6&&Ai()==32&&Ft()==32))}function ps(n){for(;Ft();)switch(Fe){case n:return Zt;case 34:case 39:n!==34&&n!==39&&ps(Fe);break;case 40:n===41&&ps(n);break;case 92:Ft();break}return Zt}function wv(n,r){for(;Ft()&&n+Fe!==57;)if(n+Fe===84&&Ai()===47)break;return"/*"+yr(r,Zt-1)+"*"+Cs(n===47?n:Ft())}function Bv(n){for(;!ms(Ai());)Ft();return yr(n,Zt)}function Lv(n){return Dv(tr("",null,null,null,[""],n=_v(n),0,[0],n))}function tr(n,r,u,c,d,p,h,j,z){for(var g=0,T=0,O=h,N=0,w=0,G=0,Q=1,Z=1,I=1,k=0,J="",ae=d,ce=p,te=c,L=J;Z;)switch(G=k,k=Ft()){case 40:if(G!=108&&tt(L,O-1)==58){Wo(L+=ue(Xc(k),"&","&\f"),"&\f",cp(g?j[g-1]:0))!=-1&&(I=-1);break}case 34:case 39:case 91:L+=Xc(k);break;case 9:case 10:case 13:case 32:L+=Uv(G);break;case 92:L+=qv(er()-1,7);continue;case 47:switch(Ai()){case 42:case 47:pl(Hv(wv(Ft(),er()),r,u,z),z);break;default:L+="/"}break;case 123*Q:j[g++]=ia(L)*I;case 125*Q:case 59:case 0:switch(k){case 0:case 125:Z=0;case 59+T:I==-1&&(L=ue(L,/\f/g,"")),w>0&&ia(L)-O&&pl(w>32?I1(L+";",c,u,O-1,z):I1(ue(L," ","")+";",c,u,O-2,z),z);break;case 59:L+=";";default:if(pl(te=F1(L,r,u,g,T,d,j,J,ae=[],ce=[],O,p),p),k===123)if(T===0)tr(L,r,te,te,ae,p,O,j,ce);else switch(N===99&&tt(L,3)===110?100:N){case 100:case 108:case 109:case 115:tr(n,te,te,c&&pl(F1(n,te,te,0,0,d,j,J,d,ae=[],O,ce),ce),d,ce,O,j,c?ae:ce);break;default:tr(L,te,te,te,[""],ce,0,j,ce)}}g=T=w=0,Q=I=1,J=L="",O=h;break;case 58:O=1+ia(L),w=G;default:if(Q<1){if(k==123)--Q;else if(k==125&&Q++==0&&Nv()==125)continue}switch(L+=Cs(k),k*Q){case 38:I=T>0?1:(L+="\f",-1);break;case 44:j[g++]=(ia(L)-1)*I,I=1;break;case 64:Ai()===45&&(L+=Xc(Ft())),N=Ai(),T=O=ia(J=L+=Bv(er())),k++;break;case 45:G===45&&ia(L)==2&&(Q=0)}}return p}function F1(n,r,u,c,d,p,h,j,z,g,T,O){for(var N=d-1,w=d===0?p:[""],G=fp(w),Q=0,Z=0,I=0;Q<c;++Q)for(var k=0,J=mn(n,N+1,N=cp(Z=h[Q])),ae=n;k<G;++k)(ae=sp(Z>0?w[k]+" "+J:ue(J,/&\f/g,w[k])))&&(z[I++]=ae);return xr(n,r,u,d===0?hr:j,z,g,T,O)}function Hv(n,r,u,c){return xr(n,r,u,rp,Cs(Rv()),mn(n,2,-2),0,c)}function I1(n,r,u,c,d){return xr(n,r,u,As,mn(n,0,c),mn(n,c+1,-1),c,d)}function mp(n,r,u){switch(Mv(n,r)){case 5103:return Ae+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ae+n+n;case 4789:return gl+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return Ae+n+gl+n+Ue+n+n;case 5936:switch(tt(n,r+11)){case 114:return Ae+n+Ue+ue(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return Ae+n+Ue+ue(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return Ae+n+Ue+ue(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return Ae+n+Ue+n+n;case 6165:return Ae+n+Ue+"flex-"+n+n;case 5187:return Ae+n+ue(n,/(\w+).+(:[^]+)/,Ae+"box-$1$2"+Ue+"flex-$1$2")+n;case 5443:return Ae+n+Ue+"flex-item-"+ue(n,/flex-|-self/g,"")+(Ca(n,/flex-|baseline/)?"":Ue+"grid-row-"+ue(n,/flex-|-self/g,""))+n;case 4675:return Ae+n+Ue+"flex-line-pack"+ue(n,/align-content|flex-|-self/g,"")+n;case 5548:return Ae+n+Ue+ue(n,"shrink","negative")+n;case 5292:return Ae+n+Ue+ue(n,"basis","preferred-size")+n;case 6060:return Ae+"box-"+ue(n,"-grow","")+Ae+n+Ue+ue(n,"grow","positive")+n;case 4554:return Ae+ue(n,/([^-])(transform)/g,"$1"+Ae+"$2")+n;case 6187:return ue(ue(ue(n,/(zoom-|grab)/,Ae+"$1"),/(image-set)/,Ae+"$1"),n,"")+n;case 5495:case 3959:return ue(n,/(image-set\([^]*)/,Ae+"$1$`$1");case 4968:return ue(ue(n,/(.+:)(flex-)?(.*)/,Ae+"box-pack:$3"+Ue+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ae+n+n;case 4200:if(!Ca(n,/flex-|baseline/))return Ue+"grid-column-align"+mn(n,r)+n;break;case 2592:case 3360:return Ue+ue(n,"template-","")+n;case 4384:case 3616:return u&&u.some(function(c,d){return r=d,Ca(c.props,/grid-\w+-end/)})?~Wo(n+(u=u[r].value),"span",0)?n:Ue+ue(n,"-start","")+n+Ue+"grid-row-span:"+(~Wo(u,"span",0)?Ca(u,/\d+/):+Ca(u,/\d+/)-+Ca(n,/\d+/))+";":Ue+ue(n,"-start","")+n;case 4896:case 4128:return u&&u.some(function(c){return Ca(c.props,/grid-\w+-start/)})?n:Ue+ue(ue(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return ue(n,/(.+)-inline(.+)/,Ae+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ia(n)-1-r>6)switch(tt(n,r+1)){case 109:if(tt(n,r+4)!==45)break;case 102:return ue(n,/(.+:)(.+)-([^]+)/,"$1"+Ae+"$2-$3$1"+gl+(tt(n,r+3)==108?"$3":"$2-$3"))+n;case 115:return~Wo(n,"stretch",0)?mp(ue(n,"stretch","fill-available"),r,u)+n:n}break;case 5152:case 5920:return ue(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(c,d,p,h,j,z,g){return Ue+d+":"+p+g+(h?Ue+d+"-span:"+(j?z:+z-+p)+g:"")+n});case 4949:if(tt(n,r+6)===121)return ue(n,":",":"+Ae)+n;break;case 6444:switch(tt(n,tt(n,14)===45?18:11)){case 120:return ue(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ae+(tt(n,14)===45?"inline-":"")+"box$3$1"+Ae+"$2$3$1"+Ue+"$2box$3")+n;case 100:return ue(n,":",":"+Ue)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ue(n,"scroll-","scroll-snap-")+n}return n}function rr(n,r){for(var u="",c=0;c<n.length;c++)u+=r(n[c],c,n,r)||"";return u}function Gv(n,r,u,c){switch(n.type){case Tv:if(n.children.length)break;case jv:case As:return n.return=n.return||n.value;case rp:return"";case up:return n.return=n.value+"{"+rr(n.children,c)+"}";case hr:if(!ia(n.value=n.props.join(",")))return""}return ia(u=rr(n.children,c))?n.return=n.value+"{"+u+"}":""}function $v(n){var r=fp(n);return function(u,c,d,p){for(var h="",j=0;j<r;j++)h+=n[j](u,c,d,p)||"";return h}}function Vv(n){return function(r){r.root||(r=r.return)&&n(r)}}function Yv(n,r,u,c){if(n.length>-1&&!n.return)switch(n.type){case As:n.return=mp(n.value,n.length,u);return;case up:return rr([ka(n,{value:ue(n.value,"@","@"+Ae)})],c);case hr:if(n.length)return Ov(u=n.props,function(d){switch(Ca(d,c=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":fn(ka(n,{props:[ue(d,/:(read-\w+)/,":"+gl+"$1")]})),fn(ka(n,{props:[d]})),ds(n,{props:J1(u,c)});break;case"::placeholder":fn(ka(n,{props:[ue(d,/:(plac\w+)/,":"+Ae+"input-$1")]})),fn(ka(n,{props:[ue(d,/:(plac\w+)/,":"+gl+"$1")]})),fn(ka(n,{props:[ue(d,/:(plac\w+)/,Ue+"input-$1")]})),fn(ka(n,{props:[d]})),ds(n,{props:J1(u,c)});break}return""})}}var Zv={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Rt={},gn=typeof process<"u"&&Rt!==void 0&&(Rt.REACT_APP_SC_ATTR||Rt.SC_ATTR)||"data-styled",pp="active",gp="data-styled-version",br="6.1.19",Es=`/*!sc*/
`,ur=typeof window<"u"&&typeof document<"u",Qv=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Rt!==void 0&&Rt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Rt.REACT_APP_SC_DISABLE_SPEEDY!==""?Rt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Rt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Rt!==void 0&&Rt.SC_DISABLE_SPEEDY!==void 0&&Rt.SC_DISABLE_SPEEDY!==""&&Rt.SC_DISABLE_SPEEDY!=="false"&&Rt.SC_DISABLE_SPEEDY),zr=Object.freeze([]),hn=Object.freeze({});function Xv(n,r,u){return u===void 0&&(u=hn),n.theme!==u.theme&&n.theme||r||u.theme}var hp=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Kv=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Jv=/(^-|-$)/g;function k1(n){return n.replace(Kv,"-").replace(Jv,"")}var Fv=/(a)(d)/gi,Go=52,P1=function(n){return String.fromCharCode(n+(n>25?39:97))};function gs(n){var r,u="";for(r=Math.abs(n);r>Go;r=r/Go|0)u=P1(r%Go)+u;return(P1(r%Go)+u).replace(Fv,"$1-$2")}var Kc,vp=5381,dn=function(n,r){for(var u=r.length;u;)n=33*n^r.charCodeAt(--u);return n},xp=function(n){return dn(vp,n)};function Iv(n){return gs(xp(n)>>>0)}function kv(n){return n.displayName||n.name||"Component"}function Jc(n){return typeof n=="string"&&!0}var yp=typeof Symbol=="function"&&Symbol.for,bp=yp?Symbol.for("react.memo"):60115,Pv=yp?Symbol.for("react.forward_ref"):60112,Wv={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},e4={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},zp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},t4=((Kc={})[Pv]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Kc[bp]=zp,Kc);function W1(n){return("type"in(r=n)&&r.type.$$typeof)===bp?zp:"$$typeof"in n?t4[n.$$typeof]:Wv;var r}var a4=Object.defineProperty,i4=Object.getOwnPropertyNames,em=Object.getOwnPropertySymbols,n4=Object.getOwnPropertyDescriptor,l4=Object.getPrototypeOf,tm=Object.prototype;function Sp(n,r,u){if(typeof r!="string"){if(tm){var c=l4(r);c&&c!==tm&&Sp(n,c,u)}var d=i4(r);em&&(d=d.concat(em(r)));for(var p=W1(n),h=W1(r),j=0;j<d.length;++j){var z=d[j];if(!(z in e4||u&&u[z]||h&&z in h||p&&z in p)){var g=n4(r,z);try{a4(n,z,g)}catch{}}}}return n}function vn(n){return typeof n=="function"}function js(n){return typeof n=="object"&&"styledComponentId"in n}function Si(n,r){return n&&r?"".concat(n," ").concat(r):n||r||""}function am(n,r){if(n.length===0)return"";for(var u=n[0],c=1;c<n.length;c++)u+=n[c];return u}function xl(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function hs(n,r,u){if(u===void 0&&(u=!1),!u&&!xl(n)&&!Array.isArray(n))return r;if(Array.isArray(r))for(var c=0;c<r.length;c++)n[c]=hs(n[c],r[c]);else if(xl(r))for(var c in r)n[c]=hs(n[c],r[c]);return n}function Ts(n,r){Object.defineProperty(n,"toString",{value:r})}function zl(n){for(var r=[],u=1;u<arguments.length;u++)r[u-1]=arguments[u];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(r.length>0?" Args: ".concat(r.join(", ")):""))}var o4=(function(){function n(r){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=r}return n.prototype.indexOfGroup=function(r){for(var u=0,c=0;c<r;c++)u+=this.groupSizes[c];return u},n.prototype.insertRules=function(r,u){if(r>=this.groupSizes.length){for(var c=this.groupSizes,d=c.length,p=d;r>=p;)if((p<<=1)<0)throw zl(16,"".concat(r));this.groupSizes=new Uint32Array(p),this.groupSizes.set(c),this.length=p;for(var h=d;h<p;h++)this.groupSizes[h]=0}for(var j=this.indexOfGroup(r+1),z=(h=0,u.length);h<z;h++)this.tag.insertRule(j,u[h])&&(this.groupSizes[r]++,j++)},n.prototype.clearGroup=function(r){if(r<this.length){var u=this.groupSizes[r],c=this.indexOfGroup(r),d=c+u;this.groupSizes[r]=0;for(var p=c;p<d;p++)this.tag.deleteRule(c)}},n.prototype.getGroup=function(r){var u="";if(r>=this.length||this.groupSizes[r]===0)return u;for(var c=this.groupSizes[r],d=this.indexOfGroup(r),p=d+c,h=d;h<p;h++)u+="".concat(this.tag.getRule(h)).concat(Es);return u},n})(),ar=new Map,cr=new Map,ir=1,$o=function(n){if(ar.has(n))return ar.get(n);for(;cr.has(ir);)ir++;var r=ir++;return ar.set(n,r),cr.set(r,n),r},r4=function(n,r){ir=r+1,ar.set(n,r),cr.set(r,n)},u4="style[".concat(gn,"][").concat(gp,'="').concat(br,'"]'),c4=new RegExp("^".concat(gn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),s4=function(n,r,u){for(var c,d=u.split(","),p=0,h=d.length;p<h;p++)(c=d[p])&&n.registerName(r,c)},f4=function(n,r){for(var u,c=((u=r.textContent)!==null&&u!==void 0?u:"").split(Es),d=[],p=0,h=c.length;p<h;p++){var j=c[p].trim();if(j){var z=j.match(c4);if(z){var g=0|parseInt(z[1],10),T=z[2];g!==0&&(r4(T,g),s4(n,T,z[3]),n.getTag().insertRules(g,d)),d.length=0}else d.push(j)}}},im=function(n){for(var r=document.querySelectorAll(u4),u=0,c=r.length;u<c;u++){var d=r[u];d&&d.getAttribute(gn)!==pp&&(f4(n,d),d.parentNode&&d.parentNode.removeChild(d))}};function d4(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Ap=function(n){var r=document.head,u=n||r,c=document.createElement("style"),d=(function(j){var z=Array.from(j.querySelectorAll("style[".concat(gn,"]")));return z[z.length-1]})(u),p=d!==void 0?d.nextSibling:null;c.setAttribute(gn,pp),c.setAttribute(gp,br);var h=d4();return h&&c.setAttribute("nonce",h),u.insertBefore(c,p),c},m4=(function(){function n(r){this.element=Ap(r),this.element.appendChild(document.createTextNode("")),this.sheet=(function(u){if(u.sheet)return u.sheet;for(var c=document.styleSheets,d=0,p=c.length;d<p;d++){var h=c[d];if(h.ownerNode===u)return h}throw zl(17)})(this.element),this.length=0}return n.prototype.insertRule=function(r,u){try{return this.sheet.insertRule(u,r),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(r){this.sheet.deleteRule(r),this.length--},n.prototype.getRule=function(r){var u=this.sheet.cssRules[r];return u&&u.cssText?u.cssText:""},n})(),p4=(function(){function n(r){this.element=Ap(r),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(r,u){if(r<=this.length&&r>=0){var c=document.createTextNode(u);return this.element.insertBefore(c,this.nodes[r]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(r){this.element.removeChild(this.nodes[r]),this.length--},n.prototype.getRule=function(r){return r<this.length?this.nodes[r].textContent:""},n})(),g4=(function(){function n(r){this.rules=[],this.length=0}return n.prototype.insertRule=function(r,u){return r<=this.length&&(this.rules.splice(r,0,u),this.length++,!0)},n.prototype.deleteRule=function(r){this.rules.splice(r,1),this.length--},n.prototype.getRule=function(r){return r<this.length?this.rules[r]:""},n})(),nm=ur,h4={isServer:!ur,useCSSOMInjection:!Qv},Cp=(function(){function n(r,u,c){r===void 0&&(r=hn),u===void 0&&(u={});var d=this;this.options=ht(ht({},h4),r),this.gs=u,this.names=new Map(c),this.server=!!r.isServer,!this.server&&ur&&nm&&(nm=!1,im(this)),Ts(this,function(){return(function(p){for(var h=p.getTag(),j=h.length,z="",g=function(O){var N=(function(I){return cr.get(I)})(O);if(N===void 0)return"continue";var w=p.names.get(N),G=h.getGroup(O);if(w===void 0||!w.size||G.length===0)return"continue";var Q="".concat(gn,".g").concat(O,'[id="').concat(N,'"]'),Z="";w!==void 0&&w.forEach(function(I){I.length>0&&(Z+="".concat(I,","))}),z+="".concat(G).concat(Q,'{content:"').concat(Z,'"}').concat(Es)},T=0;T<j;T++)g(T);return z})(d)})}return n.registerId=function(r){return $o(r)},n.prototype.rehydrate=function(){!this.server&&ur&&im(this)},n.prototype.reconstructWithOptions=function(r,u){return u===void 0&&(u=!0),new n(ht(ht({},this.options),r),this.gs,u&&this.names||void 0)},n.prototype.allocateGSInstance=function(r){return this.gs[r]=(this.gs[r]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(r=(function(u){var c=u.useCSSOMInjection,d=u.target;return u.isServer?new g4(d):c?new m4(d):new p4(d)})(this.options),new o4(r)));var r},n.prototype.hasNameForId=function(r,u){return this.names.has(r)&&this.names.get(r).has(u)},n.prototype.registerName=function(r,u){if($o(r),this.names.has(r))this.names.get(r).add(u);else{var c=new Set;c.add(u),this.names.set(r,c)}},n.prototype.insertRules=function(r,u,c){this.registerName(r,u),this.getTag().insertRules($o(r),c)},n.prototype.clearNames=function(r){this.names.has(r)&&this.names.get(r).clear()},n.prototype.clearRules=function(r){this.getTag().clearGroup($o(r)),this.clearNames(r)},n.prototype.clearTag=function(){this.tag=void 0},n})(),v4=/&/g,x4=/^\s*\/\/.*$/gm;function Ep(n,r){return n.map(function(u){return u.type==="rule"&&(u.value="".concat(r," ").concat(u.value),u.value=u.value.replaceAll(",",",".concat(r," ")),u.props=u.props.map(function(c){return"".concat(r," ").concat(c)})),Array.isArray(u.children)&&u.type!=="@keyframes"&&(u.children=Ep(u.children,r)),u})}function y4(n){var r,u,c,d=hn,p=d.options,h=p===void 0?hn:p,j=d.plugins,z=j===void 0?zr:j,g=function(N,w,G){return G.startsWith(u)&&G.endsWith(u)&&G.replaceAll(u,"").length>0?".".concat(r):N},T=z.slice();T.push(function(N){N.type===hr&&N.value.includes("&")&&(N.props[0]=N.props[0].replace(v4,u).replace(c,g))}),h.prefix&&T.push(Yv),T.push(Gv);var O=function(N,w,G,Q){w===void 0&&(w=""),G===void 0&&(G=""),Q===void 0&&(Q="&"),r=Q,u=w,c=new RegExp("\\".concat(u,"\\b"),"g");var Z=N.replace(x4,""),I=Lv(G||w?"".concat(G," ").concat(w," { ").concat(Z," }"):Z);h.namespace&&(I=Ep(I,h.namespace));var k=[];return rr(I,$v(T.concat(Vv(function(J){return k.push(J)})))),k};return O.hash=z.length?z.reduce(function(N,w){return w.name||zl(15),dn(N,w.name)},vp).toString():"",O}var b4=new Cp,vs=y4(),jp=_t.createContext({shouldForwardProp:void 0,styleSheet:b4,stylis:vs});jp.Consumer;_t.createContext(void 0);function lm(){return H.useContext(jp)}var z4=(function(){function n(r,u){var c=this;this.inject=function(d,p){p===void 0&&(p=vs);var h=c.name+p.hash;d.hasNameForId(c.id,h)||d.insertRules(c.id,h,p(c.rules,h,"@keyframes"))},this.name=r,this.id="sc-keyframes-".concat(r),this.rules=u,Ts(this,function(){throw zl(12,String(c.name))})}return n.prototype.getName=function(r){return r===void 0&&(r=vs),this.name+r.hash},n})(),S4=function(n){return n>="A"&&n<="Z"};function om(n){for(var r="",u=0;u<n.length;u++){var c=n[u];if(u===1&&c==="-"&&n[0]==="-")return n;S4(c)?r+="-"+c.toLowerCase():r+=c}return r.startsWith("ms-")?"-"+r:r}var Tp=function(n){return n==null||n===!1||n===""},Mp=function(n){var r,u,c=[];for(var d in n){var p=n[d];n.hasOwnProperty(d)&&!Tp(p)&&(Array.isArray(p)&&p.isCss||vn(p)?c.push("".concat(om(d),":"),p,";"):xl(p)?c.push.apply(c,or(or(["".concat(d," {")],Mp(p),!1),["}"],!1)):c.push("".concat(om(d),": ").concat((r=d,(u=p)==null||typeof u=="boolean"||u===""?"":typeof u!="number"||u===0||r in Zv||r.startsWith("--")?String(u).trim():"".concat(u,"px")),";")))}return c};function Ci(n,r,u,c){if(Tp(n))return[];if(js(n))return[".".concat(n.styledComponentId)];if(vn(n)){if(!vn(p=n)||p.prototype&&p.prototype.isReactComponent||!r)return[n];var d=n(r);return Ci(d,r,u,c)}var p;return n instanceof z4?u?(n.inject(u,c),[n.getName(c)]):[n]:xl(n)?Mp(n):Array.isArray(n)?Array.prototype.concat.apply(zr,n.map(function(h){return Ci(h,r,u,c)})):[n.toString()]}function A4(n){for(var r=0;r<n.length;r+=1){var u=n[r];if(vn(u)&&!js(u))return!1}return!0}var C4=xp(br),E4=(function(){function n(r,u,c){this.rules=r,this.staticRulesId="",this.isStatic=(c===void 0||c.isStatic)&&A4(r),this.componentId=u,this.baseHash=dn(C4,u),this.baseStyle=c,Cp.registerId(u)}return n.prototype.generateAndInjectStyles=function(r,u,c){var d=this.baseStyle?this.baseStyle.generateAndInjectStyles(r,u,c):"";if(this.isStatic&&!c.hash)if(this.staticRulesId&&u.hasNameForId(this.componentId,this.staticRulesId))d=Si(d,this.staticRulesId);else{var p=am(Ci(this.rules,r,u,c)),h=gs(dn(this.baseHash,p)>>>0);if(!u.hasNameForId(this.componentId,h)){var j=c(p,".".concat(h),void 0,this.componentId);u.insertRules(this.componentId,h,j)}d=Si(d,h),this.staticRulesId=h}else{for(var z=dn(this.baseHash,c.hash),g="",T=0;T<this.rules.length;T++){var O=this.rules[T];if(typeof O=="string")g+=O;else if(O){var N=am(Ci(O,r,u,c));z=dn(z,N+T),g+=N}}if(g){var w=gs(z>>>0);u.hasNameForId(this.componentId,w)||u.insertRules(this.componentId,w,c(g,".".concat(w),void 0,this.componentId)),d=Si(d,w)}}return d},n})(),Op=_t.createContext(void 0);Op.Consumer;var Fc={};function j4(n,r,u){var c=js(n),d=n,p=!Jc(n),h=r.attrs,j=h===void 0?zr:h,z=r.componentId,g=z===void 0?(function(ae,ce){var te=typeof ae!="string"?"sc":k1(ae);Fc[te]=(Fc[te]||0)+1;var L="".concat(te,"-").concat(Iv(br+te+Fc[te]));return ce?"".concat(ce,"-").concat(L):L})(r.displayName,r.parentComponentId):z,T=r.displayName,O=T===void 0?(function(ae){return Jc(ae)?"styled.".concat(ae):"Styled(".concat(kv(ae),")")})(n):T,N=r.displayName&&r.componentId?"".concat(k1(r.displayName),"-").concat(r.componentId):r.componentId||g,w=c&&d.attrs?d.attrs.concat(j).filter(Boolean):j,G=r.shouldForwardProp;if(c&&d.shouldForwardProp){var Q=d.shouldForwardProp;if(r.shouldForwardProp){var Z=r.shouldForwardProp;G=function(ae,ce){return Q(ae,ce)&&Z(ae,ce)}}else G=Q}var I=new E4(u,N,c?d.componentStyle:void 0);function k(ae,ce){return(function(te,L,xe){var ke=te.attrs,kt=te.componentStyle,Ye=te.defaultProps,Ze=te.foldedComponentIds,Qt=te.styledComponentId,xt=te.target,yt=_t.useContext(Op),D=lm(),$=te.shouldForwardProp||D.shouldForwardProp,W=Xv(L,yt,Ye)||hn,se=(function(ie,le,he){for(var Ge,Ce=ht(ht({},le),{className:void 0,theme:he}),na=0;na<ie.length;na+=1){var la=vn(Ge=ie[na])?Ge(Ce):Ge;for(var Dt in la)Ce[Dt]=Dt==="className"?Si(Ce[Dt],la[Dt]):Dt==="style"?ht(ht({},Ce[Dt]),la[Dt]):la[Dt]}return le.className&&(Ce.className=Si(Ce.className,le.className)),Ce})(ke,L,W),ye=se.as||xt,b={};for(var U in se)se[U]===void 0||U[0]==="$"||U==="as"||U==="theme"&&se.theme===W||(U==="forwardedAs"?b.as=se.forwardedAs:$&&!$(U,ye)||(b[U]=se[U]));var Y=(function(ie,le){var he=lm(),Ge=ie.generateAndInjectStyles(le,he.styleSheet,he.stylis);return Ge})(kt,se),X=Si(Ze,Qt);return Y&&(X+=" "+Y),se.className&&(X+=" "+se.className),b[Jc(ye)&&!hp.has(ye)?"class":"className"]=X,xe&&(b.ref=xe),H.createElement(ye,b)})(J,ae,ce)}k.displayName=O;var J=_t.forwardRef(k);return J.attrs=w,J.componentStyle=I,J.displayName=O,J.shouldForwardProp=G,J.foldedComponentIds=c?Si(d.foldedComponentIds,d.styledComponentId):"",J.styledComponentId=N,J.target=c?d.target:n,Object.defineProperty(J,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(ae){this._foldedDefaultProps=c?(function(ce){for(var te=[],L=1;L<arguments.length;L++)te[L-1]=arguments[L];for(var xe=0,ke=te;xe<ke.length;xe++)hs(ce,ke[xe],!0);return ce})({},d.defaultProps,ae):ae}}),Ts(J,function(){return".".concat(J.styledComponentId)}),p&&Sp(J,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),J}function rm(n,r){for(var u=[n[0]],c=0,d=r.length;c<d;c+=1)u.push(r[c],n[c+1]);return u}var um=function(n){return Object.assign(n,{isCss:!0})};function T4(n){for(var r=[],u=1;u<arguments.length;u++)r[u-1]=arguments[u];if(vn(n)||xl(n))return um(Ci(rm(zr,or([n],r,!0))));var c=n;return r.length===0&&c.length===1&&typeof c[0]=="string"?Ci(c):um(Ci(rm(c,r)))}function xs(n,r,u){if(u===void 0&&(u=hn),!r)throw zl(1,r);var c=function(d){for(var p=[],h=1;h<arguments.length;h++)p[h-1]=arguments[h];return n(r,u,T4.apply(void 0,or([d],p,!1)))};return c.attrs=function(d){return xs(n,r,ht(ht({},u),{attrs:Array.prototype.concat(u.attrs,d).filter(Boolean)}))},c.withConfig=function(d){return xs(n,r,ht(ht({},u),d))},c}var Rp=function(n){return xs(j4,n)},v=Rp;hp.forEach(function(n){v[n]=Rp(n)});var Np={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},cm=_t.createContext&&_t.createContext(Np),M4=["attr","size","title"];function O4(n,r){if(n==null)return{};var u=R4(n,r),c,d;if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(n);for(d=0;d<p.length;d++)c=p[d],!(r.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(n,c)&&(u[c]=n[c])}return u}function R4(n,r){if(n==null)return{};var u={};for(var c in n)if(Object.prototype.hasOwnProperty.call(n,c)){if(r.indexOf(c)>=0)continue;u[c]=n[c]}return u}function sr(){return sr=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var u=arguments[r];for(var c in u)Object.prototype.hasOwnProperty.call(u,c)&&(n[c]=u[c])}return n},sr.apply(this,arguments)}function sm(n,r){var u=Object.keys(n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);r&&(c=c.filter(function(d){return Object.getOwnPropertyDescriptor(n,d).enumerable})),u.push.apply(u,c)}return u}function fr(n){for(var r=1;r<arguments.length;r++){var u=arguments[r]!=null?arguments[r]:{};r%2?sm(Object(u),!0).forEach(function(c){N4(n,c,u[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(u)):sm(Object(u)).forEach(function(c){Object.defineProperty(n,c,Object.getOwnPropertyDescriptor(u,c))})}return n}function N4(n,r,u){return r=_4(r),r in n?Object.defineProperty(n,r,{value:u,enumerable:!0,configurable:!0,writable:!0}):n[r]=u,n}function _4(n){var r=D4(n,"string");return typeof r=="symbol"?r:r+""}function D4(n,r){if(typeof n!="object"||!n)return n;var u=n[Symbol.toPrimitive];if(u!==void 0){var c=u.call(n,r);if(typeof c!="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(n)}function _p(n){return n&&n.map((r,u)=>_t.createElement(r.tag,fr({key:u},r.attr),_p(r.child)))}function me(n){return r=>_t.createElement(U4,sr({attr:fr({},n.attr)},r),_p(n.child))}function U4(n){var r=u=>{var{attr:c,size:d,title:p}=n,h=O4(n,M4),j=d||u.size||"1em",z;return u.className&&(z=u.className),n.className&&(z=(z?z+" ":"")+n.className),_t.createElement("svg",sr({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},u.attr,c,h,{className:z,style:fr(fr({color:n.color||u.color},u.style),n.style),height:j,width:j,xmlns:"http://www.w3.org/2000/svg"}),p&&_t.createElement("title",null,p),n.children)};return cm!==void 0?_t.createElement(cm.Consumer,null,u=>r(u)):r(Np)}function fm(n){return me({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"},child:[]}]})(n)}function q4(n){return me({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"},child:[]}]})(n)}function w4(n){return me({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"},child:[]}]})(n)}function B4(n){return me({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-96zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"},child:[]}]})(n)}function Dp(n){return me({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"},child:[]}]})(n)}function L4(n){return me({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"},child:[]}]})(n)}function H4(n){return me({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"},child:[]}]})(n)}function vt(n){return me({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"},child:[]}]})(n)}function G4(n){return me({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M416 128c-.6 0-1.1.2-1.6.2 1.1-5.2 1.6-10.6 1.6-16.2 0-44.2-35.8-80-80-80-24.6 0-46.3 11.3-61 28.8C256.4 24.8 219.3 0 176 0 114.1 0 64 50.1 64 112c0 7.3.8 14.3 2.1 21.2C27.8 145.8 0 181.5 0 224c0 53 43 96 96 96h320c53 0 96-43 96-96s-43-96-96-96zM88 374.2c-12.8 44.4-40 56.4-40 87.7 0 27.7 21.5 50.1 48 50.1s48-22.4 48-50.1c0-31.4-27.2-43.1-40-87.7-2.2-8.1-13.5-8.5-16 0zm160 0c-12.8 44.4-40 56.4-40 87.7 0 27.7 21.5 50.1 48 50.1s48-22.4 48-50.1c0-31.4-27.2-43.1-40-87.7-2.2-8.1-13.5-8.5-16 0zm160 0c-12.8 44.4-40 56.4-40 87.7 0 27.7 21.5 50.1 48 50.1s48-22.4 48-50.1c0-31.4-27.2-43.1-40-87.7-2.2-8.1-13.5-8.5-16 0z"},child:[]}]})(n)}function $4(n){return me({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M310.706 413.765c-1.314-6.63-7.835-10.872-14.424-9.369-10.692 2.439-27.422 5.413-45.426 5.413-56.763 0-101.929-34.79-121.461-85.449h113.689a12 12 0 0 0 11.708-9.369l6.373-28.36c1.686-7.502-4.019-14.631-11.708-14.631H115.22c-1.21-14.328-1.414-28.287.137-42.245H261.95a12 12 0 0 0 11.723-9.434l6.512-29.755c1.638-7.484-4.061-14.566-11.723-14.566H130.184c20.633-44.991 62.69-75.03 117.619-75.03 14.486 0 28.564 2.25 37.851 4.145 6.216 1.268 12.347-2.498 14.002-8.623l11.991-44.368c1.822-6.741-2.465-13.616-9.326-14.917C290.217 34.912 270.71 32 249.635 32 152.451 32 74.03 92.252 45.075 176H12c-6.627 0-12 5.373-12 12v29.755c0 6.627 5.373 12 12 12h21.569c-1.009 13.607-1.181 29.287-.181 42.245H12c-6.627 0-12 5.373-12 12v28.36c0 6.627 5.373 12 12 12h30.114C67.139 414.692 145.264 480 249.635 480c26.301 0 48.562-4.544 61.101-7.788 6.167-1.595 10.027-7.708 8.788-13.957l-8.818-44.49z"},child:[]}]})(n)}function Up(n){return me({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M0 168v-16c0-13.255 10.745-24 24-24h360V80c0-21.367 25.899-32.042 40.971-16.971l80 80c9.372 9.373 9.372 24.569 0 33.941l-80 80C409.956 271.982 384 261.456 384 240v-48H24c-13.255 0-24-10.745-24-24zm488 152H128v-48c0-21.314-25.862-32.08-40.971-16.971l-80 80c-9.372 9.373-9.372 24.569 0 33.941l80 80C102.057 463.997 128 453.437 128 432v-48h360c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24z"},child:[]}]})(n)}function qp(n){return me({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z"},child:[]}]})(n)}function dr(n){return me({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"},child:[]}]})(n)}function V4(n){return me({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"},child:[]}]})(n)}function Y4(n){return me({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"},child:[]}]})(n)}function wp(n){return me({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M546.2 9.7c-5.6-12.5-21.6-13-28.3-1.2C486.9 62.4 431.4 96 368 96h-80C182 96 96 182 96 288c0 7 .8 13.7 1.5 20.5C161.3 262.8 253.4 224 384 224c8.8 0 16 7.2 16 16s-7.2 16-16 16C132.6 256 26 410.1 2.4 468c-6.6 16.3 1.2 34.9 17.5 41.6 16.4 6.8 35-1.1 41.8-17.3 1.5-3.6 20.9-47.9 71.9-90.6 32.4 43.9 94 85.8 174.9 77.2C465.5 467.5 576 326.7 576 154.3c0-50.2-10.8-102.2-29.8-144.6z"},child:[]}]})(n)}function mr(n){return me({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0 0 26.64 14.28h61.71a31.99 31.99 0 0 0 26.64-14.28l17.09-25.69a31.989 31.989 0 0 0 5.36-17.69l.04-38.35H96.01l.05 38.35zM0 176c0 44.37 16.45 84.85 43.56 115.78 16.52 18.85 42.36 58.23 52.21 91.45.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176 352 78.61 272.91-.3 175.45 0 73.44.31 0 82.97 0 176zm176-80c-44.11 0-80 35.89-80 80 0 8.84-7.16 16-16 16s-16-7.16-16-16c0-61.76 50.24-112 112-112 8.84 0 16 7.16 16 16s-7.16 16-16 16z"},child:[]}]})(n)}function Z4(n){return me({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M80 368H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm0-320H16A16 16 0 0 0 0 64v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16zm0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm416 176H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"},child:[]}]})(n)}function Bp(n){return me({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M288 0c-69.59 0-126 56.41-126 126 0 56.26 82.35 158.8 113.9 196.02 6.39 7.54 17.82 7.54 24.2 0C331.65 284.8 414 182.26 414 126 414 56.41 357.59 0 288 0zm0 168c-23.2 0-42-18.8-42-42s18.8-42 42-42 42 18.8 42 42-18.8 42-42 42zM20.12 215.95A32.006 32.006 0 0 0 0 245.66v250.32c0 11.32 11.43 19.06 21.94 14.86L160 448V214.92c-8.84-15.98-16.07-31.54-21.25-46.42L20.12 215.95zM288 359.67c-14.07 0-27.38-6.18-36.51-16.96-19.66-23.2-40.57-49.62-59.49-76.72v182l192 64V266c-18.92 27.09-39.82 53.52-59.49 76.72-9.13 10.77-22.44 16.95-36.51 16.95zm266.06-198.51L416 224v288l139.88-55.95A31.996 31.996 0 0 0 576 426.34V176.02c0-11.32-11.43-19.06-21.94-14.86z"},child:[]}]})(n)}function Q4(n){return me({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"},child:[]}]})(n)}function X4(n){return me({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M223.75 130.75L154.62 15.54A31.997 31.997 0 0 0 127.18 0H16.03C3.08 0-4.5 14.57 2.92 25.18l111.27 158.96c29.72-27.77 67.52-46.83 109.56-53.39zM495.97 0H384.82c-11.24 0-21.66 5.9-27.44 15.54l-69.13 115.21c42.04 6.56 79.84 25.62 109.56 53.38L509.08 25.18C516.5 14.57 508.92 0 495.97 0zM256 160c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm92.52 157.26l-37.93 36.96 8.97 52.22c1.6 9.36-8.26 16.51-16.65 12.09L256 393.88l-46.9 24.65c-8.4 4.45-18.25-2.74-16.65-12.09l8.97-52.22-37.93-36.96c-6.82-6.64-3.05-18.23 6.35-19.59l52.43-7.64 23.43-47.52c2.11-4.28 6.19-6.39 10.28-6.39 4.11 0 8.22 2.14 10.33 6.39l23.43 47.52 52.43 7.64c9.4 1.36 13.17 12.95 6.35 19.59z"},child:[]}]})(n)}function K4(n){return me({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"},child:[]}]})(n)}function Lp(n){return me({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"},child:[]}]})(n)}function J4(n){return me({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"},child:[]}]})(n)}function Hp(n){return me({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"},child:[]}]})(n)}function pr(n){return me({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"},child:[]}]})(n)}function F4(n){return me({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M440.3 345.2l-33.8-19.5 26-7c8.2-2.2 13.1-10.7 10.9-18.9l-4-14.9c-2.2-8.2-10.7-13.1-18.9-10.9l-70.8 19-63.9-37 63.8-36.9 70.8 19c8.2 2.2 16.7-2.7 18.9-10.9l4-14.9c2.2-8.2-2.7-16.7-10.9-18.9l-26-7 33.8-19.5c7.4-4.3 9.9-13.7 5.7-21.1L430.4 119c-4.3-7.4-13.7-9.9-21.1-5.7l-33.8 19.5 7-26c2.2-8.2-2.7-16.7-10.9-18.9l-14.9-4c-8.2-2.2-16.7 2.7-18.9 10.9l-19 70.8-62.8 36.2v-77.5l53.7-53.7c6.2-6.2 6.2-16.4 0-22.6l-11.3-11.3c-6.2-6.2-16.4-6.2-22.6 0L256 56.4V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v40.4l-19.7-19.7c-6.2-6.2-16.4-6.2-22.6 0L138.3 48c-6.3 6.2-6.3 16.4 0 22.6l53.7 53.7v77.5l-62.8-36.2-19-70.8c-2.2-8.2-10.7-13.1-18.9-10.9l-14.9 4c-8.2 2.2-13.1 10.7-10.9 18.9l7 26-33.8-19.5c-7.4-4.3-16.8-1.7-21.1 5.7L2.1 145.7c-4.3 7.4-1.7 16.8 5.7 21.1l33.8 19.5-26 7c-8.3 2.2-13.2 10.7-11 19l4 14.9c2.2 8.2 10.7 13.1 18.9 10.9l70.8-19 63.8 36.9-63.8 36.9-70.8-19c-8.2-2.2-16.7 2.7-18.9 10.9l-4 14.9c-2.2 8.2 2.7 16.7 10.9 18.9l26 7-33.8 19.6c-7.4 4.3-9.9 13.7-5.7 21.1l15.5 26.8c4.3 7.4 13.7 9.9 21.1 5.7l33.8-19.5-7 26c-2.2 8.2 2.7 16.7 10.9 18.9l14.9 4c8.2 2.2 16.7-2.7 18.9-10.9l19-70.8 62.8-36.2v77.5l-53.7 53.7c-6.3 6.2-6.3 16.4 0 22.6l11.3 11.3c6.2 6.2 16.4 6.2 22.6 0l19.7-19.7V496c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-40.4l19.7 19.7c6.2 6.2 16.4 6.2 22.6 0l11.3-11.3c6.2-6.2 6.2-16.4 0-22.6L256 387.7v-77.5l62.8 36.2 19 70.8c2.2 8.2 10.7 13.1 18.9 10.9l14.9-4c8.2-2.2 13.1-10.7 10.9-18.9l-7-26 33.8 19.5c7.4 4.3 16.8 1.7 21.1-5.7l15.5-26.8c4.3-7.3 1.8-16.8-5.6-21z"},child:[]}]})(n)}function It(n){return me({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"},child:[]}]})(n)}function I4(n){return me({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"},child:[]}]})(n)}function k4(n){return me({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"},child:[]}]})(n)}function P4(n){return me({attr:{viewBox:"0 0 256 512"},child:[{tag:"path",attr:{d:"M192 384c0 35.346-28.654 64-64 64s-64-28.654-64-64c0-23.685 12.876-44.349 32-55.417V224c0-17.673 14.327-32 32-32s32 14.327 32 32v104.583c19.124 11.068 32 31.732 32 55.417zm32-84.653c19.912 22.563 32 52.194 32 84.653 0 70.696-57.303 128-128 128-.299 0-.609-.001-.909-.003C56.789 511.509-.357 453.636.002 383.333.166 351.135 12.225 321.755 32 299.347V96c0-53.019 42.981-96 96-96s96 42.981 96 96v203.347zM208 384c0-34.339-19.37-52.19-32-66.502V96c0-26.467-21.533-48-48-48S80 69.533 80 96v221.498c-12.732 14.428-31.825 32.1-31.999 66.08-.224 43.876 35.563 80.116 79.423 80.42L128 464c44.112 0 80-35.888 80-80z"},child:[]}]})(n)}function W4(n){return me({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(n)}function dm(n){return me({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"},child:[]}]})(n)}function e3(n){return me({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M552 64H448V24c0-13.3-10.7-24-24-24H152c-13.3 0-24 10.7-24 24v40H24C10.7 64 0 74.7 0 88v56c0 35.7 22.5 72.4 61.9 100.7 31.5 22.7 69.8 37.1 110 41.7C203.3 338.5 240 360 240 360v72h-48c-35.3 0-64 20.7-64 56v12c0 6.6 5.4 12 12 12h296c6.6 0 12-5.4 12-12v-12c0-35.3-28.7-56-64-56h-48v-72s36.7-21.5 68.1-73.6c40.3-4.6 78.6-19 110-41.7 39.3-28.3 61.9-65 61.9-100.7V88c0-13.3-10.7-24-24-24zM99.3 192.8C74.9 175.2 64 155.6 64 144v-16h64.2c1 32.6 5.8 61.2 12.8 86.2-15.1-5.2-29.2-12.4-41.7-21.4zM512 144c0 16.1-17.7 36.1-35.3 48.8-12.5 9-26.7 16.2-41.8 21.4 7-25 11.8-53.6 12.8-86.2H512v16z"},child:[]}]})(n)}function t3(n){return me({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(n)}function mm(n){return me({attr:{viewBox:"0 0 416 512"},child:[{tag:"path",attr:{d:"M207.9 15.2c.8 4.7 16.1 94.5 16.1 128.8 0 52.3-27.8 89.6-68.9 104.6L168 486.7c.7 13.7-10.2 25.3-24 25.3H80c-13.7 0-24.7-11.5-24-25.3l12.9-238.1C27.7 233.6 0 196.2 0 144 0 109.6 15.3 19.9 16.1 15.2 19.3-5.1 61.4-5.4 64 16.3v141.2c1.3 3.4 15.1 3.2 16 0 1.4-25.3 7.9-139.2 8-141.8 3.3-20.8 44.7-20.8 47.9 0 .2 2.7 6.6 116.5 8 141.8.9 3.2 14.8 3.4 16 0V16.3c2.6-21.6 44.8-21.4 48-1.1zm119.2 285.7l-15 185.1c-1.2 14 9.9 26 23.9 26h56c13.3 0 24-10.7 24-24V24c0-13.2-10.7-24-24-24-82.5 0-221.4 178.5-64.9 300.9z"},child:[]}]})(n)}function a3(n){return me({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M507.31 72.57L439.43 4.69c-6.25-6.25-16.38-6.25-22.63 0l-22.63 22.63c-6.25 6.25-6.25 16.38 0 22.63l-76.67 76.67c-46.58-19.7-102.4-10.73-140.37 27.23L18.75 312.23c-24.99 24.99-24.99 65.52 0 90.51l90.51 90.51c24.99 24.99 65.52 24.99 90.51 0l158.39-158.39c37.96-37.96 46.93-93.79 27.23-140.37l76.67-76.67c6.25 6.25 16.38 6.25 22.63 0l22.63-22.63c6.24-6.24 6.24-16.37-.01-22.62zM179.22 423.29l-90.51-90.51 122.04-122.04 90.51 90.51-122.04 122.04z"},child:[]}]})(n)}const S={verdePrimario:"#008C45",verdeScuro:"#006634",verdePastello:"#E8F5E9",rossoPrimario:"#CD212A",rossoScuro:"#9B1C26",rossoPastello:"#FFEBEE",grigio100:"#F5F5F5",grigio200:"#EEEEEE",grigio300:"#E0E0E0",grigio500:"#9E9E9E",grigio600:"#757575",successo:"#4CAF50",errore:"#F44336",warning:"#FF9800",testoChiaro:"#212121",testoSecondario:"#757575",difficoltaFacile:"#4CAF50",difficoltaMedia:"#FF9800",difficoltaDifficile:"#F44336"};var we=(n=>(n.FACILE="facile",n.MEDIA="media",n.DIFFICILE="difficile",n))(we||{}),Ne=(n=>(n.PRIMI="primi",n.SECONDI="secondi",n.CONTORNI="contorni",n.DOLCI="dolci",n.ANTIPASTI="antipasti",n.PIZZE_FOCACCE="pizze_focacce",n.REGIONALI="regionali",n))(Ne||{}),Be=(n=>(n.VEGETARIANO="vegetariano",n.VEGANO="vegano",n.SENZA_GLUTINE="senza_glutine",n.SENZA_LATTOSIO="senza_lattosio",n))(Be||{}),V=(n=>(n.ABRUZZO="abruzzo",n.BASILICATA="basilicata",n.CALABRIA="calabria",n.CAMPANIA="campania",n.EMILIA_ROMAGNA="emilia_romagna",n.FRIULI_VENEZIA_GIULIA="friuli_venezia_giulia",n.LAZIO="lazio",n.LIGURIA="liguria",n.LOMBARDIA="lombardia",n.MARCHE="marche",n.MOLISE="molise",n.PIEMONTE="piemonte",n.PUGLIA="puglia",n.SARDEGNA="sardegna",n.SICILIA="sicilia",n.TOSCANA="toscana",n.TRENTINO_ALTO_ADIGE="trentino_alto_adige",n.UMBRIA="umbria",n.VALLE_DAOSTA="valle_daosta",n.VENETO="veneto",n))(V||{}),nr=(n=>(n.PRIMAVERA="primavera",n.ESTATE="estate",n.AUTUNNO="autunno",n.INVERNO="inverno",n.TUTTO_ANNO="tutto_anno",n))(nr||{}),Pa=(n=>(n.NATALE="natale",n.CAPODANNO="capodanno",n.PASQUA="pasqua",n.FERRAGOSTO="ferragosto",n.CARNEVALE="carnevale",n.DOMENICA="domenica",n.FESTA_COMPLEANNO="festa_compleanno",n))(Pa||{});const Nt=[{id:"1",titolo:"Pasta alla Carbonara",descrizione:"Il piatto romano per eccellenza, cremoso e saporito con guanciale, uova e pecorino.",fotoUrl:"🍝",videoUrl:"https://www.youtube.com/watch?v=example1",difficolta:we.MEDIA,tipo:Ne.PRIMI,regione:V.LAZIO,filtriAlimentari:[],ingredienti:[{nome:"Spaghetti",quantita:320,unita:"g"},{nome:"Guanciale",quantita:150,unita:"g"},{nome:"Uova",quantita:3,unita:"pz",note:"solo tuorli"},{nome:"Pecorino Romano",quantita:80,unita:"g",note:"grattugiato"},{nome:"Pepe nero",quantita:1,unita:"q.b."},{nome:"Sale",quantita:1,unita:"q.b."}],procedimento:[{numero:1,descrizione:"Metti una pentola di acqua salata sul fuoco per la pasta.",tempoCottura:5},{numero:2,descrizione:"Taglia il guanciale a listarelle e fallo rosolare in una padella fino a renderlo croccante.",tempoCottura:8},{numero:3,descrizione:"In una ciotola, sbatti i tuorli con il pecorino grattugiato e il pepe nero."},{numero:4,descrizione:"Cuoci gli spaghetti al dente, scolali e versali nella padella con il guanciale.",tempoCottura:9},{numero:5,descrizione:"Spegni il fuoco, aggiungi il composto di uova e mescola velocemente per creare una crema.",suggerimenti:"Non cuocere le uova! Devono rimanere cremose."}],tempoPreparazione:10,tempoCottura:20,tempoTotale:30,porzioni:4,valoriNutrizionali:{calorie:520,proteine:22,carboidrati:58,grassi:21},commenti:[],valutazioneMedia:4.8,numeroValutazioni:1247,numeroPreferiti:3421,dataCreazione:new Date("2024-01-01"),dataUltimaModifica:new Date("2024-01-01"),autore:"Chef Romano",tags:["pasta","carbonara","romano","tradizionale","guanciale"],visualizzazioni:15234,isPopolari:!0,isRicettaDelGiorno:!0,abbinamentoVini:[{nome:"Frascati Superiore",tipo:"bianco",regione:V.LAZIO,denominazione:"Frascati Superiore DOCG",perche:"Il Frascati bilancia perfettamente la ricchezza della carbonara con la sua freschezza e sapidità. La mineralità del vino pulisce il palato tra un boccone e l'altro.",temperaturaServizio:"10-12°C"},{nome:"Trebbiano d'Abruzzo",tipo:"bianco",regione:V.ABRUZZO,perche:"Vino fresco e sapido che contrasta la grassezza del guanciale mantenendo l'armonia con il pecorino.",temperaturaServizio:"10-12°C"}],consigliNonna:[{testo:"Il segreto della carbonara perfetta? SPEGNI IL FUOCO prima di aggiungere le uova! Altrimenti farai una frittata, non una crema.",categoria:"segreto"},{testo:"Il guanciale va tagliato a listarelle spesse almeno mezzo centimetro. Troppo sottile diventa secco e perde sapore!",categoria:"tecnica"},{testo:`Mia nonna diceva sempre: "La carbonara si fa con i TUORLI, chi mette l'albume non sa cucinare!" E aveva ragione.`,categoria:"ingrediente"},{testo:"Se la crema è troppo densa, aggiungi un mestolo di acqua di cottura della pasta. È il trucco dei romani veri!",categoria:"tecnica"}],storia:{origine:"La carbonara nasce a Roma negli anni '40. L'origine è dibattuta: alcuni dicono dai carbonai (da cui il nome), altri dai soldati americani che mischiavano bacon e uova con la pasta italiana.",curiosita:['La ricetta "ufficiale" prevede solo guanciale, ma storicamente potrebbe essere nata con il bacon americano durante la Seconda Guerra Mondiale','A Roma esiste una "guerra" culinaria: panna SI o panna NO? La risposta tradizionale è un netto NO!','Il 6 aprile si celebra il "Carbonara Day", festa internazionale dedicata a questo piatto'],variantiRegionali:"In alcune zone del Lazio si usa anche la pancetta, ma i puristi romani insistono: SOLO guanciale!"},stagioneMigliore:[nr.TUTTO_ANNO],costoTotaleStimato:8.5,occasioniSpeciali:[Pa.DOMENICA],badgeAssociati:[{id:"master_carbonara",nome:"Master della Carbonara",descrizione:"Hai preparato la carbonara perfetta senza fare la frittata!",icona:"🍝"}],skillsRichieste:["mantecare","timing","rosolare"],sostituzioniIngredienti:[{ingredienteOriginale:"Guanciale",sostituto:"Pancetta affumicata",motivo:'Se non trovi il guanciale, la pancetta affumicata è una valida alternativa. Non sarà "la vera carbonara romana" ma il risultato sarà comunque ottimo!',fattoreMoltiplicazione:1},{ingredienteOriginale:"Pecorino Romano",sostituto:"Parmigiano Reggiano",motivo:"Il Parmigiano è più dolce e meno sapido del Pecorino, ma funziona bene se non hai il Pecorino. Puoi anche fare un mix 50-50 dei due formaggi.",fattoreMoltiplicazione:1},{ingredienteOriginale:"Uova intere",sostituto:"Solo tuorli (4-5 tuorli)",motivo:"La ricetta tradizionale usa SOLO i tuorli! Se hai usato uova intere e vuoi migliorare, passa ai soli tuorli per una crema più ricca e vellutata.",fattoreMoltiplicazione:1.3},{ingredienteOriginale:"Spaghetti",sostituto:"Rigatoni o Mezze Maniche",motivo:"A Roma molti preferiscono i rigatoni per la carbonara: la crema entra dentro la pasta! Prova questa variante, è deliziosa.",fattoreMoltiplicazione:1}]},{id:"2",titolo:"Pizza Margherita",descrizione:"La regina delle pizze: semplice, perfetta, con pomodoro, mozzarella e basilico.",fotoUrl:"🍕",difficolta:we.MEDIA,tipo:Ne.PIZZE_FOCACCE,regione:V.CAMPANIA,filtriAlimentari:[Be.VEGETARIANO],ingredienti:[{nome:"Farina 00",quantita:500,unita:"g"},{nome:"Acqua tiepida",quantita:300,unita:"ml"},{nome:"Lievito di birra fresco",quantita:15,unita:"g"},{nome:"Sale",quantita:10,unita:"g"},{nome:"Olio extravergine",quantita:2,unita:"cucchiai"},{nome:"Pomodori pelati",quantita:400,unita:"g"},{nome:"Mozzarella",quantita:250,unita:"g"},{nome:"Basilico fresco",quantita:10,unita:"foglie"}],procedimento:[{numero:1,descrizione:"Sciogli il lievito nell'acqua tiepida. Impasta con farina, sale e olio fino ad ottenere un impasto liscio.",tempoCottura:15},{numero:2,descrizione:"Lascia lievitare l'impasto coperto per 2-3 ore fino al raddoppio.",tempoCottura:150},{numero:3,descrizione:"Stendi l'impasto in forma circolare, condisci con pomodoro schiacciato."},{numero:4,descrizione:"Aggiungi la mozzarella a pezzetti, un filo d'olio e inforna a 250°C per 12-15 minuti.",tempoCottura:13},{numero:5,descrizione:"Sforna e guarnisci con foglie di basilico fresco.",suggerimenti:"Il forno deve essere molto caldo, idealmente 300°C."}],tempoPreparazione:30,tempoCottura:180,tempoTotale:210,porzioni:4,valoriNutrizionali:{calorie:280,proteine:12,carboidrati:45,grassi:7},commenti:[],valutazioneMedia:4.9,numeroValutazioni:2134,numeroPreferiti:4521,dataCreazione:new Date("2024-01-02"),dataUltimaModifica:new Date("2024-01-02"),autore:"Pizzaiolo Napoletano",tags:["pizza","margherita","napoletana","lievitato"],visualizzazioni:18934,isPopolari:!0,abbinamentoVini:[{nome:"Falanghina del Sannio",tipo:"bianco",regione:V.CAMPANIA,denominazione:"Falanghina del Sannio DOC",perche:"La Falanghina è il vino perfetto per la pizza napoletana: fresco, sapido e con note agrumate che esaltano il pomodoro e la mozzarella senza sovrastarli.",temperaturaServizio:"10-12°C"},{nome:"Gragnano Rosso",tipo:"rosso",regione:V.CAMPANIA,denominazione:"Gragnano DOC",perche:"Un rosso leggero e leggermente frizzante, tipico della tradizione napoletana. L'abbinamento classico delle pizzerie storiche di Napoli!",temperaturaServizio:"14-16°C"}],consigliNonna:[{testo:"La vera pizza napoletana si fa con la mozzarella di bufala DOP! Ma attenzione: va strizzata bene altrimenti la pizza esce acquosa.",categoria:"ingrediente"},{testo:"Il segreto dell'impasto perfetto? L'acqua deve essere TIEPIDA, mai calda! Altrimenti uccidi il lievito e la pizza non lievita.",categoria:"tecnica"},{testo:"Mia nonna pizzaiola mi insegnò: l'impasto va steso a MANO, mai col mattarello! Il mattarello schiaccia le bolle d'aria che rendono il cornicione soffice.",categoria:"segreto"},{testo:"Il basilico va messo DOPO la cottura, non prima! Altrimenti brucia e diventa amaro.",categoria:"tecnica"}],storia:{origine:"La Pizza Margherita nasce a Napoli nel 1889. Il pizzaiolo Raffaele Esposito la creò in onore della Regina Margherita di Savoia, usando i colori della bandiera italiana: rosso (pomodoro), bianco (mozzarella), verde (basilico).",curiosita:["La storia della Regina Margherita potrebbe essere una leggenda marketing! Alcuni storici sostengono che la pizza con pomodoro e mozzarella esisteva già da decenni.","La vera Pizza Margherita napoletana è certificata dall'Associazione Verace Pizza Napoletana (AVPN) con regole rigorosissime: solo forno a legna a 485°C, cottura 60-90 secondi!","Nel 2017 l'Arte dei Pizzaiuoli Napoletani è stata dichiarata Patrimonio Immateriale dell'Umanità UNESCO"],variantiRegionali:'A Roma si fa la "pizza romana" con impasto più sottile e croccante. In Liguria usano il pesto al posto del basilico. Ma i napoletani dicono: "Solo a Napoli è vera pizza!"'},stagioneMigliore:[nr.TUTTO_ANNO],costoTotaleStimato:5.5,occasioniSpeciali:[Pa.DOMENICA,Pa.FESTA_COMPLEANNO],badgeAssociati:[{id:"pizzaiolo_esperto",nome:"Pizzaiolo Esperto",descrizione:"Hai preparato una Pizza Margherita degna di Napoli!",icona:"🍕"},{id:"maestro_lievitazione",nome:"Maestro della Lievitazione",descrizione:"Il tuo impasto è lievitato alla perfezione!",icona:"🫓"}],skillsRichieste:["impastare","lievitazione","stendere_impasto","gestione_forno"]},{id:"3",titolo:"Tiramisù",descrizione:"Il dolce italiano più famoso al mondo: savoiardi, caffè, mascarpone e cacao.",fotoUrl:"🍰",difficolta:we.FACILE,tipo:Ne.DOLCI,regione:V.VENETO,filtriAlimentari:[Be.VEGETARIANO],ingredienti:[{nome:"Savoiardi",quantita:300,unita:"g"},{nome:"Mascarpone",quantita:500,unita:"g"},{nome:"Uova fresche",quantita:4,unita:"pz"},{nome:"Zucchero",quantita:100,unita:"g"},{nome:"Caffè espresso",quantita:300,unita:"ml",note:"freddo"},{nome:"Cacao amaro",quantita:2,unita:"cucchiai"},{nome:"Marsala",quantita:2,unita:"cucchiai",note:"facoltativo"}],procedimento:[{numero:1,descrizione:"Separa i tuorli dagli albumi. Monta i tuorli con lo zucchero fino a ottenere una crema chiara."},{numero:2,descrizione:"Incorpora il mascarpone ai tuorli montati mescolando delicatamente."},{numero:3,descrizione:"Monta gli albumi a neve fermissima e incorporali al composto di mascarpone."},{numero:4,descrizione:"Immergi velocemente i savoiardi nel caffè e disponili in una pirofila.",suggerimenti:"Non inzuppare troppo i savoiardi o diventeranno mollissimi."},{numero:5,descrizione:"Copri con uno strato di crema al mascarpone. Ripeti gli strati. Spolverizza con cacao e lascia riposare in frigo per 4 ore.",tempoCottura:240}],tempoPreparazione:30,tempoCottura:240,tempoTotale:270,porzioni:8,valoriNutrizionali:{calorie:380,proteine:8,carboidrati:32,grassi:25},commenti:[],valutazioneMedia:4.9,numeroValutazioni:3421,numeroPreferiti:5632,dataCreazione:new Date("2024-01-03"),dataUltimaModifica:new Date("2024-01-03"),autore:"Pasticcere Veneto",tags:["tiramisù","dolce","mascarpone","caffè","freddo"],visualizzazioni:21453,isPopolari:!0,abbinamentoVini:[{nome:"Moscato d'Asti",tipo:"bianco",regione:V.PIEMONTE,denominazione:"Moscato d'Asti DOCG",perche:"Il Moscato dolce e leggermente frizzante è l'abbinamento perfetto per il tiramisù: la sua dolcezza aromatica bilancia il cacao amaro e esalta il mascarpone.",temperaturaServizio:"6-8°C"},{nome:"Recioto di Soave",tipo:"bianco",regione:V.VENETO,denominazione:"Recioto di Soave DOCG",perche:"Un vino dolce veneto che sposa perfettamente il dolce regionale. Le note mielate e di frutta secca completano l'esperienza del tiramisù.",temperaturaServizio:"10-12°C"},{nome:"Marsala Superiore",tipo:"rosso",regione:V.SICILIA,denominazione:"Marsala Superiore DOC",perche:"Se usi il Marsala nella ricetta, abbinalo anche al bicchiere! Un Marsala dolce crea un'armonia perfetta con il dolce.",temperaturaServizio:"12-14°C"}],consigliNonna:[{testo:"Il vero tiramisù si fa con le uova CRUDE! Ma usa solo uova freschissime e di qualità. Se hai dubbi, usa uova pastorizzate.",categoria:"ingrediente"},{testo:"Il segreto del caffè perfetto? Deve essere FREDDO e NON zuccherato! Altrimenti i savoiardi si sfaldano e il tiramisù diventa troppo dolce.",categoria:"tecnica"},{testo:`Mia nonna pasticcera diceva: "Un secondo nel caffè basta!" I savoiardi devono solo bagnarsi, non inzupparsi. Devono restare un po' croccanti dentro.`,categoria:"segreto"},{testo:"Il tiramisù va fatto la sera prima! Più riposa in frigo, più i sapori si amalgamano. Quello del giorno stesso è buono, quello del giorno dopo è DIVINO.",categoria:"conservazione"},{testo:"Il cacao in polvere va setacciato sulla superficie con un colino fine. E abbondante! Non essere tirchio col cacao, è quello che fa la differenza!",categoria:"tecnica"}],storia:{origine:"Il tiramisù nasce in Veneto negli anni '60-70, ma l'origine esatta è dibattuta. Treviso e Siena si contendono la paternità. La ricetta diventa famosa negli anni '80 conquistando il mondo.",curiosita:[`Il nome "Tiramisù" significa letteralmente "tirami su", riferito all'effetto energizzante del caffè e delle uova`,'La storia romantica vuole che sia stato inventato per "tirare su" i soldati feriti, ma è probabilmente una leggenda','Esiste una versione friulana chiamata "Tirimi-sù" che sostituisce il caffè con il vino bianco!','In Toscana rivendicano che il tiramisù derivi dal "dolce Duca di Siena", un dolce mediceo del 1600'],variantiRegionali:`Ogni regione ha la sua versione: in Piemonte aggiungono nocciole, in Sicilia pistacchi, in Friuli usano grappa al posto del Marsala. Ma i veneti dicono: "L'originale è quello col caffè!"`},stagioneMigliore:[nr.TUTTO_ANNO],costoTotaleStimato:12,occasioniSpeciali:[Pa.NATALE,Pa.CAPODANNO,Pa.DOMENICA,Pa.FESTA_COMPLEANNO],badgeAssociati:[{id:"maestro_tiramisu",nome:"Maestro del Tiramisù",descrizione:"Hai preparato un tiramisù da pasticceria!",icona:"🍰"},{id:"montatore_perfetto",nome:"Montatore Perfetto",descrizione:"I tuoi albumi a neve sono perfetti!",icona:"🥚"}],skillsRichieste:["montare_uova","assemblaggio_dolci","gestione_temperatura"]},{id:"4",titolo:"Risotto alla Milanese",descrizione:"Il risotto giallo mantecato, profumato di zafferano e burro.",fotoUrl:"🍚",difficolta:we.MEDIA,tipo:Ne.PRIMI,regione:V.LOMBARDIA,filtriAlimentari:[Be.VEGETARIANO,Be.SENZA_GLUTINE],ingredienti:[{nome:"Riso Carnaroli",quantita:320,unita:"g"},{nome:"Brodo vegetale",quantita:1,unita:"l"},{nome:"Cipolla",quantita:1,unita:"pz",note:"piccola"},{nome:"Vino bianco",quantita:100,unita:"ml"},{nome:"Zafferano",quantita:1,unita:"bustina"},{nome:"Burro",quantita:80,unita:"g"},{nome:"Parmigiano Reggiano",quantita:60,unita:"g",note:"grattugiato"},{nome:"Sale e pepe",quantita:1,unita:"q.b."}],procedimento:[{numero:1,descrizione:"Trita finemente la cipolla e falla soffriggere nel burro fino a renderla trasparente.",tempoCottura:5},{numero:2,descrizione:"Aggiungi il riso e tostalo per 2 minuti mescolando.",tempoCottura:2},{numero:3,descrizione:"Sfuma con il vino bianco e lascia evaporare.",tempoCottura:2},{numero:4,descrizione:"Aggiungi il brodo poco alla volta, mescolando continuamente. Dopo 10 minuti aggiungi lo zafferano.",tempoCottura:18,suggerimenti:"Il risotto deve essere cremoso ma i chicchi al dente."},{numero:5,descrizione:"A fine cottura, manteca con burro e parmigiano fuori dal fuoco."}],tempoPreparazione:10,tempoCottura:30,tempoTotale:40,porzioni:4,valoriNutrizionali:{calorie:420,proteine:11,carboidrati:62,grassi:14},commenti:[],valutazioneMedia:4.7,numeroValutazioni:892,numeroPreferiti:2341,dataCreazione:new Date("2024-01-04"),dataUltimaModifica:new Date("2024-01-04"),autore:"Chef Milanese",tags:["risotto","zafferano","milanese","mantecato"],visualizzazioni:9823,isPopolari:!0},{id:"5",titolo:"Lasagne alla Bolognese",descrizione:"Lasagne al forno con ragù alla bolognese e besciamella.",fotoUrl:"🥘",difficolta:we.DIFFICILE,tipo:Ne.PRIMI,regione:V.EMILIA_ROMAGNA,filtriAlimentari:[],ingredienti:[{nome:"Sfoglia fresca",quantita:500,unita:"g"},{nome:"Carne macinata",quantita:500,unita:"g",note:"mista"},{nome:"Passata di pomodoro",quantita:500,unita:"g"},{nome:"Latte",quantita:500,unita:"ml"},{nome:"Farina",quantita:50,unita:"g"},{nome:"Burro",quantita:100,unita:"g"},{nome:"Parmigiano",quantita:150,unita:"g"},{nome:"Cipolla, carota, sedano",quantita:1,unita:"trito"},{nome:"Vino rosso",quantita:100,unita:"ml"}],procedimento:[{numero:1,descrizione:"Prepara il ragù: soffriggi il trito, aggiungi la carne, sfuma col vino e cuoci con pomodoro per 2 ore.",tempoCottura:120},{numero:2,descrizione:"Prepara la besciamella: sciogli il burro, aggiungi la farina, poi il latte caldo mescolando.",tempoCottura:10},{numero:3,descrizione:"In una teglia, alterna strati di sfoglia, ragù, besciamella e parmigiano."},{numero:4,descrizione:"Termina con besciamella e parmigiano. Inforna a 180°C per 30 minuti.",tempoCottura:30}],tempoPreparazione:40,tempoCottura:180,tempoTotale:220,porzioni:6,valoriNutrizionali:{calorie:580,proteine:28,carboidrati:42,grassi:32},commenti:[],valutazioneMedia:4.8,numeroValutazioni:1543,numeroPreferiti:3892,dataCreazione:new Date("2024-01-05"),dataUltimaModifica:new Date("2024-01-05"),autore:"Nonna Emiliana",tags:["lasagne","bolognese","forno","ragù"],visualizzazioni:13452,isPopolari:!0},{id:"6",titolo:"Panna Cotta",descrizione:"Dessert al cucchiaio delicato e cremoso, servito con coulis ai frutti di bosco.",fotoUrl:"🍮",difficolta:we.FACILE,tipo:Ne.DOLCI,regione:V.PIEMONTE,filtriAlimentari:[Be.VEGETARIANO,Be.SENZA_GLUTINE],ingredienti:[{nome:"Panna fresca",quantita:500,unita:"ml"},{nome:"Zucchero",quantita:80,unita:"g"},{nome:"Colla di pesce",quantita:8,unita:"g"},{nome:"Vaniglia",quantita:1,unita:"bacca"},{nome:"Frutti di bosco",quantita:200,unita:"g",note:"per coulis"}],procedimento:[{numero:1,descrizione:"Ammolla la colla di pesce in acqua fredda per 10 minuti."},{numero:2,descrizione:"Scalda la panna con zucchero e vaniglia senza farla bollire.",tempoCottura:5},{numero:3,descrizione:"Aggiungi la colla di pesce strizzata e mescola fino a completo scioglimento."},{numero:4,descrizione:"Versa negli stampini e lascia rassodare in frigo per almeno 4 ore.",tempoCottura:240},{numero:5,descrizione:"Servi sformando su un piatto e guarnendo con coulis ai frutti di bosco.",suggerimenti:"Per sformare, immergi velocemente lo stampino in acqua calda."}],tempoPreparazione:15,tempoCottura:245,tempoTotale:260,porzioni:6,valoriNutrizionali:{calorie:320,proteine:3,carboidrati:22,grassi:24},commenti:[],valutazioneMedia:4.6,numeroValutazioni:674,numeroPreferiti:1823,dataCreazione:new Date("2024-01-06"),dataUltimaModifica:new Date("2024-01-06"),autore:"Pasticcere Piemontese",tags:["panna cotta","dolce","freddo","cremoso"],visualizzazioni:7234},{id:"7",titolo:"Spaghetti alle Vongole",descrizione:"Primo piatto di mare profumato, con vongole fresche, aglio e prezzemolo.",fotoUrl:"🍝",difficolta:we.MEDIA,tipo:Ne.PRIMI,regione:V.CAMPANIA,filtriAlimentari:[Be.SENZA_LATTOSIO],ingredienti:[{nome:"Spaghetti",quantita:320,unita:"g"},{nome:"Vongole veraci",quantita:1,unita:"kg"},{nome:"Aglio",quantita:3,unita:"spicchi"},{nome:"Prezzemolo fresco",quantita:1,unita:"mazzo"},{nome:"Vino bianco",quantita:100,unita:"ml"},{nome:"Olio extravergine",quantita:4,unita:"cucchiai"},{nome:"Peperoncino",quantita:1,unita:"pz",note:"facoltativo"}],procedimento:[{numero:1,descrizione:"Lascia spurgare le vongole in acqua salata per 2 ore.",tempoCottura:120},{numero:2,descrizione:"In una padella capiente, rosola l'aglio nell'olio. Aggiungi le vongole e il vino.",tempoCottura:3},{numero:3,descrizione:"Copri e fai aprire le vongole a fuoco alto. Togli quelle che non si aprono.",tempoCottura:5},{numero:4,descrizione:"Cuoci gli spaghetti al dente, scolali e versali nella padella con le vongole.",tempoCottura:9},{numero:5,descrizione:"Salta tutto insieme, aggiungi il prezzemolo tritato e servi subito.",suggerimenti:"Non aggiungere formaggio! È un piatto di mare."}],tempoPreparazione:130,tempoCottura:20,tempoTotale:150,porzioni:4,valoriNutrizionali:{calorie:380,proteine:18,carboidrati:58,grassi:8},commenti:[],valutazioneMedia:4.7,numeroValutazioni:1123,numeroPreferiti:2567,dataCreazione:new Date("2024-01-07"),dataUltimaModifica:new Date("2024-01-07"),autore:"Chef di Mare",tags:["spaghetti","vongole","mare","napoletano"],visualizzazioni:11234},{id:"8",titolo:"Cacio e Pepe",descrizione:"La semplicità romana: solo pecorino, pepe e pasta. Perfezione pura.",fotoUrl:"🍝",difficolta:we.MEDIA,tipo:Ne.PRIMI,regione:V.LAZIO,filtriAlimentari:[Be.VEGETARIANO],ingredienti:[{nome:"Spaghetti",quantita:320,unita:"g"},{nome:"Pecorino Romano",quantita:120,unita:"g",note:"grattugiato"},{nome:"Pepe nero",quantita:2,unita:"cucchiaini",note:"macinato fresco"},{nome:"Sale",quantita:1,unita:"q.b."}],procedimento:[{numero:1,descrizione:"Tosta il pepe in una padella per un minuto per liberare gli aromi.",tempoCottura:1},{numero:2,descrizione:"Cuoci gli spaghetti in abbondante acqua salata fino a 2 minuti prima del termine cottura.",tempoCottura:7},{numero:3,descrizione:"In una ciotola, mescola il pecorino con un po' di acqua di cottura per creare una crema."},{numero:4,descrizione:"Scola la pasta e versala nella padella con il pepe. Aggiungi la crema di pecorino."},{numero:5,descrizione:"Manteca fuori dal fuoco aggiungendo acqua di cottura se necessario.",suggerimenti:"La temperatura è fondamentale: non troppo calda o il pecorino si impasta!"}],tempoPreparazione:5,tempoCottura:12,tempoTotale:17,porzioni:4,valoriNutrizionali:{calorie:450,proteine:18,carboidrati:58,grassi:16},commenti:[],valutazioneMedia:4.6,numeroValutazioni:876,numeroPreferiti:2134,dataCreazione:new Date("2024-01-08"),dataUltimaModifica:new Date("2024-01-08"),autore:"Trattoria Romana",tags:["cacio e pepe","pecorino","romano","semplice"],visualizzazioni:8934},{id:"9",titolo:"Parmigiana di Melanzane",descrizione:"Melanzane fritte con pomodoro, mozzarella e parmigiano al forno.",fotoUrl:"🍆",difficolta:we.MEDIA,tipo:Ne.SECONDI,regione:V.SICILIA,filtriAlimentari:[Be.VEGETARIANO],ingredienti:[{nome:"Melanzane",quantita:1,unita:"kg"},{nome:"Passata di pomodoro",quantita:700,unita:"g"},{nome:"Mozzarella",quantita:400,unita:"g"},{nome:"Parmigiano",quantita:100,unita:"g"},{nome:"Basilico",quantita:20,unita:"foglie"},{nome:"Aglio",quantita:2,unita:"spicchi"},{nome:"Olio per friggere",quantita:1,unita:"l"}],procedimento:[{numero:1,descrizione:"Taglia le melanzane a fette di 0.5cm, salale e lasciale spurgare per 30 minuti.",tempoCottura:30},{numero:2,descrizione:"Prepara il sugo: soffriggi l'aglio, aggiungi pomodoro e basilico. Cuoci 20 minuti.",tempoCottura:20},{numero:3,descrizione:"Asciuga le melanzane e friggile in olio bollente fino a doratura.",tempoCottura:15},{numero:4,descrizione:"In una teglia, alterna strati di melanzane, sugo, mozzarella e parmigiano."},{numero:5,descrizione:"Inforna a 180°C per 30 minuti fino a gratinatura dorata.",tempoCottura:30}],tempoPreparazione:45,tempoCottura:95,tempoTotale:140,porzioni:6,valoriNutrizionali:{calorie:380,proteine:18,carboidrati:22,grassi:24},commenti:[],valutazioneMedia:4.8,numeroValutazioni:1432,numeroPreferiti:3214,dataCreazione:new Date("2024-01-09"),dataUltimaModifica:new Date("2024-01-09"),autore:"Nonna Siciliana",tags:["parmigiana","melanzane","forno","sicilia"],visualizzazioni:12453},{id:"10",titolo:"Ossobuco alla Milanese",descrizione:"Stinco di vitello brasato lentamente, servito con gremolata e risotto giallo.",fotoUrl:"🍖",difficolta:we.DIFFICILE,tipo:Ne.SECONDI,regione:V.LOMBARDIA,filtriAlimentari:[Be.SENZA_GLUTINE,Be.SENZA_LATTOSIO],ingredienti:[{nome:"Ossobuco di vitello",quantita:4,unita:"pz",note:"alti 3-4cm"},{nome:"Farina",quantita:50,unita:"g"},{nome:"Burro",quantita:50,unita:"g"},{nome:"Vino bianco",quantita:200,unita:"ml"},{nome:"Brodo di carne",quantita:500,unita:"ml"},{nome:"Cipolla, carota, sedano",quantita:1,unita:"trito"},{nome:"Pomodoro",quantita:200,unita:"g",note:"pelati"},{nome:"Prezzemolo, aglio, scorza limone",quantita:1,unita:"misto",note:"per gremolata"}],procedimento:[{numero:1,descrizione:"Lega gli ossibuchi con spago da cucina, infarinali leggermente."},{numero:2,descrizione:"Rosola gli ossibuchi nel burro su tutti i lati fino a doratura.",tempoCottura:10},{numero:3,descrizione:"Sfuma col vino, aggiungi il trito di verdure, i pomodori e il brodo.",tempoCottura:5},{numero:4,descrizione:"Copri e cuoci a fuoco dolce per 2 ore, rigirando a metà cottura.",tempoCottura:120,suggerimenti:"La carne deve staccarsi dall'osso facilmente."},{numero:5,descrizione:"Prepara la gremolata tritando prezzemolo, aglio e scorza di limone. Cospargi prima di servire."}],tempoPreparazione:20,tempoCottura:140,tempoTotale:160,porzioni:4,valoriNutrizionali:{calorie:520,proteine:42,carboidrati:12,grassi:32},commenti:[],valutazioneMedia:4.9,numeroValutazioni:543,numeroPreferiti:1432,dataCreazione:new Date("2024-01-10"),dataUltimaModifica:new Date("2024-01-10"),autore:"Chef Lombardo",tags:["ossobuco","milanese","brasato","vitello"],visualizzazioni:6754},{id:"11",titolo:"Caprese",descrizione:"Insalata fresca con mozzarella di bufala, pomodori e basilico.",fotoUrl:"🥗",difficolta:we.FACILE,tipo:Ne.ANTIPASTI,regione:V.CAMPANIA,filtriAlimentari:[Be.VEGETARIANO,Be.SENZA_GLUTINE],ingredienti:[{nome:"Mozzarella di bufala",quantita:250,unita:"g"},{nome:"Pomodori cuore di bue",quantita:3,unita:"pz"},{nome:"Basilico fresco",quantita:15,unita:"foglie"},{nome:"Olio extravergine",quantita:4,unita:"cucchiai"},{nome:"Sale",quantita:1,unita:"q.b."},{nome:"Origano",quantita:1,unita:"pizzico",note:"facoltativo"}],procedimento:[{numero:1,descrizione:"Taglia i pomodori a fette spesse circa 1 cm."},{numero:2,descrizione:"Taglia la mozzarella a fette della stessa dimensione."},{numero:3,descrizione:"Disponi nel piatto alternando fette di pomodoro e mozzarella."},{numero:4,descrizione:"Decora con foglie di basilico fresco."},{numero:5,descrizione:"Condisci con olio extravergine, sale e una spolverata di origano.",suggerimenti:"Usa ingredienti di qualità: la semplicità esalta ogni sapore."}],tempoPreparazione:10,tempoCottura:0,tempoTotale:10,porzioni:4,valoriNutrizionali:{calorie:220,proteine:12,carboidrati:6,grassi:17},commenti:[],valutazioneMedia:4.5,numeroValutazioni:432,numeroPreferiti:987,dataCreazione:new Date("2024-01-11"),dataUltimaModifica:new Date("2024-01-11"),autore:"Trattoria Campana",tags:["caprese","insalata","mozzarella","fresco","estivo"],visualizzazioni:5234},{id:"12",titolo:"Pasta al Pesto Genovese",descrizione:"Trofie con il famoso pesto alla genovese: basilico, pinoli, aglio e parmigiano.",fotoUrl:"🍝",difficolta:we.FACILE,tipo:Ne.PRIMI,regione:V.LIGURIA,filtriAlimentari:[Be.VEGETARIANO],ingredienti:[{nome:"Trofie o trenette",quantita:320,unita:"g"},{nome:"Basilico genovese",quantita:50,unita:"g",note:"foglie fresche"},{nome:"Pinoli",quantita:30,unita:"g"},{nome:"Aglio",quantita:1,unita:"spicchio"},{nome:"Parmigiano Reggiano",quantita:50,unita:"g"},{nome:"Pecorino sardo",quantita:20,unita:"g"},{nome:"Olio extravergine ligure",quantita:100,unita:"ml"},{nome:"Sale grosso",quantita:1,unita:"pizzico"},{nome:"Patate",quantita:150,unita:"g",note:"facoltativo"},{nome:"Fagiolini",quantita:100,unita:"g",note:"facoltativo"}],procedimento:[{numero:1,descrizione:"Lava e asciuga delicatamente le foglie di basilico."},{numero:2,descrizione:"Nel mortaio (o frullatore), pesta basilico, aglio, pinoli e sale fino a ottenere una crema."},{numero:3,descrizione:"Aggiungi i formaggi grattugiati e incorpora l'olio a filo continuando a mescolare."},{numero:4,descrizione:"Cuoci la pasta con patate a cubetti e fagiolini. Scola al dente.",tempoCottura:11},{numero:5,descrizione:"Diluisci il pesto con un po' di acqua di cottura e condisci la pasta.",suggerimenti:"Non riscaldare mai il pesto: perderebbe il suo colore verde brillante!"}],tempoPreparazione:15,tempoCottura:12,tempoTotale:27,porzioni:4,valoriNutrizionali:{calorie:480,proteine:14,carboidrati:54,grassi:24},commenti:[],valutazioneMedia:4.7,numeroValutazioni:1234,numeroPreferiti:2876,dataCreazione:new Date("2024-01-12"),dataUltimaModifica:new Date("2024-01-12"),autore:"Nonna Ligure",tags:["pesto","genovese","basilico","liguria","mortaio"],visualizzazioni:10234},{id:"13",titolo:"Arancini Siciliani",descrizione:"Palle di riso ripiene, impanate e fritte, con ragù e piselli.",fotoUrl:"🍙",difficolta:we.MEDIA,tipo:Ne.ANTIPASTI,regione:V.SICILIA,filtriAlimentari:[],ingredienti:[{nome:"Riso per risotto",quantita:500,unita:"g"},{nome:"Zafferano",quantita:1,unita:"bustina"},{nome:"Carne macinata",quantita:300,unita:"g"},{nome:"Piselli",quantita:150,unita:"g"},{nome:"Passata di pomodoro",quantita:200,unita:"g"},{nome:"Mozzarella",quantita:150,unita:"g",note:"a cubetti"},{nome:"Pangrattato",quantita:200,unita:"g"},{nome:"Uova",quantita:3,unita:"pz"},{nome:"Olio per friggere",quantita:1,unita:"l"}],procedimento:[{numero:1,descrizione:"Cuoci il riso con lo zafferano, lascia raffreddare e aggiungi un uovo.",tempoCottura:18},{numero:2,descrizione:"Prepara il ragù con carne macinata, pomodoro e piselli.",tempoCottura:30},{numero:3,descrizione:"Forma delle palle con il riso, creando un buco al centro. Riempi con ragù e mozzarella."},{numero:4,descrizione:"Passa gli arancini nell'uovo sbattuto e poi nel pangrattato."},{numero:5,descrizione:"Friggi in olio bollente fino a doratura completa.",tempoCottura:8,suggerimenti:"Devono essere dorati uniformemente su tutta la superficie."}],tempoPreparazione:40,tempoCottura:60,tempoTotale:100,porzioni:8,valoriNutrizionali:{calorie:420,proteine:16,carboidrati:48,grassi:18},commenti:[],valutazioneMedia:4.8,numeroValutazioni:987,numeroPreferiti:2345,dataCreazione:new Date("2024-01-13"),dataUltimaModifica:new Date("2024-01-13"),autore:"Street Food Siciliano",tags:["arancini","sicilia","fritto","street food","riso"],visualizzazioni:9876},{id:"14",titolo:"Amatriciana",descrizione:"Pasta con guanciale, pomodoro e pecorino. Un classico laziale.",fotoUrl:"🍝",difficolta:we.FACILE,tipo:Ne.PRIMI,regione:V.LAZIO,filtriAlimentari:[],ingredienti:[{nome:"Bucatini o spaghetti",quantita:320,unita:"g"},{nome:"Guanciale",quantita:150,unita:"g"},{nome:"Pomodori pelati",quantita:400,unita:"g"},{nome:"Pecorino Romano",quantita:80,unita:"g",note:"grattugiato"},{nome:"Vino bianco",quantita:50,unita:"ml"},{nome:"Peperoncino",quantita:1,unita:"pz"},{nome:"Sale",quantita:1,unita:"q.b."}],procedimento:[{numero:1,descrizione:"Taglia il guanciale a listarelle e fallo rosolare fino a renderlo croccante.",tempoCottura:8},{numero:2,descrizione:"Sfuma con il vino bianco e lascia evaporare.",tempoCottura:2},{numero:3,descrizione:"Aggiungi i pomodori pelati schiacciati e il peperoncino. Cuoci 15 minuti.",tempoCottura:15},{numero:4,descrizione:"Cuoci la pasta al dente, scolala e versala nel sugo.",tempoCottura:11},{numero:5,descrizione:"Manteca con abbondante pecorino e servi immediatamente.",suggerimenti:"L'amatriciana originale NON prevede aglio e cipolla!"}],tempoPreparazione:10,tempoCottura:36,tempoTotale:46,porzioni:4,valoriNutrizionali:{calorie:520,proteine:20,carboidrati:58,grassi:22},commenti:[],valutazioneMedia:4.7,numeroValutazioni:765,numeroPreferiti:1987,dataCreazione:new Date("2024-01-14"),dataUltimaModifica:new Date("2024-01-14"),autore:"Trattoria Amatriciana",tags:["amatriciana","guanciale","lazio","pomodoro"],visualizzazioni:8234},{id:"15",titolo:"Focaccia Genovese",descrizione:"Focaccia soffice e sottile, condita con olio extravergine e sale grosso.",fotoUrl:"🥖",difficolta:we.MEDIA,tipo:Ne.PIZZE_FOCACCE,regione:V.LIGURIA,filtriAlimentari:[Be.VEGANO],ingredienti:[{nome:"Farina 00",quantita:500,unita:"g"},{nome:"Acqua",quantita:300,unita:"ml"},{nome:"Lievito di birra",quantita:12,unita:"g"},{nome:"Olio extravergine ligure",quantita:80,unita:"ml"},{nome:"Sale fino",quantita:10,unita:"g"},{nome:"Sale grosso",quantita:1,unita:"q.b.",note:"per superficie"}],procedimento:[{numero:1,descrizione:"Sciogli il lievito in acqua tiepida. Impasta con farina, sale e metà dell'olio.",tempoCottura:10},{numero:2,descrizione:"Lascia lievitare coperto per 2 ore fino al raddoppio.",tempoCottura:120},{numero:3,descrizione:"Stendi l'impasto in una teglia unta, lascia riposare 30 minuti.",tempoCottura:30},{numero:4,descrizione:"Fai i classici buchi con le dita, irrora con olio e cospargi di sale grosso."},{numero:5,descrizione:"Inforna a 220°C per 15-18 minuti fino a doratura.",tempoCottura:17,suggerimenti:"Deve essere dorata sopra ma rimanere morbida all'interno."}],tempoPreparazione:20,tempoCottura:177,tempoTotale:197,porzioni:8,valoriNutrizionali:{calorie:280,proteine:6,carboidrati:42,grassi:10},commenti:[],valutazioneMedia:4.6,numeroValutazioni:543,numeroPreferiti:1432,dataCreazione:new Date("2024-01-15"),dataUltimaModifica:new Date("2024-01-15"),autore:"Fornaio Ligure",tags:["focaccia","genovese","lievitato","liguria"],visualizzazioni:7123},{id:"16",titolo:"Cannoli Siciliani",descrizione:"Croccante cialda fritta ripiena di ricotta dolce con gocce di cioccolato.",fotoUrl:"🥐",difficolta:we.DIFFICILE,tipo:Ne.DOLCI,regione:V.SICILIA,filtriAlimentari:[Be.VEGETARIANO],ingredienti:[{nome:"Farina 00",quantita:300,unita:"g"},{nome:"Zucchero",quantita:30,unita:"g"},{nome:"Burro",quantita:30,unita:"g"},{nome:"Marsala",quantita:50,unita:"ml"},{nome:"Ricotta di pecora",quantita:500,unita:"g"},{nome:"Zucchero a velo",quantita:150,unita:"g"},{nome:"Gocce di cioccolato",quantita:100,unita:"g"},{nome:"Scorza d'arancia candita",quantita:50,unita:"g",note:"a pezzetti"},{nome:"Pistacchi tritati",quantita:50,unita:"g",note:"per decorare"}],procedimento:[{numero:1,descrizione:"Prepara la pasta: impasta farina, zucchero, burro e marsala. Lascia riposare 30 minuti.",tempoCottura:30},{numero:2,descrizione:"Stendi la pasta sottile, ritaglia cerchi di 10cm e avvolgili sui cilindri metallici."},{numero:3,descrizione:"Friggi le cialde in olio bollente fino a doratura. Sgocciola e lascia raffreddare.",tempoCottura:3},{numero:4,descrizione:"Setaccia la ricotta, mescolala con zucchero a velo, gocce di cioccolato e canditi."},{numero:5,descrizione:"Riempi i cannoli con la crema e decora le estremità con pistacchi.",suggerimenti:"Riempi i cannoli solo al momento di servire per mantenerli croccanti!"}],tempoPreparazione:45,tempoCottura:40,tempoTotale:85,porzioni:12,valoriNutrizionali:{calorie:380,proteine:10,carboidrati:42,grassi:19},commenti:[],valutazioneMedia:4.9,numeroValutazioni:1876,numeroPreferiti:4321,dataCreazione:new Date("2024-01-16"),dataUltimaModifica:new Date("2024-01-16"),autore:"Pasticceria Siciliana",tags:["cannoli","sicilia","ricotta","fritto","dolce"],visualizzazioni:16234},{id:"17",titolo:"Saltimbocca alla Romana",descrizione:"Fettine di vitello con prosciutto crudo e salvia, saltate nel burro.",fotoUrl:"🥩",difficolta:we.FACILE,tipo:Ne.SECONDI,regione:V.LAZIO,filtriAlimentari:[Be.SENZA_GLUTINE,Be.SENZA_LATTOSIO],ingredienti:[{nome:"Fettine di vitello",quantita:8,unita:"pz",note:"sottili"},{nome:"Prosciutto crudo",quantita:8,unita:"fette"},{nome:"Salvia fresca",quantita:16,unita:"foglie"},{nome:"Burro",quantita:60,unita:"g"},{nome:"Vino bianco",quantita:100,unita:"ml"},{nome:"Farina",quantita:30,unita:"g"},{nome:"Sale e pepe",quantita:1,unita:"q.b."}],procedimento:[{numero:1,descrizione:"Batti leggermente le fettine di carne per renderle più sottili."},{numero:2,descrizione:"Su ogni fettina posa una fetta di prosciutto e 2 foglie di salvia. Ferma con uno stuzzicadenti."},{numero:3,descrizione:"Infarinali leggermente sul lato senza prosciutto."},{numero:4,descrizione:"Sciogli il burro in padella e cuoci i saltimbocca per 2-3 minuti per lato.",tempoCottura:6},{numero:5,descrizione:"Sfuma con vino bianco e lascia restringere il sugo. Servi subito.",tempoCottura:2,suggerimenti:"Cottura rapida: la carne deve rimanere tenera!"}],tempoPreparazione:15,tempoCottura:10,tempoTotale:25,porzioni:4,valoriNutrizionali:{calorie:320,proteine:32,carboidrati:4,grassi:18},commenti:[],valutazioneMedia:4.6,numeroValutazioni:432,numeroPreferiti:1234,dataCreazione:new Date("2024-01-17"),dataUltimaModifica:new Date("2024-01-17"),autore:"Trattoria Romana",tags:["saltimbocca","vitello","romano","salvia","veloce"],visualizzazioni:5432},{id:"18",titolo:"Caponata Siciliana",descrizione:"Contorno agrodolce di melanzane con pomodoro, olive e capperi.",fotoUrl:"🍆",difficolta:we.MEDIA,tipo:Ne.CONTORNI,regione:V.SICILIA,filtriAlimentari:[Be.VEGANO,Be.SENZA_GLUTINE],ingredienti:[{nome:"Melanzane",quantita:800,unita:"g"},{nome:"Pomodori pelati",quantita:400,unita:"g"},{nome:"Sedano",quantita:200,unita:"g"},{nome:"Cipolla",quantita:1,unita:"pz"},{nome:"Olive verdi",quantita:100,unita:"g"},{nome:"Capperi sotto sale",quantita:50,unita:"g"},{nome:"Aceto di vino",quantita:50,unita:"ml"},{nome:"Zucchero",quantita:30,unita:"g"},{nome:"Olio extravergine",quantita:100,unita:"ml"},{nome:"Pinoli",quantita:30,unita:"g"}],procedimento:[{numero:1,descrizione:"Taglia le melanzane a cubetti e friggile in olio. Metti da parte.",tempoCottura:15},{numero:2,descrizione:"Sbollenta il sedano tagliato a pezzi per 5 minuti. Soffriggi la cipolla.",tempoCottura:10},{numero:3,descrizione:"Aggiungi pomodori, olive, capperi e pinoli. Cuoci 10 minuti.",tempoCottura:10},{numero:4,descrizione:"Unisci le melanzane e il sedano. Aggiungi aceto e zucchero per il sapore agrodolce."},{numero:5,descrizione:"Cuoci a fuoco dolce per 15 minuti. Lascia raffreddare prima di servire.",tempoCottura:15,suggerimenti:"La caponata è ancora più buona il giorno dopo!"}],tempoPreparazione:25,tempoCottura:50,tempoTotale:75,porzioni:6,valoriNutrizionali:{calorie:220,proteine:3,carboidrati:18,grassi:16},commenti:[],valutazioneMedia:4.5,numeroValutazioni:321,numeroPreferiti:876,dataCreazione:new Date("2024-01-18"),dataUltimaModifica:new Date("2024-01-18"),autore:"Cucina Siciliana",tags:["caponata","sicilia","melanzane","agrodolce","contorno"],visualizzazioni:4321},{id:"19",titolo:"Gelato alla Crema",descrizione:"Gelato artigianale cremoso fatto in casa con latte, panna e uova.",fotoUrl:"🍨",difficolta:we.MEDIA,tipo:Ne.DOLCI,regione:V.EMILIA_ROMAGNA,filtriAlimentari:[Be.VEGETARIANO,Be.SENZA_GLUTINE],ingredienti:[{nome:"Latte intero",quantita:500,unita:"ml"},{nome:"Panna fresca",quantita:250,unita:"ml"},{nome:"Tuorli d'uovo",quantita:6,unita:"pz"},{nome:"Zucchero",quantita:150,unita:"g"},{nome:"Vaniglia",quantita:1,unita:"bacca"}],procedimento:[{numero:1,descrizione:"Scalda latte e panna con la vaniglia fino a 80°C senza bollire.",tempoCottura:10},{numero:2,descrizione:"Sbatti i tuorli con lo zucchero fino a ottenere un composto chiaro e spumoso."},{numero:3,descrizione:"Versa il latte caldo sui tuorli mescolando continuamente."},{numero:4,descrizione:"Riporta sul fuoco dolce e cuoci mescolando fino a 85°C (crema inglese).",tempoCottura:8,suggerimenti:"Non superare 85°C o le uova cuoceranno!"},{numero:5,descrizione:"Lascia raffreddare completamente, poi versa nella gelatiera e manteca per 30-40 minuti.",tempoCottura:35}],tempoPreparazione:20,tempoCottura:53,tempoTotale:73,porzioni:8,valoriNutrizionali:{calorie:280,proteine:6,carboidrati:24,grassi:18},commenti:[],valutazioneMedia:4.8,numeroValutazioni:765,numeroPreferiti:1987,dataCreazione:new Date("2024-01-19"),dataUltimaModifica:new Date("2024-01-19"),autore:"Gelateria Artigianale",tags:["gelato","crema","artigianale","dolce","freddo"],visualizzazioni:8765},{id:"20",titolo:"Polpette al Sugo",descrizione:"Polpette di carne morbide cotte nel sugo di pomodoro.",fotoUrl:"🍝",difficolta:we.FACILE,tipo:Ne.SECONDI,regione:V.CAMPANIA,filtriAlimentari:[],ingredienti:[{nome:"Carne macinata",quantita:500,unita:"g",note:"mista"},{nome:"Pane raffermo",quantita:100,unita:"g"},{nome:"Latte",quantita:100,unita:"ml"},{nome:"Uova",quantita:2,unita:"pz"},{nome:"Parmigiano",quantita:50,unita:"g"},{nome:"Prezzemolo",quantita:1,unita:"mazzo"},{nome:"Aglio",quantita:1,unita:"spicchio"},{nome:"Passata di pomodoro",quantita:700,unita:"g"},{nome:"Basilico",quantita:10,unita:"foglie"}],procedimento:[{numero:1,descrizione:"Ammolla il pane nel latte. Mescola carne, pane strizzato, uova, parmigiano, prezzemolo e aglio."},{numero:2,descrizione:"Forma delle polpette della dimensione di una noce e passale nella farina."},{numero:3,descrizione:"Rosola le polpette in padella con olio fino a doratura.",tempoCottura:8},{numero:4,descrizione:"Aggiungi la passata di pomodoro e il basilico. Sala e cuoci a fuoco dolce per 30 minuti.",tempoCottura:30},{numero:5,descrizione:"Servi con pasta o pane per fare la scarpetta nel sugo!",suggerimenti:"Le polpette devono essere morbide: non stringerle troppo!"}],tempoPreparazione:25,tempoCottura:40,tempoTotale:65,porzioni:4,valoriNutrizionali:{calorie:420,proteine:32,carboidrati:22,grassi:22},commenti:[],valutazioneMedia:4.7,numeroValutazioni:654,numeroPreferiti:1765,dataCreazione:new Date("2024-01-20"),dataUltimaModifica:new Date("2024-01-20"),autore:"Cucina della Nonna",tags:["polpette","sugo","carne","tradizionale"],visualizzazioni:7654}],Gp=n=>Nt.find(r=>r.id===n),i3=(n=6)=>Nt.filter(r=>r.isPopolari).sort((r,u)=>u.numeroPreferiti-r.numeroPreferiti).slice(0,n),n3=()=>Nt.find(n=>n.isRicettaDelGiorno),$p=(n,r,u)=>{const c=u/r;return n.map(d=>({...d,quantita:Math.round(d.quantita*c*100)/100}))},ti=n=>{if(n<60)return`${n} min`;const r=Math.floor(n/60),u=n%60;return u===0?`${r} ${r===1?"ora":"ore"}`:`${r} ${r===1?"ora":"ore"} e ${u} min`},ys=n=>{switch(n){case"facile":return"⭐ Facile";case"media":return"⭐⭐ Media";case"difficile":return"⭐⭐⭐ Difficile";default:return""}},l3=(n,r)=>n.filter(u=>{if(r.difficolta&&u.difficolta!==r.difficolta||r.tipo&&u.tipo!==r.tipo||r.filtriAlimentari&&r.filtriAlimentari.length>0&&!r.filtriAlimentari.every(d=>u.filtriAlimentari.includes(d))||r.tempoMassimo&&u.tempoTotale>r.tempoMassimo)return!1;if(r.ricerca){const c=r.ricerca.toLowerCase();if(!(u.titolo.toLowerCase().includes(c)||u.descrizione.toLowerCase().includes(c)||u.tags.some(p=>p.toLowerCase().includes(c))||u.ingredienti.some(p=>p.nome.toLowerCase().includes(c))))return!1}return!0}),o3=(n,r)=>{const u=r||n.porzioni;return $p(n.ingredienti,n.porzioni,u).map(d=>({ingrediente:d.nome,quantita:d.quantita,unita:d.unita,acquistato:!1,note:d.note}))},r3=v.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`,u3=v.header`
  text-align: center;
  padding: 30px 0;
  background: linear-gradient(135deg, ${S.verdePrimario} 0%, ${S.rossoPrimario} 100%);
  color: white;
  border-radius: 15px;
  margin-bottom: 30px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`,c3=v.h1`
  font-size: 2.5rem;
  margin: 0;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`,s3=v.p`
  font-size: 1.1rem;
  margin: 10px 0 0 0;
  opacity: 0.9;
`,pm=v.section`
  margin-bottom: 40px;
`,gm=v.h2`
  font-size: 1.8rem;
  color: ${S.verdePrimario};
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;

  svg {
    color: ${S.rossoPrimario};
  }
`,hm=v.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
`,vm=v.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }
`,xm=v.div`
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, ${S.verdePastello} 0%, ${S.rossoPastello} 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  position: relative;
`,ym=v.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(255, 255, 255, 0.9);
  padding: 6px 12px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  font-weight: 600;
  color: ${S.rossoPrimario};
`,bm=v.div`
  padding: 15px;
`,zm=v.h3`
  font-size: 1.2rem;
  margin: 0 0 10px 0;
  color: ${S.testoChiaro};
`,Sm=v.p`
  font-size: 0.9rem;
  color: ${S.testoSecondario};
  margin-bottom: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`,Am=v.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  color: ${S.testoSecondario};
`,Cm=v.div`
  display: flex;
  align-items: center;
  gap: 5px;
`,Em=v.span`
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  background-color: ${n=>{switch(n.$level){case"facile":return S.difficoltaFacile;case"media":return S.difficoltaMedia;case"difficile":return S.difficoltaDifficile;default:return S.grigio500}}};
  color: white;
`,f3=v.input`
  width: 100%;
  padding: 15px 20px;
  font-size: 1rem;
  border: 2px solid ${S.grigio300};
  border-radius: 25px;
  margin-bottom: 30px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${S.verdePrimario};
  }
`,jm=v.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
  color: ${S.warning};
`,d3=v.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`,Tm=v.div`
  background: ${n=>n.$gradient};
  border-radius: 20px;
  padding: 30px;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
  }
`,Mm=v.h2`
  font-size: 1.8rem;
  margin: 0 0 10px 0;
  display: flex;
  align-items: center;
  gap: 15px;

  svg {
    font-size: 2.2rem;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
  }
`,Om=v.p`
  font-size: 1rem;
  margin: 0;
  opacity: 0.95;
`;function m3(){const n=Ea(),r=n3(),u=i3(6),c=h=>{n(`/recipe/${h}`)},d=()=>{n("/suggestions")},p=()=>{n("/italy-map")};return f.jsxs(r3,{children:[f.jsxs(u3,{children:[f.jsx(c3,{children:"🇮🇹 Ricette Italiane"}),f.jsx(s3,{children:"Scopri i sapori autentici della cucina italiana"})]}),f.jsx(f3,{placeholder:"Cerca ricette, ingredienti..."}),f.jsxs(d3,{children:[f.jsxs(Tm,{$gradient:`linear-gradient(135deg, ${S.verdePrimario} 0%, ${S.verdeScuro} 100%)`,onClick:d,children:[f.jsxs(Mm,{children:[f.jsx(mr,{}),"Cosa Cucino Oggi?"]}),f.jsx(Om,{children:"Suggerimenti intelligenti basati su giorno, ora, stagione e meteo 🌤️"})]}),f.jsxs(Tm,{$gradient:`linear-gradient(135deg, ${S.rossoPrimario} 0%, #C41E3A 100%)`,onClick:p,children:[f.jsxs(Mm,{children:[f.jsx(Bp,{}),"Mappa Italia"]}),f.jsx(Om,{children:"Esplora le ricette tradizionali regione per regione 🇮🇹"})]})]}),r&&f.jsxs(pm,{children:[f.jsxs(gm,{children:[f.jsx(qp,{}),"Ricetta del Giorno"]}),f.jsx(hm,{children:f.jsxs(vm,{onClick:()=>c(r.id),children:[f.jsxs(xm,{children:[r.fotoUrl,f.jsxs(ym,{children:[f.jsx(dr,{})," ",r.numeroPreferiti]})]}),f.jsxs(bm,{children:[f.jsx(zm,{children:r.titolo}),f.jsx(Sm,{children:r.descrizione}),f.jsxs(Am,{children:[f.jsxs(Cm,{children:[f.jsx(vt,{}),ti(r.tempoTotale)]}),f.jsxs(jm,{children:[f.jsx(It,{})," ",r.valutazioneMedia.toFixed(1)]})]}),f.jsx("div",{style:{marginTop:"10px"},children:f.jsx(Em,{$level:r.difficolta,children:ys(r.difficolta)})})]})]})})]}),f.jsxs(pm,{children:[f.jsxs(gm,{children:[f.jsx(It,{}),"Ricette Popolari"]}),f.jsx(hm,{children:u.map(h=>f.jsxs(vm,{onClick:()=>c(h.id),children:[f.jsxs(xm,{children:[h.fotoUrl,f.jsxs(ym,{children:[f.jsx(dr,{})," ",h.numeroPreferiti]})]}),f.jsxs(bm,{children:[f.jsx(zm,{children:h.titolo}),f.jsx(Sm,{children:h.descrizione}),f.jsxs(Am,{children:[f.jsxs(Cm,{children:[f.jsx(vt,{}),ti(h.tempoTotale)]}),f.jsxs(jm,{children:[f.jsx(It,{})," ",h.valutazioneMedia.toFixed(1)]})]}),f.jsx("div",{style:{marginTop:"10px"},children:f.jsx(Em,{$level:h.difficolta,children:ys(h.difficolta)})})]})]},h.id))})]})]})}const p3=v.div`
  background: linear-gradient(135deg, #722F37 0%, #8B4049 100%);
  border-radius: 15px;
  padding: 30px;
  margin: 30px 0;
  color: white;
  box-shadow: 0 8px 20px rgba(114, 47, 55, 0.3);
`,g3=v.h2`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.8rem;
  margin-bottom: 25px;
  color: white;

  svg {
    font-size: 2rem;
  }
`,h3=v.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
`,v3=v.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-3px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`,x3=v.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 12px;
`,y3=v.h3`
  font-size: 1.3rem;
  margin: 0;
  color: #FFD700;
`,b3=v.span`
  padding: 4px 10px;
  border-radius: 15px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  background: ${n=>{switch(n.$tipo){case"bianco":return"#F4E4C1";case"rosso":return"#8B2635";case"rosato":return"#E88D9A";case"spumante":return"#FFD700";default:return"#ccc"}}};
  color: ${n=>n.$tipo==="bianco"?"#333":"white"};
`,z3=v.div`
  font-size: 13px;
  color: #FFD700;
  margin-bottom: 12px;
  font-style: italic;
`,S3=v.p`
  font-size: 14px;
  line-height: 1.6;
  margin: 12px 0;
  color: rgba(255, 255, 255, 0.95);
`,A3=v.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #87CEEB;
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);

  svg {
    font-size: 16px;
  }
`;function C3({wines:n}){return!n||n.length===0?null:f.jsxs(p3,{children:[f.jsxs(g3,{children:[f.jsx(a3,{})," Abbinamenti Vini"]}),f.jsx(h3,{children:n.map((r,u)=>f.jsxs(v3,{children:[f.jsxs(x3,{children:[f.jsx(y3,{children:r.nome}),f.jsx(b3,{$tipo:r.tipo,children:r.tipo})]}),r.denominazione&&f.jsx(z3,{children:r.denominazione}),f.jsx(S3,{children:r.perche}),f.jsxs(A3,{children:[f.jsx(P4,{}),"Servire a ",r.temperaturaServizio]})]},u))})]})}const E3=v.div`
  background: linear-gradient(135deg, #FFF5E6 0%, #FFE4B5 100%);
  border-radius: 15px;
  padding: 30px;
  margin: 30px 0;
  border: 3px solid ${S.rossoPrimario};
  box-shadow: 0 8px 20px rgba(205, 33, 42, 0.2);
  position: relative;
  overflow: hidden;

  &::before {
    content: '👵';
    position: absolute;
    top: -20px;
    right: -20px;
    font-size: 150px;
    opacity: 0.1;
    transform: rotate(15deg);
  }
`,j3=v.h2`
  font-size: 1.8rem;
  color: ${S.rossoPrimario};
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: 'Georgia', serif;

  &::before {
    content: '👵';
    font-size: 2.2rem;
  }
`,T3=v.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`,M3=v.div`
  background: white;
  border-radius: 12px;
  padding: 18px 22px;
  border-left: 5px solid ${n=>{switch(n.$categoria){case"segreto":return"#FF6B6B";case"tecnica":return"#4ECDC4";case"ingrediente":return"#95E1D3";case"conservazione":return"#FFD93D";case"storia":return"#C68B59";default:return S.verdePrimario}}};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  position: relative;
  transition: all 0.3s;

  &:hover {
    transform: translateX(5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`,O3=v.span`
  display: inline-block;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 10px;
  background: ${n=>{switch(n.$categoria){case"segreto":return"#FFE5E5";case"tecnica":return"#E0F7F4";case"ingrediente":return"#E8F8F5";case"conservazione":return"#FFF9E6";case"storia":return"#F5EFE6";default:return S.verdePastello}}};
  color: ${n=>{switch(n.$categoria){case"segreto":return"#D32F2F";case"tecnica":return"#00897B";case"ingrediente":return"#2E7D32";case"conservazione":return"#F57C00";case"storia":return"#5D4037";default:return S.verdeScuro}}};
`,R3=v.span`
  margin-right: 6px;
`,N3=v.p`
  font-size: 15px;
  line-height: 1.7;
  color: ${S.testoChiaro};
  margin: 0;
  font-style: italic;
  quotes: '"' '"' "'" "'";

  &::before {
    content: open-quote;
    font-size: 2em;
    line-height: 0;
    margin-right: 5px;
    vertical-align: -0.4em;
    color: ${S.rossoPrimario};
    font-family: Georgia, serif;
  }
`,_3=n=>{switch(n){case"segreto":return"🔐";case"tecnica":return"🎯";case"ingrediente":return"🥬";case"conservazione":return"📦";case"storia":return"📖";default:return"💡"}},D3=n=>{switch(n){case"segreto":return"Segreto";case"tecnica":return"Tecnica";case"ingrediente":return"Ingrediente";case"conservazione":return"Conservazione";case"storia":return"Storia";default:return"Consiglio"}};function U3({tips:n}){return!n||n.length===0?null:f.jsxs(E3,{children:[f.jsx(j3,{children:"I Consigli della Nonna"}),f.jsx(T3,{children:n.map((r,u)=>f.jsxs(M3,{$categoria:r.categoria,children:[f.jsxs(O3,{$categoria:r.categoria,children:[f.jsx(R3,{children:_3(r.categoria)}),D3(r.categoria)]}),f.jsx(N3,{children:r.testo})]},u))})]})}const q3=v.div`
  background: linear-gradient(135deg, #F8F9FA 0%, #E9ECEF 100%);
  border-radius: 15px;
  padding: 30px;
  margin: 30px 0;
  border: 2px solid ${S.verdePrimario};
  box-shadow: 0 4px 15px rgba(0, 140, 69, 0.1);
`,w3=v.h2`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.8rem;
  color: ${S.verdePrimario};
  margin-bottom: 25px;

  svg {
    font-size: 1.8rem;
  }
`,B3=v.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  border-left: 4px solid ${S.verdePrimario};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`,Ic=v.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  color: ${S.verdePrimario};
  letter-spacing: 1px;
  margin-bottom: 12px;

  svg {
    font-size: 16px;
  }
`,L3=v.p`
  font-size: 15px;
  line-height: 1.8;
  color: ${S.testoChiaro};
  margin: 0;
`,H3=v.div`
  display: grid;
  gap: 15px;
  margin-bottom: 20px;
`,G3=v.div`
  background: white;
  border-radius: 12px;
  padding: 18px;
  border-left: 4px solid ${S.rossoPrimario};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.3s;

  &:hover {
    transform: translateX(5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`,$3=v.p`
  font-size: 14px;
  line-height: 1.7;
  color: ${S.testoChiaro};
  margin: 0;

  &::before {
    content: '💡 ';
    margin-right: 8px;
  }
`,V3=v.div`
  background: ${S.verdePastello};
  border-radius: 12px;
  padding: 20px;
  border: 2px dashed ${S.verdePrimario};
`,Y3=v.p`
  font-size: 14px;
  line-height: 1.7;
  color: ${S.verdeScuro};
  margin: 0;
  font-style: italic;
`;function Z3({storia:n}){return n?f.jsxs(q3,{children:[f.jsxs(w3,{children:[f.jsx(q4,{})," Storia del Piatto"]}),f.jsxs(B3,{children:[f.jsxs(Ic,{children:[f.jsx(Q4,{}),"Origine"]}),f.jsx(L3,{children:n.origine})]}),n.curiosita&&n.curiosita.length>0&&f.jsxs(f.Fragment,{children:[f.jsxs(Ic,{style:{marginBottom:"15px"},children:[f.jsx(mr,{}),"Curiosità"]}),f.jsx(H3,{children:n.curiosita.map((r,u)=>f.jsx(G3,{children:f.jsx($3,{children:r})},u))})]}),n.variantiRegionali&&f.jsxs(V3,{children:[f.jsx(Ic,{style:{color:S.verdeScuro,marginBottom:"12px"},children:"🗺️ Varianti Regionali"}),f.jsx(Y3,{children:n.variantiRegionali})]})]}):null}const Q3=v.div`
  background: linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%);
  border-radius: 15px;
  padding: 30px;
  margin: 30px 0;
  color: white;
  box-shadow: 0 8px 20px rgba(255, 107, 107, 0.3);
`,X3=v.h2`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.8rem;
  margin-bottom: 25px;
  color: white;
`,K3=v.div`
  text-align: center;
  margin-bottom: 30px;
`,J3=v.div`
  font-size: 4rem;
  font-weight: bold;
  font-family: 'Courier New', monospace;
  text-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  animation: ${n=>n.$isActive?"pulse 2s infinite":"none"};

  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }
`,F3=v.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-bottom: 25px;
  flex-wrap: wrap;
`,kc=v.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 15px 25px;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  background: ${n=>{switch(n.$variant){case"start":return"#4CAF50";case"pause":return"#FFA726";case"stop":return"#EF5350";default:return"white"}}};
  color: white;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`,I3=v.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 10px;
  margin-top: 20px;
`,k3=v.button`
  padding: 12px;
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-radius: 10px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    border-color: white;
  }
`,P3=v.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 20px;
  flex-wrap: wrap;
`,Rm=v.input`
  width: 80px;
  padding: 12px;
  border: 2px solid white;
  border-radius: 8px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  background: rgba(255, 255, 255, 0.9);
  color: #333;

  &:focus {
    outline: none;
    background: white;
  }
`,W3=v.button`
  padding: 12px 20px;
  background: white;
  color: #FF6B6B;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: #f0f0f0;
    transform: translateY(-2px);
  }
`,e6=v.div`
  display: inline-block;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  margin-top: 15px;
  background: ${n=>{switch(n.$status){case"running":return"#4CAF50";case"paused":return"#FFA726";case"finished":return"#EF5350";default:return"rgba(255, 255, 255, 0.3)"}}};
`;function t6(){const[n,r]=H.useState(0),[u,c]=H.useState(0),[d,p]=H.useState(0),[h,j]=H.useState(!1),[z,g]=H.useState(!1),T=H.useRef(null),O=H.useRef([]),N=H.useRef(null),w=H.useRef(!0),G=H.useCallback(()=>{try{const L=new(window.AudioContext||window.webkitAudioContext);N.current=L;const xe=L.createOscillator(),ke=L.createGain();xe.connect(ke),ke.connect(L.destination),xe.frequency.value=800,xe.type="sine",ke.gain.setValueAtTime(.3,L.currentTime),xe.start(L.currentTime),xe.stop(L.currentTime+.3);const kt=window.setTimeout(()=>{try{const Ye=L.createOscillator(),Ze=L.createGain();Ye.connect(Ze),Ze.connect(L.destination),Ye.frequency.value=800,Ye.type="sine",Ze.gain.setValueAtTime(.3,L.currentTime),Ye.start(L.currentTime),Ye.stop(L.currentTime+.3);const Qt=window.setTimeout(()=>{L.close().catch(xt=>console.log("AudioContext already closed",xt)),N.current=null},500);O.current.push(Qt)}catch(Ye){console.error("Error in second beep:",Ye)}},400);O.current.push(kt),"Notification"in window&&Notification.permission==="granted"&&new Notification("⏰ Timer Scaduto!",{body:"Il tempo di cottura è terminato!",icon:"⏰"})}catch(L){console.error("Error playing alarm:",L)}},[]);H.useEffect(()=>(h&&d>0&&(T.current=window.setInterval(()=>{w.current&&p(L=>Math.max(0,L-1))},1e3)),()=>{T.current&&(clearInterval(T.current),T.current=null)}),[h,d]),H.useEffect(()=>{h&&d===0&&w.current&&(j(!1),G())},[d,h,G]),H.useEffect(()=>(w.current=!0,()=>{w.current=!1,O.current.forEach(L=>clearTimeout(L)),O.current=[],T.current&&(clearInterval(T.current),T.current=null),N.current&&(N.current.close().catch(()=>{}),N.current=null)}),[]),H.useEffect(()=>{if(w.current){const L=Math.floor(d/60),xe=d%60;r(L),c(xe)}},[d]);const Q=()=>{d>0&&(j(!0),g(!1))},Z=()=>{j(!1),g(!0)},I=()=>{j(!1),g(!1),p(0)},k=L=>{p(L*60),j(!1),g(!1)},J=()=>{const L=parseInt(document.getElementById("custom-minutes")?.value||"0"),xe=parseInt(document.getElementById("custom-seconds")?.value||"0");p(L*60+xe),j(!1),g(!1)},ae=()=>{"Notification"in window&&Notification.permission==="default"&&Notification.requestPermission()};H.useEffect(()=>{ae()},[]);const ce=(L,xe)=>`${L.toString().padStart(2,"0")}:${xe.toString().padStart(2,"0")}`,te=()=>d===0&&!h&&z?"finished":h?"running":z?"paused":"idle";return f.jsxs(Q3,{children:[f.jsxs(X3,{children:[f.jsx(vt,{}),"Timer di Cottura"]}),f.jsxs(K3,{children:[f.jsx(J3,{$isActive:h,children:ce(n,u)}),f.jsxs(e6,{$status:te(),children:[te()==="running"&&"⏱️ In esecuzione",te()==="paused"&&"⏸️ In pausa",te()==="finished"&&"✅ Completato",te()==="idle"&&"💤 Pronto"]})]}),f.jsxs(F3,{children:[f.jsxs(kc,{$variant:"start",onClick:Q,disabled:h||d===0,children:[f.jsx(Lp,{}),z?"Riprendi":"Avvia"]}),f.jsxs(kc,{$variant:"pause",onClick:Z,disabled:!h,children:[f.jsx(K4,{}),"Pausa"]}),f.jsxs(kc,{$variant:"stop",onClick:I,disabled:d===0&&!h,children:[f.jsx(I4,{}),"Stop"]})]}),f.jsx(I3,{children:[1,3,5,10,15,20].map(L=>f.jsxs(k3,{onClick:()=>k(L),children:[L," min"]},L))}),f.jsxs(P3,{children:[f.jsx(Rm,{id:"custom-minutes",type:"number",min:"0",max:"59",placeholder:"Min",defaultValue:"0"}),f.jsx(Rm,{id:"custom-seconds",type:"number",min:"0",max:"59",placeholder:"Sec",defaultValue:"0"}),f.jsx(W3,{onClick:J,children:"Imposta"})]})]})}const a6=v.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  z-index: 9999;
  display: flex;
  flex-direction: column;
`,i6=v.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${S.verdePrimario};
  background: rgba(0, 140, 69, 0.1);
`,n6=v.div`
  flex: 1;
  text-align: center;
  color: white;
  font-size: 18px;
  font-weight: 600;
`,l6=v.button`
  background: ${S.rossoPrimario};
  color: white;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 24px;
  transition: all 0.3s;

  &:hover {
    background: ${S.rossoScuro};
    transform: scale(1.1);
  }
`,o6=v.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  overflow-y: auto;
`,r6=v.div`
  max-width: 800px;
  width: 100%;
  background: white;
  border-radius: 20px;
  padding: 60px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    padding: 40px 30px;
  }
`,u6=v.div`
  display: inline-block;
  width: 80px;
  height: 80px;
  background: ${S.verdePrimario};
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 30px;
  box-shadow: 0 8px 20px rgba(0, 140, 69, 0.3);
`,c6=v.p`
  font-size: 24px;
  line-height: 1.8;
  color: ${S.testoChiaro};
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`,s6=v.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 30px;
`,f6=v.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 20px;
  background: ${S.verdePastello};
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  color: ${S.verdeScuro};

  svg {
    font-size: 20px;
  }
`,d6=v.div`
  background: ${S.warning};
  color: white;
  padding: 20px;
  border-radius: 12px;
  margin-top: 20px;
  font-size: 16px;
  line-height: 1.6;

  &::before {
    content: '💡 ';
    font-size: 24px;
    margin-right: 8px;
  }
`,m6=v.div`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  border-top: 2px solid ${S.verdePrimario};
  background: rgba(0, 140, 69, 0.1);
`,Nm=v.button`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 18px 30px;
  border: none;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  flex: 1;

  ${n=>n.$variant==="primary"?`
    background: ${S.verdePrimario};
    color: white;
    justify-content: flex-end;

    &:hover {
      background: ${S.verdeScuro};
      transform: translateX(5px);
    }
  `:`
    background: rgba(255, 255, 255, 0.1);
    color: white;
    justify-content: flex-start;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: translateX(-5px);
    }
  `}

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
    transform: none;
  }

  svg {
    font-size: 20px;
  }
`,p6=v.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 20px;
  background: ${S.successo};
  color: white;
  border-radius: 12px;
  font-size: 20px;
  font-weight: 600;
  margin-top: 20px;

  svg {
    font-size: 28px;
  }
`;function g6({steps:n,onClose:r}){const[u,c]=H.useState(0),d=()=>{u<n.length-1&&c(u+1)},p=()=>{u>0&&c(u-1)},h=n[u],j=u===n.length-1,z=u===0;return f.jsxs(a6,{children:[f.jsxs(i6,{children:[f.jsxs(n6,{children:["Passo ",u+1," di ",n.length]}),f.jsx(l6,{onClick:r,children:f.jsx(W4,{})})]}),f.jsx(o6,{children:f.jsxs(r6,{children:[f.jsx(u6,{children:h.numero}),f.jsx(c6,{children:h.descrizione}),(h.tempoCottura||h.suggerimenti)&&f.jsx(s6,{children:h.tempoCottura&&f.jsxs(f6,{children:[f.jsx(vt,{}),h.tempoCottura," minuti"]})}),h.suggerimenti&&f.jsx(d6,{children:h.suggerimenti}),j&&f.jsxs(p6,{children:[f.jsx(Dp,{}),"Ultimo passo - Buon appetito!"]})]})}),f.jsxs(m6,{children:[f.jsxs(Nm,{onClick:p,disabled:z,children:[f.jsx(L4,{}),"Precedente"]}),f.jsxs(Nm,{$variant:"primary",onClick:d,disabled:j,children:["Successivo",f.jsx(H4,{})]})]})]})}const h6=v.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin: 20px 0;
`,Vo=v.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  border-radius: 25px;
  font-size: 14px;
  font-weight: 600;
  background: ${n=>n.$bgColor};
  color: ${n=>n.$color};
  border: 2px solid ${n=>n.$color};
  transition: all 0.3s;
  cursor: default;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px ${n=>n.$color}33;
  }

  svg {
    font-size: 16px;
  }
`,v6=n=>{switch(n){case"primavera":return"🌸 Primavera";case"estate":return"☀️ Estate";case"autunno":return"🍂 Autunno";case"inverno":return"❄️ Inverno";case"tutto_anno":return"🗓️ Tutto l'Anno";default:return n}},x6=n=>{switch(n){case"natale":return"🎄 Natale";case"capodanno":return"🎆 Capodanno";case"pasqua":return"🐣 Pasqua";case"ferragosto":return"🏖️ Ferragosto";case"carnevale":return"🎭 Carnevale";case"domenica":return"☀️ Domenica";case"festa_compleanno":return"🎂 Compleanno";default:return n}},Pc=n=>n<10?{color:"#4CAF50",bg:"#E8F5E9",label:"Economico"}:n<20?{color:"#FF9800",bg:"#FFF3E0",label:"Medio"}:{color:"#F44336",bg:"#FFEBEE",label:"Costoso"};function y6({costo:n,stagioni:r,occasioni:u,tempoTotale:c}){return f.jsxs(h6,{children:[n!==void 0&&f.jsxs(Vo,{$color:Pc(n).color,$bgColor:Pc(n).bg,children:[f.jsx($4,{}),"€",n.toFixed(2)," - ",Pc(n).label]}),c&&f.jsxs(Vo,{$color:S.rossoPrimario,$bgColor:S.rossoPastello,children:[f.jsx(vt,{}),c," minuti"]}),r&&r.length>0&&f.jsx(f.Fragment,{children:r.map((d,p)=>f.jsxs(Vo,{$color:S.verdePrimario,$bgColor:S.verdePastello,children:[f.jsx(wp,{}),v6(d)]},p))}),u&&u.length>0&&f.jsx(f.Fragment,{children:u.map((d,p)=>f.jsxs(Vo,{$color:"#9C27B0",$bgColor:"#F3E5F5",children:[f.jsx(w4,{}),x6(d)]},p))})]})}const b6=v.div`
  background: linear-gradient(135deg, #FF6B6B 0%, #FFA07A 100%);
  border-radius: 20px;
  padding: 30px;
  margin: 30px 0;
  color: white;
`,z6=v.h2`
  font-size: 1.8rem;
  margin: 0 0 20px 0;
  display: flex;
  align-items: center;
  gap: 12px;

  svg {
    font-size: 1.6rem;
  }
`,S6=v.div`
  display: grid;
  gap: 15px;
`,A6=v.div`
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 20px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: translateX(5px);
  }
`,C6=v.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 12px;
`,E6=v.div`
  flex: 1;
  font-weight: 600;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 8px;
`,j6=v(Up)`
  font-size: 1.2rem;
  flex-shrink: 0;
`,T6=v.div`
  flex: 1;
  font-weight: 600;
  font-size: 1.1rem;
  background: rgba(255, 255, 255, 0.3);
  padding: 8px 15px;
  border-radius: 10px;
`,M6=v.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 0.95rem;
  line-height: 1.5;
  opacity: 0.95;
  padding: 10px 15px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  margin-top: 10px;

  svg {
    flex-shrink: 0;
    margin-top: 3px;
    font-size: 1rem;
  }
`,O6=v.span`
  background: rgba(255, 255, 255, 0.3);
  padding: 4px 10px;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  margin-left: 8px;
`,R6=v.div`
  text-align: center;
  padding: 20px;
  opacity: 0.8;
  font-size: 1rem;
`;function N6({sostituzioni:n}){return!n||n.length===0?null:f.jsxs(b6,{children:[f.jsxs(z6,{children:[f.jsx(Up,{}),"Sostituzioni Ingredienti"]}),n.length>0?f.jsx(S6,{children:n.map((r,u)=>f.jsxs(A6,{children:[f.jsxs(C6,{children:[f.jsx(E6,{children:r.ingredienteOriginale}),f.jsx(j6,{}),f.jsxs(T6,{children:[r.sostituto,r.fattoreMoltiplicazione&&r.fattoreMoltiplicazione!==1&&f.jsxs(O6,{children:["×",r.fattoreMoltiplicazione]})]})]}),f.jsxs(M6,{children:[f.jsx(Y4,{}),f.jsx("span",{children:r.motivo})]})]},u))}):f.jsx(R6,{children:"Nessuna sostituzione disponibile per questa ricetta."})]})}const _m=v.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`,Dm=v.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  color: ${S.verdePrimario};
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 20px;
  padding: 8px 12px;
  border-radius: 8px;
  transition: background 0.3s;

  &:hover {
    background: ${S.verdePastello};
  }
`,_6=v.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,D6=v.div`
  width: 100%;
  height: 400px;
  background: linear-gradient(135deg, ${S.verdePastello} 0%, ${S.rossoPastello} 100%);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`,U6=v.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,Um=v.h1`
  color: ${S.verdePrimario};
  margin-bottom: 15px;
  font-size: 2.5rem;
`,q6=v.p`
  color: ${S.testoSecondario};
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 20px;
`,w6=v.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;
`,qm=v.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${S.testoSecondario};
  font-size: 16px;

  svg {
    color: ${S.rossoPrimario};
  }
`,B6=v.span`
  padding: 8px 16px;
  border-radius: 25px;
  font-size: 14px;
  font-weight: 600;
  background-color: ${n=>{switch(n.$level){case"facile":return S.difficoltaFacile;case"media":return S.difficoltaMedia;case"difficile":return S.difficoltaDifficile;default:return S.grigio500}}};
  color: white;
`,L6=v.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  color: ${S.warning};
`,H6=v.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
`,Wc=v.button`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 15px 25px;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;

  ${n=>n.$variant==="primary"?`
    background: ${S.rossoPrimario};
    color: white;

    &:hover {
      background: ${S.rossoScuro};
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(205, 33, 42, 0.3);
    }
  `:`
    background: ${S.grigio200};
    color: ${S.testoChiaro};

    &:hover {
      background: ${S.grigio300};
    }
  `}
`,G6=v.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 40px;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`,es=v.section`
  background: white;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`,Yo=v.h2`
  color: ${S.verdePrimario};
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.8rem;
`,$6=v.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
`,wm=v.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid ${S.verdePrimario};
  background: white;
  color: ${S.verdePrimario};
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: ${S.verdePrimario};
    color: white;
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`,V6=v.ul`
  list-style: none;
  padding: 0;
`,Y6=v.li`
  padding: 12px 0;
  border-bottom: 1px solid ${S.grigio200};
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:last-child {
    border-bottom: none;
  }
`,Z6=v.span`
  color: ${S.testoChiaro};
  font-weight: 500;
`,Q6=v.span`
  color: ${S.testoSecondario};
  font-weight: 600;
`,X6=v.ol`
  list-style: none;
  counter-reset: step-counter;
  padding: 0;
`,K6=v.li`
  counter-increment: step-counter;
  margin-bottom: 25px;
  padding-left: 60px;
  position: relative;

  &::before {
    content: counter(step-counter);
    position: absolute;
    left: 0;
    top: 0;
    width: 40px;
    height: 40px;
    background: ${S.verdePrimario};
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 18px;
  }

  &:last-child {
    margin-bottom: 0;
  }
`,J6=v.p`
  color: ${S.testoChiaro};
  line-height: 1.6;
  margin-bottom: 8px;
`,F6=v.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: ${S.rossoPrimario};
  font-size: 14px;
  font-weight: 600;
  margin-top: 8px;
`,I6=v.div`
  background: ${S.verdePastello};
  padding: 10px 15px;
  border-radius: 8px;
  margin-top: 10px;
  color: ${S.verdeScuro};
  font-style: italic;
  font-size: 14px;

  &::before {
    content: '💡 ';
  }
`,k6=v.div`
  margin-top: 40px;
  background: ${S.grigio100};
  border-radius: 15px;
  padding: 30px;
  text-align: center;
`,P6=v.button`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 30px;
  background: ${S.rossoPrimario};
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: ${S.rossoScuro};
    transform: translateY(-2px);
  }
`,W6=v.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  margin-top: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,Zo=v.div`
  text-align: center;
  padding: 15px;
  background: ${S.grigio100};
  border-radius: 10px;
`,Qo=v.div`
  font-size: 24px;
  font-weight: bold;
  color: ${S.verdePrimario};
`,Xo=v.div`
  font-size: 12px;
  color: ${S.testoSecondario};
  text-transform: uppercase;
  margin-top: 5px;
`,e5=v.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 30px;
`,t5=v.span`
  padding: 6px 12px;
  background: ${S.grigio200};
  border-radius: 20px;
  font-size: 14px;
  color: ${S.testoSecondario};
`;function a5(){const{id:n}=Ph(),r=Ea(),[u,c]=H.useState(),[d,p]=H.useState(4),[h,j]=H.useState(!1),[z,g]=H.useState(!1);H.useEffect(()=>{if(n){const w=Gp(n);if(c(w),w){p(w.porzioni);const G=localStorage.getItem("favorites"),Q=G?JSON.parse(G):[];j(Q.includes(w.id))}}},[n]);const T=H.useMemo(()=>u?(console.log("🔄 Ricalcolo ingredienti per",d,"porzioni"),$p(u.ingredienti,u.porzioni,d)):[],[u,d]);if(!u)return f.jsxs(_m,{children:[f.jsxs(Dm,{onClick:()=>r(-1),children:[f.jsx(fm,{})," Torna indietro"]}),f.jsx(Um,{children:"Ricetta non trovata"})]});const O=()=>{if(!u){console.error("❌ Ricetta non trovata");return}const w=localStorage.getItem("favorites"),G=w?JSON.parse(w):[];if(h){const Q=G.filter(Z=>Z!==u.id);localStorage.setItem("favorites",JSON.stringify(Q)),j(!1),console.log("💔 Rimossa dai preferiti:",u.titolo)}else{const Q=[...G,u.id];localStorage.setItem("favorites",JSON.stringify(Q)),j(!0),console.log("❤️ Aggiunta ai preferiti:",u.titolo)}},N=()=>{const w=o3(u,d),G=localStorage.getItem("shoppingList"),Q=G?JSON.parse(G):[],Z=w.map(k=>({id:`${u.id}-${k.ingrediente}-${Date.now()}-${Math.random()}`,ricettaId:u.id,ricettaTitolo:u.titolo,ingrediente:k.ingrediente,quantita:k.quantita,unita:k.unita,note:k.note,acquistato:!1})),I=[...Q,...Z];localStorage.setItem("shoppingList",JSON.stringify(I)),console.log("✅ Ingredienti aggiunti alla lista della spesa:",Z),r("/shopping-list")};return f.jsxs(_m,{children:[f.jsxs(Dm,{onClick:()=>r(-1),children:[f.jsx(fm,{})," Torna indietro"]}),f.jsxs(_6,{children:[f.jsx(D6,{children:u.fotoUrl}),f.jsxs(U6,{children:[f.jsxs("div",{children:[f.jsx(Um,{children:u.titolo}),f.jsx(q6,{children:u.descrizione}),f.jsx(y6,{costo:u.costoTotaleStimato,stagioni:u.stagioneMigliore,occasioni:u.occasioniSpeciali,tempoTotale:u.tempoTotale}),f.jsxs(w6,{children:[f.jsxs(qm,{children:[f.jsx(vt,{}),ti(u.tempoTotale)]}),f.jsxs(qm,{children:[f.jsx(t3,{}),d," porzioni"]}),f.jsx(B6,{$level:u.difficolta,children:ys(u.difficolta)})]}),f.jsxs(L6,{children:[f.jsx(It,{})," ",u.valutazioneMedia.toFixed(1),f.jsxs("span",{style:{fontSize:"14px",color:S.testoSecondario},children:["(",u.numeroValutazioni," valutazioni)"]})]})]}),f.jsxs(H6,{children:[f.jsxs(Wc,{$variant:"primary",onClick:O,children:[f.jsx(dr,{})," ",h?"Rimuovi dai preferiti":"Aggiungi ai preferiti"]}),f.jsxs(Wc,{onClick:N,children:[f.jsx(pr,{})," Lista spesa"]})]})]})]}),f.jsxs(G6,{children:[f.jsxs(es,{children:[f.jsxs(Yo,{children:["Ingredienti",f.jsxs($6,{children:[f.jsx("span",{children:"Porzioni:"}),f.jsx(wm,{onClick:()=>{const w=Math.max(1,d-1);console.log("📉 Riducendo porzioni da",d,"a",w),p(w)},disabled:d<=1,children:"−"}),f.jsx("span",{style:{fontWeight:"bold",minWidth:"30px",textAlign:"center"},children:d}),f.jsx(wm,{onClick:()=>{const w=d+1;console.log("📈 Aumentando porzioni da",d,"a",w),p(w)},children:"+"})]})]}),f.jsx(V6,{children:T.map((w,G)=>f.jsxs(Y6,{children:[f.jsxs(Z6,{children:[w.nome,w.note&&f.jsxs("span",{style:{fontSize:"12px",color:S.testoSecondario},children:[" (",w.note,")"]})]}),f.jsxs(Q6,{children:[w.quantita," ",w.unita]})]},`${w.nome}-${G}-${d}`))})]}),f.jsxs(es,{children:[f.jsxs(Yo,{children:["Procedimento",f.jsx(Wc,{$variant:"primary",onClick:()=>g(!0),style:{fontSize:"14px",padding:"10px 20px"},children:"👨‍🍳 Modalità Cooking"})]}),f.jsx(X6,{children:u.procedimento.map(w=>f.jsxs(K6,{children:[f.jsx(J6,{children:w.descrizione}),w.tempoCottura&&f.jsxs(F6,{children:[f.jsx(vt,{})," ",ti(w.tempoCottura)]}),w.suggerimenti&&f.jsx(I6,{children:w.suggerimenti})]},w.numero))})]})]}),u.valoriNutrizionali&&f.jsxs(es,{children:[f.jsx(Yo,{children:"Valori Nutrizionali (per porzione)"}),f.jsxs(W6,{children:[f.jsxs(Zo,{children:[f.jsx(Qo,{children:Math.round(u.valoriNutrizionali.calorie/u.porzioni*d/d)}),f.jsx(Xo,{children:"Calorie"})]}),f.jsxs(Zo,{children:[f.jsxs(Qo,{children:[Math.round(u.valoriNutrizionali.proteine/u.porzioni*d/d),"g"]}),f.jsx(Xo,{children:"Proteine"})]}),f.jsxs(Zo,{children:[f.jsxs(Qo,{children:[Math.round(u.valoriNutrizionali.carboidrati/u.porzioni*d/d),"g"]}),f.jsx(Xo,{children:"Carboidrati"})]}),f.jsxs(Zo,{children:[f.jsxs(Qo,{children:[Math.round(u.valoriNutrizionali.grassi/u.porzioni*d/d),"g"]}),f.jsx(Xo,{children:"Grassi"})]})]})]}),u.videoUrl&&f.jsxs(k6,{children:[f.jsx(Yo,{style:{color:S.testoChiaro},children:"Video Tutorial"}),f.jsxs(P6,{onClick:()=>window.open(u.videoUrl,"_blank"),children:[f.jsx(Lp,{})," Guarda il video"]})]}),f.jsx(t6,{}),u.storia&&f.jsx(Z3,{storia:u.storia}),u.consigliNonna&&u.consigliNonna.length>0&&f.jsx(U3,{tips:u.consigliNonna}),u.abbinamentoVini&&u.abbinamentoVini.length>0&&f.jsx(C3,{wines:u.abbinamentoVini}),u.sostituzioniIngredienti&&u.sostituzioniIngredienti.length>0&&f.jsx(N6,{sostituzioni:u.sostituzioniIngredienti}),f.jsx(e5,{children:u.tags.map((w,G)=>f.jsxs(t5,{children:["#",w]},G))}),z&&f.jsx(g6,{steps:u.procedimento,onClose:()=>g(!1)})]})}const i5=v.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`,n5=v.h1`
  color: ${S.verdePrimario};
  margin-bottom: 30px;
  text-align: center;
`,ts=v.div`
  background: white;
  border-radius: 15px;
  padding: 25px;
  margin-bottom: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`,as=v.h3`
  color: ${S.verdePrimario};
  margin-bottom: 15px;
  font-size: 1.2rem;
`,is=v.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 10px;
`,Ko=v.button`
  padding: 12px 20px;
  border: 2px solid ${n=>n.$active?S.verdePrimario:S.grigio300};
  background: ${n=>n.$active?S.verdePrimario:"white"};
  color: ${n=>n.$active?"white":S.testoChiaro};
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s;

  &:hover {
    border-color: ${S.verdePrimario};
    ${n=>!n.$active&&`background: ${S.verdePastello};`}
  }
`,l5=v.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
`,o5=v.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }
`,r5=v.div`
  width: 100%;
  height: 180px;
  background: linear-gradient(135deg, ${S.verdePastello} 0%, ${S.rossoPastello} 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3.5rem;
`,u5=v.div`
  padding: 15px;
`,c5=v.h3`
  font-size: 1.1rem;
  margin: 0 0 10px 0;
  color: ${S.testoChiaro};
`,s5=v.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
  color: ${S.testoSecondario};
`,f5=v.div`
  text-align: center;
  padding: 60px 20px;
  color: ${S.testoSecondario};
  font-size: 1.2rem;
`;function d5(){const n=Ea(),[r,u]=H.useState(null),[c,d]=H.useState(null),[p,h]=H.useState(null),j=Nt.filter(N=>!(r&&N.tipo!==r||c&&N.difficolta!==c||p&&N.regione!==p)),z=[{value:Ne.PRIMI,label:"🍝 Primi"},{value:Ne.SECONDI,label:"🥩 Secondi"},{value:Ne.CONTORNI,label:"🥗 Contorni"},{value:Ne.DOLCI,label:"🍰 Dolci"},{value:Ne.ANTIPASTI,label:"🍤 Antipasti"},{value:Ne.PIZZE_FOCACCE,label:"🍕 Pizze & Focacce"}],g=[{value:we.FACILE,label:"⭐ Facile"},{value:we.MEDIA,label:"⭐⭐ Media"},{value:we.DIFFICILE,label:"⭐⭐⭐ Difficile"}],T=[{value:V.LAZIO,label:"Lazio"},{value:V.CAMPANIA,label:"Campania"},{value:V.SICILIA,label:"Sicilia"},{value:V.LOMBARDIA,label:"Lombardia"},{value:V.EMILIA_ROMAGNA,label:"Emilia-Romagna"},{value:V.VENETO,label:"Veneto"},{value:V.PIEMONTE,label:"Piemonte"},{value:V.LIGURIA,label:"Liguria"}],O=()=>{u(null),d(null),h(null)};return f.jsxs(i5,{children:[f.jsx(n5,{children:"🗂️ Categorie Ricette"}),f.jsxs(ts,{children:[f.jsx(as,{children:"Tipo di Piatto"}),f.jsx(is,{children:z.map(N=>f.jsx(Ko,{$active:r===N.value,onClick:()=>u(r===N.value?null:N.value),children:N.label},N.value))})]}),f.jsxs(ts,{children:[f.jsx(as,{children:"Difficoltà"}),f.jsx(is,{children:g.map(N=>f.jsx(Ko,{$active:c===N.value,onClick:()=>d(c===N.value?null:N.value),children:N.label},N.value))})]}),f.jsxs(ts,{children:[f.jsx(as,{children:"Regione"}),f.jsx(is,{children:T.map(N=>f.jsx(Ko,{$active:p===N.value,onClick:()=>h(p===N.value?null:N.value),children:N.label},N.value))}),(r||c||p)&&f.jsx("div",{style:{marginTop:"15px"},children:f.jsx(Ko,{$active:!1,onClick:O,children:"🔄 Rimuovi tutti i filtri"})})]}),f.jsxs("div",{style:{marginBottom:"20px",color:S.testoSecondario},children:["Trovate ",f.jsx("strong",{children:j.length})," ricette"]}),j.length>0?f.jsx(l5,{children:j.map(N=>f.jsxs(o5,{onClick:()=>n(`/recipe/${N.id}`),children:[f.jsx(r5,{children:N.fotoUrl}),f.jsxs(u5,{children:[f.jsx(c5,{children:N.titolo}),f.jsxs(s5,{children:[f.jsxs("span",{children:[f.jsx(vt,{})," ",N.tempoTotale," min"]}),f.jsxs("span",{children:[f.jsx(It,{style:{color:S.warning}})," ",N.valutazioneMedia.toFixed(1)]})]})]})]},N.id))}):f.jsxs(f5,{children:["Nessuna ricetta trovata con questi filtri.",f.jsx("br",{}),f.jsx("button",{onClick:O,style:{marginTop:"20px",padding:"12px 24px",background:S.verdePrimario,color:"white",border:"none",borderRadius:"8px",cursor:"pointer",fontSize:"16px"},children:"Rimuovi filtri"})]})]})}const Bm=v.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`,Lm=v.h1`
  color: ${S.verdePrimario};
  margin-bottom: 30px;
  text-align: center;
`,m5=v.div`
  text-align: center;
  padding: 80px 20px;
  color: ${S.testoSecondario};
`,p5=v.div`
  font-size: 5rem;
  margin-bottom: 20px;
`,g5=v.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
`,h5=v.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`,v5=v.div`
  width: 100%;
  height: 180px;
  background: linear-gradient(135deg, ${S.verdePastello} 0%, ${S.rossoPastello} 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3.5rem;
`,x5=v.div`
  padding: 15px;
`,y5=v.h3`
  font-size: 1.1rem;
  margin: 0 0 10px 0;
  color: ${S.testoChiaro};
`,b5=v.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
  color: ${S.testoSecondario};
`;function z5(){const n=Ea(),[r,u]=H.useState([]);H.useEffect(()=>{const d=localStorage.getItem("favorites");d&&u(JSON.parse(d))},[]);const c=r.map(d=>Gp(d)).filter(d=>d!==void 0);return c.length===0?f.jsxs(Bm,{children:[f.jsx(Lm,{children:"❤️ I Miei Preferiti"}),f.jsxs(m5,{children:[f.jsx(p5,{children:"💔"}),f.jsx("h2",{children:"Nessuna ricetta nei preferiti"}),f.jsx("p",{children:"Esplora le ricette e aggiungi le tue preferite!"})]})]}):f.jsxs(Bm,{children:[f.jsx(Lm,{children:"❤️ I Miei Preferiti"}),f.jsxs("div",{style:{marginBottom:"20px",color:S.testoSecondario},children:["Hai ",f.jsx("strong",{children:c.length})," ricette preferite"]}),f.jsx(g5,{children:c.map(d=>d&&f.jsxs(h5,{onClick:()=>n(`/recipe/${d.id}`),children:[f.jsx(v5,{children:d.fotoUrl}),f.jsxs(x5,{children:[f.jsx(y5,{children:d.titolo}),f.jsxs(b5,{children:[f.jsxs("span",{children:[f.jsx(vt,{})," ",ti(d.tempoTotale)]}),f.jsxs("span",{children:[f.jsx(It,{style:{color:S.warning}})," ",d.valutazioneMedia.toFixed(1)]})]})]})]},d.id))})]})}const S5=v.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`,A5=v.h1`
  color: ${S.verdePrimario};
  margin-bottom: 30px;
  text-align: center;
`,C5=v.div`
  background: white;
  border-radius: 15px;
  padding: 30px;
  margin-bottom: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`,E5=v.input`
  width: 100%;
  padding: 15px 20px 15px 50px;
  font-size: 1.1rem;
  border: 2px solid ${S.grigio300};
  border-radius: 12px;
  margin-bottom: 20px;

  &:focus {
    outline: none;
    border-color: ${S.verdePrimario};
  }
`,j5=v(Hp)`
  position: absolute;
  left: 50px;
  top: 47px;
  color: ${S.testoSecondario};
  font-size: 1.2rem;
`,T5=v.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-top: 20px;
`,ns=v.select`
  padding: 12px;
  border: 2px solid ${S.grigio300};
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: ${S.verdePrimario};
  }
`,M5=v.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
`,O5=v.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`,R5=v.div`
  width: 100%;
  height: 180px;
  background: linear-gradient(135deg, ${S.verdePastello} 0%, ${S.rossoPastello} 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3.5rem;
`,N5=v.div`
  padding: 15px;
`,_5=v.h3`
  font-size: 1.1rem;
  margin: 0 0 10px 0;
  color: ${S.testoChiaro};
`,D5=v.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
  color: ${S.testoSecondario};
`;function U5(){const n=Ea(),[r,u]=H.useState(""),[c,d]=H.useState(""),[p,h]=H.useState(""),[j,z]=H.useState(""),g=l3(Nt,{ricerca:r,difficolta:c||void 0,tipo:p||void 0,tempoMassimo:j?parseInt(j):void 0});return f.jsxs(S5,{children:[f.jsx(A5,{children:"🔍 Cerca Ricette"}),f.jsxs(C5,{style:{position:"relative"},children:[f.jsx(j5,{}),f.jsx(E5,{type:"text",placeholder:"Cerca per nome, ingrediente, tag...",value:r,onChange:T=>u(T.target.value)}),f.jsxs(T5,{children:[f.jsxs(ns,{value:c,onChange:T=>d(T.target.value),children:[f.jsx("option",{value:"",children:"Tutte le difficoltà"}),f.jsx("option",{value:"facile",children:"⭐ Facile"}),f.jsx("option",{value:"media",children:"⭐⭐ Media"}),f.jsx("option",{value:"difficile",children:"⭐⭐⭐ Difficile"})]}),f.jsxs(ns,{value:p,onChange:T=>h(T.target.value),children:[f.jsx("option",{value:"",children:"Tutti i tipi"}),f.jsx("option",{value:"primi",children:"🍝 Primi"}),f.jsx("option",{value:"secondi",children:"🥩 Secondi"}),f.jsx("option",{value:"contorni",children:"🥗 Contorni"}),f.jsx("option",{value:"dolci",children:"🍰 Dolci"}),f.jsx("option",{value:"antipasti",children:"🍤 Antipasti"}),f.jsx("option",{value:"pizze_focacce",children:"🍕 Pizze & Focacce"})]}),f.jsxs(ns,{value:j,onChange:T=>z(T.target.value),children:[f.jsx("option",{value:"",children:"Qualsiasi tempo"}),f.jsx("option",{value:"30",children:"Fino a 30 min"}),f.jsx("option",{value:"60",children:"Fino a 1 ora"}),f.jsx("option",{value:"120",children:"Fino a 2 ore"})]})]})]}),f.jsxs("div",{style:{marginBottom:"20px",color:S.testoSecondario},children:["Trovate ",f.jsx("strong",{children:g.length})," ricette"]}),f.jsx(M5,{children:g.map(T=>f.jsxs(O5,{onClick:()=>n(`/recipe/${T.id}`),children:[f.jsx(R5,{children:T.fotoUrl}),f.jsxs(N5,{children:[f.jsx(_5,{children:T.titolo}),f.jsxs(D5,{children:[f.jsxs("span",{children:[f.jsx(vt,{})," ",ti(T.tempoTotale)]}),f.jsxs("span",{children:[f.jsx(It,{style:{color:S.warning}})," ",T.valutazioneMedia.toFixed(1)]})]})]})]},T.id))})]})}const Hm=v.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`,Gm=v.h1`
  color: ${S.verdePrimario};
  margin-bottom: 30px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`,q5=v.div`
  text-align: center;
  padding: 80px 20px;
  color: ${S.testoSecondario};
`,w5=v.div`
  font-size: 5rem;
  margin-bottom: 20px;
`,B5=v.div`
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
  flex-wrap: wrap;
`,ls=v.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;

  ${n=>n.$variant==="danger"?`
    background: ${S.errore};
    color: white;

    &:hover {
      background: ${S.rossoScuro};
    }
  `:`
    background: ${S.verdePrimario};
    color: white;

    &:hover {
      background: ${S.verdeScuro};
    }
  `}
`,L5=v.div`
  background: white;
  border-radius: 15px;
  padding: 25px;
  margin-bottom: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`,H5=v.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 2px solid ${S.verdePrimario};
`,G5=v.h2`
  color: ${S.verdePrimario};
  font-size: 1.5rem;
  margin: 0;
`,$5=v.span`
  color: ${S.testoSecondario};
  font-size: 14px;
`,V5=v.ul`
  list-style: none;
  padding: 0;
`,Y5=v.li`
  padding: 15px;
  border-bottom: 1px solid ${S.grigio200};
  display: flex;
  align-items: center;
  gap: 15px;
  transition: all 0.3s;
  background: ${n=>n.$purchased?S.verdePastello:"transparent"};

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: ${n=>n.$purchased?S.verdePastello:S.grigio100};
  }
`,Z5=v.input.attrs({type:"checkbox"})`
  width: 24px;
  height: 24px;
  cursor: pointer;
  accent-color: ${S.verdePrimario};
`,Q5=v.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: ${n=>n.$purchased?"line-through":"none"};
  opacity: ${n=>n.$purchased?.6:1};
`,X5=v.span`
  color: ${S.testoChiaro};
  font-weight: 500;
  font-size: 16px;
`,K5=v.span`
  color: ${S.testoSecondario};
  font-weight: 600;
  font-size: 16px;
`,J5=v.button`
  background: none;
  border: none;
  color: ${S.errore};
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;

  &:hover {
    background: ${S.rossoPastello};
  }
`,F5=v.div`
  background: ${S.verdePastello};
  padding: 15px 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 15px;
`,os=v.div`
  text-align: center;
`,rs=v.div`
  font-size: 24px;
  font-weight: bold;
  color: ${S.verdePrimario};
`,us=v.div`
  font-size: 12px;
  color: ${S.testoSecondario};
  text-transform: uppercase;
`;function I5(){const n=Ea(),[r,u]=H.useState([]);H.useEffect(()=>{const N=localStorage.getItem("shoppingList");N&&u(JSON.parse(N))},[]);const c=N=>{u(N),localStorage.setItem("shoppingList",JSON.stringify(N))},d=N=>{const w=r.map(G=>G.id===N?{...G,acquistato:!G.acquistato}:G);c(w)},p=N=>{const w=r.filter(G=>G.id!==N);c(w)},h=()=>{const N=r.filter(w=>!w.acquistato);c(N)},j=()=>{window.confirm("Vuoi davvero eliminare tutta la lista della spesa?")&&c([])},z=r.reduce((N,w)=>(N[w.ricettaId]||(N[w.ricettaId]={titolo:w.ricettaTitolo,items:[]}),N[w.ricettaId].items.push(w),N),{}),g=r.length,T=r.filter(N=>N.acquistato).length,O=g-T;return g===0?f.jsxs(Hm,{children:[f.jsxs(Gm,{children:[f.jsx(pr,{})," Lista della Spesa"]}),f.jsxs(q5,{children:[f.jsx(w5,{children:"🛒"}),f.jsx("h2",{children:"La tua lista è vuota"}),f.jsx("p",{children:"Aggiungi ingredienti dalle ricette per creare la tua lista della spesa!"}),f.jsxs(ls,{style:{marginTop:"20px"},onClick:()=>n("/"),children:[f.jsx(J4,{})," Esplora Ricette"]})]})]}):f.jsxs(Hm,{children:[f.jsxs(Gm,{children:[f.jsx(pr,{})," Lista della Spesa"]}),f.jsxs(F5,{children:[f.jsxs(os,{children:[f.jsx(rs,{children:g}),f.jsx(us,{children:"Totale"})]}),f.jsxs(os,{children:[f.jsx(rs,{children:T}),f.jsx(us,{children:"Acquistati"})]}),f.jsxs(os,{children:[f.jsx(rs,{children:O}),f.jsx(us,{children:"Da comprare"})]})]}),f.jsxs(B5,{children:[T>0&&f.jsxs(ls,{$variant:"primary",onClick:h,children:[f.jsx(Dp,{})," Rimuovi acquistati"]}),f.jsxs(ls,{$variant:"danger",onClick:j,children:[f.jsx(dm,{})," Svuota lista"]})]}),Object.entries(z).map(([N,w])=>f.jsxs(L5,{children:[f.jsxs(H5,{children:[f.jsx(G5,{children:w.titolo}),f.jsxs($5,{children:[w.items.filter(G=>G.acquistato).length," / ",w.items.length," acquistati"]})]}),f.jsx(V5,{children:w.items.map(G=>f.jsxs(Y5,{$purchased:G.acquistato,children:[f.jsx(Z5,{checked:G.acquistato,onChange:()=>d(G.id)}),f.jsxs(Q5,{$purchased:G.acquistato,children:[f.jsxs(X5,{children:[G.ingrediente,G.note&&f.jsxs("span",{style:{fontSize:"12px",color:S.testoSecondario},children:[" (",G.note,")"]})]}),f.jsxs(K5,{children:[G.quantita," ",G.unita]})]}),f.jsx(J5,{onClick:()=>p(G.id),children:f.jsx(dm,{})})]},G.id))})]},N))]})}const k5=v.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`,P5=v.h1`
  color: ${S.verdePrimario};
  margin-bottom: 30px;
  text-align: center;
  font-size: 2.5rem;
`,W5=v.div`
  background: linear-gradient(135deg, ${S.verdePrimario} 0%, ${S.verdeScuro} 100%);
  border-radius: 20px;
  padding: 40px;
  margin-bottom: 30px;
  color: white;
  box-shadow: 0 10px 30px rgba(0, 140, 69, 0.3);
  position: relative;
  overflow: hidden;

  &::before {
    content: '👨‍🍳';
    position: absolute;
    top: -30px;
    right: -30px;
    font-size: 200px;
    opacity: 0.1;
  }
`,ex=v.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 30px;
  flex-wrap: wrap;
  gap: 20px;
`,tx=v.div`
  flex: 1;
`,ax=v.h2`
  font-size: 2.2rem;
  margin: 0 0 10px 0;
`,ix=v.div`
  font-size: 1.3rem;
  opacity: 0.9;
  display: flex;
  align-items: center;
  gap: 10px;

  svg {
    font-size: 1.5rem;
    color: #FFD700;
  }
`,nx=v.div`
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 20px 30px;
  text-align: center;
  border: 2px solid rgba(255, 255, 255, 0.3);
`,lx=v.div`
  font-size: 3rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  svg {
    color: #FF6B6B;
  }
`,ox=v.div`
  font-size: 14px;
  opacity: 0.9;
  margin-top: 5px;
`,rx=v.div`
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  height: 30px;
  margin-top: 20px;
  overflow: hidden;
  position: relative;
`,ux=v.div`
  background: linear-gradient(90deg, #FFD700 0%, #FFA500 100%);
  height: 100%;
  width: ${n=>n.$progress}%;
  transition: width 0.5s ease;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 10px;
  font-weight: bold;
  font-size: 14px;
`,cx=v.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`,Jo=v.div`
  background: white;
  border-radius: 15px;
  padding: 25px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`,Fo=v.div`
  font-size: 2.5rem;
  margin-bottom: 15px;
`,Io=v.div`
  font-size: 2rem;
  font-weight: bold;
  color: ${S.verdePrimario};
  margin-bottom: 5px;
`,ko=v.div`
  font-size: 14px;
  color: ${S.testoSecondario};
  text-transform: uppercase;
  letter-spacing: 1px;
`,sx=v.h2`
  color: ${S.verdePrimario};
  font-size: 1.8rem;
  margin: 40px 0 20px 0;
  display: flex;
  align-items: center;
  gap: 12px;
`,fx=v.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`,dx=v.div`
  background: ${n=>n.$unlocked?"linear-gradient(135deg, #FFD700 0%, #FFA500 100%)":S.grigio200};
  border-radius: 15px;
  padding: 20px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
  opacity: ${n=>n.$unlocked?1:.5};
  position: relative;

  &:hover {
    transform: ${n=>n.$unlocked?"scale(1.05)":"none"};
    box-shadow: ${n=>n.$unlocked?"0 8px 20px rgba(255, 215, 0, 0.4)":"none"};
  }
`,mx=v.div`
  font-size: 3rem;
  margin-bottom: 10px;
`,px=v.div`
  font-weight: 600;
  font-size: 14px;
  color: ${n=>n.$unlocked?"white":S.testoSecondario};
  margin-bottom: 5px;
`,gx=v.div`
  font-size: 11px;
  color: ${n=>n.$unlocked?"rgba(255,255,255,0.9)":S.testoSecondario};
  line-height: 1.4;
`,hx=v.div`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  opacity: 0.5;
`;function vx(){const[n,r]=H.useState({livello:"Cuoco Casalingo",punti:450,puntiPerProssimoLivello:1e3,streak:7,ricetteCucinate:15,ricetteQuestoMese:8,regioniEsplorate:5,difficoltaMedia:2.3}),[u,c]=H.useState([{id:"1",nome:"Primo Piatto",icon:"🍝",descrizione:"Hai cucinato la tua prima ricetta!",unlocked:!0},{id:"2",nome:"Amante della Pasta",icon:"🍝",descrizione:"Cucina 5 ricette di pasta",unlocked:!0},{id:"3",nome:"Maestro Pizza",icon:"🍕",descrizione:"Cucina 3 pizze perfette",unlocked:!0},{id:"4",nome:"Dolce Vita",icon:"🍰",descrizione:"Prepara 5 dolci",unlocked:!1},{id:"5",nome:"Giro d'Italia",icon:"🗺️",descrizione:"Cucina ricette da 10 regioni diverse",unlocked:!1},{id:"6",nome:"Streaker",icon:"🔥",descrizione:"Cucina per 7 giorni consecutivi",unlocked:!0},{id:"7",nome:"Master Chef",icon:"👨‍🍳",descrizione:"Cucina 50 ricette",unlocked:!1},{id:"8",nome:"Nonna Certificata",icon:"👵",descrizione:"Raggiungi il livello massimo",unlocked:!1}]),d=n.punti/n.puntiPerProssimoLivello*100,p=u.filter(h=>h.unlocked).length;return f.jsxs(k5,{children:[f.jsx(P5,{children:"🏆 Il Mio Profilo"}),f.jsxs(W5,{children:[f.jsxs(ex,{children:[f.jsxs(tx,{children:[f.jsx(ax,{children:"Ciao, Cuoco! 👨‍🍳"}),f.jsxs(ix,{children:[f.jsx(It,{}),n.livello]})]}),f.jsxs(nx,{children:[f.jsxs(lx,{children:[f.jsx(qp,{}),n.streak]}),f.jsx(ox,{children:"Giorni Consecutivi"})]})]}),f.jsxs("div",{children:[f.jsxs("div",{style:{marginBottom:"10px",opacity:.9},children:[n.punti," / ",n.puntiPerProssimoLivello," XP"]}),f.jsx(rx,{children:f.jsxs(ux,{$progress:d,children:[Math.round(d),"%"]})})]})]}),f.jsxs(cx,{children:[f.jsxs(Jo,{children:[f.jsx(Fo,{children:"📚"}),f.jsx(Io,{children:n.ricetteCucinate}),f.jsx(ko,{children:"Ricette Cucinate"})]}),f.jsxs(Jo,{children:[f.jsx(Fo,{children:"📅"}),f.jsx(Io,{children:n.ricetteQuestoMese}),f.jsx(ko,{children:"Questo Mese"})]}),f.jsxs(Jo,{children:[f.jsx(Fo,{children:"🗺️"}),f.jsxs(Io,{children:[n.regioniEsplorate,"/20"]}),f.jsx(ko,{children:"Regioni Esplorate"})]}),f.jsxs(Jo,{children:[f.jsx(Fo,{children:"⭐"}),f.jsxs(Io,{children:[n.difficoltaMedia.toFixed(1),"/3"]}),f.jsx(ko,{children:"Difficoltà Media"})]})]}),f.jsxs(sx,{children:[f.jsx(X4,{})," Badge Sbloccati (",p,"/",u.length,")"]}),f.jsx(fx,{children:u.map(h=>f.jsxs(dx,{$unlocked:h.unlocked,children:[!h.unlocked&&f.jsx(hx,{children:"🔒"}),f.jsx(mx,{children:h.icon}),f.jsx(px,{$unlocked:h.unlocked,children:h.nome}),f.jsx(gx,{$unlocked:h.unlocked,children:h.descrizione})]},h.id))})]})}const xx=v.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`,yx=v.h1`
  color: ${S.verdePrimario};
  margin-bottom: 15px;
  text-align: center;
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`,bx=v.p`
  text-align: center;
  color: ${S.testoSecondario};
  font-size: 1.1rem;
  margin-bottom: 40px;
`,zx=v.div`
  background: linear-gradient(135deg, ${S.verdePrimario} 0%, ${S.verdeScuro} 100%);
  border-radius: 20px;
  padding: 40px;
  margin-bottom: 30px;
  color: white;
  box-shadow: 0 10px 30px rgba(0, 140, 69, 0.3);
`,Sx=v.h2`
  font-size: 1.8rem;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 12px;
`,Ax=v.p`
  font-size: 1.1rem;
  line-height: 1.6;
  opacity: 0.95;
  margin-bottom: 25px;
`,Cx=v.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 25px;
`,Ex=v.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;

  svg {
    font-size: 16px;
  }
`,$m=v.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
`,Vm=v.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`,Ym=v.div`
  width: 100%;
  height: 180px;
  background: linear-gradient(135deg, ${S.verdePastello} 0%, ${S.rossoPastello} 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3.5rem;
`,Zm=v.div`
  padding: 15px;
`,Qm=v.h3`
  font-size: 1.1rem;
  margin: 0 0 10px 0;
  color: ${S.testoChiaro};
`,Xm=v.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
  color: ${S.testoSecondario};
`,jx=v.h2`
  color: ${S.verdePrimario};
  font-size: 1.5rem;
  margin: 40px 0 20px 0;
`;function Tx(){const n=Ea(),[r,u]=H.useState({giorno:"",ora:0,stagione:"",meteo:""});H.useEffect(()=>{const p=new Date,h=["Domenica","Lunedì","Martedì","Mercoledì","Giovedì","Venerdì","Sabato"],j=p.getMonth()+1;let z="";j>=3&&j<=5?z="primavera":j>=6&&j<=8?z="estate":j>=9&&j<=11?z="autunno":z="inverno";const g=Math.random();let T="";g<.3?T="pioggia":g<.6?T="nuvoloso":T="sole",u({giorno:h[p.getDay()],ora:p.getHours(),stagione:z,meteo:T})},[]);const d=(()=>{const{giorno:p,ora:h,stagione:j,meteo:z}=r;return p==="Domenica"&&h>=11&&h<=14?{motivo:`È ${p} ed è l'ora perfetta per un pranzo tradizionale in famiglia! 🍝`,ricette:Nt.filter(g=>g.occasioniSpeciali?.includes("domenica")||g.tempoTotale>60).slice(0,3),contesto:[{icon:f.jsx(B4,{}),text:p},{icon:f.jsx(vt,{}),text:`${h}:00 - Ora di pranzo`}]}:z==="pioggia"?{motivo:"Fuori piove... è il momento perfetto per un piatto caldo e confortante! ☔",ricette:Nt.filter(g=>g.tipo==="primi"||g.tags.includes("comfort")).slice(0,3),contesto:[{icon:f.jsx(G4,{}),text:"Pioggia"},{icon:f.jsx(F4,{}),text:"Piatto caldo consigliato"}]}:h>=19&&h<=21?{motivo:"È sera e hai poco tempo? Ecco ricette veloci ma deliziose! ⚡",ricette:Nt.filter(g=>g.tempoTotale<=30).slice(0,3),contesto:[{icon:f.jsx(vt,{}),text:`${h}:00 - Cena`},{icon:f.jsx(mr,{}),text:"Ricette veloci"}]}:j==="estate"?{motivo:"È estate! Ti consiglio piatti freschi e leggeri perfetti per la stagione ☀️",ricette:Nt.filter(g=>g.stagioneMigliore?.includes("estate")||g.filtriAlimentari?.includes("vegetariano")).slice(0,3),contesto:[{icon:f.jsx(k4,{}),text:"Estate"},{icon:f.jsx(wp,{}),text:"Piatti leggeri"}]}:{motivo:"Ecco le ricette più amate della community! 🌟",ricette:Nt.filter(g=>g.isPopolari).slice(0,3),contesto:[{icon:f.jsx(It,{}),text:"Popolari"}]}})();return f.jsxs(xx,{children:[f.jsxs(yx,{children:[f.jsx(mr,{})," Cosa Cucino Oggi?"]}),f.jsx(bx,{children:"Suggerimenti intelligenti basati su giorno, ora, stagione e meteo"}),f.jsxs(zx,{children:[f.jsx(Sx,{children:"💡 Perfetto per te oggi"}),f.jsx(Ax,{children:d.motivo}),f.jsx(Cx,{children:d.contesto.map((p,h)=>f.jsxs(Ex,{children:[p.icon,p.text]},h))})]}),f.jsx($m,{children:d.ricette.length>0?d.ricette.map(p=>f.jsxs(Vm,{onClick:()=>n(`/recipe/${p.id}`),children:[f.jsx(Ym,{children:p.fotoUrl}),f.jsxs(Zm,{children:[f.jsx(Qm,{children:p.titolo}),f.jsxs(Xm,{children:[f.jsxs("span",{children:[f.jsx(vt,{})," ",ti(p.tempoTotale)]}),f.jsxs("span",{children:[f.jsx(It,{style:{color:S.warning}})," ",p.valutazioneMedia.toFixed(1)]})]})]})]},p.id)):f.jsx("p",{children:"Nessun suggerimento disponibile al momento."})}),f.jsx(jx,{children:"📚 Altre Ricette Popolari"}),f.jsx($m,{children:Nt.filter(p=>p.isPopolari).slice(3,6).map(p=>f.jsxs(Vm,{onClick:()=>n(`/recipe/${p.id}`),children:[f.jsx(Ym,{children:p.fotoUrl}),f.jsxs(Zm,{children:[f.jsx(Qm,{children:p.titolo}),f.jsxs(Xm,{children:[f.jsxs("span",{children:[f.jsx(vt,{})," ",ti(p.tempoTotale)]}),f.jsxs("span",{children:[f.jsx(It,{style:{color:S.warning}})," ",p.valutazioneMedia.toFixed(1)]})]})]})]},p.id))})]})}const Mx=v.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
`,Ox=v.h1`
  color: ${S.verdePrimario};
  margin-bottom: 15px;
  text-align: center;
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`,Rx=v.p`
  text-align: center;
  color: ${S.testoSecondario};
  font-size: 1.1rem;
  margin-bottom: 40px;
`,Nx=v.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 15px;
  margin-bottom: 40px;
`,_x=v.div`
  background: ${n=>n.$selected?`linear-gradient(135deg, ${S.verdePrimario} 0%, ${S.verdeScuro} 100%)`:"white"};
  color: ${n=>n.$selected?"white":S.testoChiaro};
  padding: 20px;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border: 3px solid ${n=>n.$selected?S.verdePrimario:"transparent"};

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    border-color: ${S.verdePrimario};
  }
`,Dx=v.div`
  font-size: 2.5rem;
`,Ux=v.div`
  font-weight: 600;
  font-size: 1rem;
  text-align: center;
`,qx=v.div`
  font-size: 0.85rem;
  opacity: 0.9;
  display: flex;
  align-items: center;
  gap: 5px;
`,wx=v.div`
  margin-top: 30px;
`,Bx=v.h2`
  color: ${S.verdePrimario};
  font-size: 1.8rem;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
`,Lx=v.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
`,Hx=v.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`,Gx=v.div`
  width: 100%;
  height: 180px;
  background: linear-gradient(135deg, ${S.verdePastello} 0%, ${S.rossoPastello} 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3.5rem;
`,$x=v.div`
  padding: 15px;
`,Vx=v.h3`
  font-size: 1.1rem;
  margin: 0 0 10px 0;
  color: ${S.testoChiaro};
`,Yx=v.p`
  font-size: 0.9rem;
  color: ${S.testoSecondario};
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`,Km=v.div`
  text-align: center;
  padding: 60px 20px;
  color: ${S.testoSecondario};
  font-size: 1.1rem;
`,Zx={[V.ABRUZZO]:"🏔️",[V.BASILICATA]:"🌄",[V.CALABRIA]:"🌶️",[V.CAMPANIA]:"🍕",[V.EMILIA_ROMAGNA]:"🥓",[V.FRIULI_VENEZIA_GIULIA]:"🍷",[V.LAZIO]:"🏛️",[V.LIGURIA]:"🌊",[V.LOMBARDIA]:"🧈",[V.MARCHE]:"🐟",[V.MOLISE]:"🌾",[V.PIEMONTE]:"🍫",[V.PUGLIA]:"🫒",[V.SARDEGNA]:"🐑",[V.SICILIA]:"🍊",[V.TOSCANA]:"🍷",[V.TRENTINO_ALTO_ADIGE]:"⛰️",[V.UMBRIA]:"🌿",[V.VALLE_DAOSTA]:"🏔️",[V.VENETO]:"🎭"},Po={[V.ABRUZZO]:"Abruzzo",[V.BASILICATA]:"Basilicata",[V.CALABRIA]:"Calabria",[V.CAMPANIA]:"Campania",[V.EMILIA_ROMAGNA]:"Emilia-Romagna",[V.FRIULI_VENEZIA_GIULIA]:"Friuli-Venezia Giulia",[V.LAZIO]:"Lazio",[V.LIGURIA]:"Liguria",[V.LOMBARDIA]:"Lombardia",[V.MARCHE]:"Marche",[V.MOLISE]:"Molise",[V.PIEMONTE]:"Piemonte",[V.PUGLIA]:"Puglia",[V.SARDEGNA]:"Sardegna",[V.SICILIA]:"Sicilia",[V.TOSCANA]:"Toscana",[V.TRENTINO_ALTO_ADIGE]:"Trentino-Alto Adige",[V.UMBRIA]:"Umbria",[V.VALLE_DAOSTA]:"Valle d'Aosta",[V.VENETO]:"Veneto"};function Qx(){const n=Ea(),[r,u]=H.useState(null),c=g=>Nt.filter(T=>T.regione===g).length,d=g=>Nt.filter(T=>T.regione===g),p=g=>{u(g===r?null:g)},h=g=>{n(`/recipe/${g}`)},j=Object.values(V).sort((g,T)=>Po[g].localeCompare(Po[T])),z=r?d(r):[];return f.jsxs(Mx,{children:[f.jsxs(Ox,{children:[f.jsx(Bp,{})," Mappa Italia"]}),f.jsx(Rx,{children:"Esplora le ricette tradizionali regione per regione"}),f.jsx(Nx,{children:j.map(g=>{const T=c(g);return f.jsxs(_x,{$selected:r===g,onClick:()=>p(g),children:[f.jsx(Dx,{children:Zx[g]}),f.jsx(Ux,{children:Po[g]}),f.jsxs(qx,{children:[f.jsx(mm,{}),T," ",T===1?"ricetta":"ricette"]})]},g)})}),r&&f.jsxs(wx,{children:[f.jsxs(Bx,{children:[f.jsx(mm,{}),"Ricette del ",Po[r]]}),z.length>0?f.jsx(Lx,{children:z.map(g=>f.jsxs(Hx,{onClick:()=>h(g.id),children:[f.jsx(Gx,{children:g.fotoUrl}),f.jsxs($x,{children:[f.jsx(Vx,{children:g.titolo}),f.jsx(Yx,{children:g.descrizione})]})]},g.id))}):f.jsxs(Km,{children:["Nessuna ricetta disponibile per questa regione al momento.",f.jsx("br",{}),"Stiamo lavorando per aggiungerne di nuove! 🍝"]})]}),!r&&f.jsx(Km,{children:"👆 Seleziona una regione per esplorare le sue ricette tipiche"})]})}const Xx=v.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: white;
  border-top: 3px solid ${S.verdePrimario};
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`,Kx=v(Cv)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 100%;
  text-decoration: none;
  color: ${n=>n.$active?S.verdePrimario:S.grigio600};
  transition: all 0.3s ease;

  &:hover {
    color: ${S.verdePrimario};
    background-color: ${S.verdePastello};
  }

  svg {
    font-size: 24px;
    margin-bottom: 4px;
  }

  span {
    font-size: 12px;
    font-weight: ${n=>n.$active?"600":"400"};
  }
`,Jx=[{path:"/",icon:V4,label:"Home"},{path:"/categories",icon:Z4,label:"Categorie"},{path:"/search",icon:Hp,label:"Cerca"},{path:"/shopping-list",icon:pr,label:"Spesa"},{path:"/favorites",icon:dr,label:"Preferiti"},{path:"/dashboard",icon:e3,label:"Profilo"}];function Fx(){const n=bl();return f.jsx(Xx,{children:Jx.map(r=>f.jsxs(Kx,{to:r.path,$active:n.pathname===r.path,children:[f.jsx(r.icon,{}),f.jsx("span",{children:r.label})]},r.path))})}const Ix=v.div`
  min-height: 100vh;
  background-color: #F8F9FA;
  color: #212529;
`,kx=v.main`
  padding-bottom: 70px; /* Spazio per bottom navigation */
`;function Px(){return f.jsx(zv,{basename:"/ricette-italiane",future:{v7_startTransition:!0,v7_relativeSplatPath:!0},children:f.jsxs(Ix,{children:[f.jsx(kx,{children:f.jsxs(pv,{children:[f.jsx(aa,{path:"/",element:f.jsx(m3,{})}),f.jsx(aa,{path:"/recipe/:id",element:f.jsx(a5,{})}),f.jsx(aa,{path:"/categories",element:f.jsx(d5,{})}),f.jsx(aa,{path:"/favorites",element:f.jsx(z5,{})}),f.jsx(aa,{path:"/search",element:f.jsx(U5,{})}),f.jsx(aa,{path:"/shopping-list",element:f.jsx(I5,{})}),f.jsx(aa,{path:"/dashboard",element:f.jsx(vx,{})}),f.jsx(aa,{path:"/suggestions",element:f.jsx(Tx,{})}),f.jsx(aa,{path:"/italy-map",element:f.jsx(Qx,{})})]})}),f.jsx(Fx,{})]})})}Sh.createRoot(document.getElementById("root")).render(f.jsx(H.StrictMode,{children:f.jsx(Px,{})}));
