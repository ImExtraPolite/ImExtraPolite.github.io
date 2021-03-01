let secretNumber = Math.trunc(Math.random() * 100) + 1;
let score = 10;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    displayMessage("👎 No number!");
  } else if (guess === secretNumber) {
    displayMessage("✔️ Correct Number!");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".background").style.background = "#60b347";
    document.querySelector(".img").style.width = "30rem";
    document.querySelector(".img").style.background = "red";
    document.querySelector(".number").style.color = "black";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "⬆️ Too high!" : "⬇️ Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("😔 You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
});
