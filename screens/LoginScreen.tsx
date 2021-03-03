import * as React from 'react';
import  { useContext, useState, useEffect } from 'react';
import { StyleSheet, Image, TextInput, Button } from 'react-native';
import { Text, View } from '../components/Themed';
import { useGlobalState, GlobalStateInterface } from '../components/StateProvider';
import { StackScreenProps } from '@react-navigation/stack';
import { StartParamList} from '../types';

export default function LoginScreen({navigation}: StackScreenProps<StartParamList>) {
  
  // const { state, dispatch } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({Useremail:"", Username:""});
  const [errorMassage, setErrorMassage] = useState("");
  const {state ,setState } = useGlobalState();

  useEffect(() => {
        
    if (user == null || user.Useremail == ""  ) {
      setErrorMassage("الرجاء المحاولة مجدداً")
    } else {
      //empty the error message
      setErrorMassage(" ");
      setState({firstname:email,lastname:email,age:email})
      navigation.push("Home")
    }
}, [user])

  const Login = () => {
    setUser({Useremail:email, Username:email});
 

  }

  return (
    <View style={styles.container}>
     <TextInput
        style={styles.input}
        placeholder='اسم المستخدم'
        textAlign= 'right'
        placeholderTextColor='black'
        onChangeText={(e) => setEmail(e.toString())}/><View>
      </View>
      <TextInput
        style={styles.input}
        placeholder='كلمة السر'
        textAlign= 'right'
        secureTextEntry={true}
        placeholderTextColor='black'
        onChangeText={(e) => setPassword(e.toString())}/>
   <View>
</View>
     <View style={styles.buttonStyle}><Button 
        title='تسجيل الدخول'
        color='black'
        onPress={() => Login()}
      /></View>
      <Text>{state.firstname}</Text>
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
