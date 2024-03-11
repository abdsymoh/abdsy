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
