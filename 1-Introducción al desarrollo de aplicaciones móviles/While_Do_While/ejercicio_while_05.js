//Contar cuantas veces un dado sale 6
//modifica  el codigo para que cuente cuantas veces sale el número 5 en lugar del 6
let count = 0;
let diceRoll;

while(diceRoll!==5){
    diceRoll = Math.floor(Math.random()*6)+1;
    count++;
}

console.log(`El ha sacado un 5 después de ${count} tiradas`);

