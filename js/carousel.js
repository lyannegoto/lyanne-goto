const sectionCarousel = document.getElementById('carousel');
const carousels = document.getElementsByClassName('carousel-img');
const rightBtn = document.getElementById('right-btn');
const leftBtn = document.getElementById('left-btn');

let pictures = [
    ['./images/mana/1.jpg',
        './images/mana/3.jpg',
        './images/mana/2.jpg'],
    ['./images/familia/2.jpg',
        './images/familia/1.jpg',
        './images/familia/3.jpg'],
    ['./images/muie/1.jpg',
        './images/muie/3.jpg',
        './images/muie/2.jpg']
];

carousels[0].src = pictures[0][0]
carousels[1].src = pictures[0][1]
carousels[2].src = pictures[0][2]

let position = 0;

function moveRight() {
    if (position >= pictures.length - 1) {
        position = 0
        for (let i = 0; i < 3; i++) {
            carousels[i].src = pictures[position][i]
        }
        return
    }
    position++
    for (let i = 0; i < 3; i++) {
        carousels[i].src = pictures[position][i]
    }
}

function moveLeft() {
    if (position < 1) {
        position = pictures.length - 1
        for (let i = 0; i < 3; i++) {
            carousels[i].src = pictures[position][i]
        }
        return;
    }
    position--;
    for (let i = 0; i < 3; i++) {
        carousels[i].src = pictures[position][i]
    }
}

function fadeIn() {
    sectionCarousel.style.opacity = "1"
}

function fadeOut() {
    sectionCarousel.style.opacity = "0"
}

const transitionDuration = 400
const timeBetweenPictures = 7000

const carouselFadeOut = timeBetweenPictures - (transitionDuration*2)
const carouselFadeIn = carouselFadeOut + transitionDuration

function carouselWalk() {
    setTimeout(fadeOut, carouselFadeOut);
    setTimeout(fadeIn, carouselFadeIn);
    moveRight()
}

setTimeout(fadeOut, carouselFadeOut);
setTimeout(fadeIn, carouselFadeIn);
setInterval(carouselWalk, timeBetweenPictures)