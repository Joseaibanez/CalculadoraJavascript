"use strict"
let valorActual = 0;
let ultimaOperacion = "ninguna";
let isclear;
let isDecimal;
let pantalla = document.getElementById("textoPantalla");
function clearScreen() {
  document.getElementById("textoPantalla").innerText = "0";
  ultimaOperacion = "ninguna";
  isDecimal = false;
  isclear = true;
}
function writeNum(num) {
  if(isclear) {
    pantalla.innerHTML = "";
    isclear = false;
  }
  pantalla.innerText = pantalla.textContent + num.toString();
}
function coma() {
  if(isclear) {
    isclear = false;
    pantalla.innerText = "0,";
  }else if(!pantalla.textContent.includes(",")) {
    pantalla.innerText = pantalla.textContent + ",";
  }
  isDecimal = true;
}
function operar(op) {
  let operando = parseFloat(pantalla.textContent);
  switch (ultimaOperacion) {
    case "suma":
      valorActual = parseFloat(valorActual)+operando;
      break;
    case "resta":
      valorActual = parseFloat(valorActual)-operando;
      break;
    case "multiplicacion":
      valorActual = parseFloat(valorActual)*operando;
      break;
    case "division":
      if(!isDecimal) {
        if(parseFloat(valorActual)%operando !== 0) {
          isDecimal = true;
        }
      }
      valorActual = parseFloat(valorActual)/operando;
      break;
    case "ninguna":
      valorActual = operando;
      break;
  }
  ultimaOperacion = op;
  pantalla.innerText = valorActual.toString();
  isclear = true;
}
function sumar() {
  operar("suma");
}
function restar() {
  operar("resta")
}
function multiplicar() {
  operar("multiplicacion")
}
function dividir() {
  operar("division")
}
function igual() {
  operar("ninguna");
}
