## JS Cheat sheet

https://devhints.io/js-array
https://www.shortcutfoo.com/app/dojos/javascript-arrays/cheatsheet
https://www.shortcutfoo.com/app/dojos/javascript-strings/cheatsheet

### Arrays

const list = [a,b,c,d,e];

```
list[1]  //result : b
list.indexOf(d) //result : 3
list.lastIndexOf(d) //result : 3
list.includes(e) // result: true
```

## Adding Items:

```
list.push('f') //list == [a, b, c, d, e, f]
list.unshift('z') // list == [z, a, b, c, d, e]
list.slice(0, 0, 'z') // list == [z, a, b, c, d, e]
```
