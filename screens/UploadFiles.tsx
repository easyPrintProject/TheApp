import React from 'react';
import { StyleSheet, Text, View,  Button } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

export default class UploadFiles extends React.Component {
    state = {
    };
DocPick = async () => {
	    let DocPrint = await DocumentPicker.getDocumentAsync({});
		  alert("تم تحميل الملف بنجاح");
      console.log(DocPrint);
	}

  render() {
    return (
      <View style={styles.container}>
        <Button color='#8098db'
          title=" حدد الملف" 
          onPress={this.DocPick} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
