//Escibe una programa que encuentre el número maximo en un array

let array=[45,4,,98,65,32,125,4582,1235,-56,89,963]
let numeroMaximo=array[0];

for (let i = 1; i < array.length; i++) {
    if(numeroMaximo<array[i]){
        numeroMaximo=array[i];
    }
}

console.log('El número máximo es: '+numeroMaximo);