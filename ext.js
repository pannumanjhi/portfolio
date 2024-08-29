
window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });
  
  function toggleMenu() {
    let menutoggle = document.querySelector(".toggle");
    let menu = document.querySelector(".menu");
  
    menutoggle.classList.toggle("active");
    menu.classList.toggle("active");
  }
  