import React from "react";
import classes from "./MeailItem.module.css";
import MealForm from "./MealItemForm";
export default function MealItem({ meal }) {
  const name = meal.name;
  const meal_price = `$${meal.price.toFixed(2)}`;
  const description = meal.description;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{meal_price}</div>
      </div>
      <div>
        <MealForm item={meal} />
      </div>
    </li>
  );
}
