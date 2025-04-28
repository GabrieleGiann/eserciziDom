const btn = document.querySelector(".btn");
const body = document.querySelector("body");
let isDarkMode = false;
btn.addEventListener("click", switchColorProfile);

function switchColorProfile() {
  isDarkMode
    ? change("themeDark", "themeWhite", false)
    : change("themeWhite", "themeDark", true);
}

function change(addcls, removecls, darkmode) {
  body.classList.add(addcls);
  body.classList.remove(removecls);
  isDarkMode = darkmode;
}

/*
function changeToLight() {
  body.classList.add("themeWhite");
  body.classList.remove("themeDark");
  isDarkMode = false;
}
*/
