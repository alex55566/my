let formInputs = document.querySelector('.client__form');
let inputs = document.querySelectorAll('.client__info');
let name = document.querySelector('.client__name');
let surname = document.querySelector('.client__surname');
let middlename = document.querySelector('.client__middlename');
const cyrillicPattern = /^[\u0400-\u04FF\-\ ]+$/;
let btn = document.querySelector('.add__client');
btn.disabled = true;
let body = document.body;

inputs.forEach(el => el.addEventListener("focusout", () => form(el)));

inputs.forEach(el => el.addEventListener("keydown", (e) => {
    if (e.keyCode == 13) {
        form(el)
    }

}));

function form(el) {
    btn.disabled = true;

    let arrLetter = [];
    let text = el.value;
    let textOutSpace = text.trim().replace(/-{2,}/g, '-').replace(/^-|-$/g, "").replace(/ {2,}/g, " ");
    for (let i = 0; i < textOutSpace.length; ++i) {
        if (cyrillicPattern.test(textOutSpace[i])) {
            arrLetter.push(textOutSpace[i])
        }

    }
    let str = arrLetter.join('');
    let strLower = str.toLowerCase();

    function UpperFirst(str) {
        if (!str) return str;

        return str[0].toUpperCase() + str.slice(1);
    }

    let final = UpperFirst(strLower);

    el.value = final;
    check();
}

function check() {
    if (name.value.length > 0 && surname.value.length > 0 && middlename.value.length > 0) {
        let checkInputs = true;
        if (checkInputs) {
            checkButt();
        }
    }
}

function checkButt() {
    btn.disabled = false;
}

function addClietn() {
    formInputs.addEventListener('submit', event => {
        event.preventDefault();
        const clientData = document.createElement('p');
        clientData.classList.add('client_data');
        body.append(clientData);

        function createField() {

            field = [];

            let fieldInner = [surname.value, name.value, middlename.value];

            for (i = 0; i < fieldInner.length; i++) {
                field.push(document.createElement('div'));
                field[i].innerHTML = fieldInner[i];
                field[i].classList.add('form-field');
                clientData.append(field[i]);
            }
            return field;
        }
        const fields = createField();

        const [clientSurName, clientName, clientMiddleName] = fields;

        formInputs.reset();
    })
}
addClietn()