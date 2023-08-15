let workers = [
  {
    name: "Pete",
    salary: 4500,
  },
  {
    name: "Sam",
    salary: 3600,
  },
  {
    name: "Amanda",
    salary: 4850,
  },
  {
    name: "Emily",
    salary: 3250,
  },
  {
    name: "John",
    salary: 4300,
  },
];

let plan = 4200;
let total = 0;

// for (worker of workers) {
//     total = total + worker.salary;
// };

// console.log(total);

for (let worker of workers) {
  if (worker.salary > plan) {
    let finalSalary = worker.salary * 1.2;
    console.log(`${worker.name}'s salary with bonus is ${finalSalary}`);
    total += finalSalary;
  } else {
    total += worker.salary;
  }
}

console.log(total);
