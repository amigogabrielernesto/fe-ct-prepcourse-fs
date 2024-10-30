function sumarLikesDeUsuario(objetoUsuario) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
  // Este arreglo contiene objetos (post).
  // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
  // Debes sumar los likes de todos los post y retornar el resultado.
  // Tu código:

  acum = 0;
  arr1 = objetoUsuario["posts"];
  len =  arr1.length;
  for(i=0;i<len;i++){

    acum = acum + arr1[i]["likes"];
  }
  return acum;
}

module.exports = sumarLikesDeUsuario;
