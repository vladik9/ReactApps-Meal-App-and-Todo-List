import CartContext from "./CartContext";
import { useReducer } from "react";
//default meals list
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
  {
    id: "m5",
    name: "Indian Chicken",
    description: "Sweet...and fresh...",
    price: 16.99,
  },
];

const defaultCardState = { items: [], totalAmount: 0 };
const cartReeducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const totalAmount = (state.totalAmount +=
      +action.item.price * action.item.amount);

    if (state.items.length === 0) {
      const updatedArray = state.items.concat(action.item);
      return { items: updatedArray, totalAmount };
    } else {
      const existingElement = state.items.filter(
        (item) => item.id === action.item.id
      );
      if (existingElement.length !== 0) {
        existingElement[0].amount =
          +existingElement[0].amount + action.item.amount;
        return { items: state.items, totalAmount };
      } else {
        const updatedArray = state.items.concat(action.item);
        return { items: updatedArray, totalAmount };
      }
    }
  }

  if (action.type === "REMOVE_ITEM") {
    const updatedArray = state.items.filter(
      (item) => item.id !== action.itemId
    );
    const updateTotalAmount = state.items.filter(
      (item) => item.id === action.itemId
    );
    const price = updateTotalAmount[0].amount * updateTotalAmount[0].price;
    return {
      items: updatedArray,
      totalAmount: (state.totalAmount += -price),
    };
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
  const removeItemFromCart = (id) => {
    dispachCartAction({ type: "REMOVE_ITEM", itemId: id });
  };

  const CartContextValue = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    mealsListArray,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };

  return (
    <CartContext.Provider value={CartContextValue}>
      {props.children}
    </CartContext.Provider>
  );
}
