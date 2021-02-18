import * as React from 'react';
import { StyleSheet , SafeAreaView,TextInput,FlatList,Keyboard,Image} from 'react-native';
import { Text, View } from '../components/Themed';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable'
import { ScrollView } from 'react-native-gesture-handler';
// const listItems =['العبيكان','امسيان','المعالي'];






export default function OrderScreen(this: any) {
    const state ={searchBarFocused : false}
    
 
  return (
      
      <SafeAreaView>
   <View  style={{backgroundColor:"#FFF" ,height:"100%"}}>
    <View style={{flexDirection:"row" , justifyContent:"space-evenly",alignItems:"flex-start", backgroundColor:"#F8E73D",height:60}}>
   
      <Text style={styles.title}>قائمة المكتبات  </Text>
    </View>
    <View style={{flexDirection:"row" ,width:"220%", justifyContent:"space-evenly",alignItems:"flex-start",backgroundColor:"#CECECE",height:40,marginTop:5}}>
    <Animatable.View animation="slideInRight" duration={500} style={{ height: 50, backgroundColor: 'white', flexDirection: 'row', padding: 5, alignItems: 'center' }}>
    <TextInput placeholder="Search" style={{fontSize:24,marginLeft:-320}}/>

     <Icon name="ios-search" style={{fontSize:24,marginLeft:-199,paddingStart:22}}/>
    </Animatable.View>

    </View>
    {/* <FlatList
    data={listItems}
    renderItem={({ item }) => <Text style={{padding:20,fontSize:20}}>{item}</Text>}
   keyExtractor={(item,index) => index.toString()}
   
   /> */}

<ScrollView scrollEventThrottle={16}>

<View style={{height:130,marginTop:20}}>
    
        <View style={{height:130,borderStyle:'solid',borderWidth:0.5,margin:9}}>
            
            <Image  source={require('../assets/images/printerIcon.jpg')}style={{height:90, width:90 ,borderRadius:40,borderWidth:2,marginTop:"5%",marginHorizontal:6}}/>
            <Text style={{flex:1,backgroundColor:'white',paddingTop:-100,textAlign:'center',alignItems:'center',justifyContent:'center',marginLeft:115,fontSize:20,marginTop:-60}}>مطبعة المعالي
</Text>
            </View>
        </View>
 
<View style={{paddingTop:6}}></View>



   
        <View style={{height:130,borderStyle:'solid',borderWidth:0.5,margin:9}}>
            
            <Image  source={require('../assets/images/printerIcon.jpg')}style={{height:90, width:90 ,borderRadius:40,borderWidth:2,marginTop:"5%",marginHorizontal:6}}/>
            <Text style={{flex:1,backgroundColor:'white',paddingTop:-100,textAlign:'center',alignItems:'center',justifyContent:'center',marginLeft:115,fontSize:20,marginTop:-60}}> مكتبة امسيان 
</Text>
            </View>
    
            <View style={{paddingTop:6}}></View>



   
<View style={{height:130,borderStyle:'solid',borderWidth:0.5,margin:9}}>
    
    <Image  source={require('../assets/images/printerIcon.jpg')}style={{height:90, width:90 ,borderRadius:40,borderWidth:2,marginTop:"5%",marginHorizontal:6}}/>
    <Text style={{flex:1,backgroundColor:'white',paddingTop:-100,textAlign:'center',alignItems:'center',justifyContent:'center',marginLeft:115,fontSize:20,marginTop:-60}}> مكتبة الخندق 
</Text>
    </View>
    <View style={{paddingTop:6}}></View>



   
        <View style={{height:130,borderStyle:'solid',borderWidth:0.5,margin:9}}>
            
            <Image  source={require('../assets/images/printerIcon.jpg')}style={{height:90, width:90 ,borderRadius:40,borderWidth:2,marginTop:"5%",marginHorizontal:6}}/>
            <Text style={{flex:1,backgroundColor:'white',paddingTop:-100,textAlign:'center',alignItems:'center',justifyContent:'center',marginLeft:115,fontSize:20,marginTop:-60}}>قرطاسية المطار 
</Text>
            </View>
            <View style={{paddingTop:6}}></View>



   
        <View style={{height:130,borderStyle:'solid',borderWidth:0.5,margin:9}}>
            
            <Image  source={require('../assets/images/printerIcon.jpg')}style={{height:90, width:90 ,borderRadius:40,borderWidth:2,marginTop:"5%",marginHorizontal:6}}/>
            <Text style={{flex:1,backgroundColor:'white',paddingTop:-100,textAlign:'center',alignItems:'center',justifyContent:'center',marginLeft:115,fontSize:20,marginTop:-60}}>طباعة نقية 
</Text>
            </View>

</ScrollView>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
      marginTop:15,
    color:"#484E50",
    fontSize: 20,
    fontWeight: 'bold',
 

  }
});
