const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  bodyColor: document.querySelector('body'),
  startBtn: document.querySelector('button[data-action="start"'),
  stopBtn: document.querySelector('button[data-action="stop"'),
};

let intervalId;

function changeColor(color) {
  refs.bodyColor.style.backgroundColor = color;
}

refs.startBtn.addEventListener('click', onStartClick);
refs.stopBtn.addEventListener('click', onStopClick);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function onStartClick() {
  intervalId = setInterval(() => {
    randomColor();
  }, 1000);
}

function randomColor() {
  let numberColor = randomIntegerFromInterval(0, 5); //2
  changeColor(colors[numberColor]);
}

function onStopClick() {
  clearInterval(intervalId);
}
