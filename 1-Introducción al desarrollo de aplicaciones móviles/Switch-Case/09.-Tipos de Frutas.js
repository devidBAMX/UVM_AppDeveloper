//Escribe un programa que reciba una furta (manzana, plátano, naranja) y devuelve su color. Si recibe otra entrada enviar mensaje "Fruta iválida"
//'manzana' = 'Rojo o verde'
//'plátano' = 'Amarillo'
//'naranja' = 'Naranja'
//default= 'Fruta inválida'

let fruta='manzana';
switch (fruta) {
    case 'manzana':
        console.log('Rojo o verde');
        break;
    case 'plátano':
        console.log('Amarillo');
        break;
    case 'naranja':
        console.log('Naranja');
        break;
    default:
        console.log('Fruta inválida');
        break;
}