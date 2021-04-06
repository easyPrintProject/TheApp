import React from 'react'
import { StyleSheet, View, TextInput, Text,  ScrollView, StatusBar, Button, KeyboardAvoidingView,TouchableOpacity } from 'react-native';
import {  StackScreenProps } from '@react-navigation/stack';
import { StartParamList} from '../types';
import * as Animatable from 'react-native-animatable';
import { Feather } from '@expo/vector-icons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import  {  useState, useEffect } from 'react';
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
  const [errorMassage2, setErrorMassage2] = useState("");
  const [errorMassage3, setErrorMassage3] = useState("");


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


const emailValidator = (email: any) => {
  let reg =  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (reg.test(email) === false) {
    setErrorMassage2(  "الرجاء كتابة بريد إلكتروني صحيح " );
    return false;
  } else {
    setErrorMassage2(  "" );
  }
};

const PhoneValidator = (phoneNumber: any) => {
  let reg =  /^((?:[+?0?0?966]+)(?:\s?\d{2})(?:\s?\d{7}))$/;
  if (reg.test(phoneNumber) === false) {
    setErrorMassage3(  "الرجاء كتابة الرقم بشكل صحيح " );
    return false;
  } else {
    setErrorMassage3(  "" );
  }
};

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
      <StatusBar backgroundColor="#49c3c6" barStyle="light-content"/>
    <View style={styles.header}>
        <Text style={styles.text_header}> الانضمام إلى ايزي برنت</Text>
    </View>
    <KeyboardAvoidingView behavior="padding">
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
                autoCapitalize="none"
                textAlign= 'right'
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
                textAlign= 'right'
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
                textAlign= 'right'
                style={styles.textInput}
                autoCapitalize="none"
                onTextInput={(e) => setEmail(e.toString())}
                //onChangeText={(email) => emailValidator(email)}

            />  
        
</View>
<View>
            <Text style={styles.message}>{errorMassage2}</Text></View>

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
                textAlign= 'right'
                style={styles.textInput}
                autoCapitalize="none"
                onTextInput={(e) => setPhoneNumber(e.toString())}
                onChangeText={(phoneNumber) => PhoneValidator(phoneNumber)}

            />  
        
</View>
<View><Text style={styles.message}>{errorMassage3}</Text></View>




       
<TouchableOpacity style={styles.button} onPress={() =>signUp()}> 
          <Text  style={styles.userBtnTxt} >تسجيل الدخول </Text>
          </TouchableOpacity> 

            </ScrollView>
        </Animatable.View>
        </KeyboardAvoidingView>
      </View>
    );
};
  
     
 
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#49c3c6'
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
      textAlign: 'center'
},
  text_footer: {
      color: '#05375a',
      fontSize: 18,
textAlign:'right' },
  action: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#49c3c6',
      paddingBottom: 5
  },
  textInput: {
      flex: 1,
      paddingLeft: 10,
      color: '#05375a',
  },

  signIn: {
      width: '100%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10

  },
  textSign: {
      fontSize: 18,
      fontWeight: 'bold'
  },
  textPrivate: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 20
  },
  color_textPrivate: {
      color: 'grey'
  },
  message: {
    marginTop: 10,
    fontSize: 14,
    color: 'tomato',
    textAlign: 'right'

  },
  button: {
    alignItems: 'center',
    borderColor: '#85C1E9',
    backgroundColor:'#49c3c6',
    borderWidth: 1,
    marginTop: 15,
    borderRadius:17,
},
userBtnTxt: {
 
  fontSize:20,
  color:"#fff",
  
},
})

