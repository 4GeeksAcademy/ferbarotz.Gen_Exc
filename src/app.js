import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


window.onload = function () {
  //write your code here
  let who = ['Mi Esposa', 'Mi Madre', 'Mi Padre', 'Mi Hermana'];
  let action = ['vendio', 'regalo', 'presto', 'daño'];
  let what = ['la moto', 'el carro', 'el despertador', 'el televisor'];
  let when = ['ayer', 'hoy', 'en la mañana', 'en la noche'];

  function getElementAleatory(option) {
    return option[Math.floor(Math.random() * option.length)];
  }

  function excuseGenerator() {
    return getElementAleatory(who) + " " + getElementAleatory(action) + " " + getElementAleatory(what) + " " + getElementAleatory(when);
  }

  console.log(excuseGenerator(who, action, what, when));
  document.querySelector("#excuse").innerHTML = excuseGenerator(who, action, what, when);
}