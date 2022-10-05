const burger = document.querySelector('.burger')
const navbar = document.querySelector('.navbar')
const header_ = document.querySelector('.height')

burger.addEventListener('click', ()=> {
    navbar.classList.toggle('o-nav')
    header_.classList.toggle('height')
})