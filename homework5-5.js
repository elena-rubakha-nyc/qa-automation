/* In JavaScript multiplication (*) and division (/)
 have higher precedence than addition (+) and subtraction (-):
 1. value2 / 5
 2. VALUE1 + (value2 / 5)
 3. (VALUE1 + (value2 / 5)) + 17
 */

const VALUE1 = 12;
let value2 = Math.floor(Math.random() * 999);
let result = VALUE1 + value2 / 5 + 17;
console.log(result);
