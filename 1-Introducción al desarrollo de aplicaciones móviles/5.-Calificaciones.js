let calificacion = 50;

if ( calificacion <= 100 && calificacion>=90){
  console.log("Excelente")
}else if ( calificacion <= 89 && calificacion>=70){
  console.log("Bueno")
}else if ( calificacion <= 69 && calificacion>=50){
  console.log("Suficiente")
}else if ( calificacion <= 49 && calificacion>=0){
  console.log("Insuficiente")
}else{
  console.log("Fuera de rango")
}