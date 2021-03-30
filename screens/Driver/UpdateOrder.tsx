import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {UpdateOrderParamList} from "../../types"

//ثابت في كل الصفحات 
import { StackScreenProps } from '@react-navigation/stack';
export default function UpdateOrder({navigation}: StackScreenProps<UpdateOrderParamList> ) {


  
  return (
      <SafeAreaView style={{   flex:1,backgroundColor:'#fff'}}>
    <ScrollView style={(styles.container)} contentContainerStyle={{justifyContent:'center',alignItems:'center'}}
    showsVerticalScrollIndicator={false} >
 
    <Text style={styles.username}>محمد</Text> 
    <Text style={styles.username}>150R</Text>
    <Text style={styles.Textin}>
      محمد علي
    </Text>
    <Text  style={styles.Textin}>
mohomed@gmail.com    </Text>
    <Text  style={styles.Textin}>
0590439022    </Text>
    <Text  style={styles.Textin}>
**********    </Text>
      <View style={styles.userBtnWrapper}>
        <TouchableOpacity
                style={styles.userBtn}
               >
                <Text style={styles.userBtnTxt}>تعديل</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.userBtn} >
                <Text style={styles.userBtnTxt}>تسجيل الخروج</Text>
              </TouchableOpacity>
              </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
   flex:1,
   backgroundColor:'#fff',
   padding:20
  },
  title: {
    color:"red",
    fontSize: 20,
    fontWeight: 'bold',
  },
  userImg:{
    height:150,
    width:150,
    borderRadius:7,
  },
  username:{
    margin:1,
fontSize:18,
fontWeight:'bold',
marginTop:"10%",
  },
  Textin:{
    fontSize:25,
   color:'#9A9A9A',
   marginTop:25,
   borderWidth:0.5,
   height:50,
   width:250,
   alignItems:'center',
   justifyContent:'center',
   borderRadius:10,

   textAlign:'center',
   

  },
  userBtn: {
    borderColor: '#2e64e5',
    borderWidth: 2,
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginHorizontal: 5,
    flexDirection: 'row',

  },
  userBtnTxt: {
    color: '#2e64e5',
    flexDirection: 'row',

  },
  userBtnWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 10,
    marginTop:30
  },
});
