const hour = document.querySelector(".hour");
const minutes = document.querySelector(".minutes");
const second = document.querySelector(".second");
const mSecond = document.querySelector(".msecond");

const start = document.querySelector(".start");
const pause = document.querySelector(".pause");
const stop = document.querySelector(".stop");

let msCounter = 0;
let sCounter = 0;
let mCounter = 0;
let hCounter = 0;
let interval;

const startTime = () => {
  //милисекунды**********************************
  msCounter++;
  if (msCounter <= 9) {
    mSecond.textContent = "0" + msCounter;
  }
  if (msCounter > 9) {
    mSecond.textContent = msCounter;
  }
  if (msCounter > 99) {
    //секунды************************************
    sCounter++;
    if (sCounter <= 9) {
      second.textContent = "0" + sCounter;
    }
    if (sCounter > 9) {
      second.textContent = sCounter;
    }
    msCounter = 0;
    mSecond.textContent = "0" + msCounter;
    if (sCounter > 59) {
      //минуты**************************************
      mCounter++;
      if (mCounter <= 9) {
        minutes.textContent = "0" + mCounter;
      }
      if (mCounter > 9) {
        minutes.textContent = mCounter;
      }
      sCounter = 0;
      second.textContent = "0" + sCounter;
      if (mCounter > 59) {
        //часы********************************************
        hCounter++;
        if (hCounter <= 9) {
          hour.textContent = "0" + hCounter;
        }
        if (hCounter > 9) {
          hour.textContent = hCounter;
        }
        mCounter = 0;
        minutes.textContent = "0" + mCounter;
      }
    }
  }
};
// кнопки*******************************
start.addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(startTime, 10);
});

pause.addEventListener("click", () => {
  clearInterval(interval);
});

stop.addEventListener("click", () => {
  clearInterval(interval);
  msCounter = 0;
  sCounter = 0;
  mCounter = 0;
  hCounter = 0;
  hour.textContent = "00";
  minutes.textContent = "00";
  second.textContent = "00";
  mSecond.textContent = "00";
});
