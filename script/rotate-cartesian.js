const cartesian = document.querySelector('.cartesian')
let moveX = 0
let moveY = 0
let rotateX = 0
let rotateY = 0

document.addEventListener('touchstart', (touch) => {
    const {
        clientX, clientY
    } = touch.touches[0]
    moveX = clientX
    moveY = clientY
})

document.addEventListener('touchmove', (touch) => {
    const {
        clientX, clientY
    } = touch.touches[0]

    if (clientX > 0) {
        rotateX -= 1
    } else {
        rotateX += 1
    }

    if (clientY > 0) {
        rotateY += 1
    } else {
        rotateY -= 1
    }

    cartesian.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
})