//Escibe un programa que reciba un tipo de clima (soleado, lluvioso, nublado) y devuelva una recomendación.
//'soleado' = 'Usar protecto solar'
//'lluvioso' = 'llevar un paraguas'
//'nublado' = 'Puede que necesites chamarra'
//default= 'Clima invalido'

let clima='soleado';

switch (clima) {
    case 'soleado':
        console.log('Usar protector solar');
        break;
    case 'lluvioso':
        console.log('Llevar un paraguas');
        break;
    case 'nublado':
        console.log('Puede que necesites chamarra');
        break;
    default:
        console.log('Clima inválido');
        break;
}