//! How to test if jQuery is working or not
 /*if (typeof jQuery == "undefined") {
    alert("jQuery is not installed");
} else {
    alert("jQuery is installed correctly")
} */


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar__menu");


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  })

  document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }))
