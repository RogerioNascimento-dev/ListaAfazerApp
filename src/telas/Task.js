import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Task(){
  return (    
    <View style={styles.container}>
      <Text>Task</Text>
    </View>    
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
})