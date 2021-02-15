
import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View ,TextInput} from "react-native";
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
      <Text>مرحبا في ايزي برينت</Text>
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
                  <View ><TextInput style={{paddingHorizontal:10, height:50, width:200, borderColor:'gray', borderWidth:0.5, marginBottom: 5} }/></View> 
                  <View ><TextInput style={{paddingHorizontal:10, height:50, width:200, borderColor:'gray', borderWidth:0.5, marginBottom:5}}/></View>  
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
    marginTop: 22
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
    marginBottom:5,
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
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