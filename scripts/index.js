import { PomodoroTimer } from '../objects/PomodoroTimer.js';
import { tracker } from '../objects/TimeTracker.js';

const timer = new PomodoroTimer(updateUI);

displayTotalStudyTime();
displayTimer(timer.minutes, timer.seconds);

function displayTotalStudyTime() {
   let tstHTML = 
   `
    <p> You have studied for <span id="total-study-time">${tracker.show()}</span> so far! </p>   
   `

   document.querySelector('.tst-container').innerHTML = tstHTML;
}

function updateUI(minutes, seconds) {
   displayTimer(minutes, seconds);
   changeWebTitle(minutes, seconds);
}

function displayTimer(minutes, seconds) {
   let timerHTML = '';

   timerHTML =
   `
      <div id="timer-string">
         ${timer.formatTime(minutes, seconds)}            
      </div>
   `;

   document.querySelector('.timer-container').innerHTML = timerHTML;
}

function changeWebTitle(minutes, seconds) {
   document.title = `${timer.formatTime(minutes, seconds)} ── .✦ One Tick Closer`;
}

//BUTTON SETTINGS

const toggleButton = document.getElementById('toggle-btn');

let trackerID;
let isTracking = false;

function startTracker() {
    setTimeout(() => {
        trackerID = setInterval(() => {
            console.log(`refreshing HTML...`);
            displayTotalStudyTime();
        }, 300000);
    }, 1000);
}

function isToggled() {
   return toggleButton.innerHTML === "Stop";
}


document.querySelectorAll('.timer-option').forEach((button) => {
   button.addEventListener('click', (e) => {
      if (!e.target.classList.contains('is-option-toggled')) {
         // check if any other button is toggled thern turn it off
         turnOffToggledButton();
         e.target.classList.add('is-option-toggled')
      }
   });     
});

function turnOffToggledButton() {
   const toggledButton = document.querySelector('.is-option-toggled');
   if(toggledButton) {
      toggledButton.classList.remove('is-option-toggled');
   }
}


const resetButton = document.getElementById('reset-btn');
const pomodoroButton = document.getElementById('pomodoro-btn');
const shortBreakButton = document.getElementById('short-break-btn');
const longBreakButton = document.getElementById('long-break-btn');

toggleButton.addEventListener('click', function() { 
   this.innerHTML = isToggled() ? "Start" : "Stop"; 
   this.style.backgroundColor = isToggled() ? "var(--default-pink)" : "#56021F";
   timer.toggle();

   if (isTracking) return;
   startTracker(); 
});

resetButton.addEventListener('click', () => { 
   if (isToggled()) {
      toggleButton.click();
   }
   timer.reset(); 
});

pomodoroButton.addEventListener('click', () => { 
   resetButton.click(); 
   timer.setMode('pomodoro') ;
});

shortBreakButton.addEventListener('click', () => { 
   resetButton.click(); 
   timer.setMode('shortBreak')
});

longBreakButton.addEventListener('click', () => { 
   resetButton.click();
   timer.setMode('longBreak') 
});




