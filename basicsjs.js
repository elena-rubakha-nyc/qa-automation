console.log("Hello Student1!");
console.log("Hello Lenochka!");
console.log("Hello Lenochka!");

//setting variables

let userName = "Elena";
let name2 = "Sergey";
name2 = userName;

console.log(userName);
console.log(name2);

const BIRTH_DAY = "06/22/1988";
BIRTH_DAY = "07/01/2023"; // not possible
console.log(BIRTH_DAY);

var errormessage;
errormessage = "Ooops something went wroong";
console.log(errormessage);

// do not use special chars in variables names

// опрераторы  - =, +, <, >
// операнды - variable, data, "text"
// унарный - 1 операнд
let amount = -10; // 10 - операнд, "-" - оператор

// бинарный - 2 операнда
let user = "Vasya";

// тернарный  - 3 операнда
let balance = 100;
let penalty = balance < 0 ? 50 : 0;
console.log(penalty);

// типы данные
let numberType = 10;
let floatNumber = 10.75;
let stringType = "text";
let anotherStringType = "she said 'hello'"; // использовать экранирование
let text2 = "text with \t continue'";
let errorMessage = 'she said "hello"';
console.log(text2);

// тип данныз boolean
let lightIsOn = true;
let lightIsOff = false;
// тип данных undefined
let d;
// типа данных null
let nothing = null;
// objects key:value
let cars = {
  first: "honda",
  second: "toyota",
  third: "mersedes",
};
let person = {
  age: 60,
  name: "Dave",
  address: "NY",
};
console.log(person);
//massives
const INCOME = [1000, 4500, 3700, 5200];
INCOME.push(2800);
console.log(INCOME);

// functions - to do
//let toDo = (){}

// data type  - string
let newName = "Lena";
let job = "Senior QA";
let human = newName + " " + job;
//console.log("This is the best " + human)
// строковые щаблоны
console.log(`This is the best ${human} \u23E9.`);

let nameLenght = newName.length;
console.log(nameLenght);

// длина считается с 1, порядковые индексы (номера) считаются с 0
console.log(`Index of the letter at position 2 is ${newName.charAt(2)}`);

// вывод все в строчные буквы
console.log(newName.toLowerCase());

// сравнение строк
console.log(newName > job);

// NUMBERS
let myLuckyNymber = 12;
let floatNumber2 = 2.5;

// задача посчитать среднее экранное времч по приложениям
let whatsapp = 50;
let fb = 2;
let insta = 12.5;
let youtube = 15;

let total = whatsapp + fb + insta + youtube;
let averageTime = total / 4;
console.log(total / 4);
console.log(typeof total);
console.log(typeof averageTime);

console.log(Math.ceil(averageTime));
console.log(Math.floor(averageTime));
console.log(Math.trunc(averageTime));

let country = "USA";
console.log(typeof country);
country = 7;
console.log(typeof country);


let i = 0;
result = ++i;
// i = i + 1;
// result = i;
console.log(`result = ${result} i = ${i}`)

let x = 0;
result = x++;
// result = x;
// x = x + 1;
console.log(`result = ${result} x = ${x}`);

let z = 6;
result = z--;
// result = z;
// z = z - 1;
console.log(`result = ${result} z = ${z}`);