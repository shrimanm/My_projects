var menu=document.querySelector("#menu");
var links = document.querySelector(".links")


menu.addEventListener('click',function(){
    menu.classList.toggle('fa-times');
    links.classList.toggle('active');
});

var radio = document.querySelectorAll('.img');

radio.forEach(btn =>{
btn.addEventListener('click',() =>{
document.querySelector('.controls .active').classList.remove('active');
btn.classList.add('active');
let src = btn.getAttribute('data-src');
document.querySelector('.image-slide img').src=src;
});

});

let gall = document.querySelector(".galler");
function funfocus(ele){
setInterval(anim,1000);
}
let left = 0;
function anim(){
    if(left > -100){
    left-=10;
    let vvar = left+"%";
    gall.style.left = vvar;
    }
    else{
        gall.style.left="0";
        left = 10;
    }
}
$(Window).on('load scroll',function(){
    menu.classList.remove('fa-times');
    links.classList.remove('active');
    if($(window).scrollTop() > 10){
    document.querySelector('.nav').classList.add('onscroll');
    document.querySelector('.login').style.display = "none";
    document.querySelector('.signin').style.display = "none";

}
else{
    document.querySelector('.nav').classList.remove('onscroll');


}
});

let login = document.querySelector('.join');
login.addEventListener('click',function(){
    document.querySelector('.login').style.display = "block";
});

let wrong = document.querySelector('.wrong');
wrong.addEventListener('click',function(){
    document.querySelector('.login').style.display = "none";
});

let sign = document.querySelector('.login .loginform .sig');
sign.addEventListener('click',function(){
document.querySelector('.signin').style.display = "block";
});

document.querySelector('.signin .signinbtn input[type=submit]').addEventListener('click',function(){
    if(this.required == true){
    document.querySelector('.signin').style.display = "none";

    }
});

document.querySelector('.login .loginbtn input[type=submit]').addEventListener('click',function(){
    if(this.required == true){
    document.querySelector('.login').style.display = "none";
}
});

document.querySelector('header nav .links li a').addEventListener('click',function(){
    this.style.background = "grey";
});

$(Window).on('load scroll',function(){
    if($(window).scrollTop() > 10){
        document.querySelector('.rocket').style.display  = 'block';
    }
    else{
        document.querySelector('.rocket').style.display  = 'none';

    }

}); 

function mail(){
return document.querySelector('.video .info textarea').innerText;
};