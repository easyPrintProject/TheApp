import React from 'react';
import { StyleSheet, Text, View,  Button } from 'react-native';
import { DocumentPicker, ImagePicker } from 'expo';

export default class UploadFiles extends React.Component {
    state = {
    };
DocPick = async () => {
	    let DocPrint = await DocumentPicker.getDocument({});
		  alert(DocPrint.uri);
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
