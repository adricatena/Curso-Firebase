

const reducer = (state, action) => {
  if (action.type === "LOGIN") {
      
  }
  throw new Error("'action.type' no encontrada");
  // if (action.type === "TENGO_LINEA") {
  //   let tengoLineaTemp = action.payload ? "si" : "no";
  //   console.log(action.payload, tengoLineaTemp);
  //   return {
  //     ...state,
  //     tengoLinea: action.payload,
  //     showCarritoAbandonado: true,
  //   };
  // }
};

export default reducer;
