

import React, { createContext, useState, useContext, Dispatch, SetStateAction } from "react";

//the item type
export interface  item {
  //info about the itemitself
  itemId: string;
  itemName : string;

   //info about the material 
  MaterialId: string;
  courceMaterialTitle: string;
  courceMaterialPrice: number;

  //info about the printer
  printerId: string;
  printerName: string;

  //info about the order
  orderId: string;
  orderStatus:string;

}

export interface GlobalStateInterface {
  //static user data 
  Token: string;
  Id: string;
  Email: string;
  UserName: string;
  PhoneNumber: string;
  ErrorMessage: string;
  EmailConfeirmd: boolean;

  //navigation between pages data
  printerId: string;
  printerName: string;
  MaterialId: string;
  courceMaterialTitle: string,
  courceMaterialDescreption: string
  courceMaterialPrice: number,
  isAvailable: boolean,
  subjectId: string,

  //order and basket items data
  orderId :string;
  orderSatus:string; 
  allIems: item[];
  orderTotal: number;

  
}

//creating the glbal State context

const GlobalStateContext = createContext({
  state: {} as Partial<GlobalStateInterface>,
  setState: {} as Dispatch<SetStateAction<Partial<GlobalStateInterface>>>,
});


//assign the global state context to a providor 
const GlobalStateProvider = ({
  children,
  value = {} as GlobalStateInterface,
}: {
  children: React.ReactNode;
  value?: Partial<GlobalStateInterface>;
}) => {
  const [state, setState] = useState(value);
  return (
    <GlobalStateContext.Provider value={{ state, setState }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error("useGlobalState must be used within a GlobalStateContext");
  }
  return context;
};

export { GlobalStateProvider, useGlobalState };




