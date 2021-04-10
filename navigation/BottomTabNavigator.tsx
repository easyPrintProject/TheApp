import { Feather } from '@expo/vector-icons';
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
import AddressEdit from '../screens/AddressEdit';
import UpdateAdress from '../screens/UpdateAdress';
import FeedbackScreen from '../screens/FeedbackScreen';
import SuggestionsScreen from '../screens/SuggestionsScreen';
import Address from '../screens/Address'


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
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
       <BottomTab.Screen
        name="Basket"
        component={BasketNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="shopping-cart" color={color} />,
        }}
      />
       <BottomTab.Screen
        name="Order"
        component={OrderNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="plus" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="PrintersList"
        component={PrintersListNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="list" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Account"
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
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
        <HomeStack.Screen name="DocumentListScreen" component={DocumentListScreen} />
        <HomeStack.Screen name="MaterialsDetailsScreen" component={MaterialsDetailsScreen} />
        <HomeStack.Screen name="BasketScreen" component={Basket} />
        <HomeStack.Screen name="PrintingOptionsScreen" component={PrintingOptions} />
        <HomeStack.Screen name="DeliveryTimeScreen" component={DeliveryTimeScreen} />
        <HomeStack.Screen name="PaymentScreen" component={PaymentScreen} />
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
      activeTintColor:"#49c3c6",
      labelStyle: {textAlign: 'right'},
      itemStyle:{marginVertical: 10,flex:1}
    }}
    drawerStyle={{
      backgroundColor: 'white',
      width: 290,
      marginTop: 44,
      alignItems:'stretch',
      
    }}
    screenOptions={
      {
        headerShown: false
      }
    }>
      <AccountDrawer.Screen
        name="AccountScreen"
        component={Account}
        options={{ drawerLabel: ' الحساب الشخصي '  }}
      />

<AccountDrawer.Screen
        name="EditAccountScreen"
        component={EditAccountScreen}
        options={{ drawerLabel: ' تعديل الملف الشخصي '  }}
      />

      <AccountDrawer.Screen
        name="InstantCalculator"
        component={InstantCalculator}
        options={{ drawerLabel:  'حاسبة الأسعار '  }}
      />
      <AccountDrawer.Screen
        name="OrderScreen"
        component={Order}
        options={{ drawerLabel:  'ملفاتي' }}
      />
       <AccountDrawer.Screen
        name='CouponsScreen'
        component={CouponsScreen}
        options={{ drawerLabel:  'كوبوناتي' }}
      />
     <AccountDrawer.Screen
        name='Address'
        component={Address}
        options={{ drawerLabel:  'سجل العناوين' }}
      />
      <AccountDrawer.Screen
        name='SuggestionsScreen'
        component={SuggestionsScreen}
        options={{ drawerLabel:  'الاقتراحات' }}
      />
      <AccountDrawer.Screen
        name='FeedbackScreen'
        component={FeedbackScreen}
        options={{ drawerLabel:  'تقييم الطلبات' }}
      />

<AccountDrawer.Screen
        name='AddressEdit'
        component={AddressEdit}
        options={{ drawerLabel:  'تعديل العنوان' }}
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
