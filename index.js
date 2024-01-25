// Basic functions
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

let num1 = 0;
let operator = "";
let num2 = 0;

function operate(operator, a, b) {
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

// UI connection
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
const btnClear = document.querySelector("#clear");

let displayText = "";
function clearDisplay() {
  displayText = "";
  displayContent.textContent = displayText;
}
function updateDisplay(text) {
  if (text.includes("+") ||
      text.includes("-") ||
      text.includes("*") ||
      text.includes("/") ||
      displayText.includes("+") ||
      displayText.includes("-") ||
      displayText.includes("*") ||
      displayText.includes("/")
  ) {
    clearDisplay();
  }
  displayText += text;
  displayContent.textContent = displayText;
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
    case "add":
    case "subtract":
    case "multiply":
    case "divide":
      updateDisplay(target.textContent);
      break;
    case "clear":
      clearDisplay();
      break;
  }
})