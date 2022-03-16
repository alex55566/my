import './style.scss'
import { el, setChildren, mount, setAttr } from 'redom';
import v8n from "v8n";
import Inputmask from "inputmask";
import moment from 'moment';

import * as logo from './header.js'

let typeCard;
let validCard = require("card-validator");

let logocheck

const container = el('div', '');
setAttr(container, {
    style: { display: 'flex', flexDirection: 'column' },
    class: 'container',
})
setChildren(window.document.body, container);

const form = el('form', '');
setAttr(form, {
    style: { display: 'flex', flexDirection: 'column' },
    class: 'form',
})
setChildren(container, form);

function createInput() {

    let inputName = [];

    let inputPlacehold = ["Номер карты1", "Дата окончания карты", "CVC", "E-mail"];
    let inputType = ["", "", "number", "email"];

    for (let i = 0; i < inputPlacehold.length; i++) {
        inputName.push(el('input', ''));
        inputName[i].type = inputType[i];
        inputName[i].placeholder = inputPlacehold[i];
        inputName[i].classList.add('form-control');
    }
    return inputName;
}
const inputs = createInput();
setChildren(form, inputs);
const [inputNameCard, inputEndCard, inputCVC, inputEmail] = inputs;

const btn = el('button', 'Оплатить');
btn.disabled = true;
mount(container, btn);

inputEndCard.addEventListener('input', function () {
    if (this.value.length == 0) {
        this.inputmask.remove();
    }
    if (this.value.length > 1) {
        ValidationData();
    };
});

function ValidationData() {
    let endCard = new Inputmask('99/99');
    endCard.mask(inputEndCard);
};

let nameCard = new Inputmask('9999-9999-9999-9999[9999]');
nameCard.mask(inputNameCard);

inputEndCard.addEventListener('blur', function () {
    let dateAndYear = this.value.replace(/[^0-9]/g, "");
    try {
        v8n()
            .minLength(4)
            .maxLength(4)
            .check(dateAndYear);
        compareDateLogic(dateAndYear);
    } catch (ex) {
        this.value = '';
        if (typeof this.inputmask == 'object') {
            this.inputmask.remove();
            this.placeholder = 'Дата окончания карты';
        }
        checkBtn();
        renderError(`Ошибка валидации: не соблюдается ${ex.rule.name}`);
    };
});

function compareDateLogic(date) {
    let validationDate = moment(`${date.substring(0, 2)} ${date.substring(date.length, 2)}`, "MM YYYY").isValid();
    if (validationDate) {
        let totalDate = moment(`${date.substring(0, 2)} ${20 + date.substring(date.length, 2)}`, "MM YYYY")._i;
        compareDateIntime(totalDate);
    }
    else {
        renderError('Ошибка валидации: дата введена в некорректном формате');
        clearDate();
        checkBtn();
    };
};

function compareDateIntime(date) {
    let result = date.split(' ');
    let [month, year] = result;
    let inputDate = new Date(`${year}- ${month}`);
    let today = new Date();
    let todayYear = today.getFullYear();
    let todayMonth = today.getMonth();
    let todayDay = today.getDate();
    let lastdate = new Date(todayYear + 4, todayMonth, todayDay);
    if (inputDate < today) {
        renderError('Ошибка валидации: введенная дата должна быть больше текущей');
        clearDate();
        checkBtn();
        return;
    }
    if (inputDate > lastdate) {
        renderError('Ошибка валидации: дата окончания карты не может быть больше больше +4лет от текущей даты');
        clearDate();
        checkBtn();
        return;
    }
    else {
        checkBtn()
        inputEndCard.placeholder = 'Дата окончания карты';
        if (typeof inputEndCard.inputmask == 'object') {
            inputEndCard.inputmask.remove();
        };
    };
};

inputNameCard.addEventListener('blur', function () {
    let numberValidation = validCard.number(this.value);
    if (!numberValidation.isValid) {
        renderError('Ошибка имени карты: карты с данным номером не существует');
        renderTypeCard();
        this.value = '';
        checkBtn();
        checklogo()
    }
    else {
        renderTypeCard(numberValidation.card.niceType);
        renderLogo(numberValidation.card.niceType);
        checkBtn();
    };
});

inputCVC.addEventListener('blur', function () {
    try {
        v8n()
            .minLength(3)
            .maxLength(3)
            .check(this.value);
        checkBtn();
    } catch (ex) {
        this.value = '';
        renderError(`Ошибка валидации: не соблюдается ${ex.rule.name}`);
        checkBtn();
    };
});

inputEmail.addEventListener('blur', function () {
    try {
        v8n()
            .minLength(10)
            .includes("@")
            .includes(".")
            .check(this.value);
        checkBtn();
    } catch (ex) {
        this.value = '';
        renderError(`Ошибка валидации: не соблюдается ${ex.rule.name}`);
        checkBtn();
    };
});

function clearDate() {
    if (typeof inputEndCard.inputmask == 'object') {
        inputEndCard.inputmask.remove();
    }
    inputEndCard.value = '';
    inputEndCard.placeholder = 'Дата окончания карты';
};

function checkBtn() {
    if (inputEndCard.value != '' && inputNameCard.value != '' && inputCVC.value != '' && inputEmail.value != '') {
        btn.disabled = false;
    }
    else {
        btn.disabled = true;
    };
};

function renderError(err) {
    const error = el('p', `${err}`);
    setAttr(error, {
        style: { display: 'flex', flexDirection: 'column' },
        class: 'error',
    })
    mount(container, error);
    setTimeout(() => error.remove(), 3000);
};

function renderTypeCard(type) {
    if (typeof type === 'string') {
        if (typeof typeCard === 'object') {
            typeCard.remove()
        }
        typeCard = el('p', `${type}`);
        setAttr(typeCard, {
            style: { display: 'flex', flexDirection: 'column' },
            class: 'typecard',
        })
        mount(container, typeCard);
    }
    if (typeof type === 'undefined' && typeof typeCard != 'undefined') {
        typeCard.remove();
    };
};

function renderLogo(data) {
    checklogo()
    if (data === 'Mastercard') {
        mount(container, logo.masterLogo);
        logocheck = logo.masterLogo
    }
    if (data === 'Mir') {
        mount(container, logo.mirLogo);
        logocheck = logo.mirLogo
    }
    if (data === 'Visa') {
        mount(container, logo.visaLogo);
        logocheck = logo.visaLogo
    }
}

function checklogo() {
    if (typeof logocheck != 'undefined') {
        logocheck.remove()
    }
}


// 5536913973350016
// 2202202224950380
// 4622000000000000

