const hamburger = document.querySelector("header nav .hamburger");
const bars = document.querySelectorAll("header nav .hamburger .bar");
let ul = document.querySelector("header nav ul");
hamburger.addEventListener("click", function () {
    ul.classList.toggle("open");
    bars[0].classList.toggle("first");
    bars[1].classList.toggle("second");
    bars[2].classList.toggle("third");
});