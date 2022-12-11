import React from "react";
import styles from "../../../Css/Recepie-edit.module.css";
import btnStyle from "../../../Css/Btn.module.css";

const deleteBtnStyle = `${btnStyle.btn_edit_delete} ${btnStyle.btn_secondary}`;
export default function Ingredients({
  ingredient,
  handleRecepieChangeDataIngredient,
}) {
  return (
    <>
      <input
        type="text"
        name="name"
        id={ingredient.id}
        key={`${ingredient.id}+'name'`}
        value={ingredient.name}
        className={styles.recepie_edit_input}
        onInput={handleRecepieChangeDataIngredient}
      />
      <input
        type="text"
        name="amount"
        id={ingredient.id}
        key={`${ingredient.id}+'amount'`}
        value={ingredient.amount}
        className={styles.recepie_edit_input}
        onInput={handleRecepieChangeDataIngredient}
      />
      <button type="button" className={deleteBtnStyle}>
        &times;
      </button>
    </>
  );
}
