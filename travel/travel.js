let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');

let formopen = document.querySelector('#login-btn');
let loginform = document.querySelector('.login-form-container');
let formclose = document.querySelector('#form-close');

let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');


window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
searchBar.classList.remove('active');
menu.classList.remove('fa-times');
navbar.classList.remove('active');
}

searchBtn.addEventListener('click',() =>{
searchBtn.classList.toggle('fa-times');
searchBar.classList.toggle('active');
});


formopen.addEventListener('click', ()=>{
    loginform.classList.add('active');
});

formclose.addEventListener('click', () =>{
    loginform.classList.remove('active');
});

menu.addEventListener('click', ()=>{
    menu.classList.toggle('fa-times');
navbar.classList.toggle('active');
});

let videobtn = document.querySelectorAll('.vid-btn');

videobtn.forEach(btn =>{
btn.addEventListener('click', ()=>{
    document.querySelector('.controls .active').classList.remove('active');
    btn.classList.add('active');
    let src = btn.getAttribute('data-src');
    document.querySelector('#video-slider').src=src;
});

});
/*
var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop:true,
});
 
*/





