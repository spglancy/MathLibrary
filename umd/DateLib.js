!function(t){"function"==typeof define&&define.amd?define(t):t()}(function(){"use strict";const t=(t,e)=>Number(t.toFixed(e)),e=(t,e=0,o=0)=>{let n=String(t).split(".");return 1===n.length&&n.push("0"),n[0]=n[0].length<e?"0".repeat(e-n[0].length)+n[0]:n[0],n[1]=n[1].length<o?n[1]+"0".repeat(o-n[1].length):n[1],n.join(".")},o=o=>"$"+e(t(o,2),1,2),n=(o,n)=>e(t(o*n,2),1,2);module.exports={round:t,floor:t=>Number((t-.5).toFixed()),ceil:t=>Number((t+.5).toFixed()),pad:e,degToRad:e=>t(e*Math.PI/180,4),radToDeg:e=>t(180*e/Math.PI,1),toDollars:o,tax:n,taxSum:(o,r)=>e(t(o+Number(n(o,r)),2),1,2),interest:(t,e,n)=>{var r=n/100+1;return o(t*Math.pow(r,e))},mortgage:(t,e,n)=>o(t*n*Math.pow(1+n,e)/(Math.pow(1+n,e)-1)),intToHex:t=>"#"+t.toString(16)}});
