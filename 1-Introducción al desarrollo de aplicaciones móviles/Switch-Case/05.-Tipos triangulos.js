//Escribe un programa que reciba el número de lados iguales de un 
//triángulo y devuelva el tipo de triángulo que es. Si recibe otra entrada enviar mensaje "Número iválido"

let ladosIguales=3;

switch(ladosIguales){
    case 0:
        console.log('Triángulo Escaleno');
        break;
    case 2:
        console.log('Triángulo Isoceles');
        break;
    case 3:
        console.log('Triángulo Equilatero');
        break;
    default:
        console.log('Número inválido');
        break;

}