import { createContext } from "react";

const CartContext = createContext({
  items: [],
  mealsList: [],
  totalAmount: 0,
  addItem: () => {},
  removeItem: () => {},
});

export default CartContext;
