import React from "react";
import Ingredients from "./Ingredients/Ingredients";
import styles from "../../Css/Recepie-edit.module.css";
import btnStyle from "../../Css/Btn.module.css";

let btnClassNames = `${btnStyle.btn_add_recepie} ${btnStyle.btn_primary}`;
export default function EditRecepie({ selectedRecepieData, handleRecepieAdd }) {
  const {
    name,
    serving,
    instructions,
    ingredients,
    coockTime,
  } = selectedRecepieData;

  return (
    <div className={styles.recepie_edit}>
      <div className={btnStyle.btn_remove_recepie}>
        <button className={btnStyle.btn_edit_delete}>&times;</button>
      </div>
      <div className={styles.recepie_grid}>
        <label htmlFor="name" className={styles.recepie_edit_lable}>
          Name:
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          className={styles.recepie_edit_input}
          onChange={handleRecepieAdd}
        ></input>
        <label htmlFor="time" className={styles.recepie_edit_lable}>
          Coock Time:
        </label>
        <input
          type="text"
          name="time"
          id="time"
          value={coockTime}
          className={styles.recepie_edit_input}
          onChange={handleRecepieAdd}
        ></input>
        <label htmlFor="servings" className={styles.recepie_edit_lable}>
          Servings:
        </label>
        <input
          type="text"
          min="1"
          name="servings"
          id="servings"
          value={serving}
          className={styles.recepie_edit_input}
          onChange={handleRecepieAdd}
        ></input>
        <label htmlFor="instructions" className={styles.recepie_edit_lable}>
          Instructions:
        </label>
        <textarea
          type="text-area"
          name="instructions"
          id="instructions"
          value={instructions}
          className={styles.recepie_edit_input}
          onChange={handleRecepieAdd}
        ></textarea>
      </div>
      <div>
        <label className={styles.recepie_edit_lable}>Ingredients</label>
        <br />
        <div className={styles.ingredinets_grid}>
          <span>Name:</span>
          <span>Amount:</span>
          <div></div>
          {ingredients.map((ingredient) => {
            return (
              <Ingredients
                key={ingredient.id}
                ingredient={ingredient}
                handleRecepieAdd={handleRecepieAdd}
              />
            );
          })}
        </div>
      </div>
      <div className={styles.recepie_edit_grind_conatainer_btn}>
        <button className={btnClassNames}>Add ingredient</button>
      </div>
    </div>
  );
}
