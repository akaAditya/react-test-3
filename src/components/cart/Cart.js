import React, { useEffect } from "react";
import { useContext } from "react";
import CartContext from "../cartStore/cart-context";

const Cart = (props) => {
  const cartContext = useContext(CartContext);
  console.log(cartContext.items, "from cart JS");

  useEffect(()=>{

    fetch(
        "https://crudcrud.com/api/ec62b7c2408542199d3f7c4ebea41faf/cartItems"
      ).then((res) => {res.json()}).then((json)=>cartContext.addItems(json))
  },[])


  const cartItems = (
    <ul>
      {cartContext.items.map((item) => (
        <li key={item._id}>
          <h2>{item.title}</h2>
          <h2>{item.description}</h2>
          <h2>{item.price}</h2>
        </li>
      ))}
    </ul>
  );
  return (
    <div>
      {cartItems}
      <button onClick={props.onClose}>Close</button>
    </div>
  );
};

export default Cart;
