'use strict';
/*random number gives value from zero to less than one*/
const suite=Math.floor(Math.random()*4);
const rank=Math.floor(Math.random()*13)+1;
let suiteSymbol;

if(suite===0){ //hearts
    suiteSymbol='\u2665';
}else if(suite===1){ //diamonds
    suiteSymbol='\u2666';
}else if(suite===2){ //spades
    suiteSymbol='\u2660';
}else{ //clubs
    suiteSymbol='\u2663';
}




console.log(`${suiteSymbol} ${rank}`);