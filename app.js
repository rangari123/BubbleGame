// count of Scores
let Scoreval = 0;
let timer = 60;

let RandomNumber = 0;
function Score() {
  Scoreval += 10;
  document.querySelector("#scoreVal").textContent = Scoreval;
}

// New target to hit

function targetVal() {
  RandomNumber = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = RandomNumber;
}

// Bubble Maker

function MakeBubble() {
  let clutter = "";
  for (let i = 1; i <= 102; i++) {
    let randomBubbleNumber = Math.floor(Math.random() * 10); // Use a different variable
    clutter += `<div class="bubble">${randomBubbleNumber}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = clutter;
}

// timer function

// location.reload()

function runTimer() {
  let timerInt = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerVal").textContent = timer;
    } else {
      document.querySelector("#pbtm").innerHTML = `
      <h1>Game Over</h1>
            <button type="button" onClick="window.location.reload()">
             Reload Page
            </button>
      `;
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

runTimer();
MakeBubble();
targetVal();
