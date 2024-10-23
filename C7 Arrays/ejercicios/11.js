function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  aSalida = [];
  for(i=0;i<array.length;i++){
      aSalida[i]=array[i]*2;
  }
  return aSalida;
}

module.exports = duplicarElementos;
