# JS Basics

## Explain "this" in JavaScript

- In order to understand <b>this</b>, one need to have clear view of funtion invocation and how it impacts the context.

### Function Invocation:

- example of function invocation:

```
function greeting(name){
  return `Hello ${name} !`;
}

const message = greeting('John');

```

- Immediate Invoked function expression:

```
const message = (function(name){
  return `Hello ${name} !`;
})('John');
console.log(message);
```
