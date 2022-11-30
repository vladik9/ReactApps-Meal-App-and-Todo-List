import React, { useContext } from "react";
import Recepie from "../Recepie/Recepie";
import styles from "../../Css/Recipie-list.module.css";
import btnStyle from "../../Css/Btn.module.css";
import { CrudContext } from "../../context/context";
export default function RecepieList({
  recepies,
  handleRecepieAdd,
  handleDeleteRecepe,
  handleUpdateRecepe,
}) {
  let btnClassNames = `${btnStyle.btn_add_recepie} ${btnStyle.btn_primary}`;
  const ctx = useContext(CrudContext);
  console.log(ctx);
  return (
    <div className={styles.recipie_list}>
      {recepies.map((recepie) => {
        return (
          <Recepie
            key={recepie.id}
            {...recepie}
            handleDeleteRecepe={handleDeleteRecepe}
            handleUpdateRecepe={handleUpdateRecepe}
          />
        );
      })}
      <div className={styles.recipie_list_btn_container}>
        <button className={btnClassNames} onClick={handleRecepieAdd}>
          Add Recepie
        </button>
      </div>
    </div>
  );
}
