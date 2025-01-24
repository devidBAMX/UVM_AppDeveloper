//Escribe un programa que reciba un numero del 1 al 4 y devuelva la estación del año corresposdiente.
//  Si recibe otra entrada enviar mensaje "Número iválido"

let estacion=3;

switch(estacion){
    case 1:
        console.log('Primavera');
        break;
    case 2: 
        console.log('Verano');
        break;
    case 3:
        console.log('Otoño');
        break;
    case 4:
        console.log('Invierno');
        break;
    default:
        console.log('Número inválido');
        break;    
}