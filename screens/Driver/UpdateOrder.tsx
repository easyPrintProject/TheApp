import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/build/FontAwesome';
import * as React from 'react';
import { StyleSheet, SafeAreaView, Image,Text,View, Animated, ImageBackground, KeyboardAvoidingView, StatusBar} from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import  { useContext, useState, useEffect } from 'react';
import { useGlobalState } from '../../components/StateProvider';
import { StackScreenProps } from '@react-navigation/stack';
import {DriverProfileParamList} from "../../types"



export default function UpdateOrder ({navigation}: StackScreenProps<DriverProfileParamList> ) {

  const {state ,setState } = useGlobalState();
  const [email, setEmail] = useState(state.Email);
  const [phoneNumber, setPhoneNumber] = useState(state.PhoneNumber);
  const [userName, setUserName] = useState(state.UserName);


  
  return (
    
      <SafeAreaView style={{   flex:1,backgroundColor:'#fff'}}>
              <StatusBar backgroundColor='#009387' barStyle="dark-content"/>

    <ScrollView style={(styles.container)} contentContainerStyle={{justifyContent:'center',alignItems:'center'}}
    showsVerticalScrollIndicator={false} >
     <Text style={styles.username}>الاي دي  </Text> 

    <Text style={styles.username}>معلومات الطلب</Text> 
    <Text style={styles.username}> الادريس</Text>
    <Text style={styles.Textin}>
    رقم الجوال
    </Text>
  
              <TouchableOpacity style={styles.userBtn} >
                <Text style={styles.userBtnTxt}>حالة الطلب </Text>
              </TouchableOpacity>
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