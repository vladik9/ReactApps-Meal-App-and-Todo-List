import React from "react";
import Recepie from "../Recepie/Recepie";

export default function RecepieList({ recepies }) {
  return (
    <>
      {recepies.map((recepie) => {
        return <Recepie key={recepie.id} {...recepie} />;
      })}
      <button>Add Recepie</button>
    </>
  );
}
