function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:

  str = string.toLowerCase();
  len = str.length;

  for (let i = 0; i < len / 2; i++) {
       if (str[i] !== str[len - 1 - i]) {
           return false; 
           }
  }
  return true; 
}

module.exports = esPalindromo;