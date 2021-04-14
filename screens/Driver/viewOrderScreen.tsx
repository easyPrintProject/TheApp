import React, { useState } from 'react'
import { Button, Pressable, StyleSheet, Text, View ,
  Image, StatusBar,  TouchableOpacity, SafeAreaView} from 'react-native'
import {AntDesign, FontAwesome5, Ionicons, MaterialCommunityIcons} from '@expo/vector-icons'
import { ScrollView } from 'react-native-gesture-handler';
import { StackScreenProps } from '@react-navigation/stack';
import { driverStack } from '../../types';
import { DataTable } from 'react-native-paper';
import { Card } from 'react-native-elements';
import { useGlobalState } from '../../components/StateProvider';

export default function OrderScreen({navigation}: StackScreenProps<driverStack>) {
  const GoToMoreInfo = () => {
    navigation.navigate("MoreInfo");
  }; 
  const [errorMassage, setErrorMassage] = useState("");
  
 // the opject for the doc loop
 const [Allorder, setOrder] = useState({
  customerPhome: "",
  customerEmail: "",
  orderId: "",
  total: 0,
  city: "",
  neighborhood: "",
  street: "",
  adressLine: "",
  deleveryStatusNumber: 0,
  deleveryStatus: ""
 });

// our glopal state :)
const {state ,setState } = useGlobalState();

// type for the order loop 
type order = {
  customerPhome: string,
  customerEmail: string,
  orderId: string,
  total: number,
  city: string,
  neighborhood:string,
  street: string,
  adressLine: string,
  deleveryStatusNumber: number,
  deleveryStatus: string
};
const ChangeStatus = (e:string) => {
  try {
    fetch
      ('https://apieasyprint20210215153907.azurewebsites.net/api/UpdateSatusDriver/' +e, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      }).then((response) => response.json())
      .then((response) => {
       console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (error) {
    console.log('حدث خطأ! ', error)
  }
}




//useEffict call the api 
React.useEffect(() => {

try {
fetch('https://apieasyprint20210215153907.azurewebsites.net/api/DriverOrders/a40756b0-a9a9-4079-8495-d44e45b05f5b', {
method: 'GET',
headers: {
Accept: 'application/json',
'Content-Type': 'application/json'
}
}).then((response) => response.json())
.then((response:order) => {
setOrder({
  customerPhome: response.customerPhome,
  customerEmail: response.customerEmail,
  orderId: response.orderId,
  total: response.total,
  city: response.city,
  neighborhood: response.neighborhood,
  street: response.street,
  adressLine: response.adressLine,
  deleveryStatusNumber: response.deleveryStatusNumber,
  deleveryStatus: response.deleveryStatus
})
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
    <SafeAreaView  style={{ backgroundColor: 'white' , flex:1, }}>
       <StatusBar backgroundColor="#009387" barStyle="dark-content" />
    <Text style={{ fontSize: 25, textAlign:'center', marginTop:30,justifyContent:'center', 
    backgroundColor: '#009387', paddingTop:23 ,height: 80, color: 'white',
     alignContent: 'center', fontWeight: 'bold'}}> معلومات الطلب  </Text>
      <View>
       
        
      <View style={{marginTop: 60}} >
        <Card>
           <View >
              <Text style={{ margin:5, textAlign:'right' , fontWeight:"bold"}}>رمز الطلب: {Allorder.orderId}</Text>
              <Text style={{ margin:5, textAlign:'right', fontWeight:"bold"}}>حالة التوصيل: {Allorder.deleveryStatus}</Text>
              <Text style={{ margin:5, textAlign:'right', fontWeight:"bold"}}>السعر:{Allorder.total}</Text>
              <Text style={{ margin: 5, textAlign: 'right', fontWeight: "bold" }}>ايميل المستلم: {Allorder.customerEmail} </Text>
                  <Text style={{ margin: 5, textAlign: 'right', fontWeight: "bold" }}>رقم الجوال:{Allorder.customerPhome} </Text>
                  <Text style={{ margin: 5, textAlign: 'right', fontWeight: "bold" }}>المدينة:{Allorder.city}</Text>
                  <Text style={{ margin: 5, textAlign: 'right', fontWeight: "bold" }}>الحي:{Allorder.neighborhood}</Text>
                  <Text style={{ margin: 5, textAlign: 'right', fontWeight: "bold" }}>الشارع:{Allorder.street}</Text>
                  <Text style={{ margin: 5, textAlign: 'right', fontWeight: "bold" }}>وصف:{Allorder.adressLine}</Text>
       
        </View>
        <View style={styles.button}>
                <TouchableOpacity  onPress={() => ChangeStatus(Allorder.orderId)}>
                  <Text >تغيير حالة الطلب لتم التوصيل</Text>
                </TouchableOpacity>
              </View>
        </Card>
      </View>    
      
      </View>

       
</SafeAreaView>
</ScrollView>
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
    width: 200,
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
