# JSON SERIALIZER

A simple npm package to:

-   <b>assign an id</b> to every object of a json array
-   <b>generate mock datas</b>

---

## Installation:

```bash
$ npm i jsoncereal
```

---

## Documentation:

### makeId()

#### index.js

```Javascript
import jcereal from jsoncereal

const array = [
    {name: "Happy", surname: "Hippo"},
    {name: "Dante", surname: "Alighieri"}
]

const serializedArray = jcereal.makeId(array)

console.log(serializedArray)
```

#### OUTPUT

```Javascript
serializedArray = [
    { _id: "550e8400-e29b-41d4-a716-446655442222", name: "Happy", surname: "Hippo"},
    { _id: "550e8400-e29b-41d4-a716-446655440000", name: "Dante", surname: "Alighieri"}
]
```

---

### makeIdCustom()

#### index.js

```Javascript
import jcereal from jsoncereal

const array = [
    {name: "Happy", surname: "Hippo"},
    {name: "Dante", surname: "Alighieri"}
]

const serializedArray = jcereal.makeIdCustom(array, "myCustomIdName")

console.log(serializedArray)
```

#### OUTPUT

```Javascript
serializedArray = [
    { myCustomIdName: "550e8400-e29b-41d4-a716-446655442222", name: "Happy", surname: "Hippo"},
    { myCustomIdName: "550e8400-e29b-41d4-a716-446655440000", name: "Dante", surname: "Alighieri"}
]
```

---

### makeMock()

#### index.js

```Javascript
import jcereal from jsoncereal

const array = [
    {name: "Happy", surname: "Hippo"},
    {name: "Dante", surname: "Alighieri"}
]

// let's say I want four new objects
const mockArray = jcereal.makeMock(array, 4)
```

#### OUTPUT

```Javascript
mockArray = [
    {
        name: "Happy",
        surname: "Hippo",
        age: 49,
        site: "https://en.wikipedia.org/wiki/Matterhorn"},
    {
        name: "Dante",
        surname: "Alighieri",
        24,
        site: "https://en.wikipedia.org/wiki/Mont_Blanc" },
    {
        name: 'Lorem ipsum dolor sit amet',
        surname: 'Lorem ipsum dolor sit amet',
        age: 92,
        site: 'https://it.wikipedia.org/wiki/Monte_Rosa'
    },
    {
        name: 'Lorem ipsum dolor sit amet',
        surname: 'Lorem ipsum dolor sit amet',
        age: 42,
        site: 'https://it.wikipedia.org/wiki/Monte_Rosa'
    },
    {
        name: 'Lorem ipsum dolor sit amet',
        surname: 'Lorem ipsum dolor sit amet',
        age: 90,
        site: 'https://it.wikipedia.org/wiki/Monte_Rosa'
    },
    {
        name: 'Lorem ipsum dolor sit amet',
        surname: 'Lorem ipsum dolor sit amet',
        age: 94,
        site: 'https://it.wikipedia.org/wiki/Monte_Rosa'
    }
]
```

---

## Updates:

### 1.2.1

-   minor fixes

### 1.2.0

-   added utility function mockData()

### 1.1.8

-   minor fixes

### 1.1.0

-   new function makeIdCustom(), that is equal to makeId() but the id property name is customizable
-   updated exports method

### 1.0.1

-   fixed module.exports
