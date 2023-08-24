import React from "react";
import "./ChocolateInventory.css";
import { useContext } from "react";
import CartContext from "../cartStore/cart-context";

const ChocolateInventory = (props) => {
  // const [count, setCount] = useState(0);
  const cartCtx = useContext(CartContext);

  const addOne = async () => {
    // setCount(count + 1);
    try {
      await fetch(
        "https://crudcrud.com/api/ec62b7c2408542199d3f7c4ebea41faf/cartItems",
        {
          method: "POST",
          body: JSON.stringify({
            title: props.title,
            description: props.description,
            price: props.price,
            quantity: "1",
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((json) => cartCtx.addItems(json));
    } catch {}
  };
  const addTwo = async () => {
    // setCount(count + 2);
    try {
      await fetch(
        "https://crudcrud.com/api/ec62b7c2408542199d3f7c4ebea41faf/cartItems",
        {
          method: "POST",
          body: JSON.stringify({
            title: props.title,
            description: props.description,
            price: props.price,
            quantity: "2",
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((json) => cartCtx.addItems(json));
        console.log(cartCtx.items,'added items in cart')
    } catch {}
  };
  const addThree = async () => {
    // setCount(count + 3);
    try {
      await fetch(
        "https://crudcrud.com/api/ec62b7c2408542199d3f7c4ebea41faf/cartItems",
        {
          method: "POST",
          body: JSON.stringify({
            title: props.title,
            description: props.description,
            price: props.price,
            quantity: "3",
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((json) => cartCtx.addItems(json));
    } catch {}
  };
  return (
    <table>
      <tbody>
        <tr>
          <td>{props.title}</td>
          <td>{props.description}</td>
          <td>{props.price}</td>
          {/* <td>{count}</td> */}
          <td>
            <button onClick={addOne}>Add 1</button>
            <button onClick={addTwo}>Add 2</button>
            <button onClick={addThree}>Add 3</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ChocolateInventory;
