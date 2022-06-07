const hour = document.querySelector(".hour");
const minutes = document.querySelector(".minutes");
const second = document.querySelector(".second");
const mSecond = document.querySelector(".msecond");

const start = document.querySelector(".start");
const pause = document.querySelector(".pause");
const stop = document.querySelector(".stop");
const intervalButton = document.querySelector(".interval");
const clear = document.querySelector(".clear")

const resultFields = document.querySelector(".resultFields");

let msCounter = 0;
let sCounter = 0;
let mCounter = 0;
let hCounter = 0;
let interval;
let intervalWin;
let intervalCounter = 0;

const belowZeroOrNot = (a) => {
  if (a <= 9) {
    return "0" + a;
  } else {
    return a;
  }
}

const startTime = () => {
  intervalButton.removeAttribute('disabled');
  //милисекунды**********************************
  intervalWin = `${belowZeroOrNot(hCounter)}:${belowZeroOrNot(mCounter)}:${belowZeroOrNot(sCounter)}:${belowZeroOrNot(msCounter)}`;
  msCounter++;
  mSecond.textContent = belowZeroOrNot(msCounter);

  if (msCounter > 99) {
    //секунды************************************
    sCounter++;
    second.textContent = belowZeroOrNot(sCounter);
    msCounter = 0;
    mSecond.textContent = "0" + msCounter;

    if (sCounter > 59) {
      //минуты**************************************
      mCounter++;
      minutes.textContent = belowZeroOrNot(mCounter);
      sCounter = 0;
      second.textContent = "0" + sCounter;

      if (mCounter > 59) {
        //часы********************************************
        hCounter++;
        hour.textContent = belowZeroOrNot(hCounter);
        mCounter = 0;
        minutes.textContent = "0" + mCounter;
      }
    }
  }
};
// кнопки*************************************************
start.addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(startTime, 10);
});

pause.addEventListener("click", () => {
  clearInterval(interval);
});

stop.addEventListener("click", () => {
  intervalButton.setAttribute('disabled', true);
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

intervalButton.addEventListener("click", () => {
  const block = document.createElement("div");
  intervalCounter++;
  block.textContent = `Time ${intervalCounter}: ${intervalWin}`;
  resultFields.append(block);
});

clear.addEventListener("click", () => {
  resultFields.innerHTML = '';
  intervalCounter = 0;
})


