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
  NewAdress:undefined;
};

export type driverStack = {
  Login : undefined;
  HomeDriver:undefined;
  ProfileScreen:undefined;
  viewOrderScreen: undefined;
  MoreInfo: undefined;
  OrderListsScreen:undefined;
  OrderDetails:undefined;
}


//لزيادة انواع صفحة الأوردر للدرايفر
export type ViewOrderDriverParamList = {

  OrderListsScreen:undefined;
  OrderDetails:undefined;
  viewOrderScreen: undefined;
  MoreInfo: undefined;

};

export type UpdateOrderParamList = {
  UpdateOrder:undefined;


};
//لزيادة انواع صفحة البروفايل للدرايفر
export type DriverProfileParamList = {

  ProfileScreen:undefined;
  EditScreen:undefined;

  //اضيفي نوع اللوق اوت 
};


//لزيادة انواع للبوتم تاب  للدرايفر
export type BottomTabPDriverList = {
  profileScreen: undefined;
  ViewOrderScreen: undefined;
  UpdateOrder: undefined;
  OrderListsScreen:undefined;
  OrderDetails:undefined;
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
  DocumentListScreen: undefined;
  MaterialsDetailsScreen:undefined;
  BasketScreen: undefined;
  PrintingOptionsScreen: undefined;
  DeliveryTimeScreen: undefined;
  PaymentScreen: undefined;
  isPrintingOrder: undefined;

};
export type AccountScreenParamList ={
  UpdateAdress:undefined;

}
//رنا هنا
export type AccountParamList = {
  AccountScreen: undefined;
  InstantCalculator:undefined;
  UploadFiles:undefined;
  OrderScreen:undefined;
  EditAccountScreen:undefined;
  CouponsScreen:undefined;
  Address:undefined;
  UpdateAdress:undefined;
  BasketScreen:undefined;
  SuggestionsScreen:undefined;
  FeedbackScreen:undefined;
  AddressEdit:undefined;
  AddressNewScreen:undefined;
  OrderStatus: undefined;
};


export type OrderParamList = {
  OrderScreen: undefined;
  PrintingOptionsScreen: undefined;
  DeliveryTimeScreen: undefined;
  PaymentScreen: undefined;
  BasketScreen: undefined;
  isPrintingOrder: undefined;

};



export type DocProp = {
  id :string;
  PrinterName : string
}
export type PrintersListParamList = {
  PrintersListScreen: undefined;
  DocumentListScreen: undefined;
  MaterialsDetailsScreen:undefined;
  BasketScreen: undefined;

};

export type BasketParamList = {
  BasketScreen: undefined;
  PaymentScreen: undefined;

};
