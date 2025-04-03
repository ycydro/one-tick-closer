export class Timer {
   #intervalID;
   #isTimeRunning = false;
   #TIMER_MODES = { 
      pomodoro: { minutes: 25, seconds: 0 },
      shortBreak: { minutes: 5, seconds: 0 },
      longBreak: { minutes: 10, seconds: 0 }
   };
   
   constructor() {
      this.mode = 'pomodoro';
      this.minutes = this.#TIMER_MODES[this.mode].minutes;
      this.seconds = this.#TIMER_MODES[this.mode].seconds;
   }

   toggle() {
      this.#isTimeRunning ? this.stop() : this.start();
   }

   start() {
      if (this.#isTimeRunning || this.#intervalID) return;

      this.#isTimeRunning = true;

      this.#intervalID = setInterval(() => {
         this.#tick();
      }, 1000);   
   }
      
   stop() {
      if (!this.#isTimeRunning) return;

      this.#isTimeRunning = false;

      clearInterval(this.#intervalID);      
      this.#intervalID = null;
   }

   reset() {
      this.stop();
      this.minutes = this.#TIMER_MODES[this.mode].minutes;
      this.seconds = this.#TIMER_MODES[this.mode].seconds;
      console.log(this.formatTime(this.minutes, this.seconds));
   }

   #tick() { // helper function
      if (this.minutes === 0 && this.seconds === 0) {
         this.stop();
         return;
      }
      if (this.seconds === 0) {
         this.minutes--;
         this.seconds = 59;
      } else {
         this.seconds--;
      }
      console.log(this.#formatTime(this.minutes, this.seconds));
   }

   setMode(mode) {
      if (!this.#TIMER_MODES[mode]) return;

      this.stop();
      this.mode = mode;
      this.#setTime(mode);
   }

   #setTime(mode) {
      this.minutes = this.#TIMER_MODES[mode].minutes;
      this.seconds = this.#TIMER_MODES[mode].seconds;
   }

   #formatTime(minutes, seconds) {
      let formattedMinutes = minutes.toString().padStart(2, "0");
      let formattedSeconds = seconds.toString().padStart(2, "0");
   
      return `${formattedMinutes}:${formattedSeconds}`;
   }
}