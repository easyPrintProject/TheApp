import React from 'react'
import { Button, StyleSheet, Text, View,Image } from 'react-native'
import { Card } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useGlobalState } from '../components/StateProvider';

export default function BasketScreen() {
    //calling the global state
    const {state ,setState } = useGlobalState();


    return (
        
        <View style={{backgroundColor:" #e47911", borderWidth:20, borderColor:"white", flex:1, flexDirection:"column",justifyContent:"center",alignContent:"center"}}>
            <SafeAreaView>
            <ScrollView>
            {/* {state.allIems?.slice(1).map(e => 

            <View style  ={{width:"95%", backgroundColor:"red", height:50}}>
                <Text>{e.courceMaterialTitle}</Text>
            </View>
             
             
             )} */}
             </ScrollView>
             </SafeAreaView>
        </View>
    )}
const styles = StyleSheet.create({
   

}
)