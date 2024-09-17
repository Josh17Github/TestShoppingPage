
const slider = document.querySelector('.slider');
const arrowLeft = document.querySelector('.left');
const arrowRight = document.querySelector('.right');
const carousel = document.querySelector('.img-slider');

var direction;

arrowLeft.addEventListener('click', function() {
    direction = -1; 
    slider.style.transition = 'none';
    slider.prepend(slider.lastElementChild);
    
    slider.style.transform = 'translateX(-33.33%)'; 

    setTimeout(function() {
        slider.style.transition = 'all 0.5s';
        slider.style.transform = 'translateX(0)';
    });
});

arrowRight.addEventListener('click', function() {
    direction = 1;
    slider.style.transition = 'all 0.5s'; 
    slider.style.transform = 'translateX(-33.33%)'; 
});

slider.addEventListener('transitionend', function() {
    if (direction === 1) {
        slider.appendChild(slider.firstElementChild);
    }
    
    slider.style.transition = 'none';
    slider.style.transform = 'translateX(0)';

    setTimeout(function() {
        slider.style.transition = 'all 0.5s';
    });
});

