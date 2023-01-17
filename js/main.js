let menuIcon = document.getElementById('menuIcon');
let closeIcon = document.getElementById('closeIcon');
let nav = document.querySelector('nav');
let slide = document.getElementsByClassName('slide')[0];

menuIcon.addEventListener('click',mobileMenu);
closeIcon.addEventListener('click',closeMenu);
function mobileMenu(){
    nav.style.display = 'flex';
    closeIcon.style.display = 'flex';
    menuIcon.style.display = 'none';
    slide.style.display = 'none';

}

function closeMenu(){
    nav.style.display = 'none';
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'flex';
    slide.style.display = 'flex';

}