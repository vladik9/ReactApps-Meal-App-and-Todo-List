import React from "react";
import Recepie from "../Recepie/Recepie";
import styles from "../../Css/Recipie-list.module.css";
import btnStyle from "../../Css/Btn.module.css";

export default function RecepieList({ recepies }) {
  let btnClassNames = `${btnStyle.btn_add_recepie} ${btnStyle.btn_primary}`;
  return (
    <div className={styles.recipie_list}>
      {recepies.map((recepie) => {
        return <Recepie key={recepie.id} {...recepie} />;
      })}
      <div className={styles.recipie_list_btn_container}>
        <button className={btnClassNames}>Add Recepie</button>
      </div>
    </div>
  );
}
