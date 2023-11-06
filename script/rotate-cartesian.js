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

    if (clientX > moveX) {
        rotateX -= 1
    } else {
        rotateX += 1
    }

    if (clientY > moveY) {
        rotateY += 1
    } else {
        rotateY -= 1
    }

    cartesian.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
})

db.addEventListener('input', (e) => {
    tp.style.transform = `translateX(50%) rotateY(${db.value}deg)`
})