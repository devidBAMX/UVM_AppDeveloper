//Pedir al usuario que introduzca un número mayor que 10
//Modifica el codigo para que pida un número menor que 100
let number=200;

while (number > 100) {
    number = parseInt(prompt("Introduce un número menor que 100"));
}
console.log(`Número aceptado: ${number}`);