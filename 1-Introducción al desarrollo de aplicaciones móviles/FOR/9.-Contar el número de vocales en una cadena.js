//Escribir un programa que cuente el número de vocales en una sentencia de texto

let cadena='KarruSEEEl'
for (let i = 0; i < cadena.length; i++) {
    if("aeiouAEIOU".includes(cadena[i])){
        console.log(cadena[i]);
    }
}

