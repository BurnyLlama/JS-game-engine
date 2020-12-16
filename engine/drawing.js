import Defaults from "./defaults.js"

const setProperties = (ctx, color, stroke, lineWidth) => {
    ctx.fillStyle = color
    ctx.strokeStyle = stroke ? stroke : "transparent"
    ctx.lineWidth = lineWidth
}

const init = (canvas, ctx) => {
    return {
        fill: color => {
            ctx.fillStyle = color
            ctx.fillRect(0, 0, canvas.width, canvas.height)
        },

        rect: (posx, posy, width, height, color, stroke=Defaults.stroke, lineWidth=Defaults.lineWidth) => {
            setProperties(ctx, color, stroke, lineWidth)

            ctx.fillRect(posx, posy, width, height)
            ctx.strokeRect(posx, posy, width, height) 
        },

        circ: (centerx, centery, radius, color, stroke=Defaults.stroke, lineWidth=Defaults.lineWidth) => {
            setProperties(ctx, color, stroke, lineWidth)

            let circle = new Path2D();
            circle.arc(centerx, centery, radius, 0, 2 * Math.PI, false);

            ctx.fill(circle)
            ctx.stroke(circle)
        },

        poly: (coordinates, color, stroke=Defaults.storke, lineWidth=Defaults.lineWidth) => {
            setProperties(ctx, color, stroke, lineWidth)

            ctx.beginPath()
            ctx.moveTo(coordinates[0].x, coordinates[0].y)
            coordinates.forEach(coordinate => 
                ctx.lineTo(coordinate.x, coordinate.y)
            )
            ctx.closePath()
            

            ctx.fill()
            ctx.stroke()
        },

        text: (text, posx, posy, color, stroke=Defaults.stroke, lineWidth=Defaults.lineWidth, maxWidth=false, font = { 
            family:"sans-serif", 
            size:"32",
            textAlign: "left",
            textBaseline: "center",
            direction: "ltr"
        }) => {
            setProperties(ctx, color, stroke, lineWidth)
            ctx.font = `${font.size}px ${font.family}`
            ctx.textAlign = font.textAlign
            ctx.textBaseline = font.textBaseline
            ctx.direction = font.direction

            ctx.fillText(text, posx, posy, maxWidth ? maxWidth : font.size * text.length)
            ctx.strokeText(text, posx, posy, maxWidth ? maxWidth : font.size * text.length)
        },

        image: (imageSource, dx, dy, dsx, dsy) => {
            let image = new Image()
            image.src = imageSource

            // Makes sure the image loads before drawing.
            image.addEventListener("load", event => 
                ctx.drawImage(image, dx, dy, dsx, dsy))
            
        }
    }
}

export {init as default}