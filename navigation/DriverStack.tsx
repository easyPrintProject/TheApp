import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";
import { driverStack} from '../types';
import LoginDriver from "../screens/Driver/LoginDriver";
import BottomTabPDriverNavigator from "./BottomTabPDriverNavigator";
import viewOrderScreen from '../screens/Driver/viewOrderScreen';
import MoreInfo from '../screens/Driver/MoreInfo';

const stack = createStackNavigator<driverStack>(
  
);

export default function screens() {

    return (
        <stack.Navigator screenOptions={{ headerShown: false }}>
        <stack.Screen name="Login" component={LoginDriver} />
        <stack.Screen name="HomeDriver" component={BottomTabPDriverNavigator} />
        <stack.Screen name="viewOrderScreen" component={viewOrderScreen} />
        <stack.Screen name="MoreInfo" component={MoreInfo} />


      </stack.Navigator>
    )
}

const styles = StyleSheet.create({})
