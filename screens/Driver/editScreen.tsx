import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/build/FontAwesome';
import * as React from 'react';
import { StyleSheet, SafeAreaView, Image,Text,View, Animated, ImageBackground, KeyboardAvoidingView} from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import  { useContext, useState, useEffect } from 'react';
import { useGlobalState } from '../../components/StateProvider';

export default function editScreen() {
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
        goHome()
    }
}, [user]);


const goHome = ()=>{
}


  const signUp = async () => {
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
      <SafeAreaView style={{   flex:1,backgroundColor:'#fff'}}>
    <ScrollView style={(styles.container)} contentContainerStyle={{justifyContent:'center',alignItems:'center'}}
    showsVerticalScrollIndicator={false} >
      
  
<KeyboardAvoidingView behavior='position'>
<Image style={styles.userImg} 
      source={require('../../assets/images/userimge.jpg')}/> 
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
          //  value={userData ? userData.lname : ''}
           // onChangeText={(txt) => setUserData({...userData, lname: txt})}
            autoCorrect={false}
            style={styles.textInput}
          />
        </View>
        
        <View style={styles.action}>
          <Ionicons name="ios-clipboard-outline" color="#333333" size={20} />
          <TextInput
            multiline
            numberOfLines={3}
            placeholder="About Me"
            placeholderTextColor="#666666"
           // value={userData ? userData.about : ''}
            //onChangeText={(txt) => setUserData({...userData, about: txt})}
            autoCorrect={true}
            style={[styles.textInput, {height: 40}]}
          />
        </View>
        <View style={styles.action}>
          <Feather name="phone" color="#333333" size={20} />
          <TextInput
            placeholder="Phone"
            placeholderTextColor="#666666"
            keyboardType="number-pad"
            autoCorrect={false}
            //value={userData ? userData.phone : ''}
           // onChangeText={(txt) => setUserData({...userData, phone: txt})}
            style={styles.textInput}
          />
        </View>

        <View style={styles.action}>
          <FontAwesome name="globe" color="#333333" size={20} />
          <TextInput
            placeholder="Country"
            placeholderTextColor="#666666"
            autoCorrect={false}
           // value={userData ? userData.country : ''}
           // onChangeText={(txt) => setUserData({...userData, country: txt})}
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
            placeholder="City"
            placeholderTextColor="#666666"
            autoCorrect={false}
           // value={userData ? userData.city : ''}
           // onChangeText={(txt) => setUserData({...userData, city: txt})}
            style={styles.textInput}
          />
        </View>
    
                <Text style={styles.userBtnTxt}>تحديث</Text>
           </KeyboardAvoidingView>
             </ScrollView>    
              </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
   flex:1,
   backgroundColor:'#fff',
   padding:10
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
  title: {
    color:"red",
    fontSize: 20,
    fontWeight: 'bold',
  },
  userImg:{
    height:150,
    width:150,
    borderRadius:75,
    marginTop:"25%",
    marginLeft:"20%"
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
  userBtnTxt: {
    color: '#2e64e5',
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center',
   marginLeft:"40%",
    marginTop: 15,
  },
  userBtnWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginBottom: "10%",
    marginTop:"10%"
  },
 
});
