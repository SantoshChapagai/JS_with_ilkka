# Books library API

Restriction: Same person can be in json only once

## **getBooksOfPerson(firstname, lastname)**

- function returns all book objects of the person.
- if person has no books, an empty array is returned.

## **getTheNamesOfBooks(firstname, lastname)**

- return an array of book names (strings) of books belonging to given person.
- if person has no books, an empty array is returned.

## **getTheTotals(firstname, lastname)**

- return an object consisting total price and total pages with `ok` true.
- if person doesn't exist, an empty object with `ok` is false is returned.

```json
{
  "ok": true,
  "totalPrice": 0,
  "totalPages": 0
}
```

## **getTheOwnerOfBook(bookName)**

The bookNmae is the whole book name.

- returns an array of strings. The string is formed from firstname and lastname.
- if not match is found, an empty array is returned
  for book `ABc` function returns:

```json
["Matt River", "leila Hökki"]
```

## **getAllBooks(substringInName)**

- returns an array of objects of form:

```json
{
  "firstname": "",
  "lastname": "",
  "book": { "name": "", "pages": 0, "price": 0 }
}
```

for example find books that have `ABC`in their name:

```json
[
  {
    "firstname": "Matt",
    "lastname": "River",
    "books": { "name": "ABC", "pages": 300, "price": 30 }
  },
  {
    "firstname": "Matt",
    "lastname": "River",
    "books": { "name": "Testing ABC", "pages": 100, "price": 45 }
  },
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "books": { "name": "ABC", "pages": 200, "price": 30 }
  },
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "books": { "name": "ABC", "pages": 50, "price": 10 }
  }
]
```

if no match is found, an empty array is returned.
