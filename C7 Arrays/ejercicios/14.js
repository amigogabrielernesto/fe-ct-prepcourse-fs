function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:

  len = array.length;
  var cant = 0
  for (i=0;i<len;i++){
    if (array[i]>10){
      cant++;    
      }
  }
  return cant;
}

module.exports = contarElementosMayoresA10;
