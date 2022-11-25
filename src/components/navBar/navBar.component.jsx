import React from "react";

import "./style.css";

export const NavBar = ({ total, handleAddNewCounter, handleReset }) => {
  return (
    <div className="nav-container">
      <div className="total">Total: {total}</div>
      <button
        type="button"
        class="btn btn-info"
        onClick={() => handleAddNewCounter()}
      >
        Add New Counter
      </button>
      <button type="button" class="btn btn-info" onClick={() => handleReset()}>
        Reset
      </button>
    </div>
  );
};
