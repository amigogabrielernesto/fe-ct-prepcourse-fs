function dePalabrasAFrase(palabras) {
  // El argumento "palabras" es un arreglo de strings.
  // Retorna un string donde todas las palabras estén concatenadas,
  // con un espacio entre cada palabra.
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
  // Tu código:
  len = palabras.length;
  resu = "";
  for(i=0;i<len;i++){
    resu = resu + palabras[i] + " "
  }
  //console.log(resu.trim());
  return resu.trim();
}

module.exports = dePalabrasAFrase;
