import React from "react";

import classes from "./Order.module.scss";

const Order = (props) => {
  const ingredients = [];
  for (let ingredientsName in props.ingredients) {
    ingredients.push({
      name: ingredientsName,
      amount: props.ingredients[ingredientsName],
    });
  }

  const ingredientsOutput = ingredients.map(
    ing => {
      return (
        <span key={ing.name}>{ing.name} ({ing.amount})</span>
      )
    }
  )

  return (
    <div className={classes.Order}>
      <p>Ingredients:<br />{ingredientsOutput}</p>
      <p>
        Price: <strong>{props.price.toFixed(2)} $</strong>
      </p>
    </div>
  );
};

export default Order;
