import React from 'react';
import {View, Text,Alert, ScrollView, FlatList, StyleSheet,TouchableOpacity} from 'react-native';
import Swipeable from 'react-native-swipeable';
import {withNavigation} from 'react-navigation';
import {Feather} from '@expo/vector-icons';
import { connect } from 'react-redux';
import * as TasksActons from  '../../src/store/actions/taskAction';


const Lista = ({data, dataUsuario, dispatch, navigation}) =>{ 

// APLICANDO FILTRO PARA RETORNAR APENAS TAREFA DO USUARIO
// QUE ESTÁ AUTENTICADO
const taskUsuario = data.filter(task => task.id_usuario === dataUsuario.id);

return(
<View style={styles.container}>
      <ScrollView>
          <FlatList 
            style={styles.list}
            data={taskUsuario}
            keyExtractor={taskUsuario => `${taskUsuario.id}`}
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
            leftContent={(
              <View style={styles.abrirTarefa}>
                <Feather name="book-open" size={25} color="#FFF"/>
                <Text style={styles.textAbrirTarefa}>Visualizar</Text>
              </View>
            )}
            rightButtons={
              [
                <TouchableOpacity
                style={[styles.abrirTarefa, {justifyContent: 'flex-start'}]}
                onPress={() => dispatch(TasksActons.excluirTask(item.id))}
                >
                  <Feather name="trash-2" size={25} color="red"/>
                  <Text style={{color:'red', fontWeight:'bold'}}>Excluir</Text>
                </TouchableOpacity>,  
              
                <TouchableOpacity
                style={[styles.abrirTarefa, {justifyContent: 'flex-start'}]}
                onPress={() => navigation.navigate('Task',
                {
                  id_edit: item.id,
                  nome_edit: item.nome,
                  descricao_edit:item.descricao
                })}
                >
                  <Feather name="edit" size={25} color="#FFF"/>
                  <Text style={{color:'#FFF', fontWeight:'bold'}}>Editar</Text>
                </TouchableOpacity>, 
              ]
            }>
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

    export default connect(state => ({ data: state.taskReduce, dataUsuario: state.usuarioReduce } ))(withNavigation(Lista));