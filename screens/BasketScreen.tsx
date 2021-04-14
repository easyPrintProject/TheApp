import { AntDesign } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, View,Image, RefreshControl, Pressable, StatusBar } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useGlobalState } from '../components/StateProvider';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { BasketParamList } from '../types';
import { StackScreenProps } from '@react-navigation/stack';


const wait = (timeout: number) => {
    return new Promise(resolve => 
        setTimeout(resolve, timeout));
}

export default function BasketScreen({ navigation }: StackScreenProps<BasketParamList>,) {
    //calling the global state
    const {state ,setState } = useGlobalState();
    const [refreshing, setRefreshing]=  useState(false);
    const [sum, setSum] = useState(0);
    const [total, setTotal] = useState(0);
    useEffect(() => {
       setTotal(0);
       setTotal((sum)+(sum*0.15))
    }, [sum])




    const onRef = React.useCallback(() =>  {
        setRefreshing(true);
        setSum(0);
        setitems([{
            itemId: "",
            itemPrice: 0,
            printingShopID: "",
            courseID: "",
            courseName: ""
        }]);
        if (state.orderId!=null || state.orderId!=""){
            try {
              fetch('https://apieasyprint20210215153907.azurewebsites.net/api/items/'+state.orderId, {
               method: 'GET',
               headers: {
               Accept: 'application/json',
                'Content-Type': 'application/json'
              }
             }).then((response) => response.json())
             .then((response) => {
                 var i = 0;
               response.forEach( (p:item) => {
                 i+=p.itemPrice;
                //  setSum(sum+p.itemPrice)
                 setitems( Item =>
                   [...Item,
                     {itemId:p.itemId,
                      itemPrice:p.itemPrice,
                      printingShopID:p.printingShopID,
                      courseID:p.courseID,
                      courseName:p.courseName,
                      }])
               });
               setSum(i);
             })
             .catch((error) => {
              console.error(error);
            });
            } catch (error) {
              console.log('حد! ', error)
            }  
          }
          
          wait(2000).then(()=> setRefreshing(false));
    }, [])

    type item = {
        itemId: string,
        itemPrice: number,
        printingShopID: string,
        courseID: string,
        courseName: string
      };
      const [items , setitems ] = React.useState(
        [{
            itemId: "",
            itemPrice: 0,
            printingShopID: "",
            courseID: "",
            courseName: ""
        }]
      );

      const deleteElement =( id:string)=>{

      }
      const goToPayment = () => {
        fetch('https://apieasyprint20210215153907.azurewebsites.net/api/UpdateStatusCustomer/'+state.orderId+'/'+total, {
          method: 'GET',
          headers: {
          Accept: 'application/json',
           'Content-Type': 'application/json'
         }
        }).then((response) => response.json())
        .then((response) => {
        })
        .catch((error) => {
         console.error(error);
       });
        navigation.navigate("PaymentScreen");
      };

    const CheckBasket = () =>{
        if(items.length<=1)
        return (<View style={{alignItems:"center", justifyContent:"center", flexDirection:"row"}}>
                <View style={{alignItems:"center"}}>
                    <AntDesign name="caretup" size={29} style={{ marginTop:15, marginLeft:5, color:"white"}}  />
                     <Text>السلة فارغة</Text>
                     <Text>اسحب لأعلى لتحديث السلة</Text>
                     <MaterialCommunityIcons name="basket-outline" size={120} color="white" style={{marginTop:100}} />

                  </View>
                </View>);
        else
        return(<View>
            {items.slice(1).map(e =>
               <View style  ={{ backgroundColor:"#D8BFD8", height:"auto", marginTop:2, marginBottom:2, borderBottomWidth:1, borderBottomColor:"#FE1592", alignItems: "flex-end", padding:5, flexDirection:"row-reverse",alignContent:"flex-end",justifyContent:"space-between" }}>
                    <Text style={{color:"white", fontSize:14}}>{e.courseName}</Text>
                    <Text style={{color:"white", fontSize:15}}>{e.itemPrice} ريال </Text>
                    <Pressable onPress={()=>deleteElement(e.courseID) }>  
                        <AntDesign name="delete" size={20} style={{ marginTop:15, marginLeft:5, color:"red"}}  />
                   </Pressable>
              </View>
             )}   
         </View>);
    }

    return (
        
     <SafeAreaView style={{backgroundColor:" #E3E3E3", borderWidth:20, marginTop: 50, borderColor:"white", flex:1, flexDirection:"column",justifyContent:"center",alignContent:"center"}}>
             <StatusBar backgroundColor="#009387" barStyle="dark-content" />

            <ScrollView contentContainerStyle={{flex:1, backgroundColor:"#E3E3E3", alignItems:"stretch", justifyContent:"flex-start",width:"100%"}} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRef} />}>
             {CheckBasket()}
             <View style ={{borderTopColor:"gray",borderTopWidth:3, width:"100%"}}>

                 {/* for the sumation */}

                 <View style={{ alignItems: "flex-end", padding:5, flexDirection:"row-reverse",alignContent:"flex-end",justifyContent:"space-between", marginTop:"20%" }}>
                   <Text>المجموع</Text>
                 <Text>  {sum}ريال </Text>
                 </View>


                 {/* for the tasxs */}


                 <View  style={{ alignItems: "flex-end", padding:5, flexDirection:"row-reverse",alignContent:"flex-end",justifyContent:"space-between" }}>
                 <Text>الضريبة المضافة (15%)</Text>
                 <Text> {(sum*0.15)}ريال  </Text>
                 </View>


                 {/* for the totall  */}


                 <View  style={{ alignItems: "flex-end", padding:5, flexDirection:"row-reverse",alignContent:"flex-end",justifyContent:"space-between" }}>
                    <Text style={{    fontWeight: 'bold'}}>الاجمالي</Text>
                    <Text style={{    fontWeight: 'bold'}}> {total}ريال  </Text>
                 </View>
                
                 <Button title="الذهاب للدفع" color='black' onPress={() => goToPayment()}/>
             </View>
             </ScrollView>
             </SafeAreaView>
    )}
const styles = StyleSheet.create({
   

}
)