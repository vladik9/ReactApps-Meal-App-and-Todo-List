import React from "react";
import IngredientsList from "../IngredientsList/IngredientsList";
export default function Recepie(props) {
  const { name, coockTime, Serving, Instructions, ingredients } = props;
  return (
    <div>
      <div>
        <h3>{name} </h3>
      </div>
      <button>Edit</button>
      <button>Delete</button>
      <div>
        <span>Cook Time:</span>
        <span>{coockTime}</span>
      </div>
      <div>
        <span>Servings:</span>
        <span>{Serving}</span>
      </div>
      <span>Instructions</span>
      <div> {Instructions}</div>
      <span>Ingredients: </span>
      <IngredientsList ingredients={ingredients} />
    </div>
  );
}
