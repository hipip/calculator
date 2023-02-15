/* Logical Functions */
const add = (a, b) => {
  return a + b;
};

const substract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  return a / b;
};

const modulo = (a, b) => {
  return a % b;
};

const operate = (operator, op1, op2) => {
  op1 = Number(op1);
  op2 = Number(op2);
  switch (operator) {
    case "+":
      return add(op1, op2);
    case "-":
      return substract(op1, op2);
    case "x":
      return multiply(op1, op2);
    case "÷":
      return divide(op1, op2);
    case "mod":
      return modulo(op1, op2);
  }
};

/* UI functions */
const updateDisplay = () => (calcDisplay.innerText = display);

const updateTopDisplay = () => (calcTopDisplay.innerText = topDisplay);

const clearAll = () => {
  operator = null;
  firstOperand = null;
  display = "0";
  topDisplay = "";
  updateDisplay();
  updateTopDisplay();
};

/* Events Handlers */
const numsBtnsHandler = (e) => {
  const num = e.target.innerText;
  display = display == "0" ? num : display + num;
  updateDisplay();
};

const opBtnsHandler = (e) => {
  newOperator = e.target.textContent;
  firstOperand = display;
  if (display != "0" && operator) {
    firstOperand = operate(operator, firstOperand, display);
    display = firstOperand;
  }
  operator = newOperator;
  topDisplay = firstOperand + " " + operator;
  updateTopDisplay();
  updateDisplay();
  display = "";
};

const equalBtnHandler = () => {
  if (firstOperand && operator && display != "") {
    topDisplay = firstOperand + " " + operator + " " + display + " = ";
    let result = operate(operator, firstOperand, display);
    display = result;
    firstOperand = result;
    operator = null;
    updateDisplay();
    updateTopDisplay();
  }
};

const pointBtnHandler = () => {
  if (!display.includes(".")) display += ".";
};

const percentageBtnHandler = () => {
  if (display != "0") {
    topDisplay = display + " %";
    display = display / 100;
    firstOperand = display;
    updateDisplay();
    updateTopDisplay();
  }
};

const piBtnHandler = () => {
  display = Math.PI;
  updateDisplay();
};

const squareBtnHandler = () => {
  if (display !== 0) {
    topDisplay = display + "² = ";
    display = display * display;
    firstOperand = display;
    updateDisplay();
    updateTopDisplay();
  }
};

const rootBtnHandler = () => {
  if (display && display !== 0) {
    topDisplay = "√" + display + " = ";
    display = Math.sqrt(display);
    firstOperand = display;
    updateDisplay();
    updateTopDisplay();
  }
};
