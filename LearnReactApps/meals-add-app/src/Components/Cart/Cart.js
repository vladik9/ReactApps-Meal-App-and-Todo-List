import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../context/CartContext";
export default function Cart(props) {
  const { items, totalAmount } = useContext(CartContext);
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {items.map((item) => (
        <li key={item.id}>
          {item.name}
          <div className={classes.total_amount}>
            <span>Total Amount</span>
            <span>
              {item.amount} x {item.price}
            </span>
            <span> {item.amount * item.price}</span>
          </div>
          <hr />
        </li>
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Final Price:</span>
        <span> {totalAmount.toFixed(2)}$</span>
      </div>
      <div className={classes.actions}>
        <button
          className={classes["button--alt"]}
          onClick={() => props.onClose()}
        >
          Close
        </button>
        <button className={classes.buntton}>Order</button>
      </div>
    </Modal>
  );
}
