// FUNCTIONS
// Variant 1
function showMessage(message) {
  console.log(message + "!");
}

showMessage("This is a function");
showMessage("Zombieland");
showMessage("Thank God It's Friday");

function multipleSalary(salary, bonus) {
  return salary * bonus;
}

console.log(multipleSalary(30000, 1.5));

// variants 2:  WTF is this????
const validateInput = function (input, rule) {
  input.length > rule
    ? console.log("Ok, valid input...")
    : console.log("Validation was failed");
};

validateInput("I hate you", 10);
validateInput("I hate you!!!!", 10);

function compareThis(message, messageLenght) {
  if (message.length > messageLenght) {
    console.log(
      message + " -- This message is longer than " + messageLenght + " symbols"
    );
  } else {
    console.log(
      message + " -- This message is shorter than " + messageLenght + " symbols"
    );
  }
}

compareThis("hahahaaa", 13);
compareThis("Sergey is the best teacher", 13);

// Variant 3
const createUser = (fullName, age, email) => {
  return {
    id: "001",
    userName: fullName,
    age: age,
    userEmail: email,
  };
};

console.log(createUser("Alena", 32, "alena@example.com"));

//CALLBACK FUNCTIONS
function odin(a, b) {
  return a + b;
}

function dva(calc = odin(2, 3)) {
  console.log(calc);
}

dva();
dva(15);

function startNav(someArgument) {
  // someArgument = callbackFunctionStartNavigation
  // Simulating an asynchronous operation
  console.log("Calculating route...");
  setTimeout(function () {
    someArgument();
  }, 4000); // Delaying execution by 4 seconds
}

function callbackFunctionStartNavigation() {
  console.log("Callback function executed - Navigation started!");
}

// Calling the doSomething function and passing the callback function as an argument
startNav(callbackFunctionStartNavigation);
console.log("almost there!");

function logSystemStatus(status, callback) {
  console.log(`The system status is: ${status}`);
  callback();
}

logSystemStatus("Ready", function () {
  console.log("The status was logged...");
});

function updateSystemStatus() {
  console.log("Status was updated...");
}

logSystemStatus("Not ready", updateSystemStatus);

// Function calling a function as an argument

function doSmth(agrOne, argTwo) {
  //argTwo = add20percent
  return agrOne + argTwo(agrOne);
}

function add20percent(amount) {
  return amount * 0.2;
}

function add15Percent(amount) {
  return amount * 0.15;
}

console.log(doSmth(135, add20percent));
console.log(doSmth(135, add15Percent));

// another way
function doSmth(agrOne, argTwo) {
  return agrOne + argTwo();
}
console.log(
  doSmth(135, function () {
    return 135 * 0.3;
  })
);
