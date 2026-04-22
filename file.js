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
    hint.innerHTML = 'Enter 1-10!';
    return;
  }

  counter++;
  attempt.innerHTML = 'Attempts: ' + counter;

  if (userVal === randomNum) {
    hint.innerHTML = 'You are correct!';
    isGameOver = true;
    btn.innerHTML = 'Play Again';
  } else if (userVal > randomNum) {
    hint.innerHTML = 'Hint: Too High';
  } else {
    hint.innerHTML = 'Hint: Too Low';
  }

  guessInput.value = '';
  guessInput.focus();
}

btn.addEventListener('click', function () {
  if (isGameOver) {
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
