

var menu=document.querySelector('.menu');
var navbar=document.querySelector('.nav_bar ul');
var body=document.querySelector('.head')

menu.addEventListener('click',()=>{
    navbar.classList.toggle('slide');
    menu.children[0].classList.toggle('line1');
    menu.children[1].classList.toggle('line2')
    menu.children[2].classList.toggle('line3')
});

