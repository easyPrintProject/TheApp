import * as React from 'react';
import { StyleSheet, SafeAreaView, Image, Text ,Alert, Modal, Pressable, ImageBackground} from 'react-native';
import FontAwesome from '@expo/vector-icons/build/FontAwesome';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { View } from '../components/Themed';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {AccountParamList} from '../types'
import { DrawerActions } from '@react-navigation/native';
//ثابت في كل الصفحات 
import { StackScreenProps } from '@react-navigation/stack';
import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';


export default function EditAccountScreen( {navigation}: StackScreenProps<AccountParamList> ) {
  const GoToAccount = () => {
    navigation.navigate("AccountScreen");
}
  return (
    
    <SafeAreaView>

  
    <View>
    
                <Ionicons name="chevron-back" size={24} color="white" onPress={() => GoToAccount()} />
    <View style={styles.icon2}>
                <Ionicons name="menu-outline" size={24} color= 'white' 
  onPress={() => navigation.dispatch(DrawerActions.openDrawer())}></Ionicons></View>
      <Text style={styles.title}>تعديل بيانات الحساب</Text>
      </View>

      <ScrollView>

      <TextInput
            placeholder=" الاسم الاول"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={styles.textInput}
          />
          
  
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

  icon2: {
    marginLeft: "90%",
    paddingRight: 25,
    marginTop: 24,
    backgroundColor:'#49c3c6',
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
