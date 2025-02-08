// Listar las peliculas y su categoria
// Salida esperada:
/*
    🎭 Drama: El Padrino
    🔥 Acción: Avengers: Endgame
    🎨 Animación: Buscando a Nemo
    🎭 Drama: Pulp Fiction
    🔥 Acción: Gladiador
    🎨 Animación: Toy Story
*/

const peliculas = [
    { titulo: "El Padrino", genero: "Drama" },
    { titulo: "Avengers: Endgame", genero: "Acción" },
    { titulo: "Buscando a Nemo", genero: "Animación" },
    { titulo: "Pulp Fiction", genero: "Drama" },
    { titulo: "Gladiador", genero: "Acción" },
    { titulo: "Toy Story", genero: "Animación" },
  ];

  console.log(" .................EJERCICIO 1.................\n ")
let iDrama='🎭';
let iAccion='🔥';
let iAnimacion='🎨';

for (let i = 0; i < peliculas.length; i++) {
    if(peliculas[i].genero === "Drama"){
        console.log(`${iDrama} ${peliculas[i].genero}: ${peliculas[i].titulo}`);
    }else if(peliculas[i].genero === "Acción"){
        console.log(`${iAccion} ${peliculas[i].genero}: ${peliculas[i].titulo}`);
    }else if(peliculas[i].genero === "Animación"){
        console.log(`${iAnimacion} ${peliculas[i].genero}: ${peliculas[i].titulo}`);
    }
}


  // Ejercicio 2: Filtrar la pelicula por bussqueda 
console.log("\n .................EJERCICIO 2.................\n ")

let busqueda = "Pulp Fiction";
for (let i = 0; i < peliculas.length; i++) {
    if(peliculas[i].titulo === busqueda){
        console.log(`La pelicula ${busqueda} es de genero ${peliculas[i].genero}`);
    }
}

// Ejercicio 3: Cuantas peliculas hay por genero.
console.log("\n .................EJERCICIO 3.................\n ")
let drama=0;
let accion=0;
let animacion=0;
let otros=0;

for (let i = 0; i < peliculas.length; i++) {
    switch(peliculas[i].genero){
        case "Drama":
            drama++;
            break;
        case "Acción":
            accion++;
            break;
        case "Animación":
            animacion++;
            break;
        default:
            otros++;
            break;
    }
}

console.log(`Hay ${drama} peliculas de Drama`);
console.log(`Hay ${accion} peliculas de Acción`);
console.log(`Hay ${animacion} peliculas de Animación`);
console.log(`Hay ${otros} peliculas de otros generos`);

