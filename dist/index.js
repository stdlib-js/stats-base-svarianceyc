"use strict";var l=function(r,i){return function(){return i||r((i={exports:{}}).exports,i),i.exports}};var x=l(function(A,p){
var t=require('@stdlib/number-float64-base-to-float32/dist');function E(r,i,y,v){var s,a,n,u,c,f,e;if(f=r-i,r<=0||f<=0)return NaN;if(r===1||v===0)return 0;for(v<0?a=(1-r)*v:a=0,s=y[a],a+=v,n=0,e=2;e<=r;e++)u=y[a],s=t(s+u),c=t(t(e*u)-s),n=t(n+t(t(t(1/(e*(e-1)))*c)*c)),a+=v;return t(n/f)}p.exports=E
});var F=l(function(B,j){
var o=require('@stdlib/number-float64-base-to-float32/dist');function O(r,i,y,v,s){var a,n,u,c,f,e,q;if(e=r-i,r<=0||e<=0)return NaN;if(r===1||v===0)return 0;for(a=y[s],n=s+v,u=0,q=2;q<=r;q++)c=y[n],a=o(a+c),f=o(o(q*c)-a),u=o(u+o(o(o(1/(q*(q-1)))*f)*f)),n+=v;return o(u/e)}j.exports=O
});var T=l(function(C,S){
var b=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),R=x(),d=F();b(R,"ndarray",d);S.exports=R
});var g=require("path").join,h=require('@stdlib/utils-try-require/dist'),k=require('@stdlib/assert-is-error/dist'),w=T(),m,_=h(g(__dirname,"./native.js"));k(_)?m=w:m=_;module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
