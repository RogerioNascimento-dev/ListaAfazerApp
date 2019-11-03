import React from 'react';
import {View, Text, ScrollView, FlatList, StyleSheet,TouchableOpacity} from 'react-native';
import Swipeable from 'react-native-swipeable';
import {Feather} from '@expo/vector-icons';
import { connect } from 'react-redux';

const Lista = ({data, dispatch}) =>{

  function toogleStatus(id){
    return {
      type: 'TOOGLE_STATUS',
      id
    }
  }
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
              <View style={styles.containerItem}>
              <TouchableOpacity style={styles.containerIcone}
              onPress={() => dispatch(toogleStatus(item.id))}
              >
                  <Feather  size={25} color={valoresIcone.cor} name={valoresIcone.name} />
              </TouchableOpacity>
              <View style={styles.containerInfos}>
                <Text style={styles.nome}>{item.nome}</Text>
                <Text style={styles.descricao}>{item.descricao}</Text>
              </View>
              </View>

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
      }
    })

    export default connect(state => ({ data: state.taskReduce} ))(Lista);