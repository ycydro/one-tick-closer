class TimeTracker {
   totalSeconds;

   constructor() {
      this.totalSeconds = parseInt(localStorage.getItem("totalSeconds")) || 0;
   }

   getMinutes() {
      return Math.floor(this.totalSeconds / 60);
   }

   getHours() {
      return Math.floor(totalSeconds / 3600);
   }
   
   getDays() {
   return Math.floor(totalSeconds / 86400);
   }

   saveTrackedTime() {
      localStorage.setItem('totalSeconds', String(this.totalSeconds));
   }
}

export const tracker = new TimeTracker();




