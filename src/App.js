import React, { useState, useEffect, useReducer } from 'react';
import './style.css';

export default function App() {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);

  const factorialOf = (n) => {
    return n <= 0 ? 1 : n * factorialOf(n);
  };

  const factorialOf = factorialOf(number);

  const onChange = ({ target }) => {
    setNumber(target.value);
  };

  const onClick = () => setInc(inc + 1);

  return (
    <div>
      Factorial of
      <input type="number" value={number} onChange={onChange} />
      is {factorial}
      <button onClick={onClick}>Re-render</button>
    </div>
  );
}
