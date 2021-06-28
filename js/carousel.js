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

const moveRight = () => {
    if (position >= pictures.length - 1) {
        position = 0
        for (let i = 0; i < 3; i++) {
            carousels[i].src = pictures[position][i]
        }
        return;
    }
    position++;
    for (let i = 0; i < 3; i++) {
        carousels[i].src = pictures[position][i]
    }    
}

const moveLeft = () => {
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

rightBtn.addEventListener("click", moveRight);
leftBtn.addEventListener("click", moveLeft);