function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:
  
  len = numeros.length;
  
  if(len==0){
    return null;
  }
  prox = numeros[0];
  for (i=1;i<len;i++){
    prox = prox + 1 ;
    
    if(numeros[i]!= prox){
      return prox;
    }
  }  
  
  return null;

 

}

module.exports = encontrarNumeroFaltante;