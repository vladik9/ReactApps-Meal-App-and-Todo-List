import React, { useContext } from "react";
import Recepie from "../Recepie/Recepie";
import styles from "../../Css/Recipie-list.module.css";
import btnStyle from "../../Css/Btn.module.css";
import { CrudContext } from "../../context/context";
import EditRecepie from "../EditRecepie/EditRecepie";
export default function RecepieList() {
  let btnClassNames = `${btnStyle.btn_add_recepie} ${btnStyle.btn_primary}`;
  const {
    recepies,
    showEditFrame,
    handleRecepieAdd,
    selectedRecepieData,
  } = useContext(CrudContext);
  return (
    <>
      <div className={styles.recipie_list}>
        {recepies.map((recepie) => {
          return <Recepie key={recepie.id} {...recepie} />;
        })}
        <div className={styles.recipie_list_btn_container}>
          <button className={btnClassNames} onClick={handleRecepieAdd}>
            Add Recepie
          </button>
        </div>
      </div>

      {showEditFrame === true
        ? selectedRecepieData && (
            <EditRecepie selectedRecepieData={selectedRecepieData} />
          )
        : ""}
    </>
  );
}
