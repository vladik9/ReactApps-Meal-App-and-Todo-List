import React, { useContext } from "react";
import Recepie from "../Recepie/Recepie";
import styles from "../../Css/Recipie-list.module.css";
import btnStyle from "../../Css/Btn.module.css";
import { CrudContext } from "../../context/context";
export default function RecepieList() {
  let btnClassNames = `${btnStyle.btn_add_recepie} ${btnStyle.btn_primary}`;
  const ctx = useContext(CrudContext);

  return (
    <div className={styles.recipie_list}>
      {ctx.recepies.map((recepie) => {
        return <Recepie key={recepie.id} {...recepie} />;
      })}
      <div className={styles.recipie_list_btn_container}>
        <button className={btnClassNames} onClick={ctx.handleRecepieAdd}>
          Add Recepie
        </button>
      </div>
    </div>
  );
}
