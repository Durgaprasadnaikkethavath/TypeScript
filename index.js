"use strict";
let message = "Hello, Welcome typescript class";
console.log(message);
// data types
let isDone = true;
let decimal = 2;
let color = "blue";
let list = [1, 2, 3];
console.log(isDone);
console.log(decimal);
console.log(color);
console.log(list);
function greet(person) {
    return `Hello, I'm ${person.name} and my age is ${person.age}`;
}
let details = { name: "Durga", age: 23 };
console.log(greet(details));
