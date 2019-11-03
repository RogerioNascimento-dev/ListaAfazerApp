import React from 'react';
// import {StyleSheet} from 'react-native';
import Header from '../componentes/Header';
import Lista from '../componentes/Lista';

// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
// import {store, persistor} from '../store';

import ActionButton from 'react-native-action-button'; 


export default function Home({navigation}){
 return(  
    <>       
    {/* <Provider store={store}>  
    <PersistGate loading={null} persistor={persistor}> */}
     <Header />  
      <Lista />
      <ActionButton buttonColor="#07528f" onPress={() => navigation.navigate('Task')} />                     
      {/* </PersistGate>
    </Provider>   */}
    </> 
  )
}