import CartContext from "./CartContext";
import { useReducer } from "react";
const mealsListArray = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];
const defaultCardState = { items: [], totalAmount: 0 };

const cartReeducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updatedArray = state.items.concat(action.item);
    const totalAmount = (state.totalAmount +=
      action.item.price * action.item.amount);
    return { items: updatedArray, totalAmount };
  }

  return defaultCardState;
};
export default function CartContextProvider(props) {
  const [cartState, dispachCartAction] = useReducer(
    cartReeducer,
    defaultCardState
  );

  const addItemToCart = (item) => {
    dispachCartAction({ type: "ADD_ITEM", item: item });
  };
  const removeItemFromCart = (item, amount) => {
    // dispachCartAction({ type: "REMOVE_ITEM", item: { ...item, amount } });
  };

  const CartContextValue = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    mealsListArray,
    addItem: addItemToCart,
    remove: removeItemFromCart,
  };
  return (
    <CartContext.Provider value={CartContextValue}>
      {props.children}
    </CartContext.Provider>
  );
}
