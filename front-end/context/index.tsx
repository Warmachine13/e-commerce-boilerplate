import { useReducer, createContext } from "react";
import { userReducer } from "./reducers/user";
import combineReducers from "utils/conbineReducers";
// initial state
const initialState = {
  user: {},
};

interface Dispatch {
  type: string;
  payload: any;
}

// create context
const Context = createContext({
  state: initialState,
  dispatch: (d: Dispatch) => {},
});

// context provider
const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(
    combineReducers(userReducer),
    initialState
  );
  const value = { state, dispatch };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { Context, Provider };
