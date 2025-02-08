
//Añade un mensaje que indique que si el numero es mayor o menor al numero secreto
const secretNumber = 7;
let guess;
do {
    guess = parseInt(prompt("Adivina el número entre 1 y 10:"));
    if (guess < secretNumber) {
        console.log("El número secreto es mayor.");
    } else if (guess > secretNumber) {
        console.log("El número secreto es menor.");
    }
} while (guess !== secretNumber);
console.log("¡Adivinaste el número!");