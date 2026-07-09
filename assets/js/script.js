window.addEventListener("scroll", () => {

const header = document.querySelector("header");

header.style.background =
window.scrollY > 20 ? "#09111f" : "rgba(9,17,31,.85)";

});

document.querySelectorAll(".faq-question").forEach(btn => {

btn.addEventListener("click", () => {

const answer = btn.nextElementSibling;

const opened = answer.style.display === "block";

document.querySelectorAll(".faq-answer").forEach(a => a.style.display = "none");

answer.style.display = opened ? "none" : "block";

});

});
