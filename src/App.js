import React, { useState, useEffect, useReducer } from 'react';
import './style.css';

function factorialOf(n) {
  console.log('factorialOf(n) called!');
  return n <= 0 ? 1 : n * factorialOf(n - 1);
}

export default function App() {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);

  const factorial = React.useMemo(() => factorialOf(number), [number]);

  const onChange = ({ target }) => {
    setNumber(target.value);
  };

  const onClick = () => {
    setInc(inc + 1);
  };

  return (
    <div>
      Factorial of
      <input type="number" value={number} onChange={onChange} />
      is {factorial}
      <button onClick={onClick}>Re-render</button>
    </div>
  );
}
