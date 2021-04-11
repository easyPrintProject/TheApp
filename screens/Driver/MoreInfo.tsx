import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';
import { Card } from 'react-native-elements';

export default function MoreInfo() {
 


return (
       <View style={styles.container}>
       <View><Text style={styles.text1}> معلومات عنوان العميل</Text></View>

       <View>
       <Text style={styles.text2}>اسم المستلم:</Text>
       <Text style={styles.text2}>رقم الجوال:</Text>
       <Text style={styles.text2}>المدينة:</Text>
       <Text style={styles.text2}>الحي:</Text>
       <Text style={styles.text2}>الشارع:</Text>
       <Text style={styles.text2}>الرمز البريدي:</Text>
       <Text style={styles.text2}>وصف:</Text>
      </View>
      
        <View style={styles.button}>
            <TouchableOpacity onPress={() => alert("test")}>
             <Text style={styles.text}>تغيير حالة الطلب لتم التوصيل</Text> 
            </TouchableOpacity>
      </View>
      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1:{
    marginTop:-100,
    fontSize: 30,

  },
   text2:{
     marginRight: -120,
    marginTop:14,
    textAlign: 'right',
    alignContent: 'center',
    alignItems: 'center',
    fontSize: 15,
    

  },
   button:{
      alignItems: 'center',
      borderColor: 'green',
      borderWidth: 1,
      marginTop: 30,
      borderRadius:10,
      height: 40,
      width: 200,
      textAlign: 'center',
      justifyContent: 'center',
      alignContent: 'center',
  },
  text:{
    fontSize: 14,
    color: "green",
    textAlign: 'center',
    alignItems: 'center',
    alignContent: 'center',
  }
});