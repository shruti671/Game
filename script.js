let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const userGuess = document.getElementById("guess").value;
  const message = document.getElementById("message");
  attempts++;

  if (!userGuess) {
    message.textContent = "⛔ Please enter a number!";
  } else if (userGuess == secretNumber) {
    message.textContent = `🎉 Correct! You guessed it in ${attempts} tries.`;
    message.style.color = "lightgreen";
  } else if (userGuess < secretNumber) {
    message.textContent = "📉 Too low! Try again.";
    message.style.color = "#ffc107";
  } else {
    message.textContent = "📈 Too high! Try again.";
    message.style.color = "#ffc107";
  }
}

function resetGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById("guess").value = "";
  const message = document.getElementById("message");
  message.textContent = "Game reset. Try guessing again!";
  message.style.color = "#fff";
}
