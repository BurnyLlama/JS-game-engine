const keyboard = (actions) => { 
    window.addEventListener("keydown", event => {
        console.log(`Debug:`, event)
        if (actions[event.code]) actions[event.code].pressed = true
        console.log(`Debug:`, actions)
    })

    window.addEventListener("keyup", event => {
        console.log(`Debug:`, event)
        if (actions[event.code]) actions[event.code].pressed = false
    })
    
    return {
        actions: actions,
        execute: (_actions) => 
            Object.keys(_actions).forEach(action =>
                _actions[action].pressed && _actions[action].func()
            )
    }
}

export {keyboard as default}