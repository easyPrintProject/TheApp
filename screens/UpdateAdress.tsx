import { Feather, FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import {  ImageBackground, KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { AccountParamList } from '../types';
import  {  useState, useEffect } from 'react';

export default function UpdateAdress( {navigation}: StackScreenProps<AccountParamList> ) {
  const [errorMassage3, setErrorMassage3] = useState("");

    // const alertPick = async () => {
    //     let alertPick = await DocumentPicker.getDocumentAsync({});
    //     alert("تم التحديث  ");
    //     console.log(alertPick);
    //   }
   
   
    // export default function UpdateAdress() {
    //     const [country, setcountry] = useState(state.country);
    //     const [city, setcity] = useState(state.city);
    //     const [neighborhood, setneighborhood] = useState(state.neighborhood);
    //     const [street, setstreet] = useState(state.street);
    //     const {adressLine ,setadressLine } = useGlobalState();
   
      
    
      
    //     const UpdateAdress = async () => {
    //       try {
    //         fetch('https://apieasyprint20210215153907.azurewebsites.net/api/UpdateAddress/', {
    //          method: 'POST',
    //          headers: {
    //          Accept: 'application/json',
    //           'Content-Type': 'application/json'
    //         },
    //          body: JSON.stringify({
    //             userId:state.userId,
    //             country: country,
    //             city: city,
    //             neighborhood: neighborhood,
    //             street:street,
    //             adressLine:adressLine
    //         })
    //        }).then((response) => response.json())
    //        .then(() => {
    //         setState({
  //       ...state,
    //         country:country,
    //         city:city, 
    //         neighborhood:neighborhood,
    //         street:street,
    //         adressLine:adressLine,
            
    //       });
    //        })
    //        .catch((error) => {
    //         console.error(error);
    //       });
    //       } catch (error) {
    //         console.log('حدث خطأ! ', error)
    //       }
    //}
    
const PhoneValidator = (phoneNumber: any) => {
  let reg =  /^((?:[+?0?0?966]+)(?:\s?\d{2})(?:\s?\d{7}))$/;
  if (reg.test(phoneNumber) === false) {
    setErrorMassage3(  "الرجاء كتابة الرقم بشكل صحيح " );
    return false;
  } else {
    setErrorMassage3(  "" );
  }
};
const usernameValidator = (username: any) => {
  let reg =  /^[a-zA-Z]+$/;
  if (reg.test(username) === false) {
    setErrorMassage3(  "الرجاء كتابة الاسم بشكل صحيح " );
    return false;
  } else {
    setErrorMassage3(  "" );
  }
};

    return (
<SafeAreaView style={{height:'100%'}}>
<ScrollView>
        
          <View    style={{
         height:"10%",
         width:'100%',
     backgroundColor:"#b4d8ee",
     alignItems:'center', }}> 


       <Text   style={{
      marginLeft:"5%",
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white',
     alignItems:'center', }}>  عنوان التوصيل</Text> 
         </View> 
    
    

      
         <View style={{ backgroundColor:'#fff'}}>
  
<KeyboardAvoidingView behavior='position'>
<ImageBackground source={require("../assets/images/P.jpg")}
 style={styles.image}>
             <View style={styles.action}>
          <FontAwesome name="user-o" color="#333333" size={20} />

          <TextInput
            placeholder="  اسم المستلم"
            placeholderTextColor="black"
            autoCorrect={false}
            style={styles.textInput}
            // onChangeText={(e) => setUserName(e.toString())}
            onChangeText={(username) => usernameValidator(username)}

          />
          
          </View>
          
    
        <View style={styles.action}>
          <Feather name="phone" color="#333333" size={20} />
          <TextInput
            placeholder="رقم الجوال"
            placeholderTextColor="black"
            keyboardType="number-pad"
            autoCorrect={false}
            // onTextInput={(e) => setPhoneNumber(e.toString())}
            onChangeText={(phoneNumber) => PhoneValidator(phoneNumber)}

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
       
        {/* <Text style={styles.userBtnTxt}  onPress={alertPick}>تحديث</Text> */}
   

                </ImageBackground>
           </KeyboardAvoidingView>
         
              </View>
              </ScrollView> 
        
              </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 
    userBtnTxt: {
        backgroundColor:"#b4d8ee",
 
    
 
        borderWidth:1,
        height:9,
        width:120  ,
         
        justifyContent:'center',
        alignContent:'center',
        marginTop: 13,
        paddingLeft:15,
        paddingTop:2,
        marginLeft:"36%",
        fontSize: 14,
        fontWeight: 'bold',
        color: 'black',
       alignItems:'center',
      },   container: {
  
   backgroundColor:'#fff',
   padding:5
  },
  textInput: {
  
   
    alignItems: "flex-end",
    paddingEnd:9, 
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
     padding:5, 
     flexDirection:"row-reverse",
 
      marginTop:"20%"
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


function setUser(arg0: { Email: any; PhoneNumber: any; UserName: any; EmailConf: any; errorMassage: any; Id: any; Token: any; }) {
    throw new Error('Function not implemented.');
}

function setErrorMassage(arg0: string) {
    throw new Error('Function not implemented.');
}

function setState(arg0: { Token: any; Id: any; Email: any; UserName: any; PhoneNumber: any; ErrorMessage: any; EmailConfeirmd: any; }) {
    throw new Error('Function not implemented.');
}
     