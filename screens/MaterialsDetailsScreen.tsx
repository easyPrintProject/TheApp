import * as React from 'react';
import { View, Button, TextInput, StyleSheet, Text, Image } from 'react-native';
import { Card } from 'react-native-elements';
import { useState } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { PrintersListParamList} from '../types';

export default function MaterialsDetailsScreen({navigation}: StackScreenProps<PrintersListParamList>) {
    const [modalVisible, setModalVisible] = useState(false);
    const GoToDocumentList = () => {
      navigation.goBack();
    };

  return (
    <View>
        <Image source={require('../assets/images/1.jpg')}style={{height:200, width:200 ,borderWidth:2,marginTop:"5%",marginHorizontal:90}}/>
      <View style={styles.cardStyle}>
      <Card>
          <View>
          <Text>اسم الملزمة:</Text>
            <Text>نوع الملزمة:</Text>
            <Text>عدد الصفحات:</Text>
            <Text>نوع الطباعة:</Text>
            <Text>الكاتب:</Text>
            <Text>السعر:</Text>
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
    }

}
)
