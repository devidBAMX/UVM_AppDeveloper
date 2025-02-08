//Contar cunatos numeros menores que 50 ingresa el usuario
//modifica el código para contar cuantos numeros mayores a 100 introduce el usuario

let count = 0;
let input = 0;
while(input!==0){
    input = parseInt(prompt("Introduce un número (escribe 0 para terminar):"));
    if(input>100) 
        count++;
}
console.log(`Has introducido ${count} números mayores que 100`);