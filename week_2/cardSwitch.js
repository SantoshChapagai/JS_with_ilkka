'use strict';
/*random number gives value from zero to less than one*/
const suite=Math.floor(Math.random()*4);
const rank=Math.floor(Math.random()*13)+1;
let suiteSymbol;
switch(suite){
    case 0: suiteSymbol='\u2665';
     break;
    case 1: suiteSymbol='\u2666';
     break;
    case 2: suiteSymbol='\u2660';
     break;
    case 3: suiteSymbol='\u2663';
    break;
    default:  nothing;        
}



console.log(`${suiteSymbol} ${rank}`);