'use strict';

import { randomLetters } from './lib.js';

const generatedPwEl = document.querySelector('.generated-pw');
const generateBtnEl = document.querySelector('.generate-pw');
const copyBtnEl = document.querySelector('.copy');

let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lowerAlphabet = alphabet.toLowerCase();
let numbers = '0123456789';
let chars = '!?/:;%$&*';

generateBtnEl.addEventListener('click', (e) => {
  e.preventDefault();
  generatedPwEl.textContent = generateRandomPw();
});

copyBtnEl.addEventListener('click', (e) => {
  e.preventDefault();
  navigator.clipboard.writeText(generatedPwEl.textContent).then(() => {
    alert('Password copied to clipboard!');
  });
});

String.prototype.shuffle = function () {
  let a = this.split(''),
    n = a.length;

  for (let i = n - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a.join('');
};

function generateRandomPw() {
  return (
    randomLetters(2, alphabet) +
    randomLetters(6, lowerAlphabet) +
    randomLetters(4, numbers) +
    randomLetters(1, chars)
  ).shuffle();
}
