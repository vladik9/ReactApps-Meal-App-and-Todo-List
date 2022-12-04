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
        value={ingredient.name}
        className={styles.recepie_edit_input}
        onChange={handleRecepieChangeDataIngredient}
      />
      <input
        type="text"
        name="amount"
        value={ingredient.amount}
        className={styles.recepie_edit_input}
        onChange={handleRecepieChangeDataIngredient}
      />
      <button type="button" className={deleteBtnStyle}>
        &times;
      </button>
    </>
  );
}
