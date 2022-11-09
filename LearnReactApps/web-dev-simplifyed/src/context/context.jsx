import React from "react";

export const InitialValue = React.createContext({
  counterValue: 0,
  lastValue: "",
  setValue: () => {},
});

export const InitialValueProvider = (props) => {
  return (
    <InitialValue.Provider value={{ counterValue: 0 }}>
      {props.children}
    </InitialValue.Provider>
  );
};
