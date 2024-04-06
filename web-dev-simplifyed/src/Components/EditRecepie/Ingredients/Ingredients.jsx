import React, { useContext } from "react";
import styles from "../../../Css/Recepie-edit.module.css";
import btnStyle from "../../../Css/Btn.module.css";
import { CrudContext } from "../../../context/context";
const deleteBtnStyle = `${btnStyle.btn_edit_delete} ${btnStyle.btn_secondary}`;
export default function Ingredients({ ingredient }) {
  const {
    handleRecepieIngredientChangeData,
    handleRemoveIngredients,
  } = useContext(CrudContext);
  return (
    <>
      <input
        type="text"
        name="name"
        id={ingredient.id}
        key={`${ingredient.id}+'name'`}
        value={ingredient.name}
        className={styles.recepie_edit_input}
        onChange={handleRecepieIngredientChangeData}
      />
      <input
        type="text"
        name="amount"
        id={ingredient.id}
        key={`${ingredient.id}+'amount'`}
        value={ingredient.amount}
        className={styles.recepie_edit_input}
        onChange={handleRecepieIngredientChangeData}
      />
      <button
        id={ingredient.id}
        type="button"
        className={deleteBtnStyle}
        onClick={() => handleRemoveIngredients(ingredient.id)}
      >
        &times;
      </button>
    </>
  );
}
