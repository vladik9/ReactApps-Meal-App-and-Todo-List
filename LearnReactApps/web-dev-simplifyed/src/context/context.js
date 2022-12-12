import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const recepieStorageToken = "recepieStorageToken";
export const CrudContext = createContext({
  recepies: "",
  selectedRecepieData: "",
  showEditFrame: "",
  handleRecepieAdd: () => {},
  handleDeleteRecepe: () => {},
  handleUpdateRecepe: () => {},
  handleRecepieChangeData: () => {},
  handleEnableEditFrame: () => {},
  handleSaveEditRecepie: () => {},
  handleRecepieIngredientChangeData: () => {},
  handleAddIngredient: () => {},
  handleRemoveIngredients: () => {},
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
  function getIndex(id, current_array) {
    return current_array.findIndex((element) => {
      return element.id === id;
    });
  }
  //updating a keay in Array
  function updateKeyInSelectedArray(key, value) {
    setSelectedRecepieData((last) => {
      return {
        ...last,
        [key]: value,
      };
    });
  }

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

  const handleRecepieIngredientChangeData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const index = getIndex(e.target.id, selectedRecepieData.ingredients);
    const newIngredientsArray = [...selectedRecepieData.ingredients];
    newIngredientsArray[index][name] = value;
    updateKeyInSelectedArray("ingredients", newIngredientsArray);
  };

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
  const handleAddIngredient = () => {
    const newIngredient = {
      id: uuidv4(),
      name: "",
      amount: "",
    };
    const newIngredientsArray = [...selectedRecepieData.ingredients];
    newIngredientsArray.push(newIngredient);
    setSelectedRecepieData((last) => {
      return {
        ...last,
        ingredients: newIngredientsArray,
      };
    });
  };
  const handleRemoveIngredients = (id) => {
    const filtredIngredientsArray = selectedRecepieData.ingredients.filter(
      (el) => {
        return el.id !== id;
      }
    );
    updateKeyInSelectedArray("ingredients", filtredIngredientsArray);
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
        handleEnableEditFrame,
        handleSaveEditRecepie,
        handleRecepieIngredientChangeData,
        handleRemoveIngredients,
      }}
    >
      {props.children}
    </CrudContext.Provider>
  );
}
