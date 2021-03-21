import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'; 

import { StackScreenProps } from '@react-navigation/stack';
import { AccountParamList } from '../types';
import { DrawerActions } from '@react-navigation/native';


export default function CouponsScreen( {navigation}: StackScreenProps<AccountParamList> ) {
    const  GoToAccount = () => {

        navigation.navigate("AccountScreen");
      }

      
    return (
            <SafeAreaView style={{    backgroundColor: '#FFFFFF',flex:1}}>
      
          <View style={{    backgroundColor: '#F2F2F2',
    flexDirection: 'column',
    alignItems: 'center',
    paddingRight: 10,
    paddingLeft: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#FFF',
}}>
    <View style={styles.icon}>
                <Ionicons name="chevron-back" size={24} color="black" onPress={() => GoToAccount()} />
            </View>
            <View style={styles.icon2}>
                <Ionicons name="menu-outline" size={24} color= 'black' 
  onPress={() => navigation.dispatch(DrawerActions.openDrawer())}></Ionicons></View>
            <Text style={styles.title}>كوبوناتي  </Text>
           
           
            <TouchableOpacity style={styles.menuItem}> 
            <Text style={styles.menuItemText2} > قسائم منتهية الصلاحية </Text>

          
        <TouchableOpacity style={{marginHorizontal:"3%"}} >         
        <Text style={styles.menuItemText1}> قسائم غير مستخدمة </Text>
</TouchableOpacity>
          </TouchableOpacity>
         </View>
        
        </SafeAreaView>
  );}
  const styles = StyleSheet.create({
    title: {
      color:"#484E50",
      fontSize: 20,
      fontWeight: 'bold',
      marginVertical:"-5%",
      padding:"3%"
    
    },
    
    
      menuItem: {
        paddingVertical: '5%',
        padding:'10%',
        flexDirection: 'row',

    
      },
       menuItemText1: {
        color: 'black',
        fontWeight: '600',
        fontSize: 12,
        lineHeight: 26,
        marginLeft:"4%",

      },
      menuItemText2: {
        color: 'black',
        fontWeight: '600',
        fontSize: 12,
        lineHeight: 26,
        marginRight:"6%",

      

      
      },
      icon:{
          marginRight:"90%",
          marginTop:"5%"
      },
      icon2: {
        marginLeft: "90%",
        paddingRight: 25,
        marginTop: -25,
       // backgroundColor:'#49c3c6'
      
      }
    
    });