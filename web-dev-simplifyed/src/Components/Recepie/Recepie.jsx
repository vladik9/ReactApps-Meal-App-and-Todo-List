import React, { useContext } from "react";
import IngredientsList from "../IngredientsList/IngredientsList";
import btnStyle from "../../Css/Btn.module.css";
import { CrudContext } from "../../context/context";

export default function Recepie(props) {
  const { handleUpdateRecepe, handleDeleteRecepe } = useContext(CrudContext);
  const { name, coockTime, serving, instructions, ingredients, id } = props;
  const editBtnStyle = `${btnStyle.btn_edit_delete} ${btnStyle.btn_primary}`;
  const deleteBtnStyle = `${btnStyle.btn_edit_delete} ${btnStyle.btn_secondary}`;

  return (
    <div>
      <div>
        <h3>{name} </h3>
      </div>
      <button className={editBtnStyle} onClick={() => handleUpdateRecepe(id)}>
        Edit
      </button>
      <button
        className={deleteBtnStyle}
        onClick={() => handleDeleteRecepe(props.id)}
      >
        Delete
      </button>
      <div>
        <span>Cook Time:</span>
        <span>{coockTime}</span>
      </div>
      <div>
        <span>Servings:</span>
        <span>{serving}</span>
      </div>
      <span>Instructions:</span>
      <div> {instructions}</div>
      <span>Ingredients: </span>
      <IngredientsList ingredients={ingredients} />
    </div>
  );
}
