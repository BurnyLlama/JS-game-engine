let loop
let lastTime

const initAnimation = (func, frames=60) => {
    (loop = (now) => {
        if (!lastTime) lastTime = now

        let deltaTime = now - lastTime
        if (deltaTime > 1000/frames - 10) {
            func(deltaTime)
            lastTime = now
        }

        requestAnimationFrame(loop)
    })()
}

export {initAnimation as default}