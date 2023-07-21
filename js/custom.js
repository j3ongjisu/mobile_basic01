const MainSlide = new Swiper('.main_slide', {
    loop: true,
});

const leftArrow = document.querySelector('#MainVisual .arrows .left');
leftArrow.addEventListener('click', function () {
    MainSlide.slidePrev();
});

const rightArrow = document.querySelector('#MainVisual .arrows .right');
rightArrow.addEventListener('click', function () {
    MainSlide.slideNext();
});


const proSlide = new Swiper('.pro_slide', {
    loop: true,
    slidesPerView: 1,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    spaceBetween: 30,
    pagination: {
        el: ".sbar",
        type: "progressbar",
    },

    breakpoints: {
        540: {
            slidesPerView: 4,
        }
    }

    // scrollbar: {
    //     el: ".drag",
    //     draggable: true,
    //     dragSize: 150,
    //     hide: false,
    // },

});


const mobileBtn = document.querySelector('.mobile_btn');
const GNB = document.querySelector('#gnb');
const H1 = document.querySelector('h1');

mobileBtn.addEventListener('click', function () {
    GNB.classList.toggle('on');
    H1.classList.toggle('on');
});


GNB.addEventListener('wheel', function (e) {
    if (GNB.classList.contains('on')) {
        e.preventDefault();
    }
})
