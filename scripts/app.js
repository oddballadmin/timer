const APP_CONTAINTER = document.getElementById("#app");
const MAX_SECONDS = 59;
const MAX_MINUTES = 59;
const MAX_HOURS = 12;
const TIME_INCREMENT = 10;
const MIN_TIME = 0;
const SUBMIT_BTN = document.getElementById("timer-submit");
const RESET_BTN = document.getElementById("timer-reset");

let secondLabelDom = document.getElementById("seconds");
let minuteLabelDom = document.getElementById("minutes");
let hourLabelDom = document.getElementById("hours");

let secondInputDom = document.getElementById("Iseconds");
let minuteInputDom = document.getElementById("Iminutes");
let hourInputDom = document.getElementById("Ihours");

let timerSetLbl = document.getElementById("timer-amount");


RESET_BTN.addEventListener('click', () => {
    secondInputDom.value = 0;
    minuteInputDom.value = 0;
    hourInputDom.value = 0;
});

SUBMIT_BTN.addEventListener('click', () => {
    let secondsSet = secondInputDom.value;
    let minutesSet = minuteInputDom.value;
    let hoursSet = hourInputDom.value;
    timerSetLbl.textContent = (`${hoursSet}:${minutesSet}:${secondsSet}`);
    startCountDown(hoursSet,minutesSet,secondsSet);
});

