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



  const texts = document.querySelector(".animate-text").children,
        textsLen = texts.length;
        let index = 0;
        const textInTimer=3000,
              textOutTimer=2800;

  function animateText() {

    for(let i=0; i<textsLen; i++) {
      texts[i].classList.remove("text-in", "text-out");

    }

    texts[index].classList.add("text-in");

    setTimeout(function () { 
      texts[index].classList.add("text-out");

     }, textOutTimer)


    if(index == textsLen-1) {
      index=0;
    } else {
      index++;
    }


    setTimeout(animateText, 3000);

  }

  window.onload=animateText;