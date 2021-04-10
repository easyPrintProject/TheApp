import React, { FunctionComponent, useState } from 'react'; // importing FunctionComponent
import { StyleSheet , SafeAreaView,TextInput,FlatList,Keyboard,Image, Button, Pressable, View} from 'react-native';
import { Text } from '../components/Themed';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { StackScreenProps } from '@react-navigation/stack';
import { PrintersListParamList, DocProp} from '../types';
import { useGlobalState } from '../components/StateProvider';
import { AntDesign, Feather, Ionicons } from '@expo/vector-icons';
type PrenterInfo  = {
  id: string,
}
export default function DocumentListScreen({navigation}: StackScreenProps<PrintersListParamList>) {
  // if fatema did not fix the search delete this 
    const stateS ={searchBarFocused : false} 
    
    // our glopal state :)
    const {state ,setState } = useGlobalState();

    // type for the doc loop 
    type cource = {
      courceMaterialId: string,
      courceMaterialTitle: string,
      courceMaterialDescreption: string,
      courceMaterialPrice: number,
      isAvailable: boolean,
      subjectId : string,
      printingShopId : string
    };

    // the opject for the doc loop
    const [courses , setCources ] = React.useState(
      [{
        courceMaterialId: "",
        courceMaterialTitle: "",
        courceMaterialDescreption: "",
        courceMaterialPrice: 0,
        isAvailable: true,
        subjectId : "",
        printingShopId : ""
      }]
    );

    //fuction for the loop 
    const GoToMaterialsDetailes = (e:cource) => {
      setState({
        ...state,
        MaterialId:e.courceMaterialId,
        courceMaterialTitle:e.courceMaterialTitle,
        courceMaterialDescreption:e.courceMaterialDescreption,
        courceMaterialPrice:e.courceMaterialPrice,
        isAvailable:e.isAvailable,
        subjectId:e.subjectId
      })
      navigation.navigate("MaterialsDetailsScreen");
    };


    //fuction that delete info from the glopal state and return back to the previos paje 
    const GoToPrintersList = () => {
      setState({
        ...state,
        printerId: "",
        printerName: "",
        MaterialId:"",
        courceMaterialTitle:"",
        courceMaterialDescreption:"",
        courceMaterialPrice:0,
        isAvailable:false,
        subjectId:""
      })
      navigation.goBack();
    };

    //useEffict call the api 
    React.useEffect(() => {

      try {
        fetch('https://apieasyprint20210215153907.azurewebsites.net/api/courcematerial/'+state.printerId, {
         method: 'GET',
         headers: {
         Accept: 'application/json',
          'Content-Type': 'application/json'
        }
       }).then((response) => response.json())
       .then((response) => {
         response.forEach( (p:cource) => {
           setCources( cources =>
             [...cources,
               {courceMaterialId:p.courceMaterialId,
                courceMaterialTitle:p.courceMaterialTitle,
                courceMaterialDescreption:p.courceMaterialDescreption,
                courceMaterialPrice:p.courceMaterialPrice,
                isAvailable:p.isAvailable,
                subjectId:p.subjectId,
                printingShopId: p.printingShopId
                }])
         });
       })
       .catch((error) => {
        console.error(error);
      });
      } catch (error) {
        console.log('حدث خطأ! ', error)
      }
      }, [state]);

  return (
 <SafeAreaView>
   <View  style={{backgroundColor:"#FFF" ,height:"100%"}}>
    <View style={{ flexDirection:"row",justifyContent:"space-between",backgroundColor:"#49c3c6",height:"13%"}}>
      <Pressable  onPress={()=>GoToPrintersList() }>  

      <Ionicons name="chevron-back" size={24} color="white" style={{marginTop:30}}  />
      <Text  style={{textAlign:'center',alignItems:'center',color:"white", fontSize: 22,fontWeight:"bold", marginBottom:10, paddingLeft:145}}> مكتبة {state.printerName}  </Text> 

               </Pressable>

   </View>

    <View style={{paddingTop:3}}>
      <Text style={{fontSize:15,textAlign:'center',alignItems:'center',justifyContent:'center'}}> سيتم توفير جميع الملخصات و الملازم جاهزه للطباعة</Text>
   </View>



  
   <ScrollView scrollEventThrottle={16}>

            <View  >
              {courses.slice(1).map(e => 
            <View >
              <View style={{paddingTop:6}}></View>
              <View style={{height:350,borderStyle:'solid',borderWidth:0.5,margin:9}}>
               <Image  source={require('../assets/images/5.jpg')}style={{height:200, width:200 ,borderWidth:2,marginTop:"5%",marginHorizontal:90}}/>
               <Text style={{flex:1,backgroundColor:'white',paddingTop:9,textAlign:'center',alignItems:'center',justifyContent:'center',marginLeft:5,fontSize:20,}}> {e.courceMaterialTitle} </Text>
                <View>
                  <Text style={{fontSize:15,textAlign:'center',alignItems:'center',justifyContent:'center',marginLeft:5,color:"tomato"}}>{e.courceMaterialPrice} ريال</Text>
               </View>      
               <View  style={{paddingTop:6}}>
                 <TouchableOpacity onPress={() => GoToMaterialsDetailes(e)} style={{borderWidth:1,height:42,width:"100%",marginLeft:1,justifyContent:"center",alignItems:"center",backgroundColor:"#e0dede"}}>
                   <Text style={{color:"black",fontWeight:"bold"}}>المزيد</Text>
                 </TouchableOpacity>
               </View>
             </View>
            </View>
             )}
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
