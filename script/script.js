window.addEventListener("scroll", function() {
   const header = document.querySelector("header");
   header.classList.toggle("notTop", window.scrollY > 50);
}) 