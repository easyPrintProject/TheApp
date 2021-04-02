import * as React from 'react';
import  { useContext, useState, useEffect } from 'react';
import { StyleSheet , SafeAreaView,Button,Image, ImageBackgroundBase, ImageBackground, StatusBar} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
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
    if ( state.UserName==null) {
      return( 
         <View style={styles.cont}>
        <TouchableOpacity style={styles.button} onPress={() => GoToLogin()}> 
        <Text style={styles.butText}  >تسجيل الدخول</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => GoToSignUp()} > 
        <Text style={styles.butText}  >إنشاء حساب </Text> 
       </TouchableOpacity>
 </View>); 

    } else {
      return(<View  style={{flexDirection:"row-reverse",backgroundColor:"#F5F5F5", alignItems:"flex-end"  }}>
       <TouchableOpacity  style={{borderRadius:20,height:20,width:"auto", alignItems:"flex-end"}}>
        <Text style={{color:"black",}}>{state.UserName} مرحبا </Text>
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
    <SafeAreaView style={{height:"100%"}}> 
        <StatusBar backgroundColor="#49c3c6" barStyle="dark-content"/>

      {CheckUser()}
        <View
          style={{
            flexDirection: "row",
            marginTop: 4,
            alignItems: "center",
          }}
        >
        </View>

    <ImageBackground source={require("../assets/images/back.jpeg")} style={styles.image}>
      
    </ImageBackground>

        <View style={{ paddingHorizontal: 20 ,width:"125%"}}>
          <Text
            style={{
              fontSize: 40,
              color: "black",
              padding:"1%",
              borderTopColor:"black",
      marginHorizontal:"25%",
      marginLeft:"40%",
            }}
          >
            أهلا بك
          </Text>
      
          <Text
            style={{
              fontSize: 15,
              paddingVertical: 10,
              marginHorizontal:"25%",
              lineHeight: 22,
              color: "#009387",
            
            }}
          >
         
           أصبحت الطباعة سهلة مع تطبيقنا
          </Text>

          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#009387",
              borderRadius: 2,
              alignItems: "center",
              paddingVertical: 1,
              marginTop: 30,
              marginLeft:"-5%"

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
                   ملزماتي
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
                  تبرع
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
      justifyContent: "center",
      height:"100%",
    },
    cont:{
        flexDirection: 'row-reverse',
        marginTop: 10,
        borderWidth:1,
        padding:"3%",
        borderColor:'#707B7C',
         
    },

    butText:{
     
      fontSize:17, 
      fontStyle:"normal",
      color:"#FFFFFF"

    },
    button: {
      alignItems:'center',
      marginVertical:"1%",
      marginHorizontal:"4%",
      borderRadius:5,
      padding:"2%",
      color:"#455A64",
      backgroundColor:"#009387",
     

    
    
  },
  });
