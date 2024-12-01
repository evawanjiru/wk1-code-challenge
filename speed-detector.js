function detectSpeed(speed) {
    if (speed <= 70) {
        return "OK"
    }
    if (speed > 130) {
        return "Licence suspended"
    }
    else {
        const excessSpeed = speed - 70;
        const points = Math.floor(excessSpeed/5)
        return `Points: ${points}`

    }

}

console.log(detectSpeed(90))
console.log(detectSpeed(130))
console.log(detectSpeed(140))
console.log(detectSpeed(69))