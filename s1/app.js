// Initialize AOS library
AOS.init();
window.addEventListener('load', () => {
    AOS.refresh();
});

// Get DOM elements
const fitst = document.querySelector('.firstext');
const kwtextt = document.querySelector('.kwtext1');
const kwimg = document.querySelector('.kwimg');
const nav = document.querySelector('.menu');
const toggle3 = document.querySelector('.socialaccres');
const drop = document.querySelector('.dropdownmenu');

// Toggle dropdown menu
toggle3.addEventListener('click', () => {
    drop.classList.toggle('open');
});

// Handle menu and animation on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > fitst.offsetTop - nav.offsetHeight - 525) {
        nav.classList.add('aftermenu');
        kwimg.classList.add("right");
        kwtextt.classList.add("left");
    } else {
        nav.classList.remove('aftermenu');
        kwimg.classList.remove("right");
        kwtextt.classList.remove("left");
    }
});
