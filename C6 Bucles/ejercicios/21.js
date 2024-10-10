function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  potencia = 0;
  for(i=0;i<=numero;i++){
     potencia = 2**i;
     if(potencia==numero){return true}
  }
  return false
}

module.exports = esPotenciaDeDos;
