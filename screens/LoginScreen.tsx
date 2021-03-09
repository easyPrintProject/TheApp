import * as React from 'react';
import  {  useState, useEffect } from 'react';
import { StyleSheet, TextInput, Button, StatusBar, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Text, View } from '../components/Themed';
import { useGlobalState } from '../components/StateProvider';
import { StackScreenProps } from '@react-navigation/stack';
import { StartParamList} from '../types';
import * as Animatable from 'react-native-animatable';
import { Feather, FontAwesome } from '@expo/vector-icons';


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
              <Text style={styles.text_footer} >اسم المستخدم</Text>
        <View style={styles.action}>
            <FontAwesome 
                name="user-o"
                color="#05375a"
                size={20}
                
            />
 
    <TextInput 
                placeholder="Your Username"
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={(e) => setEmail(e.toString())}/>

            
            <Animatable.View
                animation="bounceIn"
            >
                <Feather 
                    name="check-circle"
                    color="green"
                    size={20}
                />
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
       placeholder="Your Password"
       secureTextEntry={true}
       style={styles.textInput}
       autoCapitalize="none"
        onChangeText={(e) => setPassword(e.toString())}/>
</View>
  
  <View style={styles.button}>
            <Button 
        title='تسجيل الدخول'
        color='#01ab9d' 
        onPress={() => Login()}
      />
      <Text style={{color:"red"}}>{user.errorMassage}</Text>
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
    backgroundColor: '#009387'
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
},
  text_footer: {
      color: '#05375a',
      fontSize: 18,
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
  },
  button: {
      alignItems: 'center',
      borderColor: '#009387',
      borderWidth: 1,
      marginTop: 15,
      borderRadius:17,
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
  }
})