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

  function orderLet(option) {
    return option[Math.floor(Math.random() * option.length)];
  }

  function generadorDeExcusas() {
    return orderLet(who) + " " + orderLet(action) + " " + orderLet(what) + " " + orderLet(when);
  }

  console.log(generadorDeExcusas(who, action, what, when));
  document.querySelector("#excuse").innerHTML = generadorDeExcusas(who, action, what, when);
}