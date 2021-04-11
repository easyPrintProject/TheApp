import * as React from 'react';
import { StyleSheet , SafeAreaView,TextInput, TouchableOpacity, Pressable, StatusBar} from 'react-native';
import { Text, View } from '../components/Themed';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable'
import { ScrollView } from 'react-native-gesture-handler';
import { StackScreenProps } from '@react-navigation/stack';
import { OrderParamList } from '../types';
import { useGlobalState } from '../components/StateProvider';

import {Card} from "../components/listItem"

export default function isPrintingOrder({navigation}: StackScreenProps<OrderParamList>) {


    const states ={searchBarFocused : false}
    //global state
    const {state ,setState } = useGlobalState();
   
    const GoToPrintOption2 = ( Printerid:string, Name:string) => {
      setState({...state,
                printerId:  Printerid,
                printerName: Name
              })
      navigation.navigate("PrintingOptionsScreen");
    };

    //Type for printers
    type printer = {
      prentingShopId: string,
      prenterName: string,
      isCourseMaterial: boolean,
      isService: boolean,
      ownerId: string
    }

    //printer opject to store data from API
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
        <StatusBar backgroundColor="#009387" barStyle="dark-content" />

          <View style={{flexDirection:"row" , justifyContent:"space-evenly",alignItems:"flex-start", backgroundColor:"#eee",height:60}}>
            <Text style={styles.title}>قائمة المكتبات</Text>

         </View>
                  <ScrollView scrollEventThrottle={16}>
           <View >
              {printers.slice(1).map(e => 
               <TouchableOpacity onPress={() => GoToPrintOption2(e.prentingShopId, e.prenterName)}>
                  <Card title={e.prenterName}/>
               </TouchableOpacity>
             )}
           </View>

         

         </ScrollView>
       </View>
     </SafeAreaView>
  );}

const styles = StyleSheet.create({

  title: {
      marginTop:15,
    color:"#484E50",
    fontSize: 20,
    paddingTop: 5,
    fontWeight: 'bold',}
});