function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:

  producto = 1;

  for(i=a;i<=b;i++){
        producto = producto * i;
        if(producto == -0){
          producto = 0;
        }
      }
  
  return producto;
}

module.exports = productoEntreNúmeros;