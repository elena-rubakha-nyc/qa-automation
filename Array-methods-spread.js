/* forEach  - метод позволяющий перебрать данные массива. 
Не может ничего возвращать - нельзя использовать с ним return */

//someValue
const values = [1, 3, 4, 5, 6, 8];
values.forEach(function (value, index, values) {
  console.log(`element: ${value}, index: ${index}, length: ${values.length}`);
});

// filter - возвращает новый массив на основе старого

const passwords = ["ASDAQ", "TUYTUYT", "FGDSSS", "ASDF"];

const filteredPasswords = passwords.filter(function (eachPassword) {
  return eachPassword.length != 5;
});

console.log(filteredPasswords);

const scores = [20, 45, 55, 100];
const filteredScores = scores.filter(function (eachScore) {
  return eachScore > 25;
});
console.log(filteredScores);

const filteredScores2 = scores.filter((score) => {
  return score < 50;
});
console.log(filteredScores2);

// sort - сортировка

const points = [2, 5, 12, 3, 8, 23, 45];

// const sortedPoints  = points.sort ((argA, argB) => {
//     return argA - argB //   сравнивает 2 числа
// })

const sortedPoints = points.sort((argA, argB) => {
  return argB - argA;
});

console.log(sortedPoints);

const pwds = ["ASDAQ", "TUYTUYT", "FGDSSS", "ASDF"];
const sortedPwds = pwds.sort((argA, argB) => {
  return argA.length - argB.length;
});

console.log(sortedPwds);

//map  - создем новый массив на основе предыдущего путем преобразования данных.
// чаще всего нужен для создания массива объектов

const values = [2, 5, 12, 3, 8, 23, 45];
const playersScores = values.map((value, index, array) => {
  const sum = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return {
    id: index,
    score: value,
    allScores: sum,
  };
});

console.log(playersScores);

// сравнить 2 свойства объекта (например, длина)

const values = [1, 2, 3, 4];
const values2 = [5, 6, 7, 8, 9];

console.log(values.length === values2.length);

// CONCAT - объедияет 2 массива

const newValues = values.concat(values2);
console.log(newValues);
console.log(newValues.length);

// spread - ...

const values = [1, 2, 3, 4];
const values2 = [5, 6, 7, 8, 9];
//console.log([...values, ...values2])

console.log(Math.max(...values, ...values2));
