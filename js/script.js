// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
//Ketika kebab menu di klik
document.querySelector("#kebab-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//Klik di luar sidebar untuk menghilangkan nav
const kebab = document.querySelector("#kebab-menu");

document.addEventListener("click", function (e) {
  if (!kebab.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
