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
    }
};

/* UI functions */
const updateDisplay = () => (calcDisplay.innerText = display);

const updateTopDisplay = () => (calcTopDisplay.innerText = topDisplay);

const clearAll = () => {
    operator = null;
    firstOperand = null;
    operator = null;
    display = "0";
    topDisplay = "";
    updateDisplay();
    updateTopDisplay();
};

/* Events Handlers */
const numsBtnsHandler = (e) => {
    const num = e.target.id;
    display = display == "0" ? num : display + num;
    updateDisplay();
};

const opBtnsHandler = (e) => {
    newOperator = e.target.textContent;
    if (!firstOperand) firstOperand = display;
    else if (display != "0" && display != "")
        firstOperand = operate(operator, firstOperand, display);
    operator = newOperator;
    topDisplay = firstOperand + " " + operator;
    display = firstOperand;
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
        updateDisplay();
        updateTopDisplay();
        display = "0";
    }
};
