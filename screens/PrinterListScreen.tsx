import * as React from 'react';
import { StyleSheet , SafeAreaView,TextInput,FlatList,Keyboard,Image} from 'react-native';
import { Text, View } from '../components/Themed';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable'
import { ScrollView } from 'react-native-gesture-handler';
const listItems =['العبيكان','امسيان','المعالي'];

export default function OrderScreen(this: any) {
    const state ={searchBarFocused : false}
    
 
  return (
      
      <SafeAreaView>
   <View  style={{backgroundColor:"#FFF" ,height:"100%"}}>
    <View style={{flexDirection:"row" , justifyContent:"space-evenly",alignItems:"flex-start", backgroundColor:"#96C493",height:60}}>
   
      <Text style={styles.title}>قائمة المكتبات  </Text>
    </View>
    <View style={{flexDirection:"row" ,width:"220%", justifyContent:"space-evenly",alignItems:"flex-start",backgroundColor:"#96C493",height:40,marginTop:5}}>
    <Animatable.View animation="slideInRight" duration={500} style={{ height: 50, backgroundColor: 'white', flexDirection: 'row', padding: 5, alignItems: 'center' }}>
    <TextInput placeholder="Search" style={{fontSize:24,marginLeft:-320}}/>

     <Icon name="ios-search" style={{fontSize:24,marginLeft:-199,paddingStart:22}}/>
    </Animatable.View>

    </View>
  
      </View>
 
<ScrollView
scrollEventThrottle={16}
>
<Text style={{flex:1,backgroundColor:'white',paddingTop:20}}>
    المعالي
</Text>
<View style={{height:130,marginTop:20}}>
    <ScrollView>
        <View style={{height:130}}>
            <View style={{flex:2}}>
            <Image
        
        source={require('../assets/images/printerIcon.jpg')}style={{    height:50,
          width:50 
        }}
      />
            </View>
        </View>
    </ScrollView>

</View>

</ScrollView>
  
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
