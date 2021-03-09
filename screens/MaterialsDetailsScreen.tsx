import * as React from 'react';
import { View, Button, TextInput, StyleSheet, Text, Image } from 'react-native';
import { Card } from 'react-native-elements';
import { useState } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { PrintersListParamList} from '../types';

export default function MaterialsDetailsScreen({navigation}: StackScreenProps<PrintersListParamList>, ) {
    const [modalVisible, setModalVisible] = useState(false);
    const GoToDocumentList = () => {
      navigation.goBack();
    };
    

  return (
    <View>
        <Image source={require('../assets/images/1.jpg')}style={{height:200, width:200 ,borderWidth:2,marginTop:"15%",marginHorizontal:90}}/>
      <View style={styles.cardStyle}>
      <Card>
          <View style={(styles.text)}>
          <Text style={{ margin:5}}>اسم الملزمة:</Text>
            <Text style={{ margin:5}}>نوع الملزمة:</Text>
            <Text style={{ margin:5}}>عدد الصفحات:</Text>
            <Text style={{ margin:5}}>نوع الطباعة:</Text>
            <Text style={{ margin:5}}>الكاتب:</Text>
            <Text style={{ margin:5}}>السعر:</Text>
          </View>
          <View style={styles.buttonStyle}> 
          <Button title="الاضافة إلى السلة" color='black' onPress={() => setModalVisible(true)}/></View>
        </Card>
      </View>
    </View>
  
  )
  
  }
const styles = StyleSheet.create({
    cardStyle:{
marginTop: 50,
    },

    buttonStyle:{
paddingTop: 20,
    },
    text:{
      textAlign:'right',
      justifyContent:'flex-start',
      paddingLeft:232,
      marginTop:22
      
    }

}
)
