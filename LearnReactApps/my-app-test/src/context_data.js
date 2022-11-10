import React, { useState } from "react";

const ContextData = React.createContext({
  userName: "",
  endPoint: "",
  getJoke: () => {},
  getMyName: () => {},
  setNewJoke: () => {},
});

export const ProviderData = (props) => {
  const [joke, setNewJoke] = useState("A joke?");
  const endPoint =
    "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=political,sexist&type=single";

  const getMyName = () => {
    return "My name is Vlad.";
  };
  async function getJoke() {
    fetch(endPoint)
      .then((response) => response.json())
      .then((data) => {
        setNewJoke(data.joke);
      });
  }

  return (
    <ContextData.Provider
      value={{
        getAJoke: getJoke,
        userName: "Vladutz",
        endPoint: endPoint,
        getMyName: getMyName,
        setNewJoke: setNewJoke,
      }}
    >
      {props.children}
    </ContextData.Provider>
  );
};

export default ContextData;
