import React, { useContext } from "react";
import Ingredients from "./Ingredients/Ingredients";
import styles from "../../Css/Recepie-edit.module.css";
import btnStyle from "../../Css/Btn.module.css";
import { CrudContext } from "../../context/context";

let btnClassNames = `${btnStyle.btn_add_recepie} ${btnStyle.btn_primary}`;
export default function EditRecepie({ selectedRecepieData }) {
  const {
    id,
    name,
    serving,
    instructions,
    ingredients,
    coockTime,
  } = selectedRecepieData;
  const {
    handleRecepieChangeData,
    handleEnableEditFrame,
    handleSaveEditRecepie,
    handleAddIngredient,
  } = useContext(CrudContext);

  return (
    <div className={styles.recepie_edit}>
      <div className={btnStyle.btn_remove_recepie}>
        <button
          name="btn_save"
          className={btnStyle.btn_edit_delete}
          onClick={handleSaveEditRecepie}
        >
          &oplus;
        </button>
        <button
          name="btn_delete"
          onClick={() => handleEnableEditFrame(false)}
          className={btnStyle.btn_edit_delete}
        >
          &otimes;
        </button>
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
          onChange={handleRecepieChangeData}
        ></input>
        <label htmlFor="time" className={styles.recepie_edit_lable}>
          Coock Time:
        </label>
        <input
          type="text"
          name="coockTime"
          id="coockTime"
          value={coockTime}
          className={styles.recepie_edit_input}
          onChange={handleRecepieChangeData}
        ></input>
        <label htmlFor="servings" className={styles.recepie_edit_lable}>
          Servings:
        </label>
        <input
          type="text"
          min="1"
          name="serving"
          id="serving"
          value={serving}
          className={styles.recepie_edit_input}
          onChange={handleRecepieChangeData}
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
          onChange={handleRecepieChangeData}
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
            return <Ingredients key={ingredient.id} ingredient={ingredient} />;
          })}
        </div>
      </div>
      <div className={styles.recepie_edit_grind_conatainer_btn}>
        <button
          className={btnClassNames}
          onClick={() => {
            handleAddIngredient(id);
          }}
        >
          Add ingredient
        </button>
      </div>
    </div>
  );
}
