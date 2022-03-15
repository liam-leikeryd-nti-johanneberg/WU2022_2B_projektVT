const burger = document.querySelector('.burger')
const nav = document.querySelector('.nav')

function toggleMenu() {
    nav.classList.toggle('navbar_active')
    burger.classList.toggle('toggle')
}

burger.addEventListener('click', toggleMenu)