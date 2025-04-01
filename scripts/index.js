import { timer, DEFAULT_MINUTES, DEFAULT_SECONDS } from '../data/pomodoro.js';
import { isEndOfMinute, formatTime } from './utils/time.js';

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

displayTimer();


const startButton = document.getElementById('start-button');
const resetButton = document.getElementById('reset-button');
const pomodoroButton = document.getElementById('pomodoro-btn');
const shortBreakButton = document.getElementById('short-break-btn');
const longBreakButton = document.getElementById('long-break-btn');

let intervalId = '';

startButton.addEventListener('click', (event) => {
   changeWebTitle();
   if (event.target.innerHTML === 'Stop') {
      clearInterval(intervalId);
      event.target.innerHTML = 'Start';
      return;
   }

   event.target.innerHTML = 'Stop';
   intervalId = setInterval(() => {
      if(isEndOfMinute(timer.seconds)) {
         timer.minutes--;
         timer.seconds = 59;
         changeWebTitle();
         displayTimer();
         return;
      }
      
      timer.seconds--;
      changeWebTitle();
      displayTimer();
   }, 1000);
});

resetButton.addEventListener('click', () => {
   if (startButton.innerHTML === 'Stop') {
      startButton.click();
   }

   timer.minutes = DEFAULT_MINUTES;
   timer.seconds = DEFAULT_SECONDS;
   changeWebTitle();
   displayTimer();
});

pomodoroButton.addEventListener('click', () => {
   if (startButton.innerHTML === 'Stop') {
      startButton.click();
   }

   timer.minutes = DEFAULT_MINUTES;
   timer.seconds = DEFAULT_SECONDS;
   changeWebTitle();
   displayTimer();
});

shortBreakButton.addEventListener('click', () => {
   if (startButton.innerHTML === 'Stop') {
      startButton.click();
   }
   
   timer.minutes = 5;
   timer.seconds = 0;
   changeWebTitle();
   displayTimer();
});

longBreakButton.addEventListener('click', () => {
   if (startButton.innerHTML === 'Stop') {
      startButton.click();
   }
   
   timer.minutes = 10;
   timer.seconds = 0;
   changeWebTitle();
   displayTimer();
});
