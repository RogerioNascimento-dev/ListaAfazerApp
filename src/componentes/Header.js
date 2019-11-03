import React from 'react';
import { View, Text, Image, SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native';
import {withNavigation} from 'react-navigation';
import logoWhite from '../assets/logo-white.png';
import {Entypo} from '@expo/vector-icons';
import { connect } from 'react-redux';
import * as TasksActons from  '../../src/store/actions/taskAction';

const Header = ({dadosUsuario, dispatch,navigation}) =>{
  
  function handleLogOut(){
    dispatch(TasksActons.logout());
    navigation.navigate('Login');
  }
  return (
    <SafeAreaView style={styles.container}>
      <Image source={logoWhite} style={styles.logoWhite}/>
      <TouchableOpacity style={styles.containerUsuario} onPress={()=> handleLogOut()}>
        <Text style={styles.textUsuario}>Olá, {dadosUsuario.nome}</Text>
          <Entypo name="log-out" color="#FFF" size={15} />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{    
    height: 120,       
    justifyContent: 'center',
    alignItems: 'center',   
    backgroundColor: '#07528f',
  },
  logoWhite:{
    marginTop: 40,
  },
  containerUsuario:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  textUsuario:{
    color: '#FFF',
    marginRight: 10,
    fontSize: 15,
  } 
});

export default connect(state => ({dadosUsuario: state.usuarioReduce}))(withNavigation(Header));

