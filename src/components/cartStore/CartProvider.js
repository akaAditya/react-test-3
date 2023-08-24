import React from "react";
import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartValue = {
  items: [],
};

const reducerFun = (state, action) => {
  if (action.type === "ADD-ITEMS") {    
    const updateItems = state.items.concat(action.item);
    return {
      items: updateItems,
    };
  }
  return defaultCartValue;
};
const CartProvider = (props) => {
  const [cartState, dispatchItems] = useReducer(reducerFun, defaultCartValue);

  const addItemstoCart = (item) => {
    dispatchItems({ type: "ADD-ITEMS", item: item });
  };

  const cartContext = {
    items: cartState.items,
    addItems: addItemstoCart,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
