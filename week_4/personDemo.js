'use strict';

// json
const person={
    "firstname":"Matt",
    "lastname": "River",
    "age": 35,
    "member":true
};
console.log(person);

// js
const person2={
    firstname:'Matt',
    lastname: 'River',
    age: 35,
    member:true
};
console.log(person2);

const person3={
    firstname:`Matt`,
    'lastname': 'River',
    "age": 35,
    member:true
};
console.log(person3);

person3.phone="123456789";
person3['xyz']='abc';
console.log(person3);