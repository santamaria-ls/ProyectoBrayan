let nombre = prompt("¿Cuál es tu nombre?");
let year = prompt("¿En qué año naciste?");
let mes = prompt("¿En qué mes naciste? (1 a 12)");
let dia = prompt("¿Qué día naciste?");

let hoy = new Date();
let edad = hoy.getFullYear() - year;

if (hoy < new Date(hoy.getFullYear(), mes - 1, dia)) {
    edad = edad - 1;
}

alert(nombre + " tiene " + edad + " años.");