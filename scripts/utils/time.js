export function isEndOfMinute(seconds) {
   return seconds === 0;
}

export function formatTime(minutes, seconds) {

   let formattedMinutes = minutes.toString().padStart(2, "0");
   let formattedSeconds = seconds.toString().padStart(2, "0");

   return `${formattedMinutes}:${formattedSeconds}`;
}