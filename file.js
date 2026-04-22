let guessInput = document.getElementById('guess');
let btn = document.getElementById('btn');
let hint = document.getElementById('hint');
let attempt = document.getElementById('attempt');

let randomNum = Math.floor(Math.random() * 10 + 1);
let counter = 0;
let isGameOver = false;

function guessNumber() {
  if (isGameOver) return;

  let userVal = Number(guessInput.value);

  if (!userVal || userVal < 1 || userVal > 10) {
    hint.innerHTML = 'Please enter a number between 1 and 10';
    return;
  }

  counter++;
  attempt.innerHTML = 'Attempts: ' + counter;

  if (userVal === randomNum) {
    hint.innerHTML = `🎉 Correct! The number was ${randomNum}.`;
    isGameOver = true;
    btn.innerHTML = 'Play Again';
  } else if (userVal > randomNum) {
    hint.innerHTML = 'Hint: Too High! Try lower.';
  } else {
    hint.innerHTML = 'Hint: Too Low! Try higher.';
  }

  guessInput.value = '';
  guessInput.focus();
}

btn.addEventListener('click', function () {
  if (isGameOver) {
    // Reset game
    randomNum = Math.floor(Math.random() * 10 + 1);
    counter = 0;
    isGameOver = false;
    hint.innerHTML = 'Hint: Guess again!';
    attempt.innerHTML = 'Attempts: 0';
    btn.innerHTML = 'Guess';
  } else {
    guessNumber();
  }
});

guessInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') guessNumber();
});
