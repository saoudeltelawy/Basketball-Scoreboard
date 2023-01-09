// Variables
let homeTeamScore = 0;
let guestTeamScore = 0;
// alert(typeof homeTeamScore);
let homeScoreBoard = document.querySelector(".home-score > p");
// console.log(homeScoreBoard);
// homeScoreBoard.textContent = homeTeamScore;
let guestScoreBoard = document.querySelector(".guest-score > p");
// guestScoreBoard.textContent = guestTeamScore;

// home - buttons;
let onePointBtn = document.querySelector(".home-buttons button:nth-child(1)");
let twoPointsBtn = document.querySelector(".home-buttons button:nth-child(2)");
let threePointsBtn = document.querySelector(
  ".home-buttons button:nth-child(3)"
);
// let homeButtons = document.querySelectorAll(".home-buttons button");

// Guest - buttons;
let buttons = document.querySelectorAll("button");
// Reset Btn
let resetBtn = document.querySelector(".btn-reset button");

// Scoring
// homeButtons.addEventListener("click", function () {
//   //   alert(homeTeamScore);
//   //   alert(this.innerHTML);

//   if (this.innerHTML === "+1") {
//     alert("Sex");
//   } else {
//     alert("Rony");
//   }
//   homeTeamScore += 1;
//   //   alert(homeTeamScore);
//   homeScoreBoard.textContent = homeTeamScore;
// });

//   for (let button of homeButtons) {
//     button.addEventListener("click", function() {
//         alert(this.innerHTML);
//     )};

for (let button of buttons) {
  button.addEventListener("click", function () {
    if (this.innerText === "+1") {
      if (this.parentNode.closest(".home-buttons")) {
        homeTeamScore += 1;
        homeScoreBoard.textContent = homeTeamScore;
      } else {
        guestTeamScore += 1;
        guestScoreBoard.textContent = guestTeamScore;
      }
    } else if (this.innerText === "+2") {
      if (this.parentNode.closest(".home-buttons")) {
        homeTeamScore += 2;
        homeScoreBoard.textContent = homeTeamScore;
      } else {
        guestTeamScore += 2;
        guestScoreBoard.textContent = guestTeamScore;
      }
    } else if (this.innerText === "+3") {
      if (this.parentNode.closest(".home-buttons")) {
        homeTeamScore += 3;
        homeScoreBoard.textContent = homeTeamScore;
      } else {
        guestTeamScore += 3;
        guestScoreBoard.textContent = guestTeamScore;
      }
    }
  });
}

// Reset Score
resetBtn.addEventListener("click", () => {
  //   alert(homeTeamScore);
  if (
    (homeScoreBoard.innerHTML === "0") &
    (guestScoreBoard.innerHTML === "0")
  ) {
    alert("No Goals Yet!");
  } else {
    homeTeamScore = 0;
    guestTeamScore = 0;
    homeScoreBoard.textContent = homeTeamScore;
    guestScoreBoard.textContent = guestTeamScore;
  }
});

// Timer
let h1 = document.querySelector(".timer h1");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let clear = document.getElementById("clear");
let seconds = 0;
let minutes = 0;
let hours = 0;
let t;

function add() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes >= 60) {
    minutes = 0;
    hours++;
  }

  h1.textContent =
    (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
    ":" +
    (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
    ":" +
    (seconds > 9 ? seconds : "0" + seconds);

  timer();
}
function timer() {
  t = setTimeout(add, 1000);
}
//timer();

/* Start button */
start.onclick = function () {
  start.disabled = true;
  timer();
};

/* Stop button */
stop.onclick = function () {
  clearTimeout(t);
  start.disabled = false;
};

/* Clear button */
clear.onclick = function () {
  h1.textContent = "00:00:00";
  seconds = 0;
  minutes = 0;
  hours = 0;
};

// Footer Year
const date = new Date();
let year = date.getFullYear();
let footer = document.querySelector("footer");
footer.textContent += ` - ©${year}`;
