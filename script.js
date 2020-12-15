import createCanvas from "./engine/canvas.js"
import drawing from "./engine/drawing.js"
import animate from "./engine/update.js"
import keyboard from "./engine/keyboard.js"


const { canvas, ctx } = createCanvas()
const draw = drawing(canvas, ctx)


let color = 0

let p = {
    x: 400,
    y: 400
}

keyboard.init()

animate(() => {
    draw.fill("#FFF")

    if (color < 255) {
        draw.circ(p.x, p.y, 70, `rgb(0, 0, ${color})`)
        color += 1
    } else {
        color = 0
    }

    if (keyboard.key("KeyD")) p.x += 1
    if (keyboard.key("KeyA")) p.x -= 1

    if (keyboard.key("KeyW")) p.y -= 1
    if (keyboard.key("KeyS")) p.y += 1

})