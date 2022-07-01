// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,e=function(){try{return t({},"x",{}),!0}catch(t){return!1}},r=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,l=n.__defineSetter__,u=n.__lookupGetter__,i=n.__lookupSetter__,f=r,c=function(t,e,r){var f,c,y,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((c="value"in r)&&(u.call(t,e)||i.call(t,e)?(f=t.__proto__,t.__proto__=n,delete t[e],t[e]=r.value,t.__proto__=f):t[e]=r.value),y="get"in r,p="set"in r,c&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&a&&a.call(t,e,r.get),p&&l&&l.call(t,e,r.set),t},y=e()?f:c,p=function(t,e,r){y(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})},b="function"==typeof Math.fround?Math.fround:null,d="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),_=Object.prototype.toString,s=_,m=function(t){return s.call(t)},v=Object.prototype.hasOwnProperty,g=function(t,e){return null!=t&&v.call(t,e)},h="function"==typeof Symbol?Symbol.toStringTag:"",j=g,w=h,S=_,A=m,F=function(t){var e,r,n;if(null==t)return S.call(t);r=t[w],e=j(t,w);try{t[w]=void 0}catch(e){return S.call(t)}return n=S.call(t),e?t[w]=r:delete t[w],n},O=d&&"symbol"==typeof Symbol.toStringTag?F:A,T="function"==typeof Float32Array,N=function(t){return T&&t instanceof Float32Array||"[object Float32Array]"===O(t)},P=Number.POSITIVE_INFINITY,E="function"==typeof Float32Array?Float32Array:null,I=N,x=P,V=E,k="function"==typeof Float32Array?Float32Array:void 0,G=function(){throw new Error("not implemented")},M=new(function(){var t,e;if("function"!=typeof V)return!1;try{e=new V([1,3.14,-3.14,5e40]),t=I(e)&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===x}catch(e){t=!1}return t}()?k:G)(1),C=b;"function"!=typeof C&&(C=function(t){return M[0]=t,M[0]});var Y=C;function q(t,e,r,n){var o,a,l,u,i,f,c;if(f=t-e,t<=0||f<=0)return NaN;if(1===t||0===n)return 0;for(o=r[a=n<0?(1-t)*n:0],a+=n,l=0,c=2;c<=t;c++)u=r[a],o=Y(o+u),i=Y(Y(c*u)-o),l=Y(l+Y(Y(Y(1/(c*(c-1)))*i)*i)),a+=n;return Y(l/f)}return p(q,"ndarray",(function(t,e,r,n,o){var a,l,u,i,f,c,y;if(c=t-e,t<=0||c<=0)return NaN;if(1===t||0===n)return 0;for(a=r[o],l=o+n,u=0,y=2;y<=t;y++)i=r[l],a=Y(a+i),f=Y(Y(y*i)-a),u=Y(u+Y(Y(Y(1/(y*(y-1)))*f)*f)),l+=n;return Y(u/c)})),q},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).svarianceyc=e();
//# sourceMappingURL=browser.js.map
