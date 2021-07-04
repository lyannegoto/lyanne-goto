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
    console.log('fade in ' + new Date().getTime() / 1000)
    moveRight()
    sectionCarousel.style.opacity = "1"
}

function fadeOut() {
    console.log('fade out' + new Date().getTime() / 1000)
    sectionCarousel.style.opacity = "0"
}

const transitionTime = 2000
const pictureDisplayTime = 5000

function carouselWalk() {
    console.log(new Date().getTime() / 1000)
    setTimeout(fadeOut, pictureDisplayTime);
    setTimeout(fadeIn, pictureDisplayTime + transitionTime)
}

setInterval(carouselWalk, pictureDisplayTime + (transitionTime * 2))