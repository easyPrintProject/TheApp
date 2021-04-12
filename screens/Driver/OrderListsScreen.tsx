import * as React from 'react';
import { DataTable } from 'react-native-paper';
import {Button, View, StyleSheet,Text, TouchableOpacity, SafeAreaView} from 'react-native';
import {  StackScreenProps } from '@react-navigation/stack';
import { driverStack} from '../../types';
import  {  useState, useEffect } from 'react';
import { useGlobalState } from '../../components/StateProvider';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ViewOrderDriverParamList} from '../../types'


export default function OrderListsScreen({navigation }: StackScreenProps<ViewOrderDriverParamList>) {

  const {state ,setState } = useGlobalState(); 
  const [orderLists, setOrderList] = useState({ courceMaterialId:"",
    courceMaterialTitle:"",
    courceMaterialDescreption:"",
    courceMaterialPrice: "",
    isAvailable: true,
    subjectId:"" ,
    printingShopId:"", });
 
    const   GoToDatailes  = () => {

      navigation.navigate('OrderDetails');
    }
    
 
  const [errorMassage, setErrorMassage] = useState("");


  useEffect(() => {
        
    if (orderLists.printingShopId == null || orderLists.printingShopId == "" ) {
      setErrorMassage("404");
     
    } else {
      //empty the error message
      setErrorMassage("");
      setState({
        courceMaterialId: orderLists.courceMaterialId,
        courceMaterialTitle:orderLists.courceMaterialId,
        courceMaterialDescreption:orderLists.courceMaterialId ,
        courceMaterialPrice: orderLists.courceMaterialId,
        isAvailable: orderLists.isAvailable,
        subjectId:orderLists.courceMaterialId ,
        printingShopId: orderLists.courceMaterialId,
      })
  
    }
}, [orderLists]);

const OederList = async () => {
  try {
    fetch('https://apieasyprint20210215153907.azurewebsites.net/api/CourceMaterial/a40756b0-a9a9-4079-8495-d44e45b05f5b', {
     method: 'GET',
     headers: {
     Accept: 'application/json',
      'Content-Type': 'application/json'
    },

   }).then((response) => response.json())
   .then((response) => {
   setOrderList({

    courceMaterialId: response.courceMaterialId,
    courceMaterialTitle: response.courceMaterialId,
    courceMaterialDescreption:response.courceMaterialId ,
    courceMaterialPrice: response.courceMaterialId,
    isAvailable:response.isAvailable ,
    subjectId:response.courceMaterialId ,
    printingShopId: response.courceMaterialId, 
  });

   })
   .catch((error) => {
    console.error(error);
  });
  } catch (error) {
    console.log('حدث خطأ! ', error)
  }
  
}




  
    return (
      <SafeAreaView  style={{ backgroundColor: 'white' , flex:1}}>
        {OederList()}
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
            <TouchableOpacity onPress={() => alert("test")}>
             <Text style={styles.text}>المزيد</Text> 
            </TouchableOpacity>
      </View>
            </View>
          </DataTable.Cell>
          <DataTable.Cell style={{ alignItems: 'center', alignContent: 'center'}}>Test</DataTable.Cell>
          <DataTable.Cell style={{ alignItems: 'center', alignContent: 'center'}}>{state.orderId}</DataTable.Cell>
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
