/* Получаем посылку в постамате.
тестовые данные: пользователь имеет - сумма 100р на счете
Код для получения посылки пришел в смс оповещении A001DFX0
Текст из смс… ваша посылка находится в ячейке под номером 4

Постамат имеет вид - [null, null, null, “4 - ваша посылка” , null] 

В условии проверьте, если наш код равен коду из смс,
то выведем в консоль данные о нашей посылке, и спишем со счета 100р 
в формате “Вы получили посылку из ячейки 4 и ваш счет составляет: …р.”
*/

let balance = 100;
let smsCode = "A001DFX0";

if (smsCode == "A001DFX0") {
  balance -= 100;
  console.log(
    `Вы получили посылку из ячейки 4 и ваш счет составляет: ${balance} рублей`
  );
} else {
  console.log("Код не найден. Проверьте правильность кода или введите новый");
}

/*Усложним задачу и создадим массив постамата, в котором содержатся 5 ячеек и к ячейкам с посылками приложден код. 
Условия те же, что и выше. 
В решении создаем for loop, который проверяет код и выдает сообщение с ячейкой для посылки. 
Отдельно создаем условие, которое выдаст сообщение, если код не найден. */

let postamat = [
  { cellNumber: "1", smsCode: "B096AAN1" },
  { cellNumber: "2", smsCode: null },
  { cellNumber: "3", smsCode: "C036RAN9" },
  { cellNumber: "4", smsCode: "A001DFX0" },
  { cellNumber: "5", smsCode: "A671DFX0" },
];

let userBalance = 100;
let userSmsCode = "A001DFX0";
let codeFound = false;

for (let cell of postamat) {
  if (cell.smsCode == userSmsCode) {
    userBalance -= 100;
    codeFound = true;
    console.log(
      `Вы получили посылку из ячейки ${cell.cellNumber} и ваш счет составляет: ${userBalance} рублей`
    );
  }
}

if (codeFound == false) {
  console.log("Код не найден. Проверьте правильность кода или введите новый");
}