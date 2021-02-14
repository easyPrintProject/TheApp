import * as React from 'react';
import { StyleSheet,Image,Button, Alert } from 'react-native';

import { Text, View } from '../components/Themed';

export default function DonationScreen() {
  return (
    <View style={styles.container}>
 <Image
  style={styles.ImgePageDonation}
     
        source={require('../assets/images/PrinterIcon.jpg')}
/>

<View>

<Text style={styles.Textone}>
           لا ترميها 
تبرع بورقك والملازم المستعمل 

</Text></View>
<Text style={styles.Texttwo}>


  (( ورق قديم-ورق مستعمل نظيف-ملازم مستعملة)
للحفاظ على بيئتك تبرعك بالورق يمنع حرقه في
 المخلفات او دفنه, تبرعك بالورق يساعد على تقليل
 استيراد الورق ويدعم صناعة الورق الوطنية باعادة تصنيع
 الورق المستعمل
شروط التبرع:
الورق نظيف الاستخدام 
كمية الورق 10سم 
عن طريق قياسها بالمسطرة 

عند التبرع تحصل على خصم لطباعة في تطبيقنا 10%

مكان التبرع:
مكتبة المعالي
طريق السلام- شارع رفيدة الأنصاري - 
امام شرطة الفيصلية 
</Text>

 <View style={{
                    marginHorizontal:55,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:10,
                    backgroundColor:"#BCC6CC",
                    paddingVertical:10,
                    borderRadius:23,
                    width:40,
                


                }}>
                    <Button
                     onPress={() => alert('Home page')}
                     title="< "
                     color="#17202A"
                     

                    />
       </View>
    </View>
  

 


  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  
  ImgePageDonation:{
    width: 50,
    height: 200,
    resizeMode: 'stretch',
padding:99,
marginBottom:290,
marginRight:190,

  },
  Textone:{
    marginTop:-420,
    marginLeft:220,
    marginHorizontal:15,
    fontSize:20,
    fontWeight: "bold"

  },
  Texttwo:{
    fontSize: 16,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 20,
    marginTop:-120

  }

});


