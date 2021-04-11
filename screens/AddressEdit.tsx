import { Feather, FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'

import { useGlobalState } from '../components/StateProvider';
import { AccountParamList } from '../types';
import  {  useState, useEffect } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

import { StyleSheet, SafeAreaView, Image, Text ,Alert, Modal, Pressable, ImageBackground, } from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { View } from '../components/Themed';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { DrawerActions } from '@react-navigation/native';
import { Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { color } from 'react-native-reanimated';

export default function AddressEdit( {navigation}: StackScreenProps<AccountParamList> ) {
  
  const GoToAccount = () => {
    navigation.navigate("AccountScreen");
  }

    const {state ,setState } = useGlobalState();
    const [address, setAddress] = useState({userId:"",country:"",city:"",neighborhood:"",street:"",adressLine:"",postcode:""})
    
    const [city, setCity] = useState(state.city);
    const [neighborhood, setNeighborhood] = useState("");
    const [adressLine, setAdressLine] = useState("");
    const [postcode, setPostcode] = useState("");
    const [street, setStreet] = useState("");
 
 


    const update = async () => {
     try {
       fetch('https://apieasyprint20210215153907.azurewebsites.net/api/UpdateAddress/', {
        method: 'POST',
        headers: {
        Accept: 'application/json',
         'Content-Type': 'application/json'
       },
       body:  JSON.stringify({
        userId:state.Id,
       city:city, 
       neighborhood:neighborhood,
       street:street,
       adressLine:adressLine,
       postcode:postcode,
        
      })

      }).then((response) => response.json())
       .then((response) => {
       setAddress({
       userId:response.data.userId,
      country: response.data.country,
      city:response.data.city, 
      neighborhood:response.data.neighborhood,
       street:response.data.street,
       adressLine:response.data.adressLine,
       postcode:response.data.postcode,
     });
       })
      .catch((error) => {
       console.error(error);
     });

      } catch (error) {
      console.log('حدث خطأ! ', error)
    
    }
  
    Alert.alert(
      "تم التحديث"
    )
  
  }

  
    return (
    


<SafeAreaView>

<View style={styles.header}> 
    <View style={styles.icon}>
    <Ionicons  name="chevron-back" size={24} color="white" onPress={() => GoToAccount()} />

     <Ionicons  name="menu-outline" size={24} color= 'white' 
  onPress={() => navigation.dispatch(DrawerActions.openDrawer())}></Ionicons></View>
  <View style={styles.ht}>
      <Text style={styles.title}>تعديل بيانات الحساب</Text>
      </View></View>

      <ScrollView> 
             <View style={styles.container} >

         

         
          
    
        
        <View style={styles.action}>
        
        <TextInput
          placeholder="المدينة"
          placeholderTextColor="#666666"
          autoCorrect={false}
         // value={userData ? userData.city : ''}
          onChangeText={(e) => setCity(e.toString())}
          style={styles.textInput}
        />
      </View>

        <View style={styles.action}>
          <TextInput
            placeholder="الحي"
            placeholderTextColor="#666666"
            autoCorrect={false}
             onChangeText={(e) => setNeighborhood(e.toString())}

            style={styles.textInput}
          />
        </View>
        <View style={styles.action}>
         
          <TextInput
            placeholder="الشارع"
            placeholderTextColor="#666666"
            autoCorrect={false}
            onChangeText={(e) => setStreet(e.toString())}

            style={styles.textInput}
          />
        </View>
    
        <View style={styles.action}>
          <TextInput
            multiline
            numberOfLines={3}
            placeholder="وصف"
            placeholderTextColor="#666666"
            onChangeText={(e) => setAdressLine(e.toString())}

            autoCorrect={true}
            style={[styles.textInput]}
          />
          
        </View>

   
        <View style={styles.action}>
          
          <TextInput
            placeholder="الرمز البريدي"
            placeholderTextColor="#666666"
            autoCorrect={false}
           onChangeText={(e) =>  setCity(e.toString())}
            style={styles.textInput}
          />
        </View>
        
        <TouchableOpacity style={styles.button} > 
 <Text style={styles.userBtnTxt} 
 onPress={() =>update()}
 >تحديث 
  </Text>
 </TouchableOpacity> 
   



 </View>
 </ScrollView> 
   </SafeAreaView>
   
  );
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor:'#fff',
    padding:"3%"
   },

   textInput: {
    flex: 1,
    fontSize:15,
    paddingLeft: 65,
    color: '#333333',
    justifyContent:"center",
    alignItems:'center',
    textAlign: 'right',
  },

   header: {
     width: '100%',
     height:'20%',
     padding:"2%",
     backgroundColor:'#49c3c6',
     flexDirection: "column",
     justifyContent:"center",
     alignContent:"center"
     //opacity: 0.5
     
   },
 icon:{
   backgroundColor:'#49c3c6',
   flexDirection: "row",
   paddingTop:"6%",
   justifyContent:"space-between"
 },
 
   action: {
     flexDirection: 'row',
     marginTop: 30,
     marginBottom: 10,
     borderBottomWidth: 1,
     borderBottomColor: '#f2f2f2',
     paddingBottom: 1,
   },
   ht:{
     backgroundColor:'#49c3c6',
     justifyContent:"center",
     alignItems:'center'
   },
   title: {
     fontSize: 20,
     fontWeight: 'bold',
     color: 'white',
    
   },
 
  
   input: {
     width: 350,
     height: 55,
     backgroundColor: '#B9B9B9',
     margin: 10,
     padding: 8,
     color: 'black',
     borderRadius: 10,
     fontSize: 15,},
  
 
   userBtnTxt: {
    
     fontSize:20,
     color:"#fff",
     
   },
 
  contant:{
    padding:"3%",
   alignItems: 'center',
   alignContent: 'center',
  },
 
   button: {
     alignItems: 'center',
     alignContent: 'center',
     textAlign: 'center',
     borderColor: '#49c3c6',
     borderWidth: 1,
     marginTop: 15,
     borderRadius:30,
     width: 150,
     backgroundColor: '#49c3c6'
   },
});




