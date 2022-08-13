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