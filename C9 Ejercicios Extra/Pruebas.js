function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:
  var arreglo = [];
  
  for (let x in objeto) {
        let a = objeto[x];
        arreglo.push([x,a]) ;
        console.log(a);
  }
  
  console.log(arreglo);
  return arreglo;
  
}

function capToFront(string) {
    // Recibes un string con algunas letras en mayúscula y otras en minúscula.
    // Debes enviar todas las letras en mayúscula al comienzo del string.
    // Retornar el string.
    // [EJEMPLO]: soyHENRY ---> HENRYsoy
    // Tu código:
    let stringO = '';
    let long = string.length;

    console.log(long);
    for(i=0;i<string.length;i++){
       letra =  string[i];
       console.log(i);
       if(letra === letra.toUpperCase()){
            stringO = letra + stringO;
        }
        else {
            stringO = stringO + letra;

        }
      
    }
    console.log(stringO);
    return stringO;
  
  }

  function capicua(numero) {
    // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
    // Caso contrario: "No es capicua".
    // Tu código:
    var wrk = numero.toString();
    var rec = wrk.length / 2;
    var recH = Math.floor(rec);
    var esCapicua = 'Es capicua';

    for(i=0;i<recH;i++){
        if(wrk[i] != wrk[wrk.length - 1 - i])
        {
            esCapicua = 'No es capicua';
            break;
        }

    }
    console.log(esCapicua);
    return esCapicua;

  }

  
function deleteAbc(string) {
    // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
    // Retorna el string sin estas letras.
    // Tu código:
    s1=string.replace(/a/g,"",);
    s2=s1.replace(/b/g,"");
    s3=s2.replace(/c/g,"");
    console.log(s3);
    return s3;
  
  }
  
  function buscoInterseccion(array1, array2) {
    // Recibes dos arreglos de números.
    // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
    // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
    // Si no tienen elementos en común, retornar un arreglo vacío.
    // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
    // Tu código:

    var salida = [];

    for(i=0;i<array1.length;i++){
        index = array2.indexOf(array1[i]);
        console.log(index);
        if(index>=0){
            salida.push(array1[i]);
        }
    }
    console.log(salida);
    return salida;

  }

  function numberOfCharacters(string) {
    // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
    // letras del string, y su valor es la cantidad de veces que se repite en el string.
    // Las letras deben estar en orden alfabético.
    // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
    // Tu código:
    var count = {};
   
    string.split('').forEach(function(s) {
            count[s] ? count[s]++ : count[s] = 1;
         });
       
    sortedKeys = Object.keys(count).sort()
    
    let sortedObj = {};
 
    sortedKeys.forEach(key => {
        sortedObj[key] = count[key];
        });
 
    console.log(count); 
    console.log(sortedKeys); 
    console.log(sortedObj);

    return sortedObj;
    
  }


  function asAmirror(frase) {
    // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
    // La diferencia es que cada palabra estará escrita al inverso.
    // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
    // Tu código:

    palabras = frase.split(" ");
    espejada = "";

    palabras.forEach(element => {
        wrk = "";
        for(i=0;i<element.length;i++){
            wrk = element[i] + wrk;
        }       
        espejada = espejada + wrk + " ";
    });

    console.log(palabras);
    //console.log(espejada);
    console.log(espejada.trim());

}

function sortArray(arrayOfStrings) {
    // Recibes un arreglo de strings.
    // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
    // de la longitud de cada string.
    // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
    // Tu código:
  
    arrayOfStrings.sort((a,b) => a.length - b.length)
    console.log(arrayOfStrings);
  }


//deObjetoAarray({D: 1, B: 2, C: 3});
//capToFront('soyHENRY');
//capicua(123321);
//deleteAbc("dfsabckdjfabchkasdcbaeqwezxcxcv");
//buscoInterseccion([4,2,3,1], [1,3,4]);
//numberOfCharacters("adsjfdsfsfjsdjfhacabcsbajda");
//asAmirror("The Henry Challenge is close!");
sortArray(["You", "are", "beautiful", "looking"]);
