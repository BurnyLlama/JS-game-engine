import createCanvas from "./engine/canvas.js"
import drawing from "./engine/drawing.js"
import update from "./engine/update.js"
import keyboard from "./engine/keyboard.js"
import sound from "./engine/sound.js"
import math from "./engine/math.js"



const { canvas, ctx } = createCanvas()
const draw = drawing(canvas, ctx)


let color = 0


let p = {
    x: 400,
    y: 400
}


keyboard.init(key => {
    switch (key) {
        case "KeyQ":
            console.log("One single key-stroke!")
            break

        default:
            break
    }
})


update(dt => {
    draw.fill("#FFF")
    draw.rect(0,0,canvas.width,canvas.height,"transparent","black",10)

    draw.circ(p.x, p.y, 70, `rgb(0, 0, ${color})`)

    if (keyboard.key("KeyD")) p.x += dt/10
    if (keyboard.key("KeyA")) p.x -= dt/10

    if (keyboard.key("KeyW")) p.y -= dt/10
    if (keyboard.key("KeyS")) p.y += dt/10
}, 60)