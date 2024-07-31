let message: string = "Hello, Welcome typescript class";
console.log(message);

// data types

let isDone: boolean = true;
let decimal: number = 2;
let color: string = "blue";
let list: number[] = [1, 2, 3];

console.log(isDone);
console.log(decimal);
console.log(color);
console.log(list);

// interfaces object

interface Person {
  name: string;
  age: number;
}

function greet(person: Person) {
  return `Hello, I'm ${person.name} and my age is ${person.age}`;
}

let details = { name: "Durga", age: 23 };

console.log(greet(details));
