import * as React from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';

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
        <TextInput
          style={styles.input}
          placeholder='اسم المستخدم'
          textAlign= 'right'
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('ID', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='كلمة السر'
          textAlign= 'right'
          secureTextEntry={true}
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('pass', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='الإيميل الإلكتروني'
          textAlign= 'right'
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('email', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='رقم الجوال'
          textAlign= 'right'
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('phoneNumber', val)}
        />
        <Button 
          title='التسجيل'
          color='#8098db'
          onPress={this.signUp}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 55,
    backgroundColor: '#8098db',
    margin: 10,
    padding: 8,
    color: 'white',
    borderRadius: 15,
    fontSize: 18,
    fontWeight: '300',
  },
  container: {
    flex: 1,
    justifyContent: 'center', // vertical
    alignItems: 'center' // horizontal 
  }
})