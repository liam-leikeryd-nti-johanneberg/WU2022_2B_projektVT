const burger = document.querySelector('.burger')
const nav = document.querySelector('.navbar_wrapper')

function toggleMenu() {
    // nav.classList.toggle('navbar_active')
    burger.classList.toggle('toggle')
}

burger.addEventListener('click', toggleMenu)