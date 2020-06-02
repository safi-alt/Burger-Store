import React from "react";
import Auxiliary from "./../../../hoc/Auxiliary";

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKeys) => {
    return (
      <li key={igKeys}>
        <span style={{ textTransform: "capitalize" }}>
          {igKeys}: {props.ingredients[igKeys]}
        </span>
      </li>
    );
  });
  return (
    <Auxiliary>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to Checkout?</p>
    </Auxiliary>
  );
};

export default orderSummary;
