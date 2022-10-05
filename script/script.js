const header = document.querySelector("header");
const nav = document.querySelector('.navbar');

window.addEventListener("scroll", function() {
   header.classList.toggle("notTop", window.scrollY > 50);
   // for(let i = 0; i < burgerLine.length; i++) {
   //    burgerLine[i].classList.toggle("lineCol1 lineCol2", window.scrollY > 50);
   //    burgerLine[i].classList.toggle("lineCol2", window.scrollY > 50);
   // }

   // $('[data-burger="line"]').toggleClass('lineCol1 lineCol2', ($(window).scrollTop() > 50));

   if ($(window).scrollTop() > 50){
      $('[data-burger="line"]').addClass( "lineCol2");
      $('[data-burger="line"]').removeClass("lineCol1");
      $('.navbar').addClass("scrolledNav");
   }
   else {
      $('[data-burger="line"]').addClass( "lineCol1");
      $('[data-burger="line"]').removeClass("lineCol2");
      $('.navbar').removeClass("scrolledNav");
   }
}) 

$(document).ready(function() {
   $('.dropdown').click(function() {
      $('.menu_').toggleClass('menu showMenu');
   })
   $('.dropdown_').hover(function() {
      $('.menu_2').toggleClass('menu2 showMenu2');
   })
})