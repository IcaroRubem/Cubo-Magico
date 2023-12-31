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

    if (clientX > touch.target.offsetWidth / 2) {
        rotateX += 2
    } else {
        rotateX -= 2
    }

    if (clientY > touch.target.offsetHeight / 2) {
        rotateY += 2
    } else {
        rotateY -= 2
    }

    cartesian.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
})

function rotateSelf(element) {
    let rotate = element.style.transform

    //rotate = rotate != ""?Number(rotate.replace("deg",
    // "")): 0
    const a = "translateX(50%) rotateY(90deg) rotateZ(90deg)"
    const b = "translateX(50%) rotateY(90deg) rotateZ(0deg)"

    element.style.transform = rotate == a?b: a
    
}