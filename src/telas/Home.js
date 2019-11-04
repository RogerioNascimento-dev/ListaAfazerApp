import React from 'react';
import Header from '../componentes/Header';
import Lista from '../componentes/Lista';
import ActionButton from 'react-native-action-button';
import {FontAwesome} from '@expo/vector-icons'; 

export default function Home({navigation}){
 return(  
    <>
     <Header />  
      <Lista /> 
      
      <ActionButton buttonColor="#07528f" >
      <ActionButton.Item
          buttonColor="#9ab2c5"          
          title="Sobre"
          onPress={() => navigation.navigate('Sobre')}>
        <FontAwesome  name="info" color="#07528f" />
        </ActionButton.Item>
        <ActionButton.Item
          buttonColor="#9ab2c5"
          title="Nova Tarefa"
          onPress={() => navigation.navigate('Task')}>
          <FontAwesome  name="tasks" color="#07528f"/>
        </ActionButton.Item>        
        
      </ActionButton>


    </> 
  )
}