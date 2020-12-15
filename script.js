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

keyboard.init()

const music = sound("music.mp3", 5)
music.loop = true

let mute = -1

update(() => {
    draw.fill("#FFF")
    draw.rect(0,0,canvas.width,canvas.height,"transparent","black",10)

    draw.circ(p.x, p.y, 70, `rgb(0, 0, ${color})`)

    if (keyboard.key("KeyD")) p.x += 2
    if (keyboard.key("KeyA")) p.x -= 2

    if (keyboard.key("KeyW")) p.y -= 2
    if (keyboard.key("KeyS")) p.y += 2

    if (keyboard.key("Space")) sound.play("sound.wav", 5)

    if (keyboard.key("KeyM")) {
        if (mute < 0) {
            music.muted = true
            mute *= -1
        } else {
            music.muted = false
            mute *= -1
        }
    }
    console.log(math.random(6, 1))
})