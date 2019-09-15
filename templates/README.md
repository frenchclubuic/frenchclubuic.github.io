# HTML Templates

This is the directory for a basic set of HTML templates made for the current web page. Click to expand on a template for select explanations, the code, and a screenshot example.

*v1.0.0*

## General Guide

#### Tags

The `<` and `>` characters bookend "tags," which define "elements." Examples of tags are `<p>` `<h2>` `<a>` and `<div>`. Different tags are rendered differently. While a `<p>` tag defines a paragraph element of text, a `<div>` tag is used to group other elements for styling or organization.

Most tags must be closed at the end of the element content with the same tag and a forward slash. So a paragraph element may look like `<p>Some text.</p>`.

#### Editing Content

1. Anything not inside of a tag's brackets is safe for editing/replacement.

```html
<p>You can change this, but <img src="./images/photo.png" alt="not anything inside here" /></p>
```

2. Text inside a tag's brackets is only safe for edits when in ALL CAPS.

```html
<p>You can change this, and <img src="./images/CHANGE-THIS-TOO.GIF" alt="but still not this" /></p>
```

#### Comments

If there is a section you want to leave for later, but not delete, you can comment out areas of the html. This will not be rendered. Make a comment by enclosing the area you want to hide in `<!--` and `-->`. You can also leave comments to keep everything organized or leave a note for later.

```html
<h2>Subtitle</h2>
<!-- 
<p>This is a very old bit of information.</p>
<p>It can stay here in case we want to add it back later, 
   but it will not be shown while surrounded by comment syntax</p> 
-->
<p>Upcoming surprise 1!</p> <!-- Pizza party -->
<p>Upcoming surprise 2!</p> <!-- Guest speaker on Friday -->
```

#### Indenting

Elements in an HTML page make up a "family" of sorts. There are children, parents, and siblings among them. Generally, if one element is inside of another, it is the *child* of the encompassing, *parent* element. All of the children inside together are *siblings*.

```html
<div> <!-- This is the parent element -->
    <h2>Title</h2> <!-- This is the child of the div -->
    <p>Some text.</p> <!-- This is also a child of the div, but is also a sibling of the h2 element -->
</div>
```

Notice the indenting. For every level further in we go, there is an additional tab/4-spaces added before the element. This keeps the source content organized and easier to edit and debug.

## Templates

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
