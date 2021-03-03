// import React, { createContext, useReducer, useState } from 'react';

// export interface UserType{
//     id: " ";
//     name: " ";
// }

//  export const intialUser ={
//   id:" ",
//   name:" "
// }

// export const NewContext = createContext({
//   user: {} as Partial<UserType>,
//   setUser: {} as React.Dispatch<React.SetStateAction<Partial<UserType>>>,
// });

// const GlobalStateProvider = ({
//   children,
//   value = {} as UserType,
// }: {
//   children: React.ReactNode;
//   value?: Partial<UserType>;
// }) => {
//   const [state, setState] = useState(value);
//   return (
//     <NewContext.Provider value={{ state, setState }}>
//       {children}
//     </NewContext.Provider>
//   );
// };




import React, { createContext, useState, useContext, Dispatch, SetStateAction } from "react";

export interface GlobalStateInterface {
  firstname: string;
  lastname: string;
  age: string;
}

const GlobalStateContext = createContext({
  state: {} as Partial<GlobalStateInterface>,
  setState: {} as Dispatch<SetStateAction<Partial<GlobalStateInterface>>>,
});

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




