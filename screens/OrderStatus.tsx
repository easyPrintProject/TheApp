import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react'
import { Button, Pressable, StyleSheet, Text, View ,Image, StatusBar,  TouchableOpacity, SafeAreaView} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

import {  DataTable } from 'react-native-paper';
import { useGlobalState } from '../components/StateProvider';
import { AccountParamList } from '../types';
import { Card } from 'react-native-elements';
import { DrawerActions } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function OrderScreen({ navigation }: StackScreenProps<AccountParamList>) {

  const GoToAccount = () => {
    navigation.navigate("AccountScreen");
}
  const [errorMassage, setErrorMassage] = useState("");
  const {state ,setState } = useGlobalState();
 

  type Status ={

    id: string,
    itemId: string,
    orderStatusId: string,
    orderStatus: string,
    deliveryStatusId: string,
    deliveryStatus: string,
    orderDate: string,
    customerId: string,
    customerName:string,
    total: string,
  }
  const [ status ,setStatus ] = useState([{
    id: '',
    itemId: '',
    orderStatusId: '',
    orderStatus: '',
    deliveryStatusId: '',
    deliveryStatus: '',
    orderDate: '',
    customerId: '',
    customerName: '',
    total: '',
  }])

  React.useEffect(() => {
    try {
      fetch
      ('https://apieasyprint20210215153907.azurewebsites.net/api/CustomerOrder/D79ED146-18A1-4E60-8242-911C56996106'+state.Id, {
       method: 'GET',
       headers: {
       Accept: 'application/json',
        'Content-Type': 'application/json'
      },
       body: JSON.stringify({
        })
     }).then((response) => response.json())
     .then((response) => {
      response.forEach( (c:Status) => {
        setStatus( status =>
          [...status,
            {
              
              id: '',
              itemId: '',
              orderStatusId: '',
              orderStatus: '',
              deliveryStatusId: '',
              deliveryStatus: '',
              orderDate: '',
              customerId: '',
              customerName: '',
              total: '',
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
  
// bottom to top الترتيب
// bottom to top الترتيب
// bottom to top الترتيب

  return (
    <ScrollView style={{ backgroundColor: 'white' , flex:1, }}>
    <SafeAreaView >
            <StatusBar backgroundColor="#009387" barStyle="dark-content" />
    <Text style={{ fontSize: 25, textAlign:'center', marginTop:30,justifyContent:'center', 
    backgroundColor: '#49c3c6', paddingTop:20 ,height: 80, color: 'white',
     alignContent: 'center', fontWeight: 'bold'}}> قائمة الطلبات</Text>
      <View style={styles.icon}>
                <Ionicons name="chevron-back" size={24} color="white" onPress={() => GoToAccount()} />
            </View>
            <View style={styles.icon2}>
                <Ionicons name="menu-outline" size={24} color= 'white'  
                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}></Ionicons></View>

  
    <View style={{marginTop: 60}} >
         <Card>
            <View >
               <Text style={{ margin:5, textAlign:'right' , fontWeight:"bold"}}>رمز الطلب: {state.orderId}</Text>
               <Text style={{ margin:5, textAlign:'right', fontWeight:"bold"}}>حالة التوصيل: {state.deliveryStatus}</Text>
               <Text style={{ margin:5, textAlign:'right', fontWeight:"bold"}}>حالة الطلب:{state.orderSatus}</Text>
               <Text style={{ margin:5, textAlign:'right', fontWeight:"bold", marginBottom: 15}}>السعر: {state.orderTotal} ريال</Text>
            </View>
         </Card>
       </View>       

</SafeAreaView>
</ScrollView>

);
}
const styles = StyleSheet.create({
  text2:{
    marginRight: -120,
   marginTop:14,
   textAlign: 'right',
   alignContent: 'center',
   alignItems: 'center',
   fontSize: 15,
   justifyContent:'center'

 },
 text3:{
  marginRight: -120,
 marginTop:14,
 textAlign: 'right',
 alignContent: 'center',
 alignItems: 'center',
 fontSize: 16,
 fontWeight: 'bold',
 justifyContent: 'center'
 

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
})