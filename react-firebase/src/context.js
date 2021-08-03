import React, { useContext, useReducer } from "react";
import reducer from "./reducer";
import { fb, auth } from "./firebase";
const AppContext = React.createContext();

const initialState = {};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const doLogin = async () => {
    try {
      const provider = fb.auth.GoogleAuthProvider();
      const user = await auth.signInWithPopup(provider);
      console.log(user);
    }catch (error) {
      console.log(error);
    }

    dispatch({ type: "LOGIN" });
  };

  return (
    <AppContext.Provider value={{ ...state, doLogin }}>
      {children}
    </AppContext.Provider>
  );

  //   const setTengoLinea = (linea) => {
  //     dispatch({ type: "TENGO_LINEA", payload: linea });
  //   };
  //   return (
  //     <AppContext.Provider value={{ ...state, setTengoLinea }}>
  //       {children}
  //     </AppContext.Provider>
  //   );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
