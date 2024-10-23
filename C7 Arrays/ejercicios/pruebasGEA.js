function devolverPrimerElemento(array) {
  // Retornar el primer elemento del arreglo recibido.
  // Tu código:
  console.log(array[0]);
  return array[0];

}

function devolverUltimoElemento(array) {
    // Retornar el último elemento del arreglo recibido.
    // Tu código:
    ultimo = array.length;
    console.log(array[ultimo-1]);

  }

  function agregarItemAlFinalDelArray(array, elemento) {
    // Agrega el "elemento" al final del arreglo recibido.
    // Retorna el arreglo.
    // Tu código:
    
    array.push(elemento);
    console.log(array);
    return array;
  }

  function invertirArray(array) {
    // Invierte el arreglo array recibido por argumento.
    // Tu código:
    array.reverse();
    console.log(array)
    return array;
  }

  function encontrarElemento(num, array) {
    // Busca el número pasado por argumento dentro del array.
    // Si lo encuentras debes retornar el INDICE en el que se encuentra dentro del array.
    // Si no se encuentra, retorna -1.
    // Tu código:
    console.log( array.indexOf(num));


 }
 
 function obtenerElementoAleatorio(array) {
    // Devuelve un elemento aleatorio del arreglo array.
    // PISTA: Usa el método Math.random().
    // Tu código:
    num = Math.random()*(array.length);
    //Math.floor(Math.random() * (max - min + 1)) + min;
    num = Math.floor(num);
    console.log(array[num]);
 }
 
 function obtenerPrimerStringLargo(array) {
    // Devuelve el primer string con más de 5 caracteres en el array.
    // Tu código:
    for(i=0;i<=array.length;i++){
        console.log(array[i]);
        if(array[i].length>5){
        console.log(array[i]);
        return array[i];
        
      }
    }
  
  }
  

 function isPalindromo(string) {
    str = string.toLowerCase();
    len = str.length;
 
    for (let i = 0; i < len / 2; i++) {
         if (str[i] !== str[len - 1 - i]) {
             return false; 
             }
    }
    return true; 
 }
 
 function invertirTexto(texto) {
  len = texto.length;
  var salida = "";
  
  for (let i = len - 1 ; i >= 0 ; i--) {
       salida = salida + texto[i];
  }
  return salida; 

 }

 function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:

  len = numeros.length;
  for (let i=0; i<len;i++) {
    for (let j=i+1;j<len;j++){
      if (numeros[i]==numeros[j]) {
        console.log(numeros[i]);
        return numeros[i];
         }
    }
  }

}

function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:

  len = numeros.length;
  
  if(len==0){
    console.log("nulo1");
    return null;
  }
  prox = numeros[0];
  for (i=1;i<len-1;i++){
    prox = prox + 1 ;
    
    if(numeros[i]!= prox){
      console.log(prox);
      return prox;
    }
  }  
  
  console.log("nulo2");
  return null;

  

}

function dePalabrasAFrase(palabras) {
  // El argumento "palabras" es un arreglo de strings.
  // Retorna un string donde todas las palabras estén concatenadas,
  // con un espacio entre cada palabra.
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
  // Tu código:
  len = palabras.length;
  resu = "";
  for(i=0;i<len;i++){
    resu = resu + palabras[i] + " "
  }
  console.log(resu.trim());
  return resu.trim();
}

function encontrarPrimerMultiploDeN(n, secuencia) {
  // La función recibe un numero "n" y un array de números "secuencia" como argumentos.
  // Devuelve el primer múltiplo de n que encuentres en la secuencia de números.
  // Usa un break para detener el bucle una vez halles el múltiplo.
  // Tu código:
  len = secuencia.length;
  for (i=0;i<len;i++){
    if(secuencia[i]%n == 0){
      break;
    }

  }
  console.log(secuencia[i]);
  return secuencia[i];
}


function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  arrayS = [];
  len = array.length;
  console.log(len);
  for (i=0;i<len;i++){
    if (array[i]%2==0){
      arrayS.push(array[i]);    
      }
  }
  console.log(arrayS);
  return arrayS;
}


function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  len = array.length;
  var cant = 0
  for (i=0;i<len;i++){
    if (array[i]>10){
      cant++;    
      }
  }
  console.log(cant);
  return cant;


}

function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:

  len = array.length;
  var max = array[0];
  var ind = 0;
  for (i=1;i<len;i++){
    if (array[i]>max){
      max = array[i];
      ind = i;    
      }
  }
  console.log(ind);
  return ind;
 
}

function multiplicarElementosPorIndice(array) {
len = array.length;
var arrayS=[];
for (i=0;i<len;i++){
  arrayS.push(i*array[i]);
}
return arrayS;
}


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

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:

  len = arguments.length;
  if(len==0){return 0}
  mult = arguments[0];
  for(i=1;i<len;i++){mult = mult* arguments[i]}
  return mult;
}

function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  for(i=0;i<array.length;i++){
    str1 = array[i];
    if(str1.length>5){
      console.log(str1);
      return str1;
    }
   
  }
  console.log("undefined");
  return "undefined";

}

obtenerPrimerStringLargo(['hi', 'thrs', 'how', 'are', 'you']);



//combine("abc", "", "123"); 
//combine("abc", "12345", ""); 
//combine("abc", "12345", "67");
//combine('', '123', '');
//encontrarIndiceMayor([3,50,7,449,3,2,10]);
//contarElementosMayoresA10([3,50,7,44,3,2,10]);
//filtrarNumerosPares([3,5,7,4,3,2,1]);
//encontrarPrimerMultiploDeN(10,[12, 20, 30, 40]);
//encontrarPrimerMultiploDeN(3,[13, 20, 30, 40]);
//dePalabrasAFrase(["hola",'Hello', 'world!']);
//encontrarNumeroFaltante([2,3,4,5,7,8,9,10]);
//encontrarNumeroFaltante([])
//encontrarNumeroFaltante([2,3,4,5,6,7,8,9,10]);
//encontrarElementoRepetido([1,8,6,7,5,3,2,4,6]) ;
//console.log(invertirTexto("123456789"));
//console.log(isPalindromo("asdasda"));
//console.log(isPalindromo("Madam")); 
//console.log(isPalindromo("Hello")); 
//obtenerPrimerStringLargo(["hola", "juego", "tv", "duelofinal"]);
//obtenerElementoAleatorio(["hola", "juego", "tv", "duelo"]);
//encontrarElemento(1,[3,5,7,9,12,2,10,11]);
//devolverPrimerElemento(["hola", "juego", "tv", "duelo"]);
//devolverUltimoElemento(["hola", "juego", "tv", "duelo"]);
//agregarItemAlFinalDelArray(["hola", "juego", "tv", "duelo"], "elemento");
//invertirArray(["hola", "juego", "tv", "duelo"]);
