// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(t){"use strict";var e,r="function"==typeof Object.defineProperty?Object.defineProperty:null,o=Object.defineProperty,n=Object.prototype,a=n.toString,l=n.__defineGetter__,i=n.__defineSetter__,u=n.__lookupGetter__,f=n.__lookupSetter__;e=function(){try{return r({},"x",{}),!0}catch(t){return!1}}()?o:function(t,e,r){var o,c,y,p;if("object"!=typeof t||null===t||"[object Array]"===a.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===a.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((c="value"in r)&&(u.call(t,e)||f.call(t,e)?(o=t.__proto__,t.__proto__=n,delete t[e],t[e]=r.value,t.__proto__=o):t[e]=r.value),y="get"in r,p="set"in r,c&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&l&&l.call(t,e,r.get),p&&i&&i.call(t,e,r.set),t};var c,y=e,p="function"==typeof Math.fround?Math.fround:null,b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),d=Object.prototype.toString,_=Object.prototype.hasOwnProperty,s="function"==typeof Symbol?Symbol.toStringTag:"";c=b&&"symbol"==typeof Symbol.toStringTag?function(t){var e,r,o,n,a;if(null==t)return d.call(t);r=t[s],a=s,e=null!=(n=t)&&_.call(n,a);try{t[s]=void 0}catch(e){return d.call(t)}return o=d.call(t),e?t[s]=r:delete t[s],o}:function(t){return d.call(t)};var v,m=c,g="function"==typeof Float32Array,j=Number.POSITIVE_INFINITY,h="function"==typeof Float32Array?Float32Array:null,w="function"==typeof Float32Array?Float32Array:void 0;v=function(){var t,e,r;if("function"!=typeof h)return!1;try{e=new h([1,3.14,-3.14,5e40]),r=e,t=(g&&r instanceof Float32Array||"[object Float32Array]"===m(r))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===j}catch(e){t=!1}return t}()?w:function(){throw new Error("not implemented")};var S=new v(1),A="function"==typeof p?p:function(t){return S[0]=t,S[0]};function F(t,e,r,o){var n,a,l,i,u,f,c;if(f=t-e,t<=0||f<=0)return NaN;if(1===t||0===o)return 0;for(n=r[a=o<0?(1-t)*o:0],a+=o,l=0,c=2;c<=t;c++)i=r[a],n=A(n+i),u=A(A(c*i)-n),l=A(l+A(A(A(1/(c*(c-1)))*u)*u)),a+=o;return A(l/f)}function O(t,e,r,o,n){var a,l,i,u,f,c,y;if(c=t-e,t<=0||c<=0)return NaN;if(1===t||0===o)return 0;for(a=r[n],l=n+o,i=0,y=2;y<=t;y++)u=r[l],a=A(a+u),f=A(A(y*u)-a),i=A(i+A(A(A(1/(y*(y-1)))*f)*f)),l+=o;return A(i/c)}y(F,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:O}),t.default=F,t.ndarray=O,Object.defineProperty(t,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).svarianceyc={});
//# sourceMappingURL=browser.js.map
