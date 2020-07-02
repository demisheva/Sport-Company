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

const collapsapsible = document.querySelectorAll(".news-header");

console.log(collapsapsible);

collapsapsible.forEach(element =>
    element.addEventListener('click',
        function () {
            element.classList.toggle('active');
        }
    )
)


let galleryAboutUs = document.querySelectorAll('.gallery-about-us img')
let modal = document.getElementById("modal-img");
let image = document.getElementById("image");
let closeBtn = document.getElementsByClassName("close")[0];


galleryAboutUs.forEach(element => {
    element.addEventListener('click', showBigImage)
})

function showBigImage() {
    modal.style.display = "flex";
    image.src = this.src;
}

closeBtn.onclick = function () {
    modal.style.display = "none";
}