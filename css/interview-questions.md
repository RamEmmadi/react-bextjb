# CSS Top Interview Questions

<b>Q: What is CSS Box Model ?</b>

- It is box model which wrapped around any HTML element. Which includes element Height & Width, padding, border and margin.

<b>Q: What is CSS sprite ?</b>

- CSS sprite combines multiple images into single image.

<b>Q: What is CSS preprocessor ?</b>

- Preprocessor generates css styles from preprocessor own syntax.
  ex: sass, less.
  for example these pressors will provides it own features like nested styles, variables, mixins etc. which does not exists in CSS.

<b>Q: Explain the concept of specificity in CSS?</b>

- It is the means by which browsers decide which CSS property values are most relevant to an element that will be applied.

- Order specificy from High to Low : styles attribute -> ID -> class; psuedo-class, attributes -> elements.

- when multiple declaration have same specificity, last declartion will be taken.

```

.class{
  colore: red;
}
.class{
  colore: green;
}
.class{ // this will be applied
  colore: blue;
}
```

<b>Q:What is !important?</b>

- !important used to provide more weight than normal property. It is used for overriding styles.

```
<p id="thing">Will be RED</p>
p{
  color: red !important; // this will be applied.
}
#thing{
  color: green; // this is ignored.
}
```

<b>Q: Explain difference between 'visibility : hidden' and 'display:none'?</b>

- visibility: hidden - Hides the element but occupies the space in layout.
- display:none - hides the elemnt but des not occupy space.

<b>Q: What are different ways to position certain element in CSS?</b>

- position element can be static, relative, absolute, fixed and sticky.
- static : by default elemnt will be in static position
- relative : element will position relative to parent.
- absolute : element will be removed from flow of page.
  - will position relative to closest ancestor element.
    or
  - will position relative to initial container block.
- fixed : element will be removed from flow of page.
  - will posiiton relative to viewport. And doest move when you scroll.
- sticky : hybrid of relative & fixed.

  - when it is created it will be relative to its parent. when certain condition met it will be fixed after that.

<b>Q: What does 'box-sizing : border-box' do?</b>

- This tells the browser to account for any border and padding with elements width and height.

<b>Q: What is the difference between inline, inline-block and block elements ?</b>

- block elements always starts at new line and occupies entire row.
- inline-block : elemnent does not start at new line and appears at same line with other elements
- inline-block : elements similar to inline-block elemnents. but inline-block element can have padding, margins on all four sides.

<b>Q: What is pseudo element ?</b>

- allow you to select and manipulate parts of an element.

```
p::first-line {
  color: blue;
}

p::before {
  content: ''
}

p::after {
content: url('../../media/warning.svg');
}
```

<b>Q: What is pseudo class ?</b>

- allows to select an element that is on a specific class.

```
button: hover{

}

button: active{

}
button : focus{

}

button: nth-child{

}

button: last-child{

}

button: first-child{

}

```

<b>Q: what is difference between flexbox and grid ?</b>

- flexbox is one dimensional layout to create either row or column layout.
- grid is two dimensional layout that can handle both row and column layout.
