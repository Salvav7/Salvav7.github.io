var nombre="adsoft"
var email="adsoft@live.com.mx"
var edad = 80

function getNombre() {
console. log(nombre);
var myNameElement = document.getElementById("nombre");
myNameElement.innerHTHL = nombre;
}

function getEmail() {
console.log(email);
var myEmailElement = document.getElementById("email");
myEmailElement.innerHTML = '<b>' + email + '</b>';
}

function getEdad() {
console.log(edad);
var myEdadElement = document.getElementById ("edad");
myEdadElement.innerHTML = '<h1>' + email + '</h1>';
myEdadElement.style.color = "#0000FF";

}
