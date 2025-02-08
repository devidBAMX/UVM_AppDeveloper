//MOdifica el codigo para que ignore las mayuscula y minusculas al escribir salir

let input;
do {
    input = prompt("Escribe algo (escribe 'salir' para terminar):");
    
    console.log("Escribiste: " + input);
    input = input.toLowerCase();

} while (input !== "salir");
console.log("Fin del programa.");