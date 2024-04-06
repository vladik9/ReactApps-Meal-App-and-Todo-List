import React, { useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartContextProvider from "./Components/context/CartContextProvider";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const handleShowCart = () => {
    setCartIsShown((current) => {
      return !current;
    });
  };
  return (
    <CartContextProvider>
      {cartIsShown && <Cart onClose={handleShowCart} />}
      <Header onClick={handleShowCart} />
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  );
}

export default App;
