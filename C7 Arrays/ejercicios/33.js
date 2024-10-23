function combine(str1, str2, str3) {
  // Esta función debe combinar de forma alternada cada caracter de cada string.
  // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
  // Los strings pueden tener cualquier tamaño.
  // EJEMPLOS
  // combine("abc", "", "123") == "a1b2c3"
  // combine("abc", "12345", "") == "a1b2c345"
  // combine("abc", "12345", "67") == "a16b27c345"
  // Tu código:
 
len1 = str1.length;
len2 = str2.length;
len3 = str3.length;
cant = 0;
str4 ="";
console.log(len1,len2,len3);
if(len1>=len2 && len1 >=len3){
  cant = len1;
}

if(len2>=len1 && len2 >=len3){
  cant = len2;
}

if(len3>=len1 && len3 >=len2){
  cant = len3;
}

for(i=0;i<cant;i++){
  if(i<len1){str4 = str4+str1[i];}
  if(i<len2){str4 = str4+str2[i];}
  if(i<len3){str4 = str4+str3[i];}
  
}
console.log(str4);
return str4;
}

module.exports = combine;