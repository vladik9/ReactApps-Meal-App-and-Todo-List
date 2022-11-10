import React, { useContext } from "react";
import ContextData from "../../context_data";
export default function RadioInput(props) {
  const ctx = useContext(ContextData);
  console.log(ctx);
  return (
    <div>
      <label>{props.name}</label>
      {/* <input type="radio" value={props.value} name={props.name} /> */}
      {ctx.userName}
    </div>
  );
}
