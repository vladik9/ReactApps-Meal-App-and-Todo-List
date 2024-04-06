import React from "react";
import Ingredient from "../Ingredient/Ingredient";

export default function IngredientsList({ ingredients }) {
  const IngerdientsElements = ingredients.map((ingredient) => {
    return <Ingredient key={ingredient.id} {...ingredient} />;
  });

  return <div>{IngerdientsElements}</div>;
}
