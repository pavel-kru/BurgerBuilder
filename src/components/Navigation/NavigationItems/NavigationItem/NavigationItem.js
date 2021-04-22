import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./NavigationItem.module.scss";

export const NavigationItem = (props) => (
  <li className={classes.NavigationItem}>
    <NavLink
      to={props.link}
      activeClassName={classes.active}
      exact={props.exact}
      onClick={props.clicked}
    >
      {props.children}
    </NavLink>
  </li>
);
