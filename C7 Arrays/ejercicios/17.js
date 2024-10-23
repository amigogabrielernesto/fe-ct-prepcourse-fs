function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  len = arrayOfNums.length;
  var sum = 0;
  for (i=0;i<len;i++){
      sum = sum + arrayOfNums[i];
      }

  return sum;

}

module.exports = agregarNumeros;
