"use strict";var f=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var x=f(function(D,m){
var b=require('@stdlib/math-base-assert-is-nan/dist'),l=require('@stdlib/math-base-special-abs/dist');function N(a,r,u,c){var t,n,v,s,e,i,o;if(t=r.data,n=r.accessors[0],a===1||u===0)return b(n(t,c))?NaN:0;for(e=c,s=l(n(t,e)),v=s,o=1;o<a;o++){if(e+=u,i=l(n(t,e)),b(i))return i;i<s?s=i:i>v&&(v=i)}return v-s}m.exports=N
});var q=f(function(E,p){
var y=require('@stdlib/math-base-assert-is-nan/dist'),g=require('@stdlib/math-base-special-abs/dist'),O=require('@stdlib/array-base-arraylike2object/dist'),P=x();function R(a,r,u,c){var t,n,v,s,e,i;if(a<=0)return NaN;if(s=O(r),s.accessorProtocol)return P(a,s,u,c);if(a===1||u===0)return y(r[c])?NaN:0;for(v=c,n=g(r[v]),t=n,i=1;i<a;i++){if(v+=u,e=g(r[v]),y(e))return e;e<n?n=e:e>t&&(t=e)}return t-n}p.exports=R
});var j=f(function(F,d){
var h=require('@stdlib/strided-base-stride2offset/dist'),w=q();function z(a,r,u){return w(a,r,u,h(a,u))}d.exports=z
});var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),k=j(),B=q();A(k,"ndarray",B);module.exports=k;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
