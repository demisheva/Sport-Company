const menuBtn = document.querySelector('.menu-btn');
const btnBurger = document.querySelector('.menu-btn-burger');
const nav = document.querySelector('.nav');
const navMenu = document.querySelector('.nav-list');

menuBtn.addEventListener('click', toggleMunu);

function toggleMunu() {
    btnBurger.classList.toggle('open');

    if (btnBurger.classList.contains('open')) {
        nav.classList.add('open');
        navMenu.classList.add('open');
    } else {
        nav.classList.remove('open');
        navMenu.classList.remove('open');
    }
}

const sliderBtnRight = document.querySelector('.navigation .fa-arrow-circle-right');
const sliderBtnLeft = document.querySelector('.navigation .fa-arrow-circle-left');
let allSlidesList = document.querySelectorAll(".slides figure");

setInterval(showRightSlid, 5000);

sliderBtnRight.addEventListener('click', showRightSlid);
sliderBtnLeft.addEventListener('click', showLefttSlid);

function showRightSlid() {
    for (let index = 0; index < allSlidesList.length; index++) {
        if (allSlidesList[index].classList.contains("show-item")) {
            if (allSlidesList[index + 1] == allSlidesList[allSlidesList.length]) {
                allSlidesList[0].classList.add("show-item");
            } else {
                allSlidesList[index + 1].classList.add("show-item");
            }
            allSlidesList[index].classList.remove("show-item");
            break;
        }
    }
}

function showLefttSlid() {
    for (let index = 0; index < allSlidesList.length; index++) {
        if (allSlidesList[index].classList.contains("show-item")) {
            if (index - 1 == -1) {
                allSlidesList[allSlidesList.length - 1].classList.add("show-item");
            } else {
                allSlidesList[index - 1].classList.add("show-item");
            }
            allSlidesList[index].classList.remove("show-item");
            break;
        }
    }
}

