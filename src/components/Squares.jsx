import React, { Component } from "react";
import "./Square";

class Squares extends Component {
  rendersquare(i) {
    return <square />;
  }

  render() {
    return (
      <React.Fragment>
        <div className="square-row">
          {this.rendersquare(0)}
          {this.rendersquare(1)}
          {this.rendersquare(2)}
        </div>
        <div className="square-row">
          {this.rendersquare(3)}
          {this.rendersquare(4)}
          {this.rendersquare(5)}
        </div>
        <div className="square-row">
          {this.rendersquare(6)}
          {this.rendersquare(7)}
          {this.rendersquare(8)}
        </div>
      </React.Fragment>
    );
  }
}

export default Squares;
