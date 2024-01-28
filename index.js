let firstOperand = null;
let operator = null;
let secondOperand = null;
let shouldResetDisplay = true;
const display = document.querySelector(".display-content");
const operators = ["+", "-", "x", "/"];

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, a, b) {
  a = Number(a);
  b = Number(b);

  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "x":
      return multiply(a, b);
    case "/":
      return divide(a, b);
  }
}

function setOperand(input) {
  if (display.textContent === "0" || shouldResetDisplay) {
    display.textContent = input;
  } else {
    display.textContent += input;
  }

  if (!operator) {
    firstOperand = display.textContent;
  } else {
    secondOperand = display.textContent
                           .match(/(\+|-|x|\/)[0-9]+/g)
                           .toString()
                           .slice(1);
  }
  
  shouldResetDisplay = false;
}

function setOperator(input) {
  const lastChar = display.textContent.slice(-1);

  if (!operators.includes(lastChar)) {
    display.textContent += input;
    operator = input;
  } else {
    display.textContent = display.textContent.replace(/(\+|-|x|\/)$/g, input);
  }

  shouldResetDisplay = false;
  operator = input;
}

function setResult(resetDisplay = false) {
  if (!operator || !secondOperand) {
    return;
  }

  const result = operate(operator, firstOperand, secondOperand);
  display.textContent = result;
  firstOperand = result;
  operator = null;
  secondOperand = null;

  shouldResetDisplay = resetDisplay;
}

function clearAll() {
  firstOperand = null;
  operator = null;
  secondOperand = null;
  display.textContent = "0";
  shouldResetDisplay = true;
}

document.addEventListener("click", e => {
  const target = e.target;

  switch (target.className) {
    case "operand":
      setOperand(target.textContent);
      break;
    case "operator":
      if (secondOperand) {
        setResult();
      }
      setOperator(target.textContent);
      break;
    case "equal":
      setResult(true);
      break;
    case "clear":
      clearAll();
      break;
  }
})