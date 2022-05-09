import { createContext, useContext , useReducer } from "react";
import { reducerFunc , initialstate } from "../pages/Cart/CartCard/CardCart";

const CartContext = createContext(null);

const CartProvider = ({ children }) => {

    const [statetotal, stateDispatch] = useReducer(reducerFunc , initialstate);

  
    return (
      <CartContext.Provider value={{ statetotal, stateDispatch }}>
        {children}
      </CartContext.Provider>
    );
  };
  const useCart = () => useContext(CartContext);
  export { CartProvider, useCart , CartContext};