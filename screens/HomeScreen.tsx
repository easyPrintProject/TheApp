import * as React from 'react';
import  { useContext, useState, useEffect } from 'react';
import { StyleSheet , SafeAreaView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackScreenProps } from '@react-navigation/stack';
import {HomeParamList} from '../types';
import { Text, View } from '../components/Themed';
 import { useGlobalState, GlobalStateInterface } from '../components/StateProvider';
export default function HomeScreen({navigation }: StackScreenProps<HomeParamList>) {

  // const myContext = useContext(NewContext);
  const {state ,setState } = useGlobalState();
  // const { state, dispatch } = useContext(AppContext);

  useEffect(() => {

     }, [])



  const CheckUser = () => {
    if ( state.Email==null) {
      return(<View  style={{flexDirection:"row", width:"auto",height:5, backgroundColor:"#ED4BAC"}}>
        <TouchableOpacity  onPress={() => GoToLogin()} style={{borderRadius:20,height:20,width:"auto",backgroundColor:"#8C8787", padding:2, marginLeft:2, marginRight:2}}>
         <Text style={{color:"#FFFFFF"}}>تسجيل الدخول</Text>
        </TouchableOpacity>
       <TouchableOpacity onPress={() => GoToSignUp()} style={{borderRadius:20,height:20,width:"auto",backgroundColor:"#8C8787", padding:3, marginLeft:2, marginRight:2}}>
        <Text style={{color:"#FFFFFF"}}>حساب جديد</Text>
       </TouchableOpacity></View>);           
    } else {
      return(<View  style={{flexDirection:"row",backgroundColor:"#ED4BAC", alignItems:"flex-end"  }}>
       <TouchableOpacity  style={{borderRadius:20,height:20,width:"auto", alignItems:"flex-end"}}>
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
               <TouchableOpacity style={{ width:"100%",height:100, justifyContent:"center",alignItems:"center",backgroundColor:"#4BBFF4",marginTop:90}}>
                <Text style={{ marginHorizontal:20,fontWeight: "bold", alignSelf: "center", textTransform: "uppercase",color:"#FFFFFF",alignItems:"center",justifyContent:"center",fontSize:25}}>طلب طباعة</Text>
               </TouchableOpacity>
              </View>
              <View style={styles.view}>
                <TouchableOpacity style={{ width:"100%",height:100, justifyContent:"center",alignItems:"center",backgroundColor:"#8C8787",marginTop:10,}}>
                 <Text style={{ marginHorizontal:20,fontWeight: "bold", alignSelf: "center", textTransform: "uppercase",color:"#FFFFFF",alignItems:"center",justifyContent:"center",fontSize:25}}>ملزماتي </Text>
               </TouchableOpacity>
             </View>
             <Text></Text>
             <View  style={styles.view}>
              <TouchableOpacity style={{ width:"100%",height:100, justifyContent:"center",alignItems:"center",backgroundColor:"#F8E73D",marginTop:10}}>
               <Text style={{ marginHorizontal:20,fontWeight: "bold", alignSelf: "center", textTransform: "uppercase",color:"#FFFFFF",alignItems:"center",justifyContent:"center",fontSize:25}}>تبرع </Text>
             </TouchableOpacity>
           </View>
         </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  title: {
    color:"white",
    fontSize: 15,
    fontWeight: 'bold',
    alignItems:"flex-end",
    
  },
  header:{
    flexDirection:"row",
    padding:"4%", 
    width:"100%",
    height:"13%",  
  
     backgroundColor:"#ED4BAC",
     justifyContent:"space-between"
  },
  contener:{
    flex:1,
    backgroundColor:"white"
  },
  view:{
  }
});
