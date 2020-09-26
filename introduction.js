// var, let, const

var name = "nikho";
let age = 25;
const gender = "male";

name = 60;

// gender = "female";
// gives error coz we cant reassign const

var name = "sagala";

// let age = 30;
// error

function printMyName(name, age) {
  console.log(`${name} ${age}`); // string interpolation
}

printMyName(name, age);

const addNumber = (number1, number2) => {
  return number1 + number2;
};

console.log(addNumber(10, 20));

let person = {
  name: "nikho",
  age: 25,
  isWorking: true,
};

console.log(person.name, person.age, person.isWorking);

const prettyPrintPerson = (person) => {
  console.log(`You name is ${person.name} your age is ${person.age}`);
};

prettyPrintPerson(person);

person = {
  name: "john doe",
  age: 20,
  isWorking: false,
};

prettyPrintPerson(person);

let names = ["nikho", "jane doe", "john doe"];

console.log(names.sort().reverse());

names.forEach((name) => {
  console.log(name);
});

function printName(name) {
  console.log(name);
}

names.forEach(printName);

// camelCase
// snake_case

const axios = require("axios");



console.log(`first ${2 == "2"}`);
console.log(`second ${2 === "2"}`);
