import React, { useState, useEffect, useReducer } from 'react';
import './style.css';

const initialState = {
  isRunning: false,
  time: 0,
};

function reducer(state, action) {
  if (action.type === 'start') {
    return { ...state, isRunning: true };
  } else if (action.type === 'stop') {
    return { ...state, isRunning: false };
  } else if (action.type === 'reset') {
    return { time: 0, isRunning: false };
  } else if (action.type === 'tick') {
    return { ...state, time: state.time + 1 };
  }
  return state;
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const idRef = React.useRef(0);

  useEffect(() => {
    if (!state.isRunning) return;

    idRef.current = setInterval(() => dispatch({ type: 'tick' }), 1000);

    return () => {
      clearInterval(idRef.current);
      idRef.current = 0;
    };
  }, [state.isRunning]);

  return (
    <div>
      <h1>{state.time}'s</h1>
      <button
        style={{ margin: '10px' }}
        onClick={() => dispatch({ type: 'start' })}
      >
        START
      </button>
      <button
        style={{ margin: '10px' }}
        onClick={() => dispatch({ type: 'stop' })}
      >
        STOP
      </button>
      <button
        style={{ margin: '10px' }}
        onClick={() => dispatch({ type: 'reset' })}
      >
        RESET
      </button>
    </div>
  );
}
