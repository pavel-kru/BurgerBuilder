import React from "react";

import classes from "./Modal.module.scss";
import { Aux } from "../../../hoc/Auxiliary/Auxiliary";
import { Backdrop } from "../Backdrop/Backdrop";

const Modal = (props) => {
  console.log("i am rendering");
  return (
    <Aux>
      <Backdrop show={props.show} clicked={props.close} />
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? null : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        {props.children}
      </div>
    </Aux>
  );
};

// function showEqual(prevProps, nextProps) {
//   return (
//     nextProps.show === prevProps.show ||
//     nextProps.children === prevProps.children
//   );
// }

export default React.memo(Modal)
