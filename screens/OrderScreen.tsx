  
import React from 'react';
import { StyleSheet, Text, View,  Button, Pressable, } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { StackScreenProps } from '@react-navigation/stack';
import { OrderParamList} from '../types';
import { Feather } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';


export default function OrderScreen({navigation}: StackScreenProps<OrderParamList>,) {
  const GoToPrintOption = () => {
    navigation.navigate("PrintingOptionsScreen");
  };


  const DocPick = async () => {
    let DocPrint = await DocumentPicker.getDocumentAsync({});
    alert("تم تحميل الملف بنجاح");
    console.log(DocPrint);
  }

  return (
   

    <View style={styles.container}>
    <View><StatusBar style="dark" /></View>
      <View style={styles.buttonStyle}><Feather.Button name="upload" backgroundColor="#49c3c6" onPress={DocPick}>
        حدد ملف </Feather.Button></View>
      <Pressable   style={{marginTop: 10,  }}
        onPress={() => GoToPrintOption()}>
        <Text>خيارات الطباعة</Text>
      </Pressable>
    </View>

  );


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    backgroundColor: '#49c3c6',
    borderWidth: 1,
    borderRadius: 25,
    borderColor: '#49c3c6',
    width: 200,
    justifyContent: "center",
    alignItems: 'center',
    height: 50,

  },

});
