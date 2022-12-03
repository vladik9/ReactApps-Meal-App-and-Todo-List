import React from "react";
import styles from "../../../Css/Recepie-edit.module.css";
import btnStyle from "../../../Css/Btn.module.css";
const deleteBtnStyle = `${btnStyle.btn_edit_delete} ${btnStyle.btn_secondary}`;
export default function Ingredients({ ingredient, handleRecepieAdd }) {
  return (
    <>
      <input
        type="text"
        value={ingredient.name}
        className={styles.recepie_edit_input}
        onChange={handleRecepieAdd}
      />
      <input
        type="text"
        value={ingredient.amount}
        className={styles.recepie_edit_input}
        onChange={handleRecepieAdd}
      />
      <button type="button" className={deleteBtnStyle}>
        &times;
      </button>
    </>
  );
}
