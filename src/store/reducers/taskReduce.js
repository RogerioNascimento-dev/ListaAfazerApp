const INITIAL_STATE = [{}];

export default function taskReduce(state = [], action){    
  
  if(action.type === 'TOOGLE_STATUS'){
    const newState = state.map((dados,index,array) =>{
      if(dados.id === action.id){
        dados.status = !dados.status;
      }
      return dados;
    });
    return newState;
  }

  if(action.type === 'EDITAR_TAREFA'){
    const newState = state.map((dados,index,array) =>{
      if(dados.id === action.id_tarefa){
        dados.nome = action.nome;
        dados.descricao = action.descricao;
      }
      return dados;
    });
    return newState;
  }

  if(action.type === 'EXCLUIR_TASK'){ 
    // O filter irá retornar um novo estado
    // com todas as tasks diferentes da que passei por parâmetro
    // no action
    return newState = state.filter(task => task.id != action.id);    
  }  
  
  if(action.type === 'ADICIONAR_TAREFA'){
    
    console.log('cheguei no metodo de adicionar');
    return [...state,
      {
        status: false,
        id: action.id_tarefa,
        id_usuario: action.id_usuario,
        nome: action.nome,
        descricao: action.descricao,
      }]
  }
  return state; 
}