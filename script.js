
var menu = document.querySelector('.menu');
var navbar = document.querySelector('.nav_bar ul');
var back = document.querySelector('.nav_bar ul .li1');
var back1 = document.querySelector('.nav_bar ul .li2');
var back2 = document.querySelector('.nav_bar ul .li3');
var back3 = document.querySelector('.nav_bar ul .li4');
var back4 = document.querySelector('.nav_bar ul .li5');


menu.addEventListener('click',()=>{
    navbar.classList.toggle('slide');
    menu.children[0].classList.toggle('line1');
    menu.children[1].classList.toggle('line2');
    menu.children[2].classList.toggle('line3');
});

back.addEventListener('click',()=>{
    navbar.classList.remove('slide');
    menu.children[0].classList.toggle('line1');
    menu.children[1].classList.toggle('line2');
    menu.children[2].classList.toggle('line3');
});

back1.addEventListener('click',()=>{
    navbar.classList.remove('slide');
    menu.children[0].classList.toggle('line1');
    menu.children[1].classList.toggle('line2');
    menu.children[2].classList.toggle('line3');
});

back2.addEventListener('click',()=>{
    navbar.classList.remove('slide');
    menu.children[0].classList.toggle('line1');
    menu.children[1].classList.toggle('line2');
    menu.children[2].classList.toggle('line3');
});

back3.addEventListener('click',()=>{
    navbar.classList.remove('slide');
    menu.children[0].classList.toggle('line1');
    menu.children[1].classList.toggle('line2');
    menu.children[2].classList.toggle('line3');
});

back4.addEventListener('click',()=>{
    navbar.classList.remove('slide');
    menu.children[0].classList.toggle('line1');
    menu.children[1].classList.toggle('line2');
    menu.children[2].classList.toggle('line3');
});