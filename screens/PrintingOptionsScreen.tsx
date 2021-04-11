import * as React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  ScrollView,
  StatusBar,
  Button,
  KeyboardAvoidingView,
  Pressable,
  Modal,
} from 'react-native';
import { useGlobalState } from '../components/StateProvider';
import { Card } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import { useState, useEffect } from 'react';
import { SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { OrderParamList } from '../types';


const data = [
  {
    id: 'A0، ',
    name: 'A0',
    price: '1',
  },
  {
    id: 'A1، ',
    name: 'A1',
    price: '1',
  },
  {
    id: 'A2، ',
    name: 'A2',
    price: '2',
  },
  {
    id: 'A3، ',
    name: 'A3',
    price: '0,75',
  },
  {
    id: 'A4، ',
    name: 'A4',
    price: '4',
  },
  {
    id: 'A5، ',
    name: 'A5',
    price: '0,50',
  },
];
const data2 = [
  {
    id: 'عادي، ',
    name: 'عادي',
    price: '0,50',
  },
  {
    id: 'لماع، ',
    name: 'لماع',
    price: '1,5',
  },
  {
    id: 'مقوى، ',
    name: 'مقوى',
    price: '2',
  },
  {
    id: 'مُستخدم، ',
    name: 'مُستخدم ',
    price: '0,5',
  },
];
const data3 = [
  {
    id: 'أبيض & أسود، ',
    name: 'أبيض & أسود',
    price: '0,5',
  },
  {
    id: 'ملون، ',
    name: 'ملون',
    price: '1,50',
  },
];
const data4 = [
  {
    id: 'وجه، ',
    name: 'وجه',
    price: '1',
  },
  {
    id: 'وجهين، ',
    name: 'وجهين',
    price: '0,5',
  },
];

function PrintingOptionsScreen({ navigation }: StackScreenProps<OrderParamList>) {
  const [state2, setState2] = useState({ price: 0, checked: [] });
  const [test, setTest] = useState({

    price: 0,
    checked: ""
  })
  const { price, checked } = state2;
  const { state, setState } = useGlobalState();

  console.log(state2);
  {/*const GoToTimeDelivery = () => {
    navigation.navigate("DeliveryTimeScreen");
  }; */}


  React.useEffect(() => {

    if(state.orderId==null || state.orderId==""){
    try {
      fetch('https://apieasyprint20210215153907.azurewebsites.net/api/order', {
       method: 'POST',
       headers: {
       Accept: 'application/json',
        'Content-Type': 'application/json'
      },
       body: JSON.stringify({
        orderId:"",
        isCourceMaterial: false,
        isPrintingOrder: true,
        totalPriceOfTheItem:price,
        courseId:"00000000-0000-0000-0000-000000000000",
        docId:"00000000-0000-0000-0000-000000000000", //defulte for the matireals orders
        printingShopId:state.printerId,
        customerId:state.Id,
        description: checked.toString(),
        })
     }).then((response) => response.json())
     .then((response: resulte) => {
      setState({
        ...state,
        //order and basket items data
        orderId :response.orderId,
        orderSatus:"حقيبة التسوق فارغة",
        orderTotal: 0
      });
     })
     .catch((error) => {
      console.error(error);
    });
    } catch (error) {
      console.log('حدث خطأ! ', error)
    }
  }
   }, [state])



    // for showing or hidding the popup
    const [modalVisible, setModalVisible] = useState(false);
     
    // type for the order opject 
    type resulte = {
      orderId: string,
      errorMassage: string,
      itemId: string,
      itemPrice:number,
      printingShopID: string
     }

    // fuction that reate new oreder item, and set the model visible.
    const AddToBasketHandeler = () => {
      //then call the API to create an Item 

      try {
        fetch('https://apieasyprint20210215153907.azurewebsites.net/api/items', {
         method: 'POST',
         headers: {
         Accept: 'application/json',
          'Content-Type': 'application/json'
        },
         body: JSON.stringify({
          orderId:state.orderId,
          isCourceMaterial: false,
          isPrintingOrder: true,
          totalPriceOfTheItem:price,
          courseId:"00000000-0000-0000-0000-000000000000",
          docId:"00000000-0000-0000-0000-000000000000", //defulte for the matireals orders
          printingShopId:state.printerId,
          customerId:state.Id,
          description: checked.toString(),
          })
       }).then((response) => response.json())
       .then((response:resulte) => {
        setState({
          ...state,
         //order and basket items data
        orderSatus:" لم يتم تاكيد الطلب بعد",
        orderTotal: (state.orderTotal || 0 )+ response.itemPrice
        })
       })
       .catch((error) => {
        console.error(error);
      });
      } catch (error) {
        console.log('حدث خطأ! ', error)
      }

      //set the model visible 
      setModalVisible(true);
    }


    // delete doc Info from globale state and go back to doc list
    const GoToOrderScreen = () => {
      setModalVisible(!modalVisible);
      setState({
        ...state,
        MaterialId:"",
        courceMaterialTitle:"",
        courceMaterialDescreption:"",
        courceMaterialPrice:0,
        isAvailable:false,
        subjectId:""
      });
      navigation.push("OrderScreen");
    };


        // delete doc Info from globale state and go to basket
        const GoToBAsketList = () => {
          setModalVisible(!modalVisible);
          setState({
            ...state,
            MaterialId:"",
            courceMaterialTitle:"",
            courceMaterialDescreption:"",
            courceMaterialPrice:0,
            isAvailable:false,
            subjectId:""
          });
          navigation.push("BasketScreen");
        };

        const CheckUser = () => {
          if ( state.Email==null) {
            return(<View>
              <Text style = {{ color:"tomato", textAlign:"center"}}> لايمكنك الاضافة للسلة بدون تسجيل الدخول </Text>
             </View>);           
          } else {
            return(<View > 
              <Button title="الاضافة إلى السلة" color='black' onPress={() => AddToBasketHandeler()}/></View>); 
          }  
        }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => { setModalVisible(!modalVisible); }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>تمت اضافة المنتج بنجاح  {state.orderId} </Text>
            <Pressable style={[styles.button2, styles.buttonClose]} onPress={() => GoToOrderScreen()}>
              <Text style={styles.textStyle}>متابعة التسوق </Text>
            </Pressable>
            <Pressable style={[styles.button2, styles.buttonClose]} onPress={() => GoToBAsketList()}>
              <Text style={styles.textStyle}>الذهاب للسلة</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View style={styles.header}>
        <Text style={styles.text_header}>خصائص الطباعة</Text>
      </View>
      <KeyboardAvoidingView behavior="position">
        <Animatable.View animation="fadeInUpBig" style={styles.footer}>
          <ScrollView>
            <Text style={styles.text_footer}>حجم الورق:</Text>
            <View style={styles.action}>
              <Animatable.View animation="bounceIn"></Animatable.View>
            </View>

            <FlatList
              numColumns={3}
              data={data}
              keyExtractor={(val) => `invoice_${val.id}`}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.buttonStyle}
                  onPress={() => {
                    console.log(state2);
                    if (checked.findIndex((id) => item.id === id) >= 0) {
                      setState2({
                        price: price - parseFloat(item.price),
                        checked: checked.filter((id) => id !== item.id),
                      });
                      setTest({
                        price :test.price+( price - parseFloat(item.price)),
                        checked: " "+ (checked.filter((id) => id !== item.id).name) +" ",

                      })
                    } else {
                      setState2({
                        price: price + parseFloat(item.price),
                        checked: [...checked, item.id] as any,
                      });
                    }
                  }}>
                  <View
                    style={
                      checked.findIndex((id) => item.id === id) >= 0
                        ? styles.checked
                        : styles.unchecked
                    }
                  />
                  <Text style={styles.text}>{item.name}</Text>
                </TouchableOpacity>
              )}
              extraData={checked}
            />

            <Text
              style={[
                styles.text_footer,
                {
                  marginTop: 35,
                },
              ]}>
              نوع الورق:            </Text>
            <View style={styles.action}>
            </View>
            <FlatList numColumns={2}
              data={data2}
              keyExtractor={val => `invoice_${val.id}`}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.buttonStyle}
                  onPress={() => {
                    console.log(state2);
                    if (checked.findIndex(id => item.id === id) >= 0) {
                      setState2({
                        price: price - parseFloat(item.price),
                        checked: checked.filter(id => id !== item.id),
                      });
                    } else {
                      setState2({
                        price: price + parseFloat(item.price),
                        checked: [...checked, item.id] as any,
                      });
                    }
                  }}
                >
                  <View
                    style={checked.findIndex(id => item.id === id) >= 0
                      ? styles.checked
                      : styles.unchecked} />
                  <Text style={styles.text}>{item.name}</Text>
                </TouchableOpacity>
              )}
              extraData={checked} />






            <Text
              style={[
                styles.text_footer,
                {
                  marginTop: 35,
                },
              ]}>
              لون الطباعة:            </Text>
            <View style={styles.action}>
            </View>
            <FlatList data={data3} numColumns={2}
              //horizontal={true}
              keyExtractor={val => `invoice_${val.id}`}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.buttonStyle}
                  onPress={() => {
                    console.log(state2);
                    if (checked.findIndex(id => item.id === id) >= 0) {
                      setState2({
                        price: price - parseFloat(item.price),
                        checked: checked.filter(id => id !== item.id),
                      });
                    } else {
                      setState2({
                        price: price + parseFloat(item.price),
                        checked: [...checked, item.id] as any,
                      });
                    }
                  }}
                >
                  <View
                    style={checked.findIndex(id => item.id === id) >= 0
                      ? styles.checked
                      : styles.unchecked} />
                  <Text style={styles.text}>{item.name}</Text>
                </TouchableOpacity>
              )}
              extraData={checked} />







            <Text
              style={[
                styles.text_footer,
                {
                  marginTop: 35,
                },
              ]}>
              نوع الطباعة:
            </Text>
            <View style={styles.action}>
            </View>
            <FlatList numColumns={2}
              data={data4}

              keyExtractor={val => `invoice_${val.id}`}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.buttonStyle}
                  onPress={() => {
                    console.log(state2);
                    if (checked.findIndex(id => item.id === id) >= 0) {
                      setState2({
                        price: price - parseFloat(item.price),
                        checked: checked.filter(id => id !== item.id),
                      });
                    } else {
                      setState2({
                        price: price + parseFloat(item.price),
                        checked: [...checked, item.id] as any,
                      });
                    }
                  }}
                >
                  <View
                    style={checked.findIndex(id => item.id === id) >= 0
                      ? styles.checked
                      : styles.unchecked} />
                  <Text style={styles.text}>{item.name}</Text>
                </TouchableOpacity>
              )}
              extraData={checked} />


            <Text style={styles.DStyle}>وصف الاختيارات: {checked}</Text>
            <Text style={styles.DStyle}>السعر: {price}SR</Text>



            <Card>
              {CheckUser()}
            </Card>



          </ScrollView>
        </Animatable.View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#49c3c6',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    marginBottom: -10
  },
  text_footer: {
    color: '#05375a',
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'flex-end',
    textAlign: 'right',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },

  DStyle: {
    alignItems: 'center',
    textAlign: 'center',

    marginTop: 15,
    borderRadius: 15,
    color: '#05375a',
    fontSize: 17,
    fontWeight: 'bold'

  },

  buttonStyle: {
    flexDirection: 'row-reverse',
    paddingLeft: 20,
    alignItems: 'center',
    paddingRight: 50,
  },

  checked: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    alignItems: 'center',
    backgroundColor: '#49c3c6',
  },
  unchecked: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ECECEC',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  text: {
    fontSize: 15,
    paddingTop: 10,
    paddingBottom: 20,
    paddingEnd: 15,
    alignContent: 'center',
    color: '#05375a',

  },
  icon: {
    marginRight: "90%",
    paddingLeft: 25,
    marginTop: 60,
  },
  icon2: {
    marginLeft: "90%",
    paddingRight: 25,
    marginTop: -24,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
    backgroundColor: "#49c3c6"

  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    paddingTop: 20,

  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    backgroundColor: "white",
  },

  button: {
    alignItems: 'center',
    borderColor: '#4BBFF4',
    borderWidth: 1,
    marginTop: 15,
    borderRadius: 17,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button2: {
    padding: 10,
    margin: 5,
    borderRadius: 30,
    width: 150,
    flexDirection: 'column',
    paddingHorizontal: 20,
  },
  buttonClose: {
    backgroundColor: "#49c3c6",

  },
  test: {
  }

});

export default PrintingOptionsScreen;
