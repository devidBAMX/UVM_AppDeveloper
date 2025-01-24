//Escribe un programa que reciba un número del 1 al 7 y devuelva el de la semana correspondiente.

let dia=4;

switch (dia) { 
    case 1:
        console.log('Lunes');
        break;
    case 2:
        console.log('Martes');
        break;
    case 3:
        console.log('Miércoles');
        break;
    case 4:
        console.log('Jueves');
        break;
    case 5:
        console.log('Viernes');
        break;
    case 6:
        console.log('Sábado');
        break;
    case 7:
        console.log('Domingo');
        break;
    default:
        //Código que se ejecuta si la expresión no es igual a ninguno de los valores
        console.log('El valor'+dia+' no es un día de la semana');
        break;
    }