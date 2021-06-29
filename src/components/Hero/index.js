import React from "react";
import "../../../src/index.css";

function Jumbotron() {
  return (
    <div className="jumbotron jumbotron-fluid text">
      <div className="container">
        <h1 className="display-4">Employee Directory</h1>
        <p className="message">Search first or last name</p>
      </div>
    </div>
  );
}

export default Jumbotron;
