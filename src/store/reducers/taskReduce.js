const INITIAL_STATE = [      
  {
    id:1,status: false,nome: 'Limpar o quarto',  descricao: 'Não esquecer de limpar em baixo da cama'
  },
  {
    id:2, status: false,nome: 'Levar sogra no hospital',  descricao: 'A coisa ruim devear lá antes das 13:00'
  },
  {
    id:3,status: true,nome: 'Realizar ligação',  descricao: 'Lembrar de ligar para médica da sogra'
  },
  {
    id:4,status: true,nome: 'Testar o som',  descricao: 'Estava com problema r a música Estava com psica'
  },
  {
    id:33,status: true,nome: 'Realizar ligação',  descricao: 'Lembrar de ligar para médica da sogra'
  },
  {
    id:43,status: true,nome: 'Testar o som',  descricao: 'Estava com problema r a música Estava com psica'
  },
  {
    id:35,status: false,nome: 'Estudar',  descricao: 'Estudar todos os assuntos da 2 unidade da faculdade'
  },      
];

export default function taskReduce(state = INITIAL_STATE, action){ 
  console.log("Chamou reduce task");  
  if(action.type === 'TOOGLE_STATUS'){
    const newState = state.map((dados,index,array) =>{
      if(dados.id === action.id){
        dados.status = !dados.status;
      }
      return dados;
    });
    return newState;
  }
  return state;
}