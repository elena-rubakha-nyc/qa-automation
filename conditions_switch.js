let buttonStatus = "hello";

// if (buttonStatus == "enabled") {
//   console.log("Execute clickButton()");
// } else if (buttonStatus == "disabled") {
//   console.log("Execute fillForm()");
// } else {
//   console.log("Button has another status ");
// }

// console.log("Continue");

switch (buttonStatus) {
  case "enabled":
    console.log("Execute clickButton()");
    break;

  case "disabled":
    console.log("Execute fillForm()");
    break;

  default:
    console.log("Button has another status ");
}

console.log("Continue");
