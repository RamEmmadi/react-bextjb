# ReactJS Hooks

[**useState()**](#useState)

[**useEffect()**](#useEffect)

[**useReducer**](#useReducer)

[**useRef()**](#useRef)

[**useContext()**](#useContext)

[**useMemo()**](#useMemo)

[**useCallback()**](#useCallback)

[**React.memo()**](#react-memo)

[**useLayoutEffect()**](#useLayoutEffect)

[**useTransition()**](#useTransition)

---

<a name='useState'></a>

## useState()

- useState is hook helps creating the local state inside functional component. Even between the renders state will be preserved. useState() will return two args: 1. current state value and 2. handler to update the state. Every state update will overwrite the existing state.

```
import React, { useState } from 'react';

function Example(){
  const [counter, setCounter] = useState(0);

  return(
    <div>
      <p>You have clicked {counter} times</p>
      <button onClick={()=> setCounter(counter+1)}> CLICK ME</button>
    </div>
  );
}
```

---

<a name='useEffect'></a>

## useEffect(callback, [dependencies]);

- useEffect(callback, [list of depnedencies to update component])
- useEffect() hook helps in performing the side effects such DOM manipulation, Data fetching, Subscriptions. Timers etc.
- Place side-effect logic into the callback function, then use the dependencies argument to control when you want the side-effect to run. That's the sole purpose of useEffect().
- useEffect() helps in implementing class component lifecycle events like componentDidMount, componentDidUpdate and componentWillUnmount in functional component.
- useEffect() will run on each render cycle when dependencies argument is not provided.

![useEffect flow](https://dmitripavlutin.com/d0532a1ba251b6730f64aff0a02b0925/callback-cleanup-2.svg)

```
import React, {useState, useEffect} from 'react';

function Example(){

  const [count, setCounter] = useState();

  useEffect(()=>{
    console.log('will run on each render cycle');
  });

  useEffect(()=>{
    console.log('will run twice when component mounted after React v18');
  },[]) // same as componentDidMount

  useEffect(()=>{
    const cleanUp = () => {
      console.log('cleanup function')
    }
    return cleanUp;
  },[]); // same as componentWillUnmount
}
```

**How to Solve the Infinite Loop of React.useEffect() in below example:**

- (In the below code) After initial rendering, useEffect() executes the side-effect callback that updates the state. The state update triggers re-rendering. After re-rendering useEffect() executes the side-effect callback and again updates the state, which triggers again a re-rendering. ...and so on indefinitely.

```
import { useEffect, useState } from 'react';
function CountInputChanges() {
  const [value, setValue] = useState('');
  const [count, setCount] = useState(-1);
  useEffect(() => setCount(count + 1)); // it generates an infinite loop of component re-renderings.
  const onChange = ({ target }) => setValue(target.value);
  return (
    <div>
      <input type="text" value={value} onChange={onChange} />
      <div>Number of changes: {count}</div>
    </div>
  )
}
```

- Two solutions to fix the issue:
  - Set dependencies array correctly, by passing the state variable "count".
  ```
   useEffect(() => setCount(count + 1),[count]);
  ```
  - useRef() method:
  ```
    import { useEffect, useState, useRef } from 'react';
    function CountInputChanges() {
      const [value, setValue] = useState('');
      const ref = useRef(0);
      const onChange = ({ target }) => {setValue(target.value); ref.current++ };
      return (
        <div>
          <input type="text" value={value} onChange={onChange} />
          <div>Number of changes: {ref.current}</div>
        </div>
      )
    }
  ```
- Another common recipe of an infinite loop is using an object as a dependency of useEffect(), and inside the side-effect updating that object (effectively creating a new object):

```
useEffect(() => {
  // Infinite loop!
  setObject({
    ...object,
    prop: 'newValue'
  })
}, [object]);
```

- Avoid using objects as dependencies, but stick to use a specific property only (the end result should be a primitive value):

```
useEffect(() => {
  // No infinite loop
  setObject({
    ...object,
    prop: 'newValue'
  })
}, [object.whenToUpdateProp]);
```

---

<a name='useReducer'></a>

## useReducer(reducer, initialState)

- The useReducer() hook in React lets you separate the state management from the rendering logic of the component.
- useReducer similar to useState() to create local state inside funtional component. But it will be more useful when single action need to update the mulitple and complex state object. For more simplicity & readiblity, it helps in separating statement out of component.
- useReducer() fits great with relatively complex state update (requiring at least 2-3 update actions).

![useReducer()](https://dmitripavlutin.com/5c33affee33e7c40e73028fb48a8367b/diagram.svg)

```

import React, { useReducer } from 'react';

const reducerFun = (state, action) => {
  switch(action.type){
    case "INCREMENT":
      return { count: state.count +1, showText: state.showText};

    case "TOGGLETEXT":
      return { count: state.count, showText: !state.showText};

    default:
      return state;
  }
}

const ReducerTutorial = () => {

  const [state, dispatch] = useRedcuer(reducerFun, {count: 0, showText: true});

  return (<div>
    <h1>{state.count}</h1>
    <button onClick={()=>{
      dispatch({type:"INCREMENT"});
      dispatch({type:"TOGGLETEXT"})
    }}>
      CLICK ME!
    </button>
    <button onClick={()=>{
      dispatch({type:"TOGGLETEXT"})
    }}>
      HIDE ME!
    </button>
  </div>);
}


```

---

**useRef()**

- Function Signature:

```
const refContainer = useRef(initialValue);
```

- useRef() Hook used for creating refs that gives direct access to DOM elements.
- This is more useful when working wiht forms.

```
const Example = () => {

  const textboxRef = useRef(null);

  const btnHandler = () => {
    // 'current' points to mounted text input element
    textboxRef.current.focus();
  };

  return(
    <>
      <input ref={textboxRef} type="text">
      <button onClick={btnHandler}>Focus the Box</button>
    </>
  )
}

```

---

**useLayoutEffect()**

---

**useContext()**

---

**useMemo()**

---

**useCallback()**

---
