import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {AntDesign, Ionicons} from '@expo/vector-icons'

export default function BasketScreen() {
  return (
    <View>
      <Text style={(styles.headertext)}> طلبات التوصيل</Text>
      <Text style={(styles.textup)}>  <AntDesign name="enviromento" size={24} color="black" /></Text>
      <View>
        <View>
          <Text> وقت التوصيل خلاال الساعة 6-7</Text>
          <Text>
            مطبعة المعالي                 </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headertext:{
    flexDirection:"row",
    padding:6, 
    width:"100%",
    height:"25%",
     justifyContent:"center",
     alignItems:"center",
     backgroundColor:"#ED4BAC",
     marginTop:"9%",
     alignSelf:"auto",
     textAlign:"center",
     fontSize:15,
 
   
    },
    textup:{
      fontSize:18,
      textAlign:'center',
      marginTop:30
    }
});

