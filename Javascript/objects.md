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
  console.log(l); // throws undefined error
}
x();

```

example to show hoisting:

```
let x = function(){
  if(true){
    console.log(v); // undefined; because though v is declared but assinged undefined value by default
    console.log(l); // throws undefined error: as l not hoisting, l is not available throws error.
    var v = 2;
    var l = 1;
  }
}
x();
```

2. What is difference between "==" and "===" ?

- "==" and "===" both are comparision operators.
- "==" compares value but not its data types. When difference datatype values are compare with "==" operator, it will convert the right value datatype to match left side datatype.
- "===" compares both datatypes and values. It won't do any datatype conversion.

example:

```
let x = function(){
  if(1 == '1'){
    console.log('== ignore the datatype ');
  }

  if(!(1==='1')){
    console.log('=== compare the datatypes also')
  }
}

x();
```

3. What is difference between "let" and "const" keywords ?

- "let" and "const" both are used to define variables. but both are used for different purposes.
- "const" variable value needs to assigned at time of declaration. Whose value cannot to be reassigned further.
- "let" variable values can be reassigned anytime.

example:

```
let l = 1;
l = 2;
console.log(l); // pritns : 2

const c = 1;
c = 2;  // throws error
console.log(c);

const h; // undefined value will be assigned to h
h=1; // throw error

const arr = [1];
arr.push(2) // as arr is a object, it will let add or remove values from arr.
console.log(arr);

```
