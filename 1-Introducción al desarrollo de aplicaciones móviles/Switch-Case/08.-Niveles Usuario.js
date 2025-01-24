//Escribe un programa que reciba un nivel de usuario (admin, editor, visitantes) y devuelva los permisos correspondientes. 
// Si recibe otra entrada enviar mensaje "Nivel de usuario iválido"
//'admin' = 'todos los permisos'
//'editor' = 'permisos de edición'
//'visitante' = 'permisos de lectura'
//default= 'Nivel de usuario inválido'

let nivelUsuario='admin';

switch (nivelUsuario) {
    case 'admin':
        console.log('todos los permisos');
        break;
    case 'editor':
        console.log('permisos de edición');
        break;
    case 'visitante':
        console.log('permisos de lectura');
        break;
    default:
        console.log('Nivel de usuario inválido');
        break;
}