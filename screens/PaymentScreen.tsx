import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native'; //
//import { PaymentView } from '../components/PaymentView';
import axios from 'axios';
import { StackScreenProps } from '@react-navigation/stack';
import { OrderParamList} from '../types';



export default function PaymentScreen({ navigation }: StackScreenProps<OrderParamList>,) {
  const [response, setResponse] = useState();
  const [makePayment, setMakePayment] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState('');

  const basketInfo = { //from the basketScreen
    description: 'Lab5 sheet.doc', //for example
    amount: 1,
  };

  const onCheckStatus = async (paymentResponse: any) => {
   // setPaymentStatus('waiting for payment confrmation');
    setResponse(paymentResponse);

   // let jsonResponse = JSON.parse(paymentResponse);

    try {
      const stripeResponse = await axios.post('http://localhost:8000/payment', {
        email: 'test@gmail.com',
        product: basketInfo,
        //authToken: jsonResponse,
      });

      if (stripeResponse) {
        const { paid } = stripeResponse.data;
        if (paid === true) {
          setPaymentStatus('تم الشراء بنجاح');
        } else {
          setPaymentStatus('فشلت عملية الشراء');
        }
      }      
    } catch (error) {
      console.log(error);
      setPaymentStatus(' فشلت عملية الشراء');
    }
  };

  const payment = () => {
    if (!makePayment) {
      return (
        <ScrollView>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: 300,
            marginTop: 50,
          }}>
          <Text style={{ fontSize: 25, margin: 10 }}>  اكمال الشراء </Text>
          <Text style={{ fontSize: 16, margin: 10 }}>
            {' '}
            اسم الملف: {basketInfo.description}
          </Text>

          <TouchableOpacity
            style={{
              height: 60,
              width: 300,
              backgroundColor: '#5b93c8',//
              borderRadius: 30,
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 10,
            }}
            onPress={() => {
              setMakePayment(true);
            }}>
            <Text style={{ color: '#FFF', fontSize: 16 }}> الدفع بالبطاقة الائتمانية</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              height: 60,
              width: 300,
              backgroundColor: 'black',
              borderRadius: 30,
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 10,

            }}
            onPress={() => {
              setMakePayment(true);
            }}>
            <Text style={{ color: '#FFF', fontSize: 20 }}>Apple Pay</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              height: 60,
              width: 300,
              backgroundColor: '#FF5733',
              borderRadius: 30,
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 10,

            }}
            onPress={() => {
              setMakePayment(true);
            }}>
            <Text style={{ color: '#FFF', fontSize: 20 }}>Google Pay</Text>
          </TouchableOpacity>
        </View></ScrollView>

      );

      // show to make payment
    } else {
      if (response !== undefined) {
        return (
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height: 300,
              marginTop: 50,
            }}>
            <Text style={{ fontSize: 25, margin: 10 }}> {paymentStatus} </Text>
            <Text style={{ fontSize: 16, margin: 10 }}> {response} </Text>
          </View>
        );
      }}
  };

  return <View style={styles.container}>{payment()}</View>;
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 200 },
  
});
