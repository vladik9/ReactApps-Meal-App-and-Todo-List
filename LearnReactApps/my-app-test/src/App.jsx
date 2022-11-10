import React, { useEffect, useContext } from "react";
import ContextData from "./context_data";

function App() {
  const ctx = useContext(ContextData);

  useEffect(() => {
    fetch(ctx.endPoint)
      .then((response) => response.json())
      .then((data) => {
        ctx.setNewJoke(data.joke);
      });
  }, []);

  return (
    <React.Fragment>
      <h3>Type: </h3>
      <br />
      <h5> Joke is: {ctx.joke}</h5>
      <button onClick={ctx.getAJoke}>Get a new joke</button>
    </React.Fragment>
  );
}

export default App;
