import AppStart from "../screens/AppStartScreen";
import Home from "../screens/HomeScreen";
import Login from "../screens/LoginScreen"
import Signin from "../screens/SignUpScreen"

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const stack = createStackNavigator();

export default function screens() {
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{ headerShown: false }}>
        <stack.Screen name="Home" component={Home} />
      </stack.Navigator>
    </NavigationContainer>
  );
}
