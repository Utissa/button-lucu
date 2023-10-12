const body = document.body;
const buttonHeight = 50;
const buttonWidth = 90;
const maxHeight = window.innerHeight - buttonHeight;
const rightOver = 1000;
const leftOver = 500;
const nama = prompt("Siapa nama Kamu ?");

window.addEventListener("DOMContentLoaded", () => {
  const noButton = document.getElementById("no-button");
  const yesButton = document.getElementById("yes-button");
  yesButton.addEventListener("click", () => alert("love you too <3" + "  " + nama));

  noButton.addEventListener("mouseover", () => {
    noButton.style.left = Math.floor(Math.random() * (leftOver + 1)) + "px";
    noButton.style.right = Math.floor(Math.random() * (rightOver + 1)) + "px";
    noButton.style.top = Math.floor(Math.random() * (maxHeight + 1)) + "px";
  });
  noButton.addEventListener("click", () => {
    noButton.style.left = Math.floor(Math.random() * (leftOver + 1)) + "px";
    noButton.style.right = Math.floor(Math.random() * (rightOver + 1)) + "px";
    noButton.style.top = Math.floor(Math.random() * (maxHeight + 1)) + "px";
  });
});
const lyt = document.createElement("h3");
lyt.innerHTML = "<b> Love You Too <3  </b>";
// function Lyt() {
//   body.append(lyt);
