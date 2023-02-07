'use strict';

const person = require('./person.json');
console.log(person);
console.log(person.firstname);
console.log(`${person.lastname}, ${person.firstname}`);
console.log(person['firstname']);
let key='firstname';
console.log(person[key]);
key='age';
console.log(person[key]);

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));
for(const key of Object.keys(person)){
    console.log(`${key}=${person[key]}`);
}

console.log('###############');

for(const [key, value] of Object.entries(person)){
    console.log(`${key}=${value}`);
}