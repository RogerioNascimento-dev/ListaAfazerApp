import React from 'react';
import Routes from './src/routes';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from './src/store';

export default function App() {
  return (  
    <Provider store={store}>  
    <PersistGate loading={null} persistor={persistor}>
      <Routes />   
    </PersistGate>
    </Provider>
  );
}