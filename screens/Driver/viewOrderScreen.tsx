import React, { useState } from 'react'
import { Button, Pressable, StyleSheet, Text, View ,
  Image, StatusBar,  TouchableOpacity, SafeAreaView} from 'react-native'
import {AntDesign, FontAwesome5, Ionicons, MaterialCommunityIcons} from '@expo/vector-icons'
import { ScrollView } from 'react-native-gesture-handler';
import { StackScreenProps } from '@react-navigation/stack';
import { driverStack } from '../../types';
import { DataTable } from 'react-native-paper';
import { Card } from 'react-native-elements';
import { useGlobalState } from '../../components/StateProvider';

export default function OrderScreen({navigation}: StackScreenProps<driverStack>) {
  const GoToMoreInfo = () => {
    navigation.navigate("MoreInfo");
  }; 
  const [errorMassage, setErrorMassage] = useState("");
  const {state ,setState } = useGlobalState();




 

  return (
    <ScrollView style={{ backgroundColor: 'white' , flex:1, }}>
    <SafeAreaView  style={{ backgroundColor: 'white' , flex:1, }}>
       <StatusBar backgroundColor="#009387" barStyle="dark-content" />
    <Text style={{ fontSize: 25, textAlign:'center', marginTop:30,justifyContent:'center', 
    backgroundColor: '#009387', paddingTop:23 ,height: 80, color: 'white',
     alignContent: 'center', fontWeight: 'bold'}}> قائمة الطلبات</Text>
      

      <View style={{marginTop: 60}} >
         <Card>
            <View >
               <Text style={{ margin:5, textAlign:'right' , fontWeight:"bold"}}>رمز الطلب: </Text>
               <Text style={{ margin:5, textAlign:'right', fontWeight:"bold"}}>حالة التوصيل: </Text>
               <Text style={{ margin:5, textAlign:'right', fontWeight:"bold"}}>حالة الطلب:</Text>
               <Text style={{ margin:5, textAlign:'right', fontWeight:"bold"}}>السعر:</Text>
               <View style={styles.button}>
          <TouchableOpacity onPress={() => GoToMoreInfo()}>
           <Text style={styles.text}>المزيد</Text> 
          </TouchableOpacity>
            </View>
            </View>
            </Card>
       </View>       
</SafeAreaView>
</ScrollView>
);
}

const styles = StyleSheet.create({
  button:{
    alignItems: 'center',
    borderColor: 'green',
    borderWidth: 1,
    marginTop: 7,
    borderRadius:10,
    height: 25,
    width: 70,
    justifyContent: 'center',
    textAlign: 'center',
    alignContent: 'center',
},
text:{
  fontSize: 14,
  color: "green",
  textAlign: 'center',
  alignItems: 'center',
  alignContent: 'center',
}
})
