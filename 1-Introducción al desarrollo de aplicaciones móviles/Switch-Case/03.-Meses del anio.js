//Escribe un programa que reciba un número del 1 al 12 y devuelva el mes correspondiente. Si recibe otra entrada enviar el mensaje "Número iválido"

let mes=4;

switch (mes) { 
    case 1:
        console.log('Enero');
        break;
    case 2:
        console.log('Febrero');
        break;
   case 3:
        console.log('Marzo');
        break;
    case 4:
        console.log('Abril');
        break;
    case 5:
        console.log('Mayo');
        break;
    case 6:
        console.log('Junio');
        break;
    case 7:
        console.log('Julio');
        break;
    case 8:
        console.log('Agosto');
        break;
    case 9:
        console.log('Septiembre');
        break;
    case 10:
        console.log('Octubre');
        break;
    case 11:
        console.log('Noviembre');
        break;
    case 12:
        console.log('Diciembre');
        break;
    default:
        //Código que se ejecuta si la expresión no es igual a ninguno de los valores
        console.log('Número inválido');
        break;
    }