'use strict';
const score0hl = document.querySelector('#score--0');
const score1hl = document.querySelector('#score--1');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');

const dice = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

let playing, cscoreNum, activePlayer, scores;

const playerSwitchSound = new Audio('ding.mp3');
const playerWinsSound = new Audio('notifiction_kasper.mp3');
const diceRollSound = new Audio('dicerollaudacity.mp3');

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  cscoreNum = 0;
  activePlayer = activePlayer == 0 ? 1 : 0;
  document.querySelector('.player--0').classList.toggle('player--active');
  document.querySelector('.player--1').classList.toggle('player--active');
  playerSwitchSound.play();
};
function inti() {
  playing = true;
  cscoreNum = 0;
  activePlayer = 0;
  scores = [0, 0];
  score0hl.textContent = 0;
  score1hl.textContent = 0;
  cscoreNum = 0;
  document.getElementById(`current--0`).textContent = 0;
  document.getElementById(`current--1`).textContent = 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');

  document.querySelector('.player--0').classList.add('player--active');
  document.querySelector('.player--1').classList.remove('player--active');
  document.querySelector('.player--0').classList.remove('player--winner');
  document.querySelector('.player--1').classList.remove('player--winner');
  document.querySelector(`#name--0`).classList.remove('namee');
  document.querySelector(`#name--1`).classList.remove('namee');

  activePlayer = 0;
  playing = true;
  dice.classList.add('hidden');
}

function playFirstSecound() {}

inti();
btnRoll.addEventListener('click', function () {
  if (playing) {
    dice.classList.remove('hidden');
    let diceNum = Math.trunc(Math.random() * 6) + 1;
    diceRollSound.play();
    dice.src = `dice-${diceNum}.png`;

    if (diceNum != 1) {
      cscoreNum += diceNum;
      document.getElementById(`current--${activePlayer}`).textContent =
        cscoreNum;
    } else {
      switchPlayer();
    }
  }
});
btnHold.addEventListener('click', function () {
  if (playing) {
    scores[`${activePlayer}`] += cscoreNum;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[`${activePlayer}`];
    if (scores[`${activePlayer}`] >= 100) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      playerWinsSound.play();
      document.querySelector(`#name--${activePlayer}`).classList.add('namee');

      playing = false;
    } else {
      switchPlayer();
    }
  }
});
btnNew.addEventListener('click', inti);
