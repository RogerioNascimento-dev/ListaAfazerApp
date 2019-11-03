export default function usuarioReduce(state = null, action){
  
  if(action.type === 'USUARIO_LOGADO'){
    return {id:action.id, nome:action.nome};
  }

  if(action.type === 'LOGOUT_USUARIO'){
    return null;
  }  
  return state; 
}