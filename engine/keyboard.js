const keyboard = {
    pressed: {},

    init: () => { 
        window.addEventListener("keydown", event => 
            keyboard.pressed[event.code] = true
        )

        window.addEventListener("keyup", event => 
            keyboard.pressed[event.code] = false
        )
    },

    key: key => {
        return keyboard.pressed[key]
    }
}

export {keyboard as default}