import React from 'react';
import {View, Text,Alert, ScrollView, FlatList, StyleSheet,TouchableOpacity} from 'react-native';
import Swipeable from 'react-native-swipeable';
import {Feather} from '@expo/vector-icons';
import { connect } from 'react-redux';
import * as TasksActons from  '../../src/store/actions/taskAction';


const Lista = ({data, dispatch, navigation}) =>{ 

//| INICIANDO CONFIGURAÇÕES NECESSÁRIAS PARA FUNCIONAMENTO DO Swipeable |\\

//| Lado Esquerdo
const leftContent = (
  <View style={styles.abrirTarefa}>
    <Feather name="book-open" size={25} color="#FFF"/>
    <Text style={styles.textAbrirTarefa}>Visualizar</Text>
  </View>
);
//|Lado direito
const rightContent= [
  <TouchableOpacity
  style={[styles.abrirTarefa, {justifyContent: 'flex-start'}]}
  onPress={() => onDelete(item.id)}
  >
    <Feather name="trash-2" size={25} color="red"/>
    <Text style={{color:'red', fontWeight:'bold'}}>Excluir</Text>
  </TouchableOpacity>,  

  <TouchableOpacity
  style={[styles.abrirTarefa, {justifyContent: 'flex-start'}]}
  onPress={() => onDelete(item.id)}
  >
    <Feather name="edit" size={25} color="#FFF"/>
    <Text style={{color:'#FFF', fontWeight:'bold'}}>Editar</Text>
  </TouchableOpacity>, 
];

  
console.log('sentro do lista');
  console.log(data);

return(
<View style={styles.container}>
      <ScrollView>
          <FlatList 
            style={styles.list}
            data={data}
            keyExtractor={data => `${data.id}`}
            renderItem={({ item }) =>{  
              if(item.status){
                valoresIcone = {name: 'x-square',cor: '#00b711'}
              }else{
                valoresIcone = {name: 'square', cor: '#CCC'}
              }
            return (

            <Swipeable
            leftActionActivationDistance={150}
            onLeftActionActivate={() => Alert.alert(`${item.nome}`, `${item.descricao}`)}
            leftContent={leftContent}
            rightButtons={rightContent}>
            <View style={styles.container}>


            </View>
              <View style={styles.containerItem}>
                <TouchableOpacity style={styles.containerIcone}
                onPress={() => dispatch(TasksActons.toogleStatus(item.id))}
                >
                  <Feather  size={25} color={valoresIcone.cor} name={valoresIcone.name} />
                </TouchableOpacity>
                <View style={styles.containerInfos}>
                  <Text style={styles.nome}>{item.nome}</Text>
                  <Text style={styles.descricao}>{item.descricao}</Text>
                </View>
              </View>

        </Swipeable>

            )}
            }
          />
      </ScrollView>       
    </View> 
    )}

    const styles = StyleSheet.create({
      container:{
        flex: 1,
      },
      list:{},
      containerItem:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height:80,
        borderBottomWidth: 1,
        borderColor: '#07528f',
      },
      containerIcone:{
        paddingLeft: 10,    
      },
      containerInfos:{
        marginLeft: 10,
      },
      nome:{
        fontSize: 20,
        color: '#07528f'
      },
      descricao:{
        color: '#9ab2c5',
      },
      abrirTarefa:{
        flex: 1,
        backgroundColor: '#9ab2c5',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      textAbrirTarefa:{
        color: '#fff',
        fontWeight: 'bold',
        marginRight: 10,
      }
    })

    export default connect(state => ({ data: state.taskReduce} ))(Lista);