// HTML Elements
const displayContent = document.querySelector(".display-content");
const btnZero = document.querySelector("#zero");
const btnONe = document.querySelector("#one");
const btnTwo = document.querySelector("#two");
const btnThree = document.querySelector("#three");
const btnFour = document.querySelector("#four");
const btnFive = document.querySelector("#five");
const btnSix = document.querySelector("#six");
const btnSeven = document.querySelector("#seven");
const btnEight = document.querySelector("#eight");
const btnNine = document.querySelector("#nine");
const btnAdd = document.querySelector("#add");
const btnSubtract = document.querySelector("#subtract");
const btnMultiply = document.querySelector("#multiply");
const btnDivide = document.querySelector("#divide");
const btnEqual = document.querySelector("#equal");
const btnClear = document.querySelector("#clear");

let num1 = "";
let operator = "";
let num2 = "";
let displayText = "";

// Basic functions
function add(a, b) {
  return String(a + b);
}

function subtract(a, b) {
  return String(a - b);
}

function multiply(a, b) {
  return String(a * b);
}

function divide(a, b) {
  return String(a / b);
}

function operate(operator, a, b) {
  a = Number(a);
  b = Number(b);
  if (operator === "/" && b === 0) {
    return "Really?";
  }

  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
  }
}

function clear() {
  num1 = "";
  operator = "";
  num2 = "";
  displayText = "";
  displayContent.textContent = "0";
}

function updateDisplay(input) {
  const lastChar = displayText.slice(-1);

  if (input.match(/[^0-9]/g) && lastChar.match(/[^0-9]/g)) {
    displayText = displayText.replace(/.$/g, input);
  } else {
    displayText += input;
  }
  
  displayContent.textContent = displayText;
}

function storeNumber(input) {
  if (operator.length === 0) {
    num1 += input;
  } else {
    num2 += input;
  }
}

function displayResult(op, a, b) {
  const result = operate(op, a, b);
  clear();
  num1 = result;
  updateDisplay(num1);  
}

document.addEventListener("click", (e) => {
  const target = e.target;
  switch (target.id) {
    case "zero":
    case "one":
    case "two":
    case "three":
    case "four":
    case "five":
    case "six":
    case "seven":
    case "eight":
    case "nine":
      updateDisplay(target.textContent);
      storeNumber(target.textContent);
      break;
    case "add":
    case "subtract":
    case "multiply":
    case "divide":
      if (num2) {
        displayResult(operator, num1, num2)
      }
      operator = target.textContent;
      updateDisplay(target.textContent);
      break;
    case "equal":
      if (num2) {
        displayResult(operator, num1, num2);
      }
      break;
    case "clear":
      clear();
      break;
  }
})