const hambutton = document.querySelector(".toggleMenu");
const mainnav = document.querySelector(".navigation");

hambutton.addEventListener("click", () => {mainnav.classList.toggle("responsive")}, false);

window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};