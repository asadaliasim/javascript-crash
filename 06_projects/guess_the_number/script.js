let correctNum = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');

const userInput = document.querySelector('#guessField');

const prevGuess = document.querySelector('.guesses');
const remainGuess = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuesses = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);

    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('please enter a valid number');
  } else if (guess < 1) {
    alert('please enter a b/w 1 and 100');
  } else if (guess > 100) {
    alert('please enter a b/w 1 and 100');
  } else {
    prevGuesses.push(guess);
    if (numGuess === 10 || numGuess === 0) {
      displayGuess(guess);

      displayMsg(`Random number was ${correctNum}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  //
  if (guess === correctNum) {
    displayMsg(`you guessed it right`);
  } else if (guess < correctNum) {
    displayMsg(`Number is Too Low`);
  } else if (guess > correctNum) {
    displayMsg(`Number is Too High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  prevGuess.innerHTML += `${guess}  `;
  numGuess++;
  remainGuess.innerHTML = `${11 - numGuess}`;
}

function displayMsg(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  numGuess = 1;
  newGame();
}

function newGame() {
  const newGameBtn = document.querySelector('#newGame');
  newGameBtn.addEventListener('click', (e) => {
    correctNum = parseInt(Math.random() * 100 + 1);
    prevGuesses = [];
    prevGuess.innerHTML = ``;
    remainGuess.innerHTML = `10`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}
