class Button {
  constructor(type, width, height, color) {
    this.type = type;
    this.width = width;
    this.height = height;
    this.color = color;
    this.props = [type, width, height, color];
  }
  onClick() {
    console.log(this.props);
  }
}

function testButton(anyButton, type, width, height, color) {
  if (
    anyButton.type == type &&
    anyButton.width == width &&
    anyButton.height == height &&
    anyButton.color == color
  ) {
    console.log("Test passed");
  } else {
    console.log("Test failed");
  }
}

function testButtonColor(anyButton) {
  if (anyButton.type == "button" && anyButton.color != "green") {
    console.log("Color test failed. The button is not green");
  } else {
    console.log("Color test passed. The button is green");
  }
}

let newButton = new Button("button", 10, 7, "green");
let cancelButton = new Button("button", 12, 9, "red");
newButton.onClick();

testButton(newButton, "button", 10, 7, "green");
testButtonColor(cancelButton);
testButtonColor(newButton);
