import * as React from 'react';
import { StyleSheet, Button } from 'react-native';
import Logo from '../components/Logo'
import { Text, View } from '../components/Themed';

export default function AppStartScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
      <Logo/></View>
      <Text>مرحبا في ايزي برينت</Text>
      <View style={{
                    marginHorizontal:55,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:30,
                    backgroundColor:"#00716F",
                    paddingVertical:10,
                    borderRadius:23, 
                    margin: 7
                }}>
      <Button
  onPress={()=> alert("Login page")}
  title="تسجيل الدخول"
  color="#841584"
/></View>
<View style={{
                    marginHorizontal:55,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:30,
                    backgroundColor:"#00716F",
                    paddingVertical:10,
                    borderRadius:23
                }}>
<Button
  onPress={()=> alert("SignUp Page")}
  title="انشاء حساب جديد"
  color="#841584"
/></View>

<Button
  onPress={()=> alert("Home Page")}
  title="المتابعة كزائر"
  color="#841584"
/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    color: 'red' , 
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
