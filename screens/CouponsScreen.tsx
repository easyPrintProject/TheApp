import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ScrollView, StatusBar } from 'react-native'
import { Ionicons } from '@expo/vector-icons'; 

import { StackScreenProps } from '@react-navigation/stack';
import { AccountParamList } from '../types';
import { DrawerActions } from '@react-navigation/native';
import { useGlobalState } from '../components/StateProvider';


export default function CouponsScreen( {navigation}: StackScreenProps<AccountParamList> ) {
    const  GoToAccount = () => {

        navigation.navigate("AccountScreen");
      }


      const{ state,setState} =useGlobalState();
      
      type Coupon ={

        privatePromotionCodeId:string,
        privatePromotionCodeString: string,
        startDate: string,
        expireDate: string,
        isExpired: true,
        isUsed: false,
        customerId:string,
        printingShopId: string
      }
      const [Coupons ,setCoupons] =React.useState([{
        privatePromotionCodeId:"",
        privatePromotionCodeString: "",
        startDate: "",
        expireDate: "",
        isExpired: true,
        isUsed: false,
        customerId:"",
        printingShopId: ""
      }])

      React.useEffect(() => {

        try {
          fetch('https://apieasyprint20210215153907.azurewebsites.net/api/PromotionCode/FDA22AB5-0FFE-4F9A-99E3-09F5678FB3EA', {
           method: 'GET',
           headers: {
           Accept: 'application/json',
            'Content-Type': 'application/json'
          }
         }).then((response) => response.json())
         .then((response) => {
           response.forEach( (c:Coupon) => {
            setCoupons( Coupons =>
               [...Coupons,
                 {
                  privatePromotionCodeId:c.privatePromotionCodeId,
                  privatePromotionCodeString:c.privatePromotionCodeString ,
                  startDate:c.startDate ,
                  expireDate: c.expireDate,
                  isExpired:c.isExpired ,
                  isUsed:c.isUsed ,
                  customerId:c.customerId,
                  printingShopId:c.printingShopId 
                  }])
           });
         })
         .catch((error) => {
          console.error(error);
        });
        } catch (error) {
          console.log('حدث خطأ! ', error)
        }
        }, [state]);
    return (
     
      <ScrollView style={{ backgroundColor: 'white' , flex:1, }}>
      <SafeAreaView >
              <StatusBar backgroundColor="#009387" barStyle="dark-content" />
      <Text style={{ fontSize: 25, textAlign:'center', marginTop:30,justifyContent:'center', 
      backgroundColor: '#49c3c6', paddingTop:27 ,height: 80, color: 'white',
       alignContent: 'center', fontWeight: 'bold'}}> الكوبونات الخاصة</Text>
        <View style={styles.icon}>
                  <Ionicons name="chevron-back" size={24} color="white" onPress={() => GoToAccount()} />
              </View>
              <View style={styles.icon2}>
                  <Ionicons name="menu-outline" size={24} color= 'white'  
                  onPress={() => navigation.dispatch(DrawerActions.openDrawer())}></Ionicons></View>
  
          <View style={{    backgroundColor: 'white',  
          flexDirection: 'column', alignItems: 'center',
            paddingRight: 10, paddingLeft: 10, 
            marginTop: 50,
           }}> 
          {Coupons.slice(1).map(c => 
            <View>
                   <Text>{c.privatePromotionCodeString}</Text>
            </View>
             )}
         </View>
        </SafeAreaView>
        </ScrollView>
  );}
  const styles = StyleSheet.create({
   
    header: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
      paddingBottom: 50,
  },
 
  text_header: {
      color: '#49c3c6',
      fontWeight: 'bold',
      fontSize: 25,
      textAlign: 'center',
      marginBottom: -20,
  },
      icon: {
        marginRight: "90%",
        paddingLeft: 25,
        marginTop: -50,
      },
      icon2: {
        marginLeft: "90%",
        paddingRight: 25,
        marginTop: -25,
      }
    
    });