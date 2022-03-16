import product from './product.js';

class ComponentError extends Error {
    constructor() {
        super('Такого контейнера нет на странице');
    }
}

function serve(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(product);
        }, ms);
    });
}

export default class BaseComponent {

    result = {};
    spinner;
    spinnerActive = 'none';
    errors = [];

    constructor(param) {
        this.selector = param.selector;
        this.showLoader = param.showLoader || 'true';
        this.showErrorState = param.showErrorState || 'true';
        this.selectorTotal = param.selectorTotal
        this.$el = document.querySelector(this.selector);
        this.$total = document.querySelector(this.selectorTotal);
        if (!this.$el) {
            throw new ComponentError();
        }
    }

    getComponentElement() {
        const container = document.querySelector(this.selector);
        container.classList.add(
            'container',
            'flex-wrap',
            'py-4',
            'text-center',
        )

        const startButton = document.createElement('button');
        startButton.textContent = 'Получить данные с сервера';
        startButton.classList.add('btn', 'btn-primary', 'mb-5', 'border', 'border-info', 'rounded-pill');
        this.$total.prepend(startButton);

        this.spinner = document.createElement('span');
        this.spinner.classList.add('spinner-border', 'spinner-border-sm');
        this.spinner.setAttribute('aria-hidden', 'true');
        this.spinner.style.display = 'none';

        startButton.append(this.spinner);
        return startButton;
    }

    async loadData() {
        this.result = await serve(3000);
        if (this.result.status != 200) {
            const error = new Error()
            error.statusCode = this.result.status
            if (this.showErrorState == 'true') {
                this.errors.push(error.statusCode)
            }
            throw error;
        }
        else if (this.result.count < '0' || this.result.year < '0') {
            const error = new Error()
            error.statusCode = 'данные не могут быть меньше 0'
            if (this.showErrorState == 'true') {
                this.errors.push(error.statusCode)
            }
            throw error;
        }
        else {
            return this.result;
        }
    }

    loadPage(btn) {
        this.loadData()
            .then(res => {
                this.getElement(res)
            })
            .catch(err => {
                if (this.showErrorState == 'true') {
                    this.showerror(err.statusCode)
                }
            })
            .finally(() => {
                btn.disabled = false;
                this.spinnerActive = this.spinner.style.display = 'none';
            })
    }

    showerror(err) {
        let errorContainer = document.createElement('p')
        errorContainer.classList.add('error')
        errorContainer.textContent = `Не удалось получить данные, ошибка: ${err}`
        this.$total.append(errorContainer)
        setTimeout(() => errorContainer.remove(), 2000)
    }

    getElement(data) {
        let prod = 'Марка'
        let model = 'Модель'
        let year = 'Год выпуска'
        let fieldTitle = [prod, model, year]
        let fieldsCar = ['car', 'model', 'years']
        let fieldsStyle = ['stylecar', 'stylemodel', 'styleyears']
        let fieldsProduct = [data.carProduction, data.carModel, data.year]
        for (let i = 0; i < fieldsCar.length; ++i) {
            fieldsCar[i] = document.createElement('h3')
            this.$el.append(fieldsCar[i])
            fieldsCar[i].textContent = fieldTitle[i]
            fieldsCar[i] = document.createElement('div')
            fieldsCar[i].classList.add(fieldsStyle[i])
            this.$el.append(fieldsCar[i])
            fieldsCar[i].append(fieldsProduct[i])
        }
    }

    onClickGetinfo() {
        let btn = this.getComponentElement();
        btn.addEventListener('click', () => {
            this.errors.splice(0, 1)
            if (this.showLoader == 'true') {
                this.spinnerActive = this.spinner.style.display = '';
            }
            this.$el.innerHTML = ''
            btn.disabled = true;
            this.loadPage(btn);
        })
    }
}












