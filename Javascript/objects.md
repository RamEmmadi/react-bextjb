# JavaScript Objects

# Javascript top questions:

1. What is difference between "var" and "let" keywords?

- "var" exists since beginning for Javascript whereas "let" was keyword introduced in ES6.
- "var" will have function scope. whereas "let" will have block scope.
- "var" will get hoisted whereas "let" not get hoisted.

example to show scope difference:

```

let x = function(){
  if(true){

    var v = 2;
    var l = 1;
  }
  console.log(v); // 2 as var will have funtion scope.
  console.log(l); // throws error
}
x();

```

example to show hoisting:

```
let x = function(){
  if(true){
    console.log(v); // undefined; because though v is declared but assinged undefined value by default
    console.log(l); // throws error: as l not hoisting, l is not available throws error.
    var v = 2;
    var l = 1;
  }
}
x();
```
