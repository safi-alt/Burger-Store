import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import classes from "./Burger.css";
import { withRouter } from "react-router-dom";

const burger = (props) => {
  console.log(props);
  let transformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      //Object.keys returns the object in form of array
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        // .map(igKeys) will map on each key and the Array function will take length of each element with props.ingredients and map to [igKeys] which is the element
        return <BurgerIngredient key={igKey + i} type={igKey} />; // the first .map will return array which is equal to the length e.g [meat,meat] beacuse meat:2
      });
    })
    .reduce((arr, el) => {
      // arr initial value and el next value while [] is initialize for empty array. .reduce flat the array
      return arr.concat(el);
    }, []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding Ingredients!</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default withRouter(burger);
