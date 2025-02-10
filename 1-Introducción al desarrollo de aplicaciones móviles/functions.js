//Funciones de flecha o funcion anonima

const fnSumar=(a,b)=>a+b;

console.log(fnSumar(5,3));

//funcion declarada

function sumar(a,b){
    return a+b;
}

//Hoisting: Las funciones declaradas se "elevan" al 
// inicio del archivo o bloque. Puedes llamar a sumar(5, 3) antes de su definición en el código y funcionará.

console.log(sumar(5,3));


//Funcion asignada a una constante, función de expression


const sumar2=function(a,b){
    return a+b;
}

console.log(sumar2(5,3));