function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:

  len = array.length;
  var arrayS = [];
  
  var estan = false;
  for (i=0;i<len;i++){
      if(array[i]=="Enero"){
        estan = true;
        break;
      }
     }
  
  if(estan ==true){arrayS.push("Enero")}

  var estan = false;
  for (i=0;i<len;i++){
    if(array[i]=="Marzo"){
      estan = true;
      break;
    }
   }

if(estan ==true){arrayS.push("Marzo")}

var estan = false;
for (i=0;i<len;i++){
  if(array[i]=="Noviembre"){
    estan = true;
    break;
  }
 }

if(estan ==true){arrayS.push("Noviembre")}

if(arrayS.length !=3){return "No se encontraron los meses pedidos"}
else {return arrayS}

}

module.exports = mesesDelAño;
