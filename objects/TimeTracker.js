class TimeTracker {
   totalSeconds;

   constructor() {
      this.totalSeconds = parseInt(localStorage.getItem("totalSeconds")) || 0;
   }
   
   show() {
      const SECONDS = this.#formatTimeUnit(this.totalSeconds % 60, 'second');
      const MINUTES = this.#formatTimeUnit(this.getMinutes() % 60, 'minute');
      const HOURS = this.#formatTimeUnit(this.getHours() % 24, 'hour');
      const DAYS = this.#formatTimeUnit(this.getDays(), 'day');

      let timeStudied = '';

      if (this.getDays()) {
         timeStudied += `${DAYS}, `;
       }
       if (this.getHours()) {
         timeStudied += `${HOURS}, `;
       }
      if (this.getMinutes()) {
         timeStudied += `${MINUTES}, `
       }
      if (this.totalSeconds >= 0) {
         timeStudied += SECONDS
      } 
   
      return timeStudied;
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




