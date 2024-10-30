function map(array, cb) {
  // Itera sobre el arreglo y por cada elemento, pasárselo como argumento al callback.
  // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
  // Retorna el nuevo arreglo.
  // Tu código:
  len = array.length;
  arraySalida = [];
  for(i=0;i<len;i++ ){
    arraySalida.push(cb(array[i]));
  }
  return arraySalida;
}

module.exports = map;
