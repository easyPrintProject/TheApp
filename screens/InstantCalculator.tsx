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
import * as Animatable from 'react-native-animatable';
import { Feather } from '@expo/vector-icons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useState, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { AccountParamList } from '../types';
import { DrawerActions } from '@react-navigation/native';
import { red } from '@material-ui/core/colors';

const data = [
    {
        id: 'A0، ',
        name: 'A0',
        price: '1.00',
    },
    {
        id: 'A1، ',
        name: 'A1',
        price: '1.00',
    },
    {
        id: 'A2، ',
        name: 'A2',
        price: '1.00',
    },
    {
        id: 'A3، ',
        name: 'A3',
        price: '0.75',
    },
    {
        id: 'A4، ',
        name: 'A4',
        price: '0.50',
    },
    {
        id: 'A5، ',
        name: 'A5',
        price: '0.50',
    },
];
const data2 = [
    {
        id: 'عادي، ',
        name: 'عادي',
        price: '0.50',
    },
    {
        id: 'لماع، ',
        name: 'لماع',
        price: '1.50',
    },
    {
        id: 'مقوى، ',
        name: 'مقوى',
        price: '2.00',
    },
    {
        id: 'مُستخدم، ',
        name: 'مُستخدم ',
        price: '0.25',
    },
];
const data3 = [
    {
        id: 'أبيض & أسود، ',
        name: 'أبيض & أسود',
        price: '0.50',
    },
    {
        id: 'ملون، ',
        name: 'ملون',
        price: '1.50',
    },
];
const data4 = [
    {
        id: 'وجه، ',
        name: 'وجه',
        price: '1.00',
    },
    {
        id: 'وجهين، ',
        name: 'وجهين',
        price: '0.50',
    },
];

function InstantCalculator({ navigation }: StackScreenProps<AccountParamList>) {
    const GoToAccount = () => {
        navigation.navigate("AccountScreen");
    }


    const [state, setState] = useState({ price: 0, checked: [] });
    const { price, checked } = state;
    console.log(state);
    //   <ScrollView>

    return (
        // سوي نفيقشن المنيو
        <View style={styles.container}>
            <View style={styles.icon}>
                <Ionicons name="chevron-back" size={24} color="white" onPress={() => GoToAccount()} />
            </View>
            <View style={styles.icon2}>
                <Ionicons name="menu-outline" size={24} color= 'white'  onPress={() => navigation.dispatch(DrawerActions.openDrawer())}></Ionicons></View>

            <StatusBar backgroundColor="#009387" barStyle="light-content" />
            <View style={styles.header}>
                <Text style={styles.text_header}>حاسبة الأسعار</Text>
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
                        <FlatList numColumns={2}
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
        backgroundColor: '#49c3c6',
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
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center',
        marginBottom: -10
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
        paddingRight: 50,
    },

    checked: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: 'center',
        backgroundColor: '#49c3c6',
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
        paddingEnd: 15,
        alignContent: 'center',
        color: '#05375a',

    },
    icon: {
        marginRight: "90%",
        paddingLeft: 25,
        marginTop: 60,
    },
    icon2: {
        marginLeft: "90%",
        paddingRight: 25,
        marginTop: -24,
  }
//
});

export default InstantCalculator;
