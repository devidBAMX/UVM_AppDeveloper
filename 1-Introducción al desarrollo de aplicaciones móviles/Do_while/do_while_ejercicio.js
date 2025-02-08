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

  //Ejercicio Buscar Pelicula
/*
let pelicula='Pulp ';
let peliculaEncontrada=false;
let contador=0;

while(!peliculaEncontrada){

    if(peliculas[contador].titulo===pelicula){
        console.log(`Pelicula ${pelicula} encontrada es del genero ${peliculas[contador].genero}`);
        peliculaEncontrada=true;
        break;
    }
    
    contador++;

    if(!peliculaEncontrada && peliculas.length==(contador+1)){
        console.log("Pelicula no encontrada");
        break;
    }
}*/



//Ejercicio Buscar Pelicula
let pelicula='Pulp Fiction';
let peliculaEncontrada=false;
let contador=0;

do{
    if(peliculas[contador].titulo===pelicula){
        console.log(`Pelicula ${pelicula} encontrada es del genero ${peliculas[contador].genero}`);
        peliculaEncontrada=true;
    }
    contador++;

} while(!peliculaEncontrada && contador<peliculas.length);

if(!peliculaEncontrada){
    console.log("Pelicula no encontrada");
}
