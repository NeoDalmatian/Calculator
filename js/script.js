const numberButtons = document.querySelectorAll(".numbers");
const operatorButtons = document.querySelectorAll(".blue");
const display = document.querySelector("#display");
const equals = document.querySelector("#equals");

//you can make one object with these two

let calculatorMemory = {
  firstNumber: "",
  secondNumber: "",
  operator: "",
  result: "",
}

let computation = {
  add(a, b) {calculatorMemory.result = parseInt(a) + parseInt(b);},
  subtract(a, b) {calculatorMemory.result = a - b;},
  multiply(a, b) {calculatorMemory.result = a * b;},
  divide(a, b) {calculatorMemory.result = a / b;},
}

numberButtons.forEach(number => {
  number.addEventListener("click", (e) => {
    if (calculatorMemory.operator === "") {
      calculatorMemory.firstNumber += e.target.attributes.id.value.toString();
    } else {
      calculatorMemory.secondNumber += e.target.attributes.id.value.toString();
    }
    //populateDisplay();
  });
});

operatorButtons.forEach(operatorButton => {
  operatorButton.addEventListener("click", (e) => {
    calculatorMemory.operator = e.target.attributes.id.value;
  });
});

equals.addEventListener("click", () => {
  operate();
  console.log(calculatorMemory.result);
});

function populateDisplay() {
  const displayElements = document.createElement("div");
  displayElements.innerText = `${calculatorMemory.firstNumber}`;
  display.firstChild.remove();
  display.appendChild(displayElements);
}

function operate (operator = calculatorMemory.operator,
                         a = calculatorMemory.firstNumber,
                         b = calculatorMemory.secondNumber) {
  switch (operator) {
    case "+":
      computation.add(a, b);
      break;

    case "-":
      computation.subtract(a, b);
      break;

    case "*":
      computation.multiply(a, b);
      break;

    case "/":
      computation.divide(a, b);
      break;
  }
}