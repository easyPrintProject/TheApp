import * as React from 'react';
import { StyleSheet, Image, Button, SafeAreaView } from 'react-native';
import { Text, View } from '../components/Themed';
<<<<<<< Updated upstream
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


    <Text  style={styles.title}>اهلا بكم بمنصة الطباعة الالكترونية </Text>

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

=======
 import { useGlobalState, GlobalStateInterface } from '../components/StateProvider';
import { Types, UserType } from '../components/Reduser';
export default function HomeScreen({navigation }: StackScreenProps<HomeParamList>) {

 // const myContext = useContext(NewContext);
 const {state ,setState } = useGlobalState();
 // const { state, dispatch } = useContext(AppContext);

 useEffect(() => {
    }, [])



 const CheckUser = () => {
   if ( state.Email==null) {
     return(
     
       <View style={styles.topcontrap}>
       <TouchableOpacity  onPress={() => GoToLogin()} style={styles.button}>
        <Text style={{color:"#E57373"}}>تسجيل</Text>
       </TouchableOpacity>

      <TouchableOpacity onPress={() => GoToSignUp()} style={styles.button}>
       <Text style={{color:"#E57373"}}>حساب جديد</Text>
      </TouchableOpacity></View>);           
   } 
   else {
     return(
       <View style={styles.topcontrap}>
      <TouchableOpacity  style={styles.button}>
       <Text style={{color:"#E57373"}}> {state.UserName}مرحبا </Text>
      </TouchableOpacity></View>); 
   }  
 }
 const GoToLogin = () => {
   navigation.navigate('LoginScreen');
 };
 const GoToSignUp = () => {
   navigation.navigate('SigninScreen');
 };
 
 return (
     <SafeAreaView >
               
              
         <View style={styles.cont}> 
         <View style={styles.topcont}>{CheckUser()}</View>
              
              <Text style={styles.title}>EaSY PRINT</Text>
              

              <View style={styles.menuWrapper}>
              <TouchableOpacity style={styles.but}>
               <Text style={styles.options}>طلب طباعة</Text>
              </TouchableOpacity>
            
               <TouchableOpacity style={styles.but}>
                <Text style={styles.options}>ملزماتي</Text>
              </TouchableOpacity>

             <TouchableOpacity style={styles.but}>
              <Text style={styles.options}>تبرع</Text>
            </TouchableOpacity>

          </View> 
          </View>

   </SafeAreaView>
 );
}

const styles = StyleSheet.create({

  menuWrapper: {
    alignContent:'space-around'
  },

 title: {
   color:"black",
   fontSize: 10,
   fontWeight: 'bold', 
 },

 header:{
   flexDirection:"row",
   padding:6, 
    marginTop:"2%",
    alignSelf:"auto"

 },

 cont:{
   
  width: '100%',
  height:'100%',
  alignItems: "center",
  

 },
 

 but:{
  justifyContent:"center",
  alignContent:'space-around',
  flexDirection: 'row-reverse',
    paddingVertical: '5%',
    paddingHorizontal: '3%',
    padding:'1%',
    backgroundColor:"#F44336",
    
  
   
 },

topcont: {
     width:'100%',
     
     
      },
      
topcontrap:{
  height:'30%',
  flexDirection:"row",
  alignItems: "flex-end",
  justifyContent: "flex-start",
     backgroundColor:"#CE93D8",
   
},

button:{
  width:90,
  height:25,
  alignItems:"center",
  backgroundColor:'#D81B60',
  margin:"3%",
    padding:'1%', 
  
},

options:{
 fontWeight: "bold",
  color:"#FFFFFF", 
  fontSize:16
},



});
>>>>>>> Stashed changes
