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

function SumOfExpenses(value) {
  let values = value.yearlyExpences;
  const filteredValues = values.filter(function (eachValue) {
    return eachValue > 1000;
  });
  const sumFilteredValues = filteredValues.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return sumFilteredValues;
}

expencesExamples.forEach(function (value, index) {
  if (SumOfExpenses(value) == expectedResults[index]) {
    console.log("The calculation is correct");
  } else {
    console.log("The calculation is incorrect");
  }
});
