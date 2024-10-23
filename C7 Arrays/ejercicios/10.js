function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  for(i=0;i<array.length;i++){
    str1 = array[i];
    if(str1.length>=5){
      console.log(str1);
      return str1;
    }
   
  }
  console.log("undefined");
  return "undefined";
}

module.exports = obtenerPrimerStringLargo;
