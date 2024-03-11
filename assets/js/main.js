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
let btnToggle = document.getElementById("btnToggle");
btnToggle.onclick = function () {
  if (btnToggle.querySelector("i").classList.contains("fa-circle-xmark")) {
    btnToggle.querySelector("i").classList.remove("fa-circle-xmark");
    btnToggle.querySelector("i").classList.add("fa-sliders");
    document.querySelector(".utilities").style = `transform: translateX(249px)`;
  } else {
    btnToggle.querySelector("i").classList.remove("fa-sliders");
    btnToggle.querySelector("i").classList.add("fa-circle-xmark");
    document.querySelector(".utilities").style = `transform: translateX(0px)`;
  }
};
