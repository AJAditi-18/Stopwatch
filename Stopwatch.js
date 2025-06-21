const minLabel = document.getElementById("minutes");
const secLabel = document.getElementById("seconds");
const msLabel = document.getElementById("milliseconds");

const startButton = document.getElementById("startBtn");
const pauseButton = document.getElementById("pauseBtn");
const stopButton = document.getElementById("stopBtn");
const resetButton = document.getElementById("resetBtn");

const lapList = document.getElementById("laplist");

//Stopwatch variables
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

function startTimer(){
    interval = setInterval(updateTimer, 10);
    startButton.disabled = true;
}

function stopTimer(){
    clearInterval(interval);
    addToLapList();
    resetTimerData();
    startButton.disabled = false;
}

function pauseTimer(){
    clearInterval(interval);
    startButton.disabled = false;
}

function resetTimer(){
    clearInterval(interval);
    resetTimerData();
    startButton.disabled = false;
}

function updateTimer(){
    milliseconds++;
    if(milliseconds === 100){
        milliseconds = 0;
    seconds++;
    if(seconds === 60){
        minutes++;
        }
    }
    DisplayTimer();
}

function DisplayTimer(){
    msLabel.textContent = padTime(milliseconds);
    secLabel.textContent = padTime(seconds);
    minLabel.textContent = padTime(minutes);
}

function padTime(time){
    return time.toString().padStart(2, '0');
}

function resetTimerData(){
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    DisplayTimer();
}

function addToLapList(){
    const lapTime = `${padTime(minutes)}: ${padTime(seconds)}: ${padTime(milliseconds)}`;
    const listItem =  document.createElement('li');
    listItem.innerHTML = `<span>Lap ${lapList.childElementCount + 1}: </span> ${lapTime}`;
    lapList.appendChild(listItem);

}