
// set date
const date = (document.getElementById("date").innerHTML = new Date().getFullYear());
// set up nav
const navBtn = document.getElementById("nav-btn");
const navbar = document.getElementById("navbar");
const navclose = document.getElementById("nav-close");
// close nav
navBtn.addEventListener("click", () => {
    navbar.classList.add("showNav");
});
// close nav
navclose.addEventListener("click", () => {
navbar.classList.remove("showNav");
});
