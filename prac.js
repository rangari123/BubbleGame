// count of Scores
let Scoreval = 0;

function Score() {
  Scoreval += 10;
  document.querySelector("#scoreVal").textContent = Scoreval;
}

// New target to hit
let RandomNumber = 0;

function targetVal() {
  RandomNumber = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = RandomNumber;
}

// Bubble Maker
let clutter = "";

function MakeBubble() {
  for (let i = 1; i <= 102; i++) {
    let randomBubbleNumber = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${randomBubbleNumber}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = clutter;
}

// timer function
let timer = 5;

function runTimer() {
  let timerInt = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerVal").textContent = timer;
    } else {
      gameOver();
      clearInterval(timerInt);
    }
  }, 1000);
}

// Event Bubbling

document.querySelector("#pbtm").addEventListener("click", function (dets) {
  let clickedNumber = Number(dets.target.textContent);
  if (clickedNumber === RandomNumber) {
    Score();
    MakeBubble();
    targetVal();
  }
});

function gameOver() {
  document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
  document.querySelector("#restartButton").style.display = "block";
}

runTimer();
MakeBubble();
targetVal();

// Restart button event listener
document.querySelector("#restartButton").addEventListener("click", function () {
  Scoreval = 0;
  document.querySelector("#scoreVal").textContent = Scoreval;

  timer = 60;
  document.querySelector("#timerVal").textContent = timer;

  document.querySelector("#pbtm").innerHTML = "";
  document.querySelector("#restartButton").style.display = "none";

  MakeBubble();
  targetVal();
});
