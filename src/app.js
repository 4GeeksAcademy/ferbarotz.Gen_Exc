import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


window.onload = function() {
  //write your code here
let who = ['Mi Esposa', 'Mi Madre', 'Mi Padre', 'Mi Hermana'];
let action = ['vendio', 'regalo', 'presto', 'daño'];
let what = ['la moto', 'el carro', 'el despertador' ,'el televisor'];
let when = ['ayer', 'hoy', 'en la mañana', 'en la noche'];

function generadorDeExcusas(who, action, what, when) {
  let randomwho = Math.floor(Math.random() * who.length);
  let randomaction = Math.floor(Math.random() * action.length);
  let randomwhat = Math.floor(Math.random() * what.length);
  let randomwhen = Math.floor(Math.random() * when.length);
return (who[randomwho] + " " + action[randomaction]+ " "  + what[randomwhat]+ " "  +  when[randomwhen]);
}
  console.log( generadorDeExcusas(who, action, what, when));
  document.querySelector("#excuse").innerHTML=generadorDeExcusas(who, action, what, when);
};
