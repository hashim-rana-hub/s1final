let header = document.querySelector('.header');
let menu = document.querySelector('.menu');

menu.addEventListener('click', function() {
    header.classList.toggle('menu-open');
})