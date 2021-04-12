import React from 'react'
import { Button, Pressable, StyleSheet, Text, View ,Image, StatusBar,  TouchableOpacity, SafeAreaView} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

import { DataTable } from 'react-native-paper';

export default function OrderScreen() {


// bottom to top الترتيب
// bottom to top الترتيب
// bottom to top الترتيب

  return (
    <SafeAreaView  style={{ backgroundColor: 'white' , flex:1}}>
    <Text style={{ fontSize: 30, textAlign:'center', marginTop:30}}>حالة الطلب</Text>
    <View style={{ backgroundColor: '#efefef', marginTop: 150, marginLeft:10 , marginRight:10, alignItems: 'center', alignContent: 'center'}}>

<DataTable>
  <DataTable.Header>
    
        <DataTable.Title style={{  justifyContent:'center'}}>
        حالة الطلب</DataTable.Title>
         <DataTable.Title style={{ justifyContent:'center'}}>
         السعر</DataTable.Title>
         <DataTable.Title style={{ justifyContent:'center'}}>
        الطلب</DataTable.Title>
        <DataTable.Title style={{justifyContent:'center'}}>
        Order Id</DataTable.Title>
  </DataTable.Header>

  <DataTable.Row>
       <DataTable.Cell style={{ alignItems: 'center', alignContent: 'center', justifyContent:'center'}}>Test
        </DataTable.Cell>
        <DataTable.Cell style={{ alignItems: 'center', alignContent: 'center', justifyContent:'center'}}>Test
        </DataTable.Cell>
          <DataTable.Cell style={{ alignItems: 'center', alignContent: 'center', justifyContent:'center'}}>Test
        </DataTable.Cell>
        <DataTable.Cell style={{ alignItems: 'center', alignContent: 'center'
        , justifyContent:'center'}}>Test
        </DataTable.Cell>
  </DataTable.Row>   
</DataTable>
</View>
</SafeAreaView>
);
}
const styles = StyleSheet.create({
 
})