'use strict'

if(process.argv.length!==5){
    console.log('Not enough data')
}else{
const [,, numberA, op, numberB]= process.argv;

 const first=+numberA;
 const second=Number(numberB);

 let result;
 if(op==='+'){
    result=first+second;
 }else if(op==='-'){
   result=first-second;
 }else if(op==='x'){
    result=first*second;
 }else if(op==='/'){
    result=first/second;
 }
 console.log(`${first} ${op} ${second} = ${result}`);
  }
