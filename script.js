const calcDisplay = document.querySelector(".calc-display");
const calcNums = document.querySelectorAll(".num-btn");
const maximizeBtn = document.querySelector(".maximize-btn");
const minimizeBtn = document.querySelector(".minimize-btn");
const closeBtn = document.querySelector(".close-btn");

calcNums.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        calcDisplay.innerText == 0 ? (calcDisplay.innerText = "") : "";
        calcDisplay.innerText += e.target.id;
    });
});
maximizeBtn.onclick = (e) => {
    e.preventDefault();
    document.querySelector(".calc-container").classList.toggle("maximized");
};
document.querySelector(".minimize-btn").onclick = (e) => {
    e.preventDefault();
    document.querySelector(".calc-container").classList.toggle("minimized");
};
document.querySelector(".close-btn").onclick = (e) => {
    e.preventDefault();
    close();
};
