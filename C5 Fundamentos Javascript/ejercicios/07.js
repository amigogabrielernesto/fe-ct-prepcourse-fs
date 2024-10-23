function esTipoDato(valor) {
  var tipo = '';

  if(typeof(valor) == 'string'){
    tipo = 'string';
  }
  if(typeof(valor)=='number'){
    tipo = 'number';
  }
  if(typeof(valor)=='boolean'){
    tipo = 'boolean';
  }
  if(typeof(valor)=='object'){
    tipo = 'object';
  }
  if(typeof(valor)=='undefined'){
    tipo = 'undefined';
  }
  if(typeof(valor)=='function'){
    tipo = 'function';
  }
  return tipo;
 
}


console.log(esTipoDato(false));

module.exports = esTipoDato;