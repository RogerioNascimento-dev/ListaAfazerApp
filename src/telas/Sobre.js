import React from 'react';
import { View,Text,Image,StyleSheet,TouchableOpacity } from 'react-native';
import {AntDesign} from '@expo/vector-icons'; 

import Header from '../componentes/Header';
import logo from '../assets/favicon.png';


const Sobre = ({navigation}) => (
  <>
  <Header />

  <View style={styles.container}>
      <Image source={logo}/>  
      <View style={styles.containerTextos}>
      <Text style={styles.label}>Develop By Rogério Nascimento</Text>
      <Text style={styles.label}>rogerionascimento.dev@outook.com.br</Text>      
      <Text style={styles.label}>71 98113-6366, 99347-1520 (Whats)</Text> 
      </View>
  </View>  

  <TouchableOpacity
    style={[styles.cloneActionButton,
            {backgroundColor: "#07528f"},
          ]}
            onPress={() => navigation.navigate('Home')}>
            <View>
                <AntDesign name="back" size={20} color="white" />
            </View>
  </TouchableOpacity> 

  </>
);

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection: 'row',    
    alignItems:'center',
    justifyContent: 'space-evenly',
  },
  containerTextos:{
    borderLeftWidth: 1,
    borderLeftColor:'#07528f',    
    paddingLeft: 10,
  },
  label:{
    color: '#01467e',
  },
  cloneActionButton: {
    position: 'absolute',
    width: 55,
    height: 55,
    right: 30,
    bottom: 30,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
},  
});
export default Sobre;
