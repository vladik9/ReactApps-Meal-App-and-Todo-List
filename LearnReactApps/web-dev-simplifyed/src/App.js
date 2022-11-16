import React from "react";
import RecepieList from "./Components/RecepieList/RecepieList";
import styles from "./Css/App.module.css";
export default function App() {
  const sampleRecepies = [
    {
      id: 1,
      name: "Chicken",
      Serving: 3,
      coockTime: "1:45",
      Instructions: "1.Put 1 2.Put 2 3.Put 3 4.Put 4 5.Put 5",
      ingredients: [
        {
          id: 1,
          name: "Chicken",
          amount: "1 kg",
        },
        {
          id: 2,
          name: "Salt",
          amount: "1 spoon",
        },
      ],
    },
    {
      id: 2,
      name: "Soup",
      Serving: 2,
      coockTime: "2:45",
      Instructions: "1.Put 1 2.Put 2 3.Put 3 4.Put 4 5.Put 5",
      ingredients: [
        {
          id: 1,
          name: "Chicken",
          amount: "0.5 kg",
        },
        {
          id: 2,
          name: "Vegetables",
          amount: "0.2 kg",
        },
      ],
    },
  ];

  return <RecepieList recepies={sampleRecepies} />;
}
