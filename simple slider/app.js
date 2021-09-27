'use strict'
const d = document
const slider = d.querySelector('.container')
const allSlides = slider.querySelectorAll('.slide')

slider.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('slide')){
        allSlides.forEach((slide) => {
            slide.classList.remove('active')
        })
        evt.target.classList.add('active')
    }
})