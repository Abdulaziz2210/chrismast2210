"use strict";

const ul = document.getElementById('ul');
const bars = document.querySelector('.bars');

const Toggle = () => {
    ul.classList.toggle('active');  
    bars.classList.toggle('close');  

    if (ul.classList.contains('active')) {
        bars.querySelector('.fa-bars').style.display = 'none'; 
        bars.querySelector('.fa-close').style.display = 'block'; 
    } else {
        bars.querySelector('.fa-bars').style.display = 'block'; 
        bars.querySelector('.fa-close').style.display = 'none'; 
    }
}

const navLinks = document.querySelectorAll('.nav-items ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        ul.classList.remove('active'); 
        bars.classList.remove('close'); 
        bars.querySelector('.fa-bars').style.display = 'block'; 
        bars.querySelector('.fa-close').style.display = 'none'; 
    });
});

const Body = document.getElementById('body');
const theme = document.getElementById('theme');

function changetheme(){
    Body.classList.toggle('dark');
    theme.classList.toggle('fa-moon');
}