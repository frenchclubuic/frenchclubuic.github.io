# HTML Templates

This is the directory for a basic set of HTML templates made for the current web page. Click to expand on a template for select explanations, the code, and a screenshot example.

*v1.0.0*

<details><summary>Simple title / paragraph</summary>

```html
<h2>Title</h2>
<p>This is a sample paragraph.</p>
```

![Screenshot failed to load](https://raw.githubusercontent.com/jacobkrol/French-Club-at-UIC/master/templates/example-images/example-1.png)

</details>

<details><summary>Bold select text</summary>

```html
<p>This is an example of <strong>something</strong> in bold.</p>
```

![Screenshot failed to load](https://raw.githubusercontent.com/jacobkrol/French-Club-at-UIC/master/templates/example-images/example-2.png)

</details>

<details><summary>Italic select text</summary>

```html
<p>This is an example of <em>something</em> in italics.</p>
```

![Screenshot failed to load](https://raw.githubusercontent.com/jacobkrol/French-Club-at-UIC/master/templates/example-images/example-3.png)

</details>

<details><summary>Linking text to a website</summary>

```html
<p>Click <a href="your-site-here.com" target="_blank">here</a> to go to the site.</p>
```

![Screenshot failed to load](https://raw.githubusercontent.com/jacobkrol/French-Club-at-UIC/master/templates/example-images/example-4.png)

</details>

<details><summary>Title / multiple paragraph</summary>

```html
<h2>Title</h2>
<p>This is the first paragraph.</p>
<p>This is the second paragraph under the same tite.</p>
````

![Screenshot failed to load](https://raw.githubusercontent.com/jacobkrol/French-Club-at-UIC/master/templates/example-images/example-5.png)

</details>

<details><summary>Simple bullet list</summary>

```html
<p>This is the optional paragraph that precedes the list. An example:</p>
<ul>
    <li>First thing</li>
    <li>Second thing</li>
    <li>Third thing</li>
</ul>
```

![Screenshot failed to load](https://raw.githubusercontent.com/jacobkrol/French-Club-at-UIC/master/templates/example-images/example-6.png)

</details>

<details><summary>Simple numbered list</summary>

```html
<p>This is the optional paragraph that precedes the list. An example:</p>
<ol>
    <li>First thing</li>
    <li>Second thing</li>
    <li>Third thing</li>
</ol>
```

![Screenshot failed to load](https://raw.githubusercontent.com/jacobkrol/French-Club-at-UIC/master/templates/example-images/example-7.png)

</details>

<details><summary>Insert image below text</summary>

```html
<p>See the flyer for the event below. Upload image to GitHub first.</p>
<img src="./images/NAME-OF-PHOTO.JPG" alt="Photo failed to load" />
```

![Screenshot failed to load](https://raw.githubusercontent.com/jacobkrol/French-Club-at-UIC/master/templates/example-images/example-8.png)

</details>

<details><summary>Insert image in left corner of large paragraph</summary>

```html
<h2>Optional title for section</h2>
<img class="float-image-left" src="./images/NAME-OF-PHOTO.JPG" alt="Photo failed to load" />
<p>This is the paragraph which will flow around the image,
   keeping it in the top left corner. Upload image to GitHub first.</p>
```

![Screenshot failed to load](https://raw.githubusercontent.com/jacobkrol/French-Club-at-UIC/master/templates/example-images/example-9.png)

</details>

<details><summary>Insert image in right corner of large paragraph</summary>

```html
<h2>Optional title for section</h2>
<img class="float-image-right" src="./images/NAME-OF-PHOTO.JPG" alt="Photo failed to load" />
<p>This is the paragraph which will flow around the image,
   keeping it in the top right corner. Upload image to GitHub first.</p>
```

![Screenshot failed to load](https://raw.githubusercontent.com/jacobkrol/French-Club-at-UIC/master/templates/example-images/example-10.png)

</details>

<details><summary>Insert image to right of a small paragraph</summary>

```html
<h2>Optional title for section</h2>
<div class="content-column-container vert-align">
    <div class="content-column small-stretch-col">
        <p>This is the small paragraph to the left of the image.</p>
    </div>
    <div class="content-column passive-contain-width">
        <img src="./images/NAME-OF-PHOTO.JPG" alt="Photo failed to load" />
    </div>
</div>
```

![Screenshot failed to load](https://raw.githubusercontent.com/jacobkrol/French-Club-at-UIC/master/templates/example-images/example-11.png)

</details>

<details><summary>Insert image to left of a small paragraph</summary>

```html
<h2>Optional title for section</h2>
<div class="content-column-container vert-align">
    <div class="content-column">
        <img src="./images/NAME-OF-PHOTO.JPG" alt="Photo failed to load" />
    </div>
    <div class="content-column passive-contain-width">
        <p>This is the small paragraph to the right of the image.</p>
    </div>
</div>
```

![Screenshot failed to load](https://raw.githubusercontent.com/jacobkrol/French-Club-at-UIC/master/templates/example-images/example-12.png)

</details>

<details><summary>Column which will not wrap long lines of text, typically stand-alone</summary>

```html
<div class="content-column">
    <h2>Title</h2>

    <p>First element</p>
    <p>Second element, appearing in a new row.</p>
    <p>Final element of column.</p>
</div>
```

![Screenshot failed to load](https://raw.githubusercontent.com/jacobkrol/French-Club-at-UIC/master/templates/example-images/example-13.png)

</details>

<details><summary>Column which will wrap long lines of text, typically next to other columns</summary>

```html
<div class="content-column strict-contain-width">
    <h2>Title that will be wrapped if very long</h2>

    <p>First element that is very disruptive to other columns' space</p>
    <p>Second element</p>
    <p>Third element</p>
</div>
```

![Screenshot failed to load](https://raw.githubusercontent.com/jacobkrol/French-Club-at-UIC/master/templates/example-images/example-14.png)

</details>

<details><summary>Column which will wrap long lines of text, typically next to other columns 2</summary>

```html
<h2>Title that will not wrap unless wider than entire window</h2>
<div class="content-column strict-contain-width">
    <p>First element that is very disruptive to other columns' space</p>
    <p>Second element</p>
    <p>Third element</p>
</div>
```

![Screenshot failed to load](https://raw.githubusercontent.com/jacobkrol/French-Club-at-UIC/master/templates/example-images/example-15.png)

</details>

<details><summary>Multiple columns with one title</summary>

```html
<div class="content-column-container">
    <div class="content-column">
        <div class="content-subtitle">
            <h2>Title</h2>
        </div>

        <div class="content-column-container">
            <div class="content-column strict-contain-width">
                <p>Column 1, Element 1</p>
                <p>Column 1, Element 2</p>
                <p>Column 1, Element 3</p>
            </div>

            <div class="content-column strict-contain-width">
                <p>Column 2, Element 1</p>
                <p>Column 2, Element 2</p>
            </div>

            <div class="content-column strict-contain-width">
                <p>Column 3, Element 1</p>
                <p>Column 3, Element 2</p>
            </div>
        </div>
    </div>
</div>
```

![Screenshot failed to load](https://raw.githubusercontent.com/jacobkrol/French-Club-at-UIC/master/templates/example-images/example-16.png)

</details>

<details><summary>Multiple columns with a title for each</summary>

```html
<div class="content-column-container">
    <div class="content-column strict-contain-width">
        <div class="content-subtitle">
            <h2>Title 1</h2>
        </div>

        <p>Column 1, Element 1</p>
        <p>Column 1, Element 2</p>
        <p>Column 1, Element 3</p>

    </div>

    <div class="content-column strict-contain-width">
        <div class="content-subtitle">
            <h2>Title 2</h2>
        </div>

        <p>Column 2, Element 1</p>
        <p>Column 2, Element 2</p>

    </div>

    <div class="content-column strict-contain-width">
        <div class="content-subtitle">
            <h2>Title 3</h2>
        </div>

        <p>Column 3, Element 1</p>
        <p>Column 3, Element 2</p>

    </div>
</div>
```

![Screenshot failed to load](https://raw.githubusercontent.com/jacobkrol/French-Club-at-UIC/master/templates/example-images/example-17.png)

</details>

*v1.0.0*
