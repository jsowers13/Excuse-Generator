/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#excuse-btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
};

let generateExcuse = () => {
  let who = [
    "The dog",
    "My grandma",
    "A crazy raccoon",
    "My bird",
    "An adult",
    "An unknown human man",
    "Some alien creatures"
  ];
  let action = [
    "ate",
    "peed on",
    "crushed",
    "broke",
    "threw",
    "destroyed",
    "sneezed on"
  ];
  let what = [
    "my homework",
    "the keys",
    "the car",

    "my drink",
    "my sister",
    "my best friend",
    "my brother",
    "my mom",
    "my dad",
    "my cat",
    "Mr. Peterson's sedan"
  ];
  let when = [
    "before class",
    "near the river",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let whoIndex = 0;
  let actionIndex = 0;
  let whatIndex = 0;
  let whenIndex = 0;

  var subject = who[Math.floor(Math.random() * who.length)];
  var did = action[Math.floor(Math.random() * action.length)];
  var predicate = what[Math.floor(Math.random() * what.length)];
  var timeline = when[Math.floor(Math.random() * when.length)];

  return subject + " " + did + " " + predicate + " " + timeline + "!";
};
