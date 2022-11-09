import React, { useState, useContext } from "react";
import { InitialValue } from "../context/context";
export default function FunctionalComponent() {
  const ctx = useContext(InitialValue);
  const [counter, setCounter] = useState(ctx.counterValue);

  const setNewValue = (value) => {
    setCounter((curret) => {
      return curret + value;
    });
  };
  return (
    <div>
      <h3>Functional Component</h3>

      <button onClick={() => setNewValue(-1)}>-</button>
      <span>{counter}</span>
      <button onClick={() => setNewValue(+1)}>+</button>
    </div>
  );
}
