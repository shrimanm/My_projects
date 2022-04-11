const birthdate = "14 apr 2022";

const dayss = document.getElementById("days");
const hourss = document.getElementById("hours");
const minutess = document.getElementById("minutes");
const secondss = document.getElementById("seconds");

function countdown() {
  const newbirthdate = new Date(birthdate);
  const currentdate = new Date();

  const totalseconds = (newbirthdate - currentdate) / 1000;
  const days = Math.floor(totalseconds / 3600 / 24);
  const hours = Math.floor(totalseconds / 3600) % 24;
  const minutes = Math.floor(totalseconds / 60) % 60;
  const seconds = Math.floor(totalseconds / 1) % 60;

  dayss.innerHTML = days;
  hourss.innerHTML = formatTime(hours + 6);
  minutess.innerHTML = formatTime(minutes);
  secondss.innerHTML = formatTime(seconds);

  var x = Math.floor(Math.random() * 10000);
  var y = "#FA" + x;
  var a = document.querySelector("h1");
  a.style.color = y;
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
setInterval(countdown, 1000);
