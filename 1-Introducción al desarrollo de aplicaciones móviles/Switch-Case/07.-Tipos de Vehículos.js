//Escribe un programa que reciba un tipo de vehiculo (coche,moto,bicicleta) y devuelva el número de ruedas.Si recibe otra entrada enviar mensaje "Vehículo iválido"
//'coche' = '4 ruedas'
//'moto' = '2 ruedas'
//'bicicleta' = '2 ruedas'
//default= 'Vehículo inválido'

let vehiculo='coche';
switch (vehiculo) {
    case 'coche':
        console.log('4 ruedas');
        break;
    case 'moto':
        console.log('2 ruedas');
        break;
    case 'bicicleta':
        console.log('2 ruedas');
        break;
    default:
        console.log('Vehículo inválido');
        break;
}