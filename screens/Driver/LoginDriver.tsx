import React from 'react'
import { StyleSheet, View, Button, TextInput, ImageBackground } from 'react-native';
import { Assets, StackScreenProps } from '@react-navigation/stack';
import { driverStack} from '../../types';

export default function LoginDriver({navigation }: StackScreenProps<driverStack>) {
    const GoToHome = () => {
        navigation.navigate("HomeDriver");
      };
    return (
        <View style={(styles.container)}>
      
  
      <View >
     <TextInput 
        style={styles.input}
        placeholder='اسم المستخدم'
        textAlign= 'right'
        placeholderTextColor='black'
       // onChangeText={(e) => setEmail(e.toString())}
        // onChangeText={val => this.onChangeText('ID', val)}
      /><View>
      </View>
      <TextInput
        style={styles.input}
        placeholder='كلمة السر'
        textAlign= 'right'
        secureTextEntry={true}
        placeholderTextColor='black'
       // onChangeText={(e) => setPassword(e.toString())}
        // onChangeText={val => this.onChangeText('pass', val)}
      />
       
     <View style={styles.buttonStyle}>
       <Button 
        title='تسجيل الدخول'
        color='blue'
        onPress={() => GoToHome()}
      /></View>
      </View>
      </View>
     
    )
}

const styles = StyleSheet.create({
  container:{
marginTop:400,
justifyContent: 'center', // vertical
alignItems: 'center' // horizontal ,

  } , 

  input: {
    width: 350,
    height: 55,
    backgroundColor: 'white',
    margin: 10,
    padding: 8,
    color: 'black',
    borderRadius: 10,
    fontSize: 15, 
 
  },
  

  buttonStyle: {
padding:9    ,
justifyContent: 'center', // vertical
alignItems: 'center' // horizontal ,
  },
});

