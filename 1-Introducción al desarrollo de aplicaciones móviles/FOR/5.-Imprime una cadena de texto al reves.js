//Escribe un programa que imprima una cadena de texto al revés

let cadena='Universidad';
let cadenaInvertida='';

for (let i = cadena.length-1; i >= 0; i--) {

    cadenaInvertida+=cadena[i];
}
console.log(cadenaInvertida);
