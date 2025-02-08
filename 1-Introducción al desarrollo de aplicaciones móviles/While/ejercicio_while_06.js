//sumar digitos de un número
//cambia el codigo para que funcione con cualquier número que ingrese el usuario

let num=parseInt(prompt("Introduce un número"));
let sum=0;
while(num>0){
    sum += num%10;
    num = Math.floor(num/10);
}
console.log(`La suma de los digitos es: ${sum}`);