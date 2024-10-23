function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:

  len = array.length;
  var max = array[0];
  var ind = 0;
  for (i=1;i<len;i++){
    if (array[i]>max){
      max = array[i];
      ind = i;    
      }
  }
  //console.log(ind);
  return ind;
}

module.exports = encontrarIndiceMayor;
