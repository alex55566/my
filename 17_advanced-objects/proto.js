let list;
let listProp;
let arrBtn = [];

const container = document.getElementById('app');
container.classList.add(
    'container',
    'flex-wrap',
    'py-4',
    'text-center',
)

let form = document.createElement('form');
container.append(form);
form.classList.add('form');


let input = document.createElement('input');
input.classList.add('mb-5', 'rounded-pill', 'border-info', 'input');
input.setAttribute('placeholder', 'Наименование класса');
form.append(input);


let btn = document.createElement('button');
btn.textContent = 'Получить цепочку прототипов';
btn.classList.add('btn', 'btn-primary', 'mb-5', 'border', 'border-info', 'rounded-pill');
form.append(btn);

btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (typeof list === 'object') {
        list.remove();
    }
    if (typeof listProp === 'object') {
        listProp.remove();
    }
    if (!input.value.endsWith('.js')) {
        try {
            getProtoChain(window[input.value]);
        }
        catch (error) {
            if (error.name === 'TypeError') {
                renderError(error);
            }
            else {
                throw error;
            }
        }
    }
    else {
        loadClasses().then(resp => {
            getProtoChain(resp.Model);
        })
            .catch(err => {
                err.message = 'Ошибка при попытке импорта';
                renderError(err);
            })
    }
})

async function loadClasses() {
    let data = await import('./outerclass.js');
    return data;
}

function getProtoChain(el) {
    const arr = [];
    let parent = el;
    if (typeof el != 'function') {
        throw new TypeError('Не является функцией-конструктором');
    }
    if (typeof parent.prototype != 'undefined') {
        arr.push(parent);
    }
    while (typeof parent === 'function' && typeof parent.prototype != 'undefined') {
        parent = Object.getPrototypeOf(parent);
        arr.push(parent);
    }
    renderPage(arr);
}

function renderError(err) {
    let infoError = document.createElement('p');
    infoError.classList.add('mb-5', 'rounded-pill', 'infoerror');
    infoError.textContent = `Произошла ошибка: ${err.message}`;
    container.append(infoError);
    setTimeout(() => infoError.remove(), 3000);
}

function renderPage(data) {
    let renderArr = [];
    for (let i = 0; i < data.length - 1; ++i) {
        renderArr.push(data[i].prototype.constructor.name);
    }
    if (!input.value.endsWith('.js')) {
        let obj = data[data.length - 1].__proto__.constructor.name;
        renderArr.push(obj);
    }
    list = document.createElement('ol');
    container.append(list);

    renderArr.forEach(el => {
        let item = document.createElement('li');
        item.textContent = el;
        list.append(item);
        arrBtn.push(item);
        if (!input.value.endsWith('.js'));
        getPropsAndType(item);
    });
}

function getPropsAndType(btn) {
    btn.addEventListener('click', function () {
        arrBtn.forEach(el => el.classList.remove('active'));
        this.classList.add('active');
        if (typeof listProp === 'object') {
            listProp.remove();
        }

        listProp = document.createElement('ol');
        container.append(listProp);

        for (let prop in window[btn.textContent].prototype) {
            if (window[btn.textContent].prototype.hasOwnProperty(prop) && window[btn.textContent].prototype.propertyIsEnumerable(prop)) {
                let itemProp = document.createElement('li');
                itemProp.textContent = `${prop}, typeof: ${typeof prop}`;
                listProp.append(itemProp);
            }
        }
    })
}









