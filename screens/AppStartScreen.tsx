
import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View ,TextInput, ImageBackground, ScrollView} from "react-native";
import { StackScreenProps } from '@react-navigation/stack';
import { StartParamList} from '../types';
import { FontAwesome } from "@expo/vector-icons";


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
                 <Text style={styles.text_footer}>اسم المستخدم</Text>
        <View style={styles.action}>
         
            <TextInput 
                placeholder="Your Username"
                style={styles.textInput}
                autoCapitalize="none"
            />
         
        </View>

        <Text style={[styles.text_footer, {
            marginTop: 35
        }]}>كلمة المرور</Text>
     
            <TextInput 
                placeholder="Your Password"
                secureTextEntry={true}
                style={styles.textInput}
                autoCapitalize="none"
            />
    
                   
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
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5
},
  textInput: {
 paddingHorizontal:10,
  height:50,
   width:200, 
   borderColor:'gray',
    borderWidth:0.5,
     marginBottom: "1%",
     backgroundColor:'#e8e8e8',
     borderRadius:8,
     margin:"5%",
     marginHorizontal:"10%",
     paddingLeft:"5%",

},
text_footer: {
  color: '#05375a',
  fontSize: 18,
alignItems: 'flex-start',
marginHorizontal:70,
margin:"1%"
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
    fontSize:16,
    
  },
  modalText: {
    marginBottom: "10%",
    textAlign: "center",
    fontSize:18,
    fontWeight: 'bold',
  }
});

