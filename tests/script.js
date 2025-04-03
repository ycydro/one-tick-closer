import { Timer } from  '../objects/PomodoroTimer.js';


const toggleButton = document.getElementById('toggle-btn');
const resetButton = document.getElementById('reset-btn');



const timer = new Timer();

toggleButton.addEventListener('click', () => toggleTimer());
resetButton.addEventListener('click', () => { toggleTimer(); timer.reset(); });

function toggleTimer() {
   const isRunning = toggleButton.innerHTML === "Start";
   toggleButton.innerHTML = isRunning ? "Stop" : "Start";
   timer.toggle();
}

