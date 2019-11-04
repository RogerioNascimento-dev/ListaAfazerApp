const gerarIdentificador = () =>{    
  var d = new Date();
  var n = d.getTime();
 return n;
}

const limitaCaracteres = (texto,limite,indicador = null) =>{
  let retorno = texto.substr(0,limite);
  if(texto.length > limite){
    retorno += (indicador)?indicador:'';
  }
  return retorno;
}

export { gerarIdentificador,limitaCaracteres };