'use strict';
// for(let i=0, n=10, k=0; i<10; i++,n--,k+=0.5){
//     console.log(`i=${i}, n=${n}, k=${k}`);
//     }
// let i=0, n=10, k=0;
// while(i<10){
//     console.log(`i=${i}, n=${n}, k=${k}`);
//     i++;
//     n--;
//     k+=0.5;
// }


const names=['Santosh', 'Hari', 'Ram', 'Sita', 'Pos']
const friends=['Ram', 'Hari', 'Krishna', 'Hari']
const commonNames=names.filter(firstname=>friends.includes(firstname));
console.log(commonNames);
console.log(commonNames.length);
console.log(names.filter(firstname=>friends.includes(firstname)).length);


function findTheNumberofCommonFriends(listA, listB){
    return listA.filter(firstname => listB.includes(firstname)).length
}
console.log(`we have ${findTheNumberofCommonFriends(names,friends)} friends in common.`);

const result=[];
for(const person of names){
if(friends.includes(person)){
    result.push(person)
}
}
console.log('result: ' ,result);
console.log(result.length);


let count=0;
for(const person of names){
    if(friends.includes(person)){
        count++;
    }
}
console.log('count= ' ,count)


const common=names.map(person=>friends.includes(person));


console.log(common);


const numbers=[1,2,3,4,5];
numbers.forEach((num, i, array)=>{
    console.log(`numbers[${i}]=é${num}, ${array[i]*2}`)
});