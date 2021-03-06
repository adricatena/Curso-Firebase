import React, { useContext, useReducer } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const initialState = {};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  /*  const addPack = (pack) => {
    dispatch({ type: "ADD_PACK", payload: pack });
  }; */
  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
