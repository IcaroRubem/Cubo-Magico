const cartesian = document.querySelector('.cartesian')
let moveX = 0
let moveY = 0

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
        
    }
    console.log(clientX, clientY)
})