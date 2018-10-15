import Custom from './custom'

var preventHistoryBack = function (e) {
  e.preventDefault();  
};

window.addEventListener('wheel', preventHistoryBack, { passive: false });


const scroll = new Custom({
    preload: false,
    native: false,
    direction: 'horizontal',
    section: document.querySelector('.vs-section'),
    divs: document.querySelectorAll('.vs-div')
})

scroll.init()