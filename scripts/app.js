const APP_CONTAINTER = document.getElementById("#app");
const MAX_SECONDS = 59;
const MAX_MINUTES = 59;
const MAX_HOURS = 12;
const MIN_TIME = 0;
const SUBMIT_BTN = document.getElementById("timer-submit");
const RESET_BTN = document.getElementById("timer-reset");
let secondsSet, minutesSet, hoursSet;
RESET_BTN.addEventListener('click', () => {
    document.getElementById("Iseconds").value = 0;
    document.getElementById("Iminutes").value = 0;
    document.getElementById("Ihours").value = 0;
});

SUBMIT_BTN.addEventListener('click', () => {
    let timerSetLbl = document.getElementById("timer-amount");
    secondsSet = document.getElementById("Iseconds").value;
    minutesSet = document.getElementById("Iminutes").value;
    hoursSet = document.getElementById("Ihours").value;
    timerSetLbl.textContent = (`${hoursSet}:${minutesSet}:${secondsSet}`);
    startCountDown(hoursSet,minutesSet,secondsSet);
});
const updateTime = (h,m,s)=> {
    document.getElementById("Iseconds").value = s;
    document.getElementById("Iminutes").value = m;
    document.getElementById("Ihours").value = h;
};

const startCountDown = (h, m, s) => {
    let isTimeUp = false;
    while(!isTimeUp){

    }
};

