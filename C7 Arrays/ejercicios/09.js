function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:

   num = Math.random()*(array.length);
   //Math.floor(Math.random() * (max - min + 1)) + min;
   num = Math.floor(num);
   return array[num];
}

module.exports = obtenerElementoAleatorio;
