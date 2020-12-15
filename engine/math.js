const math = {
    random: (int1, int2=0) => {
        return Math.floor(Math.random() * int1) + int2 
    }
}

export {math as default}