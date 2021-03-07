import * as React from 'react';
import  { useContext, useState, useEffect } from 'react';
import { StyleSheet, Image, TextInput, Button } from 'react-native';
import { Text, View } from '../components/Themed';
import { useGlobalState } from '../components/StateProvider';
import { StackScreenProps } from '@react-navigation/stack';
import { StartParamList} from '../types';
import { color } from 'react-native-reanimated';

export default function LoginScreen({navigation}: StackScreenProps<StartParamList>) {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({Email:"", UserName:"", PhoneNumber:"",  EmailConf:false, errorMassage:"", Id:"", Token:""});
  const [errorMassage, setErrorMassage] = useState("");
  const {state ,setState } = useGlobalState();

  useEffect(() => {
        
    if (user == null || user.Id == "" || user.Id==null) {
      setErrorMassage(user.errorMassage);
      if(user.errorMassage==null || user.errorMassage==""){
        setErrorMassage("حدث خطأ ما, الرجاء المحاولة مجدداً");
      }
    } else {
      //empty the error message
      setErrorMassage("");
      setState({
        Email:user.Email,
        UserName:user.UserName,
        PhoneNumber:user.PhoneNumber})
        goHome()
    }
}, [user]);


const goHome = ()=>{
    navigation.push("Home");
}

const Login = async () => {
  try {
    fetch('https://apieasyprint20210215153907.azurewebsites.net/api/Login', {
     method: 'POST',
     headers: {
     Accept: 'application/json',
      'Content-Type': 'application/json'
    },
     body: JSON.stringify({
      Email:email,
      PasswordHash: password
      })
   }).then((response) => response.json())
   .then((response) => {
   setUser({
            Email: response.data.email,
            PhoneNumber: response.data.phoneNumber,
            UserName:response.data.userName, 
            EmailConf:response.data.emailConfiremd,
            errorMassage:response.data.errorMessage,
            Id:response.data.id,
            Token:response.data.token,
            });
   })
   .catch((error) => {
    console.error(error);
  });
   
  } catch (error) {
    console.log('حدث خطأ! ', error)
  }
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
      <Text style={{color:"red"}}>{user.errorMassage}</Text>
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
