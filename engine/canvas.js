const createCanvas = (width=640, height=480, context="2d") => {
    let canvas = document.createElement("canvas")
    canvas.setAttribute("width", width)
    canvas.setAttribute("height", height)
    document.body.appendChild(canvas)

    return {
        canvas: canvas,
        ctx: canvas.getContext(context),
        screenshot: () => {
            const image = canvas.toDataURL("image/png")
            const download = document.createElement("a")
            
            download.setAttribute("download", "Screenshot.png")
            download.href = image
            document.body.appendChild(download)

            download.click()
            download.remove()
        }
    }
}

export { createCanvas as default }