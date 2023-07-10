// Matrix array (массив в массиве)
const sodaVendor = [
  ["Coke", "Coke Zero", "Coke Vanilla"],
  ["Sprite", "Sprite Zero", "Sprite Lime"],
  ["Fanta", "Fanta Mint", "Fanta Grape"],
];

console.log(sodaVendor[0][2]);

sodaVendor[0][2] = "Coke Cherry";
console.log(sodaVendor);

//  Array Cycles - for of

// sum of all values
const scoreValues = [20, 30, 45, 50, 120, 300];

// set initial value
let totalScores = 0;

// create a cycle
for (let value of scoreValues) {
  totalScores += value;
}

// get result
console.log(totalScores);

// Task: get a sum of all salaries

const devs = [
  { name: "John", language: "Python", salary: 200000 },
  { name: "Amanda", language: "C++", salary: 180000 },
  { name: "James", language: "Kotlin", salary: 150000 },
];

let totalSalary = 0;

for (let dev of devs) {
  totalSalary += dev.salary;
  console.log(dev);
}

console.log(totalSalary);
