//Escribe un programa que reciba una letra (A,B,C,D,F) y devuelva la calificación correspondiente.
// Donde A es la mas alta, y F es reprobado, Si recibe otra entrada enviar el mensaje "Calificación iválida"

let calificacion='A';

switch (calificacion) { 
    case 'A':
        console.log('Excelente');
        break;
    case 'B':
        console.log('Bueno');
        break;    
    case 'C':
        console.log('Regular');
        break;
    case 'D':
        console.log('Deficiente');
        break;
    case 'F':
        console.log('Reprobado');
        break;
    default:
        //Código que se ejecuta si la expresión no es igual a ninguno de los valores
        console.log('Calificación inválida');
        break;
    }