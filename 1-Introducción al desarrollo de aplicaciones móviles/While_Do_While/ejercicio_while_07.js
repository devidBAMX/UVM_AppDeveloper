//Adivionar un numero secreto entre 1 y 10
//Añade un contador interno y muestra cuantos intentos necesito el usuario para adivinar el número secreto
const secretNumber = 7;
let guess = 0;
let attempts = 0;
while (guess !== secretNumber) {
    guess = parseInt(prompt("Adivina el número secreto entre 1 y 10"));
    attempts++;
}
console.log(`Felicidades, has adivinado el número secreto: ${secretNumber} en ${attempts} intentos`);   