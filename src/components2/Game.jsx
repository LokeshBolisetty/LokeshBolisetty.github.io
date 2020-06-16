import React, { Component } from "react";
import Board from "./Board";
import "./style.css";
class Game extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Board />
      </React.Fragment>
    );
  }
}

export default Game;
