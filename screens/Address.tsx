import { Feather, FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { useGlobalState } from '../components/StateProvider';
import { AccountParamList } from '../types';
import  {  useState, useEffect } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { StyleSheet, SafeAreaView, Image, Text ,Alert, Modal, Pressable, ImageBackground, } from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { View } from '../components/Themed';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { DrawerActions } from '@react-navigation/native';
import { Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { color } from 'react-native-reanimated';

export default function Address( {navigation}: StackScreenProps<AccountParamList> ) {
  
  const GoToAccount = () => {
    navigation.navigate("AccountScreen");
  }

  const GoToEditAddress = () => {
    navigation.navigate("AddressEdit");
  }
  
  
  
  const {state ,setState } = useGlobalState();

    
   
  
    return (
    


<SafeAreaView >
 
<View style={styles.header}> 
    <View style={styles.icon}>
    <Ionicons  name="chevron-back" size={24} color="white" onPress={() => GoToAccount()} />
     <Ionicons  name="menu-outline" size={24} color= 'white' 
  onPress={() => navigation.dispatch(DrawerActions.openDrawer())}></Ionicons></View>

  <View style={styles.ht}>
      <Text style={styles.title}>العنوان</Text>
      </View>
      </View>
    
      <ScrollView>
<View style={styles.userInfoSection}>

<View style={styles.row}>
<Text style={styles.tt2} >المدينة :</Text>
  <Text style={styles.tt2} >{state.city}</Text>
</View>




<View style={styles.row}>
<Text style={styles.tt2} > الحي :</Text>
  <Text style={styles.tt2} >{state.neighborhood}</Text>
</View>

<View style={styles.row}>
<Text style={styles.tt2} >الشارع :</Text>
  <Text style={styles.tt2} >{state.street}</Text>
</View>

<View style={styles.row}>
<Text style={styles.tt2} >الوصف :</Text>
  <Text style={styles.tt2} >{state.adressLine}</Text>
</View>

<View style={styles.row}>
<Text style={styles.tt2} >الرمز البريدي :</Text>
  <Text style={styles.tt2} >{state.postcode}</Text>
</View>


<TouchableOpacity style={styles.button} onPress={() => GoToEditAddress()}>
<Text style={styles.userBtnTxt}> تعديل العنوان</Text>
</TouchableOpacity>
</View> 


</ScrollView>  
   </SafeAreaView>
   
  );
}

const styles = StyleSheet.create({
  
  con: {
    flex:1,
    backgroundColor:'#fff',
    padding:10
   },
 header: {
    width: '100%',
    height:'20%',
    padding:"4%",
    backgroundColor:'#49c3c6',
    flexDirection: "column",
    justifyContent:"center",
    alignContent:"center",
    //opacity: 0.5
    
  },
icon:{
  backgroundColor:'#49c3c6',
  flexDirection: "row",
  justifyContent:"space-between",
},
ht:{
  backgroundColor:'#49c3c6',
  
  alignItems:'center'
},

title: {
  fontSize: 20,
  fontWeight: 'bold',
  color: 'white',
 
},

  contant:{
    marginLeft:"2%",
    justifyContent:'flex-end',
padding:"3%"

  },
  userInfoSection: {
    
   
    marginBottom: '1%',
    padding:'2%',

    
    
  },
  
  

  row: {
   
    margin: '2%',
  },


 
  tt2:{
    color:"#5F6A6A", 
    margin: '2%',
    fontSize:16,
    
    
  },
  icon2: {
    marginLeft: "90%",
    backgroundColor:'#49c3c6',
    
},
button: {
  alignItems: 'center',
  alignContent: 'center',
  textAlign: 'center',
  borderColor: '#49c3c6',
  borderWidth: 1,
  
  borderRadius:30,
  width: 130,
  height:30,
  backgroundColor: '#49c3c6'
},

userBtnTxt: {
   padding:'2%',
  fontSize:15,
  color:"#fff",
  borderColor:"#49c3c6",
  
},

});

