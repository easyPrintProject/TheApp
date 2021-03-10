import React from 'react';
import { StyleSheet, Text, View,  Button, Pressable, } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { StackScreenProps } from '@react-navigation/stack';
import { OrderParamList} from '../types';

export default function OrderScreen({navigation}: StackScreenProps<OrderParamList>,) {
  const GoToDoPrintOption = () => {
    navigation.navigate("PrintingOptionsScreen");
  };


  const DocPick = async () => {

    let DocPrint = await DocumentPicker.getDocumentAsync({});
    alert("تم تحميل الملف بنجاح");
    console.log(DocPrint);
}

  return (
    <View style={styles.container}>
      <Button color='#8098db'
        title=" حدد الملف" 
        onPress={DocPick} />
        <Pressable   style={{marginTop: 50,  }}
        onPress={() => GoToDoPrintOption()}>
        <Text>خيارات الطباعة</Text>
      </Pressable>
      
    </View>
 
  );
  

}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#ffffff',
  alignItems: 'center',
  justifyContent: 'center',
},
});
