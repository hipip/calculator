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

const updateCalcDisplay = (newValue) => {
    if (calcDisplay.innerText == 0) calcDisplay.innerText = newValue;
    else calcDisplay.innerText += newValue;
};
const clearCalcDisplay = () => (calcDisplay.innerText = "0");

/* Events Handlers */
const numsBtnsEventHandler = (e) => {
    updateCalcDisplay(e.target.id);
};
