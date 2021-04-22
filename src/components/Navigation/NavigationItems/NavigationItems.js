import React from "react";

import classes from "./NavigationItems.module.scss";
import { NavigationItem } from "./NavigationItem/NavigationItem";


export const NavigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem clicked={props.clicked} link="/" exact>Burger Builder</NavigationItem>
    {props.isAuth ? <NavigationItem clicked={props.clicked} link="/orders">Orders</NavigationItem> : null}
    {props.isAuth?
    <NavigationItem clicked={props.clicked} link="/logout">Logout</NavigationItem>
    :<NavigationItem clicked={props.clicked} link="/auth" >Login</NavigationItem>}
  </ul>
);
