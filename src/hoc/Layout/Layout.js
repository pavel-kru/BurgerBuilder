import React, { useState } from "react";
import { connect } from "react-redux";

import { Aux } from "../Auxiliary/Auxiliary";
import classes from "./Layout.module.scss";
import { ToolBar } from "../../components/Navigation/ToolBar/ToolBar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

const Layout = props =>  {
  const [showSideDrawer, setShowSideDrawer] = useState(false);
    

  const SideDrawerCloseHandler = () => {
    setShowSideDrawer(false);
  };
  const SideDrawerToggleHandler = () => {
    setShowSideDrawer((prev) => {
      return { showSideDrawer: !prev.showSideDrawer };
    });
  };
  
    return (
      <Aux>
        <ToolBar
          isAuth={props.isAuth}
          clicked={SideDrawerToggleHandler}
        />
        <SideDrawer
          isAuth={props.isAuth}
          open={showSideDrawer}
          closed={SideDrawerCloseHandler}
        />
        <main className={classes.ToolBar}>{props.children}</main>
      </Aux>
    );
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.token !== null,
  };
};

export default connect(mapStateToProps)(Layout);
