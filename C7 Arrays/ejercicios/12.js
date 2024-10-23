function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  let upperCaseArray = array.map(str => str.toUpperCase());
  return upperCaseArray;
}

module.exports = convertirStringAMayusculas;
