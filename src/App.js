import React, { useState, useEffect, useReducer } from 'react';
import './style.css';
import MyParent from './MyParent.js';

export default function App() {
  const [data, setData] = React.useState([]);

  const url = 'https://jsonplaceholder.typicode.com/todos';

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        if (json) {
          setData(json);
        }
      } catch (err) {
        setData([]);
        console.error(err);
      }
    };
    getData();
  }, []);

  return (
    <div>
      {/* <MyParent /> */}
      AWAIT FETCH
      <p>{JSON.stringify(data)}</p>
    </div>
  );
}
