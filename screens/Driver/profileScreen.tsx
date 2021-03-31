import * as React from 'react';
import { StyleSheet, SafeAreaView, Image,Text, Button,View} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import  {  useState, useEffect } from 'react';
import { useGlobalState } from '../../components/StateProvider';
import Ionicons from 'react-native-vector-icons/Ionicons';
//متغير حسب الصفحة 
import {DriverProfileParamList} from "../../types"

//ثابت في كل الصفحات 
import { StackScreenProps } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default function profileScreen({navigation}: StackScreenProps<DriverProfileParamList> ) {


  // ميثود للذهاب الى صفحة التعديل 
  const  GoToEditScreen  = () => {

    navigation.navigate("EditScreen");
  }
  const {state ,setState } = useGlobalState();
 

  React.useEffect(() => {
    
     }, [])

  
  return (

    <SafeAreaView >

    <View style={styles.header}> 
     <View style={styles.ht}>
      <Text style={styles.title}> بيانات حسابي</Text>
      </View></View> 


      
      <View style={[styles.userInfoSection ,styles.cont ]}>

      <Image style={styles.avatar}
      source={require('../../assets/images/userimge.jpg')}/> 
      <Text style={styles.tt}>{state.UserName}</Text>
      <Text style={styles.caption}>{state.Email}</Text>
      </View> 


    <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color="#80CBC4" size={20}/>

          <Text style={styles.tt2} >SA</Text>
    </View>


        <View style={styles.row}>
          <Icon name="phone" color="#80CBC4" size={20}/>
          <Text style={styles.tt2}>{state.PhoneNumber}</Text>
        </View></View>


      <View style={styles.menuWrapper}>
        <TouchableOpacity style={styles.menuItem}>
            <Icon name="wallet-outline" color="#FFEB3B" size={25}/>
            <Text style={styles.menuItemText}>الرصيد </Text>
          </TouchableOpacity>
     </View>




      <View style={styles.contant}>
        <TouchableOpacity style={styles.button}
               
                onPress={() => GoToEditScreen()}>
                <Text style={styles.userBtnTxt}>تعديل</Text>
              </TouchableOpacity>

              <TouchableOpacity  style={styles.button}>
                <Text style={styles.userBtnTxt}>تسجيل الخروج</Text>
              </TouchableOpacity>
              
       </View>
 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height:'20%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    
    //opacity: 0.5
    
  },


  contant:{
    flexDirection: 'row-reverse',
    justifyContent:"space-evenly",
    padding:"3%",
    

  },
  userInfoSection: {
    backgroundColor:'#fff',
    alignItems: 'flex-end',
    paddingHorizontal: '5%',
    marginBottom: '3%',
    padding:'1%',
    
    
  },
  
  caption: {
   
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },

  row: {
    flexDirection: 'row-reverse',
    marginBottom: '2%',
  },

  

  menuWrapper: {
    alignContent:'space-around',
    backgroundColor:'#fff',
  },

  menuItem: {
    flexDirection: 'row-reverse',
    paddingVertical: '5%',
    paddingHorizontal: '3%',
    padding:'1%'

  },

  menuItemText: {

    alignItems:'flex-end',
    color: '#2196F3',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },

  avatar: {
    
    width: 80,
    height: 80,
    borderRadius: 40, 
    margin: 10,
  },

  cont:{
    flexDirection: 'row-reverse',
     marginTop: 15
  },
  cont3:{
    
    borderRightColor: '#dddddd',
    borderRightWidth: 1
  },
  tt:{
    
    marginTop:'5%',
    alignContent:'flex-end',
    marginBottom: '15%',
    fontSize:24,
  },
  cont2:{
    
    marginRight: 20,
    alignItems: 'flex-end',

  },
  tt2:{
    color:"#777777", 
    marginRight: '5%',
    fontSize:14,
    
  },
  icon2: {
    marginLeft: "90%",
    paddingRight: 25,
    marginTop: 24,
    backgroundColor:'#49c3c6',
    
},
button: {
  alignItems: 'center',
  alignContent: 'center',
  textAlign: 'center',
  borderColor: '#49c3c6',
  borderWidth: 1,
  marginTop: 15,
  borderRadius:30,
  width: 130,
  backgroundColor:'#009387'
},
userBtnTxt: {
   padding:'2%',
  fontSize:15,
  color:"#fff",
  
},
header: {
  width: '100%',
  height:'20%',
  padding:"2%",
  backgroundColor:'#009387',
  flexDirection: "column",
  justifyContent:"center",
  alignContent:"center"
  //opacity: 0.5
  
},
ht:{
  backgroundColor:'#009387',
  justifyContent:"center",
  alignItems:'center'
},
title: {
  fontSize: 20,
  fontWeight: 'bold',
  color: 'white',
 
},


   
});
