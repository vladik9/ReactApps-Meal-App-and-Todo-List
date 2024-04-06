import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCardButton.module.css";
import CartContext from "../context/CartContext";
export default function HeaderCardButton(props) {
  const { items, totalAmount } = useContext(CartContext);

  const [btnIsHighLighetd, setBtnIsHighLighted] = useState(false);
  const cartButtonCss = `${classes.button} ${
    btnIsHighLighetd ? classes.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }

    setBtnIsHighLighted(true);
    const timer = setTimeout(() => {
      setBtnIsHighLighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button className={cartButtonCss} onClick={() => props.onClick()}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{totalAmount.toFixed(2)}</span>
    </button>
  );
}
