const cartesian = document.querySelector('.cartesian')

document.addEventListener('touchmove', (touch) => {
    const {clientX, clientY} = touch.touches[0]
    
    console.log(clientX, clientY)
})