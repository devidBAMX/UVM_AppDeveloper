//Escibe un programa que reciba un color (Rojo, Amarillo, Verde) y devuelva la acción correspondiente. Si recibe otra entrada enviar mensaje "Color iválido"
//'Rojo' = 'Alto'
//'Amarillo' = 'Precaución'
//'Verde' = 'Siga'
//default= 'Color inválido'

let semaforo='Rojo';
switch (semaforo) {
    case 'Rojo':
        console.log('Alto');
        break;
    case 'Amarillo':
        console.log('Precaución');
        break;
    case 'Verde':
        console.log('Siga');
        break;
    default:
        console.log('Color inválido');
        break;
}