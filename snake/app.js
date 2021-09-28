const board = document.querySelector('#board')
const SQUARES_NUMBER = 600
const colors = ['#E75750', '#F8E9E2', '#D8B187', '#EA4269', '#3B978C']

for (let i = 0; i < SQUARES_NUMBER; i++){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}

function setColor(el){
    const color = getRandomColor()
    el.style.backgroundColor = color
    el.style.boxShadow = `0 0 2px ${color}` 
}

function removeColor(el){
    el.style.backgroundColor = '#1d1d1d'
    el.style.boxShadow = 'unset'
}

function getRandomColor(){
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}