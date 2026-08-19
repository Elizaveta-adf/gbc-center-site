const reveal = document.querySelectorAll(".reveal");

function showElements(){

    reveal.forEach(element=>{

        const windowHeight=window.innerHeight;

        const elementTop=element.getBoundingClientRect().top;

        if(elementTop<windowHeight-100){

            element.classList.add("active");

        }

    });

}

window.addEventListener("scroll",showElements);

showElements();
const galleryItems=document.querySelectorAll(".gallery-item img");

const lightbox=document.querySelector(".lightbox");

const lightboxImage=document.getElementById("lightbox-image");

const closeBtn=document.querySelector(".close-lightbox");

galleryItems.forEach(img=>{

    img.addEventListener("click",()=>{

        lightbox.classList.add("active");

        lightboxImage.src=img.src;

    });

});

closeBtn.addEventListener("click",()=>{

    lightbox.classList.remove("active");

});

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        lightbox.classList.remove("active");

    }

});

const burger=document.querySelector(".burger");

const mobileMenu=document.querySelector(".mobile-menu");

burger.addEventListener("click",()=>{

    mobileMenu.classList.toggle("active");

});
// Закрытие мобильного меню после выбора пункта

const mobileMenuLinks = document.querySelectorAll(".mobile-menu a");

mobileMenuLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

        burger.classList.remove("active");

    });

});
/*================ REVIEWS SLIDER =================*/

const reviewsTrack = document.querySelector(".reviews-track");

const reviewCards = document.querySelectorAll(".review-card");

const reviewsPrev = document.querySelector(".reviews-prev");

const reviewsNext = document.querySelector(".reviews-next");

const reviewDots = document.querySelectorAll(".review-dot");

let reviewIndex = 0;


/* Количество карточек на экране */

function getReviewsPerPage() {

    if (window.innerWidth <= 700) {

        return 1;

    }

    if (window.innerWidth <= 1000) {

        return 2;

    }

    return 3;

}


/* Максимальный индекс */

function getMaxReviewIndex() {

    return Math.max(
        0,
        reviewCards.length - getReviewsPerPage()
    );

}


/* Обновление слайдера */

function updateReviews() {

    const cardsPerPage = getReviewsPerPage();

    const cardWidth =
        reviewCards[0].getBoundingClientRect().width;

    const gap =
        parseFloat(
            getComputedStyle(reviewCards[0]).marginRight
        );

    const offset =
        reviewIndex * (cardWidth + gap);

    reviewsTrack.style.transform =
        `translateX(-${offset}px)`;


    /* Обновляем точки */

    reviewDots.forEach((dot, index) => {

        dot.classList.toggle(
            "active",
            index === reviewIndex
        );

    });

}


/* Следующий */

reviewsNext.addEventListener("click", () => {

    const maxIndex = getMaxReviewIndex();

    if (reviewIndex < maxIndex) {

        reviewIndex++;

    } else {

        reviewIndex = 0;

    }

    updateReviews();

});


/* Предыдущий */

reviewsPrev.addEventListener("click", () => {

    const maxIndex = getMaxReviewIndex();

    if (reviewIndex > 0) {

        reviewIndex--;

    } else {

        reviewIndex = maxIndex;

    }

    updateReviews();

});


/* Точки */

reviewDots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        reviewIndex =
            Math.min(
                index,
                getMaxReviewIndex()
            );

        updateReviews();

    });

});


/* Пересчитываем при изменении размера */

window.addEventListener("resize", () => {

    reviewIndex =
        Math.min(
            reviewIndex,
            getMaxReviewIndex()
        );

    updateReviews();

});


/* Автоматическое переключение */

let reviewsAutoPlay = setInterval(() => {

    const maxIndex = getMaxReviewIndex();

    if (reviewIndex < maxIndex) {

        reviewIndex++;

    } else {

        reviewIndex = 0;

    }

    updateReviews();

}, 6000);

/* Первоначальная инициализация */

updateReviews();