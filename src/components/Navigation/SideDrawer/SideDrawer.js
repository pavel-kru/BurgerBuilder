import React from "react";

import { Logo } from "../../Logo/Logo";
import { NavigationItems } from "../NavigationItems/NavigationItems";
import styles from "./SideDrawer.module.scss";
import { Backdrop } from "../../UI/Backdrop/Backdrop";
import { Aux } from "../../../hoc/Auxiliary/Auxiliary";

const sideDrawer = (props) => {
  let attachClasses = [styles.sideDrawer, styles.close];
  if (props.open) {
    attachClasses = [styles.sideDrawer, styles.open];
  }

  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachClasses.join(" ")}>
        <div className={styles.Logo}>
          <Logo clicked={props.closed}/>
        </div>
        <nav>
          <NavigationItems isAuth={props.isAuth} clicked={props.closed} />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
