const btn = document.querySelector(".btn");
const body = document.querySelector("body");
let isDarkMode = false;
btn.addEventListener("click", switchColorProfile);

function switchColorProfile() {
  isDarkMode ? changeToLight() : changeToDark();
}

function changeToDark() {
  body.classList.add("themeDark");
  body.classList.remove("themeWhite");
  isDarkMode = true;
}

function changeToLight() {
  body.classList.add("themeWhite");
  body.classList.remove("themeDark");
  isDarkMode = false;
}
