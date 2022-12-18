import { createContext } from "react";

const CartContext = createContext({
  items: [],
  mealsList: [],
  tototalAmount: 0,
  addItem: () => {},
  removeItem: () => {},
});

export default CartContext;
