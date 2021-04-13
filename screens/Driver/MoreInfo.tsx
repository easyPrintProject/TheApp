import { Ionicons } from '@expo/vector-icons';
import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image, SafeAreaView, StatusBar } from 'react-native';
import { Card } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { useGlobalState } from '../../components/StateProvider';
import { driverStack } from '../../types';

export default function MoreInfo({ navigation }: StackScreenProps<driverStack>) {
  const Back = () => {
    navigation.goBack();
  };

  const [errorMassage, setErrorMassage] = useState("");
  const {state ,setState } = useGlobalState();

  type Status = {

    id: string,
    itemId: string,
    orderStatusId: string,
    orderStatus: string,
    deliveryStatusId: string,
    deliveryStatus: string,
    orderDate: string,
    customerId: string,
    customerName: string,
    total: string,
  }
  const [status, setStatus] = useState([{
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


  const ChangeStatus = () => {
    try {
      fetch
        ('https://apieasyprint20210215153907.azurewebsites.net/api/UpdateSatusDriver/8DCD06B5-F977-418D-E671-08D8FCABF311' + state.orderId, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
          })
        }).then((response) => response.json())
        .then((response) => {
          response.forEach((c: Status) => {
            setStatus(status =>
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
  }





  return (
    <ScrollView style={{ backgroundColor: 'white' , flex:1, }}>
      <SafeAreaView style={{ backgroundColor: 'white', flex: 1, }}>
        <StatusBar backgroundColor="#009387" barStyle="dark-content" />

        <Text style={{
          fontSize: 25, textAlign: 'center', marginTop: 30, justifyContent: 'center',
          backgroundColor: '#009387', paddingTop: 23, height: 80, color: 'white',
          alignContent: 'center', fontWeight: 'bold'
        }}> معلومات عنوان العميل</Text>
        <View style={styles.icon}>
          <Ionicons name="chevron-back" size={24} color="white" onPress={() => Back()} />
        </View>

        <View style={{ marginTop: 50 }} >
          <Card>
            <View >
              <Text style={{ margin: 5, textAlign: 'right', fontWeight: "bold" }}>اسم المستلم: </Text>
              <Text style={{ margin: 5, textAlign: 'right', fontWeight: "bold" }}>رقم الجوال: </Text>
              <Text style={{ margin: 5, textAlign: 'right', fontWeight: "bold" }}>المدينة:</Text>
              <Text style={{ margin: 5, textAlign: 'right', fontWeight: "bold" }}>الحي:</Text>
              <Text style={{ margin: 5, textAlign: 'right', fontWeight: "bold" }}>الشارع:</Text>
              <Text style={{ margin: 5, textAlign: 'right', fontWeight: "bold" }}>الرمز البريدي:</Text>
              <Text style={{ margin: 5, textAlign: 'right', fontWeight: "bold" }}>وصف:</Text>



              <View style={styles.button}>
                <TouchableOpacity onPress={() => ChangeStatus()}>
                  <Text style={styles.text}>تغيير حالة الطلب لتم التوصيل</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Card>


        </View>
      </SafeAreaView>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    marginTop: -100,
    fontSize: 30,

  },
  text2: {
    marginRight: -120,
    marginTop: 14,
    textAlign: 'right',
    alignContent: 'center',
    alignItems: 'center',
    fontSize: 15,


  },
  button: {
    alignItems: 'center',
    borderColor: 'green',
    borderWidth: 1,
    marginTop: 30,
    borderRadius: 10,
    height: 40,
    width: 200,
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  text: {
    fontSize: 14,
    color: "green",
    textAlign: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  icon: {
    marginRight: "90%",
    paddingLeft: 25,
    marginTop: -51,
  },
});