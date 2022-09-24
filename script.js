"use strict";

const btn = document.querySelector(".container__button");
const container = document.querySelector(".container");

for (let i = 0; i <= 3; i++) {}

const randomNumber = () => Math.floor(Math.random() * 256);

const changeBackground = function () {
  const r = randomNumber();
  const g = randomNumber();
  const b = randomNumber();
  const randomColor = `rgb(${r},${g},${b})`;

  container.style.backgroundColor = randomColor;
};

btn.addEventListener("click", changeBackground);
