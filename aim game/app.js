const d = document
const startBtn = d.querySelector('.start')
const allScreens = d.querySelectorAll('.screen')
const timeList = d.querySelector('.time-list')
const timeEl = d.querySelector('#time')
const board = d.querySelector('#board')

let time = 0
let score = 0

startBtn.addEventListener('click', (evt) => {
    evt.preventDefault()
    allScreens[0].classList.add('up')
})

timeList.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('time-btn')) {
        time = +(event.target.innerText.slice(0, 2))
        allScreens[1].classList.add('up')
        startGame()
    }
})

board.addEventListener('click', evt => {
    if (evt.target.classList.contains('circle')){
        score++;
        evt.target.remove();
        createRandomCircle();
    }
})



function startGame(){
    setInterval(decreaseTime, 1000)
    createRandomCircle()
    setTime(time)
}

function decreaseTime(){
    if (time === 0){
        finishGame()
    } else{
        let current = --time
    if (current < 10){
        current = `0${current}`
    }
    setTime(current)
    }
    
}

function setTime(val){
    timeEl.innerHTML = `00:${val}`
}

function finishGame(){
    timeEl.parentNode.classList.add('hide')
    board.innerHTML = `<h1>Ваш счет: <span class="primary">${score}</span></h1>`
}

function createRandomCircle(){
    const circle = d.createElement('div')
    circle.classList.add('circle')
    let size = getRandomNumber(10, 60)
    const {width, height} = board.getBoundingClientRect()
    const x = getRandomNumber(0, width - size)
    const y = getRandomNumber(0, height - size)
    circle.style.width = circle.style.height =`${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    circle.style.background = getRandomColor()
    board.append(circle)
}

function getRandomNumber(min, max){
    return Math.random() * (max - min) + min
}

function getRandomColor(){
    const colors = ['#E75750', '#F8E9E2', '#D8B187', '#EA4269', '#3B978C', '#fce005']
    return colors[Math.trunc(Math.random() * colors.length)]
}