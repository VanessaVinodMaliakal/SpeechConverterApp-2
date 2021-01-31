import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Alert } from 'react-native';
import * as Speech from 'expo-speech'
import AppHeader from './header.js'

export default class App extends React.Component{
  constructor(){
    super()
    this.state={
      textTyped : '',
      isButtonPressed : false
    }
  }
  speak=()=>{
    var word = this.state.textTyped
    Speech.speak(word)
  }
  displayWord=()=>{
    this.state.text !== '' && this.state.isButtonPressed == true
      ?this.speak()
      :Alert.alert('Please enter the text before pressing the submit button')
  }
  render(){
    return (
   <View style={styles.container}>
     <AppHeader />
     <Image 
        source={require('./assets/speak.png')}
        style={{width:200,height:200}}>
      </Image>
     <TextInput 
     style={styles.inputBox}
     placeholder='Enter the word'
     onChangeText={(text)=>{
      this.setState({
        textTyped : text,
        isButtonPressed : false
      })
    }}
     ></TextInput>
     <TouchableOpacity 
     style={styles.button}
     onPress={()=>{
       this.displayWord()
       this.setState({
        isButtonPressed : true
       })
     }}
     ><Text style={styles.styleText}>Pronunciation</Text></TouchableOpacity>
   </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox:{ 
      marginTop: 50,
      width: '30%',
      alignSelf: 'center',
      height: 40,
      textAlign: 'center',
      borderWidth: 4,
  }, 
  button:{
      width: 150,
      height: 55,
      alignSelf: 'center',
      padding: 10,
      margin: 10, 
      backgroundColor : '#88E2F2',
      borderRadius: 30
  },
  styleText: {
    fontSize: 17,
    textAlign: 'center',
    fontWeight: 'bold',
  },
})