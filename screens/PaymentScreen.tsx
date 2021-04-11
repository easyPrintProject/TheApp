import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native'; //
//import { PaymentView } from '../components/PaymentView';
import axios from 'axios';
import { StackScreenProps } from '@react-navigation/stack';
import { BasketParamList} from '../types';
import { StatusBar } from 'expo-status-bar';
import { PaymentView } from '../PaymentView'



export default function PaymentScreen({ navigation }: StackScreenProps<BasketParamList>,) {
  const [response, setResponse ] = useState()
    
  const [ makePayment, setMakePayment ] = useState(false)
  const [paymentStatus, setPaymentStatus] = useState('')

  const cartInfo = {
    itemId: "",
    itemPrice: 0,
    printingShopID: "",
    courseID: "",
    courseName: ""
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

                  <TouchableOpacity style={{ height: 50, width: 250, backgroundColor: '#3D097F', borderRadius: 30, justifyContent: 'center', alignItems: 'center'
                      }}
                      onPress={() => {
                          setMakePayment(true)
                      }}
                      >
                      <Text style={{ color: '#FFF', fontSize: 15}}>
                          استخدام البطاقة الائتمانية
                      </Text>

                  </TouchableOpacity>
                  <TouchableOpacity style={{ height: 50, width: 250, backgroundColor: 'black', borderRadius: 30, justifyContent: 'center', alignItems: 'center', marginTop: 10,
                      }}
                      onPress={() => {
                      }}
                      >
                      <Text style={{ color: '#FFF', fontSize: 15}}>
                          Apple Pay
                      </Text>

                  </TouchableOpacity>
                  <TouchableOpacity style={{ height: 50, width: 250, backgroundColor: '#FF5733', borderRadius: 30, justifyContent: 'center', alignItems: 'center', marginTop: 10,
                      }}
                      onPress={() => {
                      }}
                      >
                      <Text style={{ color: '#FFF', fontSize: 15}}>
                          Google Pay
                      </Text>

                  </TouchableOpacity>
                  <TouchableOpacity style={{ height: 30, width: 300, backgroundColor: 'white', borderRadius: 30, justifyContent: 'center', alignItems: 'center', marginTop: 5,
                      }}
                      onPress={() => {
                      }}
                      >
                      <Text style={{ color: 'black', fontSize: 17}}>
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
              return <PaymentView onCheckStatus={onCheckStatus} product={cartInfo.courseName} amount={cartInfo.itemPrice} />

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