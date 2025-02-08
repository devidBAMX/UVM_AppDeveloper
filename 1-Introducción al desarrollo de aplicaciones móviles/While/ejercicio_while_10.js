//Pedir al usuario la contraseña correcta hasta que sea correcta
//Limita el numero de intentos a 3 y si falla muestra un mensaje de "Acceso bloqueado"
let password="";
let intentos=0;
while(password!=="1234" && intentos<3){
    password=prompt("Introduce la contraseña:");
    intentos++; 
}
if(intentos>=3)
    console.log("Acceso bloqueado");
else
    console.log("Contraseña correcta");