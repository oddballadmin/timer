const APP_CONTAINTER = document.getElementById("#app");
const MAX_SECONDS = 59;
const MAX_MINUTES = 59;
const MAX_HOURS = 12;
const MIN_TIME = 0;
const SUBMIT_BTN = document.getElementById("timer-submit");
let secondsSet, minutesSet, hoursSet;
SUBMIT_BTN.addEventListener('click', () => {
    let timerSetLbl = document.getElementById("timer-amount");
    secondsSet = document.getElementById("Iseconds").value;
    minutesSet = document.getElementById("Iminutes").value;
    hoursSet = document.getElementById("Ihours").value;
    timerSetLbl.textContent = (`${hoursSet}:${minutesSet}:${secondsSet}`);
});


