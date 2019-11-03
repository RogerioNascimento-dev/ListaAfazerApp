import React from 'react';
import {View, Text, ScrollView, FlatList, StyleSheet} from 'react-native';
import Header from '../componentes/Header';
import Lista from '../componentes/Lista';
import { Provider } from 'react-redux';
import store from '../store';



export default function Home(){
 return(  
    <>       
    <Provider store={store}>  
     <Header />  
      <Lista />
    </Provider>  
    </> 
  )
}