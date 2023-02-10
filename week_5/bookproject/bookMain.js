'use strict';

const{getBooksOfPerson, getTheNamesOfBooks, getTheTotals, getTheOwnerOfBook, getAllBooks} = require('./bookstorage');
console.log(getBooksOfPerson('Leila', 'Hökki'));
console.log(getBooksOfPerson('Matt', 'River'));


console.log('###### book names #####');
console.log(getTheNamesOfBooks('Matt', 'River'));

console.log('#####')
console.log(getTheNamesOfBooks('Leila', 'Hökki'));

console.log('#####');
console.log(getTheNamesOfBooks('Vera', 'River'));
console.log(getTheNamesOfBooks('x', 'Hökki'));

console.log('#### totals ####');

console.log(getTheTotals('Leila', 'Hökki'));
const result=getTheTotals('Matt', 'River');
console.log(result);
if(result.ok){
    console.log(`pages: ${result.totalPages}, price: ${result.totalPrice}`);
}else{
    console.log('Not found');
}

console.log('#### owners ###');
console.log(getTheOwnerOfBook('ABC'));
console.log(getTheOwnerOfBook('x'));
console.log(getTheOwnerOfBook('Programming Javascript'));


console.log('## getALlBooks ###');
console.log(getAllBooks('ABC'));