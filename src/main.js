/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let excuse = document.getElementById("excuse");

  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let randomWho = getRandomInteger(0, who.length - 1);
  let randomAction = getRandomInteger(0, action.length - 1);
  let randomWhat = getRandomInteger(0, what.length - 1);
  let randomWhen = getRandomInteger(0, when.length - 1);

  excuse.innerHTML =
    who[randomWho] +
    " " +
    action[randomWhat] +
    " " +
    what[randomWhat] +
    " " +
    when[randomWhen];
};

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
