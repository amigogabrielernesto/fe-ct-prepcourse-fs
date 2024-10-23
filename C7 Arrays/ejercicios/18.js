function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:

  len = resultadosTest.length;
  var sum = 0;
  for (i=0;i<len;i++){
      sum = sum + resultadosTest[i];
      }

  return sum/len;
}

module.exports = promedioResultadosTest;
