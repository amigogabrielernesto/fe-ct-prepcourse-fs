function esAnagrama(str1, str2) {
   // La función recibe dos argumentos "str1" y "str2" que son strings.
   // Determina si los dos strings son anagramas.
   // Devuelve true de ser así, sino retorna false.
   // IMPORTANTE: Un anagrama es una palabra que se forma
   // con las mismas letras que otra, pero en orden diferente.
   // Tu código:

   len1 = str1.length;
   len2 = str2.length;
   if (len1 != len2){
      return false;
   }

   if (len1 == 0 && len2 == 0){
      return true;
   }
   if (len1 == 0 || len2 == 0){
      return false;
   }
   

   anagrama = true;
   str1 = str1.toLowerCase();
   str2 = str2.toLowerCase();
   
   for(i=0;i<len1;i++){
      posicion = str2.indexOf(str1[i]);
      if(posicion == -1 ){
         anagrama = false;
      }
   }
   return anagrama;
}

module.exports = esAnagrama;
