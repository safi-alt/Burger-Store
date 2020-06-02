import React from "react";
import Auxiliary from "../../hoc/Auxiliary";
import classes from "./Layout.css";

const layout = (props) => {
  return (
    <Auxiliary>
      <div>ToolBar, SideDrawer, Backdrop </div>
      <main className={classes.Content}>{props.children}</main>
    </Auxiliary>
  );
};

export default layout;
