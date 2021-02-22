type ActionMap<M extends { [index: string]: any }> = {
    [Key in keyof M]: M[Key] extends undefined
      ? {
          type: Key;
        }
      : {
          type: Key;
          payload: M[Key];
        }
  };


export enum Types {
  Login = 'Login_User',
  Logout = 'Logout_User',
}

export type UserType = {
    id: string;
    name: string;
  }

  type UserPayload = {
    [Types.Login] : {
      id: string;
      name: string;
    };
    [Types.Logout]: {
      id: string;
    }
  }
  export type UserActions = ActionMap<UserPayload>[keyof ActionMap<UserPayload>];


  export const UserReducer = (state: UserType[], action: UserActions ) => {
    switch (action.type) {
      case Types.Login:
        return [
          ...state,
          {
            id: action.payload.id,
            name: action.payload.name,
          }
        ]
      case Types.Logout:
        return [
          ...state.filter(user => user.id !== action.payload.id),
        ]
      default:
        return state;
    }
  }
