import React,{useState} from 'react';
import {View,ImageBackground,TouchableOpacity,Image,KeyboardAvoidingView,TextInput, Text, StyleSheet} from 'react-native';
import bgLogin from '../assets/bgLogin.jpg';
import logo from '../assets/logo.png';


export default function Login({navigation}){
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  function handleLogin(){
    console.log('[User:'+usuario+'][Senha:'+senha+']')
    navigation.navigate('Home');
  }

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
        keyboardType="visible-password"
        value={senha}
        onChangeText={setSenha}        
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.textButton}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonCadastrar}>
          <Text style={styles.label}>Não possuo cadastro!</Text>
        </TouchableOpacity>        
      </View>
      
  </ImageBackground>    
      
     
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
    marginBottom: 8,
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