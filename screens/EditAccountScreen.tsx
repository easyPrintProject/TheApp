import * as React from 'react';

import  { useContext, useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, Image, Text ,Alert, Modal, Pressable, ImageBackground} from 'react-native';
import FontAwesome from '@expo/vector-icons/build/FontAwesome';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { View } from '../components/Themed';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {AccountParamList} from '../types'
import { DrawerActions } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useGlobalState, GlobalStateInterface } from '../components/StateProvider';



export default function EditAccountScreen( {navigation}: StackScreenProps<AccountParamList> ) {
  const GoToAccount = () => {
    navigation.navigate("AccountScreen");
  }
  
  const {state ,setState } = useGlobalState();
 const [email, setEmail] = useState(state.Email);
   const [phoneNumber, setPhoneNumber] = useState(state.PhoneNumber);
   const [userName, setUserName] = useState(state.UserName);

  
    const update = async () => {
       try {
         fetch('https://apieasyprint20210215153907.azurewebsites.net/api/UpdateCustomer', {
          method: 'POST',
          headers: {
          Accept: 'application/json',
           'Content-Type': 'application/json'
         },
          body:JSON.stringify({
           Id:state.Id,
           EmailConfiremd:state.EmailConfeirmd,
           Email: email,
           PhoneNumber:phoneNumber,
          UserName: userName
         })

        })
        .then((response) => response.json())
        .then(() => {
         setState({
         ...state,
         PhoneNumber: phoneNumber,
         UserName:userName, 
         Email: email,

       });

        })

        .catch((error) => {
         console.error(error);
       });
       } catch (error) {
         console.log('حدث خطأ! ', error)
       }

       Alert.alert(
         "تم التحديث"
       )

       GoToAccount()
       }
    
  
      


  return (
    
    <SafeAreaView>
 
    <View style={styles.header}> 
    <View style={styles.icon}>
    <Ionicons  name="chevron-back" size={24} color="white" onPress={() => GoToAccount()} />

     <Ionicons  name="menu-outline" size={24} color= 'white' 
  onPress={() => navigation.dispatch(DrawerActions.openDrawer())}></Ionicons></View>
  <View style={styles.ht}>
      <Text style={styles.title}>تعديل بيانات الحساب</Text>
      </View></View>


      <ScrollView >
        <View style={styles.contant}>
      <View style={styles.action}>
          <FontAwesome name="user-o" color="#333333" size={20} />
      <TextInput
            placeholder=" الاسم الاول"
            placeholderTextColor="#666666"
            autoCorrect={false}
             onChangeText={(e) => setUserName(e.toString())}
            style={styles.textInput}
            
            
          /></View>
          
        <View style={styles.action}>
          <Ionicons name="ios-clipboard-outline" color="#333333" size={20} />
          <TextInput
            multiline
            numberOfLines={3}
            placeholder="الايميل"
            placeholderTextColor="#666666"
            autoCorrect={true}
            onChangeText={(e) => setEmail(e.toString())}
            style={[styles.textInput, {height: 40}]}
          />
          
        </View>
        <View style={styles.action}>
          <Feather name="phone" color="#333333" size={20} />
          <TextInput
            placeholder="رقم الجوال"
            placeholderTextColor="#666666"
            keyboardType="number-pad"
            autoCorrect={false}
            onChangeText={(e) => setPhoneNumber(e.toString())}
            style={styles.textInput}
          />
        </View>

      <TouchableOpacity style={styles.button} > 
 <Text style={styles.userBtnTxt} 
 onPress={() =>update()}
 >تحديث 
  </Text>
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
   padding:10
  },
  header: {
    width: '100%',
    height:'20%',
    padding:"2%",
    backgroundColor:'#49c3c6',
    flexDirection: "column",
    justifyContent:"center",
    alignContent:"center"
    //opacity: 0.5
    
  },
icon:{
  backgroundColor:'#49c3c6',
  flexDirection: "row",
  paddingTop:"6%",
  justifyContent:"space-between"
},
  textInput: {
    flex: 1,
    paddingLeft: 65,
    color: '#333333',
    justifyContent:"center",
    alignItems:'center',
    textAlign: 'right',
  },
  action: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 1,
  },
  ht:{
    backgroundColor:'#49c3c6',
    justifyContent:"center",
    alignItems:'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
   
  },

 
  input: {
    width: 350,
    height: 55,
    backgroundColor: '#B9B9B9',
    margin: 10,
    padding: 8,
    color: 'black',
    borderRadius: 10,
    fontSize: 15,},
 

  userBtnTxt: {
   
    fontSize:20,
    color:"#fff",
    
  },

 contant:{
   padding:"3%",
  alignItems: 'center',
  alignContent: 'center',
 },

  button: {
    alignItems: 'center',
    alignContent: 'center',
    textAlign: 'center',
    borderColor: '#49c3c6',
    borderWidth: 1,
    marginTop: 15,
    borderRadius:30,
    width: 150,
    backgroundColor: '#49c3c6'
  },
 
});
