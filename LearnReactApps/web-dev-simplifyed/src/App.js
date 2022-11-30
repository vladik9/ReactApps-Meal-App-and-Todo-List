import React, { useState, useContext } from "react";
import RecepieList from "./Components/RecepieList/RecepieList";
import styles from "./Css/App.module.css";
import { v4 as uuidv4 } from "uuid";
// import { MainCrudContext, CrudContext } from "./context/context";

export default function App() {
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
    <RecepieList
      recepies={recepies}
      handleRecepieAdd={handleRecepieAdd}
      handleDeleteRecepe={handleDeleteRecepe}
      handleUpdateRecepe={handleUpdateRecepe}
    />
  );
}
