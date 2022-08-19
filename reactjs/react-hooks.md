# ReactJS Hooks

**useState**

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

**useReducer**

- useReducer similar to useState() to create local state inside funtional component. But it will be more useful when single action need to update the mulitple and complex state.

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

const ReducerTutoria = () => {

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

**useEffect()**

- useEffect() hook helps in performing the side effects such DOM manipulation, Data fetching, Subscriptions etc.
- useEffect() helps in implementing class component lifecycle events like componentDidMount, componentDidUpdate and componentWillUnmount in functional component.
- useEffect() will run on each render cycle.
- useEffect(callback, list of depnedencies to update component)

```
import React, {useState, useEffect} from 'react';

function Example(){

  const [count, setCounter] = useState();

  useEffect(()=>{
    console.log('will run on each render cycle');
  });

  useEffect(()=>{
    console.log('will run only once when component mounted');
  },[]) // same as componentDidMount

  useEffect(()=>{
    const cleanUp = () => {
      console.log('cleanup function')
    }
    return cleanUp;
  }); // same as componentWillUnmount
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
