import React, { Component } from "react";
import { Link } from "react-router-dom";

class PaletteList extends Component {
  render() {
    const { palettes } = this.props;
    return (
      <div>
        <h1>PaletteList!</h1>
        <p>
          {palettes.map((palette) => (
            <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
          ))}
        </p>
      </div>
    );
  }
}

export default PaletteList;
