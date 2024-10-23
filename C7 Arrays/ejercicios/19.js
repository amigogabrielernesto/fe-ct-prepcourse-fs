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

module.exports = multiplicarArgumentos;
