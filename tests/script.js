import { Timer } from  './objects/Timer.js';


const toggleButton = document.getElementById('toggle-btn');
const resetButton = document.getElementById('reset-btn');

const pomodoro = new Timer(4, 9);


toggleButton.addEventListener('click', () => toggleTimer());
resetButton.addEventListener('click', () => { toggleTimer(); pomodoro.reset() });

function toggleTimer() {
   const isRunning = toggleButton.innerHTML === "Start";
   toggleButton.innerHTML = isRunning ? "Stop" : "Start";
   pomodoro.toggle();
}

