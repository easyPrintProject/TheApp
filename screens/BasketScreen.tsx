import { AntDesign } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, View,Image, RefreshControl, Pressable } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useGlobalState } from '../components/StateProvider';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { remoteConfig } from 'firebase';


const wait = (timeout: number) => {
    return new Promise(resolve => 
        setTimeout(resolve, timeout));
}

export default function BasketScreen() {
    //calling the global state
    const {state ,setState } = useGlobalState();
    const [refreshing, setRefreshing]=  useState(false);
    const [sum, setSum] = useState(0);
    const [total, setTotal] = useState(0);
    const [totalAfteDescount, setTotalAfteDescount] = useState(0);
    const [coponCheck, setCoponCheck] = useState(false);
    const [coponString, setCoponString] = useState("");

    useEffect(() => {
       setTotal(0);
       setTotal((sum)+(sum*0.15))
       if(coponCheck == true){
         setTotalAfteDescount(0)
         setTotalAfteDescount((total) - (total*0.10))
       }
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


    const onCoponCheck = React.useCallback(( coponS: string) =>  {
      setRefreshing(true);
          try {
            fetch('https://apieasyprint20210215153907.azurewebsites.net/api/copon/'+state.orderId, {
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
          } catch (error) {
            console.log('حد! ', error)
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
        try {
          fetch('https://apieasyprint20210215153907.azurewebsites.net/api/items/'+id, {
           method: 'DELETE',
           headers: {
           Accept: 'application/json',
            'Content-Type': 'application/json'
          }
         }).then(res => res.json())
         .catch((error) => {
          console.error(error);
        });
        } catch (error) {
          console.log('problem withe the API ', error)
        }
        onRef();
        
      }
      const goToPayment = () => {

      }

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
        return(
        <View>
            {items.slice(1).map(e =>  
              <View style  ={{ backgroundColor:"#D8BFD8", height:"auto", marginTop:2, marginBottom:2, borderBottomWidth:1, borderBottomColor:"#FE1592", alignItems: "flex-end", padding:5, flexDirection:"row-reverse",alignContent:"flex-end",justifyContent:"space-between" }}>
                    <Text style={{color:"white", fontSize:14}}>{e.courseName}</Text>
                    <Text style={{color:"white", fontSize:15}}>{e.itemPrice} ريال </Text>
                    <Pressable onPress={()=>deleteElement(e.itemId) } >  
                        <AntDesign name="delete" size={20} style={{ marginTop:15, marginLeft:5, color:"red"}}  />
                   </Pressable>
              </View>
             )}

             <View style ={{borderTopColor:"gray",borderTopWidth:3, width:"100%"}}>
                                 
             <View  style={{ alignItems: "flex-end", padding:5, flexDirection:"row-reverse",alignContent:"flex-end",justifyContent:"space-between" }}>
                    <Text style={{    fontWeight: 'bold'}}>اضافة كوبون</Text>
                    <TextInput  onChangeText={(e) => setCoponString(e.toString())} style={{  backgroundColor:"white", width:"50%"}} />
                    <Pressable onPress={()=>onCoponCheck(coponString) } style={{  backgroundColor:"gray", padding:2}} >  
                     <Text style={{    fontWeight: 'bold'}}>تحقق</Text>
                   </Pressable>

                 </View>

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

                    {CheckCopon()}

                  <Button title="الذهاب للدفع" color='black' onPress={() => goToPayment()}/>
             </View>   
         </View>
         );
    }
    const CheckCopon = () =>{
         if(coponCheck == true )
         return(
          <View  style={{ alignItems: "flex-end", padding:5, flexDirection:"row-reverse",alignContent:"flex-end",justifyContent:"space-between" }}>
          <Text style={{    fontWeight: 'bold'}}> الاجمالي بعد الخصم (10%)</Text>
          <Text style={{    fontWeight: 'bold'}}> {totalAfteDescount}ريال  </Text>
       </View>
         )
         else{

         }
    }
    //main return 
    return (
        
     <SafeAreaView style={{backgroundColor:" #E3E3E3", borderWidth:20, borderColor:"white", flex:1, flexDirection:"column",justifyContent:"center",alignContent:"center"}}>
            <ScrollView contentContainerStyle={{flex:1, backgroundColor:"#E3E3E3", alignItems:"stretch", justifyContent:"flex-start",width:"100%"}} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRef} />}>
             {CheckBasket()}
             </ScrollView>
             </SafeAreaView>
    )}
const styles = StyleSheet.create({
   

}
)