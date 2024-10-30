function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   len = arrayOfStrings.length;
   arraySalida = [];

   for(i=0;i<len;i++){
      variable = arrayOfStrings[i];
      if(variable[0]=="a"){
         arraySalida.push(variable);
      }
   }
   return arraySalida;
      
}

module.exports = filter;
