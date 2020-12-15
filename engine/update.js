
let loop

const initAnimation = (func) => {
    (loop = () => {
        func()
        requestAnimationFrame(loop)
    })()
}

export {initAnimation as default}