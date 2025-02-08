//Modifica para pedir solo 3 intentos
let password;
let contador = 0;
do {
    password = prompt("Introduce la contraseña:");
    if (password !== "1234") {
        contador++;
    }
    
    
} while (password !== "1234" && contador < 3);
if(contador>=3)
    console.log("Usuario Bloqueado");
 else
    console.log("Contraseña correcta.");



