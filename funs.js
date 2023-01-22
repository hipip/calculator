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
        case "*":
            return multiply(op1, op2);
        case "/":
            return divide(op1, op2);
    }
};

/* UI functions */
const updateDisplay = () => (calcDisplay.innerText = display);

const updateTopDisplay = () => (calcTopDisplay.innerText = topDisplay);

const clearDisplay = () => {
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
    if (!firstOperand) firstOperand = display;
    operator = e.target.textContent;
    topDisplay = firstOperand + " " + operator;
    updateTopDisplay();
    display = "0";
};

const equalBtnHandler = () => {
    if (firstOperand && operator && display != "0" && display != "") {
        topDisplay = firstOperand + " " + operator + " " + display + " = ";
        display = operate(operator, firstOperand, display);
        updateDisplay();
        updateTopDisplay();
    }
};
