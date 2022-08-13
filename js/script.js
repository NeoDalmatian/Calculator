const numberButtons = document.querySelectorAll(".numbers");
const operatorButtons = document.querySelectorAll(".blue");
const display = document.querySelector("#display");
const equals = document.querySelector("#equals");

let firstNumber= "";
let secondNumber= "";
let displayOperator = "";
let displayResult = "";

numberButtons.forEach(number => {
  number.addEventListener("click", (e) => {
    if (displayOperator === "") {
      firstNumber += e.target.attributes.id.value.toString();
    } else {
      secondNumber += e.target.attributes.id.value.toString();
    }
    //populateDisplay();
  });
});

operatorButtons.forEach(operatorButton => {
  operatorButton.addEventListener("click", (e) => {
    displayOperator = e.target.attributes.id.value;
  });
});

equals.addEventListener("click", () => {
  operate();
  console.log(displayResult);
});

function populateDisplay() {
  const displayElements = document.createElement("div");
  displayElements.innerText = `${firstNumber}`;
  display.firstChild.remove();
  display.appendChild(displayElements);
}

let operators = {
  add(a, b) {displayResult = parseInt(a) + parseInt(b);},
  subtract(a, b) {displayResult = a - b;},
  multiply(a, b) {displayResult = a * b;},
  divide(a, b) {displayResult = a / b;},
}

function operate (operator = displayOperator, a = firstNumber, b = secondNumber) {
  switch (operator) {
    case "+":
      operators.add(a, b);
      break;

    case "-":
      operators.subtract(a, b);
      break;

    case "*":
      operators.multiply(a, b);
      break;

    case "/":
      operators.divide(a, b);
      break;
  }
}