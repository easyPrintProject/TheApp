import { Feather, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import profileScreen from "../screens/Driver/profileScreen";
import viewOrderScreen from "../screens/Driver/viewOrderScreen";

import { createDrawerNavigator } from '@react-navigation/drawer';
import { BottomTabPDriverList, DriverProfileParamList, ViewOrderDriverParamList,UpdateOrderParamList} from '../types';
import { Title } from 'react-native-paper';
const BottomTab = createBottomTabNavigator<BottomTabPDriverList>();

export default function BottomTabPDriverNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="ViewOrderScreen"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint , showLabel:false}}>
      <BottomTab.Screen
        name="ViewOrderScreen"
        component={ViewOrderNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      
        

<BottomTab.Screen
        name="profileScreen"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon  name="user" color={color} />,
        }}
      />
       
      
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Feather>['name']; color: string }) {
  return <Feather size={25} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const ViewOrderStack = createStackNavigator<ViewOrderDriverParamList>();

function ViewOrderNavigator() {
  return (
    <ViewOrderStack.Navigator
    screenOptions={
      {
        headerShown: false
      }
    } >
        <ViewOrderStack.Screen
        name="ViewOrderScreen"
        component={viewOrderScreen}
      />
    </ViewOrderStack.Navigator>
  );
}

{/*const UpdateOrderStack = createStackNavigator<UpdateOrderParamList>();

function UpdateOrderNavigator() {
  return (
    <UpdateOrderStack.Navigator
    screenOptions={
      {
        headerShown: false
      }
    } >
        <UpdateOrderStack.Screen
          name="UpdateOrder"
          component={UpdateOrderNavigator}
      />
    </UpdateOrderStack.Navigator>
  );
}*/}

const ProfileStack = createStackNavigator<DriverProfileParamList>();

function ProfileNavigator() {
  return (

    <ProfileStack.Navigator
    screenOptions={
      {
        headerShown: false
      }
    }>
       <ProfileStack.Screen
        name="ProfileScreen"
        component={profileScreen}
      />
      
 
       </ProfileStack.Navigator>

  );
}
