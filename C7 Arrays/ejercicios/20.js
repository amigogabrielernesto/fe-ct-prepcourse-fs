function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:

  len = array.length;
  var iguales = true;
  for (i=1;i<len;i++){
      if(array[0]!=array[i]){
        iguales = false
        break
      }
     }

  return iguales;
}

module.exports = todosIguales;
