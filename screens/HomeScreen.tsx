import * as React from 'react';
import { StyleSheet, Image, Button, SafeAreaView } from 'react-native';
import { Text, View } from '../components/Themed';
export default function HomeScreen() {
  return (
    <SafeAreaView>
    <View style={styles.container}>
      
    <View  style={{backgroundColor:"#FFF" ,height:"100%"}}>
    <View style={{flexDirection:"row" , justifyContent:"space-evenly",alignItems:"flex-start", backgroundColor:"#5799E3",height:"10%"}}>
   
   
    <View style={{
                    marginHorizontal:55,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:5,
                    backgroundColor:"#BCC6CC",
                    borderRadius:100,
                    width:130,
                    height:60,

                    
                



                }}>
                    <Button
                     onPress={() => alert('Button with adjusted color pressed')}
                     title="تسجيل الدخول"
                     color="#17202A"
                     

                    />
       </View><View style={{
                   marginHorizontal:55,
                   alignItems:"center",
                   justifyContent:"center",
                   marginTop:5,
                   backgroundColor:"#BCC6CC",
                   borderRadius:100,
                   width:130,
                   height:60,
                



                }}>
                    <Button
                     onPress={() => alert('Button with adjusted color pressed')}
                     title="أنشاء حساب "
                     color="#17202A"
                     

                    />
       </View>
    <Image
        
        source={require('../assets/images/logo.png')}style={{    height:50,
          width:50 
        }}
      />

    <Text  style={styles.title}>اهلا بكم بمنصة الطباعة الاللللكترونية </Text>
</View>

     <View style={{
                    marginHorizontal:55,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:60,
                    backgroundColor:"#BCC6CC",
                    paddingVertical:10,
                    borderRadius:23,
                    width:300

                }}>
                    <Button
                     onPress={() => alert('Button with adjusted color pressed')}
                     title="مطبوعاتي"
                     color="#17202A"
                     
                    />
       </View>
       <View style={{
                    marginHorizontal:55,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:50,
                    backgroundColor:"#BCC6CC",
                    paddingVertical:10,
                    borderRadius:23
                }}>
                    <Button
                     onPress={() => alert('Button with adjusted color pressed')}
                     title="ملزمات"
                     color="#17202A"
                    />
       </View>
       <View style={{
                    marginHorizontal:55,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:50,
                    backgroundColor:"#BCC6CC",
                    paddingVertical:10,
                    borderRadius:23
                }}>
                    <Button
                     onPress={() => alert('Button with adjusted color pressed')}
                     title="تبرع"
                     color="#17202A"
                    />
       </View>
      </View>
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
    fontSize: 8,
    marginTop:70,
padding:20,
    color: '#17202A' , 
    fontWeight: 'bold',
    textAlign:'right',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '1%',
  },

}
);

