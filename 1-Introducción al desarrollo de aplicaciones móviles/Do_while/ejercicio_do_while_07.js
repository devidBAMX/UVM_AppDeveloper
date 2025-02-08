//modifica el codigo para contar los numeros menores a 5

let count = 0;
let number;
do {
    number = parseInt(prompt("Introduce un número (0 para salir):"));
    if (number < 5) {
        count++;
    }
} while (number !== 0);
console.log("Has introducido " + count + " números mayores a 5.");