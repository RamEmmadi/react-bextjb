# ReactJS Hooks

[**useState()**](#useState)

[**useEffect()**](#useEffect)

[**useReducer()**](#useReducer)

[**useRef()**](#useRef)

[**useMemo()**](#useMemo)

[**useCallback()**](#useCallback)

[**React.memo()**](#reactMemo)

[**useContext()**](#useContext)

[**useTransition()**](#useTransition)

[**useLayoutEffect()**](#useLayoutEffect)

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
//STOP WATCH EXAMPLE

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

export default function StopWatch() {
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
};
```

---

<a name='useRef'></a>

## useRef(initialValue)

- useRef accepts one argument as the initial value and returns a reference (aka ref). A reference is an object having a special property current. There are 2 rules to remember about references:

  - The value of the reference is persisted (stays the same) between component re-renderings
  - Updating a reference doesn't trigger a component re-rendering.

- Use Case For useRef() : Logging button clicks

```
import { useRef } from 'react';
function LogButtonClicks() {
  const countRef = useRef(0);

  const handle = () => {
    countRef.current++;
    console.log(`Clicked ${countRef.current} times`); // wont trigger re-rendering
  };
  console.log('I rendered!');
  return <button onClick={handle}>Click me</button>;
}
```

- Use Case For useRef() : implementing a stopwatch

```
import { useRef, useState, useEffect } from 'react';
function Stopwatch() {
  const timerIdRef = useRef(0);
  const [count, setCount] = useState(0);
  const startHandler = () => {
    if (timerIdRef.current) { return; }
    timerIdRef.current = setInterval(() => setCount(c => c+1), 1000);
  };
  const stopHandler = () => {
    clearInterval(timerIdRef.current);
    timerIdRef.current = 0;
  };
  useEffect(() => {
    return () => clearInterval(timerIdRef.current);
  }, []);
  return (
    <div>
      <div>Timer: {count}s</div>
      <div>
        <button onClick={startHandler}>Start</button>
        <button onClick={stopHandler}>Stop</button>
      </div>
    </div>
  );
}
```

- useRef() application: Access DOM elements:

  - useRef() helps in accessing DOM elements in 3 steps:
    - Define the reference to access the element const elementRef = useRef();
    - Assign the reference to ref attribute of the element: `<div ref={elementRef}></div>;`
    - After mounting, elementRef.current points to the DOM element.

- useRef() use case : focusing an input

```
import { useRef, useEffect } from 'react';
function InputFocus() {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <input
      ref={inputRef}
      type="text"
    />
  );
}
```

- Ref is null on initial rendering : During initial rendering, the reference supposed to hold the DOM element is empty

```
import { useRef, useEffect } from 'react';
function InputFocus() {
  const inputRef = useRef();
  useEffect(() => {
    // Logs `HTMLInputElement`
    console.log(inputRef.current);
    inputRef.current.focus();
  }, []);
  // Logs `undefined` during initial rendering
  console.log(inputRef.current);
  return <input ref={inputRef} type="text" />;
}
```

---

<a name='useMemo'></a>

## useMemo(compute, dependencies)

- During initial rendering, useMemo(compute, dependencies) invokes compute, memoizes the calculation result, and returns it to the component.
- If during next renderings the dependencies don't change, then useMemo() doesn't invoke compute but returns the memoized value.
- But if dependencies change during re-rendering, then useMemo() invokes compute, memoizes the new value, and returns it. That's the essence of useMemo() hook.

```
import { useState, useMemo } from 'react';
export function CalculateFactorial() {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);
  const factorial = useMemo(() => factorialOf(number), [number]);
  const onChange = event => {
    setNumber(Number(event.target.value));
  };
  const onClick = () => setInc(i => i + 1);

  return (
    <div>
      Factorial of
      <input type="number" value={number} onChange={onChange} />
      is {factorial}
      <button onClick={onClick}>Re-render</button>
    </div>
  );
}
function factorialOf(n) {
  console.log('factorialOf(n) called!');
  return n <= 0 ? 1 : n * factorialOf(n - 1);
}
```

---

<a name='useCallback'></a>

## useCallback(fn, deps)

- useCallback will help to retain same funtion instance between the rendering cycles.
- Usually when react re-renders, funtions object are re-created on each rendering cycle. In some cases single funtion instance must be retained between the rendering cycle. such as:

  - A funtional component wrapped inside React.memo() accepts funtion object as prop.
  - When funtion object is dependency to other hooks, e.g. useEffect(...,[callback]).

- That's when useCallback is helpful.
- Good use case for useCallback():

  ```
  import useSearch from './fetch-items';

  function MyBigList({ term, onItemClick }) {
    const items = useSearch(term);
    const map = item => <div onClick={onItemClick}>{item}</div>;
    return <div>{items.map(map)}</div>;
  }

  export default React.memo(MyBigList);

  ```

  - The list could be big, maybe hundreds of items. To prevent useless list re-renderings, you wrap it into React.memo().
  - The parent component of MyBigList provides a handler function to know when an item is clicked:

  ```
  import { useCallback } from 'react';

  export function MyParent({ term }) {
    const onItemClick = useCallback(event => {
      console.log('You clicked ', event.currentTarget);
    }, [term]);
    return (
      <MyBigList
        term={term}
        onItemClick={onItemClick}
      />
    );
  }

  ```

  - onItemClick callback is memoized by useCallback(). As long as term is the same, useCallback() returns the same function object.
  - When MyParent component re-renders, onItemClick function object remains the same and doesn't break the memoization of MyBigList. That was a good use case of useCallback().

---

<a name='reactMemo'></a>

## React.memo()

- When React.memo() wraps a component, React memoizes the rendered output of the wrapped component then skips unnecessary renderings.
- React.memo() improves the performance. React.memo() is a great tool to memoize functional components. When applied correctly, it prevents useless re-renderings when the next props equal to previous ones.

- Example:

```

export function Movie({ title, releaseDate }) {
  return (
    <div>
      <div>Movie title: {title}</div>
      <div>Release date: {releaseDate}</div>
    </div>
  );
}
export const MemoizedMovie = React.memo(Movie);

// First render - MemoizedMovie IS INVOKED.
// Second render - MemoizedMovie IS NOT INVOKED.

```

**Custom equicality check for props:**

- By default React.memo() does a shallow comparison of props and objects of props. To customize the props comparison you can use the second argument to indicate an equality check function:

```
function moviePropsAreEqual(prevMovie, nextMovie) {
  return prevMovie.title === nextMovie.title
    && prevMovie.releaseDate === nextMovie.releaseDate;
}
const MemoizedMovie2 = React.memo(Movie, moviePropsAreEqual);
```

**When to use React.memo()**

- Funtional component
- Component Renders Often
- Re-render with same props.
- Component must be medium to big size

- The more often the component renders with the same props, the heavier and the more computationally expensive the output is, the more chances are that component needs to be wrapped in React.memo().

**When to avoid React.memo()**

- If the component isn't heavy and usually renders with different props, most likely you don't need React.memo()

---

<a name='useContext'></a>

## useContext()

- The context in React is a concept that lets you supply child components with global data, no matter how deep they are in the components tree. Using the context requires 3 steps: creating, providing, and consuming the context.

- Real world usecases :

  - global state
  - theme
  - application configuration
  - authenticated user name
  - user settings
  - preferred language
  - a collection of services

- Sample Code(Updates the context):

  ```
  import { createContext, useState, useContext, useMemo } from 'react';

  // context creation
  const UserContext = createContext({
  userName: '',
  //updates the context
  setUserName: () => {},
  });
  function Application() {
  const [userName, setUserName] = useState('John Smith');
  const value = useMemo(
    () => ({ userName, setUserName }),
    [userName]
  );

  // providing context
  return (
    <UserContext.Provider value={value}>
      <UserNameInput />
      <UserInfo />
    </UserContext.Provider>
  );
  }
  function UserNameInput() {
  // using context
  const { userName, setUserName } = useContext(UserContext);
  const changeHandler = event => setUserName(event.target.value);
  return (
    <input
      type="text"
      value={userName}
      onChange={changeHandler}
    />
  );
  }
  function UserInfo() {
  const { userName } = useContext(UserContext);
  return <span>{userName}</span>;
  }
  ```

---

<a name='useTransition'></a>

## useTransition()

---
