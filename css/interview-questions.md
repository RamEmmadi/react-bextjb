# CSS Top Interview Questions

- What is CSS Box Model ?
  It is box model which wrapped around any HTML element. Which includes element Height & Width, padding, border and margin.

- What is CSS sprite ?
  CSS sprite combines multiple images into single image.

- What is CSS preprocessor ?
  Preprocessor generates css styles from preprocessor own syntax.
  ex: sass, less.
  for example these pressors will provides it own features like nested styles, variables, mixins etc. which does not exists in CSS.

- Explain the concept of specificity in CSS?
  It is the means by which browsers decide which CSS property values are most relevant to an element that will be applied.

  Order specificy from High to Low : styles attribute -> ID -> class; psuedo-class, attributes -> elements.

  when multiple declaration have same specificity, last declartion will be taken.

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
