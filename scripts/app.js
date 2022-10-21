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
    let time = getCurrentTime();
    formatTime(time);
    
    let timeElems = [time.getHours(),time.getMinutes(),time.getSeconds()];
    console.log(timeElems);
    timerSetLbl.textContent = (`${hoursSet}:${minutesSet}:${secondsSet}`);
    startCountDown(time,hoursSet,minutesSet,secondsSet);
});

const startCountDown = (currentTime,hoursSet,minutesSet,secondsSet)=>{
    let initiatedTime  = currentTime;   
    
};
const getCurrentTime = ()=>{
    let currentTime = new Date();
    return currentTime;
};
const formatTime = (time) =>{
    let unformatedTime = time;
    if(unformatedTime.getHours() > 12){
        let h = unformatedTime.getHours();
        let formatedTime = time.setHours(h-12);
        return time;
    }
    else{
        return;
    }
};