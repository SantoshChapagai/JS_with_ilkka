'use strict'

// usually do not mix types in array
const a=['abc', 2, 3,[1,2,3], 'd'];
for(const item of a){
    console.log(item);
}
const twoDimension=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

const numbers=[1,2,3,4,5,6];
const [first, second]= numbers;
console.log(first, second);

let[f, s,...rest]=numbers;
console.log(f,s,rest);
const[,,third,,...restitems]=numbers;
console.log(third);
console.log(restitems);
console.log(numbers);
[numbers[1],numbers[3]]=[numbers[3], numbers[1]];
console.log(numbers);

let x=2;
let y =3;
console.log(x,y);
[x, y]=[y,x];
console.log(x,y);