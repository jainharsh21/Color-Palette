import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    height: "100px",
    width: "100px",
  },
};

function DraggableColorBox(props) {
  return (
    <div
      className={props.classes.root}
      style={{ backgroundColor: props.color }}
    >
      {props.color}
    </div>
  );
}

export default withStyles(styles)(DraggableColorBox);
