const audio = (src, volume=100) => {
    let sound = new Audio(src)

    sound.addEventListener("loadeddata", event => {
        sound.volume = volume/100
        sound.play()
    })

    return sound
}

export {audio as default}