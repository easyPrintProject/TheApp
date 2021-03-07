import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/build/FontAwesome';
import * as React from 'react';
import { StyleSheet, SafeAreaView, Image,Text,View, Animated, ImageBackground} from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';

export default function editScreen() {
  return (
      <SafeAreaView style={{   flex:1,backgroundColor:'#fff'}}>
    <ScrollView style={(styles.container)} contentContainerStyle={{justifyContent:'center',alignItems:'center'}}
    showsVerticalScrollIndicator={false} >
      {/* <Image style={styles.userImg} 
      source={require('../assets/images/userimge.jpg')}/> */}
  

    
             <View style={styles.action}>
          <FontAwesome name="user-o" color="#333333" size={20} />

          <TextInput
            placeholder=" الاسم الاول"
            placeholderTextColor="#666666"
            autoCorrect={false}
           //* value={userData ? userData.fname : ''}
           //* onChangeText={(txt) => setUserData({...userData, fname: txt})}
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
              
             </ScrollView>   
              </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
   flex:1,
   backgroundColor:'#fff',
   padding:20
  },
  textInput: {
    flex: 1,
    //*marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#333333',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
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
    marginTop:90
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

  },
  userBtnWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 10,
    marginTop:30
  },
 
});
