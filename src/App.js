import React, { useState, useEffect } from 'react';
import useEffectSkipFirstRender from './useEffectSkipFirstRender';
import UserForm from './UserForm';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz !</h1>
      <p>Start editing to see some magic happen :)</p>
      {/* <UserForm /> */}
    </div>
  );
}
