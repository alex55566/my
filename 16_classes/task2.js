import BaseComponent from './task1.js'

export default class AddToCartComponent extends BaseComponent {
    getElement(data) {
        super.getElement(data)
        if (!data.count == 0) {
            this.addQuntField(data)
        }
        if (data.count == 0) {
            this.createButton(data.count)
        }
    }

    addQuntField(res) {

        if (res > '0') {
            this.numProduct = res.count
            this.fieldsProduct = res.count
        }
        if (res == '0') {
            this.numProduct = res
            this.fieldsProduct = res
        }

        this.fieldsCarTitle = document.createElement('h3')
        this.$el.append(this.fieldsCarTitle)
        this.fieldsCarTitle.textContent = 'Количество'

        this.butContainer = document.createElement('div')
        this.butContainer.classList.add('container-button')
        this.$el.append(this.butContainer)

        let butDecr = document.createElement('button')
        butDecr.classList.add('butcount')
        butDecr.textContent = '-'
        this.butContainer.append(butDecr)

        this.fieldsCar = document.createElement('div')
        this.fieldsCar.classList.add('number')
        this.butContainer.append(this.fieldsCar)
        this.fieldsCar.append(this.fieldsProduct)

        let butIncr = document.createElement('button')
        butIncr.classList.add('butcount')
        butIncr.textContent = '+'
        this.butContainer.append(butIncr)

        this.addProduct(butIncr)
        this.delProduct(butDecr)
    }

    createButton(count) {
        let btn = document.createElement('button')
        btn.classList.add('btnadd', 'btn', 'mb-5', 'border', 'rounded-pill')
        btn.textContent = 'Добавить товар в корзину'
        this.$el.append(btn)
        this.onClickAdd(btn, count)
    }

    onClickAdd(addBtn, countNum) {
        addBtn.addEventListener('click', () => {
            addBtn.remove()
            this.addQuntField(countNum)
        })
    }

    set numProduct(count) {
        this._numProduct = count;
        if (this.fieldsCar) {
            this.fieldsCar.innerHTML = count;
        }
    }

    get numProduct() {
        return this._numProduct
    }

    addProduct(butIncr) {
        butIncr.addEventListener('click', () => {
            ++this.numProduct
        })
    }

    delProduct(butDecr) {
        butDecr.addEventListener('click', () => {
            if (this.numProduct < 1) {
                this.numProduct = 0
                return
            }
            --this.numProduct
            if (this.numProduct == 0) {
                this.createButton(this.numProduct)
                this.butContainer.remove()
                this.fieldsCarTitle.remove()
            }
        })
    }
}

