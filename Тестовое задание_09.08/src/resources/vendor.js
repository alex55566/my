
console.log('jjjj12')
let heroSwiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 30,
    // Optional parameters
    // direction: 'vertical',
    // loop: true,
    // effect: 'fade',
    // resizeObserver: true,
    // speed: 5000,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    }
});

console.log('jjjj2')