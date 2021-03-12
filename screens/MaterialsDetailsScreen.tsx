import * as React from 'react';
import { View, Button, TextInput, StyleSheet, Text, Image, Modal, Alert, Pressable } from 'react-native';
import { Card } from 'react-native-elements';
import { useState } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { PrintersListParamList} from '../types';
import { useGlobalState } from '../components/StateProvider';
import { AntDesign } from '@expo/vector-icons';


export default function MaterialsDetailsScreen({navigation}: StackScreenProps<PrintersListParamList> ) {
    // for showing or hidding the popup
    const [modalVisible, setModalVisible] = useState(false);

    //our glopal state
    const {state ,setState } = useGlobalState();
    
    //object will be send and recived from the API
    const [order, setOrder] = useState({orderId:"", isCourceMaterial:false, isPrintingOrder:false,  totalPriceOfTheItem:0.0, courseId:"", docId:"", printingShopId:"", customerId:""});
     
    // type for the order opject 
    type resulte = {
      items: [
        {
            itemId: string,
            itemPrice: number,
            printingShopID: string
        }
           ]
    orderId: string,
    errorMassage: string
     }


    // fuction that create new order and oreder item, and set the model visible.
    const AddToBasketHandeler = () => {
       // first call the order APi to create an order
      try {
        fetch('https://apieasyprint20210215153907.azurewebsites.net/api/order', {
         method: 'POST',
         headers: {
         Accept: 'application/json',
          'Content-Type': 'application/json'
        },
         body: JSON.stringify({
          orderId:"",
          isCourceMaterial: true,
          isPrintingOrder: false,
          totalPriceOfTheItem:0.0,
          courseId:state.MaterialId,
          docId:"00000000-0000-0000-0000-000000000000", //defulte for the matireals orders
          printingShopId:state.printerId,
          customerId:state.Id
          })
       }).then((response) => response.json())
       .then((response: resulte) => {
       setOrder({
        orderId:response.orderId,
        isCourceMaterial:true,
        isPrintingOrder:false,
        totalPriceOfTheItem:0.0,
        courseId:state.MaterialId || "",
        docId:"00000000-0000-0000-0000-000000000000", //defulte for the matireals orders
        printingShopId:state.printerId || "",
        customerId:state.Id || ""
        });
       })
       .catch((error) => {
        console.error(error);
      });
      } catch (error) {
        console.log('حدث خطأ! ', error)
      }

      //then call the API to create an Item 

      try {
        fetch('https://apieasyprint20210215153907.azurewebsites.net/api/items', {
         method: 'POST',
         headers: {
         Accept: 'application/json',
          'Content-Type': 'application/json'
        },
         body: JSON.stringify({
          orderId:order.orderId,
          isCourceMaterial: true,
          isPrintingOrder: false,
          totalPriceOfTheItem:state.courceMaterialPrice,
          courseId:state.MaterialId,
          docId:"00000000-0000-0000-0000-000000000000", //defulte for the matireals orders
          printingShopId:state.printerId,
          customerId:state.Id
          })
       }).then((response) => response.json())
       .then((response) => {
       setOrder({
        orderId:response.data.orderId,
        isCourceMaterial:true,
        isPrintingOrder:false,
        totalPriceOfTheItem:state.courceMaterialPrice || 0,
        courseId:state.MaterialId || "",
        docId:"00000000-0000-0000-0000-000000000000", //defulte for the matireals orders
        printingShopId:state.printerId || "",
        customerId:state.Id || ""
        });
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
    const GoToDocumentList = () => {
      setState({
        Token: state.Token,
        Id: state.Id,
        Email: state.Email,
        UserName: state.UserName,
        PhoneNumber: state.PhoneNumber,
        ErrorMessage: state.ErrorMessage,
        EmailConfeirmd:  state.EmailConfeirmd,
        printerId: state.printerId,
        printerName: state.printerName,
        MaterialId:"",
        courceMaterialTitle:"",
        courceMaterialDescreption:"",
        courceMaterialPrice:0,
        isAvailable:false,
        subjectId:""
      })
      navigation.goBack();
    };

  return (
    <View>
      <View style={{height:"10%", width:"100%", backgroundColor:"#96C493"}}>
         <Pressable onPress={()=>GoToDocumentList() }>  
            <AntDesign name="leftcircleo" size={30} style={{ marginTop:15, marginLeft:5, color:"white" }}  />
         </Pressable>
      <AntDesign name="leftcircleo" size={30} style={{ marginTop:15, marginLeft:5, color:"white" }}  />
      </View>
       <Modal animationType="slide"  transparent={true}   visible={modalVisible} onRequestClose={() => {  Alert.alert("Modal has been closed."); setModalVisible(!modalVisible); }}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                <Text style={styles.modalText }>تمت اضافة المنتج بنجاح  {order.orderId} </Text>

              <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
                 <Text style={styles.textStyle}>متابعة التسوق </Text>
              </Pressable>
              <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
                 <Text style={styles.textStyle}>الذهاب للسلة</Text>
              </Pressable>
             </View>
           </View>
         </Modal>
        <Image source={require('../assets/images/5.jpg')}style={{height:200, width:200 ,borderWidth:2,marginTop:"5%",marginHorizontal:90}}/>
      <View style={styles.cardStyle}>

      <Card>
          <View>
          <Text>اسم الملزمة: {state.courceMaterialTitle}</Text>
            <Text>عدد الصفحات:200</Text>
            <Text>نوع الطباعة: ابيض و اسود</Text>
            <Text>الوصف : {state.courceMaterialDescreption}</Text>
            <Text>السعر:{state.courceMaterialPrice} ريال</Text>
          </View>
          <View style={styles.buttonStyle}> 
          <Button title="الاضافة إلى السلة" color='black' onPress={() => AddToBasketHandeler()}/></View>
        </Card>
      </View>
    </View>
  
  )
  
  }
const styles = StyleSheet.create({
    cardStyle:{
      marginTop: 50,
    },

    buttonStyle:{
      paddingTop: 20,
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal:10,
      backgroundColor: "white",
    },
    text1:{
      fontSize: 30,
      color: "#151617",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    }, 
     text2:{
      fontSize: 15,
      color: "gray",
   textAlign:"center",
   marginHorizontal:20
      
    
      
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
    button: {
      padding: 10,
      margin:5,
      borderRadius: 30,
      width:150,  
      flexDirection: 'column',
      paddingHorizontal:20,
    },
    buttonOpen: {
     padding:10,
     width:200,
     borderRadius:8,
    backgroundColor: "#4BBFF4",
    },
    buttonClose: {
      backgroundColor: "#5799E3",
      
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
      fontSize: 16,
      
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }

}
)
