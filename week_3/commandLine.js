'use strict'
// console.log(process.argv);

const args=process.argv;

for(let i=0; i<args.lenght; i++){
    console.log(`args[${i}]=${args[i]}`);
}
console.log(process.argv.lenght);
if(process.argv.lenght<3){
    console.log('no arguments');
}else{
    console.log(`${process.argv.length-2} arguments`);
}
const[,,...numberstrings]=process.argv;
console.log(numberstrings);

for(let n=2; n<process.argv.length;n++){
    console.log(process.argv[n]);
}
let sum=0;
for(const num of numberstrings){
    sum+= +num; //same as Number(num)
}
console.log(sum);