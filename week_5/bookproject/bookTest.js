'use strict'
const library = require('./books.json');
console.log(library[0].books);
console.log(library[0].books[0]);
console.log(library[0].books[0].name);
console.log('#### first person ###');
for (const book of library[0].books){
    console.log(`${book.name}, ${book.price} €`);
}
console.log('#### second person ###');
for (const book of library[1].books){
    console.log(`${book.name}, ${book.price} €`);
}

console.log('#### all persons, all books #####');

for(const person of library){
    for (const book of person.books){
        console.log(book.name);
    }
}
console.log('##### version 2 #####');
for(const person of library){
    console.log(`${person.firstname} ${person.lastname}`);
    for (const book of person.books){
        console.log('\t' + book.name);
    }
}
console.log('##### another version ####');
for (const person of library){
    const name = `${person.firstname} ${person.lastname}`;
    for (const book of person.books){
        console.log(`${name}: ${book.name}`);
    }
}

console.log('### total number of pages per person ####');

for(const person of library){
    let sumOfPages = 0;
    const name = `${person.firstname} ${person.lastname}`;
    for(const book of person.books){
        sumOfPages+=book.pages;
        

    }
    console.log(`${name}: ${sumOfPages} pages`)
}

console.log('###total number of pages and total price per person ###');

for(const person of library){
    let sumOfPages = 0;
    let totalPrice= 0;
    const name = `${person.firstname} ${person.lastname}`;
    for(const book of person.books){
        sumOfPages+=book.pages; 
        totalPrice+=book.price;    

    }
    console.log(`${name}: ${sumOfPages} pages, ${totalPrice} €.`)
}

console.log('#### Total number of pages and total price per person as well as grand total ###');


    let sumPrice= 0;
    let totalPages = 0;
for(const person of library){
    let sumOfPages = 0;
    
    let totalPrice= 0;
    

    const name = `${person.firstname} ${person.lastname}`;
    for(const book of person.books){
        sumOfPages+=book.pages; 
        totalPrice+=book.price;    

    }
    
    console.log(`${name}: ${sumOfPages} pages, ${totalPrice} €.`);
    totalPages += sumOfPages;
    sumPrice += totalPrice;
}
console.log(`Total pages: ${totalPages} Total price: ${sumPrice} €`);


function totalPriceOfTheLibrary(){
    let sum = 0;
    for(const person of library){
        for(const book of person.books){
            sum += book.price;
        }
    }
    return sum;
}
console.log('The value of the library is' ,totalPriceOfTheLibrary(),'€');