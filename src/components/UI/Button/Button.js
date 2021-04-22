import React from "react";

import classes from "./Button.module.scss";

export const Button = (props) => {
  return (
    <button
      disabled={props.disabled}
      onClick={props.clicked}
      className={[classes.Button, classes[props.btnType]].join(" ")}
    >
      {props.children}
    </button>
  );
};
