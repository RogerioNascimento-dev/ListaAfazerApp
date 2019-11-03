export default function usuarioReduce(state = {}, action){
  
  if(action.type === 'USUARIO_LOGADO'){
    return {id:action.id, nome:action.nome};
  }
  return state;
}