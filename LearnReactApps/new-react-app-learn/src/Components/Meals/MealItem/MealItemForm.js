import React from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
export default function MealItemForm(props) {
  return (
    <form className={classes.form}>
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
      <button type="submit">+ Add</button>
    </form>
  );
}
