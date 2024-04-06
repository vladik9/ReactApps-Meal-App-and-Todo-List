import React, { useContext } from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import CartContext from "../context/CartContext";
export default function AvailableMeals() {
  const { mealsListArray } = useContext(CartContext);
  const mealsList = mealsListArray.map((meal) => (
    <MealItem key={meal.id} meal={meal}></MealItem>
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
}
