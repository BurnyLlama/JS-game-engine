const mouse = {
    state: {
        x: 0,
        y: 0,
        click: null
    },

    init: (canvas, callback) => {
        canvas.addEventListener("contextmenu", event => event.preventDefault())

        canvas.addEventListener("mousemove", event => {
            mouse.state.x = event.layerX
            mouse.state.y = event.layerY

            callback(mouse.state)
        })

        canvas.addEventListener("mousedown", event => {
            switch (event.button) {
                case 0:
                    mouse.state.click = "left"
                    break

                case 1:
                    mouse.state.click = "middle"
                    break

                case 2:
                    mouse.state.click = "right"
                    break

                default:
                    mouse.state.click = null
                    break
            }

            callback(mouse.state)
        })
    }
}

export {mouse as default}