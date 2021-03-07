import React, { FunctionComponent } from 'react'; // importing FunctionComponent
import { StyleSheet , SafeAreaView,TextInput,FlatList,Keyboard,Image, Button} from 'react-native';
import { Text, View } from '../components/Themed';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { StackScreenProps } from '@react-navigation/stack';
import { PrintersListParamList} from '../types';
// const listItems =['العبيكان','امسيان','المعالي'];
type PrenterInfo  = {
  id: string,
}


export default function DocumentListScreen({navigation}: StackScreenProps<PrintersListParamList> , id: string) {
    const state ={searchBarFocused : false} 
    const GoToMaterialsDetailes = () => {
      navigation.navigate("MaterialsDetailsScreen");
    };
    type printer = {
      prentingShopId: string,
      prenterName: string,
      isCourseMaterial: boolean,
      isService: boolean,
      ownerId: string
    }
    const [printers , setPrinters ] = React.useState(
      [{
        prentingShopId: "",
        prenterName: "",
        isCourseMaterial: true,
        isService: true,
        ownerId: ""
      }]
    );
    React.useEffect(() => {

      try {
        fetch('https://apieasyprint20210215153907.azurewebsites.net/api/printingshop', {
         method: 'GET',
         headers: {
         Accept: 'application/json',
          'Content-Type': 'application/json'
        }
       }).then((response) => response.json())
       .then((response) => {
         response.forEach( (p:printer) => {
           setPrinters( printers =>
             [...printers, {prentingShopId:p.prentingShopId, prenterName:p.prenterName,isCourseMaterial:p.isCourseMaterial,isService:p.isService,ownerId:p.ownerId}])
         });
       })
       .catch((error) => {
        console.error(error);
      });
      } catch (error) {
        console.log('حدث خطأ! ', error)
      }
      }, []);

  return (
 <SafeAreaView>
   <View  style={{backgroundColor:"#FFF" ,height:"100%"}}>
    <View style={{flexDirection:"row" , justifyContent:"space-evenly",alignItems:"flex-start", backgroundColor:"#96C493",height:60}}>
      <Text style={styles.title}>  مطبعة المعالي</Text>
   </View>
    <View style={{flexDirection:"row" ,width:"220%", justifyContent:"space-evenly",alignItems:"flex-start",backgroundColor:"#96C493",height:40,marginTop:5}}>
      <Animatable.View animation="slideInRight" duration={500} style={{ height: 50, backgroundColor: 'white', flexDirection: 'row', padding: 5, alignItems: 'center' }}>
         <TextInput placeholder="Search" style={{fontSize:24,marginLeft:-320}}/>
        <Icon name="ios-search" style={{fontSize:24,marginLeft:-199,paddingStart:22}}/>
     </Animatable.View>
    </View>
    <View style={{paddingTop:3}}>
      <Text style={{fontSize:15,textAlign:'center',alignItems:'center',justifyContent:'center'}}> سيتم توفير جميع الملخصات و الملازم جاهزه للطباعة</Text>
   </View>
    {/* <FlatList
    data={listItems}
    renderItem={({ item }) => <Text style={{padding:20,fontSize:20}}>{item}</Text>}
   keyExtractor={(item,index) => index.toString()}
   
   /> */}
   <ScrollView scrollEventThrottle={16}>
    <View style={{height:360,marginTop:20}}>
     <View style={{height:350,borderStyle:'solid',borderWidth:0.5,margin:9}}>
        <Image  source={require('../assets/images/1.jpg')}style={{height:200, width:200 ,borderWidth:2,marginTop:"5%",marginHorizontal:90}}/>
        <Text style={{flex:1,backgroundColor:'white',paddingTop:9,textAlign:'center',alignItems:'center',justifyContent:'center',marginLeft:5,fontSize:20,}}>سلايدات مادة برمجة 
          1  
       </Text>
       <View>
          <Text style={{fontSize:15,textAlign:'center',alignItems:'center',justifyContent:'center',marginLeft:5,color:"red"}}>30 ريال </Text>
       </View>
       <View  style={{paddingTop:6}}>
          <TouchableOpacity onPress={() => GoToMaterialsDetailes()} style={{borderWidth:1,height:42,width:"100%",marginLeft:1,justifyContent:"center",alignItems:"center",backgroundColor:"#8C8787"}}>
            <Text style={{color:"#FFFFFF"}}>المزيد</Text>
         </TouchableOpacity>
       </View>
     </View>      
    </View>
    <View style={{paddingTop:6}}></View>
    <View style={{height:350,borderStyle:'solid',borderWidth:0.5,margin:9}}>
      <Image  source={require('../assets/images/5.jpg')}style={{height:200, width:200 ,borderWidth:2,marginTop:"5%",marginHorizontal:90}}/>
      <Text style={{flex:1,backgroundColor:'white',paddingTop:9,textAlign:'center',alignItems:'center',justifyContent:'center',marginLeft:5,fontSize:20,}}>  Big data </Text>
   <View>
     <Text style={{fontSize:15,textAlign:'center',alignItems:'center',justifyContent:'center',marginLeft:5,color:"red"}}>12 ريال </Text>
   </View>       
    <View  style={{paddingTop:6}}>
      <TouchableOpacity onPress={() => GoToMaterialsDetailes()} style={{borderWidth:1,height:42,width:"100%",marginLeft:1,justifyContent:"center",alignItems:"center",backgroundColor:"#8C8787"}}>
         <Text style={{color:"#FFFFFF"}}>المزيد</Text>
      </TouchableOpacity>
    </View>
    </View>
    <View style={{paddingTop:6}}></View>
    <View style={{height:350,borderStyle:'solid',borderWidth:0.5,margin:9}}>
       <Image  source={require('../assets/images/4.jpg')}style={{height:200, width:200 ,borderWidth:2,marginTop:"5%",marginHorizontal:90}}/>
       <Text style={{flex:1,backgroundColor:'white',paddingTop:9,textAlign:'center',alignItems:'center',justifyContent:'center',marginLeft:5,fontSize:20,}}>  استيمنت ادرة مشاريع نظم المعلومات </Text>
    <View>
        <Text style={{fontSize:15,textAlign:'center',alignItems:'center',justifyContent:'center',marginLeft:5,color:"red"}}>10 ريال </Text>
    </View>
    <View  style={{paddingTop:6}}>
      <TouchableOpacity onPress={() => GoToMaterialsDetailes()} style={{borderWidth:1,height:42,width:"100%",marginLeft:1,justifyContent:"center",alignItems:"center",backgroundColor:"#8C8787"}}>
        <Text style={{color:"#FFFFFF"}}>المزيد</Text>
     </TouchableOpacity>
    </View>
   </View>
  <View style={{paddingTop:6}}></View>
  <View style={{height:350,borderStyle:'solid',borderWidth:0.5,margin:9}}>
     <Image  source={require('../assets/images/3.jpg')}style={{height:200, width:200 ,borderWidth:2,marginTop:"8%",marginHorizontal:90}}/>
     <Text style={{flex:1,backgroundColor:'white',paddingTop:9,textAlign:'center',alignItems:'center',justifyContent:'center',marginLeft:5,fontSize:20,}}>تلخيص نظم معلومات    </Text>
     <View>
         <Text style={{fontSize:15,textAlign:'center',alignItems:'center',justifyContent:'center',marginLeft:5,color:"red"}}>25 ريال </Text>
     </View>
     <View  style={{paddingTop:6}}>
        <TouchableOpacity onPress={() => GoToMaterialsDetailes()} style={{borderWidth:1,height:42,width:"100%",marginLeft:1,justifyContent:"center",alignItems:"center",backgroundColor:"#8C8787"}}>
          <Text style={{color:"#FFFFFF"}}>المزيد</Text>
       </TouchableOpacity>
     </View>
   </View>
   <View style={{paddingTop:6}}></View>
    <View style={{height:350,borderStyle:'solid',borderWidth:0.5,margin:9}}>
      <Image  source={require('../assets/images/2.jpg')}style={{height:200, width:200 ,borderWidth:2,marginTop:"5%",marginHorizontal:90}}/>
      <Text style={{flex:1,backgroundColor:'white',paddingTop:9,textAlign:'center',alignItems:'center',justifyContent:'center',marginLeft:5,fontSize:20,}}>سلايدات داتا بيس 
        1  
      </Text>
      <View>
         <Text style={{fontSize:15,textAlign:'center',alignItems:'center',justifyContent:'center',marginLeft:5,color:"red"}}>15 ريال </Text>
     </View>
     <View  style={{paddingTop:6}}>
        <TouchableOpacity onPress={() => GoToMaterialsDetailes()} style={{borderWidth:1,height:42,width:"100%",marginLeft:1,justifyContent:"center",alignItems:"center",backgroundColor:"#8C8787"}}>
          <Text style={{color:"#FFFFFF"}}>المزيد</Text>
       </TouchableOpacity>
     </View>
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
