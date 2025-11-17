Here are clean & clear NOTES for your CSS topics — perfect for revision 👇

🌈 CSS NOTES – Child Selectors, Colors, Units, Fonts & Backgrounds
✔ 1. Child Selectors
1. element > element (Direct Child Selector)

Selects only direct children.

div > p {
  color: red;
}

2. element element (Descendant Selector)

Selects any nested child (not only direct).

div p {
  color: blue;
}

✔ 2. CSS Colors
Color Types

name

color: red;


Hex

color: #ff0000;


RGB

color: rgb(255, 0, 0);


RGBA

color: rgba(255, 0, 0, 0.5);


HSL

color: hsl(0, 100%, 50%);

✔ 3. Font & Text CSS
Font-size Units
Unit	Meaning
px	fixed pixels
em	relative to parent font-size
rem	relative to root (html) font-size
%	percentage relative to parent
vw	1vw = 1% of viewport width
vh	1vh = 1% of viewport height
Examples:
font-size: 16px;
font-size: 1.2em;
font-size: 1rem;
font-size: 80%;
font-size: 5vw;
font-size: 5vh;

✔ 4. Font Family
font-family: 'Roboto', sans-serif;
font-family: 'Times New Roman', serif;
font-family: Arial, Helvetica, sans-serif;

✔ 5. Background Image
Basic
background-image: url("image.jpg");

Background Size

cover → fills entire screen (best for banners)

background-size: cover;


contain → fits inside container without cropping

background-size: contain;

Full Example
div {
  background-image: url("banner.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}