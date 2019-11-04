import React,{useState, useEffect} from 'react';
import {View,AsyncStorage, ImageBackground,Alert,TouchableOpacity,Image,KeyboardAvoidingView,TextInput, Text, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import * as TasksActons from  '../../src/store/actions/taskAction';
import { gerarIdentificador } from '../../src/funcoes';

import bgLogin from '../assets/bgLogin.jpg';
import logo from '../assets/logo.png';

const  Login = ({dadosUsuario, dispatch, navigation}) =>{

  const [cadastraOuLoga, setCadastraOuLoga] = useState(false);
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');  
  const [senhaConfirm,setSenhaConfirm] = useState('');
 
  //Verificar se tem algum usuário autenticado
  // e redireciona para tela Home 
  useEffect(() =>{   
  if(dadosUsuario){
    navigation.navigate('Home');
  }
  },[]);

  async function handleLogin(){
    //obtem os usuários cadastrados
    let usuarioAutenticado = null;
    let usuarios = await AsyncStorage.getItem('userData');
    usuarios = JSON.parse(usuarios) || null;

    //Regra para autenticar    
    if(!cadastraOuLoga && usuarios){            
      await usuarios.cadastrados.map((dados, index, array) =>{
        if(dados.usuario === usuario && senha === dados.senha){          
          usuarioAutenticado = dados;
          return true;          
        }else{          
          return false;
        }
      });

      if(!usuarioAutenticado){
        Alert.alert('Ops!', 'usuário ou senha não confere!');
      }else{
        usuarios.autenticado = usuarioAutenticado.id;
        await AsyncStorage.setItem('userData', JSON.stringify(usuarios));

       dispatch(TasksActons.autenticaUsuario(usuarioAutenticado.id,usuarioAutenticado.usuario));
       navigation.navigate('Home');
      }

    }else if(!cadastraOuLoga && !usuarios){
      Alert.alert('Usuário ou senha não confere.');
    }else{
      //REALIZA A PERSISTÊNCIA DAS INFORMAÇÕES 
      if(!usuarios){
        const novo_id = gerarIdentificador();
        const primeiroUsuario = {
            autenticado: novo_id,
            cadastrados: [{
            id: novo_id,
            usuario: usuario,
            senha: senha,
            }]
        }        

        
        if(senhaConfirm != senha){
          Alert.alert('Ops!','As senhas informadas são diferentes.');
        }else{
          await AsyncStorage.setItem('userData', JSON.stringify(primeiroUsuario));
          dispatch(TasksActons.autenticaUsuario(novo_id,usuario));
          Alert.alert(`${usuario} Cadastrado com sucesso!`);
          navigation.navigate('Home');
        }


      }else{        
        const novo_id = gerarIdentificador();
        const novo_usuario = {  
            id: novo_id,
            usuario: usuario,
            senha: senha,
            }
            if(senhaConfirm != senha){
              Alert.alert('Ops!','As senhas informadas são diferentes.');
            }else{
              usuarios.autenticado = novo_id;
              usuarios.cadastrados.push(novo_usuario);
              await AsyncStorage.setItem('userData', JSON.stringify(usuarios));
              
              dispatch(TasksActons.autenticaUsuario(novo_id,usuario));
              Alert.alert(`${usuario} Cadastrado com sucesso!`);
              navigation.navigate('Home');
            }           
        }
      }
  }

  function toggleCadastro(){
    setCadastraOuLoga(!cadastraOuLoga);
  }

  const textCadastroOuLogin = (cadastraOuLoga)?'Efetuar login.':'Não possuo Cadastro.';
  const textBtnCadastroOuLogin = (cadastraOuLoga)?'Cadastrar':'Logar';

  
  return (     
  
    <ImageBackground source={bgLogin} style={styles.container}> 
      <Image source={logo} />

      <View style={styles.form}>
        <Text style={styles.label}>Usuário</Text>
        <TextInput 
        style={styles.input}
        placeholder="Informe o usuário"
        autoCapitalize="none"
        autoCorrect={false}
        value={usuario}
        onChangeText={setUsuario}        
        />

    <Text style={styles.label}>Senha</Text>
        <TextInput 
        style={styles.input}
        placeholder="Informe a senha"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
        value={senha}
        onChangeText={setSenha}        
        />

        {cadastraOuLoga && (
          <>
          <Text style={styles.label}>Confirmar</Text>
            <TextInput 
              style={styles.input}
              placeholder="informe novamente a senha"
              autoCapitalize="none"
              autoCorrect={false}              
              secureTextEntry={true}
              value={senhaConfirm}
              onChangeText={setSenhaConfirm}        
            />
          </>
        )}
        <TouchableOpacity style={styles.button} onPress={() => handleLogin()}>
          <Text style={styles.textButton}>{textBtnCadastroOuLogin}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonCadastrar} onPress={() => toggleCadastro()}>
          <Text style={styles.label}>{textCadastroOuLogin}</Text>
        </TouchableOpacity>        
      </View>      
  </ImageBackground>   
  )
}
export default connect(state => ({ dadosUsuario: state.usuarioReduce} ))(Login);

const styles = StyleSheet.create({
  container:{
    flex: 1,    
    justifyContent: 'center',
    alignItems:'center',    
  },
  form:{
    alignSelf: 'stretch',
    paddingHorizontal: 40,      
  },
  label:{
    fontWeight:'bold',
    color: '#07528f',
    marginBottom: 5,
  },
  title:{
    fontSize: 30,
  },
  input:{
    borderWidth: 1,
    borderColor: '#9ab2c5',
    paddingHorizontal: 20,  
    marginRight: 50,  
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