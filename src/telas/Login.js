import React,{useState} from 'react';
import {View,AsyncStorage, ImageBackground,Alert,TouchableOpacity,Image,KeyboardAvoidingView,TextInput, Text, StyleSheet} from 'react-native';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
// import {store, persistor} from '../store';


import bgLogin from '../assets/bgLogin.jpg';
import logo from '../assets/logo.png';


export default function Login({navigation}){
  const [cadastraOuLoga, setCadastraOuLoga] = useState(false);
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');  
  const [senhaConfirm,setSenhaConfirm] = useState('');
  
function gerarIdentificador(){    
      var d = new Date();
      var n = d.getTime();
     return n;
  }

  async function handleLogin(){
    //obtem os usuários cadastrados
    let usuarioAutenticado = null;
    let usuarios = await AsyncStorage.getItem('userData');
    usuarios = JSON.parse(usuarios) || null;

    //Regra para autenticar    
    if(!cadastraOuLoga && usuarios){            
      await usuarios.cadastrados.map((dados, index, array) =>{
        if(dados.usuario === usuario && senha === dados.senha){
          console.log('ENCONTROU');
          usuarioAutenticado = dados;
          return true;          
        }else{
          console.log('NÃO ENCONTROU');
          return false;
        }
      });

      if(!usuarioAutenticado){
        Alert.alert('Ops!', 'usuário ou senha não confere!');
      }else{
        usuarios.autenticado = usuarioAutenticado.id;
        await AsyncStorage.setItem('userData', JSON.stringify(usuarios));
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
        console.log('Tentando cadastrar o primeiro');
        await AsyncStorage.setItem('userData', JSON.stringify(primeiroUsuario));
        Alert.alert(`${usuario} Cadastrado com sucesso!`);
      }else{
        console.log('enctrou para cadastrar');
        const novo_id = gerarIdentificador();
        const novo_usuario = {  
            id: novo_id,
            usuario: usuario,
            senha: senha,
            }

            usuarios.autenticado = novo_id;
            usuarios.cadastrados.push(novo_usuario);
            await AsyncStorage.setItem('userData', JSON.stringify(usuarios));            
            Alert.alert(`${usuario} Cadastrado com sucesso!`);
            navigation.navigate('Home');
        }
      }
  }

  function toggleCadastro(){
    setCadastraOuLoga(!cadastraOuLoga);
  }
  return (       
    // <Provider store={store}>  
    // <PersistGate loading={null} persistor={persistor}>
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
        keyboardType="visible-password"
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
          keyboardType="visible-password"
          value={senhaConfirm}
          onChangeText={setSenhaConfirm}        
          />
          </>
        )}

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.textButton}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonCadastrar} onPress={() => toggleCadastro()}>
          <Text style={styles.label}>Não possuo cadastro!</Text>
        </TouchableOpacity>        
      </View>      
  </ImageBackground> 
  // </PersistGate>
  //   </Provider>  
  )
}

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