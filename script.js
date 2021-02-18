const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')
// .circle because it calls the class since there is more than one

let currentActive =1

next.addEventListener('click', () => {
    currentActive++

    if(currentActive > circles.length) {
        currentActive = circles.length
    }

    update()
})

// ++ add one

prev.addEventListener('click', () => {
    currentActive--

    if(currentActive < 1) {
        currentActive = 1
    }

    update()
})

// -- subtract one

function update() {
    circles.forEach((circle, index) => {
        if(index < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    if(currentActive === 1) {
        prev.disabled = true
    } else if(currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }

}