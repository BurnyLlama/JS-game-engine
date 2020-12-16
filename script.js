import canvasCreate from "./engine/canvas.js"
import drawing from "./engine/drawing.js"
import update from "./engine/update.js"
import keyboard from "./engine/keyboard.js"
import sound from "./engine/sound.js"
import math from "./engine/math.js"
import mouse from "./engine/mouse.js"




const { canvas, ctx, screenshot } = canvasCreate()
const draw = drawing(canvas, ctx)


let color = 0


let p = {
    x: 400,
    y: 400
}


keyboard.init(key => {
    switch (key) {
        case "KeyQ":
            screenshot()
            break

        default:
            break
    }
})

mouse.init(canvas, event => console.log(event))


update(dt => {
    draw.fill("#FFF")
    draw.rect(0,0,canvas.width,canvas.height,"transparent","black",10)

    draw.circ(p.x, p.y, 70, `rgb(0, 0, ${color})`)

    p.x = mouse.state.x
    p.y = mouse.state.y

}, 60)