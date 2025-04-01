import { pomodoro } from '../data/pomodoro.js';
import { isEndOfMinute, formatTime } from './utils/time.js';

const timerButton = document.getElementById('timer-button');

function displayTimer() {
   let timerHTML = '';
   const { minutes, seconds } = pomodoro;

   timerHTML =
   `
      <div id="timer-string">
         ${formatTime(minutes, seconds)}            
      </div>
   `

   document.querySelector('.container').innerHTML = timerHTML;
}

function changeWebTitle() {
   document.title = `${formatTime(pomodoro.minutes, pomodoro.seconds)} ── .✦ One Tick Closer`;
}

displayTimer();

let intervalId = '';

timerButton.addEventListener('click', (event) => {
   changeWebTitle();
   if (event.target.innerHTML === 'Stop') {
      clearInterval(intervalId);
      event.target.innerHTML = 'Start';
      return;
   }

   event.target.innerHTML = 'Stop';
   intervalId = setInterval(() => {
      if(isEndOfMinute(pomodoro.seconds)) {
         pomodoro.minutes--;
         pomodoro.seconds = 59;
         changeWebTitle();
         displayTimer();
         return;
      }
      
      pomodoro.seconds--;
      changeWebTitle();
      displayTimer();
   }, 1000);
});