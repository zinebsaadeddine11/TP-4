const timeInput = document.getElementById("inputTime");
const startBTN = document.getElementById("startBtn");
const pauseBTN = document.getElementById("pauseBtn");
const endBTN = document.getElementById("endBtn");
const display = document.getElementById("display");

let interval = null;
let t = 0;

startBTN.addEventListener("click", () => {
  if (interval) return;

  t = Number(timeInput.value);
  display.textContent = t;

  interval = setInterval(() => {
    if (t > 0) {
      t--;
      display.textContent = t;
    } else {
      clearInterval(interval);
      interval = null;
      display.textContent = "Time over";
    }
  }, 1000);
});
