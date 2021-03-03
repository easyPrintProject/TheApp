import * as React from 'react';
import  { useContext, useState, useEffect } from 'react';
import { View, Button, TextInput, StyleSheet, Text } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { StartParamList} from '../types';

export default function SignUp ({navigation}: StackScreenProps<StartParamList>){
  
  // const { state, dispatch } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState({name:"test",id:"test",email:"test"});


//   useEffect(() => {
        
//     if (user == null || user.email == ""  ) {
//       dispatch({
//         type: 'Login_User',
//         payload: {
//           id: " ",
//           name: " "
//         }
//     })
//     } else {
//       dispatch({
//         type: 'Login_User',
//         payload: {
//           id: user.id,
//           name: user.email
//         }
//     })
//     }


// }, [user])

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
     setUser({name:response.data.customer.userName, 
              id:response.data.customer.id,
              email: response.data.customer.email});
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