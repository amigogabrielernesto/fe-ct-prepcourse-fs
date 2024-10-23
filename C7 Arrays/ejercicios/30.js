function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:

  len = numeros.length;
  for (let i=0; i<len;i++) {
    for (let j=i+1;j<len;j++){
      if (numeros[i]==numeros[j]) {
        
        return numeros[i];
         }
    }
  }

}

module.exports = encontrarElementoRepetido;