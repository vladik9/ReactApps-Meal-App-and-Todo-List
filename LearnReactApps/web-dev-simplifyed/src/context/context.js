import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
//initial recipe
export const CrudContext = createContext({
  recepiesList: "",
  handleRecepieAdd: () => {},
  handleDeleteRecepe: () => {},
  handleUpdateRecepe: () => {},
});

export default function MainContext(props) {
  //initial recipe
  const sampleRecepies = [
    {
      id: uuidv4(),
      name: "Chicken",
      serving: 3,
      coockTime: "1:45",
      instructions: "1.Put 1 2.Put 2 3.Put 3 4.Put 4 5.Put 5",
      ingredients: [
        {
          id: uuidv4(),
          name: "Chicken",
          amount: "1 kg",
        },
        {
          id: uuidv4(),
          name: "Salt",
          amount: "1 spoon",
        },
      ],
    },
    {
      id: uuidv4(),
      name: "Soup",
      serving: 2,
      coockTime: "2:45",
      instructions: "1.Put 1 2.Put 2 3.Put 3 4.Put 4 5.Put 5",
      ingredients: [
        {
          id: uuidv4(),
          name: "Chicken",
          amount: "0.5 kg",
        },
        {
          id: uuidv4(),
          name: "Vegetables",
          amount: "0.2 kg",
        },
      ],
    },
  ];
  const [recepies, setRecepies] = useState(sampleRecepies);
  //here we handle new recpe
  const handleRecepieAdd = () => {
    const newRecepie = {
      id: uuidv4(),
      name: "new recepie",
      serving: 1,
      coockTime: "1:45",
      instructions: "1.Put 1 2.Put 2 3.Put 3 4.Put 4 5.Put 5",
      ingredients: [
        {
          id: uuidv4(),
          name: "Chicken",
          amount: "0.5 kg",
        },
      ],
    };

    setRecepies([...recepies, newRecepie]);
  };
  const handleDeleteRecepe = (id) => {
    const new_list = recepies.filter((item) => item.id !== id);
    setRecepies(new_list);
  };
  const handleUpdateRecepe = () => {};

  return (
    <CrudContext.Provider
      value={{
        recepies: recepies,
        handleRecepieAdd: handleRecepieAdd,
        handleDeleteRecepe: handleDeleteRecepe,
        handleUpdateRecepe: handleUpdateRecepe,
      }}
    >
      {props.children}
    </CrudContext.Provider>
  );
}
