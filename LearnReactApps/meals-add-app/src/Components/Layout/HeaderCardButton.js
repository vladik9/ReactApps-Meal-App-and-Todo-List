import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCardButton.module.css";
import CartContext from "../context/CartContext";
export default function HeaderCardButton(props) {
  const ctx = useContext(CartContext);
  return (
    <button className={classes.button} onClick={() => props.onClick()}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{ctx.totalAmount.toFixed(2)}</span>
    </button>
  );
}
