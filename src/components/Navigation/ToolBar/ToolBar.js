import React from "react";
import { Logo } from "../../Logo/Logo";
import { NavigationItems } from "../NavigationItems/NavigationItems";
import { DrawerToggle } from "../SideDrawer/DrawerToggle/DrawerToggle";

import classes from "./ToolBar.module.scss";

export const ToolBar = (props) => (
  <header className={classes.ToolBar}>
    <DrawerToggle drawerToggle={props.clicked} />
    <Logo className={classes.Logo} />
    <nav className={classes.DesktopOnly}>
      <NavigationItems isAuth={props.isAuth}/>
    </nav>
  </header>
);
