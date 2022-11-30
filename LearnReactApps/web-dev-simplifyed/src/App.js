import React from "react";
import RecepieList from "./Components/RecepieList/RecepieList";
import "./Css/App.module.css";
import MainContext from "./context/context";

export default function App() {
  return (
    <MainContext>
      <RecepieList />
    </MainContext>
  );
}
