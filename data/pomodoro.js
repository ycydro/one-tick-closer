const TIMER_SETTINGS = { 
   pomodoro: {minutes: 25, seconds: 0 },
   shortBreak: {minutes: 5, seconds: 0 },
   longBreak: {minutes: 10, seconds: 0 },
}
const DEFAULT_MINUTES = TIMER_SETTINGS['pomodoro'].minutes;
const DEFAULT_SECONDS = TIMER_SETTINGS['pomodoro'].seconds;

export const timer = { minutes: DEFAULT_MINUTES, seconds: DEFAULT_SECONDS }

export function setTimer(mode) {
   timer.minutes = TIMER_SETTINGS[mode].minutes;
   timer.seconds = TIMER_SETTINGS[mode].seconds;
}
