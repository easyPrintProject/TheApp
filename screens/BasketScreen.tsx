import React from 'react'
import { Button, StyleSheet, Text, View,Image } from 'react-native'
import { Card } from 'react-native-elements';

export default function BasketScreen() {
    return (
        <View>
                <Text style={(styles.headertext)}> طلبات التوصيل</Text>

        <Image source={require('../assets/images/1.jpg')}style={{height:200, width:200 ,borderWidth:2,marginTop:"15%",marginHorizontal:90}}/>
      <View style={styles.cardStyle}>
      <Card>
          <View style={(styles.text)}>
          <Text style={{ margin:5}}> uk,</Text>
      
          <View><Text style={{ marginTop:120, marginBottom:-30, textAlign: 'right' }}> نوع الورق </Text>
        < Option
        options={['عادي', 'مقوى', 'لماع', 'معاد استخدامه']}
        onChange={(option: any) => {
          console.log(option);
        }}/></View>
          </View>
          <View style={styles.buttonStyle}> 
          <Button
        title=" أختيار الموقع الحالي" 
        onPress={() =>('Simple Button pressed')}
      />
</View>
        </Card>
    
      <Card>
          <View style={(styles.text)}>
          <Text style={{ margin:5}}> uk,</Text>
         
          </View>
          <View style={styles.buttonStyle}> 
          <Button
        title=" أختيار الموقع الحالي" 
        onPress={() =>('Simple Button pressed')}
      />
</View>
        </Card>
      </View>
    </View>
    )}
const styles = StyleSheet.create({
    cardStyle:{
marginTop: 50,
    },

    buttonStyle:{
paddingTop: 20,
    },
    text:{
      textAlign:'right',
      justifyContent:'flex-start',
      paddingLeft:232,
      marginTop:22
      
    },
    headertext:{
        flexDirection:"row",
        padding:6, 
        paddingTop:15,
        width:"100%",
        height:"10%",
         justifyContent:"center",
         alignItems:"center",
         backgroundColor:"#E6E6E6",
         marginTop:"10%",
         alignSelf:"auto",
         textAlign:"center",
         fontSize:20,
     
       
        },

}
)