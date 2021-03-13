import * as React from 'react';
import { StyleSheet, SafeAreaView, Image, Text ,Alert, Modal, Pressable, ImageBackground} from 'react-native';
import FontAwesome from '@expo/vector-icons/build/FontAwesome';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { View } from '../components/Themed';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {AccountParamList} from '../types'

//ثابت في كل الصفحات 
import { StackScreenProps } from '@react-navigation/stack';


export default function EditAccountScreen( {navigation}: StackScreenProps<AccountParamList> ) {

  return (
    <SafeAreaView>
    <View style={styles.container}>
      <Text style={styles.title}>تعدييييل بيانات الحساب</Text>
      </View>

      <View style={[styles.userInfoSection ,styles.cont ]}>
      <Image source={require('../assets/images/av1.png')} style={styles.avatar}/>

      <View>

      <Text style={styles.tt}>User Full Name</Text>

      <Text style={styles.caption}>user Email</Text>
      
      </View> 
     </View>

    <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color="#80CBC4 " size={20}/>

          <Text style={styles.tt2} >SA</Text>
    </View>

        <View style={styles.row}>
          <Icon name="phone" color="#80CBC4 " size={20}/>
          <Text style={styles.tt2}>Phone number</Text>
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
    height:'20%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    backgroundColor:'#EF9A9A',
    //opacity: 0.5
    
  },

  title: {
  
    marginTop: '10%',
    marginRight:'10%',
    fontSize: 20,
    fontWeight: 'bold',
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
    
  }
   
});
