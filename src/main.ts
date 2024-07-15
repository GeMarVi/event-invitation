import {
   differenceInMilliseconds,
   intervalToDuration,
   differenceInDays,
} from "date-fns";

const days = document.getElementById("days") as HTMLElement;
const hours = document.getElementById("hours") as HTMLElement;
const minutes = document.getElementById("minutes") as HTMLElement;
const seconds = document.getElementById("seconds") as HTMLElement;

// Fecha objetivo
const targetDate = new Date("2024-09-15T19:00:00");
const now = new Date();

// Calcula la diferencia en milisegundos
const diff = differenceInMilliseconds(targetDate, now);

// Convierte la diferencia en un objeto de duración
const duration = intervalToDuration({ start: now, end: targetDate });

const result = differenceInDays(targetDate, now);

let daysEdit = Number(result) || 0;
let hoursEdit = Number(duration.hours) || 0;
let minutesEdit = Number(duration.minutes) || 0;
let secondsEdit = Number(duration.seconds) || 0;

function updateTimer(): void {
   if (diff <= 0) {
      const eventDate = document.getElementById("event-date");
      if (eventDate) eventDate.innerHTML = "¡El tiempo ha llegado!";
      return;
   }

   if (days) days.innerHTML = daysEdit.toString();
   if (hours) hours.innerHTML = hoursEdit.toString();
   if (minutes) minutes.innerHTML = minutesEdit.toString();
   if (seconds) seconds.innerHTML = secondsEdit.toString();

   // Actualiza cada segundo
   setTimeout(() => {
      secondsEdit--;
      if (secondsEdit < 0) {
         secondsEdit = 59;
         minutesEdit--;
      }
      if (minutesEdit < 0) {
         minutesEdit = 59;
         hoursEdit--;
      }
      if (hoursEdit < 0) {
         hoursEdit = 23;
         daysEdit--;
      }
      if (daysEdit < 0) {
         daysEdit = 0;
         hoursEdit = 0;
         minutesEdit = 0;
         secondsEdit = 0;
      }

      updateTimer();
   }, 1000);
}

document.addEventListener("DOMContentLoaded", () => {
   updateTimer();
});
