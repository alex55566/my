window.addEventListener('DOMContentLoaded', function () {

    console.log('vendor2')

    const swiper = new Swiper('.js-hero-swiper', {
        allowTouchMove: false,
        loop: true,
        effect: 'fade',
        speed: 5000,
        autoplay: {
            delay: 5000
        }
    });

    var selector = document.querySelector("input[type='tel']");

    var im = new Inputmask("+7 (999) 999 99 99");
    im.mask(selector);

    new JustValidate('.form', {
        colorWrong: '#D11616',
        rules: {
            name: {
                required: true,
                minLength: 2,
                maxLength: 20
            },
            tel: {
                required: true,
                function: (name, value) => {
                    const phone = selector.inputmask.unmaskedvalue()
                    return Number(phone) && phone.length === 10
                }
            },
            mail: {
                required: true,
                email: true,
            },
        },
        messages: {
            name: {
                required: 'Как вас зовут?',
                minLength: 'Введите верное имя',
                maxLength: 'Введите верное имя'
            },
            tel: {
                required: 'Укажите ваш телефон',
                function: 'Введите верный формат телефона'
            },
            mail: {
                required: 'Укажите ваш e-mail',
                email: 'Введите верный формат e-mail'
            }
        },
        submitHandler: function (form) {
            let formData = new FormData(form); //объект, куда попадают все данные из формы

            let xhr = new XMLHttpRequest(); //запрос, аналог ajax


            xhr.onreadystatechange = function () { //проверка статуса отправки
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        console.log('Отправлено');
                    }
                }
            }

            xhr.open('POST', 'mail.php', true); //будем отправлять запрос на mail.php методом POST
            xhr.send(formData); //передаем данные с формы 

            form.reset(); //сброс формы после отправки
        }

    });

    const select = document.querySelector('select')
    const allLang = ['ru', 'en']

    select.addEventListener('change', changeUrlLang)

    function changeUrlLang() {
        let lang = select.value
        location.href = window.location.pathname + "#" + lang
        location.reload()
    }
    function changeLang() {
        let hash = window.location.hash
        hash = hash.substr(1)
        console.log(hash)
        if (!allLang.includes(hash)) {
            location.href = window.location.pathname + "#ru"
            location.reload()
        }
        select.value = hash
        for (let key in langArr) {
            let elem = document.querySelector('.l-' + key);
            if (elem && typeof langArr[key][hash] !== 'undefined') {
                elem.innerHTML = langArr[key][hash]
            }
        }
    }
    changeLang()
})