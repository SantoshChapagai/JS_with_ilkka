'use strict';
// inxed start from 0
const numbers=[1,2,3,4,5];
console.log(numbers);
console.log(numbers[0]);
console.log(numbers[2]);
console.log(numbers[0]+numbers[2]);
console.log('Length is ' ,numbers.length);
numbers.push(6);
console.log(numbers.pop());
console.log('Length is ' ,numbers.length);
console.log(numbers, numbers.length);


// sum of numebrs in array
let sum=numbers[0]+numbers[1]+numbers[2]+numbers[3]+numbers[4];
console.log('sum= ',sum);

for(let i=0; i<4; i++){
    console.log(`numbers[${i}]=${numbers[i]}`)
}
sum=0;
for(let i=0; i<4; i++){
    sum=sum+numbers[i];
}
console.log(`${numbers.join(' + ')}=${sum}`);

let resultString=' ';
sum=0;
for(let i=0; i<4; i++){
    sum+=numbers[i];
    resultString +=numbers[i];
    if(i<3){
        resultString+=' + ';
    }
}
console.log(resultString+' = '+sum);

 sum=0;
 for(let i=0; i<numbers.length; i++){
    sum += numbers[i];
 }
 console.log(sum);

 sum=0;
 for(const number of numbers){
 sum+=number;
 }
 console.log(`${numbers.join(' + ')}= ${sum}` );
