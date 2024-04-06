import React, { useContext, useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import CartContext from "../../context/CartContext";
export default function MealItemForm({ item }) {
  const [formIsValid, setFormIsValid] = useState(true);
  const ctx = useContext(CartContext);
  const formRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const updateItem = {
      ...item,
      amount: +formRef.current.value,
    };
    if (updateItem.amount > 10 || updateItem.amount <= 0) {
      setFormIsValid(false);
      return;
    }
    setFormIsValid(true);
    ctx.addItem(updateItem);
  };
  return (
    <form className={classes.form}>
      <Input
        ref={formRef}
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
      {!formIsValid && <div className={classes.wrong_input}>Wrong amount!</div>}
    </form>
  );
}
