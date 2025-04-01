import { pomodoro } from '../data/timers.js';

const timerButton = document.getElementById('timer-button');

function displayTimer() {
   let timerHTML = '';
   const { minutes, seconds } = pomodoro;

   timerHTML =
   `
      <div id="timer-string">
         ${minutes}:${seconds}            
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
   const { minutes, seconds } = pomodoro;
   intervalId = setInterval(() => {
      pomodoro.seconds--;
      displayTimer();
   }, 1000)
});