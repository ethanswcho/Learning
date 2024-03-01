//String, Numbers, Boolean, null, undefined, Symbol

const name = 'John';
const age = 30;

// Concatenation
console.log('My name is ' + name + ' and I am age ' + age);
// Template Strings
const hello = `My name is ${name} and I am age ${age}`;
const s = 'technology, computers, it, code';
console.log(s.split(', '));

// Arrays - variables that hold multiple values
// Note, after declaring with const you can manipulate array value
// but cannot assign a NEW array after const
// Arrays are not limited to one type - can hold multiple types

const fruits = ['apples', 'oranges', 'pears'];
console.log(fruits[1]);
fruits.push('mangos');
fruits.unshift('strawberries');
console.log(fruits);
fruits.pop();
console.log(fruits);
console.log(fruits.indexOf('oranges'));

// Object literals -> key value pairs
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}
console.log(person.address.city, person.lastName);
const { firstName, lastName, address: { city } } = person;
console.log(firstName, city);

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist Appt',
        isCompleted: true
    }
]
console.log(todos[1].text);
// JSONIFY
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

// For loops
for (let i = 0; i < 10; i++){
    console.log(i);
}

// While loop
let i = 0;
while (i < 10) {
    console.log(`While Loop Number: ${i}`);
    i++;
}

for (let i = 0; i < todos.length; i++){
    console.log(todos[i].text);
}

for (let todo of todos) {
    console.log(todo.text);
}

// forEach, map, filter
todos.forEach(function(todo) {
    console.log(todo.text);
});

const todoText = todos.map(function(todo) {
    return todo.text;
});

console.log(todoText);

const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo) {
    return todo.text;
})

console.log(todoCompleted);


// Conditionals
// == is only value
// ==== is value AND data type
const x = 6;
const y = 11;
if (x > 5 && y > 10) {
    console.log('x is more th an 5 or y is more th an 10');
}

const x = 10;
const color = x > 10 ? 'red' : 'blue';
switch(color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is NOT red or blue');
}

// function
// can have BASE values
function addNums(num1 = 1, num2 = 2) {
    return num1 + num2;
}
console.log(addNums(5, 5));

// arrow function
const addNums = num1 => num1 + 5;
console.log(addNums(1));

// OOP in JavaScript
// Constructor function
// Define function inside constructor
function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getBirthYear = function() {
        return this.dob.getFullYear();
    }
    this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// Prototypes -> better way to declare methods for classes
Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}

Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}


// More modern (and BEST) way to initialize a class
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName
        this.lastName = lastName
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// Instantiate object
const person1 = new Person('John', 'Doe', '4-3-1980');
console.log(person1.getBirthYear());
console.log(person1.getFullName());

