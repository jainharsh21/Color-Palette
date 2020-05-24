import React from "react";
import DraggableColorBox from "./DraggableColorBox";
import { SortableContainer } from "react-sortable-hoc";

function DraggableColorList({ colors, removeColor }) {
  return (
    <div style={{ height: "100%" }}>
      {colors.map((color) => (
        <DraggableColorBox
          key={color.name}
          color={color.color}
          name={color.name}
          handleClick={() => removeColor(color.name)}
        />
      ))}
    </div>
  );
}

export default DraggableColorList;
