import createCanvas from "./engine/canvas.js"
import drawing from "./engine/drawing.js"
import animate from "./engine/update.js"
import keyboard from "./engine/keyboard.js"


const {canvas, ctx} = createCanvas()
const draw = drawing(canvas, ctx)


let color = 0

let p = {
    x: 400,
    y: 400
}

const keys = keyboard({
    keyA: {
        pressed: false,
        func: () => 
            console.log('Test')
    }
})


animate(() => {
    draw.fill("#FFF")

    if (color < 255) {
        draw.circ(p.x, p.y, 70, `rgb(0, 0, ${color})`)
        color += 1
    } else {
        color = 0
    }

    keys.execute(keys.actions)
})