# Javascript top questions:

**1. What is difference between "var" and "let" keywords?**

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

---

**2. What is difference between "==" and "===" ?**

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

---

**3. What is difference between "let" and "const" keywords ?**

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

---

**4. what is difference between "null" and "undefined";**

- "null" and "undefined" both represent the empty value.
- but when variable is declared but whose value not defined, JS will automatically assign "undefined" value.
- "null" something we assigned to any variable to represents it is empty.

```
typeof(undefined) => undefined.
typeof(null) => object.
```

---

**5. what is Arrow funtion & what are it uses?**

---

**6. What is prototype inheritance?**

- every object has property called prototype which can be used to add properties and methods to it. when a new object is created from it, the new object will inherit all properites and methods from parent. This way object will be much lighter and inherit existing funtionalities from parent object.

example:

```
let car = function(model){
  this.model = model;
}

car.prototype.getModel = function(){
  return this.model;
}

let toyota = new car("toyota");
console.log(toyota.getModel());

let nissan = new car("nissan");
console.log(nissan.getModel());

```

---

**7. what is the difference between function declaration & function expression ?**

- Syntatically funtion declartion will have function keyword & name. whereas function expression is an annonymous function will be stored inside a varaible.

- function declartion is available before its definition if you call. whereas function expression will be undefined before it definition.
- You can pass function express to another function as parameter, but you cannot pass function declaration as parameter.

example:

```
console.log(funD()); // will be available before it definition.
console.log(funE()); // thows undefined error: as it not available before its definition.


function funD(){
console.log("functiona declaration");
}

let funE = function(){
console.log("function expression");
}
```

---

**8. what is promises and why do we use it ?**

---

**9. What is setTimeout()?**

---

**10. What is a closure and how do you use it?**

- When a function returns a inner function which hold outer environment. Then it is called closure.

Exampel

```

let obj = function(){
  let i  = 0;

  return {
    setI(x){
      i = x;
    },
    getI(){
      return i;
    }
  }
}

let yo = obj();

yo.setI(2);
console.log(yo.getI());
yo.setI(4);
console.log(yo.getI());

```

- A simplet example would be any JS function which uses outer variable is an closure.

example:

```
let passed = 3;
function addTo(){
  let inner = 2;
  return passed + inner;
}

console.log(addTo()); // print : 5
console.dir(addTo)
```

---

**11.Difference between call(), apply() and bind()**

---


