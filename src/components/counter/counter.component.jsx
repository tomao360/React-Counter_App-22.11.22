import React, { useState } from "react";

import "./style.css";

export const Counter = ({
  counterId,
  counterValue,
  handleIncrement,
  handleDecrement,
  handleDelete,
}) => {
  const [styleCss, setStyleCss] = useState("");

  const increment = () => {
    setStyleCss("counter dark");

    handleIncrement(counterId);
  };

  const decrement = () => {
    setStyleCss("counter light");

    handleDecrement(counterId);
  };

  return (
    <div className={styleCss}>
      <button onClick={increment} className="btn btn-secondary">
        +
      </button>
      <span className="counter-data">{counterValue}</span>
      <button onClick={decrement} className="btn btn-secondary">
        -
      </button>
      <button
        className="btn btn-danger"
        onClick={() => handleDelete(counterId)}
      >
        Delete
      </button>
    </div>
  );
};
