import React, { useState } from "react";
import {
    SafeAreaView,
    FlatList,
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView
} from "react-native";


const data = [
    {
        "id": "1",
        "name": "A0",
        "price": "1"
    },
    {
        "id": "2",
        "name": "A1",
        "price": "2"
    },
    {
        "id": "3",
        "name": "A2",
        "price": "3"
    },
    {
        "id": "4",
        "name": "A3",
        "price": "4"
    },
    {
        "id": "5",
        "name": "A4",
        "price": "4"
    },
    {
        "id": "6",
        "name": "A5",
        "price": "2"
    }

];
const data2 = [
    {
        "id": "7",
        "name": "عادي",
        "price": "2"
    },
    {
        "id": "8",
        "name": "لماع",
        "price": "2,5"
    },
    {
        "id": "9",
        "name": "مقوى",
        "price": "3"
    },
    {
        "id": "10",
        "name": "معاد استخدامه",
        "price": "1"
    }
];
const data3 = [

    {
        "id": "11",
        "name": "أبيض & أسود",
        "price": "1"
    },
    {
        "id": "12",
        "name": "ملون",
        "price": "2,5"
    }
];
const data4 = [

        {
            "id": "13",
            "name": "وجه",
            "price": "2"
        },
        {
            "id": "14",
            "name": "وجهين",
            "price": "1"
        }

    ]



function InstantCalculator() {

    const [state, setState] = useState({ price: 0, checked: [] });
    const { price, checked } = state;
    console.log(state);
    return (
      <ScrollView>
        <SafeAreaView><Text> حجم الورق:</Text>

            <FlatList
                data={data}
                keyExtractor={val => `invoice_${val.id}`}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={() => {
                            console.log(state);
                            if (checked.findIndex(id => item.id === id) >= 0) {
                                setState({
                                    price: price - parseInt(item.price),
                                    checked: checked.filter(id => id !== item.id),
                                });
                            } else {
                                setState({
                                    price: price + parseInt(item.price),
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


            <Text> نوع الورق:</Text>
            <FlatList data={data2}
                keyExtractor={val => `invoice_${val.id}`}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={() => {
                            console.log(state);
                            if (checked.findIndex(id => item.id === id) >= 0) {
                                setState({
                                    price: price - parseInt(item.price),
                                    checked: checked.filter(id => id !== item.id),
                                });
                            } else {
                                setState({
                                    price: price + parseInt(item.price),
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

            <Text> لون الطباعة:</Text>
            <FlatList data={data3}
                keyExtractor={val => `invoice_${val.id}`}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={() => {
                            console.log(state);
                            if (checked.findIndex(id => item.id === id) >= 0) {
                                setState({
                                    price: price - parseInt(item.price),
                                    checked: checked.filter(id => id !== item.id),
                                });
                            } else {
                                setState({
                                    price: price + parseInt(item.price),
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


            <Text> نوع الطباعة:</Text>
            <FlatList data={data4}
                keyExtractor={val => `invoice_${val.id}`}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={() => {
                            console.log(state);
                            if (checked.findIndex(id => item.id === id) >= 0) {
                                setState({
                                    price: price - parseInt(item.price),
                                    checked: checked.filter(id => id !== item.id),
                                });
                            } else {
                                setState({
                                    price: price + parseInt(item.price),
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





            <Text>السعر: {price}SR</Text>
        </SafeAreaView></ScrollView>


    );
}

const styles = StyleSheet.create({
    buttonStyle: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingVertical: 16
    },
    checked: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: "#ECECEC",
        backgroundColor: "#CCC",
        marginHorizontal: 10,
    },
    unchecked: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: "#ECECEC",
        backgroundColor: "#FFF",
        marginHorizontal: 10,
    },
    text: {
        flex: 1,
        textAlign: 'center',
    },


});

export default InstantCalculator;
