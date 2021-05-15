import React from "react";

import classes from "./Modal.module.scss";
import { Aux } from "../../../hoc/Auxiliary/Auxiliary";
import { Backdrop } from "../Backdrop/Backdrop";

const Modal = (props) => {
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

export default React.memo(
  Modal,
  (prev, next) => prev.show === next.show && prev.children === next.children
);
