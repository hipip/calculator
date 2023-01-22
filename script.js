// getting our dom objects
const calculator = document.querySelector(".calc-container");
const calcDisplay = document.querySelector(".calc-display");
const calcTopDisplay = document.querySelector(".calc-top-display");
const NumsBtns = document.querySelectorAll(".num-btn");
const operationsBtns = document.querySelectorAll(".op-btn");
const equalBtn = document.querySelector(".equals-btn");
const pointBtn = document.querySelector(".point-btn");
const percentageBtn = document.querySelector(".percentage-btn");
const clearBtn = document.querySelector(".clear-btn");
const maximizeBtn = document.querySelector(".maximize-btn");
const minimizeBtn = document.querySelector(".minimize-btn");
const closeBtn = document.querySelector(".close-btn");

// some variables for our calculator
let firstOperand,
    operator,
    display = "0",
    topDisplay = "";

maximizeBtn.onclick = () => {
    calculator.classList.toggle("maximized");
};
minimizeBtn.onclick = () => {
    calculator.classList.toggle("minimized");
};
closeBtn.onclick = () => {
    close();
};

// setting the event listener for our clear btn
clearBtn.addEventListener("click", clearAll);

// Setting the click event listener for every button that is a number
NumsBtns.forEach((btn) => {
    btn.addEventListener("click", numsBtnsHandler);
});

operationsBtns.forEach((btn) => {
    btn.addEventListener("click", opBtnsHandler);
});

equalBtn.addEventListener("click", equalBtnHandler);

pointBtn.addEventListener("click", pointBtnHandler);

percentageBtn.addEventListener("click", percentageBtnHandler);
