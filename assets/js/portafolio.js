
let scroll_height = window.scrollY;
const polea = document.getElementById('polea');
const cuerda = document.getElementById('cuerda');
const circle = document.getElementById('img-tirolina');

polea.style.top = scroll_height + 'px';
cuerda.style.height = (scroll_height + 100) + 'px';

$(window).scroll(function () {
    scroll_height = window.scrollY;
    polea.style.top = scroll_height + 'px';
    cuerda.style.height = (scroll_height + 100) + 'px';
    polea.style.transition = '1s all ease';
    cuerda.style.transition = '1s all ease';
    circle.style.transition = '1s all ease';
    circle.style.transform = `rotate(${scroll_height / 2}deg)`;
});