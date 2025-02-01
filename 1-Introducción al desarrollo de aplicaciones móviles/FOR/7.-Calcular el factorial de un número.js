//Escribe un programa que calcule el factorial de un número dado

let numero = 10;
let factorial = 1;

for (let i = 1; i <= numero; i++) {
    factorial *= i;
}
console.log('El factorial de '+numero+' es: '+factorial);
