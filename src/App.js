import React, { useState, useEffect } from 'react';
import useEffectSkipFirstRender from './useEffectSkipFirstRender';
import UserForm from './UserForm';
import './style.css';

export default function App() {
  const [count, setCounter] = useState();

  useEffect(() => {
    console.log('will run on each render cycle');
  });

  useEffect(() => {
    console.log('useEffect called');
  }, []); // same as componentDidMount

  useEffectSkipFirstRender(() => {
    console.log('will run only once when component mounted');
  });

  useEffect(() => {
    const cleanUp = () => {
      console.log('cleanup function');
    };
    return cleanUp;
  }); // same as componentWillUnmount

  return (
    <div>
      <h1>Hello StackBlitz !</h1>
      <p>Start editing to see some magic happen :)</p>
      <UserForm />
    </div>
  );
}
