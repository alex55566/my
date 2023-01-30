const swiper = new Swiper('.js-hero-swiper', {
    allowTouchMove: false,
    loop: true,
    effect: 'fade',
    speed: 5000,
    autoplay: {
        delay: 5000
    }
});

let burger = document.querySelector('#burger')
let menu = document.querySelector('#menu')

function closeBurger() {
    menu.classList.toggle('opacity__menu')
    burger.classList.toggle('open-menu')
    burger.classList.toggle('burgeranim')
    setTimeout(function () {
        menu.classList.toggle('is-active')
    }, 500)

}

burger.addEventListener('click', function () {
    let check = document.querySelector('.opacity__menu')
    if (check === null) {
        menu.classList.toggle('is-active')
        burger.classList.toggle('open-menu')
        burger.classList.toggle('burgeranim')
        setTimeout(function () {
            menu.classList.toggle('opacity__menu')
        }, 100)
    } else {
        closeBurger()
    }
})

let submenu = document.querySelectorAll('.section-header__item')

document.addEventListener('keyup', (e) => {
    if (e.keyCode === 27 && menu.classList.contains('is-active')) {
        closeBurger()
    }
})

document.addEventListener('mouseup', (e) => {
    if (menu.classList.contains('is-active') && e.target != burger) {
        closeBurger()
    }
})