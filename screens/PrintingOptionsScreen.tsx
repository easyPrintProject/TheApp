import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    TextInput,
    Text,
    ScrollView,
    StatusBar,
    Button,
    KeyboardAvoidingView,
    Pressable
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import {  TouchableOpacity, SafeAreaView } from 'react-native';
import { OrderParamList} from '../types';

class Option extends Component<any, any>  {
  constructor(props: any) {
    super(props);
    this.state = {
      activeOption: this.props.options[0],
    };
  }
  updateActiveOption = (activeOption: any) => {
    this.setState({
      activeOption,
    });
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginTop: 20,
          alignContent: 'center',
          alignItems: 'center',
        }}
      >
        {this.props.options.map((option: React.ReactNode) => (
          <TouchableOpacity
            style={{
              height: 30,
              margin: 3,
              borderRadius: 15,

              backgroundColor: this.state.activeOption === option ? '#cccccc' : '#fff',
              borderWidth: 1,
              borderColor: this.state.activeOption === option ? '#3b5763' : '#3b5763',
            }}

            onPress={() => {
              this.props.onChange(option);
              this.updateActiveOption(option);
            }}
          >

            <Text
              style={{
                textAlign: 'center',
                width: 150,
                height: 50,
                color: '#05375a',
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >

              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}



export default function PrintingOptions({ navigation }: StackScreenProps<OrderParamList>,) {
  const GoToTimeDelivery = () => {
    navigation.navigate("DeliveryTimeScreen");
  };

    return (
      
        <View style={styles.container}>
            <StatusBar backgroundColor="#009387" barStyle="dark-content" />
            <KeyboardAvoidingView behavior="position">
            <ScrollView>

            <Text style={styles.text_header}>خصائص الطباعة </Text>

                        <Text style={styles.text_footer}>حجم الورق:</Text>
                        <View style={styles.action}>
                        </View>

                       < Option
            options={['A5', 'A4', 'A3', 'A2', 'A1', 'A0']}
            onChange={(option: any) => {
              console.log(option);
            }} />


                        <Text
                            style={[
                                styles.text_footer,
                                {
                                    marginTop: 35,
                                },
                            ]}>
                            نوع الورق:            </Text>
                        <View style={styles.action}>
                        </View>
                       < Option
            options={['عادي', 'مقوى', 'لماع', 'معاد استخدامه']}
            onChange={(option: any) => {
              console.log(option);
            }} />




                        <Text
                            style={[
                                styles.text_footer,
                                {
                                    marginTop: 35,
                                },
                            ]}>
                            لون الطباعة:            </Text>
                        <View style={styles.action}>
                        </View>
                        < Option
            options={['أسود وأبيض', 'ملون']}
            onChange={(option: any) => {
              console.log(option);
            }} />


                        <Text
                            style={[
                                styles.text_footer,
                                {
                                    marginTop: 35,
                                },
                            ]}>
                            نوع الطباعة:
            </Text>
                        <View style={styles.action}>
                        </View>
                       < Option
            options={['وجه', 'وجهين']}
            onChange={(option: any) => {
              console.log(option);
            }} />

 <Text
                            style={[
                                styles.text_footer,
                                {
                                    marginTop: 35,
                                },
                            ]}>
                           تحديد الصفحات:
            </Text>
                        <View style={styles.action}>
                        </View>

          <View style={{
            flexDirection: 'row', justifyContent: 'center'
          }}>
            <TextInput style={styles.textInput} />

            <TextInput style={styles.textInput} />
          </View>
          <View><Pressable style={{ alignItems: 'center', marginTop: -20 }}
          onPress={() => GoToTimeDelivery()}>
          <Text>تحديد وقت التوصيل</Text>
        </Pressable>
        
        </View>
                    </ScrollView>
            </KeyboardAvoidingView>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50,
    },
    
    text_header: {
        color: '#05375a',
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
        paddingTop: 100,
       
    },
    text_footer: {
        color: '#05375a',
        fontSize: 16,
        fontWeight: 'bold',
        alignItems: 'flex-end',
        textAlign: 'right',
        paddingRight: 20,
        paddingTop: 20
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
    },

    
    textInput: {
    borderColor: "#05375a",
    borderBottomWidth: 1,
    marginBottom: 36,
    height: 40,
    width: 50,
    borderWidth: 0.5,
    borderRadius: 5,
    margin: 3,
    marginTop: 20,
  },
  
  button: {
    alignItems: 'center',
    borderColor: '#4BBFF4',
    borderWidth: 1,
    marginTop: 15,
    borderRadius:17,
},
});
