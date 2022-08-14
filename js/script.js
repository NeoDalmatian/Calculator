//Implement ability to only add one .

const numberButtons = document.querySelectorAll(".numbers");
const operatorButtons = document.querySelectorAll(".blue");
const equals = document.querySelector("#equals");
const reset = document.querySelector("#AC");
const back = document.querySelector("#back");
const dot = document.querySelector("#dot");
const displayFirstLine = document.querySelector("#firstLine");
const displaySecondLine = document.querySelector("#secondLine");

const firstLine = document.createElement("div");
const secondLine = document.createElement("div");
const thirdLine = document.createElement("div");
const fourthLine = document.createElement("div");

displayFirstLine.appendChild(firstLine);
displayFirstLine.appendChild(secondLine);
displayFirstLine.appendChild(thirdLine);
displaySecondLine.appendChild(fourthLine);

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

dot.addEventListener("click", () => {
  // you will prob need scour arrays for matching . in if statement and then
  // run same script as for numberButtons
})

numberButtons.forEach(number => {
  number.addEventListener("click", (e) => {
    if (computation.result !== "") {
          resetDisplay();
          numberOptions(e);
    } else {
      numberOptions(e);
    };
  });
});

operatorButtons.forEach(operatorButton => {
  operatorButton.addEventListener("click", (e) => {
    if (computation.result !== "") {
      computation.firstNumber = Array.from(String(computation.result), String)
      computation.operator = e.target.attributes.id.value;
      resetDisplayNumbers();
      firstLine.innerText = computation.firstNumber.join("");
      secondLine.innerText = computation.operator;
      thirdLine.innerText = computation.secondNumber.join("");
      computation.result = "";
    }
    operatorOptions(e);
  });
});

equals.addEventListener("click", () => {
  operate();
  isNaN(computation.result) ? resultError() : resultNormal();
  computation.firstNumber = [];
  computation.secondNumber = [];
  computation.operator = "";
});

reset.addEventListener("click", () => resetDisplay())

back.addEventListener("click", () => {
  if (computation.result !== "") {
    resetDisplay();
  } else if (computation.firstNumber.length !== 0 && computation.operator !== "" &&
             computation.secondNumber.length !== 0) {
    computation.secondNumber.pop();
    thirdLine.innerText = computation.secondNumber.join("");
  } else if (computation.firstNumber.length !== 0 && computation.operator !== "" &&
             computation.secondNumber.length === 0) {
    computation.operator = "";
    secondLine.innerText = "";
  } else {
    computation.firstNumber.pop();
    firstLine.innerText = computation.firstNumber.join("");
  }
});

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
//delete unnecessary
function resetDisplay () {
  computation.firstNumber = [];
  computation.secondNumber = [];
  computation.operator = "";
  computation.result = "";
  firstLine.innerText = "";
  secondLine.innerText = "";
  thirdLine.innerText = "";
  fourthLine.innerText = "";
}

function resetDisplayNumbers () {
  firstLine.innerText = "";
  secondLine.innerText = "";
  thirdLine.innerText = "";
  fourthLine.innerText = "";
}
//Two functions!
function operatorOptions (e) {
  if (computation.firstNumber.length === 0 && e.target.attributes.id.value === "-") {
    computation.firstNumber.push("-");
    firstLine.innerText = "-";
  } else if (computation.firstNumber.length !== 0) {
    computation.operator = e.target.attributes.id.value;
  }
  if (computation.operator === "*") {
    secondLine.innerText = "x";
  } else if (computation.operator === "/") {
    secondLine.innerText = "÷";
  } else {
    secondLine.innerText = computation.operator;
  }
}

function numberOptions (e) {
  if (computation.operator === "") {
    computation.firstNumber.push(e.target.attributes.id.value);
    firstLine.innerText = computation.firstNumber.join("");
  } else {
    computation.secondNumber.push(e.target.attributes.id.value);
    thirdLine.innerText = computation.secondNumber.join("");
  }
}

function resultError () {
  fourthLine.innerText = "ERROR!";
}

function resultNormal () {
  fourthLine.innerText = computation.result;
}