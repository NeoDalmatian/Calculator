const numberButtons = document.querySelectorAll(".numbers");
const operatorButtons = document.querySelectorAll(".blue");
const display = document.querySelector("#display");
const equals = document.querySelector("#equals");
const reset = document.querySelector("#AC");
const back = document.querySelector("#back");

let computation = {
  firstNumber: [],
  secondNumber: [],
  operator: "",
  result: "",
  add(a, b) {this.result = parseInt(a) + parseInt(b);},
  subtract(a, b) {this.result = a - b;},
  multiply(a, b) {this.result = a * b;},
  divide(a, b) {this.result = a / b;},
}

numberButtons.forEach(number => {
  number.addEventListener("click", (e) => {
    if (computation.operator === "") {
      computation.firstNumber.push(e.target.attributes.id.value.toString());
    } else {
      computation.secondNumber.push(e.target.attributes.id.value.toString());
    }
  });
});

operatorButtons.forEach(operatorButton => {
  operatorButton.addEventListener("click", (e) => {
    computation.operator = e.target.attributes.id.value;
  });
});

equals.addEventListener("click", () => {
  operate();
  isNaN(computation.result) ? console.log("ERROR") : console.log(computation.result);
  computation.firstNumber = [];
  computation.secondNumber = [];
  computation.operator = "";
});

reset.addEventListener("click", () => {
  computation.firstNumber = [];
  computation.secondNumber = [];
  computation.operator = "";
  computation.result = "";
})

back.addEventListener("click", () => {
  if (computation.firstNumber.length !== 0 && computation.operator !== "" && 
      computation.secondNumber.length !== 0) {
    computation.secondNumber.pop();
  } else if (computation.firstNumber.length !== 0 && computation.operator !== "" && 
             computation.secondNumber.length === 0) {
    computation.operator = "";
  } else {
    computation.firstNumber.pop();
  }
})

function populateDisplay() {
  const displayElements = document.createElement("div");
  displayElements.innerText = `${computation.firstNumber}`;
  display.firstChild.remove();
  display.appendChild(displayElements);
}

function operate (operator = computation.operator,
                         a = computation.firstNumber.join(""),
                         b = computation.secondNumber.join("")) {
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