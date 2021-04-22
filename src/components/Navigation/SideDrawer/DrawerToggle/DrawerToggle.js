import React from "react";

import styles from "./DrawerToggle.module.scss";

export const DrawerToggle = ({ drawerToggle }) => {
  return (
    <div onClick={drawerToggle} className={styles.DrawerToggle}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
