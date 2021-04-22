import React from "react";
import { BuildControl } from "./BuildControl/BuildControl";
import classes from "./BuildControls.module.scss";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

export const BuildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      <p>
        Burger price: <strong>{props.price.toFixed(2)}$</strong>
      </p>
      <div className={classes.controlsContainer}>
        {controls.map((cntrl) => (
          <BuildControl
            key={cntrl.label}
            label={cntrl.label}
            add={() => props.ingredientsAdd(cntrl.type)}
            remove={() => props.ingredientsRemove(cntrl.type)}
            disabled={props.disabled[cntrl.type]}
            price={props.price}
          />
        ))}
      </div>
      <button
        className={classes.OrderButton}
        disabled={!props.purchasable}
        onClick={props.ordered}
      >
      {props.isAuthanticated ?  "ORDER NOW" : "PLEASE, LOGIN"}
      </button>
    </div>
  );
};
