/* Actions relacionados a tarefa */
export function toogleStatus(id){
  return {
    type: 'TOOGLE_STATUS',
    id
  }
}
export function excluirTask(id){
  return {
    type: 'EXCLUIR_TASK',
    id
  }
}
export function adicionaTarefa(id_usuario,id_tarefa,nome,descricao){
  
  return {
    type: 'ADICIONAR_TAREFA',
    id_usuario,
    id_tarefa,
    nome,
    descricao,    
  }
}

export function editarTarefa(id,nome,descricao){
  return {
    type: 'EDITAR_TAREFA',
    id_tarefa: id,
    nome,
    descricao
  }
}

/* Actions relacionados ao usuário */
export function autenticaUsuario(id,nome){
  return {
    type: 'USUARIO_LOGADO',
    id,
    nome
  }
}

export function logout(){
  return {
    type: 'LOGOUT_USUARIO',
  }
}

