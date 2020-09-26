function addNumber(number1, number2) {
  return number1 + number2;
}

// console.log(addNumber(1, 2));

let subtractNumber = (number1, number2) => {
  return number1 - number2;
};

// console.log(subtractNumber(2, 1));

for (let i = 0; i < 5; i++) {
  console.log(i);
}

let names = ["nikho", "sagala"];

for (index in names) {
  console.log(names[index]);
}

let people = 7;

while (people > 0) {
  console.log(people);
  people--;
}

let number = Math.floor(Math.random() * 101);

if (number % 2 == 0) {
  console.log(`${number} is even`);
} else {
  console.log(`${number} is odd`);
}

let age = 30;

switch (age) {
  case 18:
    // do something
    break;
  case 40:
    // do other thing
    break;
  case 60:
    // do other thing
    break;
  default:
  // other case fallback to here
}
