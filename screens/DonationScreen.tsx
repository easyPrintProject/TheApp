import * as React from 'react';
import {  StackScreenProps } from '@react-navigation/stack';
import { StartParamList} from '../types';
import { StyleSheet, Image, Button, Alert, Text, View, ImageBackground, } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function DonationScreen({navigation}: StackScreenProps<StartParamList>) {
  const goHome = ()=>{
    navigation.goBack();
  }
  return (

    <View style={styles.container}>
          <View><StatusBar style="dark" /></View>

      <View style={{ paddingTop: -100 }}>
        <Image source={require("../assets/images/don.jpg")}
          style={{ height: 400, width: 450, }} /></View>
      <Text style={styles.Text1}>ساهم في الحفاظ على بيئتك</Text>
      <Text style={styles.Text2Style}>
        تعود أهميّة إعادة التدوير إلى قدرتها على إنقاذ 19 شجرة تُخلّص الغلاف الجوّي كلّ عام من 127كغم من ثاني أكسيد الكربون، وبما أنّ عملية صناعة الورق تستهلك الكثير من الموارد، فالتدوير يُساهم في توفير 1,500 لتر من النفط، و2.68م2 من مساحة مَكبّ النفايات، و4,400 كيلو واط من الطاقة، و29,000 لتر من الماء ولكن نحن في تطبيقنا نهدف إلى أن نكون جميعنا مساهمون في تقليل مخلفات الورق، دفن الورق أو حرقه أو استيراد الورق. بالطبع، ستكون مستفيد من هذا التبرع من خلال الحصول على خصومات تصل إلى 10% عند طلب الطباعة من المكتبة التي تبرعت لها!
</Text>
<Text style={styles.Text1}>شروط التبرع:</Text>

<Text style={styles.Text2}>
•	كمية الورق 10 سم ويتم قياسها بالمسطرة.
</Text>
<Text style={styles.Text2}>
•	أن يكون الورق نظيف.
</Text>


<View style={styles.button}>
            <Button 
        title=' العودة للصفحة الرئيسية '
        color='white' 
              onPress={() => goHome()}
/>
    </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',

  },
  Text2: {
    textAlign: 'center',
    fontSize: 12,
    marginTop: 15,
    fontWeight: 'bold',
  },
  Text1: {
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
    color: '#009387',

    justifyContent: 'center',
    
  },
  Text2Style:{
    textAlign: 'center',
    fontSize: 12,
    marginTop: 15,
    paddingRight: 15,
    paddingLeft: 15,
    fontWeight: 'bold',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#009387',
    borderColor: '#009387',
    borderWidth: 1,
    marginTop: 20,
    width: '100%'
},
});