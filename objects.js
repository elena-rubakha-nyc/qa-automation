// Variant 1. Possible, but not the most convenient
let testUser = new Object();

testUser.name = "Elena";
testUser.age = 35;
testUser.city = "New York";
console.log(testUser);

// Variant 2

let testUserLiteral = {
  name: "Elena",
  age: 35,
  city: "New York",
};

console.log(testUserLiteral);

// create an object via massive

let testUserArray = new Array("Elena", 35, "New York");
console.log(testUserArray);

// create an object via function

let testUserFunction = new Function(
  "userName",
  "age",
  "city",
  "return userName + age + city"
);
console.log(testUserFunction("Sergey", 35, "NYC"));

//задать новые свойства
let testUserSimple = {
  name: "Elena",
  age: 35,
  "city-default": "New York",
};
console.log(testUserSimple);

testUserSimple.car = "Tucson";
console.log(testUserSimple);

testUserSimple["pet"] = "cat";
console.log(testUserSimple);

let newProp = "hobby";
testUserSimple[newProp] = "reading";
console.log(testUserSimple);

// functions calling object properties
if (testUserSimple.age > 30 && testUserSimple.car == "Tucson") {
  console.log("You're are eligible");
} else {
  console.log("Your are NOT eligible");
}

let anotherTestUser = testUserSimple;
console.log(anotherTestUser);

anotherTestUser.name = "Gulnara";
console.log(anotherTestUser);
console.log(testUserSimple);

////
let calculation = {
  april: 4000,
  may: 5000,
  june: 7000,
  calculateAverage: function () {
    let average = (calculation.april + calculation.may + calculation.june) / 3;
    console.log(average);
  },
};

calculation.calculateAverage();
