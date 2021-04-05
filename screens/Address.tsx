import { Feather, FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Button, ImageBackground, KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { useGlobalState } from '../components/StateProvider';
import { AccountParamList } from '../types';
import  {  useState, useEffect } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

export default function Address( {navigation}: StackScreenProps<AccountParamList> ) {
  
   const {state ,setState } = useGlobalState();


   const [Address,setAddress ] = React.useState(

   [{

      userId:String,
      country: String,
      city: String,
      neighborhood: String,
      street:String,
      adressLine: String,
      postcode: Number
    }]
  );



  //   try {
  //     fetch('https://apieasyprint20210215153907.azurewebsites.net/api/Address/'+ state.userId,  {
  //      method: 'Get',
  //      headers: {
  //      Accept: 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //    }).then((response) => response.json())
  //    .then((response) => {
  //     setAddress({
  //     userId:response.data.userId,
  //     country: response.data.country,
  //     city:response.data.city, 
  //     neighborhood:response.data.neighborhood,
  //     street:response.data.street,
  //     adressLine:response.data.adressLine,
  //     postcode:response.data.postcode,
  //   });
  //    })
  //    .catch((error) => {
  //     console.error(error);
  //   });
  //   } catch (error) {
  //     console.log('حدث خطأ! ', error)
  //   }

  // }
  
    return (
<SafeAreaView style={{height:'100%'}}>
<ScrollView>
        
          <View    style={{
         height:"10%",
         width:'100%',
     backgroundColor:"#b4d8ee",
     alignItems:'center', }}>  
       <Text   style={{
      
       
      marginTop: 13,
      marginLeft:"5%",
      fontSize: 20,
      fontWeight: 'bold',
      color: 'black',
     alignItems:'center', }}>  عنوان التوصيل</Text> 
         </View> 
    
    

      
 <View style={{ backgroundColor:'#fff'}}>
  

<ImageBackground source={require("../assets/images/q1.png")}
 style={styles.image}>
             <View style={styles.action}>
          <FontAwesome name="user-o" color="#333333" size={20} />

          <TextInput
            placeholder="  اسم المستلم"
            placeholderTextColor="black"
            autoCorrect={false}
            style={styles.textInput}
            // onChangeText={(e) => setUserName(e.toString())}

          />
          
          </View>
          
    
        <View style={styles.action}>
          <Feather name="phone" color="#333333" size={20} />
          <TextInput
            placeholder="رقم الجوال"
            placeholderTextColor="black"
            keyboardType="number-pad"
            autoCorrect={false}
            // onChangeText={(e) => setPhoneNumber(e.toString())}

            style={styles.textInput}
          />
        </View>

        <View style={styles.action}>
          <FontAwesome name="globe" color="#333333" size={20} />
          <TextInput
            placeholder="الحي"
            placeholderTextColor="black"
            autoCorrect={false}
            // onChangeText={(e) => setneighborhood(e.toString())}

            style={styles.textInput}
          />
        </View>
        <View style={styles.action}>
          <MaterialCommunityIcons
            name="map-marker-outline"
            color="#333333"
            size={20}
          />
          <TextInput
            placeholder="الشارع"
            placeholderTextColor="black"
            autoCorrect={false}
            // onChangeText={(e) => setstreet(e.toString())}

            style={styles.textInput}
          />
        </View>
    
        <View style={styles.action}>
          <Ionicons name="ios-clipboard-outline" color="#333333" size={20} />
          <TextInput
            multiline
            numberOfLines={3}
            placeholder="وصف"
            placeholderTextColor="black"
            // onChangeText={(e) => setadressLine(e.toString())}

            autoCorrect={true}
            style={[styles.textInput]}
          />
          
        </View>

        <View style={styles.action}>
          <MaterialCommunityIcons
            name="map-marker-outline"
            color="#333333"
            size={20}
          />
          <TextInput
            placeholder="المدينة"
            placeholderTextColor="#666666"
            autoCorrect={false}
           // value={userData ? userData.city : ''}
           // onChangeText={(txt) => setUserData({...userData, city: txt})}
            style={styles.textInput}
          />
        </View>
        <View style={styles.action}>
          <MaterialCommunityIcons
            name="map-marker-outline"
            color="#333333"
            size={20}
          />
          <TextInput
            placeholder="الرمز البريدي"
            placeholderTextColor="#666666"
            autoCorrect={false}
          //  onChangeText={(txt) => setpostcode()}
            style={styles.textInput}
          />
        </View>
        
        <Text style={styles.userBtnTxt}>أضافة العنوان</Text>
   





     </ImageBackground>
          
         
</View>
 </ScrollView> 
        
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  userBtnTxt: {
    backgroundColor:"#b4d8ee",
 
    
 
    borderWidth:1,
    height:25,width:120  ,
     
    justifyContent:'center',
    alignContent:'center',
    marginTop: 6,
    paddingLeft:15,
    marginLeft:"36%",
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
   alignItems:'center',
    }, 
    
  container: {
  
   backgroundColor:'#fff',
  
  },
  textInput: {
    marginTop:1,
     paddingVertical:1,
    alignItems: "flex-end",

    flexDirection:"row-reverse",
    alignContent:"flex-end",
    justifyContent:"space-between",

    color: '#333333',
 },
  button: {
    borderRadius:10,
    backgroundColor:"#b4d8ee",
    alignItems:'center', marginHorizontal:"35%",
    width:140,
    height:50
},

 action: {
    alignItems: 'flex-start',
    
     flexDirection:"row-reverse",
 
      marginTop:"19%"
  },
  title: {
    color:"red",
    fontSize: 20,
    fontWeight: 'bold',
  },
  
      image: {
      height:"100%",
      
        resizeMode: "cover",
        justifyContent: "center"},
});

