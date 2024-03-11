// Scroll To Top
let btnUP = document.getElementById("up");

window.onscroll = function () {
  if (window.scrollY >= "600") {
    btnUP.style.display = "block";
  } else {
    btnUP.style.display = "none";
  }
};

btnUP.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// Settings Toggle
let settingsToggle = document.getElementById("settingsToggle");
settingsToggle.onclick = function () {
  if (settingsToggle.querySelector("i").classList.contains("fa-circle-xmark")) {
    settingsToggle.querySelector("i").classList.add("fa-gear");
    settingsToggle.querySelector("i").classList.remove("fa-circle-xmark");
    document.querySelector(".settings-menu").style = ` top: -99px`;
  } else {
    settingsToggle.querySelector("i").classList.add("fa-circle-xmark");
    settingsToggle.querySelector("i").classList.remove("fa-gear");
    document.querySelector(".settings-menu").style = ` top: 0`;
  }
};
