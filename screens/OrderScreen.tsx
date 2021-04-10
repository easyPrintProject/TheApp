
import React, { useState } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { OrderParamList } from '../types';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
// Import Document Picker
import * as DocumentPicker from 'expo-document-picker';
import axios from 'axios';
import { useGlobalState } from '../components/StateProvider';






export default function OrderScreen({ navigation }: StackScreenProps<OrderParamList>,) {
  const GoToPrintOption = () => {
    navigation.navigate("PrintingOptionsScreen");
  };
  const [file, setFile] = useState('');
  const [fileNeme, setFileNeme] = useState('');

  const upload = async () => {
    if (file != null) {
      const formdata = new FormData();
      formdata.append("formFile", file);
      formdata.append("fileName", fileNeme);

      let res = await fetch('https://apieasyprint20210215153907.azurewebsites.net/api/UploadFile' + formdata,{
          method: 'post',
          body: formdata,
          headers: {
            'Content-Type': 'multipart/form-data; ',
          },
        }
      );
      let responseJson = await res.json();
      if (responseJson.status == 1) {
        alert('تم تحديد الملف بنجاح');
      }
    } else {
      alert('الرجاء اختيار ملف');
    }
  };

  const docPick = async () => {
      let res = await DocumentPicker.getDocumentAsync({
      });
      console.log('res : ' + JSON.stringify(res));
      setFile(res);
    }
  return (
    <View style={styles.container}>
      <View><StatusBar style="dark" /></View>

<View style={{ alignItems: 'center' }}>

</View>

<View style={styles.buttonStyle}><Feather.Button name="file" backgroundColor="#49c3c6" onPress={docPick}>
  حدد الملف </Feather.Button></View>

{file != null ? (
  <Text style={styles.textStyle}>
    اسم الملف: {file.name ? file.name : ''}
    {'\n'}
    حجم الملف: {file.size ? file.size : ''}
    {'\n'}
    نوع التحديد: {file.type ? file.type : ''}
    {'\n'}
    
  </Text>
) : null}

<View style={styles.buttonStyle2}><Feather.Button name="upload" backgroundColor="#49c3c6" onPress={upload}>
  رفع الملف </Feather.Button></View>

<Pressable style={{ marginTop: 10, }}
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
    marginTop: 20,

  },
  textStyle: {
    marginTop: 15,
    textAlign: 'center',
  }
});

