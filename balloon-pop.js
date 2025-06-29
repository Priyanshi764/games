const gameArea = document.getElementById("game-area");
const scoreDisplay = document.getElementById("score");
let score = 0;

function createBalloon() {
  const balloon = document.createElement("div");
  balloon.classList.add("balloon");

  const colors = ["red", "blue", "green", "yellow", "pink", "purple"];
  balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

  balloon.style.left = Math.random() * (window.innerWidth - 60) + "px";

  balloon.addEventListener("click", () => {
    popBalloon(balloon);
  });

  gameArea.appendChild(balloon);

  setTimeout(() => {
    if (balloon.parentElement) {
      balloon.remove();
    }
  }, 5000);
}

function popBalloon(balloon) {
  score++;
  scoreDisplay.innerText = score;
  balloon.remove();
}

// Spawn a new balloon every 700ms
setInterval(createBalloon, 700);
