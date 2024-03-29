import React from 'react'
import { StyleSheet, View, TextInput, Text,  ScrollView, StatusBar, Button, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import {  StackScreenProps } from '@react-navigation/stack';
import { driverStack} from '../../types';
import * as Animatable from 'react-native-animatable';
import { Feather } from '@expo/vector-icons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import  {  useState, useEffect } from 'react';
import { useGlobalState } from '../../components/StateProvider';

export default function LoginDriver({navigation }: StackScreenProps<driverStack>) {
   
     const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({Email:"", UserName:"", PhoneNumber:"",  errorMassage:"", Id:"", Token:"", PrinterId:""});
  const [errorMassage, setErrorMassage] = useState("");
  const {state ,setState } = useGlobalState();
const [errorMassage2, setErrorMassage2] = useState("");


const emailValidator = (email: any) => {
    let reg =  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (reg.test(email) === false) {
      setErrorMassage2(  "الرجاء كتابة البريد الإلكتروني بشكل صحيح " );
      return false;
    } else {
      setErrorMassage2(  "" );
    }
  };
  

  useEffect(() => {
        
   if (user == null || user.Id == "" || user.Id==null) {
      setErrorMassage(user.errorMassage);
      
    } else {
      //empty the error message
      setErrorMassage("");
      setState({
                Token: user.Token,
                Id: user.Id,
                Email: user.Email,
                UserName: user.UserName,
                PhoneNumber: user.PhoneNumber,
                ErrorMessage: user.errorMassage,
                printerId:user.PrinterId
               })
               navigation.push("HomeDriver");
    }
}, [user]);



  
      const Login = async () => {
        try {
          fetch('https://apieasyprint20210215153907.azurewebsites.net/api/driver', {
           method: 'POST',
           headers: {
           Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
         Email:email,
         PasswordHash:password
         })
      }).then((response) => response.json())
      .then((response) => {
      setUser({
               Email: response.data.email,
               PhoneNumber: response.data.phoneNumber,
               UserName:response.data.userName, 
               errorMassage:response.data.errorMessage,
               Id:response.data.id,
               Token:response.data.token,
               PrinterId:response.data.printerId
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
      <StatusBar backgroundColor='#009387' barStyle="light-content"/>
    <View style={styles.header}>
        <Text style={styles.text_header}> تسجيل الدخول</Text>
    </View>
    <KeyboardAvoidingView behavior="position">

    <Animatable.View 
        animation="fadeInUpBig"
        style={styles.footer}
    >
        <ScrollView>
        <Text style={styles.text_footer}>البريد الإلكتروني </Text>
        <View style={styles.action}>
            <Feather 
                name="mail"
                color="#05375a"
                size={20}
            />
            <TextInput 
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={(e) => setEmail(e.toString())}
                onBlur={() => emailValidator(email)}
                
            />
            <Animatable.View
                animation="bounceIn"
            >

            </Animatable.View>
        </View>


        <View>
            <Text style={styles.message}>{errorMassage2}</Text></View>

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
                style={styles.textInput}
                secureTextEntry={true}
                onChangeText={(e) => setPassword(e.toString())}
                     />
    
         
    
                   
        </View>
       

        
       
     

          <View style={styles.button}>
            <Button 
        title='تسجيل الدخول '
        color='#49c3c6' 
              onPress={() => Login()}
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
      textAlign: 'center',
},
  text_footer: {
      color: '#05375a',
      fontSize: 18,
      textAlign: 'right',
alignItems: 'flex-end'
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
      textAlign: 'right', 
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
    borderColor: '#49c3c6',
    borderWidth: 1,
    marginTop: 15,
    borderRadius:17,
},
userBtnTxt: {
 
  fontSize:20,
  color:"#fff",
  
},

})


