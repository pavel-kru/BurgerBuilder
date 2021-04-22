import React from "react";

import { Aux } from "../../../hoc/Auxiliary/Auxiliary";
import { Button } from "../../UI/Button/Button";
import classes from "./BurgerSummary.module.scss"

export const BurgerSummary = ({
  ingredients,
  continuePurchasing,
  CancelPurchasing,
  price,
}) => {
  let ingrSum = Object.keys(ingredients).map((ing) => {
    return (
      <li key={ing}>
        <span>{ing}:</span>
        <span> {ingredients[ing]}</span>
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your order</h3>
      <p>A delicius burger with:</p>
      <ul>{ingrSum}</ul>
      <p>
        <strong>
          Total price: <span style={{ color: "blue" }}>{price.toFixed(2)}</span>
          <span style={{ color: "green" }}>$</span>
        </strong>
      </p>
      <p>Continue to checkout?</p>
      <Button className={classes.Button} btnType="Success" clicked={continuePurchasing}>
        Confirm
      </Button>
      <Button className={classes.Button} btnType="Danger" clicked={CancelPurchasing}>
        Cancel
      </Button>
    </Aux>
  );
};
