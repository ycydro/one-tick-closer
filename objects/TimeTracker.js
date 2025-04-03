class TimeTracker {
   totalSeconds;

   constructor() {
      this.totalSeconds = parseInt(localStorage.getItem("totalSeconds")) || 0;
   }
   
   show() {
      if (this.getDays()) {
         return this.#formatTimeUnit(this.getDays(), 'day');
       }
       if (this.getHours()) {
         return this.#formatTimeUnit(this.getHours(), 'hour');
       }
      if (this.getMinutes()) {
         return `${this.#formatTimeUnit(this.getMinutes(), 'minute')}`;
       }

      if (this.totalSeconds >= 0) {
         return this.#formatTimeUnit(this.totalSeconds, 'second');
      } 
   }

   getMinutes() {
      return Math.floor(this.totalSeconds / 60);
   }

   getHours() {
      return Math.floor(this.totalSeconds / 3600);
   }
   
   getDays() {
   return Math.floor(this.totalSeconds / 86400);
   }

   saveTime() {
      localStorage.setItem('totalSeconds', String(this.totalSeconds));
   }

   #formatTimeUnit(value, unit) {
      return value === 1 ? `${value} ${unit}` : `${value} ${unit}s`;
   }
}

export const tracker = new TimeTracker();




