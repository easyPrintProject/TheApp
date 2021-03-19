
import React, { useState } from "react";
import { Alert, Modal, StatusBar,StyleSheet, Text, Pressable, View, TextInput, ImageBackground, ScrollView, SafeAreaView } from "react-native";
import { StackScreenProps } from '@react-navigation/stack';
import { StartParamList } from '../types';
import { FontAwesome } from "@expo/vector-icons";


export default function AppStartScreen({ navigation }: StackScreenProps<StartParamList>) {

  const GoToHome = () => {
    navigation.navigate("Home");
  };
  const GoToSignUp = () => {
    navigation.navigate("Signup");
  };
  const GoToDriverLogin = () => {
    navigation.navigate("DriverLogin");
  };
  const GoToLogin = () => {
    navigation.navigate("Login");
  };

  const [modalVisible, setModalVisible] = useState(false);
  return (
    
    <View >
      <ScrollView style={{ backgroundColor: "white", height: 900}}> 
        <View style={styles.centeredView}>
          <ImageBackground source={require('../assets/images/test.png')} 
          style={{ height: 350, width: "100%", marginTop: 20, marginBottom: -90 }} resizeMode="contain" />
          <Text style={styles.text1}>مرحباً بك في منصة ايزي برنت</Text>
          <Text style={styles.text2}>منصة ايزي برنت للطباعة الإلكترونية لجميع أوراقك بأفضل جودة وتوصیل سریع لمكانك وین ماكنت</Text>
           
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => GoToLogin()}>
            <Text style={styles.textStyle}>  تسجيل الدخول  </Text>
          </Pressable>
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => GoToSignUp()}>
            <Text style={styles.textStyle}>انشاء حساب جديد</Text>
          </Pressable>
          
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => GoToDriverLogin()} >
            <Text style={styles.textStyle}>   المتابعة كسائق    </Text>
          </Pressable>
          <Pressable
            style={[styles.button2, styles.buttonOpen2]}
            onPress={() => GoToHome()} >
            <Text style={styles.textStyle2}>    المتابعة كزائر    </Text>
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
    paddingHorizontal: 10,
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
    paddingHorizontal: 10,
    height: 50,
    width: 200,
    borderColor: 'gray',
    borderWidth: 0.5,
    marginBottom: "1%",
    backgroundColor: '#e8e8e8',
    borderRadius: 8,
    margin: "5%",
    marginHorizontal: "10%",
    paddingLeft: "5%",

  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
    alignItems: 'flex-start',
    marginHorizontal: 70,
    margin: "1%"
  },
  text1: {
    fontSize: 30,
    color: "#151617",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
    marginTop: 40,
  },
  text2: {
    fontSize: 15,
    color: "gray",
    textAlign: "center",
    marginHorizontal: 20,
    marginTop: 2,



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
    padding: 100,
    margin: 20,
    borderRadius: 10,
    width: 150,
    flexDirection: 'column',
    paddingHorizontal: 20,

  },
  buttonOpen: {
    padding: 10,
    width: 250,
    borderRadius: 10,
    backgroundColor: "#49c3c6",
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
  button2: {
    //alignItems: 'center',
    borderColor: '#49c3c6',
    borderWidth: 1,
    marginTop: 15,
    borderRadius:17,
},
buttonOpen2: {
  padding: 10,
  width: 250,
  borderRadius: 10,
  //backgroundColor: "",
},
textStyle2: {
  color: "#49c3c6",
  fontWeight: "bold",
  textAlign: "center",
  fontSize: 16,

},
});

