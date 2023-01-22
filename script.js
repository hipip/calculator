// getting our dom objects
const calculator = document.querySelector(".calc-container");
const calcDisplay = document.querySelector(".calc-display");
const calcTopDisplay = document.querySelector(".calc-top-display");
const NumsBtns = document.querySelectorAll(".num-btn");
const operationsBtns = document.querySelectorAll(".op-btn");
const clearBtn = document.querySelector(".clear-btn");
const maximizeBtn = document.querySelector(".maximize-btn");
const minimizeBtn = document.querySelector(".minimize-btn");
const closeBtn = document.querySelector(".close-btn");

// some variables for our calculator
let firstOperand,
    secondOperand,
    operator,
    acc,
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
clearBtn.addEventListener("click", clearCalcDisplay);

// Setting the click event listener for every button that is a number
NumsBtns.forEach((btn) => {
    btn.addEventListener("click", numsBtnsEventHandler);
});

operationsBtns.forEach((btn) => {
    btn.addEventListener("click", opBtnsEventHandler);
});
