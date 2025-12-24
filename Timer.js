const timeInput = document.getElementById("inputTime");
const startBTN = document.getElementById("startBtn");
const pauseBTN = document.getElementById("pauseBtn");
const resumeBTN = document.getElementById("resumeBtn");
const resetBTN = document.getElementById("resetBtn");
const display = document.getElementById("display");

let interval = null;
let t = 0;

function startTimer() {
  if (interval) return; 
  if (t <= 0) return;

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
}

startBTN.addEventListener("click", () => {
  t = parseInt(timeInput.value);
  if (t <= 0) return;
  display.textContent = t;
  startTimer();
});


pauseBTN.addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
});


resumeBTN.addEventListener("click", () => {
  if (!interval && t > 0) {
    startTimer();
  }
});


resetBtn.addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
  t = 0;
  display.textContent = "0";
  timeInput.value = 0;
});
