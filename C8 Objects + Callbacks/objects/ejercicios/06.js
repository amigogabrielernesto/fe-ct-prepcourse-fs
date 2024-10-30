const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  let cant = 0;
  for (let property in objeto) {
    if (objeto.hasOwnProperty(property)) {
      cant ++;
    } 
  }     
  return cant;
};

module.exports = contarPropiedades;
