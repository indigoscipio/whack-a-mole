let timerDisplay = document.querySelector(".timer");
let scoreDisplay = document.querySelector(".score");
let gameBoard = document.querySelector(".game-board");
let squares = document.querySelectorAll(".square");
let whale = document.querySelector(".whale");

let score = 0;
let timer = 60;
let hitPosition;
let timerID = null;

function randomizeWhale() {
  squares.forEach((square) => {
    square.classList.remove("whale");
    square.innerText = "";
  });

  let randomSquare = squares[Math.floor(Math.random() * squares.length)];
  randomSquare.classList.add("whale");
  randomSquare.innerText = "🐳";
  hitPosition = randomSquare.id;
}

squares.forEach((square) => {
  square.addEventListener("mousedown", () => {
    if (square.id == hitPosition) {
      score++;
      scoreDisplay.innerText = `Your Score: ${score}`;
      hitPosition = null;
    }
  });
});

function moveWhale() {
  timerID = setInterval(randomizeWhale, 1000);
}
moveWhale();

function countDown() {
  timer--;
  timerDisplay.innerHTML = `Time Remaining: ${timer}`;

  if (timer === 0) {
    clearInterval(countDownTimerId);
    clearInterval(timerID);
    alert("Time's Up!");
  }
}
let countDownTimerId = setInterval(countDown, 1000);
