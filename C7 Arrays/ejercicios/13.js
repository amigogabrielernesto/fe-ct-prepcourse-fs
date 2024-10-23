function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  arrayS = [];
  len = array.length;
 for (i=0;i<len;i++){
    if (array[i]%2==0){
      arrayS.push(array[i]);    
      }
  }
  return arrayS;
}

module.exports = filtrarNumerosPares;
