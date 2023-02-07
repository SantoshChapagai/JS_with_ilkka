# JSON (Javascript Object Notation)

## Documentation

json.org

## File extension

.json

## Values

- strings
- numbers
- arrays
- objects
- true
- false
- null

## Examples

### string

Must be double quoted
empty string is " "

```json
"this is a string"
"Here is a \"quote\" in the 'middle' of the string"
"hearts symbol is \u2665"
```

outputs

```
this is a string
Here is a \"quote\" in the 'middle' of the string
hearts symbol is ♥
```

### Number

- no leading +
- only one leading 0
- decimal separator is .

These are allowed:

```json
0, 0.5, 345.678, 1200, -1, -0.57, -23.45, 1.5E10, 2E-2, 2E+2, 1e3
```

These are not allowed

```json
00.34, +20, +0.5, 00023

```

## Array

Array begins with [ and ends with ].Values in the array are separated by comma , .

```json
[1,2,3,4,5]
["textA", "textB"]
[{"firstname":"sun", "age": 10};{"firstname":"mas", "age": 20}]
[[1,2,3],[4,5,6]]

[
    [1,1,1,1,1],
    [1,0,0,1,1],
    [0,0,1,0,0],
    [1,0,1,0,1],
]

```

## Object

```json
{
  "firstname": "sano",
  "lastname": "trek",
  "age": 24
}
```

```json
{
    "firstname":"samp",
    "children"[
        {"firstname":"jack", "age":5},
        {"firstname":"mike", "age":5}
    ]
}
```

```json
{
  "key1": "value1",
  "key2": "value2",
  "key3": [1, 2, 3],
  "key4": {
    "a": 1,
    "b": "text",
    "c": [7, 8, 9]
  }
}
```

```json
{
    "firstname":"samp",
    "children":[
        {"firstname":"jack", "age":5},
        {"firstname":"mike", "age":8}
    ]
},
{
    "firstname":"Vera",
    "children":[
        {"firstname":"sampli", "age":5}
    ]
}

```

```json
{
  "Matt": {
    "children": [
      { "firstname": "jack", "age": 5 },
      { "firstname": "mike", "age": 8 }
    ]
  },
  "Vera": {
    "children": [{ "firstname": "sampli", "age": 5 }]
  }
}
```
