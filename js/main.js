var body = document.getElementsByTagName("body")[0];
body.style.backgroundColor = "#ff608c";

// activa función cada vez que se scrollea
window.addEventListener("scroll", () => {
  var scroll = window.scrollY;
  if (scroll < 300) {
    // issue #7
    body.style.backgroundColor = "#ff608c";
  } else if (scroll >= 300 && scroll < 900) {
    // issue #6
    body.style.backgroundColor = "#ffffff";
  } else if (scroll >= 1200 && scroll < 1800) {
    // issue #5
    body.style.backgroundColor = "#00c1b5";
  } else if (scroll >= 2000 && scroll < 2600) {
    // issue #4
    body.style.backgroundColor = "#ff651a";
  } else if (scroll >= 2800 && scroll < 3400) {
    // issue #3
    body.style.backgroundColor = "#ffbe00";
  } else if (scroll >= 3600 && scroll < 4200) {
    // issue #2
    body.style.backgroundColor = "#1d3fbb";
  } else {
    // issue #1
    body.style.backgroundColor = "#e30512";
  }
});
