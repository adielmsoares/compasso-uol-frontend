
/* Date formater terça-feira, 17 de março de 2020 */

const data = document.querySelector(".header-date");

const date = new Date();

const formatter = Intl.DateTimeFormat('pt-BR',{
	weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",

});


data.innerHTML = formatter.format(date);

/* Horas and countdownTime */

const horas = document.querySelector(".header-hour");

const timeout = document.querySelector(".footer-seconds");

var tempo = 0; 
var tempoOut = 600; 

var hra = date.getHours();
var min = date.getMinutes();
var seg = date.getSeconds();

function horasContagem() {
        if ( seg < 60) {
          seg = seg + 1
        } 
        if (seg == 60) {
          seg = 0
          min = min + 1
        }

        if (min == 60) {
          min = 00
          hra = hra + 1
        } 

        if (hra == 24) {
          hra = 0
        } 

        horaImprimivel = `${hra}:${("00" + min).slice(-2)}`
        horas.innerHTML = horaImprimivel
        timeout.innerHTML = ("000" + (tempoOut - tempo)).slice(-3)

        if (tempoOut - tempo < 0) {
          window.location.href = '../index.html';
        }

        setTimeout('horasContagem()', 1000);

        tempo++;

}

horasContagem();