## JS Cheat sheet

https://devhints.io/js-array
https://www.shortcutfoo.com/app/dojos/javascript-arrays/cheatsheet
https://www.shortcutfoo.com/app/dojos/javascript-strings/cheatsheet

### Arrays

const list = ['a','b','c','d','e'];

```
list[1]  // => b
list.indexOf(d) // => 3
list.lastIndexOf(d) // => 3
list.includes(e) // => true
```

## Adding Items:

Immutable :

```
list.concat(['x', 'y', 'z']) // => [a, b, c, d, e, x, y, z]
```

Mutative:

```
list.push('f') //list == [a, b, c, d, e, f]
list.unshift('z') // list == [z, a, b, c, d, e]
list.splice(0, 0, 'z') // list == [z, a, b, c, d, e]
```

## Replace Items:

Mutative:

```
list.splice(2, 0, '1'); // list == ['a', 'b', '1', 'c', 'd', 'e']
```

## Subsets:

Immutable:

```
// list.slice(start, end);

list.slice(2, 5); // => ['1', 'c', 'd']
list.slice(2, 50); // => ['1', 'c', 'd', 'e']
```

Mutative:

```
list.splice(start, deletecount, [items]) : Change content of list by removing existing elements and/or adding new elements
list.splice(2, 0, 5)
```
