const gerarIdentificador = () =>{    
  var d = new Date();
  var n = d.getTime();
 return n;
}

export { gerarIdentificador };