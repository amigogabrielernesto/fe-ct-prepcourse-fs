function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:

  len = numeros.length;
  cant = 0;
  for (i=0;i<len;i++){
    if (numeros[i]%2==0){
      cant++; 
    }
    else{continue}   
      
  }
  
  return cant;
}

module.exports = contarParesConContinue;
