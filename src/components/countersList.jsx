import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
  const initialState = [
    { id: 0, value: 0, name: "Ненужная вещь" },
    { id: 1, value: 1, name: "Ложка" },
    { id: 2, value: 2, name: "Вилка" },
    { id: 3, value: 1, name: "Тарелка" },
    { id: 4, value: 2, name: "Набор минималиста" },
  ];

  const [counters, setCounters] = useState(initialState);

  const handlDelete = (id) => {
    const newCounters = counters.filter((c) => c.id !== id);
    setCounters(newCounters);
  };

  const hendleReset = () => {
    setCounters(initialState);
  };

  const handleDecrement = (id) => {
    const newState = counters.map((el) => {
      if (el.id === id) {
        el.value += 1;
      }
      return el;
    });
    setCounters(newState)
  };

  const handleIncrement = (id) => {
    const newState = counters.map((el) => {
      if (el.id === id) {
        el.value ? (el.value -= 1) : (el.value = 0);
      }
      return el;
    });
    setCounters(newState)
  };

  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          onDelete={handlDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          {...count}
        />
      ))}
      <button className='btn btn-primary btn-sm m-2' onClick={hendleReset}>
        Reset
      </button>
    </>
  );
};

export default CountersList;
