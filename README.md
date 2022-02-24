# JSON CEREALIZER

### A simple npm package to assign an id to every object of a json array
***
## Installation:

'npm i jsoncereal'
***
## Usage example:

#### index.js
```Javascript
import jcereal from jsoncereal

const array = [
    {name: "Happy", surname: "Hippo"},
    {name: "Dante", surname: "Alighieri"}
]

const serializedArray = jcereal.makeId(array)

console.log(serializedArray)'
```
---
#### OUTPUT

```Javascript
serializedArray = [
{ _id: "550e8400-e29b-41d4-a716-446655442222", name: "Happy", surname: "Hippo"},
{ _id: "550e8400-e29b-41d4-a716-446655440000", name: "Dante", surname: "Alighieri"}
]
```
***
## Updates:

### 1.1.0

--> new function makeIdCustom(), that is equal to makeId() but the id property name is customizable
<br/>
--> updated exports method

### 1.0.1

--> fixed module.exports
