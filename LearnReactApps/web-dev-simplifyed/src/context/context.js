import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const recepieStorageToken = "recepieStorageToken";
//initial recipe
export const CrudContext = createContext({
  recepies: "",
  selectedRecepieData: "",
  showEditFrame: "",
  handleRecepieAdd: () => {},
  handleDeleteRecepe: () => {},
  handleUpdateRecepe: () => {},
  handleRecepieChangeData: () => {},
  handleRecepieChangeDataIngredient: () => {},
  handleEnableEditFrame: () => {},
  handleSaveEditRecepie: () => {},
  handleRecepieIngredientChangeData: () => {},
  handleAddIngredient: () => {},
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
  const [showEditFrame, setShowEditState] = useState(true);

  // get index of selected id and from provided array
  const getIndex = (id, current_array) => {
    return current_array.findIndex((element) => {
      return element.id === id;
    });
  };

  const handleRecepieChangeData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setSelectedRecepieData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  // this was used prev
  const handleRecepieIngredientChangeData = (e) => {
    const id = e.target.id;
    const name = e.target.name;
    const value = e.target.value;
    const index = getIndex(id, selectedRecepieData.ingredients);
    const newIngredientsArray = [...selectedRecepieData.ingredients];
    newIngredientsArray[index][name] = value;
    setSelectedRecepieData((prev) => {
      return {
        ...prev,
        ingredients: newIngredientsArray,
      };
    });
  };

  // this function should update the ingredients inputs
  const handleRecepieChangeDataIngredient = (e) => {
    const id = e.target.id;
    const name = e.target.name;
    const value = e.target.value;
    const index = getIndex(id, selectedRecepieData.ingredients);
    console.log(index);
    const newRecepiesArray = [...selectedRecepieData.ingredients];
    newRecepiesArray[index][name] = value;
    console.log(newRecepiesArray);
    // this should be reworked, shold not update value that is not in recepie
    setSelectedRecepieData((last) => {
      return {
        ...last,
        ingredients: newRecepiesArray,
      };
    });
  };
  //need to check here after
  const handleSaveEditRecepie = () => {
    const newRecepiesArray = [...recepies];
    const index = getIndex(selectedRecepieData.id, recepies);
    newRecepiesArray[index] = selectedRecepieData;
    setRecepies(newRecepiesArray);
    handleEnableEditFrame(false);
  };

  const handleEnableEditFrame = (value) => {
    setShowEditState(value);
  };

  //here we handle new recpe
  const handleRecepieAdd = () => {
    const id = uuidv4();
    const newRecepie = {
      id: id,
      name: "",
      serving: 1,
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
    setSelectedRecepieData(newRecepie);
  };
  const handleAddIngredient = (id) => {
    const newIngredient = {
      id: uuidv4(),
      name: "",
      amount: "",
    };
    const newIngredientsArray = {
      ...selectedRecepieData,
    };
    newIngredientsArray.ingredients.push(newIngredient);
    console.log(newIngredientsArray);
    setSelectedRecepieData((last) => {
      return {
        ...last,
        ingredients: [newIngredientsArray],
      };
    });
  };

  const handleDeleteRecepe = (id) => {
    const new_item = recepies.filter((item) => item.id !== id);
    setRecepies(new_item);
  };
  const handleUpdateRecepe = (id) => {
    setShowEditState(true);
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
        showEditFrame,
        handleRecepieAdd,
        handleAddIngredient,
        handleDeleteRecepe,
        handleUpdateRecepe,
        handleRecepieChangeData,
        handleRecepieChangeDataIngredient,
        handleEnableEditFrame,
        handleSaveEditRecepie,
      }}
    >
      {props.children}
    </CrudContext.Provider>
  );
}
