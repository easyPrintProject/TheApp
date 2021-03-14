
import React from 'react'
import { StyleSheet, View, TextInput, Text,  ScrollView, StatusBar, Button, KeyboardAvoidingView } from 'react-native';
import {  StackScreenProps } from '@react-navigation/stack';
import * as Animatable from 'react-native-animatable';
import { Feather } from '@expo/vector-icons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import  {  useState, useEffect } from 'react';
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
      <StatusBar backgroundColor='#009387' barStyle="light-content"/>
    <View style={styles.header}>
        <Text style={styles.text_header}> الانضمام إلى ايزي برنت</Text>
    </View>
    <KeyboardAvoidingView behavior="position">
    <Animatable.View 
        animation="fadeInUpBig"
        style={styles.footer}
    >
        <ScrollView>
        <Text style={styles.text_footer}>اسم المستخدم</Text>
        <View style={styles.action}>
            <FontAwesome 
                name="user-o"
                color="#05375a"
                size={20}
            />
            <TextInput 
                style={styles.textInput}
                onChangeText={(e) => setUserName(e.toString())}
                
            />
            <Animatable.View
                animation="bounceIn"
            >
                
            </Animatable.View>
        </View>

        <Text style={[styles.text_footer, {
            marginTop: 35
        }]}>كلمة المرور</Text>
        <View style={styles.action}>
            <Feather 
                name="lock"
                color="#05375a"
                size={20}
            />
            <TextInput 
                secureTextEntry={true}
                style={styles.textInput}
                onChangeText={(e) => setPassword(e.toString())}
            />     
        </View>
<Text style={[styles.text_footer, {
            marginTop: 35
        }]}>الإيميل الإلكتروني</Text>
        <View style={styles.action}>
            <Feather 
                name="mail"
                color="#05375a"
                size={20}
            />
            <TextInput  
              style={styles.textInput}
              onChangeText={(e) => setEmail(e.toString())}

              />     
        </View>

        <Text style={[styles.text_footer, {
            marginTop: 35
        }]}>رقم الجوال </Text>
        <View style={styles.action}>
            <Feather 
                name="phone"
                color="#05375a"
                size={20}
            />
            <TextInput 
                style={styles.textInput}
                onChangeText={(e) => setPhoneNumber(e.toString())}
            />     
        </View>
       
        <View style={styles.button}>
            <Button 
        title=' انشاء حساب'
        color='#4BBFF4' 
          onPress={() => signUp()}
      />         
            </View>
            </ScrollView>
        </Animatable.View>
        </KeyboardAvoidingView>
      </View>
    );
};
  
     
 
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#4BBFF4'
  },
  header: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
      paddingBottom: 50
  },
  footer: {
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 30
  },
  text_header: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 30,
      textAlign: 'right'

},
  text_footer: {
      color: '#05375a',
      fontSize: 18,
alignItems: 'flex-end',
textAlign: 'right'

 },
  action: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5
  },
  textInput: {
      flex: 1,
      paddingLeft: 10,
      color: '#05375a',
      textAlign: 'right'
  },
  button: {
      alignItems: 'center',
      borderColor: '#4BBFF4',
      borderWidth: 1,
      marginTop: 25,
      borderRadius:17,
  },
 
})
