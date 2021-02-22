import React, { createContext, useReducer, Dispatch } from 'react';
import { UserReducer, UserActions } from './Reduser';

type UserType = {
  id: string;
  name: string;
}

type InitialStateType = {
  User: UserType[];
}

const initialState = {
  User: [],
}


const AppContext = createContext<{
    state: InitialStateType;
    dispatch: React.Dispatch<any>;
  }>({
    state: initialState,
    dispatch: () => null
  });
  
  const mainReducer = ({ User }: InitialStateType, action: UserActions ) => ({
    User: UserReducer(User, action)  });
  
  
    const AppProvider: React.FC = ({ children }) => {
        const [state, dispatch] = useReducer(mainReducer, initialState);
      
        return (
          <AppContext.Provider value={{state, dispatch}}>
            {children}
          </AppContext.Provider>
        )
      }
      
      export { AppProvider, AppContext };