const INITIAL_STATE = [      
  {
    id:1,status: false,nome: 'Limpar o quarto',  descricao: 'Não esquecer de limpar em baixo da cama'
  },    
];

export default function taskReduce(state = [], action){    

  
  if(action.type === 'TOOGLE_STATUS'){
    console.log('cheguei no metodo de toogle');

    const newState = state.map((dados,index,array) =>{
      if(dados.id === action.id){
        dados.status = !dados.status;
      }
      return dados;
    });
    return newState;
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