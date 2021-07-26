const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');


const newYears = new Date();

function countdow(){
    const newYearsDate = new Date(newYears);
    const courrentDate = new Date();

    const totalSeconds = (newYearsDate - courrentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 24;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);


    
}

function formatTime(time){
    return time < 10 ? (`0${time}` ) : time;
}

countdow();

setInterval(countdow, 1000);