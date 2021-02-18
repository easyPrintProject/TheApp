import * as React from 'react';
import { StyleSheet , SafeAreaView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text, View } from '../components/Themed';

export default function OrderScreen() {
  return (
      <SafeAreaView style={styles.contener}>
   <View> 
     <View style={styles.header}>
        <Text style={styles.title}> EASY PRINT </Text>
    
    <View style={{flexDirection:"row", width:25,height:5, justifyContent:"space-between",alignItems:"flex-end",backgroundColor:"#4BBFF4",marginTop:10,marginRight:100}}>  
   
    
      <TouchableOpacity style={{borderWidth:0.5,borderRadius:20,height:30,width:77,alignItems:"center",backgroundColor:"#8C8787"}}>

<Text style={{color:"#FFFFFF"}}>تسجيل</Text>
</TouchableOpacity>

<TouchableOpacity style={{borderWidth:0.5,borderRadius:20,height:30,width:77,paddingHorizontal:"5%",justifyContent:"center",alignItems:"center",backgroundColor:"#8C8787"}}>
<Text style={{color:"#FFFFFF"}}>أنشاء حساب</Text>
</TouchableOpacity></View>
    

    
    </View>
  <View style={styles.view}>
  <TouchableOpacity style={{padding:6, width:500,height:120, justifyContent:"center",alignItems:"center",backgroundColor:"#4BBFF4",marginTop:90,paddingRight:100}}>
<Text style={{ marginHorizontal:20
,fontWeight: "bold", alignSelf: "center", textTransform: "uppercase",color:"#FFFFFF",alignItems:"center",justifyContent:"center",fontSize:25}}>طلب طباعة</Text>
</TouchableOpacity>
  </View>
  <View style={styles.view}>
  <TouchableOpacity style={{padding:6, width:500,height:120, justifyContent:"center",alignItems:"center",backgroundColor:"#8C8787",marginTop:10,paddingRight:100}}>
<Text style={{ marginHorizontal:20
,fontWeight: "bold", alignSelf: "center", textTransform: "uppercase",color:"#FFFFFF",alignItems:"center",justifyContent:"center",fontSize:25}}>ملزماتي </Text>
</TouchableOpacity>
  </View><View  style={styles.view}>
  <TouchableOpacity style={{padding:6, width:500,height:120, justifyContent:"center",alignItems:"center",backgroundColor:"#F8E73D",marginTop:10,paddingRight:120}}>
<Text style={{ marginHorizontal:20
,fontWeight: "bold", alignSelf: "center", textTransform: "uppercase",color:"#FFFFFF",alignItems:"center",justifyContent:"center",fontSize:25}}>تبرع </Text>
</TouchableOpacity>
  </View></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  title: {
    color:"black",
    fontSize: 15,
    fontWeight: 'bold',
    alignItems:"flex-start",
    marginRight:99
    
  },
  header:{
    flexDirection:"row",
    padding:6, 
    width:"100%",
    height:"10%",
     justifyContent:"center",
     alignItems:"center",
     backgroundColor:"#ED4BAC",
     marginTop:"2%",
     alignSelf:"auto"

  },
  contener:{
    backgroundColor:"white"
  },
  view:{
    flexDirection:"column"
  }
});
