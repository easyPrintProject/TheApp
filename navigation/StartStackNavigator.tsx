import AppStart from "../screens/AppStartScreen";
import Home from "../screens/HomeScreen";
import Login from "../screens/LoginScreen"
import SignUp from "../screens/SignUpScreen"
import BottomTabNavigator from './BottomTabNavigator';
import DriverLogin from "./DriverStack"
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StartParamList} from '../types';

const stack = createStackNavigator<StartParamList>(
  
);

export default function screens() {
  return (
    
      <stack.Navigator screenOptions={{ headerShown: false }}>
        <stack.Screen name="AppStart" component={AppStart} />
        <stack.Screen name="Home" component={BottomTabNavigator} />
        <stack.Screen name="Signup" component={SignUp} />
        <stack.Screen name="DriverLogin" component={DriverLogin} />
      </stack.Navigator>
  );
}
