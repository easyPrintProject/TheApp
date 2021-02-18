import * as React from 'react';
import { View, Button, TextInput, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';


export default class SignUp extends React.Component {
  
  state = { ID: '', pass: '', email: '', phoneNumber: ''}
  onChangeText = (key: any, val: any) => {
    this.setState({ [key]: val })
  }
  signUp = async () => {
    const { ID, pass, email, phoneNumber } = this.state
    try {
      fetch('https://apieasyprint20210215153907.azurewebsites.net/api/signin', {
       method: 'POST',
       headers: {
       Accept: 'application/json',
        'Content-Type': 'application/json'
      },
       body: JSON.stringify({
        Email:email,
        UserName: ID,
        PasswordHash: pass,
        PhoneNumber: phoneNumber
      })
     }).catch((error) => {
      console.error(error);
    });

      console.log('تم التسجيل بنجاح ')
    } catch (error) {
      console.log('حدث خطأ! ', error)
    }
  }

  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.titleText}>الانضمام إلى ايزي برنت</Text> 
        <TextInput 
          style={styles.input}
          placeholder='اسم المستخدم'
          textAlign= 'right'
          placeholderTextColor='black'
          onChangeText={val => this.onChangeText('ID', val)}
        /><View>
        </View>
        <TextInput
          style={styles.input}
          placeholder='كلمة السر'
          textAlign= 'right'
          secureTextEntry={true}
          placeholderTextColor='black'
          onChangeText={val => this.onChangeText('pass', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='الإيميل الإلكتروني'
          textAlign= 'right'
          placeholderTextColor='black'
          onChangeText={val => this.onChangeText('email', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='رقم الجوال'
          textAlign= 'right'
          placeholderTextColor='black'
          onChangeText={val => this.onChangeText('phoneNumber', val)}
        />
     <View>
</View>
       <View style={styles.buttonStyle}><Button 
          title='إنشاء حساب'
          color='black'
          onPress={this.signUp}
          
        /></View>
        </View>
    )
  }
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