import React, { Fragment } from "react";
import classes from "./Header.module.css";
import mealImage from "../../assets/meals.jpg";
import HeaderCardButton from "./HeaderCardButton";
const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCardButton />
      </header>
      <div className={classes["main - image"]}>
        <img
          className={classes.main_imag_style}
          src={mealImage}
          alt="A table whit delicious food."
        ></img>
      </div>
    </Fragment>
  );
};

export default Header;
