# JS Game Enginge

## Introduction

This is an experimental game engine written in JavaScript.
It is kind-of a side project. I would not recommend the usage of this engine
as of now.

## Features

I would like to make the engine fairly modular, so that you do not need to use all modules.
We'll see how that goes. Here are the features so far:

### Canvas

The canvas is the central part of the game engine. It is required to show contents on the screen.

**Importing:**
```js
import import createCanvas from "./engine/canvas.mjs"
```

**Usage:**
```js
const canvas = createCanvas(width, height, context)

/* 
Values (Default):
    width: Int (640)
    height: Int (480)
    context:  "2d" ("2d")   -> Might support other contexts in later versions.
*/
```

### Drawing

Here are all the features for drawing 

**Importing:**
```js
import drawing from "./engine/drawing.mjs"
```

**Initialise:**
```js
const draw = drawing(canvas, ctx)
```

**Usage:**
```js
// Fill the screen with a color:
draw.fill(color)

// Draw basic shapes:
draw.rect(posX, posY, width, height, color, [strokeColor], [strokeWidth])
draw.circ(centerX, centerY, radius, color, [strokeColor], [strokeWidth])
// Arguments in [] are optional.

// Polygons: 
draw.poly(Array[Object{x: X, y: Y}], color, [strokeColor], [strokeWidth])
//         ^-- Array of objects, where all objects have an x and a y coordinate.

// Images
draw.image(url, posX, posY, width, height)

// Text 
draw.text(text, posX, posY, color, [strokeColor], [strokeWidth], [maxWidth], [font: {family:"sans-serif", size:"32", textAlign: "left", textBaseline: "center", direction: "ltr"}])
```





## Setting up

You would set the engine up as follows:

**index.html:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title!</title>
</head>
<body>
    <script type="module" src="script.js"></script>
</body>
</html>
```

**script.js:**
```js
// Here you need to import the modules you want for the engine.
import createCanvas from "./engine/canvas.mjs"  // This module is required as it draws the canvas.
import drawing from "./engine/drawing.mjs"      // This module would be optional, it only handles drawing.

// Next, you would need to make a canvas - there are two methods:
// METHOD 1
const canvas = createCanvas()

// METHOD 2 (RECOMMENDED)
const {canvas, ctx} = createCanvas()
```

`createCanvas()` will return an object which contains the `<canvas>`-element as well as the context
of it. Therefore I would recommend deconstructing it for when you need to use them:

```js
// METHOD 1
const draw = drawing(canvas.canvas, canvas.ctx)

// METHOD 2
const draw = drawing(canvas, ctx)
```