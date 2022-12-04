import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const recepieStorageToken = "recepieStorageToken";
//initial recipe
export const CrudContext = createContext({
  recepies: "",
  selectedRecepieData: "",
  handleRecepieAdd: () => {},
  handleDeleteRecepe: () => {},
  handleUpdateRecepe: () => {},
  handleRecepieChangeData: () => {},
  handleRecepieChangeDataIngredient: () => {},
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
  const [selectedRecepieData, setSelectedRecepieData] = useState();
  const handleRecepieChangeData = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setSelectedRecepieData((last) => {
      return { ...last, [name]: value };
    });
  };
  // this function should update the ingredients inputs
  const handleRecepieChangeDataIngredient = (e) => {
    console.log(e.target);
    const name = e.target.name;
    const value = e.target.value;
    setSelectedRecepieData((last) => {
      return { ...last, ingredients: [{ [name]: value }] };
    });
  };
  //here we handle new recpe
  const handleRecepieAdd = (newRecepieCreated) => {
    const id = uuidv4();
    const newRecepie = {
      id: id,
      name: "",
      serving: "",
      coockTime: "",
      instructions: "",
      ingredients: [
        {
          id: uuidv4(),
          name: "",
          amount: "",
        },
      ],
    };
    setRecepies([...recepies, newRecepie]);
  };
  const handleDeleteRecepe = (id) => {
    const new_list = recepies.filter((item) => item.id !== id);
    setRecepies(new_list);
  };
  const handleUpdateRecepe = (id) => {
    setSelectedRecepieData(recepies.find((recepie) => recepie.id === id));
  };

  useEffect(() => {
    const recepieJson = JSON.parse(localStorage.getItem(recepieStorageToken));

    if (recepieJson.length !== 0) {
      setRecepies(recepieJson);
    } else setRecepies(sampleRecepies);
  }, []);

  useEffect(() => {
    localStorage.setItem(recepieStorageToken, JSON.stringify(recepies));
  }, [recepies]);

  return (
    <CrudContext.Provider
      value={{
        recepies,
        selectedRecepieData,
        handleRecepieAdd,
        handleDeleteRecepe,
        handleUpdateRecepe,
        handleRecepieChangeData,
        handleRecepieChangeDataIngredient,
      }}
    >
      {props.children}
    </CrudContext.Provider>
  );
}
