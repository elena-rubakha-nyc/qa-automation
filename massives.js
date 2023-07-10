// Arrays  - []

let productsList = ["coke", "water", "tomato", "meat", "ice cream"];

// console.log(productsList.length)

// console.log(productsList[0]);
// console.log(productsList[3]);
//console.log(productsList[productsList.length-1]);

// Замена
productsList[3] = "fish";
console.log(productsList);

// Метод push > добавление нового значения
productsList.push("milk", "carrot", "cherry");
console.log(productsList);
console.log(productsList.length);

//Удаление из конца массива POP

console.log(productsList.pop());
console.log(productsList);

/* Работа с началом массива (индексом 0) 
SHIFT (удаляет 1 элеиент массива)
UNSHIFT (добавляет элементы в начало массива)
Очень затратные  - чаще всего используется метод РОР */

console.log(productsList.shift());
console.log(productsList);

productsList.unshift("pepsi", "coke zero");
console.log(productsList);

// REVERSE - меняет порыдок с конца в начало

productsList.reverse();
console.log(productsList);

productsList.pop();
console.log(productsList);
