"use strict";

const btn = document.querySelectorAll(".btn");
const icon = document.querySelectorAll(".icon");
const answer = document.querySelectorAll(".hide-answer");

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    btn[i].classList.toggle("btn-open");
    btn[i].classList.toggle("btn-close");
    icon[i].classList.toggle("icon-close");
    icon[i].classList.toggle("icon-open");
    answer[i].classList.toggle("hide-answer");
  });
}
