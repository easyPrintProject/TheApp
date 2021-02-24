import * as React from 'react';
import  { useContext, useState, useEffect } from 'react';
import { StyleSheet, Image, TextInput, Button } from 'react-native';
import { Text, View } from '../components/Themed';
import { AppContext } from '../components/StateProvider';
import { Types, UserType } from '../components/Reduser';

export default function LoginScreen() {
  
  const { state, dispatch } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});

  useEffect(() => {
        
    if (user == null || user == ""  ) {
      dispatch({
        type: 'Login_User',
        payload: {
          id: email,
          name: email
        }
    })
    } else {
      dispatch({
        type: 'Login_User',
        payload: {
          id: email,
          name: email
        }
    })
    }


}, [user])


  const Login = () => {

    setUser({email, password});
  //   if (user == null || user == ""  ) {
  //     dispatch({
  //         type: 'Login_User',
  //         payload: {
  //           id: email,
  //           name: email
  //         }
  //     })
  // } else {
  //   dispatch({
  //     type: 'Login_User',
  //     payload: {
  //       id: email,
  //       name: email
  //     }
  // })
  }
  return (
    <View style={styles.container}>
     <TextInput 
        style={styles.input}
        placeholder='اسم المستخدم'
        textAlign= 'right'
        placeholderTextColor='black'
        onChangeText={(e) => setEmail(e.toString())}
        // onChangeText={val => this.onChangeText('ID', val)}
      /><View>
      </View>
      <TextInput
        style={styles.input}
        placeholder='كلمة السر'
        textAlign= 'right'
        secureTextEntry={true}
        placeholderTextColor='black'
        onChangeText={(e) => setPassword(e.toString())}
        // onChangeText={val => this.onChangeText('pass', val)}
      />
   <View>
</View>
    <Text>{email} and {password}</Text>
     <View style={styles.buttonStyle}>c<Button 
        title='تسجيل الدخول'
        color='black'
        onPress={() => Login()}
      /></View>
      
      <Text>{state.User.pop()?.name}</Text>
      </View>
  );
}

const styles = StyleSheet.create({
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
  container: {
    flex: 1,
    justifyContent: 'center', // vertical
    alignItems: 'center' // horizontal 
  },
  titleText: {
    fontSize: 30,
    paddingBottom: 80,
  },
  buttonStyle: {
    paddingTop: 50,
  },
});
