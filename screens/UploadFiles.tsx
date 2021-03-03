import React from 'react';
import { StyleSheet, Text, View,  Button } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';



  export default function UploadFiles() {
  
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
