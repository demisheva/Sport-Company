
const sliderBtnRight = document.querySelector('.navigation .fa-arrow-circle-right');
const sliderBtnLeft = document.querySelector('.navigation .fa-arrow-circle-left');
let allSlidesList = document.querySelectorAll(".slides figure");

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
setInterval(showRightSlid, 5000);