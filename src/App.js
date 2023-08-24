import React from "react";
import { useState } from "react";
import Cart from "./components/cart/Cart";
import CartProvider from "./components/cartStore/CartProvider";
import NewChocolatesList from "./components/medicineEntry/NewChocolateList";
import ChocolateHouse from "./components/MedicineStore/ChocolateHouse";

function App() {
  const [chocolates, setChocolates] = useState("");
  const [isItemShow, setIsItemShow] = useState(false);
  const showCartItemHandler = async () => {
    setIsItemShow(true);
    
  };

  const hideCartItemHandler = () => {
    setIsItemShow(false);
  };

  const saveChocolatesInList =  (chocolate) => {
    setChocolates((prev) => {
      return [chocolate, ...prev];
    });
    
  };

  return (
    <React.Fragment>
      <CartProvider>
        <div>Chocolate Store</div>
        <NewChocolatesList onAddChocolates={saveChocolatesInList} />
        <ChocolateHouse items={chocolates} />
        {/* <Switch> */}
        {/* <Route path='/cart'> */}
        {isItemShow && <Cart onClose={hideCartItemHandler} />}

        {/* </Route> */}

        {/* <Link to='/cart'> */}
        <button onClick={showCartItemHandler}>Cart</button>

        {/* </Link> */}
        {/* </Switch> */}
      </CartProvider>
    </React.Fragment>
  );
}

export default App;
