import React from "react";

import classes from "./Modal.module.scss";
import { Aux } from "../../../hoc/Auxiliary/Auxiliary";
import { Backdrop } from "../Backdrop/Backdrop";

const Modal = ({show, close, children}) => {
  
  return (
    <Aux>
      <Backdrop show={show} clicked={close} />
      <div
        className={classes.Modal}
        style={{
          transform: show ? null : "translateY(-100vh)",
          opacity: show ? "1" : "0",
        }}
      >
        {children}
      </div>
    </Aux>
  );
};

export default React.memo(Modal)
