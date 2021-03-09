import React from 'react'
import { StyleSheet, View, TextInput, Text, TouchableOpacity, ScrollView, StatusBar, Button, KeyboardAvoidingView } from 'react-native';
import { Assets, StackScreenProps } from '@react-navigation/stack';
import { driverStack} from '../../types';
import * as Animatable from 'react-native-animatable';
import { Feather } from '@expo/vector-icons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo';

export default function LoginDriver({navigation }: StackScreenProps<driverStack>) {
    const GoToHome = () => {
        navigation.navigate("HomeDriver");
      };
      
   
      const [data, setData] = React.useState({
        username: '',
        password: '',
        confirm_password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
    });

    const textInputChange = () => {
      if( length !== 0 ) {
          setData({
              ...data,
              username: '',
              check_textInputChange: true
          });
      } else {
          setData({
              ...data,
              username: '',
              check_textInputChange: false
          });
      }
  }
    return (
      <View style={styles.container}>
      <StatusBar backgroundColor='#009387' barStyle="light-content"/>
    <View style={styles.header}>
        <Text style={styles.text_header}> تسجيل الدخول</Text>
    </View>
    <KeyboardAvoidingView behavior="position">
    <Animatable.View 
        animation="fadeInUpBig"
        style={styles.footer}
    >
        <ScrollView>
        <Text style={styles.text_footer}>اسم المستخدم</Text>
        <View style={styles.action}>
            <FontAwesome 
                name="user-o"
                color="#05375a"
                size={20}
            />
            <TextInput 
                placeholder="Your Username"
                style={styles.textInput}
                autoCapitalize="none"
            />
            <Animatable.View
                animation="bounceIn"
            >
                <Feather 
                    name="check-circle"
                    color="green"
                    size={20}
                />
            </Animatable.View>
        </View>

        <Text style={[styles.text_footer, {
            marginTop: 35
        }]}>كلمة المرور</Text>
        <View style={styles.action}>
            <Feather 
                name="lock"
                color="#05375a"
                size={20}
            />
            <TextInput 
                placeholder="Your Password"
                secureTextEntry={true}
                style={styles.textInput}
                autoCapitalize="none"
            />
    
                    {data.secureTextEntry ? 
                    <Feather 
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    :
                    <Feather 
                        name="eye"
                        color="grey"
                        size={20}
                    />
                    }
        </View>

        
       
        <View style={styles.button}>
            <Button 
        title='تسجيل الدخول'
        color='#01ab9d' 
              onPress={() => GoToHome()}
      />

            

         
            </View>
            </ScrollView>
        </Animatable.View>
        </KeyboardAvoidingView>
      </View>
    );
};
  
     
 
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#009387'
  },
  header: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
      paddingBottom: 50
  },
  footer: {
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 30
  },
  text_header: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 30,
},
  text_footer: {
      color: '#05375a',
      fontSize: 18,
alignItems: 'flex-end'
 },
  action: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5
  },
  textInput: {
      flex: 1,
      paddingLeft: 10,
      color: '#05375a',
  },
  button: {
      alignItems: 'center',
      borderColor: '#009387',
      borderWidth: 1,
      marginTop: 15,
      borderRadius:17,
  },
  signIn: {
      width: '100%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10

  },
  textSign: {
      fontSize: 18,
      fontWeight: 'bold'
  },
  textPrivate: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 20
  },
  color_textPrivate: {
      color: 'grey'
  }
})
