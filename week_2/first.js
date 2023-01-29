'use strict';

console.log('Hello world!');

const a=10;
console.log(a);
// a=12; error

let b = 20;
console.log(b);
b=50;
console.log(b);

let c=a+b;
console.log('c=' ,c);

console.log('c=' +c);
console.log('c='+c);
const result='c= '+c;
console.log(result);
console.log("c= "+c);
console.log('sum= '+a+b);
console.log('sum= '+(a+b));

console.log(`Result of ${a}+${b} = ${c}`);
console.log(`sum of ${a} and ${b} is ${a+b}`)
console.log(`saaaaa "bbbbbb" 'cccccc' ddddd`);
console.log('aaaa \'aaaaa\' bbbbbb');
// unicode.org
console.log('\u2663');
console.log('\u2666');
const hearts='\u2665';
console.log(hearts);
const spade='\u2660';
console.log(spade);
console.log('\u2700');
// when no proper hexadecimal number
console.log(String.fromCodePoint('0x1F977'));
console.log(String.fromCodePoint('0x1F481'));
const funny=String.fromCodePoint(0x1F34D,0x1F1EB, 0x1F1EE);
console.log(funny);