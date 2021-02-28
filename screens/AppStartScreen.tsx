
import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View ,TextInput, ImageBackground, ScrollView} from "react-native";
import { StackScreenProps } from '@react-navigation/stack';
import { StartParamList} from '../types';


export default function AppStartScreen  ({navigation }: StackScreenProps<StartParamList> )  {
  
  const GoToHome = () => {
    navigation.navigate("Home");
  };
  const GoToSignUp = () => {
    navigation.navigate("Signup");
  };
  const GoToDriverLogin = () => {
    navigation.navigate("DriverLogin");
  };
  
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View >
      <ScrollView >
        <View style={styles.centeredView}>
           <ImageBackground source={require('../assets/images/logo.png')} style={{ height:350,width:"100%" }}resizeMode="contain" />
           <Text style={styles.text1}>مرحباً بك في منصة الطباعة</Text>
           <Text style={styles.text2}>منصة ايزي برنت حلول الطباعة الالكترونية لجميع اوراقك بأفضل جودة وتوصیل سریع لمكانك وین ماكنت</Text>
           <Modal animationType="slide"  transparent={true}   visible={modalVisible} onRequestClose={() => {  Alert.alert("Modal has been closed."); setModalVisible(!modalVisible); }}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                <Text style={styles.modalText}>تسجيل الدخول</Text>
                 <View>
                  <View ><TextInput style={{paddingHorizontal:10, height:50, width:200, borderColor:'gray', borderWidth:0.5, marginBottom: 8,backgroundColor:'#e8e8e8',borderRadius:8} }/></View> 
                  <View ><TextInput style={{paddingHorizontal:10, height:50, width:200, borderColor:'gray', borderWidth:0.5, marginBottom:5,backgroundColor:'#e8e8e8',borderRadius:8}}/></View>  
                 </View>
              <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
                 <Text style={styles.textStyle}>تسجيل الدخول </Text>
              </Pressable>
             </View>
           </View>
         </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>  تسجيل الدخول  </Text>
      </Pressable>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => GoToSignUp()}>
        <Text style={styles.textStyle}>انشاء حساب جديد</Text>
      </Pressable>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => GoToHome()} >
        <Text style={styles.textStyle}>    المتابعة كزائر    </Text>
      </Pressable>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => GoToDriverLogin()} >
        <Text style={styles.textStyle}>   المتابعة كسائق    </Text>
      </Pressable>
      </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
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
    padding: 20,
    margin:20,
    borderRadius: 30,
   width:150,  
   flexDirection: 'column',
   paddingHorizontal:20,


  },
  buttonOpen: {
   padding:10,
   width:150,
   borderRadius:30,
    backgroundColor: "#4BBFF4",
   
  },
  buttonClose: {
    backgroundColor: "#5799E3",
    
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

