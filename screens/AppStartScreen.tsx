
import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View ,TextInput,Image, ImageBackground} from "react-native";
import { StackScreenProps } from '@react-navigation/stack';
import { StartParamList} from '../types';
import Logo from '../components/Logo'
const AppStartScreen = ({navigation }: StackScreenProps<StartParamList> ) => {
  
  const GoToHome = () => {
    navigation.navigate("Home");
  };
  const GoToSignUp = () => {
    navigation.navigate("Signup");
  };
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
   <ImageBackground
        
        source={require('../assets/images/Appstaer.jpg')} style={{ height:300,
          width:500,justifyContent:'center' ,alignItems:'center'
        }}
      />
      <Text style={styles.text}>مرحبا في ايزي برينت</Text>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  text:{
    fontSize: 18,
    color: "#151617",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
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
    marginBottom:-19,
    padding: 10,
    marginTop:50,
    paddingBottom:20,
    marginLeft:"5%",
    elevation: 8,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
   width:"60%"

  },
  buttonOpen: {
    backgroundColor: "#5799E3",
     flexDirection: 'column',
  },
  buttonClose: {
    backgroundColor: "#5799E3",
    
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default AppStartScreen;