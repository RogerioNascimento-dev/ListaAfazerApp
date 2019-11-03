import React from 'react';
import Header from '../componentes/Header';
import Lista from '../componentes/Lista';
import ActionButton from 'react-native-action-button'; 

export default function Home({navigation}){
 return(  
    <>
     <Header />  
      <Lista /> 
      <ActionButton buttonColor="#07528f" onPress={() => navigation.navigate('Task')} />                           
    </> 
  )
}