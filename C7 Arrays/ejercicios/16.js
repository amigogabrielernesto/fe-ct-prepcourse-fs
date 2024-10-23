function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  len = array.length;
  var arrayS=[];
  for (i=0;i<len;i++){
    arrayS.push(i*array[i]);
  }
  return arrayS;
  

}

module.exports = multiplicarElementosPorIndice;
