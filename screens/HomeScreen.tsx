import * as React from 'react';
import  { useContext, useState, useEffect } from 'react';
import { StyleSheet , SafeAreaView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackScreenProps } from '@react-navigation/stack';
import {HomeParamList} from '../types';
import { Text, View } from '../components/Themed';
 import { useGlobalState, GlobalStateInterface } from '../components/StateProvider';
import { Types, UserType } from '../components/Reduser';
export default function HomeScreen({navigation }: StackScreenProps<HomeParamList>) {

  // const myContext = useContext(NewContext);
  const {state ,setState } = useGlobalState();
  // const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
     }, [])



  const CheckUser = () => {
    if ( state.Email==null) {
      return(<View  style={{flexDirection:"row", width:25,height:5, justifyContent:"space-between",alignItems:"flex-end",backgroundColor:"#4BBFF4",marginTop:10,marginRight:100}}><TouchableOpacity  onPress={() => GoToLogin()} style={{borderWidth:0.5,borderRadius:20,height:30,width:77,alignItems:"center",backgroundColor:"#8C8787"}}>
         <Text style={{color:"#FFFFFF"}}>تسجيل</Text>
        </TouchableOpacity>
       <TouchableOpacity onPress={() => GoToSignUp()} style={{borderWidth:0.5,borderRadius:20,height:30,width:77,paddingHorizontal:"5%",justifyContent:"center",alignItems:"center",backgroundColor:"#8C8787"}}>
        <Text style={{color:"#FFFFFF"}}>حساب جديد</Text>
       </TouchableOpacity></View>);           
    } else {
      return(<View  style={{flexDirection:"row", justifyContent:"space-between",alignItems:"flex-end",backgroundColor:"#ED4BAC"}}>
       <TouchableOpacity  style={{borderWidth:0.5,borderRadius:20,height:30,width:"auto",paddingHorizontal:"5%",justifyContent:"center",alignItems:"center",backgroundColor:"#8C8787"}}>
        <Text style={{color:"#FFFFFF"}}>{state.UserName} مرحبا </Text>
       </TouchableOpacity></View>); 
    }  
  }
  const GoToLogin = () => {
    navigation.navigate('LoginScreen');
  };
  const GoToSignUp = () => {
    navigation.navigate('SigninScreen');
  };
  
  return (
      <SafeAreaView style={styles.contener}>
          <View> 
            <View style={styles.header}>
               <Text style={styles.title}> EASY PRINT </Text>
                <View>  
                   {CheckUser()}
                 </View>
               </View>
              <View style={styles.view}>
               <TouchableOpacity style={{padding:6, width:500,height:120, justifyContent:"center",alignItems:"center",backgroundColor:"#4BBFF4",marginTop:90,paddingRight:100}}>
                <Text style={{ marginHorizontal:20,fontWeight: "bold", alignSelf: "center", textTransform: "uppercase",color:"#FFFFFF",alignItems:"center",justifyContent:"center",fontSize:25}}>طلب طباعة</Text>
               </TouchableOpacity>
              </View>
              <View style={styles.view}>
                <TouchableOpacity style={{padding:6, width:500,height:120, justifyContent:"center",alignItems:"center",backgroundColor:"#8C8787",marginTop:10,paddingRight:100}}>
                 <Text style={{ marginHorizontal:20,fontWeight: "bold", alignSelf: "center", textTransform: "uppercase",color:"#FFFFFF",alignItems:"center",justifyContent:"center",fontSize:25}}>ملزماتي </Text>
               </TouchableOpacity>
             </View>
             <Text></Text>
             <View  style={styles.view}>
              <TouchableOpacity style={{padding:6, width:500,height:120, justifyContent:"center",alignItems:"center",backgroundColor:"#F8E73D",marginTop:10,paddingRight:120}}>
               <Text style={{ marginHorizontal:20,fontWeight: "bold", alignSelf: "center", textTransform: "uppercase",color:"#FFFFFF",alignItems:"center",justifyContent:"center",fontSize:25}}>تبرع </Text>
             </TouchableOpacity>
           </View>
         </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  title: {
    color:"black",
    fontSize: 15,
    fontWeight: 'bold',
    alignItems:"flex-start",
    marginRight:99
    
  },
  header:{
    flexDirection:"row",
    padding:6, 
    width:"100%",
    height:"10%",
     justifyContent:"center",
     alignItems:"center",
     backgroundColor:"#ED4BAC",
     marginTop:"2%",
     alignSelf:"auto"

  },
  contener:{
    flex:1,
    backgroundColor:"white"
  },
  view:{
    flexDirection:"column"
  }
});
