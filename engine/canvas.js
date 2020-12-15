const createCanvas = (width=640, height=480, context="2d") => {
    let canvas = document.createElement("canvas")
    canvas.setAttribute("width", width)
    canvas.setAttribute("height", height)
    document.body.appendChild(canvas)

    return {
        canvas: canvas,
        ctx: canvas.getContext(context)
    }
}

export { createCanvas as default }