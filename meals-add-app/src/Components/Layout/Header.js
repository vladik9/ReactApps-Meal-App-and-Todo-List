import React from "react";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import CardButton from "./HeaderCardButton";
export default function Header(props) {
  return (
    <>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <CardButton onClick={props.onClick} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="meals food" />
      </div>
    </>
  );
}
