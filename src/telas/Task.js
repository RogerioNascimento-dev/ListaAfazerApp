import React,{useState, useEffect} from 'react';
import {View,Alert, Text,TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

import Header from '../componentes/Header';
import * as TasksActons from  '../../src/store/actions/taskAction';
import { gerarIdentificador } from '../funcoes';

const Task = ({dataUsuario,dispatch,navigation}) => {

  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [atualizaTesk,setAtualizaTesk] = useState(null);

  //Capturando parametros e setando para para edição
  useEffect(() =>{
    if(navigation.getParam('nome_edit')){      
      setNome(navigation.getParam('nome_edit'))      
    }
    if(navigation.getParam('descricao_edit')){      
      setDescricao(navigation.getParam('descricao_edit'))
    }

    if(navigation.getParam('id_edit')){
      setAtualizaTesk(navigation.getParam('id_edit'));
    }
  },[])
  

  function handleAddTarefa(){
    if(atualizaTesk){

      const id = atualizaTesk; 
      dispatch(TasksActons.editarTarefa(id,nome,descricao));
      Alert.alert('Sucesso!', 'Tarefa atualizada com sucesso!');     

    }else{
      const id = gerarIdentificador(); 
      dispatch(TasksActons.adicionaTarefa(dataUsuario.id,id,nome,descricao));
      Alert.alert('Sucesso!', 'Tarefa Cadastrada com sucesso!');
    }

    navigation.navigate('Home');
  }

  //Dinamizando textos e ações se for para atualizar ou cadastrar
  let textoBotaoSalvar = (atualizaTesk)?'Atualizar':'Cadastrar';

  return (    
    <>
    <Header /> 

    <View style={styles.form}>
        <Text style={styles.label}>Nome</Text>
        <TextInput 
        style={styles.input}
        placeholder="Informe o nome"
        autoCapitalize="words"
        autoCorrect={true}
        value={nome}
        onChangeText={setNome}        
        />

    <Text style={styles.label}>Descrição</Text>
        <TextInput 
        style={[styles.input,{height:80}]}
        placeholder="Informe a descricao"
        autoCapitalize="words"
        autoCorrect={true}        
        multiline={true}
        numberOfLines={4}
        value={descricao}
        onChangeText={setDescricao}        
        />


<View style={styles.contentBtns}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.textButton}>Cancelar</Text>
        </TouchableOpacity>        
        <TouchableOpacity style={styles.button} onPress={() => handleAddTarefa()}>
          <Text style={styles.textButton}>{textoBotaoSalvar}</Text>
        </TouchableOpacity>
        </View>
                
      </View>    
    </>
  )
}

export default connect(state =>({ dataUsuario: state.usuarioReduce }))(Task);
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