# CSS Top Interview Questions

<b>Q:</b> What is CSS Box Model ?

- It is box model which wrapped around any HTML element. Which includes element Height & Width, padding, border and margin.

<b>Q:</b> What is CSS sprite ?

- CSS sprite combines multiple images into single image.

<b>Q:</b> What is CSS preprocessor ?

- Preprocessor generates css styles from preprocessor own syntax.
  ex: sass, less.
  for example these pressors will provides it own features like nested styles, variables, mixins etc. which does not exists in CSS.

<b>Q:</b> Explain the concept of specificity in CSS?

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

<b>Q:</b>What is !important?

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

<b>Q:</b>Explain difference between 'visibility : hidden' and 'display:none'?

- visibility: hidden - Hides the element but occupies the space in layout.
- display:none - hides the elemnt but des not occupy space.

<b>Q:</b>What are different ways to position certain element in CSS?

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

<b>Q:</b> What does 'box-sizing : border-box' do?

- This tells the browser to account for any border and padding with elements width and height.

<b>Q:</b> What is the difference between inline, inline-block and block elements ?

- block elements always starts at new line and occupies entire row.
- inline-block : elemnent does not start at new line and appears at same line with other elements
- inline-block : elements similar to inline-block elemnents. but inline-block element can have padding, margins on all four sides.

<b>Q</b>: What is pseudo element ?

- allow you to select and manipulate parts of an element.

```
p::first-line {
  color: blue;
}
```

<b>Q</b>What is pseudo class ?

- allows to select an element that is on a specific class.

```
button: hover{

}

button: active{

}
button : focus{

}

```

<b>Q</b>what is difference between flexbox and grid ?
- flexbox is one dimensional layout to create either row or column layout.
- grid is two dimensional layout that can handle both row and column layout.
