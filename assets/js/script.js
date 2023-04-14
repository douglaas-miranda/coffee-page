const button = document.querySelector('.navegacao-mobile--img');
const divMenu = document.querySelector('.navegacao-mobile--container');

button.addEventListener('click', function() {
    divMenu.classList.toggle('block');
})