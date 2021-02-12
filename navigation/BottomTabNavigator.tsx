import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import Home from '../screens/HomeScreen';
import Account from '../screens/AccountScreen';
import PrintersList from '../screens/PrinterListScreen';
import Basket from '../screens/BasketScreen';
import Order from '../screens/OrderScreen';
import { BottomTabParamList, HomeParamList, BasketParamList, PrintersListParamList, OrderParamList, AccountParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint , showLabel:false}}>
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home-outline" color={color} />,
        }}
      />
       <BottomTab.Screen
        name="Basket"
        component={BasketNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="basket-outline" color={color} />,
        }}
      />
       <BottomTab.Screen
        name="Order"
        component={OrderNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="add-outline" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="PrintersList"
        component={PrintersListNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="list-outline" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Account"
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="person-outline" color={color} />,
        }}
      />
      
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator
    screenOptions={
      {
        headerShown: false
      }
    }
    >
      <HomeStack.Screen
        name="HomeScreen"
        component={Home}
        options={{ }}
      />
    </HomeStack.Navigator>
  );
}

const AccountStack = createStackNavigator<AccountParamList>();

function AccountNavigator() {
  return (
    <AccountStack.Navigator
    screenOptions={
      {
        headerShown: false
      }
    }>
      <AccountStack.Screen
        name="AccountScreen"
        component={Account}
        
      />
    </AccountStack.Navigator>
  );
}

const OrderStack = createStackNavigator<OrderParamList>();

function OrderNavigator() {
  return (
    <OrderStack.Navigator
    screenOptions={
      {
        headerShown: false
      }
    }>
      <OrderStack.Screen
        name="OrderScreen"
        component={Order}
        
      />
    </OrderStack.Navigator>
  );
}

const BasketStack = createStackNavigator<BasketParamList>();

function BasketNavigator() {
  return (
    <BasketStack.Navigator
    screenOptions={
      {
        headerShown: false
      }
    }>
      <BasketStack.Screen
        name="BasketScreen"
        component={Basket}
        
      />
    </BasketStack.Navigator>
  );
}


const PrintersListStack = createStackNavigator<PrintersListParamList>();

function PrintersListNavigator() {
  return (
    <PrintersListStack.Navigator
    screenOptions={
      {
        headerShown: false
      }
    }>
      <PrintersListStack.Screen
        name="PrintersListScreen"
        component={PrintersList}
        
      />
    </PrintersListStack.Navigator>
  );
}
