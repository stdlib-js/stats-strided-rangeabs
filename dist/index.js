"use strict";var f=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var x=f(function(D,m){
var b=require('@stdlib/math-base-assert-is-nan/dist'),l=require('@stdlib/math-base-special-abs/dist');function N(a,r,i,c){var t,u,v,s,e,n,o;if(t=r.data,u=r.accessors[0],a===1||i===0)return b(u(t,c))?NaN:0;for(e=c,s=l(u(t,e)),v=s,o=1;o<a;o++){if(e+=i,n=l(u(t,e)),b(n))return n;n<s?s=n:n>v&&(v=n)}return v-s}m.exports=N
});var q=f(function(E,p){
var y=require('@stdlib/math-base-assert-is-nan/dist'),g=require('@stdlib/math-base-special-abs/dist'),O=require('@stdlib/array-base-arraylike2object/dist'),P=x();function R(a,r,i,c){var t,u,v,s,e,n;if(a<=0)return NaN;if(s=O(r),s.accessorProtocol)return P(a,s,i,c);if(a===1||i===0)return y(r[c])?NaN:0;for(v=c,u=g(r[v]),t=u,n=1;n<a;n++){if(v+=i,e=g(r[v]),y(e))return e;e<u?u=e:e>t&&(t=e)}return t-u}p.exports=R
});var j=f(function(F,d){
var h=require('@stdlib/strided-base-stride2offset/dist'),w=q();function z(a,r,i){return w(a,r,i,h(a,i))}d.exports=z
});var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),k=j(),B=q();A(k,"ndarray",B);module.exports=k;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
