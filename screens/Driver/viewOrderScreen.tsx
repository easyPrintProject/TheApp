import React from 'react'
import { Button, Pressable, StyleSheet, Text, View ,Image, StatusBar,  TouchableOpacity, SafeAreaView} from 'react-native'
import {AntDesign, FontAwesome5, Ionicons, MaterialCommunityIcons} from '@expo/vector-icons'
import { ScrollView } from 'react-native-gesture-handler';
import { StackScreenProps } from '@react-navigation/stack';
import { driverStack } from '../../types';

import { DataTable } from 'react-native-paper';

export default function OrderScreen({navigation}: StackScreenProps<driverStack>) {
  const state ={searchBarFocused : false}
  const GoToMoreInfo = () => {
    navigation.navigate("MoreInfo");
  }; 



  return (
    <SafeAreaView  style={{ backgroundColor: 'white' , flex:1}}>
    <View style={{ backgroundColor: '#efefef', marginTop: 150, marginLeft:10 , marginRight:10, alignItems: 'center', alignContent: 'center'}}>

<DataTable>
  <DataTable.Header>
     <DataTable.Title style={{ alignItems: 'center', alignContent: 'center'}}>
        عمليات اضافية</DataTable.Title>
        <DataTable.Title style={{ alignItems: 'center', alignContent: 'center'}}>
        حالة التوصيل</DataTable.Title>
        <DataTable.Title style={{ alignItems: 'center', alignContent: 'center'}}>
        Order Id</DataTable.Title>
  </DataTable.Header>

  <DataTable.Row>
       <DataTable.Cell style={{ alignItems: 'center', alignContent: 'center'}}>
          <View>
             <View style={styles.button}>
          <TouchableOpacity onPress={() => GoToMoreInfo()}>
           <Text style={styles.text}>المزيد</Text> 
          </TouchableOpacity>
    </View>
          </View>
        </DataTable.Cell>
        <DataTable.Cell style={{ alignItems: 'center', alignContent: 'center'}}>Test</DataTable.Cell>
        <DataTable.Cell style={{ alignItems: 'center', alignContent: 'center'}}>Test</DataTable.Cell>
  </DataTable.Row>   
</DataTable>
</View>
</SafeAreaView>
);
}
const styles = StyleSheet.create({
  button:{
    alignItems: 'center',
    borderColor: 'green',
    borderWidth: 1,
    marginTop: 7,
    borderRadius:10,
    height: 25,
    width: 70,
    justifyContent: 'center',
    textAlign: 'center',
    alignContent: 'center',
},
text:{
  fontSize: 14,
  color: "green",
  textAlign: 'center',
  alignItems: 'center',
  alignContent: 'center',
}
})
