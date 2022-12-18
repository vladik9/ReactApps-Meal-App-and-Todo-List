import CartContext from "./CartContext";
//sample to uptade values
// export const CartContext = createContext({
//   items: [],
//   tototalAmount: 0,
//   addItem: () => {},
//   removeItem: () => {},
// });

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

export default function CartContextProvider(props) {
  const addItemToCart = (id) => {};
  const removeItemFromCart = (id) => {};
  const CartContextValue = {
    items: [],
    mealsListArray,
    tototalAmount: 0,
    addItem: addItemToCart,
    remove: removeItemFromCart,
  };
  return (
    <CartContext.Provider value={CartContextValue}>
      {props.children}
    </CartContext.Provider>
  );
}
