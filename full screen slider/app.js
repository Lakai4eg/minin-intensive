const d = document;
const upButton = d.querySelector('.up-button');
const downButton = d.querySelector('.down-button');
const sidebar = d.querySelector('.sidebar');
const mainSlide = d.querySelector('.main-slide');
const container = d.querySelector('.container')
const slidesCount = mainSlide.querySelectorAll('div').length;
let activeSlideIndex = 0;

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;
upButton.addEventListener('click', () => {changeSlide('up')});
downButton.addEventListener('click', () => {changeSlide('down')});

function changeSlide(direction){
    if (direction === 'up'){
        activeSlideIndex++
        if (activeSlideIndex === slidesCount){
            activeSlideIndex = 0
        }
    }
        else if (direction === 'down'){
            activeSlideIndex--;
            if (activeSlideIndex < 0){
                activeSlideIndex = slidesCount - 1
            }
        }

    const height = container.clientHeight

    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
};

