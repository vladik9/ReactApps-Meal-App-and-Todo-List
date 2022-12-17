import React, { useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const handleShowCart = () => {
    setCartIsShown((current) => {
      return !current;
    });
  };
  return (
    <>
      {cartIsShown && <Cart onClose={handleShowCart} />}
      <Header onClick={handleShowCart} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
