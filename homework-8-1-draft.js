/*Дан массив с расходами за 12 месяцев - yearlyExpences.
Необходимо создать функцию, содержащую расчет суммы затрат, 
которые даны в массиве - в расчет берутся суммы только выше 1000. 
Расчет производится только для одного массива yearlyExpences.

Создать тестовую функцию, которая будет проверять, 
что расчет суммы затрат производится верно. 
Проверить расчет на данных тестовых объектах (используйте forEach()).

То есть, ваша тестовая функция должна быть вызвана внутри цикла forEach() 
и цикл пройдет три раза по данному массиву тестовых объектов. 

1. Create an array 
2. filter by >1000
3. function to sum values in each array
4. check that the sum is calculated correctly (create a new array with resuts)
*/

let expencesExamples = [
  {
    yearlyExpences: [
      2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390,
    ],
  },
  {
    yearlyExpences: [
      500, 1000, 90000, 80, 980, 9000, 10, 400, 3000, 250, 45000, 1200,
    ],
  },
  {
    yearlyExpences: [
      20, 200, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 900, 7000,
    ],
  },
];

let expectedResults = [40590, 148200, 25709];

//const selectedExpenses = []

function SumOfExpenses(value) {
  let values = value.yearlyExpences;
  const filteredValues = values.filter(function (eachValue) {
    return eachValue > 1000;
  });
  // console.log(filteredValues);
  const sumFilteredValues = filteredValues.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  //console.log(sumFilteredValues);
  return sumFilteredValues;
}

// function testExpenses (value)

expencesExamples.forEach(function (value, index) {
  if (SumOfExpenses(value) == expectedResults[index]) {
    console.log("The calculation is correct");
  } else {
    console.log("The calculation is incorrect");
  }
});
