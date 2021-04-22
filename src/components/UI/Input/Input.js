import React from "react";

import classes from "./Input.module.scss";

const Input = (props) => {
  let inputElement = null;
  let inputClasses = [classes.InputElement];
  if (props.invalid) {inputClasses.push(classes.Invalid)} else if (inputClasses.includes(classes.Invalid) ) {
    inputClasses.pop(classes.Invalid) 
  };
  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          {...props.elementConfig}
          value={props.value}
          className={inputClasses.join(" ")}
          onChange={props.changed}
        />
      );
      break;
    case "text-area":
      inputElement = (
        <textarea
          {...props.elementConfig}
          value={props.value}
          className={inputClasses.join(" ")}
          onChange={props.changed}
        />
      );
      break;
    case "select":
      inputElement = (
        <select
          value={props.value}
          className={inputClasses.join(" ")}
          onChange={props.changed}
        >
          {props.elementConfig.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.displayName}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          {...props.elementConfig}
          value={props.value}
          className={inputClasses.join(" ")}
          onChange={props.changed}
        />
      );
  }
  return <>{ inputElement }</>;
};

export default Input;
