function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:

  len = texto.length;
  var salida = "";
  
  for (let i = len - 1 ; i >= 0 ; i--) {
       salida = salida + texto[i];
  }
  return salida; 


}

module.exports = invertirTexto;
