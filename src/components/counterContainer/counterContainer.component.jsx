import React, { useState } from "react";

import { Counter, NavBar } from "../";

export const CounterContainer = (props) => {
  const [counterArr, setCounterArr] = useState([]);
  const [total, setTotal] = useState(0);

  const handleIncrement = (id) => {
    let counter = counterArr.find((element) => element.id === id);
    counter.value = counter.value + 1;
    let withoutId = counterArr.filter((f) => f.id !== id);
    setCounterArr([...withoutId, counter]);
    setTotal((prev) => prev + 1);
  };

  const handleDecrement = (id) => {
    let counter = counterArr.find((element) => element.id === id);
    counter.value = counter.value - 1;
    //setCounterArr(counterArr);
    setTotal((prev) => prev - 1);
  };

  const handleAddNewCounter = () => {
    let newCounter = {
      id: counterArr.length + 1,
      value: 0,
    };

    setCounterArr([...counterArr, newCounter]);
  };

  const handleReset = () => {
    setCounterArr([]);
    setTotal(0);
  };

  const handleDelete = (id) => {
    let current = counterArr.find((e) => e.id === id);
    let currentArr = counterArr.filter((element) => element.id !== id);
    setCounterArr(currentArr);
    setTotal((prev) => prev - current.value);
  };

  return (
    <div>
      <NavBar
        total={total}
        handleAddNewCounter={handleAddNewCounter}
        handleReset={handleReset}
      ></NavBar>
      <div>
        {counterArr &&
          counterArr
            .sort((a, b) => (a.id > b.id ? 1 : -1))
            .map((c) => {
              return (
                <Counter
                  counterId={c.id}
                  counterValue={c.value}
                  handleIncrement={handleIncrement}
                  handleDecrement={handleDecrement}
                  handleDelete={handleDelete}
                ></Counter>
              );
            })}
      </div>
    </div>
  );
};
