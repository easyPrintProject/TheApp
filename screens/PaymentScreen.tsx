import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native'; //
//import { PaymentView } from '../components/PaymentView';
import axios from 'axios';
import { StackScreenProps } from '@react-navigation/stack';
import { OrderParamList} from '../types';
import { StatusBar } from 'expo-status-bar';
import { PaymentView } from '../PaymentView'



export default function PaymentScreen({ navigation }: StackScreenProps<OrderParamList>,) {
  const [response, setResponse ] = useState()
    
  const [ makePayment, setMakePayment ] = useState(false)
  const [paymentStatus, setPaymentStatus] = useState('')

  const cartInfo = {
      id: '5eruyt35eggr76476236523t3',
      description: 'lab-sheet5',
      amount: 1
  }

  const onCheckStatus = async (paymentResponse: any | React.SetStateAction<undefined>) => {
      setPaymentStatus('الرجاء الإنتظار')
      setResponse(paymentResponse)

      let jsonResponse = JSON.parse(paymentResponse);
      // perform operation to check payment status

      try {
  
          const stripeResponse = await axios.post('http://localhost:8000/payment', {
              email: 'test@gmail.com',
              product: cartInfo,
              authToken: jsonResponse
          })

          if(stripeResponse){

              const { paid } = stripeResponse.data;
              if(paid === true){
                  setPaymentStatus('نجحت عملية الشراء')
              }else{
                  setPaymentStatus('فشلت عملية الشراء')
              }

          }else{
              setPaymentStatus(' فشلت عملية الشراء')
          }

          
      } catch (error) {
          
          console.log(error)
          setPaymentStatus(' فشلت عملية الشراء')

      }

  }


  const paymentUI = () => {

      if(!makePayment){

          return <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: 300, marginTop: 50}}>
                  <Text style={{ fontSize: 25, margin: 10}}> اكمال الشراء </Text>
                  <Text style={{ fontSize: 16, margin: 10}}> وصف المنتج: {cartInfo.description} </Text>
                  <Text style={{ fontSize: 16, margin: 10}}> الكمية: {cartInfo.amount} </Text>

                  <TouchableOpacity style={{ height: 60, width: 300, backgroundColor: '#3D097F', borderRadius: 30, justifyContent: 'center', alignItems: 'center'
                      }}
                      onPress={() => {
                          setMakePayment(true)
                      }}
                      >
                      <Text style={{ color: '#FFF', fontSize: 20}}>
                          استخدام البطاقة الائتمانية
                      </Text>

                  </TouchableOpacity>
                  <TouchableOpacity style={{ height: 60, width: 300, backgroundColor: 'black', borderRadius: 30, justifyContent: 'center', alignItems: 'center', marginTop: 20,
                      }}
                      onPress={() => {
                      }}
                      >
                      <Text style={{ color: '#FFF', fontSize: 20}}>
                          Apple Pay
                      </Text>

                  </TouchableOpacity>
                  <TouchableOpacity style={{ height: 60, width: 300, backgroundColor: '#FF5733', borderRadius: 30, justifyContent: 'center', alignItems: 'center', marginTop: 20,
                      }}
                      onPress={() => {
                      }}
                      >
                      <Text style={{ color: '#FFF', fontSize: 20}}>
                          Google Pay
                      </Text>

                  </TouchableOpacity>
                  <TouchableOpacity style={{ height: 60, width: 300, backgroundColor: 'white', borderRadius: 30, justifyContent: 'center', alignItems: 'center', marginTop: 5,
                      }}
                      onPress={() => {
                      }}
                      >
                      <Text style={{ color: 'black', fontSize: 20}}>
                         أو الدفع عند الاستلام
                      </Text>

                  </TouchableOpacity>
              </View>


           
          // show to make payment
      }else{

          if(response !== undefined){
              return <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: 300, marginTop: 50}}>
                  <Text style={{ fontSize: 25, margin: 10}}> { paymentStatus} </Text>
                  <Text style={{ fontSize: 16, margin: 10}}> { response} </Text>
              </View>

          }else{
              return <PaymentView onCheckStatus={onCheckStatus} product={cartInfo.description} amount={cartInfo.amount} />

          }
          
      }

  }


return (<View style={styles.container}>
          {paymentUI()}
      </View>)}


const styles = StyleSheet.create({
container: { flex: 1, 
  backgroundColor:'white',
  paddingTop: 100
},
navigation: { 
  flex: 2,
   backgroundColor: 'red' },
  body: { 
  flex: 10,
   justifyContent: 'center', 
   alignItems: 'center', 
   backgroundColor: 'yellow' },
footer: { 
  flex: 1, 
  backgroundColor: 'cyan' }
})

export { PaymentScreen }