"use strict";var inputEmail=document.querySelector(".section-form__input"),btnForm=document.querySelector(".section-form__button");function renderError(e){var t=document.querySelector(".formerror");t.innerHTML=e,setTimeout((function(){return t.innerHTML=""}),3e3)}function checkBtn(){""!=inputEmail.value?(btnForm.disabled=!1,btnForm.classList.remove("disabled")):(btnForm.disabled=!0,btnForm.classList.add("disabled"))}btnForm.disabled=!0,btnForm.classList.add("disabled"),inputEmail.addEventListener("blur",(function(){try{v8n().minLength(10).includes("@").includes(".").check(this.value),checkBtn()}catch(e){this.value="",renderError("Ошибка валидации: не соблюдается ".concat(e.rule.name)),checkBtn()}})),inputEmail.addEventListener("keydown",(function(e){if(13==e.keyCode)try{v8n().minLength(10).includes("@").includes(".").check(this.value),checkBtn()}catch(e){this.value="",renderError("Ошибка валидации: не соблюдается ".concat(e.rule.name)),checkBtn()}}));var heroSwiper=new Swiper(".swiper-container",{slidesPerView:4,slidesPerGroup:4,spaceBetween:30,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},autoplay:{delay:2e3,stopOnLastSlide:!1,disableOnInteraction:!0},breakpoints:{1:{slidesPerView:1,slidesPerGroup:1,spaceBetween:0},840:{slidesPerView:2,slidesPerGroup:2,spaceBetween:30},1150:{slidesPerView:3,slidesPerGroup:3,spaceBetween:30},1320:{slidesPerView:4,slidesPerGroup:4,spaceBetween:30}}}),popupLinks=document.querySelectorAll(".section-form__form"),body=document.querySelector("body"),unlock=!0,timeout=800;if(popupLinks.length>0)for(var _loop=function(e){var t=popupLinks[e];t.addEventListener("submit",(function(e){var n=t.id,o=document.querySelector(".".concat(n));popupOpen(o),console.log(o),e.preventDefault()}))},i=0;i<popupLinks.length;++i)_loop(i);var popupCloseIcon=document.querySelectorAll(".close-popup");if(popupCloseIcon.length>0)for(var _loop2=function(e){var t=popupCloseIcon[e];t.addEventListener("click",(function(e){popupClose(t.closest(".popup")),e.preventDefault()}))},_i=0;_i<popupCloseIcon.length;++_i)_loop2(_i);function popupOpen(e){e&&unlock&&(bodyLock(),e.classList.add("open"),e.addEventListener("click",(function(e){e.target.closest(".popup__content")||popupClose(e.target.closest(".popup"))})))}function bodyLock(){var e=window.innerWidth-document.querySelector(".section__form").offsetWidth+"px";body.style.paddingRight=e,body.classList.add("lock"),unlock=!1,setTimeout((function(){unlock=!0}),timeout)}function popupClose(e){e.classList.remove("open"),bodyUnlock()}function bodyUnlock(){setTimeout((function(){body.style.paddingRight="0px",body.classList.remove("lock")}),timeout),unlock=!1,setTimeout((function(){unlock=!0}),timeout)}document.addEventListener("keydown",(function(e){var t=document.querySelector(".popup.open");27===e.which&&null!=t&&popupClose(document.querySelector(".popup.open"))}));var observedElements=document.querySelectorAll(".allservices__card"),options={threshold:.5},inViewCallback=function(e){e.forEach((function(e){e.isIntersecting?e.target.classList.add("inview"):e.target.classList.remove("inview")}))},observer=new IntersectionObserver(inViewCallback,options);observedElements.forEach((function(e){var t=e.getAttribute("data-delay");e.style.transitionDelay=t+"ms",observer.observe(e)}));var btn=document.querySelector(".switch__state");btn.addEventListener("click",(function(e){e.preventDefault();var t=document.querySelectorAll(".card-wrapper"),n=document.querySelectorAll(".event-opacity");0===document.querySelectorAll(".opacity-card").length?(t[3].classList.toggle("hide-card"),t[4].classList.toggle("hide-card"),setTimeout((function(){n[0].classList.toggle("opacity-card"),n[1].classList.toggle("opacity-card")}),200),btn.innerHTML="Скрыть проекты"===btn.innerHTML?btn.innerHTML="Все проекты":btn.innerHTML="Скрыть проекты"):(n[0].classList.toggle("opacity-card"),n[1].classList.toggle("opacity-card"),setTimeout((function(){t[3].classList.toggle("hide-card"),t[4].classList.toggle("hide-card"),btn.innerHTML="Скрыть проекты"===btn.innerHTML?btn.innerHTML="Все проекты":btn.innerHTML="Скрыть проекты"}),300))}));var burger=document.querySelector("#burger"),menu=document.querySelector("#menu");function closeBurger(){menu.classList.toggle("opacity__menu"),burger.classList.toggle("open-menu"),burger.classList.toggle("burgeranim"),setTimeout((function(){menu.classList.toggle("is-active")}),500)}burger.addEventListener("click",(function(){null===document.querySelector(".opacity__menu")?(menu.classList.toggle("is-active"),burger.classList.toggle("open-menu"),burger.classList.toggle("burgeranim"),setTimeout((function(){menu.classList.toggle("opacity__menu")}),100)):closeBurger()}));var submenu=document.querySelectorAll(".section-header__item");document.addEventListener("keyup",(function(e){27===e.keyCode&&menu.classList.contains("is-active")&&closeBurger()})),document.addEventListener("mouseup",(function(e){menu.classList.contains("is-active")&&e.target!=burger&&closeBurger()}));var menulinks=document.querySelectorAll(".section-header__link");menulinks.forEach((function(e){e.addEventListener("click",(function(t){t.preventDefault(),document.querySelector(".link-active").classList.remove("link-active"),e.classList.add("link-active");var n=e.getAttribute("data-pagekey");document.getElementById(n).scrollIntoView({behavior:"smooth"})}))}));