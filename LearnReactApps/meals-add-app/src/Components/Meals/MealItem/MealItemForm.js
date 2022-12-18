import React, { useContext, useRef } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import CartContext from "../../context/CartContext";
export default function MealItemForm({ item }) {
  const ctx = useContext(CartContext);
  const formRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const updateItem = {
      ...item,
      amount: formRef.current[0].value,
    };
    ctx.addItem(updateItem);
  };
  return (
    <form className={classes.form} ref={formRef}>
      <Input
        label={"Amount"}
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          setp: "1",
          defaultValue: "1",
        }}
      />
      <button type="submit" onClick={handleSubmit}>
        + Add
      </button>
    </form>
  );
}
