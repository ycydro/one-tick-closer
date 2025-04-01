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

displayTimer();

let intervalId = '';
timerButton.addEventListener('click', (event) => {
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
         displayTimer();
         return;
      }

      pomodoro.seconds--;
      displayTimer();
   }, 1000);
});