  
import React from 'react';
import { StyleSheet, Text, View,  Button, Pressable,StatusBar } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { StackScreenProps } from '@react-navigation/stack';
import { OrderParamList} from '../types';
import { Feather } from '@expo/vector-icons';


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
       <View><StatusBar backgroundColor='#009387' barStyle="dark-content"/>
    </View>
      <View style={styles.buttonStyle}><Feather.Button name="upload" backgroundColor="cornflowerblue" onPress={DocPick}>
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
    backgroundColor: 'cornflowerblue',
    borderWidth: 1,
    borderRadius: 25,
    borderColor: 'cornflowerblue',
    width: 200,
    justifyContent: "center",
    alignItems: 'center',
    height: 50,

  },

});
