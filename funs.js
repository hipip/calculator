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
const updateCalcDisplay = () => (calcDisplay.innerText = display);

const updateCalcTopDisplay = () => (calcTopDisplay.innerText = topDisplay);

const clearCalcDisplay = () => {
    display = "";
    updateCalcDisplay();
};

/* Events Handlers */
const numsBtnsEventHandler = (e) => {
    const num = e.target.id;
    display = display == "0" ? num : display + num;
    updateCalcDisplay();
};

const opBtnsEventHandler = (e) => {
    if (!firstOperand) firstOperand = display;
    let operator = e.target.textContent;
    topDisplay = firstOperand + " " + operator;
    updateCalcTopDisplay();
    display = "";
};
