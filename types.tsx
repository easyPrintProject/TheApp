export type RootStackParamList = {
  Start: undefined;
  Root: undefined;
  NotFound: undefined;
};
export type StartParamList = {
  AppStart:undefined;
  Home: undefined;
  Signup: undefined;
  Login: undefined;
  DriverLogin :undefined;
};

export type driverStack = {
  Login : undefined;
  HomeDriver:undefined;
}


//لزيادة انواع صفحة الأوردر للدرايفر
export type ViewOrderDriverParamList = {
  ViewOrderScreen:undefined;

};


//لزيادة انواع صفحة البروفايل للدرايفر
export type ProfileParamList = {
 ProfileScreen:undefined;
  EditScreen:undefined;
};


//لزيادة انواع للبوتم تاب  للدرايفر
export type BottomTabPDriverList = {
  profileScreen: undefined;
  ViewOrderScreen: undefined;

};



export type BottomTabParamList = {
  Account: undefined;
  Home: undefined;
  PrintersList: undefined;
  Basket: undefined;
  Order: undefined;
};

export type HomeParamList = {
  HomeScreen: undefined;
  OrderScreen: undefined;
  DonationScreen: undefined;
  PrinterListScreen: undefined;
  SigninScreen:undefined;
  LoginScreen:undefined;
};

export type AccountParamList = {
  AccountScreen: undefined;
  InstantCalculator:undefined;
  UploadFiles:undefined;
};


export type OrderParamList = {
  OrderScreen: undefined;
};

export type PrintersListParamList = {
  PrintersListScreen: undefined;
  DocumentListScreen: undefined;
  MaterialsDetailsScreen:undefined

};

export type BasketParamList = {
  BasketScreen: undefined;
};
