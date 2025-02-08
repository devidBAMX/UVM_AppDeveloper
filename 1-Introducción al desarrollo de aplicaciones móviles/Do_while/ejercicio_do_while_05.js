
//cambia el rango para sumar los números impares del 1 al 20
let sumOdd = 0;
let n = 1;
do {
    if (n % 2 !== 0) {
        sumOdd += n;
    }
    n++;
} while (n <= 20);
console.log("La suma de los impares es: " + sumOdd);