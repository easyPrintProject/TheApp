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

   

 // the opject for the doc loop
 const [orderLists, setOrderList] = useState([{
  id: "",
  customerPhome: "",
  customerEmail: "",
  address : {
             userId: "",
             country: "",
             city: " ",
             neighborhood: "",
             street: "",
             adressLine: "",
             postcode: "",
             latitude: 0,
             longitude: 0,
             latitudeDelta: 0,
             longitudeDelta: 0
            },
   itemId: "",
   orderStatusId: 2,
   items: [],
    orderStatus: "",
    deliveryStatusId: 0,
    deliveryStatus: "",
    orderDate: "",
    customerId: "",
    customerName: "",
    total: 0 }]);

// our glopal state :)
const {state ,setState } = useGlobalState();

// type for the order loop 
type order = {
id: string
customerPhome: string,
customerEmail: string,
address : {
userId: string,
country: string
city:string,
neighborhood: string,
street:string,
adressLine: string,
postcode: string,
latitude: number,
longitude: number,
latitudeDelta: number,
longitudeDelta: number
},
itemId: string,
orderStatusId: 2,
items: [
{
itemID: string,
itemPrice: number,
docID: string,
courseID: string,
title: string,
description: string,
isService: string,
isProduct: string
}
],
orderStatus: string,
deliveryStatusId: number,
deliveryStatus: string,
orderDate: string,
customerId: string,
customerName: string,
total: number 
};





//useEffict call the api 
React.useEffect(() => {

try {
fetch('https://apieasyprint20210215153907.azurewebsites.net/api/PrinterOrder/a40756b0-a9a9-4079-8495-d44e45b05f5b', {
method: 'GET',
headers: {
Accept: 'application/json',
'Content-Type': 'application/json'
}
}).then((response) => response.json())
.then((response) => {
response.forEach( (p:order) => {
setOrderList( orders =>
[...orders,
{
id:orders.id,
customerPhome: orders.customerName,
customerEmail: orders.customerName,
address : {
userId: orders.address.userId,
country: orders.address.country,
city: orders.address.city,
neighborhood: orders.address.neighborhood,
street: orders.address.street,
adressLine: orders.address.adressLine,
postcode: orders.address.postcode,
latitude: orders.address.latitude,
longitude: orders.address.longitude,
latitudeDelta: orders.address.latitudeDelta,
longitudeDelta: orders.address.longitudeDelta
},
itemId: orders.itemId,
orderStatusId: orders.orderStatusId,
items: [],
orderStatus: orders.orderStatus,
deliveryStatusId: orders.orderStatusId,
deliveryStatus: orders.deliveryStatus,
orderDate: orders.orderDate,
customerId: orders.customerId,
customerName: orders.customerName,
total: orders.total,
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


const checkOrders =(e:order)=>{
  if(e.deliveryStatusId==4)
  return{
    

  }
  else
  return{

  }

}
  
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
