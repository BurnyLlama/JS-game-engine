const keyboard = {
    pressed: {},

    init: callback => { 
        window.addEventListener("keydown", event => 
            keyboard.pressed[event.code] = true
        )

        window.addEventListener("keyup", event => {
            keyboard.pressed[event.code] = false
            callback(event.code)
        })
    },

    key: key => {
        return keyboard.pressed[key]
    }
}

export {keyboard as default}