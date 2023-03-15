const body = document.querySelector("body");
const divElement = document.createElement("div");
const hour = document.createElement("span");
const minute = document.createElement("span");
const second = document.createElement("span");

hour.innerText = "00:";
minute.innerText = "00:";
second.innerText = "00";

divElement.append(hour, minute, second);

const Start = document.createElement("button");
const pause = document.createElement("button");
const stop = document.createElement("button");

Start.innerText = "Start";
pause.innerText = "Pause";
stop.innerText = "Stop";

pause.disabled = true;
stop.disabled = true;

// body.append(divElement, Start, pause, stop);

Start.addEventListener("click", handleStartStopWatch);
pause.addEventListener("click", handleStopStopWatch);
stop.addEventListener("click", handleResetStopWatch);

let x;

function handleStartStopWatch() {
  Start.disabled = true;
  stop.disabled = false;
  pause.disabled = false;
  clearInterval(x);
  let countSec = second.innerText;
  let countMin = Number(minute.innerText.slice(0, -1));
  let countHr = Number(hour.innerText.slice(0, -1));
  console.log(countMin);
  x = setInterval(() => {
    countSec = Number(countSec) + 1;
    if (Number(countSec) === 60) {
      countMin = Number(countMin) + 1;
      countMin = countMin < 10 ? `0${countMin}` : countMin;
      minute.innerText = `${countMin}:`;
      countSec = 0;
    }
    if (Number(countMin) === 60) {
      countHr = Number(countHr) + 1;
      countHr = countHr < 10 ? `0${countHr}` : countHr;
      hour.innerText = `${countHr}:`;
      countMin = 0;
      minute.innerText = `0${countMin}:`;
    }
    if (Number(countHr) === 24) {
      hour.innerText = "00:";
      minute.innerText = "00:";
      second.innerText = "00";
      clearInterval(x);
      return;
    }
    countSec = countSec < 10 ? `0${countSec}` : countSec;

    second.innerText = countSec;
  }, 1000);
}

function handleStopStopWatch() {
  clearInterval(x);
  const btnName = pause.innerText;
  if (btnName === "Pause") {
    pause.innerText = "Continue";
  } else {
    pause.innerText = "Pause";
    handleStartStopWatch();
  }
}

function handleResetStopWatch() {
  clearInterval(x);
  Start.disabled = false;
  stop.disabled = true;
  pause.disabled = true;
  pause.innerText = "Pause";
  hour.innerText = "00:";
  minute.innerText = "00:";
  second.innerText = "00";
}
