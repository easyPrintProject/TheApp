import * as React from 'react';
import { View, Button, TextInput, StyleSheet, Text, Image, Modal, Alert, Pressable, SafeAreaView, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
import { useState } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { PrintersListParamList} from '../types';
import { useGlobalState, item } from '../components/StateProvider';
import { AntDesign } from '@expo/vector-icons';


export default function MaterialsDetailsScreen({navigation}: StackScreenProps<PrintersListParamList> ) {
      //our glopal state
      const {state ,setState } = useGlobalState();

   // useEffect create a new order as soon as the page load 
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
      setState({
        ...state,
        //order and basket items data
        orderId :response.orderId,
        orderSatus:"حقيبة التسوق فارغة",
        allIems: [...(state.allIems ?? []), {
          itemId: "",
         itemName : "",
       //info about the material 
        MaterialId: "",
        courceMaterialTitle: "",
        courceMaterialPrice: 0,
  
        //info about the printer
         printerId: "",
        printerName: "",
  
        //info about the order
          orderId: "",
          orderStatus:""} ],
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


    
    //object will be send and recived from the API
    const [order, setOrder] = useState({orderId:"",
     isCourceMaterial:false,
      isPrintingOrder:false,
        totalPriceOfTheItem:0.0,
         courseId:"",
          docId:"",
           printingShopId:"",
            customerId:""});
     
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
          isCourceMaterial: true,
          isPrintingOrder: false,
          totalPriceOfTheItem:state.courceMaterialPrice,
          courseId:state.MaterialId,
          docId:"00000000-0000-0000-0000-000000000000", //defulte for the matireals orders
          printingShopId:state.printerId,
          customerId:state.Id
          })
       }).then((response) => response.json())
       .then((response:resulte) => {
        //update the state
        setState({
          ...state,
         //order and basket items data
        orderId :response.orderId,
        orderSatus:" لم يتم تاكيد الطلب بعد",

        allIems: [...(state.allIems ?? []), {
          itemId: response.itemId,
          itemName : state.courceMaterialTitle || "",

         //info about the material 
          MaterialId: state.MaterialId || "",
          courceMaterialTitle: state.courceMaterialTitle ||  "",
          courceMaterialPrice: response.itemPrice,
  
        //info about the printer
          printerId: response.printingShopID,
          printerName: state.printerName || "",
  
        //info about the order
          orderId: response.orderId,
          orderStatus:""} ],
        orderTotal: (state.orderTotal || 0 )+ response.itemPrice
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
      navigation.push("DocumentListScreen");
    };
        // delete doc Info from globale state and go to basket
        const GoToBAsketList = () => {
          setModalVisible(!modalVisible);
          setState({
            ...state,
            printerId:"",
            printerName:"",
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
              <Text style = {{ color:"red"}}> لايمكنك الاضافة للسلة بدون تسجيل الدخول </Text>
             </View>);           
          } else {
            return(<View style={styles.buttonStyle}> 
              <Button title="الاضافة إلى السلة" color='black' onPress={() => AddToBasketHandeler()}/></View>); 
          }  
        }

  return (

    <SafeAreaView>
    <View>
      <View style = {{flexDirection:"row",backgroundColor:"#96C493", justifyContent:"space-between", paddingBottom: 10}} >
         <Pressable onPress={()=>GoToDocumentList() }>  
            <AntDesign name="leftcircleo" size={30} style={{ marginTop:15, marginLeft:5, color:"white" }}  />
         </Pressable>
         <Text style={{ marginTop:15, marginRight:5, color:"white", fontSize:20 }}>{state.courceMaterialTitle}</Text>

      </View>
       <Modal animationType="slide"  transparent={true}   visible={modalVisible} onRequestClose={() => {  Alert.alert("Modal has been closed."); setModalVisible(!modalVisible); }}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                <Text style={styles.modalText }>تمت اضافة المنتج بنجاح  {order.orderId} </Text>

              <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => GoToDocumentList()}>
                 <Text style={styles.textStyle}>متابعة التسوق </Text>
              </Pressable>
              <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => GoToBAsketList()}>
                 <Text style={styles.textStyle}>الذهاب للسلة</Text>
              </Pressable>
             </View>
           </View>
         </Modal>
        <Image source={require('../assets/images/5.jpg')}style={{height:200, width:200 ,borderWidth:2,marginTop:"5%",marginHorizontal:90}}/>
      <View >

      <Card>

          <View style={(styles.text)}>
          <Text style={{ margin:5}}>اسم الملزمة: {state.courceMaterialTitle}</Text>
            <Text style={{ margin:5}}>عدد الصفحات:200</Text>
            <Text style={{ margin:5}}>نوع الطباعة: ابيض و اسود</Text>
            <Text style={{ margin:5}}>الوصف : {state.courceMaterialDescreption}</Text>
            <Text style={{ margin:5}}>السعر:{state.courceMaterialPrice} ريال</Text>

          </View>
          {CheckUser()}
        </Card>
      </View>
    </View>
    </SafeAreaView>
  )
  
  }
const styles = StyleSheet.create({
   

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
      textAlign: "center", 
      paddingTop: 20,
    },
    text:{
      textAlign:'right',
      justifyContent:'flex-start',
    }

}
)
