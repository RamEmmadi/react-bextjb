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

-

---

**useEffect**

---

**useRef**

---

**useLayoutEffect**

---

**useContext**

---

**useMemo**

---

**useCallback**

---
