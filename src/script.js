"use strict";

const generatedPwEl = document.querySelector(".generated-pw");
const generateBtnEl = document.querySelector(".generate-pw");
const copyBtnEl = document.querySelector(".copy");

// define characters
let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerAlphabet = alphabet.toLowerCase();
var numbers = "0123456789";
var chars = "!?/:;%$&*";

generateBtnEl.addEventListener("click", (e) => {
  e.preventDefault();
  generatedPwEl.textContent = generateRandomPw();

  copyBtnEl.addEventListener("click", (event) => {
    event.preventDefault();
    navigator.clipboard.writeText(generatedPwEl.textContent);
  });
});

// generate shuffle method
String.prototype.shuffle = function () {
  let a = this.split(""),
    n = a.length;

  for (let i = n - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
  }
  return a.join("");
};

function generateRandomPw() {
  let str = "";

  for (let i = 0; i < 2; i++) {
    randomLetter(alphabet);
  }

  for (let i = 0; i < 6; i++) {
    randomLetter(lowerAlphabet);
  }

  for (let i = 0; i < 4; i++) {
    randomLetter(numbers);
  }

  for (let i = 0; i < 1; i++) {
    randomLetter(chars);
  }

  // get random char
  function randomLetter(param) {
    let random = Math.floor(Math.random() * param.length);
    str = str + param.charAt(random);
    return str;
  }

  return str.shuffle();
}
