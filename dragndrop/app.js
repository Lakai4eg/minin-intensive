'use strict'
const d = document;
const allPlaceholders = d.querySelectorAll('.placeholder')
const allItems = d.querySelectorAll('.item')

allItems.forEach((item) => {
    item.addEventListener('dragstart', dragstart);
    item.addEventListener('dragend', dragend);

    function dragstart(evt){
        evt.target.classList.add('dragged')
        setTimeout(()=>{
            evt.target.classList.add('hidden')
        }, 0)
    };

    function dragend(evt){
        evt.target.classList.remove('dragged', 'hidden')
    }
})

allPlaceholders.forEach((ph) => {
    ph.addEventListener('dragover', dragover)
    ph.addEventListener('dragenter', dragenter)
    ph.addEventListener('dragleave', dragleave)
    ph.addEventListener('drop', dragdrop)

    function dragover(evt){
        evt.preventDefault()
    }
    function dragenter(evt){
        evt.target.classList.add('hovered')
    }
    function dragleave(evt){
        evt.target.classList.remove('hovered')
    }
    function dragdrop(evt){
        if (evt.target.classList.contains('placeholder')){
            evt.target.append(d.querySelector('.dragged'))
        }
        evt.target.classList.remove('hovered')
    }
})