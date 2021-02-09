import * as React from 'react';
import { StyleSheet, Image, TextInput, Button } from 'react-native';
import { Text, View } from '../components/Themed';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      
    <View  style={{backgroundColor:"#FFF" ,height:"100%"}}>


    <Text  style={styles.title}>تسجيل الدخول </Text>


     <View ><TextInput style={{paddingHorizontal:10, height:50, width:300, borderColor:'red', borderWidth:0.5, marginBottom: 5} }/>
     </View>  
     <View ><TextInput style={{paddingHorizontal:10, height:50, width:300, borderColor:'red', borderWidth:0.5, margin : 8}}/>
     </View>  



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
                     onPress={() => alert('Button with adjusted color pressed')}
                     title="تسجيل الدخول"
                     color="#841584"
                    />
       </View>
     </View>
 


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
