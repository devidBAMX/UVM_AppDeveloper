//Escribe un programa que imprima los primero s10 números de la serie Fibonacci

let anterior=0;
let acumulado = 1;
let siguiente=0;


for (let i = 1; i <= 10; i++) {
    console.log(anterior);
    siguiente =anterior+ acumulado;
    anterior = acumulado;
    acumulado =siguiente;

}
