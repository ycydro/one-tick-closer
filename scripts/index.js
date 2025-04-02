import { timer, setTimer} from '../data/pomodoro.js';
import { isEndOfMinute, formatTime } from './utils/time.js';

displayTimer();

function displayTimer() {
   let timerHTML = '';
   const { minutes, seconds } = timer;

   timerHTML =
   `
      <div id="timer-string">
         ${formatTime(minutes, seconds)}            
      </div>
   `;

   document.querySelector('.timer-container').innerHTML = timerHTML;
}

function changeWebTitle() {
   document.title = `${formatTime(timer.minutes, timer.seconds)} ── .✦ One Tick Closer`;
}

//BUTTON SETTINGS

const startButton = document.getElementById('start-button');
const resetButton = document.getElementById('reset-button');
const pomodoroButton = document.getElementById('pomodoro-btn');
const shortBreakButton = document.getElementById('short-break-btn');
const longBreakButton = document.getElementById('long-break-btn');

let intervalId = '';
let timerMode = 'pomodoro';
let isTimerRunning = false;

function setTimerMode(mode) {
   if (isTimerRunning) {
      startButton.click();
   }

   timerMode = mode;
   setTimer(mode);
   updateUI();
}

function updateUI() {
   changeWebTitle();
   displayTimer();
}

startButton.addEventListener('click', (e) => {
   updateUI();

   if (isTimerRunning) {
      clearInterval(intervalId);
      e.target.innerHTML = 'Start';
      isTimerRunning = false;
      return;
   }

   e.target.innerHTML = 'Stop';
   isTimerRunning = true;

   intervalId = setInterval(() => {
      if(isEndOfMinute(timer.seconds)) {
         timer.minutes--;
         timer.seconds = 59;
         updateUI();
         return;
      }
      
      timer.seconds--;
      updateUI();
   }, 1000);

});

resetButton.addEventListener('click', ()=> setTimerMode(timerMode));
pomodoroButton.addEventListener('click', ()=> setTimerMode("pomodoro"));
shortBreakButton.addEventListener('click', ()=> setTimerMode("shortBreak"));
longBreakButton.addEventListener('click', ()=> setTimerMode("longBreak"));