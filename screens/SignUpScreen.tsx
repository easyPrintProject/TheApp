import * as React from 'react';
import  { useContext, useState, useEffect } from 'react';
import { View, Button, TextInput, StyleSheet, Text } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { StartParamList} from '../types';
import { useGlobalState } from '../components/StateProvider';


export default function SignUp ({navigation}: StackScreenProps<StartParamList>){
  
  // const { state, dispatch } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState({Email:"", UserName:"", PhoneNumber:"",  EmailConf:false, errorMassage:"", Id:"", Token:""});
  const {state ,setState } = useGlobalState();
  const [errorMassage, setErrorMassage] = useState("");


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
        PhoneNumber:user.PhoneNumber,
        Id:user.Id,
      })
        goHome()
    }
}, [user]);


const goHome = ()=>{
  navigation.push("Home");
}


  const signUp = async () => {
    try {
      fetch('https://apieasyprint20210215153907.azurewebsites.net/api/signin', {
       method: 'POST',
       headers: {
       Accept: 'application/json',
        'Content-Type': 'application/json'
      },
       body: JSON.stringify({
        Email:email,
        UserName: userName,
        PasswordHash: password,
        PhoneNumber: phoneNumber
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
    navigation.push("Home");
  }
    return (
      <View style={styles.container}>
      <Text style={styles.titleText}>الانضمام إلى ايزي برنت</Text> 
        <TextInput 
          style={styles.input}
          placeholder='اسم المستخدم'
          textAlign= 'right'
          placeholderTextColor='black'
          onChangeText={(e) => setUserName(e.toString())}
        /><View>
        </View>
        <TextInput
          style={styles.input}
          placeholder='كلمة السر'
          textAlign= 'right'
          secureTextEntry={true}
          placeholderTextColor='black'
          onChangeText={(e) => setPassword(e.toString())}
        />
        <TextInput
          style={styles.input}
          placeholder='الإيميل الإلكتروني'
          textAlign= 'right'
          placeholderTextColor='black'
          onChangeText={(e) => setEmail(e.toString())}
        />
        <TextInput
          style={styles.input}
          placeholder='رقم الجوال'
          textAlign= 'right'
          placeholderTextColor='black'
          onChangeText={(e) => setPhoneNumber(e.toString())}
        />
     <View>
  </View>
  <Text>test</Text>
       <View style={styles.buttonStyle}>
         <Button 
          title='إنشاء حساب'
          color='black'
          onPress={() => signUp()}/>
       </View>
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

})