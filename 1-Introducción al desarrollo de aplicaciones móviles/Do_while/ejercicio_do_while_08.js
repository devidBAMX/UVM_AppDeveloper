// Modifica el código para que la suma sea mayor a 50 en lugar de 100.

let total = 0;
let numInput;
do {
    numInput = parseInt(prompt("Introduce un número:"));
    total += numInput;
} while (total <=50);
console.log("La suma total es: " + total);