import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  ScrollView,
  StatusBar,
  Button,
  KeyboardAvoidingView,
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import * as Animatable from 'react-native-animatable';
import { Feather } from '@expo/vector-icons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useState, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView, FlatList, TouchableOpacity } from 'react-native';

const data = [
  {
    id: '1',
    name: 'A0',
    price: '1,5',
  },
  {
    id: '2',
    name: 'A1',
    price: '2,5',
  },
  {
    id: '3',
    name: 'A2',
    price: '3',
  },
  {
    id: '4',
    name: 'A3',
    price: '4',
  },
  {
    id: '5',
    name: 'A4',
    price: '4',
  },
  {
    id: '6',
    name: 'A5',
    price: '2',
  },
];
const data2 = [
  {
    id: '7',
    name: 'عادي',
    price: '2',
  },
  {
    id: '8',
    name: 'لماع',
    price: '2,5',
  },
  {
    id: '9',
    name: 'مقوى',
    price: '3',
  },
  {
    id: '10',
    name: 'معاد استخدامه',
    price: '1',
  },
];
const data3 = [
  {
    id: '11',
    name: 'أبيض & أسود',
    price: '1',
  },
  {
    id: '12',
    name: 'ملون',
    price: '2,5',
  },
];
const data4 = [
  {
    id: '13',
    name: 'وجه',
    price: '2',
  },
  {
    id: '14',
    name: 'وجهين',
    price: '1',
  },
];

function InstantCalculator() {
  const [state, setState] = useState({ price: 0, checked: [] });
  const { price, checked } = state;
  console.log(state);
  //   <ScrollView>

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}> حاسبة الأسعار </Text>
      </View>
      <KeyboardAvoidingView behavior="position">
        <Animatable.View animation="fadeInUpBig" style={styles.footer}>
          <ScrollView>
            <Text style={styles.text_footer}>حجم الورق:</Text>
            <View style={styles.action}>
              <Animatable.View animation="bounceIn"></Animatable.View>
            </View>

            <FlatList
            numColumns={3}
              data={data}
              keyExtractor={(val) => `invoice_${val.id}`}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.buttonStyle}
                  onPress={() => {
                    console.log(state);
                    if (checked.findIndex((id) => item.id === id) >= 0) {
                      setState({
                        price: price - parseFloat(item.price),
                        checked: checked.filter((id) => id !== item.id),
                      });
                    } else {
                      setState({
                        price: price + parseFloat(item.price),
                        checked: [...checked, item.id] as any,
                      });
                    }
                  }}>
                  <View
                    style={
                      checked.findIndex((id) => item.id === id) >= 0
                        ? styles.checked
                        : styles.unchecked
                    }
                  />
                  <Text style={styles.text}>{item.name}</Text>
                </TouchableOpacity>
              )}
              extraData={checked}
            />

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
<FlatList  numColumns={2}
data={data2}
                    keyExtractor={val => `invoice_${val.id}`}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.buttonStyle}
                            onPress={() => {
                                console.log(state);
                                if (checked.findIndex(id => item.id === id) >= 0) {
                                    setState({
                                        price: price - parseFloat(item.price),
                                        checked: checked.filter(id => id !== item.id),
                                    });
                                } else {
                                    setState({
                                        price: price + parseFloat(item.price),
                                        checked: [...checked, item.id] as any,
                                    });
                                }
                            }}
                        >
                            <View
                                style={checked.findIndex(id => item.id === id) >= 0
                                    ? styles.checked
                                    : styles.unchecked} />
                            <Text style={styles.text}>{item.name}</Text>
                        </TouchableOpacity>
                    )}
                    extraData={checked} />






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
 <FlatList data={data3} numColumns={2}
 //horizontal={true}
                    keyExtractor={val => `invoice_${val.id}`}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.buttonStyle}
                            onPress={() => {
                                console.log(state);
                                if (checked.findIndex(id => item.id === id) >= 0) {
                                    setState({
                                        price: price - parseFloat(item.price),
                                        checked: checked.filter(id => id !== item.id),
                                    });
                                } else {
                                    setState({
                                        price: price + parseFloat(item.price),
                                        checked: [...checked, item.id] as any,
                                    });
                                }
                            }}
                        >
                            <View
                                style={checked.findIndex(id => item.id === id) >= 0
                                    ? styles.checked
                                    : styles.unchecked} />
                            <Text style={styles.text}>{item.name}</Text>
                        </TouchableOpacity>
                    )}
                    extraData={checked} />







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
<FlatList numColumns={2}
//horizontal={true}
                data={data4}
                    
                    keyExtractor={val => `invoice_${val.id}`}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.buttonStyle}
                            onPress={() => {
                                console.log(state);
                                if (checked.findIndex(id => item.id === id) >= 0) {
                                    setState({
                                        price: price - parseFloat(item.price),
                                        checked: checked.filter(id => id !== item.id),
                                    });
                                } else {
                                    setState({
                                        price: price + parseFloat(item.price),
                                        checked: [...checked, item.id] as any,
                                    });
                                }
                            }}
                        >
                            <View
                                style={checked.findIndex(id => item.id === id) >= 0
                                    ? styles.checked
                                    : styles.unchecked} />
                            <Text style={styles.text}>{item.name}</Text>
                        </TouchableOpacity>
                    )}
                    extraData={checked} />


                <Text style={styles.priceStyle}>السعر: {price}SR</Text>
         


        
       </ScrollView>
        </Animatable.View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
  text_footer: {
    color: '#05375a',
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'flex-end',
    textAlign: 'right',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  
  priceStyle: {
    alignItems: 'center',
    textAlign: 'center',
  
    marginTop: 15,
    borderRadius: 15,
    color: '#05375a',
    fontSize: 25,
    fontWeight: 'bold'

  },

  buttonStyle: {
    flexDirection: 'row-reverse',
    paddingLeft: 20,
    alignItems: 'center',
    paddingRight: 55,
  },

  checked: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fffff',
    alignItems: 'center',
    backgroundColor: 'plum',
  },
  unchecked: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ECECEC',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  text: {
    fontSize: 15,
    paddingTop: 10,
    paddingBottom: 20,
    alignContent: 'center',
    color: '#05375a',

  },
});

export default InstantCalculator;