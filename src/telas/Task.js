import React,{useState} from 'react';
import {View, Text,TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import Header from '../componentes/Header';

export default function Task({navigation}){

  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');

  function handleLogin(){
    alert('aaa');
  }
  return (    
    <>
    <Header /> 

    <View style={styles.form}>
        <Text style={styles.label}>Usuário</Text>
        <TextInput 
        style={styles.input}
        placeholder="Informe o usuário"
        autoCapitalize="none"
        autoCorrect={false}
        value={nome}
        onChangeText={setNome}        
        />


    <Text style={styles.label}>Descrição</Text>
        <TextInput 
        style={styles.input}
        placeholder="Informe a descricao"
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="visible-password"
        value={descricao}
        onChangeText={setDescricao}        
        />


<View style={styles.contentBtns}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.textButton}>Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.textButton}>Salvar</Text>
        </TouchableOpacity>
        </View>
                
      </View>    
    </>
  )
}

const styles = StyleSheet.create({
  contentBtns:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container:{
    flex: 1,     
    justifyContent: 'center',
    alignItems:'center',    
  },
  form:{
    marginTop:20,  
    alignSelf: 'stretch',
    paddingHorizontal: 20,      
  },
  label:{
    fontWeight:'bold',
    color: '#07528f',
    marginBottom: 8,
  },
  title:{
    fontSize: 30,
  },
  input:{
    borderWidth: 1,
    borderColor: '#9ab2c5',
    paddingHorizontal: 20,      
    fontSize: 16,    
    height: 44,
    marginBottom: 20,
    borderRadius: 2,
  },
  button:{
    width: 100,
    height: 42,
    backgroundColor: '#07528f',
    justifyContent: 'center',
    alignItems:'center',
    borderRadius:2,
  },
  textButton:{
    color:'#FFF',
    fontWeight: 'bold',
    fontSize: 16
  },
  buttonCadastrar:{
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  }

})