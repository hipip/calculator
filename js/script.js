// getting our dom objects
const calculator = document.querySelector(".calc-container");
const calcDisplay = document.querySelector(".calc-display");
const calcTopDisplay = document.querySelector(".calc-top-display");
const NumsBtns = document.querySelectorAll(".num-btn");
const operationsBtns = document.querySelectorAll(".op-btn");
const equalBtn = document.querySelector(".equals-btn");
const pointBtn = document.querySelector(".point-btn");
const PiBtn = document.querySelector(".pi-btn");
const squareBtn = document.querySelector(".square-btn");
const rootBtn = document.querySelector(".root-btn");
const percentageBtn = document.querySelector(".percentage-btn");
const clearBtn = document.querySelector(".clear-btn");
const maximizeBtn = document.querySelector(".maximize-btn");
const minimizeBtn = document.querySelector(".minimize-btn");
const closeBtn = document.querySelector(".close-btn");

// some variables for our calculator
let firstOperand;
let operator; // this will store the current operator in use
let display = "0"; // this variable will be used to update the calc display,
let topDisplay = ""; // this one is for the top display which is used when performing arithmetic operations;

// setting up the onclick event for our maximize button
maximizeBtn.onclick = () => {
  calculator.classList.toggle("maximized");
};

// setting up the onclick event for our minimize button
minimizeBtn.onclick = () => {
  calculator.classList.toggle("minimized");
};

//setting up the onclick event for our close button
closeBtn.onclick = () => {
  close();
};

// setting the event listener for click on the calculator clear btn
clearBtn.addEventListener("click", clearAll);

// Setting up the click event listener for our calculator numbers
NumsBtns.forEach((btn) => {
  btn.addEventListener("click", numsBtnsHandler);
});

// Settting up the event listener for each of our basic arithmetic operations buttons
operationsBtns.forEach((btn) => {
  btn.addEventListener("click", opBtnsHandler);
});

// setting up the event listener for our equals button
equalBtn.addEventListener("click", equalBtnHandler);

// the point button is used for adding floating point numbers
pointBtn.addEventListener("click", pointBtnHandler);

percentageBtn.addEventListener("click", percentageBtnHandler);

PiBtn.addEventListener("click", piBtnHandler);

squareBtn.addEventListener("click", squareBtnHandler);

rootBtn.addEventListener("click", rootBtnHandler);
