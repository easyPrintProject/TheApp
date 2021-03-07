import React from 'react'
import { Button, Pressable, StyleSheet, Text, View ,Image} from 'react-native'
import {AntDesign, FontAwesome5, Ionicons, MaterialCommunityIcons} from '@expo/vector-icons'
import { ScrollView } from 'react-native-gesture-handler';
import { StackScreenProps } from '@react-navigation/stack';
import { ViewOrderDriverParamList } from '../../types';

export default function OrderScreen({navigation}: StackScreenProps<ViewOrderDriverParamList>) {
  const state ={searchBarFocused : false}
  const GoToDetailOrder = () => {
    navigation.navigate("ViewOrderScreen");
  }; 
  return (
    <View>
      
    <Text style={(styles.headertext)}> طلبات التوصيل</Text>
    <ScrollView>
      <View style={(styles.box)}> 
      <Text style={{marginTop:29,marginLeft:340,paddingTop:10,}}>  <AntDesign name="enviromento" size={24} color="#4BBFF4"/></Text>

      <View>
        <Text style={{textAlign:'right',fontWeight:'bold', margin:3,marginTop:-55,fontSize:20,padding:25,paddingRight:38}}>
            مطبعة المعالي                 </Text>
            <Text style={{marginTop:-49,marginLeft:22,padding:3}} > وقت التوصيل </Text>
            <Text style={{marginTop:4,marginLeft:45,paddingTop:1}} > 6-5 </Text>
 <Ionicons name="pin" size={24} color="red"
 style={{marginLeft:330,marginTop:25}} /><Text style={{marginLeft:265,marginTop:-20}}>  حي البدراني </Text> 
 <MaterialCommunityIcons name="truck-delivery" size={24} color="black" style={{marginLeft:210,marginTop:-23}}/>
 <Ionicons name="pin" size={24} color="green"
 style={{marginLeft:170,marginTop:-23}} />
                   <FontAwesome5 name="money-bill-alt" size={24} color="green"
                   style={{marginTop:-19,marginLeft:48}} />

 <Text style={{marginLeft:99,marginTop:-24}}>طبعة المعالي</Text> 
                  
                  
                  
                    </View>
      </View>
      <View style={(styles.box)}> 
     
      <Text style={{marginTop:29,marginLeft:340,paddingTop:10,}}>  <AntDesign name="enviromento" size={24} color="#4BBFF4"/></Text>

<View>
  <Text style={{textAlign:'right',fontWeight:'bold', margin:3,marginTop:-55,fontSize:20,padding:25,paddingRight:38}}>
  مكتبة امسيان                </Text>
      <Text style={{marginTop:-49,marginLeft:22,padding:3}} > وقت التوصيل </Text>
      <Text style={{marginTop:4,marginLeft:45,paddingTop:1}} > 3-4 </Text>
<Ionicons name="pin" size={24} color="red"
style={{marginLeft:330,marginTop:25}} /><Text style={{marginLeft:265,marginTop:-20}}> حي العزيزية </Text> 
<MaterialCommunityIcons name="truck-delivery" size={24} color="black" style={{marginLeft:210,marginTop:-23}}/>
<Ionicons name="pin" size={24} color="green"
style={{marginLeft:170,marginTop:-23}} />
             <FontAwesome5 name="money-bill-alt" size={24} color="green"
             style={{marginTop:-19,marginLeft:48}} />

<Text style={{marginLeft:99,marginTop:-24}}> مكتبة امسيان </Text> 
            
            
            
              </View>
</View>
     
    
      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
  headertext:{
    flexDirection:"row",
    padding:6, 
    paddingTop:15,
    width:"100%",
    height:"10%",
     justifyContent:"center",
     alignItems:"center",
     backgroundColor:"#E6E6E6",
     marginTop:"10%",
     alignSelf:"auto",
     textAlign:"center",
     fontSize:20,
 
   
    },
    textup:{
      fontSize:18,
      textAlign:'center',
      marginTop:30,

      paddingLeft:300,
      paddingTop:"5%"
        }, 
        
        
        box:{
      height:150,
      backgroundColor:'#DDD',
      margin:7,
      borderRadius:5
    },
    textbox:{
      alignItems:'center',
      textAlign:'center',
      marginVertical:"1%"
    },
  
});

