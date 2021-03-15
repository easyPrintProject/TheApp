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
import Login from "../screens/LoginScreen"
import Signin from "../screens/SignUpScreen"
import Printers from "../screens/PrinterListScreen"
import Donation from "../screens/DonationScreen"
import Order from '../screens/OrderScreen';
import PrintingOptions from '../screens/PrintingOptionsScreen';
import DeliveryTimeScreen from '../screens/DeliveryTimeScreen';
import PaymentScreen from '../screens/PaymentScreen'
import InstantCalculator from "../screens/InstantCalculator"
import MaterialsDetailsScreen from "../screens/MaterialsDetailsScreen"
import DocumentListScreen from "../screens/DocumentListScreen"
import { createDrawerNavigator } from '@react-navigation/drawer';
import CouponsScreen from '../screens/CouponsScreen';
import { BottomTabParamList, HomeParamList, BasketParamList, PrintersListParamList, OrderParamList, AccountParamList , DocProp } from '../types';
import { Title } from 'react-native-paper';
import EditAccountScreen from '../screens/EditAccountScreen';


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
        <HomeStack.Screen name="HomeScreen" component={Home} />
        <HomeStack.Screen name="SigninScreen" component={Signin} />
        <HomeStack.Screen name="LoginScreen" component={Login} />
        <HomeStack.Screen name="OrderScreen" component={Order} />
        <HomeStack.Screen name="DonationScreen" component={Donation} />
        <HomeStack.Screen name="PrinterListScreen" component={Printers} />
    </HomeStack.Navigator>
  );
}

const AccountDrawer = createDrawerNavigator<AccountParamList>();

function AccountNavigator() {
  return (
    <AccountDrawer.Navigator
    drawerPosition="right"
    overlayColor="transparent"
    drawerContentOptions={{
      // activeTintColor:"",
      itemStyle:{marginVertical: 10,flex:1}
    }}
    drawerStyle={{
      backgroundColor: '#c6cbef',
      width: 240,
      alignItems:"stretch"  
    }}
    screenOptions={
      {
        headerShown: false
      }
    }>
      <AccountDrawer.Screen
        name="AccountScreen"
        component={Account}
        options={{ drawerLabel: '         حساب المستخدم         .   '  }}
      />

<AccountDrawer.Screen
        name="EditAccountScreen"
        component={EditAccountScreen}
        options={{ drawerLabel: '         تعديل حساب المستخدم         .   '  }}
      />

      <AccountDrawer.Screen
        name="InstantCalculator"
        component={InstantCalculator}
        options={{ drawerLabel:  '         الحاسبة الفورية            .   '  }}
      />
      <AccountDrawer.Screen
        name="OrderScreen"
        component={Order}
        options={{ drawerLabel:  '           ملفاتي                    .   ' }}
      />
       <AccountDrawer.Screen
        name='CouponsScreen'
        component={CouponsScreen}
        options={{ drawerLabel:  '           كوبوناتي                    .   ' }}
      />
  
    </AccountDrawer.Navigator>
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

<OrderStack.Screen
        name="PrintingOptionsScreen"
        component={PrintingOptions}
        
      />


<OrderStack.Screen
        name="DeliveryTimeScreen"
        component={DeliveryTimeScreen}
        
      />


<OrderStack.Screen
        name="PaymentScreen"
        component={PaymentScreen}
        
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
      <PrintersListStack.Screen
        name="DocumentListScreen"
        component={DocumentListScreen} 
        />
      <PrintersListStack.Screen
        name='MaterialsDetailsScreen'
        component={MaterialsDetailsScreen}
      />
        <PrintersListStack.Screen
        name="BasketScreen"
        component={BasketNavigator}
      />
    </PrintersListStack.Navigator>
  );
}
