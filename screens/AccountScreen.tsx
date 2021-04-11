import * as React from 'react';
import { StyleSheet, SafeAreaView, Image, Text ,Alert, Modal, Pressable, ImageBackground, } from 'react-native';
import FontAwesome from '@expo/vector-icons/build/FontAwesome';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { View } from '../components/Themed';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {AccountParamList} from '../types'
import { useGlobalState, GlobalStateInterface } from '../components/StateProvider';
import { StackScreenProps } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { DrawerActions } from '@react-navigation/native';
import { Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { color } from 'react-native-reanimated';

export default function AccountScreen({navigation}: StackScreenProps<AccountParamList> ) {
// ميثود للذهاب الى صفحة التعديل 
const   GoToEditAccountScreen  = () => {

  navigation.navigate('EditAccountScreen');
}
const   GoToBasketScreen  = () => {

  navigation.navigate('BasketScreen');
}
const   GoToEditAdress  = () => {

  navigation.navigate('Address');
}

const   GoToSuggestionsScreen = () => {

  navigation.navigate('SuggestionsScreen');
}

const   GoToFeedbackScreen = () => {

  navigation.navigate('FeedbackScreen');
}


  const {state ,setState } = useGlobalState();
 

  React.useEffect(() => {
    
     }, [])


  return (
    <SafeAreaView>
    <View style={styles.container}>
    <View><StatusBar style="dark" backgroundColor="#49c3c6"/></View>
    <View style={styles.icon2}>
    <Ionicons name="menu-outline" size={24} color= 'white' 
  onPress={() => navigation.dispatch(DrawerActions.openDrawer())}></Ionicons></View>
      <Text style={styles.title}> الحساب الشخصي</Text>
      </View>

<View style={styles.userInfoSection}>
      <View style={styles.cont }>
      <Image source={require('../assets/images/av2.png')} style={styles.avatar}/>
      <Text style={styles.caption}>{state.Email}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => GoToEditAccountScreen()}>
<Text style={styles.userBtnTxt} > تعديل البيانات</Text>
</TouchableOpacity></View>
    
     

    <View style={styles.userInfoSection}>

        <View style={styles.row}>
          <Icon name="map-marker-radius-outline" color="#43A047" size={23}/>

          <Text style={styles.tt2} >{state.city}</Text>
    </View>

        <View style={styles.row}>
          <Icon name="phone-outline" color="#E74C3C" size={23}/>
          <Text style={styles.tt2}>{state.PhoneNumber}</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => GoToEditAdress()}>
<Text style={styles.userBtnTxt}> العنوان</Text>
</TouchableOpacity>
    </View>

       

      
     <View style={styles.menuWrapper}>
        <TouchableOpacity style={styles.menuItem}onPress={() => GoToBasketScreen()}>
            <Icon name="basket-outline" color="#85929E" size={25}/>
            <Text style={styles.menuItemText}>سلة مشترياتي</Text>
          </TouchableOpacity>
     </View>

     <View style={styles.menuWrapper}>
        <TouchableOpacity style={styles.menuItem}onPress={() => GoToSuggestionsScreen()}>
            <Icon name="pencil-outline" color="#2E86C1" size={25}/>
            <Text style={styles.menuItemText}>ارسل اقتراحك</Text>
          </TouchableOpacity>
     </View>

     <View style={styles.menuWrapper}>
        <TouchableOpacity style={styles.menuItem}onPress={() => GoToFeedbackScreen()}>
            <Icon name="star-outline" color="#F4D03F" size={25}/>
            <Text style={styles.menuItemText}>قيم الطلبات</Text>
          </TouchableOpacity>
     </View>


<View>
<View style={styles.contant}>


<TouchableOpacity  onPress={() =>navigation.goBack()}
        style={[styles.button2,{
            borderWidth: 1,
            marginTop:15,
        }]}>
            <Text style={styles.userBtnTxt}> خروج</Text>

        </TouchableOpacity>

</View></View>
          
</SafeAreaView>


  );
    }

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height:'15%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    backgroundColor:'#49c3c6',
    //opacity: 0.5
    
  },

  title: {
  
    marginTop: -16,
    marginRight:'33%',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },

  contant:{
    marginLeft:"2%",
    justifyContent:'flex-end',
padding:"3%"

  },
  userInfoSection: {
    
   
    paddingHorizontal: '5%',
    marginBottom: '3%',
    padding:'1%',
    
    
  },
  
  caption: {
   
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
    marginLeft:"30%"
  },

  row: {
    flexDirection: 'row-reverse',
    margin: '2%',
  },

 
  menuWrapper: {
    alignContent:'space-around'
  },

  menuItem: {
    flexDirection: 'row-reverse',
    paddingVertical: '5%',
    paddingHorizontal: '3%',
    padding:'1%'

  },

  menuItemText: {

    alignItems:'flex-end',
    color: '#00838F',
    marginRight: "10%",
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },

  avatar: {
    
    width: 80,
    height: 80,
    borderRadius: 40, 
    margin: 10,
  },

  cont:{
    flexDirection: 'row-reverse',
     marginTop: 15
  },
  cont3:{
    
    borderRightColor: '#dddddd',
    borderRightWidth: 1
  },
  tt:{
    
    marginTop:'5%',
    alignContent:'flex-end',
    marginBottom: '15%',
    fontSize:20,
    marginLeft:"25%"
  },
  cont2:{
    
    marginRight: 20,
    alignItems: 'flex-end',

  },
  tt2:{
    color:"#777777", 
    marginRight: '5%',
    fontSize:14,
    
    
  },
  icon2: {
    marginLeft: "90%",
    paddingRight: 25,
    marginTop: 24,
    backgroundColor:'#49c3c6',
    
},
button: {
  alignItems: 'center',
  alignContent: 'center',
  textAlign: 'center',
  borderColor: '#49c3c6',
  borderWidth: 1,
  
  borderRadius:30,
  width: 130,
  height:30,
  backgroundColor: '#49c3c6'
},

button2: {
  alignItems: 'center',
  alignContent: 'center',
  textAlign: 'center',
  borderColor: '#EC7063',
  borderWidth: 1,
  
  borderRadius:30,
  width: 130,
  height:30,
  backgroundColor: '#EC7063'
  
},
userBtnTxt: {
   padding:'2%',
  fontSize:15,
  color:"#fff",
  borderColor:"#49c3c6",
  
},
signIn: {
  width: '100%',
  height: 50,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 10

},
   
});
