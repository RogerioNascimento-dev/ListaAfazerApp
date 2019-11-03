import {AsyncStorage} from 'react-native';


export default function usuarioReduce(state, action){
  state = [];
  AsyncStorage.getItem('userData').then((valor)=>{  
    console.log('É OQ RETORNOU '+valor);
    state = JSON.parse(valor);
  }).catch();  
  
  return state;
}