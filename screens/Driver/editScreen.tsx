import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/build/FontAwesome';
import * as React from 'react';
import { StyleSheet, SafeAreaView, Image,Text,View, Animated, ImageBackground, KeyboardAvoidingView} from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import  { useContext, useState, useEffect } from 'react';
import { useGlobalState } from '../../components/StateProvider';
import { StackScreenProps } from '@react-navigation/stack';
import {DriverProfileParamList} from "../../types"

export default function editScreen ({navigation}: StackScreenProps<DriverProfileParamList> ) {

  const  GoToProfileScreen  = () => {

    navigation.navigate("ProfileScreen");
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState({Email:"", UserName:"", PhoneNumber:"",  EmailConf:false, errorMassage:"", Id:"", Token:""});
  const {state ,setState } = useGlobalState();
  const [errorMassage, setErrorMassage] = useState("");


 

  useEffect(() => {
        
    if (user == null || user.Id == "" || user.Id==null) {
      setErrorMassage(user.errorMassage);
      if(user.errorMassage==null || user.errorMassage==""){
        setErrorMassage("حدث خطأ ما, الرجاء المحاولة مجدداً");
      }
    } else {
      //empty the error message
      setErrorMassage("");
      setState({
        Email:user.Email,
        UserName:user.UserName,
        PhoneNumber:user.PhoneNumber,
        Id:user.Id,
      })
      Update()
    }
}, [user]);


const Update = ()=>{
}


  const UpdateInfo = async () => {
    try {
      fetch('https://apieasyprint20210215153907.azurewebsites.net/api/signin', {
       method: 'POST',
       headers: {
       Accept: 'application/json',
        'Content-Type': 'application/json'
      },
       body: JSON.stringify({
        Email:email,
        UserName: userName,
        PasswordHash: password,
        PhoneNumber: phoneNumber
      })
     }).then((response) => response.json())
     .then((response) => {
     setUser({
       Email: response.data.email,
      PhoneNumber: response.data.phoneNumber,
      UserName:response.data.userName, 
      EmailConf:response.data.emailConfiremd,
      errorMassage:response.data.errorMessage,
      Id:response.data.id,
      Token:response.data.token,
    });
     })
     .catch((error) => {
      console.error(error);
    });
    } catch (error) {
      console.log('حدث خطأ! ', error)
    }
  }
  return (

    <SafeAreaView>

    <View style={styles.header}> 
    <Ionicons  name="chevron-back" size={24} color="white" onPress={() => GoToProfileScreen()} />
    <View style={styles.ht}>
      <Text style={styles.title}> تعديل بيانات</Text>
      </View></View>
     
   
      <View style={styles.container}>

      <View style={styles.action}>
          <FontAwesome name="user-o" color="#333333" size={20} />
          <TextInput
            placeholder=" الاسم الاول"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={styles.textInput}
          />
          </View>

        <View style={styles.action}>
          <FontAwesome name="user-o" color="#333333" size={20} />
          <TextInput
            placeholder=" الاسم الاخير"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={styles.textInput}
          />
        </View>
        
        <View style={styles.action}>
          <Ionicons name="ios-clipboard-outline" color="#333333" size={20} />
          <TextInput
            multiline
            numberOfLines={3}
            placeholder="نبذه عني"
            placeholderTextColor="#666666"
            autoCorrect={true}
            style={[styles.textInput, {height: 40}]}
          />
        </View>

        <View style={styles.action}>
          <Feather name="phone" color="#333333" size={20} />
          <TextInput
            placeholder="رقم الجوال"
            placeholderTextColor="#666666"
            keyboardType="number-pad"
            autoCorrect={false}
            style={styles.textInput}
          />
        </View>

        <View style={styles.action}>
          <FontAwesome name="globe" color="#333333" size={20} />
          <TextInput
            placeholder="الدولة"
            placeholderTextColor="#666666"
            autoCorrect={false}
          
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
            placeholder="المدينة"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={styles.textInput}
          />
        </View>
        <View style={styles.contant}>

        <TouchableOpacity style={styles.button}  onPress={()=>UpdateInfo()}>
               
                <Text style={styles.userBtnTxt}>تحديث</Text>
           </TouchableOpacity></View>

 </View> 

  </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
  
    backgroundColor:'#fff',
    padding:"5%",
    
   },

   contant:{
    
   alignItems: 'center',
   alignContent: 'center',
  },
  textInput: {
    flex: 1,
    paddingLeft: 65,
    color: '#333333',
    justifyContent:"center",
    alignItems:'center'
  },
  action: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 1,
  },

  userInfoSection: {
    backgroundColor:'#fff',
    alignItems: 'flex-end',
    paddingHorizontal: '5%',
    marginBottom: '3%',
    padding:'1%',
    
    
  },
  avatar: {
    
    width: 80,
    height: 80,
    borderRadius: 40, 
    margin: 10,
  },

  tt:{
    
    marginTop:'5%',
    alignContent:'flex-end',
    marginBottom: '15%',
    fontSize:24,
  },
  cont:{
    flexDirection: 'row-reverse',
     marginTop: 15
  },
  
  caption: {
   
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
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
 
  userBtn: {
    borderWidth: 2,
    borderRadius: 3,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginHorizontal: 5,
    flexDirection: 'row',

  },
  
  userBtnWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginBottom: "10%",
    marginTop:"10%"
  },
  userBtnTxt: {
    padding:'2%',
   fontSize:15,
   color:"#fff",
   
 },
 header: {
   width: '100%',
   height:'20%',
   padding:"2%",
   backgroundColor:'#009387',
   flexDirection: "column",
   justifyContent:"center",
   alignContent:"center"
   //opacity: 0.5
   
 },
 ht:{
  
   justifyContent:"center",
   alignItems:'center'
 },
 title: {
   fontSize: 20,
   fontWeight: 'bold',
   color: 'white',
  
 },
 button: {
  alignItems: 'center',
  alignContent: 'center',
  textAlign: 'center',
  borderColor: '#49c3c6',
  borderWidth: 1,
  marginTop: 15,
  borderRadius:30,
  width: 130,
  backgroundColor:'#009387'
},
});
