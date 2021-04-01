
import React, { useState } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { OrderParamList} from '../types';
import {
  StyleSheet,
  Text,
  View,
  Pressable
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
// Import Document Picker
import * as DocumentPicker from 'expo-document-picker';
import axios from 'axios';

export default function OrderScreen({navigation}: StackScreenProps<OrderParamList>,) {
  const GoToPrintOption = () => {
    navigation.navigate("PrintingOptionsScreen");
  };  
  const [file, setFile] = useState('');
  const [fileNeme, setFileNeme] = useState('');

  
  const upload = async (e:any) => {
    // Check if any file is selected or not
    console.log(file);
    const formdata = new FormData();
    formdata.append("formFile", file);
    formdata.append("fileName", fileNeme);
    try {
      const res = await axios.post("api", formdata);
      console.log(res);
    } catch (ex){
      console.log(ex);
    }
    }

 const docPick = async () => {
    //Opening Document Picker for selection of one file
      const res = await DocumentPicker.getDocumentAsync({ 
     
      });
      //Printing the log realted to the file
      console.log('res : ' + JSON.stringify(res));

      //Setting the state to show single file attributes
    
    }
  return (
    <View style={styles.container}>
        <View><StatusBar style="dark" /></View>

      <View style={{ alignItems: 'center' }}>
      
      </View>

         <View style={styles.buttonStyle}><Feather.Button name="file" backgroundColor="#49c3c6" onPress={docPick}>
        حدد الملف </Feather.Button></View>
       
<View style={styles.buttonStyle2}><Feather.Button name="upload" backgroundColor="#49c3c6" onPress={upload}>
        رفع الملف </Feather.Button></View>   
     

         <Pressable   style={{marginTop: 10,  }}
        onPress={() => GoToPrintOption()}>
        <Text>خيارات الطباعة</Text>
      </Pressable>
    </View>
    
  );
};

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
buttonStyle2: {
    backgroundColor: '#49c3c6',
    borderWidth: 1,
    borderRadius: 25,
    borderColor: '#49c3c6',
    width: 200,
    justifyContent: "center",
    alignItems: 'center',
    height: 50,
    marginTop:20,

  },
  textStyle: {
    marginTop:15,
    textAlign:'center',
  }
});
