'use strict';
/*random number gives value from zero to less than one*/
const suite=Math.floor(Math.random()*4);
const rank=Math.floor(Math.random()*13)+1;
let suiteSymbol;

if(suite===0)      suiteSymbol='\u2665';
else if(suite===1) suiteSymbol='\u2666';
else if(suite===2) suiteSymbol='\u2660';
else                 suiteSymbol='\u2663';
