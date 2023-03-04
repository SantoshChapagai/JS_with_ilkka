'use strict';

function checkNumberBigEnough(number){
    return new Promise( (resolve,reject)=>{
        if(number<10){
            reject('too small');
        }
        else{
            resolve('big enough');
        }
    });
}

checkNumberBigEnough(12).then(console.log).catch(console.log);
checkNumberBigEnough(2).then(console.log).catch(console.log);

checkNumberBigEnough(34)
    .then(result=>console.log("it's "+result))
    .catch(error=>console.log(`Error: ${error}`));

checkNumberBigEnough(3)
    .then(result => console.log("it's " + result))
    .catch(error => console.log(`Error: ${error}`));