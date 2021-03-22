import * as React from 'react';
import { StyleSheet, SafeAreaView, Image, Text ,Alert, Modal, Pressable, ImageBackground} from 'react-native';
import FontAwesome from '@expo/vector-icons/build/FontAwesome';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { View } from '../components/Themed';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {AccountParamList} from '../types'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { DrawerActions } from '@react-navigation/native';
//ثابت في كل الصفحات 
import { StackScreenProps } from '@react-navigation/stack';


export default function EditAccountScreen( {navigation}: StackScreenProps<AccountParamList> ) {
  const GoToAccount = () => {
    navigation.navigate("AccountScreen");
}
  return (
    
    <SafeAreaView>
      <View style= {styles.pageStyle}></View>
    <View style={styles.container}>
    <View style={styles.icon}>
                <Ionicons name="chevron-back" size={24} color="white" onPress={() => GoToAccount()} />
            </View>
    <View style={styles.icon2}>
                <Ionicons name="menu-outline" size={24} color= 'white' 
  onPress={() => navigation.dispatch(DrawerActions.openDrawer())}></Ionicons></View>
      <Text style={styles.title}>تعديل بيانات الحساب</Text>
      </View>

      <View style={[styles.userInfoSection ,styles.cont ]}>
      <Image source={require('../assets/images/av1.png')} style={styles.avatar}/>

      <View>

      <Text style={styles.tt}>User Name</Text>

      <Text style={styles.caption}>Email</Text>
      
      </View> 
     </View>

    <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color="#80CBC4 " size={20}/>

          <TextInput style={styles.tt2} placeholder='اسم المدينة'/>
    </View>

        <View style={styles.row}>
          <Icon name="phone" color="#80CBC4 " size={20}/>
          <TextInput style={styles.tt2} placeholder='رقم الجوال' /> 
        </View>

    </View>

     {/* <View style={styles.infoBoxWrapper}>
          <View style={[styles.infoBox,styles.cont3]}>
            <Text>140.50</Text>
            <Text>Wallet</Text>
          </View>
          
      </View>  */}

      <View style={styles.menuWrapper}>
        <TouchableOpacity style={styles.menuItem}>
            <Icon name="heart-outline" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Your Favorites</Text>
          </TouchableOpacity>
     </View>

         
          
</SafeAreaView>


  );
    }

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height:'22%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    backgroundColor:'#49c3c6',
    //opacity: 0.5
    
  },

  pageStyle:{
backgroundColor: 'white'

  },

  title: {
  
    marginTop: -10,
    marginRight:'27%',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'

  },

  // button: {
  //   padding: 20,
  //   margin:20,
  //   borderRadius: 30,
  //  width:150,  
  //  flexDirection: 'column',
  //  paddingHorizontal:20}, 

  userInfoSection: {
    
    alignItems: 'flex-end',
    
    paddingHorizontal: '5%',
    marginBottom: '3%',
    padding:'1%',
    
  },
  
  caption: {
   
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },

  row: {
    flexDirection: 'row-reverse',
    marginBottom: '2%',
  },

  infoBoxWrapper: {

    alignItems: 'flex-end',
    justifyContent: 'center',
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },

  infoBox: {
    width: '50%',
    
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
    color: '#80CBC4',
    marginLeft: 20,
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
    fontSize:24,
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

icon: {
  marginRight: "90%",
  paddingLeft: 25,
  marginTop: 20,
  backgroundColor:'#49c3c6'

},
icon2: {
  marginLeft: "90%",
  paddingRight: 25,
  marginTop: -25,
  backgroundColor:'#49c3c6'

}
   
});
