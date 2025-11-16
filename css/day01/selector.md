Types of CSS You Are Using
1. External CSS (via link tag)

You include a .css file using:

<link rel="stylesheet" href="style.css">


✔ Best for large projects
✔ Keeps HTML clean

2. Inline CSS

Using the style="" attribute inside HTML:

<p style="color: red;">Hello</p>


✔ Useful for quick fixes
✘ Avoid for large styling — hard to maintain

✅ Selectors You Are Using
3. Universal Selector
* { }


✔ Applies style to every element on the page.

4. Attribute Selector
p[draggable="true"] { }


✔ Targets <p> tags that have a specific attribute.

5. Child Selector (>)
p > child { }


✔ Selects elements that are direct children of <p>.

Example:

<p>
   <span></span>  <!-- Selected -->
</p>

6. Descendant Selector
p div { }


✔ Selects every <div> inside <p> (not just direct children).

7. Group Selector
p, div, h2 { }


✔ Styles multiple selectors at once.