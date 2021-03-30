import * as React from 'react';
import  { useContext, useState, useEffect } from 'react';
import { StyleSheet , SafeAreaView,Button,Image, ImageBackgroundBase, ImageBackground} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { StackScreenProps } from '@react-navigation/stack';
import {HomeParamList} from '../types';
import { StatusBar } from 'expo-status-bar';
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
      return(  <View
        style={{
          flexDirection: "row",
          marginTop: 10,
          paddingHorizontal: "30%",
          borderWidth:1,
          padding:"2%",
          borderColor:'black',
          

       
        }}
      >
        <View style={{borderRadius:15,backgroundColor:"#009387",alignItems:'center', marginHorizontal:4}}> 
        <Button onPress={() => GoToLogin()} title="تسجيل الدخول" color="white" />
        </View>
 <View style={{borderRadius:15,backgroundColor:"#009387",alignItems:'center'}}> 
        <Button onPress={() => GoToSignUp()} title=" إنشاء حساب" color="white"/>
   </View>
      </View>);                    
    } else {
      return(<View>
       <TouchableOpacity  style={{borderRadius:20,height:20,width:"auto", alignItems:"flex-end"}}>
        <Text style={{color:"#009387"}}>{state.UserName} مرحبا </Text>
       </TouchableOpacity></View>); 
    }  
  }
  const GoOrderScreen = () => {
    navigation.push('OrderScreen');
  }; 
  
  const GoPrinterListScreen = () => {
    navigation.push('PrinterListScreen');
  };
  
  const GoDonation = () => {
    navigation.push("DonationScreen");
  };
  
  const GoToLogin = () => {
    navigation.push('LoginScreen');
  };
  const GoToSignUp = () => {
    navigation.push('SigninScreen');
  };
  
  return (
    <SafeAreaView style={{   backgroundColor:"white",height:"100%"}}> 
      <View><StatusBar style="dark" /></View>

      {CheckUser()}
        <View
          style={{
            flexDirection: "row",
            marginTop: 4,
            alignItems: "center",
      
       
          }}
        >

        </View>
           <ImageBackground source={require("../assets/images/back.jpeg")}
 style={styles.image}>
      
    </ImageBackground>
        <View style={{ paddingHorizontal: 20, marginTop: 25 ,width:"125%"}}>
          
          <Text
            style={{
              fontSize: 40,
              color: "black",
      marginHorizontal:146,
      marginLeft:"40%",
            }}
          >
            أهلا بك
          </Text>
      
          <Text
            style={{
              fontSize: 15,
              paddingVertical: 10,
             marginLeft:"21%",
              lineHeight: 22,
              color: "#009387",
            
            }}
          >
         
           أصبحت الطباعة سهلة مع تطبيقنا
          </Text>

          <View
            style={{
              flexDirection: "row",
              backgroundColor: "black",
              borderRadius: 1,
            
              alignItems: "center",
              paddingVertical: 1,
              marginTop: 30,
              marginRight:"3%"
            }}
          >
      
          </View>

        
      











          <ScrollView
            horizontal
         
            style={{ marginLeft:1,marginRight:100, marginTop: 100 }}
          >
            <View>
            <TouchableOpacity  onPress={() => GoOrderScreen()}>
            <View      
              style={{
                backgroundColor: "#FEFEFE",
                height: 330,
                width: 190,
                borderRadius: 15,
                padding: 1,
              }}
       
            >
              <Image
                source={require("../assets/images/mdpoat.jpeg")}
                style={{ width: 180, borderRadius: 10, height: 230 }}
              />
              <View
                style={{
                  flexDirection: "row",
                  width: 250,
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    paddingHorizontal: 60,
                    paddingVertical: 1,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      color: "black",
                    }}
                  >
                   طلب طباعة
                  </Text>
                </View>
        
              </View></View>
            </TouchableOpacity></View>









            <TouchableOpacity
              style={{
                backgroundColor: "#FEFEFE",
                height: 330,
                width: 190,
                borderRadius: 15,
                padding: 1,
              }}
              onPress={() => GoPrinterListScreen()}
            >
              <Image
                source={require("../assets/images/document.jpg")}
                style={{ width: 180, borderRadius: 10, height: 230 }}
              />
           <View
                style={{
                  flexDirection: "row",
                  width: 250,
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    paddingHorizontal: 60,
                    paddingVertical: 5,
                  }}
                >
               <Text
                    style={{
                      fontSize: 21,
                      color: "black",
                    }}
                  >
                   الملزمات 
                  </Text>
                </View>
              
              </View>
            </TouchableOpacity>












            <TouchableOpacity
              style={{
                backgroundColor: "#FEFEFE",
                height: 330,
                width: 190,
                borderRadius: 15,
                padding: 1,
              }}
              onPress={() => GoDonation()}  
            >
              <Image
                source={require("../assets/images/donation.jpg")}
                style={{ width: 180, height: 230 ,borderRadius: 10,}}
              />
             <View
                style={{
                  flexDirection: "row",
                  width: 250,
                  alignItems: "center",
                }}
              >
                    <View
                  style={{
                    paddingHorizontal: 60,
                    paddingVertical: 5,
                  }}
                >
               <Text
                    style={{
                      fontSize: 20,
                      color: "black",
                    }}
                  >
                  التبرع
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
     </SafeAreaView>
    );
  }
  const styles = StyleSheet.create({
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
  });
