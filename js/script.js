const numbers = document.querySelectorAll(".numbers");
const display = document.querySelector("#display");

let displayMemory= '';

numbers.forEach(number => {
  number.addEventListener("click", (e) => {
    displayMemory += e.target.attributes.id.value.toString();
    populateDisplay();
  });
});

function populateDisplay() {
  const displayElements = document.createElement("div");
  displayElements.innerText = `${displayMemory}`;
  display.firstChild.remove();
  display.appendChild(displayElements);
}

let operators = {
  add(a, b) {console.log(a + b);} ,
  subtract(a, b) {console.log (a - b);},
  multiply(a, b) {console.log(a * b);},
  divide(a, b) {console.log(a / b);},
}

function operate (operator, a, b) {
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